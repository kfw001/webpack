import axios from 'axios'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { baseURL, env } from '../config'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
// default baseURL
axios.defaults.baseURL = baseURL[env]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
// api list key for value[ajax link]
export const api = {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
// Http for axios
export default class Http {
  // method get
  // data to server
  // @URL String 配置的URL名称或者完整的url
  // @params Object 需要传递的参数
  // @return axios promise instance
  static get{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}(URL, params) {
    return axios.get(api[URL] ? api[URL] : URL, { params }).then(r => r.data){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
  // method post
  // post data to server
  // @URL String 配置的URL名称或者完整的url
  // @params Object 需要传递的参数
  // @return axios promise instance
  static post{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}(URL, params) {
    return axios.post(api[URL] ? api[URL] : URL, params).then(r => r.data){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
}
