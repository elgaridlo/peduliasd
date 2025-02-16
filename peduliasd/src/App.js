import React, { useEffect } from 'react'
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
import ProductScreen from './Screen/Belanja/ProductScreen'
import LandasanScreen from './Screen/About/LandasanScreen'
import VisiMisiScreen from './Screen/About/VisiMisiScreen'
import PEPScreen from './Screen/EducationProgram/PEPScreen'
import ScoreScreen from './Screen/Skrining/ScoreScreen'
import { FilosofiLogoScreen } from './Screen/About/FilosofiLogoScreen'
import GermasifScreen from './Screen/EducationProgram/GermasifScreen'
import ASDTeleHealthScreen from './Screen/EducationProgram/ASDTeleHealthScreen'
import FormAppointment from './Screen/CASDI/Appointment/FormAppointment'
import QuestionScreen from './Screen/CASDI/Question/QuestionScreen'
import ArticleCASDIScreen from './Screen/CASDI/Article/ArticleScreen'
import EditCasdiArticleScreen from './Screen/CASDI/Article/EditCasdiArticleScreen'
import ArticleCASDIByIdScreen from './Screen/CASDI/Article/ArticleByIdScreen'
import CasdiResearch from './Screen/CASDI/StaticPage/CasdiResearch'
import CasdiAbout from './Screen/CASDI/StaticPage/CasdiAbout'

export const RoleStatusContext = React.createContext()

function App() {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/assets/js/theme.js';
    script.async = true;
    document.body.appendChild(script);
  return () => {
      document.body.removeChild(script);
    }
  }, []);

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
                <Route path="/landasan-berdiri" component={LandasanScreen} exact />
                <Route path="/filosofi-logo" component={FilosofiLogoScreen} exact />
                <Route path="/visi-misi" component={VisiMisiScreen} exact />
                <Route path="/pep" component={PEPScreen} exact />
                <Route path="/germasif" component={GermasifScreen} exact />
                <Route path="/asd-telehealth" component={ASDTeleHealthScreen} exact />
                <Route path="/program-edukasi" component={EducationProgramScreen} exact />
                <Route path="/program-edukasi/:id" component={EduProgramByIdScreen} exact />
                <Route path="/artikel" component={BlogScreen} exact/>
                <Route path="/artikel/:id" component={ArticleByIdScreen} exact />
                <Route path="/artikel/:id/edit" component={EditArticleScreen} exact />
                <Route path="/casdi/about" component={CasdiAbout} exact />
                <Route path="/casdi/riset" component={CasdiResearch} exact />
                <Route path="/casdi/appointment" component={FormAppointment} exact />
                <Route path="/casdi/question" component={QuestionScreen} exact />
                <Route path="/casdi/article" component={ArticleCASDIScreen} exact />
                <Route path="/casdi/article/:id" component={ArticleCASDIByIdScreen} exact />
                <Route path="/casdi/article/:id/edit" component={EditCasdiArticleScreen} exact />
                <Route path="/product" component={BelanjaScreen} exact/>
                <Route path="/skrining" component={SkriningScreen} />
                <Route path="/add-user" component={AddUserScreen} exact />
                <Route path="/product/:id" component={ProductScreen} exact />
                <PrivateRoute path="/admin" currentUser={userInfo ? userInfo.user : null} roles={'admin'} component={AdminScreen} exact />
                <Route path="/user-list" component={UserListScreen} exact />
                <Route path="/user-detail/:id" component={UserByIdScreen} exact/>
                <Route path="/user/edit/:id" component={EditUserScreen} exact/>
                <Route path="/score" component={ScoreScreen} exact/>
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
