import styles from "./experience.module.css";

export function Experience() {
  return (
    <>
      <h2 className={styles.title}>Senior Software Engineer</h2>
      <h3 className={styles.company}>Case Status</h3>
      <h4 className={styles.duration}>February 2026 to April 2026</h4>
      <p>
        Build and maintain web applications using Next.js, Ember, React, Python,
        Flask, and SQLAlchemy
      </p>
      <ul>
        <li>
          <em>Case Status:</em> Allow attorneys and clients to communicate
          clearly with o ne another about a case
        </li>
        <li>
          <em>Case Status API:</em> API that acts as the backbone of the Case
          Status app
        </li>
        <li>
          <em>Web App 2.0/Chrome Extension:</em> A minimal interface allowing
          attorneys to triage their open cases and address issues with them
        </li>
      </ul>
      <p>
        Worked directly with the CTO to implement new features and fix bugs in
        existing features
      </p>
      <p>
        Leveraged AI technologies to assist with development, including root
        cause analysis and test creation
      </p>
      <hr />
      <h2 className={styles.title}>Senior Software Engineer II</h2>
      <h3 className={styles.company}>GoHealth</h3>
      <h4 className={styles.duration}>July 2020 to January 2026</h4>
      <p>
        Build and maintain web applications using Node.js, Next.js, Hapi, React,
        Java, Spring Boot, Python, MySQL, and SQLite
      </p>
      <ul>
        <li>
          <em>Consumer Marketplace:</em> Allow customers to browse various
          insurance products; built in Next.js
        </li>
        <li>
          <em>shopping-ui:</em> Allow agents to browse various insurance
          products; built in React
        </li>
        <li>
          <em>shopping-api:</em> Backend for shopping-ui; built using Java with
          Spring Boot
        </li>
        <li>
          <em>Medicare Advantage Parser:</em> A Python application that parses
          and generates SQLite databases of both Medicare and carrier plans
          data, including full benefits information and documents
        </li>
        <li>
          <em>Agent Data Feed:</em> A series of Apache Airflow workflows,
          created in Python, run via Astronomer, for updating internal and
          external agent data required to legally sell insurance in a given
          geographic area
        </li>
      </ul>
      <p>
        Lead the technical implementation of Optimizely across our stack,
        allowing stakeholders to better control the who, what, when, where, and
        how of a feature launch
      </p>
      <p>
        Work directly with the product team to design and implement new full
        stack features
      </p>
      <p>
        Leverage AI technologies to assist with development, including root
        cause analysis and test creation
      </p>
      <p>Collaborate with developers across different teams and time zones</p>
      <hr />
      <h2 className={styles.title}>Digital Software Engineer</h2>
      <h3 className={styles.company}>AAR Corporation</h3>
      <h4 className={styles.duration}>September 2016 to July 2020</h4>
      <p>
        Build and maintain web and mobile applications using Node.js, Express,
        NativeScript, Angular/AngularJS, Laravel, and MySQL
      </p>
      <ul>
        <li>
          <em>AARive:</em> Allow customers to maintain their exchange and repair
          orders
        </li>
        <li>
          <em>Quote Accelerator:</em> Allow sales people and product line to
          create and respond to quotes, generate orders, review backlogs, and
          check inventory levels & historical pricing, both from their desktop
          and their phones
        </li>
        <li>
          <em>Fulfillment Portal:</em> Allow operations center to track orders,
          make purchasing decisions, receive quotes, and ensure we're meeting
          our service level agreements
        </li>
        <li>
          <em>TAV-P:</em> Total Access Visibility Portal used by USAF to check
          the status of their requisitions
        </li>
      </ul>
      <p>
        Implement multiple flavors of authentication and authorization (SAML,
        OAuth, OIDC)
      </p>
      <p>Debug and report on applications built in Java and PL/SQL</p>
      <ul>
        <li>Web Service applications built in Java on Oracle ADF BC</li>
        <li>
          PL/SQL views, packages, and stored procedures leveraged by the web
          services layer
        </li>
      </ul>
      <p>
        Maintain CI/CD pipelines using Jenkins, Azure Web Apps, and Bitbucket
      </p>
      <p>
        Integrate CI/CD notifications into HipChat, Slack, and Microsoft Teams
      </p>
      <p>Manage access to Bitbucket at an organizational level</p>
      <p>
        Spearhead the technical implementation of AppDynamics across multiple
        applications
      </p>
      <p>Utilize AppDynamics to detect and triage issues</p>
      <p>
        Work with product managers at both a technical and design level to
        produce features
      </p>
      <p>
        Collaborate with developers across different teams, companies, and time
        zones
      </p>
    </>
  );
}
