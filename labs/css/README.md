# CSS Basics

CSS stands for Cascading Style Sheets. It is a language used to control the presentation and styling of web pages written in HTML. CSS allows you to change the color, font, size, spacing, and many other aspects of HTML elements.

## How CSS Works

CSS works by selecting HTML elements and applying styles to them. Each CSS rule consists of a selector and a declaration block.

### Selectors

Selectors are used to target the HTML elements you want to style. Here are some common selectors:

- Element selector: Selects all elements of a specific type (e.g., `h1`, `p`, `div`).
- Class selector: Selects all elements with a specific class (e.g., `.my-class`).
- ID selector: Selects the element with a specific ID (e.g., `#my-id`).

### Declaration Block

The declaration block contains one or more declarations separated by semicolons. Each declaration consists of a property and a value, separated by a colon.

```css
selector {
  property: value;
  property: value;
}
```

## Adding CSS to HTML

There are three ways to add CSS to an HTML document:

1. **Inline CSS**: CSS is added directly to the HTML element using the `style` attribute.

```html
<h1 style="color: blue; font-size: 24px;">Hello, World!</h1>
```

2. **Internal CSS**: CSS is added within the `<style>` element in the `<head>` section of the HTML document.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      color: blue;
      font-size: 24px;
    }
  </style>
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>
```

3. **External CSS**: CSS is written in a separate file with a `.css` extension and linked to the HTML document using the `<link>` element in the `<head>` section.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>
```

```css
/* styles.css */
h1 {
  color: blue;
  font-size: 24px;
}
```

While all three methods are valid, using an external CSS file is the recommended approach as it separates the content (HTML) from the presentation (CSS), making the code easier to maintain and update.

This covers the basics of CSS. As you continue learning, you'll discover more advanced concepts like selectors, box model, layout, and responsive design.


> "The problem with self-esteem- whether it is high or low--is that every single day we put ourselves on trial." _Tim Keller_