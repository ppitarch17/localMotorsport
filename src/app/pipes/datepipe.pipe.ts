import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'datepipe',
    standalone: true
})
export class DatePipe implements PipeTransform {
    transform(value: string): string {
        const dateParts = value.split('-');
        const year = dateParts[0];
        const month = this.getMonthName(parseInt(dateParts[1], 10));
        const day = parseInt(dateParts[2], 10);
        const daySuffix = this.getDaySuffix(day);

        return `${month} ${day}${daySuffix}`;
    }

    private getMonthName(month: number): string {
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        return monthNames[month - 1];
    }

    private getDaySuffix(day: number): string {
        if (day >= 11 && day <= 13) {
            return 'th';
        }

        switch (day % 10) {
            case 1:
                return 'st';
            case 2:
                return 'nd';
            case 3:
                return 'rd';
            default:
                return 'th';
        }
    }
}