import PropTypes from 'prop-types';
import ButtonsArea from '../ButtonsArea';
import Ecran from '../Ecran';

import './style.scss';

function Calculette() {
  return (
    <div className='calculette'>
        <Ecran />
        <ButtonsArea />
    </div>
  );
}

Calculette.propTypes = {

};

export default Calculette;
