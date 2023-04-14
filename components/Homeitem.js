import React from 'react'

const Homeitem = (props) => {
    const i = props.id
    // const handle = ()=>{
    //     alert(i)
    // }
    return (
        <div className="card  mx-3 my-3  " style={{ width: "18rem" }} >
            <img className="card-img-top" src="https://img.lovepik.com/free-png/20220319/lovepik-picnic-kids-png-image_402144530_wh860.png" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.atopic}</h5>
                <p className="card-text">{props.btopic}</p>
            </div>
        </div>
    )
}

export default Homeitem
