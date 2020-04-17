# Installation

After downloading the file from Themeforest, You will find SuperProps.zip file. Then unzip the SuperProps.zip and run the following commands on SuperProps folder to get started with the project.

```
yarn
```

```
// For starting GatsbyJs Server run
yarn gatsby-dev
```

GatsbyJs server will start in `localhost:8000`

```
// For starting NextJs Server run
yarn next-dev
```

NextJs Server will start in `localhost:3000`

Available routes are below

```
/app
/saas
/saasmodern
/saasclassic
/hosting
/portfolio
/ride
/crypto
/charity
/interior
/appmodern
/appclassic
```

# Folder Structure

```
/packages
	/common [All common components and resource]
		/Assets
		/components
		/contexts
		/data
		/theme
	/functions
	/landing [NextJs version of the project]
	/landing-gatsby [Gatsby version of the project]
```

# Stack We Have Used

1. Lerna (A tool for managing JavaScript projects with multiple packages. https://lernajs.io)
2. Yarn Workspace
3. React Js and Next Js
4. Gatsby Js
5. Styled System and Styled Components
6. Firebase Deployment.

# Development

Follow the below procedure to go with the development process.

## GatsbyJs

If you want to develop only for gatsbyjs then then you don't need the `/landing` folder which contains only nextjs related code. You can delete `/landing` folder.

For any specific template like the template under `/app` route. If you want to use this template only, then you have to follow below procedure.

1. Go to `/landing-gatsby/src/pages/`
2. now copy all the content from `app.js`
3. Paste all the content in `/landing-gatsby/src/pages/index.js`

Now for cleaning the unused code in your project follow the below procedure.

1. Now you can delete all other pages except `404.js`. That mean in your `/pages` folder you will have two files `index.js` and `404.js`
2. From `/landing-gatsby/src/containers/` folder you can delete all other folder except `App` and `Error`
3. From `/common/src/assets/image/` folder you can delete all other folder except `app`. Do not delete any files from there like `404.svg`, `error.svg` etc.
4. From `/common/src/data/` folder you can delete all other folder except `App`.
5. From `/common/src/theme/` folder you can delete all other folder except `app`. Do not delete the `index.js` file.

Now if you start your `gatsbyjs` server with `yarn gatsby-dev` then you will get your server running on `localhost:8000`

## NextJs

If you want to develop only for `nextjs` then then you don't need the `/landing-gatsby` folder. You can delete the folder.

For any specific template like the template under `/app` route. If you want to use this template only, then you have to follow below procedure.

1. Go to `/landing/pages/`
2. now copy all the content from `app.js`
3. Paste all the content in `/landing/pages/index.js`

Now for cleaning the unused code in your project follow the below procedure.

1. Now you can delete all other pages except `_app.js`, `_documents.js` and `_error.js`. That mean in your `/pages` folder you will have four files `index.js`, `_app.js`, `_documents.js` and `error.js`
2. From `/landing/containers/` folder you can delete all other folder except `App` and `Error`
3. From `/common/src/assets/image/` folder you can delete all other folder except `app`. Do not delete any files from there like `404.svg`, `error.svg` etc.
4. From `/common/src/data/` folder you can delete all other folder except `App`.
5. From `/common/src/theme/` folder you can delete all other folder except `app`. Do not delete the `index.js` file.

To start the server for `nextjs` you have to run `yarn nextjs-dev` and the server will start on `locahost:3000`.

# Explaining Containers

In the `containers` directory you will get folder for our every template. If you want to use App template. Then in the `App` directory you will get folders containing different section of the template like `Banner`, `Footer`, `Testimonial`, `Navbar` etc.

All of these containers contains regular reactjs code.

# Deployment

For deploying your final project you have to build your project first. To build the project you have to follow below procedure.

### GatsbyJs

Run the below command on

```
yarn gatsby-build

// To check the build version locally run below command
// Not necessary if you don't want to check on your local.

yarn gatsby-serve
```

If you run `yarn gatsby-serve` then the build version the the project will start in `localhost:9000` . Navigate to the url you will get your site up and running.

### NextJs

To build the nextjs version run below commands.

```
yarn next-build

// To check the build version locally run below command
// Not necessary if you don't want to check on your local.

yarn next-start
```

If you want to host the static html version of your nextjs project then run the below command to build static version

```
yarn next-export
```

## Running with Docker

To run the SuperProps Next.js app in docker

```
yarn next-export
docker build -t superprops/landing-next -f ./packages/landing/Dockerfile .
docker run -it -p 3000:3000 superprops/landing-next:latest
Open http://localhost:3000
```

To run the SuperProps Gatsby.js app in docker

```
yarn gatsby-build
docker build -t superprops/landing-gatsby -f ./packages/landing-gatsby/Dockerfile .
docker run -it -p 8000:8000 superprops/landing-gatsby:latest
open http://localhost:8000
```

# Deployment Support

## now.sh

### GatsbyJs

We have given now.sh deployment by default. For hosting the project in now.sh first you have to rename `gatsby-landing.now.json` to `now.json`.

You can change the name according to your project in now.json file like:

```
{
	"name": "your_project_name"
}
```

Now run below command after building the project.

```
now
```

### NextJs

For deploying nextjs on now.sh you have rename `landing.now.json` to `now.json`. Now run below command after building the project.

```
now
```

You can change the name according to your project in now.json file like:

```
{
	"name": "your_project_name"
}
```

> **Make sure you have `now-cli` installed in your system.**

## Firebase

### NextJs

Rename `landing.firebase.json` to `firebase.json`.

Before running the below deploy command, you have to delete the `/public/index.html` file.

Then, To deploy to your site, run the following command from the root directory.

```
yarn firebase-deploy
```

> **Make sure you have `firebase-tools` installed on your machine.**

## Netlify

At first, open an account on netlify and go to `sites` tab.

### NextJs

Run the below command to make the project netlify deploy ready.

```
yarn netlify-deploy
```

After running the above command go to `/landing` folder. You will find a `out` folder there. Drag
and drop this `out` folder on netlify `sites` tab. Now after finishing the upload you are ready to go.

### GatsbyJs

If you want to host the `gatsbyjs` project, go to your command line and run this command on root directory.

```
yarn gatsby-build
```

After running above command go to `landing-gatsby` folder. You will find a `public` folder
there. Drag and drop this `public` folder on netlify `sites` tab.
