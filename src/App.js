
import './App.css';
import {useState} from 'react'

function App() {

  const [weight,setWeight] = useState(null);
  const [height,setHeight] = useState(null);
  const [bmi,setbmi] = useState('');
  const [message,setMessage] = useState('');


  const calBMI =(e)=>{
    e.preventDefault();
    if(weight===null && height===null){
      alert("Provide your weight & height")
    }else{
      const bmi = (weight/(height*height)*703);
      setbmi(bmi.toFixed(1));

      if(bmi<25){
        setMessage("You are underweight")
      }
      else if(bmi>=25 && bmi<30){
        setMessage("You are a healthy weight")
      }
      else{
        setMessage("You are overweight")
      }
    }


    
  }
  return (

    
    <div className="App">
      
      <h2>BMI Calculator</h2>
      <form className='form' onSubmit={calBMI}>
          
          <label>Weight (ibs): </label>
          <input 
          className='in1'
          type="number" 
          value={weight}
          onChange={(e)=>setWeight(e.target.value)}
          placeholder="Put your weight" />

          <label>Height (in): </label>
          <input 
          className='in1'
          type="number" 
          value={height}
          onChange={(e)=>setHeight(e.target.value)}
          placeholder="Put your height" />

          <button className='btn' type="submit">Submit</button>
          <div className='optional'>
              <p>BMI is : {bmi}</p>
              <p>{message}</p>
          </div>
          

      </form>
    </div>
  );
}

export default App;
