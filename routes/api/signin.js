/*var keystone = require('keystone');
function signin(req, res) {
  
    if (!req.body.username || !req.body.password) return res.json({ success: false });
    
    keystone.list('User').model.findOne({ email: req.body.username }).exec(function(err, user) {
      
      if (err || !user) {
        return res.json({
          success: false,
          session: false,
          message: (err && err.message ? err.message : false) || 'Sorry, there was an issue signing you in, please try again.'
        });
      }
      
      keystone.session.signin({ email: user.email, password: req.body.password }, req, res, function(user) {
        
        return res.json({
          success: true,
          session: true,
          date: new Date().getTime(),
          userId: user.id
        });
        
      }, function(err) {
        
        return res.json({
          success: true,
          session: false,
          message: (err && err.message ? err.message : false) || 'Sorry, there was an issue signing you in, please try again.'
        });
        
      });
      
    });
} */