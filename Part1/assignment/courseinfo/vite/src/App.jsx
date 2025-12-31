const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

/* ------------------original---------------------  */
// const App = () => {
//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }
/* ------------------original---------------------  */

/* ------------------ex 1.1---------------------  */
// const Header = ({course}) => {
//   return <h1>{course}</h1>
// }

// const Content = ({part1, exercises1, part2, exercises2, part3, exercises3}) => {
//   return(
//     <div>
//        <p>{part1} {exercises1}</p>
//        <p>{part2} {exercises2}</p>
//        <p>{part3} {exercises3}</p>
//     </div>
//   )
// }

// const Total = ({exercises1, exercises2, exercises3}) => {
//   const total = exercises1 + exercises2 + exercises3
//   return(
//        <p>Total number of exercises: {total}</p>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <Header course={course}/>
//       <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
//       <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
//     </div>
//   )
// }
/* ------------------ex 1.1---------------------  */

/* ------------------ex 1.2---------------------  */
const Header = ({course}) => {
  return <h1>{course}</h1>
}

const Part = ({partName, exerciseNumber}) => {
  return (
    <p>{partName}, {exerciseNumber}</p>
  )
}

const Content = ({part1, exercises1, part2, exercises2, part3, exercises3}) => {
  return (
    <div>
      <Part partName={part1} exerciseNumber={exercises1}/>
      <Part partName={part2} exerciseNumber={exercises2}/>
      <Part partName={part3} exerciseNumber={exercises3}/>
    </div>
  )
}


const Total = ({exercises1, exercises2, exercises3}) => {
  const total = exercises1 + exercises2 + exercises3
  return(
       <p>Total number of exercises: {total}</p>
  )
}

const App = () => {
  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercises1={exercises1}  part2={part2} exercises2={exercises2}  part3={part3} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}
/* ------------------ex 1.2---------------------  */

// /* ------------------ex 1.3---------------------  */
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
//     <div>
//       ...
//     </div>
//   )
// }
// /* ------------------ex 1.3---------------------  */

// /* ------------------ex 1.4---------------------  */
// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   return (
//     <div>
//       ...
//     </div>
//   )
// }
// /* ------------------ex 1.4---------------------  */

// /* ------------------ex 1.5---------------------  */
// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   return (
//     <div>
//       ...
//     </div>
//   )
// }
// /* ------------------ex 1.5---------------------  */

export default App
