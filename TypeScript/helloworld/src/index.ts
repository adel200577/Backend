//How to interact with JS premitive types in TS:
// let sales = 123_456_789;
// let course = "TypeScript";
// let is_published = true;

// //JS Arrays:
// let numbers = [1, 2, 3];
// let Numbers: number = [];
// numbers.forEach(n => n.)
//typseScript internal type:
//1.Touple:
// let user: [number, string] = [1, "Adel"];
//enum:
// const small;
// const medium;
// const large;

// const enum Size {
//   Small = "s",
//   Medium = "m",
//   Large = "l",
// }

// const MySize: Size = Size.Medium;
// console.log(MySize);

// function calculateTax(income: number,taxYear = 2026): number {
//   if (taxYear < 50_000) {
//     return income * 1.2;
//   }
//   return income * 1.3;
// }
// console.log(calculateTax(10_000));

// const employee: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "Adel",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };
// console.log(employee.id);

// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };
// const employee: Employee = {
//   id: 1,
//   name: "Adel",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// console.log(employee.id);

// function kgToLbs(weight: number | string): number {
//   if (typeof weight === "number") {
//     return weight * 2.2;
//   } else {
//     return parseInt(weight) * 2.2;
//   }
// }
// console.log(kgToLbs("500"));

// type Draggable = {
//   drag: () => void;
// };
// type Resizable = {
//   resize: () => void;
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//   drag: () =>   {},
//   resize:()=> {}
// }

// type Quantity = 50 | 100 | 200;
// // let quantity: 50 | 100 | 200 = 50;
// const quantity: Quantity = 50;
// console.log(quantity);

// //Null types:
// function greet(name: string | null | undefined) {
//   if (name) {
//     console.log(name.toUpperCase());
//   } else {
//     console.log("Invalid argument");
//   }
//   // return name;
// }
// greet(null);

// type Customer = {
//   birthday?: Date;
// };

// function getCustomer(id: number): Customer | null | undefined {
//   return id === 0 ? null : { birthday: new Date() };
// }

// const customer = getCustomer(0);

// console.log(customer?.birthday?.getFullYear);

//if(customer !== null && customer !== undefined) cistomer[0];
//  customer?.[0]

//let log: any = null;
//log?.("a");

// //nullish operator:
// const speed: number | null = null;

// const ride = {
//   // speed: speed !== null ? speed : 30,
//   speed: speed ?? 30,
// };

// const phone = document.getElementById("phone") as HTMLInputElement;
// const phone =<HTMLInputElement> document.getElementById("phone") as HTMLInputElement;
// phone.value;

//unknown:
// function render(document: unknown) {
// if (typeof document === "string") {
//   document.at(0);
// }
// if  (document instanceof Customtype === "string") {
//   document.at(0);
// }
// }
// render(document);

// //never type:
// function processEvents(): never {
//   while (true) {}
// }
// processEvents();
// console.log("Previats");

// class Account {
//   id: number;
//   name: string;
//   balance: number;

//   constructor(id: number, name: string, balance: number) {
//     this.id = id;
//     this.name = name;
//     this.balance = balance;
//   }

//   deposite(amount: number): void {
//     if (amount <= 0) {
//       throw Error("Invalid amount");
//     }
//     this.balance += amount;
//   }
// }

// const account = new Account(1, "User", 0);

// account.deposite(5_000);
// console.log(account.balance);
// console.log(typeof(account));
// console.log(account instanceof Account);

//Modifier:
// class Account {
//   readonly id: number;
//   name: string;
//   nickname?: string;
//   balance: number;

//   constructor(id: number, name: string, balance: number,) {
//     this.id = id;
//     this.name = name;
//     this.balance = balance;
//   }

//   deposite(amount: number): void {
//     if (amount <= 0) {
//       throw Error("Invalid amount");
//     }
//     this.balance += amount;
//   }
// }

// const account = new Account(1, "User", 0);

