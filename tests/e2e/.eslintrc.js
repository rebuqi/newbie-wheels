module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential", // 添加vue3格式化支持
    "eslint:recommended",
    "@vue/prettier/@typescript-eslint",
    "@vue/prettier",
    "@vue/typescript/recommended"
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-new': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    // "prettier/prettier": "off",
    // "no-unused-vars": 'off',
  }
}
