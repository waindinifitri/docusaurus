# Task Work Item

![alt text](<../../../../../static/img/prismaenterprise - int_taskworkitem.png>)

# Understanding the Task Work Item Entity

The "Task Work Item" entity is essential in managing and tracking the various tasks involved in the screening process. Here's a detailed explanation of its purpose, key details, relationships, and how it integrates with other entities.

## Purpose

The "Task Work Item" entity captures the details of tasks that are part of the screening process. These tasks can include anything from background checks to document verifications, each requiring different levels of effort and attention.

## Key Details (Example Fields)

- **id (Primary Key):** Unique identifier for the task work item.
- **label:** Brief description or label for the task.
- **description:** Detailed information about the task.
- **assigned_date:** Date the task was assigned.
- **due_date:** Deadline for completing the task.
- **task_ended:** Indicates if the task is completed.
- **assignee_id:** Foreign key referencing the user assigned to the task.
- **screening_request_id:** Foreign key referencing the associated screening request.
- **workflow_id:** Foreign key referencing the workflow to which the task belongs.
- **atomic_check_id:** Foreign key referencing the specific atomic check related to the task.
- **latest_status_id:** Foreign key referencing the latest status of the task.

## Relationships with Existing Entities

### 1. One-to-Many with Task Discussion

- **int_taskdiscussion:** Each task work item can have multiple discussions or comments associated with it, providing a history of communication and updates.

### 2. One-to-Many with Task Event History

- **int_taskeventhistory:** Tracks the events related to the task, such as changes in status, reassignments, or completions, offering a timeline of the task's progress.

### 3. Many-to-Many with Work Item Tag

- **rel_int_workitemtag_work_item:** Tags can be assigned to tasks to categorize and prioritize them. This many-to-many relationship allows a task to have multiple tags and a tag to be associated with multiple tasks.

### 4. One-to-Many with User

- **jhi_user:** The assignee of the task is linked to a user entity, indicating who is responsible for the task.

### 5. One-to-Many with Screening Request

- **int_screeningrequest:** The task work item is linked to a specific screening request, ensuring that all tasks are connected to the overall screening process.

### 6. One-to-Many with Workflow

- **int_workflow:** Each task belongs to a workflow, which outlines the sequence and structure of tasks necessary for completing a screening request.

### 7. One-to-One with Workflow Status Type

- **int_workflowstatustype:** Defines the status of the workflow at various stages, helping track progress and identify bottlenecks.

## How They Work Together with Task Work Item

The "Task Work Item" entity acts as a critical component in managing the workflow of the screening process. Here's how it integrates with other entities:

### Task Assignment and Management

- **Task Creation:** When a screening request is initiated, various tasks (work items) are created and assigned to users (assignees) based on their roles and expertise.
- **Task Tracking:** Each task has a due date and status that are monitored throughout the workflow. The task's progress is tracked through event history and status updates.

### Communication and Collaboration

- **Discussions:** Users can add comments and updates to tasks, ensuring clear communication and documentation of the task's history.
- **Event History:** Any changes to the task, such as status updates or reassignment, are recorded, providing a comprehensive log of the task's lifecycle.

### Workflow Integration

- **Workflow Management:** Tasks are part of a larger workflow that guides the entire screening process. The workflow status types help in identifying the current state of the workflow and any potential delays.

### Practical Example

Imagine a screening company, "SecureScreen," managing a pre-employment background check for a client, "XYZ Corp." Here's how the task work item entity facilitates the process:

1. **Task Creation:** SecureScreen creates multiple tasks, such as "Verify Employment History" and "Check Criminal Records," for the screening request.
2. **Task Assignment:** These tasks are assigned to specific team members based on their expertise. For example, an employment verification expert is assigned the task of verifying employment history.
3. **Task Management:** Each task has a due date and status. Team members update the task status as they progress, and any changes are logged in the event history.
4. **Communication:** Team members add comments to tasks, documenting any findings or issues. This ensures that all information is captured and communicated effectively.
5. **Workflow Integration:** The tasks are part of the pre-employment screening workflow. The workflow status is updated as tasks are completed, providing a clear view of the overall progress.

### Benefits

By leveraging the "Task Work Item" entity effectively, SecureScreen can:

- **Efficiently Manage Tasks:** Ensure all tasks are tracked and completed within the agreed timeframe.
- **Enhance Communication:** Maintain clear and documented communication for each task.
- **Monitor Progress:** Track the status of each task and the overall workflow, identifying and addressing any delays promptly.

In conclusion, the "Task Work Item" entity is crucial for managing the detailed tasks involved in the screening process. It ensures that all tasks are tracked, documented, and completed efficiently, contributing to a smooth and transparent screening process.
