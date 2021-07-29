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
// interface IPersons {
//     readonly id:number;
//     name:string;
//     age?:number;  // 加?代表该属性可选
// }
// let person:IPersons ={
//     id:12,
//     name:'xiaoming',
//     age:30
// }
/* 2 8
类型推论
联合类型和
类型断言
*/
// //获取长度
// function getLength(input:string|number): number{
//     const str = input as string;
//     //如果输入的值为字符串，则直接获得长度，否则先转换成字符串，再获得长度
//     if(str.length){
//         return str.length;
//     }else{
//         const number = input as number;
//         return number.toString().length
//     }
// }
// //type guard 类型守护
// function getLength2(input:string|number):number{
//     if (typeof input === 'string'){
//         return input.length;
//     } else{
//         return input.toString().length;
//     }
// } 
// Class 类
// 面向对象编程的三大特点
// 封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，
// 继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性。
// 多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。
var Animal = /** @class */ (function () {
    //构造函数：实例化时进行的逻辑
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        return this.name + " is running";
    };
    Animal.prototype.eat = function () {
        return this.name + "is eating";
    };
    return Animal;
}());
var snake = new Animal('lily');
console.log(snake.run());
console.log(snake.eat());
