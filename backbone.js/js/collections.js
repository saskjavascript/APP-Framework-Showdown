(function(APP, Backbone) {
  
  APP.Collections.Folders = Backbone.Collection.extend({ 
    model: APP.Models.Folder,
    fetch: function() { // overridden for client data only at the moment, normally fetches from the server
      return this.reset([
        { 
          title: "Vacation 2010",
          id: "vacation-2010", 
          photos: [
            {
              id: 1,
              title: "The family at the beaches",
              caption: "its hot and sunny.",
              url: "img/vacation/1.png"
            },
            {
              id: 2,              
              title: "Mexico Awesome",
              caption: "cabana banana bawaha",
              url: "img/vacation/2.png"
            },
            {
              id: 3,              
              title: "Vacation Skiers",
              caption: "don't fall over",
              url: "img/vacation/3.png"
            },
            {
              id: 4,              
              title: "Generic Clipart",
              caption: "We has boats... and stars and circly things",
              url: "img/vacation/4.png"
            },
            {
              id: 5,              
              title: "Oh mr sun, sun ...",
              caption: "mr. golden sun...",
              url: "img/vacation/5.png"
            },
          ]
        },
        { 
          title: "Christmas 2009",
          id: "christmas-2009",
          photos: [
            {
              id: 6,                            
              title: "Oh Christmas Tree",
              caption: "Bobbles and bells and stars",
              url: "img/christmas/1.png"
            },
            {
              id: 7,                            
              title: "Ho ho ho",
              caption: "Merry Xmas",
              url: "img/christmas/2.png"
            },
            {
              id: 8,                            
              title: "Why did you pick me?",
              caption: "Peta will have a fit...",
              url: "img/christmas/3.png"
            },
            {
              id: 9,                            
              title: "Idyllic Scene",
              caption: "Where's the hot chocolate?",
              url: "img/christmas/4.png"
            },
            {
              id: 10,              
              title: "Silent Night",
              caption: "All is calm, All is bright",
              url: "img/christmas/5.png"
            },
          ]
          
        },
        { 
          title: "Grad Party",
          id: "grad-party",
          photos: [
            {
              id: 11,              
              title: "We are grads!",
              caption: "Bergita, Craig, Shantelle",
              url: "img/grad/1.png"
            },
            {
              id: 12,              
              title: "Sophie",
              caption: "She was so happy",
              url: "img/grad/2.png"
            },
            {
              id: 13,              
              title: "Hats off!",
              caption: "Pre-throw",
              url: "img/grad/3.png"
            },
            {
              id: 14,              
              title: "The Hat Throw",
              caption: "do eeeeeet",
              url: "img/grad/4.png"
            },
            {
              id: 15,              
              title: "Happy Grads",
              caption: "Michelle & Rhonda",
              url: "img/grad/5.png"
            },
          ]
        },
        { 
          title: "Cats",
          id: "cats",
          photos: [
            {
              id: 16,              
              title: "I am cat 1",
              caption: "merawr",
              url: "img/cats/1.png"
            },
            {
              id: 17,              
              title: "I am cat 2",
              caption: "merawr",
              url: "img/cats/2.png"
            },
            {
              id: 18,              
              title: "I am cat 1",
              caption: "merawr",
              url: "img/cats/3.png"
            },
            {
              id: 19,              
              title: "I am cat 1",
              caption: "merawr",
              url: "img/cats/4.png"
            },
            {
              id: 20,              
              title: "I am cat 1",
              caption: "merawr",
              url: "img/cats/5.png"
            },
          ]
        },
        { 
          title: "Dogs",
          id: "dogs",
          photos: [
            {
              id: 21,              
              title: "pals",
              caption: "woof",
              url: "img/dogs/1.png"
            },
            {
              id: 22,              
              title: "sup.",
              caption: "blanketdog",
              url: "img/dogs/2.png"
            },
            {
              id: 23,              
              title: "wicker",
              caption: "this stuff hurts",
              url: "img/dogs/3.png"
            },
            {
              id: 24,              
              title: "dude, happy",
              caption: "smile ear to ear",
              url: "img/dogs/4.png"
            },
            {
              id: 25,              
              title: "Observers",
              caption: "wtf are they doing down there?!?",
              url: "img/dogs/5.png"
            },
          ]
        }
      ]);
    } 
  });
  
  APP.Collections.Photos = Backbone.Collection.extend({
    model: APP.Models.Photo
  });
  
  APP.Folders = new APP.Collections.Folders();
  APP.Photos  = new APP.Collections.Photos();
  
})(APP, Backbone);