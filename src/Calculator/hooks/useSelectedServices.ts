import { useState } from "react";

const useSelectedServices = () => {
    const [selectedServices, setSelectedServices] = useState<Array<number>>([]);

    const clearSelectedServices = () => setSelectedServices([]);

    const addService = (id: number) => {
        if (selectedServices.includes(id)) {
            return;
        }

        setSelectedServices([...selectedServices, id]);
    };

    const removeService = (index: number) => {
        setSelectedServices([
            ...selectedServices.slice(0, index),
            ...selectedServices.slice(index + 1),
        ]);
    };

    return { selectedServices, addService, removeService, clearSelectedServices };
};

export default useSelectedServices;