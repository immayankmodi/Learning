// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0;

// variable scopes: public, internal and private (private to same contract)
// https://docs.soliditylang.org/

contract VariableScopes {
    uint public favoriteNumber = 3; //can be used internally, derieved or via outside of the contract
    string internal greet = "Hello, world!"; //internal or from derieved contract only
    int256 private age = 33; //private to this contract only
    
    function getFavouriteNumber() public view returns(uint) {       
        return favoriteNumber;
    }

    function getGreeting() internal view returns(string memory) {
        return greet;
    }

    function getAge() private view returns(int) {
        return age;
    }
}

contract VariableScopesDerieved is VariableScopes { //VariableScopesDerieved is derieved from VariableScopes, so we'll see both contract public methods

    // //if we use instance, then we won't see getFavouriteNumber() method from the VariableScopes contract
    // VariableScopes varScopes = new VariableScopes();
    // function getFavouriteNumber2() public view returns(uint) {
    //     return varScopes.getFavouriteNumber();
    // }
    
    function getFavoriteNumber() public view returns(uint) {
        return favoriteNumber;
    }

    function getGreeting2() public view returns(string memory) {
        return greet;
    }

    // function getAge() public view returns(int) {   
    //     return age; //error here, as we can't access the age which is private
    // }
}