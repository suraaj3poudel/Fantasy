const proxy = require("http-proxy-middleware");


module.exports = function(app){
    app.use(
        proxy("",{
            target:"https://fantasy.premierleague.com/api",
            changeOrigin: true
        })
    )   
};