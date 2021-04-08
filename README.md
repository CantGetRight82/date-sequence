# Given a from and to date, creates a sequence of date ranges for use in graphs.

## Install
```
yarn add date-sequence
```

## Usage
```
import DateSequence from 'date-sequence';

const sequence = DateSequence.create('2021-04-01', '2021-04-10');
```

Results in:

```
{
  unit: 'day',
  buckets: [
    { label: '2021-04-01', from: '2021-04-01', to: '2021-04-02' },
    { label: '2021-04-02', from: '2021-04-02', to: '2021-04-03' },
    { label: '2021-04-03', from: '2021-04-03', to: '2021-04-04' },
    { label: '2021-04-04', from: '2021-04-04', to: '2021-04-05' },
    { label: '2021-04-05', from: '2021-04-05', to: '2021-04-06' },
    { label: '2021-04-06', from: '2021-04-06', to: '2021-04-07' },
    { label: '2021-04-07', from: '2021-04-07', to: '2021-04-08' },
    { label: '2021-04-08', from: '2021-04-08', to: '2021-04-09' },
    { label: '2021-04-09', from: '2021-04-09', to: '2021-04-10' },
    { label: '2021-04-10', from: '2021-04-10', to: '2021-04-11' }
  ],
  from: '2021-04-01',
  to: '2021-04-10'
}
```