// account.deposite(5_000);
// console.log(account.balance);
// console.log(typeof account);
// console.log(account instanceof Account);

// //Access modifier: public/private/protected
// class Account {
//   readonly id: number;
//   name: string;
//   nickname?: string;
//   private _balance: number;

//   constructor(id: number, name: string, balance: number) {
//     this.id = id;
//     this.name = name;
//     this._balance = balance;
//   }

//   deposite(amount: number): void {
//     if (amount <= 0) {
//       throw Error("Invalid amount");
//     }
//     this._balance += amount;
//   }
//   getBalance() {
//     return this._balance;
//   }
//   private calculateTax(){}
// }

// const account = new Account(1, "User", 0);

// account.deposite(5_000);
// // console.log(account._balance);
// console.log(typeof account);
// console.log(account instanceof Account);
// // account.balance = 0;
// console.log(account.getBalance());

//property parameter:
// class Account {
//   // readonly id: number;
//   // name: string;
//   nickname?: string;
//   // private _balance: number;

//   constructor(
//     public readonly id: number,
//     public name: string,
//     private _balance: number,
//   ) {
//     // this.id = id;
//     // this.name = name;
//     // this._balance = balance;
//   }

//   deposite(amount: number): void {
//     if (amount <= 0) {
//       throw Error("Invalid amount");
//     }
//     this._balance += amount;
//   }
//   getBalance() {
//     return this._balance;
//   }
//   private calculateTax() {}
// }

// const account = new Account(1, "User", 0);

// account.deposite(5_000);
// // console.log(account._balance);
// console.log(typeof account);
// console.log(account instanceof Account);
// // account.balance = 0;
// console.log(account.getBalance());

//Getter and Setter:
// class Account {
//   // readonly id: number;
//   // name: string;
//   nickname?: string;
//   // private _balance: number;

//   constructor(
//     public readonly id: number,
//     public name: string,
//     private _balance: number,
//   ) {
//     // this.id = id;
//     // this.name = name;
//     // this._balance = balance;
//   }

//   deposite(amount: number): void {
//     if (amount <= 0) {
//       throw Error("Invalid amount");
//     }
//     this._balance += amount;
//   }
//   get balance(): number {
//     return this._balance;
//   }
//   set balance(value: number) {
//     if (value < 0) {
//       throw new Error("Invalid value");
//     }
//     this._balance = value;
//   }
//   private calculateTax() {}
// }

// const account = new Account(1, "User", 0);

// account.deposite(5_000);
// // console.log(account._balance);
// console.log(typeof account);
// console.log(account instanceof Account);
// account.balance = 0;
// console.log(account.balance);

// //Dynamic Property:
// class SeatAssignment {
//   [seatNumber: string]: string;
// }

// let seats = new SeatAssignment();
// seats.A1 = "Adel";
// // seats["A1"] = "Adel";
// seats.A2 = "John";

// class Ride {
//   private static _activeRides: number = 0;

//   start() {
//     Ride._activeRides++;
//   }
//   stop() {
//     Ride._activeRides--;
//   }

//   static get activeRides(){
//   return Ride._activeRides
// }
// }

// let ride1 = new Ride();
// ride1.start();
// let ride2 = new Ride();
// ride2.start();

// console.log(Ride.activeRides);
// class Person {
//   constructor(
//     public firstName: string,
//     public lastName: string,
//   ) {}

//   walk() {
//     console.log("Walk");
//   }

//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// class Student extends Person {
//   constructor(
//     public studentId: number,
//     firstName: string,
//     lastName: string,
//   ) {
//     super(firstName, lastName);
//   }

//   takeTest() {
//     console.log("taking a test");
//   }
// }
// let student = new Student(1, "Adel", "Sharifi");
// student.takeTest();

//Method overriding:
// class Person {
//   constructor(
//     public firstName: string,
//     public lastName: string,
//   ) {}

//   walk() {
//     console.log("Walk");
//   }

