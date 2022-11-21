import { styled } from '@src/stitches.config'
import { Label } from '@src/components/atoms/Label'

export const Button = styled(Label, {
  color: '$textPrimary',
  backgroundColor: '$bgPrimary',
  fontWeight: 'light',
  padding: '1rem',
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '$bgPrimaryLight'
  },

  variants: {
    background: {
      transparent: {
        backgroundColor: 'transparent',
        '&:hover': {
          cursor: 'pointer',
          backgroundColor: 'transparent'
        }
      }
    },
    color: {
      primary: {
        color: '$textPrimary'
      },
      secondary: {
        color: '$textSecondary'
      }
    },
    size: {
      m: {
        padding: '2rem',
        width: '20rem',
        fontSize: '1.5rem'
      }
    }
  }
})
