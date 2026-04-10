import React from 'react'
import "../styles/global.css"

const Layout = ({children}) => (
  <div style={{ height: '100%', paddingLeft: 12, paddingRight: 12, paddingTop: 8, overflow: 'hidden'}}>
    {children}
  </div>
)

export default Layout