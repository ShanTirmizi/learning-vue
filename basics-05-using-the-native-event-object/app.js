const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetForm() {
      this.name = '';
    },
    outputFullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Tirmizi';
    }
  }
});

app.mount('#events');