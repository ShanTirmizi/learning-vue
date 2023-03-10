const app =  Vue.createApp({
  data() {
    return {
      message: 'Hello world',
      message2: 'Not hello world',
      link: 'https://google.com'
    };
  },
  methods: {
    testOutput() {
      const getramdom = Math.random()
      if (getramdom < 0.5) {
        return this.message
      } else {
        return this.message2
      }
    }
  }
})
app.mount('#user-goal')
