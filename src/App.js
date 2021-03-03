import React from 'react'
import PageOne from './components/first-page'
import PageTwo from './components/second-page'
import PageThree from './components/third-page'


const App = () => {
  return (
    <div>
      <PageOne />
      <hr />
      <PageTwo />
      <hr />
      <PageThree />
    </div>
  )
}

export default App
