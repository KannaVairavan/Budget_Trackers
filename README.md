# Budget Trackers

## User Story

- AS AN avid traveller
  I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
  SO THAT my account balance is accurate when I am traveling

## Summary

In this application the user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.
This application indexdB for offline storage, service-worker to pre cache all assets and manifest tells the browser about your Progressive Web App and how it should behave when installed.
This application uses MongoDB Atlas connection. This application is deployed to Heroku.

## Installation:

Node.js, Express, mongoose, morgan

## Acceptance Criteria

```md
GIVEN a user is on Budget App without an internet connection
WHEN the user inputs a withdrawal or deposit
THEN that will be shown on the page, and added to their transaction history when their connection is back online.
```

## Project Demo

Below is the walkthrough video that demonstrates the functionality of the Budget tracker app<br/>

<img src="./public/assets/BudgetTrackers.gif" alt="Readme video"  >

## Repository

https://github.com/KannaVairavan/Budget_Trackers.git

## Deployed Heroku App

https://stark-coast-31352.herokuapp.com/
