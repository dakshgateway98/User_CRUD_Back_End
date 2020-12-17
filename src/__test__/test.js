import { getAllQuotes } from '../controllers/quotesController';

jest.mock (
            '../server.js',
            () => ({
                  async DB() {
                    await Promise.resolve('test');
                    //await Promise.resolve('describe');
                  },
            }),
);

describe('getAllQuotes', () => {
    test('test a get Api', async () => {
      
      const result = await getAllQuotes();
      
      expect(result).toBe(test);
    });
  });

// it('test a get Api', async () => {
//     const result = await getAllQuotes();
//             expect(result).toBe('test')
//         });

// test('test a get Api', async () => {
//     const result = await getAllQuotes();
//     expect(result).toBe('test');
// });

// describe('Sample Test', () => {
//     it('should test that true === true', () => {
//       expect(true).toBe(true)
//     })
//   })