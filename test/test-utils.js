// import React from 'react'
// import PropTypes from 'prop-types'
import {render as renderRtl} from '@testing-library/react'

// function Wrapper({children}) {
//   return <>{children}</>
// }

// Wrapper.prototype = {
//   children: PropTypes.children,
// }

export function render(ui, options) {
  return renderRtl(ui, {
    ...options,
  })
}

export * from '@testing-library/react'
