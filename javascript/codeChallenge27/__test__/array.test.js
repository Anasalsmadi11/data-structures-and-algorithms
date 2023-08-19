
    const selectionSort = require('../index');

    describe('selectionSort', () => {
      it('should sort an array in ascending order', () => {
        const unsortedArray = [64, 25, 12, 22, 11];
        const sortedArray = [11, 12, 22, 25, 64];
        
        selectionSort(unsortedArray);
        
        expect(unsortedArray).toEqual(sortedArray);
      });
      it('should sort a large array', () => {
        const largeArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];
        const sortedLargeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        
        selectionSort(largeArray);
        
        expect(largeArray).toEqual(sortedLargeArray);
      });
    });