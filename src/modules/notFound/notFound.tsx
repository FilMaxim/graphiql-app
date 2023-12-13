import { useNavigate } from "react-router-dom";
import NotFound from "../../assets/notfound.svg";
import { NavRoutes } from "../../utils/router/routes";
import classes from "./notFound.module.scss";
import Button from "../../UI/button/Button";

export const NotFound404 = () => {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate(NavRoutes.mainPagePath);
  };
  return (
    <div className={classes.notFound}>
      <div className={classes.photo}>
        <img src={NotFound} alt="Not Found" />
        <h3>Page Not Found</h3>
      </div>

      <Button
        btnStyle={"primary"}
        btnType="rectangle"
        className={classes["home-btn"]}
        onClick={handleBtnClick}
      >
        Home Page
      </Button>
    </div>
  );
};
