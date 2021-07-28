// const getName = (name:String)=>{
//     return `hello! ${name}!`
// }

// console.log(getName('xiaoming'))

// let isDone:boolean =  false;
// console.log(isDone)

// let notSure:any=12;
// notSure = false;

// let arr:number[] = [1,2,3,4,5];  
// arr.splice(2)
// console.log(arr)

interface IPersons {
    readonly id:number;
    name:string;
    age?:number;  // 加?代表该属性可选
}

let person:IPersons ={
    id:12,
    name:'xiaoming',
    age:30
}


