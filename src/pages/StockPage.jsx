import React, { useEffect, useState } from "react";
import { fetchstockprices } from "../api/stocks";
import { StockChart } from "../components/StockChart";
import TimeSelector from "../components/TimeSelector";
import { Box, Typography } from "@mui/material";

const dummyData = [
  { time: "10:00",value: 100 },
  { time:"10:01" , value: 101 },
  {time: "10:02", value: 99 },
  { time: "10:03" ,value: 102} ,
{time: "10:04", value: 104}
];

export default function StockPage({ token} ) {
  const [ symbol,setSymbol ] = useState("AAPL");
  const [ minutes,setMinutes] = useState(15);
  const [data, setData ] = useState([]);
  const [avg,setAvg] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pts = await fetchstockprices(symbol , minutes,token);

        if (!pts|| pts.length== 0) {
          setData(dummyData);
          setAvg(dummyData.reduce((sum, p) => sum + p.value ,0) / dummyData.length );
          return;
        }

        const average = pts.reduce((sum, p) => sum+ p.value, 0) /pts.length;
        const formatted = pts.map(p => ({
          time: new Date(p.time).toLocaleTimeString(),
          value: p.value
        }));

        setAvg(average);
        setData(formatted);
      } catch (err) {
        setData(dummyData);
        setAvg(dummyData.reduce((sum , p) => sum+p.value, 0 ) / dummyData.length);
      }
    };

    fetchData();
  }, [symbol,minutes , token]);

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>{symbol}</Typography>
      <TimeSelector minutes={minutes} onChange={setMinutes} />
      <StockChart data={data} average={avg} />
    </Box>
  );
}
