__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 46,
            "end": 49
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 45,
          "end": 50
        },
        "children": [
          {
            "type": "JSXText",
            "value": "1",
            "raw": "1",
            "start": 50,
            "end": 51
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 53,
            "end": 56
          },
          "start": 51,
          "end": 57
        },
        "start": 45,
        "end": 57
      },
      "directive": null,
      "start": 45,
      "end": 58
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 60,
            "end": 63
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "key",
                "start": 64,
                "end": 67
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "key-attr",
                  "raw": "\"key-attr\"",
                  "start": 69,
                  "end": 79
                },
                "start": 68,
                "end": 80
              },
              "start": 64,
              "end": 80
            }
          ],
          "selfClosing": false,
          "start": 59,
          "end": 81
        },
        "children": [
          {
            "type": "JSXText",
            "value": "2",
            "raw": "2",
            "start": 81,
            "end": 82
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 84,
            "end": 87
          },
          "start": 82,
          "end": 88
        },
        "start": 59,
        "end": 88
      },
      "directive": null,
      "start": 59,
      "end": 89
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 89
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "<",
    "start": 45,
    "end": 46
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 46,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 49,
    "end": 50
  },
  {
    "type": "JSXText",
    "value": "1",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 52,
    "end": 53
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 53,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 59,
    "end": 60
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 60,
    "end": 63
  },
  {
    "type": "JSXIdentifier",
    "value": "key",
    "start": 64,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "String",
    "value": "\"key-attr\"",
    "start": 69,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 80,
    "end": 81
  },
  {
    "type": "JSXText",
    "value": "2",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 83,
    "end": 84
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 84,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  }
]
```
