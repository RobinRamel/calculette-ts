
import './style.scss';
import React from 'react';

type Props = {
  value: string;
  onClick?: React.MouseEventHandler
}


const Button = ({ value, onClick }: Props) => {
  return (
    <button 
      value={value} 
      className={ value.length === 0 ? 'btn disabled' : 'btn' } 
      onClick={onClick}
    >

       { value }  

    </button>
  );
}

export default Button;
