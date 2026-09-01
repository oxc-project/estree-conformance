__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 23
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 24,
                    "end": 30
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "start": 32,
                    "end": 39
                  }
                ],
                "start": 23,
                "end": 40
              },
              "start": 17,
              "end": 40
            },
            "start": 15,
            "end": 40
          },
          "start": 12,
          "end": 40
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 47,
              "end": 53
            },
            "start": 45,
            "end": 53
          },
          "start": 42,
          "end": 53
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 72,
                    "end": 75
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 76,
                    "end": 79
                  },
                  "optional": false,
                  "computed": true,
                  "start": 72,
                  "end": 80
                },
                "prefix": true,
                "start": 65,
                "end": 80
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 85,
                "end": 93
              },
              "start": 65,
              "end": 93
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 105,
                          "end": 108
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 109,
                          "end": 112
                        },
                        "optional": false,
                        "computed": true,
                        "start": 105,
                        "end": 113
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 114,
                        "end": 125
                      },
                      "optional": false,
                      "computed": false,
                      "start": 105,
                      "end": 125
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 105,
                    "end": 127
                  },
                  "directive": null,
                  "start": 105,
                  "end": 128
                }
              ],
              "start": 95,
              "end": 134
            },
            "alternate": null,
            "start": 61,
            "end": 134
          }
        ],
        "start": 55,
        "end": 136
      },
      "expression": false,
      "start": 0,
      "end": 136
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 149
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 161
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 162,
                    "end": 168
                  },
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 170,
                        "end": 176
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 179,
                        "end": 188
                      }
                    ],
                    "start": 170,
                    "end": 188
                  }
                ],
                "start": 161,
                "end": 189
              },
              "start": 155,
              "end": 189
            },
            "start": 153,
            "end": 189
          },
          "start": 150,
          "end": 189
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 196,
              "end": 202
            },
            "start": 194,
            "end": 202
          },
          "start": 191,
          "end": 202
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 214,
                  "end": 217
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 218,
                  "end": 221
                },
                "optional": false,
                "computed": true,
                "start": 214,
                "end": 222
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 227,
                "end": 236
              },
              "start": 214,
              "end": 236
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 248,
                          "end": 251
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 252,
                          "end": 255
                        },
                        "optional": false,
                        "computed": true,
                        "start": 248,
                        "end": 256
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 257,
                        "end": 268
                      },
                      "optional": false,
                      "computed": false,
                      "start": 248,
                      "end": 268
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 248,
                    "end": 270
                  },
                  "directive": null,
                  "start": 248,
                  "end": 271
                }
              ],
              "start": 238,
              "end": 277
            },
            "alternate": null,
            "start": 210,
            "end": 277
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
                  "name": "key2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 286,
                  "end": 290
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 293,
                    "end": 296
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 299,
                    "end": 302
                  },
                  "start": 293,
                  "end": 302
                },
                "definite": false,
                "start": 286,
                "end": 302
              }
            ],
            "declare": false,
            "start": 282,
            "end": 303
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 312,
                  "end": 315
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 320
                },
                "optional": false,
                "computed": true,
                "start": 312,
                "end": 321
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 326,
                "end": 335
              },
              "start": 312,
              "end": 335
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 347,
                          "end": 350
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 351,
                          "end": 355
                        },
                        "optional": false,
                        "computed": true,
                        "start": 347,
                        "end": 356
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 357,
                        "end": 368
                      },
                      "optional": false,
                      "computed": false,
                      "start": 347,
                      "end": 368
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 347,
                    "end": 370
                  },
                  "directive": null,
                  "start": 347,
                  "end": 371
                }
              ],
              "start": 337,
              "end": 377
            },
            "alternate": null,
            "start": 308,
            "end": 377
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
                  "name": "key3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 388,
                  "end": 392
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 395,
                    "end": 398
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 401,
                    "end": 404
                  },
                  "start": 395,
                  "end": 404
                },
                "definite": false,
                "start": 388,
                "end": 404
              }
            ],
            "declare": false,
            "start": 382,
            "end": 405
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 414,
                  "end": 417
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 418,
                  "end": 422
                },
                "optional": false,
                "computed": true,
                "start": 414,
                "end": 423
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 428,
                "end": 437
              },
              "start": 414,
              "end": 437
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 449,
                          "end": 452
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 453,
                          "end": 457
                        },
                        "optional": false,
                        "computed": true,
                        "start": 449,
                        "end": 458
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 459,
                        "end": 470
                      },
                      "optional": false,
                      "computed": false,
                      "start": 449,
                      "end": 470
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 449,
                    "end": 472
                  },
                  "directive": null,
                  "start": 449,
                  "end": 473
                }
              ],
              "start": 439,
              "end": 479
            },
            "alternate": null,
            "start": 410,
            "end": 479
          }
        ],
        "start": 204,
        "end": 481
      },
      "expression": false,
      "start": 138,
      "end": 481
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null,
        "start": 488,
        "end": 493
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 498,
              "end": 499
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 502,
                "end": 508
              },
              "start": 500,
              "end": 508
            },
            "accessibility": null,
            "static": false,
            "start": 498,
            "end": 509
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 510,
              "end": 511
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 514,
                "end": 520
              },
              "start": 512,
              "end": 520
            },
            "accessibility": null,
            "static": false,
            "start": 510,
            "end": 521
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 522,
              "end": 523
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 526,
                "end": 532
              },
              "start": 524,
              "end": 532
            },
            "accessibility": null,
            "static": false,
            "start": 522,
            "end": 532
          }
        ],
        "start": 496,
        "end": 534
      },
      "declare": false,
      "start": 483,
      "end": 535
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 546,
        "end": 548
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 554,
                "end": 559
              },
              "typeArguments": null,
              "start": 554,
              "end": 559
            },
            "start": 552,
            "end": 559
          },
          "start": 549,
          "end": 559
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Thing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 572,
                  "end": 577
                },
                "typeArguments": null,
                "start": 572,
                "end": 577
              },
              "start": 566,
              "end": 577
            },
            "start": 564,
            "end": 577
          },
          "start": 561,
          "end": 577
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 589,
                  "end": 592
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 593,
                  "end": 596
                },
                "optional": false,
                "computed": true,
                "start": 589,
                "end": 597
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 602,
                "end": 611
              },
              "start": 589,
              "end": 611
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 634,
                          "end": 637
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 638,
                          "end": 641
                        },
                        "optional": false,
                        "computed": true,
                        "start": 634,
                        "end": 642
                      },
                      "prefix": true,
                      "start": 627,
                      "end": 642
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "\"string\"",
                      "start": 647,
                      "end": 655
                    },
                    "start": 627,
                    "end": 655
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "obj",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 671,
                                "end": 674
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 675,
                                "end": 678
                              },
                              "optional": false,
                              "computed": true,
                              "start": 671,
                              "end": 679
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toUpperCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 680,
                              "end": 691
                            },
                            "optional": false,
                            "computed": false,
                            "start": 671,
                            "end": 691
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 671,
                          "end": 693
                        },
                        "directive": null,
                        "start": 671,
                        "end": 694
                      }
                    ],
                    "start": 657,
                    "end": 704
                  },
                  "alternate": null,
                  "start": 623,
                  "end": 704
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 724,
                          "end": 727
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 728,
                          "end": 731
                        },
                        "optional": false,
                        "computed": true,
                        "start": 724,
                        "end": 732
                      },
                      "prefix": true,
                      "start": 717,
                      "end": 732
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "number",
                      "raw": "\"number\"",
                      "start": 737,
                      "end": 745
                    },
                    "start": 717,
                    "end": 745
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "obj",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 761,
                                "end": 764
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 765,
                                "end": 768
                              },
                              "optional": false,
                              "computed": true,
                              "start": 761,
                              "end": 769
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toFixed",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 770,
                              "end": 777
                            },
                            "optional": false,
                            "computed": false,
                            "start": 761,
                            "end": 777
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 761,
                          "end": 779
                        },
                        "directive": null,
                        "start": 761,
                        "end": 780
                      }
                    ],
                    "start": 747,
                    "end": 790
                  },
                  "alternate": null,
                  "start": 713,
                  "end": 790
                }
              ],
              "start": 613,
              "end": 796
            },
            "alternate": null,
            "start": 585,
            "end": 796
          }
        ],
        "start": 579,
        "end": 798
      },
      "expression": false,
      "start": 537,
      "end": 798
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 809,
        "end": 811
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 812,
              "end": 813
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 822,
              "end": 828
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 812,
            "end": 828
          }
        ],
        "start": 811,
        "end": 829
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 835,
                "end": 841
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 842,
                      "end": 843
                    },
                    "typeArguments": null,
                    "start": 842,
                    "end": 843
                  },
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 845,
                        "end": 851
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 854,
                        "end": 863
                      }
                    ],
                    "start": 845,
                    "end": 863
                  }
                ],
                "start": 841,
                "end": 864
              },
              "start": 835,
              "end": 864
            },
            "start": 833,
            "end": 864
          },
          "start": 830,
          "end": 864
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
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
                "start": 871,
                "end": 872
              },
              "typeArguments": null,
              "start": 871,
              "end": 872
            },
            "start": 869,
            "end": 872
          },
          "start": 866,
          "end": 872
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 884,
                "end": 887
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 888,
                "end": 891
              },
              "optional": false,
              "computed": true,
              "start": 884,
              "end": 892
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 904,
                          "end": 907
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 908,
                          "end": 911
                        },
                        "optional": false,
                        "computed": true,
                        "start": 904,
                        "end": 912
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 913,
                        "end": 924
                      },
                      "optional": false,
                      "computed": false,
                      "start": 904,
                      "end": 924
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 904,
                    "end": 926
                  },
                  "directive": null,
                  "start": 904,
                  "end": 927
                }
              ],
              "start": 894,
              "end": 933
            },
            "alternate": null,
            "start": 880,
            "end": 933
          }
        ],
        "start": 874,
        "end": 935
      },
      "expression": false,
      "start": 800,
      "end": 935
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 935
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 9,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 12,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 17,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 32,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 42,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 47,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 61,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 65,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 72,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 76,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 81,
    "end": 84
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 85,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 105,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 109,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 114,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 138,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 147,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 150,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 155,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 162,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 170,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 179,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 191,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 196,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 210,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 214,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 218,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 223,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 227,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 248,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 252,
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
    "value": ".",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 257,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 282,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "key2",
    "start": 286,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 293,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 299,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 308,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 312,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "key2",
    "start": 316,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 322,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 326,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 347,
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
    "value": "key2",
    "start": 351,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 357,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 376,
    "end": 377
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 382,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "key3",
    "start": 388,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 395,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 401,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 410,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 414,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "key3",
    "start": 418,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 424,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 428,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 449,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "key3",
    "start": 453,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 459,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 483,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 488,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 502,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 514,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 526,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 534,
    "end": 535
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 537,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 546,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 549,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 554,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 561,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 566,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 572,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 579,
    "end": 580
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 585,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 589,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 593,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 598,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 602,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 613,
    "end": 614
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 623,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 626,
    "end": 627
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 627,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 634,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 638,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 643,
    "end": 646
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 647,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 671,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 675,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 680,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 703,
    "end": 704
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 713,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 716,
    "end": 717
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 717,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 724,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 728,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 733,
    "end": 736
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 737,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 761,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 765,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 770,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 797,
    "end": 798
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 800,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 809,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 812,
    "end": 813
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 814,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 822,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 830,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 835,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 845,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 854,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 866,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 874,
    "end": 875
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 880,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 884,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 888,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 904,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 908,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 912,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 913,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 934,
    "end": 935
  }
]
```
