# Atomic Check

![alt text](<../../../../../static/img/prismaenterprise - int_atomiccheck.png>)

# Explanation of the Entity-Relationship Diagram for Atomic Checks in the Screening Industry

This diagram focuses on the atomic checks performed as part of the screening process within a screening company's database. Here's a breakdown of the key components and their interactions, explained for non-technical business users.

## Key Tables and Their Purpose

1. **Atomic Check (`int_atomiccheck`)**

   - **Purpose**: Central table that keeps track of detailed checks (atomic checks) performed within a screening request.
   - **Key Details**:
     - Title and description of the check
     - Important dates (created, starting, due, and finished dates)
     - Summary and result of the check
     - Related jurisdiction and type of check

2. **Screening Request (`int_screeningrequest`)**

   - **Purpose**: This table holds information about all screening requests received by the company.
   - **Key Details**:
     - Subject being screened (e.g., an individual or entity)
     - Important dates (requested, starting, due, and finish dates)
     - Related organizational and contractual information
     - Current status and workflow details

3. **Atomic Check Report History (`int_atomiccheckreporthistory`)**

   - **Purpose**: Logs the history of reports generated for each atomic check.
   - **Key Details**:
     - Report dates and versions
     - Modified and final reports
     - Status of the reports

4. **Task Work Item (`int_taskworkitem`)**

   - **Purpose**: Manages individual tasks related to atomic checks.
   - **Key Details**:
     - Task descriptions and dates (assigned, due, removed)
     - Status and assignment details

5. **User Information (`jhi_user`)**

   - **Purpose**: Manages information about the users who interact with the system (employees of the screening company).
   - **Key Details**:
     - User login details
     - Contact information

6. **Workflow and Status (`int_workflow` and `int_workflowstatustype`)**

   - **Purpose**: Tracks the workflow and status of various processes.
   - **Key Details**:
     - Workflow names and types
     - Status labels and descriptions

7. **Jurisdiction (`int_jurisdiction`)**

   - **Purpose**: Stores information about different jurisdictions where checks are performed.
   - **Key Details**:
     - Jurisdiction names and types
     - County information

8. **Type of Check (`int_typeofcheckbase`)**

   - **Purpose**: Defines different types of checks that can be performed.
   - **Key Details**:
     - Names and descriptions of check types
     - Qualification and segmentation details

9. **Screening Package Service (`int_screeningpackageservice`)**

   - **Purpose**: Details about the services offered in screening packages.
   - **Key Details**:
     - Names and retention policies of screening services
     - Types of checks included

10. **Tolerance Matrix for Screening Service (`int_tolerancematrixscreeningservice`)**
    - **Purpose**: Defines tolerance levels for different screening services.
    - **Key Details**:
      - Status labels and descriptions
      - Types of checks and their tolerances

## How They Work Together

### Creating an Atomic Check

- A new atomic check is created and logged in the `int_atomiccheck` table. This entry includes all necessary information about the check, such as title, description, important dates, and results.

### Linking to Screening Requests

- Each atomic check is part of a broader screening request, which is detailed in the `int_screeningrequest` table. This ensures that each check is associated with the correct screening request.

### Generating Reports

- Reports generated for atomic checks are logged in the `int_atomiccheckreporthistory` table. This includes information about the report dates, versions, and status.

### Managing Tasks

- Individual tasks related to atomic checks are tracked in the `int_taskworkitem` table. This helps in managing the workflow and ensuring that all steps in the checking process are completed.

### User Management

- Users who interact with the system, such as employees performing the checks, are recorded in the `jhi_user` table. This table maintains login and contact details.

### Workflow and Status Tracking

- The progress and status of workflows related to atomic checks are tracked using the `int_workflow` and `int_workflowstatustype` tables.

### Jurisdiction and Check Types

- Information about where the checks are performed (jurisdiction) and the type of checks conducted are stored in the `int_jurisdiction` and `int_typeofcheckbase` tables.

### Service Packages and Tolerances

- Details about the services included in screening packages and their retention policies are managed in the `int_screeningpackageservice` table. Tolerances for these services are defined in the `int_tolerancematrixscreeningservice` table.

## Practical Example

1. **Request Submission**:

   - A client submits a screening request. This is recorded in the `int_screeningrequest` table.

2. **Performing Atomic Checks**:

   - Several atomic checks are created for this screening request, with details stored in the `int_atomiccheck` table. Each check is associated with the screening request.

3. **Managing Tasks**:

   - Tasks related to each atomic check are tracked in the `int_taskworkitem` table, ensuring all required actions are completed.

4. **Generating and Logging Reports**:

   - Reports for each atomic check are generated and their history is logged in the `int_atomiccheckreporthistory` table.

5. **Tracking Workflow and Status**:
   - The workflow and status of each check and the overall screening request are monitored using the `int_workflow` and `int_workflowstatustype` tables.

## Summary

In the context of the screening industry, this entity-relationship diagram illustrates how detailed checks (atomic checks) are managed as part of the broader screening process. It ensures that every aspect of an atomic check, from creation to report generation and task management, is documented and tracked. This organized approach enhances the efficiency, accountability, and thoroughness of the screening process, ensuring high standards of service and compliance with industry regulations.
