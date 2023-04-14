import React from 'react'
import { Link } from "react-router-dom"
const Titem = (props) => {
  const id = props.id
  return (
    // <Link to="/home" state={id}>
    <div>
      <div className="card">
        <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHaDZewEOJPpXxH4Q0rmACTEhgTiFHcaXN0g&usqp=CAU" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            <Link to="/home" state={id}><button className="btn btn-primary">Explore</button></Link>
          </div>
      </div>
    </div>
    // </Link>
  )
}

export default Titem
