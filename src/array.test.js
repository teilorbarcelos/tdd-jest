const users = [
  'fulano',
  'cicrano'
]

describe('match arrays', () => {
  it('verify array elements', () => {
    expect(users).toContainEqual('fulano')
    expect(users).toContain(users[0])
  })
})