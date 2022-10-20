// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0;

contract VariableTypes {
    bool isActive = false;
    int8 favoriteNumber = -123; //positive or negative
    uint8 notFavoriteNumber = 123; //only positive
    string strHello = "Hello, world!";
    bytes32 bytString = "Hi";
    address mask = 0x6088e7be22A87FA237cd8BB6F31856Fef642aBa1;
}