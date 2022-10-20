// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0;

contract StructEnumArrays {
    uint[2] private numbers = [3, 7];
    uint[] private favoriteNumbers = [3, 7, 10];
    
    person[] private persons;

    struct person {
        string name;
        uint age;
    }

    
    enum genders {
        MALE,
        FEMATE
    }
    genders public gender = genders.MALE;

    function setFemale() public {
        gender = genders.FEMATE;
    }

    function getFavouriteNumber() public view returns(uint) {
        uint myNumber;
        for (uint i = 0; i < 3; i++) {
           myNumber = favoriteNumbers[i];
        }
        return myNumber;
    }

    function getPerson(uint index) public view returns(person memory) {
        return persons[index];
    }

    function setPerson(string memory _name, uint _age) public {
        person memory myperson = person( {
            name: _name,
            age: _age
        });

        persons.push(myperson);
    }
}