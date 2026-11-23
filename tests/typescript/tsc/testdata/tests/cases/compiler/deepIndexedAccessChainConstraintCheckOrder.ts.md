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
        "name": "Box",
        "optional": false,
        "typeAnnotation": null,
        "start": 310,
        "end": 313
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
              "start": 316,
              "end": 317
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Box",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 319,
                  "end": 322
                },
                "typeArguments": null,
                "start": 319,
                "end": 322
              },
              "start": 317,
              "end": 322
            },
            "accessibility": null,
            "static": false,
            "start": 316,
            "end": 323
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 325
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 327,
                "end": 333
              },
              "start": 325,
              "end": 333
            },
            "accessibility": null,
            "static": false,
            "start": 324,
            "end": 333
          }
        ],
        "start": 314,
        "end": 335
      },
      "declare": false,
      "start": 300,
      "end": 335
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "victim",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 353,
                  "end": 359
                },
                "typeArguments": null,
                "start": 346,
                "end": 359
              },
              "start": 344,
              "end": 359
            },
            "start": 343,
            "end": 359
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 363,
                    "end": 364
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Box",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 373,
                      "end": 376
                    },
                    "typeArguments": null,
                    "start": 373,
                    "end": 376
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 363,
                  "end": 376
                }
              ],
              "start": 362,
              "end": 377
            },
            "params": [
              {
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 381,
                      "end": 382
                    },
                    "typeArguments": null,
                    "start": 381,
                    "end": 382
                  },
                  "start": 379,
                  "end": 382
                },
                "start": 378,
                "end": 382
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 389,
                          "end": 390
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 392,
                            "end": 398
                          },
                          "start": 390,
                          "end": 398
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 389,
                        "end": 398
                      }
                    ],
                    "start": 387,
                    "end": 400
                  },
                  "start": 385,
                  "end": 400
                },
                "start": 384,
                "end": 400
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 405,
                "end": 406
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 407,
                "end": 408
              },
              "optional": false,
              "computed": false,
              "start": 405,
              "end": 408
            },
            "id": null,
            "generator": false,
            "start": 362,
            "end": 408
          },
          "definite": false,
          "start": 343,
          "end": 408
        }
      ],
      "declare": false,
      "start": 337,
      "end": 409
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "victim",
        "optional": false,
        "typeAnnotation": null,
        "start": 420,
        "end": 426
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
              "start": 427,
              "end": 428
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Box",
                "optional": false,
                "typeAnnotation": null,
                "start": 437,
                "end": 440
              },
              "typeArguments": null,
              "start": 437,
              "end": 440
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 427,
            "end": 440
          }
        ],
        "start": 426,
        "end": 441
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 450,
                "end": 451
              },
              "typeArguments": null,
              "start": 450,
              "end": 451
            },
            "start": 448,
            "end": 451
          },
          "start": 447,
          "end": 451
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSIndexedAccessType",
                            "objectType": {
                              "type": "TSIndexedAccessType",
                              "objectType": {
                                "type": "TSIndexedAccessType",
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 460,
                                    "end": 461
                                  },
                                  "typeArguments": null,
                                  "start": 460,
                                  "end": 461
                                },
                                "indexType": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "a",
                                    "raw": "\"a\"",
                                    "start": 462,
                                    "end": 465
                                  },
                                  "start": 462,
                                  "end": 465
                                },
                                "start": 460,
                                "end": 466
                              },
                              "indexType": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "a",
                                  "raw": "\"a\"",
                                  "start": 467,
                                  "end": 470
                                },
                                "start": 467,
                                "end": 470
                              },
                              "start": 460,
                              "end": 471
                            },
                            "indexType": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "a",
                                "raw": "\"a\"",
                                "start": 472,
                                "end": 475
                              },
                              "start": 472,
                              "end": 475
                            },
                            "start": 460,
                            "end": 476
                          },
                          "indexType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "\"a\"",
                              "start": 477,
                              "end": 480
                            },
                            "start": 477,
                            "end": 480
                          },
                          "start": 460,
                          "end": 481
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 482,
                            "end": 485
                          },
                          "start": 482,
                          "end": 485
                        },
                        "start": 460,
                        "end": 486
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 487,
                          "end": 490
                        },
                        "start": 487,
                        "end": 490
                      },
                      "start": 460,
                      "end": 491
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 492,
                        "end": 495
                      },
                      "start": 492,
                      "end": 495
                    },
                    "start": 460,
                    "end": 496
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 497,
                      "end": 500
                    },
                    "start": 497,
                    "end": 500
                  },
                  "start": 460,
                  "end": 501
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 502,
                    "end": 505
                  },
                  "start": 502,
                  "end": 505
                },
                "start": 460,
                "end": 506
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 507,
                  "end": 510
                },
                "start": 507,
                "end": 510
              },
              "start": 460,
              "end": 511
            },
            "start": 458,
            "end": 511
          },
          "start": 457,
          "end": 511
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 515,
          "end": 521
        },
        "start": 513,
        "end": 521
      },
      "body": {
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 535,
                  "end": 536
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 537,
                  "end": 538
                },
                "optional": false,
                "computed": false,
                "start": 535,
                "end": 538
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 541,
                  "end": 542
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 543,
                  "end": 544
                },
                "optional": false,
                "computed": false,
                "start": 541,
                "end": 544
              },
              "start": 535,
              "end": 544
            },
            "start": 528,
            "end": 545
          }
        ],
        "start": 522,
        "end": 547
      },
      "expression": false,
      "start": 411,
      "end": 547
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "lone",
        "optional": false,
        "typeAnnotation": null,
        "start": 558,
        "end": 562
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
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 563,
              "end": 564
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Box",
                "optional": false,
                "typeAnnotation": null,
                "start": 573,
                "end": 576
              },
              "typeArguments": null,
              "start": 573,
              "end": 576
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 563,
            "end": 576
          }
        ],
        "start": 562,
        "end": 577
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSIndexedAccessType",
                            "objectType": {
                              "type": "TSIndexedAccessType",
                              "objectType": {
                                "type": "TSIndexedAccessType",
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 581,
                                    "end": 582
                                  },
                                  "typeArguments": null,
                                  "start": 581,
                                  "end": 582
                                },
                                "indexType": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "a",
                                    "raw": "\"a\"",
                                    "start": 583,
                                    "end": 586
                                  },
                                  "start": 583,
                                  "end": 586
                                },
                                "start": 581,
                                "end": 587
                              },
                              "indexType": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "a",
                                  "raw": "\"a\"",
                                  "start": 588,
                                  "end": 591
                                },
                                "start": 588,
                                "end": 591
                              },
                              "start": 581,
                              "end": 592
                            },
                            "indexType": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "a",
                                "raw": "\"a\"",
                                "start": 593,
                                "end": 596
                              },
                              "start": 593,
                              "end": 596
                            },
                            "start": 581,
                            "end": 597
                          },
                          "indexType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "\"a\"",
                              "start": 598,
                              "end": 601
                            },
                            "start": 598,
                            "end": 601
                          },
                          "start": 581,
                          "end": 602
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 603,
                            "end": 606
                          },
                          "start": 603,
                          "end": 606
                        },
                        "start": 581,
                        "end": 607
                      },
                      "indexType": {
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
                      "start": 581,
                      "end": 612
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 613,
                        "end": 616
                      },
                      "start": 613,
                      "end": 616
                    },
                    "start": 581,
                    "end": 617
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 618,
                      "end": 621
                    },
                    "start": 618,
                    "end": 621
                  },
                  "start": 581,
                  "end": 622
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 623,
                    "end": 626
                  },
                  "start": 623,
                  "end": 626
                },
                "start": 581,
                "end": 627
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 628,
                  "end": 631
                },
                "start": 628,
                "end": 631
              },
              "start": 581,
              "end": 632
            },
            "start": 579,
            "end": 632
          },
          "start": 578,
          "end": 632
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 635,
          "end": 641
        },
        "start": 633,
        "end": 641
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 655,
                "end": 656
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 657,
                "end": 658
              },
              "optional": false,
              "computed": false,
              "start": 655,
              "end": 658
            },
            "start": 648,
            "end": 659
          }
        ],
        "start": 642,
        "end": 661
      },
      "expression": false,
      "start": 549,
      "end": 661
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 661
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 300,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 310,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 319,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 327,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 337,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 344,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 346,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "victim",
    "start": 353,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 363,
    "end": 364
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 365,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 373,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 392,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 402,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 408,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 411,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "victim",
    "start": 420,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 429,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 437,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 461,
    "end": 462
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 462,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 466,
    "end": 467
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 467,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 471,
    "end": 472
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 472,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 476,
    "end": 477
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 477,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 481,
    "end": 482
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 482,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 486,
    "end": 487
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 487,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 491,
    "end": 492
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 492,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 496,
    "end": 497
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 497,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 501,
    "end": 502
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 502,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 506,
    "end": 507
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 507,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 515,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 522,
    "end": 523
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 528,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 546,
    "end": 547
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 549,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "lone",
    "start": 558,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 563,
    "end": 564
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 565,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 573,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 582,
    "end": 583
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 583,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 587,
    "end": 588
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 588,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 592,
    "end": 593
  },
  {
    "type": "String",
    "value": "\"a\"",
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
    "value": "[",
    "start": 597,
    "end": 598
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 598,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 602,
    "end": 603
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 603,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 606,
    "end": 607
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
    "value": "]",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 612,
    "end": 613
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 613,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 617,
    "end": 618
  },
  {
    "type": "String",
    "value": "\"a\"",
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
    "value": "[",
    "start": 622,
    "end": 623
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 623,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 627,
    "end": 628
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 628,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 635,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 642,
    "end": 643
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 648,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 660,
    "end": 661
  }
]
```
