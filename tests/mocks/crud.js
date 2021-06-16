const reqMock = {
  params: {},
  body: {}
}
const resMock = {
  result: {},
  json: data => { resMock.result = data },
  status: _ => resMock,
  send: _ => { resMock.result = { test: 'test' } }
}
const nextMock = data => { resMock.result = { error: data.message } }

module.exports = {
  reqMock,
  resMock,
  nextMock
}
