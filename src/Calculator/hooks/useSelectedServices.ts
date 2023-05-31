import { useState } from "react";

const useSelectedServices = () => {
    const [selectedServicesId, setSelectedServicesId] = useState<Array<number>>([]);

    const clearSelectedServices = () => setSelectedServicesId([]);

    const addService = (id: number) => {
        if (selectedServicesId.includes(id)) {
            return;
        }

        setSelectedServicesId([...selectedServicesId, id]);
    };

    const removeService = (index: number) => {
        setSelectedServicesId([
            ...selectedServicesId.slice(0, index),
            ...selectedServicesId.slice(index + 1),
        ]);
    };

    return { selectedServicesId, addService, removeService, clearSelectedServices };
};

export default useSelectedServices;