import styles from '@/styles/ValuePropositions.module.css';

export default function ValuePropositions({ items }) {
  return (
    <section className={styles.valueSection}>
      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.title} className={styles.valueItem}>
            <div className={styles.icon}>{item.icon}</div>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}