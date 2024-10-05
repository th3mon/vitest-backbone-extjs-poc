import { require } from 'requirejs';

require.config({
  baseUrl: 'src',
  paths: {
    'jquery': 'path/to/jquery',    // Update with actual path
    'underscore': 'path/to/underscore', // Update with actual path
    'backbone': 'path/to/backbone', // Update with actual path
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});
