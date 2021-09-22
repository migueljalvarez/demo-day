import React, { useEffect } from "react";
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
import { useDispatch } from "react-redux";
import { searchReset, searchServices } from "../redux/actions/serviceActions";
import { useFormik } from "formik";

const PROP = {
  containerForm: {
    flexWrap: "wrap",
    padding: "10px",
  },
  form: {
    width: "100%",
    padding: "30px 10px",
    justifyContent: "space-around",
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
  // const handleSelect = () => {
  //   document.getElementById('departamento')
  // }

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      location: "bogota",
    },
    onSubmit: (data) => {
      dispatch(searchServices(data.title, data.location))
    }
  })
  
  const { title, location } = formik.values

  useEffect(() => {
    if (title.length > 0) {
      dispatch(searchServices(title, location));
    }else{
      dispatch(searchReset())
    }
  }, [dispatch, title, location]);


  return (
    <Container
      flexWrap={PROP.containerForm.flexWrap}
      padding={PROP.containerForm.padding}
    >
      <Form
        width={PROP.form.width}
        padding={PROP.form.padding}
        justifyContent={PROP.form.justifyContent}
        onSubmit={formik.handleSubmit}
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
            name="title"
            type="text"
            id="title"
            placeholder="Tipo de servicio"
            value={title.toLowerCase()}
            onChange={formik.handleChange}

            onBlur={formik.handleBlur}
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
            name="location"
            id="location"
            value={location}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            {departamento.map((d, i) => (
              <Option key={i} value={d.id}>
                {d.depart}
              </Option>
            ))}
          </Select>
        </Container>

        <Button
          width={PROP.buttonSearch.width}
          background={PROP.buttonSearch.background}
          color={PROP.buttonSearch.color}
          fontWeight={PROP.buttonSearch.fontWeight}
        >
          Buscar Servicio
        </Button>
      </Form>
    </Container>
  );
};

export default SearchService;
