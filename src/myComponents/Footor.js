import React from 'react'

export const Footor = () => {
  let footorstyle = {
    position: "relative",
    bottom: "0",
    width: "100%",
    marginTop: "30px"
  }
  return (
    <footer className="bg-dark text-light py-3" style = {footorstyle}> 
      <p className="text-center">
        Copyright &copy; My TodosList.com
      </p>
    </footer>
  )
}

export default Footor
