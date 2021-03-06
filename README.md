# tsdom
Fast, lightweight DOM manipulation utility with TypeScript definitions.
**1.8kb** gzipped.
### Install
`npm install --save tsdom`
### Setup
Add the package to your project using one of the following:
- `let tsdom = require('tsdom')`
- `import tsdom from 'tsdom'`
- `<script src="./tsdom.inc.js" />` ("tsdom/dist/tsdom.inc.js")
### Usage
TSDom uses CSS (or jQuery) selector syntax, e,g:
- `let el = tsdom(element)`
- `let el = tsdom("div")`
- `let el = tsdom("#yourId")`
- `let el = tsdom(".yourClass")`
- `let el = tsdom("[data-attribute]")`
### API
Once you've selected an element or elements, you can chain the following methods:
- `el.first()`
- `el.find("#yourSelector")`
- `el.closest(".yourSelector")`
- `el.each(e => { // do something })`
- `el.append("<p>Lorem ipsum</p>" | Node | HTMLElement)`
- `el.prepend("<p>Lorem ipsum</p>" | Node | HTMLElement)`
- `el.empty()`
- `el.addClass("yourClass")`
- `el.removeClass("yourClass")`
- `el.toggleClass("yourClass")`
- `el.css({ opacity: "0" })`
- `el.attr({ title: "Your new title" })`
- `el.on("click", (ev: Event, el: HTMLElement) => { // do something })`
- `el.on("click", ".yourClass", (ev: Event, el: HTMLElement) => { // do something })`
- `el.off("click")`

The following are return methods
- `el.get(0)`
- `el.hasClass("active")`
- `el.val()`
- `el.val("value")`
- `el.text()`
- `el.text("Lorem ipsum")`
- `el.data("key")`
- `el.data("key", "value")`
- `el.attr("key")`
- `el.html()`
- `el.html("<div>Lorem ipsum</div>")`
- `el.toArray()`

And these are NON return methods
- `el.remove()`
### Types
The package exports the following type namespace for use in your app:
- `import tsdom, { TSDom } from 'tsdom'`
  - `TSDom.Init` == `tsdom`
  - `TSDom.Object` == `tsdom("#yourSelector")`
