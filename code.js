const form = Vue.createApp({
    template: `
    <div id="form">
    <form><br>
    <label>Name:</label>
    <input type="text" placeholder="Enter your name... " v-model="name"/><br><br>
    <label>Surname:</label>
    <input type="text" placeholder="Enter your surname" v-model="surname"/><br><br>
    <label>Age:</label>
    <input type="number" placaeholder="Enter your age" v-model="age"/><br><br>
    <button v-on:click="display">Submit</button>
    <p v-if="isVisiable">you are of age</p>
    <p v-if="!isVisiable">you are not of age</p>
    </form>
    </div>
    `,
    data: function(){
        return {
            name : '',
            surname :'',
            age : '',
            isVisiable: true,
            underAge: false,
            ofAge: 18
        }
    },
    methods: {
        display(e) {
            e.preventDefault;
            this.isVisiable = !this.isVisiable;
            if (age>17){
                underAge = false
            }else if (age=18){
                ofAge = true
            }else{
                underAge = true
            }
        }
    }
});

form.mount("#form");
