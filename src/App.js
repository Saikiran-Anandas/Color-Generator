import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [color,setColor] = useState('');
  const [error,setError] = useState(false);
  const [list,setList] = useState(new Values('#f15025').all(10));


  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      // console.log(colors);      
      setList(colors);
    } catch (error) {
      setError(true)
      console.log(error);
    }
  }

  return (
    <>
    <section className='container'>
    <h3>color generator by Saikiran Anandas</h3>
    <form onSubmit = {handleSubmit}>
      <input type='text' vaue={color} onChange = {(e)=>setColor(e.target.value)} placeholder = "#f15025" 
      className={`${error ? 'error' : null}`} />
      <button className='btn' type='submit'>submit</button>
    </form>
    </section>
    <section className='colors'>
      {list.map((color,index)=>{
        console.log(color);
        return <SingleColor key={index} {...color} index={index} hexColor = {color.hex}/>
      })}
    </section>
    <h2>Designed and Developed by <a href="https://github.com/Saikiran-Anandas">Saikiran Anandas</a></h2>
    </>
  );
}

export default App
