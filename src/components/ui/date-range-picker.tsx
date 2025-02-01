'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface DatePickerWithRangeProps extends React.HTMLAttributes<HTMLDivElement> {
  date?: DateRange;
  onDateChange?: (date: DateRange | undefined) => void;
  formatFn?: (date: Date) => string;
  allowPresent?: boolean;
  pilot?: boolean;
}

export function DatePickerWithRange({
  className,
  date,
  onDateChange,
  formatFn = (date: Date) => format(date, 'MMM yyyy'),
  allowPresent = true,
  pilot,
}: DatePickerWithRangeProps) {
  const [dateState, setDateState] = React.useState<DateRange | undefined>(date);
  const [isPresent, setIsPresent] = React.useState(false);

  React.useEffect(() => {
    if (date?.to?.getTime() === new Date().setHours(0, 0, 0, 0)) {
      setIsPresent(true);
    }
  }, [date]);

  const handleSelect = (newDate: DateRange | undefined) => {
    setDateState(newDate);
    setIsPresent(false);
    onDateChange?.(newDate);
  };

  const togglePresent = () => {
    if (!dateState?.from) return;

    const newState = {
      from: dateState.from,
      to: isPresent ? undefined : new Date(),
    };
    setDateState(newState);
    setIsPresent(!isPresent);
    onDateChange?.(newState);
  };

  return (
    <div className={cn('grid gap-2', className)} id={pilot ? 'driverHeader7' : undefined}>
      <Popover>
        <PopoverTrigger asChild>
          <div className="text-sm italic cursor-pointer hover:opacity-80">
            {dateState?.from ? (
              <>
                {formatFn(dateState.from)}
                {(dateState.to || isPresent) && ' - '}
                {isPresent ? 'Present' : dateState.to ? formatFn(dateState.to) : ''}
              </>
            ) : (
              <span className="text-muted-foreground">Click to add date</span>
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="p-3">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={dateState?.from}
              selected={dateState}
              onSelect={handleSelect}
              numberOfMonths={2}
            />
            {allowPresent && dateState?.from && (
              <Button
                variant="default"
                className="mt-2 w-full text-sm border-black bg-accent text-white bg-black hover:bg-black/90"
                onClick={togglePresent}
              >
                {isPresent ? 'Set End Date' : 'Set to Present'}
              </Button>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
