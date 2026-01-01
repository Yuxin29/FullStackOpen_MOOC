# Introduction to React

## React
a frontend lib for javasript, to build the UI with ready components

### npm
node package manager

## JSX
jsx is a syntax extention for JavaScript that let people write html-like markup inside a javascript file
- JSX returned by React components is compiled into Javascript/
- the compilation is handled by Babel

## Props
      it is a bit like attribute. passing data between components.

- React components use props to comminicate with each other
- component name in React: first letter should be capitalized

## HTML Components

- layout and container element 
      - '<section> </section>'
      - '<article>'
      - '<header>'
      - '<footer>' 
      - '<main>'
- text element 
      - '<h1>', ... '<h6>'
      - '<p>'
      - '<span>'
- chart element
      - '<form>'
      - '<input>'
      - '<button>'
      - '<img>'
      - '<video>'
- link and navigation element
      - '<a>'  altra link. for example <a href="http://www.google.com">Go to goodle</a>
      - \<nav>' degine a collection of linked that the user can browse

# JavaScript Basics

## JavaScript:  ECMAScript
- newest version ECMAScript 2024
- transpilinh by Babel
- node name_of_file.js    : write the code into .js
- node node.js

## Variables:
- const
- let: normal changeble variable

## Printf
console.log(x) 

## Arrays
```js
const arr = [1, 2, 3, 4]
arr.push(5)    //append, and const means the references is immutable, but the data it points to can
const arr_2 = arr.concat(5)
const arr_3 = arr.map(value => value * 2)
console.log(t.length)
console.log(t[1])
t.forEach (value => {
      console.log(value)
})
```

## Objects
the value of a property can be anytinhg: str, arr, int, objects

``` js 
const object1 = {
      name: 'Yuxin',
      age: 29,
      education: 'master'
}
const object2 = {
      name: 'Mikko',
      age: 31,
      education: 'master'
}
const object3 = {
      name: {
            first: 'Harri',
            last: 'Hemilae'
      },
      age: 67,
      education: 'Phd'
}
console.log(object3.name)  // Harri Hemilae will be printed

object1.address = 'Helsinki' // add propertys
object1['door number'] = 5254
```

## Functions
 =>

##  Object methods and "this"
- in js, it is possibile to define a method within an obj, for example

``` js 
const arto = {
  name: 'Arto Hellas',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
}
setTimeout(arto.greet, 1000)
```

- it is only used in old react, not in the morden react
- it feels like a bit like class and member functions in c++, but it is differently. to sum up
      - In js, a method is just a function stored in an object, not a class-bound member function.
      - The value of this is determined at call time, not where the function is defined.
      - In C++, member functions are always bound to the object and cannot lose this.
      - JavaScript objects can add or change methods at runtime; C++ classes cannot.
      - JavaScript uses prototype-based OOP, while C++ uses class-based OOP.
      - Modern React avoids this by using function components and hooks instead of class components.

## Classes
- there is no class mechanism in JavaScript like the ones in object-oriented programming languages. 
- There are, however, features to make "simulating" object-oriented classes possible.
``` js 
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log('hello, my name is ' + this.name)
  }
}

const adam = new Person('Adam Ondra', 29)
adam.greet()
const janja = new Person('Janja Garnbret', 23)
janja.greet()
``` 

# Component state, event handlers

## Component helper functions
in a componeny function, you can encapsule a helper function within it.

## Destructuring
- in OOP, we encapsulation
      - internally protected
- in react, we destructuring
      - more readable
      - reduce repeatance
      - functional style

## Page Re-rendering

## Stateful component

## Event handling

## An event handler is a function

## Passing state - to child components

## Changes in state cause re-rendering
 Calling a function that changes the state causes the component to re-render.

# A more complex state, debugging React apps

## Complex state