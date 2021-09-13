import { useFormik } from "formik";
import { FileUpload } from "../helpers/FileUpload";
import { useDispatch } from "react-redux";
import actionProfile from "../redux/actions/userActions";
import { buildUserDto } from "../dto/userDto";
import UI from "../redux/actions/uiActions"
const useCustomFormik = (initialValues = {}, type, id) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      ...initialValues
    },
  });

  formik.handleSubmit = () => {
    switch (type) {
      case "updateProfile":
        const formValues = buildUserDto(formik.values);
        dispatch(actionProfile.updateProfileUser(id, formValues));
        dispatch(UI.hideModal())
        break;
      default:
        break;
    }
  };

  const handleInputChange = ({ target }) => {
    console.log(target.name)
    formik.setValues({
      ...formik.values,
      [target.name]: target.value,
    });
  };

  const handleInputChangeFile = (e, id) => {
    const file = e.target.files[0];
    FileUpload(file)
      .then((response) => {
        document.getElementById(id).value = response;
        formik.setValues({ ...formik.values, [id]: response });
      })
      .catch((error) => {
        throw error;
      });
  };

  return [formik, formik.values, handleInputChange, handleInputChangeFile];
};
export { useCustomFormik };
