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
        "start": 21,
        "end": 23
      },
      "generator": true,
      "async": false,
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
            "name": "Generator",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 36
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 37,
                "end": 40
              },
              {
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 44,
                      "end": 45
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "'x'",
                          "start": 47,
                          "end": 50
                        },
                        "start": 47,
                        "end": 50
                      },
                      "start": 45,
                      "end": 50
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 44,
                    "end": 50
                  }
                ],
                "start": 42,
                "end": 52
              },
              {
                "type": "TSAnyKeyword",
                "start": 54,
                "end": 57
              }
            ],
            "start": 36,
            "end": 58
          },
          "start": 27,
          "end": 58
        },
        "start": 25,
        "end": 58
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 72,
                    "end": 73
                  },
                  "value": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "'x'",
                    "start": 75,
                    "end": 78
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 72,
                  "end": 78
                }
              ],
              "start": 70,
              "end": 80
            },
            "start": 63,
            "end": 81
          }
        ],
        "start": 59,
        "end": 83
      },
      "expression": false,
      "start": 11,
      "end": 83
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g1",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 97
      },
      "generator": true,
      "async": false,
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
            "name": "Iterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 109
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 110,
                "end": 113
              },
              {
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 117,
                      "end": 118
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "'x'",
                          "start": 120,
                          "end": 123
                        },
                        "start": 120,
                        "end": 123
                      },
                      "start": 118,
                      "end": 123
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 117,
                    "end": 123
                  }
                ],
                "start": 115,
                "end": 125
              },
              {
                "type": "TSAnyKeyword",
                "start": 127,
                "end": 130
              }
            ],
            "start": 109,
            "end": 131
          },
          "start": 101,
          "end": 131
        },
        "start": 99,
        "end": 131
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 145,
                    "end": 146
                  },
                  "value": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "'x'",
                    "start": 148,
                    "end": 151
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 145,
                  "end": 151
                }
              ],
              "start": 143,
              "end": 153
            },
            "start": 136,
            "end": 154
          }
        ],
        "start": 132,
        "end": 156
      },
      "expression": false,
      "start": 85,
      "end": 156
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 174,
        "end": 176
      },
      "generator": true,
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
            "name": "AsyncGenerator",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 194
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 195,
                "end": 198
              },
              {
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 202,
                      "end": 203
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "'x'",
                          "start": 205,
                          "end": 208
                        },
                        "start": 205,
                        "end": 208
                      },
                      "start": 203,
                      "end": 208
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 202,
                    "end": 208
                  }
                ],
                "start": 200,
                "end": 210
              },
              {
                "type": "TSAnyKeyword",
                "start": 212,
                "end": 215
              }
            ],
            "start": 194,
            "end": 216
          },
          "start": 180,
          "end": 216
        },
        "start": 178,
        "end": 216
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 230,
                    "end": 231
                  },
                  "value": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "'x'",
                    "start": 233,
                    "end": 236
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 230,
                  "end": 236
                }
              ],
              "start": 228,
              "end": 238
            },
            "start": 221,
            "end": 239
          }
        ],
        "start": 217,
        "end": 241
      },
      "expression": false,
      "start": 158,
      "end": 241
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null,
        "start": 259,
        "end": 261
      },
      "generator": true,
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
            "name": "AsyncIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 265,
            "end": 278
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 279,
                "end": 282
              },
              {
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 286,
                      "end": 287
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "'x'",
                          "start": 289,
                          "end": 292
                        },
                        "start": 289,
                        "end": 292
                      },
                      "start": 287,
                      "end": 292
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 286,
                    "end": 292
                  }
                ],
                "start": 284,
                "end": 294
              },
              {
                "type": "TSAnyKeyword",
                "start": 296,
                "end": 299
              }
            ],
            "start": 278,
            "end": 300
          },
          "start": 265,
          "end": 300
        },
        "start": 263,
        "end": 300
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 314,
                    "end": 315
                  },
                  "value": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "'x'",
                    "start": 317,
                    "end": 320
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 314,
                  "end": 320
                }
              ],
              "start": 312,
              "end": 322
            },
            "start": 305,
            "end": 323
          }
        ],
        "start": 301,
        "end": 325
      },
      "expression": false,
      "start": 243,
      "end": 325
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 343,
        "end": 345
      },
      "generator": true,
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
            "name": "AsyncGenerator",
            "optional": false,
            "typeAnnotation": null,
            "start": 349,
            "end": 363
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 364,
                "end": 367
              },
              {
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 371,
                      "end": 372
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "'x'",
                          "start": 374,
                          "end": 377
                        },
                        "start": 374,
                        "end": 377
                      },
                      "start": 372,
                      "end": 377
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 371,
                    "end": 377
                  }
                ],
                "start": 369,
                "end": 379
              },
              {
                "type": "TSAnyKeyword",
                "start": 381,
                "end": 384
              }
            ],
            "start": 363,
            "end": 385
          },
          "start": 349,
          "end": 385
        },
        "start": 347,
        "end": 385
      },
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 397,
                  "end": 404
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 405,
                  "end": 412
                },
                "optional": false,
                "computed": false,
                "start": 397,
                "end": 412
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 415,
                        "end": 416
                      },
                      "value": {
                        "type": "Literal",
                        "value": "x",
                        "raw": "'x'",
                        "start": 418,
                        "end": 421
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 415,
                      "end": 421
                    }
                  ],
                  "start": 413,
                  "end": 423
                }
              ],
              "optional": false,
              "start": 397,
              "end": 424
            },
            "start": 390,
            "end": 425
          }
        ],
        "start": 386,
        "end": 427
      },
      "expression": false,
      "start": 327,
      "end": 427
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g3",
        "optional": false,
        "typeAnnotation": null,
        "start": 445,
        "end": 447
      },
      "generator": true,
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
            "name": "AsyncIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 451,
            "end": 464
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 465,
                "end": 468
              },
              {
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 472,
                      "end": 473
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "'x'",
                          "start": 475,
                          "end": 478
                        },
                        "start": 475,
                        "end": 478
                      },
                      "start": 473,
                      "end": 478
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 472,
                    "end": 478
                  }
                ],
                "start": 470,
                "end": 480
              },
              {
                "type": "TSAnyKeyword",
                "start": 482,
                "end": 485
              }
            ],
            "start": 464,
            "end": 486
          },
          "start": 451,
          "end": 486
        },
        "start": 449,
        "end": 486
      },
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 498,
                  "end": 505
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 506,
                  "end": 513
                },
                "optional": false,
                "computed": false,
                "start": 498,
                "end": 513
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 516,
                        "end": 517
                      },
                      "value": {
                        "type": "Literal",
                        "value": "x",
                        "raw": "'x'",
                        "start": 519,
                        "end": 522
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 516,
                      "end": 522
                    }
                  ],
                  "start": 514,
                  "end": 524
                }
              ],
              "optional": false,
              "start": 498,
              "end": 525
            },
            "start": 491,
            "end": 526
          }
        ],
        "start": 487,
        "end": 528
      },
      "expression": false,
      "start": 429,
      "end": 528
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 546,
        "end": 548
      },
      "generator": true,
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
            "name": "AsyncGenerator",
            "optional": false,
            "typeAnnotation": null,
            "start": 552,
            "end": 566
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 567,
                "end": 570
              },
              {
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 574,
                      "end": 575
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "'x'",
                          "start": 577,
                          "end": 580
                        },
                        "start": 577,
                        "end": 580
                      },
                      "start": 575,
                      "end": 580
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 574,
                    "end": 580
                  }
                ],
                "start": 572,
                "end": 582
              },
              {
                "type": "TSAnyKeyword",
                "start": 584,
                "end": 587
              }
            ],
            "start": 566,
            "end": 588
          },
          "start": 552,
          "end": 588
        },
        "start": 550,
        "end": 588
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
                  "name": "ret",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 599,
                  "end": 602
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 607,
                        "end": 608
                      },
                      "value": {
                        "type": "Literal",
                        "value": "x",
                        "raw": "'x'",
                        "start": 610,
                        "end": 613
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 607,
                      "end": 613
                    }
                  ],
                  "start": 605,
                  "end": 615
                },
                "definite": false,
                "start": 599,
                "end": 615
              }
            ],
            "declare": false,
            "start": 593,
            "end": 616
          },
          {
            "type": "ReturnStatement",
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
                  "start": 626,
                  "end": 633
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 634,
                  "end": 641
                },
                "optional": false,
                "computed": false,
                "start": 626,
                "end": 641
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ret",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 642,
                  "end": 645
                }
              ],
              "optional": false,
              "start": 626,
              "end": 646
            },
            "start": 619,
            "end": 647
          }
        ],
        "start": 589,
        "end": 658
      },
      "expression": false,
      "start": 530,
      "end": 658
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g4",
        "optional": false,
        "typeAnnotation": null,
        "start": 676,
        "end": 678
      },
      "generator": true,
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
            "name": "AsyncIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 682,
            "end": 695
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 696,
                "end": 699
              },
              {
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 703,
                      "end": 704
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "'x'",
                          "start": 706,
                          "end": 709
                        },
                        "start": 706,
                        "end": 709
                      },
                      "start": 704,
                      "end": 709
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 703,
                    "end": 709
                  }
                ],
                "start": 701,
                "end": 711
              },
              {
                "type": "TSAnyKeyword",
                "start": 713,
                "end": 716
              }
            ],
            "start": 695,
            "end": 717
          },
          "start": 682,
          "end": 717
        },
        "start": 680,
        "end": 717
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
                  "name": "ret",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 728,
                  "end": 731
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 736,
                        "end": 737
                      },
                      "value": {
                        "type": "Literal",
                        "value": "x",
                        "raw": "'x'",
                        "start": 739,
                        "end": 742
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 736,
                      "end": 742
                    }
                  ],
                  "start": 734,
                  "end": 744
                },
                "definite": false,
                "start": 728,
                "end": 744
              }
            ],
            "declare": false,
            "start": 722,
            "end": 745
          },
          {
            "type": "ReturnStatement",
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
                  "start": 755,
                  "end": 762
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 763,
                  "end": 770
                },
                "optional": false,
                "computed": false,
                "start": 755,
                "end": 770
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ret",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 771,
                  "end": 774
                }
              ],
              "optional": false,
              "start": 755,
              "end": 775
            },
            "start": 748,
            "end": 776
          }
        ],
        "start": 718,
        "end": 787
      },
      "expression": false,
      "start": 660,
      "end": 787
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 11,
  "end": 787
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 11,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 21,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 27,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 37,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 47,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 54,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 63,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 75,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 85,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 95,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 101,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 110,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 120,
    "end": 123
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
    "value": "any",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 136,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 148,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 158,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 164,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 174,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "AsyncGenerator",
    "start": 180,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 195,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 203,
    "end": 204
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 205,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 212,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 221,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 231,
    "end": 232
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 233,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 243,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 249,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 259,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 265,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 279,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 289,
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
    "value": ",",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 296,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 305,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 315,
    "end": 316
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 317,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 327,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 333,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 343,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "AsyncGenerator",
    "start": 349,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 364,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 372,
    "end": 373
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 374,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 381,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 386,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 390,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 397,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 405,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 418,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 429,
    "end": 434
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 435,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "g3",
    "start": 445,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 447,
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
    "value": ":",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 451,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 465,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 473,
    "end": 474
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 475,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 482,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 487,
    "end": 488
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 491,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 498,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 506,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 517,
    "end": 518
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 519,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 530,
    "end": 535
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 536,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "f4",
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
    "type": "Punctuator",
    "value": ")",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "AsyncGenerator",
    "start": 552,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 567,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 575,
    "end": 576
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 577,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 584,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 589,
    "end": 590
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 593,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "ret",
    "start": 599,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 608,
    "end": 609
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 610,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 619,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 626,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 634,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "ret",
    "start": 642,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 660,
    "end": 665
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 666,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "g4",
    "start": 676,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 682,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 696,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 704,
    "end": 705
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 706,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 713,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 718,
    "end": 719
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 722,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "ret",
    "start": 728,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 737,
    "end": 738
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 739,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 744,
    "end": 745
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 748,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 755,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 763,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "ret",
    "start": 771,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 786,
    "end": 787
  }
]
```
