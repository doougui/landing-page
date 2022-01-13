import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import * as S from './styles'
import { SectionAboutUsProps } from 'types/api'

const SectionAboutUs = ({ title, authors: { data } }: SectionAboutUsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {data.map(
        ({
          attributes: {
            name,
            photo: {
              data: {
                attributes: { url }
              }
            },
            role,
            description,
            socialLinks
          }
        }) => (
          <ProfileCard
            key={name}
            name={name}
            role={role}
            image={url}
            socialLinks={socialLinks}
            description={description}
          />
        )
      )}
    </S.Content>
  </Container>
)

export default SectionAboutUs
