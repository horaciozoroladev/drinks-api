# drinks-api
Drinks API works along side thecocktaildb API 

****
## Running the project 
Type on a terminal the next commands:
1. npm install
2. npm run start:dev

**Server is open at:**
[http://localhost:3000/](http://localhost:3000/)

****
### Routes

1. **Authorization** 
[api/auth/](http://localhost:3000/api/auth/)
    1.1 [api/auth/login](http://localhost:3000/api/auth/login/)
    - Method: POST
    - Body: { username: "", pass: "" }
    - Content-Type: application/json  
    - Accept: application/json     

    1.2 [api/auth/logout](http://localhost:3000/api/auth/logout/)
    - Method: POST
    - Body: { username: "", _id: "" }
    - Content-Type: application/json
    - Accept: application/json

2. **Drinks**
[api/drinks/](http://localhost:3000/api/drinks/)
   2.1 [api/drinks/random](http://localhost:3000/api/drinks/random)
    - Method: GET
    - Accept: application/json

   2.2 [api/drinks/save-favorite-drink](http://localhost:3000/api/drinks/save-favorite-drink)
    - Method: POST
    - Body: { idDrink: "", users__id: "" }
    - Content-Type: application/json
    - Accept: application/json

   2.3 [api/drinks/save-done-drink](http://localhost:3000/api/drinks/save-done-drink)
    - Method: POST
    - Body: { idDrink: "", users__id: "" }
    - Content-Type: application/json
    - Accept: application/json
3. **Users**
[api/users/](http://localhost:3000/api/users/)
    3.1 [api/users/create](http://localhost:3000/api/users/create)
    - Method: POST  
    - Body: { givenname: "", surname: "", username: "", pass: "" }
    - Content-Type: application/json
    - Accept: application/json
  
    3.2 [api/users/info](http://localhost:3000/api/users/info)
    - Method: POST
    - Body: { username: "", _id: "" }
    - Content-Type: application/json
    - Accept: application/json
