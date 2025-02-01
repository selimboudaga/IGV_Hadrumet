/* eslint-disable react/prop-types */
"use client"
import {  format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "../../lib/utils"
import { Button } from "./button"
import { Calendar } from "./calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover"

export function DatePickerWithRange({
  className,
  date,
  setDate,
}) {
  
  

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              " w-full md:w-[250px]  bg-gray-100 border-gray-500 border-2 rounded-lg text-gray-900 transition-colors duration-300 hover:bg-gray-200  font-semibold text-center text-[16px]  items-center ",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className=" -mt-1"  />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "dd MMM yyyy")} -{" "}
                  {format(date.to, "dd MMM yyyy")}
                </>
              ) : (
                format(date.from, "dd MMM yyyy")
              )
            ) : (
              <span>Pick a date range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from || new Date()} 
            selected={date}
            onSelect={selected => setDate(selected ||{from : undefined , to : undefined})}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
