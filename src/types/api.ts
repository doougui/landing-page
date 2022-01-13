export type LogoProps = {
  data: {
    attributes: {
      alternativeText: string
      url: string
    }
  }
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    data: {
      attributes: {
        alternativeText: string
        url: string
      }
    }
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: {
    data: {
      attributes: {
        alternativeText: string
        url: string
      }
    }
  }
}

export type TechIcon = {
  icon: {
    data: {
      attributes: {
        alternativeText: string
        url: string
      }
    }
  }
  title: string
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type Concept = {
  title: string
}

export type SectionConceptsProps = {
  title: string
  concepts: Concept[]
}

export type Module = {
  title: string
  subtitle: string
  description: string
}

export interface SectionModulesProps {
  title: string
  modules: Module[]
}

export interface SectionAgendaProps {
  title: string
  description: string
}

export interface PricingBoxProps {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type LandingPageProps = {
  data: {
    attributes: {
      logo: LogoProps
      header: HeaderProps
      sectionAboutProject: SectionAboutProjectProps
      sectionTech: SectionTechProps
      sectionConcepts: SectionConceptsProps
      sectionModules: SectionModulesProps
      sectionAgenda: SectionAgendaProps
      pricingBox: PricingBoxProps
    }
  }
}
