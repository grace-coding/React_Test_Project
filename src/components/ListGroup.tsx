import { useState } from "react"

//{items: [],  heading: String}
interface Props {
	items: String[]
	heading: String
	onSelectItem: (item: String) => void
}


function ListGroup({items, heading, onSelectItem}: Props) {
  
	// hook
	const [selelctedIndex, setSelectedIndex] = useState(-1)
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className={ selelctedIndex === index ? "list-group-item active" : "list-group-item"} 
					key={index} 
					onClick={() => {
						setSelectedIndex(index)
						onSelectItem(item)
					}}
					>
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup
