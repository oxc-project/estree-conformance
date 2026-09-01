__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
              "start": 18,
              "end": 20
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 22,
                "end": 28
              },
              "start": 20,
              "end": 28
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 28
          }
        ],
        "start": 12,
        "end": 30
      },
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 43
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
              "start": 50,
              "end": 52
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 54,
                "end": 60
              },
              "start": 52,
              "end": 60
            },
            "accessibility": null,
            "static": false,
            "start": 50,
            "end": 60
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldB",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 71
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
              },
              "start": 71,
              "end": 79
            },
            "accessibility": null,
            "static": false,
            "start": 65,
            "end": 79
          }
        ],
        "start": 44,
        "end": 81
      },
      "declare": false,
      "start": 32,
      "end": 81
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "countEverything",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 113
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 124
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 125,
                "end": 131
              }
            ],
            "start": 124,
            "end": 132
          },
          "start": 117,
          "end": 132
        },
        "start": 115,
        "end": 132
      },
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "providerA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 154
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 167,
                        "end": 174
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 175,
                                "end": 176
                              },
                              "typeArguments": null,
                              "start": 175,
                              "end": 176
                            },
                            "start": 175,
                            "end": 178
                          }
                        ],
                        "start": 174,
                        "end": 179
                      },
                      "start": 167,
                      "end": 179
                    },
                    "start": 165,
                    "end": 179
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrayExpression",
                          "elements": [],
                          "start": 192,
                          "end": 194
                        },
                        "start": 185,
                        "end": 194
                      }
                    ],
                    "start": 183,
                    "end": 196
                  },
                  "id": null,
                  "generator": false,
                  "start": 157,
                  "end": 196
                },
                "definite": false,
                "start": 145,
                "end": 196
              }
            ],
            "declare": false,
            "start": 139,
            "end": 196
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
                  "name": "providerB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 216
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 229,
                        "end": 236
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 237,
                                "end": 238
                              },
                              "typeArguments": null,
                              "start": 237,
                              "end": 238
                            },
                            "start": 237,
                            "end": 240
                          }
                        ],
                        "start": 236,
                        "end": 241
                      },
                      "start": 229,
                      "end": 241
                    },
                    "start": 227,
                    "end": 241
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrayExpression",
                          "elements": [],
                          "start": 254,
                          "end": 256
                        },
                        "start": 247,
                        "end": 256
                      }
                    ],
                    "start": 245,
                    "end": 258
                  },
                  "id": null,
                  "generator": false,
                  "start": 219,
                  "end": 258
                },
                "definite": false,
                "start": 207,
                "end": 258
              }
            ],
            "declare": false,
            "start": 201,
            "end": 258
          },
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
                      "name": "resultA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 271,
                      "end": 278
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resultB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 280,
                      "end": 287
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 288
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 297,
                        "end": 304
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "all",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 305,
                        "end": 308
                      },
                      "optional": false,
                      "computed": false,
                      "start": 297,
                      "end": 308
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "providerA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 319,
                              "end": 328
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 319,
                            "end": 330
                          },
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "providerB",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 340,
                              "end": 349
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 340,
                            "end": 351
                          }
                        ],
                        "start": 309,
                        "end": 358
                      }
                    ],
                    "optional": false,
                    "start": 297,
                    "end": 359
                  },
                  "start": 291,
                  "end": 359
                },
                "definite": false,
                "start": 270,
                "end": 359
              }
            ],
            "declare": false,
            "start": 264,
            "end": 360
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
                  "name": "dataA",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 379,
                          "end": 380
                        },
                        "typeArguments": null,
                        "start": 379,
                        "end": 380
                      },
                      "start": 379,
                      "end": 382
                    },
                    "start": 377,
                    "end": 382
                  },
                  "start": 372,
                  "end": 382
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resultA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 385,
                  "end": 392
                },
                "definite": false,
                "start": 372,
                "end": 392
              }
            ],
            "declare": false,
            "start": 366,
            "end": 393
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
                  "name": "dataB",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 411,
                          "end": 412
                        },
                        "typeArguments": null,
                        "start": 411,
                        "end": 412
                      },
                      "start": 411,
                      "end": 414
                    },
                    "start": 409,
                    "end": 414
                  },
                  "start": 404,
                  "end": 414
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resultB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 417,
                  "end": 424
                },
                "definite": false,
                "start": 404,
                "end": 424
              }
            ],
            "declare": false,
            "start": 398,
            "end": 425
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "dataA",
                "optional": false,
                "typeAnnotation": null,
                "start": 434,
                "end": 439
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "dataB",
                "optional": false,
                "typeAnnotation": null,
                "start": 443,
                "end": 448
              },
              "start": 434,
              "end": 448
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dataA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 467,
                        "end": 472
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 473,
                        "end": 479
                      },
                      "optional": false,
                      "computed": false,
                      "start": 467,
                      "end": 479
                    },
                    "operator": "+",
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dataB",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 482,
                        "end": 487
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 488,
                        "end": 494
                      },
                      "optional": false,
                      "computed": false,
                      "start": 482,
                      "end": 494
                    },
                    "start": 467,
                    "end": 494
                  },
                  "start": 460,
                  "end": 495
                }
              ],
              "start": 450,
              "end": 501
            },
            "alternate": null,
            "start": 430,
            "end": 501
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 513,
              "end": 514
            },
            "start": 506,
            "end": 515
          }
        ],
        "start": 133,
        "end": 517
      },
      "expression": false,
      "start": 83,
      "end": 517
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
            "name": "expected",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 546,
                  "end": 553
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 555,
                            "end": 558
                          },
                          "start": 555,
                          "end": 558
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "b",
                            "raw": "\"b\"",
                            "start": 560,
                            "end": 563
                          },
                          "start": 560,
                          "end": 563
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "c",
                            "raw": "\"c\"",
                            "start": 565,
                            "end": 568
                          },
                          "start": 565,
                          "end": 568
                        }
                      ],
                      "start": 554,
                      "end": 569
                    }
                  ],
                  "start": 553,
                  "end": 570
                },
                "start": 546,
                "end": 570
              },
              "start": 544,
              "end": 570
            },
            "start": 536,
            "end": 570
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 573,
                "end": 580
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 581,
                "end": 584
              },
              "optional": false,
              "computed": false,
              "start": 573,
              "end": 584
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 585,
                  "end": 594
                },
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 608,
                          "end": 611
                        },
                        "start": 608,
                        "end": 611
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "b",
                          "raw": "\"b\"",
                          "start": 613,
                          "end": 616
                        },
                        "start": 613,
                        "end": 616
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "c",
                          "raw": "\"c\"",
                          "start": 618,
                          "end": 621
                        },
                        "start": 618,
                        "end": 621
                      }
                    ],
                    "start": 607,
                    "end": 622
                  },
                  "start": 598,
                  "end": 622
                },
                "start": 585,
                "end": 622
              }
            ],
            "optional": false,
            "start": 573,
            "end": 623
          },
          "definite": false,
          "start": 536,
          "end": 623
        }
      ],
      "declare": false,
      "start": 530,
      "end": 624
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 624
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 18,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 32,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 50,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 54,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "fieldB",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 73,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 83,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 89,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "countEverything",
    "start": 98,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 117,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 125,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 139,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "providerA",
    "start": 145,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 157,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 167,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 180,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 185,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 201,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "providerB",
    "start": 207,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 219,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 229,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 242,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 245,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 247,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 264,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "resultA",
    "start": 271,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "resultB",
    "start": 280,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 291,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 297,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 305,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "providerA",
    "start": 319,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "providerB",
    "start": 340,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 366,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "dataA",
    "start": 372,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "resultA",
    "start": 385,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 392,
    "end": 393
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 398,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "dataB",
    "start": 404,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "resultB",
    "start": 417,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 430,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "dataA",
    "start": 434,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 440,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "dataB",
    "start": 443,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 450,
    "end": 451
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 460,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "dataA",
    "start": 467,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 473,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "dataB",
    "start": 482,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 488,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 500,
    "end": 501
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 506,
    "end": 512
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Punctuator",
    "value": "}",
    "start": 516,
    "end": 517
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 530,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "expected",
    "start": 536,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 546,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 554,
    "end": 555
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 555,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 558,
    "end": 559
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 560,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 563,
    "end": 564
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 565,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 573,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 581,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 585,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 595,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 598,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 607,
    "end": 608
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 608,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 611,
    "end": 612
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 613,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 616,
    "end": 617
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 618,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 623,
    "end": 624
  }
]
```
