# Screening Packege Contract

This diagram focuses on the publication and management of screening reports within a screening company's database. Let's break down the key components and how they interact, explained in a way that's accessible to non-technical business users.

![static/img/prismaenterprise - int_screeningpackageservice.png](<../../../../../static/img/prismaenterprise - int_screeningpackagecontract.png>)

# Screening Package Contract Entity

## Overview

The Screening Package Contract entity captures details about the contractual agreements between a screening company and its clients regarding screening packages.

## Purpose

The main purpose of this entity is to store and manage information related to contracts for screening services. This ensures that all screening requests are processed according to the agreed-upon terms and conditions.

## Key Details

- **Contract ID** (`int_screeningpackagecontract_id`): A unique identifier for each contract.
- **Client ID** (`int_client_id`): References the client in the client management system.
- **Screening Package Base ID** (`int_screeningpackagebase_id`): References the specific Screening Package Base chosen for the contract.
- **Contract Start Date** (`contract_start_date`): The date the contract becomes effective.
- **Contract End Date** (`contract_end_date`): The date the contract expires.
- **Service Level Agreement Days (SLA)** (`service_level_agreement_days`): The number of days for completing screening services as per the contract.

## Relationships with Existing Entities

- **One-to-Many with Screening Request**: A single contract might cover multiple screening requests for different subjects, depending on the client's needs. Each request in the `int_screeningrequest` table could link back to the relevant `int_screeningpackagecontract_id`.
- **One-to-One with Screening Package Base**: A contract typically defines the use of a specific screening package offered by the company. The `int_screeningpackagecontract_id` might link to a single `int_screeningpackagebase_id`.

## How It Works

The Screening Package Contract entity serves as a central agreement point within the system, ensuring that all aspects of the screening process adhere to the client's contractual terms. Here's a step-by-step breakdown:

### 1. Defining the Scope

When a client requests a screening service, they choose a specific Screening Package Base (e.g., "Basic Background Check", "Enhanced Pre-Employment Check"). This selection triggers the creation of a Screening Package Contract.

### 2. Contract Details

The contract captures crucial information like:

- **Chosen Package** (`int_screeningpackagebase_id`)
- **Client Details** (`int_client_id`)
- **Contract Duration** (start and end dates)
- **Service Level Agreements (SLA)** for turnaround times (`service_level_agreement_days`)

### 3. Request Management

During the screening process, individual Screening Request entries are linked back to the relevant Screening Package Contract using the `int_screeningpackagecontract_id`. This ensures that each request adheres to the agreed-upon terms and service levels.

### 4. SLA Enforcement

The SLA defined in the contract (`service_level_agreement_days`) becomes a benchmark for completing the screening services. The system can track progress against this SLA and flag any potential delays.

### 5. Package Consistency

The chosen Screening Package Base dictates the specific Screening Package Service elements included (e.g., criminal history check, employment verification). This ensures consistency in the screening process for each request covered by the contract.

## Practical Example

Imagine a company called "SecureScreen" offers various screening packages. A client, "ABC Inc.", requires pre-employment screening for multiple new hires. They choose SecureScreen's "Enhanced Pre-Employment Check" package and sign a contract outlining the details:

- **Contract Coverage**: Screening for 10 new hires (multiple Screening Request entries).
- **Package Reference**: "Enhanced Pre-Employment Check" package (`int_screeningpackagebase_id`).
- **SLA**: Completion of all checks within 5 business days (`service_level_agreement_days`).

When SecureScreen receives individual screening requests for each new hire at ABC Inc., they link each request to the main contract. The system automatically references the chosen package, ensuring all necessary checks (e.g., criminal history, employment verification, reference checks) are included. The SLA of 5 business days becomes a performance target for completing the screening process.

This cohesive approach ensures transparency and consistency for both SecureScreen and ABC Inc. The client gets the specific level of screening they require within the agreed-upon timeframe, while SecureScreen can efficiently manage the process based on the contractual agreement.
