__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 108
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Props",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 114
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 123,
              "end": 125
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 109,
            "end": 125
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Events",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 133
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 142,
              "end": 144
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 127,
            "end": 144
          }
        ],
        "start": 108,
        "end": 145
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "render",
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
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 161,
                    "end": 166
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 168,
                        "end": 173
                      },
                      "typeArguments": null,
                      "start": 168,
                      "end": 173
                    },
                    "start": 166,
                    "end": 173
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 161,
                  "end": 174
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "events",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 175,
                    "end": 181
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Events",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 183,
                        "end": 189
                      },
                      "typeArguments": null,
                      "start": 183,
                      "end": 189
                    },
                    "start": 181,
                    "end": 189
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 175,
                  "end": 189
                }
              ],
              "start": 159,
              "end": 191
            },
            "start": 157,
            "end": 191
          },
          "start": 151,
          "end": 191
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 211
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Events",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 212,
                  "end": 218
                },
                "typeArguments": null,
                "start": 212,
                "end": 218
              }
            ],
            "start": 211,
            "end": 219
          },
          "start": 195,
          "end": 219
        },
        "start": 193,
        "end": 219
      },
      "body": null,
      "expression": false,
      "start": 76,
      "end": 220
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 236,
        "end": 245
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Events",
              "optional": false,
              "typeAnnotation": null,
              "start": 246,
              "end": 252
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 261,
              "end": 263
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 266,
                "end": 272
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 273,
                    "end": 279
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 281,
                    "end": 284
                  }
                ],
                "start": 272,
                "end": 285
              },
              "start": 266,
              "end": 285
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 246,
            "end": 285
          }
        ],
        "start": 245,
        "end": 286
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "$on",
              "optional": false,
              "typeAnnotation": null,
              "start": 293,
              "end": 296
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 297,
                      "end": 298
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Events",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 313,
                          "end": 319
                        },
                        "typeArguments": null,
                        "start": 313,
                        "end": 319
                      },
                      "start": 307,
                      "end": 319
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 297,
                    "end": 319
                  }
                ],
                "start": 296,
                "end": 320
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "event",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 328,
                        "end": 329
                      },
                      "typeArguments": null,
                      "start": 328,
                      "end": 329
                    },
                    "start": 326,
                    "end": 329
                  },
                  "start": 321,
                  "end": 329
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "handler",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSIndexedAccessType",
                              "objectType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Events",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 344,
                                  "end": 350
                                },
                                "typeArguments": null,
                                "start": 344,
                                "end": 350
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 351,
                                  "end": 352
                                },
                                "typeArguments": null,
                                "start": 351,
                                "end": 352
                              },
                              "start": 344,
                              "end": 353
                            },
                            "start": 342,
                            "end": 353
                          },
                          "start": 341,
                          "end": 353
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 358,
                          "end": 362
                        },
                        "start": 355,
                        "end": 362
                      },
                      "start": 340,
                      "end": 362
                    },
                    "start": 338,
                    "end": 362
                  },
                  "start": 331,
                  "end": 362
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 365,
                  "end": 369
                },
                "start": 363,
                "end": 369
              },
              "body": null,
              "expression": false,
              "start": 296,
              "end": 370
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 293,
            "end": 370
          }
        ],
        "start": 287,
        "end": 372
      },
      "abstract": false,
      "declare": true,
      "start": 222,
      "end": 372
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
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 380,
            "end": 381
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 384,
              "end": 399
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 406,
                      "end": 411
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 413,
                      "end": 415
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 406,
                    "end": 415
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "events",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 421,
                      "end": 427
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 431,
                            "end": 434
                          },
                          "value": {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 436,
                            "end": 438
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 431,
                          "end": 438
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 440,
                            "end": 444
                          },
                          "value": {
                            "type": "Literal",
                            "value": "2",
                            "raw": "\"2\"",
                            "start": 446,
                            "end": 449
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 440,
                          "end": 449
                        }
                      ],
                      "start": 429,
                      "end": 451
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 421,
                    "end": 451
                  }
                ],
                "start": 400,
                "end": 453
              }
            ],
            "optional": false,
            "start": 384,
            "end": 454
          },
          "definite": false,
          "start": 380,
          "end": 454
        }
      ],
      "declare": false,
      "start": 374,
      "end": 455
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 461,
              "end": 462
            },
            "typeArguments": null,
            "arguments": [],
            "start": 457,
            "end": 464
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "$on",
            "optional": false,
            "typeAnnotation": null,
            "start": 465,
            "end": 468
          },
          "optional": false,
          "computed": false,
          "start": 457,
          "end": 468
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 469,
            "end": 474
          },
          {
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
                "start": 476,
                "end": 477
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 481,
              "end": 483
            },
            "id": null,
            "generator": false,
            "start": 476,
            "end": 483
          }
        ],
        "optional": false,
        "start": 457,
        "end": 484
      },
      "directive": null,
      "start": 457,
      "end": 485
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 490,
              "end": 491
            },
            "typeArguments": null,
            "arguments": [],
            "start": 486,
            "end": 493
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "$on",
            "optional": false,
            "typeAnnotation": null,
            "start": 494,
            "end": 497
          },
          "optional": false,
          "computed": false,
          "start": 486,
          "end": 497
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo3",
            "raw": "\"foo3\"",
            "start": 498,
            "end": 504
          },
          {
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
                "start": 506,
                "end": 507
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 511,
              "end": 513
            },
            "id": null,
            "generator": false,
            "start": 506,
            "end": 513
          }
        ],
        "optional": false,
        "start": 486,
        "end": 514
      },
      "directive": null,
      "start": 486,
      "end": 515
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 523,
        "end": 524
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 533,
        "end": 534
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 535,
        "end": 537
      },
      "abstract": false,
      "declare": false,
      "start": 517,
      "end": 537
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 543,
              "end": 544
            },
            "typeArguments": null,
            "arguments": [],
            "start": 539,
            "end": 546
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "$on",
            "optional": false,
            "typeAnnotation": null,
            "start": 547,
            "end": 550
          },
          "optional": false,
          "computed": false,
          "start": 539,
          "end": 550
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 551,
            "end": 556
          },
          {
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
                "start": 558,
                "end": 559
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 563,
              "end": 565
            },
            "id": null,
            "generator": false,
            "start": 558,
            "end": 565
          }
        ],
        "optional": false,
        "start": 539,
        "end": 566
      },
      "directive": null,
      "start": 539,
      "end": 567
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 572,
              "end": 573
            },
            "typeArguments": null,
            "arguments": [],
            "start": 568,
            "end": 575
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "$on",
            "optional": false,
            "typeAnnotation": null,
            "start": 576,
            "end": 579
          },
          "optional": false,
          "computed": false,
          "start": 568,
          "end": 579
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo3",
            "raw": "\"foo3\"",
            "start": 580,
            "end": 586
          },
          {
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
                "start": 588,
                "end": 589
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 593,
              "end": 595
            },
            "id": null,
            "generator": false,
            "start": 588,
            "end": 595
          }
        ],
        "optional": false,
        "start": 568,
        "end": 596
      },
      "directive": null,
      "start": 568,
      "end": 597
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 76,
  "end": 597
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 76,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 84,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "createComponent",
    "start": 93,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 109,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 115,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "Events",
    "start": 127,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 134,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 151,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 161,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 168,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "events",
    "start": 175,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "Events",
    "start": 183,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 195,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 202,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "Events",
    "start": 212,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 222,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 230,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 236,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "Events",
    "start": 246,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 253,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 266,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 273,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 281,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "$on",
    "start": 293,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 297,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 299,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 307,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "Events",
    "start": 313,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "event",
    "start": 321,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "handler",
    "start": 331,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "Events",
    "start": 344,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 355,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 358,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 365,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 371,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 374,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 380,
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
    "value": "createComponent",
    "start": 384,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 406,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "events",
    "start": 421,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 431,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 436,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 440,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 444,
    "end": 445
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 446,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 457,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "$on",
    "start": 465,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 468,
    "end": 469
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 469,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 478,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 484,
    "end": 485
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 486,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "$on",
    "start": 494,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 497,
    "end": 498
  },
  {
    "type": "String",
    "value": "\"foo3\"",
    "start": 498,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 508,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 514,
    "end": 515
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 517,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 523,
    "end": 524
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 525,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 536,
    "end": 537
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 539,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "$on",
    "start": 547,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 550,
    "end": 551
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 551,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 560,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 566,
    "end": 567
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 568,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "$on",
    "start": 576,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 579,
    "end": 580
  },
  {
    "type": "String",
    "value": "\"foo3\"",
    "start": 580,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 590,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 596,
    "end": 597
  }
]
```
