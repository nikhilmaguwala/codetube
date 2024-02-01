import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

import mobile_logo from "../assets/codetube_favicon.png";
import logo from "../assets/codetube_logo.png";
import { SearchBar } from "./";

const Navbar = () => {

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })

  return (
    <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={isMobile ? mobile_logo : logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  )
};

export default Navbar;