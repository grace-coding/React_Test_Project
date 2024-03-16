function ListGroup() {
  let items = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix']
  items = []
  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No items</p>
      </>
    )

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup
