function groupAnimals(animals) {
    //inputnya array jd punya length
 
    alph = 'abcdefghijklmnopqrstuvwxyz'
    arrTotal = []
    
    for (j = 0; j < alph.length ;j++) {
        temp = []
        for (k = 0; k < animals.length ;k++) {
            if (alph[j] == animals[k][0]) {
                temp.push(animals[k])
            }
        }
        if (temp.length > 0) {
        arrTotal.push(temp)
        }
    }
    return arrTotal
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]