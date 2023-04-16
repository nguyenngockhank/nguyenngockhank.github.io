# Box model & Box-sizing

## Box Model

https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model

https://www.w3schools.com/css/css_boxmodel.asp


Box model = Margin + Border + Padding + Content 

Outline = a line drawn outside the element's border. It’s not a part of the box model.



## Box-sizing

width + padding + border = actual width of an element
height + padding + border = actual height of an element

allows us to include the **padding** and **border** in an element's total width and height.

```css
* {
  box-sizing: content-box | border-box;
}
```

- *content-box*: The width and height properties (and min/max properties) includes only the content. Border and padding are not included
- *border-box*: The width and height properties (and min/max properties) includes content, padding and border