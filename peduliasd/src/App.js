import React from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './Layout/Header'
import HomeScreen from './Screen/HomeScreen'
import LoginScreen from './Screen/Authentication/LoginScreen'
import ProfileScreen from './Screen/Authentication/ProfileScreen'
import AboutUsScreen from './Screen/About/AboutUsScreen'
import AboutASDScreen from './Screen/About/AboutASDScreen'
import EducationProgramScreen from './Screen/EducationProgram/EducationProgramScreen'
import BlogScreen from './Screen/Blog/BlogScreen'
import AddUserScreen from './Screen/Admin/User/AddUserScreen'
import UserListScreen from './Screen/Admin/User/UserScreen'
import UserByIdScreen from './Screen/Admin/User/UserByIdScreen'
import BelanjaScreen from './Screen/Belanja/BelanjaScreen'
import SkriningScreen from './Screen/Skrining/SkriningScreen'
import AdminScreen from './Screen/Admin/AdminScreen'
import { PrivateRoute } from './utils/Routings/PrivateRoute'
import { useSelector } from 'react-redux'
import EduProgramByIdScreen from './Screen/Admin/EduProgram/EduProgramByIdScreen'
import ArticleByIdScreen from './Screen/Blog/ArticleByIdScreen'
import Footer from './Layout/Footer'
import EditUserScreen from './Screen/Admin/User/EditUserScreen'
import EditArticleScreen from './Screen/Blog/EditArticleScreen'

export const RoleStatusContext = React.createContext()

function App() {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  
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
                <Route path="/program-edukasi/:id" component={EduProgramByIdScreen} exact />
                <Route path="/artikel" component={BlogScreen} exact/>
                <Route path="/artikel/:id" component={ArticleByIdScreen} exact />
                <Route path="/artikel/:id/edit" component={EditArticleScreen} exact />
                <Route path="/belanja" component={BelanjaScreen} />
                <Route path="/skrining" component={SkriningScreen} />
                <Route path="/add-user" component={AddUserScreen} exact />
                <PrivateRoute path="/admin" currentUser={userInfo ? userInfo.user : null} roles={'admin'} component={AdminScreen} exact />
                <Route path="/user-list" component={UserListScreen} exact />
                <Route path="/user-detail/:id" component={UserByIdScreen} exact/>
                <Route path="/user/edit/:id" component={EditUserScreen} exact/>
                <Route path="/" component={HomeScreen} exact />
              </Switch>
              <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                  <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
              </div>
          </main>
          <Footer/>
        </Router>
    </div>
  )
}

export default App
