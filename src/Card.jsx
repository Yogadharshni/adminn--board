import WorkIcon from '@mui/icons-material/Work';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MessageIcon from '@mui/icons-material/Message';
import { useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
export function Card({nm}) {

  const [count, setCount] = useState()
  return (
    <div className='card' style={{borderLeft: `5px solid ${nm.color}`}} >
      {/* <LinearProgress variant="determinate" value={10} /> */}
     
      <div className='row card-row'>
        <div className='col col-text'>
          <h6 className='card-title'  style={{color: `${nm.color}`}}>{nm.name}</h6>
          <h4 className='card-title-doler'>{nm.money}<LinearProgress className="perchantage"variant="determinate" value={parseInt(`${nm.perchantage}`)}
         style={{display:`${nm.display}`}}
         
  
        /></h4>

        </div>
        <div className='col col-icon' >
        
        <div Style={"font-variation-settings: 'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48;opacity:0.4;"}>
          <div className="material-symbols-outlined innericon">{nm.icon}</div>
      </div>
        </div>
      </div>
    </div>
  );
}
