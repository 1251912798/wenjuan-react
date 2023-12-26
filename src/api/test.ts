import http from '../utils/request'

export const getTest = () => http.get('/api/user')
