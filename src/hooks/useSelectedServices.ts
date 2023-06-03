import { useState } from "react";

const useSelectServices = () => {
    const [selectedServicesId, setSelectedServicesId] = useState<Array<number>>([]);

    const [isAnyRequiredService, setIsAnyRequiredService] = useState(false);

    const clearSelectedServices = () => setSelectedServicesId([]);

    const addServices = (arrayWithId: Array<number>) => {
        const id: Array<number> = [];

        for (let i = 0; i < arrayWithId.length; i++) {
            !selectedServicesId.includes(arrayWithId[i]) && id.push(arrayWithId[i]);
        }

        setSelectedServicesId([...selectedServicesId, ...id]);
    };

    const removeService = (index: number) => {
        setSelectedServicesId([
            ...selectedServicesId.slice(0, index),
            ...selectedServicesId.slice(index + 1),
        ]);
    };

    return { selectedServicesId, addServices, removeService, clearSelectedServices, isAnyRequiredService, setIsAnyRequiredService };
};

export default useSelectServices;