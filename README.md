# KCSC Client

Client Application for Community Health West London

## Views & Routes

`/`: Redirects to Home page

`/home`: Home page (`<IndexView.jsx />`)

`/services`: Info page about community services (`<ServicesView.jsx />`)

`/services/search`: Search interface for community services (`<ServicesSearchView.jsx />`)

`/about/organization`: About Us section (`<AboutUsView.jsx />`)

`/about/self_care`: About Self Care section (`<AboutSelfCareView.jsx />`)

`/contact`: Contact page (`<ContactView />`)

`/info/news`: News page (`<NewsView />`)

## Config

**`.env` file**

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

# API Requests, Routes and Responses

## GET `/api/app_data`

Fetches basic application data to construct: `contacts`, `navigation` and `footer`.
The request happens once in the begining of user session.

**Example of response from fixture:**

```
{
  "app_data": {
    "testimonials": [
      {
        "id": 1,
        "name": "Maggie Black",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "photo": "https://freerangestock.com/sample/114840/a-caucasian-woman-posing-with-a-smile.jpg",
        "alt": "Maggie Black smiling to the camera"
      },
      {
        "id": 2,
        "name": "Richard Erricson",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        "photo": "https://t3.ftcdn.net/jpg/01/15/46/70/360_F_115467073_9hWxkk2M8b4obn3Aq0JW3YDxtYt5nXqn.jpg",
        "alt": "Richard Erricson smiling to the camera"
      }
    ],
    "navigation": {
      "main_tabs": [
        {
          "label": "home",
          "link": "/home"
        },
        {
          "label": "services",
          "link": "/services",
          "secondary_tabs": [
            {
              "label": "Find a service",
              "link": "/services",
              "ref": "find-a-service"
            },
            {
              "label": "KCSC Self Care",
              "link": "/services",
              "ref": "kcsc-self-care"
            },
            {
              "label": "KCSC CLW",
              "link": "/services",
              "ref": "kcsc-clw"
            },
            {
              "label": "KCSC N Ken SC",
              "link": "/services",
              "ref": "kcsc-n-ken-sc"
            },
            {
              "label": "Link workers",
              "link": "/services",
              "ref": "link-workers"
            },
            {
              "label": "Other VCS lg contracts",
              "link": "/services",
              "ref": "other-vcs-lg-contracts"
            }
          ]
        },
        {
          "label": "about",
          "link": "/about/organization",
          "secondary_tabs": [
            {
              "label": "organization",
              "link": "/about/organization"
            },
            {
              "label": "self care",
              "link": "/about/self_care"
            }
          ]
        },
        {
          "label": "news & info",
          "link": "/info/news"
        },
        {
          "label": "contact",
          "link": "/contact"
        }
      ],
      "secondary_tabs": [
        {
          "parent": "about",
          "label": "organization",
          "link": "/about/organization"
        },
        {
          "parent": "about",
          "label": "self care",
          "link": "/about/self_care"
        },
        {
          "parent": "news & info",
          "label": "news",
          "link": "/info/news"
        },
        {
          "parent": "news & info",
          "label": "information",
          "link": "/info/information"
        },
        {
          "parent": "services",
          "label": "Find a service",
          "link": "/services",
          "ref": "find-a-service"
        },
        {
          "parent": "services",
          "label": "KCSC Self Care",
          "link": "/services",
          "ref": "kcsc-self-care"
        },
        {
          "parent": "services",
          "label": "KCSC CLW",
          "link": "/services",
          "ref": "kcsc-clw"
        },
        {
          "parent": "services",
          "label": "KCSC N Ken SC",
          "link": "/services",
          "ref": "kcsc-n-ken-sc"
        },
        {
          "parent": "services",
          "label": "Link workers",
          "link": "/services",
          "ref": "link-workers"
        },
        {
          "parent": "services",
          "label": "Other VCS lg contracts",
          "link": "/services",
          "ref": "other-vcs-lg-contracts"
        }
      ]
    },
    "contact": {
      "email": "info@communityhealthwestlondon.org.uk",
      "phone": "0207-243 9806",
      "form": [
        {
          "placeholder": "Purpose of inquiry",
          "options": [
            "I have a question",
            "I want to donate",
            "I want to be a partner"
          ],
          "type": "dropdown",
          "required": true,
          "dataKey": "purpose"
        },
        {
          "placeholder": "Enter your name",
          "type": "text",
          "required": true,
          "multiline": false,
          "dataKey": "name"
        },
        {
          "placeholder": "Enter your email",
          "type": "email",
          "required": true,
          "multiline": false,
          "dataKey": "email"
        },
        {
          "placeholder": "Enter your message...",
          "type": "text",
          "required": false,
          "multiline": true,
          "rows": 4,
          "dataKey": "message"
        }
      ]
    },
    "about": "Community Health West London is a Community Interest Company made up of six local charities. We are working together with the wider community to improve the health and wellbeing of our residents.",
    "disclamers": {
      "copyright": "2021 All Rights Reserved by Community Health West London.",
      "accessability": "This site is built according to Web Content Accessibility Guidlines"
    }
  }
}
```

