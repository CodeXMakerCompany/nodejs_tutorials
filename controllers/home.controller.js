//En nuestro controlador
exports.home = (req, res) =>{
    //Renderizamos la vista de nuestro index pasando como parametro el nombre de nuestro html template
    res.render('index');
}