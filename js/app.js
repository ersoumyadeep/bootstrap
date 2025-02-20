"use strict"
import getData from './script.js';
const root = document.getElementById('root');
root.innerHTML = '';
getData()

//object literal
// const person = {
//     name: "john doe",
//     age: 21,
//     city: "kolkata"
// }

// Constructor Function - It will help us to make multiple objects.
// It is a regular function. Function name needs to be capitalize.

// function Person(name, age, city, bike){
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.bike = bike;
//     this.getName = function(){
//         return this.name;
//     }

//     this.getAge = function(){
//         return this.age;
//     }

//     this.getCity = function(){
//         return this.city
//     }

//     this.getBike = function(){
//         return this.bike
//     }
// }


// const person1 = new Person("john", 25,"Kolkata","hondashine");
// const person2 = new Person("jane", 26,"Pune","ktm");
// const person3 = new Person("bob", 27,"Mumbai","nano");
// const person4 = new Person("soumya", 21,"kolkata","herohonda");

// console.log(person1.getCity())
// console.log(person2.getAge())
// console.log(person3.getName())
// console.log(person4.getBike())



function Bike(name,engineCapacity,mileage,weight,seatHeight,year){
    this.name = name;
    this.engineCapacity = engineCapacity;
    this.mileage = mileage;
    this.weight = weight;
    this.seatHeight = seatHeight;
    this.year = year;

    this.getname = function(){
        return this.name
    }

    this.getengineCapacity = function(){
        return this.engineCapacity
    }
    this.getmileage =function(){
        return this.mileage
    }
    this.getweight =function(){
        return this.weight
    }
    this.getseatHeight =function(){
        return this.seatHeight
    }
    this.getyear =function(){
        return this.year
    }
    this.getFullDetails = function(){
       return `Bike Name: ${this.name}. Engine Capacity: ${this.engineCapacity}cc. Mileage: ${this.mileage}. Weight:${this.weight}. Seat Height:${this.seatHeight}. Year: ${this.year}.`
    }
}

const bike1 = new Bike("enfield",349,"36 kmpl","177 kg","800 mm",2024);

// console.log(bike1)

console.log(bike1.getFullDetails())



    const h1 = document.createElement('h1');
    h1.innerHTML = bike1.getFullDetails();
    root.append(h1)
