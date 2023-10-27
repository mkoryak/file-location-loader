# file-location-loader
webpack loader that adds the file's path to the top of the file as a comment

[testing123](https://www.google.com/search?q=testikng&sca_esv=577219809&sxsrf=AM9HkKmIBCtMEbJtqngedNbS4WIlIOMYlg%3A1698427531109&source=hp&ei=i_I7ZauxA4vdptQPtuu3-A0&iflsig=AO6bgOgAAAAAZTwAm1mikFGxhPZJ5Hs20NoCKS00bHp2&ved=0ahUKEwjroqnN35aCAxWLrokEHbb1Dd8Q4dUDCAw&uact=5&oq=testikng&gs_lp=Egdnd3Mtd2l6Igh0ZXN0aWtuZzIKEAAYgAQYsQMYCjIHEAAYgAQYCjITEC4YgAQYsQMYgwEYxwEY0QMYCjIKEAAYgAQYsQMYCjIHEAAYgAQYCjINEAAYgAQYsQMYgwEYCjIHEAAYgAQYCjINEAAYgAQYsQMYgwEYCjIHEAAYgAQYCjIKEAAYgAQYsQMYCkiLBlAAWPwEcAB4AJABAZgB_gKgAeAIqgEHMy40LjAuMbgBA8gBAPgBAcICBxAjGIoFGCfCAg4QABiKBRixAxiDARiRAsICCBAAGIoFGJECwgIOEC4YgAQYsQMYxwEY0QPCAhEQLhiABBixAxiDARjHARjRA8ICCBAAGIAEGLEDwgIIEC4YgAQY1ALCAgsQLhiABBixAxiDAcICFBAuGIoFGLEDGIMBGMcBGNEDGJECwgILEAAYgAQYsQMYgwHCAgsQLhiDARixAxiABMICCBAuGIAEGLEDwgIIEC4YsQMYgATCAgsQABiKBRixAxiRAsICBRAAGIAE&sclient=gws-wiz)

# install

`npm install file-location-loader --saveDev`

# use

```js
{
    test: /\.html$/,
    loader: "html-loader!file-location?disable=false"
},
```

use the disable query param to disable it for prod because it must use cdata instead of html comments.

# supported file types

html, coffee, js, less, scss, css, sass

you can try it on others, but don't expect good things to happen.

# what does it do?

it prepends the resourcePath to the top of the file as a comment, so for example your html (in angular) will look like this:

```html
<div ui-view="hne-slide-consulting-firm" class="hne-slide-consulting-firm ng-scope"><!--[CDATA[
  /app/pages/consulting_firm_expose/consulting_firm.html
]]--><div class="col-md-3 ng-scope">
    <organization-info organization="expose.consultingFirm" class="ng-isolate-scope"><!--[CDATA[
  /app/components/organization/organization_info/organization_info.html
]]--><div class="organization-info">
    ....
```
