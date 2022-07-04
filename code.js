const form = Vue.createApp({
    template: `
    <div id="form">
    <form onsubmit="event.preventDefault()"><br>
    <label>Name:</label>
    <input type="text" placeholder="Enter your name... " v-model="name"/><br><br>
    <label>Surname:</label>
    <input type="text" placeholder="Enter your surname" v-model="surname"/><br><br>
    <label>Age:</label>
    <input type="number" v-model="age"/><br><br>
    <button v-on:click="display">Submit</button>
    <p v-if="isVisiable && !underAge">you are of age</p>
    <p v-if="isVisiable && underAge">you are not of age</p>
    </form>
    </div>
    `,
    data: function(){
        return {
            name : "",
            surname :"",
            age : "",
            isVisiable: false,
            underAge: true,
        }
    },
    methods: {
        display() {
            if(!this.isVisiable){
                this.isVisiable = !this.isVisiable;
            }
            if (this.age>17){
                this.underAge = false
            }
            else{
                this.underAge = true
            }
        }
    }
});

form.mount("#form");