//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// // class Student extends Person {
// //   constructor(
// //     public studentId: number,
// //     firstName: string,
// //     lastName: string,
// //   ) {
// //     super(firstName, lastName);
// //   }

// //   takeTest() {
// //     console.log("taking a test");
// //   }
// // }

// class Teacher extends Person {
//   override get fullName(): string {
//     // return "Professor" + " " + this.firstName + " " + this.lastName;
//     return "Professor" + " " + super.fullName;
//   }
// }
// let teacher = new Teacher("John", "Doe");
// console.log(teacher.fullName);

//PolyMorphism:
// class Person {
//   constructor(
//     public firstName: string,
//     public lastName: string,
//   ) {}

//   walk() {
//     console.log("Walk");
//   }

//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// class Student extends Person {
//   constructor(
//     public studentId: number,
//     firstName: string,
//     lastName: string,
//   ) {
//     super(firstName, lastName);
//   }

//   takeTest() {
//     console.log("taking a test");
//   }
// }
// let student = new Student(1, "Adel", "Sharifi");
// student.takeTest();

// class Teacher extends Person {
//   override get fullName(): string {
//     // return "Professor" + " " + this.firstName + " " + this.lastName;
//     return "Professor" + " " + super.fullName;
//   }
// }
// let teacher = new Teacher("John", "Doe");
// console.log(teacher.fullName);

// class Principal extends Person {
//   override get fullName(): string {
//     // return "Professor" + " " + this.firstName + " " + this.lastName;
//     return "Principal" + " " + super.fullName;
//   }
// }

// function printNames(people: Person[]) {
//   for (let person of people) {
//     console.log(person.fullName);
//   }
// }
// // printNames([student, teacher]);
// printNames([
//   new Student(1, "Ali", "Parvin"),
//   new Teacher("Ahmad", "Vahidi"),
//   new Principal("Arthur", "Morgan"),
// ]);

//Protected:
// class Person {
//   constructor(
//     public firstName: string,
//     public lastName: string,
//   ) {}

//   walk() {
//     console.log("Walk");
//   }
//   // protected walk() {
//   //   console.log("Walk");
//   // }

//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// class Student extends Person {
//   constructor(
//     public studentId: number,
//     firstName: string,
//     lastName: string,
//   ) {
//     super(firstName, lastName);
//   }

//   takeTest() {
//     console.log("taking a test");
//   }
// }
// let student = new Student(1, "Adel", "Sharifi");
// student.takeTest();

// class Teacher extends Person {
//   override get fullName(): string {
//     // return "Professor" + " " + this.firstName + " " + this.lastName;
//     return "Professor" + " " + super.fullName;
//   }
// }
// let teacher = new Teacher("John", "Doe");
// console.log(teacher.fullName);

// class Principal extends Person {
//   override get fullName(): string {
//     // return "Professor" + " " + this.firstName + " " + this.lastName;
//     return "Principal" + " " + super.fullName;
//   }
// }

// function printNames(people: Person[]) {
//   for (let person of people) {
//     console.log(person.fullName);
//   }
// }
// // printNames([student, teacher]);
// printNames([
//   new Student(1, "Ali", "Parvin"),
//   new Teacher("Ahmad", "Vahidi"),
//   new Principal("Arthur", "Morgan"),
// ])

//Abstraction:
// abstract class Shape {
//   constructor(public color: string) {}

//   abstract render():void;
// }

// class Circle extends Shape {
//   constructor(
//     color: string,
//     public radius: number,
//   ) {
//     super(color);
//   }
//   override render(): void {
//     console.log("Rendering a circle");
//   }
// }

//Interface:
// abstract class Calender {
//   constructor(public name: string) {}
//   abstract addEvent():void;
//   abstract removeEvent():void;
// }
// interface Calendar {
//   name: string;
//   addEvent(): void;
//   removeEvent(): void;
// }
// interface Cloud extends Calendar {
//   sync(): void;
// }

// class GoogleCalendar implements Calendar {
//   constructor(public name: string) {}
//   addEvent(): void {}
//   removeEvent(): void {}
// }

