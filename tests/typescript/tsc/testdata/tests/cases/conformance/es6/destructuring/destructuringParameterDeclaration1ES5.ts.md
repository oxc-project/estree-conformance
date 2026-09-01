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
        "name": "a1",
        "optional": false,
        "typeAnnotation": null,
        "start": 314,
        "end": 316
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 318,
              "end": 319
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 321,
              "end": 322
            },
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 326,
                      "end": 327
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 325,
                  "end": 328
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 329
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 333,
                  "end": 339
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 341,
                  "end": 347
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 349,
                      "end": 355
                    },
                    "start": 349,
                    "end": 357
                  },
                  "start": 349,
                  "end": 359
                }
              ],
              "start": 332,
              "end": 360
            },
            "start": 330,
            "end": 360
          },
          "start": 317,
          "end": 360
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 362,
        "end": 365
      },
      "expression": false,
      "start": 305,
      "end": 365
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a2",
        "optional": false,
        "typeAnnotation": null,
        "start": 375,
        "end": 377
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 383,
                    "end": 384
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 386,
                      "end": 392
                    },
                    "start": 384,
                    "end": 392
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 383,
                  "end": 393
                },
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
                    "start": 394,
                    "end": 395
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 397,
                      "end": 403
                    },
                    "start": 395,
                    "end": 403
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 394,
                  "end": 403
                }
              ],
              "start": 381,
              "end": 405
            },
            "start": 379,
            "end": 405
          },
          "start": 378,
          "end": 405
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 407,
        "end": 410
      },
      "expression": false,
      "start": 366,
      "end": 410
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a3",
        "optional": false,
        "typeAnnotation": null,
        "start": 420,
        "end": 422
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
                "name": "j",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 425
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 425
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 424,
              "end": 425
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 427,
                "end": 428
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 427,
                "end": 428
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 427,
              "end": 428
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 430,
                "end": 431
              },
              "value": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 434,
                      "end": 435
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 434,
                      "end": 435
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 434,
                    "end": 435
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 437,
                      "end": 438
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 437,
                      "end": 438
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 437,
                    "end": 438
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 433,
                "end": 439
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 430,
              "end": 439
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null,
                "start": 441,
                "end": 442
              },
              "value": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 445,
                    "end": 446
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 448,
                    "end": 449
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 451,
                    "end": 452
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 444,
                "end": 453
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 441,
              "end": 453
            }
          ],
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
                    "name": "j",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 458,
                    "end": 459
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 461,
                      "end": 467
                    },
                    "start": 459,
                    "end": 467
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 458,
                  "end": 468
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 469,
                    "end": 470
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 472,
                      "end": 478
                    },
                    "start": 470,
                    "end": 478
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 469,
                  "end": 479
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 480,
                    "end": 481
                  },
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
                            "name": "m",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 485,
                            "end": 486
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 488,
                              "end": 495
                            },
                            "start": 486,
                            "end": 495
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 485,
                          "end": 496
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 497,
                            "end": 498
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 500,
                              "end": 506
                            },
                            "start": 498,
                            "end": 506
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 497,
                          "end": 506
                        }
                      ],
                      "start": 483,
                      "end": 508
                    },
                    "start": 481,
                    "end": 508
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 480,
                  "end": 509
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "q",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 510,
                    "end": 511
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 514,
                            "end": 520
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 521,
                            "end": 527
                          }
                        ],
                        "start": 514,
                        "end": 527
                      },
                      "start": 513,
                      "end": 530
                    },
                    "start": 511,
                    "end": 530
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 510,
                  "end": 530
                }
              ],
              "start": 456,
              "end": 532
            },
            "start": 454,
            "end": 532
          },
          "start": 423,
          "end": 532
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 534,
        "end": 537
      },
      "expression": false,
      "start": 411,
      "end": 537
    },
    {
      "type": "EmptyStatement",
      "start": 537,
      "end": 538
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a4",
        "optional": false,
        "typeAnnotation": null,
        "start": 548,
        "end": 550
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 552,
                "end": 553
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 552,
                "end": 553
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 552,
              "end": 553
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 555,
                "end": 556
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 555,
                "end": 556
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 555,
              "end": 556
            }
          ],
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 561,
                    "end": 562
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 564,
                      "end": 570
                    },
                    "start": 562,
                    "end": 570
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 561,
                  "end": 571
                },
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
                    "start": 572,
                    "end": 573
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 575,
                      "end": 581
                    },
                    "start": 573,
                    "end": 581
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 572,
                  "end": 581
                }
              ],
              "start": 559,
              "end": 583
            },
            "start": 557,
            "end": 583
          },
          "start": 551,
          "end": 583
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 585,
        "end": 588
      },
      "expression": false,
      "start": 539,
      "end": 588
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null,
          "start": 590,
          "end": 592
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 594,
                "end": 595
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 597,
                "end": 598
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "world",
                        "raw": "\"world\"",
                        "start": 602,
                        "end": 609
                      }
                    ],
                    "start": 601,
                    "end": 610
                  }
                ],
                "start": 600,
                "end": 611
              }
            ],
            "start": 593,
            "end": 612
          }
        ],
        "optional": false,
        "start": 590,
        "end": 613
      },
      "directive": null,
      "start": 590,
      "end": 614
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null,
          "start": 615,
          "end": 617
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 619,
                "end": 620
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 622,
                "end": 623
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "world",
                        "raw": "\"world\"",
                        "start": 627,
                        "end": 634
                      }
                    ],
                    "start": 626,
                    "end": 635
                  }
                ],
                "start": 625,
                "end": 636
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 638,
                "end": 639
              }
            ],
            "start": 618,
            "end": 640
          }
        ],
        "optional": false,
        "start": 615,
        "end": 641
      },
      "directive": null,
      "start": 615,
      "end": 642
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b1",
        "optional": false,
        "typeAnnotation": null,
        "start": 908,
        "end": 910
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 911,
            "end": 912
          },
          "right": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 916,
                "end": 925
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 927,
                "end": 931
              }
            ],
            "start": 915,
            "end": 932
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 911,
          "end": 932
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 934,
        "end": 937
      },
      "expression": false,
      "start": 899,
      "end": 937
    },
    {
      "type": "EmptyStatement",
      "start": 937,
      "end": 938
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b2",
        "optional": false,
        "typeAnnotation": null,
        "start": 948,
        "end": 950
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 951,
            "end": 952
          },
          "right": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 955,
            "end": 959
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 951,
          "end": 959
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 961,
            "end": 962
          },
          "right": {
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
                  "start": 967,
                  "end": 968
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 970,
                  "end": 971
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 967,
                "end": 971
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 973,
                  "end": 974
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 976,
                  "end": 985
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 973,
                "end": 985
              }
            ],
            "start": 965,
            "end": 987
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 961,
          "end": 987
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 989,
        "end": 992
      },
      "expression": false,
      "start": 939,
      "end": 992
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1002,
        "end": 1004
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1006,
                  "end": 1007
                },
                "value": {
                  "type": "ObjectPattern",
                  "decorators": [],
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
                        "start": 1010,
                        "end": 1011
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1010,
                        "end": 1011
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 1010,
                      "end": 1011
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1013,
                        "end": 1014
                      },
                      "value": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "j",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1017,
                              "end": 1018
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "j",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1017,
                              "end": 1018
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 1017,
                            "end": 1018
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1016,
                        "end": 1019
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1013,
                      "end": 1019
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1009,
                  "end": 1020
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1006,
                "end": 1020
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1005,
            "end": 1021
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1026,
                  "end": 1027
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1031,
                        "end": 1032
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hi",
                        "raw": "\"hi\"",
                        "start": 1034,
                        "end": 1038
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1031,
                      "end": 1038
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1040,
                        "end": 1041
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
                              "name": "j",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1045,
                              "end": 1046
                            },
                            "value": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 1048,
                              "end": 1049
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1045,
                            "end": 1049
                          }
                        ],
                        "start": 1043,
                        "end": 1051
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1040,
                      "end": 1051
                    }
                  ],
                  "start": 1029,
                  "end": 1053
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1026,
                "end": 1053
              }
            ],
            "start": 1024,
            "end": 1055
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 1005,
          "end": 1055
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1057,
        "end": 1060
      },
      "expression": false,
      "start": 993,
      "end": 1060
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1072,
        "end": 1074
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1081,
              "end": 1083
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 1084,
                "end": 1085
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1087,
                "end": 1088
              },
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  null,
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1093,
                    "end": 1094
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1096,
                    "end": 1097
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1090,
                "end": 1098
              },
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
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1101,
                      "end": 1102
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1101,
                      "end": 1102
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1101,
                    "end": 1102
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
                      "start": 1104,
                      "end": 1105
                    },
                    "value": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "q",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1109,
                            "end": 1110
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "q",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1109,
                            "end": 1110
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 1109,
                          "end": 1110
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "r",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1112,
                            "end": 1113
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "r",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1112,
                            "end": 1113
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 1112,
                          "end": 1113
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1107,
                      "end": 1114
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1104,
                    "end": 1114
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1100,
                "end": 1115
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1081,
            "end": 1117
          }
        ],
        "start": 1075,
        "end": 1119
      },
      "declare": false,
      "start": 1062,
      "end": 1119
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1130,
        "end": 1132
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1134,
                "end": 1135
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 1137,
                "end": 1138
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1140,
                "end": 1141
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1133,
            "end": 1142
          },
          "right": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1146,
                "end": 1155
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1157,
                "end": 1161
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1163,
                "end": 1172
              }
            ],
            "start": 1145,
            "end": 1173
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 1133,
          "end": 1173
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1175,
        "end": 1178
      },
      "expression": false,
      "start": 1121,
      "end": 1178
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1188,
        "end": 1190
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1193,
                    "end": 1194
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1192,
                "end": 1195
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1197,
                "end": 1198
              },
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1202,
                        "end": 1203
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1205,
                        "end": 1206
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1201,
                    "end": 1207
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1200,
                "end": 1208
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1191,
            "end": 1209
          },
          "right": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1214,
                    "end": 1223
                  }
                ],
                "start": 1213,
                "end": 1224
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1226,
                "end": 1235
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1239,
                        "end": 1248
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1250,
                        "end": 1259
                      }
                    ],
                    "start": 1238,
                    "end": 1260
                  }
                ],
                "start": 1237,
                "end": 1261
              }
            ],
            "start": 1212,
            "end": 1262
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 1191,
          "end": 1262
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1264,
        "end": 1267
      },
      "expression": false,
      "start": 1179,
      "end": 1267
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "b1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1269,
          "end": 1271
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1273,
                "end": 1274
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1276,
                "end": 1277
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1279,
                "end": 1280
              }
            ],
            "start": 1272,
            "end": 1281
          }
        ],
        "optional": false,
        "start": 1269,
        "end": 1282
      },
      "directive": null,
      "start": 1269,
      "end": 1283
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1317,
          "end": 1319
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1320,
            "end": 1328
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1332,
                  "end": 1333
                },
                "value": {
                  "type": "Literal",
                  "value": 200,
                  "raw": "200",
                  "start": 1335,
                  "end": 1338
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1332,
                "end": 1338
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1340,
                  "end": 1341
                },
                "value": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 1343,
                  "end": 1351
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1340,
                "end": 1351
              }
            ],
            "start": 1330,
            "end": 1353
          }
        ],
        "optional": false,
        "start": 1317,
        "end": 1354
      },
      "directive": null,
      "start": 1317,
      "end": 1355
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1356,
          "end": 1358
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1359,
            "end": 1367
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1371,
                  "end": 1372
                },
                "value": {
                  "type": "Literal",
                  "value": 200,
                  "raw": "200",
                  "start": 1374,
                  "end": 1377
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1371,
                "end": 1377
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1379,
                  "end": 1380
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1382,
                  "end": 1386
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1379,
                "end": 1386
              }
            ],
            "start": 1369,
            "end": 1388
          }
        ],
        "optional": false,
        "start": 1356,
        "end": 1389
      },
      "directive": null,
      "start": 1356,
      "end": 1390
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "b6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1391,
          "end": 1393
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 1395,
                "end": 1403
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1405,
                "end": 1406
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1408,
                "end": 1409
              }
            ],
            "start": 1394,
            "end": 1410
          }
        ],
        "optional": false,
        "start": 1391,
        "end": 1411
      },
      "directive": null,
      "start": 1391,
      "end": 1412
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "b7",
          "optional": false,
          "typeAnnotation": null,
          "start": 1457,
          "end": 1459
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 1462,
                    "end": 1470
                  }
                ],
                "start": 1461,
                "end": 1471
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1473,
                "end": 1474
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1478,
                        "end": 1482
                      },
                      {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 1484,
                        "end": 1489
                      }
                    ],
                    "start": 1477,
                    "end": 1490
                  }
                ],
                "start": 1476,
                "end": 1491
              }
            ],
            "start": 1460,
            "end": 1492
          }
        ],
        "optional": false,
        "start": 1457,
        "end": 1493
      },
      "directive": null,
      "start": 1457,
      "end": 1494
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1660,
        "end": 1663
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1666,
              "end": 1667
            },
            "initializer": null,
            "computed": false,
            "start": 1666,
            "end": 1667
          }
        ],
        "start": 1664,
        "end": 1669
      },
      "const": false,
      "declare": false,
      "start": 1655,
      "end": 1669
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c0",
        "optional": false,
        "typeAnnotation": null,
        "start": 1679,
        "end": 1681
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
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 1683,
                "end": 1684
              },
              "value": {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 1687,
                      "end": 1688
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1687,
                      "end": 1688
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1687,
                    "end": 1688
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1690,
                      "end": 1691
                    },
                    "value": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "j",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1694,
                            "end": 1695
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "j",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1694,
                            "end": 1695
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 1694,
                          "end": 1695
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1693,
                      "end": 1696
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1690,
                    "end": 1696
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1686,
                "end": 1697
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1683,
              "end": 1697
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1682,
          "end": 1698
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1700,
        "end": 1703
      },
      "expression": false,
      "start": 1670,
      "end": 1703
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1713,
        "end": 1715
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1717,
                  "end": 1718
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1717,
                  "end": 1718
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 1717,
                "end": 1718
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1716,
            "end": 1719
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1724,
                  "end": 1725
                },
                "value": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 1727,
                  "end": 1729
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1724,
                "end": 1729
              }
            ],
            "start": 1722,
            "end": 1731
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 1716,
          "end": 1731
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1733,
        "end": 1736
      },
      "expression": false,
      "start": 1704,
      "end": 1736
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1746,
        "end": 1748
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
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 1750,
                "end": 1751
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1750,
                  "end": 1751
                },
                "right": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 1754,
                  "end": 1756
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1750,
                "end": 1756
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 1750,
              "end": 1756
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1749,
          "end": 1757
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1759,
        "end": 1762
      },
      "expression": false,
      "start": 1737,
      "end": 1762
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1772,
        "end": 1774
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1776,
                  "end": 1777
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1776,
                  "end": 1777
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 1776,
                "end": 1777
              }
            ],
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
                      "start": 1782,
                      "end": 1783
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1785,
                            "end": 1791
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 1792,
                            "end": 1798
                          }
                        ],
                        "start": 1785,
                        "end": 1798
                      },
                      "start": 1783,
                      "end": 1798
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1782,
                    "end": 1798
                  }
                ],
                "start": 1780,
                "end": 1799
              },
              "start": 1778,
              "end": 1799
            },
            "start": 1775,
            "end": 1799
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1804,
                  "end": 1805
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 1807,
                  "end": 1814
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1804,
                "end": 1814
              }
            ],
            "start": 1802,
            "end": 1816
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 1775,
          "end": 1816
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1818,
        "end": 1821
      },
      "expression": false,
      "start": 1763,
      "end": 1821
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1831,
        "end": 1833
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1835,
              "end": 1836
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1838,
              "end": 1839
            },
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1843,
                      "end": 1844
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1842,
                  "end": 1845
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1841,
              "end": 1846
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1834,
          "end": 1847
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1849,
        "end": 1852
      },
      "expression": false,
      "start": 1822,
      "end": 1852
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1862,
        "end": 1864
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1866,
              "end": 1867
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1869,
              "end": 1870
            },
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1874,
                        "end": 1875
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1876,
                        "end": 1877
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1874,
                      "end": 1877
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1873,
                  "end": 1878
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1872,
              "end": 1879
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1865,
          "end": 1880
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1882,
        "end": 1885
      },
      "expression": false,
      "start": 1853,
      "end": 1885
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1887,
          "end": 1889
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1891,
                  "end": 1892
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1897,
                        "end": 1898
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1900,
                        "end": 1901
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1897,
                      "end": 1901
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1903,
                        "end": 1904
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
                              "name": "j",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1908,
                              "end": 1909
                            },
                            "value": {
                              "type": "Literal",
                              "value": "world",
                              "raw": "\"world\"",
                              "start": 1911,
                              "end": 1918
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1908,
                            "end": 1918
                          }
                        ],
                        "start": 1906,
                        "end": 1920
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1903,
                      "end": 1920
                    }
                  ],
                  "start": 1895,
                  "end": 1922
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1891,
                "end": 1922
              }
            ],
            "start": 1890,
            "end": 1923
          }
        ],
        "optional": false,
        "start": 1887,
        "end": 1924
      },
      "directive": null,
      "start": 1887,
      "end": 1925
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1979,
          "end": 1981
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1983,
                  "end": 1984
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1989,
                        "end": 1990
                      },
                      "value": {
                        "type": "Literal",
                        "value": "string",
                        "raw": "\"string\"",
                        "start": 1992,
                        "end": 2000
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1989,
                      "end": 2000
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2002,
                        "end": 2003
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
                              "name": "j",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2007,
                              "end": 2008
                            },
                            "value": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 2010,
                              "end": 2014
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 2007,
                            "end": 2014
                          }
                        ],
                        "start": 2005,
                        "end": 2016
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2002,
                      "end": 2016
                    }
                  ],
                  "start": 1987,
                  "end": 2018
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1983,
                "end": 2018
              }
            ],
            "start": 1982,
            "end": 2019
          }
        ],
        "optional": false,
        "start": 1979,
        "end": 2020
      },
      "directive": null,
      "start": 1979,
      "end": 2021
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2072,
          "end": 2074
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2072,
        "end": 2076
      },
      "directive": null,
      "start": 2072,
      "end": 2077
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2121,
          "end": 2123
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2126,
                  "end": 2127
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2129,
                  "end": 2130
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2126,
                "end": 2130
              }
            ],
            "start": 2124,
            "end": 2132
          }
        ],
        "optional": false,
        "start": 2121,
        "end": 2133
      },
      "directive": null,
      "start": 2121,
      "end": 2133
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2172,
          "end": 2174
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 2175,
            "end": 2177
          }
        ],
        "optional": false,
        "start": 2172,
        "end": 2178
      },
      "directive": null,
      "start": 2172,
      "end": 2179
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2220,
          "end": 2222
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2224,
                  "end": 2225
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2226,
                  "end": 2227
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2224,
                "end": 2227
              }
            ],
            "start": 2223,
            "end": 2228
          }
        ],
        "optional": false,
        "start": 2220,
        "end": 2229
      },
      "directive": null,
      "start": 2220,
      "end": 2230
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2269,
          "end": 2271
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2274,
                  "end": 2275
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2277,
                  "end": 2278
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2274,
                "end": 2278
              }
            ],
            "start": 2272,
            "end": 2280
          }
        ],
        "optional": false,
        "start": 2269,
        "end": 2281
      },
      "directive": null,
      "start": 2269,
      "end": 2282
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c5",
          "optional": false,
          "typeAnnotation": null,
          "start": 2329,
          "end": 2331
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2333,
                "end": 2334
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2336,
                "end": 2337
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "string",
                        "raw": "\"string\"",
                        "start": 2341,
                        "end": 2349
                      }
                    ],
                    "start": 2340,
                    "end": 2350
                  }
                ],
                "start": 2339,
                "end": 2351
              }
            ],
            "start": 2332,
            "end": 2352
          }
        ],
        "optional": false,
        "start": 2329,
        "end": 2353
      },
      "directive": null,
      "start": 2329,
      "end": 2354
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c5",
          "optional": false,
          "typeAnnotation": null,
          "start": 2411,
          "end": 2413
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2415,
                "end": 2416
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2418,
                "end": 2419
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "string",
                        "raw": "\"string\"",
                        "start": 2423,
                        "end": 2431
                      }
                    ],
                    "start": 2422,
                    "end": 2432
                  }
                ],
                "start": 2421,
                "end": 2433
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 2435,
                "end": 2440
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 2442,
                "end": 2446
              }
            ],
            "start": 2414,
            "end": 2447
          }
        ],
        "optional": false,
        "start": 2411,
        "end": 2448
      },
      "directive": null,
      "start": 2411,
      "end": 2449
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d0",
        "optional": false,
        "typeAnnotation": null,
        "start": 2643,
        "end": 2645
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": null,
          "start": 2646,
          "end": 2648
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2650,
        "end": 2653
      },
      "expression": false,
      "start": 2634,
      "end": 2653
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d0",
        "optional": false,
        "typeAnnotation": null,
        "start": 2663,
        "end": 2665
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 2666,
            "end": 2667
          },
          "right": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 2670,
            "end": 2672
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 2666,
          "end": 2672
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2674,
        "end": 2677
      },
      "expression": false,
      "start": 2654,
      "end": 2677
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2689,
        "end": 2691
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2698,
              "end": 2700
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2702,
                    "end": 2703
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2705,
                    "end": 2706
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2708,
                    "end": 2709
                  }
                ],
                "optional": true,
                "typeAnnotation": null,
                "start": 2701,
                "end": 2711
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2698,
            "end": 2713
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2718,
              "end": 2720
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2722,
                      "end": 2723
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2722,
                      "end": 2723
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2722,
                    "end": 2723
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2725,
                      "end": 2726
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2725,
                      "end": 2726
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2725,
                    "end": 2726
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2728,
                      "end": 2729
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2728,
                      "end": 2729
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2728,
                    "end": 2729
                  }
                ],
                "optional": true,
                "typeAnnotation": null,
                "start": 2721,
                "end": 2731
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2718,
            "end": 2733
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e0",
              "optional": false,
              "typeAnnotation": null,
              "start": 2738,
              "end": 2740
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2742,
                    "end": 2743
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2745,
                    "end": 2746
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2748,
                    "end": 2749
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 2741,
                "end": 2750
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2738,
            "end": 2752
          }
        ],
        "start": 2692,
        "end": 2754
      },
      "declare": false,
      "start": 2679,
      "end": 2754
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2762,
        "end": 2764
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "F2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2776,
            "end": 2778
          },
          "typeArguments": null,
          "start": 2776,
          "end": 2778
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2785,
              "end": 2796
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
                "body": [],
                "start": 2799,
                "end": 2802
              },
              "expression": false,
              "start": 2796,
              "end": 2802
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2785,
            "end": 2802
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2807,
              "end": 2809
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
                "body": [],
                "start": 2812,
                "end": 2815
              },
              "expression": false,
              "start": 2809,
              "end": 2815
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2807,
            "end": 2815
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2820,
              "end": 2822
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
                "body": [],
                "start": 2825,
                "end": 2828
              },
              "expression": false,
              "start": 2822,
              "end": 2828
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2820,
            "end": 2828
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e0",
              "optional": false,
              "typeAnnotation": null,
              "start": 2833,
              "end": 2835
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2837,
                      "end": 2838
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2840,
                      "end": 2841
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2843,
                      "end": 2844
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2836,
                  "end": 2845
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2847,
                "end": 2850
              },
              "expression": false,
              "start": 2835,
              "end": 2850
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2833,
            "end": 2850
          }
        ],
        "start": 2779,
        "end": 2852
      },
      "abstract": false,
      "declare": false,
      "start": 2756,
      "end": 2852
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2860,
        "end": 2862
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "F2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2874,
            "end": 2876
          },
          "typeArguments": null,
          "start": 2874,
          "end": 2876
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2883,
              "end": 2885
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2887,
                      "end": 2888
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2890,
                      "end": 2891
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2893,
                      "end": 2894
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2886,
                  "end": 2895
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2897,
                "end": 2900
              },
              "expression": false,
              "start": 2885,
              "end": 2900
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2883,
            "end": 2900
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2905,
              "end": 2907
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
                  "type": "ObjectPattern",
                  "decorators": [],
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
                        "start": 2909,
                        "end": 2910
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2909,
                        "end": 2910
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 2909,
                      "end": 2910
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2912,
                        "end": 2913
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2912,
                        "end": 2913
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 2912,
                      "end": 2913
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2915,
                        "end": 2916
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2915,
                        "end": 2916
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 2915,
                      "end": 2916
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2908,
                  "end": 2917
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2919,
                "end": 2922
              },
              "expression": false,
              "start": 2907,
              "end": 2922
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2905,
            "end": 2922
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e0",
              "optional": false,
              "typeAnnotation": null,
              "start": 2927,
              "end": 2929
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2931,
                      "end": 2932
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2934,
                      "end": 2935
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2937,
                      "end": 2938
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2930,
                  "end": 2939
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2941,
                "end": 2944
              },
              "expression": false,
              "start": 2929,
              "end": 2944
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2927,
            "end": 2944
          }
        ],
        "start": 2877,
        "end": 2946
      },
      "abstract": false,
      "declare": false,
      "start": 2854,
      "end": 2946
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2958,
        "end": 2960
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "decorators": [],
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
                  "start": 2962,
                  "end": 2963
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2962,
                  "end": 2963
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 2962,
                "end": 2963
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2965,
                  "end": 2966
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2965,
                  "end": 2966
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 2965,
                "end": 2966
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 2961,
            "end": 2967
          },
          "right": {
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
                  "start": 2972,
                  "end": 2973
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2975,
                  "end": 2976
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2972,
                "end": 2976
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2978,
                  "end": 2979
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2981,
                  "end": 2982
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2978,
                "end": 2982
              }
            ],
            "start": 2970,
            "end": 2984
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 2961,
          "end": 2984
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2986,
        "end": 2989
      },
      "expression": false,
      "start": 2949,
      "end": 2989
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d5",
          "optional": false,
          "typeAnnotation": null,
          "start": 2990,
          "end": 2992
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2990,
        "end": 2994
      },
      "directive": null,
      "start": 2990,
      "end": 2995
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3372,
        "end": 3374
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3376,
                "end": 3377
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "number",
                "optional": false,
                "typeAnnotation": null,
                "start": 3379,
                "end": 3385
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 3376,
              "end": 3385
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 3375,
          "end": 3386
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3388,
        "end": 3391
      },
      "expression": false,
      "start": 3363,
      "end": 3391
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3431,
        "end": 3433
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3435,
                "end": 3436
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3435,
                "end": 3436
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 3435,
              "end": 3436
            }
          ],
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3441,
                    "end": 3442
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3444,
                      "end": 3450
                    },
                    "start": 3442,
                    "end": 3450
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3441,
                  "end": 3450
                }
              ],
              "start": 3439,
              "end": 3452
            },
            "start": 3437,
            "end": 3452
          },
          "start": 3434,
          "end": 3452
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3454,
        "end": 3457
      },
      "expression": false,
      "start": 3422,
      "end": 3457
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e3",
        "optional": false,
        "typeAnnotation": null,
        "start": 3488,
        "end": 3490
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3492,
                "end": 3493
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3492,
                "end": 3493
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 3492,
              "end": 3493
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3498,
                    "end": 3499
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3502,
                      "end": 3508
                    },
                    "start": 3500,
                    "end": 3508
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3498,
                  "end": 3508
                }
              ],
              "start": 3496,
              "end": 3510
            },
            "start": 3494,
            "end": 3510
          },
          "start": 3491,
          "end": 3510
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3512,
        "end": 3515
      },
      "expression": false,
      "start": 3479,
      "end": 3515
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e4",
        "optional": false,
        "typeAnnotation": null,
        "start": 3563,
        "end": 3565
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3567,
                "end": 3568
              },
              "value": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "number",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3571,
                    "end": 3577
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "string",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3578,
                    "end": 3584
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "any",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3585,
                    "end": 3588
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 3570,
                "end": 3589
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 3567,
              "end": 3589
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 3566,
          "end": 3591
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3593,
        "end": 3596
      },
      "expression": false,
      "start": 3554,
      "end": 3596
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e5",
        "optional": false,
        "typeAnnotation": null,
        "start": 3637,
        "end": 3639
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3641,
                "end": 3642
              },
              "value": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3645,
                    "end": 3646
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3648,
                    "end": 3649
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3651,
                    "end": 3652
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 3644,
                "end": 3653
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 3641,
              "end": 3653
            }
          ],
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3658,
                    "end": 3659
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 3662,
                          "end": 3668
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 3670,
                          "end": 3676
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 3678,
                          "end": 3684
                        }
                      ],
                      "start": 3661,
                      "end": 3685
                    },
                    "start": 3659,
                    "end": 3685
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3658,
                  "end": 3685
                }
              ],
              "start": 3656,
              "end": 3687
            },
            "start": 3654,
            "end": 3687
          },
          "start": 3640,
          "end": 3687
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3689,
        "end": 3692
      },
      "expression": false,
      "start": 3628,
      "end": 3692
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 305,
  "end": 3723
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 305,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 314,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 333,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 341,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 349,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 364,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 366,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 375,
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
    "value": "o",
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
    "type": "Punctuator",
    "value": "{",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 386,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 397,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 409,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 411,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 420,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "l",
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
    "type": "Punctuator",
    "value": "{",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 461,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 472,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 488,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 500,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 507,
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
    "value": "q",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 514,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 521,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 537,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 539,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 548,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 564,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 575,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 590,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 593,
    "end": 594
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 595,
    "end": 596
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 601,
    "end": 602
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 602,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 610,
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
    "value": ")",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 615,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 618,
    "end": 619
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 620,
    "end": 621
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 626,
    "end": 627
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 627,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 636,
    "end": 637
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 641,
    "end": 642
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 899,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 908,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 915,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 916,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 925,
    "end": 926
  },
  {
    "type": "Null",
    "value": "null",
    "start": 927,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 937,
    "end": 938
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 939,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 948,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 953,
    "end": 954
  },
  {
    "type": "Null",
    "value": "null",
    "start": 955,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 968,
    "end": 969
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 976,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 991,
    "end": 992
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 993,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1002,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 1034,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1062,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "F1",
    "start": 1072,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 1081,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1121,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 1130,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1146,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1157,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1163,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1179,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 1188,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1214,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1226,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1239,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1250,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1269,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1317,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1320,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Numeric",
    "value": "200",
    "start": 1335,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1343,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1356,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1359,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Numeric",
    "value": "200",
    "start": 1374,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1382,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 1391,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1395,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 1457,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1462,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1478,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1484,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1655,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1660,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1670,
    "end": 1678
  },
  {
    "type": "Identifier",
    "value": "c0",
    "start": 1679,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1704,
    "end": 1712
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1713,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1727,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1737,
    "end": 1745
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1746,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1754,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1763,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 1772,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1785,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1792,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1807,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1822,
    "end": 1830
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 1831,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1853,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 1862,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "c0",
    "start": 1887,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 1911,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Identifier",
    "value": "c0",
    "start": 1979,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1992,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2010,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2072,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2121,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 2172,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 2220,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 2269,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 2329,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2341,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 2411,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2423,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2435,
    "end": 2440
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2442,
    "end": 2446
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2446,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2448,
    "end": 2449
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2634,
    "end": 2642
  },
  {
    "type": "Identifier",
    "value": "d0",
    "start": 2643,
    "end": 2645
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2646,
    "end": 2647
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2654,
    "end": 2662
  },
  {
    "type": "Identifier",
    "value": "d0",
    "start": 2663,
    "end": 2665
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2666,
    "end": 2667
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2668,
    "end": 2669
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2670,
    "end": 2672
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2672,
    "end": 2673
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2674,
    "end": 2675
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2676,
    "end": 2677
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2679,
    "end": 2688
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 2689,
    "end": 2691
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2692,
    "end": 2693
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 2698,
    "end": 2700
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2700,
    "end": 2701
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2701,
    "end": 2702
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2703,
    "end": 2704
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2710,
    "end": 2711
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2712,
    "end": 2713
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 2718,
    "end": 2720
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2722,
    "end": 2723
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2723,
    "end": 2724
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2725,
    "end": 2726
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2726,
    "end": 2727
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2729,
    "end": 2730
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2730,
    "end": 2731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2731,
    "end": 2732
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2732,
    "end": 2733
  },
  {
    "type": "Identifier",
    "value": "e0",
    "start": 2738,
    "end": 2740
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2740,
    "end": 2741
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2742,
    "end": 2743
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2745,
    "end": 2746
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2746,
    "end": 2747
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2749,
    "end": 2750
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2751,
    "end": 2752
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2753,
    "end": 2754
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2756,
    "end": 2761
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 2762,
    "end": 2764
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 2765,
    "end": 2775
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 2776,
    "end": 2778
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2779,
    "end": 2780
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2785,
    "end": 2796
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2796,
    "end": 2797
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2797,
    "end": 2798
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2799,
    "end": 2800
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2801,
    "end": 2802
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 2807,
    "end": 2809
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2809,
    "end": 2810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2810,
    "end": 2811
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2812,
    "end": 2813
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2814,
    "end": 2815
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 2820,
    "end": 2822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2822,
    "end": 2823
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2823,
    "end": 2824
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2825,
    "end": 2826
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2827,
    "end": 2828
  },
  {
    "type": "Identifier",
    "value": "e0",
    "start": 2833,
    "end": 2835
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2835,
    "end": 2836
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2836,
    "end": 2837
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2837,
    "end": 2838
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2838,
    "end": 2839
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2840,
    "end": 2841
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2841,
    "end": 2842
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2844,
    "end": 2845
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2845,
    "end": 2846
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2847,
    "end": 2848
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2851,
    "end": 2852
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2854,
    "end": 2859
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 2860,
    "end": 2862
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 2863,
    "end": 2873
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 2874,
    "end": 2876
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2877,
    "end": 2878
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 2883,
    "end": 2885
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2886,
    "end": 2887
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2887,
    "end": 2888
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2888,
    "end": 2889
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2890,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2891,
    "end": 2892
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2894,
    "end": 2895
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2897,
    "end": 2898
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2899,
    "end": 2900
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 2905,
    "end": 2907
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2907,
    "end": 2908
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2909,
    "end": 2910
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2910,
    "end": 2911
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2912,
    "end": 2913
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2913,
    "end": 2914
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2915,
    "end": 2916
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2917,
    "end": 2918
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2919,
    "end": 2920
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2921,
    "end": 2922
  },
  {
    "type": "Identifier",
    "value": "e0",
    "start": 2927,
    "end": 2929
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2932,
    "end": 2933
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2934,
    "end": 2935
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2935,
    "end": 2936
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2937,
    "end": 2938
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2938,
    "end": 2939
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2939,
    "end": 2940
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2943,
    "end": 2944
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2945,
    "end": 2946
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2949,
    "end": 2957
  },
  {
    "type": "Identifier",
    "value": "d5",
    "start": 2958,
    "end": 2960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2960,
    "end": 2961
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2962,
    "end": 2963
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2963,
    "end": 2964
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2965,
    "end": 2966
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2966,
    "end": 2967
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2968,
    "end": 2969
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2970,
    "end": 2971
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2972,
    "end": 2973
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2973,
    "end": 2974
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2975,
    "end": 2976
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2976,
    "end": 2977
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2978,
    "end": 2979
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2979,
    "end": 2980
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2983,
    "end": 2984
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2984,
    "end": 2985
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2986,
    "end": 2987
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2988,
    "end": 2989
  },
  {
    "type": "Identifier",
    "value": "d5",
    "start": 2990,
    "end": 2992
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2992,
    "end": 2993
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2993,
    "end": 2994
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2994,
    "end": 2995
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3363,
    "end": 3371
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 3372,
    "end": 3374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3374,
    "end": 3375
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3375,
    "end": 3376
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3376,
    "end": 3377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3377,
    "end": 3378
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3379,
    "end": 3385
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3385,
    "end": 3386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3386,
    "end": 3387
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3388,
    "end": 3389
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3390,
    "end": 3391
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3422,
    "end": 3430
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 3431,
    "end": 3433
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3433,
    "end": 3434
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3434,
    "end": 3435
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3435,
    "end": 3436
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3436,
    "end": 3437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3437,
    "end": 3438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3439,
    "end": 3440
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3441,
    "end": 3442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3442,
    "end": 3443
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3444,
    "end": 3450
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3451,
    "end": 3452
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3452,
    "end": 3453
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3454,
    "end": 3455
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3456,
    "end": 3457
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3479,
    "end": 3487
  },
  {
    "type": "Identifier",
    "value": "e3",
    "start": 3488,
    "end": 3490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3490,
    "end": 3491
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3491,
    "end": 3492
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3492,
    "end": 3493
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3493,
    "end": 3494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3494,
    "end": 3495
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3496,
    "end": 3497
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3498,
    "end": 3499
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3499,
    "end": 3500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3500,
    "end": 3501
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3502,
    "end": 3508
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3509,
    "end": 3510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3510,
    "end": 3511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3512,
    "end": 3513
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3514,
    "end": 3515
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3554,
    "end": 3562
  },
  {
    "type": "Identifier",
    "value": "e4",
    "start": 3563,
    "end": 3565
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3565,
    "end": 3566
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3566,
    "end": 3567
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3567,
    "end": 3568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3568,
    "end": 3569
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3570,
    "end": 3571
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3571,
    "end": 3577
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3577,
    "end": 3578
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3578,
    "end": 3584
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3584,
    "end": 3585
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3585,
    "end": 3588
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3588,
    "end": 3589
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3590,
    "end": 3591
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3591,
    "end": 3592
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3593,
    "end": 3594
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3595,
    "end": 3596
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3628,
    "end": 3636
  },
  {
    "type": "Identifier",
    "value": "e5",
    "start": 3637,
    "end": 3639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3639,
    "end": 3640
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3640,
    "end": 3641
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3641,
    "end": 3642
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3642,
    "end": 3643
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3644,
    "end": 3645
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3645,
    "end": 3646
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3646,
    "end": 3647
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3648,
    "end": 3649
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3649,
    "end": 3650
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3651,
    "end": 3652
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3652,
    "end": 3653
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3653,
    "end": 3654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3654,
    "end": 3655
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3656,
    "end": 3657
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3658,
    "end": 3659
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3659,
    "end": 3660
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3661,
    "end": 3662
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3662,
    "end": 3668
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3668,
    "end": 3669
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3670,
    "end": 3676
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3676,
    "end": 3677
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3678,
    "end": 3684
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3684,
    "end": 3685
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3686,
    "end": 3687
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3687,
    "end": 3688
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3689,
    "end": 3690
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3691,
    "end": 3692
  }
]
```
