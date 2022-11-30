const {createApp} = Vue;

 createApp({

    data(){
        return{
          click : false,
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
                done: false 
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
        
        checkbox(indice){
          var checkBox=document.getElementsByClassName("check")
          if(checkBox[indice].checked){
            this.tasks[indice].done = true
            console.log(this.tasks[indice].done)

          }
          else  {
            this.tasks[indice].done = false
            console.log(this.tasks[indice].done)
          }

        }
            
   }

}).mount("#app")








