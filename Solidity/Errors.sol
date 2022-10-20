// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0;

//require ==> it'll prevent and undo the execution, also return the remaining gas
//assert ==> it'll consume overall gas --> for internal errors mainly used
//revert ==> old method, return the remaining gas, complex if.. else conditions also used

contract ErrorsSolidity {
    address public owner;
    uint public number;

    constructor () {
        owner = msg.sender;
    }

    function isOwner() public {
        number++;
        //require(msg.sender == owner);
        require(msg.sender == owner, 'Not an owner..');
        
        //assert(msg.sender == owner); //without message and consume all gas, for internal use
        
        // if (msg.sender != owner) {
        //     revert('Not an owner..');
        // }
    }
}