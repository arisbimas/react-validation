import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

export default function DatePicker({
    value,
    onChange,
}: {
    value: Date | undefined;
    onChange: (date: Date | undefined) => void;
}) {
    return (
        <Popover>
            <PopoverTrigger render={<Button variant="outline" className="justify-between font-normal w-full">
                <span>{value ? format(value, "PPP") : "Pick a date"}</span>
                <CalendarIcon className="ml-auto size-4 opacity-50" data-icon="inline-end" />
            </Button>} />
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={value}
                    onSelect={onChange}
                    defaultMonth={value}
                    captionLayout="dropdown"
                />
            </PopoverContent>
        </Popover>
    )
}
