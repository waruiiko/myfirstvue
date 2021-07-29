// const getName = (name:String)=>{
//     return `hello! ${name}!`
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    function Animal(sname) {
        this.name = sname;
    }
    Animal.prototype.run = function () {
        return this.name + " is running";
    };
    Animal.prototype.eat = function () {
        return this.name + " is eating";
    };
    return Animal;
}());
var snake = new Animal('lily');
console.log(snake.run());
console.log(snake.eat());
// 继承的特性
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        return this.name + " is barking";
    };
    return Dog;
}(Animal));
var xiaobao = new Dog('xiaobao');
console.log(xiaobao.run());
console.log(xiaobao.bark());
// 这里我们重写构造函数，注意在子类的构造函数中，必须使用 super 调用父类的方法，要不就会报错。
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(Dname) {
        var _this = _super.call(this, Dname) || this;
        console.log(_this.name);
        return _this;
    }
    Cat.prototype.run = function () {
        return 'Meow, ' + _super.prototype.run.call(this);
    };
    return Cat;
}(Animal));
var maomao = new Cat('maomao');
console.log(maomao.run());
