import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
    const total = getExpensesTotal([]);
    expect(total).toEqual(0);
});

test('Should correctly add up single expense', () => {
    const expense = [expenses[0]];
    const total = getExpensesTotal(expense);
    expect(total).toEqual(195);
});

test('Should correctly add up multiple expenses', () => {
    const total = getExpensesTotal(expenses);
    expect(total).toEqual(114195);
});
