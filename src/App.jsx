import './styles/components/app.sass';
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

function App() {

  return (
    <>
      <div id="portifolio">
        <h1>Samuel Tavares</h1>
        <Sidebar />
        <MainContent/>
      </div>
    </>
  )
}

export default App
