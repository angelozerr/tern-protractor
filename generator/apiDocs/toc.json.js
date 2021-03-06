var api = {
  "version": "3.0.0",
  "items": [
  {
    "alias": "element.all(locator)",
    "description": "<p>ElementArrayFinder is used for operations on an array of elements (as opposed\nto a single element).</p>\n<p>The ElementArrayFinder is used to set up a chain of conditions that identify\nan array of elements. In particular, you can call all(locator) and\nfilter(filterFn) to return a new ElementArrayFinder modified by the\nconditions, and you can call get(index) to return a single ElementFinder at\nposition &#39;index&#39;.</p>\n<p>Similar to jquery, ElementArrayFinder will search all branches of the DOM\nto find the elements that satisfy the conditions (i.e. all, filter, get).\nHowever, an ElementArrayFinder will not actually retrieve the elements until\nan action is called, which means it can be set up in helper files (i.e.\npage objects) before the page is available, and reused as the page changes.</p>\n<p>You can treat an ElementArrayFinder as an array of WebElements for most\npurposes, in particular, you may perform actions (i.e. click, getText) on\nthem as you would an array of WebElements. The action will apply to\nevery element identified by the ElementArrayFinder. ElementArrayFinder\nextends Promise, and once an action is performed on an ElementArrayFinder,\nthe latest result can be accessed using then, and will be returned as an\narray of the results; the array has length equal to the length of the\nelements found by the ElementArrayFinder and each result represents the\nresult of performing the action on the element. Unlike a WebElement, an\nElementArrayFinder will wait for the angular app to settle before\nperforming finds or actions.</p>\n",
    "example": "element.all(by.css('.items li')).then(function(items) {\n  expect(items.length).toBe(3);\n  expect(items[0].getText()).toBe('First');\n});",
    "fileName": "element",
    "htmlView": "&lt;ul class=&quot;items&quot;&gt;\n  &lt;li&gt;First&lt;/li&gt;\n  &lt;li&gt;Second&lt;/li&gt;\n  &lt;li&gt;Third&lt;/li&gt;\n&lt;/ul&gt;",
    "name": "ElementArrayFinder",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "A protractor instance.",
        "startingLine": 52,
        "typeExpression": "Protractor",
        "type": {
          "type": "NameExpression",
          "name": "Protractor"
        },
        "typeList": [
          "Protractor"
        ],
        "name": "ptor",
        "paramString": "[Protractor](Protractor)"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "A function that returns a list of the underlying Web Elements.",
        "startingLine": 53,
        "typeExpression": "function(): Array.<webdriver.WebElement>",
        "type": {
          "type": "FunctionType",
          "params": [],
          "result": {
            "type": "TypeApplication",
            "expression": {
              "type": "NameExpression",
              "name": "Array"
            },
            "applications": [
              {
                "type": "NameExpression",
                "name": "webdriver.WebElement"
              }
            ]
          }
        },
        "typeList": [
          "function(): Array.<webdriver.WebElement>"
        ],
        "name": "getWebElements",
        "paramString": "function(): Array.&lt;webdriver.WebElement&gt;"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The most relevant locator. It is only used for error reporting and ElementArrayFinder.locator.",
        "startingLine": 55,
        "typeExpression": "webdriver.Locator",
        "type": {
          "type": "NameExpression",
          "name": "webdriver.Locator"
        },
        "typeList": [
          "webdriver.Locator"
        ],
        "name": "locator",
        "paramString": "[webdriver.Locator](webdriver.Locator)"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "An array of promises which will be retrieved with then. Resolves to the latest action result, or null if no action has been called.",
        "startingLine": 57,
        "typeExpression": "Array.<webdriver.promise.Promise>",
        "type": {
          "type": "TypeApplication",
          "expression": {
            "type": "NameExpression",
            "name": "Array"
          },
          "applications": [
            {
              "type": "NameExpression",
              "name": "webdriver.promise.Promise"
            }
          ]
        },
        "typeList": [
          "Array.<webdriver.promise.Promise>"
        ],
        "name": "opt_actionResults",
        "paramString": "Array.&lt;webdriver.promise.Promise&gt;"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "",
      "startingLine": 60,
      "typeExpression": "ElementArrayFinder",
      "type": {
        "type": "NameExpression",
        "name": "ElementArrayFinder"
      },
      "typeList": [
        "ElementArrayFinder"
      ]
    },
    "returnString": "[ElementArrayFinder](ElementArrayFinder)",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/element.js#L10",
    "view": "<ul class=\"items\">\n  <li>First</li>\n  <li>Second</li>\n  <li>Third</li>\n</ul>"
  },
  {
    "description": "<p>Create a shallow copy of ElementArrayFinder.</p>\n",
    "fileName": "element",
    "name": "ElementArrayFinder.prototype.clone",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A shallow copy of this.",
      "startingLine": 84,
      "typeExpression": "!ElementArrayFinder",
      "type": {
        "type": "NameExpression",
        "name": "ElementArrayFinder",
        "nullable": false
      },
      "typeList": [
        "ElementArrayFinder"
      ]
    },
    "returnString": "&#33;[ElementArrayFinder](ElementArrayFinder)",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/element.js#L82"
  },
  {
    "alias": "element.all(locator).all(locator)",
    "description": "<p>Calls to ElementArrayFinder may be chained to find an array of elements\nusing the current elements in this ElementArrayFinder as the starting point.\nThis function returns a new ElementArrayFinder which would contain the\nchildren elements found (and could also be empty).</p>\n",
    "example": "var foo = element.all(by.css('.parent')).all(by.css('.foo'))\nexpect(foo.getText()).toEqual(['1a', '2a'])\nvar baz = element.all(by.css('.parent')).all(by.css('.baz'))\nexpect(baz.getText()).toEqual(['1b'])\nvar nonexistent = element.all(by.css('.parent')).all(by.css('.NONEXISTENT'))\nexpect(nonexistent.getText()).toEqual([''])",
    "fileName": "element",
    "htmlView": "&lt;div id='id1' class=&quot;parent&quot;&gt;\n  &lt;ul&gt;\n    &lt;li class=&quot;foo&quot;&gt;1a&lt;/li&gt;\n    &lt;li class=&quot;baz&quot;&gt;1b&lt;/li&gt;\n  &lt;/ul&gt;\n&lt;/div&gt;\n&lt;div id='id2' class=&quot;parent&quot;&gt;\n  &lt;ul&gt;\n    &lt;li class=&quot;foo&quot;&gt;2a&lt;/li&gt;\n    &lt;li class=&quot;bar&quot;&gt;2b&lt;/li&gt;\n  &lt;/ul&gt;\n&lt;/div&gt;",
    "name": "ElementArrayFinder.prototype.all",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "",
        "startingLine": 123,
        "typeExpression": "webdriver.Locator",
        "type": {
          "type": "NameExpression",
          "name": "webdriver.Locator"
        },
        "typeList": [
          "webdriver.Locator"
        ],
        "name": "subLocator",
        "paramString": "[webdriver.Locator](webdriver.Locator)"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "",
      "startingLine": 124,
      "typeExpression": "ElementArrayFinder",
      "type": {
        "type": "NameExpression",
        "name": "ElementArrayFinder"
      },
      "typeList": [
        "ElementArrayFinder"
      ]
    },
    "returnString": "[ElementArrayFinder](ElementArrayFinder)",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/element.js#L95",
    "view": "<div id='id1' class=\"parent\">\n  <ul>\n    <li class=\"foo\">1a</li>\n    <li class=\"baz\">1b</li>\n  </ul>\n</div>\n<div id='id2' class=\"parent\">\n  <ul>\n    <li class=\"foo\">2a</li>\n    <li class=\"bar\">2b</li>\n  </ul>\n</div>"
  },
  {
    "alias": "element.all(locator).filter(filterFn)",
    "description": "<p>Apply a filter function to each element within the ElementArrayFinder. Returns\na new ElementArrayFinder with all elements that pass the filter function. The\nfilter function receives the ElementFinder as the first argument\nand the index as a second arg.\nThis does not actually retrieve the underlying list of elements, so it can\nbe used in page objects.</p>\n",
    "example": "element.all(by.css('.items li')).filter(function(elem, index) {\n  return elem.getText().then(function(text) {\n    return text === 'Third';\n  });\n}).then(function(filteredElements) {\n  filteredElements[0].click();\n});",
    "fileName": "element",
    "htmlView": "&lt;ul class=&quot;items&quot;&gt;\n  &lt;li class=&quot;one&quot;&gt;First&lt;/li&gt;\n  &lt;li class=&quot;two&quot;&gt;Second&lt;/li&gt;\n  &lt;li class=&quot;three&quot;&gt;Third&lt;/li&gt;\n&lt;/ul&gt;",
    "name": "ElementArrayFinder.prototype.filter",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "Filter function that will test if an element should be returned. filterFn can either return a boolean or a promise that resolves to a boolean.",
        "startingLine": 187,
        "typeExpression": "function(ElementFinder, number): webdriver.WebElement.Promise",
        "type": {
          "type": "FunctionType",
          "params": [
            {
              "type": "NameExpression",
              "name": "ElementFinder"
            },
            {
              "type": "NameExpression",
              "name": "number"
            }
          ],
          "result": {
            "type": "NameExpression",
            "name": "webdriver.WebElement.Promise"
          }
        },
        "typeList": [
          "function(ElementFinder, number): webdriver.WebElement.Promise"
        ],
        "name": "filterFn",
        "paramString": "function([ElementFinder](ElementFinder), number): webdriver.WebElement.Promise"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A ElementArrayFinder that represents an array of element that satisfy the filter function.",
      "startingLine": 190,
      "typeExpression": "!ElementArrayFinder",
      "type": {
        "type": "NameExpression",
        "name": "ElementArrayFinder",
        "nullable": false
      },
      "typeList": [
        "ElementArrayFinder"
      ]
    },
    "returnString": "&#33;[ElementArrayFinder](ElementArrayFinder)",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/element.js#L163",
    "view": "<ul class=\"items\">\n  <li class=\"one\">First</li>\n  <li class=\"two\">Second</li>\n  <li class=\"three\">Third</li>\n</ul>"
  },
  {
    "alias": "element.all(locator).get(index)",
    "description": "<p>Get an element within the ElementArrayFinder by index. The index starts at 0.\nNegative indices are wrapped (i.e. -i means ith element from last)\nThis does not actually retrieve the underlying element.</p>\n",
    "example": "var list = element.all(by.css('.items li'));\nexpect(list.get(0).getText()).toBe('First');\nexpect(list.get(1).getText()).toBe('Second');",
    "fileName": "element",
    "htmlView": "&lt;ul class=&quot;items&quot;&gt;\n  &lt;li&gt;First&lt;/li&gt;\n  &lt;li&gt;Second&lt;/li&gt;\n  &lt;li&gt;Third&lt;/li&gt;\n&lt;/ul&gt;",
    "name": "ElementArrayFinder.prototype.get",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "Element index.",
        "startingLine": 231,
        "typeExpression": "number|webdriver.promise.Promise",
        "type": {
          "type": "TypeUnion",
          "elements": [
            {
              "type": "NameExpression",
              "name": "number"
            },
            {
              "type": "NameExpression",
              "name": "webdriver.promise.Promise"
            }
          ]
        },
        "typeList": [
          "number",
          "webdriver.promise.Promise"
        ],
        "name": "index",
        "paramString": "number&#124;webdriver.promise.Promise"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "finder representing element at the given index.",
      "startingLine": 232,
      "typeExpression": "ElementFinder",
      "type": {
        "type": "NameExpression",
        "name": "ElementFinder"
      },
      "typeList": [
        "ElementFinder"
      ]
    },
    "returnString": "[ElementFinder](ElementFinder)",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/element.js#L214",
    "view": "<ul class=\"items\">\n  <li>First</li>\n  <li>Second</li>\n  <li>Third</li>\n</ul>"
  },
  {
    "alias": "element.all(locator).first()",
    "description": "<p>Get the first matching element for the ElementArrayFinder. This does not\nactually retrieve the underlying element.</p>\n",
    "example": "var first = element.all(by.css('.items li')).first();\nexpect(first.getText()).toBe('First');",
    "fileName": "element",
    "htmlView": "&lt;ul class=&quot;items&quot;&gt;\n  &lt;li&gt;First&lt;/li&gt;\n  &lt;li&gt;Second&lt;/li&gt;\n  &lt;li&gt;Third&lt;/li&gt;\n&lt;/ul&gt;",
    "name": "ElementArrayFinder.prototype.first",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "finder representing the first matching element",
      "startingLine": 274,
      "typeExpression": "ElementFinder",
      "type": {
        "type": "NameExpression",
        "name": "ElementFinder"
      },
      "typeList": [
        "ElementFinder"
      ]
    },
    "returnString": "[ElementFinder](ElementFinder)",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/element.js#L259",
    "view": "<ul class=\"items\">\n  <li>First</li>\n  <li>Second</li>\n  <li>Third</li>\n</ul>"
  },
  {
    "alias": "element.all(locator).last()",
    "description": "<p>Get the last matching element for the ElementArrayFinder. This does not\nactually retrieve the underlying element.</p>\n",
    "example": "var last = element.all(by.css('.items li')).last();\nexpect(last.getText()).toBe('Third');",
    "fileName": "element",
    "htmlView": "&lt;ul class=&quot;items&quot;&gt;\n  &lt;li&gt;First&lt;/li&gt;\n  &lt;li&gt;Second&lt;/li&gt;\n  &lt;li&gt;Third&lt;/li&gt;\n&lt;/ul&gt;",
    "name": "ElementArrayFinder.prototype.last",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "finder representing the last matching element",
      "startingLine": 296,
      "typeExpression": "ElementFinder",
      "type": {
        "type": "NameExpression",
        "name": "ElementFinder"
      },
      "typeList": [
        "ElementFinder"
      ]
    },
    "returnString": "[ElementFinder](ElementFinder)",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/element.js#L281",
    "view": "<ul class=\"items\">\n  <li>First</li>\n  <li>Second</li>\n  <li>Third</li>\n</ul>"
  },
  {
    "alias": "element.all(locator).count()",
    "description": "<p>Count the number of elements represented by the ElementArrayFinder.</p>\n",
    "example": "var list = element.all(by.css('.items li'));\nexpect(list.count()).toBe(3);",
    "fileName": "element",
    "htmlView": "&lt;ul class=&quot;items&quot;&gt;\n  &lt;li&gt;First&lt;/li&gt;\n  &lt;li&gt;Second&lt;/li&gt;\n  &lt;li&gt;Third&lt;/li&gt;\n&lt;/ul&gt;",
    "name": "ElementArrayFinder.prototype.count",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise which resolves to the number of elements matching the locator.",
      "startingLine": 337,
      "typeExpression": "!webdriver.promise.Promise",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.promise.Promise",
        "nullable": false
      },
      "typeList": [
        "webdriver.promise.Promise"
      ]
    },
    "returnString": "!webdriver.promise.Promise",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/element.js#L323",
    "view": "<ul class=\"items\">\n  <li>First</li>\n  <li>Second</li>\n  <li>Third</li>\n</ul>"
  },
  {
    "description": "<p>Returns the most relevant locator.</p>\n",
    "example": "// returns by.css('#ID1')\n$('#ID1').locator()\n\n// returns by.css('#ID2')\n$('#ID1').$('#ID2').locator()\n\n// returns by.css('#ID1')\n$$('#ID1').filter(filterFn).get(0).click().locator()",
    "fileName": "element",
    "name": "ElementArrayFinder.prototype.locator",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "",
      "startingLine": 365,
      "typeExpression": "webdriver.Locator",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.Locator"
      },
      "typeList": [
        "webdriver.Locator"
      ]
    },
    "returnString": "[webdriver.Locator](webdriver.Locator)",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/element.js#L353"
  },
  {
    "alias": "element.all(locator).each(eachFunction)",
    "description": "<p>Calls the input function on each ElementFinder represented by the ElementArrayFinder.</p>\n",
    "example": "element.all(by.css('.items li')).each(function(element, index) {\n  // Will print 0 First, 1 Second, 2 Third.\n  element.getText().then(function (text) {\n    console.log(index, text);\n  });\n});",
    "fileName": "element",
    "htmlView": "&lt;ul class=&quot;items&quot;&gt;\n  &lt;li&gt;First&lt;/li&gt;\n  &lt;li&gt;Second&lt;/li&gt;\n  &lt;li&gt;Third&lt;/li&gt;\n&lt;/ul&gt;",
    "name": "ElementArrayFinder.prototype.each",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "Input function",
        "startingLine": 457,
        "typeExpression": "function(ElementFinder)",
        "type": {
          "type": "FunctionType",
          "params": [
            {
              "type": "NameExpression",
              "name": "ElementFinder"
            }
          ]
        },
        "typeList": [
          "function(ElementFinder)"
        ],
        "name": "fn",
        "paramString": "function([ElementFinder](ElementFinder))"
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/element.js#L439",
    "view": "<ul class=\"items\">\n  <li>First</li>\n  <li>Second</li>\n  <li>Third</li>\n</ul>"
  },
  {
    "alias": "element.all(locator).map(mapFunction)",
    "description": "<p>Apply a map function to each element within the ElementArrayFinder. The\ncallback receives the ElementFinder as the first argument and the index as\na second arg.</p>\n",
    "example": "var items = element.all(by.css('.items li')).map(function(elm, index) {\n  return {\n    index: index,\n    text: elm.getText(),\n    class: elm.getAttribute('class')\n  };\n});\nexpect(items).toEqual([\n  {index: 0, text: 'First', class: 'one'},\n  {index: 1, text: 'Second', class: 'two'},\n  {index: 2, text: 'Third', class: 'three'}\n]);",
    "fileName": "element",
    "htmlView": "&lt;ul class=&quot;items&quot;&gt;\n  &lt;li class=&quot;one&quot;&gt;First&lt;/li&gt;\n  &lt;li class=&quot;two&quot;&gt;Second&lt;/li&gt;\n  &lt;li class=&quot;three&quot;&gt;Third&lt;/li&gt;\n&lt;/ul&gt;",
    "name": "ElementArrayFinder.prototype.map",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "Map function that will be applied to each element.",
        "startingLine": 492,
        "typeExpression": "function(ElementFinder, number)",
        "type": {
          "type": "FunctionType",
          "params": [
            {
              "type": "NameExpression",
              "name": "ElementFinder"
            },
            {
              "type": "NameExpression",
              "name": "number"
            }
          ]
        },
        "typeList": [
          "function(ElementFinder, number)"
        ],
        "name": "mapFn",
        "paramString": "function([ElementFinder](ElementFinder), number)"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that resolves to an array of values returned by the map function.",
      "startingLine": 494,
      "typeExpression": "!webdriver.promise.Promise",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.promise.Promise",
        "nullable": false
      },
      "typeList": [
        "webdriver.promise.Promise"
      ]
    },
    "returnString": "!webdriver.promise.Promise",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/element.js#L466",
    "view": "<ul class=\"items\">\n  <li class=\"one\">First</li>\n  <li class=\"two\">Second</li>\n  <li class=\"three\">Third</li>\n</ul>"
  },
  {
    "alias": "element.all(locator).reduce(reduceFn)",
    "description": "<p>Apply a reduce function against an accumulator and every element found\nusing the locator (from left-to-right). The reduce function has to reduce\nevery element into a single value (the accumulator). Returns promise of\nthe accumulator. The reduce function receives the accumulator, current\nElementFinder, the index, and the entire array of ElementFinders,\nrespectively.</p>\n",
    "example": "var value = element.all(by.css('.items li')).reduce(function(acc, elem) {\n  return elem.getText().then(function(text) {\n    return acc + text + ' ';\n  });\n}, '');\n\nexpect(value).toEqual('First Second Third ');",
    "fileName": "element",
    "htmlView": "&lt;ul class=&quot;items&quot;&gt;\n  &lt;li class=&quot;one&quot;&gt;First&lt;/li&gt;\n  &lt;li class=&quot;two&quot;&gt;Second&lt;/li&gt;\n  &lt;li class=&quot;three&quot;&gt;Third&lt;/li&gt;\n&lt;/ul&gt;",
    "name": "ElementArrayFinder.prototype.reduce",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "Reduce function that reduces every element into a single value.",
        "startingLine": 533,
        "typeExpression": "function(number, ElementFinder, number, Array.<ElementFinder>)",
        "type": {
          "type": "FunctionType",
          "params": [
            {
              "type": "NameExpression",
              "name": "number"
            },
            {
              "type": "NameExpression",
              "name": "ElementFinder"
            },
            {
              "type": "NameExpression",
              "name": "number"
            },
            {
              "type": "TypeApplication",
              "expression": {
                "type": "NameExpression",
                "name": "Array"
              },
              "applications": [
                {
                  "type": "NameExpression",
                  "name": "ElementFinder"
                }
              ]
            }
          ]
        },
        "typeList": [
          "function(number, ElementFinder, number, Array.<ElementFinder>)"
        ],
        "name": "reduceFn",
        "paramString": "function(number, [ElementFinder](ElementFinder), number, Array.&lt;ElementFinder&gt;)"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "Initial value of the accumulator.",
        "startingLine": 535,
        "typeExpression": "*",
        "type": {
          "type": "AllLiteral"
        },
        "typeList": [
          "*"
        ],
        "name": "initialValue",
        "paramString": "*"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that resolves to the final value of the accumulator.",
      "startingLine": 536,
      "typeExpression": "!webdriver.promise.Promise",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.promise.Promise",
        "nullable": false
      },
      "typeList": [
        "webdriver.promise.Promise"
      ]
    },
    "returnString": "!webdriver.promise.Promise",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/element.js#L509",
    "view": "<ul class=\"items\">\n  <li class=\"one\">First</li>\n  <li class=\"two\">Second</li>\n  <li class=\"three\">Third</li>\n</ul>"
  },
  {
    "description": "<p>Evaluates the input as if it were on the scope of the current underlying\nelements.</p>\n",
    "example": "var value = element(by.id('foo')).evaluate('variableInScope');",
    "fileName": "element",
    "htmlView": "&lt;span id=&quot;foo&quot;&gt;{{variableInScope}}&lt;/span&gt;",
    "name": "ElementArrayFinder.prototype.evaluate",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "",
        "startingLine": 560,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "expression",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "which resolves to the evaluated expression for each underlying element. The result will be resolved as in <code ng-non-bindable>webdriver.WebDriver.executeScript</code>. In summary - primitives will be resolved as is, functions will be converted to string, and elements will be returned as a WebElement.",
      "startingLine": 562,
      "typeExpression": "ElementArrayFinder",
      "type": {
        "type": "NameExpression",
        "name": "ElementArrayFinder"
      },
      "typeList": [
        "ElementArrayFinder"
      ]
    },
    "returnString": "[ElementArrayFinder](ElementArrayFinder)",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/element.js#L551",
    "view": "<span id=\"foo\">{{variableInScope}}</span>"
  },
  {
    "description": "<p>Determine if animation is allowed on the current underlying elements.</p>\n",
    "example": "// Turns off ng-animate animations for all elements in the <body>\nelement(by.css('body')).allowAnimations(false);",
    "fileName": "element",
    "name": "ElementArrayFinder.prototype.allowAnimations",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "",
        "startingLine": 579,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "value",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "which resolves to whether animation is allowed.",
      "startingLine": 585,
      "typeExpression": "ElementArrayFinder",
      "type": {
        "type": "NameExpression",
        "name": "ElementArrayFinder"
      },
      "typeList": [
        "ElementArrayFinder"
      ]
    },
    "returnString": "[ElementArrayFinder](ElementArrayFinder)",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/element.js#L578"
  },
  {
    "alias": "element(locator)",
    "description": "<p>The ElementFinder simply represents a single element of an\nElementArrayFinder (and is more like a convenience object). As a result,\nanything that can be done with an ElementFinder, can also be done using\nan ElementArrayFinder.</p>\n<p>The ElementFinder can be treated as a WebElement for most purposes, in\nparticular, you may perform actions (i.e. click, getText) on them as you\nwould a WebElement. Once an action is performed on an ElementFinder, the\nlatest result from the chain can be accessed using the then method.\nUnlike a WebElement, an ElementFinder will wait for angular to settle before\nperforming finds or actions.</p>\n<p>ElementFinder can be used to build a chain of locators that is used to find\nan element. An ElementFinder does not actually attempt to find the element\nuntil an action is called, which means they can be set up in helper files\nbefore the page is available.</p>\n",
    "example": "// Find element with {{scopeVar}} syntax.\nelement(by.binding('person.name')).getText().then(function(name) {\n  expect(name).toBe('Foo');\n});\n\n// Find element with ng-bind=\"scopeVar\" syntax.\nexpect(element(by.binding('person.email')).getText()).toBe('foo@bar.com');\n\n// Find by model.\nvar input = element(by.model('person.name'));\ninput.sendKeys('123');\nexpect(input.getAttribute('value')).toBe('Foo123');",
    "extends": "{webdriver.WebElement}",
    "fileName": "element",
    "htmlView": "&lt;span&gt;{{person.name}}&lt;/span&gt;\n&lt;span ng-bind=&quot;person.email&quot;&gt;&lt;/span&gt;\n&lt;input type=&quot;text&quot; ng-model=&quot;person.name&quot;/&gt;",
    "name": "ElementFinder",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "",
        "startingLine": 635,
        "typeExpression": "Protractor",
        "type": {
          "type": "NameExpression",
          "name": "Protractor"
        },
        "typeList": [
          "Protractor"
        ],
        "name": "ptor",
        "paramString": "[Protractor](Protractor)"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The ElementArrayFinder that this is branched from.",
        "startingLine": 636,
        "typeExpression": "ElementArrayFinder",
        "type": {
          "type": "NameExpression",
          "name": "ElementArrayFinder"
        },
        "typeList": [
          "ElementArrayFinder"
        ],
        "name": "elementArrayFinder",
        "paramString": "[ElementArrayFinder](ElementArrayFinder)"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "",
      "startingLine": 638,
      "typeExpression": "ElementFinder",
      "type": {
        "type": "NameExpression",
        "name": "ElementFinder"
      },
      "typeList": [
        "ElementFinder"
      ]
    },
    "returnString": "[ElementFinder](ElementFinder)",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/element.js#L596",
    "view": "<span>{{person.name}}</span>\n<span ng-bind=\"person.email\"></span>\n<input type=\"text\" ng-model=\"person.name\"/>"
  },
  {
    "description": "<p>Access the underlying actionResult of ElementFinder.</p>\n",
    "fileName": "element",
    "name": "ElementFinder.prototype.then",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "Function which takes the value of the underlying actionResult.",
        "startingLine": 653,
        "typeExpression": "function(webdriver.promise.Promise)",
        "type": {
          "type": "FunctionType",
          "params": [
            {
              "type": "NameExpression",
              "name": "webdriver.promise.Promise"
            }
          ]
        },
        "typeList": [
          "function(webdriver.promise.Promise)"
        ],
        "name": "fn",
        "paramString": "function(webdriver.promise.Promise)"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "Promise which contains the results of evaluating fn.",
      "startingLine": 656,
      "typeExpression": "webdriver.promise.Promise",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.promise.Promise"
      },
      "typeList": [
        "webdriver.promise.Promise"
      ]
    },
    "returnString": "webdriver.promise.Promise",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/element.js#L651"
  },
  {
    "description": "<p>Create a shallow copy of ElementFinder.</p>\n",
    "fileName": "element",
    "name": "ElementFinder.prototype.clone",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A shallow copy of this.",
      "startingLine": 717,
      "typeExpression": "!ElementFinder",
      "type": {
        "type": "NameExpression",
        "name": "ElementFinder",
        "nullable": false
      },
      "typeList": [
        "ElementFinder"
      ]
    },
    "returnString": "&#33;[ElementFinder](ElementFinder)",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/element.js#L715"
  },
  {
    "description": "See [<code ng-non-bindable>ElementArrayFinder.prototype.locator</code>](ElementArrayFinder.prototype.locator)",
    "fileName": "element",
    "name": "ElementFinder.prototype.locator",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "",
      "startingLine": 728,
      "typeExpression": "webdriver.Locator",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.Locator"
      },
      "typeList": [
        "webdriver.Locator"
      ]
    },
    "returnString": "[webdriver.Locator](webdriver.Locator)",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/element.js#L726"
  },
  {
    "alias": "element(locator).getWebElement()",
    "description": "<p>Returns the WebElement represented by this ElementFinder.\nThrows the WebDriver error if the element doesn&#39;t exist.</p>\n",
    "example": "// The following three expressions are equivalent.\nelement(by.css('.parent')).getWebElement();\nbrowser.driver.findElement(by.css('.parent'));\nbrowser.findElement(by.css('.parent'));",
    "fileName": "element",
    "htmlView": "&lt;div class=&quot;parent&quot;&gt;\n  some text\n&lt;/div&gt;",
    "name": "ElementFinder.prototype.getWebElement",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "",
      "startingLine": 750,
      "typeExpression": "webdriver.WebElement",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.WebElement"
      },
      "typeList": [
        "webdriver.WebElement"
      ]
    },
    "returnString": "[webdriver.WebElement](webdriver.WebElement)",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/element.js#L735",
    "view": "<div class=\"parent\">\n  some text\n</div>"
  },
  {
    "alias": "element(locator).all(locator)",
    "description": "<p>Calls to <code ng-non-bindable>all</code> may be chained to find an array of elements within a\nparent.</p>\n",
    "example": "var items = element(by.css('.parent')).all(by.tagName('li'))",
    "fileName": "element",
    "htmlView": "&lt;div class=&quot;parent&quot;&gt;\n  &lt;ul&gt;\n    &lt;li class=&quot;one&quot;&gt;First&lt;/li&gt;\n    &lt;li class=&quot;two&quot;&gt;Second&lt;/li&gt;\n    &lt;li class=&quot;three&quot;&gt;Third&lt;/li&gt;\n  &lt;/ul&gt;\n&lt;/div&gt;",
    "name": "ElementFinder.prototype.all",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "",
        "startingLine": 777,
        "typeExpression": "webdriver.Locator",
        "type": {
          "type": "NameExpression",
          "name": "webdriver.Locator"
        },
        "typeList": [
          "webdriver.Locator"
        ],
        "name": "subLocator",
        "paramString": "[webdriver.Locator](webdriver.Locator)"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "",
      "startingLine": 778,
      "typeExpression": "ElementArrayFinder",
      "type": {
        "type": "NameExpression",
        "name": "ElementArrayFinder"
      },
      "typeList": [
        "ElementArrayFinder"
      ]
    },
    "returnString": "[ElementArrayFinder](ElementArrayFinder)",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/element.js#L761",
    "view": "<div class=\"parent\">\n  <ul>\n    <li class=\"one\">First</li>\n    <li class=\"two\">Second</li>\n    <li class=\"three\">Third</li>\n  </ul>\n</div>"
  },
  {
    "alias": "element(locator).element(locator)",
    "description": "<p>Calls to <code ng-non-bindable>element</code> may be chained to find elements within a parent.</p>\n",
    "example": "// Chain 2 element calls.\nvar child = element(by.css('.parent')).\n    element(by.css('.child'));\nexpect(child.getText()).toBe('Child text\\n555-123-4567');\n\n// Chain 3 element calls.\nvar triple = element(by.css('.parent')).\n    element(by.css('.child')).\n    element(by.binding('person.phone'));\nexpect(triple.getText()).toBe('555-123-4567');",
    "fileName": "element",
    "htmlView": "&lt;div class=&quot;parent&quot;&gt;\n  &lt;div class=&quot;child&quot;&gt;\n    Child text\n    &lt;div&gt;{{person.phone}}&lt;/div&gt;\n  &lt;/div&gt;\n&lt;/div&gt;",
    "name": "ElementFinder.prototype.element",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "",
        "startingLine": 808,
        "typeExpression": "webdriver.Locator",
        "type": {
          "type": "NameExpression",
          "name": "webdriver.Locator"
        },
        "typeList": [
          "webdriver.Locator"
        ],
        "name": "subLocator",
        "paramString": "[webdriver.Locator](webdriver.Locator)"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "",
      "startingLine": 809,
      "typeExpression": "ElementFinder",
      "type": {
        "type": "NameExpression",
        "name": "ElementFinder"
      },
      "typeList": [
        "ElementFinder"
      ]
    },
    "returnString": "[ElementFinder](ElementFinder)",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/element.js#L785",
    "view": "<div class=\"parent\">\n  <div class=\"child\">\n    Child text\n    <div>{{person.phone}}</div>\n  </div>\n</div>"
  },
  {
    "alias": "element(locator).all(selector)",
    "description": "<p>Calls to <code ng-non-bindable>$$</code> may be chained to find an array of elements within a\nparent.</p>\n",
    "example": "var items = element(by.css('.parent')).$$('li')",
    "fileName": "element",
    "htmlView": "&lt;div class=&quot;parent&quot;&gt;\n  &lt;ul&gt;\n    &lt;li class=&quot;one&quot;&gt;First&lt;/li&gt;\n    &lt;li class=&quot;two&quot;&gt;Second&lt;/li&gt;\n    &lt;li class=&quot;three&quot;&gt;Third&lt;/li&gt;\n  &lt;/ul&gt;\n&lt;/div&gt;",
    "name": "ElementFinder.prototype.$$",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "a css selector",
        "startingLine": 832,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "selector",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "",
      "startingLine": 833,
      "typeExpression": "ElementArrayFinder",
      "type": {
        "type": "NameExpression",
        "name": "ElementArrayFinder"
      },
      "typeList": [
        "ElementArrayFinder"
      ]
    },
    "returnString": "[ElementArrayFinder](ElementArrayFinder)",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/element.js#L816",
    "view": "<div class=\"parent\">\n  <ul>\n    <li class=\"one\">First</li>\n    <li class=\"two\">Second</li>\n    <li class=\"three\">Third</li>\n  </ul>\n</div>"
  },
  {
    "alias": "element(locator).$(selector)",
    "description": "<p>Calls to <code ng-non-bindable>$</code> may be chained to find elements within a parent.</p>\n",
    "example": "// Chain 2 element calls.\nvar child = element(by.css('.parent')).\n    $('.child');\nexpect(child.getText()).toBe('Child text\\n555-123-4567');\n\n// Chain 3 element calls.\nvar triple = element(by.css('.parent')).\n    $('.child').\n    element(by.binding('person.phone'));\nexpect(triple.getText()).toBe('555-123-4567');",
    "fileName": "element",
    "htmlView": "&lt;div class=&quot;parent&quot;&gt;\n  &lt;div class=&quot;child&quot;&gt;\n    Child text\n    &lt;div&gt;{{person.phone}}&lt;/div&gt;\n  &lt;/div&gt;\n&lt;/div&gt;",
    "name": "ElementFinder.prototype.$",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "A css selector",
        "startingLine": 863,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "selector",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "",
      "startingLine": 864,
      "typeExpression": "ElementFinder",
      "type": {
        "type": "NameExpression",
        "name": "ElementFinder"
      },
      "typeList": [
        "ElementFinder"
      ]
    },
    "returnString": "[ElementFinder](ElementFinder)",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/element.js#L840",
    "view": "<div class=\"parent\">\n  <div class=\"child\">\n    Child text\n    <div>{{person.phone}}</div>\n  </div>\n</div>"
  },
  {
    "description": "<p>Determine whether the element is present on the page.</p>\n",
    "example": "// Element exists.\nexpect(element(by.binding('person.name')).isPresent()).toBe(true);\n\n// Element not present.\nexpect(element(by.binding('notPresent')).isPresent()).toBe(false);",
    "fileName": "element",
    "htmlView": "&lt;span&gt;{{person.name}}&lt;/span&gt;",
    "name": "ElementFinder.prototype.isPresent",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "which resolves to whether the element is present on the page.",
      "startingLine": 883,
      "typeExpression": "ElementFinder",
      "type": {
        "type": "NameExpression",
        "name": "ElementFinder"
      },
      "typeList": [
        "ElementFinder"
      ]
    },
    "returnString": "[ElementFinder](ElementFinder)",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/element.js#L871",
    "view": "<span>{{person.name}}</span>"
  },
  {
    "description": "<p>Same as ElementFinder.isPresent(), except this checks whether the element\nidentified by the subLocator is present, rather than the current element\nfinder. i.e. <code>element(by.css(&#39;#abc&#39;)).element(by.css(&#39;#def&#39;)).isPresent()</code> is\nidentical to <code>element(by.css(&#39;#abc&#39;)).isElementPresent(by.css(&#39;#def&#39;))</code>.</p>\n<br />See <code ng-non-bindable>ElementFinder.isPresent</code>",
    "fileName": "element",
    "name": "ElementFinder.prototype.isElementPresent",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "Locator for element to look for.",
        "startingLine": 917,
        "typeExpression": "webdriver.Locator",
        "type": {
          "type": "NameExpression",
          "name": "webdriver.Locator"
        },
        "typeList": [
          "webdriver.Locator"
        ],
        "name": "subLocator",
        "paramString": "[webdriver.Locator](webdriver.Locator)"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "which resolves to whether the subelement is present on the page.",
      "startingLine": 918,
      "typeExpression": "ElementFinder",
      "type": {
        "type": "NameExpression",
        "name": "ElementFinder"
      },
      "typeList": [
        "ElementFinder"
      ]
    },
    "returnString": "[ElementFinder](ElementFinder)",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/element.js#L910"
  },
  {
    "description": "<p>Evaluates the input as if it were on the scope of the current element.</p>\n<br />See <code ng-non-bindable>ElementArrayFinder.evaluate</code>",
    "fileName": "element",
    "name": "ElementFinder.prototype.evaluate",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "",
        "startingLine": 934,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "expression",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "which resolves to the evaluated expression.",
      "startingLine": 936,
      "typeExpression": "ElementFinder",
      "type": {
        "type": "NameExpression",
        "name": "ElementFinder"
      },
      "typeList": [
        "ElementFinder"
      ]
    },
    "returnString": "[ElementFinder](ElementFinder)",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/element.js#L931"
  },
  {
    "description": "See <code ng-non-bindable>ElementArrayFinder.prototype.allowAnimations.</code>",
    "fileName": "element",
    "name": "ElementFinder.prototype.allowAnimations",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "",
        "startingLine": 944,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "value",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "which resolves to whether animation is allowed.",
      "startingLine": 946,
      "typeExpression": "ElementFinder",
      "type": {
        "type": "NameExpression",
        "name": "ElementFinder"
      },
      "typeList": [
        "ElementFinder"
      ]
    },
    "returnString": "[ElementFinder](ElementFinder)",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/element.js#L943"
  },
  {
    "alias": "$(cssSelector)",
    "description": "<p>Shortcut for querying the document directly with css.\n<code>element(by.css(&#39;.abc&#39;))</code> is equivalent to <code>$(&#39;.abc&#39;)</code></p>\n",
    "example": "var item = $('.count .two');\nexpect(item.getText()).toBe('Second');",
    "fileName": "element",
    "htmlView": "&lt;div class=&quot;count&quot;&gt;\n  &lt;span class=&quot;one&quot;&gt;First&lt;/span&gt;\n  &lt;span class=&quot;two&quot;&gt;Second&lt;/span&gt;\n&lt;/div&gt;",
    "name": "build$",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "A css selector",
        "startingLine": 968,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "selector",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "which identifies the located [<code ng-non-bindable>webdriver.WebElement</code>](webdriver.WebElement)",
      "startingLine": 969,
      "typeExpression": "ElementFinder",
      "type": {
        "type": "NameExpression",
        "name": "ElementFinder"
      },
      "typeList": [
        "ElementFinder"
      ]
    },
    "returnString": "[ElementFinder](ElementFinder)",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/element.js#L953",
    "view": "<div class=\"count\">\n  <span class=\"one\">First</span>\n  <span class=\"two\">Second</span>\n</div>"
  },
  {
    "alias": "$$(cssSelector)",
    "description": "<p>Shortcut for querying the document directly with css.\n<code>element.all(by.css(&#39;.abc&#39;))</code> is equivalent to <code>$$(&#39;.abc&#39;)</code></p>\n",
    "example": "// The following protractor expressions are equivalent.\nvar list = element.all(by.css('.count span'));\nexpect(list.count()).toBe(2);\n\nlist = $$('.count span');\nexpect(list.count()).toBe(2);\nexpect(list.get(0).getText()).toBe('First');\nexpect(list.get(1).getText()).toBe('Second');",
    "fileName": "element",
    "htmlView": "&lt;div class=&quot;count&quot;&gt;\n  &lt;span class=&quot;one&quot;&gt;First&lt;/span&gt;\n  &lt;span class=&quot;two&quot;&gt;Second&lt;/span&gt;\n&lt;/div&gt;",
    "name": "build$$",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "a css selector",
        "startingLine": 1000,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "selector",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "which identifies the array of the located [<code ng-non-bindable>webdriver.WebElement</code>](webdriver.WebElement)s.",
      "startingLine": 1001,
      "typeExpression": "ElementArrayFinder",
      "type": {
        "type": "NameExpression",
        "name": "ElementArrayFinder"
      },
      "typeList": [
        "ElementArrayFinder"
      ]
    },
    "returnString": "[ElementArrayFinder](ElementArrayFinder)",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/element.js#L980",
    "view": "<div class=\"count\">\n  <span class=\"one\">First</span>\n  <span class=\"two\">Second</span>\n</div>"
  },
  {
    "alias": "browser",
    "description": "",
    "extends": "{webdriver.WebDriver}",
    "fileName": "protractor",
    "name": "Protractor",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "",
        "startingLine": 91,
        "typeExpression": "webdriver.WebDriver",
        "type": {
          "type": "NameExpression",
          "name": "webdriver.WebDriver"
        },
        "typeList": [
          "webdriver.WebDriver"
        ],
        "name": "webdriver",
        "paramString": "[webdriver.WebDriver](webdriver.WebDriver)"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "A base URL to run get requests against.",
        "startingLine": 92,
        "typeExpression": "string=",
        "type": {
          "type": "NameExpression",
          "name": "string",
          "optional": true
        },
        "typeList": [
          "string"
        ],
        "optional": true,
        "name": "opt_baseUrl",
        "paramString": "string="
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "Selector element that has an ng-app in scope.",
        "startingLine": 93,
        "typeExpression": "string=",
        "type": {
          "type": "NameExpression",
          "name": "string",
          "optional": true
        },
        "typeList": [
          "string"
        ],
        "optional": true,
        "name": "opt_rootElement",
        "paramString": "string="
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "Whether Protractor should  stop tracking outstanding $timeouts.",
        "startingLine": 95,
        "typeExpression": "boolean=",
        "type": {
          "type": "NameExpression",
          "name": "boolean",
          "optional": true
        },
        "typeList": [
          "boolean"
        ],
        "optional": true,
        "name": "opt_untrackOutstandingTimeouts",
        "paramString": "boolean="
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/protractor.js#L88"
  },
  {
    "description": "<p>Get the processed configuration object that is currently being run. This\nwill contain the specs and capabilities properties of the current runner\ninstance.</p>\n<p>Set by the runner.</p>\n",
    "fileName": "protractor",
    "name": "Protractor.prototype.getProcessedConfig",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise which resolves to the capabilities object.",
      "startingLine": 254,
      "typeExpression": "q.Promise",
      "type": {
        "type": "NameExpression",
        "name": "q.Promise"
      },
      "typeList": [
        "q.Promise"
      ]
    },
    "returnString": "q.Promise",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/protractor.js#L248"
  },
  {
    "description": "<p>Fork another instance of protractor for use in interactive tests.</p>\n<p>Set by the runner.</p>\n",
    "fileName": "protractor",
    "name": "Protractor.prototype.forkNewDriverInstance",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "Whether to navigate to current url on creation",
        "startingLine": 263,
        "typeExpression": "boolean",
        "type": {
          "type": "NameExpression",
          "name": "boolean"
        },
        "typeList": [
          "boolean"
        ],
        "name": "opt_useSameUrl",
        "paramString": "boolean"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "Whether to apply same mock modules on creation",
        "startingLine": 264,
        "typeExpression": "boolean",
        "type": {
          "type": "NameExpression",
          "name": "boolean"
        },
        "typeList": [
          "boolean"
        ],
        "name": "opt_copyMockModules",
        "paramString": "boolean"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "a protractor instance.",
      "startingLine": 265,
      "typeExpression": "Protractor",
      "type": {
        "type": "NameExpression",
        "name": "Protractor"
      },
      "typeList": [
        "Protractor"
      ]
    },
    "returnString": "[Protractor](Protractor)",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/protractor.js#L259"
  },
  {
    "description": "<p>Restart the browser instance.</p>\n<p>Set by the runner.</p>\n",
    "fileName": "protractor",
    "name": "Protractor.prototype.restart",
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/protractor.js#L270"
  },
  {
    "description": "<p>Instead of using a single root element, search through all angular apps\navailable on the page when finding elements or waiting for stability.\nOnly compatible with Angular2.</p>\n",
    "fileName": "protractor",
    "name": "Protractor.prototype.useAllAngular2AppRoots",
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/protractor.js#L277"
  },
  {
    "description": "<p>Instruct webdriver to wait until Angular has finished rendering and has\nno outstanding $http or $timeout calls before continuing.\nNote that Protractor automatically applies this command before every\nWebDriver action.</p>\n",
    "fileName": "protractor",
    "name": "Protractor.prototype.waitForAngular",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "An optional description to be added to webdriver logs.",
        "startingLine": 341,
        "typeExpression": "string=",
        "type": {
          "type": "NameExpression",
          "name": "string",
          "optional": true
        },
        "typeList": [
          "string"
        ],
        "optional": true,
        "name": "opt_description",
        "paramString": "string="
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will resolve to the scripts return value.",
      "startingLine": 343,
      "typeExpression": "!webdriver.promise.Promise",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.promise.Promise",
        "nullable": false
      },
      "typeList": [
        "webdriver.promise.Promise"
      ]
    },
    "returnString": "!webdriver.promise.Promise",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/protractor.js#L336"
  },
  {
    "description": "<p>Waits for Angular to finish rendering before searching for elements.</p>\n<br />See <code ng-non-bindable>webdriver.WebDriver.findElement</code>",
    "fileName": "protractor",
    "name": "Protractor.prototype.findElement",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "",
      "startingLine": 446,
      "typeExpression": "!webdriver.WebElement",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.WebElement",
        "nullable": false
      },
      "typeList": [
        "webdriver.WebElement"
      ]
    },
    "returnString": "&#33;[webdriver.WebElement](webdriver.WebElement)",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/protractor.js#L444"
  },
  {
    "description": "<p>Waits for Angular to finish rendering before searching for elements.</p>\n<br />See <code ng-non-bindable>webdriver.WebDriver.findElements</code>",
    "fileName": "protractor",
    "name": "Protractor.prototype.findElements",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved to an array of the located [<code ng-non-bindable>webdriver.WebElement</code>](webdriver.WebElement)s.",
      "startingLine": 455,
      "typeExpression": "!webdriver.promise.Promise",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.promise.Promise",
        "nullable": false
      },
      "typeList": [
        "webdriver.promise.Promise"
      ]
    },
    "returnString": "!webdriver.promise.Promise",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/protractor.js#L453"
  },
  {
    "description": "<p>Tests if an element is present on the page.</p>\n<br />See <code ng-non-bindable>webdriver.WebDriver.isElementPresent</code>",
    "fileName": "protractor",
    "name": "Protractor.prototype.isElementPresent",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will resolve to whether the element is present on the page.",
      "startingLine": 465,
      "typeExpression": "!webdriver.promise.Promise",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.promise.Promise",
        "nullable": false
      },
      "typeList": [
        "webdriver.promise.Promise"
      ]
    },
    "returnString": "!webdriver.promise.Promise",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/protractor.js#L463"
  },
  {
    "description": "<p>Add a module to load before Angular whenever Protractor.get is called.\nModules will be registered after existing modules already on the page,\nso any module registered here will override preexisting modules with the same\nname.</p>\n",
    "example": "browser.addMockModule('modName', function() {\n  angular.module('modName', []).value('foo', 'bar');\n});",
    "fileName": "protractor",
    "name": "Protractor.prototype.addMockModule",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The name of the module to load or override.",
        "startingLine": 485,
        "typeExpression": "!string",
        "type": {
          "type": "NameExpression",
          "name": "string",
          "nullable": false
        },
        "typeList": [
          "string"
        ],
        "name": "name",
        "paramString": "!string"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The JavaScript to load the module.",
        "startingLine": 486,
        "typeExpression": "!string|Function",
        "type": {
          "type": "TypeUnion",
          "elements": [
            {
              "type": "NameExpression",
              "name": "string",
              "nullable": false
            },
            {
              "type": "FunctionType",
              "params": []
            }
          ]
        },
        "typeList": [
          "string",
          "function()"
        ],
        "name": "script",
        "paramString": "!string&#124;Function"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "Any additional arguments will be provided to the script and may be referenced using the `arguments` object.",
        "startingLine": 487,
        "typeExpression": "...*",
        "type": {
          "type": "AllLiteral",
          "repeatable": true
        },
        "typeList": [
          "*"
        ],
        "name": "varArgs",
        "paramString": "...*"
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/protractor.js#L475"
  },
  {
    "description": "<p>Clear the list of registered mock modules.</p>\n",
    "fileName": "protractor",
    "name": "Protractor.prototype.clearMockModules",
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/protractor.js#L501"
  },
  {
    "description": "<p>Remove a registered mock module.</p>\n",
    "example": "browser.removeMockModule('modName');",
    "fileName": "protractor",
    "name": "Protractor.prototype.removeMockModule",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The name of the module to remove.",
        "startingLine": 514,
        "typeExpression": "!string",
        "type": {
          "type": "NameExpression",
          "name": "string",
          "nullable": false
        },
        "typeList": [
          "string"
        ],
        "name": "name",
        "paramString": "!string"
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/protractor.js#L509"
  },
  {
    "description": "<p>Get a list of the current mock modules.</p>\n",
    "fileName": "protractor",
    "name": "Protractor.prototype.getRegisteredMockModules",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "",
      "startingLine": 527,
      "typeExpression": "Array.<!string|Function>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "Array"
        },
        "applications": [
          {
            "type": "TypeUnion",
            "elements": [
              {
                "type": "NameExpression",
                "name": "string",
                "nullable": false
              },
              {
                "type": "FunctionType",
                "params": []
              }
            ]
          }
        ]
      },
      "typeList": [
        "Array.<!string|Function>"
      ]
    },
    "returnString": "Array.&lt;!string&#124;Function&gt;",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/protractor.js#L525"
  },
  {
    "description": "See <code ng-non-bindable>webdriver.WebDriver.get</code><br />Navigate to the given destination and loads mock modules before Angular. Assumes that the page being loaded uses Angular. If you need to access a page which does not have Angular on load, use the wrapped webdriver directly.",
    "example": "browser.get('https://angularjs.org/');\nexpect(browser.getCurrentUrl()).toBe('https://angularjs.org/');",
    "fileName": "protractor",
    "name": "Protractor.prototype.get",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "Destination URL.",
        "startingLine": 607,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "destination",
        "paramString": "string"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "Number of milliseconds to wait for Angular to start.",
        "startingLine": 608,
        "typeExpression": "number=",
        "type": {
          "type": "NameExpression",
          "name": "number",
          "optional": true
        },
        "typeList": [
          "number"
        ],
        "optional": true,
        "name": "opt_timeout",
        "paramString": "number="
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/protractor.js#L596"
  },
  {
    "description": "See <code ng-non-bindable>webdriver.WebDriver.refresh</code><br />Makes a full reload of the current page and loads mock modules before Angular. Assumes that the page being loaded uses Angular. If you need to access a page which does not have Angular on load, use the wrapped webdriver directly.",
    "fileName": "protractor",
    "name": "Protractor.prototype.refresh",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "Number of milliseconds to wait for Angular to start.",
        "startingLine": 733,
        "typeExpression": "number=",
        "type": {
          "type": "NameExpression",
          "name": "number",
          "optional": true
        },
        "typeList": [
          "number"
        ],
        "optional": true,
        "name": "opt_timeout",
        "paramString": "number="
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/protractor.js#L726"
  },
  {
    "description": "<p>Mixin navigation methods back into the navigation object so that\nthey are invoked as before, i.e. driver.navigate().refresh()</p>\n",
    "fileName": "protractor",
    "name": "Protractor.prototype.navigate",
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/protractor.js#L750"
  },
  {
    "description": "<p>Browse to another page using in-page navigation.</p>\n",
    "example": "browser.get('http://angular.github.io/protractor/#/tutorial');\nbrowser.setLocation('api');\nexpect(browser.getCurrentUrl())\n    .toBe('http://angular.github.io/protractor/#/api');",
    "fileName": "protractor",
    "name": "Protractor.prototype.setLocation",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "In page URL using the same syntax as $location.url()",
        "startingLine": 768,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "url",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will resolve once page has been changed.",
      "startingLine": 769,
      "typeExpression": "!webdriver.promise.Promise",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.promise.Promise",
        "nullable": false
      },
      "typeList": [
        "webdriver.promise.Promise"
      ]
    },
    "returnString": "!webdriver.promise.Promise",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/protractor.js#L760"
  },
  {
    "description": "<p>Returns the current absolute url from AngularJS.</p>\n",
    "example": "browser.get('http://angular.github.io/protractor/#/api');\nexpect(browser.getLocationAbsUrl())\n    .toBe('http://angular.github.io/protractor/#/api');",
    "fileName": "protractor",
    "name": "Protractor.prototype.getLocationAbsUrl",
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/protractor.js#L784"
  },
  {
    "description": "<p>Adds a task to the control flow to pause the test and inject helper functions\ninto the browser, so that debugging may be done in the browser console.</p>\n<p>This should be used under node in debug mode, i.e. with\nprotractor debug <configuration.js></p>\n",
    "example": "While in the debugger, commands can be scheduled through webdriver by\nentering the repl:\n  debug> repl\n  Press Ctrl + C to leave rdebug repl\n  > ptor.findElement(protractor.By.input('user').sendKeys('Laura'));\n  > ptor.debugger();\n  debug> c\n\nThis will run the sendKeys command as the next task, then re-enter the\ndebugger.",
    "fileName": "protractor",
    "name": "Protractor.prototype.debugger",
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/protractor.js#L798"
  },
  {
    "description": "<p>Beta (unstable) enterRepl function for entering the repl loop from\nany point in the control flow. Use browser.enterRepl() in your test.\nDoes not require changes to the command line (no need to add &#39;debug&#39;).\nNote, if you are wrapping your own instance of Protractor, you must\nexpose globals &#39;browser&#39; and &#39;protractor&#39; for pause to work.</p>\n",
    "example": "element(by.id('foo')).click();\nbrowser.enterRepl();\n// Execution will stop before the next click action.\nelement(by.id('bar')).click();",
    "fileName": "protractor",
    "name": "Protractor.prototype.enterRepl",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "Optional port to use for the debugging process",
        "startingLine": 1033,
        "typeExpression": "number=",
        "type": {
          "type": "NameExpression",
          "name": "number",
          "optional": true
        },
        "typeList": [
          "number"
        ],
        "optional": true,
        "name": "opt_debugPort",
        "paramString": "number="
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/protractor.js#L1021"
  },
  {
    "description": "<p>Beta (unstable) pause function for debugging webdriver tests. Use\nbrowser.pause() in your test to enter the protractor debugger from that\npoint in the control flow.\nDoes not require changes to the command line (no need to add &#39;debug&#39;).\nNote, if you are wrapping your own instance of Protractor, you must\nexpose globals &#39;browser&#39; and &#39;protractor&#39; for pause to work.</p>\n",
    "example": "element(by.id('foo')).click();\nbrowser.pause();\n// Execution will stop before the next click action.\nelement(by.id('bar')).click();",
    "fileName": "protractor",
    "name": "Protractor.prototype.pause",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "Optional port to use for the debugging process",
        "startingLine": 1054,
        "typeExpression": "number=",
        "type": {
          "type": "NameExpression",
          "name": "number",
          "optional": true
        },
        "typeList": [
          "number"
        ],
        "optional": true,
        "name": "opt_debugPort",
        "paramString": "number="
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/protractor.js#L1041"
  },
  {
    "alias": "by",
    "description": "<p>The Protractor Locators. These provide ways of finding elements in\nAngular applications by binding, model, etc.</p>\n",
    "extends": "{webdriver.By}",
    "fileName": "locators",
    "name": "ProtractorBy",
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/locators.js#L6"
  },
  {
    "description": "<p>webdriver&#39;s By is an enum of locator functions, so we must set it to\na prototype before inheriting from it.</p>\n",
    "fileName": "locators",
    "name": "WebdriverBy.prototype",
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/locators.js#L16"
  },
  {
    "alias": "by.addLocator(locatorName, functionOrScript)",
    "description": "<p>Add a locator to this instance of ProtractorBy. This locator can then be\nused with element(by.locatorName(args)).</p>\n",
    "example": "// Add the custom locator.\nby.addLocator('buttonTextSimple',\n    function(buttonText, opt_parentElement, opt_rootSelector) {\n  // This function will be serialized as a string and will execute in the\n  // browser. The first argument is the text for the button. The second\n  // argument is the parent element, if any.\n  var using = opt_parentElement,\n      buttons = using.querySelectorAll('button');\n\n  // Return an array of buttons with the text.\n  return Array.prototype.filter.call(buttons, function(button) {\n    return button.textContent === buttonText;\n  });\n});\n\n// Use the custom locator.\nelement(by.buttonTextSimple('Go!')).click();",
    "fileName": "locators",
    "htmlView": "&lt;button ng-click=&quot;doAddition()&quot;&gt;Go!&lt;/button&gt;",
    "name": "ProtractorBy.prototype.addLocator",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The name of the new locator.",
        "startingLine": 49,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "name",
        "paramString": "string"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "A script to be run in the context of the browser. This script will be passed an array of arguments that contains any args passed into the locator followed by the element scoping the search and the css selector for the root angular element. It should return an array of elements.",
        "startingLine": 50,
        "typeExpression": "Function|string",
        "type": {
          "type": "TypeUnion",
          "elements": [
            {
              "type": "FunctionType",
              "params": []
            },
            {
              "type": "NameExpression",
              "name": "string"
            }
          ]
        },
        "typeList": [
          "function()",
          "string"
        ],
        "name": "script",
        "paramString": "Function&#124;string"
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/locators.js#L23",
    "view": "<button ng-click=\"doAddition()\">Go!</button>"
  },
  {
    "description": "<p>Find an element by text binding. Does a partial match, so any elements bound\nto variables containing the input string will be returned.</p>\n<p>Note: For AngularJS version 1.2, the interpolation brackets, (usually {{}}),\nare optionally allowed in the binding description string. For Angular version\n1.3+, they are not allowed, and no elements will be found if they are used.</p>\n",
    "example": "var span1 = element(by.binding('person.name'));\nexpect(span1.getText()).toBe('Foo');\n\nvar span2 = element(by.binding('person.email'));\nexpect(span2.getText()).toBe('foo@bar.com');\n\n// You can also use a substring for a partial match\nvar span1alt = element(by.binding('name'));\nexpect(span1alt.getText()).toBe('Foo');\n\n// This works for sites using Angular 1.2 but NOT 1.3\nvar deprecatedSyntax = element(by.binding('{{person.name}}'));",
    "fileName": "locators",
    "htmlView": "&lt;span&gt;{{person.name}}&lt;/span&gt;\n&lt;span ng-bind=&quot;person.email&quot;&gt;&lt;/span&gt;",
    "name": "ProtractorBy.prototype.binding",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "",
        "startingLine": 105,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "bindingDescriptor",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "",
      "startingLine": 106,
      "typeExpression": "{findElementsOverride: findElementsOverride, toString: Function|string}",
      "type": {
        "type": "RecordType",
        "fields": [
          {
            "type": "FieldType",
            "key": {
              "type": "NameExpression",
              "name": "findElementsOverride"
            },
            "value": {
              "type": "NameExpression",
              "name": "findElementsOverride"
            }
          },
          {
            "type": "FieldType",
            "key": {
              "type": "NameExpression",
              "name": "toString"
            },
            "value": {
              "type": "TypeUnion",
              "elements": [
                {
                  "type": "FunctionType",
                  "params": []
                },
                {
                  "type": "NameExpression",
                  "name": "string"
                }
              ]
            }
          }
        ]
      },
      "typeList": [
        "{findElementsOverride: findElementsOverride, toString: Function|string}"
      ]
    },
    "returnString": "{findElementsOverride: findElementsOverride, toString: Function&#124;string}",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/locators.js#L80",
    "view": "<span>{{person.name}}</span>\n<span ng-bind=\"person.email\"></span>"
  },
  {
    "description": "<p>Find an element by exact binding.</p>\n",
    "example": "expect(element(by.exactBinding('person.name')).isPresent()).toBe(true);\nexpect(element(by.exactBinding('person-email')).isPresent()).toBe(true);\nexpect(element(by.exactBinding('person')).isPresent()).toBe(false);\nexpect(element(by.exactBinding('person_phone')).isPresent()).toBe(true);\nexpect(element(by.exactBinding('person_phone|uppercase')).isPresent()).toBe(true);\nexpect(element(by.exactBinding('phone')).isPresent()).toBe(false);",
    "fileName": "locators",
    "htmlView": "&lt;span&gt;{{ person.name }}&lt;/span&gt;\n&lt;span ng-bind=&quot;person-email&quot;&gt;&lt;/span&gt;\n&lt;span&gt;{{person_phone|uppercase}}&lt;/span&gt;",
    "name": "ProtractorBy.prototype.exactBinding",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "",
        "startingLine": 137,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "bindingDescriptor",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "",
      "startingLine": 138,
      "typeExpression": "{findElementsOverride: findElementsOverride, toString: Function|string}",
      "type": {
        "type": "RecordType",
        "fields": [
          {
            "type": "FieldType",
            "key": {
              "type": "NameExpression",
              "name": "findElementsOverride"
            },
            "value": {
              "type": "NameExpression",
              "name": "findElementsOverride"
            }
          },
          {
            "type": "FieldType",
            "key": {
              "type": "NameExpression",
              "name": "toString"
            },
            "value": {
              "type": "TypeUnion",
              "elements": [
                {
                  "type": "FunctionType",
                  "params": []
                },
                {
                  "type": "NameExpression",
                  "name": "string"
                }
              ]
            }
          }
        ]
      },
      "typeList": [
        "{findElementsOverride: findElementsOverride, toString: Function|string}"
      ]
    },
    "returnString": "{findElementsOverride: findElementsOverride, toString: Function&#124;string}",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/locators.js#L122",
    "view": "<span>{{ person.name }}</span>\n<span ng-bind=\"person-email\"></span>\n<span>{{person_phone|uppercase}}</span>"
  },
  {
    "alias": "by.model(modelName)",
    "description": "<p>Find an element by ng-model expression.</p>\n",
    "example": "var input = element(by.model('person.name'));\ninput.sendKeys('123');\nexpect(input.getAttribute('value')).toBe('Foo123');",
    "fileName": "locators",
    "htmlView": "&lt;input type=&quot;text&quot; ng-model=&quot;person.name&quot;&gt;",
    "name": "ProtractorBy.prototype.model",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "ng-model expression.",
        "startingLine": 165,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "model",
        "paramString": "string"
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/locators.js#L154",
    "view": "<input type=\"text\" ng-model=\"person.name\">"
  },
  {
    "description": "<p>Find a button by text.</p>\n",
    "example": "element(by.buttonText('Save'));",
    "fileName": "locators",
    "htmlView": "&lt;button&gt;Save&lt;/button&gt;",
    "name": "ProtractorBy.prototype.buttonText",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "",
        "startingLine": 189,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "searchText",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "",
      "startingLine": 190,
      "typeExpression": "{findElementsOverride: findElementsOverride, toString: Function|string}",
      "type": {
        "type": "RecordType",
        "fields": [
          {
            "type": "FieldType",
            "key": {
              "type": "NameExpression",
              "name": "findElementsOverride"
            },
            "value": {
              "type": "NameExpression",
              "name": "findElementsOverride"
            }
          },
          {
            "type": "FieldType",
            "key": {
              "type": "NameExpression",
              "name": "toString"
            },
            "value": {
              "type": "TypeUnion",
              "elements": [
                {
                  "type": "FunctionType",
                  "params": []
                },
                {
                  "type": "NameExpression",
                  "name": "string"
                }
              ]
            }
          }
        ]
      },
      "typeList": [
        "{findElementsOverride: findElementsOverride, toString: Function|string}"
      ]
    },
    "returnString": "{findElementsOverride: findElementsOverride, toString: Function&#124;string}",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/locators.js#L181",
    "view": "<button>Save</button>"
  },
  {
    "description": "<p>Find a button by partial text.</p>\n",
    "example": "element(by.partialButtonText('Save'));",
    "fileName": "locators",
    "htmlView": "&lt;button&gt;Save my file&lt;/button&gt;",
    "name": "ProtractorBy.prototype.partialButtonText",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "",
        "startingLine": 214,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "searchText",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "",
      "startingLine": 215,
      "typeExpression": "{findElementsOverride: findElementsOverride, toString: Function|string}",
      "type": {
        "type": "RecordType",
        "fields": [
          {
            "type": "FieldType",
            "key": {
              "type": "NameExpression",
              "name": "findElementsOverride"
            },
            "value": {
              "type": "NameExpression",
              "name": "findElementsOverride"
            }
          },
          {
            "type": "FieldType",
            "key": {
              "type": "NameExpression",
              "name": "toString"
            },
            "value": {
              "type": "TypeUnion",
              "elements": [
                {
                  "type": "FunctionType",
                  "params": []
                },
                {
                  "type": "NameExpression",
                  "name": "string"
                }
              ]
            }
          }
        ]
      },
      "typeList": [
        "{findElementsOverride: findElementsOverride, toString: Function|string}"
      ]
    },
    "returnString": "{findElementsOverride: findElementsOverride, toString: Function&#124;string}",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/locators.js#L206",
    "view": "<button>Save my file</button>"
  },
  {
    "description": "<p>Find elements inside an ng-repeat.</p>\n",
    "example": "// Returns the DIV for the second cat.\nvar secondCat = element(by.repeater('cat in pets').row(1));\n\n// Returns the SPAN for the first cat's name.\nvar firstCatName = element(by.repeater('cat in pets').\n    row(0).column('cat.name'));\n\n// Returns a promise that resolves to an array of WebElements from a column\nvar ages = element.all(\n    by.repeater('cat in pets').column('cat.age'));\n\n// Returns a promise that resolves to an array of WebElements containing\n// all top level elements repeated by the repeater. For 2 pets rows resolves\n// to an array of 2 elements.\nvar rows = element.all(by.repeater('cat in pets'));\n\n// Returns a promise that resolves to an array of WebElements containing all\n// the elements with a binding to the book's name.\nvar divs = element.all(by.repeater('book in library').column('book.name'));\n\n// Returns a promise that resolves to an array of WebElements containing\n// the DIVs for the second book.\nvar bookInfo = element.all(by.repeater('book in library').row(1));\n\n// Returns the H4 for the first book's name.\nvar firstBookName = element(by.repeater('book in library').\n    row(0).column('book.name'));\n\n// Returns a promise that resolves to an array of WebElements containing\n// all top level elements repeated by the repeater. For 2 books divs\n// resolves to an array of 4 elements.\nvar divs = element.all(by.repeater('book in library'));",
    "fileName": "locators",
    "htmlView": "&lt;div ng-repeat=&quot;cat in pets&quot;&gt;\n  &lt;span&gt;{{cat.name}}&lt;/span&gt;\n  &lt;span&gt;{{cat.age}}&lt;/span&gt;\n&lt;/div&gt;\n\n&lt;div class=&quot;book-img&quot; ng-repeat-start=&quot;book in library&quot;&gt;\n  &lt;span&gt;{{$index}}&lt;/span&gt;\n&lt;/div&gt;\n&lt;div class=&quot;book-info&quot; ng-repeat-end&gt;\n  &lt;h4&gt;{{book.name}}&lt;/h4&gt;\n  &lt;p&gt;{{book.blurb}}&lt;/p&gt;\n&lt;/div&gt;",
    "name": "ProtractorBy.prototype.repeater",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "",
        "startingLine": 350,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "repeatDescriptor",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "",
      "startingLine": 351,
      "typeExpression": "{findElementsOverride: findElementsOverride, toString: Function|string}",
      "type": {
        "type": "RecordType",
        "fields": [
          {
            "type": "FieldType",
            "key": {
              "type": "NameExpression",
              "name": "findElementsOverride"
            },
            "value": {
              "type": "NameExpression",
              "name": "findElementsOverride"
            }
          },
          {
            "type": "FieldType",
            "key": {
              "type": "NameExpression",
              "name": "toString"
            },
            "value": {
              "type": "TypeUnion",
              "elements": [
                {
                  "type": "FunctionType",
                  "params": []
                },
                {
                  "type": "NameExpression",
                  "name": "string"
                }
              ]
            }
          }
        ]
      },
      "typeList": [
        "{findElementsOverride: findElementsOverride, toString: Function|string}"
      ]
    },
    "returnString": "{findElementsOverride: findElementsOverride, toString: Function&#124;string}",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/locators.js#L300",
    "view": "<div ng-repeat=\"cat in pets\">\n  <span>{{cat.name}}</span>\n  <span>{{cat.age}}</span>\n</div>\n\n<div class=\"book-img\" ng-repeat-start=\"book in library\">\n  <span>{{$index}}</span>\n</div>\n<div class=\"book-info\" ng-repeat-end>\n  <h4>{{book.name}}</h4>\n  <p>{{book.blurb}}</p>\n</div>"
  },
  {
    "description": "<p>Find an element by exact repeater.</p>\n",
    "example": "expect(element(by.exactRepeater('person in peopleWithRedHair')).isPresent())\n    .toBe(true);\nexpect(element(by.exactRepeater('person in people')).isPresent()).toBe(false);\nexpect(element(by.exactRepeater('car in cars')).isPresent()).toBe(true);",
    "fileName": "locators",
    "htmlView": "&lt;li ng-repeat=&quot;person in peopleWithRedHair&quot;&gt;&lt;/li&gt;\n&lt;li ng-repeat=&quot;car in cars | orderBy:year&quot;&gt;&lt;/li&gt;",
    "name": "ProtractorBy.prototype.exactRepeater",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "",
        "startingLine": 368,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "repeatDescriptor",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "",
      "startingLine": 369,
      "typeExpression": "{findElementsOverride: findElementsOverride, toString: Function|string}",
      "type": {
        "type": "RecordType",
        "fields": [
          {
            "type": "FieldType",
            "key": {
              "type": "NameExpression",
              "name": "findElementsOverride"
            },
            "value": {
              "type": "NameExpression",
              "name": "findElementsOverride"
            }
          },
          {
            "type": "FieldType",
            "key": {
              "type": "NameExpression",
              "name": "toString"
            },
            "value": {
              "type": "TypeUnion",
              "elements": [
                {
                  "type": "FunctionType",
                  "params": []
                },
                {
                  "type": "NameExpression",
                  "name": "string"
                }
              ]
            }
          }
        ]
      },
      "typeList": [
        "{findElementsOverride: findElementsOverride, toString: Function|string}"
      ]
    },
    "returnString": "{findElementsOverride: findElementsOverride, toString: Function&#124;string}",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/locators.js#L356",
    "view": "<li ng-repeat=\"person in peopleWithRedHair\"></li>\n<li ng-repeat=\"car in cars | orderBy:year\"></li>"
  },
  {
    "description": "<p>Find elements by CSS which contain a certain string.</p>\n",
    "example": "// Returns the li for the dog, but not cat.\nvar dog = element(by.cssContainingText('.pet', 'Dog'));",
    "fileName": "locators",
    "htmlView": "&lt;ul&gt;\n  &lt;li class=&quot;pet&quot;&gt;Dog&lt;/li&gt;\n  &lt;li class=&quot;pet&quot;&gt;Cat&lt;/li&gt;\n&lt;/ul&gt;",
    "name": "ProtractorBy.prototype.cssContainingText",
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/locators.js#L375",
    "view": "<ul>\n  <li class=\"pet\">Dog</li>\n  <li class=\"pet\">Cat</li>\n</ul>"
  },
  {
    "alias": "by.options(optionsDescriptor)",
    "description": "<p>Find an element by ng-options expression.</p>\n",
    "example": "var allOptions = element.all(by.options('c for c in colors'));\nexpect(allOptions.count()).toEqual(2);\nvar firstOption = allOptions.first();\nexpect(firstOption.getText()).toEqual('red');",
    "fileName": "locators",
    "htmlView": "&lt;select ng-model=&quot;color&quot; ng-options=&quot;c for c in colors&quot;&gt;\n  &lt;option value=&quot;0&quot; selected=&quot;selected&quot;&gt;red&lt;/option&gt;\n  &lt;option value=&quot;1&quot;&gt;green&lt;/option&gt;\n&lt;/select&gt;",
    "name": "ProtractorBy.prototype.options",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "ng-options expression.",
        "startingLine": 416,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "optionsDescriptor",
        "paramString": "string"
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/locators.js#L401",
    "view": "<select ng-model=\"color\" ng-options=\"c for c in colors\">\n  <option value=\"0\" selected=\"selected\">red</option>\n  <option value=\"1\">green</option>\n</select>"
  },
  {
    "alias": "by.deepCss(selector)",
    "description": "<p>Find an element by css selector within the Shadow DOM.</p>\n",
    "example": "var spans = element.all(by.deepCss('span'));\nexpect(spans.count()).toEqual(3);",
    "fileName": "locators",
    "htmlView": "&lt;div&gt;\n  &lt;span id=&quot;outerspan&quot;&gt;\n  &lt;&quot;shadow tree&quot;&gt;\n    &lt;span id=&quot;span1&quot;&gt;&lt;/span&gt;\n    &lt;&quot;shadow tree&quot;&gt;\n      &lt;span id=&quot;span2&quot;&gt;&lt;/span&gt;\n    &lt;/&gt;\n  &lt;/&gt;\n&lt;/div&gt;",
    "name": "ProtractorBy.prototype.deepCss",
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/locators.js#L432",
    "view": "<div>\n  <span id=\"outerspan\">\n  <\"shadow tree\">\n    <span id=\"span1\"></span>\n    <\"shadow tree\">\n      <span id=\"span2\"></span>\n    </>\n  </>\n</div>"
  },
  {
    "description": "<p>Represents a library of canned expected conditions that are useful for\nprotractor, especially when dealing with non-angular apps.</p>\n<p>Each condition returns a function that evaluates to a promise. You may mix\nmultiple conditions using <code>and</code>, <code>or</code>, and/or <code>not</code>. You may also\nmix these conditions with any other conditions that you write.</p>\n<p>See <a href=\"https://selenium.googlecode.com/git/docs/api/java/org/openqa\">https://selenium.googlecode.com/git/docs/api/java/org/openqa</a> ...\n    /selenium/support/ui/ExpectedConditions.html</p>\n",
    "example": "var EC = protractor.ExpectedConditions;\nvar button = $('#xyz');\nvar isClickable = EC.elementToBeClickable(button);\n\nbrowser.get(URL);\nbrowser.wait(isClickable, 5000); //wait for an element to become clickable\nbutton.click();\n\n// You can define your own expected condition, which is a function that\n// takes no parameter and evaluates to a promise of a boolean.\nvar urlChanged = function() {\n  return browser.getCurrentUrl().then(function(url) {\n    return url === 'http://www.angularjs.org';\n  });\n};\n\n// You can customize the conditions with EC.and, EC.or, and EC.not.\n// Here's a condition to wait for url to change, $('abc') element to contain\n// text 'bar', and button becomes clickable.\nvar condition = EC.and(urlChanged, EC.textToBePresentInElement($('abc'), 'bar'), isClickable);\nbrowser.get(URL);\nbrowser.wait(condition, 5000); //wait for condition to be true.\nbutton.click();",
    "fileName": "expectedConditions",
    "name": "ExpectedConditions",
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/expectedConditions.js#L5"
  },
  {
    "description": "<p>Negates the result of a promise.</p>\n",
    "example": "var EC = protractor.ExpectedConditions;\nvar titleIsNotFoo = EC.not(EC.titleIs('Foo'));\n// Waits for title to become something besides 'foo'.\nbrowser.wait(titleIsNotFoo, 5000);",
    "fileName": "expectedConditions",
    "name": "ExpectedConditions.prototype.not",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "",
        "startingLine": 54,
        "typeExpression": "!function",
        "type": {
          "type": "FunctionType",
          "params": [],
          "nullable": false
        },
        "typeList": [
          "!function"
        ],
        "name": "expectedCondition",
        "paramString": "!function"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "An expected condition that returns the negated value.",
      "startingLine": 56,
      "typeExpression": "!function",
      "type": {
        "type": "FunctionType",
        "params": [],
        "nullable": false
      },
      "typeList": [
        "!function"
      ]
    },
    "returnString": "!function",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/expectedConditions.js#L46"
  },
  {
    "description": "<p>Chain a number of expected conditions using logical_and, short circuiting\nat the first expected condition that evaluates to false.</p>\n",
    "example": "var EC = protractor.ExpectedConditions;\nvar titleContainsFoo = EC.titleContains('Foo');\nvar titleIsNotFooBar = EC.not(EC.titleIs('FooBar'));\n// Waits for title to contain 'Foo', but is not 'FooBar'\nbrowser.wait(EC.and(titleContainsFoo, titleIsNotFooBar), 5000);",
    "fileName": "expectedConditions",
    "name": "ExpectedConditions.prototype.and",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "An array of expected conditions to 'and' together.",
        "startingLine": 105,
        "typeExpression": "Array.<Function>",
        "type": {
          "type": "TypeApplication",
          "expression": {
            "type": "NameExpression",
            "name": "Array"
          },
          "applications": [
            {
              "type": "FunctionType",
              "params": []
            }
          ]
        },
        "typeList": [
          "Array.<Function>"
        ],
        "name": "fns",
        "paramString": "Array.&lt;Function&gt;"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "An expected condition that returns a promise which evaluates to the result of the logical and.",
      "startingLine": 107,
      "typeExpression": "!function",
      "type": {
        "type": "FunctionType",
        "params": [],
        "nullable": false
      },
      "typeList": [
        "!function"
      ]
    },
    "returnString": "!function",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/expectedConditions.js#L95"
  },
  {
    "description": "<p>Chain a number of expected conditions using logical_or, short circuiting\nat the first expected condition that evaluates to true.</p>\n",
    "example": "var EC = protractor.ExpectedConditions;\nvar titleContainsFoo = EC.titleContains('Foo');\nvar titleContainsBar = EC.titleContains('Bar');\n// Waits for title to contain either 'Foo' or 'Bar'\nbrowser.wait(EC.or(titleContainsFoo, titleContainsBar), 5000);",
    "fileName": "expectedConditions",
    "name": "ExpectedConditions.prototype.or",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "An array of expected conditions to 'or' together.",
        "startingLine": 126,
        "typeExpression": "Array.<Function>",
        "type": {
          "type": "TypeApplication",
          "expression": {
            "type": "NameExpression",
            "name": "Array"
          },
          "applications": [
            {
              "type": "FunctionType",
              "params": []
            }
          ]
        },
        "typeList": [
          "Array.<Function>"
        ],
        "name": "fns",
        "paramString": "Array.&lt;Function&gt;"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "An expected condition that returns a promise which evaluates to the result of the logical or.",
      "startingLine": 128,
      "typeExpression": "!function",
      "type": {
        "type": "FunctionType",
        "params": [],
        "nullable": false
      },
      "typeList": [
        "!function"
      ]
    },
    "returnString": "!function",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/expectedConditions.js#L116"
  },
  {
    "description": "<p>Expect an alert to be present.</p>\n",
    "example": "var EC = protractor.ExpectedConditions;\n// Waits for an alert pops up.\nbrowser.wait(EC.alertIsPresent(), 5000);",
    "fileName": "expectedConditions",
    "name": "ExpectedConditions.prototype.alertIsPresent",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "An expected condition that returns a promise representing whether an alert is present.",
      "startingLine": 144,
      "typeExpression": "!function",
      "type": {
        "type": "FunctionType",
        "params": [],
        "nullable": false
      },
      "typeList": [
        "!function"
      ]
    },
    "returnString": "!function",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/expectedConditions.js#L137"
  },
  {
    "description": "<p>An Expectation for checking an element is visible and enabled such that you\ncan click it.</p>\n",
    "example": "var EC = protractor.ExpectedConditions;\n// Waits for the element with id 'abc' to be clickable.\nbrowser.wait(EC.elementToBeClickable($('#abc')), 5000);",
    "fileName": "expectedConditions",
    "name": "ExpectedConditions.prototype.elementToBeClickable",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The element to check",
        "startingLine": 170,
        "typeExpression": "!ElementFinder",
        "type": {
          "type": "NameExpression",
          "name": "ElementFinder",
          "nullable": false
        },
        "typeList": [
          "ElementFinder"
        ],
        "name": "elementFinder",
        "paramString": "&#33;[ElementFinder](ElementFinder)"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "An expected condition that returns a promise representing whether the element is clickable.",
      "startingLine": 172,
      "typeExpression": "!function",
      "type": {
        "type": "FunctionType",
        "params": [],
        "nullable": false
      },
      "typeList": [
        "!function"
      ]
    },
    "returnString": "!function",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/expectedConditions.js#L162"
  },
  {
    "description": "<p>An expectation for checking if the given text is present in the\nelement. Returns false if the elementFinder does not find an element.</p>\n",
    "example": "var EC = protractor.ExpectedConditions;\n// Waits for the element with id 'abc' to contain the text 'foo'.\nbrowser.wait(EC.textToBePresentInElement($('#abc'), 'foo'), 5000);",
    "fileName": "expectedConditions",
    "name": "ExpectedConditions.prototype.textToBePresentInElement",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The element to check",
        "startingLine": 190,
        "typeExpression": "!ElementFinder",
        "type": {
          "type": "NameExpression",
          "name": "ElementFinder",
          "nullable": false
        },
        "typeList": [
          "ElementFinder"
        ],
        "name": "elementFinder",
        "paramString": "&#33;[ElementFinder](ElementFinder)"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The text to verify against",
        "startingLine": 191,
        "typeExpression": "!string",
        "type": {
          "type": "NameExpression",
          "name": "string",
          "nullable": false
        },
        "typeList": [
          "string"
        ],
        "name": "text",
        "paramString": "!string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "An expected condition that returns a promise representing whether the text is present in the element.",
      "startingLine": 193,
      "typeExpression": "!function",
      "type": {
        "type": "FunctionType",
        "params": [],
        "nullable": false
      },
      "typeList": [
        "!function"
      ]
    },
    "returnString": "!function",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/expectedConditions.js#L182"
  },
  {
    "description": "<p>An expectation for checking if the given text is present in the element’s\nvalue. Returns false if the elementFinder does not find an element.</p>\n",
    "example": "var EC = protractor.ExpectedConditions;\n// Waits for the element with id 'myInput' to contain the input 'foo'.\nbrowser.wait(EC.textToBePresentInElementValue($('#myInput'), 'foo'), 5000);",
    "fileName": "expectedConditions",
    "name": "ExpectedConditions.prototype.textToBePresentInElementValue",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The element to check",
        "startingLine": 214,
        "typeExpression": "!ElementFinder",
        "type": {
          "type": "NameExpression",
          "name": "ElementFinder",
          "nullable": false
        },
        "typeList": [
          "ElementFinder"
        ],
        "name": "elementFinder",
        "paramString": "&#33;[ElementFinder](ElementFinder)"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The text to verify against",
        "startingLine": 215,
        "typeExpression": "!string",
        "type": {
          "type": "NameExpression",
          "name": "string",
          "nullable": false
        },
        "typeList": [
          "string"
        ],
        "name": "text",
        "paramString": "!string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "An expected condition that returns a promise representing whether the text is present in the element's value.",
      "startingLine": 217,
      "typeExpression": "!function",
      "type": {
        "type": "FunctionType",
        "params": [],
        "nullable": false
      },
      "typeList": [
        "!function"
      ]
    },
    "returnString": "!function",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/expectedConditions.js#L206"
  },
  {
    "description": "<p>An expectation for checking that the title contains a case-sensitive\nsubstring.</p>\n",
    "example": "var EC = protractor.ExpectedConditions;\n// Waits for the title to contain 'foo'.\nbrowser.wait(EC.titleContains('foo'), 5000);",
    "fileName": "expectedConditions",
    "name": "ExpectedConditions.prototype.titleContains",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The fragment of title expected",
        "startingLine": 238,
        "typeExpression": "!string",
        "type": {
          "type": "NameExpression",
          "name": "string",
          "nullable": false
        },
        "typeList": [
          "string"
        ],
        "name": "title",
        "paramString": "!string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "An expected condition that returns a promise representing whether the title contains the string.",
      "startingLine": 240,
      "typeExpression": "!function",
      "type": {
        "type": "FunctionType",
        "params": [],
        "nullable": false
      },
      "typeList": [
        "!function"
      ]
    },
    "returnString": "!function",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/expectedConditions.js#L230"
  },
  {
    "description": "<p>An expectation for checking the title of a page.</p>\n",
    "example": "var EC = protractor.ExpectedConditions;\n// Waits for the title to be 'foo'.\nbrowser.wait(EC.titleIs('foo'), 5000);",
    "fileName": "expectedConditions",
    "name": "ExpectedConditions.prototype.titleIs",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The expected title, which must be an exact match.",
        "startingLine": 259,
        "typeExpression": "!string",
        "type": {
          "type": "NameExpression",
          "name": "string",
          "nullable": false
        },
        "typeList": [
          "string"
        ],
        "name": "title",
        "paramString": "!string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "An expected condition that returns a promise representing whether the title equals the string.",
      "startingLine": 261,
      "typeExpression": "!function",
      "type": {
        "type": "FunctionType",
        "params": [],
        "nullable": false
      },
      "typeList": [
        "!function"
      ]
    },
    "returnString": "!function",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/expectedConditions.js#L252"
  },
  {
    "description": "<p>An expectation for checking that an element is present on the DOM\nof a page. This does not necessarily mean that the element is visible.\nThis is the opposite of &#39;stalenessOf&#39;.</p>\n",
    "example": "var EC = protractor.ExpectedConditions;\n// Waits for the element with id 'abc' to be present on the dom.\nbrowser.wait(EC.presenceOf($('#abc')), 5000);",
    "fileName": "expectedConditions",
    "name": "ExpectedConditions.prototype.presenceOf",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The element to check",
        "startingLine": 282,
        "typeExpression": "!ElementFinder",
        "type": {
          "type": "NameExpression",
          "name": "ElementFinder",
          "nullable": false
        },
        "typeList": [
          "ElementFinder"
        ],
        "name": "elementFinder",
        "paramString": "&#33;[ElementFinder](ElementFinder)"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "An expected condition that returns a promise representing whether the element is present.",
      "startingLine": 284,
      "typeExpression": "!function",
      "type": {
        "type": "FunctionType",
        "params": [],
        "nullable": false
      },
      "typeList": [
        "!function"
      ]
    },
    "returnString": "!function",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/expectedConditions.js#L273"
  },
  {
    "description": "<p>An expectation for checking that an element is not attached to the DOM\nof a page. This is the opposite of &#39;presenceOf&#39;.</p>\n",
    "example": "var EC = protractor.ExpectedConditions;\n// Waits for the element with id 'abc' to be no longer present on the dom.\nbrowser.wait(EC.stalenessOf($('#abc')), 5000);",
    "fileName": "expectedConditions",
    "name": "ExpectedConditions.prototype.stalenessOf",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The element to check",
        "startingLine": 300,
        "typeExpression": "!ElementFinder",
        "type": {
          "type": "NameExpression",
          "name": "ElementFinder",
          "nullable": false
        },
        "typeList": [
          "ElementFinder"
        ],
        "name": "elementFinder",
        "paramString": "&#33;[ElementFinder](ElementFinder)"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "An expected condition that returns a promise representing whether the element is stale.",
      "startingLine": 302,
      "typeExpression": "!function",
      "type": {
        "type": "FunctionType",
        "params": [],
        "nullable": false
      },
      "typeList": [
        "!function"
      ]
    },
    "returnString": "!function",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/expectedConditions.js#L292"
  },
  {
    "description": "<p>An expectation for checking that an element is present on the DOM of a\npage and visible. Visibility means that the element is not only displayed\nbut also has a height and width that is greater than 0. This is the opposite \nof &#39;invisibilityOf&#39;.</p>\n",
    "example": "var EC = protractor.ExpectedConditions;\n// Waits for the element with id 'abc' to be visible on the dom.\nbrowser.wait(EC.visibilityOf($('#abc')), 5000);",
    "fileName": "expectedConditions",
    "name": "ExpectedConditions.prototype.visibilityOf",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The element to check",
        "startingLine": 320,
        "typeExpression": "!ElementFinder",
        "type": {
          "type": "NameExpression",
          "name": "ElementFinder",
          "nullable": false
        },
        "typeList": [
          "ElementFinder"
        ],
        "name": "elementFinder",
        "paramString": "&#33;[ElementFinder](ElementFinder)"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "An expected condition that returns a promise representing whether the element is visible.",
      "startingLine": 322,
      "typeExpression": "!function",
      "type": {
        "type": "FunctionType",
        "params": [],
        "nullable": false
      },
      "typeList": [
        "!function"
      ]
    },
    "returnString": "!function",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/expectedConditions.js#L310"
  },
  {
    "description": "<p>An expectation for checking that an element is either invisible or not\npresent on the DOM. This is the opposite of &#39;visibilityOf&#39;.</p>\n",
    "example": "var EC = protractor.ExpectedConditions;\n// Waits for the element with id 'abc' to be no longer visible on the dom.\nbrowser.wait(EC.invisibilityOf($('#abc')), 5000);",
    "fileName": "expectedConditions",
    "name": "ExpectedConditions.prototype.invisibilityOf",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The element to check",
        "startingLine": 340,
        "typeExpression": "!ElementFinder",
        "type": {
          "type": "NameExpression",
          "name": "ElementFinder",
          "nullable": false
        },
        "typeList": [
          "ElementFinder"
        ],
        "name": "elementFinder",
        "paramString": "&#33;[ElementFinder](ElementFinder)"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "An expected condition that returns a promise representing whether the element is invisible.",
      "startingLine": 342,
      "typeExpression": "!function",
      "type": {
        "type": "FunctionType",
        "params": [],
        "nullable": false
      },
      "typeList": [
        "!function"
      ]
    },
    "returnString": "!function",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/expectedConditions.js#L332"
  },
  {
    "description": "<p>An expectation for checking the selection is selected.</p>\n",
    "example": "var EC = protractor.ExpectedConditions;\n// Waits for the element with id 'myCheckbox' to be selected.\nbrowser.wait(EC.elementToBeSelected($('#myCheckbox')), 5000);",
    "fileName": "expectedConditions",
    "name": "ExpectedConditions.prototype.elementToBeSelected",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The element to check",
        "startingLine": 357,
        "typeExpression": "!ElementFinder",
        "type": {
          "type": "NameExpression",
          "name": "ElementFinder",
          "nullable": false
        },
        "typeList": [
          "ElementFinder"
        ],
        "name": "elementFinder",
        "paramString": "&#33;[ElementFinder](ElementFinder)"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "An expected condition that returns a promise representing whether the element is selected.",
      "startingLine": 359,
      "typeExpression": "!function",
      "type": {
        "type": "FunctionType",
        "params": [],
        "nullable": false
      },
      "typeList": [
        "!function"
      ]
    },
    "returnString": "!function",
    "sourceLink": "https://github.com/angular/protractor/blob/3.0.0/lib/expectedConditions.js#L350"
  },
  {
    "description": "<p>An element locator.</p>\n",
    "fileName": "locators",
    "name": "webdriver.Locator",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The type of strategy to use for this locator.",
        "startingLine": 33,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "using",
        "paramString": "string"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The search target of this locator.",
        "startingLine": 34,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "value",
        "paramString": "string"
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/locators.js#L32"
  },
  {
    "description": "<p>A collection of factory functions for creating [<code ng-non-bindable>webdriver.Locator</code>](webdriver.Locator)\ninstances.</p>\n",
    "fileName": "locators",
    "name": "webdriver.By",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/locators.js#L67"
  },
  {
    "description": "<p>Locates elements that have a specific class name. The returned locator\nis equivalent to searching for elements with the CSS selector &quot;.clazz&quot;.</p>\n<br />See [<code ng-non-bindable>http:&#x2F;&#x2F;www.w3.org&#x2F;TR&#x2F;2011&#x2F;WD-html5-20110525&#x2F;elements.html#classes</code>](http://www.w3.org/TR/2011/WD-html5-20110525/elements.html#classes)<br />See [<code ng-non-bindable>http:&#x2F;&#x2F;www.w3.org&#x2F;TR&#x2F;CSS2&#x2F;selector.html#class-html</code>](http://www.w3.org/TR/CSS2/selector.html#class-html)",
    "fileName": "locators",
    "name": "webdriver.By.className",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The class name to search for.",
        "startingLine": 104,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "className",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "The new locator.",
      "startingLine": 105,
      "typeExpression": "!webdriver.Locator",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.Locator",
        "nullable": false
      },
      "typeList": [
        "webdriver.Locator"
      ]
    },
    "returnString": "&#33;[webdriver.Locator](webdriver.Locator)",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/locators.js#L101"
  },
  {
    "description": "<p>Locates elements using a CSS selector. For browsers that do not support\nCSS selectors, WebDriver implementations may return an\ninvalid selector error. An\nimplementation may, however, emulate the CSS selector API.</p>\n<br />See [<code ng-non-bindable>http:&#x2F;&#x2F;www.w3.org&#x2F;TR&#x2F;CSS2&#x2F;selector.html</code>](http://www.w3.org/TR/CSS2/selector.html)",
    "fileName": "locators",
    "name": "webdriver.By.css",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The CSS selector to use.",
        "startingLine": 118,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "selector",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "The new locator.",
      "startingLine": 119,
      "typeExpression": "!webdriver.Locator",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.Locator",
        "nullable": false
      },
      "typeList": [
        "webdriver.Locator"
      ]
    },
    "returnString": "&#33;[webdriver.Locator](webdriver.Locator)",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/locators.js#L113"
  },
  {
    "description": "<p>Locates an element by its ID.</p>\n",
    "fileName": "locators",
    "name": "webdriver.By.id",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The ID to search for.",
        "startingLine": 128,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "id",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "The new locator.",
      "startingLine": 129,
      "typeExpression": "!webdriver.Locator",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.Locator",
        "nullable": false
      },
      "typeList": [
        "webdriver.Locator"
      ]
    },
    "returnString": "&#33;[webdriver.Locator](webdriver.Locator)",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/locators.js#L126"
  },
  {
    "description": "<p>Locates link elements whose [visible text](webdriver.WebElement.prototype.getText) matches the given string.</p>\n",
    "fileName": "locators",
    "name": "webdriver.By.linkText",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The link text to search for.",
        "startingLine": 138,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "text",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "The new locator.",
      "startingLine": 139,
      "typeExpression": "!webdriver.Locator",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.Locator",
        "nullable": false
      },
      "typeList": [
        "webdriver.Locator"
      ]
    },
    "returnString": "&#33;[webdriver.Locator](webdriver.Locator)",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/locators.js#L135"
  },
  {
    "description": "<p>Locates an elements by evaluating a\n[JavaScript expression](webdriver.WebDriver.prototype.executeScript).\nThe result of this expression must be an element or list of elements.</p>\n",
    "fileName": "locators",
    "name": "webdriver.By.js",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The script to execute.",
        "startingLine": 149,
        "typeExpression": "!(string|Function)",
        "type": {
          "type": "TypeUnion",
          "elements": [
            {
              "type": "NameExpression",
              "name": "string"
            },
            {
              "type": "FunctionType",
              "params": []
            }
          ],
          "nullable": false
        },
        "typeList": [
          "string",
          "function()"
        ],
        "name": "script",
        "paramString": "!(string&#124;Function)"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The arguments to pass to the script.",
        "startingLine": 150,
        "typeExpression": "...*",
        "type": {
          "type": "AllLiteral",
          "repeatable": true
        },
        "typeList": [
          "*"
        ],
        "name": "var_args",
        "paramString": "...*"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A new, JavaScript-based locator function.",
      "startingLine": 151,
      "typeExpression": "function(!webdriver.WebDriver): !webdriver.promise.Promise",
      "type": {
        "type": "FunctionType",
        "params": [
          {
            "type": "NameExpression",
            "name": "webdriver.WebDriver",
            "nullable": false
          }
        ],
        "result": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise",
          "nullable": false
        }
      },
      "typeList": [
        "function(!webdriver.WebDriver): !webdriver.promise.Promise"
      ]
    },
    "returnString": "function(&#33;[webdriver.WebDriver](webdriver.WebDriver)): !webdriver.promise.Promise",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/locators.js#L145"
  },
  {
    "description": "<p>Locates elements whose <code ng-non-bindable>name</code> attribute has the given value.</p>\n",
    "fileName": "locators",
    "name": "webdriver.By.name",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The name attribute to search for.",
        "startingLine": 165,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "name",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "The new locator.",
      "startingLine": 166,
      "typeExpression": "!webdriver.Locator",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.Locator",
        "nullable": false
      },
      "typeList": [
        "webdriver.Locator"
      ]
    },
    "returnString": "&#33;[webdriver.Locator](webdriver.Locator)",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/locators.js#L163"
  },
  {
    "description": "<p>Locates link elements whose [visible text](webdriver.WebElement.prototype.getText) contains the given substring.</p>\n",
    "fileName": "locators",
    "name": "webdriver.By.partialLinkText",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The substring to check for in a link's visible text.",
        "startingLine": 175,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "text",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "The new locator.",
      "startingLine": 176,
      "typeExpression": "!webdriver.Locator",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.Locator",
        "nullable": false
      },
      "typeList": [
        "webdriver.Locator"
      ]
    },
    "returnString": "&#33;[webdriver.Locator](webdriver.Locator)",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/locators.js#L172"
  },
  {
    "description": "<p>Locates elements with a given tag name. The returned locator is\nequivalent to using the\n<a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Element.getElementsByTagName\">getElementsByTagName</a>\nDOM function.</p>\n<br />See [<code ng-non-bindable>http:&#x2F;&#x2F;www.w3.org&#x2F;TR&#x2F;REC-DOM-Level-1&#x2F;level-one-core.html</code>](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html)",
    "fileName": "locators",
    "name": "webdriver.By.tagName",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The substring to check for in a link's visible text.",
        "startingLine": 188,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "text",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "The new locator.",
      "startingLine": 189,
      "typeExpression": "!webdriver.Locator",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.Locator",
        "nullable": false
      },
      "typeList": [
        "webdriver.Locator"
      ]
    },
    "returnString": "&#33;[webdriver.Locator](webdriver.Locator)",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/locators.js#L183"
  },
  {
    "description": "<p>Locates elements matching a XPath selector. Care should be taken when\nusing an XPath selector with a [<code ng-non-bindable>webdriver.WebElement</code>](webdriver.WebElement) as WebDriver\nwill respect the context in the specified in the selector. For example,\ngiven the selector <code ng-non-bindable>&amp;quot;&#x2F;&#x2F;div&amp;quot;</code>, WebDriver will search from the\ndocument root regardless of whether the locator was used with a\nWebElement.</p>\n<br />See [<code ng-non-bindable>http:&#x2F;&#x2F;www.w3.org&#x2F;TR&#x2F;xpath&#x2F;</code>](http://www.w3.org/TR/xpath/)",
    "fileName": "locators",
    "name": "webdriver.By.xpath",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The XPath selector to use.",
        "startingLine": 203,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "xpath",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "The new locator.",
      "startingLine": 204,
      "typeExpression": "!webdriver.Locator",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.Locator",
        "nullable": false
      },
      "typeList": [
        "webdriver.Locator"
      ]
    },
    "returnString": "&#33;[webdriver.Locator](webdriver.Locator)",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/locators.js#L196"
  },
  {
    "description": "<p>Verifies that a <code ng-non-bindable>value</code> is a valid locator to use for searching for\nelements on the page.</p>\n",
    "fileName": "locators",
    "name": "webdriver.Locator.checkLocator",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The value to check is a valid locator.",
        "startingLine": 232,
        "typeExpression": "*",
        "type": {
          "type": "AllLiteral"
        },
        "typeList": [
          "*"
        ],
        "name": "value",
        "paramString": "*"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A valid locator object or function.",
      "startingLine": 233,
      "typeExpression": "!(webdriver.Locator|Function)",
      "type": {
        "type": "TypeUnion",
        "elements": [
          {
            "type": "NameExpression",
            "name": "webdriver.Locator"
          },
          {
            "type": "FunctionType",
            "params": []
          }
        ],
        "nullable": false
      },
      "typeList": [
        "webdriver.Locator",
        "function()"
      ]
    },
    "returnString": "!(webdriver.Locator&#124;Function)",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/locators.js#L229"
  },
  {
    "description": "",
    "fileName": "locators",
    "name": "webdriver.Locator.prototype.toString",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/locators.js#L252"
  },
  {
    "description": "<p>Creates a new WebDriver client, which provides control over a browser.</p>\n<p>Every WebDriver command returns a <code ng-non-bindable>webdriver.promise.Promise</code> that\nrepresents the result of that command. Callbacks may be registered on this\nobject to manipulate the command result or catch an expected error. Any\ncommands scheduled with a callback are considered sub-commands and will\nexecute before the next command in the current frame. For example:</p>\n<pre><code>var message = [];\ndriver.call(message.push, message, &#39;a&#39;).then(function() {\n  driver.call(message.push, message, &#39;b&#39;);\n});\ndriver.call(message.push, message, &#39;c&#39;);\ndriver.call(function() {\n  alert(&#39;message is abc? &#39; + (message.join(&#39;&#39;) == &#39;abc&#39;));\n});\n</code></pre>",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "Either a known session or a promise that will be resolved to a session.",
        "startingLine": 73,
        "typeExpression": "!(webdriver.Session|webdriver.promise.Promise)",
        "type": {
          "type": "TypeUnion",
          "elements": [
            {
              "type": "NameExpression",
              "name": "webdriver.Session"
            },
            {
              "type": "NameExpression",
              "name": "webdriver.promise.Promise"
            }
          ],
          "nullable": false
        },
        "typeList": [
          "webdriver.Session",
          "webdriver.promise.Promise"
        ],
        "name": "session",
        "paramString": "!(webdriver.Session&#124;webdriver.promise.Promise)"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The executor to use when sending commands to the browser.",
        "startingLine": 75,
        "typeExpression": "!webdriver.CommandExecutor",
        "type": {
          "type": "NameExpression",
          "name": "webdriver.CommandExecutor",
          "nullable": false
        },
        "typeList": [
          "webdriver.CommandExecutor"
        ],
        "name": "executor",
        "paramString": "!webdriver.CommandExecutor"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The flow to schedule commands through. Defaults to the active flow object.",
        "startingLine": 77,
        "typeExpression": "webdriver.promise.ControlFlow=",
        "type": {
          "type": "NameExpression",
          "name": "webdriver.promise.ControlFlow",
          "optional": true
        },
        "typeList": [
          "webdriver.promise.ControlFlow"
        ],
        "optional": true,
        "name": "opt_flow",
        "paramString": "webdriver.promise.ControlFlow="
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L56"
  },
  {
    "description": "<p>Creates a new WebDriver client for an existing session.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.attachToSession",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "Command executor to use when querying for session details.",
        "startingLine": 99,
        "typeExpression": "!webdriver.CommandExecutor",
        "type": {
          "type": "NameExpression",
          "name": "webdriver.CommandExecutor",
          "nullable": false
        },
        "typeList": [
          "webdriver.CommandExecutor"
        ],
        "name": "executor",
        "paramString": "!webdriver.CommandExecutor"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "ID of the session to attach to.",
        "startingLine": 101,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "sessionId",
        "paramString": "string"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The control flow all driver commands should execute under. Defaults to the <code ng-non-bindable>currently active</code>  control flow.",
        "startingLine": 102,
        "typeExpression": "webdriver.promise.ControlFlow=",
        "type": {
          "type": "NameExpression",
          "name": "webdriver.promise.ControlFlow",
          "optional": true
        },
        "typeList": [
          "webdriver.promise.ControlFlow"
        ],
        "optional": true,
        "name": "opt_flow",
        "paramString": "webdriver.promise.ControlFlow="
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A new client for the specified session.",
      "startingLine": 105,
      "typeExpression": "!webdriver.WebDriver",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.WebDriver",
        "nullable": false
      },
      "typeList": [
        "webdriver.WebDriver"
      ]
    },
    "returnString": "&#33;[webdriver.WebDriver](webdriver.WebDriver)",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L98"
  },
  {
    "description": "<p>Creates a new WebDriver session.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.createSession",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The executor to create the new session with.",
        "startingLine": 118,
        "typeExpression": "!webdriver.CommandExecutor",
        "type": {
          "type": "NameExpression",
          "name": "webdriver.CommandExecutor",
          "nullable": false
        },
        "typeList": [
          "webdriver.CommandExecutor"
        ],
        "name": "executor",
        "paramString": "!webdriver.CommandExecutor"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The desired capabilities for the new session.",
        "startingLine": 120,
        "typeExpression": "!webdriver.Capabilities",
        "type": {
          "type": "NameExpression",
          "name": "webdriver.Capabilities",
          "nullable": false
        },
        "typeList": [
          "webdriver.Capabilities"
        ],
        "name": "desiredCapabilities",
        "paramString": "!webdriver.Capabilities"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The control flow all driver commands should execute under, including the initial session creation. Defaults to the <code ng-non-bindable>currently active</code> control flow.",
        "startingLine": 122,
        "typeExpression": "webdriver.promise.ControlFlow=",
        "type": {
          "type": "NameExpression",
          "name": "webdriver.promise.ControlFlow",
          "optional": true
        },
        "typeList": [
          "webdriver.promise.ControlFlow"
        ],
        "optional": true,
        "name": "opt_flow",
        "paramString": "webdriver.promise.ControlFlow="
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "The driver for the newly created session.",
      "startingLine": 126,
      "typeExpression": "!webdriver.WebDriver",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.WebDriver",
        "nullable": false
      },
      "typeList": [
        "webdriver.WebDriver"
      ]
    },
    "returnString": "&#33;[webdriver.WebDriver](webdriver.WebDriver)",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L117"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.prototype.controlFlow",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "The control flow used by this instance.",
      "startingLine": 320,
      "typeExpression": "!webdriver.promise.ControlFlow",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.promise.ControlFlow",
        "nullable": false
      },
      "typeList": [
        "webdriver.promise.ControlFlow"
      ]
    },
    "returnString": "!webdriver.promise.ControlFlow",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L320"
  },
  {
    "description": "<p>Schedules a <code ng-non-bindable>webdriver.Command</code> to be executed by this driver&#39;s\n<code ng-non-bindable>webdriver.CommandExecutor</code>.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.prototype.schedule",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The command to schedule.",
        "startingLine": 331,
        "typeExpression": "!webdriver.Command",
        "type": {
          "type": "NameExpression",
          "name": "webdriver.Command",
          "nullable": false
        },
        "typeList": [
          "webdriver.Command"
        ],
        "name": "command",
        "paramString": "!webdriver.Command"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "A description of the command for debugging.",
        "startingLine": 332,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "description",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved with the command result.",
      "startingLine": 333,
      "typeExpression": "!webdriver.promise.Promise.<T>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "T"
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<T>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;T&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L329"
  },
  {
    "description": "<p>Sets the [file detector](webdriver.FileDetector) that should be\nused with this instance.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.prototype.setFileDetector",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The detector to use or <code ng-non-bindable>null</code>.",
        "startingLine": 404,
        "typeExpression": "webdriver.FileDetector",
        "type": {
          "type": "NameExpression",
          "name": "webdriver.FileDetector"
        },
        "typeList": [
          "webdriver.FileDetector"
        ],
        "name": "detector",
        "paramString": "[webdriver.FileDetector](webdriver.FileDetector)"
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L402"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.prototype.getSession",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise for this client's session.",
      "startingLine": 417,
      "typeExpression": "!webdriver.promise.Promise.<!webdriver.Session>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "webdriver.Session",
            "nullable": false
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<!webdriver.Session>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;!webdriver.Session&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L417"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.prototype.getCapabilities",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will resolve with the this instance's capabilities.",
      "startingLine": 426,
      "typeExpression": "!webdriver.promise.Promise.<!webdriver.Capabilities>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "webdriver.Capabilities",
            "nullable": false
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<!webdriver.Capabilities>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;!webdriver.Capabilities&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L426"
  },
  {
    "description": "<p>Schedules a command to quit the current session. After calling quit, this\ninstance will be invalidated and may no longer be used to issue commands\nagainst the browser.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.prototype.quit",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved when the command has completed.",
      "startingLine": 440,
      "typeExpression": "!webdriver.promise.Promise.<void>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "void",
            "reservedWord": true
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<void>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;void&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L437"
  },
  {
    "description": "<p>Creates a new action sequence using this driver. The sequence will not be\nscheduled for execution until <code ng-non-bindable>webdriver.ActionSequence#perform</code> is\ncalled. Example:</p>\n<pre><code>driver.actions().\n    mouseDown(element1).\n    mouseMove(element2).\n    mouseUp().\n    perform();\n</code></pre>",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.prototype.actions",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A new action sequence for this instance.",
      "startingLine": 466,
      "typeExpression": "!webdriver.ActionSequence",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.ActionSequence",
        "nullable": false
      },
      "typeList": [
        "webdriver.ActionSequence"
      ]
    },
    "returnString": "!webdriver.ActionSequence",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L456"
  },
  {
    "description": "<p>Creates a new touch sequence using this driver. The sequence will not be\nscheduled for execution until <code ng-non-bindable>webdriver.TouchSequence#perform</code> is\ncalled. Example:</p>\n<pre><code>driver.touchActions().\n    tap(element1).\n    doubleTap(element2).\n    perform();\n</code></pre>",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.prototype.touchActions",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A new touch sequence for this instance.",
      "startingLine": 483,
      "typeExpression": "!webdriver.TouchSequence",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.TouchSequence",
        "nullable": false
      },
      "typeList": [
        "webdriver.TouchSequence"
      ]
    },
    "returnString": "!webdriver.TouchSequence",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L474"
  },
  {
    "description": "<p>Schedules a command to execute JavaScript in the context of the currently\nselected frame or window. The script fragment will be executed as the body\nof an anonymous function. If the script is provided as a function object,\nthat function will be converted to a string for injection into the target\nwindow.</p>\n<p>Any arguments provided in addition to the script will be included as script\narguments and may be referenced using the <code ng-non-bindable>arguments</code> object.\nArguments may be a boolean, number, string, or <code ng-non-bindable>webdriver.WebElement</code>.\nArrays and objects may also be used as script arguments as long as each item\nadheres to the types previously mentioned.</p>\n<p>The script may refer to any variables accessible from the current window.\nFurthermore, the script will execute in the window&#39;s context, thus\n<code ng-non-bindable>document</code> may be used to refer to the current document. Any local\nvariables will not be available once the script has finished executing,\nthough global variables will persist.</p>\n<p>If the script has a return value (i.e. if the script contains a return\nstatement), then the following steps will be taken for resolving this\nfunctions return value:</p>\n<ul>\n<li>For a HTML element, the value will resolve to a\n  [<code ng-non-bindable>webdriver.WebElement</code>](webdriver.WebElement)</li>\n<li>Null and undefined return values will resolve to null</li></li>\n<li>Booleans, numbers, and strings will resolve as is</li></li>\n<li>Functions will resolve to their string representation</li></li>\n<li>For arrays and objects, each member item will be converted according to\n  the rules above</li>\n</ul>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.prototype.executeScript",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The script to execute.",
        "startingLine": 521,
        "typeExpression": "!(string|Function)",
        "type": {
          "type": "TypeUnion",
          "elements": [
            {
              "type": "NameExpression",
              "name": "string"
            },
            {
              "type": "FunctionType",
              "params": []
            }
          ],
          "nullable": false
        },
        "typeList": [
          "string",
          "function()"
        ],
        "name": "script",
        "paramString": "!(string&#124;Function)"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The arguments to pass to the script.",
        "startingLine": 522,
        "typeExpression": "...*",
        "type": {
          "type": "AllLiteral",
          "repeatable": true
        },
        "typeList": [
          "*"
        ],
        "name": "var_args",
        "paramString": "...*"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will resolve to the scripts return value.",
      "startingLine": 523,
      "typeExpression": "!webdriver.promise.Promise.<T>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "T"
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<T>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;T&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L491"
  },
  {
    "description": "<p>Schedules a command to execute asynchronous JavaScript in the context of the\ncurrently selected frame or window. The script fragment will be executed as\nthe body of an anonymous function. If the script is provided as a function\nobject, that function will be converted to a string for injection into the\ntarget window.</p>\n<p>Any arguments provided in addition to the script will be included as script\narguments and may be referenced using the <code ng-non-bindable>arguments</code> object.\nArguments may be a boolean, number, string, or <code ng-non-bindable>webdriver.WebElement</code>.\nArrays and objects may also be used as script arguments as long as each item\nadheres to the types previously mentioned.</p>\n<p>Unlike executing synchronous JavaScript with [<code ng-non-bindable>#executeScript</code>](webdriver.WebDriver.prototype.executeScript),\nscripts executed with this function must explicitly signal they are finished\nby invoking the provided callback. This callback will always be injected\ninto the executed function as the last argument, and thus may be referenced\nwith <code ng-non-bindable>arguments[arguments.length - 1]</code>. The following steps will be\ntaken for resolving this functions return value against the first argument\nto the script&#39;s callback function:</p>\n<ul>\n<li>For a HTML element, the value will resolve to a\n  [<code ng-non-bindable>webdriver.WebElement</code>](webdriver.WebElement)</li>\n<li>Null and undefined return values will resolve to null</li>\n<li>Booleans, numbers, and strings will resolve as is</li>\n<li>Functions will resolve to their string representation</li>\n<li>For arrays and objects, each member item will be converted according to\n  the rules above</li>\n</ul>\n<p><strong>Example #1:</strong> Performing a sleep that is synchronized with the currently\nselected window:</p>\n<pre><code>var start = new Date().getTime();\ndriver.executeAsyncScript(\n    &#39;window.setTimeout(arguments[arguments.length - 1], 500);&#39;).\n    then(function() {\n      console.log(\n          &#39;Elapsed time: &#39; + (new Date().getTime() - start) + &#39; ms&#39;);\n    });\n</code></pre><p><strong>Example #2:</strong> Synchronizing a test with an AJAX application:</p>\n<pre><code>var button = driver.findElement(By.id(&#39;compose-button&#39;));\nbutton.click();\ndriver.executeAsyncScript(\n    &#39;var callback = arguments[arguments.length - 1];&#39; +\n    &#39;mailClient.getComposeWindowWidget().onload(callback);&#39;);\ndriver.switchTo().frame(&#39;composeWidget&#39;);\ndriver.findElement(By.id(&#39;to&#39;)).sendKeys(&#39;dog@example.com&#39;);\n</code></pre><p><strong>Example #3:</strong> Injecting a XMLHttpRequest and waiting for the result. In\nthis example, the inject script is specified with a function literal. When\nusing this format, the function is converted to a string for injection, so it\nshould not reference any symbols not defined in the scope of the page under\ntest.</p>\n<pre><code>driver.executeAsyncScript(function() {\n  var callback = arguments[arguments.length - 1];\n  var xhr = new XMLHttpRequest();\n  xhr.open(&quot;GET&quot;, &quot;/resource/data.json&quot;, true);\n  xhr.onreadystatechange = function() {\n    if (xhr.readyState == 4) {\n      callback(xhr.responseText);\n    }\n  };\n  xhr.send(&#39;&#39;);\n}).then(function(str) {\n  console.log(JSON.parse(str)[&#39;food&#39;]);\n});\n</code></pre>",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.prototype.executeAsyncScript",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The script to execute.",
        "startingLine": 610,
        "typeExpression": "!(string|Function)",
        "type": {
          "type": "TypeUnion",
          "elements": [
            {
              "type": "NameExpression",
              "name": "string"
            },
            {
              "type": "FunctionType",
              "params": []
            }
          ],
          "nullable": false
        },
        "typeList": [
          "string",
          "function()"
        ],
        "name": "script",
        "paramString": "!(string&#124;Function)"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The arguments to pass to the script.",
        "startingLine": 611,
        "typeExpression": "...*",
        "type": {
          "type": "AllLiteral",
          "repeatable": true
        },
        "typeList": [
          "*"
        ],
        "name": "var_args",
        "paramString": "...*"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will resolve to the scripts return value.",
      "startingLine": 612,
      "typeExpression": "!webdriver.promise.Promise.<T>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "T"
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<T>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;T&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L541"
  },
  {
    "description": "<p>Schedules a command to execute a custom function.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.prototype.call",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The function to execute.",
        "startingLine": 630,
        "typeExpression": "function(...): (T|webdriver.promise.Promise.<T>)",
        "type": {
          "type": "FunctionType",
          "params": [
            ""
          ],
          "result": {
            "type": "TypeUnion",
            "elements": [
              {
                "type": "NameExpression",
                "name": "T"
              },
              {
                "type": "TypeApplication",
                "expression": {
                  "type": "NameExpression",
                  "name": "webdriver.promise.Promise"
                },
                "applications": [
                  {
                    "type": "NameExpression",
                    "name": "T"
                  }
                ]
              }
            ]
          }
        },
        "typeList": [
          "function(...): (T|webdriver.promise.Promise.<T>)"
        ],
        "name": "fn",
        "paramString": "function(...): (T&#124;webdriver.promise.Promise.&lt;T&gt;)"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The object in whose scope to execute the function.",
        "startingLine": 632,
        "typeExpression": "Object=",
        "type": {
          "type": "NameExpression",
          "name": "Object",
          "optional": true
        },
        "typeList": [
          "Object"
        ],
        "optional": true,
        "name": "opt_scope",
        "paramString": "Object="
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "Any arguments to pass to the function.",
        "startingLine": 633,
        "typeExpression": "...*",
        "type": {
          "type": "AllLiteral",
          "repeatable": true
        },
        "typeList": [
          "*"
        ],
        "name": "var_args",
        "paramString": "...*"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved' with the function's result.",
      "startingLine": 634,
      "typeExpression": "!webdriver.promise.Promise.<T>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "T"
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<T>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;T&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L629"
  },
  {
    "description": "<p>Schedules a command to wait for a condition to hold. The condition may be\nspecified by a <code ng-non-bindable>webdriver.until.Condition</code>, as a custom function, or\nas a <code ng-non-bindable>webdriver.promise.Promise</code>.</p>\n<p>For a <code ng-non-bindable>webdriver.until.Condition</code> or function, the wait will repeatedly\nevaluate the condition until it returns a truthy value. If any errors occur\nwhile evaluating the condition, they will be allowed to propagate. In the\nevent a condition returns a <code ng-non-bindable>promise</code>, the\npolling loop will wait for it to be resolved and use the resolved value for\nwhether the condition has been satisified. Note the resolution time for\na promise is factored into whether a wait has timed out.</p>\n<p><em>Example:</em> waiting up to 10 seconds for an element to be present and visible\non the page.</p>\n<pre><code>var button = driver.wait(until.elementLocated(By.id(&#39;foo&#39;)), 10000);\nbutton.click();\n</code></pre><p>This function may also be used to block the command flow on the resolution\nof a <code ng-non-bindable>promise</code>. When given a promise, the\ncommand will simply wait for its resolution before completing. A timeout may\nbe provided to fail the command if the promise does not resolve before the\ntimeout expires.</p>\n<p><em>Example:</em> Suppose you have a function, <code>startTestServer</code>, that returns a\npromise for when a server is ready for requests. You can block a <code>WebDriver</code>\nclient on this promise with:</p>\n<pre><code>var started = startTestServer();\ndriver.wait(started, 5 * 1000, &#39;Server should start within 5 seconds&#39;);\ndriver.get(getServerUrl());\n</code></pre>",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.prototype.wait",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The condition to wait on, defined as a promise, condition object, or  a function to evaluate as a condition.",
        "startingLine": 686,
        "typeExpression": "!(webdriver.promise.Promise<T>|\n          webdriver.until.Condition<T>|\n          function(!webdriver.WebDriver): T)",
        "type": {
          "type": "TypeUnion",
          "elements": [
            {
              "type": "TypeApplication",
              "expression": {
                "type": "NameExpression",
                "name": "webdriver.promise.Promise"
              },
              "applications": [
                {
                  "type": "NameExpression",
                  "name": "T"
                }
              ]
            },
            {
              "type": "TypeApplication",
              "expression": {
                "type": "NameExpression",
                "name": "webdriver.until.Condition"
              },
              "applications": [
                {
                  "type": "NameExpression",
                  "name": "T"
                }
              ]
            },
            {
              "type": "FunctionType",
              "params": [
                {
                  "type": "NameExpression",
                  "name": "webdriver.WebDriver",
                  "nullable": false
                }
              ],
              "result": {
                "type": "NameExpression",
                "name": "T"
              }
            }
          ],
          "nullable": false
        },
        "typeList": [
          "webdriver.promise.Promise.<T>",
          "webdriver.until.Condition.<T>",
          "function(!webdriver.WebDriver): T"
        ],
        "name": "condition",
        "paramString": "!(webdriver.promise.Promise&lt;T&gt;&#124;\n          webdriver.until.Condition&lt;T&gt;&#124;\n          function(!webdriver.WebDriver): T)"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "How long to wait for the condition to be true.",
        "startingLine": 691,
        "typeExpression": "number=",
        "type": {
          "type": "NameExpression",
          "name": "number",
          "optional": true
        },
        "typeList": [
          "number"
        ],
        "optional": true,
        "name": "opt_timeout",
        "paramString": "number="
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "An optional message to use if the wait times out.",
        "startingLine": 692,
        "typeExpression": "string=",
        "type": {
          "type": "NameExpression",
          "name": "string",
          "optional": true
        },
        "typeList": [
          "string"
        ],
        "optional": true,
        "name": "opt_message",
        "paramString": "string="
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be fulfilled with the first truthy value returned by the condition function, or rejected if the condition times out.",
      "startingLine": 694,
      "typeExpression": "!webdriver.promise.Promise<T>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "T"
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise<T>"
      ]
    },
    "returnString": "!webdriver.promise.Promise&lt;T&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L654"
  },
  {
    "description": "<p>Schedules a command to make the driver sleep for the given amount of time.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.prototype.sleep",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The amount of time, in milliseconds, to sleep.",
        "startingLine": 726,
        "typeExpression": "number",
        "type": {
          "type": "NameExpression",
          "name": "number"
        },
        "typeList": [
          "number"
        ],
        "name": "ms",
        "paramString": "number"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved when the sleep has finished.",
      "startingLine": 727,
      "typeExpression": "!webdriver.promise.Promise.<void>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "void",
            "reservedWord": true
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<void>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;void&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L725"
  },
  {
    "description": "<p>Schedules a command to retrieve they current window handle.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.prototype.getWindowHandle",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved with the current window handle.",
      "startingLine": 737,
      "typeExpression": "!webdriver.promise.Promise.<string>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "string"
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<string>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;string&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L736"
  },
  {
    "description": "<p>Schedules a command to retrieve the current list of available window handles.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.prototype.getAllWindowHandles",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved with an array of window handles.",
      "startingLine": 749,
      "typeExpression": "!webdriver.promise.Promise.<!Array.<string>>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "TypeApplication",
            "expression": {
              "type": "NameExpression",
              "name": "Array"
            },
            "applications": [
              {
                "type": "NameExpression",
                "name": "string"
              }
            ],
            "nullable": false
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<!Array.<string>>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;!Array.&lt;string&gt;&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L748"
  },
  {
    "description": "<p>Schedules a command to retrieve the current page&#39;s source. The page source\nreturned is a representation of the underlying DOM: do not expect it to be\nformatted or escaped in the same way as the response sent from the web\nserver.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.prototype.getPageSource",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved with the current page source.",
      "startingLine": 764,
      "typeExpression": "!webdriver.promise.Promise.<string>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "string"
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<string>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;string&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L760"
  },
  {
    "description": "<p>Schedules a command to close the current window.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.prototype.close",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved when this command has completed.",
      "startingLine": 776,
      "typeExpression": "!webdriver.promise.Promise.<void>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "void",
            "reservedWord": true
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<void>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;void&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L775"
  },
  {
    "description": "<p>Schedules a command to navigate to the given URL.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.prototype.get",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The fully qualified URL to open.",
        "startingLine": 787,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "url",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved when the document has finished loading.",
      "startingLine": 788,
      "typeExpression": "!webdriver.promise.Promise.<void>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "void",
            "reservedWord": true
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<void>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;void&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L786"
  },
  {
    "description": "<p>Schedules a command to retrieve the URL of the current page.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.prototype.getCurrentUrl",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved with the current URL.",
      "startingLine": 798,
      "typeExpression": "!webdriver.promise.Promise.<string>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "string"
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<string>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;string&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L797"
  },
  {
    "description": "<p>Schedules a command to retrieve the current page&#39;s title.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.prototype.getTitle",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved with the current page's title.",
      "startingLine": 810,
      "typeExpression": "!webdriver.promise.Promise.<string>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "string"
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<string>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;string&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L809"
  },
  {
    "description": "<p>Schedule a command to find an element on the page. If the element cannot be\nfound, a <code ng-non-bindable>bot.ErrorCode.NO_SUCH_ELEMENT</code> result will be returned\nby the driver. Unlike other commands, this error cannot be suppressed. In\nother words, scheduling a command to find an element doubles as an assert\nthat the element is present on the page. To test whether an element is\npresent on the page, use [<code ng-non-bindable>#isElementPresent</code>](webdriver.WebDriver.prototype.isElementPresent) instead.</p>\n<p>The search criteria for an element may be defined using one of the\nfactories in the [<code ng-non-bindable>webdriver.By</code>](webdriver.By) namespace, or as a short-hand\n<code ng-non-bindable>webdriver.By.Hash</code> object. For example, the following two statements\nare equivalent:</p>\n<pre><code>var e1 = driver.findElement(By.id(&#39;foo&#39;));\nvar e2 = driver.findElement({id:&#39;foo&#39;});\n</code></pre><p>You may also provide a custom locator function, which takes as input\nthis WebDriver instance and returns a [<code ng-non-bindable>webdriver.WebElement</code>](webdriver.WebElement), or a\npromise that will resolve to a WebElement. For example, to find the first\nvisible link on a page, you could write:</p>\n<pre><code>var link = driver.findElement(firstVisibleLink);\n\nfunction firstVisibleLink(driver) {\n  var links = driver.findElements(By.tagName(&#39;a&#39;));\n  return webdriver.promise.filter(links, function(link) {\n    return links.isDisplayed();\n  }).then(function(visibleLinks) {\n    return visibleLinks[0];\n  });\n}\n</code></pre><p>When running in the browser, a WebDriver cannot manipulate DOM elements\ndirectly; it may do so only through a [<code ng-non-bindable>webdriver.WebElement</code>](webdriver.WebElement) reference.\nThis function may be used to generate a WebElement from a DOM element. A\nreference to the DOM element will be stored in a known location and this\ndriver will attempt to retrieve it through [<code ng-non-bindable>#executeScript</code>](webdriver.WebDriver.prototype.executeScript). If the\nelement cannot be found (eg, it belongs to a different document than the\none this instance is currently focused on), a\n<code ng-non-bindable>bot.ErrorCode.NO_SUCH_ELEMENT</code> error will be returned.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.prototype.findElement",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The locator to use.",
        "startingLine": 860,
        "typeExpression": "!(webdriver.Locator|webdriver.By.Hash|Element|Function)",
        "type": {
          "type": "TypeUnion",
          "elements": [
            {
              "type": "NameExpression",
              "name": "webdriver.Locator"
            },
            {
              "type": "NameExpression",
              "name": "webdriver.By.Hash"
            },
            {
              "type": "NameExpression",
              "name": "Element"
            },
            {
              "type": "FunctionType",
              "params": []
            }
          ],
          "nullable": false
        },
        "typeList": [
          "webdriver.Locator",
          "webdriver.By.Hash",
          "Element",
          "function()"
        ],
        "name": "locator",
        "paramString": "!(webdriver.Locator&#124;webdriver.By.Hash&#124;Element&#124;Function)"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A WebElement that can be used to issue commands against the located element. If the element is not found, the element will be invalidated and all scheduled commands aborted.",
      "startingLine": 862,
      "typeExpression": "!webdriver.WebElement",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.WebElement",
        "nullable": false
      },
      "typeList": [
        "webdriver.WebElement"
      ]
    },
    "returnString": "&#33;[webdriver.WebElement](webdriver.WebElement)",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L820"
  },
  {
    "description": "<p>Schedules a command to test if an element is present on the page.</p>\n<p>If given a DOM element, this function will check if it belongs to the\ndocument the driver is currently focused on. Otherwise, the function will\ntest if at least one element can be found with the given search criteria.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.prototype.isElementPresent",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The locator to use, or the actual DOM element to be located by the server.",
        "startingLine": 967,
        "typeExpression": "!(webdriver.Locator|webdriver.By.Hash|Element|\n          Function)",
        "type": {
          "type": "TypeUnion",
          "elements": [
            {
              "type": "NameExpression",
              "name": "webdriver.Locator"
            },
            {
              "type": "NameExpression",
              "name": "webdriver.By.Hash"
            },
            {
              "type": "NameExpression",
              "name": "Element"
            },
            {
              "type": "FunctionType",
              "params": []
            }
          ],
          "nullable": false
        },
        "typeList": [
          "webdriver.Locator",
          "webdriver.By.Hash",
          "Element",
          "function()"
        ],
        "name": "locatorOrElement",
        "paramString": "!(webdriver.Locator&#124;webdriver.By.Hash&#124;Element&#124;\n          Function)"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will resolve with whether the element is present on the page.",
      "startingLine": 970,
      "typeExpression": "!webdriver.promise.Promise.<boolean>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "boolean"
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<boolean>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;boolean&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L961"
  },
  {
    "description": "<p>Schedule a command to search for multiple elements on the page.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.prototype.findElements",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The locator strategy to use when searching for the element.",
        "startingLine": 988,
        "typeExpression": "!(webdriver.Locator|webdriver.By.Hash|Function)",
        "type": {
          "type": "TypeUnion",
          "elements": [
            {
              "type": "NameExpression",
              "name": "webdriver.Locator"
            },
            {
              "type": "NameExpression",
              "name": "webdriver.By.Hash"
            },
            {
              "type": "FunctionType",
              "params": []
            }
          ],
          "nullable": false
        },
        "typeList": [
          "webdriver.Locator",
          "webdriver.By.Hash",
          "function()"
        ],
        "name": "locator",
        "paramString": "!(webdriver.Locator&#124;webdriver.By.Hash&#124;Function)"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will resolve to an array of WebElements.",
      "startingLine": 990,
      "typeExpression": "!webdriver.promise.Promise.<!Array.<!webdriver.WebElement>>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "TypeApplication",
            "expression": {
              "type": "NameExpression",
              "name": "Array"
            },
            "applications": [
              {
                "type": "NameExpression",
                "name": "webdriver.WebElement",
                "nullable": false
              }
            ],
            "nullable": false
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<!Array.<!webdriver.WebElement>>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;!Array.&lt;!webdriver.WebElement&gt;&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L986"
  },
  {
    "description": "<p>Schedule a command to take a screenshot. The driver makes a best effort to\nreturn a screenshot of the following, in order of preference:</p>\n<ol>\n  <li>Entire page\n  <li>Current window\n  <li>Visible portion of the current frame\n  <li>The screenshot of the entire display containing the browser\n</ol>",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.prototype.takeScreenshot",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved to the screenshot as a base-64 encoded PNG.",
      "startingLine": 1042,
      "typeExpression": "!webdriver.promise.Promise.<string>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "string"
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<string>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;string&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1033"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.prototype.manage",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "The options interface for this instance.",
      "startingLine": 1052,
      "typeExpression": "!webdriver.WebDriver.Options",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.WebDriver.Options",
        "nullable": false
      },
      "typeList": [
        "webdriver.WebDriver.Options"
      ]
    },
    "returnString": "&#33;[webdriver.WebDriver.Options](webdriver.WebDriver.Options)",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1052"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.prototype.navigate",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "The navigation interface for this instance.",
      "startingLine": 1061,
      "typeExpression": "!webdriver.WebDriver.Navigation",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.WebDriver.Navigation",
        "nullable": false
      },
      "typeList": [
        "webdriver.WebDriver.Navigation"
      ]
    },
    "returnString": "&#33;[webdriver.WebDriver.Navigation](webdriver.WebDriver.Navigation)",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1061"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.prototype.switchTo",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "The target locator interface for this instance.",
      "startingLine": 1070,
      "typeExpression": "!webdriver.WebDriver.TargetLocator",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.WebDriver.TargetLocator",
        "nullable": false
      },
      "typeList": [
        "webdriver.WebDriver.TargetLocator"
      ]
    },
    "returnString": "&#33;[webdriver.WebDriver.TargetLocator](webdriver.WebDriver.TargetLocator)",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1070"
  },
  {
    "description": "<p>Interface for navigating back and forth in the browser history.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.Navigation",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The parent driver.",
        "startingLine": 1081,
        "typeExpression": "!webdriver.WebDriver",
        "type": {
          "type": "NameExpression",
          "name": "webdriver.WebDriver",
          "nullable": false
        },
        "typeList": [
          "webdriver.WebDriver"
        ],
        "name": "driver",
        "paramString": "&#33;[webdriver.WebDriver](webdriver.WebDriver)"
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1080"
  },
  {
    "description": "<p>Schedules a command to navigate to a new URL.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.Navigation.prototype.to",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The URL to navigate to.",
        "startingLine": 1093,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "url",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved when the URL has been loaded.",
      "startingLine": 1094,
      "typeExpression": "!webdriver.promise.Promise.<void>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "void",
            "reservedWord": true
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<void>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;void&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1092"
  },
  {
    "description": "<p>Schedules a command to move backwards in the browser history.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.Navigation.prototype.back",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved when the navigation event has completed.",
      "startingLine": 1107,
      "typeExpression": "!webdriver.promise.Promise.<void>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "void",
            "reservedWord": true
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<void>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;void&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1106"
  },
  {
    "description": "<p>Schedules a command to move forwards in the browser history.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.Navigation.prototype.forward",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved when the navigation event has completed.",
      "startingLine": 1119,
      "typeExpression": "!webdriver.promise.Promise.<void>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "void",
            "reservedWord": true
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<void>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;void&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1118"
  },
  {
    "description": "<p>Schedules a command to refresh the current page.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.Navigation.prototype.refresh",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved when the navigation event has completed.",
      "startingLine": 1131,
      "typeExpression": "!webdriver.promise.Promise.<void>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "void",
            "reservedWord": true
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<void>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;void&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1130"
  },
  {
    "description": "<p>Provides methods for managing browser and driver state.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.Options",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The parent driver.",
        "startingLine": 1144,
        "typeExpression": "!webdriver.WebDriver",
        "type": {
          "type": "NameExpression",
          "name": "webdriver.WebDriver",
          "nullable": false
        },
        "typeList": [
          "webdriver.WebDriver"
        ],
        "name": "driver",
        "paramString": "&#33;[webdriver.WebDriver](webdriver.WebDriver)"
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1143"
  },
  {
    "description": "<p>Schedules a command to add a cookie.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.Options.prototype.addCookie",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The cookie name.",
        "startingLine": 1171,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "name",
        "paramString": "string"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The cookie value.",
        "startingLine": 1172,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "value",
        "paramString": "string"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The cookie path.",
        "startingLine": 1173,
        "typeExpression": "string=",
        "type": {
          "type": "NameExpression",
          "name": "string",
          "optional": true
        },
        "typeList": [
          "string"
        ],
        "optional": true,
        "name": "opt_path",
        "paramString": "string="
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The cookie domain.",
        "startingLine": 1174,
        "typeExpression": "string=",
        "type": {
          "type": "NameExpression",
          "name": "string",
          "optional": true
        },
        "typeList": [
          "string"
        ],
        "optional": true,
        "name": "opt_domain",
        "paramString": "string="
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "Whether the cookie is secure.",
        "startingLine": 1175,
        "typeExpression": "boolean=",
        "type": {
          "type": "NameExpression",
          "name": "boolean",
          "optional": true
        },
        "typeList": [
          "boolean"
        ],
        "optional": true,
        "name": "opt_isSecure",
        "paramString": "boolean="
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "When the cookie expires. If specified as a number, should be in milliseconds since midnight, January 1, 1970 UTC.",
        "startingLine": 1176,
        "typeExpression": "(number|!Date)=",
        "type": {
          "type": "TypeUnion",
          "elements": [
            {
              "type": "NameExpression",
              "name": "number"
            },
            {
              "type": "NameExpression",
              "name": "Date",
              "nullable": false
            }
          ],
          "optional": true
        },
        "typeList": [
          "number",
          "Date"
        ],
        "optional": true,
        "name": "opt_expiry",
        "paramString": "(number&#124;!Date)="
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved when the cookie has been added to the page.",
      "startingLine": 1178,
      "typeExpression": "!webdriver.promise.Promise.<void>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "void",
            "reservedWord": true
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<void>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;void&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1170"
  },
  {
    "description": "<p>Schedules a command to delete all cookies visible to the current page.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.Options.prototype.deleteAllCookies",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved when all cookies have been deleted.",
      "startingLine": 1228,
      "typeExpression": "!webdriver.promise.Promise.<void>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "void",
            "reservedWord": true
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<void>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;void&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1227"
  },
  {
    "description": "<p>Schedules a command to delete the cookie with the given name. This command is\na no-op if there is no cookie with the given name visible to the current\npage.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.Options.prototype.deleteCookie",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The name of the cookie to delete.",
        "startingLine": 1242,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "name",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved when the cookie has been deleted.",
      "startingLine": 1243,
      "typeExpression": "!webdriver.promise.Promise.<void>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "void",
            "reservedWord": true
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<void>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;void&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1239"
  },
  {
    "description": "<p>Schedules a command to retrieve all cookies visible to the current page.\nEach cookie will be returned as a JSON object as described by the WebDriver\nwire protocol.</p>\n<br />See [<code ng-non-bindable>https:&#x2F;&#x2F;github.com&#x2F;SeleniumHQ&#x2F;selenium&#x2F;wiki&#x2F;JsonWireProtocol#cookie-json-object</code>](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#cookie-json-object)",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.Options.prototype.getCookies",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved with the cookies visible to the current page.",
      "startingLine": 1258,
      "typeExpression": "!webdriver.promise.Promise.<\n    !Array.<webdriver.WebDriver.Options.Cookie>>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "TypeApplication",
            "expression": {
              "type": "NameExpression",
              "name": "Array"
            },
            "applications": [
              {
                "type": "NameExpression",
                "name": "webdriver.WebDriver.Options.Cookie"
              }
            ],
            "nullable": false
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.< !Array.<webdriver.WebDriver.Options.Cookie>>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;\n    !Array.&lt;webdriver.WebDriver.Options.Cookie&gt;&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1255"
  },
  {
    "description": "<p>Schedules a command to retrieve the cookie with the given name. Returns null\nif there is no such cookie. The cookie will be returned as a JSON object as\ndescribed by the WebDriver wire protocol.</p>\n<br />See [<code ng-non-bindable>https:&#x2F;&#x2F;github.com&#x2F;SeleniumHQ&#x2F;selenium&#x2F;wiki&#x2F;JsonWireProtocol#cookie-json-object</code>](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#cookie-json-object)",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.Options.prototype.getCookie",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The name of the cookie to retrieve.",
        "startingLine": 1274,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "name",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved with the named cookie, or <code ng-non-bindable>null</code> if there is no such cookie.",
      "startingLine": 1275,
      "typeExpression": "!webdriver.promise.Promise.<?webdriver.WebDriver.Options.Cookie>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "webdriver.WebDriver.Options.Cookie",
            "nullable": true
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<?webdriver.WebDriver.Options.Cookie>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;?webdriver.WebDriver.Options.Cookie&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1271"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.Options.prototype.logs",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "The interface for managing driver logs.",
      "startingLine": 1290,
      "typeExpression": "!webdriver.WebDriver.Logs",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.WebDriver.Logs",
        "nullable": false
      },
      "typeList": [
        "webdriver.WebDriver.Logs"
      ]
    },
    "returnString": "&#33;[webdriver.WebDriver.Logs](webdriver.WebDriver.Logs)",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1290"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.Options.prototype.timeouts",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "The interface for managing driver timeouts.",
      "startingLine": 1299,
      "typeExpression": "!webdriver.WebDriver.Timeouts",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.WebDriver.Timeouts",
        "nullable": false
      },
      "typeList": [
        "webdriver.WebDriver.Timeouts"
      ]
    },
    "returnString": "&#33;[webdriver.WebDriver.Timeouts](webdriver.WebDriver.Timeouts)",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1299"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.Options.prototype.window",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "The interface for managing the current window.",
      "startingLine": 1308,
      "typeExpression": "!webdriver.WebDriver.Window",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.WebDriver.Window",
        "nullable": false
      },
      "typeList": [
        "webdriver.WebDriver.Window"
      ]
    },
    "returnString": "&#33;[webdriver.WebDriver.Window](webdriver.WebDriver.Window)",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1308"
  },
  {
    "description": "<p>An interface for managing timeout behavior for WebDriver instances.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.Timeouts",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The parent driver.",
        "startingLine": 1319,
        "typeExpression": "!webdriver.WebDriver",
        "type": {
          "type": "NameExpression",
          "name": "webdriver.WebDriver",
          "nullable": false
        },
        "typeList": [
          "webdriver.WebDriver"
        ],
        "name": "driver",
        "paramString": "&#33;[webdriver.WebDriver](webdriver.WebDriver)"
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1318"
  },
  {
    "description": "<p>Specifies the amount of time the driver should wait when searching for an\nelement if it is not immediately present.</p>\n<p>When searching for a single element, the driver should poll the page\nuntil the element has been found, or this timeout expires before failing\nwith a <code ng-non-bindable>bot.ErrorCode.NO_SUCH_ELEMENT</code> error. When searching\nfor multiple elements, the driver should poll the page until at least one\nelement has been found or this timeout has expired.</p>\n<p>Setting the wait timeout to 0 (its default value), disables implicit\nwaiting.</p>\n<p>Increasing the implicit wait timeout should be used judiciously as it\nwill have an adverse effect on test run time, especially when used with\nslower location strategies like XPath.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.Timeouts.prototype.implicitlyWait",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The amount of time to wait, in milliseconds.",
        "startingLine": 1346,
        "typeExpression": "number",
        "type": {
          "type": "NameExpression",
          "name": "number"
        },
        "typeList": [
          "number"
        ],
        "name": "ms",
        "paramString": "number"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved when the implicit wait timeout has been set.",
      "startingLine": 1347,
      "typeExpression": "!webdriver.promise.Promise.<void>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "void",
            "reservedWord": true
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<void>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;void&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1330"
  },
  {
    "description": "<p>Sets the amount of time to wait, in milliseconds, for an asynchronous script\nto finish execution before returning an error. If the timeout is less than or\nequal to 0, the script will be allowed to run indefinitely.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.Timeouts.prototype.setScriptTimeout",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The amount of time to wait, in milliseconds.",
        "startingLine": 1363,
        "typeExpression": "number",
        "type": {
          "type": "NameExpression",
          "name": "number"
        },
        "typeList": [
          "number"
        ],
        "name": "ms",
        "paramString": "number"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved when the script timeout has been set.",
      "startingLine": 1364,
      "typeExpression": "!webdriver.promise.Promise.<void>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "void",
            "reservedWord": true
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<void>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;void&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1359"
  },
  {
    "description": "<p>Sets the amount of time to wait for a page load to complete before returning\nan error.  If the timeout is negative, page loads may be indefinite.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.Timeouts.prototype.pageLoadTimeout",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The amount of time to wait, in milliseconds.",
        "startingLine": 1378,
        "typeExpression": "number",
        "type": {
          "type": "NameExpression",
          "name": "number"
        },
        "typeList": [
          "number"
        ],
        "name": "ms",
        "paramString": "number"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved when the timeout has been set.",
      "startingLine": 1379,
      "typeExpression": "!webdriver.promise.Promise.<void>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "void",
            "reservedWord": true
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<void>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;void&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1376"
  },
  {
    "description": "<p>An interface for managing the current window.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.Window",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The parent driver.",
        "startingLine": 1394,
        "typeExpression": "!webdriver.WebDriver",
        "type": {
          "type": "NameExpression",
          "name": "webdriver.WebDriver",
          "nullable": false
        },
        "typeList": [
          "webdriver.WebDriver"
        ],
        "name": "driver",
        "paramString": "&#33;[webdriver.WebDriver](webdriver.WebDriver)"
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1393"
  },
  {
    "description": "<p>Retrieves the window&#39;s current position, relative to the top left corner of\nthe screen.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.Window.prototype.getPosition",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved with the window's position in the form of a {x:number, y:number} object literal.",
      "startingLine": 1407,
      "typeExpression": "!webdriver.promise.Promise.<{x: number, y: number}>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "RecordType",
            "fields": [
              {
                "type": "FieldType",
                "key": {
                  "type": "NameExpression",
                  "name": "x"
                },
                "value": {
                  "type": "NameExpression",
                  "name": "number"
                }
              },
              {
                "type": "FieldType",
                "key": {
                  "type": "NameExpression",
                  "name": "y"
                },
                "value": {
                  "type": "NameExpression",
                  "name": "number"
                }
              }
            ]
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<{x: number, y: number}>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;{x: number, y: number}&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1405"
  },
  {
    "description": "<p>Repositions the current window.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.Window.prototype.setPosition",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The desired horizontal position, relative to the left side of the screen.",
        "startingLine": 1421,
        "typeExpression": "number",
        "type": {
          "type": "NameExpression",
          "name": "number"
        },
        "typeList": [
          "number"
        ],
        "name": "x",
        "paramString": "number"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The desired vertical position, relative to the top of the of the screen.",
        "startingLine": 1423,
        "typeExpression": "number",
        "type": {
          "type": "NameExpression",
          "name": "number"
        },
        "typeList": [
          "number"
        ],
        "name": "y",
        "paramString": "number"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved when the command has completed.",
      "startingLine": 1425,
      "typeExpression": "!webdriver.promise.Promise.<void>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "void",
            "reservedWord": true
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<void>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;void&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1420"
  },
  {
    "description": "<p>Retrieves the window&#39;s current size.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.Window.prototype.getSize",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved with the window's size in the form of a {width:number, height:number} object literal.",
      "startingLine": 1440,
      "typeExpression": "!webdriver.promise.Promise.<{width: number, height: number}>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "RecordType",
            "fields": [
              {
                "type": "FieldType",
                "key": {
                  "type": "NameExpression",
                  "name": "width"
                },
                "value": {
                  "type": "NameExpression",
                  "name": "number"
                }
              },
              {
                "type": "FieldType",
                "key": {
                  "type": "NameExpression",
                  "name": "height"
                },
                "value": {
                  "type": "NameExpression",
                  "name": "number"
                }
              }
            ]
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<{width: number, height: number}>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;{width: number, height: number}&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1439"
  },
  {
    "description": "<p>Resizes the current window.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.Window.prototype.setSize",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The desired window width.",
        "startingLine": 1454,
        "typeExpression": "number",
        "type": {
          "type": "NameExpression",
          "name": "number"
        },
        "typeList": [
          "number"
        ],
        "name": "width",
        "paramString": "number"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The desired window height.",
        "startingLine": 1455,
        "typeExpression": "number",
        "type": {
          "type": "NameExpression",
          "name": "number"
        },
        "typeList": [
          "number"
        ],
        "name": "height",
        "paramString": "number"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved when the command has completed.",
      "startingLine": 1456,
      "typeExpression": "!webdriver.promise.Promise.<void>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "void",
            "reservedWord": true
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<void>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;void&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1453"
  },
  {
    "description": "<p>Maximizes the current window.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.Window.prototype.maximize",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved when the command has completed.",
      "startingLine": 1471,
      "typeExpression": "!webdriver.promise.Promise.<void>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "void",
            "reservedWord": true
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<void>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;void&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1470"
  },
  {
    "description": "<p>Interface for managing WebDriver log records.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.Logs",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The parent driver.",
        "startingLine": 1484,
        "typeExpression": "!webdriver.WebDriver",
        "type": {
          "type": "NameExpression",
          "name": "webdriver.WebDriver",
          "nullable": false
        },
        "typeList": [
          "webdriver.WebDriver"
        ],
        "name": "driver",
        "paramString": "&#33;[webdriver.WebDriver](webdriver.WebDriver)"
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1483"
  },
  {
    "description": "<p>Fetches available log entries for the given type.</p>\n<p>Note that log buffers are reset after each call, meaning that available\nlog entries correspond to those entries not yet returned for a given log\ntype. In practice, this means that this call will return the available log\nentries since the last call, or from the start of the session.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.Logs.prototype.get",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The desired log type.",
        "startingLine": 1502,
        "typeExpression": "!webdriver.logging.Type",
        "type": {
          "type": "NameExpression",
          "name": "webdriver.logging.Type",
          "nullable": false
        },
        "typeList": [
          "webdriver.logging.Type"
        ],
        "name": "type",
        "paramString": "!webdriver.logging.Type"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will resolve to a list of log entries for the specified type.",
      "startingLine": 1503,
      "typeExpression": "!webdriver.promise.Promise.<!Array.<!webdriver.logging.Entry>>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "TypeApplication",
            "expression": {
              "type": "NameExpression",
              "name": "Array"
            },
            "applications": [
              {
                "type": "NameExpression",
                "name": "webdriver.logging.Entry",
                "nullable": false
              }
            ],
            "nullable": false
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<!Array.<!webdriver.logging.Entry>>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;!Array.&lt;!webdriver.logging.Entry&gt;&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1495"
  },
  {
    "description": "<p>Retrieves the log types available to this driver.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.Logs.prototype.getAvailableLogTypes",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will resolve to a list of available log types.",
      "startingLine": 1527,
      "typeExpression": "!webdriver.promise.Promise.<!Array.<!webdriver.logging.Type>>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "TypeApplication",
            "expression": {
              "type": "NameExpression",
              "name": "Array"
            },
            "applications": [
              {
                "type": "NameExpression",
                "name": "webdriver.logging.Type",
                "nullable": false
              }
            ],
            "nullable": false
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<!Array.<!webdriver.logging.Type>>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;!Array.&lt;!webdriver.logging.Type&gt;&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1526"
  },
  {
    "description": "<p>An interface for changing the focus of the driver to another frame or window.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.TargetLocator",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The parent driver.",
        "startingLine": 1540,
        "typeExpression": "!webdriver.WebDriver",
        "type": {
          "type": "NameExpression",
          "name": "webdriver.WebDriver",
          "nullable": false
        },
        "typeList": [
          "webdriver.WebDriver"
        ],
        "name": "driver",
        "paramString": "&#33;[webdriver.WebDriver](webdriver.WebDriver)"
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1539"
  },
  {
    "description": "<p>Schedules a command retrieve the <code ng-non-bindable>document.activeElement</code> element on\nthe current document, or <code ng-non-bindable>document.body</code> if activeElement is not\navailable.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.TargetLocator.prototype.activeElement",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "The active element.",
      "startingLine": 1554,
      "typeExpression": "!webdriver.WebElementPromise",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.WebElementPromise",
        "nullable": false
      },
      "typeList": [
        "webdriver.WebElementPromise"
      ]
    },
    "returnString": "&#33;[webdriver.WebElementPromise](webdriver.WebElementPromise)",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1551"
  },
  {
    "description": "<p>Schedules a command to switch focus of all future commands to the first frame\non the page.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.TargetLocator.prototype.defaultContent",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved when the driver has changed focus to the default content.",
      "startingLine": 1567,
      "typeExpression": "!webdriver.promise.Promise.<void>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "void",
            "reservedWord": true
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<void>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;void&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1565"
  },
  {
    "description": "<p>Schedules a command to switch the focus of all future commands to another\nframe on the page.</p>\n<p>If the frame is specified by a number, the command will switch to the frame\nby its (zero-based) index into\n<a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Window.frames\">window.frames</a>.</p>\n<p>If the frame is specified by a string, the command will select the frame by\nits name or ID. To select sub-frames, simply separate the frame names/IDs by\ndots. As an example, &quot;main.child&quot; will select the frame with the name &quot;main&quot;\nand then its child &quot;child&quot;.</p>\n<p>If the specified frame can not be found, the deferred result will errback\nwith a <code ng-non-bindable>bot.ErrorCode.NO_SUCH_FRAME</code> error.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.TargetLocator.prototype.frame",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The frame locator.",
        "startingLine": 1594,
        "typeExpression": "string|number",
        "type": {
          "type": "TypeUnion",
          "elements": [
            {
              "type": "NameExpression",
              "name": "string"
            },
            {
              "type": "NameExpression",
              "name": "number"
            }
          ]
        },
        "typeList": [
          "string",
          "number"
        ],
        "name": "nameOrIndex",
        "paramString": "string&#124;number"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved when the driver has changed focus to the specified frame.",
      "startingLine": 1595,
      "typeExpression": "!webdriver.promise.Promise.<void>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "void",
            "reservedWord": true
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<void>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;void&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1579"
  },
  {
    "description": "<p>Schedules a command to switch the focus of all future commands to another\nwindow. Windows may be specified by their <code ng-non-bindable>window.name</code> attribute or\nby its handle (as returned by <code ng-non-bindable>webdriver.WebDriver#getWindowHandles</code>).</p>\n<p>If the specificed window can not be found, the deferred result will errback\nwith a <code ng-non-bindable>bot.ErrorCode.NO_SUCH_WINDOW</code> error.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.TargetLocator.prototype.window",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The name or window handle of the window to switch focus to.",
        "startingLine": 1614,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "nameOrHandle",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved when the driver has changed focus to the specified window.",
      "startingLine": 1616,
      "typeExpression": "!webdriver.promise.Promise.<void>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "void",
            "reservedWord": true
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<void>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;void&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1607"
  },
  {
    "description": "<p>Schedules a command to change focus to the active alert dialog. This command\nwill return a <code ng-non-bindable>bot.ErrorCode.NO_SUCH_ALERT</code> error if an alert dialog\nis not currently open.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebDriver.TargetLocator.prototype.alert",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "The open alert.",
      "startingLine": 1631,
      "typeExpression": "!webdriver.AlertPromise",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.AlertPromise",
        "nullable": false
      },
      "typeList": [
        "webdriver.AlertPromise"
      ]
    },
    "returnString": "&#33;[webdriver.AlertPromise](webdriver.AlertPromise)",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1628"
  },
  {
    "description": "<p>Simulate pressing many keys at once in a &quot;chord&quot;. Takes a sequence of\n[<code ng-non-bindable>webdriver.Key</code>](webdriver.Key)s or strings, appends each of the values to a string,\nand adds the chord termination key (<code ng-non-bindable>webdriver.Key.NULL</code>) and returns\nthe resultant string.</p>\n<p>Note: when the low-level webdriver key handlers see Keys.NULL, active\nmodifier keys (CTRL/ALT/SHIFT/etc) release via a keyup event.</p>\n<br />See [<code ng-non-bindable>http:&#x2F;&#x2F;code.google.com&#x2F;p&#x2F;webdriver&#x2F;issues&#x2F;detail?id=79</code>](http://code.google.com/p/webdriver/issues/detail?id=79)",
    "fileName": "webdriver",
    "name": "webdriver.Key.chord",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The key sequence to concatenate.",
        "startingLine": 1653,
        "typeExpression": "...string",
        "type": {
          "type": "NameExpression",
          "name": "string",
          "repeatable": true
        },
        "typeList": [
          "string"
        ],
        "name": "var_args",
        "paramString": "...string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "The null-terminated key sequence.",
      "startingLine": 1654,
      "typeExpression": "string",
      "type": {
        "type": "NameExpression",
        "name": "string"
      },
      "typeList": [
        "string"
      ]
    },
    "returnString": "string",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1645"
  },
  {
    "description": "<p>Represents a DOM element. WebElements can be found by searching from the\ndocument root using a [<code ng-non-bindable>webdriver.WebDriver</code>](webdriver.WebDriver) instance, or by searching\nunder another WebElement:</p>\n<pre><code>driver.get(&#39;http://www.google.com&#39;);\nvar searchForm = driver.findElement(By.tagName(&#39;form&#39;));\nvar searchBox = searchForm.findElement(By.name(&#39;q&#39;));\nsearchBox.sendKeys(&#39;webdriver&#39;);\n</code></pre><p>The WebElement is implemented as a promise for compatibility with the promise\nAPI. It will always resolve itself when its internal state has been fully\nresolved and commands may be issued against the element. This can be used to\ncatch errors when an element cannot be located on the page:</p>\n<pre><code>driver.findElement(By.id(&#39;not-there&#39;)).then(function(element) {\n  alert(&#39;Found an element that was not expected to be there!&#39;);\n}, function(error) {\n  alert(&#39;The element was not found, as expected&#39;);\n});\n</code></pre>",
    "extends": "{webdriver.Serializable.<webdriver.WebElement.Id>}",
    "fileName": "webdriver",
    "name": "webdriver.WebElement",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The parent WebDriver instance for this element.",
        "startingLine": 1697,
        "typeExpression": "!webdriver.WebDriver",
        "type": {
          "type": "NameExpression",
          "name": "webdriver.WebDriver",
          "nullable": false
        },
        "typeList": [
          "webdriver.WebDriver"
        ],
        "name": "driver",
        "paramString": "&#33;[webdriver.WebDriver](webdriver.WebDriver)"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The server-assigned opaque ID for the underlying DOM element.",
        "startingLine": 1699,
        "typeExpression": "!(webdriver.promise.Promise.<webdriver.WebElement.Id>|\n          webdriver.WebElement.Id)",
        "type": {
          "type": "TypeUnion",
          "elements": [
            {
              "type": "TypeApplication",
              "expression": {
                "type": "NameExpression",
                "name": "webdriver.promise.Promise"
              },
              "applications": [
                {
                  "type": "NameExpression",
                  "name": "webdriver.WebElement.Id"
                }
              ]
            },
            {
              "type": "NameExpression",
              "name": "webdriver.WebElement.Id"
            }
          ],
          "nullable": false
        },
        "typeList": [
          "webdriver.promise.Promise.<webdriver.WebElement.Id>",
          "webdriver.WebElement.Id"
        ],
        "name": "id",
        "paramString": "!(webdriver.promise.Promise.&lt;webdriver.WebElement.Id&gt;&#124;\n          webdriver.WebElement.Id)"
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1677"
  },
  {
    "description": "<p>Compares to WebElements for equality.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebElement.equals",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "A WebElement.",
        "startingLine": 1737,
        "typeExpression": "!webdriver.WebElement",
        "type": {
          "type": "NameExpression",
          "name": "webdriver.WebElement",
          "nullable": false
        },
        "typeList": [
          "webdriver.WebElement"
        ],
        "name": "a",
        "paramString": "&#33;[webdriver.WebElement](webdriver.WebElement)"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "A WebElement.",
        "startingLine": 1738,
        "typeExpression": "!webdriver.WebElement",
        "type": {
          "type": "NameExpression",
          "name": "webdriver.WebElement",
          "nullable": false
        },
        "typeList": [
          "webdriver.WebElement"
        ],
        "name": "b",
        "paramString": "&#33;[webdriver.WebElement](webdriver.WebElement)"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved to whether the two WebElements are equal.",
      "startingLine": 1739,
      "typeExpression": "!webdriver.promise.Promise.<boolean>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "boolean"
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<boolean>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;boolean&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1736"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "webdriver.WebElement.prototype.getDriver",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "The parent driver for this instance.",
      "startingLine": 1765,
      "typeExpression": "!webdriver.WebDriver",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.WebDriver",
        "nullable": false
      },
      "typeList": [
        "webdriver.WebDriver"
      ]
    },
    "returnString": "&#33;[webdriver.WebDriver](webdriver.WebDriver)",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1765"
  },
  {
    "description": "See [<code ng-non-bindable>https:&#x2F;&#x2F;github.com&#x2F;SeleniumHQ&#x2F;selenium&#x2F;wiki&#x2F;JsonWireProtocol</code>](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol)",
    "fileName": "webdriver",
    "name": "webdriver.WebElement.prototype.getId",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that resolves to this element's JSON representation as defined by the WebDriver wire protocol.",
      "startingLine": 1773,
      "typeExpression": "!webdriver.promise.Promise.<webdriver.WebElement.Id>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "webdriver.WebElement.Id"
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<webdriver.WebElement.Id>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;webdriver.WebElement.Id&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1773"
  },
  {
    "description": "<p>Returns the raw ID string ID for this element.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebElement.prototype.getRawId",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that resolves to this element's raw ID as a string value.",
      "startingLine": 1785,
      "typeExpression": "!webdriver.promise.Promise<string>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "string"
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise<string>"
      ]
    },
    "returnString": "!webdriver.promise.Promise&lt;string&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1784"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "webdriver.WebElement.prototype.serialize",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1797"
  },
  {
    "description": "<p>Schedule a command to find a descendant of this element. If the element\ncannot be found, a <code ng-non-bindable>bot.ErrorCode.NO_SUCH_ELEMENT</code> result will\nbe returned by the driver. Unlike other commands, this error cannot be\nsuppressed. In other words, scheduling a command to find an element doubles\nas an assert that the element is present on the page. To test whether an\nelement is present on the page, use [<code ng-non-bindable>#isElementPresent</code>](webdriver.WebElement.prototype.isElementPresent) instead.</p>\n<p>The search criteria for an element may be defined using one of the\nfactories in the [<code ng-non-bindable>webdriver.By</code>](webdriver.By) namespace, or as a short-hand\n<code ng-non-bindable>webdriver.By.Hash</code> object. For example, the following two statements\nare equivalent:</p>\n<pre><code>var e1 = element.findElement(By.id(&#39;foo&#39;));\nvar e2 = element.findElement({id:&#39;foo&#39;});\n</code></pre><p>You may also provide a custom locator function, which takes as input\nthis WebDriver instance and returns a [<code ng-non-bindable>webdriver.WebElement</code>](webdriver.WebElement), or a\npromise that will resolve to a WebElement. For example, to find the first\nvisible link on a page, you could write:</p>\n<pre><code>var link = element.findElement(firstVisibleLink);\n\nfunction firstVisibleLink(element) {\n  var links = element.findElements(By.tagName(&#39;a&#39;));\n  return webdriver.promise.filter(links, function(link) {\n    return links.isDisplayed();\n  }).then(function(visibleLinks) {\n    return visibleLinks[0];\n  });\n}\n</code></pre>",
    "fileName": "webdriver",
    "name": "webdriver.WebElement.prototype.findElement",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The locator strategy to use when searching for the element.",
        "startingLine": 1852,
        "typeExpression": "!(webdriver.Locator|webdriver.By.Hash|Function)",
        "type": {
          "type": "TypeUnion",
          "elements": [
            {
              "type": "NameExpression",
              "name": "webdriver.Locator"
            },
            {
              "type": "NameExpression",
              "name": "webdriver.By.Hash"
            },
            {
              "type": "FunctionType",
              "params": []
            }
          ],
          "nullable": false
        },
        "typeList": [
          "webdriver.Locator",
          "webdriver.By.Hash",
          "function()"
        ],
        "name": "locator",
        "paramString": "!(webdriver.Locator&#124;webdriver.By.Hash&#124;Function)"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A WebElement that can be used to issue commands against the located element. If the element is not found, the element will be invalidated and all scheduled commands aborted.",
      "startingLine": 1854,
      "typeExpression": "!webdriver.WebElement",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.WebElement",
        "nullable": false
      },
      "typeList": [
        "webdriver.WebElement"
      ]
    },
    "returnString": "&#33;[webdriver.WebElement](webdriver.WebElement)",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1821"
  },
  {
    "description": "<p>Schedules a command to test if there is at least one descendant of this\nelement that matches the given search criteria.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebElement.prototype.isElementPresent",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The locator strategy to use when searching for the element.",
        "startingLine": 1878,
        "typeExpression": "!(webdriver.Locator|webdriver.By.Hash|Function)",
        "type": {
          "type": "TypeUnion",
          "elements": [
            {
              "type": "NameExpression",
              "name": "webdriver.Locator"
            },
            {
              "type": "NameExpression",
              "name": "webdriver.By.Hash"
            },
            {
              "type": "FunctionType",
              "params": []
            }
          ],
          "nullable": false
        },
        "typeList": [
          "webdriver.Locator",
          "webdriver.By.Hash",
          "function()"
        ],
        "name": "locator",
        "paramString": "!(webdriver.Locator&#124;webdriver.By.Hash&#124;Function)"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved with whether an element could be located on the page.",
      "startingLine": 1880,
      "typeExpression": "!webdriver.promise.Promise.<boolean>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "boolean"
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<boolean>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;boolean&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1875"
  },
  {
    "description": "<p>Schedules a command to find all of the descendants of this element that\nmatch the given search criteria.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebElement.prototype.findElements",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The locator strategy to use when searching for the elements.",
        "startingLine": 1894,
        "typeExpression": "!(webdriver.Locator|webdriver.By.Hash|Function)",
        "type": {
          "type": "TypeUnion",
          "elements": [
            {
              "type": "NameExpression",
              "name": "webdriver.Locator"
            },
            {
              "type": "NameExpression",
              "name": "webdriver.By.Hash"
            },
            {
              "type": "FunctionType",
              "params": []
            }
          ],
          "nullable": false
        },
        "typeList": [
          "webdriver.Locator",
          "webdriver.By.Hash",
          "function()"
        ],
        "name": "locator",
        "paramString": "!(webdriver.Locator&#124;webdriver.By.Hash&#124;Function)"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will resolve to an array of WebElements.",
      "startingLine": 1896,
      "typeExpression": "!webdriver.promise.Promise.<!Array.<!webdriver.WebElement>>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "TypeApplication",
            "expression": {
              "type": "NameExpression",
              "name": "Array"
            },
            "applications": [
              {
                "type": "NameExpression",
                "name": "webdriver.WebElement",
                "nullable": false
              }
            ],
            "nullable": false
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<!Array.<!webdriver.WebElement>>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;!Array.&lt;!webdriver.WebElement&gt;&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1891"
  },
  {
    "description": "<p>Schedules a command to click on this element.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebElement.prototype.click",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved when the click command has completed.",
      "startingLine": 1915,
      "typeExpression": "!webdriver.promise.Promise.<void>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "void",
            "reservedWord": true
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<void>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;void&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1914"
  },
  {
    "description": "<p>Schedules a command to type a sequence on the DOM element represented by this\ninstance.</p>\n<p>Modifier keys (SHIFT, CONTROL, ALT, META) are stateful; once a modifier is\nprocessed in the keysequence, that key state is toggled until one of the\nfollowing occurs:</p>\n<ul>\n<li>The modifier key is encountered again in the sequence. At this point the\nstate of the key is toggled (along with the appropriate keyup/down events).</li>\n<li><p>The <code ng-non-bindable>webdriver.Key.NULL</code> key is encountered in the sequence. When\nthis key is encountered, all modifier keys current in the down state are\nreleased (with accompanying keyup events). The NULL key can be used to\nsimulate common keyboard shortcuts:</p>\n<pre><code>  element.sendKeys(&quot;text was&quot;,\n                   webdriver.Key.CONTROL, &quot;a&quot;, webdriver.Key.NULL,\n                   &quot;now text is&quot;);\n  // Alternatively:\n  element.sendKeys(&quot;text was&quot;,\n                   webdriver.Key.chord(webdriver.Key.CONTROL, &quot;a&quot;),\n                   &quot;now text is&quot;);\n</code></pre></li>\n<li><p>The end of the keysequence is encountered. When there are no more keys\nto type, all depressed modifier keys are released (with accompanying keyup\nevents).</p>\n</li>\n</ul>\n<p>If this element is a file input (<code ng-non-bindable>&lt;input type=\"file\"&gt;</code>), the\nspecified key sequence should specify the path to the file to attach to\nthe element. This is analgous to the user clicking &quot;Browse...&quot; and entering\nthe path into the file select dialog.</p>\n<pre><code>var form = driver.findElement(By.css(&#39;form&#39;));\nvar element = form.findElement(By.css(&#39;input[type=file]&#39;));\nelement.sendKeys(&#39;/path/to/file.txt&#39;);\nform.submit();\n</code></pre><p>For uploads to function correctly, the entered path must reference a file\non the <em>browser&#39;s</em> machine, not the local machine running this script. When\nrunning against a remote Selenium server, a [<code ng-non-bindable>webdriver.FileDetector</code>](webdriver.FileDetector)\nmay be used to transparently copy files to the remote machine before\nattempting to upload them in the browser.</p>\n<p><strong>Note:</strong> On browsers where native keyboard events are not supported\n(e.g. Firefox on OS X), key events will be synthesized. Special\npunctionation keys will be synthesized according to a standard QWERTY en-us\nkeyboard layout.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebElement.prototype.sendKeys",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The sequence of keys to type. All arguments will be joined into a single sequence.",
        "startingLine": 1973,
        "typeExpression": "...(string|!webdriver.promise.Promise<string>)",
        "type": {
          "type": "TypeUnion",
          "elements": [
            {
              "type": "NameExpression",
              "name": "string"
            },
            {
              "type": "TypeApplication",
              "expression": {
                "type": "NameExpression",
                "name": "webdriver.promise.Promise"
              },
              "applications": [
                {
                  "type": "NameExpression",
                  "name": "string"
                }
              ],
              "nullable": false
            }
          ],
          "repeatable": true
        },
        "typeList": [
          "string",
          "!webdriver.promise.Promise.<string>"
        ],
        "name": "var_args",
        "paramString": "...(string&#124;!webdriver.promise.Promise&lt;string&gt;)"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved when all keys have been typed.",
      "startingLine": 1975,
      "typeExpression": "!webdriver.promise.Promise.<void>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "void",
            "reservedWord": true
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<void>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;void&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1926"
  },
  {
    "description": "<p>Schedules a command to query for the tag/node name of this element.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebElement.prototype.getTagName",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved with the element's tag name.",
      "startingLine": 2013,
      "typeExpression": "!webdriver.promise.Promise.<string>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "string"
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<string>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;string&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2012"
  },
  {
    "description": "<p>Schedules a command to query for the computed style of the element\nrepresented by this instance. If the element inherits the named style from\nits parent, the parent will be queried for its value.  Where possible, color\nvalues will be converted to their hex representation (e.g. #00ff00 instead of\nrgb(0, 255, 0)).</p>\n<p><em>Warning:</em> the value returned will be as the browser interprets it, so\nit may be tricky to form a proper assertion.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebElement.prototype.getCssValue",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The name of the CSS style property to look up.",
        "startingLine": 2033,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "cssStyleProperty",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved with the requested CSS value.",
      "startingLine": 2035,
      "typeExpression": "!webdriver.promise.Promise.<string>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "string"
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<string>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;string&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2024"
  },
  {
    "description": "<p>Schedules a command to query for the value of the given attribute of the\nelement. Will return the current value, even if it has been modified after\nthe page has been loaded. More exactly, this method will return the value of\nthe given attribute, unless that attribute is not present, in which case the\nvalue of the property with the same name is returned. If neither value is\nset, null is returned (for example, the &quot;value&quot; property of a textarea\nelement). The &quot;style&quot; attribute is converted as best can be to a\ntext representation with a trailing semi-colon. The following are deemed to\nbe &quot;boolean&quot; attributes and will return either &quot;true&quot; or null:</p>\n<p>async, autofocus, autoplay, checked, compact, complete, controls, declare,\ndefaultchecked, defaultselected, defer, disabled, draggable, ended,\nformnovalidate, hidden, indeterminate, iscontenteditable, ismap, itemscope,\nloop, multiple, muted, nohref, noresize, noshade, novalidate, nowrap, open,\npaused, pubdate, readonly, required, reversed, scoped, seamless, seeking,\nselected, spellcheck, truespeed, willvalidate</p>\n<p>Finally, the following commonly mis-capitalized attribute/property names\nare evaluated as expected:</p>\n<ul>\n<li>&quot;class&quot;</li>\n<li>&quot;readonly&quot;</li>\n</ul>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebElement.prototype.getAttribute",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The name of the attribute to query.",
        "startingLine": 2071,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "attributeName",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved with the attribute's value. The returned value will always be either a string or null.",
      "startingLine": 2072,
      "typeExpression": "!webdriver.promise.Promise.<?string>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "string",
            "nullable": true
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<?string>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;?string&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2048"
  },
  {
    "description": "<p>Get the visible (i.e. not hidden by CSS) innerText of this element, including\nsub-elements, without any leading or trailing whitespace.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebElement.prototype.getText",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved with the element's visible text.",
      "startingLine": 2087,
      "typeExpression": "!webdriver.promise.Promise.<string>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "string"
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<string>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;string&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2085"
  },
  {
    "description": "<p>Schedules a command to compute the size of this element&#39;s bounding box, in\npixels.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebElement.prototype.getSize",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved with the element's size as a <code ng-non-bindable>{width:number, height:number</code>} object.",
      "startingLine": 2100,
      "typeExpression": "!webdriver.promise.Promise.<{width: number, height: number}>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "RecordType",
            "fields": [
              {
                "type": "FieldType",
                "key": {
                  "type": "NameExpression",
                  "name": "width"
                },
                "value": {
                  "type": "NameExpression",
                  "name": "number"
                }
              },
              {
                "type": "FieldType",
                "key": {
                  "type": "NameExpression",
                  "name": "height"
                },
                "value": {
                  "type": "NameExpression",
                  "name": "number"
                }
              }
            ]
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<{width: number, height: number}>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;{width: number, height: number}&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2098"
  },
  {
    "description": "<p>Schedules a command to compute the location of this element in page space.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebElement.prototype.getLocation",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved to the element's location as a <code ng-non-bindable>{x:number, y:number</code>} object.",
      "startingLine": 2113,
      "typeExpression": "!webdriver.promise.Promise.<{x: number, y: number}>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "RecordType",
            "fields": [
              {
                "type": "FieldType",
                "key": {
                  "type": "NameExpression",
                  "name": "x"
                },
                "value": {
                  "type": "NameExpression",
                  "name": "number"
                }
              },
              {
                "type": "FieldType",
                "key": {
                  "type": "NameExpression",
                  "name": "y"
                },
                "value": {
                  "type": "NameExpression",
                  "name": "number"
                }
              }
            ]
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<{x: number, y: number}>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;{x: number, y: number}&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2112"
  },
  {
    "description": "<p>Schedules a command to query whether the DOM element represented by this\ninstance is enabled, as dicted by the <code ng-non-bindable>disabled</code> attribute.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebElement.prototype.isEnabled",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved with whether this element is currently enabled.",
      "startingLine": 2127,
      "typeExpression": "!webdriver.promise.Promise.<boolean>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "boolean"
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<boolean>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;boolean&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2125"
  },
  {
    "description": "<p>Schedules a command to query whether this element is selected.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebElement.prototype.isSelected",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved with whether this element is currently selected.",
      "startingLine": 2139,
      "typeExpression": "!webdriver.promise.Promise.<boolean>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "boolean"
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<boolean>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;boolean&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2138"
  },
  {
    "description": "<p>Schedules a command to submit the form containing this element (or this\nelement if it is a FORM element). This command is a no-op if the element is\nnot contained in a form.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebElement.prototype.submit",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved when the form has been submitted.",
      "startingLine": 2153,
      "typeExpression": "!webdriver.promise.Promise.<void>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "void",
            "reservedWord": true
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<void>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;void&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2150"
  },
  {
    "description": "<p>Schedules a command to clear the <code ng-non-bindable>value</code> of this element. This command\nhas no effect if the underlying DOM element is neither a text INPUT element\nnor a TEXTAREA element.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebElement.prototype.clear",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved when the element has been cleared.",
      "startingLine": 2167,
      "typeExpression": "!webdriver.promise.Promise.<void>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "void",
            "reservedWord": true
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<void>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;void&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2164"
  },
  {
    "description": "<p>Schedules a command to test whether this element is currently displayed.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebElement.prototype.isDisplayed",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved with whether this element is currently visible on the page.",
      "startingLine": 2179,
      "typeExpression": "!webdriver.promise.Promise.<boolean>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "boolean"
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<boolean>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;boolean&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2178"
  },
  {
    "description": "<p>Take a screenshot of the visible region encompassed by this element&#39;s\nbounding rectangle.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebElement.prototype.takeScreenshot",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "Optional argument that indicates whether the element should be scrolled into view before taking a screenshot. Defaults to false.",
        "startingLine": 2193,
        "typeExpression": "boolean=",
        "type": {
          "type": "NameExpression",
          "name": "boolean",
          "optional": true
        },
        "typeList": [
          "boolean"
        ],
        "optional": true,
        "name": "opt_scroll",
        "paramString": "boolean="
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved to the screenshot as a base-64 encoded PNG.",
      "startingLine": 2196,
      "typeExpression": "!webdriver.promise.Promise.<string>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "string"
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<string>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;string&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2190"
  },
  {
    "description": "<p>Schedules a command to retrieve the outer HTML of this element.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebElement.prototype.getOuterHtml",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved with the element's outer HTML.",
      "startingLine": 2210,
      "typeExpression": "!webdriver.promise.Promise.<string>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "string"
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<string>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;string&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2209"
  },
  {
    "description": "<p>Schedules a command to retrieve the inner HTML of this element.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebElement.prototype.getInnerHtml",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved with the element's inner HTML.",
      "startingLine": 2229,
      "typeExpression": "!webdriver.promise.Promise.<string>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "string"
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<string>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;string&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2228"
  },
  {
    "description": "<p>WebElementPromise is a promise that will be fulfilled with a WebElement.\nThis serves as a forward proxy on WebElement, allowing calls to be\nscheduled without directly on this instance before the underlying\nWebElement has been fulfilled. In other words, the following two statements\nare equivalent:</p>\n<pre><code>driver.findElement({id: &#39;my-button&#39;}).click();\ndriver.findElement({id: &#39;my-button&#39;}).then(function(el) {\n  return el.click();\n});\n</code></pre>",
    "extends": "{webdriver.WebElement}",
    "fileName": "webdriver",
    "name": "webdriver.WebElementPromise",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The parent WebDriver instance for this element.",
        "startingLine": 2250,
        "typeExpression": "!webdriver.WebDriver",
        "type": {
          "type": "NameExpression",
          "name": "webdriver.WebDriver",
          "nullable": false
        },
        "typeList": [
          "webdriver.WebDriver"
        ],
        "name": "driver",
        "paramString": "&#33;[webdriver.WebDriver](webdriver.WebDriver)"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "A promise that will resolve to the promised element.",
        "startingLine": 2252,
        "typeExpression": "!webdriver.promise.Promise.<!webdriver.WebElement>",
        "type": {
          "type": "TypeApplication",
          "expression": {
            "type": "NameExpression",
            "name": "webdriver.promise.Promise"
          },
          "applications": [
            {
              "type": "NameExpression",
              "name": "webdriver.WebElement",
              "nullable": false
            }
          ],
          "nullable": false
        },
        "typeList": [
          "!webdriver.promise.Promise.<!webdriver.WebElement>"
        ],
        "name": "el",
        "paramString": "!webdriver.promise.Promise.&lt;!webdriver.WebElement&gt;"
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2239"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "webdriver.WebElementPromise.prototype.cancel",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2263"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "webdriver.WebElementPromise.prototype.isPending",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2266"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "webdriver.WebElementPromise.prototype.then",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2269"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "webdriver.WebElementPromise.prototype.thenCatch",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2272"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "webdriver.WebElementPromise.prototype.thenFinally",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2275"
  },
  {
    "description": "<p>Defers returning the element ID until the wrapped WebElement has been\nresolved.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.WebElementPromise.prototype.getId",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2278"
  },
  {
    "description": "<p>Represents a modal dialog such as <code ng-non-bindable>alert</code>, <code ng-non-bindable>confirm</code>, or\n<code ng-non-bindable>prompt</code>. Provides functions to retrieve the message displayed with\nthe alert, accept or dismiss the alert, and set the response text (in the\ncase of <code ng-non-bindable>prompt</code>).</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.Alert",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The driver controlling the browser this alert is attached to.",
        "startingLine": 2296,
        "typeExpression": "!webdriver.WebDriver",
        "type": {
          "type": "NameExpression",
          "name": "webdriver.WebDriver",
          "nullable": false
        },
        "typeList": [
          "webdriver.WebDriver"
        ],
        "name": "driver",
        "paramString": "&#33;[webdriver.WebDriver](webdriver.WebDriver)"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The message text displayed with this alert.",
        "startingLine": 2298,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "text",
        "paramString": "string"
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2292"
  },
  {
    "description": "<p>Retrieves the message text displayed with this alert. For instance, if the\nalert were opened with alert(&quot;hello&quot;), then this would return &quot;hello&quot;.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.Alert.prototype.getText",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved to the text displayed with this alert.",
      "startingLine": 2313,
      "typeExpression": "!webdriver.promise.Promise.<string>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "string"
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<string>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;string&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2311"
  },
  {
    "description": "<p>Accepts this alert.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.Alert.prototype.accept",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved when this command has completed.",
      "startingLine": 2323,
      "typeExpression": "!webdriver.promise.Promise.<void>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "void",
            "reservedWord": true
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<void>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;void&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2322"
  },
  {
    "description": "<p>Dismisses this alert.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.Alert.prototype.dismiss",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved when this command has completed.",
      "startingLine": 2335,
      "typeExpression": "!webdriver.promise.Promise.<void>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "void",
            "reservedWord": true
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<void>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;void&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2334"
  },
  {
    "description": "<p>Sets the response text on this alert. This command will return an error if\nthe underlying alert does not support response text (e.g. window.alert and\nwindow.confirm).</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.Alert.prototype.sendKeys",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The text to set.",
        "startingLine": 2349,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "text",
        "paramString": "string"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved when this command has completed.",
      "startingLine": 2350,
      "typeExpression": "!webdriver.promise.Promise.<void>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "webdriver.promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "void",
            "reservedWord": true
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!webdriver.promise.Promise.<void>"
      ]
    },
    "returnString": "!webdriver.promise.Promise.&lt;void&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2346"
  },
  {
    "description": "<p>AlertPromise is a promise that will be fulfilled with an Alert. This promise\nserves as a forward proxy on an Alert, allowing calls to be scheduled\ndirectly on this instance before the underlying Alert has been fulfilled. In\nother words, the following two statements are equivalent:</p>\n<pre><code>driver.switchTo().alert().dismiss();\ndriver.switchTo().alert().then(function(alert) {\n  return alert.dismiss();\n});\n</code></pre>",
    "extends": "{webdriver.Alert}",
    "fileName": "webdriver",
    "name": "webdriver.AlertPromise",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The driver controlling the browser this alert is attached to.",
        "startingLine": 2373,
        "typeExpression": "!webdriver.WebDriver",
        "type": {
          "type": "NameExpression",
          "name": "webdriver.WebDriver",
          "nullable": false
        },
        "typeList": [
          "webdriver.WebDriver"
        ],
        "name": "driver",
        "paramString": "&#33;[webdriver.WebDriver](webdriver.WebDriver)"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "A thenable that will be fulfilled with the promised alert.",
        "startingLine": 2375,
        "typeExpression": "!webdriver.promise.Thenable.<!webdriver.Alert>",
        "type": {
          "type": "TypeApplication",
          "expression": {
            "type": "NameExpression",
            "name": "webdriver.promise.Thenable"
          },
          "applications": [
            {
              "type": "NameExpression",
              "name": "webdriver.Alert",
              "nullable": false
            }
          ],
          "nullable": false
        },
        "typeList": [
          "!webdriver.promise.Thenable.<!webdriver.Alert>"
        ],
        "name": "alert",
        "paramString": "!webdriver.promise.Thenable.&lt;!webdriver.Alert&gt;"
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2363"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "webdriver.AlertPromise.prototype.cancel",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2386"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "webdriver.AlertPromise.prototype.isPending",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2389"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "webdriver.AlertPromise.prototype.then",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2392"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "webdriver.AlertPromise.prototype.thenCatch",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2395"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "webdriver.AlertPromise.prototype.thenFinally",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2398"
  },
  {
    "description": "<p>Defer returning text until the promised alert has been resolved.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.AlertPromise.prototype.getText",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2401"
  },
  {
    "description": "<p>Defers action until the alert has been located.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.AlertPromise.prototype.accept",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2411"
  },
  {
    "description": "<p>Defers action until the alert has been located.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.AlertPromise.prototype.dismiss",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2421"
  },
  {
    "description": "<p>Defers action until the alert has been located.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.AlertPromise.prototype.sendKeys",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2431"
  },
  {
    "description": "<p>An error returned to indicate that there is an unhandled modal dialog on the\ncurrent page.</p>\n",
    "extends": "{bot.Error}",
    "fileName": "webdriver",
    "name": "webdriver.UnhandledAlertError",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The error message.",
        "startingLine": 2447,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "message",
        "paramString": "string"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The text displayed with the unhandled alert.",
        "startingLine": 2448,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "text",
        "paramString": "string"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The alert handle.",
        "startingLine": 2449,
        "typeExpression": "!webdriver.Alert",
        "type": {
          "type": "NameExpression",
          "name": "webdriver.Alert",
          "nullable": false
        },
        "typeList": [
          "webdriver.Alert"
        ],
        "name": "alert",
        "paramString": "&#33;[webdriver.Alert](webdriver.Alert)"
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2445"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "webdriver.UnhandledAlertError.prototype.getAlertText",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "The text displayed with the unhandled alert.",
      "startingLine": 2467,
      "typeExpression": "string",
      "type": {
        "type": "NameExpression",
        "name": "string"
      },
      "typeList": [
        "string"
      ]
    },
    "returnString": "string",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2467"
  },
  {
    "description": "<p>Used with [<code ng-non-bindable>WebElement#sendKeys</code>](webdriver.WebElement.prototype.sendKeys) on file\ninput elements (<code ng-non-bindable>&lt;input type=\"file\"&gt;</code>) to detect when the entered key\nsequence defines the path to a file.</p>\n<p>By default, [WebElement&#39;s](webdriver.WebElement) will enter all\nkey sequences exactly as entered. You may set a\n[file detector](webdriver.WebDriver.prototype.setFileDetector) on the parent\nWebDriver instance to define custom behavior for handling file elements. Of\nparticular note is the <code ng-non-bindable>selenium-webdriver&#x2F;remote.FileDetector</code>, which\nshould be used when running against a remote\n<a href=\"http://docs.seleniumhq.org/download/\">Selenium Server</a>.</p>\n",
    "fileName": "webdriver",
    "name": "webdriver.FileDetector",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2476"
  },
  {
    "description": "<p>Representations of pressable keys that aren&#39;t text.  These are stored in\nthe Unicode PUA (Private Use Area) code points, 0xE000-0xF8FF.  Refer to\n<a href=\"http://www.google.com.au/search?&amp;q=unicode+pua&amp;btnG=Search\">http://www.google.com.au/search?&amp;q=unicode+pua&amp;btnG=Search</a></p>\n",
    "fileName": "key",
    "name": "webdriver.Key",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/key.js#L21"
  },
  {
    "description": "",
    "fileName": "promise",
    "name": "promise",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/promise.js#L648"
  },
  {
    "description": "<p>Generates an error to capture the current stack trace.</p>\n",
    "fileName": "promise",
    "name": "promise.captureStackTrace",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "Error name for this stack trace.",
        "startingLine": 680,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "name",
        "paramString": "string"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "Message to record.",
        "startingLine": 681,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "msg",
        "paramString": "string"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The function that should appear at the top of the stack; only applicable in V8.",
        "startingLine": 682,
        "typeExpression": "!Function",
        "type": {
          "type": "FunctionType",
          "params": [],
          "nullable": false
        },
        "typeList": [
          "!Function"
        ],
        "name": "topFn",
        "paramString": "!Function"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "The generated error.",
      "startingLine": 684,
      "typeExpression": "!Error",
      "type": {
        "type": "NameExpression",
        "name": "Error",
        "nullable": false
      },
      "typeList": [
        "Error"
      ]
    },
    "returnString": "!Error",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/promise.js#L679"
  },
  {
    "description": "<p>Error used when the computation of a promise is cancelled.</p>\n",
    "fileName": "promise",
    "name": "promise.CancellationError",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/promise.js#L703"
  },
  {
    "description": "<p>Error used when there are multiple unhandled promise rejections detected\nwithin a task or callback.</p>\n",
    "fileName": "promise",
    "name": "promise.MultipleUnhandledRejectionError",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/promise.js#L796"
  },
  {
    "description": "<p>Thenable is a promise-like object with a <code ng-non-bindable>then</code> method which may be\nused to schedule callbacks on a promised value.</p>\n",
    "extends": "{IThenable<T>}",
    "fileName": "promise",
    "name": "promise.Thenable",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/promise.js#L829"
  },
  {
    "description": "<p>Represents the eventual value of a completed operation. Each promise may be\nin one of three states: pending, fulfilled, or rejected. Each promise starts\nin the pending state and may make a single transition to either a\nfulfilled or rejected state, at which point the promise is considered\nresolved.</p>\n<br />See [<code ng-non-bindable>http:&#x2F;&#x2F;promises-aplus.github.io&#x2F;promises-spec&#x2F;</code>](http://promises-aplus.github.io/promises-spec/)",
    "fileName": "promise",
    "name": "promise.Promise",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/promise.js#L997"
  },
  {
    "description": "<p>Represents a value that will be resolved at some point in the future. This\nclass represents the protected &quot;producer&quot; half of a Promise - each Deferred\nhas a <code ng-non-bindable>promise</code> property that may be returned to consumers for\nregistering callbacks, reserving the ability to resolve the deferred to the\nproducer.</p>\n<p>If this Deferred is rejected and there are no listeners registered before\nthe next turn of the event loop, the rejection will be passed to the\n<code ng-non-bindable>webdriver.promise.ControlFlow</code> as an unhandled failure.</p>\n",
    "fileName": "promise",
    "name": "promise.Deferred",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/promise.js#L1348"
  },
  {
    "description": "<p>Determines whether a <code ng-non-bindable>value</code> should be treated as a promise.\nAny object whose &quot;then&quot; property is a function will be considered a promise.</p>\n",
    "fileName": "promise",
    "name": "promise.isPromise",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The value to test.",
        "startingLine": 1460,
        "typeExpression": "*",
        "type": {
          "type": "AllLiteral"
        },
        "typeList": [
          "*"
        ],
        "name": "value",
        "paramString": "*"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "Whether the value is a promise.",
      "startingLine": 1461,
      "typeExpression": "boolean",
      "type": {
        "type": "NameExpression",
        "name": "boolean"
      },
      "typeList": [
        "boolean"
      ]
    },
    "returnString": "boolean",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/promise.js#L1457"
  },
  {
    "description": "<p>Creates a promise that will be resolved at a set time in the future.</p>\n",
    "fileName": "promise",
    "name": "promise.delayed",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The amount of time, in milliseconds, to wait before resolving the promise.",
        "startingLine": 1475,
        "typeExpression": "number",
        "type": {
          "type": "NameExpression",
          "name": "number"
        },
        "typeList": [
          "number"
        ],
        "name": "ms",
        "paramString": "number"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "The promise.",
      "startingLine": 1477,
      "typeExpression": "!promise.Promise",
      "type": {
        "type": "NameExpression",
        "name": "promise.Promise",
        "nullable": false
      },
      "typeList": [
        "promise.Promise"
      ]
    },
    "returnString": "&#33;[promise.Promise](promise.Promise)",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/promise.js#L1474"
  },
  {
    "description": "<p>Creates a new deferred object.</p>\n",
    "fileName": "promise",
    "name": "promise.defer",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "The new deferred object.",
      "startingLine": 1496,
      "typeExpression": "!promise.Deferred<T>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "promise.Deferred"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "T"
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!promise.Deferred<T>"
      ]
    },
    "returnString": "!promise.Deferred&lt;T&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/promise.js#L1495"
  },
  {
    "description": "<p>Creates a promise that has been resolved with the given value.</p>\n",
    "fileName": "promise",
    "name": "promise.fulfilled",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The resolved value.",
        "startingLine": 1506,
        "typeExpression": "T=",
        "type": {
          "type": "NameExpression",
          "name": "T",
          "optional": true
        },
        "typeList": [
          "T"
        ],
        "optional": true,
        "name": "opt_value",
        "paramString": "T="
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "The resolved promise.",
      "startingLine": 1507,
      "typeExpression": "!promise.Promise<T>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "T"
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!promise.Promise<T>"
      ]
    },
    "returnString": "!promise.Promise&lt;T&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/promise.js#L1505"
  },
  {
    "description": "<p>Creates a promise that has been rejected with the given reason.</p>\n",
    "fileName": "promise",
    "name": "promise.rejected",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The rejection reason; may be any value, but is usually an Error or a string.",
        "startingLine": 1522,
        "typeExpression": "*=",
        "type": {
          "type": "AllLiteral",
          "optional": true
        },
        "typeList": [
          "*"
        ],
        "optional": true,
        "name": "opt_reason",
        "paramString": "*="
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "The rejected promise.",
      "startingLine": 1524,
      "typeExpression": "!promise.Promise<T>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "promise.Promise"
        },
        "applications": [
          {
            "type": "NameExpression",
            "name": "T"
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!promise.Promise<T>"
      ]
    },
    "returnString": "!promise.Promise&lt;T&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/promise.js#L1521"
  },
  {
    "description": "<p>Wraps a function that expects a node-style callback as its final\nargument. This callback expects two arguments: an error value (which will be\nnull if the call succeeded), and the success value as the second argument.\nThe callback will the resolve or reject the returned promise, based on its arguments.</p>\n",
    "fileName": "promise",
    "name": "promise.checkedNodeCall",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The function to wrap.",
        "startingLine": 1542,
        "typeExpression": "!Function",
        "type": {
          "type": "FunctionType",
          "params": [],
          "nullable": false
        },
        "typeList": [
          "!Function"
        ],
        "name": "fn",
        "paramString": "!Function"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The arguments to apply to the function, excluding the final callback.",
        "startingLine": 1543,
        "typeExpression": "...?",
        "type": {
          "type": "UnknownLiteral",
          "repeatable": true
        },
        "typeList": [
          "?"
        ],
        "name": "var_args",
        "paramString": "...?"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will be resolved with the result of the provided function's callback.",
      "startingLine": 1545,
      "typeExpression": "!promise.Promise",
      "type": {
        "type": "NameExpression",
        "name": "promise.Promise",
        "nullable": false
      },
      "typeList": [
        "promise.Promise"
      ]
    },
    "returnString": "&#33;[promise.Promise](promise.Promise)",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/promise.js#L1538"
  },
  {
    "description": "<p>Registers an observer on a promised <code ng-non-bindable>value</code>, returning a new promise\nthat will be resolved when the value is. If <code ng-non-bindable>value</code> is not a promise,\nthen the return promise will be immediately resolved.</p>\n",
    "fileName": "promise",
    "name": "promise.when",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The value to observe.",
        "startingLine": 1567,
        "typeExpression": "*",
        "type": {
          "type": "AllLiteral"
        },
        "typeList": [
          "*"
        ],
        "name": "value",
        "paramString": "*"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The function to call when the value is resolved successfully.",
        "startingLine": 1568,
        "typeExpression": "Function=",
        "type": {
          "type": "FunctionType",
          "params": [],
          "optional": true
        },
        "typeList": [
          "Function="
        ],
        "optional": true,
        "name": "opt_callback",
        "paramString": "Function="
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The function to call when the value is rejected.",
        "startingLine": 1570,
        "typeExpression": "Function=",
        "type": {
          "type": "FunctionType",
          "params": [],
          "optional": true
        },
        "typeList": [
          "Function="
        ],
        "optional": true,
        "name": "opt_errback",
        "paramString": "Function="
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A new promise.",
      "startingLine": 1572,
      "typeExpression": "!promise.Promise",
      "type": {
        "type": "NameExpression",
        "name": "promise.Promise",
        "nullable": false
      },
      "typeList": [
        "promise.Promise"
      ]
    },
    "returnString": "&#33;[promise.Promise](promise.Promise)",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/promise.js#L1564"
  },
  {
    "description": "<p>Invokes the appropriate callback function as soon as a promised\n<code ng-non-bindable>value</code> is resolved. This function is similar to\n<code ng-non-bindable>webdriver.promise.when</code>, except it does not return a new promise.</p>\n",
    "fileName": "promise",
    "name": "promise.asap",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The value to observe.",
        "startingLine": 1589,
        "typeExpression": "*",
        "type": {
          "type": "AllLiteral"
        },
        "typeList": [
          "*"
        ],
        "name": "value",
        "paramString": "*"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The function to call when the value is resolved successfully.",
        "startingLine": 1590,
        "typeExpression": "Function",
        "type": {
          "type": "FunctionType",
          "params": []
        },
        "typeList": [
          "Function"
        ],
        "name": "callback",
        "paramString": "Function"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The function to call when the value is rejected.",
        "startingLine": 1592,
        "typeExpression": "Function=",
        "type": {
          "type": "FunctionType",
          "params": [],
          "optional": true
        },
        "typeList": [
          "Function="
        ],
        "optional": true,
        "name": "opt_errback",
        "paramString": "Function="
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/promise.js#L1586"
  },
  {
    "description": "<p>Given an array of promises, will return a promise that will be fulfilled\nwith the fulfillment values of the input array&#39;s values. If any of the\ninput array&#39;s promises are rejected, the returned promise will be rejected\nwith the same reason.</p>\n",
    "fileName": "promise",
    "name": "promise.all",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "An array of promises to wait on.",
        "startingLine": 1617,
        "typeExpression": "!Array<(T|!promise.Promise<T>)>",
        "type": {
          "type": "TypeApplication",
          "expression": {
            "type": "NameExpression",
            "name": "Array"
          },
          "applications": [
            {
              "type": "TypeUnion",
              "elements": [
                {
                  "type": "NameExpression",
                  "name": "T"
                },
                {
                  "type": "TypeApplication",
                  "expression": {
                    "type": "NameExpression",
                    "name": "promise.Promise"
                  },
                  "applications": [
                    {
                      "type": "NameExpression",
                      "name": "T"
                    }
                  ],
                  "nullable": false
                }
              ]
            }
          ],
          "nullable": false
        },
        "typeList": [
          "!Array<(T|!promise.Promise<T>)>"
        ],
        "name": "arr",
        "paramString": "!Array&lt;(T&#124;!promise.Promise&lt;T&gt;)&gt;"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that is fulfilled with an array containing the fulfilled values of the input array, or rejected with the same reason as the first rejected value.",
      "startingLine": 1619,
      "typeExpression": "!promise.Promise<!Array<T>>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "promise.Promise"
        },
        "applications": [
          {
            "type": "TypeApplication",
            "expression": {
              "type": "NameExpression",
              "name": "Array"
            },
            "applications": [
              {
                "type": "NameExpression",
                "name": "T"
              }
            ],
            "nullable": false
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!promise.Promise<!Array<T>>"
      ]
    },
    "returnString": "!promise.Promise&lt;!Array&lt;T&gt;&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/promise.js#L1612"
  },
  {
    "description": "<p>Calls a function for each element in an array and inserts the result into a\nnew array, which is used as the fulfillment value of the promise returned\nby this function.</p>\n<p>If the return value of the mapping function is a promise, this function\nwill wait for it to be fulfilled before inserting it into the new array.</p>\n<p>If the mapping function throws or returns a rejected promise, the\npromise returned by this function will be rejected with the same reason.\nOnly the first failure will be reported; all subsequent errors will be\nsilently ignored.</p>\n",
    "fileName": "promise",
    "name": "promise.map",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The array to iterator over, or a promise that will resolve to said array.",
        "startingLine": 1664,
        "typeExpression": "!(Array<TYPE>|promise.Promise<!Array<TYPE>>)",
        "type": {
          "type": "TypeUnion",
          "elements": [
            {
              "type": "TypeApplication",
              "expression": {
                "type": "NameExpression",
                "name": "Array"
              },
              "applications": [
                {
                  "type": "NameExpression",
                  "name": "TYPE"
                }
              ]
            },
            {
              "type": "TypeApplication",
              "expression": {
                "type": "NameExpression",
                "name": "promise.Promise"
              },
              "applications": [
                {
                  "type": "TypeApplication",
                  "expression": {
                    "type": "NameExpression",
                    "name": "Array"
                  },
                  "applications": [
                    {
                      "type": "NameExpression",
                      "name": "TYPE"
                    }
                  ],
                  "nullable": false
                }
              ]
            }
          ],
          "nullable": false
        },
        "typeList": [
          "Array.<TYPE>",
          "promise.Promise.<!Array.<TYPE>>"
        ],
        "name": "arr",
        "paramString": "!(Array&lt;TYPE&gt;&#124;promise.Promise&lt;!Array&lt;TYPE&gt;&gt;)"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The function to call for each element in the array. This function should expect three arguments (the element, the index, and the array itself.",
        "startingLine": 1666,
        "typeExpression": "function(this: SELF, TYPE, number, !Array<TYPE>): ?",
        "type": {
          "type": "FunctionType",
          "params": [
            {
              "type": "NameExpression",
              "name": "TYPE"
            },
            {
              "type": "NameExpression",
              "name": "number"
            },
            {
              "type": "TypeApplication",
              "expression": {
                "type": "NameExpression",
                "name": "Array"
              },
              "applications": [
                {
                  "type": "NameExpression",
                  "name": "TYPE"
                }
              ],
              "nullable": false
            }
          ],
          "this": {
            "type": "NameExpression",
            "name": "SELF"
          },
          "result": {
            "type": "UnknownLiteral"
          }
        },
        "typeList": [
          "function(this: SELF, TYPE, number, !Array<TYPE>): ?"
        ],
        "name": "fn",
        "paramString": "function(this: SELF, TYPE, number, !Array&lt;TYPE&gt;): ?"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The object to be used as the value of 'this' within <code ng-non-bindable>fn</code>.",
        "startingLine": 1669,
        "typeExpression": "SELF=",
        "type": {
          "type": "NameExpression",
          "name": "SELF",
          "optional": true
        },
        "typeList": [
          "SELF"
        ],
        "optional": true,
        "name": "opt_self",
        "paramString": "SELF="
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/promise.js#L1652"
  },
  {
    "description": "<p>Calls a function for each element in an array, and if the function returns\ntrue adds the element to a new array.</p>\n<p>If the return value of the filter function is a promise, this function\nwill wait for it to be fulfilled before determining whether to insert the\nelement into the new array.</p>\n<p>If the filter function throws or returns a rejected promise, the promise\nreturned by this function will be rejected with the same reason. Only the\nfirst failure will be reported; all subsequent errors will be silently\nignored.</p>\n",
    "fileName": "promise",
    "name": "promise.filter",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The array to iterator over, or a promise that will resolve to said array.",
        "startingLine": 1720,
        "typeExpression": "!(Array<TYPE>|promise.Promise<!Array<TYPE>>)",
        "type": {
          "type": "TypeUnion",
          "elements": [
            {
              "type": "TypeApplication",
              "expression": {
                "type": "NameExpression",
                "name": "Array"
              },
              "applications": [
                {
                  "type": "NameExpression",
                  "name": "TYPE"
                }
              ]
            },
            {
              "type": "TypeApplication",
              "expression": {
                "type": "NameExpression",
                "name": "promise.Promise"
              },
              "applications": [
                {
                  "type": "TypeApplication",
                  "expression": {
                    "type": "NameExpression",
                    "name": "Array"
                  },
                  "applications": [
                    {
                      "type": "NameExpression",
                      "name": "TYPE"
                    }
                  ],
                  "nullable": false
                }
              ]
            }
          ],
          "nullable": false
        },
        "typeList": [
          "Array.<TYPE>",
          "promise.Promise.<!Array.<TYPE>>"
        ],
        "name": "arr",
        "paramString": "!(Array&lt;TYPE&gt;&#124;promise.Promise&lt;!Array&lt;TYPE&gt;&gt;)"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The function to call for each element in the array.",
        "startingLine": 1722,
        "typeExpression": "function(this: SELF, TYPE, number, !Array<TYPE>): (\n            boolean|promise.Promise<boolean>)",
        "type": {
          "type": "FunctionType",
          "params": [
            {
              "type": "NameExpression",
              "name": "TYPE"
            },
            {
              "type": "NameExpression",
              "name": "number"
            },
            {
              "type": "TypeApplication",
              "expression": {
                "type": "NameExpression",
                "name": "Array"
              },
              "applications": [
                {
                  "type": "NameExpression",
                  "name": "TYPE"
                }
              ],
              "nullable": false
            }
          ],
          "this": {
            "type": "NameExpression",
            "name": "SELF"
          },
          "result": {
            "type": "TypeUnion",
            "elements": [
              {
                "type": "NameExpression",
                "name": "boolean"
              },
              {
                "type": "TypeApplication",
                "expression": {
                  "type": "NameExpression",
                  "name": "promise.Promise"
                },
                "applications": [
                  {
                    "type": "NameExpression",
                    "name": "boolean"
                  }
                ]
              }
            ]
          }
        },
        "typeList": [
          "function(this: SELF, TYPE, number, !Array<TYPE>): ( boolean|promise.Promise<boolean>)"
        ],
        "name": "fn",
        "paramString": "function(this: SELF, TYPE, number, !Array&lt;TYPE&gt;): (\n            boolean&#124;promise.Promise&lt;boolean&gt;)"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The object to be used as the value of 'this' within <code ng-non-bindable>fn</code>.",
        "startingLine": 1725,
        "typeExpression": "SELF=",
        "type": {
          "type": "NameExpression",
          "name": "SELF",
          "optional": true
        },
        "typeList": [
          "SELF"
        ],
        "optional": true,
        "name": "opt_self",
        "paramString": "SELF="
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/promise.js#L1708"
  },
  {
    "description": "<p>Returns a promise that will be resolved with the input value in a\nfully-resolved state. If the value is an array, each element will be fully\nresolved. Likewise, if the value is an object, all keys will be fully\nresolved. In both cases, all nested arrays and objects will also be\nfully resolved.  All fields are resolved in place; the returned promise will\nresolve on <code ng-non-bindable>value</code> and not a copy.</p>\n<p>Warning: This function makes no checks against objects that contain\ncyclical references:</p>\n<pre><code>var value = {};\nvalue[&#39;self&#39;] = value;\npromise.fullyResolved(value);  // Stack overflow.\n</code></pre>",
    "fileName": "promise",
    "name": "promise.fullyResolved",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The value to fully resolve.",
        "startingLine": 1780,
        "typeExpression": "*",
        "type": {
          "type": "AllLiteral"
        },
        "typeList": [
          "*"
        ],
        "name": "value",
        "paramString": "*"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise for a fully resolved version of the input value.",
      "startingLine": 1781,
      "typeExpression": "!promise.Promise",
      "type": {
        "type": "NameExpression",
        "name": "promise.Promise",
        "nullable": false
      },
      "typeList": [
        "promise.Promise"
      ]
    },
    "returnString": "&#33;[promise.Promise](promise.Promise)",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/promise.js#L1766"
  },
  {
    "description": "<p>Handles the execution of scheduled tasks, each of which may be an\nasynchronous operation. The control flow will ensure tasks are executed in\nthe ordered scheduled, starting each task only once those before it have\ncompleted.</p>\n<p>Each task scheduled within this flow may return a\n<code ng-non-bindable>webdriver.promise.Promise</code> to indicate it is an asynchronous\noperation. The ControlFlow will wait for such promises to be resolved before\nmarking the task as completed.</p>\n<p>Tasks and each callback registered on a <code ng-non-bindable>webdriver.promise.Promise</code>\nwill be run in their own ControlFlow frame.  Any tasks scheduled within a\nframe will take priority over previously scheduled tasks. Furthermore, if any\nof the tasks in the frame fail, the remainder of the tasks in that frame will\nbe discarded and the failure will be propagated to the user through the\ncallback/task&#39;s promised result.</p>\n<p>Each time a ControlFlow empties its task queue, it will fire an\n<code ng-non-bindable>IDLE</code> event. Conversely,\nwhenever the flow terminates due to an unhandled error, it will remove all\nremaining tasks in its queue and fire an\n<code ng-non-bindable>webdriver.promise.ControlFlow.EventType.UNCAUGHT_EXCEPTION UNCAUGHT_EXCEPTION</code> event. If there are no listeners registered with the\nflow, the error will be rethrown to the global error handler.</p>\n<p>Refer to the <code ng-non-bindable>webdriver.promise</code> module documentation for a detailed\nexplanation of how the ControlFlow coordinates task execution.</p>\n",
    "fileName": "promise",
    "name": "promise.ControlFlow",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/promise.js#L1890"
  },
  {
    "description": "<p>Events that may be emitted by an <code ng-non-bindable>webdriver.promise.ControlFlow</code>.</p>\n",
    "fileName": "promise",
    "name": "promise.ControlFlow.EventType",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/promise.js#L2418"
  },
  {
    "description": "<p>Changes the default flow to use when no others are active.</p>\n",
    "fileName": "promise",
    "name": "promise.setDefaultFlow",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The new default flow.",
        "startingLine": 2921,
        "typeExpression": "!promise.ControlFlow",
        "type": {
          "type": "NameExpression",
          "name": "promise.ControlFlow",
          "nullable": false
        },
        "typeList": [
          "promise.ControlFlow"
        ],
        "name": "flow",
        "paramString": "&#33;[promise.ControlFlow](promise.ControlFlow)"
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/promise.js#L2920"
  },
  {
    "description": "",
    "fileName": "promise",
    "name": "promise.controlFlow",
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "The currently active control flow.",
      "startingLine": 2933,
      "typeExpression": "!promise.ControlFlow",
      "type": {
        "type": "NameExpression",
        "name": "promise.ControlFlow",
        "nullable": false
      },
      "typeList": [
        "promise.ControlFlow"
      ]
    },
    "returnString": "&#33;[promise.ControlFlow](promise.ControlFlow)",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/promise.js#L2933"
  },
  {
    "description": "<p>Creates a new control flow. The provided callback will be invoked as the\nfirst task within the new flow, with the flow as its sole argument. Returns\na promise that resolves to the callback result.</p>\n",
    "fileName": "promise",
    "name": "promise.createFlow",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The entry point to the newly created flow.",
        "startingLine": 2945,
        "typeExpression": "function(!promise.ControlFlow)",
        "type": {
          "type": "FunctionType",
          "params": [
            {
              "type": "NameExpression",
              "name": "promise.ControlFlow",
              "nullable": false
            }
          ]
        },
        "typeList": [
          "function(!promise.ControlFlow)"
        ],
        "name": "callback",
        "paramString": "function(&#33;[promise.ControlFlow](promise.ControlFlow))"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that resolves to the callback result.",
      "startingLine": 2947,
      "typeExpression": "!promise.Promise",
      "type": {
        "type": "NameExpression",
        "name": "promise.Promise",
        "nullable": false
      },
      "typeList": [
        "promise.Promise"
      ]
    },
    "returnString": "&#33;[promise.Promise](promise.Promise)",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/promise.js#L2942"
  },
  {
    "description": "<p>Tests is a function is a generator.</p>\n",
    "fileName": "promise",
    "name": "promise.isGenerator",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The function to test.",
        "startingLine": 2960,
        "typeExpression": "!Function",
        "type": {
          "type": "FunctionType",
          "params": [],
          "nullable": false
        },
        "typeList": [
          "!Function"
        ],
        "name": "fn",
        "paramString": "!Function"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "Whether the function is a generator.",
      "startingLine": 2961,
      "typeExpression": "boolean",
      "type": {
        "type": "NameExpression",
        "name": "boolean"
      },
      "typeList": [
        "boolean"
      ]
    },
    "returnString": "boolean",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/promise.js#L2959"
  },
  {
    "description": "<p>Consumes a <code ng-non-bindable>GeneratorFunction</code>. Each time the generator yields a\npromise, this function will wait for it to be fulfilled before feeding the\nfulfilled value back into <code ng-non-bindable>next</code>. Likewise, if a yielded promise is\nrejected, the rejection error will be passed to <code ng-non-bindable>throw</code>.</p>\n<p><strong>Example 1:</strong> the Fibonacci Sequence.</p>\n<pre><code>promise.consume(function* fibonacci() {\n  var n1 = 1, n2 = 1;\n  for (var i = 0; i &lt; 4; ++i) {\n    var tmp = yield n1 + n2;\n    n1 = n2;\n    n2 = tmp;\n  }\n  return n1 + n2;\n}).then(function(result) {\n  console.log(result);  // 13\n});\n</code></pre><p><strong>Example 2:</strong> a generator that throws.</p>\n<pre><code>promise.consume(function* () {\n  yield promise.delayed(250).then(function() {\n    throw Error(&#39;boom&#39;);\n  });\n}).thenCatch(function(e) {\n  console.log(e.toString());  // Error: boom\n});\n</code></pre>",
    "fileName": "promise",
    "name": "promise.consume",
    "params": [
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The generator function to execute.",
        "startingLine": 2998,
        "typeExpression": "!Function",
        "type": {
          "type": "FunctionType",
          "params": [],
          "nullable": false
        },
        "typeList": [
          "!Function"
        ],
        "name": "generatorFn",
        "paramString": "!Function"
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "The object to use as \"this\" when invoking the initial generator.",
        "startingLine": 2999,
        "typeExpression": "Object=",
        "type": {
          "type": "NameExpression",
          "name": "Object",
          "optional": true
        },
        "typeList": [
          "Object"
        ],
        "optional": true,
        "name": "opt_self",
        "paramString": "Object="
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "transforms": [
            null,
            null,
            null
          ]
        },
        "tagName": "param",
        "description": "Any arguments to pass to the initial generator.",
        "startingLine": 3001,
        "typeExpression": "...*",
        "type": {
          "type": "AllLiteral",
          "repeatable": true
        },
        "typeList": [
          "*"
        ],
        "name": "var_args",
        "paramString": "...*"
      }
    ],
    "returns": {
      "tagDef": {
        "name": "returns",
        "aliases": [
          "return"
        ],
        "transforms": [
          null,
          null
        ]
      },
      "tagName": "return",
      "description": "A promise that will resolve to the generator's final result.",
      "startingLine": 3002,
      "typeExpression": "!promise.Promise<?>",
      "type": {
        "type": "TypeApplication",
        "expression": {
          "type": "NameExpression",
          "name": "promise.Promise"
        },
        "applications": [
          {
            "type": "UnknownLiteral"
          }
        ],
        "nullable": false
      },
      "typeList": [
        "!promise.Promise<?>"
      ]
    },
    "returnString": "!promise.Promise&lt;?&gt;",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/promise.js#L2969"
  }
]
}