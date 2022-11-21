import { styled } from '@src/stitches.config'
import { flexCenter } from '../style/flex'

export const Nav = styled('div', {
  ...flexCenter,
  justifyContent: 'flex-end',
  zIndex: '1',
  height: '5rem',
  width: '$full',
  color: '$textPrimary',
  backgroundColor: 'transparent',
  position: 'absolute',
  top: '0',

  '@media (max-width: 900px)': {
    padding: '0 1rem'
  },
  '@media (min-width: 900px)': {
    padding: '0 2rem'
  }
})
