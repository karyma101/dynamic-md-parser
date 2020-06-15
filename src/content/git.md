# Git

Git is the industry-standard version control system for web developers.

### Git Workflow

![Git Workflow](https://github.com/karyma101/handbook/blob/master/GIT/img/workflow.png 'Git Workflow')

-   A Working Directory: where you’ll be doing all the work: creating, editing, deleting and organizing files.
-   A Staging Area: where you’ll list changes you make to the working directory.
-   A Repository: where Git permanently stores those changes as different versions of the project.

### Git Reset

-   A **remote** is a shared Git repository that allows multiple collaborators to work on the same Git project from different locations.

## Git Areas

#### Working Area

The files in your working area that are also not in the staging area are not handled by git. Also called untracked files.

#### Staging Area

What files are going to be part of the next commit. The staging area is how git knows what will change in between the current commit and the next commit.

**Unstaging a file**

```bash
git reset HEAD <file>
```

#### The Repository

The file git knows about. Contains all of your commits.

### References

**Branch** is just a pointer to a particular commit. The pointer of the current branch changes as new commits are made.

**Head** is how git knows what branch you're currently working on, and what the next parent will be. Its a pointer, it usually points to the name of the current branch. But it can also point at a commit too (detached HEAD). It moves when you make a commit in the current active branch or when you checkout a new branch.

### Tags

-   git tag: shows all tag
-   git tag <name>: creates a tag
-   git show <name>: look at tag in detail
-   git tag -a <name> -m '<message>' : creating annotated tags
-   git tag --points-at <hash> : shows all tags pointing at hash commit
