# codetest

##Init Project
**First run these commands in project root**
```
npm install
bower install
```

##Project Details
I chose to keep it simple and as pure to Angular as possible, so my dependencies are minimal.

* I'm using AngularJs for my application framework.
* UI-Router to handle routing.
* Foundation 6 as my CSS framework.
* NPM and Bower to create a testing environment.

I also broke the project folder structure down by assets, controllers, services, views, and tests. This is in case this project would need to be expanded in the future.
I included AnimateCSS to handle my simple animations for fading.

##Testing
I'm using Karma, Jasmine, and Angular-mocks.
In order to run test in the command line, change directories to /build/tests/ and run the following command:
```
karma start karma.conf.js
```
If you don't have karma command installed use this command to install the karma command line tool and then you should be able to run the command above. 
````
npm install -g karma-cli
````

##Special Notes
* Normally I use ```$http.get``` for calls to an API to retrieve database information, but in this case I created a JSON file that contains the contacts and made a ```$http.get``` request to it.
* I used LocalStorage to persist data. On every refresh I get the data from the LocalStorage. Again, normally I'd get all data from API/database sources in a production application.
* I took an immutable data approach by making copies of any objects that needed to be updated and re-rendering them.
* Normally I use Grunt or WebPack for module loading but in this case I chose not to use it since it was a very simple component/application that I was building.
