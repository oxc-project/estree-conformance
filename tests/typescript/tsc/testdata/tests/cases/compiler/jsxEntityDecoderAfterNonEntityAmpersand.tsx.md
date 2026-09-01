__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 11,
                "end": 14
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 10,
              "end": 15
            },
            "children": [
              {
                "type": "JSXText",
                "value": "&&",
                "raw": "&&amp;",
                "start": 15,
                "end": 21
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 23,
                "end": 26
              },
              "start": 21,
              "end": 27
            },
            "start": 10,
            "end": 27
          },
          "definite": false,
          "start": 6,
          "end": 27
        }
      ],
      "declare": false,
      "start": 0,
      "end": 28
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 36
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 40,
                "end": 43
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 39,
              "end": 44
            },
            "children": [
              {
                "type": "JSXText",
                "value": "a&b&c&d<e",
                "raw": "a&b&amp;c&d&lt;e",
                "start": 44,
                "end": 60
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 62,
                "end": 65
              },
              "start": 60,
              "end": 66
            },
            "start": 39,
            "end": 66
          },
          "definite": false,
          "start": 35,
          "end": 66
        }
      ],
      "declare": false,
      "start": 29,
      "end": 67
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 75
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 79,
                "end": 82
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 78,
              "end": 83
            },
            "children": [
              {
                "type": "JSXText",
                "value": "&&",
                "raw": "&amp;&amp;",
                "start": 83,
                "end": 93
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 95,
                "end": 98
              },
              "start": 93,
              "end": 99
            },
            "start": 78,
            "end": 99
          },
          "definite": false,
          "start": 74,
          "end": 99
        }
      ],
      "declare": false,
      "start": 68,
      "end": 100
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 108
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 112,
                "end": 115
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 111,
              "end": 116
            },
            "children": [
              {
                "type": "JSXText",
                "value": "&&&",
                "raw": "&amp;&&amp;",
                "start": 116,
                "end": 127
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 129,
                "end": 132
              },
              "start": 127,
              "end": 133
            },
            "start": 111,
            "end": 133
          },
          "definite": false,
          "start": 107,
          "end": 133
        }
      ],
      "declare": false,
      "start": 101,
      "end": 134
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 141,
            "end": 142
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 146,
                "end": 149
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 145,
              "end": 150
            },
            "children": [
              {
                "type": "JSXText",
                "value": "a&b&c&",
                "raw": "a&b&c&amp;",
                "start": 150,
                "end": 160
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 162,
                "end": 165
              },
              "start": 160,
              "end": 166
            },
            "start": 145,
            "end": 166
          },
          "definite": false,
          "start": 141,
          "end": 166
        }
      ],
      "declare": false,
      "start": 135,
      "end": 167
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 167
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10,
    "end": 11
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 11,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 14,
    "end": 15
  },
  {
    "type": "JSXText",
    "value": "&&amp;",
    "start": 15,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 22,
    "end": 23
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 23,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 29,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 39,
    "end": 40
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 40,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 43,
    "end": 44
  },
  {
    "type": "JSXText",
    "value": "a&b&amp;c&d&lt;e",
    "start": 44,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 61,
    "end": 62
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 62,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 68,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 78,
    "end": 79
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 79,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 82,
    "end": 83
  },
  {
    "type": "JSXText",
    "value": "&amp;&amp;",
    "start": 83,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 94,
    "end": 95
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 95,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 101,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 111,
    "end": 112
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 112,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 115,
    "end": 116
  },
  {
    "type": "JSXText",
    "value": "&amp;&&amp;",
    "start": 116,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 128,
    "end": 129
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 129,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 135,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 145,
    "end": 146
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 146,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 149,
    "end": 150
  },
  {
    "type": "JSXText",
    "value": "a&b&c&amp;",
    "start": 150,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 161,
    "end": 162
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 162,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  }
]
```
