import React from "react";
import styles from "./About.module.css"; // Corrected the import

const About = () => {
  return (
    <div className={styles.About}>
      <h1>Welcome to the Developer Community!</h1>

      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <p>
            We are a thriving community of developers, tech enthusiasts, and
            learners united by a passion for innovation and collaboration.
            Whether you're a seasoned professional or embarking on your coding
            journey, our platform is designed to inspire, connect, and empower.
          </p>
          <p>
            In a rapidly evolving tech world, staying ahead requires teamwork
            and shared knowledge. Join us to explore limitless opportunities and
            grow together.
          </p>
        </div>
        <img
          src="https://cdn.dribbble.com/users/2401141/screenshots/5487982/developers-gif-showcase.gif"
          alt="Developer Community"
          className={styles.aboutImage}
        />
      </div>

      <section className={styles.missionSection}>
        <h2>Our Mission</h2>
        <p className={styles.missionText}>
          Our mission is to build an inclusive platform where individuals can
          connect, share ideas, and collaborate on projects that push the
          boundaries of innovation. Together, we aim to foster a culture of
          continuous learning and creative problem-solving.
        </p>

        <div className={styles.missionImages}>
          <img
            src="https://media.giphy.com/media/jpZvG8KmaVtF6/source.gif"
            alt="Networking"
            className={styles.missionImage}
          />
          <img
            src="https://cdn.dribbble.com/users/2436871/screenshots/5708416/________.gif"
            alt="Learning Resources"
            className={styles.missionImage}
          />
          <img
            src="https://media.giphy.com/media/9AUI1HHGTnz7a/source.gif"
            alt="Collaboration Opportunities"
            className={styles.missionImage}
          />
        </div>
      </section>

      <section className={styles.offerSection}>
        <h2>What We Offer</h2>
        <ul className={styles.offerList}>
          <li>
            <strong>Networking:</strong>
            Connect with mentors, industry experts, and peers through our
            events, forums, and community discussions.
          </li>
          <li>
            <strong>Learning Resources:</strong>
            Access tutorials, webinars, and workshops that keep you ahead in the
            ever-changing tech landscape.
          </li>
          <li>
            <strong>Collaboration Opportunities:</strong>
            Participate in hackathons, open-source projects, and group
            initiatives to make a meaningful impact.
          </li>
        </ul>
      </section>

      <section className={styles.joinSection}>
        <h2>Join Us Today!</h2>
        <p className={styles.joinText}>
          Become a part of a vibrant, like-minded community where innovation
          thrives. Share your experiences, learn from others, and contribute to
          groundbreaking projects. Together, let’s shape the future of
          technology.
        </p>
      </section>
    </div>
  );
};

export default About;
