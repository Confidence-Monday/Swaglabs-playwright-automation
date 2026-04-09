# Swaglabs-playwright-automation

## Project Overview
This project is an end-to-end test automation framework built using Playwright.  
It automates login and form validation scenarios on the SauceDemo (Swag Labs) application.

## Tech Stack
- Playwright
- JavaScript (Node.js)
- Allure Reporting

## Project Structure
- tests/ → Test scripts
- pages/ → Page Object Model classes
- fixtures/ → Custom fixtures for reusable setup
- test-data/ → Test data (optional)

## Test Scenarios Covered
- Login with empty fields
- Login with missing password
- Login with invalid credentials
- Login with valid credentials

## How to Run Tests

npm install

npx playwright test