## GET `/sections?view=${view}`

The App is built from different `Views`. Each `View` is dynamically built from `Section` components. On render each `View` makes a request to get data for what `Sections` in what order it should display (first one in the array will be on top the page). With the request the `view` param is being sent to API, that acts as filter so only `Sections` with corresponding `view` attribute are sent.

For a different `Views` response would have different array of `Sections`. Sections come in different `variants`: `regular`, `no_image`, `carousel`, `slider`. Depending on it, case statment in `SectionSelector` component handles which type of section to render.

**Example of response from fixture:**

```
{
  "sections": [
    {
      "id": 1,
      "variant": "regular",
      "header": "Background and Set-up",
      "description": "This section tells vistor about Community Health West London background and setup",
      "image": {
        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqLT-VZvroTicDcz7wqtwKrUy75Lb9-v9LzQ&usqp=CAU",
        "alt": "People walk across the field holding each other"
      },
      "buttons": [
        {
          "id": 1,
          "text": "KCSC Contact",
          "link": "https://www.kcsc.org.uk/contact-us"
        },
        {
          "id": 2,
          "text": "KCSC Website",
          "link": "https://www.kcsc.org.uk"
        }
      ]
    },
    {
      "id": 2,
      "variant": "no_image",
      "header": "Plans",
      "description": "This section tells vistor Community Health West London plans to improve lives of people"
    },
    {
      "id": 3,
      "variant": "carousel",
      "header": "Our Partners",
      "cards": [
        {
          "id": 1,
          "logo": "https://www.kcsc.org.uk/sites/kcsc.org.uk/themes/bootstrap_kcsc_2019/logo.png",
          "alt": "logo of Kensington & Chelsea Social Council organization",
          "organization": "Kensington & Chelsea Social Council",
          "description": "Description of what this partner does",
          "links": {
            "web": "https://www.kcsc.org.uk/",
            "facebook": "https://www.facebook.com/smartchelsea",
            "twitter": "https://twitter.com/smartlondon"
          }
        },
        {
          "id": 2,
          "logo": "https://scontent-arn2-2.xx.fbcdn.net/v/t31.18172-8/1119949_644130218939075_1717776792_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=6e5ad9&_nc_ohc=xV2RGd7fgnsAX-pFmUi&_nc_ht=scontent-arn2-2.xx&oh=f2a844537acc3a1ea5d5ee74efc8f5df&oe=6125A1A2",
          "alt": "logo of SMART organization",
          "organization": "SMART",
          "description": "Description of what this partner does",
          "links": {
            "web": "https://www.smartlondon.org.uk/",
            "facebook": "https://www.facebook.com/KCSocialCouncil/",
            "twitter": "https://twitter.com/kcsocialcouncil"
          }
        },
        {
          "id": 3,
          "logo": "https://www.openage.org.uk/sites/openage.org.uk/themes/openage/images/layout/logo.png",
          "alt": "logo of Open Age organization",
          "organization": "Open Age",
          "description": "Description of what this partner does",
          "links": {
            "web": "https://www.openage.org.uk/",
            "facebook": "",
            "twitter": "https://twitter.com/open_age"
          }
        },
        {
          "id": 4,
          "logo": "https://www.onewestminster.org.uk/themes/custom/ow_theme/images/logo.jpg",
          "alt": "logo of One Westminster organization",
          "organization": "One Westminster",
          "description": "Description of what this partner does",
          "links": {
            "web": "https://www.onewestminster.org.uk/",
            "facebook": "",
            "twitter": "https://twitter.com/One_Westminster"
          }
        }
      ]
    },
  ]
}

```

## GET `/articles`

NewsView is different from others as is constructed from `Articles` that are separated from `Sections`. This request returns all `Articles` in database. The articles in the array should be sorted from the most recent to the oldest.

**Example of response from fixture:**

```
{
  "articles": [
    {
      "id": 1,
      "title": "Most recent article",
      "teaser": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "date": "2021-05-12",
      "image": {
        "url": "https://healthtechmagazine.net/sites/healthtechmagazine.net/files/styles/cdw_hero/public/articles/%5Bcdw_tech_site%3Afield_site_shortname%5D/202007/20200630_HT_Web_MonITor_Tech-Organizations-Should-Consider.jpg?itok=adOWwJ9x",
        "alt": "Nice doctor picture"
      }
    },
    {
      "id": 2,
      "title": "Article 2",
      "teaser": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "date": "2021-05-11",
      "image": {
        "url": "https://i1.wp.com/www.thekashmirmonitor.net/wp-content/uploads/2020/02/nurse.jpg",
        "alt": "Doctor holding tablet"
      }
    }
  ]
}

```

