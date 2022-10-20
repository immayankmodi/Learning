// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0;

//use to set initial state

contract MainConstuctor {
    address public owner;
    uint public balance;

    // constructor() {
    //     owner = msg.sender;
    // }

    constructor(uint _balance) {
        owner = msg.sender;
        balance = _balance;
    }
}

// contract Derieved is Constructor(100) {

// }

contract Derieved is MainConstuctor {
    constructor() MainConstuctor(50) {

    }
}