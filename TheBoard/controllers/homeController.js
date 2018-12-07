//This is going to contain the routes or the get, put, post, and delete of our web site.
//Self Executing Anonymous function becomes a patter when working with services and controllers. more readable and modular
(function (homeController) {

    var data = require("../data");

    homeController.init = function (app) {

        app.get("/", function (req, res) {
            //res.send("<html><body><h1>Express</h1></body></html>");  //the response now has helpers. send is a helper function to avoid write and end, get you there a little bit quicker.

            data.getNoteCategories(function (err, results) {

                res.render("index", { title: "Express + Vash", error: err, categories: results });

            }); 
        });
    };

})(module.exports);