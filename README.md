# Todo App made with NextJS and Prisma

## Work the project

Clone the repository

```sh
git clone git@github.com:omfj/nextjs-prisma-todoapp
```

Go into the project directory

```sh
cd nextjs-prisma-todoapp
```

Install the dependencies

```sh
yarn
```

Generate the prisma client

```sh
npx prisma generate
```

Create a migration

```sh
npx prisma migrate dev
```

Run the local server

```sh
yarn dev
```

Make sure your `.env` look like this:

```env
DATABASE_URL=file:./dev.db
```

Happy hacking!
