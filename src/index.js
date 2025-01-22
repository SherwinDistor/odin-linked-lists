// import './styles.css';
import { node } from './node.js';

function LinkedList() {
    // Define head and list length
    let nodeHead = null;
    let length = 0;

    function append(value) {
        // Create new node
        const newNode = node();

        // Change newNode value to the parameter passed in
        newNode.value = value;

        // If the current head node is the last node and points to null, set it to new node value
        if (nodeHead === null) {
            nodeHead = newNode;
        } else {
            let pointer = nodeHead;

            while (pointer.nextNode !== null) {
                pointer = pointer.nextNode;
            }
            pointer.nextNode = newNode;
        }

        // increment length
        length++;
    }

    function prepend(value) {
        const newNode = node();
        newNode.value = value;

        let pointer = nodeHead;
        nodeHead = newNode;
        newNode.nextNode = pointer;

        length++;
    }

    function size() {
        console.log(length);
        return length;
    }

    function head() {
        console.log(nodeHead);
        return nodeHead;
    }

    function at(index) {
        let pointer = nodeHead;

        // check if index is in the range of length
        if (index < length - (length - 1) || index > length) {
            console.log('Invalid index. No node found');
        } else {
            // while index is less than
            for (let i = 1; i !== index; i++) {
                pointer = pointer.nextNode;
            }

            console.log(pointer);
            return pointer;
        }
    }

    function pop() {
        // create pointer
        let pointer = nodeHead;
        let nextPointer = nodeHead.nextNode;

        if (pointer.nextNode === null) {
            nodeHead = null;
        } else {
            while (nextPointer.nextNode !== null) {
                nextPointer = nextPointer.nextNode;
                pointer = pointer.nextNode;
            }
            const returnNode = nextPointer;
            pointer.nextNode = null;
            return returnNode;
        }

        length--;
    }

    function contains(value) {
        let pointer = nodeHead;
        while (pointer !== null) {
            if (pointer.value === value) return true;
            pointer = pointer.nextNode;
        }
        return false;
    }

    function find(value) {
        let index = 1;
        let pointer = nodeHead;
        while (pointer !== null) {
            if (pointer.value === value) return index;

            pointer = pointer.nextNode;
            index++;
        }
        return null;
    }

    function toString() {
        let pointer = nodeHead;

        let string = '';

        while (pointer !== null) {
            string += `( ${pointer.value} ) -> `;
            pointer = pointer.nextNode;
        }

        console.log(`${string}null`);
    }

    return {
        append,
        prepend,
        size,
        head,
        at,
        pop,
        contains,
        find,
        toString,
        length,
    };
}

// example uses class syntax - adjust as necessary
const list = LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');

list.toString();
