import calculator from './calculator'

describe('calculator functionality test', ()=> {
  test('calculator(5) equal to [[5], undefined, []', () => {
    expect(calculator(5)).toEqual([[5], undefined, []])
  });
  test('calculator("add") equal to [[5], "add", []', () => {
    expect(calculator("add")).toEqual([[5], "add", []])
  })
})