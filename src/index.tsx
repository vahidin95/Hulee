
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './App';
const { AppContainer } = require('react-hot-loader')

import './styles/ant.less'
import './styles/index.scss'

function render (Component: any) {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('app') as HTMLElement
  )
}

render(App)

if ((module as any).hot) {
  (module as any).hot.accept('./App', () => {
    const NextApp = require<{ App: typeof App }>('./App').App
    render(NextApp)
  })
}

// window.state = appState
