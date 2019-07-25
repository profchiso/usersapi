# Project Title

A simple developers contact Api

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

What things you need to install the software and how to install them

```
1. To run this app, you need the following dependencies
 - express
 - mongoose
 - body-parser
```
```
2. You  also need 
 - mongodb installed in your PC
 - node
 - Postman or any other rest client
 - then a browser(optional though)
```

### Installing

A step by step series of examples that tell you how to get the app   running a development env


```
use git bash to clone this repository "https://github.com/profchiso/developers-contact-api.git"
```
open the cloned project with git
 - install the dependencies using the command "npm install express body-parser mongoose
 - startup the mongodb on your terminal app using the command "mongod"
 - open the clonned project in an terminal and run the server using " node server.js" command;
 - then you are read to perform certain operations in the developers contact api 

```
```
## Basic routes of the Api
```
        GET    /developers
        GET    /developers/stack/front-end or back-end or full-stack
        GET    /developers/id
        POST   /developers
        PUT    /developers/id
        PATCH  /developers/id
        DELETE /developers/id

        where the id is any of the developers id  eg. "5d370ab67ced9f344867784d"
```


## Running on postman
```
 1. To  view all developers
       Type this url  http://localhost:3000/developers
       in POSTMAN Address bar and click on send
       Note the HTTP Method must be GET             
```
```
 2. To  view a developer with id
        Type this url http://localhost:3000/developers/id
        in POSTMAN Address bar and click on send, where the id is any of the developers id
        e.g http://localhost:3000/developers/5d370ab67ced9f344867784d
        Note the http method must be GET       
```
```
  3. To add a developer
        Type this url http://localhost:3000/developers 
        in POSTMAN Address bar ,
        below the url in POSTMAN app select  BODY
        below the Body select x-www-form-urlencoded 
        then enter the fieldnames  in the KEY and the values in the VALUE
         Note the http method must be POST
```
```
  4. To update some fields  say fullname, stack of a developer with a given id</h6>
     Type this url http://localhost:3000/developers/id 
     in POSTMAN Address bar ,
     below the url in POSTMAN app select Body
     below the Body select x-www-form-urlencoded
    then enter the field name that you want to update in the KEY and the value you want it to be changed to in the VALUE
    where the id is any of the developers id
    ie.g http://localhost:3000/developers/5d370ab67ced9f344867784d
    Note the http method must be PATCH
```
```
 5.  To update all fields of a developer with a given id</h6>
        Type this url http://localhost:3000/developers/id
        in POSTMAN Address bar ,
         below the url in POSTMAN app select Body
         below the Body select x-www-form-urlencoded 
         then enter the  all the fields in the KEYand the value you want them to be changed to in the VALUE
        then click send
        where the id is any of the developers id
        e.g http://localhost:3000/developers/5d370ab67ced9f344867784d
         Note the http method must be PUT
```
```
 6. To delete a developer with a given id
         Type this url http://localhost:3000/developers/id 
         in POSTMAN Address bar ,
         then click send
         where the id is an of the developers
         e.g http://localhost:3000/developers/5d370ab67ced9f344867784d
         note the http method must be DELETE
```
```
7.  You can also search a developer according to their stack 
        Type this url http://localhost:3000/developers/stack/stackName
        in POSTMAN Address bar ,
        then click send
        where the stackName can be any of front-end,back-end, full-stack
        e.g http://localhost:3000/developers/stack/full-stack
        Note the http method must be GET
```
## Github url
 https://github.com/profchiso/developers-contact-api.git


## Versioning
 This is version 1.0.0 of the api
 

## Author
* **okorie chinedu sunady** 

## Acknowledgments

* To God be the glory


