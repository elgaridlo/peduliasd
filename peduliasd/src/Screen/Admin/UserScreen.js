import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { userListAction } from '../../actions/userAction'

const UserListScreen = () => {
    const userList = useSelector((state) => state.userList)
    const { loading, error , userlist} = userList

    const dispatch = useDispatch()

    useEffect(()=>{
        if(!userlist) {
            dispatch(userListAction())
        }
    },[])
    // useEffect(() => {
    //     if(success && success.status === 'Success') {
    //         dispatch(removeUserNewData())
    //         history.push('/user-list')
    //     }
    //     setPassword(`${(firstname+lastname).trim().slice(0,4)}1234`)
    // },[firstname, lastname, success])
    return (
        <>
            <section className="wrapper bg-soft-primary">
                <div className="container py-14 pt-md-17 pb-md-19">
                    <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 align-items-center">
                        <div className="col-lg-4">
                            <h2 className="fs-16 text-uppercase text-primary mb-3">
                                Peduli ASD
                            </h2>
                            <h3 className="display-4 mb-3 pe-xxl-15">
                                Screen Member
                            </h3>
                        </div>

                        <div className="col-lg-8 mt-lg-2">
                            <div className="row align-items-center counter-wrapper gy-6 text-center">
                                <div className="col-md-4">
                                    <a href="/add-user" className="btn btn-primary">Tambah Member</a>
                                </div>

                                <aside className="col-md-8 sidebar">
                                    <form className="search-form">
                                        <div className="form-floating mb-0">
                                            <input id="search-form" type="text" className="form-control" placeholder="Search"/>
                                            <label htmlFor="search-form">Search</label> 
                                        </div>
                                    </form>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="wrapper bg-light">
                <div className="container py-16 py-md-17">
                    <div className="grid mb-14 mb-md-17">
                        <div className="row isotope gy-6 mt-n19 mt-md-n22">
                            
                            {userlist && userlist.data.map((item) => (
                                <LinkContainer key={item._id} to={`/user-detail/${item._id}`}>
                                    <div className="item col-md-6 col-xl-6">
                                        <div className="card shadow-lg">
                                            <div className="card-body">
                                                <blockquote className="icon mb-0">
                                                    <p>
                                                        {item.address}
                                                    </p>
                                                    <div className="blockquote-details">
                                                        <div className="info ps-0">
                                                            <h5 className="mb-1">{item.fullname}</h5>
                                                            <p className="mb-0">{item.phone}</p>
                                                        </div>
                                                    </div>
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                </LinkContainer>
                            ))}

                        </div>
                    </div>          
                </div>                
            </section>

        </>
    )
}

export default UserListScreen
