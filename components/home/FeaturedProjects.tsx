import styles from "./FeaturedProjects.module.css";
import Link from "next/link";

export default function FeaturedProjects() {
  return (
    <section className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.kicker}>FEATURED WORK</div>
        <h2 className={styles.title}>Selected projects</h2>
        <p className={styles.subtitle}>
          A snapshot of recent product, front-end, and visual explorations.
        </p>
      </div>

      <div className={styles.grid}>
        <article className={styles.card}>
          <h3>SchedulAI</h3>
          <p>
            An academic planning assistant that parses transcript data and
            surfaces actionable graduation paths for students.
          </p>
          <div className={styles.tags}>
            <span>Product Design</span>
            <span>Full-Stack</span>
          </div>
          <Link href="/projects" className={styles.link}>View details →</Link>
        </article>

        <article className={styles.card}>
          <h3>Research Insights Dashboard</h3>
          <p>
            A responsive dashboard transforming institutional survey data into
            clear visual narratives for decision-makers.
          </p>
          <div className={styles.tags}>
            <span>Front-End</span>
            <span>Data Viz</span>
          </div>
          <Link href="/projects" className={styles.link}>View details →</Link>
        </article>
      </div>
    </section>
  );
}
