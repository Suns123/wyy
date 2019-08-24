const proxy =require("http-proxy-middleware");

module.exports=(app)=>{
    app.use(proxy("/wyy",{
        target:"http://localhost:4000",
        changeOrigin:true,
        pathRewrite:{
            "^/wyy":""
        }

    }))
}