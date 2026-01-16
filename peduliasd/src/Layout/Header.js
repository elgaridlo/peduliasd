import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/authActions'
import { isMobile } from 'react-device-detect';


const Header = () => {
  const [showNav, setShowNav]= useState(false)

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const dispatch = useDispatch()

  useEffect(() => {
    // This ensures the component re-renders when user info changes
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
                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#!" data-bs-toggle="dropdown" data-bs-auto-close="outside"><span>Tentang Kami</span></a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><a className="dropdown-item" href="/landasan-berdiri">Landasan Berdiri</a></li>
                    <li className="nav-item"><a className="dropdown-item" href="/filosofi-logo">Filosofi Logo</a></li>
                    <li className="nav-item"><a className="dropdown-item" href="/visi-misi">Visi dan Misi</a></li>
                    <li className="nav-item"><a className="dropdown-item" href="/tentang-kami">Peduli ASD</a></li>
                    {userInfo && userInfo.user.role === 'admin' && (<li className="nav-item"><a className="dropdown-item" href="/user-list">User Data</a></li>)}
                  </ul>
                </li>
                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#!" data-bs-toggle="dropdown" data-bs-auto-close="outside"><span>Program</span></a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><a className="dropdown-item" href="/asd-telehealth">ASD Telehealth</a></li>
                    <li className="nav-item"><a className="dropdown-item" href="/pep">Parents Education Programme</a></li>
                    <li className="nav-item"><a className="dropdown-item" href="/fpa">Festival Peduli Autisme</a></li>
                    <li className="nav-item"><a className="dropdown-item" href="/iarc">Indonesia Autism Research Center</a></li>
                  </ul>
                </li>
                <li className="nav-item"><a className="nav-link" style={{paddingTop: `${isMobile ? '0px' : '27px'}`}} href="/artikel">Artikel</a></li>
                <li className="nav-item"><a className="nav-link" style={{paddingTop: `${isMobile ? '0px' : '27px'}`}} href="/skrining">Skrining</a></li>
                <li className="nav-item"><a className="nav-link" style={{paddingTop: `${isMobile ? '0px' : '27px'}`}} href="/product">Belanja</a></li>
                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#!" data-bs-toggle="dropdown" data-bs-auto-close="outside"><span>CASDI</span></a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><a className="dropdown-item" href="/casdi/about">Tentang CASDI</a></li>
                    <li className="nav-item"><a className="dropdown-item" href="/casdi/riset">Riset CASDI</a></li>
                    <li className="nav-item"><a className="dropdown-item" href="/casdi/article">Seputar CASDI</a></li>
                    <li className="nav-item"><a className="dropdown-item" href="/casdi/question">Tanya CASDI</a></li>
                    <li className="nav-item"><a className="dropdown-item" href="/casdi/appointment">Jadwal CASDI</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#!" data-bs-toggle="dropdown" data-bs-auto-close="outside"><span>SWARA App</span></a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><a className="dropdown-item" href="/swara">Tentang SWARA</a></li>
                    <li className="nav-item"><a className="dropdown-item" href="/swara-app">Langganan SWARA</a></li>
                  </ul>
                </li>
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
                
                {userInfo ? (
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
                ) : (
                  <li className="nav-item d-md-block">
                    {/* Login button removed as requested */}
                  </li>
                )}

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
