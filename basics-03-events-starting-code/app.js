const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    add() {
      this.counter = this.counter + 1;
    },
    reduce() {
      this.counter = this.counter - 1;
    },
    updateName(event) {
      this.name = event.target.value;
    },
    submitForm(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
      // alert('Submitted!');
    },
    updateName() {
      console.log(this);
      this.confirmedName = this.name;
    }

  },
});


app.mount('#events');
