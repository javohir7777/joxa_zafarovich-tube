import { Stack } from "@mui/system"
import {category} from "../../constants"
import { colors } from "../../constants/colors"
const Category = ({selectedCategoryHandler,selectedCategory}) => {
  return (
    <Stack direction={'row'} sx={{overflowX:"scroll"}}>
      {category.map(item=>(
        <button key={item.name} className="category-btn" style={{borderRadius:'0',background:selectedCategory===item.name && colors.secondary,color:selectedCategory===item.name && '#fff'}} onClick={()=>selectedCategoryHandler(item.name)}>
          <span style={{color:selectedCategory ===item.name ? '#fff' : colors.secondary,marginRight:'15px'}}>{item.icon}</span>
          <span style={{opacity:"1",}}>{item.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Category