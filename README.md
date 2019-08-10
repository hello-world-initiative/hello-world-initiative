# Hello World Initiative

This is the public website for the Hello World Initiative, a community of people who believe that learning code should be free or inexpensive, and that anyone who's willing to put in the effort to learn is capable of becoming proficient.

Everyone is welcome to contribute to this project, especially those who are first learning. If you've never contributed to an open source project before, we would love for this to be your first. What we ask is that before you open an issue or pull request, you read our contributing doc (coming soon) and code of conduct (also coming soon).

Below, you'll find some basic instructions on how to set up this project to develop on it, as well as how it's organized.

## Requirements

To run this project, you'll need to have NodeJS v8.x or higher installed. If you don't already have it, you can find instructions [here](https://nodejs.org/en/download/).

## Installation

To contribute to the Hello World Initiative website, first clone a copy of this repository to your own computer:

`git clone https://github.com/hello-world-initiative/hello-world-initiative.git`

Move into that directory:

`cd hello-world-initiative`

...and install the dependencies:

`npm install`

or

`yarn install`

## Development

To start the project for development, you can use the `start` script that's included with it:

`npm start`

or

`yarn start`

Either one of these commands will start a local development server that will automatically reload changes you make to the files, so that you can see them update in real-time as you work on them. To see your changes, visit `localhost:3000` in your browser.

## Contributing

To contribute to the project, we ask that you create a new branch with a descriptive name to make your pull request. For example, if you're fixing a bug related to a React component called "Nav," your branch name might be `fix-nav-bug`. Pull requests can be made against the master branch, unless otherwise specified.

In your pull request, please provide a description of what your new changes will do. This means what features have been added (if any), what bugs were fixed, what functionality was added, and any potential issues that you anticipate coming up if you can think of any. If you're creating a pull request to address an open issue, please reference the issue by linking it in the description of your PR.

We'll be expanding our contributing section in the near future with more details.

## Bugs and Other Issues

If you find a bug or would like to open up discussion about the direction of the project, including new features, design decisions, or something else relevant to the project, feel free to open an issue.

## To Do

- ~Handle image size better. Currently the bundle (and project itself) is far too big because we're using large hi-res images. Possible solutions: LFS, manually resize images based on breakpoints, use grayscale images, dynamic resizing during builds, i.e. ImageMagick.~
- ~Remove placeholder SCSS and integrate it into component structure better.~
- Refactor everything (never done)
