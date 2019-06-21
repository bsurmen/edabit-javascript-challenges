const canTraverse = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(canTraverse([[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 1, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 0]])).toEqual(false);
        expect(canTraverse([[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 1, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 0]])).toEqual(true);
        expect(canTraverse([[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 0]])).toEqual(true);
        expect(canTraverse([[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 0]])).toEqual(false);
        expect(canTraverse([[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 0]])).toEqual(true);
        expect(canTraverse([[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0], [0, 1, 1, 1, 0, 1, 1, 1, 0]])).toEqual(true);
        expect(canTraverse([[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 1, 1, 1, 0]])).toEqual(true);
        expect(canTraverse([[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 1], [0, 0, 1, 1, 1, 0, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1, 1]])).toEqual(true);
        expect(canTraverse([[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 1], [0, 0, 1, 1, 1, 0, 1, 0, 1], [0, 1, 1, 1, 1, 1, 1, 1, 1]])).toEqual(false);
    });
});