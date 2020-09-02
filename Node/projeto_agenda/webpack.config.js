const path = require('path'); //CommonJS

module.exports = {
    mode:'production',
    entry:'./frontend/main.js',
    output:{ 
        path: path.resolve(__dirname, 'public','assets','js'),
        filename:'bundle.js'},
    module:{
        rules:[{
            exclude: /node_modules/,
            test:/\.js$/,
            use:{
                loader:'babel-loader',
                options: {
                    presets:[["@babel/preset-env", {
                        useBuiltIns: "usage", // or "entry"
                        corejs: 3
                      }]]
                }
            }
        },{
            test:/\.css$/,
            use:['style-loader','css-loader']
        }]
    },
    devtool:'source-map'
};
