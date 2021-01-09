module.exports = (req,res,next) =>{
    //o middleware consegue enviar uma variavel para todas as routes
    res.locals.umaVariavel = "uma variavel local enviada por middleware"
    next();

};