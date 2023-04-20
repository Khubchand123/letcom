import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import sdata from './sub_topic.json'
import { Link } from "react-router-dom"
import { Button } from 'semantic-ui-react'
import Homeitem from './Homeitem'
import Dialog from './Dialog'
import Recoder from './Recoder'
const Home = () => {
    // const location = useLocation()
    const data = sdata;
    const [id, setid] = useState(1);
//     let yellow = '#ffc800';
//   const [bgColor, setBgColor] = useState(yellow);
//    const changeColor =()=>{
//       let purple = '#A020F0';
//       setBgColor(purple);
//     }
    return (
        <div className='d-flex' style={{ background: "" }}>
            <div style={{ overflow: "scroll", width: "21rem", height: "100vh", backgroundColor: "red" }}>
                {
                    data.map(
                        (element) => {
                            const id = (element.id)
                            return (
                                <div className=''>
                                    <Homeitem key={element.id} id={element.id} atopic={element.atopic} btopic={element.btopic} setId={setid} />
                                </div>
                            )
                        }
                    )
                }

            </div>
            <div>
                <div className='d-flex' >
                    <img src={require(`../imagesin/${id}A.jpg`)} alt="" style={{ width: "130px", height: "160px" }} />
                    <div>
                        <div style={{ marginTop: "25px", marginLeft: "18px" }}>
                            <h4>{data[id - 1].atopic}</h4>

                            <h5>{data[id - 1].btopic}</h5>
                        </div>
                        <audio src={require(`../audio/${id}A.mp3`)} controls style={{ marginLeft: "15px" }}></audio>
                    </div>
                    <div style={{ marginLeft: "200px", marginTop: "20px" }}>

                        <img src={require(`../imagec/CATHY.jpg`)} alt="" style={{ width: "130px", height: "110px" }} />
                        <img src={require(`../imagec/MOM.jpg`)} className='mx-5' alt="" style={{ width: "130px", height: "110px" }} />
                        <div><pre>      CATHY                 MOM</pre></div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className='dia my-2' style={{ marginLeft: "150px", overflow: "scroll", width: "630px", height: "73vh", backgroundColor: "cyan" }}>

                        <Dialog id={id} />
                    </div>
                    <div style={{marginLeft:"9vw",marginTop:"30vh"}}>
                        <Recoder />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home
