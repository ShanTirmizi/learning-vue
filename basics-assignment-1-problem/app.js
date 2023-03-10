const app = Vue.createApp({
  data() {
    return {
      age: 23,
      name: 'shan',
      link: "https://fastly.picsum.photos/id/793/200/300.jpg?hmac=MOZTy7CEiCptTmTIOiss-6dGsFhhfJPMTKyTgyR12hw",
      nameValue: "hello"
    };
  },
  methods: {
    addAge() {
      return this.age + 5;
    },
    randomNumber01() {
      // return a ramdom number between 0 and 1
      return Math.random();
    }
  },
});

app.mount('#assignment');