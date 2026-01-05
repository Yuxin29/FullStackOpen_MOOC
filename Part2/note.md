
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