//Generics:
// class KeyValuePair <K, V> {
//   constructor(
//     public key: K,
//     public value: V,
//   ) {}
// }

// // let pair = KeyValuePair(1, "Apple");
// let pair = new KeyValuePair<string,string>("1","Apple");
//  let pair = new KeyValuePair("1","Apple");

// //Generic function:
// function wrapInArray<T>(value: T) {
//   return [value];
// }
// let numbers = wrapInArray(1);
// let numbers = wrapInArray<string>("1");

// class ArrayUtils {
//   wrapInArray<T>(value: T) {
//     return [value];
//   }
// }
// let array = new ArrayUtils();
// array.wrapInArray<number>(1);

// class ArrayUtils {
//   static wrapInArray<T>(value: T) {
//     return [value];
//   }
// }
// ArrayUtils.wrapInArray<number>(1);

// //Generic Interface:
// interface Result<T> {
//   data: T | null;
//   error: string | null;
// }

// interface User {
//   username: string;
// }

// interface Products {
//   title: string;
// }

// function fetch<T>(url: string): Result<T> {
//   return { data: null, error: null };
// }

// fetch<User>("url");
// fetch<Products>("url");

// // Generic types limitations:
// function echo<T extends number | string>(value: T): T {
//   return value;
// }
// echo(1);
// // Generic types limitations:
// function echo<T extends { name: string }>(value: T): T {
//   return value;
// }
// // echo({ name: "Adel" });
// interface Person {
//   name: string;
// }
// function echo<T extends Person>(value: T) {
//   return value;
// }
// echo({ name: "sdss" });
// class Person {
//   constructor(public name: string) {}
// }

// class Customer extends Person {}
// function echo<T extends Person>(value: T) {
//   return value;
// }
// echo(new Person("ADEL"));
// echo(new Customer("JOHN"));

//inheritance in generic classes:
// interface Product {
//   name: string;
//   price: number;
// }
// class Store<T> {
//   constructor(protected _objects: T[] = []) {}
//   add(obj: T): void {
//     this._objects.push(obj);
//   }
// }

// class CompressableStore<T> extends Store<T> {
//   compress() {}
// }
// }
// let store = new CompressableStore<Product>();
// store.compress();
// class SearchableStore<T extends {name:string}> extends Store<T>{
//     find(name:string):T | undefined{
//     return this._objects.find(obj => obj.name === name)
//   }
// }

// let store = new SearchableStore<Product>();

// class ProductStore extends Store<Product> {
//   filterByCategory(category: string): Product[] {
//     return [];
//   }
// }

//keyof:
// interface Product {
//   name: string;
//   price: number;
// }
// class Store<T> {
//   constructor(protected _objects: T[] = []) {}
//   add(obj: T): void {
//     this._objects.push(obj);
//   }
//   find(property: keyof T, value: unknown): T | undefined {
//     return this._objects.find((obj) => obj[property] === value);
//   }
// }

// let store = new Store<Product>();
// store.add({ name: "a", price: 5_000 });
// store.find("name" , "a");
// store.find("price" , 5_000);

//TypeMapping:
// interface Product {
//   name: string;
//   price: number;
// }

// type ReadOnly<T> = {
//   readonly [K in keyof T]: T[K];
// };

// // let product: ReadOnlyProduct = {
// //   name: "Adel",
// //   price: 50,
// // };

// type Optional<T> = {
//    [K in keyof T]?: T[K];
// };
// type Nullable<T> = {
//    [K in keyof T]?: T[K] | null;
// };

// let product: ReadOnly<Product> = {
//   name: "Adel",
//   price: 50,
// };
// product.name = "b";

//Decorators:
// function Component(constructor: Function) {
//   console.log("Decorator");
//   constructor.prototype.uniqueId = Date.now();
//   constructor.prototype.insertInDom = () => {
//     console.log("Insert");
//   };
// }
// @Component
// class ProfileComponents {
// }
// let a = new ProfileComponents();
// console.log(a.uniqueId);

