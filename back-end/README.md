<div align="center">
<h1>Cotobox - Back-end </h1>
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
