// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0;

contract Mappings {
    mapping(address => uint) public balance;

    function setBalance(uint val) public {
        balance[msg.sender] = val;
    }
}