// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0;

// state, local and global variables
// https://docs.soliditylang.org/en/v0.8.15/units-and-global-variables.html#special-variables-and-functions

contract VariableTypes {
    uint public favoriteNumber = 3; //state variable
    
    function setFavouriteNumber(uint num) public view returns(uint) {
        uint myNumber = 5;   //local variable
        myNumber = favoriteNumber + num;
        return myNumber;
    }

    function getSender() public view returns(address) {
       return msg.sender; //global variable
    }

    function getBalance() public view returns(uint) {
       return msg.sender.balance; //global variable
    }
}