let vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'Vue Instance 1'
  }
});

let vm2 = new Vue({
  el: '#app2',
  data: {
    title: '2nd Vue Instace: Same Page',
    btnTxt: ''
  },
  methods: {
    onChange: function() {
      vm1.title = 'Changed!';
    },
    changeButton: function() {
      vm2.$refs.changeableButton.innerText = 'Changed Text';
      this.btnTxt = 'Changed Text';
    }
  },
  computed: {
    buttonName: function() {
      console.log(this.btnTxt);

      return this.title;
    }
  },
  watch: {
    btnTxt: function() {
      let vm = this;
      let textWatch = vm.$refs.changeableButton.innerText;
      console.log(vm.$refs.changeableButton.innerText);
      setTimeout(function() {
        vm.$refs.changeableButton.innerText = 'Change something in Vue 1';
        vm.btnTxt = '';
      }, 3000);
    }
  }
});

let vm3 = new Vue({
  template: '<h1>Hello from Template!</h1>'
});

vm3.$mount('#app3');
