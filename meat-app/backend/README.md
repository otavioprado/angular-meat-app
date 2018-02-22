Compile and watch for changes:
tsc -w

To run nodemon server:
nodemon --watch backend backend/dist/server.js


curl -d '{"email":"juliana@gmail.com", "password":"juliana23"}' -H "Content-Type: application/json" -X POST https://localhost:3001/login -k
curl -k -H "Authorization: Bearer <token>" -X GET https://localhost:3001/orders
