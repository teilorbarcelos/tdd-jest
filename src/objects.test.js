const user = {
  name: 'fulano',
  email: 'fulano@email.com'
}

describe('match object', () => {
  it('basic user', () => {
    expect(user.name).toBeDefined()
    expect(user.age).not.toBeDefined()
  })
})