// type ComponentOptions = {
//   selector: string;
// };
// function Component(option: ComponentOptions) {
//   return (constructor: Function) => {
//     console.log("Decorator");
//     constructor.prototype.uniqueId = Date.now();
//     constructor.prototype.options = option;
//     constructor.prototype.insertInDom = () => {
//       console.log("Insert");
//     };
//   };
// }
// @Component({ selector: "#profile-image" })
// class ProfileComponents {
//   constructor() {}
// // }

// type ComponentOptions = {
//   selector: string;
// };
// function Component(option: ComponentOptions) {
//   return (constructor: Function) => {
//     console.log("Decorator");
//     constructor.prototype.uniqueId = Date.now();
//     constructor.prototype.options = option;
//     constructor.prototype.insertInDom = () => {
//       console.log("Insert");
//     };
//   };
// }

// function pipe(constructor: Function) {
//   console.log("Pipe decorator called");
//   constructor.prototype.pipe = true;
// }

// @Pipe()
// @Component({ selector: "#profile-image" })
// class ProfileComponents {
//   constructor() {}
// }

//method decorator:

// function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
//   const original = descriptor.value as Function;
//   descriptor.value = function (...args:any) {
//     console.log("Before");
//     original.call(this, "Calling say method");
//     // original.call(this, message);
//     original.call(this, ...args);
//     console.log("After");
//   };
// }
// class Person {
//   @Log
//   say(message: string) {
//     console.log("Now say my name : " + message);
//   }
// }

// let person = new Person();
// person.say("Previats");

//Accessor decorator:

// function Capitalize(
//   target: any,
//   methodName: string,
//   descriptor: PropertyDescriptor,
// ) {
//   const original = descriptor.get as Function;
//   descriptor.get = function () {
//     const result = original?.call(this);
//     return typeof result === "string" ? result.toUpperCase() : result;
//   };
// }

// class Person {
//   constructor(
//     public firstName: string,
//     public lastName: string,
//   ) {}

//   @Capitalize
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// const person = new Person("john", "doe");
// console.log(person.fullName);

//Property decorator:

// function MinLength(length: number) {
//   return (target: any, propertyName: string) => {
//     let value: string;
//     const descriptor: PropertyDescriptor = {
//       get() {
//         return value;
//       },
//       set(NewValue: string) {
//         if (NewValue.length < length) {
//           throw new Error(
//             `${propertyName} should be at least ${length} characters long.`,
//           );
//         }
//         value = NewValue;
//       },
//     };
//     Object.defineProperty(target, propertyName, descriptor);
//   };
// }
// class User {
//   @MinLength(4)
//   password: string;
//   constructor(password: string) {
//     this.password = password;
//   }
// }

// let user = new User("1234");
// console.log(user.password);

//Parameter decorator:

// type WatchedParameter = {
//   methodName: string;
//   parameterIndex: number;
// };

// const watchedParameters: WatchedParameter[] = [];
// function Watch(target: any, methodName: string, parameterIndex: number) {
//   watchedParameters.push({
//     methodName,
//     parameterIndex,
//   });
// }
// class Vehicle {
//   move(@Watch speed: number) {}
// }

// console.log(watchedParameters);

// import { Circle, Square } from "./shapes.js";
// const circle = new Circle(1);
// console.log(circle.radius);
// const square = new Square(1);

// let circle = new Circle(1);
// console.log(circle.radius);

//WildCard:
// import * as Shapes from "./shapes.js";
// new Shapes.Circle(5);
// new Shapes.Square(5);

//reExporting:
// import { Circle, Square } from "./shapes/index.js";
// new Circle(4);
// new Square(5);

// import calculateTax from "../src/tax.js";
// let tax = calculateTax(5_000);
// console.log(tax);

//DisablingTypeChecking:
// import calculateTax from "./tax.js";
// const tax = calculateTax(3000);
// console.log(tax);

// import * as _ from "lodash";