import React  from 'react'


const Footer = () => {
    const root = {
        margin: '20px',
    }
  return (
    <footer style={root}>
          &copy; Web 2 {new Date().getFullYear()}
        </footer>
  )
}

export default Footer


