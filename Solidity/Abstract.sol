// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0;

//unimplemented functions can be written here..
//for example ERC-20 tokens write function which app/token can be defined by the token owner

abstract contract AbstractContract {
    function getFavoriteNumber() public pure virtual returns(uint8);
}

contract DerievedFunctions is AbstractContract {
    function getFavoriteNumber() public pure override returns(uint8) {
        return 3;
    }
}