__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 42
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 43,
              "end": 46
            },
            "declare": false,
            "start": 25,
            "end": 46
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 75
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 84,
                          "end": 90
                        },
                        "start": 82,
                        "end": 90
                      },
                      "start": 81,
                      "end": 90
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 93,
                      "end": 96
                    },
                    "start": 91,
                    "end": 96
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 80,
                  "end": 97
                }
              ],
              "start": 76,
              "end": 100
            },
            "declare": false,
            "start": 48,
            "end": 100
          }
        ],
        "start": 22,
        "end": 102
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 102
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 122,
                "end": 125
              },
              "start": 120,
              "end": 125
            },
            "start": 115,
            "end": 125
          },
          "init": null,
          "definite": false,
          "start": 115,
          "end": 125
        }
      ],
      "declare": true,
      "start": 103,
      "end": 126
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TodoProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 146
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 155
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 157,
                "end": 163
              },
              "start": 155,
              "end": 163
            },
            "accessibility": null,
            "static": false,
            "start": 153,
            "end": 164
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "todo",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 173
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 175,
                "end": 181
              },
              "start": 173,
              "end": 181
            },
            "accessibility": null,
            "static": false,
            "start": 169,
            "end": 182
          }
        ],
        "start": 147,
        "end": 184
      },
      "declare": false,
      "start": 128,
      "end": 184
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TodoListProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 195,
        "end": 208
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "todos",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 220
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TodoProp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 222,
                    "end": 230
                  },
                  "typeArguments": null,
                  "start": 222,
                  "end": 230
                },
                "start": 222,
                "end": 232
              },
              "start": 220,
              "end": 232
            },
            "accessibility": null,
            "static": false,
            "start": 215,
            "end": 233
          }
        ],
        "start": 209,
        "end": 235
      },
      "declare": false,
      "start": 185,
      "end": 235
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Todo",
        "optional": false,
        "typeAnnotation": null,
        "start": 245,
        "end": 249
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 258,
                    "end": 261
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 263,
                      "end": 269
                    },
                    "start": 261,
                    "end": 269
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 258,
                  "end": 270
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "todo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 271,
                    "end": 275
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 277,
                      "end": 283
                    },
                    "start": 275,
                    "end": 283
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 271,
                  "end": 283
                }
              ],
              "start": 256,
              "end": 285
            },
            "start": 254,
            "end": 285
          },
          "start": 250,
          "end": 285
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 301,
                  "end": 304
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 300,
                "end": 305
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 306,
                            "end": 310
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 311,
                            "end": 314
                          },
                          "optional": false,
                          "computed": false,
                          "start": 306,
                          "end": 314
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 315,
                          "end": 323
                        },
                        "optional": false,
                        "computed": false,
                        "start": 306,
                        "end": 323
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 306,
                      "end": 325
                    },
                    "operator": "+",
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 328,
                        "end": 332
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "todo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 333,
                        "end": 337
                      },
                      "optional": false,
                      "computed": false,
                      "start": 328,
                      "end": 337
                    },
                    "start": 306,
                    "end": 337
                  },
                  "start": 305,
                  "end": 338
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 340,
                  "end": 343
                },
                "start": 338,
                "end": 344
              },
              "start": 300,
              "end": 344
            },
            "start": 293,
            "end": 345
          }
        ],
        "start": 287,
        "end": 347
      },
      "expression": false,
      "start": 236,
      "end": 347
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TodoList",
        "optional": false,
        "typeAnnotation": null,
        "start": 357,
        "end": 365
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
                "name": "todos",
                "optional": false,
                "typeAnnotation": null,
                "start": 368,
                "end": 373
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "todos",
                "optional": false,
                "typeAnnotation": null,
                "start": 368,
                "end": 373
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 368,
              "end": 373
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
                "name": "TodoListProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 377,
                "end": 390
              },
              "typeArguments": null,
              "start": 377,
              "end": 390
            },
            "start": 375,
            "end": 390
          },
          "start": 366,
          "end": 390
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 406,
                  "end": 409
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 405,
                "end": 410
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "\n        ",
                  "raw": "\n        ",
                  "start": 410,
                  "end": 419
                },
                {
                  "type": "JSXSpreadChild",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "todos",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 423,
                        "end": 428
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "map",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 429,
                        "end": 432
                      },
                      "optional": false,
                      "computed": false,
                      "start": 423,
                      "end": 432
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
                            "name": "todo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 433,
                            "end": 437
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "JSXElement",
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "Todo",
                              "start": 442,
                              "end": 446
                            },
                            "typeArguments": null,
                            "attributes": [
                              {
                                "type": "JSXAttribute",
                                "name": {
                                  "type": "JSXIdentifier",
                                  "name": "key",
                                  "start": 447,
                                  "end": 450
                                },
                                "value": {
                                  "type": "JSXExpressionContainer",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "todo",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 452,
                                      "end": 456
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "id",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 457,
                                      "end": 459
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 452,
                                    "end": 459
                                  },
                                  "start": 451,
                                  "end": 460
                                },
                                "start": 447,
                                "end": 460
                              },
                              {
                                "type": "JSXAttribute",
                                "name": {
                                  "type": "JSXIdentifier",
                                  "name": "todo",
                                  "start": 461,
                                  "end": 465
                                },
                                "value": {
                                  "type": "JSXExpressionContainer",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "todo",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 467,
                                      "end": 471
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "todo",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 472,
                                      "end": 476
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 467,
                                    "end": 476
                                  },
                                  "start": 466,
                                  "end": 477
                                },
                                "start": 461,
                                "end": 477
                              }
                            ],
                            "selfClosing": true,
                            "start": 441,
                            "end": 479
                          },
                          "children": [],
                          "closingElement": null,
                          "start": 441,
                          "end": 479
                        },
                        "id": null,
                        "generator": false,
                        "start": 433,
                        "end": 479
                      }
                    ],
                    "optional": false,
                    "start": 423,
                    "end": 480
                  },
                  "start": 419,
                  "end": 481
                },
                {
                  "type": "JSXText",
                  "value": "\n    ",
                  "raw": "\n    ",
                  "start": 481,
                  "end": 486
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 488,
                  "end": 491
                },
                "start": 486,
                "end": 492
              },
              "start": 405,
              "end": 492
            },
            "start": 398,
            "end": 493
          }
        ],
        "start": 392,
        "end": 495
      },
      "expression": false,
      "start": 348,
      "end": 495
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TodoListProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 503,
                  "end": 516
                },
                "typeArguments": null,
                "start": 503,
                "end": 516
              },
              "start": 501,
              "end": 516
            },
            "start": 500,
            "end": 516
          },
          "init": null,
          "definite": false,
          "start": 500,
          "end": 516
        }
      ],
      "declare": false,
      "start": 496,
      "end": 517
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "TodoList",
            "start": 523,
            "end": 531
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 536,
                "end": 537
              },
              "start": 532,
              "end": 538
            }
          ],
          "selfClosing": true,
          "start": 522,
          "end": 540
        },
        "children": [],
        "closingElement": null,
        "start": 522,
        "end": 540
      },
      "directive": null,
      "start": 522,
      "end": 540
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 540
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
    "value": "namespace",
    "start": 8,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 18,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 25,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 35,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 48,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 58,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 84,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 93,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 103,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 111,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 115,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 122,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 128,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "TodoProp",
    "start": 138,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 153,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 157,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "todo",
    "start": 169,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 175,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 185,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "TodoListProps",
    "start": 195,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "todos",
    "start": 215,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "TodoProp",
    "start": 222,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 236,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "Todo",
    "start": 245,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 250,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 258,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 263,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "todo",
    "start": 271,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 277,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 293,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 300,
    "end": 301
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 301,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 305,
    "end": 306
  },
  {
    "type": "JSXIdentifier",
    "value": "prop",
    "start": 306,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 310,
    "end": 311
  },
  {
    "type": "JSXIdentifier",
    "value": "key",
    "start": 311,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 314,
    "end": 315
  },
  {
    "type": "JSXIdentifier",
    "value": "toString",
    "start": 315,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 326,
    "end": 327
  },
  {
    "type": "JSXIdentifier",
    "value": "prop",
    "start": 328,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 332,
    "end": 333
  },
  {
    "type": "JSXIdentifier",
    "value": "todo",
    "start": 333,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 339,
    "end": 340
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 340,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 346,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 348,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "TodoList",
    "start": 357,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "todos",
    "start": 368,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "TodoListProps",
    "start": 377,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 392,
    "end": 393
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 398,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 405,
    "end": 406
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 406,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 409,
    "end": 410
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 410,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 420,
    "end": 423
  },
  {
    "type": "JSXIdentifier",
    "value": "todos",
    "start": 423,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 428,
    "end": 429
  },
  {
    "type": "JSXIdentifier",
    "value": "map",
    "start": 429,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "todo",
    "start": 433,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 438,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 441,
    "end": 442
  },
  {
    "type": "JSXIdentifier",
    "value": "Todo",
    "start": 442,
    "end": 446
  },
  {
    "type": "JSXIdentifier",
    "value": "key",
    "start": 447,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 451,
    "end": 452
  },
  {
    "type": "JSXIdentifier",
    "value": "todo",
    "start": 452,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 456,
    "end": 457
  },
  {
    "type": "JSXIdentifier",
    "value": "id",
    "start": 457,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 459,
    "end": 460
  },
  {
    "type": "JSXIdentifier",
    "value": "todo",
    "start": 461,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 466,
    "end": 467
  },
  {
    "type": "JSXIdentifier",
    "value": "todo",
    "start": 467,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 471,
    "end": 472
  },
  {
    "type": "JSXIdentifier",
    "value": "todo",
    "start": 472,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 480,
    "end": 481
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 481,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 487,
    "end": 488
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 488,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 496,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "TodoListProps",
    "start": 503,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 522,
    "end": 523
  },
  {
    "type": "JSXIdentifier",
    "value": "TodoList",
    "start": 523,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 533,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 539,
    "end": 540
  }
]
```
