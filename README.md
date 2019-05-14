# Docapp Skeletal Code

When the team first got this assignment, we were given a template that was both difficult to parse and to maintain. Component styling was mixed in with component logic. The structure of the application was not intuitive. The end product was a (well) patched together frankenstein of template code and customized code for our client. This repository aims to provide a stripped down, well defined, domain separated by file, framework from which to work from.

## Basic Structure

Most of the code resides in `src/components` and represent distinct domains. Within each of the component directories will be three files: `index.js`, `<componentName>Container.jsx` and `<componentName>Component.jsx`. The only exceptions to this rule, thus far, are `src/components/Navigation`, `src/components/Firebase` and `src/components/Session`.

`index.js` is self descriptive. It will export the component *en toto*. The component's name will be same as the directory in which it is contained in.

`<componentName>Container.jsx` will contain the component's logic and lifecycle functions. It is in this file where imports of packages are made, higher order components are applied, and event logic functions defined. The format for each of the `<componentName>Container.jsx` will be in a similar format. 

`<componentName>Component.jsx` are exclusively functional components. Typically they will have only one `import` statement and any css import. The code therein are strictly for displaying data in a particular style and manner. 

As for other directories, `src/components/Firebase` and `src/components/Session` will house backend connection as well as application wide context and session management. The functions therein will be explained in the next section.

`src/components/Navigation` contains only an `index.js` as their are no view component. Only routing information.

And finally, there is `constants/routes` and `constants/roles`. These files server as the 'single source of truth' as it comes to routing and roles respectively.


### Higher Order Components and Application Wide Domain functions

There are a number of higher order components one should be aware of: `withAuthorization` and `withAuthentication`. The application wide domain function is `withFirebase`.
`withAuthorization` will wrap a component and concern itself with local state session management. It contains the logic whereby the application is made aware whether the end user is logged in. If not, any attempts to access unauthorized pages will automatically be redirected to the SignIn page.
`withAuthentication` will wrap a component and provide for user session management.
`withFirebase` will wrap a component and provide functions to interact with the firebase backend. Such functions include signing in, signing up, retrieving data, posting data, *et al*.

### Concerns
Currently the configuration information for connecting with Firebase is contained within `src/components/Firebase/firebase.js`. This will eventually need to be moved to a more secure locations during production.

## TODO
The following are tasks that must be completed before we can get back up to basic MVP:
- Debug `this.listener is not a function`. For some reason, this.listener is not being registered.
(The following are basic)
- Implement `cases` component
- Implement `body` component
- Implement `progress` component
- Implement `upload file` component
- Implement `add information` component
- And finally, implement an application wide and component specific styling.

## Running the tests

(Learning how to implement tests.. Placeholder)

### Break down into end to end tests

(Placeholder)
### And coding style tests

(Placholder)

## Deployment

(Placeholder)

