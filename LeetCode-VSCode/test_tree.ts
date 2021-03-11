
class TreeNode {
    root: TreeNode | null;
    left: TreeNode | null;
    right: TreeNode | null;
    val: number | null;
    constructor(val: number) {
        this.val = val;
    }
}

function prePrderTraverse(treeNode: TreeNode) {
    if (treeNode !== undefined) {
        prePrderTraverse(treeNode.left);
        prePrderTraverse(treeNode.right);
        console.log(treeNode.val);
    }
}

let treeNode = new TreeNode(1);
treeNode.left = new TreeNode(2);
treeNode.right = new TreeNode(3);
treeNode.left.left = new TreeNode(4);
treeNode.left.right = new TreeNode(5);
treeNode.right.right = new TreeNode(6);
treeNode.left.right.left = new TreeNode(7);
treeNode.left.right.right = new TreeNode(8);

prePrderTraverse(treeNode);