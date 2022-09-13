# Scrape

<p align="center"><img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/344/external-scraper-construction-and-tools-kiranshastry-gradient-kiranshastry.png" /></p>

<h1 align="center">Scrape</h1>

<p align="center"> Get Latest Articles Scraped off Your Favourite Blog</p>

<hr/>

This application uses data scrapped off the <a href="https://arstechnica.com/"> ArsTechnica </a> Blog. Article attributes such as Title, Tagline, Author, Published Date, and Web URL to the particular article are grabbed and stored in a SQLite3 DB. Using Sinatra for Backend data manipulation and React for Frontend presentation, the data is then presented to the user where CRUD operations can be performed on the displayed information and in effect propagated to the DB. 

## Custom API Usage and Endpoints

1. `GET` Retrieve all Article(s), Review(s), and Reader(s) from SQLite3 DB

Endpoints: 
- `BASE_URL/articles`
- `BASE_URL/articles/:id`
- `BASE_URL/reviews`
- `BASE_URL/reviews/:id`
- `BASE_URL/readers`
- `BASE_URL/readers/:id`

2. `GET` Search Articles by Title

3. `POST` Add Article and its attributes to the SQLite3 DB

4. `PATCH/PUT` Edit Article Attributes and propagate changes to SQLite3 DB

5. `DELETE` Delete an Article Entry from the SQLite3 DB

## Set up locally
Fork and clone this repo.

Frontend: Run `npm install && npm start` and open [http://localhost:3000](http://localhost:3000).

Backend: Run `bundle install` to install required gems, then run `bundle exec rake server` to start up the server on [http://localhost:9292] 

NOTE: 
1. For first time initialization, run `bundle exec db:seed` to retrieve latest Articles and store them in SQLite3 DB.
2. If port fails to initialize, run `kill -9 $(lsof -ti:9292)` to free up associated port.

## Local DB Features
1. `GET`: Retrieve all Article(s), Review(s), and Reader(s) from SQLite3 DB 
2. `POST`: Add new Articles to Article collection and SQLite3 DB
3. `PATCH/PUT`: Edit Article entries and propagate changes to SQLite3 DB
4. `DELETE`: Remove Articles from Article collection and SQLite3 DB
5. Search for Articles from Article collection</li>
 
## Deployment
### Frontend - via Netflify
This is the [main](https://github.com/citixenken/scrape/tree/main/scrape-frontend) repository that handles all frontend operations.

Frontend Netlify live [link](https://scrape-frontend.netlify.app/)

### Backend - via Heroku
Used the provided [Backend Setup template](https://github.com/citixenken/scrape/tree/main/scrape-backend) to generate backend code. Facilitates faster deployment of generated JSON data to Heroku.

Backend Heroku live [link](https://scrape-backend.herokuapp.com/)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgement

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

## Licence
This project is licensed under the <a href="https://choosealicense.com/licenses/mit/">MIT</a> License



