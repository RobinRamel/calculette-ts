import Button from '../Button'
import { MouseEvent, useState } from 'react';
import Ecran from '../Ecran';

import './style.scss';

interface Operation {
  sign: string;
  num: [number, number];
  typing: string;
  res: number;
}

const initialState: Operation = {
  sign: '',
  num: [0, 0],
  typing: '',
  res: 0
}

function Calculette() {
  const [operation, setOperation] = useState<Operation>(initialState)

  const buttons: string[][] = [
    ['C', 'del', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['', '0', ',', '='],
  ]

  const handleClickNum = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("click on num : ", e.currentTarget.value )
  }

  const handleClickOperation = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("click on operation : ", e.currentTarget.value  )
  }

  return (
    <div className='calculette'>
        <Ecran total={operation.res} operations={operation.typing}/>
        <div className='buttonArea'>

          {
           buttons.flat().map( (btn, index) => {
            if (btn.length === 0) {
                  return (<div key={index}></div>)
            }
            
            return (<Button value={ btn } key={ index } onClick={ isNaN(Number(btn)) ? handleClickOperation : handleClickNum} />) 

           })
          }
          
        </div>
    </div>
  );
}

export default Calculette;
