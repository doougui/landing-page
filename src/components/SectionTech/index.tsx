import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { SectionTechProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionTech = ({ title, techIcons }: SectionTechProps) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techIcons.map(
          ({
            title: techTitle,
            icon: {
              data: {
                attributes: { alternativeText, url }
              }
            }
          }) => (
            <S.Icon key={techTitle}>
              <S.Icons
                src={getImageUrl(url)}
                alt={alternativeText}
                loading="lazy"
              />
              <S.IconsName>{techTitle}</S.IconsName>
            </S.Icon>
          )
        )}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
