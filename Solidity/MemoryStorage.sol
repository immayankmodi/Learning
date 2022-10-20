// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0;

// memory & storage

contract MemoryStorage {
    uint internal favoriteNumber = 3;
    string internal greet = "Hello, world!"; 
    
    function getFavouriteNumber() public view returns(uint) {       
        return favoriteNumber;
    }

    //we need to use memory attribute after the parameter name
    function getGreeting(string memory name) public view returns(string memory) {
        return string.concat(greet," ::> ", name);
    }
}