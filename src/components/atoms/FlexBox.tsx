import { styled } from '@src/stitches.config'
import { flexCenter } from '../style/flex'

export const FlexBox = styled('div', {
  ...flexCenter,

  variants: {
    size: {
      full: {
        width: '$full',
        height: '$full'
      }
    },
    type: {
      menu: {
        position: 'absolute',
        top: '0',
        right: '0',
        width: '$full',
        flexDirection: 'column'
      }
    },
    background: {
      default: {},
      blur: {
        backdropFilter: 'blur(10px)'
      }
    },
    transition: {
      true: {
        transition: 'all 600ms ease'
      }
    },
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
    }
  }
})

export const TitleBox = styled(FlexBox, {
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  margin: '0.5rem 0',

  variants: {
    type: {
      centerTitle: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }
  }
})
