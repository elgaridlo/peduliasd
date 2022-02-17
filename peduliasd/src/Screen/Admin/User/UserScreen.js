import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { userListAction } from '../../../actions/userAction'
import Loader from '../../../utils/Components/Loader'
import SearchUser from '../../Search/SearchUser'

const UserListScreen = ({history}) => {

    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(()=> {

    })
    const {
        users,
        hasMore,
        loading,
        error
    } = SearchUser(query, pageNumber)

    const observer = useRef()
    const lastUserElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    function handleSearch(e) {
        setQuery(e.target.value)
        setPageNumber(1)
    }

    const previewHandler = (id) => {
        history.push(`/user-detail/${id}`)
    }

    const editHandler = (id) => {
        history.push(`/user/edit/${id}`)
    }

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
                                            <input id="search-form" type="text" className="form-control" placeholder="Search" value={query} onChange={handleSearch} />
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

                            {users && users.map((item, index) => {
                                if (users.length === index + 1 && item.auth.role === 'member') {
                                       return <div key={item._id} className="item col-md-6 col-xl-6" ref={lastUserElementRef}>
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
                                                        <div className="row">
                                                            <button className="btn btn-info mt-1" onClick={() => previewHandler(item._id)}>Preview</button>
                                                            <button className="btn btn-outline-primary mt-1" onClick={() => editHandler(item._id)}>Edit</button>
                                                        </div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </div>
                                } else {
                                    if (item.auth.role === 'member') {
                                       return <div key={item._id} className="item col-md-6 col-xl-6">
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
                                                        <div className="row">
                                                            <button className="btn btn-info mt-1" onClick={() => previewHandler(item._id)}>Preview</button>
                                                            <button className="btn btn-outline-primary mt-1" onClick={() => editHandler(item._id)}>Edit</button>
                                                        </div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                }
                            })}
                            {loading && (<Loader/>)}

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default UserListScreen
