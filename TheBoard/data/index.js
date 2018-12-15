//Again, Self-executing anonymous function.
(function (data) {

    var seedData = require("./seedData");

    //create a function getNoteCategories.
    data.getNoteCategories = function (next) {
        next(null, seedData.initialNotes);
    };

})(module.exports);