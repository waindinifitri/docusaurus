# Screening Packege Contract

This diagram focuses on the publication and management of screening reports within a screening company's database. Let's break down the key components and how they interact, explained in a way that's accessible to non-technical business users.

![static/img/prismaenterprise - int_screeningpackageservice.png](<../../../../../static/img/prismaenterprise - int_screeningpackagecontract.png>)

## Key Tables and Their Purpose

<!-- ### Screening Request (`int_screeningrequest`)

- **Purpose**: This table holds information about all screening requests received by the company.
- **Key Details**:
  - Subject being screened (e.g., an individual or entity)
  - Important dates (requested, starting, due, and finish dates)
  - Related organizational and contractual information
  - Current status and workflow details

### Screening Publish Report (`int_screeningpublishreport`)

- **Purpose**: This table stores the details of the reports generated from the screening requests.
- **Key Details**:
  - HTML content of the report
  - Dates of creation and publication
  - Version and state of the report
  - Related screening request ID (linking back to `int_screeningrequest`)

### Screening Publish Event History (`int_screeningpublisheventhistory`)

- **Purpose**: This table logs events related to the publication of screening reports.
- **Key Details**:
  - Date and time of the event
  - Any error messages encountered
  - Actor ID (who performed the action)
  - Type of action performed (e.g., report generated, report published)

## How They Work Together

### Creating a Screening Request

- A new screening request is logged in the `int_screeningrequest` table. This entry includes all necessary information about the subject to be screened, important dates, and related organizational details.

### Generating and Publishing Reports

- Once the screening process is complete, a report is generated. This report's details are stored in the `int_screeningpublishreport` table. The `int_screeningpublishreport` table records information such as the HTML content of the report, creation and publication dates, and the associated screening request ID.

### Tracking Events

- Events related to the report's publication are logged in the `int_screeningpublisheventhistory` table. This includes details like when the report was published, any errors that occurred, and the actions taken by users.

## Practical Example

1. **Request Submission**:

   - A client submits a request for a background check on a new employee. This request is recorded in the `int_screeningrequest` table, capturing details about the subject, relevant dates, and the organization requesting the check.

2. **Report Generation**:

   - After completing the background check, a report is generated and its details are stored in the `int_screeningpublishreport` table. This includes the content of the report, when it was created, and when it was published.

3. **Event Logging**:
   - Every action related to the report's publication is logged in the `int_screeningpublisheventhistory` table. For example, if an error occurs during publication, it is recorded along with the date and the user who performed the action.

""" -->
