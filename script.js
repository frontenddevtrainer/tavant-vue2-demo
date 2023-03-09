const application = new Vue({
    el: "#application",
    // Binded to template
    data : {
        message : "hello world!!!",
        people: [
            {
                name: "abc",
                age: "20",
                isAdmin: true
            },
            {
                name: "def",
                age: "25"
            },
            {
                name: "xyz",
                age: "30",
                isAdmin: true
            }
        ]
    }
})
