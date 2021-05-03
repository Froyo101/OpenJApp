# OpenJApp Study Utility

![Flashcard Front](https://github.com/Froyo101/OpenJApp/blob/main/OpenJAppCardFront.png?raw=true)

![Flashcard Back](https://github.com/Froyo101/OpenJApp/blob/main/OpenJAppCardBack.png?raw=true)

This project represents an effort to create a scaling (algorithmically driven according to user input and stats) flashcard and quiz utility similar to but distinct from Anki for learning and testing oneself on Japanese Kanji characters and common vocabulary terms.

In its current state, 2300 Kanji characters and nearly 6000 vocabulary terms are included for review, reflecting Kanji presented in Andrew Scott Conning's Kodansha Kanji Learner's Course and terms presented in the Core2k/6k Anki deck, and character cards contain both the KKLC's bolded keywords for remembering them by as well as both On and Kun readings where applicable. The app is built in ReactJS with JSX, and a deployed build can be found at https://OpenJApp.jakefoiles.xyz. Bug fixes and other contributions are welcome, and all code (excluding libraries used/referenced as applicable) is licensed under the GNU GPL v3, making it a copyleft piece of Free and Open Source Software. Instructions for further developing and independently building the project can be found below.

To fellow language learners - がんばってね!

# Development Instructions

## Preface

Being a web app, it is only necessary for the average end user to navigate to an actively hosted instance of OpenJApp (such as, at the time of this writing, https://OpenJApp.jakefoiles.xyz) using a modern, fully updated web browser (i.e. Firefox, Chrome, Safari, or Edge, to name a few) on any modern internet-connected device (i.e. a desktop, laptop, tablet or smartphone released within the past 5-7 years) in order to access and use the application. That being the case, some more active users may be interested in being able to further develop the application or produce builds to host themselves. In order to do this, you’ll need to install a couple pieces of software and have a baseline level of comfort operating command-line utilities.

## Required Software

Just two software packages are needed to develop and build OpenJApp (in most circumstances), and they’re both fully open source and freely available: Git and the Node.js with Node Package Manager (NPM) suite. Both utilities are readily available through most package managers included in GNU/Linux distributions (although in some cases Node.js and NPM will be split up and need installed separately), and for Windows and macOS users installers can be found online at the projects’ official websites as of the time of this writing. Git is presently hosted at https://git-scm.com/downloads and Node.js with NPM at https://nodejs.org/en/download/.

## Setup

After installing both required utilities, setup can begin. To start, we’ll need to open up a terminal in whichever operating system is being used and clone the OpenJApp repository to a locally accessible drive. To do this, navigate to the directory you wish to store the project in using the command-line interface (typically accomplished with the command “cd \[Filepath-Here]”) and enter the command “git clone https://github.com/Froyo101/OpenJApp”. After the command has finished running, you should have a complete local repository to work with (and you can confirm this by listing out all items within your working directory using the “ls” command on most Unix-derived systems, or alternatively via opening up your file explorer, where you should now see a folder titled “OpenJApp”).

In order to run test or production builds with this repo, we’ll additionally need to install all build dependencies using NPM. Fortunately, NPM makes this task trivial in most instances. From your current working directory, navigate into the root of the OpenJApp repo with the command “cd OpenJApp”. Upon entering the repo (which you can once again confirm the validity of either using “ls” or a file explorer, where-in you should see a file titled “package.json”), run the command “npm install”, and NPM should fetch all the requisite packages to run builds.

## Builds, Hosting, and Version Control, Oh My!

With the OpenJApp root folder still set as the current working directory, two types of builds can be run with the commands “npm start” and “npm run build”. The former command runs a live development build that is hosted locally, allowing you to test the application as you modify it on the fly. The latter produces a production-ready build that you will then need to host using a web server of your choosing. As particular hosting instructions vary wildly from provider to provider and server software package to server software package, we are unfortunately unable to provide much guidance in this area. The basic process will involve uploading the newly generated “build” folder to your choice of server, but in order to accomplish this hosting provider instructions and/or server software documentation will need to be consulted.

After desired modifications have been made to OpenJApp that result in a successful build, it is highly recommended that a commit and, if applicable, pull request be made to the repo using Git. The most basic way to accomplish this is by staging modifications for addition via the “git add *” command (with OpenJApp as the current working directory!) and upon verification committing them with “git commit -m “\[Your-Development-Message-Here]””. This will ensure all changes are saved within the context of a local version control system. Maintaining a remote backup (such as on GitHub, for instance) of the repo or contributing to another’s using pull requests is also highly encouraged, and more instructions for working with Git can be found within GitHub’s Git Handbook at https://guides.github.com/introduction/git-handbook/.

## Additional Notes

It is worth noting at this point that OpenJApp is a Free and Open Source Software project with a copyleft license, the GNU GPL v3. What this means for the average end user is that while modification and re-hosting of the software is accepted and even greatly encouraged (hence the writing of this guide!), re-distributed and modified versions alike MUST provide access to the source code in full at any user’s request (or, more ideally, even without their request in the form of a publicly accessible repository) as well as a copy of the license in full. The exact terms of the license can be found within the file “COPYING.txt” in the root of the repo as well as in full at https://www.gnu.org/licenses/gpl-3.0.en.html.

# Further NPM Interaction Details (Create React App Instructions)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
