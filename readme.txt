1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAl
**?

getElementById-->when we want to get an element by setting an id and later we can style and/or add functionalities.
getElementsByClassName-->when we want to get one or more element by setting an classname and later we can style and/or add functionalities.


2. How do you **create and insert a new element into the DOM**?
 create-->document.createElement('elementName')
 insert-->prepend(),insertBefore()
3. What is **Event Bubbling** and how does it work?
  starts from target element and goes all the ways up of DOM tree.
  for example: if button a target element and it goes to button div,
  body, html and the document.
4. What is **Event Delegation** in JavaScript? Why is it useful?
  Instead of attaching eventListener() to multiple elements, attaching to the parent is Event Delegation.

  Good for performance,memory efficiency, concise code etc.
5. What is the difference between **preventDefault() and stopPropagation()** methods?
  preventDefault()--> By default the page reloads which can be prevented by it.
  stopPropagation()--> Stop bubbling i.e. stop going going up of the DOM tree when it is called.