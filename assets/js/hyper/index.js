import { h, app } from 'hyperapp'
import {globalState} from './state/globalState.js'
import {actions} from './actions/actions.js'
import App from './components/App.js'

app({
  state: {globalState},
  view: (state, actions) => <App state={state} actions={actions} />,
  root: document.getElementById('app'),
  actions: {
    reviewRight: value => state => ({ currentReview: state.currentReview - value }),
    reviewLeft: (state, actions) => {
      return { currentReview: state.globalState.currentReview - 1 }
    }
  },
  events: {
    action(state, actions, { name, data }) {
      console.group("Action Info")
      console.log("Name:", name)
      console.log("Data:", data)
      console.groupEnd()
    },
    load(state, actions) {
    }
  }
})
