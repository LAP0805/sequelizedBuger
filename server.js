const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const path= require("path")
const db= require("./models")
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, 'public')));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const handlebars = require("express-handlebars");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require("./controllers/burger_controllers.js")(app);

db.sequelize.sync({force:true}).then(function(){
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  })
})