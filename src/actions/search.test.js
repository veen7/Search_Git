import { USER_SEARCH_REQUEST, USER_SEARCH_SUCCESS, USER_SEARCH_ERROR, SERVER_ERROR, searchRequest, searchRequestSuccess, searchRequestError, serverError } from './search';

describe('actions', () => {
  it('should create an action to request search', () => {
    const expectedAction = {
      type: USER_SEARCH_REQUEST
    }
    expect(searchRequest()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to success', () => {
    const expectedAction = {
      type: USER_SEARCH_SUCCESS
    }
    expect(searchRequestSuccess()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to error', () => {
    const expectedAction = {
      type: USER_SEARCH_ERROR
    }
    expect(searchRequestError()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to server error', () => {
    const expectedAction = {
      type: SERVER_ERROR
    }
    expect(serverError()).toEqual(expectedAction)
  })
})