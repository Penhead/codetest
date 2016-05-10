# codetest

###Init Project  
first run these commands  
npm install  
bower install  

###Project Details
I chose to keep it simple and as pure the angular as possible. So my dependencies are minimal.  
I'm using AngularJs for my application framework.  
ui-router to handle routing.  
Foundation 6 as my css framework.  
npm and bower were used to create a testing environment.  
I also broke the project structure down by assets, controllers, services, views, test, in case this would need to be expanded in the future.  
I included animate css to handle my simple animations for fading.  

###Testing 
I'm using karma, jasmine, and angular-mocks.  
In order to run test in terminal, cd to /build/tests/ and run the following command  
karma start karma.conf.js 

###Special Notes
Normally I use $http.get for calls to an api to retreive database information. But in this case I created a json file that contains the contacts and made a http.get request to it.  
Also I used localstorage to persist data on every refresh I get the data from from the localstorage. Again normally I'd get all data from api/database sources in a production application.  
I took an immutable data approach by making copies of any objects that needed to updated and rerendering it.  
Normally I use grunt or webpack from module loading but in this case I chose not to use it since it was a very simple component that I was building.  


