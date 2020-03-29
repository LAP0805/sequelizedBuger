const db = require("./../models");


module.exports = function (app) {
    app.get("/", function (req, res) {
        db.burger.findAll({}).then(function (data1) {
            db.Customer.findAll({}).then(function (data2) {
                res.render("index", {
                    burgers: data1,
                    customer: data2
                })
            }).catch(function (error) {
                res.json(error)
            })

        }).catch(function (error) {
            res.json(error)
        });

    })

    app.post("/api/burgers", function (req, res) {
        db.burger.create(req.body).then(function (results) {
            res.json(results)
        }).catch(function (error) {
            res.json(error)
        })
    })

    app.put("/api/burgers/:id", function (req, res) {
        db.burger.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(function (results) {
            console.log(results);
            res.end();
        }).catch(function (error) {
            res.json(error)
        })

    });
    //customer stuff//
    app.post("/api/customers", function (req, res) {
        db.Customer.create(req.body).then(function (results) {
            res.json(results)
        }).catch(function (error) {
            res.json(error)
        })
    })
}