import React from 'react'
import { TitleBox, Text } from '../atoms'

interface PageHeaderProps {
  short: string
  long: string
}

const PageHeader = ({ short, long }: PageHeaderProps) => {
  return (
    <TitleBox size="full">
      <TitleBox>
        <Text>{short}</Text>
      </TitleBox>
      <TitleBox>
        <Text size="l">{long}</Text>
      </TitleBox>
    </TitleBox>
  )
}

const CenterHeader = ({ short, long }: PageHeaderProps) => {
  return (
    <TitleBox size="full">
      <TitleBox type="centerTitle">
        <Text align="center">{short}</Text>
      </TitleBox>
      <TitleBox type="centerTitle">
        <Text align="center" size="l">
          {long}
        </Text>
      </TitleBox>
    </TitleBox>
  )
}

export { PageHeader, CenterHeader }
