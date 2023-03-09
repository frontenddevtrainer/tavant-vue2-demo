Vue.component("header-component", {
    template: `<div class="header">{{companyname}}</div>`,
    data: function(){
        return {
            companyname : "Tavant"
        }
    }
})