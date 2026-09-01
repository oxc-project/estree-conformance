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
            "name": "emptyMessage",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 18
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 21,
              "end": 25
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 29,
              "end": 32
            },
            "start": 21,
            "end": 32
          },
          "definite": false,
          "start": 6,
          "end": 32
        }
      ],
      "declare": false,
      "start": 0,
      "end": 33
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 51,
                "end": 54
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 50,
              "end": 55
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n      ",
                "raw": "\n      ",
                "start": 55,
                "end": 62
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 63,
                    "end": 64
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "emptyMessage",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 77,
                    "end": 89
                  },
                  "alternate": {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "span",
                        "start": 184,
                        "end": 188
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": false,
                      "start": 183,
                      "end": 189
                    },
                    "children": [
                      {
                        "type": "JSXText",
                        "value": "\n          ",
                        "raw": "\n          ",
                        "start": 189,
                        "end": 200
                      },
                      {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 201,
                          "end": 202
                        },
                        "start": 200,
                        "end": 203
                      },
                      {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 204,
                          "end": 205
                        },
                        "start": 203,
                        "end": 206
                      },
                      {
                        "type": "JSXText",
                        "value": "\n        ",
                        "raw": "\n        ",
                        "start": 206,
                        "end": 215
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "span",
                        "start": 217,
                        "end": 221
                      },
                      "start": 215,
                      "end": 222
                    },
                    "start": 183,
                    "end": 222
                  },
                  "start": 63,
                  "end": 230
                },
                "start": 62,
                "end": 231
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 231,
                "end": 236
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 238,
                "end": 241
              },
              "start": 236,
              "end": 242
            },
            "start": 50,
            "end": 242
          },
          "definite": false,
          "start": 40,
          "end": 244
        }
      ],
      "declare": false,
      "start": 34,
      "end": 245
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 245
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
    "value": "emptyMessage",
    "start": 6,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 19,
    "end": 20
  },
  {
    "type": "Null",
    "value": "null",
    "start": 21,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 26,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 29,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 34,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 50,
    "end": 51
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 51,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 54,
    "end": 55
  },
  {
    "type": "JSXText",
    "value": "\n      ",
    "start": 55,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "emptyMessage",
    "start": 77,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 183,
    "end": 184
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 184,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 188,
    "end": 189
  },
  {
    "type": "JSXText",
    "value": "\n          ",
    "start": 189,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 200,
    "end": 201
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 203,
    "end": 204
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 206,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 216,
    "end": 217
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 217,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 230,
    "end": 231
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 231,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 237,
    "end": 238
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 238,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  }
]
```
