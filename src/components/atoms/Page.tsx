import { styled } from '@src/stitches.config'
import { FlexBox } from './FlexBox'

export const Page = styled(FlexBox, {
  backgroundColor: '$bgSecondary',
  height: '100vh',
  overflow: 'hidden',
  zIndex: '0',

  variants: {
    background: {
      secondary: {
        backgroundColor: '$themeColor1'
      }
    },
    type: {
      footer: {
        height: '40vh',
        backgroundColor: '$bgPrimary'
      }
    }
  }
})
