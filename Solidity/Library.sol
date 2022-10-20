// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0;

//Libraries to reuse functions and used to separate the functions to cleanly structure the contract code like components in angular/react.

library myFunctions {
    function myFavoriteNumber() public pure returns(uint8) {
        return 3;
    }
}

contract Libraries {
    function getFavoriteNumber() public pure returns(uint8) {
        return myFunctions.myFavoriteNumber();
    }
}