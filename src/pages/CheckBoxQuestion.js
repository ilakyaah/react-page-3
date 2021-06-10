import React from 'react'
import {qBank} from './question'

const CheckBoxQuestion = () => {
    return (
         <section>
                    {qBank.map((question) => {
                       return (
                           <div className="container" key={question.id}>
                               <div className="row mt-4">
                                   <div className="col-sm-1">
                                       <input className="form-check-input" type="checkbox"  id="flexCheckChecked" checked={question.checked === 'true'}/>
                                   </div>
                                    <div className="col-sm-1">
                                       <span className="fw-bold">{question.id}.</span>
                                   </div>
                                   <div className="col-sm-10"><span className="fw-bold">{question.question}</span>
                                   </div>
                                  
                               </div>
                               <div className="row mt-3">
                               <div className="col-sm-1"></div>
                               <div className="col-sm-1"></div>
                                <div className="col-sm-10">
                                        {question.answers.map((answer,index) =>{
                                             return(
                                               <span className="fw-bold" style={{paddingRight: "30px"}} key={index}>{answer.text}</span>
                                             )
                                        })}
                                          <hr className="mt-4" style={{border: "1px solid grey"}}></hr>
                                  </div>  
                               </div>
                           </div>
                       )
                    })}
                    <footer className="mt-3" >
                        <button type="button" className="btn btn-secondary" style={{marginRight:'5px'}} >previous</button>
                         <button type="button" className="btn btn-secondary">Next</button>
                         <button type="button" className="btn btn-primary" style={{float: "right"}}>Done</button>
                    </footer>
                </section>
    )
}

export default CheckBoxQuestion