// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0;

//arithmentic, relational, and logical operators

contract Operators {
    uint private favoriteNumber = 3;
    
    function isCorrectNumber() public view returns(bool) {
        return favoriteNumber == 3;
    }

    function setFavouriteNumber(uint num) public view returns(uint) {
        return favoriteNumber + num;
    }
}