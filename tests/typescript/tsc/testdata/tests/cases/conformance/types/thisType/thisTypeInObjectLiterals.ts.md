__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 14,
                  "end": 15
                },
                "value": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "\"bar\"",
                  "start": 17,
                  "end": 22
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 14,
                "end": 22
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 28,
                  "end": 29
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 49,
                              "end": 53
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 54,
                              "end": 55
                            },
                            "optional": false,
                            "computed": false,
                            "start": 49,
                            "end": 55
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 56,
                            "end": 62
                          },
                          "optional": false,
                          "computed": false,
                          "start": 49,
                          "end": 62
                        },
                        "start": 42,
                        "end": 63
                      }
                    ],
                    "start": 32,
                    "end": 69
                  },
                  "expression": false,
                  "start": 29,
                  "end": 69
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 28,
                "end": 69
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 75,
                  "end": 76
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 106,
                              "end": 110
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 111,
                              "end": 112
                            },
                            "optional": false,
                            "computed": false,
                            "start": 106,
                            "end": 112
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 113,
                            "end": 119
                          },
                          "optional": false,
                          "computed": false,
                          "start": 106,
                          "end": 119
                        },
                        "start": 99,
                        "end": 120
                      }
                    ],
                    "start": 89,
                    "end": 126
                  },
                  "expression": false,
                  "start": 78,
                  "end": 126
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 75,
                "end": 126
              }
            ],
            "start": 8,
            "end": 128
          },
          "definite": false,
          "start": 4,
          "end": 128
        }
      ],
      "declare": false,
      "start": 0,
      "end": 128
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
            "name": "mutuallyRecursive",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 151
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 160,
                  "end": 161
                },
                "value": {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 163,
                  "end": 166
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 160,
                "end": 166
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "start",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 172,
                  "end": 177
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 197,
                              "end": 201
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "passthrough",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 202,
                              "end": 213
                            },
                            "optional": false,
                            "computed": false,
                            "start": 197,
                            "end": 213
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 214,
                                "end": 218
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 219,
                                "end": 220
                              },
                              "optional": false,
                              "computed": false,
                              "start": 214,
                              "end": 220
                            }
                          ],
                          "optional": false,
                          "start": 197,
                          "end": 221
                        },
                        "start": 190,
                        "end": 222
                      }
                    ],
                    "start": 180,
                    "end": 228
                  },
                  "expression": false,
                  "start": 177,
                  "end": 228
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 172,
                "end": 228
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "passthrough",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 234,
                  "end": 245
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 249,
                          "end": 255
                        },
                        "start": 247,
                        "end": 255
                      },
                      "start": 246,
                      "end": 255
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 274,
                              "end": 278
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "sub1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 279,
                              "end": 283
                            },
                            "optional": false,
                            "computed": false,
                            "start": 274,
                            "end": 283
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 284,
                              "end": 285
                            }
                          ],
                          "optional": false,
                          "start": 274,
                          "end": 286
                        },
                        "start": 267,
                        "end": 287
                      }
                    ],
                    "start": 257,
                    "end": 293
                  },
                  "expression": false,
                  "start": 245,
                  "end": 293
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 234,
                "end": 293
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sub1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 299,
                  "end": 303
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 307,
                          "end": 313
                        },
                        "start": 305,
                        "end": 313
                      },
                      "start": 304,
                      "end": 313
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 316,
                      "end": 322
                    },
                    "start": 314,
                    "end": 322
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 337,
                            "end": 338
                          },
                          "operator": ">",
                          "right": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 341,
                            "end": 342
                          },
                          "start": 337,
                          "end": 342
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 365,
                                    "end": 369
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "passthrough",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 370,
                                    "end": 381
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 365,
                                  "end": 381
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "n",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 382,
                                      "end": 383
                                    },
                                    "operator": "-",
                                    "right": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1",
                                      "start": 386,
                                      "end": 387
                                    },
                                    "start": 382,
                                    "end": 387
                                  }
                                ],
                                "optional": false,
                                "start": 365,
                                "end": 388
                              },
                              "start": 358,
                              "end": 389
                            }
                          ],
                          "start": 344,
                          "end": 399
                        },
                        "alternate": null,
                        "start": 333,
                        "end": 399
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 415,
                          "end": 416
                        },
                        "start": 408,
                        "end": 417
                      }
                    ],
                    "start": 323,
                    "end": 423
                  },
                  "expression": false,
                  "start": 303,
                  "end": 423
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 299,
                "end": 423
              }
            ],
            "start": 154,
            "end": 425
          },
          "definite": false,
          "start": 134,
          "end": 425
        }
      ],
      "declare": false,
      "start": 130,
      "end": 425
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 433,
                "end": 439
              },
              "start": 431,
              "end": 439
            },
            "start": 430,
            "end": 439
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "mutuallyRecursive",
                "optional": false,
                "typeAnnotation": null,
                "start": 442,
                "end": 459
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "start",
                "optional": false,
                "typeAnnotation": null,
                "start": 460,
                "end": 465
              },
              "optional": false,
              "computed": false,
              "start": 442,
              "end": 465
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 442,
            "end": 467
          },
          "definite": false,
          "start": 430,
          "end": 467
        }
      ],
      "declare": false,
      "start": 426,
      "end": 468
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 479,
        "end": 480
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 487,
              "end": 488
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 490,
                "end": 496
              },
              "start": 488,
              "end": 496
            },
            "accessibility": null,
            "static": false,
            "start": 487,
            "end": 497
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "start",
              "optional": false,
              "typeAnnotation": null,
              "start": 502,
              "end": 507
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 511,
                "end": 517
              },
              "start": 509,
              "end": 517
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 502,
            "end": 518
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "passthrough",
              "optional": false,
              "typeAnnotation": null,
              "start": 523,
              "end": 534
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 538,
                    "end": 544
                  },
                  "start": 536,
                  "end": 544
                },
                "start": 535,
                "end": 544
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 547,
                "end": 553
              },
              "start": 545,
              "end": 553
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 523,
            "end": 554
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sub1",
              "optional": false,
              "typeAnnotation": null,
              "start": 559,
              "end": 563
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 567,
                    "end": 573
                  },
                  "start": 565,
                  "end": 573
                },
                "start": 564,
                "end": 573
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 576,
                "end": 582
              },
              "start": 574,
              "end": 582
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 559,
            "end": 583
          }
        ],
        "start": 481,
        "end": 585
      },
      "declare": false,
      "start": 469,
      "end": 585
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
            "name": "impl",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 596,
                  "end": 597
                },
                "typeArguments": null,
                "start": 596,
                "end": 597
              },
              "start": 594,
              "end": 597
            },
            "start": 590,
            "end": 597
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "mutuallyRecursive",
            "optional": false,
            "typeAnnotation": null,
            "start": 600,
            "end": 617
          },
          "definite": false,
          "start": 590,
          "end": 617
        }
      ],
      "declare": false,
      "start": 586,
      "end": 618
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 618
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 17,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 42,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 49,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 56,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 78,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 99,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 106,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 113,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 130,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "mutuallyRecursive",
    "start": 134,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 172,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 190,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 197,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "passthrough",
    "start": 202,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 213,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 214,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "passthrough",
    "start": 234,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 249,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 267,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 274,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "sub1",
    "start": 279,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "sub1",
    "start": 299,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 307,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 316,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 323,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 333,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 339,
    "end": 340
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 344,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 358,
    "end": 364
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 365,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "passthrough",
    "start": 370,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 384,
    "end": 385
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 398,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 408,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 424,
    "end": 425
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 426,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 433,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "mutuallyRecursive",
    "start": 442,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 460,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 467,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 469,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 490,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 502,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 511,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "passthrough",
    "start": 523,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 538,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 547,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "sub1",
    "start": 559,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 567,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 576,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 584,
    "end": 585
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 586,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "impl",
    "start": 590,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "mutuallyRecursive",
    "start": 600,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 617,
    "end": 618
  }
]
```
