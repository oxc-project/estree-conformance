__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "classnames",
        "raw": "\"classnames\"",
        "start": 15,
        "end": 27
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 28
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 29
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 8,
    "end": 14
  },
  {
    "type": "String",
    "value": "\"classnames\"",
    "start": 15,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cx",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 55
          },
          "start": 48,
          "end": 55
        }
      ],
      "source": {
        "type": "Literal",
        "value": "classnames",
        "raw": "'classnames'",
        "start": 61,
        "end": 73
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 41,
      "end": 74
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 92
          },
          "start": 82,
          "end": 92
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 98,
        "end": 105
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 75,
      "end": 106
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "buttonProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 123
          },
          "init": null,
          "definite": false,
          "start": 112,
          "end": 123
        }
      ],
      "declare": false,
      "start": 108,
      "end": 124
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 130
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "button",
                "start": 134,
                "end": 140
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "buttonProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 145,
                    "end": 156
                  },
                  "start": 141,
                  "end": 157
                }
              ],
              "selfClosing": false,
              "start": 133,
              "end": 158
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n            ",
                "raw": "\n            ",
                "start": 158,
                "end": 171
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "span",
                    "start": 172,
                    "end": 176
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "className",
                        "start": 177,
                        "end": 186
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "cx",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 188,
                            "end": 190
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "class1",
                              "raw": "'class1'",
                              "start": 191,
                              "end": 199
                            },
                            {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "class2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 203,
                                    "end": 209
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": true,
                                    "raw": "true",
                                    "start": 211,
                                    "end": 215
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 203,
                                  "end": 215
                                }
                              ],
                              "start": 201,
                              "end": 217
                            }
                          ],
                          "optional": false,
                          "start": 188,
                          "end": 218
                        },
                        "start": 187,
                        "end": 219
                      },
                      "start": 177,
                      "end": 219
                    }
                  ],
                  "selfClosing": true,
                  "start": 171,
                  "end": 222
                },
                "children": [],
                "closingElement": null,
                "start": 171,
                "end": 222
              },
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 222,
                "end": 231
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "button",
                "start": 233,
                "end": 239
              },
              "start": 231,
              "end": 240
            },
            "start": 133,
            "end": 240
          },
          "definite": false,
          "start": 129,
          "end": 240
        }
      ],
      "declare": false,
      "start": 125,
      "end": 241
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 41,
  "end": 241
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 50,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "cx",
    "start": 53,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 56,
    "end": 60
  },
  {
    "type": "String",
    "value": "'classnames'",
    "start": 61,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 75,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 84,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 87,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 93,
    "end": 97
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 98,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 108,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "buttonProps",
    "start": 112,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 125,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 133,
    "end": 134
  },
  {
    "type": "JSXIdentifier",
    "value": "button",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 142,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "buttonProps",
    "start": 145,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 157,
    "end": 158
  },
  {
    "type": "JSXText",
    "value": "\n            ",
    "start": 158,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 171,
    "end": 172
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 172,
    "end": 176
  },
  {
    "type": "JSXIdentifier",
    "value": "className",
    "start": 177,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "cx",
    "start": 188,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 190,
    "end": 191
  },
  {
    "type": "String",
    "value": "'class1'",
    "start": 191,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "class2",
    "start": 203,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 209,
    "end": 210
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 211,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 221,
    "end": 222
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 222,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 232,
    "end": 233
  },
  {
    "type": "JSXIdentifier",
    "value": "button",
    "start": 233,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241
  }
]
```
