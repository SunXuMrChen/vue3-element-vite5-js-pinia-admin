import loginMock from './login/login'
import analysisMock from './main/analysis/analysis'
import systemMock from './main/system/system'

export default {
  ...loginMock,
  ...analysisMock,
  ...systemMock
}
