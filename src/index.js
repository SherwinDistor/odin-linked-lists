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
        toString,
        length,
    };
}

const list = LinkedList();
// console.log(list);

list.append('dog');
list.append('cat');
// list.append('parrot');

list.toString();
// console.log(list.toString());
