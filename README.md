# goldilocks design
🤞 thoughts on the web

[![Netlify Status](https://api.netlify.com/api/v1/badges/11bf2a96-6866-4331-bf7d-f9f078d93073/deploy-status)](https://app.netlify.com/sites/goldilocks/deploys)

[![Trigger Netlify Build](https://github.com/scotato/goldilocks.design/workflows/Trigger%20Netlify%20Build/badge.svg)](https://github.com/scotato/goldilocks.design/actions)



## Install
```bash
npm install
```

Create a [`.env`](https://github.com/motdotla/dotenv) file in the root directory of your project.
Add [GitHub](https://github.com/settings/tokens), [Buttondown](https://buttondown.email/), [Google Analytics](https://analytics.google.com/analytics/web/) auth tokens.

```dosini
GITHUB_TOKEN="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
EMAIL_TOKEN="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
GOOGLE_ANALYTICS_ID="UA-XXXXXXXXX-X"
```



## Develop
```bash
npm start
```



## Build
```bash
npm run build
npm run serve
```
