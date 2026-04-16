# Swaglabs-playwright-automation

## Project Overview
This project is an end-to-end test automation framework built using Playwright.  
It automates login and form validation scenarios on the SauceDemo (Swag Labs) application.


## Tools Used
- Visual Studio Code
- Chrome DevTools
- Playwright
- JavaScript (Node.js)
- Allure Reporting

## Project Structure
- tests/ → Test scripts
- pages/ → Page Object Model classes
- fixtures/ → Custom fixtures for reusable setup
- test-data/ → Test data (optional)

## Test Coverage

### Authentication
- Valid login
- Invalid login
- Empty fields

### Inventory
- Products display

### Cart
- Add/remove items

### Checkout
- Complete purchase
- Validation errors

### Navigation
- Page routing

### Edge Cases
- Empty checkout fields
- Invalid actions

## Expected Results

- All tests pass successfully.
- Allure report is genrated in the report folder.
- Report generated shows 0 failure.

## Test Scenarios Covered
- Login with empty fields
- Login with missing password
- Login with invalid credentials
- Login with valid credentials

## How to Run Tests

npm install

npx playwright test
