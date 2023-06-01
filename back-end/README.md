<div align="center">
<h1>Cotobox - Back-end </h1>
  </div>
  
  <h2>Technologies:</h2>
  <div align="center">
<img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
<img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white">

  </div>
  

<h2>Routes:</h2>

```yml 
POST /
    - Create user
    - headers: {}
    - body:{
        "name": "vitória",
        "lastName": "ortega",
        "participation": 10
} 
```

```yml 
GET /
    - Get all users
    - headers: {}
    - body:{}    
```

<h2>How to run:</h2>

<h3>Clone the repository:</h3>

```
$ git clone https://github.com/vivirortega/cotabox.git
```

<h3>Go to back-end folder:</h3>

```
$ cd back-end
```

<h3>Install dependencies:</h3>

```
$ npm or yarn install
```

<h3>Initializing the API:</h3>

```
$ npx nodemon server.js
```
