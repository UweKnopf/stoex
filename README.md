# Stoex

## Description

A modern and simple Inventory Management System.

## Features

WIP

# Dev Stuff

## Stack

For hosting, analytics and speed monitoring we use [Vercel](https://vercel.com).

- [Sveltkit](https://kit.svelte.dev/docs/introduction)
- [Skeleton Ui](https://www.skeleton.dev/docs/get-started) for components and themes
- [Superforms](https://superforms.rocks/) for form validation and user feedback
- [Zod](https://zod.dev/) for form validation
- [Prisma](https://www.mysql.com/) with [Cockroach DB](https://www.cockroachlabs.com/)  for working data

### Prisma Auth
This is the current auth implementation in Prod. 
- [Lucia Auth](https://lucia-auth.com/) for Session and User managment
- [Prisma](https://www.mysql.com/) as the ORM
- [Cockroach DB](https://www.cockroachlabs.com/) as Database (managed serverless cluster)
### Firebase Auth
Possible future test as an exercise.
- [Firebase](https://firebase.google.com/) managed auth/DB
- [Sveltfire](https://github.com/codediodeio/sveltefire/tree/master) making firebase work more easily


## Getting Started with Contributing 

1. Find an Issue to contribute to/make a new issue with a feature or change
2. Fork master 
3. Pull the Fork to your local machine
4. Install all dependencies 
```bash
    npm install
```
5. test if everything works locally
```bash
    npm run dev
```
6. Happy coding!
7. Commit your changes locally
8. Sync these changes with your fork
9. Make a pull request to here
