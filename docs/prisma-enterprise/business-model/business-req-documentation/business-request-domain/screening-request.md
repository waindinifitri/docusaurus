---
sidebar_position: 1
---

# Screening Request

This document explains the entity-relationship diagram for a screening company's database. It shows how different pieces of information are related, helping to manage screening requests, clients, contracts, and more.

![alt text](<../../../../../static/img/prismaenterprise - int_screeningrequest.png>)

## Key Tables and Their Purpose

### Screening Request (`int_screeningrequest`)

- **Purpose**: Central table keeping track of all screening requests.
- **Key Details**:
  - Who is being screened
  - Important dates (when the request was made, due dates)
  - Current status of the request

### Person Information (`int_personbase`)

- **Purpose**: Stores personal details of individuals being screened.
- **Key Details**:
  - Full name
  - Date of birth
  - Gender

### Contract Information (`int_screeningpackagecontract`)

- **Purpose**: Details about the contracts your company has with clients for screening services.
- **Key Details**:
  - Contract terms and payment details
  - Start and end dates
  - Specific clauses and penalties

### User Information (`jhi_user`)

- **Purpose**: Manages information about the users who interact with the system (employees of the screening company).
- **Key Details**:
  - User login details
  - Contact information

### Organization Information (`int_organizationbase`)

- **Purpose**: Contains details about client organizations.
- **Key Details**:
  - Organization name
  - Business profile

### Attachments (`int_screeningrequestattachment`)

- **Purpose**: Stores documents and files related to screening requests.
- **Key Details**:
  - File names and paths
  - Document types

### Reports (`int_screeningpublishreport`)

- **Purpose**: Keeps track of reports generated from screening requests.
- **Key Details**:
  - Report content
  - Dates of creation and publication

## How They Work Together

### Central Role of Screening Request

The `int_screeningrequest` table connects to many other tables because each screening request involves multiple pieces of information. For example:

- Is linked to a person being screened (via `int_personbase`).
- Is connected to a contract (via `int_screeningpackagecontract`).
- May involve multiple attachments (via `int_screeningrequestattachment`).
- Results in a report (via `int_screeningpublishreport`).

### Supporting Information

- **Users**: Employees who handle requests have their details stored in `jhi_user`.
- **Organizations**: Client details are in `int_organizationbase`, ensuring each request is tied to the right client.

## Why This Matters

- **Organized Information**: This structure ensures that all related information for a screening request is organized and easily accessible.
- **Efficiency**: Employees can quickly find all relevant details about a screening request, including contracts, reports, and personal information.
- **Security and Compliance**: Sensitive information is managed carefully, ensuring compliance with legal requirements.
- **Client Management**: Helps maintain good relationships with clients by keeping their information and contracts well-organized and up-to-date.

## Practical Example in the Business Request Domain

Let's say a company requests a background check on a new employee:

1. **Request Submission**: A new entry is created in `int_screeningrequest`.
2. **Person Details**: Information about the new employee is stored in `int_personbase`.
3. **Contract Linked**: The request is linked to the appropriate contract in `int_screeningpackagecontract`.
4. **Attachments Added**: Any necessary documents, like the employee's resume, are stored in `int_screeningrequestattachment`.
5. **Report Generated**: Once the screening is complete, a report is created and linked to the request via `int_screeningpublishreport`.
6. **Handled by Users**: Employees managing the request have their actions tracked through the `jhi_user` table.
