import { styled } from '@src/stitches.config'
import { flexCenter } from '../style/flex'

export const IconWrapper = styled('div', {
  ...flexCenter,
  height: '3rem',
  width: '3rem',

  variants: {
    size: {
      default: {
        height: '3rem',
        width: '3rem'
      },
      full: {
        height: '100%',
        width: '100%'
      },
      s: {
        height: '2rem',
        width: '2rem'
      },
      sm: {
        height: '3.5rem',
        width: '3.5rem'
      },
      m: {
        height: '5rem',
        width: '5rem'
      },
      l: {
        height: '10rem',
        width: '10rem'
      }
    },
    flexResponsive: {
      sm: {
        '@bp1': {
          height: '2.5rem',
          width: '2.5rem'
        },
        '@bp2': {
          height: '3rem',
          width: '3rem'
        }
      },
      m: {
        '@bp1': {
          height: '4rem',
          width: '4rem'
        },
        '@bp2': {
          height: '5rem',
          width: '5rem'
        }
      },
      l: {
        '@bp1': {
          height: '8rem',
          width: '8rem'
        },
        '@bp2': {
          height: '10rem',
          width: '10rem'
        }
      }
    }
  }
})
