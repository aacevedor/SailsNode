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

      getusers:function(req,res){

        User.find(function(err, users) {
           return res.json(users);
        });

      },

      /*Pruebas*/
      query:function(req,res){

        var sql="SELECT * FROM user where username ='aacevedo';";
        User.query(sql, function(err, users) {
          if(!err){
            return res.json(users)
          }else{
            return res.json("ERROR")
          } 
        });
      }
      /*Pruebas*/
};

