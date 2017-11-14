// import config
import { resourceURL, env } from '../config'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default class {
  // http协议转http
  http2https{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}(URL) {
    return URL.replace('http', 'https'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  // 补全资源链接
  // 当资源链接无协议类型时，进行链接补全
  replenishURL{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}(URL) {
    // has http?
    if (URL.indexOf('http') >= 0) {
      return URL{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
    return `${resourceURL[env]}${URL}`{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}
