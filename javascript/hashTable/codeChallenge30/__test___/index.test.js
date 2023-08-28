const { Node, LinkedList, Hashmap } = require('../index'); // Replace with the correct filename

describe('Hashmap Tests', () => {
 
    describe('LinkedList', () => {
        it('should append key-value pairs', () => {
            const linkedList = new LinkedList();
            linkedList.append('key1', 'value1');
            linkedList.append('key2', 'value2');

            expect(linkedList.find('key1')).toBe('value1');
            expect(linkedList.find('key2')).toBe('value2');
        });

        it('should update values for existing keys', () => {
            const linkedList = new LinkedList();
            linkedList.append('key1', 'value1');
            linkedList.append('key1', 'newvalue');

            expect(linkedList.find('key1')).toBe('newvalue');
        });

        it('should check if key exists', () => {
            const linkedList = new LinkedList();
            linkedList.append('key1', 'value1');

            expect(linkedList.has('key1')).toBe(true);
            expect(linkedList.has('nonexistentKey')).toBe(false);
        });

        it('should retrieve keys', () => {
            const linkedList = new LinkedList();
            linkedList.append('key1', 'value1');
            linkedList.append('key2', 'value2');

            expect(linkedList.keys()).toEqual(['key1', 'key2']);
        });
    });

 
    describe('Hashmap', () => {
        it('should set and get values', () => {
            const hashTable = new Hashmap(10);
            hashTable.set('name', 'Alice');
            hashTable.set('age', 25);

            expect(hashTable.get('name')).toBe('Alice');
            expect(hashTable.get('age')).toBe(25);
        });

        it('should check if key exists', () => {
            const hashTable = new Hashmap(10);
            hashTable.set('name', 'Alice');

            expect(hashTable.has('name')).toBe(true);
            expect(hashTable.has('Baran')).toBe(false);
        });

        it('should retrieve keys', () => {
            const hashTable = new Hashmap(10);
            hashTable.set('name', 'Alice');
            hashTable.set('age', 25);

            expect(hashTable.keys()).toEqual(['name', 'age']);
        });

        it('should calculate hash values', () => {
            const hashTable = new Hashmap(10);

            expect(hashTable.hash('name')).toBeGreaterThanOrEqual(0);
            expect(hashTable.hash('name')).toBeLessThan(10);
        });
    });
});
