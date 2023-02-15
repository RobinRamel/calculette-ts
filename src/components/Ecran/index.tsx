
import './style.scss';

type Props = {
  total: number;
  operations?: string;
}

function Ecran({total, operations = ''}: Props) {
  return (
    <div className='ecran'>
      <div className='operations'> 
        <span> { operations } </span> 
      </div>
      <div className='total'>
        <span> { total } </span> 
      </div>
    </div>
  );
}

export default Ecran;
