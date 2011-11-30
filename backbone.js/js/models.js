(function(APP, Backbone) {
    
  APP.Models.Photo = Backbone.Model.extend({
    defaults: {
      title: "Cats Rule",
      caption: "merawr",
      url: "img/cats/157.jpeg"
    }
  });
  
  APP.Models.Folder = Backbone.Model.extend({
    defaults: {
      title: "Zomg Folder Title",
      open: false,
      photos: new (Backbone.Collection.extend({
        model: APP.Models.Photo
      }))()
    },
    
    isOpen: function() {
      return this.attributes.open;
    }
  });
    
})(APP, Backbone);