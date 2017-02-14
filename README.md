## W2D1 Breakout

We used the following API to implement a beer search app.

http://www.brewerydb.com/developers/docs

We built it quickly in app.js but then separated the API logic into its own module.

## Endpoints

We used the words "endpoints" right off the bad. An endpoint is a common way to refer to a function on another server that has been made available to us via HTTP. It's a web way of saying "external function", I guess.

Just like with regular JS functions, we can pass in parameters (via the query string in this case) and the result is sent back as a string (usually JSON, but can XML, etc.)

A function is really an action that can be performed, so let's think of each endpoint as an action.

We see in the documentation that it also calls these things _Endpoints_.

## Asynchronous data/control flow

In refactoring our code to be in multiple files (thanks to modules), we had to really grasp asynchronous control flow. JS is no longer running this code from the top down, and in fact it's jumping from one file into another.

Because http requests are async, we must use callbacks and cannot use `return` to return data.

For example, the callback function that is _passed into_ `request` (in the `beer_api.js` file), is being _called_ later by the `request` library! (read this again along with the code to make sure you understand what I'm saying here!)

Therefore we cannot simply `return beers` in that callback. The function caller (request) would get back the beers, but we need to send them to our `app.js` caller.

Due to the ASYNC nature of HTTP, we must use callbacks to send back return values like the collection of `beers` to the other file (the caller).

## Known Issues

### Issue 1: error if no query

The script doesn't work unless you pass in a query:

```
node app.js delerium
```

### Issue 2: Sensitive Info

We hardcoded the sensitive API KEY into our app. That's bad. How can you fix this? Note: there is a stretch activity later today (W2D1) that helps you handle this issue and not commit/push sensitive secrets like API KEYs to public repos.

## Stretch for you

If you have time today, clone this repo and fix known issue 1.