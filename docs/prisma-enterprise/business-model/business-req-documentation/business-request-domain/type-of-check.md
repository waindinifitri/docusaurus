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
