## KCSC Client 

Client Application for Community Health West London

### Structure

#### Views & Routes

`/`:  Redirects to Home page

`/home`: Home page (`<IndexView.jsx />`)

`/about/us`: About Us section (`<AboutUsView.jsx />`)

`/about/self_care`: About Self Care section (`<AboutSelfCareView.jsx />`)

`/services`: Info page about community services (`<ServicesView.jsx />`)

`/services/search`: Search interface for community services (`<ServicesSearchView.jsx />`)

#### Components

#### Config

`.env` file:

```
REACT_APP_BACKEND_BASE_URL=http://localhost:3000/api
REACT_APP_API_KEY="122211"
```

**Desktop view**
```
  "viewportWidth": 1920,
  "viewportHeight": 1080,
```

**iPad view**
```
  "viewportWidth": 768,
  "viewportHeight": 1024,
```

**iPhone X view**
```
  "viewportWidth": 375,
  "viewportHeight": 812,
```
