import * as React from 'react'
import MainLayout from './layout/main'
import Home from './pages/home'
import Contact from './pages/contact'

function App() {
  const [activeMenu, setActiveMenu] = React.useState('Home')
  return (
    <MainLayout onClickMenuItem={(menu) => setActiveMenu(menu)}>
      {activeMenu === 'Home' && <Home />}
      {activeMenu === 'Contact' && <Contact />}
    </MainLayout>
  )
}

export default App
