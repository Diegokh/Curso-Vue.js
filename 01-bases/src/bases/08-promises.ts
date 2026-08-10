console.log('Inicio')

new Promise((resolve, reject)=>{

    //console.log('Cuerpo de la promesa')
    setTimeout(() =>{
        resolve('Mi amigo cumplio')
        reject('Mi amigo no cumplio')
    },1000)

    

})
.then((msg) => console.log(msg))
.catch(errMsg => console.log(errMsg))
.finally(() => console.log('Fin de la promesa')) //No es obligatorio



console.log('Final')