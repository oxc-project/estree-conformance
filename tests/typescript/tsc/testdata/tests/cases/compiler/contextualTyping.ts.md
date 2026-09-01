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
        "name": "IFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 36
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 44
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 46,
                "end": 52
              },
              "start": 44,
              "end": 52
            },
            "accessibility": null,
            "static": false,
            "start": 43,
            "end": 53
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 59
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 61,
                "end": 67
              },
              "start": 59,
              "end": 67
            },
            "accessibility": null,
            "static": false,
            "start": 58,
            "end": 68
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 74
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSNumberKeyword",
                    "start": 78,
                    "end": 84
                  },
                  "start": 76,
                  "end": 84
                },
                "start": 75,
                "end": 84
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 89,
                    "end": 95
                  },
                  "start": 87,
                  "end": 95
                },
                "start": 86,
                "end": 95
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 98,
                "end": 104
              },
              "start": 96,
              "end": 104
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 73,
            "end": 105
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
              "start": 110,
              "end": 111
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 113,
                  "end": 119
                },
                "start": 113,
                "end": 121
              },
              "start": 111,
              "end": 121
            },
            "accessibility": null,
            "static": false,
            "start": 110,
            "end": 122
          }
        ],
        "start": 37,
        "end": 124
      },
      "declare": false,
      "start": 22,
      "end": 124
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 140
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 150
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 152,
                  "end": 156
                },
                "typeArguments": null,
                "start": 152,
                "end": 156
              },
              "start": 150,
              "end": 156
            },
            "accessibility": null,
            "static": false,
            "start": 147,
            "end": 157
          }
        ],
        "start": 141,
        "end": 159
      },
      "declare": false,
      "start": 126,
      "end": 159
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 210
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 220
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "type": "TSNumberKeyword",
                        "start": 226,
                        "end": 232
                      },
                      "start": 224,
                      "end": 232
                    },
                    "start": 223,
                    "end": 232
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 237,
                        "end": 243
                      },
                      "start": 235,
                      "end": 243
                    },
                    "start": 234,
                    "end": 243
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 248,
                    "end": 254
                  },
                  "start": 245,
                  "end": 254
                },
                "start": 222,
                "end": 254
              },
              "start": 220,
              "end": 254
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
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 266,
                  "end": 267
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 286,
                      "end": 287
                    },
                    "start": 279,
                    "end": 288
                  }
                ],
                "start": 269,
                "end": 294
              },
              "expression": false,
              "start": 257,
              "end": 294
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 217,
            "end": 294
          }
        ],
        "start": 211,
        "end": 296
      },
      "abstract": false,
      "declare": false,
      "start": 200,
      "end": 296
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 351,
        "end": 355
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
                    "name": "foo",
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
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 382,
                                "end": 388
                              },
                              "start": 380,
                              "end": 388
                            },
                            "start": 379,
                            "end": 388
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 393,
                                "end": 399
                              },
                              "start": 391,
                              "end": 399
                            },
                            "start": 390,
                            "end": 399
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 404,
                            "end": 410
                          },
                          "start": 401,
                          "end": 410
                        },
                        "start": 378,
                        "end": 410
                      },
                      "start": 376,
                      "end": 410
                    },
                    "start": 373,
                    "end": 410
                  },
                  "init": {
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
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 422,
                        "end": 423
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 442,
                            "end": 443
                          },
                          "start": 435,
                          "end": 444
                        }
                      ],
                      "start": 425,
                      "end": 450
                    },
                    "expression": false,
                    "start": 413,
                    "end": 450
                  },
                  "definite": false,
                  "start": 373,
                  "end": 450
                }
              ],
              "declare": false,
              "start": 369,
              "end": 450
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 362,
            "end": 450
          }
        ],
        "start": 356,
        "end": 452
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 341,
      "end": 452
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
            "name": "c3t1",
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
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 501,
                        "end": 507
                      },
                      "start": 499,
                      "end": 507
                    },
                    "start": 498,
                    "end": 507
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 512,
                    "end": 518
                  },
                  "start": 509,
                  "end": 518
                },
                "start": 497,
                "end": 518
              },
              "start": 495,
              "end": 518
            },
            "start": 491,
            "end": 518
          },
          "init": {
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
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 531,
                "end": 532
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 543,
                    "end": 544
                  },
                  "start": 536,
                  "end": 544
                }
              ],
              "start": 534,
              "end": 546
            },
            "expression": false,
            "start": 522,
            "end": 546
          },
          "definite": false,
          "start": 491,
          "end": 547
        }
      ],
      "declare": false,
      "start": 487,
      "end": 548
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
            "name": "c3t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 553,
            "end": 557
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 561,
                "end": 565
              },
              "typeArguments": null,
              "start": 561,
              "end": 565
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 573,
                    "end": 574
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 576,
                    "end": 577
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 573,
                  "end": 577
                }
              ],
              "start": 567,
              "end": 579
            },
            "start": 560,
            "end": 580
          },
          "definite": false,
          "start": 553,
          "end": 580
        }
      ],
      "declare": false,
      "start": 549,
      "end": 580
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
            "name": "c3t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 591,
                  "end": 597
                },
                "start": 591,
                "end": 599
              },
              "start": 589,
              "end": 599
            },
            "start": 585,
            "end": 599
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 602,
            "end": 604
          },
          "definite": false,
          "start": 585,
          "end": 604
        }
      ],
      "declare": false,
      "start": 581,
      "end": 605
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
            "name": "c3t4",
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
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 622,
                      "end": 626
                    },
                    "typeArguments": null,
                    "start": 622,
                    "end": 626
                  },
                  "start": 619,
                  "end": 626
                },
                "start": 616,
                "end": 626
              },
              "start": 614,
              "end": 626
            },
            "start": 610,
            "end": 626
          },
          "init": {
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
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IFoo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 650,
                        "end": 654
                      },
                      "typeArguments": null,
                      "start": 650,
                      "end": 654
                    },
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 656,
                      "end": 658
                    },
                    "start": 649,
                    "end": 659
                  },
                  "start": 642,
                  "end": 659
                }
              ],
              "start": 640,
              "end": 661
            },
            "expression": false,
            "start": 629,
            "end": 661
          },
          "definite": false,
          "start": 610,
          "end": 661
        }
      ],
      "declare": false,
      "start": 606,
      "end": 662
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
            "name": "c3t5",
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
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 677,
                        "end": 683
                      },
                      "start": 675,
                      "end": 683
                    },
                    "start": 674,
                    "end": 683
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 688,
                      "end": 692
                    },
                    "typeArguments": null,
                    "start": 688,
                    "end": 692
                  },
                  "start": 685,
                  "end": 692
                },
                "start": 673,
                "end": 692
              },
              "start": 671,
              "end": 692
            },
            "start": 667,
            "end": 692
          },
          "init": {
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
                "typeAnnotation": null,
                "start": 704,
                "end": 705
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IFoo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 717,
                        "end": 721
                      },
                      "typeArguments": null,
                      "start": 717,
                      "end": 721
                    },
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 723,
                      "end": 725
                    },
                    "start": 716,
                    "end": 726
                  },
                  "start": 709,
                  "end": 726
                }
              ],
              "start": 707,
              "end": 728
            },
            "expression": false,
            "start": 695,
            "end": 728
          },
          "definite": false,
          "start": 667,
          "end": 728
        }
      ],
      "declare": false,
      "start": 663,
      "end": 729
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
            "name": "c3t6",
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
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 744,
                        "end": 750
                      },
                      "start": 742,
                      "end": 750
                    },
                    "start": 741,
                    "end": 750
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 755,
                        "end": 761
                      },
                      "start": 753,
                      "end": 761
                    },
                    "start": 752,
                    "end": 761
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 766,
                      "end": 770
                    },
                    "typeArguments": null,
                    "start": 766,
                    "end": 770
                  },
                  "start": 763,
                  "end": 770
                },
                "start": 740,
                "end": 770
              },
              "start": 738,
              "end": 770
            },
            "start": 734,
            "end": 770
          },
          "init": {
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
                "typeAnnotation": null,
                "start": 782,
                "end": 783
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 785,
                "end": 786
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IFoo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 798,
                        "end": 802
                      },
                      "typeArguments": null,
                      "start": 798,
                      "end": 802
                    },
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 804,
                      "end": 806
                    },
                    "start": 797,
                    "end": 807
                  },
                  "start": 790,
                  "end": 807
                }
              ],
              "start": 788,
              "end": 809
            },
            "expression": false,
            "start": 773,
            "end": 809
          },
          "definite": false,
          "start": 734,
          "end": 809
        }
      ],
      "declare": false,
      "start": 730,
      "end": 810
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
            "name": "c3t7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 831,
                            "end": 837
                          },
                          "start": 829,
                          "end": 837
                        },
                        "start": 828,
                        "end": 837
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 840,
                        "end": 846
                      },
                      "start": 838,
                      "end": 846
                    },
                    "start": 827,
                    "end": 847
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 861,
                            "end": 867
                          },
                          "start": 859,
                          "end": 867
                        },
                        "start": 857,
                        "end": 867
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 870,
                        "end": 876
                      },
                      "start": 868,
                      "end": 876
                    },
                    "start": 856,
                    "end": 877
                  }
                ],
                "start": 821,
                "end": 879
              },
              "start": 819,
              "end": 879
            },
            "start": 815,
            "end": 879
          },
          "init": {
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
                "typeAnnotation": null,
                "start": 891,
                "end": 892
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 903,
                    "end": 904
                  },
                  "start": 896,
                  "end": 905
                }
              ],
              "start": 894,
              "end": 907
            },
            "expression": false,
            "start": 882,
            "end": 907
          },
          "definite": false,
          "start": 815,
          "end": 907
        }
      ],
      "declare": false,
      "start": 811,
      "end": 908
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
            "name": "c3t8",
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
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 924,
                        "end": 930
                      },
                      "start": 922,
                      "end": 930
                    },
                    "start": 921,
                    "end": 930
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 935,
                        "end": 941
                      },
                      "start": 933,
                      "end": 941
                    },
                    "start": 932,
                    "end": 941
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 946,
                    "end": 952
                  },
                  "start": 943,
                  "end": 952
                },
                "start": 920,
                "end": 952
              },
              "start": 918,
              "end": 952
            },
            "start": 914,
            "end": 952
          },
          "init": {
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
                "typeAnnotation": null,
                "start": 964,
                "end": 965
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 976,
                    "end": 977
                  },
                  "start": 969,
                  "end": 978
                }
              ],
              "start": 967,
              "end": 980
            },
            "expression": false,
            "start": 955,
            "end": 980
          },
          "definite": false,
          "start": 914,
          "end": 980
        }
      ],
      "declare": false,
      "start": 910,
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
            "name": "c3t9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 992,
                    "end": 998
                  },
                  "start": 992,
                  "end": 1000
                },
                "start": 992,
                "end": 1002
              },
              "start": 990,
              "end": 1002
            },
            "start": 986,
            "end": 1002
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 1006,
                "end": 1008
              },
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 1009,
                "end": 1011
              }
            ],
            "start": 1005,
            "end": 1012
          },
          "definite": false,
          "start": 986,
          "end": 1012
        }
      ],
      "declare": false,
      "start": 982,
      "end": 1013
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
            "name": "c3t10",
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
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1025,
                    "end": 1029
                  },
                  "typeArguments": null,
                  "start": 1025,
                  "end": 1029
                },
                "start": 1025,
                "end": 1031
              },
              "start": 1023,
              "end": 1031
            },
            "start": 1018,
            "end": 1031
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1036,
                    "end": 1040
                  },
                  "typeArguments": null,
                  "start": 1036,
                  "end": 1040
                },
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 1042,
                  "end": 1044
                },
                "start": 1035,
                "end": 1045
              },
              {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1047,
                    "end": 1051
                  },
                  "typeArguments": null,
                  "start": 1047,
                  "end": 1051
                },
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 1053,
                  "end": 1055
                },
                "start": 1046,
                "end": 1056
              }
            ],
            "start": 1034,
            "end": 1057
          },
          "definite": false,
          "start": 1018,
          "end": 1057
        }
      ],
      "declare": false,
      "start": 1014,
      "end": 1058
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
            "name": "c3t11",
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
                              "start": 1075,
                              "end": 1081
                            },
                            "start": 1073,
                            "end": 1081
                          },
                          "start": 1072,
                          "end": 1081
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1086,
                              "end": 1092
                            },
                            "start": 1084,
                            "end": 1092
                          },
                          "start": 1083,
                          "end": 1092
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1095,
                          "end": 1101
                        },
                        "start": 1093,
                        "end": 1101
                      },
                      "start": 1071,
                      "end": 1102
                    }
                  ],
                  "start": 1070,
                  "end": 1103
                },
                "start": 1070,
                "end": 1105
              },
              "start": 1068,
              "end": 1105
            },
            "start": 1063,
            "end": 1105
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
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
                    "typeAnnotation": null,
                    "start": 1118,
                    "end": 1119
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1121,
                    "end": 1122
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1133,
                        "end": 1134
                      },
                      "start": 1126,
                      "end": 1135
                    }
                  ],
                  "start": 1124,
                  "end": 1137
                },
                "expression": false,
                "start": 1109,
                "end": 1137
              }
            ],
            "start": 1108,
            "end": 1138
          },
          "definite": false,
          "start": 1063,
          "end": 1138
        }
      ],
      "declare": false,
      "start": 1059,
      "end": 1139
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
            "name": "c3t12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IBar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1151,
                  "end": 1155
                },
                "typeArguments": null,
                "start": 1151,
                "end": 1155
              },
              "start": 1149,
              "end": 1155
            },
            "start": 1144,
            "end": 1155
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1164,
                  "end": 1167
                },
                "value": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1170,
                      "end": 1174
                    },
                    "typeArguments": null,
                    "start": 1170,
                    "end": 1174
                  },
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 1176,
                    "end": 1178
                  },
                  "start": 1169,
                  "end": 1179
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1164,
                "end": 1179
              }
            ],
            "start": 1158,
            "end": 1181
          },
          "definite": false,
          "start": 1144,
          "end": 1181
        }
      ],
      "declare": false,
      "start": 1140,
      "end": 1181
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
            "name": "c3t13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1186,
            "end": 1191
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1195,
                "end": 1199
              },
              "typeArguments": null,
              "start": 1195,
              "end": 1199
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1207,
                    "end": 1208
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
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1219,
                        "end": 1220
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1222,
                        "end": 1223
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1234,
                            "end": 1235
                          },
                          "start": 1227,
                          "end": 1236
                        }
                      ],
                      "start": 1225,
                      "end": 1238
                    },
                    "expression": false,
                    "start": 1210,
                    "end": 1238
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1207,
                  "end": 1238
                }
              ],
              "start": 1201,
              "end": 1240
            },
            "start": 1194,
            "end": 1241
          },
          "definite": false,
          "start": 1186,
          "end": 1241
        }
      ],
      "declare": false,
      "start": 1182,
      "end": 1241
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
            "name": "c3t14",
            "optional": false,
            "typeAnnotation": null,
            "start": 1246,
            "end": 1251
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1255,
                "end": 1259
              },
              "typeArguments": null,
              "start": 1255,
              "end": 1259
            },
            "expression": {
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
                    "start": 1267,
                    "end": 1268
                  },
                  "value": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 1270,
                    "end": 1272
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1267,
                  "end": 1272
                }
              ],
              "start": 1261,
              "end": 1274
            },
            "start": 1254,
            "end": 1275
          },
          "definite": false,
          "start": 1246,
          "end": 1275
        }
      ],
      "declare": false,
      "start": 1242,
      "end": 1275
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C4T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1321,
        "end": 1325
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1332,
              "end": 1335
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "type": "TSNumberKeyword",
                        "start": 1341,
                        "end": 1347
                      },
                      "start": 1339,
                      "end": 1347
                    },
                    "start": 1338,
                    "end": 1347
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1352,
                        "end": 1358
                      },
                      "start": 1350,
                      "end": 1358
                    },
                    "start": 1349,
                    "end": 1358
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1363,
                    "end": 1369
                  },
                  "start": 1360,
                  "end": 1369
                },
                "start": 1337,
                "end": 1369
              },
              "start": 1335,
              "end": 1369
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1332,
            "end": 1370
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1375,
              "end": 1386
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1399,
                          "end": 1403
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1404,
                          "end": 1407
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1399,
                        "end": 1407
                      },
                      "right": {
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
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1419,
                            "end": 1420
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1422,
                            "end": 1423
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1446,
                                "end": 1447
                              },
                              "start": 1439,
                              "end": 1448
                            }
                          ],
                          "start": 1425,
                          "end": 1458
                        },
                        "expression": false,
                        "start": 1410,
                        "end": 1458
                      },
                      "start": 1399,
                      "end": 1458
                    },
                    "directive": null,
                    "start": 1399,
                    "end": 1458
                  }
                ],
                "start": 1389,
                "end": 1464
              },
              "expression": false,
              "start": 1386,
              "end": 1464
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1375,
            "end": 1464
          }
        ],
        "start": 1326,
        "end": 1466
      },
      "abstract": false,
      "declare": false,
      "start": 1315,
      "end": 1466
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C5T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1520,
        "end": 1524
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
                    "name": "foo",
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
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1551,
                                "end": 1557
                              },
                              "start": 1549,
                              "end": 1557
                            },
                            "start": 1548,
                            "end": 1557
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1562,
                                "end": 1568
                              },
                              "start": 1560,
                              "end": 1568
                            },
                            "start": 1559,
                            "end": 1568
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1573,
                            "end": 1579
                          },
                          "start": 1570,
                          "end": 1579
                        },
                        "start": 1547,
                        "end": 1579
                      },
                      "start": 1545,
                      "end": 1579
                    },
                    "start": 1542,
                    "end": 1579
                  },
                  "init": null,
                  "definite": false,
                  "start": 1542,
                  "end": 1579
                }
              ],
              "declare": false,
              "start": 1538,
              "end": 1580
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1531,
            "end": 1580
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1585,
                "end": 1588
              },
              "right": {
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
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1600,
                    "end": 1601
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1603,
                    "end": 1604
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1623,
                        "end": 1624
                      },
                      "start": 1616,
                      "end": 1625
                    }
                  ],
                  "start": 1606,
                  "end": 1631
                },
                "expression": false,
                "start": 1591,
                "end": 1631
              },
              "start": 1585,
              "end": 1631
            },
            "directive": null,
            "start": 1585,
            "end": 1631
          }
        ],
        "start": 1525,
        "end": 1633
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1510,
      "end": 1633
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
            "name": "c6t5",
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
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1681,
                        "end": 1687
                      },
                      "start": 1679,
                      "end": 1687
                    },
                    "start": 1678,
                    "end": 1687
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1692,
                      "end": 1696
                    },
                    "typeArguments": null,
                    "start": 1692,
                    "end": 1696
                  },
                  "start": 1689,
                  "end": 1696
                },
                "start": 1677,
                "end": 1696
              },
              "start": 1675,
              "end": 1696
            },
            "start": 1671,
            "end": 1696
          },
          "init": null,
          "definite": false,
          "start": 1671,
          "end": 1696
        }
      ],
      "declare": false,
      "start": 1667,
      "end": 1697
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c6t5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1698,
          "end": 1702
        },
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSFunctionType",
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
                    "start": 1710,
                    "end": 1716
                  },
                  "start": 1708,
                  "end": 1716
                },
                "start": 1707,
                "end": 1716
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1721,
                  "end": 1725
                },
                "typeArguments": null,
                "start": 1721,
                "end": 1725
              },
              "start": 1718,
              "end": 1725
            },
            "start": 1706,
            "end": 1725
          },
          "expression": {
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
                "typeAnnotation": null,
                "start": 1735,
                "end": 1736
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IFoo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1748,
                        "end": 1752
                      },
                      "typeArguments": null,
                      "start": 1748,
                      "end": 1752
                    },
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 1754,
                      "end": 1756
                    },
                    "start": 1747,
                    "end": 1757
                  },
                  "start": 1740,
                  "end": 1757
                }
              ],
              "start": 1738,
              "end": 1759
            },
            "expression": false,
            "start": 1726,
            "end": 1759
          },
          "start": 1705,
          "end": 1759
        },
        "start": 1698,
        "end": 1759
      },
      "directive": null,
      "start": 1698,
      "end": 1760
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
            "name": "c7t2",
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
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1807,
                    "end": 1811
                  },
                  "typeArguments": null,
                  "start": 1807,
                  "end": 1811
                },
                "start": 1807,
                "end": 1813
              },
              "start": 1805,
              "end": 1813
            },
            "start": 1801,
            "end": 1813
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 1816,
            "end": 1818
          },
          "definite": false,
          "start": 1801,
          "end": 1818
        }
      ],
      "declare": false,
      "start": 1797,
      "end": 1819
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c7t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1820,
            "end": 1824
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1825,
            "end": 1826
          },
          "optional": false,
          "computed": true,
          "start": 1820,
          "end": 1827
        },
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "IFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1831,
              "end": 1835
            },
            "typeArguments": null,
            "start": 1831,
            "end": 1835
          },
          "expression": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1838,
                  "end": 1839
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1841,
                  "end": 1842
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1838,
                "end": 1842
              }
            ],
            "start": 1837,
            "end": 1843
          },
          "start": 1830,
          "end": 1844
        },
        "start": 1820,
        "end": 1844
      },
      "directive": null,
      "start": 1820,
      "end": 1845
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IPlaceHolder",
        "optional": false,
        "typeAnnotation": null,
        "start": 1896,
        "end": 1908
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
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1915,
              "end": 1917
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 1923,
                        "end": 1929
                      },
                      "start": 1921,
                      "end": 1929
                    },
                    "start": 1920,
                    "end": 1929
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1934,
                    "end": 1940
                  },
                  "start": 1931,
                  "end": 1940
                },
                "start": 1919,
                "end": 1940
              },
              "start": 1917,
              "end": 1940
            },
            "accessibility": null,
            "static": false,
            "start": 1915,
            "end": 1941
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1946,
              "end": 1948
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1950,
                  "end": 1954
                },
                "typeArguments": null,
                "start": 1950,
                "end": 1954
              },
              "start": 1948,
              "end": 1954
            },
            "accessibility": null,
            "static": false,
            "start": 1946,
            "end": 1955
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1960,
              "end": 1962
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 1964,
                  "end": 1970
                },
                "start": 1964,
                "end": 1972
              },
              "start": 1962,
              "end": 1972
            },
            "accessibility": null,
            "static": false,
            "start": 1960,
            "end": 1973
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1978,
              "end": 1980
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1988,
                      "end": 1992
                    },
                    "typeArguments": null,
                    "start": 1988,
                    "end": 1992
                  },
                  "start": 1985,
                  "end": 1992
                },
                "start": 1982,
                "end": 1992
              },
              "start": 1980,
              "end": 1992
            },
            "accessibility": null,
            "static": false,
            "start": 1978,
            "end": 1993
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1998,
              "end": 2000
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2006,
                        "end": 2012
                      },
                      "start": 2004,
                      "end": 2012
                    },
                    "start": 2003,
                    "end": 2012
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2017,
                      "end": 2021
                    },
                    "typeArguments": null,
                    "start": 2017,
                    "end": 2021
                  },
                  "start": 2014,
                  "end": 2021
                },
                "start": 2002,
                "end": 2021
              },
              "start": 2000,
              "end": 2021
            },
            "accessibility": null,
            "static": false,
            "start": 1998,
            "end": 2022
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2027,
              "end": 2029
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2035,
                        "end": 2041
                      },
                      "start": 2033,
                      "end": 2041
                    },
                    "start": 2032,
                    "end": 2041
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2046,
                        "end": 2052
                      },
                      "start": 2044,
                      "end": 2052
                    },
                    "start": 2043,
                    "end": 2052
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2057,
                      "end": 2061
                    },
                    "typeArguments": null,
                    "start": 2057,
                    "end": 2061
                  },
                  "start": 2054,
                  "end": 2061
                },
                "start": 2031,
                "end": 2061
              },
              "start": 2029,
              "end": 2061
            },
            "accessibility": null,
            "static": false,
            "start": 2027,
            "end": 2062
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t7",
              "optional": false,
              "typeAnnotation": null,
              "start": 2067,
              "end": 2069
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 2089,
                            "end": 2095
                          },
                          "start": 2087,
                          "end": 2095
                        },
                        "start": 2086,
                        "end": 2095
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2100,
                            "end": 2106
                          },
                          "start": 2098,
                          "end": 2106
                        },
                        "start": 2097,
                        "end": 2106
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2109,
                        "end": 2115
                      },
                      "start": 2107,
                      "end": 2115
                    },
                    "start": 2085,
                    "end": 2116
                  }
                ],
                "start": 2071,
                "end": 2178
              },
              "start": 2069,
              "end": 2178
            },
            "accessibility": null,
            "static": false,
            "start": 2067,
            "end": 2179
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t8",
              "optional": false,
              "typeAnnotation": null,
              "start": 2184,
              "end": 2186
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2192,
                        "end": 2198
                      },
                      "start": 2190,
                      "end": 2198
                    },
                    "start": 2189,
                    "end": 2198
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2203,
                        "end": 2209
                      },
                      "start": 2201,
                      "end": 2209
                    },
                    "start": 2200,
                    "end": 2209
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2214,
                    "end": 2220
                  },
                  "start": 2211,
                  "end": 2220
                },
                "start": 2188,
                "end": 2220
              },
              "start": 2186,
              "end": 2220
            },
            "accessibility": null,
            "static": false,
            "start": 2184,
            "end": 2221
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t9",
              "optional": false,
              "typeAnnotation": null,
              "start": 2226,
              "end": 2228
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 2230,
                    "end": 2236
                  },
                  "start": 2230,
                  "end": 2238
                },
                "start": 2230,
                "end": 2240
              },
              "start": 2228,
              "end": 2240
            },
            "accessibility": null,
            "static": false,
            "start": 2226,
            "end": 2241
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t10",
              "optional": false,
              "typeAnnotation": null,
              "start": 2246,
              "end": 2249
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2251,
                    "end": 2255
                  },
                  "typeArguments": null,
                  "start": 2251,
                  "end": 2255
                },
                "start": 2251,
                "end": 2257
              },
              "start": 2249,
              "end": 2257
            },
            "accessibility": null,
            "static": false,
            "start": 2246,
            "end": 2258
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t11",
              "optional": false,
              "typeAnnotation": null,
              "start": 2263,
              "end": 2266
            },
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
                              "start": 2273,
                              "end": 2279
                            },
                            "start": 2271,
                            "end": 2279
                          },
                          "start": 2270,
                          "end": 2279
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2284,
                              "end": 2290
                            },
                            "start": 2282,
                            "end": 2290
                          },
                          "start": 2281,
                          "end": 2290
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2293,
                          "end": 2299
                        },
                        "start": 2291,
                        "end": 2299
                      },
                      "start": 2269,
                      "end": 2300
                    }
                  ],
                  "start": 2268,
                  "end": 2301
                },
                "start": 2268,
                "end": 2303
              },
              "start": 2266,
              "end": 2303
            },
            "accessibility": null,
            "static": false,
            "start": 2263,
            "end": 2304
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t12",
              "optional": false,
              "typeAnnotation": null,
              "start": 2309,
              "end": 2312
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IBar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2314,
                  "end": 2318
                },
                "typeArguments": null,
                "start": 2314,
                "end": 2318
              },
              "start": 2312,
              "end": 2318
            },
            "accessibility": null,
            "static": false,
            "start": 2309,
            "end": 2319
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t13",
              "optional": false,
              "typeAnnotation": null,
              "start": 2324,
              "end": 2327
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2329,
                  "end": 2333
                },
                "typeArguments": null,
                "start": 2329,
                "end": 2333
              },
              "start": 2327,
              "end": 2333
            },
            "accessibility": null,
            "static": false,
            "start": 2324,
            "end": 2334
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t14",
              "optional": false,
              "typeAnnotation": null,
              "start": 2339,
              "end": 2342
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2344,
                  "end": 2348
                },
                "typeArguments": null,
                "start": 2344,
                "end": 2348
              },
              "start": 2342,
              "end": 2348
            },
            "accessibility": null,
            "static": false,
            "start": 2339,
            "end": 2349
          }
        ],
        "start": 1909,
        "end": 2355
      },
      "declare": false,
      "start": 1886,
      "end": 2355
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
            "name": "objc8",
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
                      "name": "t1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2374,
                      "end": 2376
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
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
                                "start": 2382,
                                "end": 2388
                              },
                              "start": 2380,
                              "end": 2388
                            },
                            "start": 2379,
                            "end": 2388
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2393,
                            "end": 2399
                          },
                          "start": 2390,
                          "end": 2399
                        },
                        "start": 2378,
                        "end": 2399
                      },
                      "start": 2376,
                      "end": 2399
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2374,
                    "end": 2400
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2405,
                      "end": 2407
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2409,
                          "end": 2413
                        },
                        "typeArguments": null,
                        "start": 2409,
                        "end": 2413
                      },
                      "start": 2407,
                      "end": 2413
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2405,
                    "end": 2414
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2419,
                      "end": 2421
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 2423,
                          "end": 2429
                        },
                        "start": 2423,
                        "end": 2431
                      },
                      "start": 2421,
                      "end": 2431
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2419,
                    "end": 2432
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2437,
                      "end": 2439
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "IFoo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2447,
                              "end": 2451
                            },
                            "typeArguments": null,
                            "start": 2447,
                            "end": 2451
                          },
                          "start": 2444,
                          "end": 2451
                        },
                        "start": 2441,
                        "end": 2451
                      },
                      "start": 2439,
                      "end": 2451
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2437,
                    "end": 2452
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2457,
                      "end": 2459
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
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
                                "start": 2465,
                                "end": 2471
                              },
                              "start": 2463,
                              "end": 2471
                            },
                            "start": 2462,
                            "end": 2471
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "IFoo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2476,
                              "end": 2480
                            },
                            "typeArguments": null,
                            "start": 2476,
                            "end": 2480
                          },
                          "start": 2473,
                          "end": 2480
                        },
                        "start": 2461,
                        "end": 2480
                      },
                      "start": 2459,
                      "end": 2480
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2457,
                    "end": 2481
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t6",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2486,
                      "end": 2488
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
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
                                "start": 2494,
                                "end": 2500
                              },
                              "start": 2492,
                              "end": 2500
                            },
                            "start": 2491,
                            "end": 2500
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2505,
                                "end": 2511
                              },
                              "start": 2503,
                              "end": 2511
                            },
                            "start": 2502,
                            "end": 2511
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "IFoo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2516,
                              "end": 2520
                            },
                            "typeArguments": null,
                            "start": 2516,
                            "end": 2520
                          },
                          "start": 2513,
                          "end": 2520
                        },
                        "start": 2490,
                        "end": 2520
                      },
                      "start": 2488,
                      "end": 2520
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2486,
                    "end": 2521
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2526,
                      "end": 2528
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
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
                                    "start": 2548,
                                    "end": 2554
                                  },
                                  "start": 2546,
                                  "end": 2554
                                },
                                "start": 2545,
                                "end": 2554
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 2559,
                                    "end": 2565
                                  },
                                  "start": 2557,
                                  "end": 2565
                                },
                                "start": 2556,
                                "end": 2565
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2568,
                                "end": 2574
                              },
                              "start": 2566,
                              "end": 2574
                            },
                            "start": 2544,
                            "end": 2575
                          }
                        ],
                        "start": 2530,
                        "end": 2637
                      },
                      "start": 2528,
                      "end": 2637
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2526,
                    "end": 2638
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2643,
                      "end": 2645
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
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
                                "start": 2651,
                                "end": 2657
                              },
                              "start": 2649,
                              "end": 2657
                            },
                            "start": 2648,
                            "end": 2657
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2662,
                                "end": 2668
                              },
                              "start": 2660,
                              "end": 2668
                            },
                            "start": 2659,
                            "end": 2668
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2673,
                            "end": 2679
                          },
                          "start": 2670,
                          "end": 2679
                        },
                        "start": 2647,
                        "end": 2679
                      },
                      "start": 2645,
                      "end": 2679
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2643,
                    "end": 2680
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t9",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2685,
                      "end": 2687
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 2689,
                            "end": 2695
                          },
                          "start": 2689,
                          "end": 2697
                        },
                        "start": 2689,
                        "end": 2699
                      },
                      "start": 2687,
                      "end": 2699
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2685,
                    "end": 2700
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t10",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2705,
                      "end": 2708
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IFoo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2710,
                            "end": 2714
                          },
                          "typeArguments": null,
                          "start": 2710,
                          "end": 2714
                        },
                        "start": 2710,
                        "end": 2716
                      },
                      "start": 2708,
                      "end": 2716
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2705,
                    "end": 2717
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2722,
                      "end": 2725
                    },
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
                                      "start": 2732,
                                      "end": 2738
                                    },
                                    "start": 2730,
                                    "end": 2738
                                  },
                                  "start": 2729,
                                  "end": 2738
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 2743,
                                      "end": 2749
                                    },
                                    "start": 2741,
                                    "end": 2749
                                  },
                                  "start": 2740,
                                  "end": 2749
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2752,
                                  "end": 2758
                                },
                                "start": 2750,
                                "end": 2758
                              },
                              "start": 2728,
                              "end": 2759
                            }
                          ],
                          "start": 2727,
                          "end": 2760
                        },
                        "start": 2727,
                        "end": 2762
                      },
                      "start": 2725,
                      "end": 2762
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2722,
                    "end": 2763
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t12",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2768,
                      "end": 2771
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IBar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2773,
                          "end": 2777
                        },
                        "typeArguments": null,
                        "start": 2773,
                        "end": 2777
                      },
                      "start": 2771,
                      "end": 2777
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2768,
                    "end": 2778
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t13",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2783,
                      "end": 2786
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2788,
                          "end": 2792
                        },
                        "typeArguments": null,
                        "start": 2788,
                        "end": 2792
                      },
                      "start": 2786,
                      "end": 2792
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2783,
                    "end": 2793
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t14",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2798,
                      "end": 2801
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2803,
                          "end": 2807
                        },
                        "typeArguments": null,
                        "start": 2803,
                        "end": 2807
                      },
                      "start": 2801,
                      "end": 2807
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2798,
                    "end": 2808
                  }
                ],
                "start": 2368,
                "end": 2810
              },
              "start": 2366,
              "end": 2810
            },
            "start": 2361,
            "end": 2810
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IPlaceHolder",
                "optional": false,
                "typeAnnotation": null,
                "start": 2814,
                "end": 2826
              },
              "typeArguments": null,
              "start": 2814,
              "end": 2826
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 2828,
              "end": 2830
            },
            "start": 2813,
            "end": 2831
          },
          "definite": false,
          "start": 2361,
          "end": 2831
        }
      ],
      "declare": false,
      "start": 2357,
      "end": 2832
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 2834,
            "end": 2839
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2840,
            "end": 2842
          },
          "optional": false,
          "computed": false,
          "start": 2834,
          "end": 2842
        },
        "right": {
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
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 2855,
              "end": 2856
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2867,
                  "end": 2868
                },
                "start": 2860,
                "end": 2868
              }
            ],
            "start": 2858,
            "end": 2870
          },
          "expression": false,
          "start": 2846,
          "end": 2870
        },
        "start": 2834,
        "end": 2871
      },
      "directive": null,
      "start": 2834,
      "end": 2872
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 2873,
            "end": 2878
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2879,
            "end": 2881
          },
          "optional": false,
          "computed": false,
          "start": 2873,
          "end": 2881
        },
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "IFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2885,
              "end": 2889
            },
            "typeArguments": null,
            "start": 2885,
            "end": 2889
          },
          "expression": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2897,
                  "end": 2898
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2900,
                  "end": 2901
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2897,
                "end": 2901
              }
            ],
            "start": 2891,
            "end": 2903
          },
          "start": 2884,
          "end": 2904
        },
        "start": 2873,
        "end": 2904
      },
      "directive": null,
      "start": 2873,
      "end": 2905
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 2906,
            "end": 2911
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2912,
            "end": 2914
          },
          "optional": false,
          "computed": false,
          "start": 2906,
          "end": 2914
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [],
          "start": 2917,
          "end": 2919
        },
        "start": 2906,
        "end": 2919
      },
      "directive": null,
      "start": 2906,
      "end": 2920
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 2921,
            "end": 2926
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2927,
            "end": 2929
          },
          "optional": false,
          "computed": false,
          "start": 2921,
          "end": 2929
        },
        "right": {
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
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2953,
                      "end": 2957
                    },
                    "typeArguments": null,
                    "start": 2953,
                    "end": 2957
                  },
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 2959,
                    "end": 2961
                  },
                  "start": 2952,
                  "end": 2962
                },
                "start": 2945,
                "end": 2962
              }
            ],
            "start": 2943,
            "end": 2964
          },
          "expression": false,
          "start": 2932,
          "end": 2964
        },
        "start": 2921,
        "end": 2964
      },
      "directive": null,
      "start": 2921,
      "end": 2965
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 2966,
            "end": 2971
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t5",
            "optional": false,
            "typeAnnotation": null,
            "start": 2972,
            "end": 2974
          },
          "optional": false,
          "computed": false,
          "start": 2966,
          "end": 2974
        },
        "right": {
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
              "typeAnnotation": null,
              "start": 2986,
              "end": 2987
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2999,
                      "end": 3003
                    },
                    "typeArguments": null,
                    "start": 2999,
                    "end": 3003
                  },
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 3005,
                    "end": 3007
                  },
                  "start": 2998,
                  "end": 3008
                },
                "start": 2991,
                "end": 3008
              }
            ],
            "start": 2989,
            "end": 3010
          },
          "expression": false,
          "start": 2977,
          "end": 3010
        },
        "start": 2966,
        "end": 3010
      },
      "directive": null,
      "start": 2966,
      "end": 3011
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3012,
            "end": 3017
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t6",
            "optional": false,
            "typeAnnotation": null,
            "start": 3018,
            "end": 3020
          },
          "optional": false,
          "computed": false,
          "start": 3012,
          "end": 3020
        },
        "right": {
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
              "typeAnnotation": null,
              "start": 3032,
              "end": 3033
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 3035,
              "end": 3036
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3048,
                      "end": 3052
                    },
                    "typeArguments": null,
                    "start": 3048,
                    "end": 3052
                  },
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 3054,
                    "end": 3056
                  },
                  "start": 3047,
                  "end": 3057
                },
                "start": 3040,
                "end": 3057
              }
            ],
            "start": 3038,
            "end": 3059
          },
          "expression": false,
          "start": 3023,
          "end": 3059
        },
        "start": 3012,
        "end": 3059
      },
      "directive": null,
      "start": 3012,
      "end": 3060
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3061,
            "end": 3066
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t7",
            "optional": false,
            "typeAnnotation": null,
            "start": 3067,
            "end": 3069
          },
          "optional": false,
          "computed": false,
          "start": 3061,
          "end": 3069
        },
        "right": {
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
                  "start": 3084,
                  "end": 3090
                },
                "start": 3082,
                "end": 3090
              },
              "start": 3081,
              "end": 3090
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3101,
                  "end": 3102
                },
                "start": 3094,
                "end": 3102
              }
            ],
            "start": 3092,
            "end": 3104
          },
          "expression": false,
          "start": 3072,
          "end": 3104
        },
        "start": 3061,
        "end": 3104
      },
      "directive": null,
      "start": 3061,
      "end": 3105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3107,
            "end": 3112
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3113,
            "end": 3115
          },
          "optional": false,
          "computed": false,
          "start": 3107,
          "end": 3115
        },
        "right": {
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
              "typeAnnotation": null,
              "start": 3127,
              "end": 3128
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3139,
                  "end": 3140
                },
                "start": 3132,
                "end": 3141
              }
            ],
            "start": 3130,
            "end": 3143
          },
          "expression": false,
          "start": 3118,
          "end": 3143
        },
        "start": 3107,
        "end": 3143
      },
      "directive": null,
      "start": 3107,
      "end": 3144
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3145,
            "end": 3150
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t9",
            "optional": false,
            "typeAnnotation": null,
            "start": 3151,
            "end": 3153
          },
          "optional": false,
          "computed": false,
          "start": 3145,
          "end": 3153
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "ArrayExpression",
              "elements": [],
              "start": 3157,
              "end": 3159
            },
            {
              "type": "ArrayExpression",
              "elements": [],
              "start": 3160,
              "end": 3162
            }
          ],
          "start": 3156,
          "end": 3163
        },
        "start": 3145,
        "end": 3163
      },
      "directive": null,
      "start": 3145,
      "end": 3164
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3165,
            "end": 3170
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t10",
            "optional": false,
            "typeAnnotation": null,
            "start": 3171,
            "end": 3174
          },
          "optional": false,
          "computed": false,
          "start": 3165,
          "end": 3174
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3179,
                  "end": 3183
                },
                "typeArguments": null,
                "start": 3179,
                "end": 3183
              },
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 3185,
                "end": 3187
              },
              "start": 3178,
              "end": 3188
            },
            {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3190,
                  "end": 3194
                },
                "typeArguments": null,
                "start": 3190,
                "end": 3194
              },
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 3196,
                "end": 3198
              },
              "start": 3189,
              "end": 3199
            }
          ],
          "start": 3177,
          "end": 3200
        },
        "start": 3165,
        "end": 3200
      },
      "directive": null,
      "start": 3165,
      "end": 3201
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3202,
            "end": 3207
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t11",
            "optional": false,
            "typeAnnotation": null,
            "start": 3208,
            "end": 3211
          },
          "optional": false,
          "computed": false,
          "start": 3202,
          "end": 3211
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
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
                  "typeAnnotation": null,
                  "start": 3224,
                  "end": 3225
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3227,
                  "end": 3228
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3239,
                      "end": 3240
                    },
                    "start": 3232,
                    "end": 3241
                  }
                ],
                "start": 3230,
                "end": 3243
              },
              "expression": false,
              "start": 3215,
              "end": 3243
            }
          ],
          "start": 3214,
          "end": 3244
        },
        "start": 3202,
        "end": 3244
      },
      "directive": null,
      "start": 3202,
      "end": 3245
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3246,
            "end": 3251
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t12",
            "optional": false,
            "typeAnnotation": null,
            "start": 3252,
            "end": 3255
          },
          "optional": false,
          "computed": false,
          "start": 3246,
          "end": 3255
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3264,
                "end": 3267
              },
              "value": {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3270,
                    "end": 3274
                  },
                  "typeArguments": null,
                  "start": 3270,
                  "end": 3274
                },
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 3276,
                  "end": 3278
                },
                "start": 3269,
                "end": 3279
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 3264,
              "end": 3279
            }
          ],
          "start": 3258,
          "end": 3281
        },
        "start": 3246,
        "end": 3281
      },
      "directive": null,
      "start": 3246,
      "end": 3281
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3282,
            "end": 3287
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t13",
            "optional": false,
            "typeAnnotation": null,
            "start": 3288,
            "end": 3291
          },
          "optional": false,
          "computed": false,
          "start": 3282,
          "end": 3291
        },
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "IFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 3295,
              "end": 3299
            },
            "typeArguments": null,
            "start": 3295,
            "end": 3299
          },
          "expression": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3307,
                  "end": 3308
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
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3319,
                      "end": 3320
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3322,
                      "end": 3323
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3334,
                          "end": 3335
                        },
                        "start": 3327,
                        "end": 3336
                      }
                    ],
                    "start": 3325,
                    "end": 3338
                  },
                  "expression": false,
                  "start": 3310,
                  "end": 3338
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3307,
                "end": 3338
              }
            ],
            "start": 3301,
            "end": 3340
          },
          "start": 3294,
          "end": 3341
        },
        "start": 3282,
        "end": 3341
      },
      "directive": null,
      "start": 3282,
      "end": 3341
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3342,
            "end": 3347
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t14",
            "optional": false,
            "typeAnnotation": null,
            "start": 3348,
            "end": 3351
          },
          "optional": false,
          "computed": false,
          "start": 3342,
          "end": 3351
        },
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "IFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 3355,
              "end": 3359
            },
            "typeArguments": null,
            "start": 3355,
            "end": 3359
          },
          "expression": {
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
                  "start": 3367,
                  "end": 3368
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 3370,
                  "end": 3372
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3367,
                "end": 3372
              }
            ],
            "start": 3361,
            "end": 3374
          },
          "start": 3354,
          "end": 3375
        },
        "start": 3342,
        "end": 3375
      },
      "directive": null,
      "start": 3342,
      "end": 3375
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c9t5",
        "optional": false,
        "typeAnnotation": null,
        "start": 3411,
        "end": 3415
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3423,
                      "end": 3429
                    },
                    "start": 3421,
                    "end": 3429
                  },
                  "start": 3420,
                  "end": 3429
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3434,
                    "end": 3438
                  },
                  "typeArguments": null,
                  "start": 3434,
                  "end": 3438
                },
                "start": 3431,
                "end": 3438
              },
              "start": 3419,
              "end": 3438
            },
            "start": 3417,
            "end": 3438
          },
          "start": 3416,
          "end": 3438
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3440,
        "end": 3442
      },
      "expression": false,
      "start": 3402,
      "end": 3442
    },
    {
      "type": "EmptyStatement",
      "start": 3442,
      "end": 3443
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c9t5",
          "optional": false,
          "typeAnnotation": null,
          "start": 3444,
          "end": 3448
        },
        "typeArguments": null,
        "arguments": [
          {
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
                "typeAnnotation": null,
                "start": 3458,
                "end": 3459
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IFoo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3475,
                        "end": 3479
                      },
                      "typeArguments": null,
                      "start": 3475,
                      "end": 3479
                    },
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 3481,
                      "end": 3483
                    },
                    "start": 3474,
                    "end": 3484
                  },
                  "start": 3467,
                  "end": 3485
                }
              ],
              "start": 3461,
              "end": 3487
            },
            "expression": false,
            "start": 3449,
            "end": 3487
          }
        ],
        "optional": false,
        "start": 3444,
        "end": 3488
      },
      "directive": null,
      "start": 3444,
      "end": 3489
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
            "name": "c10t5",
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
                    "type": "TSFunctionType",
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
                            "start": 3541,
                            "end": 3547
                          },
                          "start": 3539,
                          "end": 3547
                        },
                        "start": 3538,
                        "end": 3547
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3552,
                          "end": 3556
                        },
                        "typeArguments": null,
                        "start": 3552,
                        "end": 3556
                      },
                      "start": 3549,
                      "end": 3556
                    },
                    "start": 3537,
                    "end": 3556
                  },
                  "start": 3534,
                  "end": 3556
                },
                "start": 3531,
                "end": 3556
              },
              "start": 3529,
              "end": 3556
            },
            "start": 3524,
            "end": 3556
          },
          "init": {
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
                        "typeAnnotation": null,
                        "start": 3588,
                        "end": 3589
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IFoo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3601,
                                "end": 3605
                              },
                              "typeArguments": null,
                              "start": 3601,
                              "end": 3605
                            },
                            "expression": {
                              "type": "ObjectExpression",
                              "properties": [],
                              "start": 3607,
                              "end": 3609
                            },
                            "start": 3600,
                            "end": 3610
                          },
                          "start": 3593,
                          "end": 3610
                        }
                      ],
                      "start": 3591,
                      "end": 3612
                    },
                    "expression": false,
                    "start": 3579,
                    "end": 3612
                  },
                  "start": 3572,
                  "end": 3612
                }
              ],
              "start": 3570,
              "end": 3614
            },
            "expression": false,
            "start": 3559,
            "end": 3614
          },
          "definite": false,
          "start": 3524,
          "end": 3614
        }
      ],
      "declare": false,
      "start": 3520,
      "end": 3615
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C11t5",
        "optional": false,
        "typeAnnotation": null,
        "start": 3650,
        "end": 3655
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
              "start": 3658,
              "end": 3669
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
                  "name": "f",
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
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3677,
                              "end": 3683
                            },
                            "start": 3675,
                            "end": 3683
                          },
                          "start": 3674,
                          "end": 3683
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IFoo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3688,
                            "end": 3692
                          },
                          "typeArguments": null,
                          "start": 3688,
                          "end": 3692
                        },
                        "start": 3685,
                        "end": 3692
                      },
                      "start": 3673,
                      "end": 3692
                    },
                    "start": 3671,
                    "end": 3692
                  },
                  "start": 3670,
                  "end": 3692
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3694,
                "end": 3697
              },
              "expression": false,
              "start": 3669,
              "end": 3697
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3658,
            "end": 3697
          }
        ],
        "start": 3656,
        "end": 3699
      },
      "abstract": false,
      "declare": false,
      "start": 3644,
      "end": 3699
    },
    {
      "type": "EmptyStatement",
      "start": 3699,
      "end": 3700
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
            "typeAnnotation": null,
            "start": 3705,
            "end": 3706
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C11t5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3713,
              "end": 3718
            },
            "typeArguments": null,
            "arguments": [
              {
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
                    "typeAnnotation": null,
                    "start": 3728,
                    "end": 3729
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSTypeAssertion",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IFoo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3741,
                            "end": 3745
                          },
                          "typeArguments": null,
                          "start": 3741,
                          "end": 3745
                        },
                        "expression": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 3747,
                          "end": 3749
                        },
                        "start": 3740,
                        "end": 3750
                      },
                      "start": 3733,
                      "end": 3750
                    }
                  ],
                  "start": 3731,
                  "end": 3752
                },
                "expression": false,
                "start": 3719,
                "end": 3752
              }
            ],
            "start": 3709,
            "end": 3753
          },
          "definite": false,
          "start": 3705,
          "end": 3753
        }
      ],
      "declare": false,
      "start": 3701,
      "end": 3754
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
            "name": "c12t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3798,
            "end": 3803
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "start": 3811,
                      "end": 3817
                    },
                    "start": 3809,
                    "end": 3817
                  },
                  "start": 3808,
                  "end": 3817
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 3822,
                  "end": 3828
                },
                "start": 3819,
                "end": 3828
              },
              "start": 3807,
              "end": 3828
            },
            "expression": {
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3840,
                  "end": 3841
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3852,
                      "end": 3853
                    },
                    "start": 3845,
                    "end": 3853
                  }
                ],
                "start": 3843,
                "end": 3855
              },
              "expression": false,
              "start": 3831,
              "end": 3855
            },
            "start": 3806,
            "end": 3856
          },
          "definite": false,
          "start": 3798,
          "end": 3856
        }
      ],
      "declare": false,
      "start": 3794,
      "end": 3857
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
            "name": "c12t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3862,
            "end": 3867
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3871,
                "end": 3875
              },
              "typeArguments": null,
              "start": 3871,
              "end": 3875
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3884,
                    "end": 3885
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3887,
                    "end": 3888
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3884,
                  "end": 3888
                }
              ],
              "start": 3878,
              "end": 3890
            },
            "start": 3870,
            "end": 3891
          },
          "definite": false,
          "start": 3862,
          "end": 3891
        }
      ],
      "declare": false,
      "start": 3858,
      "end": 3892
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
            "name": "c12t3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3897,
            "end": 3902
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 3906,
                "end": 3912
              },
              "start": 3906,
              "end": 3914
            },
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 3916,
              "end": 3918
            },
            "start": 3905,
            "end": 3918
          },
          "definite": false,
          "start": 3897,
          "end": 3918
        }
      ],
      "declare": false,
      "start": 3893,
      "end": 3919
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
            "name": "c12t4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3924,
            "end": 3929
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3939,
                    "end": 3943
                  },
                  "typeArguments": null,
                  "start": 3939,
                  "end": 3943
                },
                "start": 3936,
                "end": 3943
              },
              "start": 3933,
              "end": 3943
            },
            "expression": {
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
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3966,
                          "end": 3970
                        },
                        "typeArguments": null,
                        "start": 3966,
                        "end": 3970
                      },
                      "expression": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 3972,
                        "end": 3974
                      },
                      "start": 3965,
                      "end": 3975
                    },
                    "start": 3958,
                    "end": 3975
                  }
                ],
                "start": 3956,
                "end": 3977
              },
              "expression": false,
              "start": 3945,
              "end": 3977
            },
            "start": 3932,
            "end": 3977
          },
          "definite": false,
          "start": 3924,
          "end": 3977
        }
      ],
      "declare": false,
      "start": 3920,
      "end": 3978
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
            "name": "c12t5",
            "optional": false,
            "typeAnnotation": null,
            "start": 3983,
            "end": 3988
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "start": 3996,
                      "end": 4002
                    },
                    "start": 3994,
                    "end": 4002
                  },
                  "start": 3993,
                  "end": 4002
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4007,
                    "end": 4011
                  },
                  "typeArguments": null,
                  "start": 4007,
                  "end": 4011
                },
                "start": 4004,
                "end": 4011
              },
              "start": 3992,
              "end": 4011
            },
            "expression": {
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
                  "typeAnnotation": null,
                  "start": 4022,
                  "end": 4023
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4035,
                          "end": 4039
                        },
                        "typeArguments": null,
                        "start": 4035,
                        "end": 4039
                      },
                      "expression": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 4041,
                        "end": 4043
                      },
                      "start": 4034,
                      "end": 4044
                    },
                    "start": 4027,
                    "end": 4044
                  }
                ],
                "start": 4025,
                "end": 4046
              },
              "expression": false,
              "start": 4013,
              "end": 4046
            },
            "start": 3991,
            "end": 4046
          },
          "definite": false,
          "start": 3983,
          "end": 4046
        }
      ],
      "declare": false,
      "start": 3979,
      "end": 4047
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
            "name": "c12t6",
            "optional": false,
            "typeAnnotation": null,
            "start": 4052,
            "end": 4057
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "start": 4065,
                      "end": 4071
                    },
                    "start": 4063,
                    "end": 4071
                  },
                  "start": 4062,
                  "end": 4071
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4076,
                      "end": 4082
                    },
                    "start": 4074,
                    "end": 4082
                  },
                  "start": 4073,
                  "end": 4082
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4087,
                    "end": 4091
                  },
                  "typeArguments": null,
                  "start": 4087,
                  "end": 4091
                },
                "start": 4084,
                "end": 4091
              },
              "start": 4061,
              "end": 4091
            },
            "expression": {
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
                  "typeAnnotation": null,
                  "start": 4102,
                  "end": 4103
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4105,
                  "end": 4106
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4118,
                          "end": 4122
                        },
                        "typeArguments": null,
                        "start": 4118,
                        "end": 4122
                      },
                      "expression": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 4124,
                        "end": 4126
                      },
                      "start": 4117,
                      "end": 4127
                    },
                    "start": 4110,
                    "end": 4127
                  }
                ],
                "start": 4108,
                "end": 4129
              },
              "expression": false,
              "start": 4093,
              "end": 4129
            },
            "start": 4060,
            "end": 4129
          },
          "definite": false,
          "start": 4052,
          "end": 4129
        }
      ],
      "declare": false,
      "start": 4048,
      "end": 4130
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
            "name": "c12t7",
            "optional": false,
            "typeAnnotation": null,
            "start": 4135,
            "end": 4140
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSCallSignatureDeclaration",
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
                          "start": 4154,
                          "end": 4160
                        },
                        "start": 4152,
                        "end": 4160
                      },
                      "start": 4151,
                      "end": 4160
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 4165,
                          "end": 4171
                        },
                        "start": 4163,
                        "end": 4171
                      },
                      "start": 4162,
                      "end": 4171
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4174,
                      "end": 4180
                    },
                    "start": 4172,
                    "end": 4180
                  },
                  "start": 4150,
                  "end": 4181
                }
              ],
              "start": 4144,
              "end": 4227
            },
            "expression": {
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
                      "start": 4240,
                      "end": 4246
                    },
                    "start": 4239,
                    "end": 4246
                  },
                  "start": 4238,
                  "end": 4246
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4257,
                      "end": 4258
                    },
                    "start": 4250,
                    "end": 4258
                  }
                ],
                "start": 4248,
                "end": 4260
              },
              "expression": false,
              "start": 4229,
              "end": 4260
            },
            "start": 4143,
            "end": 4260
          },
          "definite": false,
          "start": 4135,
          "end": 4260
        }
      ],
      "declare": false,
      "start": 4131,
      "end": 4261
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
            "name": "c12t8",
            "optional": false,
            "typeAnnotation": null,
            "start": 4267,
            "end": 4272
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "start": 4280,
                      "end": 4286
                    },
                    "start": 4278,
                    "end": 4286
                  },
                  "start": 4277,
                  "end": 4286
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4291,
                      "end": 4297
                    },
                    "start": 4289,
                    "end": 4297
                  },
                  "start": 4288,
                  "end": 4297
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4302,
                  "end": 4308
                },
                "start": 4299,
                "end": 4308
              },
              "start": 4276,
              "end": 4308
            },
            "expression": {
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
                  "typeAnnotation": null,
                  "start": 4319,
                  "end": 4320
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4331,
                      "end": 4332
                    },
                    "start": 4324,
                    "end": 4333
                  }
                ],
                "start": 4322,
                "end": 4335
              },
              "expression": false,
              "start": 4310,
              "end": 4335
            },
            "start": 4275,
            "end": 4335
          },
          "definite": false,
          "start": 4267,
          "end": 4335
        }
      ],
      "declare": false,
      "start": 4263,
      "end": 4336
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
            "name": "c12t9",
            "optional": false,
            "typeAnnotation": null,
            "start": 4341,
            "end": 4346
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 4350,
                  "end": 4356
                },
                "start": 4350,
                "end": 4358
              },
              "start": 4350,
              "end": 4360
            },
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 4363,
                  "end": 4365
                },
                {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 4366,
                  "end": 4368
                }
              ],
              "start": 4362,
              "end": 4369
            },
            "start": 4349,
            "end": 4369
          },
          "definite": false,
          "start": 4341,
          "end": 4369
        }
      ],
      "declare": false,
      "start": 4337,
      "end": 4370
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
            "name": "c12t10",
            "optional": false,
            "typeAnnotation": null,
            "start": 4375,
            "end": 4381
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4385,
                  "end": 4389
                },
                "typeArguments": null,
                "start": 4385,
                "end": 4389
              },
              "start": 4385,
              "end": 4391
            },
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4395,
                      "end": 4399
                    },
                    "typeArguments": null,
                    "start": 4395,
                    "end": 4399
                  },
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 4401,
                    "end": 4403
                  },
                  "start": 4394,
                  "end": 4404
                },
                {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4406,
                      "end": 4410
                    },
                    "typeArguments": null,
                    "start": 4406,
                    "end": 4410
                  },
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 4412,
                    "end": 4414
                  },
                  "start": 4405,
                  "end": 4415
                }
              ],
              "start": 4393,
              "end": 4416
            },
            "start": 4384,
            "end": 4416
          },
          "definite": false,
          "start": 4375,
          "end": 4416
        }
      ],
      "declare": false,
      "start": 4371,
      "end": 4417
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
            "name": "c12t11",
            "optional": false,
            "typeAnnotation": null,
            "start": 4422,
            "end": 4428
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 4437,
                            "end": 4443
                          },
                          "start": 4435,
                          "end": 4443
                        },
                        "start": 4434,
                        "end": 4443
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 4448,
                            "end": 4454
                          },
                          "start": 4446,
                          "end": 4454
                        },
                        "start": 4445,
                        "end": 4454
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 4457,
                        "end": 4463
                      },
                      "start": 4455,
                      "end": 4463
                    },
                    "start": 4433,
                    "end": 4464
                  }
                ],
                "start": 4432,
                "end": 4465
              },
              "start": 4432,
              "end": 4467
            },
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
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
                      "typeAnnotation": null,
                      "start": 4479,
                      "end": 4480
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4482,
                      "end": 4483
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4494,
                          "end": 4495
                        },
                        "start": 4487,
                        "end": 4496
                      }
                    ],
                    "start": 4485,
                    "end": 4498
                  },
                  "expression": false,
                  "start": 4470,
                  "end": 4498
                }
              ],
              "start": 4469,
              "end": 4499
            },
            "start": 4431,
            "end": 4499
          },
          "definite": false,
          "start": 4422,
          "end": 4499
        }
      ],
      "declare": false,
      "start": 4418,
      "end": 4500
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
            "name": "c12t12",
            "optional": false,
            "typeAnnotation": null,
            "start": 4505,
            "end": 4511
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IBar",
                "optional": false,
                "typeAnnotation": null,
                "start": 4515,
                "end": 4519
              },
              "typeArguments": null,
              "start": 4515,
              "end": 4519
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4527,
                    "end": 4530
                  },
                  "value": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IFoo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4533,
                        "end": 4537
                      },
                      "typeArguments": null,
                      "start": 4533,
                      "end": 4537
                    },
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 4539,
                      "end": 4541
                    },
                    "start": 4532,
                    "end": 4542
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 4527,
                  "end": 4542
                }
              ],
              "start": 4521,
              "end": 4544
            },
            "start": 4514,
            "end": 4544
          },
          "definite": false,
          "start": 4505,
          "end": 4544
        }
      ],
      "declare": false,
      "start": 4501,
      "end": 4544
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
            "name": "c12t13",
            "optional": false,
            "typeAnnotation": null,
            "start": 4549,
            "end": 4555
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 4559,
                "end": 4563
              },
              "typeArguments": null,
              "start": 4559,
              "end": 4563
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4572,
                    "end": 4573
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
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4584,
                        "end": 4585
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4587,
                        "end": 4588
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4599,
                            "end": 4600
                          },
                          "start": 4592,
                          "end": 4601
                        }
                      ],
                      "start": 4590,
                      "end": 4603
                    },
                    "expression": false,
                    "start": 4575,
                    "end": 4603
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 4572,
                  "end": 4603
                }
              ],
              "start": 4566,
              "end": 4605
            },
            "start": 4558,
            "end": 4606
          },
          "definite": false,
          "start": 4549,
          "end": 4606
        }
      ],
      "declare": false,
      "start": 4545,
      "end": 4606
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
            "name": "c12t14",
            "optional": false,
            "typeAnnotation": null,
            "start": 4611,
            "end": 4617
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 4621,
                "end": 4625
              },
              "typeArguments": null,
              "start": 4621,
              "end": 4625
            },
            "expression": {
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
                    "start": 4634,
                    "end": 4635
                  },
                  "value": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 4637,
                    "end": 4639
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 4634,
                  "end": 4639
                }
              ],
              "start": 4628,
              "end": 4641
            },
            "start": 4620,
            "end": 4642
          },
          "definite": false,
          "start": 4611,
          "end": 4642
        }
      ],
      "declare": false,
      "start": 4607,
      "end": 4642
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EF1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4750,
        "end": 4753
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSNumberKeyword",
              "start": 4756,
              "end": 4762
            },
            "start": 4755,
            "end": 4762
          },
          "start": 4754,
          "end": 4762
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 4766,
              "end": 4772
            },
            "start": 4765,
            "end": 4772
          },
          "start": 4764,
          "end": 4772
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 4774,
          "end": 4780
        },
        "start": 4773,
        "end": 4780
      },
      "body": null,
      "expression": false,
      "start": 4733,
      "end": 4781
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EF1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4792,
        "end": 4795
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
          "typeAnnotation": null,
          "start": 4796,
          "end": 4797
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 4798,
          "end": 4799
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 4810,
                "end": 4811
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 4812,
                "end": 4813
              },
              "start": 4810,
              "end": 4813
            },
            "start": 4803,
            "end": 4814
          }
        ],
        "start": 4801,
        "end": 4816
      },
      "expression": false,
      "start": 4783,
      "end": 4816
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
            "name": "efv",
            "optional": false,
            "typeAnnotation": null,
            "start": 4822,
            "end": 4825
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "EF1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4828,
              "end": 4831
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 4832,
                "end": 4833
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 4834,
                "end": 4835
              }
            ],
            "optional": false,
            "start": 4828,
            "end": 4836
          },
          "definite": false,
          "start": 4822,
          "end": 4836
        }
      ],
      "declare": false,
      "start": 4818,
      "end": 4837
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null,
        "start": 4909,
        "end": 4914
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
              "start": 4923,
              "end": 4934
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "type": "TSNumberKeyword",
                      "start": 4938,
                      "end": 4944
                    },
                    "start": 4936,
                    "end": 4944
                  },
                  "start": 4935,
                  "end": 4944
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4949,
                      "end": 4955
                    },
                    "start": 4947,
                    "end": 4955
                  },
                  "start": 4946,
                  "end": 4955
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 4934,
              "end": 4957
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4923,
            "end": 4957
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 4964,
              "end": 4965
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4967,
                "end": 4973
              },
              "start": 4965,
              "end": 4973
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4964,
            "end": 4974
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 4981,
              "end": 4982
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4984,
                "end": 4990
              },
              "start": 4982,
              "end": 4990
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4981,
            "end": 4991
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null,
              "start": 4998,
              "end": 5001
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 5006,
                      "end": 5012
                    },
                    "start": 5004,
                    "end": 5012
                  },
                  "start": 5002,
                  "end": 5012
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dy",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 5018,
                      "end": 5024
                    },
                    "start": 5016,
                    "end": 5024
                  },
                  "start": 5014,
                  "end": 5024
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5027,
                    "end": 5032
                  },
                  "typeArguments": null,
                  "start": 5027,
                  "end": 5032
                },
                "start": 5025,
                "end": 5032
              },
              "body": null,
              "expression": false,
              "start": 5001,
              "end": 5033
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4998,
            "end": 5033
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "origin",
              "optional": false,
              "typeAnnotation": null,
              "start": 5047,
              "end": 5053
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5055,
                  "end": 5060
                },
                "typeArguments": null,
                "start": 5055,
                "end": 5060
              },
              "start": 5053,
              "end": 5060
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 5040,
            "end": 5061
          }
        ],
        "start": 4915,
        "end": 5064
      },
      "abstract": false,
      "declare": true,
      "start": 4895,
      "end": 5064
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Point",
            "optional": false,
            "typeAnnotation": null,
            "start": 5066,
            "end": 5071
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "origin",
            "optional": false,
            "typeAnnotation": null,
            "start": 5072,
            "end": 5078
          },
          "optional": false,
          "computed": false,
          "start": 5066,
          "end": 5078
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Point",
            "optional": false,
            "typeAnnotation": null,
            "start": 5085,
            "end": 5090
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 5091,
              "end": 5092
            },
            {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 5094,
              "end": 5095
            }
          ],
          "start": 5081,
          "end": 5096
        },
        "start": 5066,
        "end": 5096
      },
      "directive": null,
      "start": 5066,
      "end": 5097
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null,
              "start": 5099,
              "end": 5104
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 5105,
              "end": 5114
            },
            "optional": false,
            "computed": false,
            "start": 5099,
            "end": 5114
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null,
            "start": 5115,
            "end": 5118
          },
          "optional": false,
          "computed": false,
          "start": 5099,
          "end": 5118
        },
        "right": {
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
              "name": "dx",
              "optional": false,
              "typeAnnotation": null,
              "start": 5130,
              "end": 5132
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "dy",
              "optional": false,
              "typeAnnotation": null,
              "start": 5134,
              "end": 5136
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5155,
                    "end": 5160
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 5161,
                          "end": 5165
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5166,
                          "end": 5167
                        },
                        "optional": false,
                        "computed": false,
                        "start": 5161,
                        "end": 5167
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dx",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5170,
                        "end": 5172
                      },
                      "start": 5161,
                      "end": 5172
                    },
                    {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 5174,
                          "end": 5178
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5179,
                          "end": 5180
                        },
                        "optional": false,
                        "computed": false,
                        "start": 5174,
                        "end": 5180
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dy",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5183,
                        "end": 5185
                      },
                      "start": 5174,
                      "end": 5185
                    }
                  ],
                  "start": 5151,
                  "end": 5186
                },
                "start": 5144,
                "end": 5187
              }
            ],
            "start": 5138,
            "end": 5189
          },
          "expression": false,
          "start": 5121,
          "end": 5189
        },
        "start": 5099,
        "end": 5189
      },
      "directive": null,
      "start": 5099,
      "end": 5190
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Point",
            "optional": false,
            "typeAnnotation": null,
            "start": 5192,
            "end": 5197
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 5198,
            "end": 5207
          },
          "optional": false,
          "computed": false,
          "start": 5192,
          "end": 5207
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
                "start": 5216,
                "end": 5217
              },
              "value": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 5219,
                "end": 5220
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 5216,
              "end": 5220
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
                "start": 5226,
                "end": 5227
              },
              "value": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 5229,
                "end": 5230
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 5226,
              "end": 5230
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "add",
                "optional": false,
                "typeAnnotation": null,
                "start": 5236,
                "end": 5239
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
                    "name": "dx",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5250,
                    "end": 5252
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5254,
                    "end": 5256
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5279,
                          "end": 5284
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 5285,
                                "end": 5289
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5290,
                                "end": 5291
                              },
                              "optional": false,
                              "computed": false,
                              "start": 5285,
                              "end": 5291
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dx",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5294,
                              "end": 5296
                            },
                            "start": 5285,
                            "end": 5296
                          },
                          {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 5298,
                                "end": 5302
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5303,
                                "end": 5304
                              },
                              "optional": false,
                              "computed": false,
                              "start": 5298,
                              "end": 5304
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dy",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5307,
                              "end": 5309
                            },
                            "start": 5298,
                            "end": 5309
                          }
                        ],
                        "start": 5275,
                        "end": 5310
                      },
                      "start": 5268,
                      "end": 5311
                    }
                  ],
                  "start": 5258,
                  "end": 5317
                },
                "expression": false,
                "start": 5241,
                "end": 5317
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 5236,
              "end": 5317
            }
          ],
          "start": 5210,
          "end": 5319
        },
        "start": 5192,
        "end": 5319
      },
      "directive": null,
      "start": 5192,
      "end": 5320
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 5332,
        "end": 5333
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 5336,
              "end": 5337
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5339,
                "end": 5345
              },
              "start": 5337,
              "end": 5345
            },
            "accessibility": null,
            "static": false,
            "start": 5336,
            "end": 5346
          }
        ],
        "start": 5334,
        "end": 5348
      },
      "declare": false,
      "start": 5322,
      "end": 5348
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 5359,
        "end": 5360
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 5369,
            "end": 5370
          },
          "typeArguments": null,
          "start": 5369,
          "end": 5370
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 5371,
        "end": 5374
      },
      "declare": false,
      "start": 5349,
      "end": 5374
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5382,
                  "end": 5383
                },
                "typeArguments": null,
                "start": 5382,
                "end": 5383
              },
              "start": 5380,
              "end": 5383
            },
            "start": 5379,
            "end": 5383
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 5386,
            "end": 5389
          },
          "definite": false,
          "start": 5379,
          "end": 5389
        }
      ],
      "declare": false,
      "start": 5375,
      "end": 5390
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 5390
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 22,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 32,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 61,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "i",
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
    "type": "Identifier",
    "value": "number",
    "start": 78,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 98,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 113,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 126,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "IBar",
    "start": 136,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 147,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 152,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 200,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "C1T5",
    "start": 206,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 217,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 226,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "value": "string",
    "start": 237,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 245,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 248,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 255,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 257,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 279,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 341,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "C2T5",
    "start": 351,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 362,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 369,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 373,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 382,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 393,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 401,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 404,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 413,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "i",
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
    "value": "{",
    "start": 425,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 435,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 451,
    "end": 452
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 487,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "c3t1",
    "start": 491,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 501,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 509,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 512,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Keyword",
    "value": "function",
    "start": 522,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "type": "Keyword",
    "value": "return",
    "start": 536,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 547,
    "end": 548
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 549,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "c3t2",
    "start": 553,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 561,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "type": "Numeric",
    "value": "1",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 579,
    "end": 580
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 581,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "c3t3",
    "start": 585,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 591,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 604,
    "end": 605
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 606,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "c3t4",
    "start": 610,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 619,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 622,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 627,
    "end": 628
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 629,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 640,
    "end": 641
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 642,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 650,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 661,
    "end": 662
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 663,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "c3t5",
    "start": 667,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 677,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 685,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 688,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 693,
    "end": 694
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 695,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 707,
    "end": 708
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 709,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 717,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 728,
    "end": 729
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 730,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "c3t6",
    "start": 734,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 744,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 755,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 763,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 766,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 771,
    "end": 772
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 773,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 788,
    "end": 789
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 790,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 798,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 809,
    "end": 810
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 811,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "c3t7",
    "start": 815,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 831,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 840,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 857,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 861,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 870,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 880,
    "end": 881
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 882,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "type": "Keyword",
    "value": "return",
    "start": 896,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 907,
    "end": 908
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 910,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "c3t8",
    "start": 914,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 924,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 935,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 943,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 946,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 953,
    "end": 954
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 955,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 967,
    "end": 968
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 969,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 979,
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
    "start": 982,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "c3t9",
    "start": 986,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 992,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1014,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "c3t10",
    "start": 1018,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 1025,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 1036,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 1047,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1053,
    "end": 1054
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
    "value": "]",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1059,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "c3t11",
    "start": 1063,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1075,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1086,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1095,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "[",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1109,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1126,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1140,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "c3t12",
    "start": 1144,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "IBar",
    "start": 1151,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1164,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 1170,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "var",
    "start": 1182,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "c3t13",
    "start": 1186,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 1195,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1210,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1227,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1242,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "c3t14",
    "start": 1246,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 1255,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1315,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "C4T5",
    "start": 1321,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1332,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1341,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1352,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1360,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1363,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1375,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1399,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1404,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1410,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1439,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1510,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "C5T5",
    "start": 1520,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1531,
    "end": 1537
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1538,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1542,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1551,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1562,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1570,
    "end": 1572
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1573,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1585,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1591,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1616,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1667,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "c6t5",
    "start": 1671,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1681,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1689,
    "end": 1691
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 1692,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Identifier",
    "value": "c6t5",
    "start": 1698,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1710,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1718,
    "end": 1720
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 1721,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1726,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1740,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 1748,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1797,
    "end": 1800
  },
  {
    "type": "Identifier",
    "value": "c7t2",
    "start": 1801,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 1807,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Identifier",
    "value": "c7t2",
    "start": 1820,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 1831,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1886,
    "end": 1895
  },
  {
    "type": "Identifier",
    "value": "IPlaceHolder",
    "start": 1896,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1915,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1923,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1931,
    "end": 1933
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1934,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1946,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 1950,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1960,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1964,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1978,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1985,
    "end": 1987
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 1988,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 1998,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2006,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2014,
    "end": 2016
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2017,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Identifier",
    "value": "t6",
    "start": 2027,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2035,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2046,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2054,
    "end": 2056
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2057,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Identifier",
    "value": "t7",
    "start": 2067,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2089,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2100,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2109,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "t8",
    "start": 2184,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2192,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2203,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2211,
    "end": 2213
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2214,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Identifier",
    "value": "t9",
    "start": 2226,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2230,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Identifier",
    "value": "t10",
    "start": 2246,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2251,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Identifier",
    "value": "t11",
    "start": 2263,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2273,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2284,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2293,
    "end": 2299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Identifier",
    "value": "t12",
    "start": 2309,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Identifier",
    "value": "IBar",
    "start": 2314,
    "end": 2318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Identifier",
    "value": "t13",
    "start": 2324,
    "end": 2327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2329,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "t14",
    "start": 2339,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2344,
    "end": 2348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2357,
    "end": 2360
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 2361,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 2374,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2382,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2390,
    "end": 2392
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2393,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 2405,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2409,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 2419,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2423,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2429,
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
    "value": ";",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 2437,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2444,
    "end": 2446
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2447,
    "end": 2451
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2451,
    "end": 2452
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 2457,
    "end": 2459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2459,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2465,
    "end": 2471
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2473,
    "end": 2475
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2476,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Identifier",
    "value": "t6",
    "start": 2486,
    "end": 2488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2494,
    "end": 2500
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2505,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2511,
    "end": 2512
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2513,
    "end": 2515
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2516,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "Identifier",
    "value": "t7",
    "start": 2526,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2548,
    "end": 2554
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2556,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2559,
    "end": 2565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2565,
    "end": 2566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2568,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2574,
    "end": 2575
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2636,
    "end": 2637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2637,
    "end": 2638
  },
  {
    "type": "Identifier",
    "value": "t8",
    "start": 2643,
    "end": 2645
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2651,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2662,
    "end": 2668
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2668,
    "end": 2669
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2670,
    "end": 2672
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2673,
    "end": 2679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2679,
    "end": 2680
  },
  {
    "type": "Identifier",
    "value": "t9",
    "start": 2685,
    "end": 2687
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2687,
    "end": 2688
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2689,
    "end": 2695
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2695,
    "end": 2696
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2696,
    "end": 2697
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2697,
    "end": 2698
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2698,
    "end": 2699
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Identifier",
    "value": "t10",
    "start": 2705,
    "end": 2708
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2710,
    "end": 2714
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2714,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Identifier",
    "value": "t11",
    "start": 2722,
    "end": 2725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2725,
    "end": 2726
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2727,
    "end": 2728
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2729,
    "end": 2730
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2730,
    "end": 2731
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2732,
    "end": 2738
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2738,
    "end": 2739
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2740,
    "end": 2741
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2743,
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
    "value": ":",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2752,
    "end": 2758
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2758,
    "end": 2759
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2759,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2761,
    "end": 2762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2762,
    "end": 2763
  },
  {
    "type": "Identifier",
    "value": "t12",
    "start": 2768,
    "end": 2771
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Identifier",
    "value": "IBar",
    "start": 2773,
    "end": 2777
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "Identifier",
    "value": "t13",
    "start": 2783,
    "end": 2786
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2786,
    "end": 2787
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2788,
    "end": 2792
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2792,
    "end": 2793
  },
  {
    "type": "Identifier",
    "value": "t14",
    "start": 2798,
    "end": 2801
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2801,
    "end": 2802
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2803,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2807,
    "end": 2808
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2809,
    "end": 2810
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2811,
    "end": 2812
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2813,
    "end": 2814
  },
  {
    "type": "Identifier",
    "value": "IPlaceHolder",
    "start": 2814,
    "end": 2826
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2826,
    "end": 2827
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2827,
    "end": 2828
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2828,
    "end": 2829
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2829,
    "end": 2830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2830,
    "end": 2831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2831,
    "end": 2832
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 2834,
    "end": 2839
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2839,
    "end": 2840
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 2840,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2845,
    "end": 2846
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2846,
    "end": 2854
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2854,
    "end": 2855
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2855,
    "end": 2856
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2856,
    "end": 2857
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2860,
    "end": 2866
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2867,
    "end": 2868
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2869,
    "end": 2870
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2870,
    "end": 2871
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2871,
    "end": 2872
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 2873,
    "end": 2878
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2878,
    "end": 2879
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 2879,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2882,
    "end": 2883
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2884,
    "end": 2885
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2885,
    "end": 2889
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2889,
    "end": 2890
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2890,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2891,
    "end": 2892
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2897,
    "end": 2898
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2898,
    "end": 2899
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2900,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2903,
    "end": 2904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2904,
    "end": 2905
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 2906,
    "end": 2911
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2911,
    "end": 2912
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 2912,
    "end": 2914
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2915,
    "end": 2916
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2917,
    "end": 2918
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2918,
    "end": 2919
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2919,
    "end": 2920
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 2921,
    "end": 2926
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2926,
    "end": 2927
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 2927,
    "end": 2929
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2932,
    "end": 2940
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2943,
    "end": 2944
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2945,
    "end": 2951
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2953,
    "end": 2957
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2957,
    "end": 2958
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2958,
    "end": 2959
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2959,
    "end": 2960
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2960,
    "end": 2961
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2963,
    "end": 2964
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 2966,
    "end": 2971
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 2972,
    "end": 2974
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2975,
    "end": 2976
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2977,
    "end": 2985
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2985,
    "end": 2986
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2986,
    "end": 2987
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2987,
    "end": 2988
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2989,
    "end": 2990
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2991,
    "end": 2997
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2998,
    "end": 2999
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2999,
    "end": 3003
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3003,
    "end": 3004
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3004,
    "end": 3005
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3005,
    "end": 3006
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3007,
    "end": 3008
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3009,
    "end": 3010
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3010,
    "end": 3011
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 3012,
    "end": 3017
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3017,
    "end": 3018
  },
  {
    "type": "Identifier",
    "value": "t6",
    "start": 3018,
    "end": 3020
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3023,
    "end": 3031
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3031,
    "end": 3032
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3032,
    "end": 3033
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3033,
    "end": 3034
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 3035,
    "end": 3036
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3036,
    "end": 3037
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3038,
    "end": 3039
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3040,
    "end": 3046
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3047,
    "end": 3048
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3048,
    "end": 3052
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3052,
    "end": 3053
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3053,
    "end": 3054
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3055,
    "end": 3056
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3059,
    "end": 3060
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 3061,
    "end": 3066
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3066,
    "end": 3067
  },
  {
    "type": "Identifier",
    "value": "t7",
    "start": 3067,
    "end": 3069
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3070,
    "end": 3071
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3072,
    "end": 3080
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3080,
    "end": 3081
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3081,
    "end": 3082
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3082,
    "end": 3083
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3084,
    "end": 3090
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3090,
    "end": 3091
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3094,
    "end": 3100
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3101,
    "end": 3102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3103,
    "end": 3104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3104,
    "end": 3105
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 3107,
    "end": 3112
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3112,
    "end": 3113
  },
  {
    "type": "Identifier",
    "value": "t8",
    "start": 3113,
    "end": 3115
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3118,
    "end": 3126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3127,
    "end": 3128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3128,
    "end": 3129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3130,
    "end": 3131
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3132,
    "end": 3138
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3139,
    "end": 3140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3140,
    "end": 3141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3142,
    "end": 3143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3143,
    "end": 3144
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 3145,
    "end": 3150
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3150,
    "end": 3151
  },
  {
    "type": "Identifier",
    "value": "t9",
    "start": 3151,
    "end": 3153
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3154,
    "end": 3155
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3156,
    "end": 3157
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3157,
    "end": 3158
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3158,
    "end": 3159
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3160,
    "end": 3161
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3161,
    "end": 3162
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3162,
    "end": 3163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3163,
    "end": 3164
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 3165,
    "end": 3170
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3170,
    "end": 3171
  },
  {
    "type": "Identifier",
    "value": "t10",
    "start": 3171,
    "end": 3174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3175,
    "end": 3176
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3177,
    "end": 3178
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3178,
    "end": 3179
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3179,
    "end": 3183
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3183,
    "end": 3184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3184,
    "end": 3185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3185,
    "end": 3186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3186,
    "end": 3187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3187,
    "end": 3188
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3188,
    "end": 3189
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3189,
    "end": 3190
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3190,
    "end": 3194
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3194,
    "end": 3195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3195,
    "end": 3196
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3196,
    "end": 3197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3197,
    "end": 3198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3198,
    "end": 3199
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3199,
    "end": 3200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3200,
    "end": 3201
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 3202,
    "end": 3207
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3207,
    "end": 3208
  },
  {
    "type": "Identifier",
    "value": "t11",
    "start": 3208,
    "end": 3211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3212,
    "end": 3213
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3214,
    "end": 3215
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3215,
    "end": 3223
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3223,
    "end": 3224
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3224,
    "end": 3225
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3225,
    "end": 3226
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 3227,
    "end": 3228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3230,
    "end": 3231
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3232,
    "end": 3238
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 3239,
    "end": 3240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3240,
    "end": 3241
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3242,
    "end": 3243
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3243,
    "end": 3244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3244,
    "end": 3245
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 3246,
    "end": 3251
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3251,
    "end": 3252
  },
  {
    "type": "Identifier",
    "value": "t12",
    "start": 3252,
    "end": 3255
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3256,
    "end": 3257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3258,
    "end": 3259
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3264,
    "end": 3267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3267,
    "end": 3268
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3269,
    "end": 3270
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3270,
    "end": 3274
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3274,
    "end": 3275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3275,
    "end": 3276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3276,
    "end": 3277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3277,
    "end": 3278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3278,
    "end": 3279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3280,
    "end": 3281
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 3282,
    "end": 3287
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3287,
    "end": 3288
  },
  {
    "type": "Identifier",
    "value": "t13",
    "start": 3288,
    "end": 3291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3292,
    "end": 3293
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3294,
    "end": 3295
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3295,
    "end": 3299
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3299,
    "end": 3300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3300,
    "end": 3301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3301,
    "end": 3302
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3307,
    "end": 3308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3308,
    "end": 3309
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3310,
    "end": 3318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3318,
    "end": 3319
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3319,
    "end": 3320
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3320,
    "end": 3321
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 3322,
    "end": 3323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3323,
    "end": 3324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3325,
    "end": 3326
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3327,
    "end": 3333
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 3334,
    "end": 3335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3335,
    "end": 3336
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3337,
    "end": 3338
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3339,
    "end": 3340
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3340,
    "end": 3341
  },
  {
    "type": "Identifier",
    "value": "objc8",
    "start": 3342,
    "end": 3347
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3347,
    "end": 3348
  },
  {
    "type": "Identifier",
    "value": "t14",
    "start": 3348,
    "end": 3351
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3352,
    "end": 3353
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3354,
    "end": 3355
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3355,
    "end": 3359
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3359,
    "end": 3360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3360,
    "end": 3361
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3361,
    "end": 3362
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3367,
    "end": 3368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3368,
    "end": 3369
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3370,
    "end": 3371
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3371,
    "end": 3372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3373,
    "end": 3374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3374,
    "end": 3375
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3402,
    "end": 3410
  },
  {
    "type": "Identifier",
    "value": "c9t5",
    "start": 3411,
    "end": 3415
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3415,
    "end": 3416
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3416,
    "end": 3417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3417,
    "end": 3418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3419,
    "end": 3420
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3420,
    "end": 3421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3421,
    "end": 3422
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3423,
    "end": 3429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3429,
    "end": 3430
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3431,
    "end": 3433
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3434,
    "end": 3438
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3438,
    "end": 3439
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3440,
    "end": 3441
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3441,
    "end": 3442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3442,
    "end": 3443
  },
  {
    "type": "Identifier",
    "value": "c9t5",
    "start": 3444,
    "end": 3448
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3448,
    "end": 3449
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3449,
    "end": 3457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3457,
    "end": 3458
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3458,
    "end": 3459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3459,
    "end": 3460
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3461,
    "end": 3462
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3467,
    "end": 3473
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3474,
    "end": 3475
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3475,
    "end": 3479
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3479,
    "end": 3480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3480,
    "end": 3481
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3481,
    "end": 3482
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3482,
    "end": 3483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3483,
    "end": 3484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3484,
    "end": 3485
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3486,
    "end": 3487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3487,
    "end": 3488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3488,
    "end": 3489
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3520,
    "end": 3523
  },
  {
    "type": "Identifier",
    "value": "c10t5",
    "start": 3524,
    "end": 3529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3529,
    "end": 3530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3531,
    "end": 3532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3532,
    "end": 3533
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3534,
    "end": 3536
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3537,
    "end": 3538
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3538,
    "end": 3539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3539,
    "end": 3540
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3541,
    "end": 3547
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3547,
    "end": 3548
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3549,
    "end": 3551
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3552,
    "end": 3556
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3557,
    "end": 3558
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3559,
    "end": 3567
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3567,
    "end": 3568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3568,
    "end": 3569
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3570,
    "end": 3571
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3572,
    "end": 3578
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3579,
    "end": 3587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3587,
    "end": 3588
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3588,
    "end": 3589
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3589,
    "end": 3590
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3591,
    "end": 3592
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3593,
    "end": 3599
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3600,
    "end": 3601
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3601,
    "end": 3605
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3605,
    "end": 3606
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3606,
    "end": 3607
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3607,
    "end": 3608
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3608,
    "end": 3609
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3609,
    "end": 3610
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3611,
    "end": 3612
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3613,
    "end": 3614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3614,
    "end": 3615
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3644,
    "end": 3649
  },
  {
    "type": "Identifier",
    "value": "C11t5",
    "start": 3650,
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
    "value": "constructor",
    "start": 3658,
    "end": 3669
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3669,
    "end": 3670
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3670,
    "end": 3671
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3671,
    "end": 3672
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3673,
    "end": 3674
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3674,
    "end": 3675
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": ")",
    "start": 3683,
    "end": 3684
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3685,
    "end": 3687
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3688,
    "end": 3692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3692,
    "end": 3693
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3694,
    "end": 3695
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3696,
    "end": 3697
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3698,
    "end": 3699
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3699,
    "end": 3700
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3701,
    "end": 3704
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3705,
    "end": 3706
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3707,
    "end": 3708
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3709,
    "end": 3712
  },
  {
    "type": "Identifier",
    "value": "C11t5",
    "start": 3713,
    "end": 3718
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3718,
    "end": 3719
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3719,
    "end": 3727
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3727,
    "end": 3728
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3728,
    "end": 3729
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3729,
    "end": 3730
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3731,
    "end": 3732
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3733,
    "end": 3739
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3740,
    "end": 3741
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3741,
    "end": 3745
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3745,
    "end": 3746
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3746,
    "end": 3747
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3747,
    "end": 3748
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3748,
    "end": 3749
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3749,
    "end": 3750
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3751,
    "end": 3752
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3752,
    "end": 3753
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3753,
    "end": 3754
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3794,
    "end": 3797
  },
  {
    "type": "Identifier",
    "value": "c12t1",
    "start": 3798,
    "end": 3803
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3804,
    "end": 3805
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3806,
    "end": 3807
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3807,
    "end": 3808
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 3808,
    "end": 3809
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3809,
    "end": 3810
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3811,
    "end": 3817
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3817,
    "end": 3818
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3819,
    "end": 3821
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3822,
    "end": 3828
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3828,
    "end": 3829
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3830,
    "end": 3831
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3831,
    "end": 3839
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3839,
    "end": 3840
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 3840,
    "end": 3841
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3841,
    "end": 3842
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3843,
    "end": 3844
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3845,
    "end": 3851
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 3852,
    "end": 3853
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3854,
    "end": 3855
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3855,
    "end": 3856
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3856,
    "end": 3857
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3858,
    "end": 3861
  },
  {
    "type": "Identifier",
    "value": "c12t2",
    "start": 3862,
    "end": 3867
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3868,
    "end": 3869
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3870,
    "end": 3871
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3871,
    "end": 3875
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3875,
    "end": 3876
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3877,
    "end": 3878
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3878,
    "end": 3879
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3884,
    "end": 3885
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3885,
    "end": 3886
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3887,
    "end": 3888
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3889,
    "end": 3890
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3890,
    "end": 3891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3891,
    "end": 3892
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3893,
    "end": 3896
  },
  {
    "type": "Identifier",
    "value": "c12t3",
    "start": 3897,
    "end": 3902
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3903,
    "end": 3904
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3905,
    "end": 3906
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3906,
    "end": 3912
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3912,
    "end": 3913
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3913,
    "end": 3914
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3914,
    "end": 3915
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3916,
    "end": 3917
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3917,
    "end": 3918
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3918,
    "end": 3919
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3920,
    "end": 3923
  },
  {
    "type": "Identifier",
    "value": "c12t4",
    "start": 3924,
    "end": 3929
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3930,
    "end": 3931
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3932,
    "end": 3933
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3933,
    "end": 3934
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3934,
    "end": 3935
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3936,
    "end": 3938
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3939,
    "end": 3943
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3943,
    "end": 3944
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3945,
    "end": 3953
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3953,
    "end": 3954
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3954,
    "end": 3955
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3956,
    "end": 3957
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3958,
    "end": 3964
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3965,
    "end": 3966
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 3966,
    "end": 3970
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3970,
    "end": 3971
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3971,
    "end": 3972
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3972,
    "end": 3973
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3973,
    "end": 3974
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3974,
    "end": 3975
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3976,
    "end": 3977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3977,
    "end": 3978
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3979,
    "end": 3982
  },
  {
    "type": "Identifier",
    "value": "c12t5",
    "start": 3983,
    "end": 3988
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3989,
    "end": 3990
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3991,
    "end": 3992
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3992,
    "end": 3993
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3993,
    "end": 3994
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3994,
    "end": 3995
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3996,
    "end": 4002
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4002,
    "end": 4003
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4004,
    "end": 4006
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 4007,
    "end": 4011
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4011,
    "end": 4012
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4013,
    "end": 4021
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4021,
    "end": 4022
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4022,
    "end": 4023
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4023,
    "end": 4024
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4025,
    "end": 4026
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4027,
    "end": 4033
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4034,
    "end": 4035
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 4035,
    "end": 4039
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4039,
    "end": 4040
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4040,
    "end": 4041
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4041,
    "end": 4042
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4042,
    "end": 4043
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4043,
    "end": 4044
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4045,
    "end": 4046
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4046,
    "end": 4047
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4048,
    "end": 4051
  },
  {
    "type": "Identifier",
    "value": "c12t6",
    "start": 4052,
    "end": 4057
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4058,
    "end": 4059
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4060,
    "end": 4061
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4061,
    "end": 4062
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4062,
    "end": 4063
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4063,
    "end": 4064
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4065,
    "end": 4071
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4071,
    "end": 4072
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4073,
    "end": 4074
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4074,
    "end": 4075
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4076,
    "end": 4082
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4082,
    "end": 4083
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4084,
    "end": 4086
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 4087,
    "end": 4091
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4091,
    "end": 4092
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4093,
    "end": 4101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4101,
    "end": 4102
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4102,
    "end": 4103
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4103,
    "end": 4104
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4105,
    "end": 4106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4106,
    "end": 4107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4108,
    "end": 4109
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4110,
    "end": 4116
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4117,
    "end": 4118
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 4118,
    "end": 4122
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4122,
    "end": 4123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4123,
    "end": 4124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4124,
    "end": 4125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4125,
    "end": 4126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4126,
    "end": 4127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4128,
    "end": 4129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4129,
    "end": 4130
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4131,
    "end": 4134
  },
  {
    "type": "Identifier",
    "value": "c12t7",
    "start": 4135,
    "end": 4140
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4141,
    "end": 4142
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4143,
    "end": 4144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4144,
    "end": 4145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4150,
    "end": 4151
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4151,
    "end": 4152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4152,
    "end": 4153
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4154,
    "end": 4160
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4160,
    "end": 4161
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4162,
    "end": 4163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4163,
    "end": 4164
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4165,
    "end": 4171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4171,
    "end": 4172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4172,
    "end": 4173
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4174,
    "end": 4180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4180,
    "end": 4181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4226,
    "end": 4227
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4227,
    "end": 4228
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4229,
    "end": 4237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4237,
    "end": 4238
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4238,
    "end": 4239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4239,
    "end": 4240
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4240,
    "end": 4246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4246,
    "end": 4247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4248,
    "end": 4249
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4250,
    "end": 4256
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4257,
    "end": 4258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4259,
    "end": 4260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4260,
    "end": 4261
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4263,
    "end": 4266
  },
  {
    "type": "Identifier",
    "value": "c12t8",
    "start": 4267,
    "end": 4272
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4273,
    "end": 4274
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4275,
    "end": 4276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4276,
    "end": 4277
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4277,
    "end": 4278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4278,
    "end": 4279
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4280,
    "end": 4286
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4286,
    "end": 4287
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4288,
    "end": 4289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4289,
    "end": 4290
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4291,
    "end": 4297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4297,
    "end": 4298
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4299,
    "end": 4301
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4302,
    "end": 4308
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4308,
    "end": 4309
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4310,
    "end": 4318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4318,
    "end": 4319
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4319,
    "end": 4320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4320,
    "end": 4321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4322,
    "end": 4323
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4324,
    "end": 4330
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4331,
    "end": 4332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4332,
    "end": 4333
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4334,
    "end": 4335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4335,
    "end": 4336
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4337,
    "end": 4340
  },
  {
    "type": "Identifier",
    "value": "c12t9",
    "start": 4341,
    "end": 4346
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4347,
    "end": 4348
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4349,
    "end": 4350
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4350,
    "end": 4356
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4356,
    "end": 4357
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4357,
    "end": 4358
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4358,
    "end": 4359
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4359,
    "end": 4360
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4360,
    "end": 4361
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4362,
    "end": 4363
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4363,
    "end": 4364
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4364,
    "end": 4365
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4365,
    "end": 4366
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4366,
    "end": 4367
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4367,
    "end": 4368
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4368,
    "end": 4369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4369,
    "end": 4370
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4371,
    "end": 4374
  },
  {
    "type": "Identifier",
    "value": "c12t10",
    "start": 4375,
    "end": 4381
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4382,
    "end": 4383
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4384,
    "end": 4385
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 4385,
    "end": 4389
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4389,
    "end": 4390
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4390,
    "end": 4391
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4391,
    "end": 4392
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4393,
    "end": 4394
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4394,
    "end": 4395
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 4395,
    "end": 4399
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4399,
    "end": 4400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4400,
    "end": 4401
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4401,
    "end": 4402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4402,
    "end": 4403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4403,
    "end": 4404
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4404,
    "end": 4405
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4405,
    "end": 4406
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 4406,
    "end": 4410
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4410,
    "end": 4411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4411,
    "end": 4412
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4412,
    "end": 4413
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4413,
    "end": 4414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4414,
    "end": 4415
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4415,
    "end": 4416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4416,
    "end": 4417
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4418,
    "end": 4421
  },
  {
    "type": "Identifier",
    "value": "c12t11",
    "start": 4422,
    "end": 4428
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4429,
    "end": 4430
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4431,
    "end": 4432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4432,
    "end": 4433
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4433,
    "end": 4434
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4434,
    "end": 4435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4435,
    "end": 4436
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4437,
    "end": 4443
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4443,
    "end": 4444
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4445,
    "end": 4446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4446,
    "end": 4447
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4448,
    "end": 4454
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4454,
    "end": 4455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4455,
    "end": 4456
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4457,
    "end": 4463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4463,
    "end": 4464
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4464,
    "end": 4465
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4465,
    "end": 4466
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4466,
    "end": 4467
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4467,
    "end": 4468
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4469,
    "end": 4470
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4470,
    "end": 4478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4478,
    "end": 4479
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4479,
    "end": 4480
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4480,
    "end": 4481
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4482,
    "end": 4483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4483,
    "end": 4484
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4485,
    "end": 4486
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4487,
    "end": 4493
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4494,
    "end": 4495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4495,
    "end": 4496
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4497,
    "end": 4498
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4498,
    "end": 4499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4499,
    "end": 4500
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4501,
    "end": 4504
  },
  {
    "type": "Identifier",
    "value": "c12t12",
    "start": 4505,
    "end": 4511
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4512,
    "end": 4513
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4514,
    "end": 4515
  },
  {
    "type": "Identifier",
    "value": "IBar",
    "start": 4515,
    "end": 4519
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4519,
    "end": 4520
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4521,
    "end": 4522
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4527,
    "end": 4530
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4530,
    "end": 4531
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4532,
    "end": 4533
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 4533,
    "end": 4537
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4537,
    "end": 4538
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4538,
    "end": 4539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4539,
    "end": 4540
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4540,
    "end": 4541
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4541,
    "end": 4542
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4543,
    "end": 4544
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4545,
    "end": 4548
  },
  {
    "type": "Identifier",
    "value": "c12t13",
    "start": 4549,
    "end": 4555
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4556,
    "end": 4557
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4558,
    "end": 4559
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 4559,
    "end": 4563
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4563,
    "end": 4564
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4565,
    "end": 4566
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4566,
    "end": 4567
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 4572,
    "end": 4573
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4573,
    "end": 4574
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4575,
    "end": 4583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4583,
    "end": 4584
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4584,
    "end": 4585
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4585,
    "end": 4586
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4587,
    "end": 4588
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4588,
    "end": 4589
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4590,
    "end": 4591
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4592,
    "end": 4598
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4599,
    "end": 4600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4600,
    "end": 4601
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4602,
    "end": 4603
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4604,
    "end": 4605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4605,
    "end": 4606
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4607,
    "end": 4610
  },
  {
    "type": "Identifier",
    "value": "c12t14",
    "start": 4611,
    "end": 4617
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4618,
    "end": 4619
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4620,
    "end": 4621
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 4621,
    "end": 4625
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4625,
    "end": 4626
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4627,
    "end": 4628
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4628,
    "end": 4629
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4634,
    "end": 4635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4635,
    "end": 4636
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4637,
    "end": 4638
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4638,
    "end": 4639
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4640,
    "end": 4641
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4641,
    "end": 4642
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4733,
    "end": 4740
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4741,
    "end": 4749
  },
  {
    "type": "Identifier",
    "value": "EF1",
    "start": 4750,
    "end": 4753
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4753,
    "end": 4754
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4754,
    "end": 4755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4755,
    "end": 4756
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4756,
    "end": 4762
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4762,
    "end": 4763
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4764,
    "end": 4765
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4765,
    "end": 4766
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4766,
    "end": 4772
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4772,
    "end": 4773
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4773,
    "end": 4774
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4774,
    "end": 4780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4780,
    "end": 4781
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4783,
    "end": 4791
  },
  {
    "type": "Identifier",
    "value": "EF1",
    "start": 4792,
    "end": 4795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4795,
    "end": 4796
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4796,
    "end": 4797
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4797,
    "end": 4798
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4798,
    "end": 4799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4799,
    "end": 4800
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4801,
    "end": 4802
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4803,
    "end": 4809
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4810,
    "end": 4811
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4811,
    "end": 4812
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4812,
    "end": 4813
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4813,
    "end": 4814
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4815,
    "end": 4816
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4818,
    "end": 4821
  },
  {
    "type": "Identifier",
    "value": "efv",
    "start": 4822,
    "end": 4825
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4826,
    "end": 4827
  },
  {
    "type": "Identifier",
    "value": "EF1",
    "start": 4828,
    "end": 4831
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4831,
    "end": 4832
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4832,
    "end": 4833
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4833,
    "end": 4834
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4834,
    "end": 4835
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4835,
    "end": 4836
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4836,
    "end": 4837
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4895,
    "end": 4902
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4903,
    "end": 4908
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 4909,
    "end": 4914
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4915,
    "end": 4916
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 4923,
    "end": 4934
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4934,
    "end": 4935
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4935,
    "end": 4936
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4936,
    "end": 4937
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4938,
    "end": 4944
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4944,
    "end": 4945
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4946,
    "end": 4947
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4947,
    "end": 4948
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4949,
    "end": 4955
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4955,
    "end": 4956
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4956,
    "end": 4957
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4964,
    "end": 4965
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4965,
    "end": 4966
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4967,
    "end": 4973
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4973,
    "end": 4974
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4981,
    "end": 4982
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4982,
    "end": 4983
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4984,
    "end": 4990
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4990,
    "end": 4991
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 4998,
    "end": 5001
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5001,
    "end": 5002
  },
  {
    "type": "Identifier",
    "value": "dx",
    "start": 5002,
    "end": 5004
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5004,
    "end": 5005
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5006,
    "end": 5012
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5012,
    "end": 5013
  },
  {
    "type": "Identifier",
    "value": "dy",
    "start": 5014,
    "end": 5016
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5016,
    "end": 5017
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5018,
    "end": 5024
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5024,
    "end": 5025
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5025,
    "end": 5026
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 5027,
    "end": 5032
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5032,
    "end": 5033
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5040,
    "end": 5046
  },
  {
    "type": "Identifier",
    "value": "origin",
    "start": 5047,
    "end": 5053
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5053,
    "end": 5054
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 5055,
    "end": 5060
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5060,
    "end": 5061
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5063,
    "end": 5064
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 5066,
    "end": 5071
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5071,
    "end": 5072
  },
  {
    "type": "Identifier",
    "value": "origin",
    "start": 5072,
    "end": 5078
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5079,
    "end": 5080
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5081,
    "end": 5084
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 5085,
    "end": 5090
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5090,
    "end": 5091
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 5091,
    "end": 5092
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5092,
    "end": 5093
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 5094,
    "end": 5095
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5095,
    "end": 5096
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5096,
    "end": 5097
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 5099,
    "end": 5104
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5104,
    "end": 5105
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 5105,
    "end": 5114
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5114,
    "end": 5115
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 5115,
    "end": 5118
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5119,
    "end": 5120
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5121,
    "end": 5129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5129,
    "end": 5130
  },
  {
    "type": "Identifier",
    "value": "dx",
    "start": 5130,
    "end": 5132
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5132,
    "end": 5133
  },
  {
    "type": "Identifier",
    "value": "dy",
    "start": 5134,
    "end": 5136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5136,
    "end": 5137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5138,
    "end": 5139
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5144,
    "end": 5150
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5151,
    "end": 5154
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 5155,
    "end": 5160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5160,
    "end": 5161
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5161,
    "end": 5165
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5165,
    "end": 5166
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5166,
    "end": 5167
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 5168,
    "end": 5169
  },
  {
    "type": "Identifier",
    "value": "dx",
    "start": 5170,
    "end": 5172
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5172,
    "end": 5173
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5174,
    "end": 5178
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5178,
    "end": 5179
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5179,
    "end": 5180
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 5181,
    "end": 5182
  },
  {
    "type": "Identifier",
    "value": "dy",
    "start": 5183,
    "end": 5185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5185,
    "end": 5186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5186,
    "end": 5187
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5188,
    "end": 5189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5189,
    "end": 5190
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 5192,
    "end": 5197
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5197,
    "end": 5198
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 5198,
    "end": 5207
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5208,
    "end": 5209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5210,
    "end": 5211
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5216,
    "end": 5217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5217,
    "end": 5218
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 5219,
    "end": 5220
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5220,
    "end": 5221
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5226,
    "end": 5227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5227,
    "end": 5228
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 5229,
    "end": 5230
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5230,
    "end": 5231
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 5236,
    "end": 5239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5239,
    "end": 5240
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5241,
    "end": 5249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5249,
    "end": 5250
  },
  {
    "type": "Identifier",
    "value": "dx",
    "start": 5250,
    "end": 5252
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5252,
    "end": 5253
  },
  {
    "type": "Identifier",
    "value": "dy",
    "start": 5254,
    "end": 5256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5256,
    "end": 5257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5258,
    "end": 5259
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5268,
    "end": 5274
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5275,
    "end": 5278
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 5279,
    "end": 5284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5284,
    "end": 5285
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5285,
    "end": 5289
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5289,
    "end": 5290
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5290,
    "end": 5291
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 5292,
    "end": 5293
  },
  {
    "type": "Identifier",
    "value": "dx",
    "start": 5294,
    "end": 5296
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5296,
    "end": 5297
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5298,
    "end": 5302
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5302,
    "end": 5303
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5303,
    "end": 5304
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 5305,
    "end": 5306
  },
  {
    "type": "Identifier",
    "value": "dy",
    "start": 5307,
    "end": 5309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5309,
    "end": 5310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5310,
    "end": 5311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5316,
    "end": 5317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5318,
    "end": 5319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5319,
    "end": 5320
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5322,
    "end": 5331
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 5332,
    "end": 5333
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5334,
    "end": 5335
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5336,
    "end": 5337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5337,
    "end": 5338
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5339,
    "end": 5345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5345,
    "end": 5346
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5347,
    "end": 5348
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5349,
    "end": 5358
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 5359,
    "end": 5360
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5361,
    "end": 5368
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 5369,
    "end": 5370
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5371,
    "end": 5372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5373,
    "end": 5374
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5375,
    "end": 5378
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5379,
    "end": 5380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5380,
    "end": 5381
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 5382,
    "end": 5383
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5384,
    "end": 5385
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5386,
    "end": 5387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5388,
    "end": 5389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5389,
    "end": 5390
  }
]
```
