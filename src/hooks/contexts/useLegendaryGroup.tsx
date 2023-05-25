// Dependencies
import { useContext } from "react";

// Context
import { LegendaryGroupContext } from "../../contexts/LegendaryGroup";

const useLegendaryGroup = () => {
    const contextValues = useContext(LegendaryGroupContext);

    return contextValues;
};

export { useLegendaryGroup };