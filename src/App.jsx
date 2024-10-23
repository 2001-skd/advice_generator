import bottom_icon from './assets/images/icon-dice.svg';
import Pattern_divider from './assets/images/pattern-divider-desktop.svg';
import React, { useEffect, useState } from 'react';

const App = () => {
  const[advice,setAdvice] = useState("");
  const[count,setCount] = useState(0);

  async function handleAdviceGenerator(){
    try{
      let url = `https://api.adviceslip.com/advice`;
    let data = await fetch(url);
    let dataJson = await data.json();
    setCount(dataJson.slip.id);
    setAdvice(dataJson.slip.advice);

    }
    catch(err){
      console.log("the error regarding handle advice generator is", err);
    }
  }

  useEffect(()=>{
    handleAdviceGenerator();
  },[]);

  
  return (
    <section className='bg-[#202632] w-screen h-screen flex items-center justify-center p-5 md:p-0'>
      <div className='advice_box max-w-96 bg-[#313A49] p-10 rounded-md shadow-2xl relative'>
        <div className='top my-5'>
          <p className='advice_count text-[#52FEA8] text-center tracking-widest font-bold'>ADVICE #{count}</p>
        </div>

        <div className='advice_tips'>
          <p className='font-bold text-white text-2xl text-center'>{advice}</p>
        </div>

        <div className='bottom_img my-5'>
          <img src={Pattern_divider} alt='bottom_line'/>
        </div>

        <div className='dice_img absolute bg-[#52FEA8] p-3 rounded-full left-1/2 transform -translate-x-1/2 translate-y-1/2 cursor-pointer hover:shadow-[0px_0px_105px_45px_rgba(45,255,196,0.9)]' onClick={handleAdviceGenerator}>
          <img src={bottom_icon} alt="dice"/>
        </div>
      </div>
    </section>
  )
}

export default App
