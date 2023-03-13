const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  // This is like use effect but for Vue
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function() {
          that.counter = 0;
        }, 2000);
      }
    }
  },
  // Dont get useless re render  ( Computed are like useMemo)
  computed:{
    fullname() {
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Tirmizi';
    }
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
