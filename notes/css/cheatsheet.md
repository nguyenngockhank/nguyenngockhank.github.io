# CSS Cheat Sheet 

## Selectors

[Demo for Selectors](https://www.w3schools.com/cssref/trysel.asp)

Universal Selector `* {}`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors)

ID Selector `#id {}`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors)

Class Selector `.class {}`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors)

Type Selector `h1, h2 ,h3 {}`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors)

Adjacent Sibling Selector `h1 + p {}`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_selectors)

Child Selector `ul > li {}`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_selectors)

General Sibling Selector `h1 ~ p {}`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_selectors)

Descendant Selector `p a {}`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_selectors)

Attribute Selector `div[attribute="SomeValue"] {}`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)


## Pseudo Selectors & Elements
Mouse Over Selector `a:hover {}`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover)

Active Link Selector `a:active {}`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/:active)

Focus Selector `input:focus {}`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)

Visited Links Selector `a:visited {}`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited)

Link Selector `.class:link {}`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/:link)

Checked elements selector `input:checked {}`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/:checked)

Disabled elements selector `input:disabled {}`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled)

Enabled elements selector `input:enabled {}`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled)

Not a Specified Element Selector `:not(p) {}`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/:not)

First Line Selector `p::first-line {}`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-line)

First Letter Selector `p::first-letter {}`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter)

First Child Selector `p:first-child {}`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child)

Last Child Selector `p:last-child {}`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child)

Only Child Selector `p:only-child {}`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child)

:nth-child Selector `p:nth-child() {}`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child)

First Element of its Parent Selector `p:first-of-type {}`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type)

Elements that have no Children Selector `p:empty {}`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/:empty)

Before Element `.class::before {}`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/::before)

After Element `.class::after {}`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/::after)


## Text Styling
Font style `font-style: normal | italic | oblique`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)

Font Variant `font-variant: normal | small-caps`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant)

Font Weight `font-weight: normal | bold | bolder | lighter | 100 - 900`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)

Vertical Alignment `vertical-align: baseline | 10px | sub | super | top | text-top | middle | bottom | text-bottom | initial`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align)

Text Transform `text-transform: capitalise | lowercase | uppercase`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)

Font Size `font-size: 12px | 0.8em | 80%`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)

Space Between Characters `letter-spacing: normal | 4px`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)

Line Height `line-height: normal | 3em | 34%`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)

Horizontal Alignment `text-align: left | right | center | justify`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)

Text Align Last `text-align-last: auto | left | right | center | justify | start | end | initial | inherit`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align-last)

Text Decoration `text-decoration: none | underline | overline | line-through`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)

Indent First Line `text-indent: 25px`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent)

Font Family `font-family: 'Open Sans', sans-serif`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)

Text Justify `text-justify: auto | inter-word | inter-character | none | initial | inherit`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/text-justify)

Text Overflow `text-overflow: clip | ellipsis | string | initial | inherit`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow)

Text Shadow `text-shadow: h-shadow v-shadow blur-radius color | none | initial | inherit`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)


## Position
Position `position: static | relative | absolute | fixed | sticky`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

Position Properties `top | right | bottom | left`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

Float Element `float: left | right | none`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/float)

Clear Floating Elements `clear: none | left | right | both`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/clear)

Z Index `z-index: 3 | auto | inherit`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)


## Background
Background Image `background-image: url()
`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image)

Background Repeat `background-repeat: repeat-x | repeat-y | repeat | space | round | no-repeat`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)

Background Attachment `background-attachment: scroll | fixed | local | initial | inherit`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment)

Background Color `background-color: #2AA9E0`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)

Background Position `background-position: top | right | bottom | left | center`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)


## Box Properties
Box Sizing `box-sizing: border-box | content-box`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)

Margin `margin: 2px 4px 6px 8px | 0 auto`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)

Padding `padding: 2px 4px 6px 8px`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)

Border Color `border-color: #2AA9E0`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color)

Border Style `border-style: none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)

Border Width `border-width: 10px`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width)


## List Styling
List Type `list-style-type: disc | circle | square | none`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type)

List Position `list-style-position: inside | outside`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position)

List Image `list-style-image: url()
`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image)


## Flexbox
Flex Direction `flex-direction: row | row-reverse | column | column-reverse`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)

Flex Wrap `flex-wrap: nowrap | wrap | wrap-reverse`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)

Justify Content `justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)

Align Items `align-items: flex-start | flex-end | center | baseline | stretch`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)

Align Content `align-content: flex-start | flex-end | center | space-between | space-around | stretch`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)

Order `order: 0`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/order)

Flex Grow `flex-grow: 0`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)

Flex Shrink `flex-shrink: 1`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)

Flex Basis `flex-basis: 3px | auto`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis)

Align Self `align-self: auto | flex-start | flex-end | center | baseline | stretch`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)


## CSS Grid
Grid Template Columns `grid-template-columns: 40px 50px auto 50px 40px`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)

Grid Template Rows `grid-template-rows: 25% 100px auto`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows)

Grid Template Areas `grid-template-areas: "a b c" | none`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)

Grid Template `grid-template: "a a a" 20% "b b b" auto | 100px 1fr / 50px 1fr`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template)

Grid Column Gap `grid-column-gap: 10px`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap)

Grid Row Gap `grid-row-gap: 10px`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap)

Justify Items `justify-items: start | end | center | stretch`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items)

Align Items `align-items: start | end | center | stretch`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)

Justify Content `justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)

Align Content `align-content: flex-start | flex-end | center | space-between | space-around | stretch`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)

Grid Auto Columns `grid-auto-columns: 100px | max-content | min-content`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns)

Grid Auto Rows `grid-auto-rows: 100px | max-content | min-content`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows)

Grid Auto Flow `grid-auto-flow: row | column | row dense | column dense`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow)

Grid Column Start `grid-column-start: 2 | areaname | span 2 | span areaname | auto`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start)

Grid Column End `grid-column-end: 2 | areaname | span 2 | span areaname | auto`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end)

Grid Row Start `grid-row-start: 2 | areaname | span 2 | span areaname | auto`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start)

Grid Row End `grid-row-end: 2 | areaname | span 2 | span areaname | auto`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end)

Grid Column `grid-column: 3 / span 2`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column)

Grid Row `grid-row: 3 / span 2`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)

Justify Self `justify-self: start | end | center | stretch`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self)

Align Self `align-self: start | end | center | stretch`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)


## Dynamic Content
CSS Variable `--variable-name: value`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

Variable Usage `var(--variable-name)
`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

Counter Reset `counter-reset: name-of-counter`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/counter-reset)

Counter Increment `counter-increment: name-of-counter`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/counter-increment)

Counter Dynamic Value `content: counter(name-of-counter)`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters)

Attribute Dynamic Value `content: attr(name-of-attribute)`

[*Learn More*](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters)


