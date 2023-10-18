import React, { useEffect, useState } from 'react'
import { useGetAllHospitalsQuery } from '../../services/hospApi';
import _ from 'lodash';

function Discharge() {
    var { isLoading , data } = useGetAllHospitalsQuery();
    var [ selectedHsptl , setSelectedhsptl ] = useState(null);
    var [ obeds , setObeds ] = useState(null);
    var [ categs , setCategs ] = useState(null)
    useEffect(()=>{
        if(selectedHsptl){
            var temp = JSON.parse(selectedHsptl).beds.filter((bed)=>{
                return bed.bedStatus==="occupied"
            })
            console.log(temp)
            temp = _.groupBy(temp,"bedtype")
            setCategs(Object.keys(temp))
            setObeds(Object.values(temp).flat())
        }
    },[selectedHsptl])

    function changeBed(id){
        var temp2 = JSON.parse(selectedHsptl)
        var x = selectedHsptl.beds.map((bed)=>{
            if(bed.bedId===id){
                var y = {...bed.patients[bed.patients.length-1]}
                y.status="discharged"
                var z = [...bed.patients]
                z[z.length-1]=y
                return {...bed,patients:[...z]}
            }
            else{
                return bed
            }
        })
        setObeds([...x])
    }
  return (
    <div className='border border-2 border-warning m-2 p-2' >
        <h1>Discharge</h1>
        {
            isLoading &&
            <h4>Loading...</h4>
        }
        {
            !isLoading &&
            <select onChange={(e)=>{setSelectedhsptl(e.target.value)}} >
                <option disabled selected >select hospital</option>
                {
                    data.map((hsptl)=>{
                        return <option value={JSON.stringify(hsptl)} >{hsptl.hospitalName}</option>
                    })
                }
            </select>
        }
        {
            obeds &&
            categs.map((categ)=>{
                return (
                    <p>
                        {categ}<br/>
                        {
                            obeds.map((bed)=>{
                                if(bed.bedtype===categ){
                                    if(bed.patients[bed.patients.length-1].status==='discharged'){
                                        return (
                                            <li>
                                                <button className='btn btn-primary' onClick={()=>{changeBed(bed.bedId)}}>
                                                    {bed.bedId}
                                                    <b>{bed.patients[bed.patients.length-1].name}</b>
                                                </button>
                                            </li>
                                        )
                                    }
                                    else{
                                        return (
                                            <li>
                                                <button className='btn' onClick={()=>{changeBed(bed.bedId)}}>
                                                    {bed.bedId}
                                                    <b>{bed.patients[bed.patients.length-1].name}</b>
                                                </button>
                                            </li>
                                        )
                                    }
                                    /* return (
                                        <li>
                                            {
                                                bed.patients[bed.patients.length-1].status==='discharged' &&
                                                <button className='btn btn-primary' onClick={()=>{changeBed(bed.bedId)}}>
                                                    {bed.bedId}
                                                    <b>{bed.patients[bed.patients.length-1].name}</b>
                                                </button>
                                            }
                                            {
                                                !bed.patients[bed.patients.length-1].status==='discharged' &&
                                                <button className='btn' onClick={()=>{changeBed(bed.bedId)}}>
                                                    {bed.bedId}
                                                    <b>{bed.patients[bed.patients.length-1].name}</b>
                                                </button>
                                            }
                                        </li>
                                    ) */
                                }
                            })
                        }
                    </p>
                )
            })
        }
        
    </div>
  )
}

export default Discharge