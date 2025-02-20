# This is a heading
```javascript
// for(let i = 0; i < 10; i++){
//     const h1 = document.createElement('h1');
//     h1.innerHTML = "Hello <span>World</span>";
//     h1.className = "heading";
//     h1.id = "main-heading";
    
//     const p = document.createElement('p');
//     p.innerHTML = "Hello <span>World</span>";
//     p.className = "para";
//     p.id = "main-para";
    
//     const div = document.createElement('div');
//     div.className = "card";
//     div.append(h1, p);
    
//     root.append(div);
// }


// fetch('https://picsum.photos/v2/list')
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     console.dir(data)
// })


// .catch((err)=>{
//     console.log("Something went wrong " + err)
// })


// const gallery = ['1.jpg', '2.jpg', '3.jpg'];

// gallery.forEach(img => {
//     //document.querySelector('#gallery').innerHTML += `<img src="images/${img}" alt="${img}">`;
// })

// setTimeout(function(){
//     console.log("1st item")
// }, 0)
// console.log("2nd item");


// const bankAccount = {
//     bankName : "SBI",
//     accountNumber : 1234567,
//     holderName : "Soumyadeep mridha",
//     balance: 1000,
//     getBalance: function(){
//         return `your balance is ${this.balance}`
//     }
// }


// const person = {
//     "firstname": "soumyadeep",
//     "lastname": "mridha",
//     age: 21,
//     address: {
//         "house no": "BF107",
//         city: "kolkata",
//         zip: 700101
//     },
//     "fullname": function(){
//         return `Hello, ${this.firstname} ${this.lastname}`;
//     }
// }

const person = {
    name: "john doe",
    age: 21,
    city: "kolkata"
}

// const name = person.name;
// const age = person.age;
// const city = person.city;

//object destructure
// const {name, age, city} = person;

// console.log(name, age, city);

//NEVER USE `with()`
// with(person){
//     console.log(name);
//     console.log(age);
//     console.log(city);
// }
```

## Markdown is language like HTML

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
#### Heading 5
###### Heading 6

This is a Normal Paragraph.

##### This is an example of a Unrdered list
- Home
- About
- Contact

##### This is an example of a Ordered list
1. Home
2. About 
3. Contact

##### This is an example of a hyperlink
[YouTube](https://www.youtube.com)

##### This is an example of a Table
|Name | Age|
|------|----|
|Soumyadeep| 21|
|Tanmoy | 21|

```html
<h1>hello</h1>
```

```python
def add(x, y):
    return x + y
    