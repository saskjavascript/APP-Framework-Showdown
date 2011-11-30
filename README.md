app-showdown (super-photos!)
============================

This is an attempt to showcase a number of different approaches to a "fat client" application built using popular client-side app libraries like Backbone.JS and YUI APP.

## SuperPhotos!

SuperPhotos! is a simple application that provides an interface to allow users to open folders of photos and preview those photos in a fullscreen mode.

![superphotos!](https://github.com/davemo/saskjavascript/raw/app-showdown/img/super.photos.png)

## Architecture/Interaction Notes

Build the app in the client-side framework of your choice while keeping the following interaction notes in mind:

- user clicks folder, grid of image thumbnails is displayed
- user clicks image, full screen preview of image is displayed
- user hovers image, a caption for the image appears
- any click interaction triggers a client-side "route" to allow for back button navigation