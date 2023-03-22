import { useLocation } from "react-router-dom";

const TestProp = () => {

const location = useLocation();
const capacitySelection = location.state?.capacitySelection;

return(
   console.log({ capacitySelection })
);
};

export default TestProp;