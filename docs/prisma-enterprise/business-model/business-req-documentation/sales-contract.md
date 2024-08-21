# Sales Contract Form

The draft of sales contract, from EBS and non EBS flow:

![alt text](../../../../static/img/sales_contract.png)

need to verify :

1. is it make sense to do this flow at the operation and how to efficience the flow for the stakeholder (both EBS and non EBS)
2. ...

# Creating the markdown content for the sales contract process flow

markdown_content = """

## Sales Contract Process Flow

This document describes the step-by-step process of our sales contract workflow. This process ensures that potential clients are managed efficiently from initial contact through to the completion of their contracts and service activation.

### 1. Potential Client Identification

- **Potential Client from Marketplace**: The process begins when a potential client is identified from the marketplace.

### 2. Account Creation

- **Create Basic/Temporary Account**: A basic or temporary account is created for the potential client.

### 3. Initial Communication

- **Send Email**: An email is sent to inform the System Admin, Sales team, and the potential client about the new account.

### 4. Verification by Sales Team

- **Create Task for Sales for Verifying**: A task is created for the Sales team to verify the new account.
- **IDR Required?**: The system checks if additional identity verification (IDR) is required.
  - **Yes**: The account verification is done manually by the Sales team.
  - **No**: The process skips to activating the client account.

### 5. Activation and Engagement

- **Is Verified?**: The system checks if the account is verified.
  - **Yes**: The client account is activated.
  - **No**: The Sales team engages with the potential client to gather necessary information for verification.

### 6. Package Selection

- **Fetch/Display Basic Package Services**: The available basic package services are fetched and displayed to the client.
- **Is Purchase Indicator?**: The system checks if the client has selected a package.
  - **Yes**: An email is sent to the Sales team indicating the package selection.
  - **No**: The Sales team engages with the client to assist with package selection.

### 7. Contract Creation

- **Create Package Contract**: A package contract is created based on the client's selection.
- **Send Email to Sales and Client**: An email is sent to the Sales team and the client with the contract details.
- **Get Package Contract**: The client receives the package contract.
- **Client Complete Agreement**: The client completes the agreement process.

### 8. Agreement and Document Handling

- **Client Review and Download the Agreement**: The client reviews and downloads the agreement.
- **Review and Sign the Agreement**: The client reviews and signs the agreement.
- **Upload Supporting Documents**: The client uploads any necessary supporting documents.
- **Setting Up Internal Name for Client Preferences**: The system sets up an internal name based on the client's preferences.
- **Send Email to Client**: An email is sent to the client confirming the setup.
- **Generate Signature Manifest Attribute Form**: A form is generated for the client's signature manifest attributes.

### 9. Case Management

- **Is Activated?**: The system checks if the contract is activated.
  - **Yes**: The process continues to case management.
  - **No**: The client is followed up by the Sales team.
- **Create Case Brief for Operations Team**: A case brief is created for the Operations team.
- **Assign Case to Operations Team**: The case is assigned to the Operations team.
- **Analyze Case**: The Operations team analyzes the case details.
- **Assign TOC to Analyst**: The Terms of Contract (TOC) is assigned to an analyst.
- **Is EDD Required?**: The system checks if Extended Due Diligence (EDD) is required.
  - **Yes**: An EDD screening request is created.
  - **No**: The process skips to operational follow-up.

### 10. Operational Follow-Up

- **Follow Up with Operations Team**: The Operations team follows up on the case.
- **Kick Off Meeting with Operations Team**: A kickoff meeting is held with the Operations team.
- **Report to Client**: The Operations team reports back to the client.

### 11. Screening Request (if EDD is required)

- **Activate Client Account**: The client account is activated.
- **Create Screening Request**: A screening request is created.
- **Submit Screening Request**: The screening request is submitted.
- **Dispatching Atomic Check**: An atomic check is dispatched.
- **Atomic Check Report**: The results of the atomic check are compiled into a report.
- **Task Work Item**: The task is completed, and the work item is closed.
  """
