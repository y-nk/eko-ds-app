This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation instructions

Because this is a private test, one of the dependency couldn't be added easily. **Please make sure to install it before running the project.**

1. **eko-ds-core dependency install**
    ```
    cd /tmp
    git clone https://github.com/y-nk/eko-ds-core.git
    cd eko-ds-core
    yarn && yarn local
    ```

2. **install the dependency in this project**
    ```
    npm link eko-ds-core
    ```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

