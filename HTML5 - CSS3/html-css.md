# HTML5

## Definition and basic structure

With HTML we define the meaning and structure of the web content and besides text our pages need images, videos and various other formats and for this we have HTML elements.

An HTML element consists of the opening tag and its attributes, the content and a closing tag. And later on we will see that there are elements that do not have a closing tag.

With these elements we can group content types, change font size and shape, and add different media to our web page.

And now we can see what the basic structure of an HTML file looks like.

The first line of the document should be the <!DOCTYPE html>, although it looks like an HTML element it just tells the browser that it is dealing with an HTML5 file type. The HTML elements come right below.

**<html>**

The html tag is the root of your document, all HTML elements must be inside it. And in it we tell the browser what language the document is in, through the lang attribute.

**<head>**

The head tag contains elements that will be read by the browser, such as the metadata - an example is the charset, which is the character encoding and the most common is UTF-8, the JavaScript with the script tag, the CSS through the style and link tags - we will see the difference when we talk about CSS - and the title of the page with the title tag.

**<body>**

And inside the body tag we put all the content visible to the user: text, images, videos.

Translated with www.DeepL.com/Translator (free version)

## **Semantics**

For many years the default element in HTML was the div, we built all our content based on it, and thus was born the soup of divs.

But in 2014 the fifth version of HTML came out, and with it came several important changes, such as performance and accessibility, but in this introductory course we will focus on semantics.

Semantics allows us to describe our content more precisely, now a block of text is not just a div, it is now an article and has more meaning that way. And we have several elements to resignify divs:

**<section>**

Represents a generic content section when there is no more specific element for it.

**<header>**

Is the header of the page or a section of the page and usually contains logos, menus, search fields.

**<article>**

Represents an independent and more relevant content within a page, such as a blog post, a news item in a sidebar or a comment block. An article can contain other elements, such as a header, headers, paragraphs, and images.

**<aside>**

This is a section that encompasses content related to the main content, such as related articles, author bios, and advertising. They are usually represented as sidebars.

**<footer>**

This element represents the footer of the content or part of it, as it is accepted within various elements, such as article and section and even the body. Examples of content in a <footer> are author information and related *links*.

## **Text and links**

The creation of HTML was motivated by the need to share text and documents, and even after almost 30 years, with all the evolution of the web, this still represents a good part of the web content.

We have already talked about the h1-h6 elements before, and they are essential to visually indicate the importance and location of text sections on the page, but for larger and denser texts we use the p element.

The <p> represents a paragraph, but it doesn't only support text, we can add images, code, videos and various other types of content inside.

Another interesting and extremely necessary element on the web is the <a> - which stands for anchor, it represents a hyperlink, it is the one that connects various content and pages on the web.

The a element has several attributes, but we will focus on two, the href and the target.

The href represents the *hyperlink* to where your anchor points to, it can be a page of yours or another site, an email and even a phone number, the last two need the prefixes mailto: and tel: respectively.

The target at this point will serve to help us open our links in another browser tab using the _blank value.

## **Images**

The web is also made of images and to represent them we have the <img> element, it is one of those elements without a closing tag.

The img element is very simple, containing only 2 attributes of its own, src and alt.

The src is mandatory and holds the path to the image you want to show on the page.

The alt is not required but is highly recommended for improving accessibility, it shows the description of the image in case it does not load and screen readers use this attribute to describe the image so the user knows what it means.

## **Lists**

The last elements we will see in this module are those related to lists: <ul>, <ol> and <li>.

Lists are used to group a collection of items, such as a list of ingredients or, as will be the case here, a list with contacts.

The ul element creates an unordered list, where the order of elements is not important, and is represented with dots, circles or squares.

The <ol> is for creating ordered lists, in these the order matters, so they are represented with numbers, Roman numerals or letters.

And the li element is an item within one of these lists. A <li> can contain various types of content, such as paragraphs, images, and even other lists.


# **CSS 3**

## **Definition and selectors**

After the creation of HTML the need to format pages became evident, so in 1996 the style language we know as CSS was created.

