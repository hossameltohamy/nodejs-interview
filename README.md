# NodeJS Candidate Test

## Basic knowledge questions

- What are Promises in Node.js? 
Answer:
  Promises is  advancement of callback, so Promises are one way to deal with asynchronous code, without getting stuck in call back hell.

- What is callback hell?
Answer: 
 call back hell is anti pattern for achiving asynchronous code, 
 for ex function A that is passed to function B  As paramter the function B excute the function A code at some point. invocation of function A maybe occured synchronous or asynchronous.

- What tools can be used to assure consistent style?
Answer: 
 i use ESLint for js and Tslint for typescript 

- What is REPL? What purpose it is used for?
Answer: 
simple interactive computer programming environment  that takes single user inputs, executes them, and returns the result to the user

- What is the difference between Asynchronous and Non-blocking?
 Answer: 
  1- Asynchronous refers to something done in parallel, say is another thread.
  Non-blocking often refers to polling, i.e. checking whether given condition holds (socket is readable, device has more data)
  2- Asynchronous does not respond immediately, While Nonblocking responds immediately if the data is available and if not that simply returns an error. 
  3- Asynchronous improves the efficiency by doing the task fast as the response might come later, meanwhile, can do complete other tasks

- List types of Http requests supported by Node.js?
  Answer: 
  post, delete, put, patch, options, head 

- Is Node.js entirely based on a single-thread? 
 Answer: 
  1- JavaScript is a single-threaded language because while running code on a single thread, it can be really easy to implement as we don't have to deal with the complicated scenarios that arise in the multi-threaded environment like deadlock. Since, JavaScript is a single-threaded language, it is synchronous in nature.

  2- Node. js uses two kinds of threads: a main thread handled by event loop and several auxiliary threads in the worker pool. Event loop is the mechanism that takes callbacks (functions) and registers them to be executed at some point in the future.




- What is your favourite HTTP framework and why?
Answer: 
1- express its easy for small project 
2- nestjs is well structured and organized for enterprise applications

- What is difference between JavaScript and Node.js?
Answer: 
* javascript is language, nodejs is environment 

- What is TypeScript? Do you use it? Why / why not?

Answer: 
* TypeScript is a superset of the JavaScript language that has a single open-source compiler and is developed mainly by a single vendor: Microsoft. The goal of TypeScript is to help catch mistakes early through a type system and to make JavaScript development more efficient, its very recommend for enterprise applications.

## Problem solving

You get an error report from testing crew - User API doesn't return "Test User" data for ID: 1.
Code is in this repository.

**Find out why, fix it and write report on why did it happen.**
 get function was return null instead calling get method in model itself.

## Create something whilst learning something new
For this task you will need your personal account in AWS. Please create one if you don't have it yet (do not worry about costs, everything you do here will covered by AWS Free Tier).

- Create a REST API in AWS API Gateway.
- Create 2 HTTP methods in the API: GET & POST.
- Create a DynamoDB Table (keep provisioned WCU & RCU low to stay within Free Tier, 2 will be OK) and name it "users". It should consist only of a parition key (hash key) which is "user_id".
- Create a lambda function and integrate it with the API POST method. In the JSON body of HTTP POST request, user should be able to specify his first name and age. Lambda should take provided body and insert it into your DynamoDB table as a new item. Value for user_id column should be generated as a random GUID and returned to the caller in the response.
- Create second lambda function and integrate it with the API GET method. GET method should take a user_id as path parameter. Lambda should lookup the DynamoDB table (using **query** method!) and either return user or 404 status code if it doesn't exist.

Please create a new GitLab/GitHub repository, upload your lambda code in there and share link to the repo with us.
Repository should also contain a README.md with URLs to your API GET & POST methods and explanation about how to use them (exact paths, example body for POST method).

# lambda and dynmodb repositry link 
`git clone https://github.com/hossameltohamy/NodejsServerless.git`