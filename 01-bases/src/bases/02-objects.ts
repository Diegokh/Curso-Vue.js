
export const person = {
    lastName:'Stark',
    age:45,
    address:{
        city:'New York',
        zip: 56224,
        lat: 14.3232,
        lng: 34.9232,
    }
} //as const
 
//const person2 = {...person, address:{...person.address}} //as const;
const person2 = structuredClone(person) //as const;

person2.lastName = 'Parker'
person2.address.city = 'Houston'

console.log({person})
console.log({person2})