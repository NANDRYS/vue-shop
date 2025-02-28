import request from '@/utils/requests'

export function getProducts() {
  return request({
    url: '/products',
    method: 'get'
  })
}

export function getProduct(id) {
  return request({
    url: `/products/${id}`,
    method: 'get'
  })
}
