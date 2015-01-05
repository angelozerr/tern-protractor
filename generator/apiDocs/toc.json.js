var api = {
  "version": "1.5.0",
  "items": [
  {
    "alias": "element.all(locator)",
    "description": "ElementArrayFinder is used for operations on an array of elements (as opposed\nto a single element).\n\nThe ElementArrayFinder is used to set up a chain of conditions that identify\nan array of elements. In particular, you can call all(locator) and\nfilter(filterFn) to return a new ElementArrayFinder modified by the\nconditions, and you can call get(index) to return a single ElementFinder at\nposition 'index'.\n\nSimilar to jquery, ElementArrayFinder will search all branches of the DOM\nto find the elements that satisfy the conditions (i.e. all, filter, get).\nHowever, an ElementArrayFinder will not actually retrieve the elements until\nan action is called, which means it can be set up in helper files (i.e.\npage objects) before the page is available, and reused as the page changes.\n\nYou can treat an ElementArrayFinder as an array of WebElements for most\npurposes, in particular, you may perform actions (i.e. click, getText) on\nthem as you would an array of WebElements. The action will apply to\nevery element identified by the ElementArrayFinder. ElementArrayFinder\nextends Promise, and once an action is performed on an ElementArrayFinder,\nthe latest result can be accessed using then, and will be returned as an\narray of the results; the array has length equal to the length of the\nelements found by the ElementArrayFinder and each result represents the\nresult of performing the action on the element. Unlike a WebElement, an\nElementArrayFinder will wait for the angular app to settle before\nperforming finds or actions.",
    "example": "element.all(by.css('.items li')).then(function(items) {\n  expect(items.length).toBe(3);\n  expect(items[0].getText()).toBe('First');\n});",
    "fileName": "protractor",
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
        "description": "A function that returns a list of the underlying Web Elements.",
        "startingLine": 104,
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
        "startingLine": 106,
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
        "startingLine": 108,
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
      "startingLine": 111,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L62",
    "view": "<ul class=\"items\">\n  <li>First</li>\n  <li>Second</li>\n  <li>Third</li>\n</ul>"
  },
  {
    "description": "Create a shallow copy of ElementArrayFinder.",
    "fileName": "protractor",
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
      "startingLine": 134,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L132"
  },
  {
    "alias": "element.all(locator).all(locator)",
    "description": "Calls to ElementArrayFinder may be chained to find an array of elements\nusing the current elements in this ElementArrayFinder as the starting point.\nThis function returns a new ElementArrayFinder which would contain the\nchildren elements found (and could also be empty).",
    "example": "var foo = element.all(by.css('.parent')).all(by.css('.foo'))\nexpect(foo.getText()).toEqual(['1a', '2a'])\nvar baz = element.all(by.css('.parent')).all(by.css('.baz'))\nexpect(baz.getText()).toEqual(['1b'])\nvar nonexistent = element.all(by.css('.parent')).all(by.css('.NONEXISTENT'))\nexpect(nonexistent.getText()).toEqual([''])",
    "fileName": "protractor",
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
        "startingLine": 173,
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
      "startingLine": 174,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L145",
    "view": "<div id='id1' class=\"parent\">\n  <ul>\n    <li class=\"foo\">1a</li>\n    <li class=\"baz\">1b</li>\n  </ul>\n</div>\n<div id='id2' class=\"parent\">\n  <ul>\n    <li class=\"foo\">2a</li>\n    <li class=\"bar\">2b</li>\n  </ul>\n</div>"
  },
  {
    "alias": "element.all(locator).filter(filterFn)",
    "description": "Apply a filter function to each element within the ElementArrayFinder. Returns\na new ElementArrayFinder with all elements that pass the filter function. The\nfilter function receives the ElementFinder as the first argument\nand the index as a second arg.\nThis does not actually retrieve the underlying list of elements, so it can\nbe used in page objects.",
    "example": "element.all(by.css('.items li')).filter(function(elem, index) {\n  return elem.getText().then(function(text) {\n    return text === 'Third';\n  });\n}).then(function(filteredElements) {\n  filteredElements[0].click();\n});",
    "fileName": "protractor",
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
        "startingLine": 242,
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
      "startingLine": 245,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L218",
    "view": "<ul class=\"items\">\n  <li class=\"one\">First</li>\n  <li class=\"two\">Second</li>\n  <li class=\"three\">Third</li>\n</ul>"
  },
  {
    "alias": "element.all(locator).get(index)",
    "description": "Get an element within the ElementArrayFinder by index. The index starts at 0.\nNegative indices are wrapped (i.e. -i means ith element from last)\nThis does not actually retrieve the underlying element.",
    "example": "var list = element.all(by.css('.items li'));\nexpect(list.get(0).getText()).toBe('First');\nexpect(list.get(1).getText()).toBe('Second');",
    "fileName": "protractor",
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
        "startingLine": 292,
        "typeExpression": "number",
        "type": {
          "type": "NameExpression",
          "name": "number"
        },
        "typeList": [
          "number"
        ],
        "name": "index",
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
      "description": "finder representing element at the given index.",
      "startingLine": 293,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L275",
    "view": "<ul class=\"items\">\n  <li>First</li>\n  <li>Second</li>\n  <li>Third</li>\n</ul>"
  },
  {
    "alias": "element.all(locator).first()",
    "description": "Get the first matching element for the ElementArrayFinder. This does not\nactually retrieve the underlying element.",
    "example": "var first = element.all(by.css('.items li')).first();\nexpect(first.getText()).toBe('First');",
    "fileName": "protractor",
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
      "startingLine": 331,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L316",
    "view": "<ul class=\"items\">\n  <li>First</li>\n  <li>Second</li>\n  <li>Third</li>\n</ul>"
  },
  {
    "alias": "element.all(locator).last()",
    "description": "Get the last matching element for the ElementArrayFinder. This does not\nactually retrieve the underlying element.",
    "example": "var last = element.all(by.css('.items li')).last();\nexpect(last.getText()).toBe('Third');",
    "fileName": "protractor",
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
      "startingLine": 353,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L338",
    "view": "<ul class=\"items\">\n  <li>First</li>\n  <li>Second</li>\n  <li>Third</li>\n</ul>"
  },
  {
    "alias": "element.all(locator).count()",
    "description": "Count the number of elements represented by the ElementArrayFinder.",
    "example": "var list = element.all(by.css('.items li'));\nexpect(list.count()).toBe(3);",
    "fileName": "protractor",
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
      "startingLine": 394,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L380",
    "view": "<ul class=\"items\">\n  <li>First</li>\n  <li>Second</li>\n  <li>Third</li>\n</ul>"
  },
  {
    "description": "Returns the most relevant locator.",
    "example": "$('#ID1').locator() // returns by.css('#ID1')\n$('#ID1').$('#ID2').locator() // returns by.css('#ID2')\n$$('#ID1').filter(filterFn).get(0).click().locator() // returns by.css('#ID1')",
    "fileName": "protractor",
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
      "startingLine": 417,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L410"
  },
  {
    "alias": "element.all(locator).each(eachFunction)",
    "description": "Calls the input function on each ElementFinder represented by the ElementArrayFinder.",
    "example": "element.all(by.css('.items li')).each(function(element) {\n  // Will print First, Second, Third.\n  element.getText().then(console.log);\n});",
    "fileName": "protractor",
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
        "startingLine": 513,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L497",
    "view": "<ul class=\"items\">\n  <li>First</li>\n  <li>Second</li>\n  <li>Third</li>\n</ul>"
  },
  {
    "alias": "element.all(locator).map(mapFunction)",
    "description": "Apply a map function to each element within the ElementArrayFinder. The\ncallback receives the ElementFinder as the first argument and the index as\na second arg.",
    "example": "var items = element.all(by.css('.items li')).map(function(elm, index) {\n  return {\n    index: index,\n    text: elm.getText(),\n    class: elm.getAttribute('class')\n  };\n});\nexpect(items).toEqual([\n  {index: 0, text: 'First', class: 'one'},\n  {index: 1, text: 'Second', class: 'two'},\n  {index: 2, text: 'Third', class: 'three'}\n]);",
    "fileName": "protractor",
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
        "startingLine": 550,
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
      "startingLine": 552,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L524",
    "view": "<ul class=\"items\">\n  <li class=\"one\">First</li>\n  <li class=\"two\">Second</li>\n  <li class=\"three\">Third</li>\n</ul>"
  },
  {
    "alias": "element.all(locator).reduce(reduceFn)",
    "description": "Apply a reduce function against an accumulator and every element found \nusing the locator (from left-to-right). The reduce function has to reduce\nevery element into a single value (the accumulator). Returns promise of \nthe accumulator. The reduce function receives the accumulator, current \nElementFinder, the index, and the entire array of ElementFinders, \nrespectively.",
    "example": "var value = element.all(by.css('.items li')).reduce(function(acc, elem) {\n  return elem.getText().then(function(text) {\n    return acc + text + ' ';\n  });\n});\n\nexpect(value).toEqual('First Second Third ');",
    "fileName": "protractor",
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
        "startingLine": 594,
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
        "startingLine": 596,
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
      "startingLine": 597,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L570",
    "view": "<ul class=\"items\">\n  <li class=\"one\">First</li>\n  <li class=\"two\">Second</li>\n  <li class=\"three\">Third</li>\n</ul>"
  },
  {
    "description": "Evaluates the input as if it were on the scope of the current underlying\nelements.",
    "example": "var value = element(by.id('foo')).evaluate('variableInScope');",
    "fileName": "protractor",
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
        "startingLine": 622,
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
      "description": "which resolves to the evaluated expression for each underlying element. The result will be resolved as in webdriver.WebDriver.executeScript. In summary - primitives will be resolved as is, functions will be converted to string, and elements will be returned as a WebElement.",
      "startingLine": 624,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L613",
    "view": "<span id=\"foo\">{{variableInScope}}</span>"
  },
  {
    "description": "Determine if animation is allowed on the current underlying elements.",
    "example": "// Turns off ng-animate animations for all elements in the <body>\nelement(by.css('body')).allowAnimations(false);",
    "fileName": "protractor",
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
        "startingLine": 641,
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
      "startingLine": 647,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L640"
  },
  {
    "alias": "element(locator)",
    "description": "The ElementFinder simply represents a single element of an\nElementArrayFinder (and is more like a convenience object). As a result,\nanything that can be done with an ElementFinder, can also be done using\nan ElementArrayFinder.\n\nThe ElementFinder can be treated as a WebElement for most purposes, in \nparticular, you may perform actions (i.e. click, getText) on them as you\nwould a WebElement. ElementFinders extend Promise, and once an action \nis performed on an ElementFinder, the latest result from the chain can be \naccessed using then. Unlike a WebElement, an ElementFinder will wait for\nangular to settle before performing finds or actions.\n\nElementFinder can be used to build a chain of locators that is used to find\nan element. An ElementFinder does not actually attempt to find the element \nuntil an action is called, which means they can be set up in helper files \nbefore the page is available. ",
    "example": "// Find element with {{scopeVar}} syntax.\nelement(by.binding('person.name')).getText().then(function(name) {\n  expect(name).toBe('Foo');\n});\n\n// Find element with ng-bind=\"scopeVar\" syntax.\nexpect(element(by.binding('person.email')).getText()).toBe('foo@bar.com');\n\n// Find by model.\nvar input = element(by.model('person.name'));\ninput.sendKeys('123');\nexpect(input.getAttribute('value')).toBe('Foo123');",
    "fileName": "protractor",
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
        "description": "The ElementArrayFinder that this is branched from.",
        "startingLine": 696,
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
      "startingLine": 698,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L658",
    "view": "<span>{{person.name}}</span>\n<span ng-bind=\"person.email\"></span>\n<input type=\"text\" ng-model=\"person.name\"/>"
  },
  {
    "description": "Create a shallow copy of ElementFinder.",
    "fileName": "protractor",
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
      "startingLine": 756,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L754"
  },
  {
    "description": "",
    "fileName": "protractor",
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
      "startingLine": 767,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L765"
  },
  {
    "alias": "element(locator).getWebElement()",
    "description": "Returns the WebElement represented by this ElementFinder.\nThrows the WebDriver error if the element doesn't exist.",
    "example": "The following three expressions are equivalent.\n element(by.css('.parent')).getWebElement();\n browser.waitForAngular(); browser.driver.findElement(by.css('.parent'));\n browser.findElement(by.css('.parent'));",
    "fileName": "protractor",
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
      "startingLine": 784,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L774"
  },
  {
    "description": "Access the underlying actionResult of ElementFinder. Implementation allows\nElementFinder to be used as a webdriver.promise.Promise",
    "fileName": "protractor",
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
        "startingLine": 798,
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
      "description": "Promise which contains the results of  evaluating fn.",
      "startingLine": 801,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L795"
  },
  {
    "alias": "element(locator).all(locator)",
    "description": "Calls to element may be chained to find an array of elements within a parent.",
    "example": "var items = element(by.css('.parent')).all(by.tagName('li'))",
    "fileName": "protractor",
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
        "startingLine": 829,
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
      "startingLine": 830,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L814",
    "view": "<div class=\"parent\">\n  <ul>\n    <li class=\"one\">First</li>\n    <li class=\"two\">Second</li>\n    <li class=\"three\">Third</li>\n  </ul>\n</div>"
  },
  {
    "alias": "element(locator).element(locator)",
    "description": "Calls to element may be chained to find elements within a parent.",
    "example": "// Chain 2 element calls.\nvar child = element(by.css('.parent')).\n    element(by.css('.child'));\nexpect(child.getText()).toBe('Child text\\n555-123-4567');\n\n// Chain 3 element calls.\nvar triple = element(by.css('.parent')).\n    element(by.css('.child')).\n    element(by.binding('person.phone'));\nexpect(triple.getText()).toBe('555-123-4567');",
    "fileName": "protractor",
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
        "startingLine": 860,
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
      "startingLine": 861,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L837",
    "view": "<div class=\"parent\">\n  <div class=\"child\">\n    Child text\n    <div>{{person.phone}}</div>\n  </div>\n</div>"
  },
  {
    "alias": "$$(cssSelector)",
    "description": "Shortcut for querying the document directly with css.",
    "example": "// The following protractor expressions are equivalent.\nvar list = element.all(by.css('.count span'));\nexpect(list.count()).toBe(2);\n\nlist = $$('.count span');\nexpect(list.count()).toBe(2);\nexpect(list.get(0).getText()).toBe('First');\nexpect(list.get(1).getText()).toBe('Second');",
    "fileName": "protractor",
    "htmlView": "&lt;div class=&quot;count&quot;&gt;\n  &lt;span class=&quot;one&quot;&gt;First&lt;/span&gt;\n  &lt;span class=&quot;two&quot;&gt;Second&lt;/span&gt;\n&lt;/div&gt;",
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
        "startingLine": 887,
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
      "description": "which identifies the array of the located [webdriver.WebElement](webdriver.WebElement)s.",
      "startingLine": 888,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L868",
    "view": "<div class=\"count\">\n  <span class=\"one\">First</span>\n  <span class=\"two\">Second</span>\n</div>"
  },
  {
    "alias": "$(cssSelector)",
    "description": "Shortcut for querying the document directly with css.",
    "example": "var item = $('.count .two');\nexpect(item.getText()).toBe('Second');",
    "fileName": "protractor",
    "htmlView": "&lt;div class=&quot;count&quot;&gt;\n  &lt;span class=&quot;one&quot;&gt;First&lt;/span&gt;\n  &lt;span class=&quot;two&quot;&gt;Second&lt;/span&gt;\n&lt;/div&gt;",
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
        "startingLine": 909,
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
      "description": "which identifies the located [webdriver.WebElement](webdriver.WebElement)",
      "startingLine": 910,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L896",
    "view": "<div class=\"count\">\n  <span class=\"one\">First</span>\n  <span class=\"two\">Second</span>\n</div>"
  },
  {
    "description": "Determine whether the element is present on the page.",
    "example": "// Element exists.\nexpect(element(by.binding('person.name')).isPresent()).toBe(true);\n\n// Element not present.\nexpect(element(by.binding('notPresent')).isPresent()).toBe(false);",
    "fileName": "protractor",
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
      "startingLine": 930,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L918",
    "view": "<span>{{person.name}}</span>"
  },
  {
    "description": "Override for WebElement.prototype.isElementPresent so that protractor waits\nfor Angular to settle before making the check.",
    "fileName": "protractor",
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
        "startingLine": 945,
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
      "description": "which resolves to whether the element is present on the page.",
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L940"
  },
  {
    "description": "Evaluates the input as if it were on the scope of the current element.",
    "fileName": "protractor",
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
        "startingLine": 957,
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
      "startingLine": 959,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L954"
  },
  {
    "description": "",
    "fileName": "protractor",
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
        "startingLine": 967,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L966"
  },
  {
    "description": "Webdriver relies on this function to be present on Promises, so adding\nthis dummy function as we inherited from webdriver.promise.Promise, but\nthis function is irrelevant to our usage",
    "fileName": "protractor",
    "name": "ElementFinder.prototype.isPending",
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
      "description": "Always false as ElementFinder is never in pending state.",
      "startingLine": 980,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L976"
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
        "startingLine": 1001,
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
        "startingLine": 1002,
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
        "startingLine": 1003,
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
      }
    ],
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L998"
  },
  {
    "description": "Instruct webdriver to wait until Angular has finished rendering and has\nno outstanding $http calls before continuing.",
    "fileName": "protractor",
    "name": "Protractor.prototype.waitForAngular",
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
      "startingLine": 1178,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L1175"
  },
  {
    "description": "Waits for Angular to finish rendering before searching for elements.",
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
      "startingLine": 1218,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L1216"
  },
  {
    "description": "Waits for Angular to finish rendering before searching for elements.",
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
      "description": "A promise that will be resolved to an array of the located [webdriver.WebElement](webdriver.WebElement)s.",
      "startingLine": 1227,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L1225"
  },
  {
    "description": "Tests if an element is present on the page.",
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
      "startingLine": 1237,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L1235"
  },
  {
    "description": "Add a module to load before Angular whenever Protractor.get is called.\nModules will be registered after existing modules already on the page,\nso any module registered here will override preexisting modules with the same\nname.",
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
        "startingLine": 1257,
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
        "startingLine": 1258,
        "typeExpression": "!string|Function",
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
        "startingLine": 1259,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L1247"
  },
  {
    "description": "Clear the list of registered mock modules.",
    "fileName": "protractor",
    "name": "Protractor.prototype.clearMockModules",
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L1273"
  },
  {
    "description": "Remove a registered mock module.",
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
        "startingLine": 1286,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L1281"
  },
  {
    "description": "",
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
        "startingLine": 1320,
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
        "startingLine": 1321,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L1313"
  },
  {
    "description": "See webdriver.WebDriver.refresh\n\nMakes a full reload of the current page and loads mock modules before\nAngular. Assumes that the page being loaded uses Angular.\nIf you need to access a page which does not have Angular on load, use\nthe wrapped webdriver directly.",
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
        "description": "Number of seconds to wait for Angular to start.",
        "startingLine": 1410,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L1403"
  },
  {
    "description": "Mixin navigation methods back into the navigation object so that\nthey are invoked as before, i.e. driver.navigate().refresh()",
    "fileName": "protractor",
    "name": "Protractor.prototype.navigate",
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L1428"
  },
  {
    "description": "Browse to another page using in-page navigation.",
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
        "startingLine": 1440,
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
      "tagName": "returns",
      "description": "A promise that will resolve once page has been changed.",
      "startingLine": 1441,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L1438"
  },
  {
    "description": "Returns the current absolute url from AngularJS.",
    "fileName": "protractor",
    "name": "Protractor.prototype.getLocationAbsUrl",
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L1456"
  },
  {
    "description": "Pauses the test and injects some helper functions into the browser, so that\ndebugging may be done in the browser console.\n\nThis should be used under node in debug mode, i.e. with\nprotractor debug <configuration.js>",
    "example": "While in the debugger, commands can be scheduled through webdriver by\nentering the repl:\n  debug> repl\n  Press Ctrl + C to leave rdebug repl\n  > ptor.findElement(protractor.By.input('user').sendKeys('Laura'));\n  > ptor.debugger();\n  debug> c\n\nThis will run the sendKeys command as the next task, then re-enter the\ndebugger.",
    "fileName": "protractor",
    "name": "Protractor.prototype.debugger",
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L1465"
  },
  {
    "description": "Beta (unstable) pause function for debugging webdriver tests. Use\nbrowser.pause() in your test to enter the protractor debugger from that\npoint in the control flow.\nDoes not require changes to the command line (no need to add 'debug').",
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
        "startingLine": 1502,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/protractor.js#L1491"
  },
  {
    "alias": "by",
    "description": "The Protractor Locators. These provide ways of finding elements in\nAngular applications by binding, model, etc.",
    "fileName": "locators",
    "name": "ProtractorBy",
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/locators.js#L6"
  },
  {
    "description": "webdriver's By is an enum of locator functions, so we must set it to\na prototype before inheriting from it.",
    "fileName": "locators",
    "name": "WebdriverBy.prototype",
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/locators.js#L16"
  },
  {
    "alias": "by.addLocator(locatorName, functionOrScript)",
    "description": "Add a locator to this instance of ProtractorBy. This locator can then be\nused with element(by.locatorName(args)).",
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/locators.js#L23",
    "view": "<button ng-click=\"doAddition()\">Go!</button>"
  },
  {
    "description": "Find an element by binding.",
    "example": "var span1 = element(by.binding('person.name'));\nexpect(span1.getText()).toBe('Foo');\n\nvar span2 = element(by.binding('person.email'));\nexpect(span2.getText()).toBe('foo@bar.com');",
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
        "startingLine": 93,
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
      "startingLine": 94,
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
        "Object"
      ]
    },
    "returnString": "{findElementsOverride: findElementsOverride, toString: Function&#124;string}",
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/locators.js#L80",
    "view": "<span>{{person.name}}</span>\n<span ng-bind=\"person.email\"></span>"
  },
  {
    "description": "Find an element by exact binding.",
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
        "startingLine": 125,
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
      "startingLine": 126,
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
        "Object"
      ]
    },
    "returnString": "{findElementsOverride: findElementsOverride, toString: Function&#124;string}",
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/locators.js#L110",
    "view": "<span>{{ person.name }}</span>\n<span ng-bind=\"person-email\"></span>\n<span>{{person_phone|uppercase}}</span>"
  },
  {
    "alias": "by.model(modelName)",
    "description": "Find an element by ng-model expression.",
    "example": "var input = element(by.model('person.name'));\ninput.sendKeys('123');\nexpect(input.getAttribute('value')).toBe('Foo123');",
    "fileName": "locators",
    "htmlView": "&lt;input type=&quot;text&quot; ng-model=&quot;person.name&quot;/&gt;",
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
        "startingLine": 153,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/locators.js#L142",
    "view": "<input type=\"text\" ng-model=\"person.name\"/>"
  },
  {
    "description": "Find a button by text.",
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
        "startingLine": 177,
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
      "startingLine": 178,
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
        "Object"
      ]
    },
    "returnString": "{findElementsOverride: findElementsOverride, toString: Function&#124;string}",
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/locators.js#L169",
    "view": "<button>Save</button>"
  },
  {
    "description": "Find a button by partial text.",
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
        "startingLine": 202,
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
      "startingLine": 203,
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
        "Object"
      ]
    },
    "returnString": "{findElementsOverride: findElementsOverride, toString: Function&#124;string}",
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/locators.js#L194",
    "view": "<button>Save my file</button>"
  },
  {
    "description": "Find elements inside an ng-repeat.",
    "example": "// Returns the DIV for the second cat.\nvar secondCat = element(by.repeater('cat in pets').row(1));\n\n// Returns the SPAN for the first cat's name.\nvar firstCatName = element(by.repeater('cat in pets').\n    row(0).column('{{cat.name}}'));\n\n// Returns a promise that resolves to an array of WebElements from a column\nvar ages = element.all(\n    by.repeater('cat in pets').column('{{cat.age}}'));\n\n// Returns a promise that resolves to an array of WebElements containing\n// all top level elements repeated by the repeater. For 2 pets rows resolves\n// to an array of 2 elements.\nvar rows = element.all(by.repeater('cat in pets'));\n\n// Returns a promise that resolves to an array of WebElements containing all\n// the elements with a binding to the book's name.\nvar divs = element.all(by.repeater('book in library').column('book.name'));\n\n// Returns a promise that resolves to an array of WebElements containing\n// the DIVs for the second book.\nvar bookInfo = element.all(by.repeater('book in library').row(1));\n\n// Returns the H4 for the first book's name.\nvar firstBookName = element(by.repeater('book in library').\n    row(0).column('{{book.name}}'));\n\n// Returns a promise that resolves to an array of WebElements containing\n// all top level elements repeated by the repeater. For 2 books divs\n// resolves to an array of 4 elements.\nvar divs = element.all(by.repeater('book in library'));",
    "fileName": "locators",
    "htmlView": "&lt;div ng-repeat=&quot;cat in pets&quot;&gt;\n  &lt;span&gt;{{cat.name}}&lt;/span&gt;\n  &lt;span&gt;{{cat.age}}&lt;/span&gt;\n&lt;/div&gt;\n\n&lt;div class=&quot;book-img&quot; ng-repeat-start=&quot;book in library&quot;&gt;\n  &lt;span&gt;{{$index}}&lt;/span&gt;\n&lt;/div&gt;\n&lt;div class=&quot;book-info&quot; ng-repeat-end&gt;\n  &lt;h4&gt;{{book.name}}&lt;/h4&gt;\n  &lt;p&gt;{{book.blurb}}&lt;/p&gt;\n&lt;/div&gt;",
    "name": "ProtractorBy.prototype.repeater",
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/locators.js#L220",
    "view": "<div ng-repeat=\"cat in pets\">\n  <span>{{cat.name}}</span>\n  <span>{{cat.age}}</span>\n</div>\n\n<div class=\"book-img\" ng-repeat-start=\"book in library\">\n  <span>{{$index}}</span>\n</div>\n<div class=\"book-info\" ng-repeat-end>\n  <h4>{{book.name}}</h4>\n  <p>{{book.blurb}}</p>\n</div>"
  },
  {
    "description": "Find elements by CSS which contain a certain string.",
    "example": "// Returns the DIV for the dog, but not cat.\nvar dog = element(by.cssContainingText('.pet', 'Dog'));",
    "fileName": "locators",
    "htmlView": "&lt;ul&gt;\n  &lt;li class=&quot;pet&quot;&gt;Dog&lt;/li&gt;\n  &lt;li class=&quot;pet&quot;&gt;Cat&lt;/li&gt;\n&lt;/ul&gt;",
    "name": "ProtractorBy.prototype.cssContainingText",
    "returnString": "",
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/locators.js#L335",
    "view": "<ul>\n  <li class=\"pet\">Dog</li>\n  <li class=\"pet\">Cat</li>\n</ul>"
  },
  {
    "alias": "by.options(optionsDescriptor)",
    "description": "Find an element by ng-options expression.",
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
        "startingLine": 376,
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
    "sourceLink": "https://github.com/angular/protractor/blob/master/lib/locators.js#L361",
    "view": "<select ng-model=\"color\" ng-options=\"c for c in colors\">\n  <option value=\"0\" selected=\"selected\">red</option>\n  <option value=\"1\">green</option>\n</select>"
  },
  {
    "description": "An element locator.",
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
        "startingLine": 30,
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
        "startingLine": 31,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/locators.js#L29"
  },
  {
    "description": "A collection of factory functions for creating [webdriver.Locator](webdriver.Locator)\ninstances.",
    "fileName": "locators",
    "name": "webdriver.By",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/locators.js#L64"
  },
  {
    "description": "Locates elements that have a specific class name. The returned locator\nis equivalent to searching for elements with the CSS selector \".clazz\".",
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
        "startingLine": 102,
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
      "startingLine": 103,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/locators.js#L99"
  },
  {
    "description": "Locates elements using a CSS selector. For browsers that do not support\nCSS selectors, WebDriver implementations may return an\ninvalid selector error. An\nimplementation may, however, emulate the CSS selector API.",
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
        "startingLine": 116,
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
      "startingLine": 117,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/locators.js#L111"
  },
  {
    "description": "Locates an element by its ID.",
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
        "startingLine": 126,
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
      "startingLine": 127,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/locators.js#L124"
  },
  {
    "description": "Locates link elements whose visible\ntext matches the given string.",
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
        "startingLine": 136,
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
      "startingLine": 137,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/locators.js#L133"
  },
  {
    "description": "Locates an elements by evaluating a\nJavaScript expression.\nThe result of this expression must be an element or list of elements.",
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
        "startingLine": 147,
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
        "startingLine": 148,
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
      "startingLine": 149,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/locators.js#L143"
  },
  {
    "description": "Locates elements whose <code ng-non-bindable>name</code> attribute has the given value.",
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
        "startingLine": 163,
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
      "startingLine": 164,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/locators.js#L161"
  },
  {
    "description": "Locates link elements whose visible\ntext contains the given substring.",
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
        "startingLine": 173,
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
      "startingLine": 174,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/locators.js#L170"
  },
  {
    "description": "Locates elements with a given tag name. The returned locator is\nequivalent to using the <code ng-non-bindable>getElementsByTagName</code> DOM function.",
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
        "startingLine": 184,
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
      "startingLine": 185,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/locators.js#L181"
  },
  {
    "description": "Locates elements matching a XPath selector. Care should be taken when\nusing an XPath selector with a [webdriver.WebElement](webdriver.WebElement) as WebDriver\nwill respect the context in the specified in the selector. For example,\ngiven the selector <code ng-non-bindable>\"//div\"</code>, WebDriver will search from the\ndocument root regardless of whether the locator was used with a\nWebElement.",
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
        "startingLine": 199,
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
      "startingLine": 200,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/locators.js#L192"
  },
  {
    "description": "Verifies that a <code ng-non-bindable>value</code> is a valid locator to use for searching for\nelements on the page.",
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
        "startingLine": 228,
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
      "startingLine": 229,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/locators.js#L225"
  },
  {
    "description": "",
    "fileName": "locators",
    "name": "webdriver.Locator.prototype.toString",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/locators.js#L248"
  },
  {
    "description": "Creates a new WebDriver client, which provides control over a browser.\n\nEvery WebDriver command returns a <code ng-non-bindable>webdriver.promise.Promise</code> that\nrepresents the result of that command. Callbacks may be registered on this\nobject to manipulate the command result or catch an expected error. Any\ncommands scheduled with a callback are considered sub-commands and will\nexecute before the next command in the current frame. For example:\n<pre><code>\n  var message = [];\n  driver.call(message.push, message, 'a').then(function() {\n    driver.call(message.push, message, 'b');\n  });\n  driver.call(message.push, message, 'c');\n  driver.call(function() {\n    alert('message is abc? ' + (message.join('') == 'abc'));\n  });\n</code></pre>",
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
        "startingLine": 68,
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
        "startingLine": 70,
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
        "startingLine": 72,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L50"
  },
  {
    "description": "Creates a new WebDriver client for an existing session.",
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
        "startingLine": 91,
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
        "startingLine": 93,
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
        "description": "The control flow all driver commands should execute under. Defaults to the webdriver.promise.controlFlow() currently active  control flow.",
        "startingLine": 94,
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
      "startingLine": 97,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L90"
  },
  {
    "description": "Creates a new WebDriver session.",
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
        "startingLine": 110,
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
        "startingLine": 112,
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
        "description": "The control flow all driver commands should execute under, including the initial session creation. Defaults to the webdriver.promise.controlFlow() currently active  control flow.",
        "startingLine": 114,
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
      "startingLine": 118,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L109"
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
      "startingLine": 304,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L304"
  },
  {
    "description": "Schedules a <code ng-non-bindable>webdriver.Command</code> to be executed by this driver's\n<code ng-non-bindable>webdriver.CommandExecutor</code>.",
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
        "startingLine": 315,
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
        "startingLine": 316,
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
      "startingLine": 317,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L313"
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
      "startingLine": 391,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L391"
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
      "startingLine": 400,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L400"
  },
  {
    "description": "Schedules a command to quit the current session. After calling quit, this\ninstance will be invalidated and may no longer be used to issue commands\nagainst the browser.",
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
      "startingLine": 414,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L411"
  },
  {
    "description": "Creates a new action sequence using this driver. The sequence will not be\nscheduled for execution until webdriver.ActionSequence#perform is\ncalled. Example:\n<pre><code>\n  driver.actions().\n      mouseDown(element1).\n      mouseMove(element2).\n      mouseUp().\n      perform();\n</code></pre>",
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
      "startingLine": 440,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L430"
  },
  {
    "description": "Schedules a command to execute JavaScript in the context of the currently\nselected frame or window. The script fragment will be executed as the body\nof an anonymous function. If the script is provided as a function object,\nthat function will be converted to a string for injection into the target\nwindow.\n\nAny arguments provided in addition to the script will be included as script\narguments and may be referenced using the <code ng-non-bindable>arguments</code> object.\nArguments may be a boolean, number, string, or <code ng-non-bindable>webdriver.WebElement</code>.\nArrays and objects may also be used as script arguments as long as each item\nadheres to the types previously mentioned.\n\nThe script may refer to any variables accessible from the current window.\nFurthermore, the script will execute in the window's context, thus\n<code ng-non-bindable>document</code> may be used to refer to the current document. Any local\nvariables will not be available once the script has finished executing,\nthough global variables will persist.\n\nIf the script has a return value (i.e. if the script contains a return\nstatement), then the following steps will be taken for resolving this\nfunctions return value:\n<ul>\n<li>For a HTML element, the value will resolve to a\n    <code ng-non-bindable>webdriver.WebElement</code></li>\n<li>Null and undefined return values will resolve to null</li>\n<li>Booleans, numbers, and strings will resolve as is</li>\n<li>Functions will resolve to their string representation</li>\n<li>For arrays and objects, each member item will be converted according to\n    the rules above</li>\n</ul>",
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
        "startingLine": 479,
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
        "startingLine": 480,
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
      "startingLine": 481,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L448"
  },
  {
    "description": "Schedules a command to execute asynchronous JavaScript in the context of the\ncurrently selected frame or window. The script fragment will be executed as\nthe body of an anonymous function. If the script is provided as a function\nobject, that function will be converted to a string for injection into the\ntarget window.\n\nAny arguments provided in addition to the script will be included as script\narguments and may be referenced using the <code ng-non-bindable>arguments</code> object.\nArguments may be a boolean, number, string, or <code ng-non-bindable>webdriver.WebElement</code>.\nArrays and objects may also be used as script arguments as long as each item\nadheres to the types previously mentioned.\n\nUnlike executing synchronous JavaScript with\n<code ng-non-bindable>webdriver.WebDriver.prototype.executeScript</code>, scripts executed with\nthis function must explicitly signal they are finished by invoking the\nprovided callback. This callback will always be injected into the\nexecuted function as the last argument, and thus may be referenced with\n<code ng-non-bindable>arguments[arguments.length - 1]</code>. The following steps will be taken\nfor resolving this functions return value against the first argument to the\nscript's callback function:\n<ul>\n<li>For a HTML element, the value will resolve to a\n    <code ng-non-bindable>webdriver.WebElement</code></li>\n<li>Null and undefined return values will resolve to null</li>\n<li>Booleans, numbers, and strings will resolve as is</li>\n<li>Functions will resolve to their string representation</li>\n<li>For arrays and objects, each member item will be converted according to\n    the rules above</li>\n</ul>\n\nExample #1: Performing a sleep that is synchronized with the currently\nselected window:\n<code><pre>\nvar start = new Date().getTime();\ndriver.executeAsyncScript(\n    'window.setTimeout(arguments[arguments.length - 1], 500);').\n    then(function() {\n      console.log('Elapsed time: ' + (new Date().getTime() - start) + ' ms');\n    });\n</pre></code>\n\nExample #2: Synchronizing a test with an AJAX application:\n<code><pre>\nvar button = driver.findElement(By.id('compose-button'));\nbutton.click();\ndriver.executeAsyncScript(\n    'var callback = arguments[arguments.length - 1];' +\n    'mailClient.getComposeWindowWidget().onload(callback);');\ndriver.switchTo().frame('composeWidget');\ndriver.findElement(By.id('to')).sendKeys('dog@example.com');\n</pre></code>\n\nExample #3: Injecting a XMLHttpRequest and waiting for the result. In this\nexample, the inject script is specified with a function literal. When using\nthis format, the function is converted to a string for injection, so it\nshould not reference any symbols not defined in the scope of the page under\ntest.\n<code><pre>\ndriver.executeAsyncScript(function() {\n  var callback = arguments[arguments.length - 1];\n  var xhr = new XMLHttpRequest();\n  xhr.open(\"GET\", \"/resource/data.json\", true);\n  xhr.onreadystatechange = function() {\n    if (xhr.readyState == 4) {\n      callback(xhr.responseText);\n    }\n  }\n  xhr.send('');\n}).then(function(str) {\n  console.log(JSON.parse(str)['food']);\n});\n</pre></code>",
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
        "startingLine": 572,
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
        "startingLine": 573,
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
      "startingLine": 574,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L499"
  },
  {
    "description": "Schedules a command to execute a custom function.",
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
        "startingLine": 592,
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
        "startingLine": 594,
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
        "startingLine": 595,
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
      "startingLine": 596,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L591"
  },
  {
    "description": "Schedules a command to wait for a condition to hold, as defined by some\nuser supplied function. If any errors occur while evaluating the wait, they\nwill be allowed to propagate.\n\n<p>In the event a condition returns a webdriver.promise.Promise, the\npolling loop will wait for it to be resolved and use the resolved value for\nevaluating whether the condition has been satisfied. The resolution time for\na promise is factored into whether a wait has timed out.",
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
        "description": "Either a condition object, or a function to evaluate as a condition.",
        "startingLine": 625,
        "typeExpression": "!(webdriver.until.Condition.<T>|\n          function(!webdriver.WebDriver): T)",
        "type": {
          "type": "TypeUnion",
          "elements": [
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
          "webdriver.until.Condition.<T>",
          "function(!webdriver.WebDriver): T"
        ],
        "name": "condition",
        "paramString": "!(webdriver.until.Condition.&lt;T&gt;&#124;\n          function(!webdriver.WebDriver): T)"
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
        "startingLine": 628,
        "typeExpression": "number",
        "type": {
          "type": "NameExpression",
          "name": "number"
        },
        "typeList": [
          "number"
        ],
        "name": "timeout",
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
        "description": "An optional message to use if the wait times out.",
        "startingLine": 629,
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
      "startingLine": 631,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L616"
  },
  {
    "description": "Schedules a command to make the driver sleep for the given amount of time.",
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
        "startingLine": 657,
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
      "startingLine": 658,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L656"
  },
  {
    "description": "Schedules a command to retrieve they current window handle.",
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
      "startingLine": 668,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L667"
  },
  {
    "description": "Schedules a command to retrieve the current list of available window handles.",
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
      "startingLine": 680,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L679"
  },
  {
    "description": "Schedules a command to retrieve the current page's source. The page source\nreturned is a representation of the underlying DOM: do not expect it to be\nformatted or escaped in the same way as the response sent from the web\nserver.",
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
      "startingLine": 695,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L691"
  },
  {
    "description": "Schedules a command to close the current window.",
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
      "startingLine": 707,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L706"
  },
  {
    "description": "Schedules a command to navigate to the given URL.",
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
        "startingLine": 718,
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
      "startingLine": 719,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L717"
  },
  {
    "description": "Schedules a command to retrieve the URL of the current page.",
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
      "startingLine": 729,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L728"
  },
  {
    "description": "Schedules a command to retrieve the current page's title.",
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
      "startingLine": 741,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L740"
  },
  {
    "description": "Schedule a command to find an element on the page. If the element cannot be\nfound, a bot.ErrorCode.NO_SUCH_ELEMENT result will be returned\nby the driver. Unlike other commands, this error cannot be suppressed. In\nother words, scheduling a command to find an element doubles as an assert\nthat the element is present on the page. To test whether an element is\npresent on the page, use [#isElementPresent](webdriver.WebDriver.prototype.isElementPresent) instead.\n\n<p>The search criteria for an element may be defined using one of the\nfactories in the [webdriver.By](webdriver.By) namespace, or as a short-hand\nwebdriver.By.Hash object. For example, the following two statements\nare equivalent:\n<code><pre>\nvar e1 = driver.findElement(By.id('foo'));\nvar e2 = driver.findElement({id:'foo'});\n</pre></code>\n\n<p>You may also provide a custom locator function, which takes as input\nthis WebDriver instance and returns a [webdriver.WebElement](webdriver.WebElement), or a\npromise that will resolve to a WebElement. For example, to find the first\nvisible link on a page, you could write:\n<code><pre>\nvar link = driver.findElement(firstVisibleLink);\n\nfunction firstVisibleLink(driver) {\n  var links = driver.findElements(By.tagName('a'));\n  return webdriver.promise.filter(links, function(link) {\n    return links.isDisplayed();\n  }).then(function(visibleLinks) {\n    return visibleLinks[0];\n  });\n}\n</pre></code>\n\n<p>When running in the browser, a WebDriver cannot manipulate DOM elements\ndirectly; it may do so only through a [webdriver.WebElement](webdriver.WebElement) reference.\nThis function may be used to generate a WebElement from a DOM element. A\nreference to the DOM element will be stored in a known location and this\ndriver will attempt to retrieve it through [#executeScript](webdriver.WebDriver.prototype.executeScript). If the\nelement cannot be found (eg, it belongs to a different document than the\none this instance is currently focused on), a\nbot.ErrorCode.NO_SUCH_ELEMENT error will be returned.",
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
        "startingLine": 793,
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
      "startingLine": 795,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L751"
  },
  {
    "description": "Schedules a command to test if an element is present on the page.\n\n<p>If given a DOM element, this function will check if it belongs to the\ndocument the driver is currently focused on. Otherwise, the function will\ntest if at least one element can be found with the given search criteria.",
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
        "startingLine": 900,
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
      "startingLine": 903,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L894"
  },
  {
    "description": "Schedule a command to search for multiple elements on the page.",
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
        "startingLine": 921,
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
      "startingLine": 923,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L919"
  },
  {
    "description": "Schedule a command to take a screenshot. The driver makes a best effort to\nreturn a screenshot of the following, in order of preference:\n<ol>\n  <li>Entire page\n  <li>Current window\n  <li>Visible portion of the current frame\n  <li>The screenshot of the entire display containing the browser\n</ol>",
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
      "startingLine": 975,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L966"
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
      "startingLine": 985,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L985"
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
      "startingLine": 994,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L994"
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
      "startingLine": 1003,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1003"
  },
  {
    "description": "Interface for navigating back and forth in the browser history.",
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
        "startingLine": 1014,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1013"
  },
  {
    "description": "Schedules a command to navigate to a new URL.",
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
        "startingLine": 1026,
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
      "startingLine": 1027,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1025"
  },
  {
    "description": "Schedules a command to move backwards in the browser history.",
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
      "startingLine": 1040,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1039"
  },
  {
    "description": "Schedules a command to move forwards in the browser history.",
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
      "startingLine": 1052,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1051"
  },
  {
    "description": "Schedules a command to refresh the current page.",
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
      "startingLine": 1064,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1063"
  },
  {
    "description": "Provides methods for managing browser and driver state.",
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
        "startingLine": 1077,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1076"
  },
  {
    "description": "Schedules a command to add a cookie.",
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
        "startingLine": 1104,
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
        "startingLine": 1105,
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
        "startingLine": 1106,
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
        "startingLine": 1107,
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
        "startingLine": 1108,
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
        "startingLine": 1109,
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
      "startingLine": 1111,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1103"
  },
  {
    "description": "Schedules a command to delete all cookies visible to the current page.",
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
      "startingLine": 1161,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1160"
  },
  {
    "description": "Schedules a command to delete the cookie with the given name. This command is\na no-op if there is no cookie with the given name visible to the current\npage.",
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
        "startingLine": 1175,
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
      "startingLine": 1176,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1172"
  },
  {
    "description": "Schedules a command to retrieve all cookies visible to the current page.\nEach cookie will be returned as a JSON object as described by the WebDriver\nwire protocol.",
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
      "startingLine": 1191,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1188"
  },
  {
    "description": "Schedules a command to retrieve the cookie with the given name. Returns null\nif there is no such cookie. The cookie will be returned as a JSON object as\ndescribed by the WebDriver wire protocol.",
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
        "startingLine": 1207,
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
      "startingLine": 1208,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1204"
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
      "startingLine": 1223,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1223"
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
      "startingLine": 1232,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1232"
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
      "startingLine": 1241,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1241"
  },
  {
    "description": "An interface for managing timeout behavior for WebDriver instances.",
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
        "startingLine": 1252,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1251"
  },
  {
    "description": "Specifies the amount of time the driver should wait when searching for an\nelement if it is not immediately present.\n<p/>\nWhen searching for a single element, the driver should poll the page\nuntil the element has been found, or this timeout expires before failing\nwith a <code ng-non-bindable>bot.ErrorCode.NO_SUCH_ELEMENT</code> error. When searching\nfor multiple elements, the driver should poll the page until at least one\nelement has been found or this timeout has expired.\n<p/>\nSetting the wait timeout to 0 (its default value), disables implicit\nwaiting.\n<p/>\nIncreasing the implicit wait timeout should be used judiciously as it\nwill have an adverse effect on test run time, especially when used with\nslower location strategies like XPath.",
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
        "startingLine": 1279,
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
      "startingLine": 1280,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1263"
  },
  {
    "description": "Sets the amount of time to wait, in milliseconds, for an asynchronous script\nto finish execution before returning an error. If the timeout is less than or\nequal to 0, the script will be allowed to run indefinitely.",
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
        "startingLine": 1296,
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
      "startingLine": 1297,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1292"
  },
  {
    "description": "Sets the amount of time to wait for a page load to complete before returning\nan error.  If the timeout is negative, page loads may be indefinite.",
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
        "startingLine": 1311,
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
      "startingLine": 1312,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1309"
  },
  {
    "description": "An interface for managing the current window.",
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
        "startingLine": 1327,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1326"
  },
  {
    "description": "Retrieves the window's current position, relative to the top left corner of\nthe screen.",
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
      "startingLine": 1340,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1338"
  },
  {
    "description": "Repositions the current window.",
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
        "startingLine": 1354,
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
        "startingLine": 1356,
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
      "startingLine": 1358,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1353"
  },
  {
    "description": "Retrieves the window's current size.",
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
      "startingLine": 1373,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1372"
  },
  {
    "description": "Resizes the current window.",
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
        "startingLine": 1387,
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
        "startingLine": 1388,
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
      "startingLine": 1389,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1386"
  },
  {
    "description": "Maximizes the current window.",
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
      "startingLine": 1404,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1403"
  },
  {
    "description": "Interface for managing WebDriver log records.",
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
        "startingLine": 1417,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1416"
  },
  {
    "description": "Fetches available log entries for the given type.\n\n<p/>Note that log buffers are reset after each call, meaning that\navailable log entries correspond to those entries not yet returned for a\ngiven log type. In practice, this means that this call will return the\navailable log entries since the last call, or from the start of the\nsession.",
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
        "startingLine": 1436,
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
      "startingLine": 1437,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1428"
  },
  {
    "description": "Retrieves the log types available to this driver.",
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
      "startingLine": 1461,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1460"
  },
  {
    "description": "An interface for changing the focus of the driver to another frame or window.",
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
        "startingLine": 1474,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1473"
  },
  {
    "description": "Schedules a command retrieve the <code ng-non-bindable>document.activeElement</code> element on\nthe current document, or <code ng-non-bindable>document.body</code> if activeElement is not\navailable.",
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
      "startingLine": 1488,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1485"
  },
  {
    "description": "Schedules a command to switch focus of all future commands to the first frame\non the page.",
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
      "startingLine": 1501,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1499"
  },
  {
    "description": "Schedules a command to switch the focus of all future commands to another\nframe on the page.\n<p/>\nIf the frame is specified by a number, the command will switch to the frame\nby its (zero-based) index into the <code ng-non-bindable>window.frames</code> collection.\n<p/>\nIf the frame is specified by a string, the command will select the frame by\nits name or ID. To select sub-frames, simply separate the frame names/IDs by\ndots. As an example, \"main.child\" will select the frame with the name \"main\"\nand then its child \"child\".\n<p/>\nIf the specified frame can not be found, the deferred result will errback\nwith a <code ng-non-bindable>bot.ErrorCode.NO_SUCH_FRAME</code> error.",
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
        "startingLine": 1526,
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
      "startingLine": 1527,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1513"
  },
  {
    "description": "Schedules a command to switch the focus of all future commands to another\nwindow. Windows may be specified by their <code ng-non-bindable>window.name</code> attribute or\nby its handle (as returned by <code ng-non-bindable>webdriver.WebDriver#getWindowHandles</code>).\n<p/>\nIf the specificed window can not be found, the deferred result will errback\nwith a <code ng-non-bindable>bot.ErrorCode.NO_SUCH_WINDOW</code> error.",
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
        "startingLine": 1545,
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
      "startingLine": 1547,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1539"
  },
  {
    "description": "Schedules a command to change focus to the active alert dialog. This command\nwill return a bot.ErrorCode.NO_SUCH_ALERT error if an alert dialog\nis not currently open.",
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
      "startingLine": 1562,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1559"
  },
  {
    "description": "Simulate pressing many keys at once in a \"chord\". Takes a sequence of\nwebdriver.Keys or strings, appends each of the values to a string,\nand adds the chord termination key (webdriver.Key.NULL) and returns\nthe resultant string.\n\nNote: when the low-level webdriver key handlers see Keys.NULL, active\nmodifier keys (CTRL/ALT/SHIFT/etc) release via a keyup event.",
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
        "startingLine": 1584,
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
      "startingLine": 1585,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1576"
  },
  {
    "description": "Represents a DOM element. WebElements can be found by searching from the\ndocument root using a <code ng-non-bindable>webdriver.WebDriver</code> instance, or by searching\nunder another <code ng-non-bindable>webdriver.WebElement</code>:\n<pre><code>\n  driver.get('http://www.google.com');\n  var searchForm = driver.findElement(By.tagName('form'));\n  var searchBox = searchForm.findElement(By.name('q'));\n  searchBox.sendKeys('webdriver');\n</code></pre>\n\nThe WebElement is implemented as a promise for compatibility with the promise\nAPI. It will always resolve itself when its internal state has been fully\nresolved and commands may be issued against the element. This can be used to\ncatch errors when an element cannot be located on the page:\n<pre><code>\n  driver.findElement(By.id('not-there')).then(function(element) {\n    alert('Found an element that was not expected to be there!');\n  }, function(error) {\n    alert('The element was not found, as expected');\n  });\n</code></pre>",
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
        "startingLine": 1630,
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
        "startingLine": 1632,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1608"
  },
  {
    "description": "Compares to WebElements for equality.",
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
        "startingLine": 1667,
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
        "startingLine": 1668,
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
      "startingLine": 1669,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1666"
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
      "startingLine": 1695,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1695"
  },
  {
    "description": "",
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
      "startingLine": 1703,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1703"
  },
  {
    "description": "Schedule a command to find a descendant of this element. If the element\ncannot be found, a <code ng-non-bindable>bot.ErrorCode.NO_SUCH_ELEMENT</code> result will\nbe returned by the driver. Unlike other commands, this error cannot be\nsuppressed. In other words, scheduling a command to find an element doubles\nas an assert that the element is present on the page. To test whether an\nelement is present on the page, use <code ng-non-bindable>#isElementPresent</code> instead.\n\n<p>The search criteria for an element may be defined using one of the\nfactories in the [webdriver.By](webdriver.By) namespace, or as a short-hand\nwebdriver.By.Hash object. For example, the following two statements\nare equivalent:\n<code><pre>\nvar e1 = element.findElement(By.id('foo'));\nvar e2 = element.findElement({id:'foo'});\n</pre></code>\n\n<p>You may also provide a custom locator function, which takes as input\nthis WebDriver instance and returns a [webdriver.WebElement](webdriver.WebElement), or a\npromise that will resolve to a WebElement. For example, to find the first\nvisible link on a page, you could write:\n<code><pre>\nvar link = element.findElement(firstVisibleLink);\n\nfunction firstVisibleLink(element) {\n  var links = element.findElements(By.tagName('a'));\n  return webdriver.promise.filter(links, function(link) {\n    return links.isDisplayed();\n  }).then(function(visibleLinks) {\n    return visibleLinks[0];\n  });\n}\n</pre></code>",
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
        "startingLine": 1765,
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
      "startingLine": 1767,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1732"
  },
  {
    "description": "Schedules a command to test if there is at least one descendant of this\nelement that matches the given search criteria.",
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
        "startingLine": 1791,
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
      "startingLine": 1793,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1788"
  },
  {
    "description": "Schedules a command to find all of the descendants of this element that\nmatch the given search criteria.",
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
        "startingLine": 1807,
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
      "startingLine": 1809,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1804"
  },
  {
    "description": "Schedules a command to click on this element.",
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
      "startingLine": 1828,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1827"
  },
  {
    "description": "Schedules a command to type a sequence on the DOM element represented by this\ninstance.\n<p/>\nModifier keys (SHIFT, CONTROL, ALT, META) are stateful; once a modifier is\nprocessed in the keysequence, that key state is toggled until one of the\nfollowing occurs:\n<ul>\n<li>The modifier key is encountered again in the sequence. At this point the\nstate of the key is toggled (along with the appropriate keyup/down events).\n</li>\n<li>The <code ng-non-bindable>webdriver.Key.NULL</code> key is encountered in the sequence. When\nthis key is encountered, all modifier keys current in the down state are\nreleased (with accompanying keyup events). The NULL key can be used to\nsimulate common keyboard shortcuts:\n<code><pre>\n    element.sendKeys(\"text was\",\n                     webdriver.Key.CONTROL, \"a\", webdriver.Key.NULL,\n                     \"now text is\");\n    // Alternatively:\n    element.sendKeys(\"text was\",\n                     webdriver.Key.chord(webdriver.Key.CONTROL, \"a\"),\n                     \"now text is\");\n</pre></code></li>\n<li>The end of the keysequence is encountered. When there are no more keys\nto type, all depressed modifier keys are released (with accompanying keyup\nevents).\n</li>\n</ul>\n<strong>Note:</strong> On browsers where native keyboard events are not yet\nsupported (e.g. Firefox on OS X), key events will be synthesized. Special\npunctionation keys will be synthesized according to a standard QWERTY en-us\nkeyboard layout.",
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
        "description": "The sequence of keys to type. All arguments will be joined into a single sequence (var_args is permitted for convenience).",
        "startingLine": 1872,
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
      "description": "A promise that will be resolved when all keys have been typed.",
      "startingLine": 1875,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1839"
  },
  {
    "description": "Schedules a command to query for the tag/node name of this element.",
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
      "startingLine": 1897,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1896"
  },
  {
    "description": "Schedules a command to query for the computed style of the element\nrepresented by this instance. If the element inherits the named style from\nits parent, the parent will be queried for its value.  Where possible, color\nvalues will be converted to their hex representation (e.g. #00ff00 instead of\nrgb(0, 255, 0)).\n<p/>\n<em>Warning:</em> the value returned will be as the browser interprets it, so\nit may be tricky to form a proper assertion.",
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
        "startingLine": 1917,
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
      "startingLine": 1919,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1908"
  },
  {
    "description": "Schedules a command to query for the value of the given attribute of the\nelement. Will return the current value, even if it has been modified after\nthe page has been loaded. More exactly, this method will return the value of\nthe given attribute, unless that attribute is not present, in which case the\nvalue of the property with the same name is returned. If neither value is\nset, null is returned (for example, the \"value\" property of a textarea\nelement). The \"style\" attribute is converted as best can be to a\ntext representation with a trailing semi-colon. The following are deemed to\nbe \"boolean\" attributes and will return either \"true\" or null:\n\n<p>async, autofocus, autoplay, checked, compact, complete, controls, declare,\ndefaultchecked, defaultselected, defer, disabled, draggable, ended,\nformnovalidate, hidden, indeterminate, iscontenteditable, ismap, itemscope,\nloop, multiple, muted, nohref, noresize, noshade, novalidate, nowrap, open,\npaused, pubdate, readonly, required, reversed, scoped, seamless, seeking,\nselected, spellcheck, truespeed, willvalidate\n\n<p>Finally, the following commonly mis-capitalized attribute/property names\nare evaluated as expected:\n<ul>\n  <li>\"class\"\n  <li>\"readonly\"\n</ul>",
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
        "startingLine": 1955,
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
      "startingLine": 1956,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1932"
  },
  {
    "description": "Get the visible (i.e. not hidden by CSS) innerText of this element, including\nsub-elements, without any leading or trailing whitespace.",
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
      "startingLine": 1971,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1969"
  },
  {
    "description": "Schedules a command to compute the size of this element's bounding box, in\npixels.",
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
      "startingLine": 1984,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1982"
  },
  {
    "description": "Schedules a command to compute the location of this element in page space.",
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
      "startingLine": 1997,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L1996"
  },
  {
    "description": "Schedules a command to query whether the DOM element represented by this\ninstance is enabled, as dicted by the <code ng-non-bindable>disabled</code> attribute.",
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
      "startingLine": 2011,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2009"
  },
  {
    "description": "Schedules a command to query whether this element is selected.",
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
      "startingLine": 2023,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2022"
  },
  {
    "description": "Schedules a command to submit the form containing this element (or this\nelement if it is a FORM element). This command is a no-op if the element is\nnot contained in a form.",
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
      "startingLine": 2037,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2034"
  },
  {
    "description": "Schedules a command to clear the <code ng-non-bindable>value</code> of this element. This command\nhas no effect if the underlying DOM element is neither a text INPUT element\nnor a TEXTAREA element.",
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
      "startingLine": 2051,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2048"
  },
  {
    "description": "Schedules a command to test whether this element is currently displayed.",
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
      "startingLine": 2063,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2062"
  },
  {
    "description": "Schedules a command to retrieve the outer HTML of this element.",
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
      "startingLine": 2075,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2074"
  },
  {
    "description": "Schedules a command to retrieve the inner HTML of this element.",
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
      "startingLine": 2094,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2093"
  },
  {
    "description": "WebElementPromise is a promise that will be fulfilled with a WebElement.\nThis serves as a forward proxy on WebElement, allowing calls to be\nscheduled without directly on this instance before the underlying\nWebElement has been fulfilled. In other words, the following two statements\nare equivalent:\n<pre><code>\n    driver.findElement({id: 'my-button'}).click();\n    driver.findElement({id: 'my-button'}).then(function(el) {\n      return el.click();\n    });\n</code></pre>",
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
        "startingLine": 2116,
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
        "startingLine": 2118,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2104"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "cancel",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2129"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "isPending",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2132"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "then",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2135"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "thenCatch",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2138"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "thenFinally",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2141"
  },
  {
    "description": "Defers returning the element ID until the wrapped WebElement has been\nresolved.",
    "fileName": "webdriver",
    "name": "getId",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2144"
  },
  {
    "description": "Represents a modal dialog such as <code ng-non-bindable>alert</code>, <code ng-non-bindable>confirm</code>, or\n<code ng-non-bindable>prompt</code>. Provides functions to retrieve the message displayed with\nthe alert, accept or dismiss the alert, and set the response text (in the\ncase of <code ng-non-bindable>prompt</code>).",
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
        "startingLine": 2162,
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
        "startingLine": 2164,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2158"
  },
  {
    "description": "Retrieves the message text displayed with this alert. For instance, if the\nalert were opened with alert(\"hello\"), then this would return \"hello\".",
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
      "startingLine": 2179,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2177"
  },
  {
    "description": "Accepts this alert.",
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
      "startingLine": 2189,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2188"
  },
  {
    "description": "Dismisses this alert.",
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
      "startingLine": 2201,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2200"
  },
  {
    "description": "Sets the response text on this alert. This command will return an error if\nthe underlying alert does not support response text (e.g. window.alert and\nwindow.confirm).",
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
        "startingLine": 2215,
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
      "startingLine": 2216,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2212"
  },
  {
    "description": "AlertPromise is a promise that will be fulfilled with an Alert. This promise\nserves as a forward proxy on an Alert, allowing calls to be scheduled\ndirectly on this instance before the underlying Alert has been fulfilled. In\nother words, the following two statements are equivalent:\n<pre><code>\n    driver.switchTo().alert().dismiss();\n    driver.switchTo().alert().then(function(alert) {\n      return alert.dismiss();\n    });\n</code></pre>",
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
        "startingLine": 2240,
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
        "startingLine": 2242,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2229"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "cancel",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2253"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "isPending",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2256"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "then",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2259"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "thenCatch",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2262"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "thenFinally",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2265"
  },
  {
    "description": "Defer returning text until the promised alert has been resolved.",
    "fileName": "webdriver",
    "name": "getText",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2268"
  },
  {
    "description": "Defers action until the alert has been located.",
    "fileName": "webdriver",
    "name": "accept",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2278"
  },
  {
    "description": "Defers action until the alert has been located.",
    "fileName": "webdriver",
    "name": "dismiss",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2288"
  },
  {
    "description": "Defers action until the alert has been located.",
    "fileName": "webdriver",
    "name": "sendKeys",
    "returnString": "",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2298"
  },
  {
    "description": "An error returned to indicate that there is an unhandled modal dialog on the\ncurrent page.",
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
        "startingLine": 2314,
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
        "startingLine": 2315,
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
        "startingLine": 2316,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2312"
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
      "startingLine": 2333,
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
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2333"
  },
  {
    "description": "",
    "fileName": "webdriver",
    "name": "webdriver.UnhandledAlertError.prototype.getAlert",
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
      "startingLine": 2341,
      "typeExpression": "!webdriver.Alert",
      "type": {
        "type": "NameExpression",
        "name": "webdriver.Alert",
        "nullable": false
      },
      "typeList": [
        "webdriver.Alert"
      ]
    },
    "returnString": "&#33;[webdriver.Alert](webdriver.Alert)",
    "sourceLink": "https://github.com/SeleniumHQ/selenium/blob/master/javascript/webdriver/webdriver.js#L2341"
  }
]
}