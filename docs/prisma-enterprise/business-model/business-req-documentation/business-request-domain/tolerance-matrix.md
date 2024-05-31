# Tolerance Matrix

![alt text](<../../../../../static/img/prismaenterprise - int_tolerancematrixscreeningservice.png>)

![alt text](<../../../../../static/img/prismaenterprise - int_tolerancematrixtemplate.png>)

## Atomic Check (int_atomiccheck)

Attributes:

1. **Check Title**: Name of the specific check being performed (e.g., identity verification).
2. **Start Date**: Date when the check begins.
3. **Due Date**: Deadline for completing the check.
4. **Check Summary**: Summary of the check's findings.
5. **Check Result**: Result of the check (e.g., passed, failed).
6. **Jurisdiction**: Region or area where the check is conducted.
7. **Status**: Current status of the check (e.g., pending, in progress, completed).

## Related Fields:

1. **Jurisdiction ID**: Links to int_jurisdiction to specify the area of the check.
2. **Task Type ID**: Links to int_atomicchecktasktype to define the type of task involved in the check.
3. **Workflow ID**: Links to int_workflow to track the workflow process.
4. **Latest Status ID**: Links to int_workflowstatustype to specify the current status in the workflow.

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
