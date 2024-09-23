import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/path/to/your/profile-picture.jpg" // Update with your profile picture
          alt="Profile Picture"
          width={180}
          height={180}
          priority
        />
        <h1>Doug Jones</h1>
        <p>Web Developer specializing in Node.js and AWS Cloud Infrastructure</p>

        <section className={styles.about}>
          <h2>About Me</h2>
          <p>
            I am a passionate web developer with extensive experience in building scalable applications using Node.js and AWS Cloud services. I enjoy solving complex problems and continuously learning new technologies.
          </p>
        </section>

        <section className={styles.projects}>
          <h2>Utilities</h2>
          <ul>
            <li>
              <Link href="/utils" >
                Utils
              </Link>
            </li>
          </ul>
        </section>

        <section className={styles.contact}>
          <h2>Contact</h2>
          <p>
            Feel free to reach out to me on <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a> or <a href="mailto:your-email@example.com">email</a>.
          </p>
        </section>
      </main>
    </div>
  );
}