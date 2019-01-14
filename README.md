## Coffee Shop Finder(Neighborhood Map React), an Udacity project

This project is part of the __Frontend Web Developer Nanodegree (full Google scholarship)__. This project's purpose is to build a single page web application from scratch using ReactJS and to add features provided by external APIs (like Maps Javascript API and FourSquare Places APi), focusing on components, props and state.

This app shows 10 coffee shops in/near Olathe, Kansas.

## Table of Contents
* [Application Features](#application)
* [Instructions](#instructions)
* [Installation](#installation)
* [Requirements](#requirements)
* [Dependencies](#dependencies)

## Application Features
Coffee Shop Finder is fully responsive to optimize the design for every viewport size. 

## Instructions
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Installation
Download 'Coffee Shop Map Finder' and save it locally. Once downloaded, you need to run `npm install` and then `npm start` in your console.
`Create React App` provide a full working service worker. To show it in action you must run the application in `production build mode`. To do that, run `npm run build` to create a build version of the app and then `serve -s build` to serve the production build in localhost.
**IMPORTANT**: `Node JS` and `NPM (Node Package Manager)` is **required** to install and run the application. Visit [Node.js](https://nodejs.org/) for more information.

## Offline Use
The service worker only works in production build mode. To run the app in production use the following commands: 'npm run build' 'serve -s build' and then visit localhost:5000

## Requirements
You can find the full list of the project requirements visiting [Udacity's Project Rubric Link](https://review.udacity.com/#!/rubrics/1351/view).

## Dependencies
The project is created from scratch running [`create-react-app`](https://github.com/facebook/create-react-app).
I've used the following dependencies and resources to build the final version of this app:
__React Packages__
- [`google-maps-react`](https://www.npmjs.com/package/google-maps-react). A declarative Google Map React component using React, lazy-loading dependencies, current-location finder and a test-driven approach by the Fullstack React team.
__API__
- [Google Maps API](https://cloud.google.com/maps-platform/).
- [Foursquare Place API](https://developer.foursquare.com/).
