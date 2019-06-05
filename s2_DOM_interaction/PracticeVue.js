Vue.component('another-component', {
      data() {
            return {
                  title: 'Hello from another vue component!',
                  counter: 0
            }
      },
      template: `
            <div>
                  <practice-vue>Counter: {{counter}}</practice-vue>
                  <button @click="counter++">Add 1</button>
            </div>
      `
})


Vue.component('practice-vue', {
      data () {
        return {
          count: 0
        }
      },
      template:`
      <div>
      <button v-on:click="count++">
            You definitely clicked me {{ count }} times.
                  <slot></slot>
      </button>
      </div>
      `
    });

