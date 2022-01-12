const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      data {
        attributes {
          alternativeText
          url
        }
      }
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        data {
          attributes {
            alternativeText
            url
          }
        }
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      data {
        attributes {
          ...logo
          ...header
        }
      }
    }
  }
`

export default GET_LANDING_PAGE
