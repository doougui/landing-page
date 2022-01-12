import React from 'react'
import { LogoProps } from 'types/api'
import * as S from './styles'

const Logo = ({
  data: {
    attributes: { alternativeText, url }
  }
}: LogoProps) => <S.LogoWrapper src={url} alt={alternativeText} />

export default Logo
