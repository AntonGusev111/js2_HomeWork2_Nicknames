import Validator from'../validator.test';


test('check userName', () => {
    const cls = new Validator('user1_name-12_Name');
    
    const result = cls.validateUsername();

    expect(result).toBe(true);
  });