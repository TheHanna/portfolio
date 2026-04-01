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
      <ul className={styles.apps}>
        <li>
          <div className={styles.app}>Case Status</div>
          <p className={styles.appDescription}>
            Allow attorneys and clients to communicate clearly with o ne another
            about a case
          </p>
        </li>
        <li>
          <div className={styles.app}>Case Status API</div>
          <p className={styles.appDescription}>
            API that acts as the backbone of the Case Status app
          </p>
        </li>
        <li>
          <div className={styles.app}>Web App 2.0/Chrome Extension</div>
          <p className={styles.appDescription}>
            A minimal interface allowing attorneys to triage their open cases
            and address issues with them
          </p>
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
      <ul className={styles.apps}>
        <li>
          <div className={styles.app}>Consumer Marketplace</div>
          <p className={styles.appDescription}>
            Allow customers to browse various insurance products; built in
            Next.js
          </p>
        </li>
        <li>
          <div className={styles.app}>shopping-ui</div>
          <p className={styles.appDescription}>
            Allow agents to browse various insurance products; built in React
          </p>
        </li>
        <li>
          <div className={styles.app}>shopping-api</div>
          <p className={styles.appDescription}>
            Backend for shopping-ui; built using Java with Spring Boot
          </p>
        </li>
        <li>
          <div className={styles.app}>Medicare Advantage Parser</div>
          <p className={styles.appDescription}>
            A Python application that parses and generates SQLite databases of
            both Medicare and carrier plans data, including full benefits
            information and documents
          </p>
        </li>
        <li>
          <div className={styles.app}>Agent Data Feed</div>
          <p className={styles.appDescription}>
            A series of Apache Airflow workflows, created in Python, run via
            Astronomer, for updating internal and external agent data required
            to legally sell insurance in a given geographic area
          </p>
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
      <ul className={styles.apps}>
        <li>
          <div className={styles.app}>AARive</div>
          <p className={styles.appDescription}>
            Allow customers to maintain their exchange and repair orders
          </p>
        </li>
        <li>
          <div className={styles.app}>Quote Accelerator</div>
          <p className={styles.appDescription}>
            Allow sales people and product line to create and respond to quotes,
            generate orders, review backlogs, and check inventory levels &
            historical pricing, both from their desktop and their phones
          </p>
        </li>
        <li>
          <div className={styles.app}>Fulfillment Portal</div>
          <p className={styles.appDescription}>
            Allow operations center to track orders, make purchasing decisions,
            receive quotes, and ensure we're meeting our service level
            agreements
          </p>
        </li>
        <li>
          <div className={styles.app}>TAV-P</div>
          <p className={styles.appDescription}>
            Total Access Visibility Portal used by USAF to check the status of
            their requisitions
          </p>
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
      <hr />
      <h2 className={styles.title}>Front End Web Developer</h2>
      <h3 className={styles.company}>Wiley Education Services</h3>
      <h4 className={styles.duration}>February 2014 to September 2016</h4>
      <p>
        Build online courses in a variety of learning and content management
        systems (Moodle, Blackboard, Canvas, WordPress) using HTML, CSS,
        Javascript, jQuery, and Bootstrap
      </p>
      <p>
        Develop interactive portions of courses using Adobe Illustrator, HTML5,
        CSS3, Bootstrap, jQuery, jQuery UI, SVG, and GSAP (TweenMax,
        TimelineMax)
      </p>
      <p>
        Create and maintain custom tools to speed up various parts of course
        production, such as:
      </p>
      <ul className={styles.apps}>
        <li>
          <div className={styles.app}>Video Helper</div>
          <p className={styles.appDescription}>
            Generate responsive video embed with 3play transcript player using
            HTML5, Foundation, CSS3, Javascript, jQuery, AJAX, and XHR
          </p>
        </li>
        <li>
          <div className={styles.app}>SCORM Builder</div>
          <p className={styles.appDescription}>
            Generate SCOs for use in learning management systems on a MEAN stack
            (MongoDB, ExpressJS, AngularJS, Node.js) and using Grunt, Bower, and
            npm for build and package management
          </p>
        </li>
        <li>
          <div className={styles.app}>Content extraction script</div>
          <p className={styles.appDescription}>
            Extract text and metadata from varying XML structures and unify a
            into single XML file using Python
          </p>
        </li>
        <li>
          <div className={styles.app}>Export Clean HTML</div>
          <p className={styles.appDescription}>
            Google Docs addon that exports document content to equivalent HTML;
            scans document structure and content for key styles and
            words/phrases, and fits them into templates if the user chooses.
            Built using Google App Scripts, HTML, CSS, Javascript, jQuery, and
            the Google Drive API
          </p>
        </li>
      </ul>
      <p>
        Define and document best practices for course production, maintenance,
        and deployment using Google Docs and Confluence
      </p>
      <p>
        Train colleagues on best practices, as well as technologies relevant to
        implementing best practices
      </p>
      <p>
        Advise instructional designers on how to best implement their activities
        and resources within the learning management system
      </p>
      <p>
        Rapidly develop prototypes of courses and media, and respond to
        stakeholder feedback
      </p>
      <p>
        Investigate, communicate, & resolve issues related to course content and
        configuration using Salesforce and Jira
      </p>
      <hr />
      <h2 className={styles.title}>Software Quality Assurance Analyst</h2>
      <h3 className={styles.company}>SingleHop, LLC,</h3>
      <h4 className={styles.duration}>September 2012 to February 2014</h4>
      <p>
        Perform manual and automated QA tests using Selenium, Python, and Sauce
        Labs on four integrated projects
      </p>
      <p>
        Projects included two customer facing web applications, an internal
        server management system, two customer-facing REST API's, and two mobile
        applications
      </p>
      <p>
        Evaluate new bug reports, determine root cause, priority, and possible
        fixes using CodebaseHQ
      </p>
      <p>
        Identify and group related issues, and explain issues to development and
        project management
      </p>
      <p>
        Collaborate on design and execution of test plans with the development
        team
      </p>
      <p>
        Develop, implement, and test fixes for front end apps and API's using
        Javascript, jQuery, PHP, HTML, and CSS
      </p>
      <p>
        Create and maintain a Chrome and Firefox browser extension for quick
        access to internal services using Javascript, jQuery, jQuery UI, HTML,
        and CSS
      </p>
      <hr />
      <h2 className={styles.title}>Multimedia Developer</h2>
      <h3 className={styles.company}>Rasmussen, Inc.</h3>
      <h4 className={styles.duration}>January 2010 to September 2012</h4>
      <p>
        Build online courses for Rasmussen College and external partners;
        perform checklist based QA on courses built by others
      </p>
      <p>
        Developed custom software tools to improve course production efficiency
        using ActionScript 3 on Adobe AIR
      </p>
      <p>
        Collaborate with instructional designers to build interactive Flash
        content within company design guidelines
      </p>
      <p>
        Communicate effectively with colleagues, management, and stakeholders to
        meet deadlines and resolve issues
      </p>
      <p>
        Manage migration of several clients' courses from Angel LMS to Moodle
      </p>
      <p>
        Developed custom software to automate and improve the efficiency of the
        migration efforts
      </p>
      <p>
        Created and documented migration best practices for 6 contract workers
        under my direct supervision
      </p>
      <p>Perform all final QA checks and bug fixes on migrated courses</p>
    </>
  );
}
