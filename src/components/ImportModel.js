
import React, { useState } from "react";
import * as XLSX from 'xlsx';




const ImportModel = () => {
    const [iniData , setData ] = useState(['Hell']);

    const fileHandler = (e:any ) => {
        e.preventDefault();
        const {files} = e.target;
        const f = files[0];
        console.log("Onchnage Trigered")
        const reader = new FileReader();
        reader.onload = function (e:any ) {
            const data = e.target.result ;
            console.log("reader On Load ")
            console.log(data)
            const readedData = XLSX.read(data , { type: 'binary'});
            const wsname = readedData.SheetNames[0];
            const ws = readedData.Sheets[wsname];
            setData([ws])
        } 
    }
    return (
        <div>
            <input type="file" onChange={ fileHandler } />
            {iniData}
        </div>
    )
}



export default ImportModel ; 