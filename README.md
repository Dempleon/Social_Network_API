
# Social_Network_API
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description <br>
A backend server for a social network created with mongodb and mongoose. Api contains 3 models: Users, Thoughts, and reactions (schema). Users has controllers to view all users, create a single user, add and remove friends, get, put and delete users by _id. Thoughts has controllers to view all thoughts, create thoughts, add and remove reactions, get, put, and delete thoughts by _id.
<br>
Included in the link below is demo video
<br>
[Demo Video](https://drive.google.com/file/d/1S03x2-b7QPUvhLYLSl1XEAnhikuh58su/view?usp=sharing)
## Table of Contents
[Installation](#Installation)<br>
[Usage](#Usage)<br>
[License](#Social_Network_API)<br>
[Contributing](#Contributing)<br>
[Tests](#Tests)<br>
[Questions](#Questions)<br>
    

## Installation
To install the application, clone the repository to the desired location.
- To run the application first install the dependencies
```
npm i
```
- The database can be optionally seeded using the following command:
```
npm run seed
```


## Usage
- To start the application run the following command:
```
npm start
```
To view the routes use Insomnia<br>
![view all users](./images/get%20all%20users.JPG)<br>
![view all thoughts](./images/get%20all%20thoughts.JPG)<br>
![post new user](./images/post%20new%20user.JPG)<br>
![post new thought](./images/post%20new%20thought.JPG)j<br>
![view users by id](./images/get%20user%20by%20id.JPG)<br>
![view thoughts by id](./images/get%20thought%20by%20id.JPG)<br>
![edit users by id](./images/edit%20user%20by%20id.JPG)<br>
![delete users by id](./images/delete%20users.JPG)<br>
![delete thoughts by id](./images/delete%20thoughts.JPG)<br>
![add friends](./images/add%20friends%20to%20user.JPG)<br>
![remove friends](./images/remove%20friends%20from%20user%20buggy.JPG)<br>
- route succesfully removes friends from the array of friends but gives a 500 error
![add reaction](./images/post%20new%20reaction.JPG)<br>
![remove reaction](./images/removring%20reactions.JPG)<br>
## Contributing
To contribute to the project please fork the repository. To report any issues please create an issue in github.

## Tests
There are no test commands, but the routes can be tested using Insomnia.
## Questions
If you have any questions about the repo, open an issue or contact me directly at [dempoleon@gmail.com](dempoleon@gmail.com).
You can find more of my work at [dempleon](https://github.com/dempleon)


