import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import Nav from './Nav'

export interface Children {
  children: ReactNode
}

function Base({
  children
}: Children) {
  return (
    <>
    <Nav />
    <main>
      {children}
    </main>
    </>
    
  )
}

Base.propTypes = {
  children: PropTypes.node
}

export default Base
