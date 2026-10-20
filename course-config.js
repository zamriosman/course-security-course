/*  Cloud Computing Security — course settings
    Edit this file on GitHub (pencil icon), then "Commit changes". The site updates in about a minute.

    1) VIDEOS
       Paste a YouTube link between the quotes for any page. Leave "" for no video.
       Any YouTube link format works:
         "https://www.youtube.com/watch?v=VIDEO_ID"
         "https://youtu.be/VIDEO_ID?t=90"          (starts at 1:30)
       To show a title under the player, or more than one video, use:
         "part1-a": { url: "https://youtu.be/VIDEO_ID", title: "What is cloud computing?" },
         "part1-b": [ "https://youtu.be/FIRST_ID", { url: "https://youtu.be/SECOND_ID", title: "Part two" } ],

    2) QUIZ RULES
       lockSections: true  → each section opens only after the previous section's quiz is passed.
       lockSections: false → all sections are open; quizzes are for practice only.
       passMark: number of correct answers (out of 5) needed to pass.

    Instructor tip: add ?instructor to the address (…/index.html?instructor or …/?instructor) to open every
    section without passing quizzes. Learners use the normal address.
*/
window.COURSE_CONFIG = {
  lockSections: true,
  passMark: 4
};

window.COURSE_VIDEOS = {
  // Part 0 · Course Overview
  "part0": "",        // Part 0 overview page
  "part0-a": "",      // The course at a glance
  "part0-b": "",      // The ten topics
  "part0-c": "",      // How to use this workbook

  // Part 1 · Concepts and Architecture of Cloud Computing
  "part1": "https://youtu.be/xEHv_Cz6RyA",        // Part 1 overview page (learning outcomes + introduction)
  "part1-a": "https://youtu.be/Z2lSd3NhrIQ",      // 1.1 Key Cloud Computing Definitions
  "part1-b": "",      // 1.2 Roles and Responsibilities in Cloud Computing
  "part1-c": "",      // 1.3 Core Cloud Computing Characteristics
  "part1-d": "",      // 1.4 Cloud Building Block Technologies
  "part1-e": "",      // 1.5 Categories of Cloud Services
  "part1-f": "",      // 1.6 Cloud Deployment Models
  "part1-g": "",      // 1.7 Shared Considerations for the Cloud
  "part1-h": "",      // 1.8 Impact of Cloud and Related Technologies
  "part1-i": "",      // Topic 1 Summary and Key Terms

  // Part 2 · Cloud Security Concepts and Design Principles
  "part2": "",        // Part 2 overview page (learning outcomes + introduction)
  "part2-a": "",      // 2.1 Identity and Access Control
  "part2-b": "",      // 2.2 Network and Virtualisation Security
  "part2-c": "",      // 2.3 Common Cloud Threats
  "part2-d": "",      // 2.4 Cloud Security Hygiene
  "part2-e": "",      // 2.5 Functional Security Requirements in the Cloud
  "part2-f": "",      // 2.6 Security Considerations for Cloud Service Types
  "part2-g": "",      // 2.7 Cloud Design Patterns
  "part2-h": "",      // 2.8 DevOps Security
  "part2-i": "",      // Topic 2 Summary and Key Terms

  // Part 3 · The Cloud Data Lifecycle
  "part3": "",        // Part 3 overview page (learning outcomes + introduction)
  "part3-a": "",      // The Data Lifecycle
  "part3-b": "",      // 3.1 Phase 1 — Create
  "part3-c": "",      // 3.2 Phase 2 — Store
  "part3-d": "",      // 3.3 Phase 3 — Use
  "part3-e": "",      // 3.4 Phase 4 — Share
  "part3-f": "",      // 3.5 Phase 5 — Archive
  "part3-g": "",      // 3.6 Phase 6 — Destroy
  "part3-h": "",      // 3.7 Cloud Data Flows
  "part3-i": "",      // Topic 3 Summary and Key Terms

  // Part 4 · Cloud Data Security
  "part4": "",        // Part 4 overview page (learning outcomes + introduction)
  "part4-a": "",      // 4.1 Concepts of Cloud Data Security
  "part4-b": "",      // 4.2 Data Obfuscation
  "part4-c": "",      // 4.3 Information Rights Management
  "part4-d": "",      // 4.4 Keys, Secrets and Certificate Management
  "part4-e": "",      // 4.5 Data Discovery
  "part4-f": "",      // 4.6 Data Classification and Policy
  "part4-g": "",      // Topic 4 Summary and Key Terms

  // Part 5 · Cloud Infrastructure and Platform Components
  "part5": "",        // Part 5 overview page (learning outcomes + introduction)
  "part5-a": "",      // 5.1 Physical Cloud Environment
  "part5-b": "",      // 5.2 Network Cloud Environment
  "part5-c": "",      // 5.3 Cloud Communication
  "part5-d": "",      // 5.4 Core Cloud Compute Resource
  "part5-e": "",      // 5.5 Cloud Virtualisation Resource
  "part5-f": "",      // 5.6 Core Cloud Storage Components
  "part5-g": "",      // Topic 5 Summary and Key Terms

  // Part 6 · Data Centre Design and Risk Analysis
  "part6": "",        // Part 6 overview page (learning outcomes + introduction)
  "part6-a": "",      // 6.1 Secure Data Centre Logical Design
  "part6-b": "",      // 6.2 Physical Data Centre Design
  "part6-c": "",      // 6.3 Data Centre Environmental Design
  "part6-d": "",      // 6.4 Design Resilient Environments
  "part6-e": "",      // 6.5 Cloud Infrastructure Risk Assessment
  "part6-f": "",      // 6.6 Cloud Vulnerabilities, Threats and Attacks
  "part6-g": "",      // 6.7 Cloud Infrastructure Risk Mitigation Strategies
  "part6-h": "",      // Topic 6 Summary and Key Terms

  // Part 7 · Application Security Awareness and Life Cycles
  "part7": "",        // Part 7 overview page (learning outcomes + introduction)
  "part7-a": "",      // 7.1 Cloud Application Architecture Elements
  "part7-b": "",      // 7.2 Cloud Development
  "part7-c": "",      // 7.3 SDLC Business Requirements and Phases
  "part7-d": "",      // 7.4 Common Software Vulnerabilities
  "part7-e": "",      // 7.5 Software Threat Modelling Methods
  "part7-f": "",      // 7.6 Secure Coding Methodologies
  "part7-g": "",      // 7.7 Software Configuration Management and Versioning
  "part7-h": "",      // Topic 7 Summary and Key Terms

  // Part 8 · Software Assurance and Validation
  "part8": "",        // Part 8 overview page (learning outcomes + introduction)
  "part8-a": "",      // 8.1 Functional and Non-functional Testing
  "part8-b": "",      // 8.2 Security Testing Methodologies
  "part8-c": "",      // 8.3 Abuse Case Testing
  "part8-d": "",      // 8.4 OWASP API Security
  "part8-e": "",      // 8.5 Supply Chain Management
  "part8-f": "",      // 8.6 Third-party Software Management
  "part8-g": "",      // Topic 8 Summary and Key Terms

  // Part 9 · Identity and Access Management Solutions
  "part9": "",        // Part 9 overview page (learning outcomes + introduction)
  "part9-a": "",      // 9.1 Cloud IAM Services
  "part9-b": "",      // 9.2 Federated Identity
  "part9-c": "",      // 9.3 Identity Providers
  "part9-d": "",      // 9.4 Single Sign-on
  "part9-e": "",      // 9.5 Multi-factor Authentication
  "part9-f": "",      // 9.6 Cloud Access Security Brokers
  "part9-g": "",      // 9.7 Managed Security Service Providers
  "part9-h": "",      // 9.8 Secrets Management
  "part9-i": "",      // Topic 9 Summary and Key Terms

  // Part 10 · Legal Requirements, Privacy Issues, and Risk Management in the Cloud
  "part10": "",       // Part 10 overview page (learning outcomes + introduction)
  "part10-a": "",     // 10.1 Introduction to Legal, Risk and Compliance
  "part10-b": "",     // 10.2 Legal Requirements in Cloud Computing
  "part10-c": "",     // 10.3 Privacy Issues in the Cloud
  "part10-d": "",     // 10.4 Risk Management in Cloud Computing
  "part10-e": "",     // 10.5 Compliance in Cloud Computing
  "part10-f": "",     // 10.6 Case Studies and Real-World Scenarios
  "part10-g": "",     // Topic 10 Summary and Key Terms
};
