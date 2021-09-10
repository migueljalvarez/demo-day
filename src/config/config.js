import dotenv from "dotenv";
dotenv.config();
const { REACT_APP_API_URL } = process.env;
console.log(process.env.REACT_APP_API_URL)
const config = () => {
  return {
    app: {
      projectName: "Demo Day",
      api: REACT_APP_API_URL,
    },
  };
};
export default config;
