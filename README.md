# Shema Brand

[![Build Status](https://travis-ci.com/ShemaM/My-Brand.svg?branch=develop)](https://travis-ci.com/ShemaM/My-Brand)
[![Maintainability](https://api.codeclimate.com/v1/badges/08e968fc879ba7236e0d/maintainability)](https://codeclimate.com/github/ShemaM/My-Brand/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/ShemaM/My-Brand/badge.svg)](https://coveralls.io/github/ShemaM/My-Brand)

My personal portfolio website

![image](https://user-images.githubusercontent.com/53241063/102533612-533e2180-40ae-11eb-8f98-fb586c2a18e7.png)

# API Endpoints included

### User

- **POST /api/v1/user/register:** Create an account
- **POST /api/v1/user/login:** Log into your account

### Blog

- **POST /api/v1/blog:** Create a Blog post
- **GET /api/v1/blog/:blogID:** Fetch a single Blog post
- **GET /api/v1/blog:** Fetch all blogs
- **PATCH /api/v1/blog:blogdID:** Update a single Post
- **DELETE /api/v1/blog:blogdID:** Delete a post

### Query

- **POST /api/v1/query:** Create a query
- **GET /api/v1/query:** Fetch all queries
- **DELETE /api/v1/query:queryID:** Delete a query

# [Documentation](https://shema-brand.herokuapp.com/api/v1/documentation/)

# Installation and Environment Setup

**Clone the repository from [Github](https://github.com/ShemaM/My-Brand).**

( You will need **Git** for this if you are running a Windows PC, Get it [HERE](https://git-scm.com/) )

```
git clone https://github.com/ShemaM/My-Brand.git
```

**To Install all dependencies:**

```
npm install
```

**To run the tests:**

```
npm run test OR npm run cover
```

**Now to start the app:**

```
npm run start
```

**To start the app in development mode:**

( You need **nodemon** installed for this, run `npm i -g nodemon` to install it )

```
npm run dev
```

# Tools used

- Server-Side Framework: **Node/Express**
- Testing framework: **Mocha/Chai**

# More Tools

- Continuous integration: **[Travis-Ci](travis-ci.org)**
- ES6 Transpiler: **[Babel](babeljs.io)**
- Test coverage: **[nyc](https://www.npmjs.com/package/nyc)**
- Maintainability: **[Code climate](https://codeclimate.com)**
- Deployment: **[Heroku](https://www.heroku.com)** and **[Netlify](https://www.netlify.com/)**

# Deployments

- The UI template is hosted on Netlify at https://shemachristian.netlify.app/ui/

- The API is hosted on Heroku at https://shema-brand.herokuapp.com/

# Author:

**Shema Mugisha Christian**
