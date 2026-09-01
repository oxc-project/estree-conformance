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
          "start": 2171,
          "end": 2173
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 2174,
            "end": 2176
          }
        ],
        "optional": false,
        "start": 2171,
        "end": 2177
      },
      "directive": null,
      "start": 2171,
      "end": 2178
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
          "start": 2219,
          "end": 2221
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
                  "start": 2223,
                  "end": 2224
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2225,
                  "end": 2226
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2223,
                "end": 2226
              }
            ],
            "start": 2222,
            "end": 2227
          }
        ],
        "optional": false,
        "start": 2219,
        "end": 2228
      },
      "directive": null,
      "start": 2219,
      "end": 2229
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
          "start": 2268,
          "end": 2270
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
                  "start": 2273,
                  "end": 2274
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2276,
                  "end": 2277
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2273,
                "end": 2277
              }
            ],
            "start": 2271,
            "end": 2279
          }
        ],
        "optional": false,
        "start": 2268,
        "end": 2280
      },
      "directive": null,
      "start": 2268,
      "end": 2281
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
          "start": 2328,
          "end": 2330
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
                "start": 2332,
                "end": 2333
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2335,
                "end": 2336
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
                        "start": 2340,
                        "end": 2348
                      }
                    ],
                    "start": 2339,
                    "end": 2349
                  }
                ],
                "start": 2338,
                "end": 2350
              }
            ],
            "start": 2331,
            "end": 2351
          }
        ],
        "optional": false,
        "start": 2328,
        "end": 2352
      },
      "directive": null,
      "start": 2328,
      "end": 2353
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
          "start": 2410,
          "end": 2412
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
                "start": 2414,
                "end": 2415
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2417,
                "end": 2418
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
                        "start": 2422,
                        "end": 2430
                      }
                    ],
                    "start": 2421,
                    "end": 2431
                  }
                ],
                "start": 2420,
                "end": 2432
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 2434,
                "end": 2439
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 2441,
                "end": 2445
              }
            ],
            "start": 2413,
            "end": 2446
          }
        ],
        "optional": false,
        "start": 2410,
        "end": 2447
      },
      "directive": null,
      "start": 2410,
      "end": 2448
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d0",
        "optional": false,
        "typeAnnotation": null,
        "start": 2642,
        "end": 2644
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
          "start": 2645,
          "end": 2647
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2649,
        "end": 2652
      },
      "expression": false,
      "start": 2633,
      "end": 2652
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d0",
        "optional": false,
        "typeAnnotation": null,
        "start": 2662,
        "end": 2664
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
            "start": 2665,
            "end": 2666
          },
          "right": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 2669,
            "end": 2671
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 2665,
          "end": 2671
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2673,
        "end": 2676
      },
      "expression": false,
      "start": 2653,
      "end": 2676
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2688,
        "end": 2690
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
              "start": 2697,
              "end": 2699
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
                    "start": 2701,
                    "end": 2702
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2704,
                    "end": 2705
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2707,
                    "end": 2708
                  }
                ],
                "optional": true,
                "typeAnnotation": null,
                "start": 2700,
                "end": 2710
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2697,
            "end": 2712
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2717,
              "end": 2719
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
                      "start": 2721,
                      "end": 2722
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2721,
                      "end": 2722
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2721,
                    "end": 2722
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
                      "start": 2724,
                      "end": 2725
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2724,
                      "end": 2725
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2724,
                    "end": 2725
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
                      "start": 2727,
                      "end": 2728
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2727,
                      "end": 2728
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2727,
                    "end": 2728
                  }
                ],
                "optional": true,
                "typeAnnotation": null,
                "start": 2720,
                "end": 2730
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2717,
            "end": 2732
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e0",
              "optional": false,
              "typeAnnotation": null,
              "start": 2737,
              "end": 2739
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
                    "start": 2741,
                    "end": 2742
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2744,
                    "end": 2745
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2747,
                    "end": 2748
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 2740,
                "end": 2749
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2737,
            "end": 2751
          }
        ],
        "start": 2691,
        "end": 2753
      },
      "declare": false,
      "start": 2678,
      "end": 2753
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
        "start": 2761,
        "end": 2763
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
            "start": 2775,
            "end": 2777
          },
          "typeArguments": null,
          "start": 2775,
          "end": 2777
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
              "start": 2784,
              "end": 2795
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
                "start": 2798,
                "end": 2801
              },
              "expression": false,
              "start": 2795,
              "end": 2801
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2784,
            "end": 2801
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
              "start": 2806,
              "end": 2808
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
                "start": 2811,
                "end": 2814
              },
              "expression": false,
              "start": 2808,
              "end": 2814
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2806,
            "end": 2814
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
              "start": 2819,
              "end": 2821
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
                "start": 2824,
                "end": 2827
              },
              "expression": false,
              "start": 2821,
              "end": 2827
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2819,
            "end": 2827
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
              "start": 2832,
              "end": 2834
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
                      "start": 2836,
                      "end": 2837
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2839,
                      "end": 2840
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2842,
                      "end": 2843
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2835,
                  "end": 2844
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2846,
                "end": 2849
              },
              "expression": false,
              "start": 2834,
              "end": 2849
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2832,
            "end": 2849
          }
        ],
        "start": 2778,
        "end": 2851
      },
      "abstract": false,
      "declare": false,
      "start": 2755,
      "end": 2851
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
        "start": 2859,
        "end": 2861
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
            "start": 2873,
            "end": 2875
          },
          "typeArguments": null,
          "start": 2873,
          "end": 2875
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
              "start": 2882,
              "end": 2884
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
                      "start": 2886,
                      "end": 2887
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2889,
                      "end": 2890
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2892,
                      "end": 2893
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2885,
                  "end": 2894
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2896,
                "end": 2899
              },
              "expression": false,
              "start": 2884,
              "end": 2899
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2882,
            "end": 2899
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
              "start": 2904,
              "end": 2906
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
                        "start": 2908,
                        "end": 2909
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2908,
                        "end": 2909
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 2908,
                      "end": 2909
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
                        "start": 2911,
                        "end": 2912
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2911,
                        "end": 2912
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 2911,
                      "end": 2912
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
                        "start": 2914,
                        "end": 2915
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2914,
                        "end": 2915
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 2914,
                      "end": 2915
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2907,
                  "end": 2916
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2918,
                "end": 2921
              },
              "expression": false,
              "start": 2906,
              "end": 2921
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2904,
            "end": 2921
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
              "start": 2926,
              "end": 2928
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
                      "start": 2930,
                      "end": 2931
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2933,
                      "end": 2934
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2936,
                      "end": 2937
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2929,
                  "end": 2938
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2940,
                "end": 2943
              },
              "expression": false,
              "start": 2928,
              "end": 2943
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2926,
            "end": 2943
          }
        ],
        "start": 2876,
        "end": 2945
      },
      "abstract": false,
      "declare": false,
      "start": 2853,
      "end": 2945
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2957,
        "end": 2959
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
                  "start": 2961,
                  "end": 2962
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2961,
                  "end": 2962
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 2961,
                "end": 2962
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
                  "start": 2964,
                  "end": 2965
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2964,
                  "end": 2965
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 2964,
                "end": 2965
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 2960,
            "end": 2966
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
                  "start": 2971,
                  "end": 2972
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2974,
                  "end": 2975
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2971,
                "end": 2975
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
                  "start": 2977,
                  "end": 2978
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2980,
                  "end": 2981
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2977,
                "end": 2981
              }
            ],
            "start": 2969,
            "end": 2983
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 2960,
          "end": 2983
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2985,
        "end": 2988
      },
      "expression": false,
      "start": 2948,
      "end": 2988
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
          "start": 2989,
          "end": 2991
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2989,
        "end": 2993
      },
      "directive": null,
      "start": 2989,
      "end": 2994
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3371,
        "end": 3373
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
                "start": 3375,
                "end": 3376
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "number",
                "optional": false,
                "typeAnnotation": null,
                "start": 3378,
                "end": 3384
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 3375,
              "end": 3384
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 3374,
          "end": 3385
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3387,
        "end": 3390
      },
      "expression": false,
      "start": 3362,
      "end": 3390
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3430,
        "end": 3432
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
                "start": 3434,
                "end": 3435
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3434,
                "end": 3435
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 3434,
              "end": 3435
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
                    "start": 3440,
                    "end": 3441
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3443,
                      "end": 3449
                    },
                    "start": 3441,
                    "end": 3449
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3440,
                  "end": 3449
                }
              ],
              "start": 3438,
              "end": 3451
            },
            "start": 3436,
            "end": 3451
          },
          "start": 3433,
          "end": 3451
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3453,
        "end": 3456
      },
      "expression": false,
      "start": 3421,
      "end": 3456
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e3",
        "optional": false,
        "typeAnnotation": null,
        "start": 3487,
        "end": 3489
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
                "start": 3491,
                "end": 3492
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3491,
                "end": 3492
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 3491,
              "end": 3492
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
                    "start": 3497,
                    "end": 3498
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3501,
                      "end": 3507
                    },
                    "start": 3499,
                    "end": 3507
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3497,
                  "end": 3507
                }
              ],
              "start": 3495,
              "end": 3509
            },
            "start": 3493,
            "end": 3509
          },
          "start": 3490,
          "end": 3509
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3511,
        "end": 3514
      },
      "expression": false,
      "start": 3478,
      "end": 3514
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e4",
        "optional": false,
        "typeAnnotation": null,
        "start": 3562,
        "end": 3564
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
                "start": 3566,
                "end": 3567
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
                    "start": 3570,
                    "end": 3576
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "string",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3577,
                    "end": 3583
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "any",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3584,
                    "end": 3587
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 3569,
                "end": 3588
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 3566,
              "end": 3588
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 3565,
          "end": 3590
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3592,
        "end": 3595
      },
      "expression": false,
      "start": 3553,
      "end": 3595
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e5",
        "optional": false,
        "typeAnnotation": null,
        "start": 3636,
        "end": 3638
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
                "start": 3640,
                "end": 3641
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
                    "start": 3644,
                    "end": 3645
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3647,
                    "end": 3648
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3650,
                    "end": 3651
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 3643,
                "end": 3652
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 3640,
              "end": 3652
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
                    "start": 3657,
                    "end": 3658
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 3661,
                          "end": 3667
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 3669,
                          "end": 3675
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 3677,
                          "end": 3683
                        }
                      ],
                      "start": 3660,
                      "end": 3684
                    },
                    "start": 3658,
                    "end": 3684
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3657,
                  "end": 3684
                }
              ],
              "start": 3655,
              "end": 3686
            },
            "start": 3653,
            "end": 3686
          },
          "start": 3639,
          "end": 3686
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3688,
        "end": 3691
      },
      "expression": false,
      "start": 3627,
      "end": 3691
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 305,
  "end": 3722
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
    "start": 2171,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 2219,
    "end": 2221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 2268,
    "end": 2270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 2328,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2340,
    "end": 2348
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2348,
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
    "value": ")",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 2410,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2417,
    "end": 2418
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2422,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2430,
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
    "value": ",",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2434,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2441,
    "end": 2445
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2446,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2633,
    "end": 2641
  },
  {
    "type": "Identifier",
    "value": "d0",
    "start": 2642,
    "end": 2644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2646,
    "end": 2647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2653,
    "end": 2661
  },
  {
    "type": "Identifier",
    "value": "d0",
    "start": 2662,
    "end": 2664
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2664,
    "end": 2665
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2667,
    "end": 2668
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2669,
    "end": 2671
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2673,
    "end": 2674
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2675,
    "end": 2676
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2678,
    "end": 2687
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 2688,
    "end": 2690
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2691,
    "end": 2692
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 2697,
    "end": 2699
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2700,
    "end": 2701
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2701,
    "end": 2702
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2710,
    "end": 2711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 2717,
    "end": 2719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2722,
    "end": 2723
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2725,
    "end": 2726
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2727,
    "end": 2728
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2729,
    "end": 2730
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2730,
    "end": 2731
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2731,
    "end": 2732
  },
  {
    "type": "Identifier",
    "value": "e0",
    "start": 2737,
    "end": 2739
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2739,
    "end": 2740
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2740,
    "end": 2741
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2742,
    "end": 2743
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2745,
    "end": 2746
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2747,
    "end": 2748
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2749,
    "end": 2750
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2752,
    "end": 2753
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2755,
    "end": 2760
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 2761,
    "end": 2763
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 2764,
    "end": 2774
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 2775,
    "end": 2777
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2778,
    "end": 2779
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2784,
    "end": 2795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2795,
    "end": 2796
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2796,
    "end": 2797
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2800,
    "end": 2801
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 2806,
    "end": 2808
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2809,
    "end": 2810
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2811,
    "end": 2812
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2813,
    "end": 2814
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 2819,
    "end": 2821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2821,
    "end": 2822
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2822,
    "end": 2823
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2824,
    "end": 2825
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2826,
    "end": 2827
  },
  {
    "type": "Identifier",
    "value": "e0",
    "start": 2832,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2835,
    "end": 2836
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2836,
    "end": 2837
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2837,
    "end": 2838
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2839,
    "end": 2840
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2840,
    "end": 2841
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2844,
    "end": 2845
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2846,
    "end": 2847
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2850,
    "end": 2851
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2853,
    "end": 2858
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 2859,
    "end": 2861
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 2862,
    "end": 2872
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 2873,
    "end": 2875
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2876,
    "end": 2877
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 2882,
    "end": 2884
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2884,
    "end": 2885
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2886,
    "end": 2887
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2887,
    "end": 2888
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2889,
    "end": 2890
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2890,
    "end": 2891
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2892,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2894,
    "end": 2895
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2896,
    "end": 2897
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2898,
    "end": 2899
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 2904,
    "end": 2906
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2906,
    "end": 2907
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2907,
    "end": 2908
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2909,
    "end": 2910
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2911,
    "end": 2912
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2912,
    "end": 2913
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2914,
    "end": 2915
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2915,
    "end": 2916
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2918,
    "end": 2919
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2920,
    "end": 2921
  },
  {
    "type": "Identifier",
    "value": "e0",
    "start": 2926,
    "end": 2928
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2928,
    "end": 2929
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2934,
    "end": 2935
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2936,
    "end": 2937
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2937,
    "end": 2938
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2938,
    "end": 2939
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2942,
    "end": 2943
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2944,
    "end": 2945
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2948,
    "end": 2956
  },
  {
    "type": "Identifier",
    "value": "d5",
    "start": 2957,
    "end": 2959
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2959,
    "end": 2960
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2960,
    "end": 2961
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2962,
    "end": 2963
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2965,
    "end": 2966
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2967,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2969,
    "end": 2970
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2972,
    "end": 2973
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2974,
    "end": 2975
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2975,
    "end": 2976
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2978,
    "end": 2979
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2980,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2982,
    "end": 2983
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2983,
    "end": 2984
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2985,
    "end": 2986
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2987,
    "end": 2988
  },
  {
    "type": "Identifier",
    "value": "d5",
    "start": 2989,
    "end": 2991
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2991,
    "end": 2992
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2992,
    "end": 2993
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2993,
    "end": 2994
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3362,
    "end": 3370
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 3371,
    "end": 3373
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3373,
    "end": 3374
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3374,
    "end": 3375
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3375,
    "end": 3376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3376,
    "end": 3377
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3378,
    "end": 3384
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3384,
    "end": 3385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3385,
    "end": 3386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3387,
    "end": 3388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3389,
    "end": 3390
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3421,
    "end": 3429
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 3430,
    "end": 3432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3432,
    "end": 3433
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3433,
    "end": 3434
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3434,
    "end": 3435
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3435,
    "end": 3436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3436,
    "end": 3437
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3438,
    "end": 3439
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3440,
    "end": 3441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3441,
    "end": 3442
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3443,
    "end": 3449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3451,
    "end": 3452
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3453,
    "end": 3454
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3455,
    "end": 3456
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3478,
    "end": 3486
  },
  {
    "type": "Identifier",
    "value": "e3",
    "start": 3487,
    "end": 3489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3489,
    "end": 3490
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3490,
    "end": 3491
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3491,
    "end": 3492
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3492,
    "end": 3493
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3493,
    "end": 3494
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3495,
    "end": 3496
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3497,
    "end": 3498
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3498,
    "end": 3499
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3499,
    "end": 3500
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3501,
    "end": 3507
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3508,
    "end": 3509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3509,
    "end": 3510
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3511,
    "end": 3512
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3513,
    "end": 3514
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3553,
    "end": 3561
  },
  {
    "type": "Identifier",
    "value": "e4",
    "start": 3562,
    "end": 3564
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3564,
    "end": 3565
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3565,
    "end": 3566
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3566,
    "end": 3567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3567,
    "end": 3568
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3569,
    "end": 3570
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3570,
    "end": 3576
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3576,
    "end": 3577
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3577,
    "end": 3583
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3583,
    "end": 3584
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3584,
    "end": 3587
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3587,
    "end": 3588
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3589,
    "end": 3590
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3590,
    "end": 3591
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3592,
    "end": 3593
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3594,
    "end": 3595
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3627,
    "end": 3635
  },
  {
    "type": "Identifier",
    "value": "e5",
    "start": 3636,
    "end": 3638
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3638,
    "end": 3639
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3639,
    "end": 3640
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3640,
    "end": 3641
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3641,
    "end": 3642
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3643,
    "end": 3644
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3644,
    "end": 3645
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3645,
    "end": 3646
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3647,
    "end": 3648
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3648,
    "end": 3649
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3650,
    "end": 3651
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3651,
    "end": 3652
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3652,
    "end": 3653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3653,
    "end": 3654
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3655,
    "end": 3656
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3657,
    "end": 3658
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3658,
    "end": 3659
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3660,
    "end": 3661
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3661,
    "end": 3667
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3667,
    "end": 3668
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3669,
    "end": 3675
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3675,
    "end": 3676
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3677,
    "end": 3683
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3683,
    "end": 3684
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3685,
    "end": 3686
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3686,
    "end": 3687
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3688,
    "end": 3689
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3690,
    "end": 3691
  }
]
```
