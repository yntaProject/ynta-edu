import { Button } from "../../../shared/UI/button/button";
import { useLocation, useNavigate } from "react-router-dom";

const ButtonBack = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const goBack = () => {
    if (location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate(-1); // переход на одну страницу назад в истории браузера
    }
  };
  return (
    <Button variant={"primary"} onClick={goBack}>BACK</Button>
  );
};

export { ButtonBack };