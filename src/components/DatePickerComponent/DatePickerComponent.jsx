import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function DateTime() {
  return (
    <div style={{ width: "350px" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateTimePicker"]}>
          <DemoItem
            label="Data"
            value={value}
            onChange={(newValue) => setValue(newValue)}
            {...register("consulta", { required: true })}
          >
            <DateTimePicker defaultValue={dayjs("2022-04-17T15:30")} />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
