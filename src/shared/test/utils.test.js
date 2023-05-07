import {getFormattedValue} from '../utils'

test('getFormattedValue', () => {
  expect(getFormattedValue('1234.5', 'en')).toBe('1,234.5')
})
