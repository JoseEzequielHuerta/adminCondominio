import React, { useState } from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import { useNavigate } from "react-router-dom";


const index = ({val}) => {
    const navigate=useNavigate();
    const [value,setValue]= useState(val);
    const handleChange=(e,newValue)=>{
        setValue(newValue)
        if(newValue===0){
            navigate('/clientes')
        }
        else if(newValue===1){
            navigate("/desarrollo")
        }
        else{
            navigate("/propiedades")
        }
    }
    
return(
    <Box sx={{borderBottom:1, borderColor:'divider'}}>
        <Tabs value={value} onChange={handleChange}>
            <Tab label="Clientes"/>
            <Tab label="Desarrollo"/>
            <Tab label="Propiedades"/>
        </Tabs>
    </Box>
  )
}

export default index;