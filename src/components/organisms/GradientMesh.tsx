import { styled } from '@src/stitches.config'
import { Gradient } from './Gradient.js'
import React from 'react'

interface GradientMeshProps {
  meshId?: string
  meshColors?: string[]
}

const GradientMesh = ({
  meshId = 'defaultMesh',
  meshColors = defaultMesh
}: GradientMeshProps = {}) => {
  React.useEffect(() => {
    const gradient = new Gradient()
    gradient.initGradient(`#${meshId}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <GradientCanvas
      css={{
        '--gradientColor1': meshColors[0],
        '--gradientColor2': meshColors[1],
        '--gradientColor3': meshColors[2],
        '--gradientColor4': meshColors[3]
      }}
      id={meshId}
      data-transition-in></GradientCanvas>
  )
}

const GradientCanvas = styled('canvas', {
  zIndex: -1,
  position: 'absolute',
  width: '100%',
  height: '100vh',
  top: 0
})

const defaultMesh: string[] = ['#c3e4ff', '#6ec3f4', '#eae2ff', '#b9beff']

export { GradientMesh }
