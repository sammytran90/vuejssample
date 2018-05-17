Vue.component('form-component', {
    template: '#form',
    props: ['value'],
    methods: {
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