# Screening Packege Service

This diagram focuses on the publication and management of screening reports within a screening company's database. Let's break down the key components and how they interact, explained in a way that's accessible to non-technical business users.

![static/img/prismaenterprise - int_screeningpackageservice.png](<../../../../../static/img/prismaenterprise - int_screeningpackageservice.png>)

# Explanation of the Entity-Relationship Diagram for Screening Package Services in the Screening Industry

This diagram shows how various components related to screening package services are managed within a screening company's database. It highlights how different aspects of screening services, checks, and packages are interconnected and how they support the overall screening process.

## Key Tables and Their Purpose

1. **Screening Request (`int_screeningrequest`)**

   - **Purpose**: Records details of each screening request made.
   - **Key Details**:
     - Information about the subject being screened (type, full name, entity ID).
     - Important dates (requested, starting, due, and finish dates).
     - Workflow and status information related to the request.

2. **Screening Package Service (`int_screeningpackageservice`)**

   - **Purpose**: Details about the specific screening services offered as part of a package.
   - **Key Details**:
     - Service name, data retention policy, and type of check involved.
     - Links to the base package it belongs to and other related attributes.

3. **Atomic Check (`int_atomiccheck`)**

   - **Purpose**: Records individual checks that are part of a screening request.
   - **Key Details**:
     - Title and summary of the check, qualification status, and results.
     - Related dates and associated workflow information.

4. **Tolerance Matrix Screening Service (`int_tolerancematrixscreeningservice`)**

   - **Purpose**: Defines the tolerance levels and status labels for screening services.
   - **Key Details**:
     - Status labels, colors, descriptions, and the type of check they apply to.

5. **Type of Check Base (`int_typeofcheckbase`)**

   - **Purpose**: Defines the types of checks that can be performed.
   - **Key Details**:
     - Name and description of the check, whether qualification is required, and active status.

6. **Screening Package Base (`int_screeningpackagebase`)**

   - **Purpose**: Stores base information about screening packages.
   - **Key Details**:
     - Package name, type, retention measurements, and subject type.

7. **Screening Package Service Methodology (`int_screeningpackageservicemethodology`)**

   - **Purpose**: Defines the methodology and rules associated with a screening package service.
   - **Key Details**:
     - Methodology value and associated rule template ID.

8. **Screening Package Services SLA (`int_screeningpackageservicesla`)**
   - **Purpose**: Defines the Service Level Agreements (SLA) for screening package services.
   - **Key Details**:
     - SLA days and package service ID.

## How They Work Together

### Collecting and Managing Screening Information

- **Screening Request**: Initiates the process by recording all necessary details about the subject and the request itself. This table connects to many others to pull in details needed for the screening.
- **Atomic Check**: Each screening request includes multiple atomic checks that detail individual assessments done as part of the screening process.

### Defining Screening Services and Packages

- **Screening Package Service**: Provides detailed information about the specific services offered, including what data is retained and the type of checks involved.
- **Screening Package Base**: Offers overarching details about the screening packages available, linking to the services they include.

### Managing Tolerances and Methodologies

- **Tolerance Matrix Screening Service**: Defines acceptable tolerance levels and statuses for the screening services, ensuring that each check is assessed consistently.
- **Screening Package Service Methodology**: Lays out the methodologies and rules that guide how each screening service should be performed.

### Ensuring Service Levels

- **Screening Package Services SLA**: Establishes SLAs to ensure that the screening services are delivered within agreed time frames.

## Practical Example

1. **Initiating a Screening Request**:

   - A company requests a screening for an individual.
   - The details are recorded in the `int_screeningrequest` table, which includes information about the subject and the necessary dates.

2. **Performing Checks**:

   - As part of the request, multiple `int_atomiccheck` records are created, each detailing a specific check.
   - These checks are linked to the screening request and follow the methodologies defined in `int_screeningpackageservicemethodology`.

3. **Assessing Results**:

   - The results of each check are assessed against the tolerances defined in `int_tolerancematrixscreeningservice`.
   - The status and workflow of the request are updated accordingly.

4. **Managing Services and SLAs**:
   - The services included in the screening package are detailed in the `int_screeningpackageservice` table.
   - SLAs defined in `int_screeningpackageservicesla` ensure that the checks are completed within the agreed time frame.

## Summary

In the context of the screening industry, this entity-relationship diagram illustrates how a screening company organizes and manages its screening services and packages. It ensures that all aspects of the screening process, from the initial request to the final assessment, are efficiently handled and that services are delivered as promised.
