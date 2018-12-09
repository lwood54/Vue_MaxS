var app = new Vue({
  el: '#app',
  data: {
    pageHeading: 'Challenge: Conditionals and Lists',
    show: true,
    sports: ['basketball', 'volleyball', 'baseball', 'football'],
    literature: [
      {
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkein',
        books: '3'
      }
    ],
    extras: [{ name: 'TESTOBJECT', data: [1.67, 1.33, 0.98, 2.21] }]
  }
});
