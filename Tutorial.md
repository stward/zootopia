## Step 1: Set up the react app.

Fork the zootopia repository from fresh5447/zootopia my github account.

Clone from my fork of the zootopia reop. `git clone <url>`

Checkout the react-start branch `git checkout react-start`

Create a react app: `create-react-app client`

Delete the unnecessary files that were created by `create-react-app`, leave only index.js and index.css

Commit this step to github
`git status`
`git add -A`
`git commit -m <message>`
`git push origin react-work`

## Step 2: Build out App.js

Create an App.js file `touch App.js` in src directory

In App.js, create a stateful component `var App = React.createClass({})` that is meant to render and keep track of each view

Write a function to set initial state `activeComponent` and which animal to update `activeId`
```
getInitialState: function() {
  return {activeComponent: "Home", activeId: null};
},
```

Create function `updateActiveComponent` that accepts `comp` and `id` to update the current state
```
updateActiveComponent: function (comp, id) {
  this.setState({activeComponent: comp, activeId: id});
},
```

Create function `renderProperComponent` that uses `activeComponent` state variable to determine which component to return
```
renderProperComponent: function() {
  if (this.state.activeComponent === 'Home') {
    return <Home updateActiveComponent={this.updateActiveComponent} />
  } else {
    return null
  }
},
```

Finish by writing render function to send a view
```
render: function() {
  return (
    <div>
      {this.renderProperComponent()}
    </div>
  )
}
```

Commit changes to github

## Step 3: Creating the home view

Import react-bootstrap with terminal for later css rendering `npm install --save react-bootstrap`

Create a stateless component in new file `Home.js` that will render a heading, a viewAll button, and a postNew button.
```
import React from 'react'

var Home = function(props) {
  return (
    <div>
      <h1>Zootopia</h1>
      <button onClick={() => props.updateActiveComponent('viewAll')}>View All Animals</button>
      <button onClick={() => props.updateActiveComponent('postNew')}>Post New Animal</button>
    </div>
  )
}

export default Home
```

Import Home file into App.js
`import Home from './Home';`

Commit changes to github

## Step 4: Viewing all animals

Create `AnimalsContainer.js` in src directory

Import AnimalsTable view `import AnimalsTable from './AnimalsTable'`

Create a stateful component that will display all animals imported from AnimalsTable, and set initial state
```
var AnimalsContainer = React.createClass({
  getInitialState: function() {
    return ({animals: null})
  }
})
```

Install jquery with terminal `npm install --save jquery`

Import jquery `import $ from 'jquery';`

Write function to get animal data from server before render function is run
```
componentWillMount: function() {
  this.getAnimalsFromServer();
},
getAnimalsFromServer: function() {
  var that = this
  $.ajax({
    url: '/api/animals',
    method: 'GET'
  }).done(function(data) {
    that.setState({animals: data})
  })
}
```

Send to the view
```
render: function() {
  return (
    <div>
      <AnimalsTable animals={this.state.animals} />
    </div>
  )
}
```

Commit to github

## Step 5: Creating the AnimalsTable view

Create AnimalsTable.js file
