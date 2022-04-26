type dataType = {
  key: string | null;
  value: number;
};

class HuffManTreeNode {
  public left: HuffManTreeNode | null;
  public right: HuffManTreeNode | null;
  public data: dataType;

  constructor(
    left: HuffManTreeNode | null,
    right: HuffManTreeNode | null,
    data: dataType
  ) {
    this.left = left;
    this.right = right;
    this.data = data;
  }
}

interface IHuffman {
  str: string;
  enCode: () => string;
}

class Huffman implements IHuffman {
  public str: string; //文本

  private charCountMap: Map<string | null, number> = new Map();
  private charCodeMap: Map<string | null, string> = new Map();

  private sortArray: Array<dataType> = [];

  constructor(str: string) {
    this.str = str;
  }

  // 计算每个字母出现的频率
  private calc(): void {
    const map: Map<string | null, number> = new Map();

    for (let i: number = 0; i < this.str.length; i++) {
      if (map.has(this.str[i])) {
        const value: number = map.get(this.str[i]) as number;
        map.set(this.str[i], value + 1);
      } else {
        map.set(this.str[i], 1);
      }
    }

    console.log({ map });

    this.charCountMap = map;
  }

  // 将字母按照出现的频率排序
  private sort(): void {
    const result: Array<dataType> = [];

    this.charCountMap.forEach((value, key) => {
      const ele = {
        key,
        value,
      };
      result.push(ele);
    });

    result.sort(function (x, y) {
      return x.value - y.value;
    });

    console.log({ sortArray: result });

    this.sortArray = result;
  }

  // 生成哈夫曼🌲
  private makeHuffmanTree(): HuffManTreeNode {
    const ind: number = 0;
    let parentNode: HuffManTreeNode;
    // 数组转化成huffman节点
    const nodeList: Array<HuffManTreeNode> = this.sortArray.map((item) => {
      return new HuffManTreeNode(null, null, item);
    });

    while (nodeList.length > 1) {
      parentNode = new HuffManTreeNode(nodeList[ind], nodeList[ind + 1], {
        key: null,
        value: nodeList[ind].data.value + nodeList[ind + 1].data.value,
      });
      nodeList.splice(ind, 2); //最靠前的两位已经集成到parentNode中，移除
      nodeList.push(parentNode);
      // 排序
      nodeList.sort(function (x, y) {
        return x.data.value - y.data.value;
      });
    }

    console.log("nodeList", nodeList.length, nodeList);

    const root =
      nodeList?.[0] || new HuffManTreeNode(null, null, { key: null, value: 0 });

    console.log({ tree: root });

    return root;
  }

  // 将每个字母通过哈夫曼树转化成二进制编码
  private traversal(huffmanTree: HuffManTreeNode, code: string): void {
    if (huffmanTree.left !== null) {
      this.traversal.call(this, huffmanTree.left, code + "0");
    } else {
      this.charCodeMap.set(huffmanTree.data.key, code);
    }

    if (huffmanTree.right !== null) {
      this.traversal.call(this, huffmanTree.right, code + "1");
    } else {
      this.charCodeMap.set(huffmanTree.data.key, code);
    }
  }

  public enCode(): string {
    this.calc(); //1、计算每个字母出现的频率
    this.sort(); //2、将字母按照出现的频率排序

    const huffmanTree = this.makeHuffmanTree(); //3、生成哈夫曼🌲
    this.traversal(huffmanTree, ""); //4、将每个字母通过哈夫曼树转化成二进制编码

    console.log({ charCodeMap: this.charCodeMap });

    let result: string = "";
    for (let i: number = 0; i < this.str.length; i++) {
      result += this.charCodeMap.get(this.str[i]);
    }
    return result;
  }
}

const str1: string = "aaaaaabbbbccd";
const huffman: IHuffman = new Huffman(str1);
const res = huffman.enCode();
console.log({ res });
