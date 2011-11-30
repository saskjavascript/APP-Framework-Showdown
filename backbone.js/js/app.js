(function(window) {
  
  // Sets _.template to use {{ }} instead of <%= %> for interpolation
  _.templateSettings = {
    interpolate : /\{\{(.+?)\}\}/g
  };
  
  // our namespace
  APP = {
    Collections: {},
    Models: {},
    Views: {},
    Router: {}
  };
  
})(this);