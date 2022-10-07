'use strict'

jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    NODE_ENV: 'testing',
    APP_HOST: 'http://localhost'
  }
}))
