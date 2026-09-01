__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 55
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 66,
          "end": 73
        },
        "start": 58,
        "end": 74
      },
      "importKind": "value",
      "start": 43,
      "end": 75
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
            "start": 78,
            "end": 81
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 77,
          "end": 82
        },
        "children": [
          {
            "type": "JSXText",
            "value": "\n    // Not Comment\n",
            "raw": "\n    // Not Comment\n",
            "start": 82,
            "end": 102
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 104,
            "end": 107
          },
          "start": 102,
          "end": 108
        },
        "start": 77,
        "end": 108
      },
      "directive": null,
      "start": 77,
      "end": 109
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
            "value": "\n    // Not Comment\n    ",
            "raw": "\n    // Not Comment\n    ",
            "start": 116,
            "end": 140
          },
          {
            "type": "JSXExpressionContainer",
            "expression": {
              "type": "JSXEmptyExpression",
              "start": 141,
              "end": 174
            },
            "start": 140,
            "end": 175
          },
          {
            "type": "JSXText",
            "value": "\n    // Another not Comment\n",
            "raw": "\n    // Another not Comment\n",
            "start": 175,
            "end": 203
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 205,
            "end": 208
          },
          "start": 203,
          "end": 209
        },
        "start": 111,
        "end": 209
      },
      "directive": null,
      "start": 111,
      "end": 210
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
            "start": 213,
            "end": 216
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 212,
          "end": 217
        },
        "children": [
          {
            "type": "JSXText",
            "value": "\n    // Not Comment\n    ",
            "raw": "\n    // Not Comment\n    ",
            "start": 217,
            "end": 241
          },
          {
            "type": "JSXExpressionContainer",
            "expression": {
              "type": "Literal",
              "value": "Hi",
              "raw": "\"Hi\"",
              "start": 279,
              "end": 283
            },
            "start": 241,
            "end": 289
          },
          {
            "type": "JSXText",
            "value": "\n    // Another not Comment\n",
            "raw": "\n    // Another not Comment\n",
            "start": 289,
            "end": 317
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 319,
            "end": 322
          },
          "start": 317,
          "end": 323
        },
        "start": 212,
        "end": 323
      },
      "directive": null,
      "start": 212,
      "end": 324
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
            "start": 327,
            "end": 330
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 326,
          "end": 331
        },
        "children": [
          {
            "type": "JSXText",
            "value": "\n    /* Not Comment */\n    ",
            "raw": "\n    /* Not Comment */\n    ",
            "start": 331,
            "end": 358
          },
          {
            "type": "JSXExpressionContainer",
            "expression": {
              "type": "Literal",
              "value": "Hi",
              "raw": "\"Hi\"",
              "start": 396,
              "end": 400
            },
            "start": 358,
            "end": 406
          },
          {
            "type": "JSXText",
            "value": "\n",
            "raw": "\n",
            "start": 406,
            "end": 407
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 409,
            "end": 412
          },
          "start": 407,
          "end": 413
        },
        "start": 326,
        "end": 413
      },
      "directive": null,
      "start": 326,
      "end": 414
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 414
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 43,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 66,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 77,
    "end": 78
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 78,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 81,
    "end": 82
  },
  {
    "type": "JSXText",
    "value": "\n    // Not Comment\n",
    "start": 82,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 103,
    "end": 104
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 104,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
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
    "value": "\n    // Not Comment\n    ",
    "start": 116,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175
  },
  {
    "type": "JSXText",
    "value": "\n    // Another not Comment\n",
    "start": 175,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 204,
    "end": 205
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 205,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 212,
    "end": 213
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 213,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 216,
    "end": 217
  },
  {
    "type": "JSXText",
    "value": "\n    // Not Comment\n    ",
    "start": 217,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 241,
    "end": 242
  },
  {
    "type": "String",
    "value": "\"Hi\"",
    "start": 279,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 288,
    "end": 289
  },
  {
    "type": "JSXText",
    "value": "\n    // Another not Comment\n",
    "start": 289,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 318,
    "end": 319
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 319,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 326,
    "end": 327
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 327,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 330,
    "end": 331
  },
  {
    "type": "JSXText",
    "value": "\n    /* Not Comment */\n    ",
    "start": 331,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 358,
    "end": 359
  },
  {
    "type": "String",
    "value": "\"Hi\"",
    "start": 396,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 405,
    "end": 406
  },
  {
    "type": "JSXText",
    "value": "\n",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 408,
    "end": 409
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 409,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 413,
    "end": 414
  }
]
```
