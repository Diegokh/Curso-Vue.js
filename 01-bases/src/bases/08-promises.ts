//console.log('Inicio')
/*
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



console.log('Final')*/

import type { Hero } from "../data/heroes";
import { getHeroById } from "./07-imp-exp"


const getHeroByIdAsync = (id:number):Promise<Hero> =>{

    return new Promise( (resolve,reject) =>{
        setTimeout(() =>{
           const hero = getHeroById(id);

           hero ? resolve(hero) : reject(`Heroe no encontrado #${id}`)
        }, 1500)
    })
}

getHeroByIdAsync(3)
    .then(hero =>console.log('El nombre es',hero.name))
    .catch(msg => alert(msg))