const {createApp} = Vue;

 createApp({

    data(){
        return{
            error : false,
            newTask : "",
            playInterval : "",
            tasks: [
              { 
                text: 'Fare i compiti', 
                done: false 
              }, 
              { 
                text: 'Fare la spesa', 
                done: true 
              }, 
              { 
                text: 'Fare il bucato', 
                done: false 
              }
              ]
           
        }
    
    },
    methods:{
        addTask(){
        if(this.newTask.length < 5 || this.newTask === ""){
          this.error = true
        }
        else{
          this.tasks.unshift({
            text: this.newTask,
            done:false
          })
          this.error = false

        }
         
        this.newTask = ""
         
        },
        deleteTask(index){
          this.tasks.splice(index, 1)       

        },
     
         
   }

}).mount("#app")







