"use strict";

var elixir = require('laravel-elixir');
//require("laravel-elixir-webpack-advanced");

elixir.ready(function () {
    elixir.config.js.webpack.loaders.push({ test: /\.html$/, loader: 'raw' });
    // note - by default NODE_ENV == 'production'
    // thus locally you should run `NODE_ENV=local gulp; NODE_ENV=local gulp watch`
    if (process.env.NODE_ENV != 'production') {
        elixir.config.js.uglify.options.compress.drop_console = false;
    }
});


elixir(function (mix) {

    mix.webpack('index.js');    
    
    
    mix.version([
        'js/index.js',
    ]);
});