# Guide for working with the codebase.
This guide itemizes how to use the codebase.

Assets folder - This folder should be used to store the app assets such as images, pictures, logos etc that would be used in
the coding of this app.

Components folder - This folder should be used to store the components used in creating the web application.

Pages folder - This should store the pages of the web application.

Style folder - Avoid inline styling by creating css files in the style folder.

## Running your application
1. Run `npm install`, to install all dependencies.
2. Run `npm run dev` to run the webapp on your local host.
3. Press `r` to reboot the server if needed.
4. Press `q` to quit. 


## Setting up git in your local work environment
Pull the repo and create a private branch. DO NOT WRITE IN THE MAIN REPOSITORY
1. Run `git init` to create a new git repository
2. Run `git remote add origin https://github.com/Angel-Adetula/fisk_cs_website.git` to set remote repository.
3. By now, you should be linked to our remote repo.
4. Just to be sure, run `git remote -v` to check your remote repository. It should be the link to our shared repo.
5. Now, to create your own branch, run `git checkout -b your_name`
6. Just to be sure that worked, run `git status`. It should show you `on branch your_name`.
7. Now, you are on your branch and can make changes.


## Coding in the repository
1. For the backend, be encouraged to write unit tests for changes you make.
2. When done with the branch and want to merge to main, fix the styling first so it would pass continuous integration.
    // how to fix styling- while in the repo in terminal, run 
    ``` npm run format ```
    // To check if code is oaky- while in the repo in terminal, run 
    ``` npm run lint ```
3. When a member wants to merge their branch to main, create a merge request and ask someone on the team to review.


Note, when a member want to merge their branch to main, it would need to be reviewed by another member in the team before it is can be pushed to the repo.

Reuse components if they are already created. No need for unnecessary toiling. 