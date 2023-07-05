# Guide for working with the codebase.
This guide itemizes how to use the codebase.

Assets folder - This folder should be used to store the app assets such as images, pictures, logos etc that would be used in
the coding of this app.

Components folder - This folder should be used to store the components used in creating the web application.

Pages folder - This should store the pages of the web application.

Style folder - Avoid inline styling by creating css files in the style folder.

## How to code in the repository
1. Pull the repo and create a private branch. DO NOT WRITE IN THE MAIN REPOSITORY
1. Run "npm install", to install all dependencies.
1. For the backend, be encouraged to write unit tests for changes you make.
1. When done with the branch and want to merge to main, fix the styling first so it would pass continuous integration.
    // how to fix styling- while in the repo in terminal, run 
    ``` npm run format ```
    // To check if code is oaky- while in the repo in terminal, run 
    ``` npm run lint ```
1. When a member wants to merge their branch to main, create a merge request and ask someone on the team to review.


Note, when a member want to merge their branch to main, it would need to be reviewed by another member in the team before it is can be pushed to the repo.

Reuse components if they are already created. No need for unnecessary toiling. 