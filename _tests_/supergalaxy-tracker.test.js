import AgeCalculator from './../src/js/supergalaxy-tracker';

describe('AgeCalculator', () => {
  let myAgeCalculator;
  beforeEach(() => {
    myAgeCalculator = new AgeCalculator(26, 79);
  });


  test('should correctly create a AgeCalculator object with 2 key value pairs, one for age, one for life expectancy', () => {
    expect(myAgeCalculator.age).toEqual(26);
    expect(myAgeCalculator.lifeExpectancyEarth).toEqual(79);   
  });});