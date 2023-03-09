Vue.component("people-listing-component", {
    template: `<ul>
                    <li v-for="person in people">
                        <label>{{person.name}}</label><strong v-if="person.isAdmin">Im Admin</strong>
                        <span>{{person.age}}</span>
                        <counter-component></counter-component>
                    </li>
                </ul>`,
    data: function () {
        return {
            people: [
                {
                    name: 'abc',
                    age: 21,
                    isAdmin: true
                },
                {
                    name: 'def',
                    age: 32,
                    isAdmin: false
                },
                {
                    name: 'xyz',
                    age: 45,
                    isAdmin: true
                }
            ]
        }
    }
})