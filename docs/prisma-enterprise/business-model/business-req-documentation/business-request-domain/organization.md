# Organization

![alt text](<../../../../../static/img/prismaenterprise - int_organizationbase.png>)

![alt text](<../../../../../static/img/prismaenterprise - int_group.png>)

# Business Request Domain

This document provides a high-level overview of the key entities and relationships within our organization's database system. The purpose is to help non-technical stakeholders understand how different parts of the system are interconnected.

## Key Entities and Relationships

### 1. **Legal Entities**

- **Legal Entity (`int_organizationlegalentity`)**
  - **Description**: This entity holds information about the legal details of an organization.
  - **Key Fields**: Document Name, Document Type, Issue Date, Expiry Date.
  - **Relationships**: Connected to `int_organizationregistration` through `organization_legalentity_id`.

### 2. **Organization Registration**

- **Organization Registration (`int_organizationregistration`)**
  - **Description**: This entity stores registration details of organizations.
  - **Key Fields**: Organization Name, Registration Number, Contact Person Details.
  - **Relationships**: Links to `int_organizationlegalentity`, `int_organizationaddress`, and `int_organizationphone`.

### 3. **Organization Address**

- **Organization Address (`int_organizationaddress`)**
  - **Description**: Contains address details of organizations.
  - **Key Fields**: Address Type, Address Line, City, State, Country.
  - **Relationships**: Connected to `int_organizationregistration` by `organization_id`.

### 4. **Organization Phone**

- **Organization Phone (`int_organizationphone`)**
  - **Description**: Holds phone details for organizations.
  - **Key Fields**: Phone Type, Phone Number.
  - **Relationships**: Linked to `int_organizationregistration` by `organization_id`.

### 5. **Screening Requests**

- **Screening Request (`int_screeningrequest`)**
  - **Description**: Stores details of screening requests for organizations or individuals.
  - **Key Fields**: Screening Type, Request Date, Completion Date.
  - **Relationships**: Linked to `int_screeningrequestplatform`.

### 6. **Screening Request Platform**

- **Screening Request Platform (`int_screeningrequestplatform`)**
  - **Description**: Contains platform-specific details for screening requests.
  - **Key Fields**: Platform Type, Application User ID.
  - **Relationships**: Connected to `int_screeningrequest`.

### 7. **Contract Information**

- **Screening Package Contract (`int_screeningpackagecontract`)**
  - **Description**: Holds information about the contracts related to screening packages.
  - **Key Fields**: Contract Name, Start Date, End Date.
  - **Relationships**: Linked to `int_organizationlegalentity`.

### 8. **Customer Invoice**

- **Customer Invoice (`int_customerinvoice`)**
  - **Description**: Stores invoice details issued to customers.
  - **Key Fields**: Invoice Number, Amount, Invoice Date.
  - **Relationships**: Connected to `int_screeningpackagecontract`.

### 9. **Organization Employment**

- **Organization Employment (`int_organizationemployment`)**
  - **Description**: Contains employment details within organizations.
  - **Key Fields**: Employment Title, Employment Status.
  - **Relationships**: Connected to `int_organizationregistration`.

### 10. **User Groups and Permissions**

- **User Group (`int_group`)**

  - **Description**: Defines various user groups and their roles within the system.
  - **Key Fields**: Role Name, Active Status, Level Group.
  - **Relationships**: Links to `rel_int_group_user`.

- **Group User Relationship (`rel_int_group_user`)**
  - **Description**: Connects users to their respective groups.
  - **Key Fields**: User ID, Group ID.

### Additional Entities

- **Collection Summary (`int_collectionsummary`)**: Summarizes collection activities.
- **Profile Descriptions (`int_profiledescription`)**: Holds descriptions of profiles.
- **Additional Documents (`int_organizationbase_signed_document`, `int_screeninglegalcontract` and `int_legaldocument`)**: Stores various document details related to legal and organizational matters.

## Summary

The database system is structured to efficiently manage and link various aspects of organizational information, including legal details, registration, address, phone contacts, screening requests, contracts, invoices, employment data, and user groups. Understanding these relationships helps ensure that the organization operates smoothly and all necessary information is readily available for decision-making.
