import { greeting } from '../index';

test('Sanity test', () => {
    expect(greeting('Dog')).toBe('Hello Dog');
});
