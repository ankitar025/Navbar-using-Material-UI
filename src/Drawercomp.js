import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, {useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const PAGES = ["Product", "Home", "About", "Services", "Contact"]
const Drawercomp = () => {

    const [openDrawer, setopenDrawer] = useState(false)
    const handleClose = () => {
      setopenDrawer(null);
    };
  return (
    <React.Fragment >
      <Drawer   open={openDrawer} onClose={() => setopenDrawer(false)}>
        <List style={{width:"100%", paddingTop:"50px"}}>
        <IconButton onClick={handleClose} style={{position:"absolute", right:"10px", top:"15px" }}>  <CloseIcon /> </IconButton>
          {PAGES.map((page, index) => (
            <ListItemButton key ={index}  >
              <ListItemIcon>
                <ListItemText> {page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))} 
        </List>
      </Drawer>
 
      <IconButton
        sx={{ color: "white" }}
        style={{ color: "#fff" }}
        onClick={() => setopenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
     
    </React.Fragment>
  );
}

export default Drawercomp;
