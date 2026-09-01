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
        "name": "IFoo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
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
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 24
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
                "start": 28,
                "end": 34
              },
              "start": 26,
              "end": 34
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 22,
            "end": 35
          }
        ],
        "start": 16,
        "end": 37
      },
      "declare": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 47
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
            "name": "IFoo1",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 64
          },
          "typeArguments": null,
          "start": 59,
          "end": 64
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
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 115
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
                      "type": "Literal",
                      "value": "s",
                      "raw": "\"s\"",
                      "start": 135,
                      "end": 138
                    },
                    "start": 128,
                    "end": 139
                  }
                ],
                "start": 118,
                "end": 145
              },
              "expression": false,
              "start": 115,
              "end": 145
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 106,
            "end": 145
          }
        ],
        "start": 65,
        "end": 147
      },
      "abstract": false,
      "declare": false,
      "start": 39,
      "end": 147
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IFoo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 159,
        "end": 164
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
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 173
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 176,
                    "end": 182
                  },
                  "start": 175,
                  "end": 182
                },
                "start": 174,
                "end": 182
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 185,
                "end": 191
              },
              "start": 183,
              "end": 191
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 171,
            "end": 192
          }
        ],
        "start": 165,
        "end": 194
      },
      "declare": false,
      "start": 149,
      "end": 194
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
        "start": 202,
        "end": 204
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
            "name": "IFoo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 216,
            "end": 221
          },
          "typeArguments": null,
          "start": 216,
          "end": 221
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
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 271
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
                      "start": 274,
                      "end": 280
                    },
                    "start": 273,
                    "end": 280
                  },
                  "start": 272,
                  "end": 280
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 299,
                      "end": 300
                    },
                    "start": 292,
                    "end": 301
                  }
                ],
                "start": 282,
                "end": 307
              },
              "expression": false,
              "start": 271,
              "end": 307
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 262,
            "end": 307
          }
        ],
        "start": 222,
        "end": 309
      },
      "abstract": false,
      "declare": false,
      "start": 196,
      "end": 309
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IFoo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 321,
        "end": 326
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
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 335
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 337,
                "end": 343
              },
              "start": 335,
              "end": 343
            },
            "accessibility": null,
            "static": false,
            "start": 333,
            "end": 344
          }
        ],
        "start": 327,
        "end": 346
      },
      "declare": false,
      "start": 311,
      "end": 346
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
        "start": 354,
        "end": 356
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
            "name": "IFoo3",
            "optional": false,
            "typeAnnotation": null,
            "start": 368,
            "end": 373
          },
          "typeArguments": null,
          "start": 368,
          "end": 373
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 424,
              "end": 426
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 428,
                "end": 434
              },
              "start": 426,
              "end": 434
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 417,
            "end": 435
          }
        ],
        "start": 374,
        "end": 437
      },
      "abstract": false,
      "declare": false,
      "start": 348,
      "end": 437
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IFoo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 449,
        "end": 454
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
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 461,
              "end": 463
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 467,
                      "end": 468
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 472,
                              "end": 473
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 475,
                                "end": 481
                              },
                              "start": 473,
                              "end": 481
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 472,
                            "end": 482
                          }
                        ],
                        "start": 470,
                        "end": 484
                      },
                      "start": 468,
                      "end": 484
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 467,
                    "end": 485
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
                      "start": 486,
                      "end": 487
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 489,
                        "end": 495
                      },
                      "start": 487,
                      "end": 495
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 486,
                    "end": 496
                  }
                ],
                "start": 465,
                "end": 498
              },
              "start": 463,
              "end": 498
            },
            "accessibility": null,
            "static": false,
            "start": 461,
            "end": 499
          }
        ],
        "start": 455,
        "end": 501
      },
      "declare": false,
      "start": 439,
      "end": 501
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C4",
        "optional": false,
        "typeAnnotation": null,
        "start": 509,
        "end": 511
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
            "name": "IFoo4",
            "optional": false,
            "typeAnnotation": null,
            "start": 523,
            "end": 528
          },
          "typeArguments": null,
          "start": 523,
          "end": 528
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 579,
              "end": 581
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
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 585,
                      "end": 586
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
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 590,
                              "end": 591
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 593,
                                "end": 599
                              },
                              "start": 591,
                              "end": 599
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 590,
                            "end": 600
                          }
                        ],
                        "start": 588,
                        "end": 602
                      },
                      "start": 586,
                      "end": 602
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 585,
                    "end": 603
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 604,
                      "end": 605
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 607,
                        "end": 613
                      },
                      "start": 605,
                      "end": 613
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 604,
                    "end": 614
                  }
                ],
                "start": 583,
                "end": 616
              },
              "start": 581,
              "end": 616
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 572,
            "end": 617
          }
        ],
        "start": 529,
        "end": 619
      },
      "abstract": false,
      "declare": false,
      "start": 503,
      "end": 619
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "if1",
        "optional": false,
        "typeAnnotation": null,
        "start": 630,
        "end": 633
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFoo1",
                "optional": false,
                "typeAnnotation": null,
                "start": 637,
                "end": 642
              },
              "typeArguments": null,
              "start": 637,
              "end": 642
            },
            "start": 635,
            "end": 642
          },
          "start": 634,
          "end": 642
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 645,
          "end": 649
        },
        "start": 643,
        "end": 649
      },
      "body": null,
      "expression": false,
      "start": 621,
      "end": 650
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "if1",
        "optional": false,
        "typeAnnotation": null,
        "start": 660,
        "end": 663
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFoo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 667,
                "end": 672
              },
              "typeArguments": null,
              "start": 667,
              "end": 672
            },
            "start": 665,
            "end": 672
          },
          "start": 664,
          "end": 672
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 675,
          "end": 679
        },
        "start": 673,
        "end": 679
      },
      "body": null,
      "expression": false,
      "start": 651,
      "end": 680
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "if1",
        "optional": false,
        "typeAnnotation": null,
        "start": 690,
        "end": 693
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 697,
              "end": 700
            },
            "start": 695,
            "end": 700
          },
          "start": 694,
          "end": 700
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 702,
        "end": 705
      },
      "expression": false,
      "start": 681,
      "end": 705
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 714,
                  "end": 716
                },
                "typeArguments": null,
                "start": 714,
                "end": 716
              },
              "start": 712,
              "end": 716
            },
            "start": 710,
            "end": 716
          },
          "init": null,
          "definite": false,
          "start": 710,
          "end": 716
        }
      ],
      "declare": false,
      "start": 706,
      "end": 717
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 726,
                  "end": 728
                },
                "typeArguments": null,
                "start": 726,
                "end": 728
              },
              "start": 724,
              "end": 728
            },
            "start": 722,
            "end": 728
          },
          "init": null,
          "definite": false,
          "start": 722,
          "end": 728
        }
      ],
      "declare": false,
      "start": 718,
      "end": 729
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "if1",
          "optional": false,
          "typeAnnotation": null,
          "start": 730,
          "end": 733
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 734,
            "end": 736
          }
        ],
        "optional": false,
        "start": 730,
        "end": 737
      },
      "directive": null,
      "start": 730,
      "end": 738
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "of1",
        "optional": false,
        "typeAnnotation": null,
        "start": 750,
        "end": 753
      },
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 759,
                    "end": 760
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 764,
                            "end": 765
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 767,
                              "end": 773
                            },
                            "start": 765,
                            "end": 773
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 764,
                          "end": 774
                        }
                      ],
                      "start": 762,
                      "end": 776
                    },
                    "start": 760,
                    "end": 776
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 759,
                  "end": 777
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
                    "start": 778,
                    "end": 779
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 781,
                      "end": 787
                    },
                    "start": 779,
                    "end": 787
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 778,
                  "end": 788
                }
              ],
              "start": 757,
              "end": 790
            },
            "start": 755,
            "end": 790
          },
          "start": 754,
          "end": 790
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 793,
          "end": 799
        },
        "start": 791,
        "end": 799
      },
      "body": null,
      "expression": false,
      "start": 741,
      "end": 800
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "of1",
        "optional": false,
        "typeAnnotation": null,
        "start": 810,
        "end": 813
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 819,
                    "end": 820
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
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 824,
                            "end": 825
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 827,
                              "end": 833
                            },
                            "start": 825,
                            "end": 833
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 824,
                          "end": 834
                        }
                      ],
                      "start": 822,
                      "end": 836
                    },
                    "start": 820,
                    "end": 836
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 819,
                  "end": 837
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 838,
                    "end": 839
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 841,
                      "end": 847
                    },
                    "start": 839,
                    "end": 847
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 838,
                  "end": 848
                }
              ],
              "start": 817,
              "end": 850
            },
            "start": 815,
            "end": 850
          },
          "start": 814,
          "end": 850
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 853,
          "end": 859
        },
        "start": 851,
        "end": 859
      },
      "body": null,
      "expression": false,
      "start": 801,
      "end": 860
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "of1",
        "optional": false,
        "typeAnnotation": null,
        "start": 870,
        "end": 873
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 877,
              "end": 880
            },
            "start": 875,
            "end": 880
          },
          "start": 874,
          "end": 880
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 891,
              "end": 895
            },
            "start": 884,
            "end": 896
          }
        ],
        "start": 882,
        "end": 898
      },
      "expression": false,
      "start": 861,
      "end": 898
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "of1",
          "optional": false,
          "typeAnnotation": null,
          "start": 900,
          "end": 903
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
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 906,
                  "end": 907
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 909,
                  "end": 910
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 906,
                "end": 910
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
                  "start": 912,
                  "end": 913
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 915,
                  "end": 916
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 912,
                "end": 916
              }
            ],
            "start": 904,
            "end": 918
          }
        ],
        "optional": false,
        "start": 900,
        "end": 919
      },
      "directive": null,
      "start": 900,
      "end": 920
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 932,
        "end": 936
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 945,
                    "end": 951
                  },
                  "start": 944,
                  "end": 951
                },
                "start": 941,
                "end": 951
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 953,
                "end": 959
              },
              "start": 952,
              "end": 959
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 940,
            "end": 960
          }
        ],
        "start": 937,
        "end": 962
      },
      "declare": false,
      "start": 922,
      "end": 962
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 973,
        "end": 976
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 986,
                  "end": 990
                },
                "start": 983,
                "end": 990
              },
              "start": 980,
              "end": 990
            },
            "start": 979,
            "end": 990
          },
          "start": 977,
          "end": 990
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 992,
        "end": 997
      },
      "expression": false,
      "start": 964,
      "end": 997
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 1008,
        "end": 1011
      },
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
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IMap",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1025,
                        "end": 1029
                      },
                      "typeArguments": null,
                      "start": 1025,
                      "end": 1029
                    },
                    "start": 1024,
                    "end": 1029
                  },
                  "start": 1021,
                  "end": 1029
                },
                "init": null,
                "definite": false,
                "start": 1021,
                "end": 1029
              }
            ],
            "declare": false,
            "start": 1017,
            "end": 1030
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1032,
                "end": 1035
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "map",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1046,
                            "end": 1049
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "properties": [],
                            "start": 1052,
                            "end": 1054
                          },
                          "start": 1046,
                          "end": 1054
                        },
                        "directive": null,
                        "start": 1046,
                        "end": 1055
                      }
                    ],
                    "start": 1042,
                    "end": 1058
                  },
                  "id": null,
                  "generator": false,
                  "start": 1036,
                  "end": 1058
                }
              ],
              "optional": false,
              "start": 1032,
              "end": 1059
            },
            "directive": null,
            "start": 1032,
            "end": 1060
          }
        ],
        "start": 1014,
        "end": 1062
      },
      "expression": false,
      "start": 999,
      "end": 1062
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
            "name": "o1",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1074,
                      "end": 1075
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1079,
                              "end": 1080
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1082,
                                "end": 1088
                              },
                              "start": 1080,
                              "end": 1088
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1079,
                            "end": 1089
                          }
                        ],
                        "start": 1077,
                        "end": 1091
                      },
                      "start": 1075,
                      "end": 1091
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1074,
                    "end": 1092
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
                      "start": 1093,
                      "end": 1094
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1096,
                        "end": 1102
                      },
                      "start": 1094,
                      "end": 1102
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1093,
                    "end": 1103
                  }
                ],
                "start": 1072,
                "end": 1105
              },
              "start": 1070,
              "end": 1105
            },
            "start": 1068,
            "end": 1105
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
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1110,
                  "end": 1111
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1113,
                  "end": 1114
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1110,
                "end": 1114
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
                  "start": 1116,
                  "end": 1117
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1119,
                  "end": 1120
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1116,
                "end": 1120
              }
            ],
            "start": 1108,
            "end": 1122
          },
          "definite": false,
          "start": 1068,
          "end": 1122
        }
      ],
      "declare": false,
      "start": 1064,
      "end": 1123
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1129,
            "end": 1131
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1137,
                      "end": 1138
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1140,
                      "end": 1141
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1137,
                    "end": 1141
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
                      "start": 1143,
                      "end": 1144
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1146,
                      "end": 1147
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1143,
                    "end": 1147
                  }
                ],
                "start": 1135,
                "end": 1149
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
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1153,
                      "end": 1154
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1156,
                      "end": 1157
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1153,
                    "end": 1157
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
                      "start": 1159,
                      "end": 1160
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1162,
                      "end": 1163
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1159,
                    "end": 1163
                  }
                ],
                "start": 1151,
                "end": 1165
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
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1169,
                      "end": 1170
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1172,
                      "end": 1173
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1169,
                    "end": 1173
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1175,
                      "end": 1176
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1178,
                      "end": 1179
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1175,
                    "end": 1179
                  }
                ],
                "start": 1167,
                "end": 1181
              }
            ],
            "start": 1134,
            "end": 1182
          },
          "definite": false,
          "start": 1129,
          "end": 1182
        }
      ],
      "declare": false,
      "start": 1125,
      "end": 1183
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
            "name": "i1c1",
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
                        "type": "TSStringKeyword",
                        "start": 1203,
                        "end": 1209
                      },
                      "start": 1201,
                      "end": 1209
                    },
                    "start": 1199,
                    "end": 1210
                  }
                ],
                "start": 1197,
                "end": 1212
              },
              "start": 1195,
              "end": 1212
            },
            "start": 1191,
            "end": 1212
          },
          "init": {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 1215,
            "end": 1216
          },
          "definite": false,
          "start": 1191,
          "end": 1216
        }
      ],
      "declare": false,
      "start": 1187,
      "end": 1217
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
            "name": "fp1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1233,
                    "end": 1236
                  },
                  "start": 1231,
                  "end": 1236
                },
                "start": 1228,
                "end": 1236
              },
              "start": 1226,
              "end": 1236
            },
            "start": 1223,
            "end": 1236
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1239,
                "end": 1240
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1244,
              "end": 1245
            },
            "id": null,
            "generator": false,
            "start": 1239,
            "end": 1245
          },
          "definite": false,
          "start": 1223,
          "end": 1245
        }
      ],
      "declare": false,
      "start": 1219,
      "end": 1246
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1246
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
    "value": "IFoo1",
    "start": 10,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 22,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 28,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 39,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 45,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 48,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "IFoo1",
    "start": 59,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 106,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 113,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 128,
    "end": 134
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 135,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 149,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "IFoo2",
    "start": 159,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 171,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 176,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 185,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 196,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 202,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 205,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "IFoo2",
    "start": 216,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 262,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 269,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 274,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 292,
    "end": 298
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 308,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 311,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "IFoo3",
    "start": 321,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 333,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 337,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 345,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 348,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 354,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 357,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "IFoo3",
    "start": 368,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 374,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 417,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 424,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 428,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 436,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 439,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "IFoo4",
    "start": 449,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 461,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "a",
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
    "type": "Identifier",
    "value": "string",
    "start": 475,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "b",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 489,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 500,
    "end": 501
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 503,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 509,
    "end": 511
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 512,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "IFoo4",
    "start": 523,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 529,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 572,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 579,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 593,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 607,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 618,
    "end": 619
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 621,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "if1",
    "start": 630,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "IFoo1",
    "start": 637,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 643,
    "end": 644
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 645,
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
    "value": "function",
    "start": 651,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "if1",
    "start": 660,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "IFoo2",
    "start": 667,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 673,
    "end": 674
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 675,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 679,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 681,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "if1",
    "start": 690,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 697,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 704,
    "end": 705
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 706,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 710,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 714,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 716,
    "end": 717
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 718,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 722,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 726,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "if1",
    "start": 730,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 734,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 737,
    "end": 738
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 741,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "of1",
    "start": 750,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 767,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 781,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 793,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 799,
    "end": 800
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 801,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "of1",
    "start": 810,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 827,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "d",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 841,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 853,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 859,
    "end": 860
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 861,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "of1",
    "start": 870,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 877,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 882,
    "end": 883
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 884,
    "end": 890
  },
  {
    "type": "Null",
    "value": "null",
    "start": 891,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "of1",
    "start": 900,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 907,
    "end": 908
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 913,
    "end": 914
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 919,
    "end": 920
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 922,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "IMap",
    "start": 932,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 941,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 945,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 953,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 961,
    "end": 962
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 964,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 973,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 977,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 983,
    "end": 985
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 986,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 996,
    "end": 997
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 999,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1008,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1017,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 1021,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "IMap",
    "start": 1025,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1032,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1039,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 1046,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1064,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 1068,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1082,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1096,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1125,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1129,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1187,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "i1c1",
    "start": 1191,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1203,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1219,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "fp1",
    "start": 1223,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1231,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1233,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1241,
    "end": 1243
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1245,
    "end": 1246
  }
]
```
