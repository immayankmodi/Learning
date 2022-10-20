// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0;

//Cryptographic Hash Functions for hashing the inputs
//1. keccak256(bytes memory) returns(bytes32) --> one-way cryptographic hash function: impossible to get the actual input
//2. sha256(bytes memory) returns(bytes32)
//etc..

contract CryptographicHashFunctions {
    bytes32 public password;

    function encodePassword(string memory _pwd) public {
        password = keccak256(abi.encodePacked(_pwd));
    }

    function comparePassword(string memory _pwd) public view {
        require(keccak256(abi.encodePacked(_pwd)) == password, "Password doesn't matched..");
    }

    //collation issue with abi.encodePacked.. it'll give same encoded string hashing (aaa,bbb), (aaab,bb)
    function combinedStringHash(string memory _str1, string memory _str2) public pure returns(bytes32) {
        return keccak256(abi.encode(_str1, _str2));
    }
}