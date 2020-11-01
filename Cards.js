class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class UnitCard extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack = (target) => {
        if (target instanceof UnitCard) {
            target.res -= this.power;
        } else {
            throw new Error("Must only attack other Unit Cards.");
        }
    }
}

class EffectCard extends Card {
    constructor(name, cost, text, targetStat, magnitude) {
        super(name, cost);
        this.text = text;
        this.targetStat = targetStat;
        this.magnitude = magnitude;
    }

    play = (target) => {
        if (target instanceof UnitCard) {
            target[this.targetStat] += this.magnitude;
        } else {
            throw new Error("Must be plated on a Unit Card.");
        }
    }
}


module.exports = {
    Card,
    UnitCard,
    EffectCard
}