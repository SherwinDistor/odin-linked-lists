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
        toString,
        length,
    };
}

const list = LinkedList();
// console.log(list);

list.append('dog');
list.append('cat');
list.append('parrot');
list.prepend('hamster');
list.size();
list.toString();
list.head();
// console.log(list.toString());
