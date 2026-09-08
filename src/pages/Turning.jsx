import Seo from '../components/seo/Seo.jsx'
import Button from '../components/ui/Button.jsx'
import ButtonGroup from '../components/ui/ButtonGroup.jsx'
import CtaBanner from '../components/ui/CtaBanner.jsx'
import MachineProfile from '../components/ui/MachineProfile.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import Section from '../components/ui/Section.jsx'
import { turningIntro, turningMachines } from '../data/machines.js'

const title = 'Precision CNC Turning'

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Capabilities', to: '/capabilities' },
  { label: title },
]

export default function Turning() {
  return (
    <>
      <Seo
        title={title}
        description="Prototype and large production CNC turning on Nakamura turning centers with LNS quick load bar feeders, live tooling, sub spindles and high pressure coolant."
      />
      <PageHeader
        title="Precision CNC Turning Machine Shop"
        intro={turningIntro}
        breadcrumbs={breadcrumbs}
      />

      <Section>
        {turningMachines.map((machine, index) => (
          <MachineProfile
            key={machine.id}
            id={machine.id}
            name={machine.name}
            image={machine.image}
            alt={machine.alt}
            description={machine.description}
            reverse={index % 2 === 1}
          />
        ))}

        <ButtonGroup>
          <Button to="/equipment" variant="secondary">
            See the full equipment list
          </Button>
          <Button to="/capabilities/milling" variant="secondary">
            Precision CNC Milling
          </Button>
        </ButtonGroup>
      </Section>

      <CtaBanner />
    </>
  )
}
