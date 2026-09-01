__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 61
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 61
          },
          "importKind": "value",
          "start": 53,
          "end": 61
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "createElement",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 76
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "createElement",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 76
          },
          "importKind": "value",
          "start": 63,
          "end": 76
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 84,
        "end": 91
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 44,
      "end": 91
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CounterProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 110
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "count",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 124
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 127,
                "end": 133
              },
              "start": 125,
              "end": 133
            },
            "accessibility": null,
            "static": false,
            "start": 119,
            "end": 133
          }
        ],
        "start": 113,
        "end": 135
      },
      "declare": false,
      "start": 93,
      "end": 135
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Counter",
          "optional": false,
          "typeAnnotation": null,
          "start": 153,
          "end": 160
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "count",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 163,
                  "end": 168
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 163,
                    "end": 168
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 171,
                    "end": 172
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 163,
                  "end": 172
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 163,
                "end": 172
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CounterProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 176,
                  "end": 188
                },
                "typeArguments": null,
                "start": 176,
                "end": 188
              },
              "start": 174,
              "end": 188
            },
            "start": 161,
            "end": 188
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnt",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 203,
                        "end": 206
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "setCnt",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 208,
                        "end": 214
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 202,
                    "end": 215
                  },
                  "init": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 218,
                      "end": 222
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 226,
                      "end": 229
                    },
                    "start": 218,
                    "end": 229
                  },
                  "definite": false,
                  "start": 202,
                  "end": 229
                }
              ],
              "declare": false,
              "start": 196,
              "end": 230
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "JSXFragment",
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 242,
                  "end": 244
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": "\n        ",
                    "raw": "\n        ",
                    "start": 244,
                    "end": 253
                  },
                  {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "p",
                        "start": 254,
                        "end": 255
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": false,
                      "start": 253,
                      "end": 256
                    },
                    "children": [
                      {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cnt",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 257,
                          "end": 260
                        },
                        "start": 256,
                        "end": 261
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "p",
                        "start": 263,
                        "end": 264
                      },
                      "start": 261,
                      "end": 265
                    },
                    "start": 253,
                    "end": 265
                  },
                  {
                    "type": "JSXText",
                    "value": "\n        ",
                    "raw": "\n        ",
                    "start": 265,
                    "end": 274
                  },
                  {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "button",
                        "start": 275,
                        "end": 281
                      },
                      "typeArguments": null,
                      "attributes": [
                        {
                          "type": "JSXAttribute",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "onClick",
                            "start": 282,
                            "end": 289
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "expression": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "setCnt",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 297,
                                  "end": 303
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ArrowFunctionExpression",
                                    "expression": true,
                                    "async": false,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "prev",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 305,
                                        "end": 309
                                      }
                                    ],
                                    "returnType": null,
                                    "body": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "prev",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 314,
                                        "end": 318
                                      },
                                      "operator": "+",
                                      "right": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1",
                                        "start": 321,
                                        "end": 322
                                      },
                                      "start": 314,
                                      "end": 322
                                    },
                                    "id": null,
                                    "generator": false,
                                    "start": 304,
                                    "end": 322
                                  }
                                ],
                                "optional": false,
                                "start": 297,
                                "end": 323
                              },
                              "id": null,
                              "generator": false,
                              "start": 291,
                              "end": 323
                            },
                            "start": 290,
                            "end": 324
                          },
                          "start": 282,
                          "end": 324
                        },
                        {
                          "type": "JSXAttribute",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "type",
                            "start": 325,
                            "end": 329
                          },
                          "value": {
                            "type": "Literal",
                            "value": "button",
                            "raw": "\"button\"",
                            "start": 330,
                            "end": 338
                          },
                          "start": 325,
                          "end": 338
                        }
                      ],
                      "selfClosing": false,
                      "start": 274,
                      "end": 339
                    },
                    "children": [
                      {
                        "type": "JSXText",
                        "value": "Update",
                        "raw": "Update",
                        "start": 339,
                        "end": 345
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "button",
                        "start": 347,
                        "end": 353
                      },
                      "start": 345,
                      "end": 354
                    },
                    "start": 274,
                    "end": 354
                  },
                  {
                    "type": "JSXText",
                    "value": "\n    ",
                    "raw": "\n    ",
                    "start": 354,
                    "end": 359
                  }
                ],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 359,
                  "end": 362
                },
                "start": 242,
                "end": 362
              },
              "start": 235,
              "end": 362
            }
          ],
          "start": 190,
          "end": 364
        },
        "expression": false,
        "start": 144,
        "end": 364
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 137,
      "end": 364
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 364
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 44,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "Fragment",
    "start": 53,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "createElement",
    "start": 63,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 79,
    "end": 83
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 84,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 93,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "CounterProps",
    "start": 98,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 119,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 127,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 137,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 144,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "Counter",
    "start": 153,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 163,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 169,
    "end": 170
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "CounterProps",
    "start": 176,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 196,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "cnt",
    "start": 203,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "setCnt",
    "start": 208,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 216,
    "end": 217
  },
  {
    "type": "Null",
    "value": "null",
    "start": 218,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 223,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 226,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 235,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 243,
    "end": 244
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 244,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 253,
    "end": 254
  },
  {
    "type": "JSXIdentifier",
    "value": "p",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "cnt",
    "start": 257,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 262,
    "end": 263
  },
  {
    "type": "JSXIdentifier",
    "value": "p",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 264,
    "end": 265
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 265,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 274,
    "end": 275
  },
  {
    "type": "JSXIdentifier",
    "value": "button",
    "start": 275,
    "end": 281
  },
  {
    "type": "JSXIdentifier",
    "value": "onClick",
    "start": 282,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 294,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "setCnt",
    "start": 297,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 305,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 311,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 314,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 319,
    "end": 320
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 323,
    "end": 324
  },
  {
    "type": "JSXIdentifier",
    "value": "type",
    "start": 325,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 329,
    "end": 330
  },
  {
    "type": "JSXText",
    "value": "\"button\"",
    "start": 330,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 338,
    "end": 339
  },
  {
    "type": "JSXText",
    "value": "Update",
    "start": 339,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 346,
    "end": 347
  },
  {
    "type": "JSXIdentifier",
    "value": "button",
    "start": 347,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 353,
    "end": 354
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 354,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 363,
    "end": 364
  }
]
```
