import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userListAction } from '../../../actions/userAction'
import PaginationForm from '../../../component/form/PaginationForm'
import Loader from '../../../utils/Components/Loader'

const UserListScreen = ({ history, match }) => {

    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] = useState(1)

    const dispatch = useDispatch()

    const userList = useSelector(state => state.userList)
    const { loading, userlist } = userList

    useEffect(() => {
        dispatch(userListAction())
    }, [])

    useEffect(() => {
        // setPageNumber(1)
        const payload = {
            query,
            pageNumber
        }
        dispatch(userListAction(payload))
    }, [query, pageNumber])

    useEffect(() => {
    }, [userlist])

    const directPageFunction = (futurePage) => {
        setPageNumber(futurePage)
        // history.push(`/user-list?pageNumber=${futurePage}`)
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
                                            <input id="search-form" type="text" className="form-control" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
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
                        {loading && (<Loader />)}
                        {
                            userlist && (
                                <div className="row isotope gy-6 mt-n19 mt-md-n22" ref={element => {
                                    if (element) element.style.setProperty('height', 'auto', 'important');
                                }}>
                                    <div className="card shadow-lg">
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-hover table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th>Nama</th>
                                                            <th>No Ponsel</th>
                                                            <th>Tanggal Lahir</th>
                                                            <th>Nama Anak</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {userlist && userlist.users.map((item) => (
                                                            <tr key={item.id}>
                                                                <td style={{textAlign:'left'}}>{item.fullname}</td>
                                                                <td>{item.phone}</td>
                                                                <td>{''}</td>
                                                                <td>{item.kid.name}</td>
                                                                <td>
                                                                    <a href={`/user-detail/${item.id}`}><i className="uil uil-external-link-alt"></i><span> Preview</span></a>
                                                                    {' '}
                                                                    <a href={`/user/edit/${item.id}`}><i className="uil uil-file-edit-alt"></i><span> Edit</span></a>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                        {userlist && userlist.users.length === 0 && (
                                                            <tr>
                                                                <td style={{width:'100%'}} colSpan='5'>
                                                                    <p className='center'><i>user tidak ditemukan</i></p>
                                                                </td>
                                                            </tr>
                                                        )}

                                                    </tbody>
                                                </table>
                                                <PaginationForm 
                                                    currentPage={userlist ? userlist.currentPage : 1} 
                                                    totalPages={userlist ? userlist.totalPages : 1} 
                                                    directPageFunction={directPageFunction} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default UserListScreen
