import React from "react";
import { ToggleButton ,ToggleButtonGroup} from "@mui/material";

export default function TimeSelector( {minutes ,onChange }) {
  return (
    <ToggleButtonGroup
      value={minutes}
      aria-label="time range"
    >
      {[5 , 15,30 , 60].map(m => (
        <ToggleButton key={m} value={m}>{`${m}m`}</ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}