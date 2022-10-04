import Validator from'../validator.js';


test('check userName', () => {
    const cls = new Validator('nickname123-name120_user');
    
    const result = cls.validateUsername();

    expect(result).toBe(true);
  });