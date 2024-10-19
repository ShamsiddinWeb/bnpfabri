import React, { useEffect } from 'react'
import Connection from '../../components/Connection/Connection'

const Contact = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
   <>
     <Connection t={props.t} />
   </>
  )
}

export default Contact