import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { eduCreateProgramAction, removeEduProgramNewData } from '../../../actions/eduProgramAction'
import { listWorkshopction } from '../../../actions/workshopAction'
import AlertStyle from '../../../utils/Components/Alert'
import { AlertEnum } from '../../../utils/Enums/AlertEnum'

const ListEduProgramScreen = ({ history }) => {
    const [title, setTitle] = useState('')
    const [workshopType, setWorkshopType] = useState('')
    const [imageData, setImageData] = useState(null)

    const workshopList = useSelector((state) => state.workshopList)
    const { loading: loadingEdu, error: errorEdu, listWorkshopProgram } = workshopList

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listWorkshopction())
    },[])

    return (
        <>
            <section className="wrapper">
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <th>
                            Header
                        </th>
                        <th>
                            No
                        </th>
                    </thead>
                    <tbody>
                        <td>
                            Yaappp
                        </td>
                        <td>
                            begini juga bisa
                        </td>
                    </tbody>
                </table>
            </div>

            </section>

        </>
    )
}

export default ListEduProgramScreen
