This repository contains test cases written in TypeScript using Playwright for automating tasks on Amazon.in, including logging in and adding items to the cart.

Prerequisites
Before running the tests, make sure you have the following installed:

Node.js
npm (Node Package Manager)
Playwright

Clone this repository to your local machine:

Copy code

git clone https://github.com/Afsar1201/playwright/.git

Navigate to the project directory:

Copy code
cd playwright

Install dependencies:

npm install

Test Cases
1. Login to Amazon.in
Steps:

Navigate to Amazon.in.
Click on the "Sign In" button.
Fill in the email and password fields.
Click on the "Sign In" button to submit the login credentials.
Verify successful login.


2. Add Items to Cart
Steps:

Navigate to Amazon.in.
Search for the desired item.
Select the item from the search results.
Click on the "Add to Cart" button.
Verify that the item is successfully added to the cart.
