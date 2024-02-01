import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {IconButton } from '@mui/material';


const wpicon = () => {
  return (
    <div>
      <IconButton href="https://wa.me/6363681250" target="_blank" style={{ color: 'green' }}>
              <FontAwesomeIcon className='icon' style={{ fontSize: '50px', position: 'fixed', bottom: '340px', right: '30px' }}  icon={faWhatsapp} />
      </IconButton>
    </div>
  )
}

export default wpicon
