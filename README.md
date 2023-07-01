# Project -  News Letter Subscribe


## About
This is for **subscribing to the news letters** the data will be stored in MailChimps 

The API used here is revoked for public viewing of this app. So, for getting the data as stored you have to use new API 

## Run the app
**Step 1** - Clone the repo in your local system

**Step 2** - Open terminal at the file path (PS: Check the terminal path correctly)

**Step 3** - `npm i express body-parser request https nodemon` - run this command in terminal

**Step 4** - `nodemon server.js` - run the command

**Now,** your server is live at PORT 3000 you can go to your localhost:3000

**NOTE :- Make sure to change the API key and list ID of the code**

## Languages
**Front End - HTML + CSS**

**Back End - Express + Node Js**


## Pages
**Page 1 - SignIn**

This page is for getting the First Name, Last Name, Email Addresses of the client

On entering details it will redirect you to SuccessPage / FailurePage

**Page 2 - SuccessPage**

This page will be shown when the entered info **successfully** sent to our server and stored to out MailChimps database

**Page 3 - FailurePage**

This page will be shown when the entered info **gets some error** from our API or gets some error to store the info to our MailChimps database

