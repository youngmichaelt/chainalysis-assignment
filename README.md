# chainalysis-assignment
This is the repository for the Chainanlysis software engineering assignment.
---
## Requirements

For testing, you will only need Node.js and npm, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

## Install

    $ git clone https://github.com/youngmichaelt/chainalysis-assignment.git
    $ cd chainalysis-assignment
    $ npm install

## Running the project

    $ npm app
    $ Go to localhost:3000 in your browser

##Questions

  1. I took short cuts in terms of TDD and functionality. I only had time to create one test for my app.js file and did not have time to implement sell functionality.
  2. Work has kept me busy so I have not had time to over design this project.
  3. If I had to scale I would:
    - Call the price APIs on the server itself instead of the client, this would reduce calls to external APIs.
    - Maybe use a websocket between server and client for faster price updates, not really sure though.
    - Increase security of server.
    - Scale the backend code horizontally and add a load balancer and rate limiter.
  4. I would have increased test coverage and added functionality to see sell prices.
    

