## React-Redux Boilerplate

A starter kit for react and redux, with a few bells and whistles, including

* es6 transpilation
* linting
* hot reloading
* scss compilation

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run validate
```

## TODO

* ADD PROPS VALIDATION
* MERGE CLEANING FORMS ACTIONS WITH SUCCESS FORM ACTIONS
* BLOCK register button if password !== confirm

## Token logic

No token validation or logout shoud happen outside of this function (except for the logout route)

I have two diferent things that need authentication

1. Routes that should not be accessed while authenticated
2. Enpoints that should not be requested if not authenticated, i.e if you are logged in and your token expires, requesting to a protected endpoint (for example a create data form)
   you should be loged out. So, any 401 responses should trigger that.

```
check if user has an auth token
    if has auth token validate it
        if validate
            continue to site

        if auth token expired
            try to refresh token
                if refreshes, go to original location
                if NOT logout user and go to login

    if not have auth token
        go to login
```

Check to build a higher order component to handle routes auth state

JWT returns 422 if bad token or 401 if token has expired
