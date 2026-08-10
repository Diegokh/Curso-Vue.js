/*function greetPerson(name:string){
    return `Hello ${name}`;
}*/

const greetPerson = (name:string) => `Hello ${name}`;

/*const greetPerson = (name:string) => {
    `Hello ${name}`
};*/

/*const getUser = () => {
    return {
        uid: 'ABC-123',
        username:'Diego01'
    }
}
*/

//return implicito de un objeto
const getUser = (uid:string) => (
    {
        uid: uid,
        username:'Diego01'
    }
)

const heroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
        power: 'Super fuerza',
    },
]

const hero = heroes.find((h) => h.id === 1)

console.log(hero?.power?.toUpperCase())