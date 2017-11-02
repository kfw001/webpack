// global config
// Used for public configuration properties
// helloLaoYang
// 2017-10-19

// adout env
export const env = process.env.NODE_ENV || 'production'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
// about debug
export const debug = env !== 'production'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
// about ajax baseURL
export const baseURL = {
  development: 'http://api.dev.example.com',
  production: 'http://api.example.com'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// about resourceURL
export const resourceURL = {
  development: 'http://resources.dev.example.com',
  production: 'http://resources.example.com'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
