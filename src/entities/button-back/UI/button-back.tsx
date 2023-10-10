import { Button } from "../../../shared/UI/button/button";
import { useLocation, useNavigate } from "react-router-dom";

const ButtonBack = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const goBack = () => {
    if (location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate(-1);
    }
  };
  return (
    <Button variant={"primary"} onClick={goBack}>Назад</Button>
  );
};

export { ButtonBack };