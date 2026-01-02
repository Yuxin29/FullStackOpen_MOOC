// ====================================
// original 
// ====================================
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14
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

// ====================================
// ex 1.1 
// ====================================
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
//        <p>Number of exercises: {total}</p>
//   )
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14
//   return (
//     <div>
//       <Header course={course}/>
//       <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
//       <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
//     </div>
//   )
// }

// ====================================
// ex 1.2
// ====================================
// const Header = ({course}) => {
//   return <h1>{course}</h1>
// }

// const Part = ({part, exercises}) => {
//   return (
//     <p>
//       {part} {exercises}
//     </p>
//   )
// }

// const Content = ({part1, exercises1, part2, exercises2, part3, exercises3}) => {
//   return(
//     <div>
//       <Part part={part1} exercises={exercises1}/>
//       <Part part={part2} exercises={exercises2}/>
//       <Part part={part3} exercises={exercises3}/>
//     </div>
//   )
// }

// const Total = ({exercises1, exercises2, exercises3}) => {
//   const total = exercises1 + exercises2 + exercises3
//   return(
//        <p>Number of exercises: {total}</p>
//   )
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14
//   return (
//     <div>
//       <Header course={course}/>
//       <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
//       <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
//     </div>
//   )
// }

// ====================================
// ex 1.3
// ====================================
// const Header = ({course}) => {
//   return <h1>{course}</h1>
// }

// const Part = ({part}) => {
//   return (
//     <p>
//       {part.name} {part.exercises}
//     </p>
//   )
// }

// const Content = ({part1, part2, part3}) => {
//   return(
//     <div>
//       <Part part={part1}/>
//       <Part part={part2}/>
//       <Part part={part3}/>
//     </div>
//   )
// }

// const Total = ({part1, part2, part3}) => {
//   const total = part1.exercises + part2.exercises + part3.exercises 
//   return(
//        <p>Number of exercises: {total}</p>
//   )
// }

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
//       <Header course={course}/>
//       <Content part1 = {part1} part2={part2} part3={part3}/>
//       <Total part1 = {part1} part2={part2} part3={part3}/>
//     </div>
//   )
// }

// ====================================
// ex 1.4
// ====================================
// const Header = ({course}) => {
//   return <h1>{course}</h1>
// }

// const Part = ({part}) => {
//   return (
//     <p>
//       {part.name} {part.exercises}
//     </p>
//   )
// }

// const Content = ({parts}) => {
//   return(
//     <div>
//       <Part part={parts[0]}/>
//       <Part part={parts[1]}/>
//       <Part part={parts[2]}/>
//     </div>
//   )
// }

// const Total = ({parts}) => {
//   const total = parts[0].exercises + parts[1].exercises + parts[2].exercises 
//   return(
//        <p>Number of exercises: {total}</p>
//   )
// }

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
//       <Header course={course}/>
//       <Content parts = {parts}/>
//       <Total parts = {parts}/>
//     </div>
//   )
// }

// ====================================
// ex 1.5
// ====================================
const Header = ({course}) => {
  return <h1>{course.name}</h1>
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({course}) => {
  return(
    <div>
      <Part part={course.parts[0]}/>
      <Part part={course.parts[1]}/>
      <Part part={course.parts[2]}/>
    </div>
  )
}

const Total = ({course}) => {
  const total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises 
  return(
       <p>Number of exercises: {total}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content course = {course}/>
      <Total course = {course}/>
    </div>
  )
}

export default App
