import React, { useEffect, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/authActions'
import { isBrowser, isMobile } from 'react-device-detect';


const Header = () => {
  const [showLogin, setShowLogin] = useState(true)

  const [showNav, setShowNav]= useState(false)

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const dispatch = useDispatch()

  useEffect(() => {
    if (!userInfo) {
      setShowLogin(true)
    } else {
      setShowLogin(false)
    }
  }, [userInfo])

  const changeShowNav = () => {
    setShowNav(!showNav)
  }

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <>
      <header className="wrapper bg-soft-primary">
        <nav className="navbar navbar-expand-lg center-nav transparent navbar-light">
          <div className="container flex-lg-row flex-nowrap align-items-center">
            <div className="navbar-brand w-100">
              {/* <LinkContainer to="/" >
                <Navbar.Brand>
                  <Image
                    src={'logoasd.png'}
                    srcSet="logoasd.png"
                    alt=""
                  />
                </Navbar.Brand>
              </LinkContainer> */}
              <a href="/">
                <img src="/logoasd.png" srcSet="/logoasd.png" alt="" />
              </a>
            </div>
            <div className={`navbar-collapse offcanvas-nav ${showNav ? 'open': ''}`} >
              <div className="offcanvas-header d-lg-none d-xl-none">                
                <a href="/"><img src="/logoasd.png" srcSet="/logoasd.png" alt="" /></a>
                <button
                  type="button"
                  className="btn-close btn-close-white offcanvas-close offcanvas-nav-close"
                  aria-label="Close"
                  onClick={changeShowNav}
                ></button>
              </div>
              <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link" style={{paddingTop: `${isMobile ? '0px' : '27px'}`}} href="/">Beranda</a></li>
                <li className="nav-item"><a className="nav-link" style={{paddingTop: `${isMobile ? '0px' : '27px'}`}} href="/tentang-asd">Tentang ASD</a></li>
                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#!"><span>Tentang Kami</span></a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><a className="dropdown-item" href="/landasan-berdiri">Landasan Berdiri</a></li>
                    <li className="nav-item"><a className="dropdown-item" href="/visi-misi">Visi dan Misi</a></li>
                    <li className="nav-item"><a className="dropdown-item" href="/tentang-kami">Peduli ASD</a></li>
                    {userInfo && userInfo.user.role === 'admin' && (<li className="nav-item"><a className="dropdown-item" href="/user-list">User Data</a></li>)}
                  </ul>
                </li>
                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#!"><span>Program</span></a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><a className="dropdown-item" href="/program-edukasi">Zoominar dan IG Live</a></li>                    
                    <li className="nav-item"><a className="dropdown-item" href="/program-edukasi">Gerakan Masyarakat Inklusif (GERMASIF)</a></li>                    
                    <li className="nav-item"><a className="dropdown-item" href="/pep">ASD Telehealth</a></li>
                    <li className="nav-item"><a className="dropdown-item" href="/pep">Parents Education Programme</a></li>
                  </ul>
                </li>
                {/* <li className="nav-item"><a className="nav-link" href="/program-edukasi">Program</a></li> */}
                <li className="nav-item"><a className="nav-link" style={{paddingTop: `${isMobile ? '0px' : '27px'}`}} href="/artikel">Artikel</a></li>
                <li className="nav-item"><a className="nav-link" style={{paddingTop: `${isMobile ? '0px' : '27px'}`}} href="/skrining">Skrining</a></li>
                <li className="nav-item"><a className="nav-link" style={{paddingTop: `${isMobile ? '0px' : '27px'}`}} href="/product">Belanja</a></li>
              </ul>
            </div>

            <div className="navbar-other w-100 d-flex ms-auto">
              <ul
                className="navbar-nav flex-row align-items-center ms-auto"
                data-sm-skip="true"
              >
                {userInfo && (
                  <>
                    <li className="nav-item d-none d-md-block">
                      Hi {userInfo ? `${userInfo.user.email.split('@')[0]}!`: ''}
                    </li>
                  </>
                )}
                
                  {
                    showLogin ? (
                    <li className="nav-item d-md-block">
                      <LinkContainer to="/login">
                        <button className="btn btn-primary rounded-pill mx-1 mb-2 mb-md-0" >Login</button>
                      </LinkContainer>
                    </li>
                    ) : (
                      <li className="nav-item dropdown language-select">
                        <a className="nav-link dropdown-item dropdown-toggle" href="/"  role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="uil uil-cog"></i>
                        </a>
                        <ul className="dropdown-menu">
                          {userInfo.user.role === 'admin' && (<li className="nav-item"><a className="dropdown-item" href="/admin">Admin</a></li>)}
                          <li className="nav-item"><a className="dropdown-item" href="/profil">Profile</a></li>
                          <li className="nav-item"><a className="dropdown-item" href="/" onClick={logoutHandler}>Logout</a></li>
                        </ul>
                      </li>
                    )
                  }

                <li className="nav-item d-lg-none">
                  <div className="navbar-hamburger">
                    <button
                      className="hamburger animate plain"
                      data-toggle="offcanvas-nav"
                      onClick={changeShowNav}
                    >
                      <span></span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
