import React from "react";
import { FaSearch, FaLocationArrow } from "react-icons/fa";

import { departamento } from "../helpers/departamentos";

import {
  Button,
  Colors,
  Container,
  Form,
  Input,
  Option,
  Select,
} from "../assets/styles/style";

const PROP = {
  containerForm: {
    flexWrap: "wrap",
    padding: '10px'
  },
  form: {
    width: "100%",
    padding: "30px 10px",
    justifyContent: "space-between",
  },
  containerInputService: {
    width: "40%",
  },
  iconService: {
    width: "10%",
    height: "38px",
    justifyContent: "center",
    alignItems: "center",
    background: Colors.textPrimaryColor,
    borderRadius: "8px 0 0 8px",
    color: Colors.dividerColor,
  },
  inputService: {
    width: "80%",
    borderRadius: " 0 8px 8px 0",
  },
  containerInputLocation: {
    width: "30%",
  },
  iconLocation: {
    width: "10%",
    height: "38px",
    justifyContent: "center",
    alignItems: "center",
    background: Colors.textPrimaryColor,
    borderRadius: "8px 0 0 8px",
    color: Colors.dividerColor,
  },
  inputLocation: {
    width: "90%",
    borderRadius: " 0 8px 8px 0",
  },
  buttonSearch: {
    width: "20%",
    background: Colors.accentColor,
    color: Colors.textPrimaryColor,
    fontWeight: "700",
  },
};

const SearchService = () => {

  const handleSelect = () => {
    document.getElementById('departamento')
  }

  return (
    <Container flexWrap={PROP.containerForm.flexWrap} padding={PROP.containerForm.padding}>
      <Form
        width={PROP.form.width}
        padding={PROP.form.padding}
        justifyContent={PROP.form.justifyContent}
      >
        <Container width={PROP.containerInputService.width}>
          <Container
            width={PROP.iconService.width}
            height={PROP.iconService.height}
            justifyContent={PROP.iconService.justifyContent}
            alignItems={PROP.iconService.alignItems}
            background={PROP.iconService.background}
            radius={PROP.iconService.borderRadius}
            color={PROP.iconService.color}
          >
            <FaSearch />
          </Container>
          <Input
            width={PROP.inputService.width}
            radius={PROP.inputService.borderRadius}
            type="text"
            placeholder="Tipo de servicio"
          />
        </Container>

        <Container width={PROP.containerInputLocation.width}>
          <Container
            width={PROP.iconLocation.width}
            height={PROP.iconService.height}
            justifyContent={PROP.iconLocation.justifyContent}
            alignItems={PROP.iconLocation.alignItems}
            background={PROP.iconLocation.background}
            radius={PROP.iconService.borderRadius}
            color={PROP.iconLocation.color}
          >
            <FaLocationArrow />
          </Container>
          
          <Select
            width={PROP.inputLocation.width}
            radius={PROP.inputLocation.borderRadius}
            placeholder="Lugar"
            id="departamento"
          >
            <Option value="0" selected disabled>
              Lugar
            </Option>

            {
              departamento.map((d, i) => (
              <Option value={d.id}>
                {d.depart}
              </Option>
            ))
            }
          </Select>
          
        </Container>

        <Button
          width={PROP.buttonSearch.width}
          background={PROP.buttonSearch.background}
          color={PROP.buttonSearch.color}
          fontWeight={PROP.buttonSearch.fontWeight}
        >
          Buscar Servico
        </Button>
      </Form>
    </Container>
  );
};

export default SearchService;
