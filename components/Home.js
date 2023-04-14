import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import sdata from './sub_topic.json'
import { Link } from "react-router-dom"
import { Button } from 'semantic-ui-react'
import Homeitem from './Homeitem'
const Home = () => {
    const location = useLocation()

    const data = sdata;

    const handle = (id) => {
        alert(id)
        // let div = document.querySelector('.dia');
        // div.innerHTML=""
        // let doc = document.createElement('div');
        // doc.innerText=id;
        // div.append(doc)
    }

    // console.log(sdata[from][0].btopic)
    return (
        <div className='d-flex'>
            <div style={{ overflow: "scroll", width: "21rem", height: "100vh", backgroundColor: "red" }}>
                {
                    data.map(
                        (element) => {
                            const id = (element.id)
                            return (
                                <div className=''>
                                    <Homeitem key={element.id} id={element.id} atopic={element.atopic} btopic={element.btopic} />
                                </div>
                            )
                        }
                    )
                }

            </div>
            <div className='dia'>

            </div>
        </div>

    )
}

export default Home
