# Communication Transcript

![alt text](<../../../../../static/img/prismaenterprise - int_communicationtranscriptrecord.png>)

So, heres come what is the communication transcript entity means and what is the table that related to the entity.

Basically this is the management of archived file for a screening request process. And what maybe come in the future is it will classified based on the specific status

### Communication Transcript (`int_communicationtranscriptrecord`)

Attributes:

1. **Label**: Name of the specific label that being performed (e.g., identity verification).
2. **File Name**: What is the file name restored on the database.
3. **File Path**: Where is the file restored on the database.
4. **Mime Type**: The media type of the file.
5. **Extension**: Extension type of the file (ex: png, jpg, mp3, etc).
6. **Call Type**: The conducted screening media (ex: phone, videocall, etc)
7. **Created Date**: When the screening conducted date.
8. **Recorded Date**: When the screening recorded date.
9. **Recorded Place Location** : The location that recording being conducted.
10. **Recorder By**: Who the person that record the screening process.
11. **File Description**: Description or remark for the file recorded.
12. **People Names in The Recording**: Who is th person that involved on the screening.
13. **Is Deleted**: Flagging for the file, it is deleted or not.
14. **Associated Person Recorded By ID**: The association person that relate to the file recording.
15. **Associated Person In the Recorded ID**: The persone who has been recorded when the screening conducted.
16. **Atomic Check**: The related atomic check based on the screening process

## Related Fields:

1. **Atomic Check Id**: Links to int_jurisdiction to specify the area of the check.
2. **Person ID**: Links to int_atomicchecktasktype to define the type of task involved in the check.

# Related Entities

## Atomic Check (int_atomiccheck):

1. **Check Title**: Name of the specific check being performed (e.g., identity verification).
2. **Start Date**: Date when the check begins.
3. **Due Date**: Deadline for completing the check.
4. **Check Summary**: Summary of the check's findings.
5. **Check Result**: Result of the check (e.g., passed, failed).
6. **Jurisdiction**: Region or area where the check is conducted.
7. **Status**: Current status of the check (e.g., pending, in progress, completed).

# Related Fields:

1. **Assignee ID**: Links to jhi_user to identify the user assigned to the task.
2. **Screening Request ID**: Links to int_screeningrequest to associate the task with a specific screening request.
