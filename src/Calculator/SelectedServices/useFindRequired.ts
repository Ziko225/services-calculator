import { Data } from "../../hooks/useGetData";

const useFindRequired = (data: Data, selectedServicesId: Array<number>) => {
    const findServiceNameByid = (id: number) => {
        return data?.services.filter((e) => e.id === id).map((e) => e.name) || [];
    };

    const findRequiredServices = () => {
        return data?.services.filter((e) => selectedServicesId.includes(e.id) && e.includeId) || [];
    };

    const UnselectedRequiredServices = findRequiredServices().filter((e) => !e.includeId?.every((e) => selectedServicesId.includes(e)));

    return { findServiceNameByid, requiredServices: UnselectedRequiredServices };
};

export default useFindRequired;