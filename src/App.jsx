// CSS
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

//Component Imports
import Header from './components/header/header'
import FTF from './components/FTF/FTF'
import Documents from './components/documents/documents'
import Covid from './components/covid/covid'
import Flying from './components/flying/flying'
import Voting from './components/voting/voting'
import Housing from './components/housing/housing'
import Food from './components/food/food'
import Transportation from './components/transportation/transportation'
import Money from './components/money/money'
import Communication from './components/communication/communication'
import Health from './components/health_care/health_care'
import Performance from './components/performance/performance'
import CostumesHMU from './components/costumes_hmu/costumes_hmu'
import Leisure from './components/leisure/leisure'
import Packing from './components/packing/packing'
import Footer from './components/footer/footer'
import PageNotFound from './components/page_not_found';

const App = () => {

  return (
    <Router>
      <div>
        <div id='tree-background'></div>
        <Header />
        <nav>
          <ul>
            <li><Link to="/">FTF</Link></li>
            <li><Link to="/documents">Documents</Link></li>
            <li><Link to="/covid">Covid</Link></li>
            <li><Link to="/flying">Flying</Link></li>
            <li><Link to="/voting">Voting</Link></li>
            <li><Link to="/housing">Housing</Link></li>
            <li><Link to="/food">Food</Link></li>
            <li><Link to="/transportation">Transportation</Link></li>
            <li><Link to="/money">Money</Link></li>
            <li><Link to="/communication">Communication</Link></li>
            <li><Link to="/health">Health</Link></li>
            <li><Link to="/performance">Performance</Link></li>
            <li><Link to="/costumes-hmu">Costumes, Hair/Makeup</Link></li>
            <li><Link to="/leisure">Leisure</Link></li>
            <li><Link to="/packing">Packing</Link></li>
            {/* Add more links for other components */}
          </ul>
        </nav>
        <Routes>
          <Route path='/'  element={<FTF/>} />
          <Route path='/documents' element={<Documents/>} />
          <Route path='/covid' element={<Covid/>} />
          <Route path='/flying' element={<Flying/>} />
          <Route path='/voting' element={<Voting/>} />
          <Route path='/housing' element={<Housing/>} />
          <Route path='/food' element={<Food/>} />
          <Route path='/transportation' element={<Transportation/>} />
          <Route path='/money' element={<Money/>} />
          <Route path='/communication' element={<Communication/>} />
          <Route path='/health' element={<Health/>} />
          <Route path='/performance' element={<Performance/>} />
          <Route path='/costumes-hmu' element={<CostumesHMU/>} />
          <Route path='/leisure' element={<Leisure/>} />
          <Route path='/packing' element={<Packing/>} />
          {/* Add more routes for other elements */}
          <Route element={<PageNotFound/>} />
        </Routes>
        <Footer />
      </div>

    </Router>
  )
}

export default App