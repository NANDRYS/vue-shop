import axios from 'axios'

const BASE_API = import.meta.env.VITE_BASE_API

const service = axios.create({
  baseURL: BASE_API
})

// Настройка всех запросов
service.interceptors.request.use(
  (config) => {
    const conf = config

    conf.headers['Content-Type'] = 'application/x-www-from-urlencoded;charset=UTF-8'

    return conf
  },
  (error) => {
    Promise.reject(error)
  }
)

// Настройка всех обьектов

service.interceptors.response.use(
  (response) => {
    const { data } = response

    return data
  },
  (error) => {
    // Есть возможность отловить такие ошибки как:
    // 401(авторизация)
    // 403(доступ к запрошенному ресурсу запрещен)
    // 500(сервер не может обработать запрос к сайту) и т.д.
    Promise.reject(new Error(error))
  }
)
export default service
