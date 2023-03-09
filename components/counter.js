Vue.component("counter-component", {
    template: `<div class="counter">
        <button v-on:click="decrement()">-</button>
        {{counter}}
        <button v-on:click="increment()">+</button>
    </div>`,
    methods: {
        increment: function () {
            this.counter = this.counter + 1
        },
        decrement: function () {
            this.counter = this.counter - 1
        },
    },
    data: function () {
        return {
            counter: 0
        }
    }
})