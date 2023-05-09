import React from 'react'
import {render, fireEvent} from 'test-utils'
import Calculator from 'calculator'

test('Render calcualtor', () => {
  const {getByText} = render(<Calculator />)
  const clearButton = getByText('AC')
  fireEvent.click(getByText(/3/))
  expect(clearButton).toHaveTextContent('C')
  fireEvent.click(clearButton)
  expect(clearButton).toHaveTextContent('AC')
})
