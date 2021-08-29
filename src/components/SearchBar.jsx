import React from "react";
import {
  Button,
  Colors,
  Container,
  Input,
  SearchBar as Search,
} from "../assets/styles/style";
const properties = {
  justifyContent: "flex-end",
  input: {
    radius: "0.25rem 0 0 0.25rem",
    width: "300px",
  },
  button: {
    radius: "0 0.25rem 0.25rem 0",
    background: Colors.accentColor,
    color: Colors.textPrimaryColor,
  },
};

const SearchBar = () => {
  return (
    <Container
      className="container-search"
      justifyContent={properties.justifyContent}
    >
      <Search className="search" action="" method="get">
        <Input
          type="search"
          radius={properties.input.radius}
          width={properties.input.width}
          name=""
          placeholder="Busca tu servicio"
          id=""
        />
        <Button
          type="submit"
          radius={properties.button.radius}
          background={properties.button.background}
          color={properties.button.color}
        >
          Search
        </Button>
      </Search>
    </Container>
  );
};

export default SearchBar;
