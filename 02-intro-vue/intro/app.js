const {createApp, ref} = Vue;

const app = createApp({
  /*  template: `
    <h1>{{message}}</h1>
    <p>{{ author}}</p>
    `,*/

    setup(){
        
        const message = ref ("I'm Batman")

        //Bruce Wayne Const author
        const author = ref("Batman")


        const changeQuote = () =>{
            message.value = 'Hola,soy Goku'
            author.value = 'Goku'
        }

     /*   setTimeout(() => {
            message.value = 'Soy Goku'
            author.value = 'Goku'
        },1500)*/




        return {
            message,
            author,
            changeQuote,
        }
    }
})


app.mount('#myApp');