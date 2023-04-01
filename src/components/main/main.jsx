import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import {colors} from "../../constants/colors"
import {Category, Videos} from "../"
import { ApiService } from "../service/apiservice"


const Main = () => {
  const [selectedCategory,setSelectedCategory] = useState("New")
  const [videos,setVideo] = useState([])
  const selectedCategoryHandler=category=>setSelectedCategory(category)
  useEffect(()=>{
    const getData = async()=>{
      try{
        const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`)
        setVideo(data.items)
      }
      catch(error){
        console.log(error);
      }
    
    }
    getData()
  },[selectedCategory])
  return (
   <Stack>
    <Category selectedCategoryHandler={selectedCategoryHandler} selectedCategory={selectedCategory} />
    <Box p={2} sx={{height:"90vh"}}>
    <Container maxWidth={"90%"}>
      <Typography variant={"h4"} fontWeight={"bold"} mb={2}>{selectedCategory} <span style={{color:colors.secondary}}>videos</span></Typography>
      <Videos videos={videos}/>
    </Container>
    </Box>
   
   </Stack>
  )
}

export default Main