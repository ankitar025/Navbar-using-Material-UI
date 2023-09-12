import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Drawercomp from "./Drawercomp";
const PAGES = [ "Home", "About", "Products", "Services", "Contact"];
function Header() {
  const [value, setvalue] = useState();
  const theme = useTheme({
    palette: {
      primary: '#000',
      secondary: '#fff'
    }
  });

  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  return (
    <React.Fragment theme={theme}>
      <AppBar sx={{ backgroundColor: "#000" }}>
        <Toolbar>
        <Typography style={{fontSize:"20px", textTransform:"uppercase"}}>MATERIAL UI</Typography>
          {isMatch ? (
            <>
             
              <Drawercomp />
            </>
          ) : (
            <>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, value) => setvalue(value)}
                indicatorColor="secondary"
                style={{marginLeft:"auto"}}
              >
                {PAGES.map((page, index) => (
                  <Tab label={page} key={index} />
                ))}
              </Tabs>
            </>
          )}
          <Button sx={{ marginLeft: "auto" }} variant="outlined">
            Login
          </Button>
          <Button sx={{ marginLeft: "10px" }} variant="contained">
            SignUp
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
