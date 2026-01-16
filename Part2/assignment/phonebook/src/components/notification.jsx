const Notification = ({ message }) => {
  if (message === null) 
    return null 

  const style = {
    color: 'green',   
    background: 'lightgrey',
    fontSize: 20,
    border: 'solid 1px',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  }

  return (
    <div style={style}>
      {message}
    </div>
  )
}

export default Notification