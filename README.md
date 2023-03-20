# Logic Legends Decision-Making Framework

[![Deploy to Netlify](After deployment it will be added by the team)]

- [x] Full stack ES8+ with [Babel]
- [x] [Node] LTS support (verified working on 14.x, 16.x and 18.x LTS releases)
- [x] [React] client with [Webpack]
- [x] Client-side routing with [React Router]
- [x] Linting with [ESLint] and [Prettier]
- [x] Dev mode (watch modes for client and server, proxy to avoid CORS issues)
- [x] [Netlify] deployment

## Running

npm run dev:client


## Scripts

Various scripts are provided in the package file, but many are helpers for other scripts; here are the ones you'll
commonly use:

- `dev`: starts the frontend and backend in dev mode, with file watching (note that the backend runs on port 3100, and
  the frontend is proxied to it).
- `lint`: runs ESLint and Prettier against all the code in the project.
- `serve`: builds and starts the app in production mode locally.

### Debugging

While running the dev mode using `npm run dev`, you can attach the Node debugger to the server process via port 9229.
If you're using VS Code, a debugging configuration is provided for this.

There is also a VS Code debugging configuration for the Chrome debugger, which requires the recommended Chrome
extension, for debugging the client application.

### Repository name

https://github.com/Logic-Legends/Decision-Making-Frmwk


