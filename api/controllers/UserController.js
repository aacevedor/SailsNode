/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
// Comand MongoDB
// db.collection.find()
// db.collection.insert()
// db.collection.findOne()
// db.collection.remove()
// db.createCollection("test")()
// db.collection.count()
// db.collection.update()
// db.collection.drop() Warning: this verb delete one collection


module.exports = {

      create: function(req, res){
        //var Nombre =

        /*User.create({name: params.name}).exec(function createCB(err,created){
          return res.json({
            notice: 'Created user with name ' + created.name
          });
        });*/
       return res.json({
          todo: 'Not implemented yet!'
        });
      },

      getusers:function(req,res){

        User.find(function(err, users) {
           return res.json(users);
        });

      },

      saveuser:function(req,res){
        User.create({"name":"Ariel Acevedo","password":"123456789"},function(err){
           return res.send("OK");
        });

      },

      updateuser:function(req,res){
        User.update({"_id":"556c8bd95b754e3c19f47891"},{"name":"Fernando"},function(err){
          if(!err){
            return res.send("OK")
          }else{
            return res.send("ERROR")
          }
        });
      },
      loginuserapp:function(req,res){

        var name = req.param('name');
        var password = req.param('password');
        console.log(name);
        console.log(password);
        //User.find({"name":name},{"password":password}
        User.find({'name':name,'password':password},function(err, users)
         {
          if(!err){
            return res.json(users)
          }else{
            return res.json("ERROR")
          } 
        });
      },
};

