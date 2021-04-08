import test from 'blue-tape';
import DateSequence from './index.js';

test('2021-04-01 up to 2021-04-10 is 10 days', async(t) => {
    const sequence = DateSequence.create(
        '2021-04-01',
        '2021-04-10',
    );
    t.equal(sequence.unit, 'day');
    t.equal(sequence.buckets.length, 10);
    t.equal(sequence.buckets[0].label, '2021-04-01');
});

test('2021-04-05 up to 2021-04-19 is 2 weeks', async(t) => {
    const sequence = DateSequence.create(
        '2021-04-05',
        '2021-04-19',
    );
    t.equal(sequence.unit, 'week');
    t.equal(sequence.buckets.length, 2);
    t.equal(sequence.buckets[0].label, 'week 14');
});

test('2021-04-05 up to 2021-06-14 is 10 weeks', async(t) => {
    const sequence = DateSequence.create(
        '2021-04-05',
        '2021-06-14',
    );
    t.equal(sequence.unit, 'week');
    t.equal(sequence.buckets.length, 10);
    t.equal(sequence.buckets[0].label, 'week 14');
});

test('2021-04-01 up to 2021-08-01 is 4 months', async(t) => {
    const sequence = DateSequence.create(
        '2021-04-01',
        '2021-08-01',
    );
    t.equal(sequence.unit, 'month');
    t.equal(sequence.buckets.length, 4);
    t.equal(sequence.buckets[0].label, '2021-04');
});

test('2021-04-01 up to 2023-04-01 is 2 years', async(t) => {
    const sequence = DateSequence.create(
        '2021-04-01',
        '2023-04-01',
    );
    t.equal(sequence.unit, 'year');
    t.equal(sequence.buckets.length, 2);
    t.equal(sequence.buckets[0].label, '2021');
});

