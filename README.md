# Smart Utility Toolkit

A collection of mini Node.js utilities built using only core modules (no external packages).

## How to Run

### 1. CLI Calculator
```
node calculator.js add 10 5
node calculator.js subtract 20 8
node calculator.js multiply 4 5
node calculator.js divide 10 2
```

### 2. Custom Module Demo
```
node app.js
```
Demonstrates `isEven.js` and `logger.js` custom modules being reused via `module.exports` / `require()`.

### 3. HTTP Server
```
node server.js
```
Then visit in browser or Postman:
- http://localhost:3000/
- http://localhost:3000/about
- http://localhost:3000/contact
- http://localhost:3000/randomroute (shows 404)

### 4. File Manager
```
node fileManager.js
```
Creates, reads, updates, and deletes `test.txt`, logging each step.

### 5. Dice Roller
```
node dice.js
```
Rolls a 6-sided dice 5 times using `crypto.randomInt()`.

## Tech Used
- Node.js core modules only: `process`, `http`, `fs`, `crypto`
- No Express, no npm packages, no database
