(function(APP, Backbone) {
  
  APP.PhotoViewer = Backbone.Router.extend({
    initialize: function() {
      // create our views
      this.folderListView = new APP.Views.FolderList({ collection: APP.Folders });
      this.photoListView =  new APP.Views.PhotoList({ collection: APP.Photos });
      // fetch data for the folder view
      this.folderListView.collection.fetch();
    },
    
    routes: {
      '/photos/zoom/:photo' :  'viewPhoto',
      '/photos/:folder'     :  'openFolder'
    },
    
    viewPhoto: function(photo) {
      var photo = APP.Photos.get(photo);
      new APP.Views.PhotoDetail({ model: photo }).render();
    },
    
    openFolder: function(folder) {
      var folder = APP.Folders.get(folder);
      this.folderListView.openFolder(folder);
      this.photoListView.collection.reset(folder.get("photos"));
    }
  });
  
})(APP, Backbone);