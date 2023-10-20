import { Injectable } from '@angular/core';
import { LOCALE_ID, Inject } from '@angular/core';
import { NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

const I18N_VALUES = {
	nb: {
		weekdays: ['ma', 'ti', 'on', 'to', 'fr', 'lø', 'sø'],
    months: ['jan', 'feb', 'mar', 'apr', 'mai', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'des'],
    weekLabel: 'uke'
	},
};

@Injectable()
export class FhiCustomDatepickerI18n extends NgbDatepickerI18n {
	constructor(
    @Inject(LOCALE_ID)
    private locale: string
  ) {
		super();
	}

	getWeekdayLabel(weekday: number): string {
		return I18N_VALUES[this.locale].weekdays[weekday - 1];
	}
	getWeekLabel(): string {
		return I18N_VALUES[this.locale].weekLabel;
	}
	getMonthShortName(month: number): string {
		return I18N_VALUES[this.locale].months[month - 1];
	}
	getMonthFullName(month: number): string {
		return this.getMonthShortName(month);
	}
	getDayAriaLabel(date: NgbDateStruct): string {
		return `${date.day}.${date.month}.${date.year}`;
	}
}
