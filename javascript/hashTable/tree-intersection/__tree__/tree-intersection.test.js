const{tree_intersection, BinaryTree, Node}= require('../tree-intersection')

describe('Hashmap', () => {
    // beforeEach(()=>{
    //      firstTree= new BinaryTree()
    //      secondTree= new BinaryTree()
    // })
describe("tree_intersection",()=>{


    it('it should return null if the tree is empty', ()=>{
        let firstTree= new BinaryTree()
        let secondTree= new BinaryTree()
        let result =tree_intersection(firstTree,secondTree)
        expect(result).toBe(null)

    })
})

    it('it should return the intersected values between the two trees',()=>{
        
            let level_150 = new Node(150);
            let level_100 = new Node(100);
            let level_250 = new Node(250);
            let level_75 = new Node(75);
            let level_160 = new Node(160);
            let level_200 = new Node(200);
            let level_350 = new Node(350);
            let level_125 = new Node(125);
            let level_175 = new Node(175);
            let level_300 = new Node(300);
            let level_500 = new Node(500);

            level_150.left= level_100
            level_150.right= level_250
            level_100.left= level_75
            level_100.right= level_160
            level_250.left= level_200
            level_250.right= level_350
            level_160.left= level_125
            level_160.right= level_175
            level_350.left= level_300
            level_350.right= level_500


            let leveel_42 = new Node(42);
            let leveel_100 = new Node(100);
            let leveel_600 = new Node(600);
            let leveel_15 = new Node(15);
            let leveel_160 = new Node(160);
            let leveel_200 = new Node(200);
            let leveel_350 = new Node(350);
            let leveel_125 = new Node(125);
            let leveel_175 = new Node(175);
            let leveel_4 = new Node(4);
            let leveel_500 = new Node(500);

            leveel_42.left= leveel_100
            leveel_42.right= leveel_600
            leveel_100.left= leveel_15
            leveel_100.right= leveel_160
            leveel_600.left= leveel_200
            leveel_600.right= leveel_350
            leveel_160.left= leveel_125
            leveel_160.right= leveel_175
            leveel_350.left= leveel_4
            leveel_350.right= leveel_500

            let firstTree= new BinaryTree(level_150)
            let secondTree= new BinaryTree(leveel_42)
            let result =tree_intersection(firstTree,secondTree)
            expect(result).toEqual([
                100, 160, 125,
                175, 200, 350,
                500
              ])

    })
})