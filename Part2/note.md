
# Communication with a server

## Rendering a collection, modules

### JavaScript Arrays
arrays in javascript can be operated with functional operators 
- higher-order function 
    - takes another function as an argument \
    - or returns a function

``` js 
function greet(fn) {
  fn("Alice");
}
greet(name => console.log("Hello", name));
```

- find: returns the first element that matches the condition

``` js 
const numbers = [4, 7, 10, 3];
const firstBig = numbers.find(n => n > 5);
console.log(firstBig); // 7
```

- filter: returns a new array of all matching elements

``` js 
const numbers = [4, 7, 10, 3];
const bigNumbers = numbers.filter(n => n > 5);
console.log(bigNumbers); // [7, 10]
```

- map: transfer each elements and return the new array
``` js 
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
```

### Rendering Collections
    testings: notebook

### Key-attribute
- key is a property used by React to uniquely identify each element in a list.
- It helps React accurately determine which elements have been changed during re-rendering,
- thereby avoiding unnecessary DOM updates and potential bugs.

``` js 
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => <li key={note.id}> {note.content} </li>)}
      </ul>
    </div>
  )
```  

### Anti-pattern: Array Indexes as Keys
``` js 
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note, i) => <li key={i}> {note.content} </li>)}
      </ul>
    </div>
  )
```  

### Refactoring Modules
- Better code organization
- Improved maintainability
- Reusability
- Easier debugging and testing
- Scalability
- Better collaboration amd Clear dependencies

src/
├── components/
│   └── Note.jsx
│   └── modular2.jsx
│   └── modular2.jsx
│   └── xxx.jsx
├── App.jsx
└── main.jsx

## Forms

### Saving the notes in the component state
- event.preventDefault()	浏览器 DOM API: 阻止默认行为（如刷新页面）
- onChange={(e)=>...}     React 事件: 用户输入时触发，获取 input 内容
- onSubmit={(e)=>...}     React 事件: + JS	表单提交时触发，执行自定义函数

# Getting data from the Server
json server

## The browser as a runtime environment
- fetch is a JavaScript function (browser API) to make HTTP requests.
- With fetch we can make any HTTP method: GET, POST, PUT, DELETE…
- By default, fetch() uses the GET method if not specified

## npm
- we are going to use axios instead of fetch to get used to npm package.
- a clear indicator that a project is using npm is that there is a package.json file.
- to install it, use this command line in the pro root "npm install axios"
- also install this "npm install json-server --save-dev"
- also add this in scripts: "server": "json-server -p 3001 db.json"
- after all above, can "npm run server"

## Axios and promises

### Axios
sending request
### Promises
waiting for the result
- pending
- fulfilled
- rejected
### a chaine
``` js 
axios
  .get('http://localhost:3001/notes')
  .then(response => {
    console.log(response.data)
  })
```
### axios.get
it should be put into App component and in the useEffect

## Effect-hooks

## The development runtime environment

# Testing data in server
The json-server package is a so-called REST or RESTful API in its documentation

## REST
- In REST we refer to individual data objects in our application, as resources. 
- Resources are fetched from the server with HTTP GET request
- Creating a new resource for storing a note is done by making an HTTP POST request to the notes URL

## Sending Data to the Server
- by axios.post
``` js 
axios
  .post('http://localhost:3001/notes', noteObject)
  .then(
    response => {console.log(response)}
  )
```
- to update it in the frontend, we have to do one more step
``` js 
axios
  .post('http://localhost:3001/notes', noteObject)
  .then(
    response => {
      setNotes(notes.concat(response.data))
      setNewNote('')
    }
  )
```

## Changing the Importance of Notes

## Extracting Communication with the Backend into a Separate Module
-  create a src/services directory and add a file there called notes.js:
- The App component uses import to get access to the module:
``` js 
import noteService from './services/notes'
```

## Cleaner Syntax for Defining Object Literals
## Promises and Errors
## Full stack developer's oath
## Exercises 2.12.-2.15.