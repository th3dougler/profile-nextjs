import React from 'react';
import styles from './index.module.css';

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <h2>Web Developer - Toronto - Canada</h2>

      <section>
        <h3>About Me</h3>
        <p>
          Hello, World! I`m Doug. I enjoy scalable, maintainable code and long
          walks on the beach.
        </p>
        <p>
          I am most confident working with React, Node.js and TypeScript. I am
          experienced in architecting, building, mantaining and scaling
          cloud-based infrastructure. To that end, I am comfortable with both
          relational and non relational databases, monolithic and event driven
          microservice architectures, REST API`s, among other things.
        </p>
        <p>
          I consider myself a full stack developer, including platform
          engineering - though I will admit that my front end work is stronger
          when I collaborate with a designer; Unless you think this website is
          beautiful - then I guess dont worry about it
        </p>
        <p>
          If youd like to know more, please check out my contact information. I
          am not seeking work at this time, but I am always open to networking
        </p>
      </section>
    </main>
  );
};

export default Home;
