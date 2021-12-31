export default class AgeCalculator {
  constructor(userAge, userLifeExpectancy) {
    this.age = userAge;
    this.lifeExpectancyEarth = userLifeExpectancy;
  }
  mercuryAge() {
    return this.age / .24;
  }
  venusAge() {
    return this.age / .62;
  }
  marsAge() {
    return this.age / 1.88;
  }
  jupiterAge() {
    return this.age / 11.86;
  }
  yearsLeft() {
    return this.lifeExpectancyEarth - this.age;
  }
  yearsSurpassed() {
    return this.age - this.lifeExpectancyEarth;
  }
  yearsLeftMercury() {
    return this.yearsLeft() / .24;
  }
  yearsLeftVenus() {
    return this.yearsLeft() / .62;
  }
}