const generateOverride = (params = {}) => {
  let result = ''

  if (params.fontFamily) {
    result += `
      body {
        font-family: ${params.fontFamily}, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,'PingFang TC';
      }

      @supports (font-variation-settings: normal) {
        body {
          font-family: ${params.fontFamily}, 'Inter var', Inter, Rubik, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,'PingFang TC';
        }
      }
    `
  }
  
  if (params.customCss) {
    result += `
      ${params.customCss}
    `
  }

  return result
}

module.exports = generateOverride