## GET `/articles/:id`

By clicking read more on the article visitor is being redirectied to `ArticleView` where this request is sent. The rendering supports line breaks `/n` to make paragraphs.

**Example of response from fixture:**

```
{
  "article": {
    "id": 1,
    "title": "Most recent article",
    "body": "Science gets a lot of respect these days. Unfortunately, it's also getting a lot of competition from misinformation. \n  \n  In my 30 years of studying and promoting scientific literacy.",
    "author": "Bob Kramer",
    "date": "2021-05-12",
    "image": {
      "url": "https://healthtechmagazine.net/sites/healthtechmagazine.net/files/styles/cdw_hero/public/articles/%5Bcdw_tech_site%3Afield_site_shortname%5D/202007/20200630_HT_Web_MonITor_Tech-Organizations-Should-Consider.jpg?itok=adOWwJ9x",
      "alt": "Nice doctor picture"
    }
  }
}
```

## POST `/search?q=${searchQuery}`

One of the features is to search for the list of Self Care services using `searchQuery`.

**Example of response from fixture:**

```
{
  "services": [
    {
      "id": 142,
      "name": "Football Friday",
      "description": "Turn Up & Play session for adults in North Kensington and the grenfell affected community,takes place 3 Fridays a month at : \nWestway Sports Centre Pitch 5 \n2.45 - 3.45 pm\nThe 2nd Friday of each month we have 3 teams in the Middlesex FA North \nwest London Mental Health League at Brunel University.\n",
      "telephone": null,
      "email": "lydia.mindsunitedfc@gmail.com",
      "address": null,
      "postcode": null,
      "website": "https://www.mindsunitedfc.com",
      "coords": {
        "latitude": null,
        "longitude": null
      }
    },
    {
      "id": 45,
      "name": "Boy's Football Club",
      "description": "The brilliant QPR Community Trust is running a football club for boys aged 12-14. Sign up at www.bookwhen.com/dalgarnotrust.\n",
      "telephone": "02033981833",
      "email": "youth@dalgarnotrust.org.uk",
      "address": null,
      "postcode": null,
      "website": null,
      "coords": {
        "latitude": 51.49955620887601,
        "longitude": -0.2000188663810555
      }
    }
  ]
}

```


## GET `/information`

index action to get all information items in Information Veiw

**Example of response from fixture:**
```
{
  "information_items": {
    "pinned": [
      {
        "header": "Item-0",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "link": "https://www.netdoctor.co.uk/health-services/nhs/a4489/what-is-the-nhs/"
      },
      {
        "header": "Item-1",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        "link": "https://www.netdoctor.co.uk/health-services/nhs/a4489/what-is-the-nhs/"
      }
    ],
    "other": [
      {
        "header": "Other Item-0",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "link": "https://www.nhs.uk/nhs-services/"
      },
      {
        "header": "Other Item-1",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "link": "https://www.nhs.uk/nhs-services/"
      }
    ]
  }
}
```

## GET `/services`

index axtion for all servides

```
{
  "services": [
    {
      "id": 112,
      "name": "Service 0",
      "description": "Description of this service\n",
      "telephone": null,
      "email": null,
      "address": null,
      "postcode": null,
      "website": "https://www.expample.com",
      "coords": {
        "latitude": null,
        "longitude": null
      }
    },
    {
      "id": 142,
      "name": "Service 1",
      "description": "Turn Up & Play session for adults in North Kensington and the grenfell affected community,takes place 3 Fridays a month at : \nWestway Sports Centre Pitch 5 \n2.45 - 3.45 pm\nThe 2nd Friday of each month we have 3 teams in the Middlesex FA North \nwest London Mental Health League at Brunel University.\n",
      "telephone": null,
      "email": "lydia.mindsunitedfc@gmail.com",
      "address": null,
      "postcode": null,
      "website": "https://www.mindsunitedfc.com",
      "coords": {
        "latitude": null,
        "longitude": null
      }
    },
    {
      "id": 45,
      "name": "Service 2",
      "description": "The brilliant QPR Community Trust is running a football club for boys aged 12-14. Sign up at www.bookwhen.com/dalgarnotrust.\n",
      "telephone": "02033981833",
      "email": "youth@dalgarnotrust.org.uk",
      "address": null,
      "postcode": null,
      "website": null,
      "coords": {
        "latitude": 51.49955620887601,
        "longitude": -0.2000188663810555
      }
    }
  ]
}

```

