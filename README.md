This project was bootstrapped with Create React App. It is an app which connects to the Reddit API (undocumented JSON API) to present a subset of the Reddit data. On first loading, the page view defaults to show posts from https://www.reddit.com/r/Breadit/. Users can then view that data, or change it by clicking on some predefined subreddits, or entering a search term. Users can click on an item from the list of results and it will take them to a more detailed view of the post, including comments. 

This project was created using React and Redux as a way to practise key skills, including async thunks to fetch data and a store to manage state. 

CSS is used for styling with some additional Posphor icons.

One challenge was working out the best way to consistently display data, especially considering some posts had thumbnails only, some had better quality pictures, some had videos, and some had no images at all. 

Another current challenge is implementing appropriate testing, this is still in progress...

How to use
This app is deployed using netlify and can be viewed at https://breadddit.netlify.app/

Credits
I completed this project as part of the Codecademy Front-End Engineer path. The project contained basic steps to follow for completing the project and provided the necessary info for working with the API.

Licence
Please see license document.

