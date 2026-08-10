const character = ['Spiderman', 'Ironman', 'Hulk','Punisher'];

const[, i] = character

const returnArray = ()=>{
    return ['ABC', 123] as const
}
console.log({i})
const [letter, number] = returnArray();
console.log(letter.toLowerCase(), number+5)