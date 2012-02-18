/*
 * MODULE DEPENDENCIES
 */
 
var petStore = require('../models/pets');
var Pets = new petStore("McAwesome Pets", true);

module.exports = function(app){
    /* Params */
    
    /* Routes */
    app.get('/pets/list', function(req, res){
        Pets.list(30, function(error, data){
            if(error) return res.render('dead_pets', {title:"Your pets are dead" + Pets.PetStoreName, error:error});
            console.log(data);
            res.render('pets/list', {title: 'Your Pets ' + Pets.PetStoreName, pets:data});
        });
    });
    
    /* Catch-alls */
};