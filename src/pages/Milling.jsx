import Seo from '../components/seo/Seo.jsx'
import Button from '../components/ui/Button.jsx'
import ButtonGroup from '../components/ui/ButtonGroup.jsx'
import CtaBanner from '../components/ui/CtaBanner.jsx'
import MachineProfile from '../components/ui/MachineProfile.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import Section from '../components/ui/Section.jsx'
import { millingIntro, millingMachines } from '../data/machines.js'

const title = 'Precision CNC Milling'

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Capabilities', to: '/capabilities' },
  { label: title },
]

export default function Milling() {
  return (
    <>
      <Seo
        title={title}
        description="Prototype and large production CNC milling on FANUC Robo Drills, a Methods MV 1000L vertical machining center and a KIWA KH-45 horizontal machining center."
      />
      <PageHeader
        title="Precision CNC Milling"
        intro={millingIntro}
        breadcrumbs={breadcrumbs}
      />

      <Section>
        {millingMachines.map((machine, index) => (
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
          <Button to="/capabilities/turning" variant="secondary">
            Precision CNC Turning
          </Button>
        </ButtonGroup>
      </Section>

      <CtaBanner />
    </>
  )
}
