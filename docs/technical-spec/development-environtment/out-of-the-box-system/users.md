---
sidebar_position: 1
---

# Users

- admin
- user
- ino_developer
- ino_sysadmin
- ino_businessadmin
- ino_productadmin
- ino_vsp
- ino_kae
- ino_sales
- ino_finance
- ino_auditor
- ino_qc
- ino_clientstaff
- ino_clientmanager
- ino_clientaccountant
- ino_clientauditor
- ino_vendor
- ino_serviceprovider
- ino_freelancer
- ino_fieldagent
- ino_investigator
- ino_surveillance
- ino_duedilligent
- ino_applicant
- ino_guest

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from "react";
import Layout from "@theme/Layout";

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).
