import AgeCalculator from './../src/js/supergalaxy-tracker';

describe('AgeCalculator', () => {
  let myAgeCalculator;
  beforeEach(() => {
    myAgeCalculator = new AgeCalculator(27, 79);
  });


  test('should correctly create a AgeCalculator object with 2 value pairs, one for age, one for life expectancy', () => {
    expect(myAgeCalculator.age).toEqual(27);
    expect(myAgeCalculator.lifeExpectancyEarth).toEqual(79);   
  });
  test('should take this.age and divide it by .24 and return that value to result in a new mercuryAge value', () => {    
    expect(myAgeCalculator.mercuryAge()).toEqual(112.5);
  });
  test('should take this.age and divide it by .62 and return that value as a new venusAge key value', () => {    
    expect(myAgeCalculator.venusAge()).toEqual(43.54838709677419);
  });
});