import React, { Component, useEffect, useState } from "react";
import Rte from "./Rte";

const Summernote = () => {
    const [isidata, setIsiData] = useState('')

    useEffect(() => {
        console.log('isi data = ', isidata)
    },[isidata])

    const addHandler = (input) => {
        console.log('input data = ', input)

    }
    return (
       <div className="h-80">
          <div className="row">
             <div className="col-xl-12 col-xxl-12">
                <div className="card">
                   <div className="card-header">
                      <h4 className="card-title">Summernote Editor</h4>
                   </div>
                   <div className="card-body">
                      <div className="summernote">
                         <Rte dataSummernote= {addHandler} />
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    );
 }

export default Summernote;
