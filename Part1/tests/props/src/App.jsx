//passing data to component
// this is a component to be called in a parent component
const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old.
      </p>
    </div>
  );
}

const App = () => {
  const name = 'Peter';
  const age = 10;

  return (
    <div>
    <h1>Greetings</h1>
    <Hello name='Summer'age={5} />
    <Hello name={name} age={age} />
    </div>
  )
}

//multiple conponent
// const Hello = () => {
//   return(
//     <div>
//       <p>Hello Word</p>
//     </div>
//   );
// }

// const App = () => {
//   return(
//     <div>
//       <h1>Greetings</h1>
//       <Hello />
//     </div>
//   );
// }

//single conponent
// const App = () => {
//   const now = new Date();
//   const a = 10;
//   const b = 20;

//   return (
//     <div>
//       <p>Hello world, it is now {now.toString()}</p>
//       <p>
//         {a} + {b} is {a + b}
//       </p>
//     </div>
//   )
// }

export default App
