import { useLocation } from "react-router-dom";

const TestProp = () => {

const location = useLocation();
const selectedOptionTypeStep6a = location.state?.selectedOptionType;

return(
   console.log({ selectedOptionTypeStep6a })
);
};

export default TestProp;