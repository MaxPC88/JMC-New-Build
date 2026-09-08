import Seo from '../components/seo/Seo.jsx'
import CtaBanner from '../components/ui/CtaBanner.jsx'
import MachineProfile from '../components/ui/MachineProfile.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import Section from '../components/ui/Section.jsx'
import { customProducts, productsIntro } from '../data/products.js'

const title = 'Custom Products'

/** Content verbatim from products.html. */
export default function CustomProducts() {
  return (
    <>
      <Seo
        title={title}
        description="Custom products proudly made in the USA: anodized aluminum cribbage boards, tool holder racks and bench top tool changers."
      />
      <PageHeader title="Custom Products for Sale" intro={productsIntro} />

      <Section>
        {customProducts.map((product, index) => (
          <MachineProfile
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            alt={product.alt}
            description={product.description}
            reverse={index % 2 === 1}
          />
        ))}
      </Section>

      <CtaBanner />
    </>
  )
}
