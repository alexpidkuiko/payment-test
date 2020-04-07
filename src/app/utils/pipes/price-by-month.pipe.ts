import { Pipe, PipeTransform } from '@angular/core';
import { MonthDaysEnum } from '../enums/month.enum';

@Pipe({
  name: 'priceByMonth'
})
export class PriceByMonthPipe implements PipeTransform {

  transform(priceByDay: number, monthControlsData: any): number {
    const selectedMonth = Object.keys(monthControlsData).filter((key) => monthControlsData[key]);
    let sumOfDays = 0;

    selectedMonth.forEach((month: string) => {
      sumOfDays += MonthDaysEnum[month];
    });

    return sumOfDays * priceByDay;
  }

}
