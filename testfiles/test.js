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
// class Animal {
//     name: string;
//     //构造函数：实例化时进行的逻辑
//     constructor(sname: string) {
//       this.name = sname
//     }
//     run() {
//       return `${this.name} is running`
//     }
//     eat() {
//         return `${this.name} is eating` 
//     }
//   }
//   const snake = new Animal('lily')
//   console.log(snake.run())
//   console.log(snake.eat())
//   // 继承的特性
// class Dog extends Animal {
//   bark() {
//     return `${this.name} is barking`
//   }
// }
// const xiaobao = new Dog('xiaobao')
// console.log(xiaobao.run())
// console.log(xiaobao.bark())
// // 这里我们重写构造函数，注意在子类的构造函数中，必须使用 super 调用父类的方法，要不就会报错。
// class Cat extends Animal {
//   constructor(Dname: string) {
//     super(Dname)
//     console.log(this.name)
//   }
//   run() {
//     return 'Meow, ' + super.run()
//   }
// }
// const maomao = new Cat('maomao')
// console.log(maomao.run())
// 类成员的访问修饰符
// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
// protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
// // 2 10 类和接口 完美搭档
// //1.车，收音机
// //4.implements Iradio
// class car implements Iradio{
//     switchRadio(triggered: boolean){
//     }
// }
// //2.手机，收音机
// //5.implements Iradio
// class cellPhone implements IradioWithBattery{
//     switchRadio(triggered: boolean){
//     }
//     checkBarreryStatus(){
//     }
// }
// //3.创建接口，车和手机共有
// interface Iradio{
//     switchRadio(triggered: boolean):void;
// }
// // 6.创建接口，只有手机有
// interface Ibattery{
//     checkBarreryStatus():void
// }
// //7.接口可以继承 extends
// //这样，子接口就继承了父接口的switchRadio，再加入checkBarreryStatus()
// interface IradioWithBattery extends Iradio{
//     checkBarreryStatus():void
// }
// // 2 11 枚举（Enum）
// const enum Direction {  //加const
//     up='up',
//     down='down',
//     left='left',
//     right='right'
// }
// // console.log(Direction.down)
// const s = 'up';
// if (s === Direction.up){
//     console.log('go up!')
// }
// // 2 12 泛型（Generics） 第一部分
// function echo(arg:number):number { //agr类型是number，返回也是number
//     return arg;
// }
// const result = echo(123)
// function echos<T>(arg:T):T { 
//     return arg;
// }
// // const str:string = 'st'
// const results= echos(123)
// function swap<T,N>(tuple:[T,N]):[N,T]{
//     return [tuple[1],tuple[0]]
// }
// const result3 = swap([123,'tp'])
// console.log(result3)
// // 2 13 泛型（Generics） 第二部分 约束泛型
// function echoWithArr<T>(arg: T): T {
//     console.log(arg.length)
//     return arg
//   }
//   // 上例中，泛型 T 不一定包含属性 length，我们可以给他传入任意类型，当然有些不包括 length 属性，那样就会报错
//   //1.创建一个接口，含有属性length
//   interface IWithLength {
//     length: number;
//   }
//   //2.创建函数，函数的泛型延申至接口
//   function echoWithLength<T extends IWithLength>(arg: T): T {
//     console.log(arg.length)
//     return arg
//   }
//   //3.测试含有length属性的变量
//   echoWithLength('str')
//   const result3 = echoWithLength({length: 10})
//   const result4 = echoWithLength([1, 2, 3])
// 2 14 泛型第三部分 泛型在类和接口中的使用
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (item) {
        return this.data.push(item);
    };
    Queue.prototype.pop = function () {
        return this.data.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.push(123);
console.log(queue.pop().toFixed());
var kp1 = { key: 1, value: "str" };
var kp2 = { key: "str", value: 123 };
var arr = [1, 2, 3, 4];
var arrTwo = [1, 2, 3, 5]; //number为Array内置的interface
console.log(arr);
console.log(arrTwo);
