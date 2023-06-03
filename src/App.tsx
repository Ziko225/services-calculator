import Calculator from './Calculator';
import CalculatorContext from './calculatorContext';
import useCount from './hooks/useCount';
import useGetData from './hooks/useGetData';
import useSelectServices from './hooks/useSelectedServices';

function App() {
  const getSelectServices = useSelectServices();
  const getData = useGetData("2023");
  const getCount = useCount(getData.data, getSelectServices.selectedServicesId);

  return (
    <CalculatorContext.Provider value={{ getSelectServices, getData, getCount }}>
      <Calculator />
    </CalculatorContext.Provider >
  );
}

export default App;
