import { styled } from '@src/stitches.config'
import { flexCenter } from '../style/flex'

export const Card = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  overflow: 'hidden',
  boxShadow: '4px 8px 10px 0 rgba(0, 0, 0, 0.2)',
  borderRadius: '20px',

  variants: {
    flexResponsive: {
      cr: {
        '@bp1': {
          flexDirection: 'column'
        },
        '@bp2': {
          flexDirection: 'row'
        }
      },
      rc: {
        '@bp1': {
          flexDirection: 'row'
        },
        '@bp2': {
          flexDirection: 'column'
        }
      }
    },

    shadow: {
      none: {
        boxShadow: 'none'
      }
    },

    only: {
      mobile: {
        '@bp2': {
          display: 'none'
        }
      },
      desktop: {
        '@bp1': {
          display: 'none'
        }
      }
    },

    type: {
      landing: {
        minWidth: '300px',
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto auto 0 0',

        '@bp1': {
          width: '80%',
          height: '70%'
        },

        '@bp2': {
          width: '600px',
          height: '90%'
        }
      },
      info: {
        ...flexCenter,
        borderRadius: '50px',
        padding: '0 2rem',
        width: '90%',

        '@bp1': {
          height: '120px',
          margin: '25px'
        },
        '@bp2': {
          height: '100%'
        }
      }
    }
  }
})
