
const {Card, UnitCard, EffectCard} = require('./Cards');

//turn 1
const redBeltNinja = new UnitCard("Red Belt Ninja", 3,3,4);
const hardAlgorithm = new EffectCard("Hard Algorithm", 2, "increase target's resilience by 3", 'res', 3);
console.log(redBeltNinja);
hardAlgorithm.play(redBeltNinja);
console.log(redBeltNinja);

//turn 2
const blackBeltNinja = new UnitCard("Black Belt Ninja", 4,5,4);
const unhandledPromiseReject = new EffectCard("Unhandled Promise Rejection", 2, "reduce target's resilience by 2", 'res', -2);
console.log(redBeltNinja)
unhandledPromiseReject.play(redBeltNinja)
console.log(redBeltNinja)

//turn 3
const pairProgramming = new EffectCard("Pair Programming", 3, "increase target's power by 2", 'power', 2);
console.log(redBeltNinja, blackBeltNinja)
pairProgramming.play(redBeltNinja)
redBeltNinja.attack(blackBeltNinja)
console.log(redBeltNinja, blackBeltNinja)
