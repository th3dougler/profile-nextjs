import styles from './index.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Doug Jones</h1>
        <p>
          Web Developer specializing in Node.js and AWS Cloud Infrastructure
        </p>

        <section className={styles.about}>
          <h3>About Me</h3>
          <p>
            I am a passionate web developer with extensive experience in
            building scalable applications using Node.js and AWS Cloud services.
            I enjoy solving complex problems and continuously learning new
            technologies.
          </p>
        </section>

        <section className={styles.projects}>
          <h3>
            <Link href="/utils">Utilities</Link>
          </h3>
        </section>

        <section className={styles.contact}>
          <h3>Contact</h3>
          <p>
            Feel free to reach out to me on{' '}
            <a
              href="https://www.linkedin.com/in/doug-jones2"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{' '}
            or <a href="mailto:th3dougler@gmail.com">email</a>.
          </p>
        </section>
      </main>
    </div>
  );
}
