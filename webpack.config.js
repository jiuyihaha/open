const htmlwebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin=require('vue-loader/lid/plugin')

module.exports = {
    entry:'./main.js',
    output:{
        path:__dirname,
        filename:'bundle.js',
    },
    resove:{
        alias:{
            'vue':'vue/dist/vue.js'
        },
        devServer:{
            historyApiFallback:true
        }
    },

    module:{
        rules:[{
            test:/\.vue$/,
            use:'vue-loader'
        },
        {test:/\.css$/,
        use:['style-loader','css-loader']
        },
        {test:/\.less$/,
        use:['style-loader','css-loader','saa-loader']
        },
        {
            test:/\.(jpg|png|gif|bmp|jpeg)$/,
            use:'url-loader'
        },
        {test:/\.(ttf|eot|svg|woff|woff2|)$/,
        use:'url-loader'}
    ]
    },
    plugins:[
        new htmlwebpackPlugin({
            template:'index.html'
        }),
        new VueLoaderPlugin()
    ]
}