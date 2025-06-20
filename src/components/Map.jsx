import React from "react";
import {Box , Tooltip,Typography } from "@mui/material";

export function Map({ symbols, matrix, averages, stdDevs }) {
  const colorMap = (value) => {
    if (value >0.7) return "green";     
    if ( value > 0.3 ) return "yellow";    
    return "red";                        
  };
  return (
    <Box sx={{ overflowX: "scroll" }}>
      <table>
        <thead>
          <tr><td />{symbols.map(s => <th key={s}><Tooltip title={`Avg: ${averages[s]}, SD: ${stdDevs[s]}`}><Typography>{s}</Typography></Tooltip></th>)}</tr>
        </thead>
        <tbody>
          {symbols.map((row,i ) => (
            <tr key={row}>
              <th><Tooltip title={`Avg: ${averages[row]}, SD: ${stdDevs[row]}`}><Typography>{row}</Typography></Tooltip></th>
              {symbols.map(( col , j) => (
                <td key={col} style={{ backgroundColor :colorMap(matrix[i][j]) , width : 30,height:30 }} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
}
