import styles from './EquipmentList.module.css'

/**
 * Renders one category of the equipment schedule.
 *
 * Quantities sit in their own column so the list scans like the shop's own
 * capital equipment list, and each entry keeps its published specification
 * detail rather than being summarized away.
 *
 * @param {{id, name, note?, items: {qty?, name, detail?}[]}} category
 */
export default function EquipmentList({ category }) {
  return (
    <section className={styles.category} aria-labelledby={category.id}>
      <h2 id={category.id} className={styles.heading}>
        {category.name}
      </h2>

      {category.note ? <p className={styles.note}>{category.note}</p> : null}

      <ul className={styles.items}>
        {category.items.map((item) => (
          <li key={item.name} className={styles.item}>
            <span className={styles.qty} aria-hidden={!item.qty}>
              {item.qty ? (
                <>
                  <span className="u-visually-hidden">Quantity: </span>
                  {item.qty}
                </>
              ) : null}
            </span>
            <span className={styles.details}>
              <span className={styles.name}>{item.name}</span>
              {item.detail ? (
                <span className={styles.detail}>{item.detail}</span>
              ) : null}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