The syntax is quite simple and can be explained with the phrase "you create style rules for elements or groups of elements".

Let's use an HTML element we saw earlier, the anchor <a>, to exemplify.

A CSS rule is represented by a selector or a group of selectors, in our case it's the <a>, then within a pair of braces we add declarations, in the example above we are changing the color and font size of this anchor, the declarations are made up of a property and a value.

Notice that we can put multiple selectors in a rule separated by commas.

And there is one last detail in this example: the pseudo-class. HTML elements suffer changes caused by user interaction, such as moving the mouse over or clicking on the element.

The *a:hover* in the example means that the anchor will also look like this when the user hovers over a *hyperlink*.

## **ID x Class**

In the previous example we created a rule that changes one HTML element directly, but this means that all <a> elements will look like that, and usually we have more complex sites that need several different rules for the same elements.

To make it more tangible let's take a look back at the site we started making last module, it had several header elements, but we don't want the main header to have the same formatting as the header of a post, that's where IDs and Classes come in.

The selector we saw in the first example is a type selector, because it represents an HTML element, and with IDs and Classes we can represent any type of element but there are some differences between them:

ID: is represented by the # symbol (hash) followed by a name for that ID.

Class: the class is represented in a similar way to the ID, but is preceded by a dot instead of the hash.

And the most important difference between them is the way they must be used: the ID can only be used once in an HTML page while the class has no restrictions.

### **Padding and Margin**

Previously we have used *padding* and *margin* in the most basic way, with just one value, but they are more powerful than that. If we want to assign different sizes to each side of the *box* we can, and we will look at three ways to do this.

The first is by putting a value for the top and bottom and then for the left and right sides.

The value of 10 *pixels* refers to the Y-axis, or top and bottom parts, and the 5 *pixels* refer to the left and right sides.

The second way is to give values to each side of the *box*.

So we start at the top with 15 pixels, move to the right side with 10 pixels, then to the bottom with 5 pixels and finally to the left side with 0, and always in that order.

A good tip is also that when the value is 0 we don't need to put the unit.

The third way is with the specific properties for each side, until now we have seen shortcuts to these properties.

This option is most used when we have the same value for 3 sides, and the fourth side needs to have a different value, so we use padding with only one value and one of these options to represent the different side.

### **Background**

The *background* property is also a shortcut for several properties, but this you can absorb little by little, and a good place to read is the MDN documentation.

For now we will only see how to change the background color.

And here we have 3 ways to set a background color, and there are still others.

The first is by the color name in English, the second is by the hexadecimal code, and the third is just using the shortcut *background*.

### **Border**

We have seen that the *border* property can have 3 values: the width, the color and the style, but there are some peculiarities in this.

The width can be used with various units, such as px, in and mm. The color can be assigned by name or by a hexadecimal code, as we did with *background*, and the style is represented by keywords, let's take a look at some of them:
**Solid: shows a simple, straight edge;

**dotted**: these are little balls with a small gap between them;

**dashed**: forms a dashed line.

And since I showed you this code we have to talk about how to separate the styling of the sides of a border.

And if you don't want to use the *border* property there are specific properties for each aspect of a border, they are *border-width* for the width, *border-color* for the color and *border-style* for the style.

Here we have the same code as before in two different ways, the first with the shortcut *border* and the second with each specific property.

And after that we can join the sides with the aspects of a border and create an even more specific rule.

Border-radius

And the last property is the *border-radius*, which allows you to round the corners of an element. We can use several units, but the most common are pixels and percentage.

By putting just one value we change all the corners of the element, but following that same order as we saw with *padding* and *margin* - top, right, bottom and left - we can change each corner separately.

### **font-family**

With font-family we can change the font of our text, either an internet font or one that is installed on our computer, but we will stick to web safe fonts.

These fonts are called web safe fonts because they are found on almost every system and can be used without worry.

### **font-size**

The font-size helps us to change the size of text, there are a few units of measurement for it but for now pixels are enough for us.

### **font-style**

We use font-style to italicize text, most of the time you will just use the value *italic* for it, but if you need to italicize text you can use the value *normal*.