import { Search } from "@mui/icons-material"
import { IconButton, Paper } from "@mui/material"
import { useState } from "react"
import { colors } from "../../constants/colors"
import {useNavigate} from "react-router-dom"

const SearchBar = () => {
  const [value,setValue] = useState('')
  const navigate = useNavigate()

  const changeHandler=(e)=>{
    e.preventDefault()
    if(value){
      navigate(`/search/${value}`)
      setValue('')
    }
  }
  return (
    <Paper component={'form'} onSubmit={changeHandler} sx={{border:`1px solid ${colors.secondary}`,pl: 2, boxShadow:"none",mr:5}}>
        <input type="text" placeholder="Search..." className="search-bar"  onChange={(e)=>setValue(e.target.value)} value={value}/>
        <IconButton type="submit">
        <Search/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar