// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0;

// trigger events
// indexed to filter certain address on blockchain, frontend: max 3 indexed we can declare

contract Events {
    event transfer(address _from, address _to, uint amount);
    //event transfer(address indexed _from, address indexed _to, uint amount);

    function sendPayment(address to, uint amount) public {
        emit transfer(msg.sender, to, amount);
    }
}