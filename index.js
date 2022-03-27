Function Block(letter, rate, used, father, code)  {
This.letter = letter;
This.rate = rate;
This.used = used;
This.father = father;
This.code = code;
]

Function FindCode(block)  {


If (tree[block.father].code != ‘’)  {
Block.code = tree[block.father].code + ‘1’;
}
Else {
If (block.letter == tree[minIndex].letter)  {
Block.code = ‘0’;
}
Else if (block.letter == tree[preminIndex].letter)  {
Block.code = ‘1’;
}
Else  {
FindCode(tree[block.father]);
Block.code = tree[block.father].code + ‘0’;
}
}
}
