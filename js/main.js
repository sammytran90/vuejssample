Vue.component('form-component', {
    template: '#form',
    props: ['value'],
    methods: {
<<<<<<< HEAD
      onInput: function (event) {
        this.$emit('input', event.target.value)
      }
    }
  });
  
  Vue.component('hello-component', {
    template: '#hello',
    data: function () {
      return {
        msg: 'Hello'
      }
    },
    props: ['user']
  });
  
  Vue.component('greetings-component', {
    template: '#greetings',
    data: function () {
      return {
        user: 'hero'
      }
    }
  });
  
  new Vue({
    el: '#app'
  });
=======
        onInput: function (event) {
            this.$emit('input', event.target.value)
        }
    }
});
Vue.component('content-component', {
    template: '#content',
    props: ['user']
})
Vue.component('container-component', {
    template: '#container',
    data: function () {
        return {
            user: 'hero'
        }
    }
})
new Vue({
    el: '#app'
})
>>>>>>> 7ab20560bbddeb3fd72822c9c0e164745969e5f2
