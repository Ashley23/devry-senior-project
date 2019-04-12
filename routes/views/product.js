var keystone = require('keystone');
var Types = keystone.Field.Types;
var routes = keystone.import('routes');

exports = module.exports = function (req, res) {
var view = new keystone.View(req, res);
var locals = res.locals;


// set locals
locals.section = 'product';
locals.filters = {
    product: req.params.product
}
locals.data = {
    products:[]
}

view.on('init', function(next){
var q = keystone.list('Product').model.findOne({
   key:  locals.filters.product,
  // quantity: locals.filters.product,
    })
    
    
    q.exec(function(err, result){
        locals.data.product = result;
        next(err);
    });

});

console.log(locals.section);


    view.render('product');
};