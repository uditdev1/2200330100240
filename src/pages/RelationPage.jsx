import React, {useEffect , useState  } from "react";
import { fetchallsymbols , fetchstockprices } from "../api/stocks";
import TimeSelector from "../components/TimeSelector";
import { Map} from "../components/Map";
import {Box } from "@mui/material";
import { mean  , stdDev, pearsonCorrelation} from "../utils/statistics";

export default function RelationPage({token}) {
  const [symbols, setSymbols] = useState([]);
  const [ minutes, setMinutes] = useState(15 );
  const [matrix,setMatrix] =  useState([]);
  const [averages, setAverages] = useState({});
  const [stdDevs,setStdDevs] = useState({});

  useEffect(() => {
    ( async () => {
      const syms = await fetchallsymbols(token);
      setSymbols(syms);
      const allData = await Promise.all(syms.map(s =>fetchstockprices(s , minutes,token)));

      const avgMap = {};
      const sdMap = {};
      allData.forEach(( arr , idx) => {
        avgMap[syms[idx]] = mean(arr.map(p => p.value));
        sdMap[syms[idx]] = stdDev(arr.map(p => p.value));
      });
      setAverages(avgMap);
      setStdDevs(sdMap);

      const mat = syms.map((a , i) => syms.map((b ,j) =>
        pearsonCorrelation(
          allData[i].map(p => p.value),
          allData[j].map((p ,x ) => allData[j][x ]?.value || 0)
        )
      ));
      setMatrix(mat );
    })();
  }, [ minutes]);

  return (
    <Box p={2}>
      <TimeSelector minutes={minutes} onChange={setMinutes} />
      <Map symbols={symbols} matrix={matrix} averages={averages} stdDevs={stdDevs} />
    </Box>
  );
}