import React from 'react'
import UseClickIndex from './UseClick'
import UseEffectIndex from './UseEffect'
import UseInputIndex from './UseInput'
import UseStateIndex from './UseState'
import UseStateIndex2 from './UseState2'
import UseTitleIndex from './UseTitle'
import UseBeforeLeaveIndex from './UseBeforeLeave'
import UseFadInIndex from './UseFadeIn'

function App() {
  return (
    <div className="App">
      <UseStateIndex />
      <UseStateIndex2 />
      <UseInputIndex />
      <UseEffectIndex />
      <UseClickIndex />
      <UseTitleIndex />
      <UseBeforeLeaveIndex />
      <UseFadInIndex />
    </div>
  )
}

export default App