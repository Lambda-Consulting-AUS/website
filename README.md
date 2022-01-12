# Lambda Consulting Website

Used [Create React App](https://github.com/facebook/create-react-app). It has `npm start`, `npm run build`, etc.

Uses a GitHub Action to build and push to a `gh-pages` branch which Netlify picks up and deploys to https://lambdaconsulting.com.au

If the Action fails, manual update the branch by running `npm run build` then `gh-pages -d build` in the root of the repo locally. This requires `sudo npm i -g gh-pages`


Images
* Use SVGO (`npm i -g svgo`, `svgo in.svg -o out.svg`) to minify SVG files from Inkscape
* Use `public/generate-favicon.sh` to get a favicon.ico when you update the `logo-square.svg` file
