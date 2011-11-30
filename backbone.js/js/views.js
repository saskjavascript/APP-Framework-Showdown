(function(APP, Backbone) {

  // First, we need a view that knows how to render a list of folders
  APP.Views.FolderList = Backbone.View.extend({
    el: ".sidebar .folders",
    
    initialize: function() {
      _.bindAll(this);
      this.collection.bind('add',   this.renderFolder);
      this.collection.bind('reset', this.renderAllFolders);
      this.collection.bind('open:folder', this.openFolder);
    },
    
    openFolder: function(folder) {
      this.collection.each(function(f) {
        f.set({open: f == folder}); // we only want to open the one that matches, "closing" all the others
      });
    },
    
    renderAllFolders: function(folders) {
      folders.each(this.renderFolder);
    },
    
    renderFolder: function(folder) {
      var view = new APP.Views.Folder({
        model: folder,
        collection: this.collection
      });
      $(this.el).append(view.render().el);
    }
    
  });
  
  // Then, we need an individual view that represents each folder
  APP.Views.Folder = Backbone.View.extend({
    tagName: "li",      
    className: "folder",
    template: _.template('<span class="icon"></span><span class="title">{{ title }}</span>'),
    
    events: {
      'click' : 'open'
    },
    
    initialize: function() {
      _.bindAll(this);
      this.model.bind('change:open', this.updateState);
    },
    
    render: function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    },
    
    open: function() {
      Backbone.history.navigate("/photos/" + this.model.get("id"));
      this.collection.trigger("open:folder", this.model);
    },
    
    updateState: function(model, open) {
      $(this.el).toggleClass("open", open);
      if(open) {
        APP.Photos.reset(this.model.get("photos"));
      }
    }
  });
  
  APP.Views.PhotoList = Backbone.View.extend({
    el: ".folder-contents",
    
    initialize: function() {
      _.bindAll(this);
      this.collection.bind('add', this.renderPhoto);
      this.collection.bind('reset', this.renderAllPhotos);
    },
    
    renderAllPhotos: function(photos) {
      $(this.el).html("");
      photos.each(this.renderPhoto);
    },
    
    renderPhoto: function(photo) {
      var view = new APP.Views.Photo({model: photo});
      $(this.el).append(view.render().el);
    }
  });
  
  APP.Views.Photo = Backbone.View.extend({
    tagName: "li",
    className: "thumbnail",
    template: _.template('<img src="{{ url }}" alt="{{ title }}" />'),
    
    events: {
      'click' : 'openPhotoDetail'
    },
    
    initialize: function() {
      _.bindAll(this);
    },
    
    render: function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    },
    
    openPhotoDetail: function() {
      Backbone.history.navigate("/photos/zoom/" +  this.model.get("id"));
      new APP.Views.PhotoDetail({ model: this.model }).render();
    }
  });
  
  APP.Views.PhotoDetail = Backbone.View.extend({
    el: "#photo-detail",
    
    template: _.template($("#photo-detail-template").html()),
    
    initialize: function() {
      _.bindAll(this);
    },
    
    render: function() {
      $(this.el).hide();
      $(this.el).html(this.template(this.model.toJSON()));
      $(this.el).modal({ show: true, backdrop: true });
    }
    
  });
  
})(APP, Backbone);