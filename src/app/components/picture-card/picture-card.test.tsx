import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import PictureCard from './picture-card'

describe('Picture card test', () => {
  it('should render correctly', () => {
    render(<PictureCard />)
    expect(screen.getByTestId('picture-card')).toBeDefined()
  })
})
