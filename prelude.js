// Send `;edit` to automatron to get a quick edit link.
self.edit = 'https://github.com/dtinth/automatron-prelude/edit/main/prelude.js'

// Send `;ss(url)` to automatron to get a screenshot of a webpage using personal-puppeteer.
// See: https://github.com/dtinth/personal-puppeteer
self.ss = function ss(url, w = 1200, h = 630, options = {}) {
  const jwt = require('jsonwebtoken')
  const privateKey = encrypted(`
    tcD/qPP6Y+wioF0dHThXyrvCqoq3NSG3.+4EG2NPNzl8410ZTyBGXwmcq4LLk10xYkMg5aR/
    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
    CcYA65ncEMMFs2hb1yIRLF/3JZgU=
  `)
  const token = jwt.sign(
    { url, width: w, height: h, ...options },
    privateKey,
    { algorithm: 'RS256', noTimestamp: true, issuer: 'automatron' }
  )
  return `https://capture.the.spacet.me/${token}.png`
}

self.share = async (body) => {
  const firebaseDynamicLinksApiKey = encrypted(
    'pIt6kJSQH5oJNVyf0HIcxKSnsXRQzL2y.m7zZqStBA24bzCZ5Pxtui/5qI0RFasvjfOxJdeZaEyB1i+PZiS5fsHCB6yUaVk5am0PNdJVKyoPk'
  )
  const axios = require('axios')
  const response = await axios.post('https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=' + firebaseDynamicLinksApiKey, body)
  return response.data
}
