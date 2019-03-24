const db = require("./../models");


module.exports= function(app){
app.get("/", function(req,res){
    db.burger.findAll({}).then(function(data){
        console.log(data)
        res.render("index", {burgers:data})
       
    }).catch(function(error){
        res.json(error)
    }
    )
})

app.post("/api/burgers", function(req,res){
    db.burger.create(req.body).then(function(results){
        console.log(results)
        res.end();
    }).catch(function(error){
        res.json(error)
    })
})

app.put("/api/burgers/:id", function(req, res){
   db.burger.update(req.body, {where: {id:req.params.id}}).then(function(results){
       console.log(results);
       res.end();
   }).catch(function(error){
       res.json(error)
   })
   
})
}


