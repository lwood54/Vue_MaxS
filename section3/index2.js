var app = new Vue({
  el: '#app',
  data: {
    pageHeading: 'Lists using Vue JS',
    ingredients: ['meat', 'fruit', 'cookies'],
    persons: [
      { name: 'Logan', age: 36, color: 'blue' },
      { name: 'Tiffany', age: 'unkown', color: 'lime green' }
    ]
  }
});
