// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0;

//to modify method behaviour or restrictions

contract Modifiers {
    address public owner;

    constructor () {
        owner = msg.sender;
    }

    modifier isOwner() {
        require(msg.sender == owner);
        _;
    }

    //isOnwer will validate if sender is an onwer or not before allowing access to this method
    function makePayment() public isOwner {
    }
}