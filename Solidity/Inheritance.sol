// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0;

import "./TypesAndVariables.sol";
//or any external .sol urls will work

//------------ Function Visibility
// Public, Private, External, Internal
//------------
contract Parent {
    address public owner;
    constructor() {
        owner = msg.sender;
    }
}

contract Child is VariableTypes { 
    function getFavoriteNumber() public view returns(int8) {
        return favoriteNumber;
    }
}