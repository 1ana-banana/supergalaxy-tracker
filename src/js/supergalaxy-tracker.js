export default class AgeCalculator {
  constructor(userAge, userLifeExpectancy) {
    this.age = userAge;
    this.lifeExpectancyEarth = userLifeExpectancy;
  }
  mercuryAge() {
    return this.age / .24;
  }
}