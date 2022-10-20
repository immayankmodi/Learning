// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0;

//size or time units

contract Units {
    address public owner;

    constructor () {
        owner = msg.sender;
    }

    modifier isOwner() {
        require(msg.sender == owner);
        _;
    }

    modifier minSize() {
        require(msg.value > 100); //by default Wei
        //require(msg.value > 1 ether); //Ether
        _;
    }

    //minSize will validate value must be > 100 Wei..
    function makePayment() public payable minSize {

    }

    modifier checkTimestamp() {
        require(block.timestamp < (1666090688 + 1 minutes)); //timestamp check
        _;
    }

    function makePaymentPerTime() public payable checkTimestamp {

    }
}