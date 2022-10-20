// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0;

//interfaces are similar to the abstract class but using "interface" keywork
//interface only be external type (means doesn't allow to define any methods where as in "abstract", we can define some)
//interface doesn't have constructor, can't have state variable
//can have enum or structs
// NOTE: All functions inside interface are virtual so no need to write virtual keyword

interface InterfaceContract {
    function getFavoriteNumber() external pure returns(uint8);

    function getGreetings() external pure returns(string memory);
}

contract DerievedFunctions is InterfaceContract {
    function getFavoriteNumber() public pure override returns(uint8) {
        return 3;
    }

    function getGreetings() public pure override returns(string memory) {
        return "Hello, world!";
    }
}