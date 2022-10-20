// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0;

// pure ==> NOT using any state variables nor edit/update state variable value
// view ==> USE state variables view only

contract Functions {
    uint private favoriteNumber = 3;
    
    function getFavoriteNumber() public view returns(uint) {
        return favoriteNumber;
    }

    function setFavouriteNumber(uint num) public view returns(uint) {
        return favoriteNumber + num;
    }

    function greetWorld(string memory greet) public pure returns(string memory) {
       return greet;
    }
}