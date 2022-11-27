import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import ReturnHome from "../elements/returnHome";
import LoginPage from "../elements/loginPage";

function login() {
  const loginLogoStyle = {
    width: "550px",
    height: "500px",
    backgroundColor: "#FEF1E6",
    position: "absolute",
    top: "50%",
    margin: "-250px 0px 0px 50px",
  };
  const loginPageStyle = {
    width: "50%",
  };
  const loginBodyStyle = {
    display: "flex",
    flexDirection: "row",
  };
  const logoItemStyle = {
    textAlign: "center",
    lineHeight: "450px",
  };
  return (
    <div>
      <Form style={loginBodyStyle}>
        <div style={loginLogoStyle}>
          <h5 style={logoItemStyle}>logo</h5>
        </div>
        <div style={loginPageStyle}>
          {/* <UserLogin />
        <AgencyLoginShort />
        <AdminLoginShort /> */}
          <LoginPage />
        </div>
        <ReturnHome />
      </Form>
    </div>
  );
}

export default login;
