module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
      "plugin:vue/vue3-essential", // 添加vue3格式化支持
      'plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // 'semi':['error','never']
        // "prettier/prettier": "off",
        // "no-unused-vars": 'off',
    },
    "globals": {
        "AMap": "true",
        "AMapUI": "true",
    },
}
