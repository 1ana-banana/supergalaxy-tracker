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
  test('should take this.age and divide it by .62 and return that value to result in a new venusAge value', () => {    
    expect(myAgeCalculator.venusAge()).toEqual(43.54838709677419);
  });
  test('should take this.age and divide it by 1.88 and return that value to result in a new marsAge value', () => {    
    expect(myAgeCalculator.marsAge()).toEqual(14.361702127659575);
  });
  test('should take this.age and divide it by 11.86 and return that value to result in a new jupiterAge key value', () => {    
    expect(myAgeCalculator.jupiterAge()).toEqual(2.2765598650927488);
  }); 
  test('should return the value of years left, which is this.lifeExpectancyEarth - this.age', () => {
    expect(myAgeCalculator.yearsLeft()).toEqual(52);
  });
  test('should return the sum of this.age - this.lifeExpectancyEarth, which is number of years past life expentency, if any', () => {
    expect(myAgeCalculator.yearsSurpassed()).toEqual(-52);
  });
  test('should return life expectancy left in mercury years', () => {
    expect(myAgeCalculator.yearsLeftMercury()).toEqual(216.66666666666669);
  });
  test('should return life expectancy left in venus years', () => {
    expect(myAgeCalculator.yearsLeftVenus()).toEqual(83.87096774193549);
  });
  test('should return life expectancy left in mars years', () => {
    expect(myAgeCalculator.yearsLeftMars()).toEqual(27.659574468085108);
  });
});