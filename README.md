# SERVERLESS WEB APPLICATION FORM

## TASK AT HAND 

- Add new users: Using forms, collect user data. e.g full name, age, occupation, nationality, marital-status, and email address, and store them in the DynamoDB table

- Add notification: An email confirmation displaying a message, such as "Thank you for filling out the form. Welcome to the Gold Grid family."

- A dashboard : display real-time data such as:
  - users logged onto the app
  - Number of users
  - Timestamp of logging onto  the app
  - Nationality counts

- A dashboard : display real-time data such as:
users logged onto the app
Number of users
Timestamp of logging onto  the app
Nationality counts


## SOLUTIONS 

### TASK 1
### AWS SERVICE AND TECHNOLOGY USED
- REACT 
- NODE.JS 
- LAMBDA FUNCTION
- API GATEWAY
- DYNAMODB

## SOLVING STEPS
- BUILD DYNAMIC WEBSITE USING JAVASCRIPT FRAMEWORK( REACT)
Install necessary dependencies 
- Wrote lambda function  using node.js to put items in dynamodb and used api gateway to communicate with my react app and setup a dynamodb table to store our user data.
## PROBLEM ENCOUNTER 
- When inputing user data in my react application  my api was throwing cors errors
## SOLUTION TO PROBLEM 
- Using my api console and enable cors in action section, by doing this my application  was able to communicate with dynamodb using api and lambda function 



### TASK 2
### AWS SERVICE AND TECHNOLOGY USED
- REACT 
- NODE.JS 
- LAMBDA FUNCTION
- DYNAMODB
- AWS SES
- Dynamodb stream 


## SOLVING STEPS
- 1.	Configure my dynamodb to enable dynamodb stream 
- 2.	Wrote a lambda function in node.js to be invoked by stream and send a message using aws ses by extracting  user email and fullname  
## PROBLEM ENCOUNTER 
- 1.	My dynamodb stream keep invoking my lambda function to send email continuously until my limit reach 
## SOLUTION TO PROBLEM 
- Creating a new dynamodb table and configure my lambda function to send id name of new data that enter my dynamodb table put it into the new created table, whenever my stream invoke lambda will check for new table if the id match and is set to true lambda wont send the mail 

### TASK 2
### AWS SERVICE AND TECHNOLOGY USED
- REACT 
- NODE.JS 
- LAMBDA FUNCTION
- DYNAMODB
- AWS SES
- Dynamodb stream 
- AWS AMPLIFY 
- AWS COGNITO
- API GATEWAY



## SOLVING STEPS
- Create a dashboard using react
- Setup serverless authentication using amplify and aws cognito
- Create lambda function to get items from my dynamodb table and users details  in cognito user pool  display it in my dashboard by using api gateway
## PROBLEM ENCOUNTER 
- Creating custom signing and signout page for react but was having issues commicating with my userpool in aws console
## SOLUTION TO PROBLEM 
- By using aws amplify signin and signout ui 