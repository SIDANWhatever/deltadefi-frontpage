import React from 'react'

interface PageHeaderProps {
  short: string
  long: string
}

const PageHeader = ({ short, long }: PageHeaderProps) => {
  return (
    <div className="pageHeader">
      <div className="phContent">
        <div className="phShort">
          <span>{short}</span>
        </div>
        <div className="phLong">
          <span>{long}</span>
        </div>
      </div>
    </div>
  )
}

const CenterHeader = ({ short, long }: PageHeaderProps) => {
  return (
    <div className="pageHeader">
      <div className="pchContent">
        <div className="phShort">
          <span>{short}</span>
        </div>
        <div className="phLong">
          <span>{long}</span>
        </div>
      </div>
    </div>
  )
}

export { PageHeader, CenterHeader }
