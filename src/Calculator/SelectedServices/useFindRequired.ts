import { Data } from "../../hooks/useGetData";

const useFindRequired = (data: Data, selectedServicesId: Array<number>) => {
    const findServiceNameByid = (id: number) => {
        return data?.services.filter((service) => service.id === id).map((service) => service.name) || [];
    };

    const findRequiredServices = () => {
        return data?.services.filter((requiredService) => selectedServicesId.includes(requiredService.id) && requiredService.requiredId) || [];
    };

    const UnselectedRequiredServices = findRequiredServices().filter((service) => !service.requiredId?.every((id) => selectedServicesId.includes(id)));

    return { findServiceNameByid, requiredServices: UnselectedRequiredServices };
};

export default useFindRequired;