import { useRouteError } from "react-router-dom";

import React from 'react'

const Errorpage = () => {
    const error = useRouteError()
    console.log(error);
  return (
    <div>
        <h1>Opss!!</h1>
        <p> sorry bro but something went wrong here</p>
        <p>{error.message || error.statusText}</p>
    </div>
  )
}

export default Errorpage