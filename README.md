# file-location-loader
webpack loader that adds the file's path to the top of the file as a comment

[https://a.com](https://a.com)
[https://a.co](https://a.co)
[https://a](https://a)
[https://](https://)
[http://a.com](http://a.com)

[https://aa.com](https://aa.com)
[https://aaa.com](https://aaa.com)
[https://aaaa.com](https://aaaa.com)
[https://1.com](https://1.com)
[https://2.com](https://2.com)
[https://3.com](https://3.com)

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
