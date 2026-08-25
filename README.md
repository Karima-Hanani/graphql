# GraphQL 

GraphQL is a query language and API technology that lets clients request exactly the data they need from a server, instead of receiving a fixed response.

## ✨ Features

* 🔐 **User authentication**

  * Login using the platform's authentication API.
  * Stores the authentication token for authenticated GraphQL requests.
  * Logout functionality.

* 👤 **User profile**

  * Username / login
  * First and last name
  * Gender
  * City
  * Profile avatar
  * Other user attributes retrieved from GraphQL

* 📊 **XP & Level**

  * Displays the user's total XP.
  * Displays the user's current level.


* 🛠️ **Skills**

  * Retrieves skill transactions from GraphQL.
  * Uses a visual skill chart to make the data easier to understand.

* ⚖️ **Audit ratio**

  * Displays the user's audit ratio.
  * Provides a visual representation of the ratio.

---

## 🛠️ Technologies

### Frontend

* HTML5
* CSS3
* JavaScript
* GraphQL

### API

The application uses the platform's **GraphQL API** to retrieve profile and transaction data.

GraphQL is used instead of requesting large predefined responses because the application can request exactly the fields it needs.

---

## 📂 Project Structure

```text
graphql/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── main.js
│   ├── router.js
│   ├── auth/
│   ├── graphql/
│   ├── components/
│   ├── charts/
│   └── pages/
│
├── assets/
│   └── log.png
│
└── README.md
```

---

## 📊 Data Visualization

The dashboard converts the GraphQL data into visual components.


## 🧠 Important GraphQL Concepts Used

### Fields

Request only the fields required by the application:

```graphql
user {
  login
  firstName
  lastName
}
```

### Arguments

Arguments can modify how data is retrieved:

```graphql
attrs(path: "city")
```

### Aliases

Aliases rename fields in the response:

```graphql
avatar: attrs(path: "avatarUrl")
```

### Filtering

Transactions can be filtered:

```graphql
where: {
  type: {
    _like: "skill%"
  }
}
```

### Ordering

Results can be sorted:

```graphql
order_by: {
  amount: desc
}
```

### Distinct values

`distinct_on` can be used to select one row for each value of a field:

```graphql
distinct_on: type
```

---

## 🚀 Getting Started
### 1. open

[myGraphQL](https://zone-graphql.netlify.app/)

### 2. Log in

Enter your platform credentials on the login page.

After authentication, the application retrieves the user's GraphQL data and renders the profile.

---

## 🔄 Application Flow

```text
              ┌───────────────┐
              │     Login     │
              └───────┬───────┘
                      │
                      ▼
              ┌───────────────┐
              │ Authentication│
              │      API      │
              └───────┬───────┘
                      │
                   Token
                      │
                      ▼
              ┌───────────────┐
              │   GraphQL API │
              └───────┬───────┘
                      │
             ┌────────┴─────────┐
             │                  │
             ▼                  ▼
        User Profile       Transactions
             │                  │
             │          ┌───────┴────────┐
             │          │                │
             ▼          ▼                ▼
           Profile     Skills             XP
             │
             └───────────┬───────────────┘
                         ▼
                 ┌───────────────┐
                 │   Dashboard   │
                 └───────────────┘
```
---

## 👩‍💻 Author

**Karima Hanani**
