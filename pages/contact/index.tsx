import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { VscGithubAlt } from 'react-icons/vsc';
import { MdOutlineEmail } from 'react-icons/md';
import styles from './contact.module.css';

export const ContactPage: React.FC = () => {
  return (
    <main className={styles.main}>
      <h2>Contact Me</h2>
      <table className={styles.contactTable}>
        <tbody>
          <tr>
            <td>
              <VscGithubAlt className={styles.icon} />
            </td>
            <td>
              <a
                href="https://github.com/th3dougler"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <CiLinkedin className={styles.icon} />
            </td>
            <td>
              <a
                href="https://www.linkedin.com/in/doug-jones2"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <MdOutlineEmail className={styles.icon} />
            </td>
            <td>
              <a href="mailto:th3dougler@gmail.com" target="_blank">
                Email
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default ContactPage;
