// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0;

//change behaviour of the function

contract VirtualFunctions1 {
    function getFavoriteNumber() public pure virtual returns(uint8) {
        return 3;
    }
    function getGreetingMessage() public pure virtual returns(string memory) {
        return "Hello, good morning!";
    }
}
contract VirtualFunctions2 {
    function getFavoriteNumber() public pure virtual returns(uint8) {
        return 5;
    }
}


contract DerievedFunctions is VirtualFunctions1, VirtualFunctions2 {
    function getFavoriteNumber() public pure override(VirtualFunctions1, VirtualFunctions2) returns(uint8) {
        return 7;
    }

    function getGreetingMessage() public pure override returns(string memory) {
        return "Hello, good evening!";
    }
}