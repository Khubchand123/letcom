import React from 'react'
import Recoder from "../components/Recoder"
const Speaking = () => {
    const ques=[
        
          "Tell me about yourself.",
          "Why do you want to work for our company?",
           "What are your greatest strengths and weaknesses?",
           "Why are you looking for a change?",
           "Tell me about the gap in your resume.",
           "How would you rate yourself on a scale of 1 to 10?",
           "What is your biggest achievement so far?",
           "Where do you see yourself in 5 years?",
           "Why should we hire you?",
          "How do you deal with criticism?"
        
    ]
    // const handle=()=>{
    // document.getElementById('rec').style.marginLeft='0px';
    // }
  return (
    <div>
        {
            ques.map((q)=>{
                return(
                    // <div>
                    <div style={{textAlign:"center"}}>
                     <p className='my-2'>{q}</p>
                    <textarea style={{marginLeft:""}} name="" id="" cols="150" rows="10"></textarea>
                    <div>
                    <Recoder/>
                    </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Speaking
