import React from 'react';
import {Button} from 'react-bootstrap'
import "./PageNotFound.css"

function PageNotFound(){
  return(
    <div className='hide-navbar'>
      <h1 className='p-4'>Page you are looking for does not exist!</h1>
     
      <button type='button' className='btn btn-primary'>Normal Bootstrap</button><br/><br/>
      <Button className="m-2" variant="primary">React Bootstrap</Button>{' '}
      
      <a href="/">Home</a>
      
    </div>
  )
}

export default PageNotFound