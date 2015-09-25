# slerk-web

A messaging app for teams.™

Have header/cookie/query param/whatever that controls the API endpoint. This allows the test runner to run code without interfering with calls in their existing sandbox.


NOTES:
 * config/webpack/*.js has the .babel.js extension to automatically invoke babel. Why this can't be configured as an environment setting or global is beyond me. This is dumb and I want to fix it.

## Configuration

Application configuration is handled via environment variables. http://12factor.net/config

| Environment Variable | Default Value | Description                           |
| -------------------- | ------------- | ------------------------------------- |
| NODE_ENV             | development   | Environment running in.               |
| API_URL              | `undefined`   | Endpoint to send API requests to.     |
| PORT                 | 0             | Port on which requests are served.    |

## Development

Please read the [contributing guidelines](CONTRIBUTING.md) first.

### Setup

```sh
# Install nvm
nvm install 4
# Clone the repository
git clone https://github.com/metalabdesign/slerk-web.git slerk-web
# Go in to the repository
cd slerk-web
# Install packages
npm install
```

### Running

```sh
npm run dev
```

### Configuration

It is handy to use environment files to automatically export the configuration you'd like to be working with. One project that supports this is [direnv]. This allows you to create a `.envrc` file that contains the configuration you want for the project. e.g.

```sh
# .envrc
PORT=8080
API_URL=http://localhost:5050
```

## Deployment

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/metalabdesign/slerk-web)

We use [TravisCI] to handle our continuous integration and deployment needs. Every git commit automatically triggers a build on [TravisCI] and only builds for which all tests pass are allowed to be merged into `master`. The integration test used is simply `npm test`.

Once a successful build is merged into `master` [TravisCI] then automatically pushes the appropriate changes through [Heroku] to update the staging environment.

### Setup

```sh
brew install heroku
gem install travis

heroku login
travis encrypt $(heroku auth:token) --add deploy.master.api_key
```

### Configuration

```sh
heroku config:set NODE_ENV=production
```

[Heroku]: https://www.heroku.com/
[TravisCI]: https://travis-ci.org/
[direnv]: http://direnv.net/
