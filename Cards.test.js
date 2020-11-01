
const {Card, UnitCard, EffectCard} = require('./Cards');

test('all cards should have a name and cost', () => {
    const mycard = new Card('testName', 10);
    expect(mycard.name).toBe('testName');
    expect(mycard.cost).toBe(10);
});

test('all units should have resilience and power', () => {
    const mycard = new UnitCard('testUnitCardName', 10, 15, 20);
    expect(mycard.res).toBe(20);
    expect(mycard.power).toBe(15);
});

test('units can attack other units, decreasing their res by the attackers power', () => {
    //given
    const attacker = new UnitCard('attacker', 10, 10, 20);
    const defender = new UnitCard('defender', 10, 10, 20);
    //when
    attacker.attack(defender);
    //then
    expect(defender.res).toBe(10);
});

test('effect cards should have a card text', () => {
    const effectCard = new EffectCard('testEffectCard', 10, 'this is my test text');
    expect(effectCard.text).toBe('this is my test text');
});

test('effect card should have a stat to affect', () => {
    const effectCard = new EffectCard('testEffectCard', 10, 'this is my test text', 'res');
    expect(effectCard.targetStat).toBe('res');
});

test('effect card should hava a magnitude', () => {
    const effectCard = new EffectCard('testEffectCard', 10, 'this is my test text', 'res', 5);
    expect(effectCard.magnitude).toBe(5);
});

test('effect card should affect a unit card\'s stat by the magnitude', () => {
    const unitCard = new UnitCard('testUnitCardName', 10, 15, 20);
    const effectCard = new EffectCard('testEffectCard', 10, 'this is my test text', 'res', 5);

    effectCard.play(unitCard);

    expect(unitCard.res).toBe(25)
});

test('effect card should work with negatives', () => {
    const unitCard = new UnitCard('testUnitCardName', 10, 15, 20);
    const effectCard = new EffectCard('testEffectCard', 10, 'this is my test text', 'res', -5);

    effectCard.play(unitCard);

    expect(unitCard.res).toBe(15)
});

test('effect cards should only be played with unit cards as its target', () => {

    const effectCard = new EffectCard('testEffectCard', 10, 'this is my test text', 'res', -5);
    const targetEffectCard = new EffectCard('targetEffectCard', 10, 'this is my test text', 'res', -5);

    expect(() => {
        effectCard.play(targetEffectCard)
    }).toThrow("Must be plated on a Unit Card.");
});

test('unit cards should only be able to attack other unit cards', () => {
    const unitCard = new UnitCard('testUnitCardName', 10, 15, 20);
    const targetEffectCard = new EffectCard('targetEffectCard', 10, 'this is my test text', 'res', -5);

    expect(() => {
        unitCard.attack(targetEffectCard)
    }).toThrow("Must only attack other Unit Cards.");
});