import React, { useState } from 'react'

export default function Calculator(props) {
  const[result,setresult]=useState([]);
  const operation=['addition', 'division','multiplication','subtraction'];
  const calculate=(a,b)=>{
  a=parseInt(a);
  b=parseInt(b);
  const add=a+b;
  const devid=a/b;
  const multiply=a*b;
  const subtruct=a-b;
  setresult([add,devid,multiply,subtruct])
  return [add,devid,multiply,subtruct]
  }
  return (
    <>
    <div className='row'>
      <div className='col-12'>
        <h5 className='text-danger'> 
    
        </h5>
      </div>

    </div>
    <div className="row">
      <div className="col-4">
        <InputFiels calc={calculate} />
      </div>
      <div className="col-8">
        <Cards result={result} setresult={setresult} operation={operation}/>

      </div>
    </div>
    </>
  )
}

function InputFiels(props) {
  const [firstnumber,setfirstnumber]=useState(0);
  const[secondnumber,setsecondnumber]=useState(0);
  const addnumber=(e)=>{
   

    if(firstnumber===0 || secondnumber===0){
      alert("please insert value inorder to calculate")
    }
    else
    {
      const[a,b,c,d]=props.calc(firstnumber,secondnumber);
    }
  }
  return (
    <form onSubmit={(e)=>addnumber(e)}>
      <div className='row'>
        <div className='col-6'>
          <label htmlFor="exampleInputEmail1" className="form-lable fw-bold ">First Number</label></div>
        <div className=" col-6 mb-3">

          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
           onChange={(e)=>setfirstnumber(e.target.value)}
          />
        </div>
      </div>

      <div className='row'>
        <div className='col-6'>
          <label className="form-lable fw-bold">second number</label></div>
        <div className=" col-6">

          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e)=>setsecondnumber(e.target.value)}
          />
        </div>
      </div>
      <br></br>
      <button type="submit" class="btn btn-outline-success mx-2 fw-bold">calculate</button>
      <button type="button" class="btn btn-outline-danger">cancel</button>

    </form>

  )
}

 function Cards(props) {
  return (
    <div className='row'>
     <div className='col-6'>
     <div className="card text-center">
  <div className="card-header fw-bold bg-info">calculate</div>
  <div className="card-body">
    {props.result.length>0 ?
    <>
       <h5>Add Result: {props.result[0]}</h5>
    <h5>Devid Result: {props.result[1]}</h5>
    <h5>Multiply Result: {props.result[2]}</h5>
    <h5>subtruct Result: {props.result[3]}</h5>
    </>:null}
 
    <h5 className="card-title fw-bold">please enter your numbers</h5>
    <p className="card-text">
      
    </p>
    <a href="#" className="btn btn-primary" onClick={()=>props.setresult([])}>
      clear
    </a>
  </div>
  <div className="card-footer text-muted fw-bold">created by farhat"shams"</div>
</div>

      </div>

      <div className='col-6'>
      <div className="card" style={{ width: "18rem" }}>
  <div className="card-header fw-bold bg-info">operations</div>
  <ul className="list-group list-group-flush">
    <li className="fw-bold" >addition</li>
    <li className="list-group-item fw-bold  ">subtraction</li>
    <li className="list-group-item fw-bold ">Multiply</li>
    <li className="list-group-item fw-bold ">division</li>
  </ul>
</div>

       
    </div>
    </div>
  )
}

