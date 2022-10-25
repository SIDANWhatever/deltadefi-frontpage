import React, { useEffect, useState } from 'react'
import { basicIntroPage } from '../assets/StaticContent'
import ReactPlayer from 'react-player'

const BasicIntro = () => {
  const [hasWindow, setHasWindow] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [])

  return (
    <div className="intro">
      <div className="box">
        <div className="words">
          <div className="title">
            <span>{basicIntroPage.title}</span>
          </div>
          <div className="desc">
            <span>{basicIntroPage.description}</span>
          </div>
        </div>
        <div className="video">
          {hasWindow && (
            <ReactPlayer
              url={'https://www.youtube.com/watch?v=' + basicIntroPage.introYTID}
              controls={true}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default BasicIntro
