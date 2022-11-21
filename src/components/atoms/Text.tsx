import { styled } from '@src/stitches.config'
import { flexCenter } from '../style/flex'

export const Text = styled('span', {
  color: '$textPrimary',
  width: '$full',
  height: '$full',

  variants: {
    size: {
      s: {
        '@bp1': {
          fontSize: '0.7rem'
        },
        '@bp2': {
          fontSize: '0.8rem'
        }
      },
      sm: {
        '@bp1': {
          fontSize: '0.9rem'
        },
        '@bp2': {
          fontSize: '1rem'
        }
      },
      m: {
        '@bp1': {
          fontSize: '1.2rem'
        },
        '@bp2': {
          fontSize: '1.35rem'
        }
      },
      ml: {
        '@bp1': {
          fontSize: '1.35rem'
        },
        '@bp2': {
          fontSize: '1.7rem'
        }
      },
      l: {
        '@bp1': {
          fontSize: '1.5rem'
        },
        '@bp2': {
          fontSize: '2rem'
        }
      },
      xl: {
        '@bp1': {
          fontSize: '2rem'
        },
        '@bp2': {
          fontSize: '2.5rem'
        }
      }
    },
    color: {
      primary: {
        color: '$textPrimary'
      },
      primaryLight: {
        color: '$textPrimaryLight'
      },
      secondary: {
        color: '$textSecondary'
      }
    },
    align: {
      center: {
        ...flexCenter,
        textAlign: 'center'
      }
    }
  }
})
