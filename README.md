![Slerk](http://i.imgur.com/NQ6hO3k.png)

A modern messaging app for teams.™

Get ready to Slerk™ your teammates with this fun, fast-paced messaging app brought you by SlerkCorp™. Unfortunately SlerkCorp™ forgot to pay their programmers and so their glorious brainchild has been left missing some important features. Let's help SlerkCorp™ get Slerk™ shipped. :ship:

**IMPORTANT**: You should always be viewing this `README.md` file from your _OWN_ repository since some functionality depends on it. Please read the [contributing guidelines](CONTRIBUTING.md) first.

## Objectives

### Core
 * [ ] :computer: [Get your development environment running](#development-environment).
 * [ ] :shoe: [Clone the repo and run the website](#repository-set-up). #aeev3e
 * [ ] :barber: [Get the header to display channel title and topic nicely](#properties-and-headers). #aeev3e
 * [ ] :moyai: [Compose the necessary components to display a message](#using-components). #aeev3e
 * [ ] :crystal_ball: [Handle input field state](#state). #aeev3e
 * [ ] :black_nib: [Send messages to the server](#actions). #aeev3e
 * [ ] :ship: [Ship It](#ship-it).

### Bonus

Time to burn? Feel free to tackle some of the more advanced topics on your own.

 * [ ] :bell: Play a noise when messages are received.
 * [ ] :warning: Display a notification when users are typing.

When you complete an objective click the checkbox beside it to track your progress. **IMPORTANT**: If you can't click the checkbox it means you're looking at the wrong repository (you're looking at the template and not your own copy).

If you get stuck at a particular objective simply click the link beside the objective to view the code MetaLab has whipped up to solve the problem. Also feel free to come up and ask questions to any of the presenters or other technical liaisons.

If you ever get so totally stuck with your code, you can reset everything to a specific point. **IMPORTANT**: This will totally reset what you've been working on, so consider asking for help before you use this nuclear option.

```sh
# Replace checkpoint with one of the codes in the objectives list.
git reset --hard checkpoint
```

### Development Environment

To get your machine up and going you need a working copy of `git` and `node`; the process for setting these packages up varies on platform and instructions for some of the more common ones are listed below.

#### Mac OS X

 * [ ] Install development tools with `xcode-select --install`
 * [ ] Install [homebrew](http://brew.sh/) (or if installed update `brew update`)
 * [ ] Install `git` with `homebrew` via `brew install git`
 * [ ] Install `node-4` with `homebrew` via `brew install node`
 * [ ] Install a text editor like [Atom](https://atom.io/)

#### Ubuntu Linux

 * [ ] Update packages with `sudo apt-get update`
 * [ ] Install development tools with `sudo apt-get install gcc git`
 * [ ] Install `nvm` from [here](https://github.com/creationix/nvm)
 * [ ] Install `node-4` with `nvm` via `nvm install 4`
 * [ ] Install a text editor like [Atom](https://atom.io/)

#### Windows

 * [ ] Install `git` from [here](https://git-scm.com/download/win)
 * [ ] Install `node-4` from [here](https://nodejs.org/)
 * [ ] Install a text editor like [Atom](https://atom.io/)

### Repository Set Up

#### Forking

The code for this project is located [here](https://github.com/metalabdesign/startupslam-workshop). Sign up for a [GitHub] account and get started by clicking the "Fork" button on the project to get a copy of your own.

#### Cloning

Now that you have a copy of Slerk™ on your account, you can download the code for it. This is done via git.

```sh
# Clone the project repository.
git clone git@github.com:YOURNAMEHERE/startupslam-workshop.git
# Go into the the code folder.
cd startupslam-workshop
# See what's there.
ls
```

Possible errors:
 * `git` complains about invalid permissions – Make sure you either login with the correct password or setup your SSH keys properly. Follow the guide [here](https://help.github.com/articles/set-up-git/).

#### Installing Dependencies

Slerk™ stands on the shoulders of giants; much code written by the community is used to implement and enhance Slerk™ functionality. These community packages are listed in [package.json](package.json) and installed with `npm`.

```sh
npm install
```

Possible errors:
 * `npm` complains about permissions – You have installed something using `sudo`. You should delete whatever directory it's complaining about. Ask us first before you start deleting things you're unsure about.
 * `npm` complains about not being able to fetch `git://...` – You don't have `git` installed. Follow the instructions above.
 * `npm` complains about not finding `gcc` or not being able to build native modules – You're missing your platforms development tools. Follow the instructions above.

#### Running the Server

In order to start using Slerk™ you must start a service that delivers the HTML, JavaScript, CSS and other assets to your web browser. For development this service is aptly called the development server and can be started from the command line.

```sh
npm run dev # On Mac OS & Linux distros
npm run windev # For Windows developers
```

Possible errors:
 * You get an `EADDRINUSE` error – Some other server is using port 8080 or you have another copy of Slerk™ running. Find the process that is using that port and kill it.
 * You get an error about not being able to find some module – Make sure you've run `npm install`. If it still fails nuke the `node_modules` folder and re-run `npm install`.
 * You get a stack trace – You probably have a JavaScript error somewhere; fix the error, stop the server and re-run it.

#### Visit the server in your browser.

At last Slerk™ is ready! Open your web browser and bask in its glory. The development server should be running at [http://localhost:8080/](http://localhost:8080/).

Possible errors:
 * Page doesn't load at all – Server isn't started or has crashed.
 * Stuck at "Loading Slerk™…" – Most likely a JavaScript error.

Remember to use Chrome's developer tools to check the console for potential errors and debugging information. See [here](http://infoheap.com/wp-content/uploads/2013/04/chrome-developer-tools-menu-open.png).

### Properties and Headers

React components are simply view structures that are generated from their properties and state. We'll deal exclusively with properties for now. Properties are simply key/value pairs that control the behavior, look and feel of the component.

Here is a simple _theoretical_ component that displays a message:

```javascript
class MyHeader extends Component {

  // Declare what properties your component accepts.
  static propTypes = {
    message: PropTypes.string.isRequired
  }

  // Use those properties to create a view.
  render() {
    return <div>{this.props.message}</div>;
  }
}
```

This component can be used to display various headers:

```javascript
<MyHeader message="Hello"/>
<MyHeader message="World"/>
```

Slerk™ is missing the correct values for the chat header file: [src/components/chat/header.js](src/components/chat/header.js). Add in the channel name and topic by using the correct properties from the chat header component.

### Using Components

Now that you've seen how a single component is put together it's time to look at one of the big selling points of React: composition. By having simple components that you can re-use and connect together complex view hierarchies become easier to reason about and control.

Here is a simple _theoretical_ component that builds upon other components:

```javascript
class MyMessage extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
  }

  render() {
    return (
      <div>
        <MyPicture picture={this.props.picture}/>
        <MyText text={this.props.text}/>
      </div>
    );
  }
}
```

This component can be used to display various messages:

```javascript
<MyMessage text='Hello' picture='hello.jpg'/>
<MyMessage text='World' picture='world.jpg'/>
```

Slerk™ has ready-made components for displaying chat messages, user images, timestamps and more but the developers never got around to making the actual chat message component: [src/components/message/index.js](src/components/message/index.js). Use the pre-made components to make the messages display.

### State

So we've talked about properties and how they shape a component; now we need to talk about state. State is similar in the sense it is used to control the behavior, look and feel of a component, but different in the sense it is _attached_ to a particular instance of a component. Properties are always passed down from somewhere else, state is not. You have to manage state explicitly in your component by using `setState`.

Here is a simple _theoretical_ component that uses state:

```javascript
class MyCounter {
  state = {
    // The initial state is 0
    value: 0
  }

  increment() {
    // Update the component state to the value of the previous state plus one.
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    // When you click the counter, increment its value.
    <a onClick={this.increment.bind(this)}>{this.state.counter}</a>
  }
}
```

This component can be used to display a clickable counter:

```javascript
<MyCounter/>
<MyCounter/>
```

Note how `MyCounter` receives no props; its behavior is all controlled internally, and both instances have their own state.

Generally state should be avoided wherever possible, since it is harder to reason about; you never know explicitly _where_ the behavior of the component is being controlled from because state hides things inside the component itself. However sometimes it can be useful on things like form input elements.

Slerk™ has a chat input box [src/components/chat/input.js](src/components/chat/input.js) that has some input state for keeping track of what text is currently in the box. Update it so that when the user hits enter the chat input text is cleared.

### Actions

The last piece of the puzzle is how components communicate with the outside world. We've seen how to get information _into_ components and now it's time to go the other way. This is typically done by passing a function down as a property and then calling that function.

Here is a simple _theoretical_ component that dispatches actions:

```javascript
class MessageSender {
  propTypes = {
    // This component has a function that handles sending the messages.
    sendMessage: PropTypes.func.isRequired
  }

  handleClick() {
    // Invoke the function that was given to this component to handle messages.
    this.props.sendMessage('Hello World.');
  }

  render() {
    return <a onClick={this.handleClick.bind(this)}>Send Message</a>;
  }
}
```

This component can be used to display a "Send Message" link that sends an alert:

```javascript
function send(text) {
  alert('You sent ' + text);
}

<MessageSender sendMessage={send}/>
```

The same chat input box [src/components/chat/input.js](src/components/chat/input.js) now needs to send the message upstream into the SlerkEther™. Use the message sending handler to dispatch the message to the server and complete Slerk™!

### Ship It

SlerkCorp™ loves what you've done! It's time to get Slerk™ published so the rest of the world can use it. Save all the work you've done to your GitHub by comitting and pushing your code:

```sh
git commit -av -m "Make Slerk™ ready for the world."
git push
```

After you've committed and pushed your code, simply click "Deploy" and follow the instructions that [Heroku] provides.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Appendix

### Structure

There is a lot of content to digest in Slerk™; from scaffolding and best-practices guidelines to core app code Slerk™ has it all. Let's take a dive into the codebase.

```
config/ - Global configuration.
+ eslint - Configuration to control code style.
+ webpack - Configuration to control asset building.
entry/ - Entrypoints for the application – parts where code starts running.
src/ - All source code for the app.
+ actions/ - Flux actions used to redux; for dispatching action.
+ api - Server communication functionality.
+ components - Reusable views (generally) without state.
+ containers - Stateful components making use of redux.
+ images - Global images not specific to any component.
+ reducers - Flux stores used by redux; capture app state.
+ server - Server-side functionality for rendering the page.
+ utils - Global utility functions.
+ vendor - 3rd party libraries that are not available via npm
+ styles - Global styles not specific to any component.
```

[GitHub]: https://www.github.com/
[Heroku]: https://www.heroku.com/
[Codeship]: https://www.codeship.com/
[direnv]: http://direnv.net/
