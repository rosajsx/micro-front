import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
} from "react-icons/ai";
import { BsFillBookmarksFill, BsBookmarks } from "react-icons/bs";

import { Wrapper, List, ListItem, EmptyListItem, IconButton } from "./styles";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prevState) => !prevState);

  //const routes = [{ name: "Mfe1", path: "mfe1", children: microFront1Routes }];

  return (
    <Wrapper isOpen={isOpen}>
      <List>
        <EmptyListItem>MFP</EmptyListItem>
        <ListItem isOpen={isOpen}>
          <NavLink to="/">
            <AiFillHome />
            <span>Home</span>
          </NavLink>
        </ListItem>
        <ListItem isOpen={isOpen}>
          <NavLink to="/mfe1">
            <BsFillBookmarksFill />
            <span>Mfe1</span>
          </NavLink>
        </ListItem>
        <ListItem isOpen={isOpen}>
          <NavLink to="/mfe2">
            <BsBookmarks />
            <span>Mfe2</span>
          </NavLink>
        </ListItem>
      </List>
      <IconButton onClick={handleToggle}>
        {isOpen ? <AiOutlineDoubleLeft /> : <AiOutlineDoubleRight />}
      </IconButton>
    </Wrapper>
  );
};
