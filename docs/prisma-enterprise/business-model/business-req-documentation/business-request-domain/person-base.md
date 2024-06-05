# Person Base

![alt text](<../../../../../static/img/prismaenterprise - int_personbase.png>)

# Explanation of the Entity-Relationship Diagram for Personal Information Management in the Screening Industry

This diagram shows how personal information is managed within a screening company's database. It highlights the various types of personal data collected and how these data points are related to each other and to the screening requests.

## Key Tables and Their Purpose

1. **Person Base (`int_personbase`)**

   - **Purpose**: Central repository for basic personal information about individuals.
   - **Key Details**:
     - Full name, gender, date of birth, place of birth
     - Status information related to the person

2. **Contact Information**

   - **Address (`int_contactaddress`)**:
     - **Purpose**: Stores various addresses for a person.
     - **Key Details**: Address type, details, and related geographical information.
   - **Email (`int_contactemail`)**:
     - **Purpose**: Stores email addresses.
     - **Key Details**: Email type and address.
   - **Phone (`int_contactphone`)**:
     - **Purpose**: Stores phone numbers.
     - **Key Details**: Phone type, number, and extension.
   - **Social (`int_contactsocial`)**:
     - **Purpose**: Stores social media account information.
     - **Key Details**: Social channel type and account details.
   - **Web (`int_contactweb`)**:
     - **Purpose**: Stores web links related to a person.
     - **Key Details**: Web link type and URL.

3. **Affiliation (`int_personaffiliation`)**

   - **Purpose**: Records organizational affiliations of a person.
   - **Key Details**: Affiliation details, start and end dates, and status.

4. **Alias (`int_personalias`)**

   - **Purpose**: Manages alternative names or aliases of a person.
   - **Key Details**: Alias names.

5. **Certification and License (`int_personcertificationlicense`)**

   - **Purpose**: Keeps track of certifications and licenses held by a person.
   - **Key Details**: Certification name, issuer, issue, and expiration dates.

6. **Education (`int_personeducation`)**

   - **Purpose**: Records educational background.
   - **Key Details**: Education title, level, dates, and institution.

7. **Employment (`int_personemployment`)**

   - **Purpose**: Manages employment history.
   - **Key Details**: Employment title, role, company, and dates.

8. **Legal Identity (`int_personlegalidentity`)**

   - **Purpose**: Stores legal identity documents.
   - **Key Details**: Document name, type, and file information.

9. **Nationality (`int_personnationality`)**

   - **Purpose**: Manages nationality details.
   - **Key Details**: Country and status information.

10. **Skills (`int_personskills`)**

    - **Purpose**: Records skills and proficiency levels.
    - **Key Details**: Skill names and proficiency levels.

11. **Person Status (`int_personstatus`)**

    - **Purpose**: Stores various status information.
    - **Key Details**: Marital status, blood type, religion, etc.

12. **Screening Request (`int_screeningrequest`)**
    - **Purpose**: Links personal information to screening requests.
    - **Key Details**: Screening subject details, dates, requester information, and current status.

## How They Work Together

### Collecting and Managing Personal Information

- Personal information about individuals is collected and stored in various tables related to their contact information, affiliations, education, employment, skills, and more.
- Each piece of information is linked back to the central `int_personbase` table, ensuring a unified view of an individual's data.

### Using Personal Information in Screening Requests

- When a screening request is initiated, the personal information relevant to the subject of the screening is linked to the `int_screeningrequest` table.
- This ensures that all necessary personal details are available for the screening process, allowing for a comprehensive evaluation.

### Practical Example

1. **Collecting Data**:

   - An individual's personal data is collected, including addresses, emails, phone numbers, social media accounts, educational background, employment history, and certifications.
   - This data is stored across various tables (`int_contactaddress`, `int_contactemail`, `int_personeducation`, etc.) and linked back to the `int_personbase` table.

2. **Initiating a Screening Request**:

   - A screening request is created and recorded in the `int_screeningrequest` table.
   - The individual's personal data is linked to this screening request, providing all necessary information for the screening process.

3. **Managing the Screening Process**:
   - The screening request progresses through various stages, with the current status and workflow details managed in the `int_screeningrequest` table.
   - Throughout the process, the individual's personal information is referenced as needed to complete the screening.

## Summary

In the context of the screening industry, this entity-relationship diagram illustrates how a screening company manages and utilizes personal information. It ensures that all relevant personal data is collected, organized, and linked to screening requests, facilitating a thorough and efficient screening process.
