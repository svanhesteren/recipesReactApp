// src/routes.js
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import RecipePage from './recipes/RecipePage'
import RecipesContainer from './recipes/RecipesContainer'
import RecipeEditor from './recipes/RecipeEditor'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={RecipeEditor} />
        <Route exact path="/" component={RecipesContainer} />
        <Route path="/recipes/:recipeId" component={RecipePage} />
      </div>
    )
  }
}
