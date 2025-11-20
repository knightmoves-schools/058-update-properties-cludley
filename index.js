var person = {
    'age': 0
}
 
function celebrateBirthday(person) {
    person.age = (person.age || 0) + 1
    return person
}
