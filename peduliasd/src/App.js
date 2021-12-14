import './App.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './Layout/Header'
import HomeScreen from './Screen/HomeScreen'
import history from './utils/history'
import LoginScreen from './Screen/Authentication/LoginScreen'
import ProfileScreen from './Screen/Authentication/ProfileScreen'
import AboutUsScreen from './Screen/About/AboutUsScreen'
import AboutASDScreen from './Screen/About/AboutASDScreen'
import EducationProgramScreen from './Screen/EducationProgram/EducationProgramScreen'
import BlogScreen from './Screen/Blog/BlogScreen'
import AddUserScreen from './Screen/Admin/AddUserScreen'
import UserListScreen from './Screen/Admin/UserScreen'
import UserByIdScreen from './Screen/Admin/UserByIdScreen'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className="content-wrapper">
      <Router>
        <Header/>
        <main>
            <Switch>
              <Route path="/login" component={LoginScreen} exact />
              <Route path="/profil" component={ProfileScreen} exact />
              <Route path="/tentang-kami" component={AboutUsScreen} exact />
              <Route path="/tentang-asd" component={AboutASDScreen} exact />
              <Route path="/program-edukasi" component={EducationProgramScreen} exact />
              <Route path="/artikel" component={BlogScreen} exact />
              <Route path="/beranda" component={HomeScreen} exact />
              <Route path="/add-user" component={AddUserScreen} exact />
              <Route path="/user-list" component={UserListScreen} exact />
              <Route path="/user-detail/:id" component={UserByIdScreen} exact/>
              <Route path="/" component={HomeScreen} exact />
            </Switch>
        </main>
      </Router>
    </div>
  )
}

export default App
