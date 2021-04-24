import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek.js';
dayjs.extend(isoWeek);


const formats = {
    day: 'YYYY-MM-DD',
    month: 'YYYY-MM',
    year: 'YYYY',
}


export default class DateSequence {
    static createPeriod(period, to, maxUnits = 10) {
        const dfrom = dayjs(to).subtract(maxUnits, period);
        const from = dfrom.format('YYYY-MM-DD');
        if(period !== 'week') {
            return DateSequence.units(
                from, to,
                dfrom, maxUnits,
                period, formats[period],
            );
        }
        return DateSequence.weekUnits(from, to, dfrom, maxUnits);
    }

    static create(from, to, maxUnits = 10) {
        const dfrom = dayjs(from);
        const days = dayjs(to).diff(dfrom, 'day') + 1;
        if(days <= maxUnits) {
            return DateSequence.units(
                from, to,
                dfrom, days,
                'day', 'YYYY-MM-DD'
            );
        }
        const weeks = dayjs(to).diff(dfrom, 'week');
        if(weeks <= maxUnits) {
            return DateSequence.weekUnits(from, to, dfrom, weeks);
        }

        const months = dayjs(to).diff(dfrom, 'month');
        if(months <= maxUnits) {
            return DateSequence.units(
                from, to,
                dfrom, months,
                'month', 'YYYY-MM'
            );
        }
        const years = dayjs(to).diff(dfrom, 'year');
        return DateSequence.units(
            from, to,
            dfrom, Math.min(years,maxUnits),
            'year', 'YYYY'
        );

    }

    static weekUnits(from, to, dfrom, weeks) {
        const buckets = [];
        for(let i=0; i<weeks; i++) {
            let dto = dfrom.add(1, 'week');
            buckets.push({
                label: 'week '+ dfrom.isoWeek(),
                from: dfrom.format('YYYY-MM-DD'),
                to: dto.format('YYYY-MM-DD'),
            });
            dfrom = dto;
        }
        return {
            unit: 'week',
            buckets,
            from, to,
        }
    }
    static units(from, to, dfrom, count, unit, labelFormat) {
        const buckets = [];
        for(let i=0; i<count; i++) {
            let dto = dfrom.add(1, unit);
            buckets.push({
                label: dfrom.format(labelFormat),
                from: dfrom.format('YYYY-MM-DD'),
                to: dto.format('YYYY-MM-DD'),
            });
            dfrom = dto;
        }
        return {
            unit,
            buckets,
            from, to,
        }
    }
}

