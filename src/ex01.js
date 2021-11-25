describe('addition', () => {

  let calc = null
  beforeEach(() => {
    const options = {
      precision: 2
    }

    const calc = new Calculator(options)
  })
  it('adds two positive numbers', () => {
    const result = calc.add(1.3334, 4.5)
    expect(result).toEqual(5.83)
  })

  it('adds two negative numbers', () => {
    const result = calc.add(-1.3334, -4.5)
    expect(result).toEqual(-5.83)
  })
})