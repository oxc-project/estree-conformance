__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 57
          },
          "start": 52,
          "end": 57
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 63,
        "end": 70
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 71
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentPropsWithRef",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 102
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentPropsWithRef",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 102
          },
          "importKind": "value",
          "start": 81,
          "end": 102
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ElementType",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 115
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ElementType",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 115
          },
          "importKind": "value",
          "start": 104,
          "end": 115
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 123,
        "end": 130
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 72,
      "end": 131
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnwrappedLink",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 155
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 157
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementType",
                "optional": false,
                "typeAnnotation": null,
                "start": 166,
                "end": 177
              },
              "typeArguments": null,
              "start": 166,
              "end": 177
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementType",
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 191
              },
              "typeArguments": null,
              "start": 180,
              "end": 191
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 156,
            "end": 191
          }
        ],
        "start": 155,
        "end": 192
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Omit",
                "optional": false,
                "typeAnnotation": null,
                "start": 203,
                "end": 207
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ComponentPropsWithRef",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 208,
                      "end": 229
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSConditionalType",
                          "checkType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ElementType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 230,
                              "end": 241
                            },
                            "typeArguments": null,
                            "start": 230,
                            "end": 241
                          },
                          "extendsType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 250,
                              "end": 251
                            },
                            "typeArguments": null,
                            "start": 250,
                            "end": 251
                          },
                          "trueType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "\"a\"",
                              "start": 254,
                              "end": 257
                            },
                            "start": 254,
                            "end": 257
                          },
                          "falseType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 260,
                              "end": 261
                            },
                            "typeArguments": null,
                            "start": 260,
                            "end": 261
                          },
                          "start": 230,
                          "end": 261
                        }
                      ],
                      "start": 229,
                      "end": 262
                    },
                    "start": 208,
                    "end": 262
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "as",
                      "raw": "\"as\"",
                      "start": 264,
                      "end": 268
                    },
                    "start": 264,
                    "end": 268
                  }
                ],
                "start": 207,
                "end": 269
              },
              "start": 203,
              "end": 269
            },
            "start": 201,
            "end": 269
          },
          "start": 196,
          "end": 269
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
                  "name": "a",
                  "start": 285,
                  "end": 286
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 284,
                "end": 287
              },
              "children": [],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "start": 289,
                  "end": 290
                },
                "start": 287,
                "end": 291
              },
              "start": 284,
              "end": 291
            },
            "start": 277,
            "end": 292
          }
        ],
        "start": 273,
        "end": 294
      },
      "expression": false,
      "start": 133,
      "end": 294
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "UnwrappedLink",
            "start": 297,
            "end": 310
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "onClick",
                "start": 311,
                "end": 318
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 321,
                      "end": 322
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 327,
                    "end": 329
                  },
                  "id": null,
                  "generator": false,
                  "start": 320,
                  "end": 329
                },
                "start": 319,
                "end": 330
              },
              "start": 311,
              "end": 330
            }
          ],
          "selfClosing": true,
          "start": 296,
          "end": 333
        },
        "children": [],
        "closingElement": null,
        "start": 296,
        "end": 333
      },
      "directive": null,
      "start": 296,
      "end": 334
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnwrappedLink2",
        "optional": false,
        "typeAnnotation": null,
        "start": 345,
        "end": 359
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 360,
              "end": 361
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementType",
                "optional": false,
                "typeAnnotation": null,
                "start": 370,
                "end": 381
              },
              "typeArguments": null,
              "start": 370,
              "end": 381
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementType",
                "optional": false,
                "typeAnnotation": null,
                "start": 384,
                "end": 395
              },
              "typeArguments": null,
              "start": 384,
              "end": 395
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 360,
            "end": 395
          }
        ],
        "start": 359,
        "end": 396
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Omit",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 407,
                    "end": 411
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ComponentPropsWithRef",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 412,
                          "end": 433
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSConditionalType",
                              "checkType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ElementType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 434,
                                  "end": 445
                                },
                                "typeArguments": null,
                                "start": 434,
                                "end": 445
                              },
                              "extendsType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 454,
                                  "end": 455
                                },
                                "typeArguments": null,
                                "start": 454,
                                "end": 455
                              },
                              "trueType": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "a",
                                  "raw": "\"a\"",
                                  "start": 458,
                                  "end": 461
                                },
                                "start": 458,
                                "end": 461
                              },
                              "falseType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 464,
                                  "end": 465
                                },
                                "typeArguments": null,
                                "start": 464,
                                "end": 465
                              },
                              "start": 434,
                              "end": 465
                            }
                          ],
                          "start": 433,
                          "end": 466
                        },
                        "start": 412,
                        "end": 466
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "as",
                          "raw": "\"as\"",
                          "start": 468,
                          "end": 472
                        },
                        "start": 468,
                        "end": 472
                      }
                    ],
                    "start": 411,
                    "end": 473
                  },
                  "start": 407,
                  "end": 473
                },
                {
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
                        "name": "as",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 482,
                        "end": 484
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 487,
                            "end": 488
                          },
                          "typeArguments": null,
                          "start": 487,
                          "end": 488
                        },
                        "start": 485,
                        "end": 488
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 482,
                      "end": 489
                    }
                  ],
                  "start": 476,
                  "end": 493
                }
              ],
              "start": 407,
              "end": 493
            },
            "start": 405,
            "end": 493
          },
          "start": 400,
          "end": 493
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
                  "name": "a",
                  "start": 509,
                  "end": 510
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 508,
                "end": 511
              },
              "children": [],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "start": 513,
                  "end": 514
                },
                "start": 511,
                "end": 515
              },
              "start": 508,
              "end": 515
            },
            "start": 501,
            "end": 516
          }
        ],
        "start": 497,
        "end": 518
      },
      "expression": false,
      "start": 336,
      "end": 518
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "UnwrappedLink2",
            "start": 521,
            "end": 535
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "onClick",
                "start": 536,
                "end": 543
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 546,
                      "end": 547
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 552,
                    "end": 554
                  },
                  "id": null,
                  "generator": false,
                  "start": 545,
                  "end": 554
                },
                "start": 544,
                "end": 555
              },
              "start": 536,
              "end": 555
            }
          ],
          "selfClosing": true,
          "start": 520,
          "end": 558
        },
        "children": [],
        "closingElement": null,
        "start": 520,
        "end": 558
      },
      "directive": null,
      "start": 520,
      "end": 559
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "UnwrappedLink2",
            "start": 561,
            "end": 575
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "as",
                "start": 576,
                "end": 578
              },
              "value": {
                "type": "Literal",
                "value": "button",
                "raw": "\"button\"",
                "start": 579,
                "end": 587
              },
              "start": 576,
              "end": 587
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "onClick",
                "start": 588,
                "end": 595
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 598,
                      "end": 599
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 604,
                    "end": 606
                  },
                  "id": null,
                  "generator": false,
                  "start": 597,
                  "end": 606
                },
                "start": 596,
                "end": 607
              },
              "start": 588,
              "end": 607
            }
          ],
          "selfClosing": true,
          "start": 560,
          "end": 610
        },
        "children": [],
        "closingElement": null,
        "start": 560,
        "end": 610
      },
      "directive": null,
      "start": 560,
      "end": 611
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 611
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 45,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 52,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 58,
    "end": 62
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 63,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 72,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "ComponentPropsWithRef",
    "start": 81,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "ElementType",
    "start": 104,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 118,
    "end": 122
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 123,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 133,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "UnwrappedLink",
    "start": 142,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 158,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "ElementType",
    "start": 166,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "ElementType",
    "start": 180,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 196,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 203,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "ComponentPropsWithRef",
    "start": 208,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "ElementType",
    "start": 230,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 242,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 252,
    "end": 253
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 254,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 262,
    "end": 263
  },
  {
    "type": "String",
    "value": "\"as\"",
    "start": 264,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 277,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 284,
    "end": 285
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 288,
    "end": 289
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 296,
    "end": 297
  },
  {
    "type": "JSXIdentifier",
    "value": "UnwrappedLink",
    "start": 297,
    "end": 310
  },
  {
    "type": "JSXIdentifier",
    "value": "onClick",
    "start": 311,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "e",
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
    "value": "=>",
    "start": 324,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 333,
    "end": 334
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 336,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "UnwrappedLink2",
    "start": 345,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 360,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 362,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "ElementType",
    "start": 370,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "ElementType",
    "start": 384,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 400,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 407,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "ComponentPropsWithRef",
    "start": 412,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "ElementType",
    "start": 434,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 446,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 456,
    "end": 457
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 458,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 466,
    "end": 467
  },
  {
    "type": "String",
    "value": "\"as\"",
    "start": 468,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 482,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 497,
    "end": 498
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 501,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 508,
    "end": 509
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 512,
    "end": 513
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 520,
    "end": 521
  },
  {
    "type": "JSXIdentifier",
    "value": "UnwrappedLink2",
    "start": 521,
    "end": 535
  },
  {
    "type": "JSXIdentifier",
    "value": "onClick",
    "start": 536,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 549,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 560,
    "end": 561
  },
  {
    "type": "JSXIdentifier",
    "value": "UnwrappedLink2",
    "start": 561,
    "end": 575
  },
  {
    "type": "JSXIdentifier",
    "value": "as",
    "start": 576,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 578,
    "end": 579
  },
  {
    "type": "JSXText",
    "value": "\"button\"",
    "start": 579,
    "end": 587
  },
  {
    "type": "JSXIdentifier",
    "value": "onClick",
    "start": 588,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 601,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611
  }
]
```
