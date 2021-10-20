const { expect } = require('@jest/globals');
const fetchBitcoinPrice = require('../public/script.js');
const script = require('../public/script.js');

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ rates: { USD: 1.42 } }),
    })
);

beforeEach(() => {
    fetch.mockClear();
});


describe('Fetch Bitcoin Price', () => {
    test('testing bitcoin price fetch request', async() => {
        const price = await fetchBitcoinPrice("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR");
        expect(price).toEqual(expect.any(Number));;
    });
})