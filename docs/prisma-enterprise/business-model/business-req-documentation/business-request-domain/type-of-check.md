# Type Of Check

![alt text](<../../../../../static/img/prismaenterprise - int_typeofcheckbase.png>)

## Atomic Check (int_atomiccheck)

Attributes:

1. **TOC Name**: Name of the specific type of check being performed (e.g., identity verification).
2. **TOC Label**: Specific Label of the TOC.
3. **Qualification Place Type**: The Qualification Place Type on each TOC.
4. **TOC Category Type**: The type of check category type.
5. **TOC Segment Type**: The TOC taht was defined by the segmented type (e.g., interim, backoffice).
6. **Description**: TOC Description explanation.

## Related Fields:

1. **Qualification Type ID**: Qualfiication Type ID from the qualification place entity.
2. **TOC Segmented Type Type ID**: TOC Segmented Type ID from the segmented entity.

# Related Entities

## Task Management (int_taskworkitem):

1. **Task Label**: Name or label for a task related to the atomic check.
2. **Description**: Detailed description of the task.
3. **Assigned Date**: Date the task was assigned.
4. **Due Date**: Deadline for the task completion.
5. **Status**: Current status of the task (e.g., pending, completed).
6. **Assignee**: User responsible for the task.

# Related Fields:

1. **Assignee ID**: Links to jhi_user to identify the user assigned to the task.
2. **Screening Request ID**: Links to int_screeningrequest to associate the task with a specific screening request.

# How They Work Together with Type of Check Entity

The "Type of Check" entity acts as the backbone for customizing screening packages and streamlining the screening process. Here's how it interacts with other entities:

## 1. Building Screening Packages

- When a client approaches a screening company, they discuss their specific needs.
- Based on these needs, the company suggests a pre-defined screening package (e.g., "Basic Background Check") or proposes a custom package.
- The "Type of Check" entity comes into play when outlining the specific checks included in each package. The company selects relevant checks from the available options based on the package's purpose (e.g., criminal history check for pre-employment screening, education verification for volunteer screening).

## 2. Linking Checks and Packages (Many-to-Many Relationship)

- A single type of check can be included in multiple screening packages. For example, a "Criminal History Check" might be offered in both "Basic" and "Enhanced" pre-employment packages.
- Conversely, a screening package can combine various types of checks. For example, an "Enhanced Pre-Employment Check" might include criminal history, employment verification, and reference checks.
- This many-to-many relationship is typically implemented through a separate linking table. This table associates specific `int_typeofcheck_id` entries with the relevant `int_screeningpackageservice_id` entries, ensuring clear connections between checks and packages.

## 3. Defining Workflows and Assigning Checks

- Knowing the types of checks involved in a chosen package helps define the workflow for processing the screening request.
- The system can identify if specific checks require researchers with special qualifications (based on the `qualification_required` field in the "Type of Check" entity). This ensures efficient assignment of checks to qualified personnel within the company.

## 4. Consistency and Customization

- The clear definition of types of checks ensures consistency in the screening process across different packages. Clients have a transparent understanding of what information is being verified for each check type.
- The flexibility of this approach allows for customization. By combining different types of checks, the screening company can create specialized packages that address unique client requirements beyond pre-defined options.

## Practical Example

Imagine a company called "SecureScreen" offers various screening packages. A client, "ABC Inc.", requires pre-employment screening for a new Chief Financial Officer (CFO) position. They need a more comprehensive background check than a basic package might offer.

- SecureScreen suggests a custom package built upon their "Enhanced Pre-Employment Check" as a base.
- By consulting the "Type of Check" entity, they identify additional checks relevant for a CFO position, such as:
  - Financial Statement Verification to confirm the accuracy of past financial disclosures.
  - Professional License Verification to ensure the candidate holds the necessary licenses.
- They update the custom package to include these additional checks from the "Type of Check" entity, creating a tailored solution for ABC Inc.'s specific needs.

### Benefits

By leveraging the "Type of Check" entity effectively, SecureScreen can:

- Deliver efficient and customized screening services that meet client expectations.
- Ensure consistent and reliable background checks for all clients.
- Adapt their service offerings by adding or removing types of checks based on industry trends or regulatory changes.

In conclusion, the "Type of Check" entity plays a critical role in the screening process. It empowers screening companies to build customized packages, streamline workflows, and deliver high-quality background checks that cater to diverse client needs.
