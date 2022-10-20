// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0;

// payable: to send or receive ETHER transactions

contract PayableTransaction {
    address payable public owner;

    constructor () {
        owner = payable(msg.sender);
    }

    function sendPayment() payable public {
        owner.transfer(msg.value);
    }
}