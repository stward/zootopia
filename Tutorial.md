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
