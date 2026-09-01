__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "simpleVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 14
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
            "name": "anotherVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 32,
                "end": 35
              },
              "start": 30,
              "end": 35
            },
            "start": 20,
            "end": 35
          },
          "init": null,
          "definite": false,
          "start": 20,
          "end": 35
        }
      ],
      "declare": false,
      "start": 16,
      "end": 36
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
            "name": "varWithSimpleType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 60,
                "end": 66
              },
              "start": 58,
              "end": 66
            },
            "start": 41,
            "end": 66
          },
          "init": null,
          "definite": false,
          "start": 41,
          "end": 66
        }
      ],
      "declare": false,
      "start": 37,
      "end": 67
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
            "name": "varWithArrayType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 90,
                  "end": 96
                },
                "start": 90,
                "end": 98
              },
              "start": 88,
              "end": 98
            },
            "start": 72,
            "end": 98
          },
          "init": null,
          "definite": false,
          "start": 72,
          "end": 98
        }
      ],
      "declare": false,
      "start": 68,
      "end": 99
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
            "name": "varWithInitialValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 124
          },
          "init": {
            "type": "Literal",
            "value": 30,
            "raw": "30",
            "start": 127,
            "end": 129
          },
          "definite": false,
          "start": 105,
          "end": 129
        }
      ],
      "declare": false,
      "start": 101,
      "end": 130
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
            "name": "withComplicatedValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 156
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
                  "start": 161,
                  "end": 162
                },
                "value": {
                  "type": "Literal",
                  "value": 30,
                  "raw": "30",
                  "start": 164,
                  "end": 166
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 161,
                "end": 166
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
                  "start": 168,
                  "end": 169
                },
                "value": {
                  "type": "Literal",
                  "value": 70,
                  "raw": "70",
                  "start": 171,
                  "end": 173
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 168,
                "end": 173
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "desc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 175,
                  "end": 179
                },
                "value": {
                  "type": "Literal",
                  "value": "position",
                  "raw": "\"position\"",
                  "start": 181,
                  "end": 191
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 175,
                "end": 191
              }
            ],
            "start": 159,
            "end": 193
          },
          "definite": false,
          "start": 136,
          "end": 193
        }
      ],
      "declare": false,
      "start": 132,
      "end": 194
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
            "name": "declaredVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 208,
            "end": 219
          },
          "init": null,
          "definite": false,
          "start": 208,
          "end": 219
        }
      ],
      "declare": true,
      "start": 196,
      "end": 220
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
            "name": "declareVar2",
            "optional": false,
            "typeAnnotation": null,
            "start": 233,
            "end": 244
          },
          "init": null,
          "definite": false,
          "start": 233,
          "end": 244
        }
      ],
      "declare": true,
      "start": 221,
      "end": 244
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
            "name": "declaredVar3",
            "optional": false,
            "typeAnnotation": null,
            "start": 258,
            "end": 270
          },
          "init": null,
          "definite": false,
          "start": 258,
          "end": 270
        }
      ],
      "declare": true,
      "start": 246,
      "end": 271
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
            "name": "deckareVarWithType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 304,
                "end": 310
              },
              "start": 302,
              "end": 310
            },
            "start": 284,
            "end": 310
          },
          "init": null,
          "definite": false,
          "start": 284,
          "end": 310
        }
      ],
      "declare": true,
      "start": 272,
      "end": 311
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
            "name": "arrayVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 327,
                  "end": 333
                },
                "start": 327,
                "end": 335
              },
              "start": 325,
              "end": 335
            },
            "start": 317,
            "end": 335
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 339,
                "end": 342
              },
              {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 344,
                "end": 347
              }
            ],
            "start": 338,
            "end": 348
          },
          "definite": false,
          "start": 317,
          "end": 348
        }
      ],
      "declare": false,
      "start": 313,
      "end": 349
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
            "name": "complicatedArrayVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
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
                        "start": 378,
                        "end": 379
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 381,
                          "end": 387
                        },
                        "start": 379,
                        "end": 387
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 378,
                      "end": 388
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
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
                      "end": 399
                    }
                  ],
                  "start": 376,
                  "end": 401
                },
                "start": 376,
                "end": 403
              },
              "start": 374,
              "end": 403
            },
            "start": 355,
            "end": 403
          },
          "init": null,
          "definite": false,
          "start": 355,
          "end": 403
        }
      ],
      "declare": false,
      "start": 351,
      "end": 405
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "complicatedArrayVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 406,
            "end": 425
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 426,
            "end": 430
          },
          "optional": false,
          "computed": false,
          "start": 406,
          "end": 430
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
                  "start": 433,
                  "end": 434
                },
                "value": {
                  "type": "Literal",
                  "value": 30,
                  "raw": "30",
                  "start": 436,
                  "end": 438
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 433,
                "end": 438
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
                  "start": 440,
                  "end": 441
                },
                "value": {
                  "type": "Literal",
                  "value": "hello world",
                  "raw": "'hello world'",
                  "start": 444,
                  "end": 457
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 440,
                "end": 457
              }
            ],
            "start": 431,
            "end": 459
          }
        ],
        "optional": false,
        "start": 406,
        "end": 460
      },
      "directive": null,
      "start": 406,
      "end": 461
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
            "name": "n1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
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
                            "start": 477,
                            "end": 483
                          },
                          "start": 475,
                          "end": 483
                        },
                        "start": 474,
                        "end": 483
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 486,
                        "end": 492
                      },
                      "start": 484,
                      "end": 492
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 473,
                    "end": 493
                  }
                ],
                "start": 471,
                "end": 495
              },
              "start": 469,
              "end": 495
            },
            "start": 467,
            "end": 495
          },
          "init": null,
          "definite": false,
          "start": 467,
          "end": 495
        }
      ],
      "declare": false,
      "start": 463,
      "end": 496
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "new",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 516,
                      "end": 519
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 525,
                        "end": 528
                      },
                      "start": 523,
                      "end": 528
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 516,
                    "end": 529
                  }
                ],
                "start": 506,
                "end": 535
              },
              "start": 504,
              "end": 535
            },
            "start": 502,
            "end": 535
          },
          "init": null,
          "definite": false,
          "start": 502,
          "end": 535
        }
      ],
      "declare": false,
      "start": 498,
      "end": 535
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 550,
                      "end": 553
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
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
                              "start": 569,
                              "end": 570
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 572,
                                "end": 578
                              },
                              "start": 570,
                              "end": 578
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 569,
                            "end": 579
                          }
                        ],
                        "start": 559,
                        "end": 585
                      },
                      "start": 557,
                      "end": 585
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 550,
                    "end": 586
                  }
                ],
                "start": 544,
                "end": 588
              },
              "start": 542,
              "end": 588
            },
            "start": 541,
            "end": 588
          },
          "init": null,
          "definite": false,
          "start": 541,
          "end": 588
        }
      ],
      "declare": false,
      "start": 537,
      "end": 588
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
            "name": "d3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 604,
                      "end": 607
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
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
                              "start": 621,
                              "end": 622
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 624,
                                "end": 630
                              },
                              "start": 622,
                              "end": 630
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 621,
                            "end": 631
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 640,
                              "end": 641
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 643,
                                "end": 649
                              },
                              "start": 641,
                              "end": 649
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 640,
                            "end": 650
                          }
                        ],
                        "start": 611,
                        "end": 656
                      },
                      "start": 609,
                      "end": 656
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 604,
                    "end": 657
                  }
                ],
                "start": 598,
                "end": 659
              },
              "start": 596,
              "end": 659
            },
            "start": 594,
            "end": 659
          },
          "init": null,
          "definite": false,
          "start": 594,
          "end": 659
        }
      ],
      "declare": false,
      "start": 590,
      "end": 659
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
            "name": "d2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 675,
                      "end": 678
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
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
                              "start": 693,
                              "end": 694
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 696,
                                "end": 702
                              },
                              "start": 694,
                              "end": 702
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 693,
                            "end": 703
                          }
                        ],
                        "start": 683,
                        "end": 709
                      },
                      "start": 681,
                      "end": 709
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 675,
                    "end": 710
                  }
                ],
                "start": 669,
                "end": 712
              },
              "start": 667,
              "end": 712
            },
            "start": 665,
            "end": 712
          },
          "init": null,
          "definite": false,
          "start": 665,
          "end": 712
        }
      ],
      "declare": false,
      "start": 661,
      "end": 712
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
            "name": "n2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 732,
                        "end": 736
                      },
                      "start": 730,
                      "end": 736
                    },
                    "start": 728,
                    "end": 737
                  }
                ],
                "start": 722,
                "end": 739
              },
              "start": 720,
              "end": 739
            },
            "start": 718,
            "end": 739
          },
          "init": null,
          "definite": false,
          "start": 718,
          "end": 739
        }
      ],
      "declare": false,
      "start": 714,
      "end": 739
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
            "name": "n4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 758,
                          "end": 762
                        },
                        "start": 756,
                        "end": 762
                      },
                      "start": 754,
                      "end": 763
                    }
                  ],
                  "start": 748,
                  "end": 765
                },
                "start": 748,
                "end": 767
              },
              "start": 746,
              "end": 767
            },
            "start": 744,
            "end": 767
          },
          "init": null,
          "definite": false,
          "start": 744,
          "end": 767
        }
      ],
      "declare": false,
      "start": 740,
      "end": 768
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
            "name": "d4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 784,
                      "end": 787
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
                            "type": "TSStringKeyword",
                            "start": 791,
                            "end": 797
                          },
                          "start": 789,
                          "end": 797
                        },
                        "start": 788,
                        "end": 797
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
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
                                  "start": 804,
                                  "end": 805
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 807,
                                    "end": 813
                                  },
                                  "start": 805,
                                  "end": 813
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 804,
                                "end": 814
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 815,
                                  "end": 816
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 818,
                                    "end": 824
                                  },
                                  "start": 816,
                                  "end": 824
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 815,
                                "end": 825
                              }
                            ],
                            "start": 802,
                            "end": 827
                          },
                          "start": 800,
                          "end": 827
                        },
                        "start": 799,
                        "end": 827
                      }
                    ],
                    "returnType": {
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
                              "start": 840,
                              "end": 841
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 843,
                                "end": 849
                              },
                              "start": 841,
                              "end": 849
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 840,
                            "end": 850
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 859,
                              "end": 860
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 862,
                                "end": 868
                              },
                              "start": 860,
                              "end": 868
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 859,
                            "end": 869
                          }
                        ],
                        "start": 830,
                        "end": 875
                      },
                      "start": 828,
                      "end": 875
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 784,
                    "end": 876
                  }
                ],
                "start": 778,
                "end": 878
              },
              "start": 776,
              "end": 878
            },
            "start": 774,
            "end": 878
          },
          "init": null,
          "definite": false,
          "start": 774,
          "end": 878
        }
      ],
      "declare": false,
      "start": 770,
      "end": 878
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 890,
        "end": 892
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 911,
                    "end": 912
                  },
                  "init": null,
                  "definite": false,
                  "start": 911,
                  "end": 912
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 918,
                        "end": 924
                      },
                      "start": 916,
                      "end": 924
                    },
                    "start": 914,
                    "end": 924
                  },
                  "init": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 927,
                    "end": 929
                  },
                  "definite": false,
                  "start": 914,
                  "end": 929
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 931,
                    "end": 932
                  },
                  "init": null,
                  "definite": false,
                  "start": 931,
                  "end": 932
                }
              ],
              "declare": false,
              "start": 907,
              "end": 933
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 900,
            "end": 933
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
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 942,
                  "end": 944
                },
                "init": null,
                "definite": false,
                "start": 942,
                "end": 944
              }
            ],
            "declare": false,
            "start": 938,
            "end": 945
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
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 954,
                  "end": 956
                },
                "init": null,
                "definite": false,
                "start": 954,
                "end": 956
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b22",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 963,
                      "end": 969
                    },
                    "start": 961,
                    "end": 969
                  },
                  "start": 958,
                  "end": 969
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 972,
                  "end": 974
                },
                "definite": false,
                "start": 958,
                "end": 974
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b222",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 976,
                  "end": 980
                },
                "init": null,
                "definite": false,
                "start": 976,
                "end": 980
              }
            ],
            "declare": false,
            "start": 950,
            "end": 981
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
                  "name": "m3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 990,
                  "end": 992
                },
                "init": null,
                "definite": false,
                "start": 990,
                "end": 992
              }
            ],
            "declare": false,
            "start": 986,
            "end": 993
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
              "start": 1005,
              "end": 1006
            },
            "typeParameters": null,
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
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1017,
                    "end": 1028
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
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1037,
                          "end": 1038
                        },
                        "readonly": false,
                        "static": false,
                        "start": 1030,
                        "end": 1038
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1040,
                      "end": 1051
                    },
                    "expression": false,
                    "start": 1029,
                    "end": 1051
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1017,
                  "end": 1051
                }
              ],
              "start": 1007,
              "end": 1057
            },
            "abstract": false,
            "declare": false,
            "start": 999,
            "end": 1057
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1076,
                "end": 1078
              },
              "typeParameters": null,
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
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1089,
                      "end": 1100
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
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1109,
                            "end": 1110
                          },
                          "readonly": false,
                          "static": false,
                          "start": 1102,
                          "end": 1110
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1112,
                        "end": 1123
                      },
                      "expression": false,
                      "start": 1101,
                      "end": 1123
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1089,
                    "end": 1123
                  }
                ],
                "start": 1079,
                "end": 1129
              },
              "abstract": false,
              "declare": false,
              "start": 1070,
              "end": 1129
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1063,
            "end": 1129
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
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1138,
                  "end": 1139
                },
                "init": null,
                "definite": false,
                "start": 1138,
                "end": 1139
              }
            ],
            "declare": false,
            "start": 1134,
            "end": 1140
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
                  "name": "d1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1157,
                  "end": 1159
                },
                "init": null,
                "definite": false,
                "start": 1157,
                "end": 1159
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1161,
                  "end": 1163
                },
                "init": null,
                "definite": false,
                "start": 1161,
                "end": 1163
              }
            ],
            "declare": true,
            "start": 1145,
            "end": 1164
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
                  "name": "b23",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1173,
                  "end": 1176
                },
                "init": null,
                "definite": false,
                "start": 1173,
                "end": 1176
              }
            ],
            "declare": false,
            "start": 1169,
            "end": 1177
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1194,
                  "end": 1196
                },
                "init": null,
                "definite": false,
                "start": 1194,
                "end": 1196
              }
            ],
            "declare": true,
            "start": 1182,
            "end": 1197
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mE",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1213,
                    "end": 1215
                  },
                  "init": null,
                  "definite": false,
                  "start": 1213,
                  "end": 1215
                }
              ],
              "declare": false,
              "start": 1209,
              "end": 1216
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1202,
            "end": 1216
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d1E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1240,
                    "end": 1243
                  },
                  "init": null,
                  "definite": false,
                  "start": 1240,
                  "end": 1243
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d2E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1245,
                    "end": 1248
                  },
                  "init": null,
                  "definite": false,
                  "start": 1245,
                  "end": 1248
                }
              ],
              "declare": true,
              "start": 1228,
              "end": 1249
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1221,
            "end": 1249
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b2E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1265,
                    "end": 1268
                  },
                  "init": null,
                  "definite": false,
                  "start": 1265,
                  "end": 1268
                }
              ],
              "declare": false,
              "start": 1261,
              "end": 1269
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1254,
            "end": 1269
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v1E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1293,
                    "end": 1296
                  },
                  "init": null,
                  "definite": false,
                  "start": 1293,
                  "end": 1296
                }
              ],
              "declare": true,
              "start": 1281,
              "end": 1297
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1274,
            "end": 1297
          }
        ],
        "start": 893,
        "end": 1299
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 880,
      "end": 1299
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
            "name": "a22",
            "optional": false,
            "typeAnnotation": null,
            "start": 1305,
            "end": 1308
          },
          "init": null,
          "definite": false,
          "start": 1305,
          "end": 1308
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b22",
            "optional": false,
            "typeAnnotation": null,
            "start": 1310,
            "end": 1313
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 1316,
            "end": 1318
          },
          "definite": false,
          "start": 1310,
          "end": 1318
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c22",
            "optional": false,
            "typeAnnotation": null,
            "start": 1320,
            "end": 1323
          },
          "init": {
            "type": "Literal",
            "value": 30,
            "raw": "30",
            "start": 1326,
            "end": 1328
          },
          "definite": false,
          "start": 1320,
          "end": 1328
        }
      ],
      "declare": false,
      "start": 1301,
      "end": 1329
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
            "name": "nn",
            "optional": false,
            "typeAnnotation": null,
            "start": 1334,
            "end": 1336
          },
          "init": null,
          "definite": false,
          "start": 1334,
          "end": 1336
        }
      ],
      "declare": false,
      "start": 1330,
      "end": 1337
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
            "name": "da1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1351,
            "end": 1354
          },
          "init": null,
          "definite": false,
          "start": 1351,
          "end": 1354
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "da2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1356,
            "end": 1359
          },
          "init": null,
          "definite": false,
          "start": 1356,
          "end": 1359
        }
      ],
      "declare": true,
      "start": 1339,
      "end": 1360
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
            "name": "normalVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 1365,
            "end": 1374
          },
          "init": null,
          "definite": false,
          "start": 1365,
          "end": 1374
        }
      ],
      "declare": false,
      "start": 1361,
      "end": 1375
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
            "name": "dv1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1388,
            "end": 1391
          },
          "init": null,
          "definite": false,
          "start": 1388,
          "end": 1391
        }
      ],
      "declare": true,
      "start": 1376,
      "end": 1392
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
            "name": "xl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1397,
            "end": 1399
          },
          "init": null,
          "definite": false,
          "start": 1397,
          "end": 1399
        }
      ],
      "declare": false,
      "start": 1393,
      "end": 1400
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1405,
            "end": 1406
          },
          "init": null,
          "definite": false,
          "start": 1405,
          "end": 1406
        }
      ],
      "declare": false,
      "start": 1401,
      "end": 1407
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 1412,
            "end": 1413
          },
          "init": null,
          "definite": false,
          "start": 1412,
          "end": 1413
        }
      ],
      "declare": false,
      "start": 1408,
      "end": 1414
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1425,
        "end": 1428
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1429,
          "end": 1431
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1443,
                  "end": 1444
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 1447,
                  "end": 1449
                },
                "definite": false,
                "start": 1443,
                "end": 1449
              }
            ],
            "declare": false,
            "start": 1439,
            "end": 1450
          }
        ],
        "start": 1433,
        "end": 1452
      },
      "expression": false,
      "start": 1416,
      "end": 1452
    },
    {
      "type": "ForStatement",
      "init": {
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
              "typeAnnotation": null,
              "start": 1463,
              "end": 1464
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1467,
              "end": 1468
            },
            "definite": false,
            "start": 1463,
            "end": 1468
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null,
              "start": 1470,
              "end": 1471
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1474,
              "end": 1475
            },
            "definite": false,
            "start": 1470,
            "end": 1475
          }
        ],
        "declare": false,
        "start": 1459,
        "end": 1475
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1477,
          "end": 1478
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 1481,
          "end": 1483
        },
        "start": 1477,
        "end": 1483
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1485,
          "end": 1486
        },
        "start": 1485,
        "end": 1488
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null,
                "start": 1496,
                "end": 1497
              },
              "start": 1496,
              "end": 1499
            },
            "directive": null,
            "start": 1496,
            "end": 1500
          }
        ],
        "start": 1490,
        "end": 1502
      },
      "start": 1454,
      "end": 1502
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 1514,
              "end": 1515
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1518,
              "end": 1519
            },
            "definite": false,
            "start": 1514,
            "end": 1519
          }
        ],
        "declare": false,
        "start": 1510,
        "end": 1519
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 1521,
          "end": 1522
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 30,
          "raw": "30",
          "start": 1525,
          "end": 1527
        },
        "start": 1521,
        "end": 1527
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 1529,
          "end": 1530
        },
        "start": 1529,
        "end": 1532
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 1540,
                "end": 1541
              },
              "start": 1540,
              "end": 1543
            },
            "directive": null,
            "start": 1540,
            "end": 1544
          }
        ],
        "start": 1534,
        "end": 1546
      },
      "start": 1505,
      "end": 1546
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1551,
            "end": 1552
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 1555,
            "end": 1557
          },
          "definite": false,
          "start": 1551,
          "end": 1557
        }
      ],
      "declare": false,
      "start": 1547,
      "end": 1558
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1558
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "simpleVar",
    "start": 4,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 16,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "anotherVar",
    "start": 20,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 32,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 37,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "varWithSimpleType",
    "start": 41,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 68,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "varWithArrayType",
    "start": 72,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 90,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 101,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "varWithInitialValue",
    "start": 105,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 125,
    "end": 126
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 127,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 132,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "withComplicatedValue",
    "start": 136,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "x",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 164,
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
    "value": "y",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 169,
    "end": 170
  },
  {
    "type": "Numeric",
    "value": "70",
    "start": 171,
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
    "value": "desc",
    "start": 175,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "String",
    "value": "\"position\"",
    "start": 181,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 196,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 204,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "declaredVar",
    "start": 208,
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
    "start": 221,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 229,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "declareVar2",
    "start": 233,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 246,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 254,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "declaredVar3",
    "start": 258,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 272,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 280,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "deckareVarWithType",
    "start": 284,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 304,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 313,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "arrayVar",
    "start": 317,
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
    "value": "[",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 338,
    "end": 339
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 339,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 342,
    "end": 343
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 344,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 348,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 351,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "complicatedArrayVar",
    "start": 355,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 376,
    "end": 377
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
    "value": "number",
    "start": 381,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": ";",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "complicatedArrayVar",
    "start": 406,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 426,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435
  },
  {
    "type": "Numeric",
    "value": "30",
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
    "value": "y",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443
  },
  {
    "type": "String",
    "value": "'hello world'",
    "start": 444,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 460,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 463,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "n1",
    "start": 467,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 477,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 486,
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
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 498,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "new",
    "start": 516,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 525,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 534,
    "end": 535
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 537,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 550,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 572,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "var",
    "start": 590,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 594,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 604,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 624,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 643,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 658,
    "end": 659
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 661,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 665,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 675,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 696,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 711,
    "end": 712
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 714,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "n2",
    "start": 718,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 730,
    "end": 731
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 732,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 738,
    "end": 739
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 740,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "n4",
    "start": 744,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 756,
    "end": 757
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 758,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 767,
    "end": 768
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 770,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 774,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 784,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 791,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 807,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 818,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 830,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 843,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 862,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 880,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 890,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 893,
    "end": 894
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 900,
    "end": 906
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 907,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 912,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 914,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 918,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 925,
    "end": 926
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 927,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 929,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 932,
    "end": 933
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 938,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 942,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 944,
    "end": 945
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 950,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 954,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 956,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "b22",
    "start": 958,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 963,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 970,
    "end": 971
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 972,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "b222",
    "start": 976,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 980,
    "end": 981
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 986,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 990,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 992,
    "end": 993
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 999,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1017,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1030,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1040,
    "end": 1041
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
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1063,
    "end": 1069
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1070,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 1076,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1089,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1102,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1134,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1145,
    "end": 1152
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1153,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 1157,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 1161,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1169,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "b23",
    "start": 1173,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1182,
    "end": 1189
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1190,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 1194,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1202,
    "end": 1208
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1209,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "mE",
    "start": 1213,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1221,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1228,
    "end": 1235
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1236,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "d1E",
    "start": 1240,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "d2E",
    "start": 1245,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1254,
    "end": 1260
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1261,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "b2E",
    "start": 1265,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1274,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1281,
    "end": 1288
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1289,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "v1E",
    "start": 1293,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1301,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "a22",
    "start": 1305,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "b22",
    "start": 1310,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1316,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "c22",
    "start": 1320,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 1326,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1330,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "nn",
    "start": 1334,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1339,
    "end": 1346
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1347,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "da1",
    "start": 1351,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "da2",
    "start": 1356,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1361,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "normalVar",
    "start": 1365,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1376,
    "end": 1383
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1384,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "dv1",
    "start": 1388,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1393,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "xl",
    "start": 1397,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1401,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1408,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1416,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1425,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1429,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1439,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1447,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1454,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1459,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1481,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1486,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1497,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1505,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1510,
    "end": 1513
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 1525,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1530,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1541,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1547,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1555,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1557,
    "end": 1558
  }
]
```
