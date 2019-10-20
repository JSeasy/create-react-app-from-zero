let path = require("path")
let HtmlWebpackPlugin = require("html-webpack-plugin")
let MiniCssExtractPlugin = require("mini-css-extract-plugin")
let HappyPack = require("happypack")
let htmlWebpack = new HtmlWebpackPlugin({
    template:"./src/index.html",
    filename:"index.html"
})
let miniCssExtractPlugin =  new MiniCssExtractPlugin({
    filename:"main.css",
    chunkFilename:"asdasd.css"
})


module.exports={
  
    mode:"production",
    entry:"./src/index.js",
    devServer: {
        contentBase: path.resolve(__dirname, 'static'),
        // 提供给外部访问
      
        // 允许开发服务器访问本地服务器的包JSON文件，防止跨域
      
        // 设置热替换
        hot: true,
        // 设置页面引入
        inline: true,
        open:true
    },
    devtool:"source-map",
    output:{
        filename:"des.js",
        path:path.resolve(__dirname,"cmd"),

        chunkFilename:"build.js"
    },
    plugins:[
        htmlWebpack,
        miniCssExtractPlugin 
        
    ],
  
    module:{
        rules:[
            {
                test:/\.js$/,
                use:"babel-loader",
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader,"css-loader"],
          
            }
        ]
    }
    
}