# Tolerance Matrix

![alt text](<../../../../../static/img/prismaenterprise - int_tolerancematrixscreeningservice.png>)

![alt text](<../../../../../static/img/prismaenterprise - int_tolerancematrixtemplate.png>)

# Business Request Domain for Tolerance Matrix and Related Entities

## Overview

This document defines the business request domain for managing tolerance matrices and related entities within the screening and atomic check systems. The central entities in this domain are the `Tolerance Matrix Screening Service` and the `Tolerance Matrix Template`, which interact with various other entities such as atomic checks, screening package services, and types of checks.

## Entities and Relationships

### Tolerance Matrix Screening Service

- **Description**: Represents the tolerance matrix associated with a screening service.
- **Attributes**:
  - `id`: Unique identifier for the tolerance matrix screening service.
  - `status_label`: Label for the status.
  - `status_color`: Color associated with the status.
  - `tolerance_description`: Description of the tolerance.
  - `screening_service_id`: Reference to the associated screening service.
  - `type_of_check_id`: Reference to the type of check.

### Tolerance Matrix Template

- **Description**: Represents a template for tolerance matrices.
- **Attributes**:
  - `id`: Unique identifier for the tolerance matrix template.
  - `tolerance_label`: Label for the tolerance.
  - `tolerance_description`: Description of the tolerance.
  - `tolerance_method`: Method used for tolerance.
  - `tolerance_min_range`: Minimum range for tolerance.
  - `tolerance_max_range`: Maximum range for tolerance.
  - `status_label`: Label for the status.
  - `status_color`: Color associated with the status.
  - `type_of_check_category_type_id`: Reference to the type of check category.
  - `type_of_check_segment_type_id`: Reference to the type of check segment.

### Atomic Check

- **Description**: Represents checks or validations that are atomic in nature related to a task.
- **Attributes**:
  - `id`: Unique identifier for the atomic check.
  - `title`: Title of the atomic check.
  - `created_date`: Date when the atomic check was created.
  - `starting_date`: Date when the atomic check started.
  - `due_date`: Due date for the atomic check.
  - `is_qualified`: Boolean indicating if the atomic check is qualified.
  - `atomic_check_summary`: Summary of the atomic check.
  - `atomic_check_result`: Result of the atomic check.
  - `atomic_check_context_info`: Context information for the atomic check.
  - `latest_report`: Latest report of the atomic check.
  - `is_deactivated`: Boolean indicating if the atomic check is deactivated.
  - `agent_id`: Reference to the agent performing the atomic check.
  - `jurisdiction_id`: Reference to the jurisdiction of the atomic check.
  - `package_service_id`: Reference to the package service for the atomic check.
  - `screening_request_id`: Reference to the associated screening request.
  - `type_of_check_id`: Reference to the type of check.
  - `tolerance_matrix_id`: Reference to the tolerance matrix used.
  - `qualification_place_id`: Reference to the place of qualification.
  - `workflow_id`: Reference to the associated workflow.
  - `latest_status_id`: Reference to the latest status of the atomic check.
  - `task_type_id`: Reference to the task type.

### Screening Package Service

- **Description**: Represents services offered within a screening package.
- **Attributes**:
  - `id`: Unique identifier for the screening package service.
  - `screening_service_name`: Name of the screening service.
  - `data_retention`: Data retention policy for the service.
  - `retention_measurement`: Measurement unit for data retention.
  - `cross_country`: Boolean indicating if the service is cross-country.
  - `type_of_check_id`: Reference to the type of check.
  - `package_base_id`: Reference to the base package.

### Type of Check Base

- **Description**: Represents the base information for types of checks.
- **Attributes**:
  - `id`: Unique identifier for the type of check base.
  - `type_of_check_name`: Name of the type of check.
  - `type_of_check_label`: Label for the type of check.
  - `description`: Description of the type of check.
  - `is_qualification_required`: Boolean indicating if qualification is required.
  - `tat_days`: Turnaround time in days.
  - `is_active`: Boolean indicating if the type of check is active.
  - `qualification_place_type_id`: Reference to the type of qualification place.
  - `type_of_check_category_type_id`: Reference to the type of check category.
  - `type_of_check_segment_type_id`: Reference to the type of check segment.

### Type of Check Category Type

- **Description**: Represents categories for types of checks.
- **Attributes**:
  - `id`: Unique identifier for the type of check category.
  - `name`: Name of the check category.
  - `description`: Description of the check category.

### Type of Check Segment Type

- **Description**: Represents segments for types of checks.
- **Attributes**:
  - `id`: Unique identifier for the type of check segment.
  - `name`: Name of the check segment.
  - `description`: Description of the check segment.

## Relationships

- A `Tolerance Matrix Screening Service` can be associated with one `Screening Package Service`.
- A `Tolerance Matrix Screening Service` can be associated with one `Type of Check`.
- A `Tolerance Matrix Template` can be associated with one `Type of Check Category Type`.
- A `Tolerance Matrix Template` can be associated with one `Type of Check Segment Type`.
- An `Atomic Check` can be associated with one `Tolerance Matrix`.
- An `Atomic Check` can be associated with one `Screening Request`.
- A `Screening Package Service` can be associated with one `Type of Check`.
- A `Type of Check Base` can be associated with multiple `Atomic Checks`.
- A `Type of Check Base` can be associated with one `Qualification Place Type`.
- A `Type of Check Base` can be associated with one `Type of Check Category Type`.
- A `Type of Check Base` can be associated with one `Type of Check Segment Type`.

This business request domain defines the structure and relationships necessary to manage tolerance matrices and related entities effectively within the screening and atomic check systems.
