import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = () => {
  return (
    <div>
      <p className='f3'>
        {'This Magic Brain will detect faces in yout pictures. Give it a try!'}
      </p>
      <div className='center'>
        <div className='center form pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='text ' />
          <button className='grow dib w-30 f4 link ph3 pv2 white bg-green'>Detect</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm;