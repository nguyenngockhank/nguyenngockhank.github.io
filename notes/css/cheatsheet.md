<style>
.my-box {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
}
.my-box p {
    line-height: 1;
}
.my-row {
    margin-left: -10px;
    margin-right: -10px;
}
</style>
# CSS Cheat Sheet 

## Selectors
[Demo for Selectors](https://www.w3schools.com/cssref/trysel.asp)

:::: row

::: box col-xs-12 col-sm-12 col-md-6
[Universal Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors)

```css
* {}
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[ID Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors)
```css
#id {}
```
:::


::: box col-xs-12 col-sm-12 col-md-6
[Class Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors)
```css
.class {}
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Type Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors)
```css
h1, h2 ,h3 {}
```
:::


::: box col-xs-12 col-sm-12 col-md-6
[Adjacent Sibling Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_selectors)
```h1 + p {}
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Child Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_selectors)
```css
ul > li {}
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[General Sibling Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_selectors)
```css
h1 ~ p {}
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Descendant Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_selectors)
```css
p a {}
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Attribute Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)
```css
div[attribute="SomeValue"]{}
```
:::

::::


## Pseudo Selectors & Elements

:::: row

::: box col-xs-12 col-sm-12 col-md-6
[Mouse Over Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover)
```css
a:hover {}
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Active Link Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:active)
```css
a:active {}
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Focus Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)
```css
input:focus {}
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Visited Links Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited)
```css
a:visited {}
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Link Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:link)
```css
.class:link {}
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Checked elements selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:checked)
```css
input:checked {}
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Disabled elements selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled)
```css
input:disabled {}
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Enabled elements selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled)
```css
input:enabled {}
```
:::


::: box col-xs-12 col-sm-12 col-md-6
[Not a Specified Element Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:not)
```css
:not(p) {}
```
:::


::: box col-xs-12 col-sm-12 col-md-6
[First Line Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-line)
```css
p::first-line {}
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[First Letter Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter)
```css
p::first-letter {}
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[First Child Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child)
```css
p:first-child {}
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Last Child Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child)
```css
p:last-child {}
```
:::


::: box col-xs-12 col-sm-12 col-md-6
[Only Child Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child)
```css
p:only-child {}
```
:::


::: box col-xs-12 col-sm-12 col-md-6
[nth-child Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child)
```css
p:nth-child() {}
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[First Element of its Parent Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type)
```css
p:first-of-type {}
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Elements that have no Children Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:empty)
```css
p:empty {}
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Before Element](https://developer.mozilla.org/en-US/docs/Web/CSS/::before)
```css
.class::before {}
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[After Element](https://developer.mozilla.org/en-US/docs/Web/CSS/::after)
```css
.class::after {}
```
:::

::::

## Text Styling

:::: row

::: box col-xs-12 col-sm-12 col-md-6
[Font style](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)
```css
font-style: normal | italic | oblique
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Font Variant](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant)
```css
font-variant: normal | small-caps
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Font Weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
```css
font-weight: normal | bold | bolder | lighter | 100 - 900
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Vertical Alignment](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align)
```css
vertical-align: baseline | 10px | sub | super | top | text-top | middle | bottom | text-bottom | initial
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Text Transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)
```css
text-transform: capitalise | lowercase | uppercase
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Font Size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)
```css
font-size: 12px | 0.8em | 80%
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Space Between Characters](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
```css
letter-spacing: normal | 4px
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Line Height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
```css
line-height: normal | 3em | 34%
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Horizontal Alignment](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
```css
text-align: left | right | center | justify
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Text Align Last](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align-last)
```css
text-align-last: auto | left | right | center | justify | start | end | initial | inherit
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Text Decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
```css
text-decoration: none | underline | overline | line-through
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Indent First Line](https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent)
```css
text-indent: 25px
```
:::


::: box col-xs-12 col-sm-12 col-md-6
[Font Family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
```css
font-family: 'Open Sans', sans-serif
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Text Justify](https://developer.mozilla.org/en-US/docs/Web/CSS/text-justify)
```css
text-justify: auto | inter-word | inter-character | none | initial | inherit
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Text Overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow)
```css
text-overflow: clip | ellipsis | string | initial | inherit
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Text Shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
```css
text-shadow: h-shadow v-shadow blur-radius color | none | initial | inherit
```
:::

::::

## Position

:::: row

::: box col-xs-12 col-sm-12 col-md-6
[Position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
```css
position: static | relative | absolute | fixed | sticky
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Position Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
```css
top | right | bottom | left
```
:::


::: box col-xs-12 col-sm-12 col-md-6
[Float Element](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
```css
float: left | right | none
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Clear Floating Elements](https://developer.mozilla.org/en-US/docs/Web/CSS/clear)
```css
clear: none | left | right | both
```
:::


::: box col-xs-12 col-sm-12 col-md-6
[Z Index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
```css
z-index: 3 | auto | inherit
```
:::

::::

## Background

:::: row
::: box col-xs-12 col-sm-12 col-md-6
[Background Image](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image)
```css
background-image: url()
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Background Repeat](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)
```css
background-repeat: repeat-x | repeat-y | repeat | space | round | no-repeat
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Background Attachment](https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment)
```css
background-attachment: scroll | fixed | local | initial | inherit
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Background Color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
```css
background-color: #2AA9E0
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Background Position](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
```css
background-position: top | right | bottom | left | center
```
:::

::::

## Box Properties

::::row

::: box col-xs-12 col-sm-12 col-md-6
[Box Sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
```css
box-sizing: border-box | content-box
```
:::


::: box col-xs-12 col-sm-12 col-md-6
[Margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
```css
margin: 2px 4px 6px 8px | 0 auto
```
:::


::: box col-xs-12 col-sm-12 col-md-6
[Padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
```css
padding: 2px 4px 6px 8px
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Border Color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color)
```css
border-color: #2AA9E0
```
:::


::: box col-xs-12 col-sm-12 col-md-6
[Border Style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)
```css
border-style: none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset
```
:::


::: box col-xs-12 col-sm-12 col-md-6
[Border Width](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width)
```css
border-width: 10px
```
:::

::::

## List Styling

:::: row

::: box col-xs-12 col-sm-12 col-md-6
[List Type](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type)
```css
list-style-type: disc | circle | square | none
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[List Position](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position)
```css
list-style-position: inside | outside
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[List Image](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image)
```css
list-style-image: url()
```
:::

::::


## Flexbox

:::: row
::: box col-xs-12 col-sm-12 col-md-6
[Flex Direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
```css
flex-direction: row | row-reverse | column | column-reverse
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Flex Wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)
```css
flex-wrap: nowrap | wrap | wrap-reverse
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Justify Content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
```css
justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Align Items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
```css
align-items: flex-start | flex-end | center | baseline | stretch
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Align Content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)
```css
align-content: flex-start | flex-end | center | space-between | space-around | stretch
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Order](https://developer.mozilla.org/en-US/docs/Web/CSS/order)
```css
order: 0
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Flex Grow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)
```css
flex-grow: 0
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Flex Shrink](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)
```css
flex-shrink: 1
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Flex Basis](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis)
```css
flex-basis: 3px | auto
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Align Self](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
```css
align-self: auto | flex-start | flex-end | center | baseline | stretch
```
:::

::::

## CSS Grid

:::: row

::: box col-xs-12 col-sm-12 col-md-6
[Grid Template Columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)
```css
grid-template-columns: 40px 50px auto 50px 40px
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Grid Template Rows](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows)
```css
grid-template-rows: 25% 100px auto
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Grid Template Areas](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)
```css
grid-template-areas: "a b c" | none
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Grid Template](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template)
```css
grid-template: "a a a" 20% "b b b" auto | 100px 1fr / 50px 1fr
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Grid Column Gap](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap)
```css
grid-column-gap: 10px
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Grid Row Gap](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap)
```css
grid-row-gap: 10px
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Justify Items](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items)
```css
justify-items: start | end | center | stretch
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Align Items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
```css
align-items: start | end | center | stretch
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Justify Content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
```css
justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Align Content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)
```css
align-content: flex-start | flex-end | center | space-between | space-around | stretch
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Grid Auto Columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns)
```css
grid-auto-columns: 100px | max-content | min-content
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Grid Auto Rows](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows)
```css
grid-auto-rows: 100px | max-content | min-content
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Grid Auto Flow](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow)
```css
grid-auto-flow: row | column | row dense | column dense
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Grid Column Start](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start)
```css
grid-column-start: 2 | areaname | span 2 | span areaname | auto
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Grid Column End](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end)
```css
grid-column-end: 2 | areaname | span 2 | span areaname | auto
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Grid Row Start](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start)
```css
grid-row-start: 2 | areaname | span 2 | span areaname | auto
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Grid Row End](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end)
```css
grid-row-end: 2 | areaname | span 2 | span areaname | auto
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Grid Column](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column)
```css
grid-column: 3 / span 2
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Grid Row](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)
```css
grid-row: 3 / span 2
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Justify Self](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self)
```css
justify-self: start | end | center | stretch
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Align Self](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
```css
align-self: start | end | center | stretch
```
:::

::::

## Dynamic Content

:::: row

::: box col-xs-12 col-sm-12 col-md-6
[CSS Variable](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
```css
--variable-name: value
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Variable Usage](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
```css
var(--variable-name)
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Counter Reset](https://developer.mozilla.org/en-US/docs/Web/CSS/counter-reset)
```css
counter-reset: name-of-counter
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Counter Increment](https://developer.mozilla.org/en-US/docs/Web/CSS/counter-increment)
```css
counter-increment: name-of-counter
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Counter Dynamic Value](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters)
```css
content: counter(name-of-counter)
```
:::

::: box col-xs-12 col-sm-12 col-md-6
[Attribute Dynamic Value](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters)
```css
content: attr(name-of-attribute)
```
:::
::::

