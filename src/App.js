import React, { Component } from 'react'
// import RecipesContainer from './recipes/RecipesContainer'
// import RecipeEditor from './recipes/RecipeEditor'
import ErrorItem from './components/ErrorItem'
import Loading from './components/Loading'
import './App.css'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Loading />
        <br />
        <ErrorItem />
        <Routes />
      </div>
    )
  }
}

export default App
