import server from '../../app'
import request from 'supertest'

afterAll(() => {
  server.close()
})

describe('test index route', () => {
  test('should return hello world', async () => {
    const response = await request(server).get('/')
    expect(response.status).toBe(200)
    expect(response.text).toBe('Hello world!')
  })
})
