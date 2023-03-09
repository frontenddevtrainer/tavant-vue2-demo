Vue.component("counter-component", {
    template: `<div class="counter">
        <button v-on:click="decrement()">-</button>
        {{counter}}
        <button v-on:click="increment()">+</button>
        <input v-model="text" type="text" v-on:keyup.delete="deleteText()"/>
    </div>`,
    methods: {
        increment: function () {
            this.counter = this.counter + 1
        },
        decrement: function () {
            this.counter = this.counter - 1
        },
        deleteText: function(){
            this.text = "";
        }
    },
    data: function () {
        return {
            counter: 0,
            text: "hello"
        }
    }
})