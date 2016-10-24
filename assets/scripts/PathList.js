function Node(data) {
    this.data = data;
    this.next = null;
}

function PathList() {
    this._length = 0;
    this.head = null;
}

PathList.prototype.add = function (data) {
    var node = new Node(data);
    currentNode = this.head;

    if (!currentNode) {
        this.head = node;
        this._length++;

        return node;
    }

    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = node;
    this._length++;

    return node;
}