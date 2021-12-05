import * as React from 'react'
import {render, screen} from '@testing-library/react'
import Header from '../header'

// !!!! Never write tests like this. It's basically useless
// it's just here to make sure our testing setup works
test('Renders Header', () => {
  render(<Header />)
  expect(
    screen.getByRole('heading', {name: /Remix Tailwind Starter/}),
  ).toBeInTheDocument()
})
