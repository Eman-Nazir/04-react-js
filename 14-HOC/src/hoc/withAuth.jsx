import React from 'react'

const withAuth = (WrapComponent) => {
  return function Protected(props){
    // const isLoggedIn = false;
    const isLoggedIn = true;
    if(!isLoggedIn) return(
        <h3>Please login to contnue  </h3>
    )
    return (
    <WrapComponent {...props}/>

    )
  }

}

export default withAuth
