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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 227,
        "end": 230
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
              "start": 231,
              "end": 232
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 231,
            "end": 232
          }
        ],
        "start": 230,
        "end": 233
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
                "start": 237,
                "end": 238
              },
              "typeArguments": null,
              "start": 237,
              "end": 238
            },
            "start": 235,
            "end": 238
          },
          "start": 234,
          "end": 238
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
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
                "start": 243,
                "end": 244
              },
              "typeArguments": null,
              "start": 243,
              "end": 244
            },
            "start": 241,
            "end": 244
          },
          "start": 240,
          "end": 244
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
                  "name": "r",
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
                        "start": 259,
                        "end": 260
                      },
                      "typeArguments": null,
                      "start": 259,
                      "end": 260
                    },
                    "start": 257,
                    "end": 260
                  },
                  "start": 256,
                  "end": 260
                },
                "init": null,
                "definite": false,
                "start": 256,
                "end": 260
              }
            ],
            "declare": false,
            "start": 252,
            "end": 261
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 273,
              "end": 274
            },
            "start": 266,
            "end": 275
          }
        ],
        "start": 246,
        "end": 277
      },
      "expression": false,
      "start": 218,
      "end": 277
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
            "name": "a",
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
                      "start": 288,
                      "end": 289
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 291,
                        "end": 297
                      },
                      "start": 289,
                      "end": 297
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 288,
                    "end": 298
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 299,
                      "end": 300
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 303,
                        "end": 309
                      },
                      "start": 301,
                      "end": 309
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 299,
                    "end": 310
                  }
                ],
                "start": 286,
                "end": 312
              },
              "start": 284,
              "end": 312
            },
            "start": 283,
            "end": 312
          },
          "init": null,
          "definite": false,
          "start": 283,
          "end": 312
        }
      ],
      "declare": false,
      "start": 279,
      "end": 313
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
                      "start": 323,
                      "end": 324
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 326,
                        "end": 332
                      },
                      "start": 324,
                      "end": 332
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 323,
                    "end": 333
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 334,
                      "end": 335
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 338,
                        "end": 344
                      },
                      "start": 336,
                      "end": 344
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 334,
                    "end": 345
                  }
                ],
                "start": 321,
                "end": 347
              },
              "start": 319,
              "end": 347
            },
            "start": 318,
            "end": 347
          },
          "init": null,
          "definite": false,
          "start": 318,
          "end": 347
        }
      ],
      "declare": false,
      "start": 314,
      "end": 348
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 354,
            "end": 355
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 358,
              "end": 361
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 362,
                "end": 363
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 365,
                "end": 366
              }
            ],
            "optional": false,
            "start": 358,
            "end": 367
          },
          "definite": false,
          "start": 354,
          "end": 367
        }
      ],
      "declare": false,
      "start": 350,
      "end": 368
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 404,
            "end": 406
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 409,
              "end": 412
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 413,
                "end": 414
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 416,
                "end": 417
              }
            ],
            "optional": false,
            "start": 409,
            "end": 418
          },
          "definite": false,
          "start": 404,
          "end": 418
        }
      ],
      "declare": false,
      "start": 400,
      "end": 419
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
                      "start": 461,
                      "end": 462
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 464,
                        "end": 470
                      },
                      "start": 462,
                      "end": 470
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 461,
                    "end": 471
                  }
                ],
                "start": 459,
                "end": 473
              },
              "start": 457,
              "end": 473
            },
            "start": 456,
            "end": 473
          },
          "init": null,
          "definite": false,
          "start": 456,
          "end": 473
        }
      ],
      "declare": false,
      "start": 452,
      "end": 474
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
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 484,
                      "end": 485
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 488,
                        "end": 494
                      },
                      "start": 486,
                      "end": 494
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 484,
                    "end": 495
                  }
                ],
                "start": 482,
                "end": 497
              },
              "start": 480,
              "end": 497
            },
            "start": 479,
            "end": 497
          },
          "init": null,
          "definite": false,
          "start": 479,
          "end": 497
        }
      ],
      "declare": false,
      "start": 475,
      "end": 498
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 504,
            "end": 506
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 509,
              "end": 512
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 513,
                "end": 514
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 516,
                "end": 517
              }
            ],
            "optional": false,
            "start": 509,
            "end": 518
          },
          "definite": false,
          "start": 504,
          "end": 518
        }
      ],
      "declare": false,
      "start": 500,
      "end": 519
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 555,
            "end": 557
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 560,
              "end": 563
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 564,
                "end": 565
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 567,
                "end": 568
              }
            ],
            "optional": false,
            "start": 560,
            "end": 569
          },
          "definite": false,
          "start": 555,
          "end": 569
        }
      ],
      "declare": false,
      "start": 551,
      "end": 570
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 595,
            "end": 597
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 600,
              "end": 603
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 604,
                "end": 605
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 607,
                "end": 608
              }
            ],
            "optional": false,
            "start": 600,
            "end": 609
          },
          "definite": false,
          "start": 595,
          "end": 609
        }
      ],
      "declare": false,
      "start": 591,
      "end": 610
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 635,
            "end": 637
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 640,
              "end": 643
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 644,
                "end": 645
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 647,
                "end": 648
              }
            ],
            "optional": false,
            "start": 640,
            "end": 649
          },
          "definite": false,
          "start": 635,
          "end": 649
        }
      ],
      "declare": false,
      "start": 631,
      "end": 650
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 676,
            "end": 678
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 681,
              "end": 684
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 685,
                "end": 686
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 688,
                "end": 689
              }
            ],
            "optional": false,
            "start": 681,
            "end": 690
          },
          "definite": false,
          "start": 676,
          "end": 690
        }
      ],
      "declare": false,
      "start": 672,
      "end": 691
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 716,
            "end": 718
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 721,
              "end": 724
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 725,
                "end": 726
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 728,
                "end": 729
              }
            ],
            "optional": false,
            "start": 721,
            "end": 730
          },
          "definite": false,
          "start": 716,
          "end": 730
        }
      ],
      "declare": false,
      "start": 712,
      "end": 731
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
            "name": "s1",
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 765,
                          "end": 771
                        },
                        "typeArguments": null,
                        "start": 765,
                        "end": 771
                      },
                      "start": 763,
                      "end": 771
                    },
                    "start": 762,
                    "end": 771
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 776,
                    "end": 782
                  },
                  "start": 773,
                  "end": 782
                },
                "start": 761,
                "end": 782
              },
              "start": 759,
              "end": 782
            },
            "start": 757,
            "end": 782
          },
          "init": null,
          "definite": false,
          "start": 757,
          "end": 782
        }
      ],
      "declare": false,
      "start": 753,
      "end": 783
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
            "name": "s2",
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 796,
                        "end": 802
                      },
                      "start": 794,
                      "end": 802
                    },
                    "start": 793,
                    "end": 802
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 807,
                    "end": 813
                  },
                  "start": 804,
                  "end": 813
                },
                "start": 792,
                "end": 813
              },
              "start": 790,
              "end": 813
            },
            "start": 788,
            "end": 813
          },
          "init": null,
          "definite": false,
          "start": 788,
          "end": 813
        }
      ],
      "declare": false,
      "start": 784,
      "end": 814
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
            "name": "r7",
            "optional": false,
            "typeAnnotation": null,
            "start": 820,
            "end": 822
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 825,
              "end": 828
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null,
                "start": 829,
                "end": 831
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 833,
                "end": 835
              }
            ],
            "optional": false,
            "start": 825,
            "end": 836
          },
          "definite": false,
          "start": 820,
          "end": 836
        }
      ],
      "declare": false,
      "start": 816,
      "end": 837
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
            "name": "r8",
            "optional": false,
            "typeAnnotation": null,
            "start": 868,
            "end": 870
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 873,
              "end": 876
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 877,
                "end": 879
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null,
                "start": 881,
                "end": 883
              }
            ],
            "optional": false,
            "start": 873,
            "end": 884
          },
          "definite": false,
          "start": 868,
          "end": 884
        }
      ],
      "declare": false,
      "start": 864,
      "end": 885
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 218,
  "end": 911
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 218,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 227,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 252,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 266,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 279,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 291,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 303,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 314,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 326,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 338,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 350,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 358,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 400,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 404,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 409,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 452,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 464,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 475,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "number",
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
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 497,
    "end": 498
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 500,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 504,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 509,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": ")",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 518,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 551,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 555,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 560,
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
    "value": "x",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 569,
    "end": 570
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 591,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 595,
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
    "value": "foo",
    "start": 600,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": ";",
    "start": 609,
    "end": 610
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 631,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 635,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 640,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 649,
    "end": 650
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 672,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 676,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 681,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 690,
    "end": 691
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 712,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 716,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 721,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ";",
    "start": 730,
    "end": 731
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 753,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 757,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 765,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 773,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 776,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 782,
    "end": 783
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 784,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 788,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 796,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 804,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "string",
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
    "type": "Keyword",
    "value": "var",
    "start": 816,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 820,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 825,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 829,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 833,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 836,
    "end": 837
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 864,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 868,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 873,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 877,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 879,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 881,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 884,
    "end": 885
  }
]
```
