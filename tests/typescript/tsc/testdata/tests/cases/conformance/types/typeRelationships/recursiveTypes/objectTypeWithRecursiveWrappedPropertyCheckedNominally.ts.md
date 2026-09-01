__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "List",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 89
      },
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
              "start": 90,
              "end": 91
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 90,
            "end": 91
          }
        ],
        "start": 89,
        "end": 92
      },
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
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 103
            },
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
                  "start": 105,
                  "end": 106
                },
                "typeArguments": null,
                "start": 105,
                "end": 106
              },
              "start": 103,
              "end": 106
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
            "start": 99,
            "end": 107
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 116
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "List",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 118,
                  "end": 122
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "List",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 123,
                        "end": 127
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 128,
                              "end": 129
                            },
                            "typeArguments": null,
                            "start": 128,
                            "end": 129
                          }
                        ],
                        "start": 127,
                        "end": 130
                      },
                      "start": 123,
                      "end": 130
                    }
                  ],
                  "start": 122,
                  "end": 131
                },
                "start": 118,
                "end": 131
              },
              "start": 116,
              "end": 131
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
            "start": 112,
            "end": 132
          }
        ],
        "start": 93,
        "end": 134
      },
      "abstract": false,
      "declare": false,
      "start": 79,
      "end": 134
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyList",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 148
      },
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
              "start": 149,
              "end": 150
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 149,
            "end": 150
          }
        ],
        "start": 148,
        "end": 151
      },
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
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 158,
              "end": 162
            },
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
                  "start": 164,
                  "end": 165
                },
                "typeArguments": null,
                "start": 164,
                "end": 165
              },
              "start": 162,
              "end": 165
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
            "start": 158,
            "end": 166
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 175
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyList",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 177,
                  "end": 183
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyList",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 184,
                        "end": 190
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 191,
                              "end": 192
                            },
                            "typeArguments": null,
                            "start": 191,
                            "end": 192
                          }
                        ],
                        "start": 190,
                        "end": 193
                      },
                      "start": 184,
                      "end": 193
                    }
                  ],
                  "start": 183,
                  "end": 194
                },
                "start": 177,
                "end": 194
              },
              "start": 175,
              "end": 194
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
            "start": 171,
            "end": 195
          }
        ],
        "start": 152,
        "end": 197
      },
      "abstract": false,
      "declare": false,
      "start": 136,
      "end": 197
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
            "name": "list1",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 208
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "List",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 219
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 220,
                  "end": 226
                }
              ],
              "start": 219,
              "end": 227
            },
            "arguments": [],
            "start": 211,
            "end": 229
          },
          "definite": false,
          "start": 203,
          "end": 229
        }
      ],
      "declare": false,
      "start": 199,
      "end": 230
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
            "name": "list2",
            "optional": false,
            "typeAnnotation": null,
            "start": 235,
            "end": 240
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "List",
              "optional": false,
              "typeAnnotation": null,
              "start": 247,
              "end": 251
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 252,
                  "end": 258
                }
              ],
              "start": 251,
              "end": 259
            },
            "arguments": [],
            "start": 243,
            "end": 261
          },
          "definite": false,
          "start": 235,
          "end": 261
        }
      ],
      "declare": false,
      "start": 231,
      "end": 262
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
            "name": "myList1",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 275
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyList",
              "optional": false,
              "typeAnnotation": null,
              "start": 282,
              "end": 288
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 289,
                  "end": 295
                }
              ],
              "start": 288,
              "end": 296
            },
            "arguments": [],
            "start": 278,
            "end": 298
          },
          "definite": false,
          "start": 268,
          "end": 298
        }
      ],
      "declare": false,
      "start": 264,
      "end": 299
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
            "name": "myList2",
            "optional": false,
            "typeAnnotation": null,
            "start": 304,
            "end": 311
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyList",
              "optional": false,
              "typeAnnotation": null,
              "start": 318,
              "end": 324
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 325,
                  "end": 331
                }
              ],
              "start": 324,
              "end": 332
            },
            "arguments": [],
            "start": 314,
            "end": 334
          },
          "definite": false,
          "start": 304,
          "end": 334
        }
      ],
      "declare": false,
      "start": 300,
      "end": 335
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "list1",
          "optional": false,
          "typeAnnotation": null,
          "start": 337,
          "end": 342
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myList1",
          "optional": false,
          "typeAnnotation": null,
          "start": 345,
          "end": 352
        },
        "start": 337,
        "end": 352
      },
      "directive": null,
      "start": 337,
      "end": 353
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "list1",
          "optional": false,
          "typeAnnotation": null,
          "start": 384,
          "end": 389
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myList2",
          "optional": false,
          "typeAnnotation": null,
          "start": 392,
          "end": 399
        },
        "start": 384,
        "end": 399
      },
      "directive": null,
      "start": 384,
      "end": 400
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "list2",
          "optional": false,
          "typeAnnotation": null,
          "start": 426,
          "end": 431
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myList1",
          "optional": false,
          "typeAnnotation": null,
          "start": 434,
          "end": 441
        },
        "start": 426,
        "end": 441
      },
      "directive": null,
      "start": 426,
      "end": 442
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "list2",
          "optional": false,
          "typeAnnotation": null,
          "start": 473,
          "end": 478
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myList2",
          "optional": false,
          "typeAnnotation": null,
          "start": 481,
          "end": 488
        },
        "start": 473,
        "end": 488
      },
      "directive": null,
      "start": 473,
      "end": 489
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
            "name": "rList1",
            "optional": false,
            "typeAnnotation": null,
            "start": 519,
            "end": 525
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "List",
              "optional": false,
              "typeAnnotation": null,
              "start": 532,
              "end": 536
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "List",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 537,
                    "end": 541
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 542,
                        "end": 548
                      }
                    ],
                    "start": 541,
                    "end": 549
                  },
                  "start": 537,
                  "end": 549
                }
              ],
              "start": 536,
              "end": 550
            },
            "arguments": [],
            "start": 528,
            "end": 552
          },
          "definite": false,
          "start": 519,
          "end": 552
        }
      ],
      "declare": false,
      "start": 515,
      "end": 553
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
            "name": "rMyList1",
            "optional": false,
            "typeAnnotation": null,
            "start": 558,
            "end": 566
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "List",
              "optional": false,
              "typeAnnotation": null,
              "start": 573,
              "end": 577
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyList",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 578,
                    "end": 584
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 585,
                        "end": 591
                      }
                    ],
                    "start": 584,
                    "end": 592
                  },
                  "start": 578,
                  "end": 592
                }
              ],
              "start": 577,
              "end": 593
            },
            "arguments": [],
            "start": 569,
            "end": 595
          },
          "definite": false,
          "start": 558,
          "end": 595
        }
      ],
      "declare": false,
      "start": 554,
      "end": 596
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "rList1",
          "optional": false,
          "typeAnnotation": null,
          "start": 597,
          "end": 603
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "rMyList1",
          "optional": false,
          "typeAnnotation": null,
          "start": 606,
          "end": 614
        },
        "start": 597,
        "end": 614
      },
      "directive": null,
      "start": 597,
      "end": 615
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 656,
        "end": 659
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
              "start": 660,
              "end": 661
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "List",
                "optional": false,
                "typeAnnotation": null,
                "start": 670,
                "end": 674
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 675,
                    "end": 681
                  }
                ],
                "start": 674,
                "end": 682
              },
              "start": 670,
              "end": 682
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 660,
            "end": 682
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 684,
              "end": 685
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyList",
                "optional": false,
                "typeAnnotation": null,
                "start": 694,
                "end": 700
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 701,
                    "end": 707
                  }
                ],
                "start": 700,
                "end": 708
              },
              "start": 694,
              "end": 708
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 684,
            "end": 708
          }
        ],
        "start": 659,
        "end": 709
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
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
                "start": 713,
                "end": 714
              },
              "typeArguments": null,
              "start": 713,
              "end": 714
            },
            "start": 711,
            "end": 714
          },
          "start": 710,
          "end": 714
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
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
                "start": 719,
                "end": 720
              },
              "typeArguments": null,
              "start": 719,
              "end": 720
            },
            "start": 717,
            "end": 720
          },
          "start": 716,
          "end": 720
        }
      ],
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
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 728,
                "end": 729
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null,
                "start": 732,
                "end": 733
              },
              "start": 728,
              "end": 733
            },
            "directive": null,
            "start": 728,
            "end": 734
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null,
                "start": 748,
                "end": 749
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 752,
                "end": 753
              },
              "start": 748,
              "end": 753
            },
            "directive": null,
            "start": 748,
            "end": 754
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "List",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 776,
                        "end": 780
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 781,
                            "end": 787
                          }
                        ],
                        "start": 780,
                        "end": 788
                      },
                      "start": 776,
                      "end": 788
                    },
                    "start": 774,
                    "end": 788
                  },
                  "start": 773,
                  "end": 788
                },
                "init": null,
                "definite": false,
                "start": 773,
                "end": 788
              }
            ],
            "declare": false,
            "start": 769,
            "end": 789
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyList",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 801,
                        "end": 807
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 808,
                            "end": 814
                          }
                        ],
                        "start": 807,
                        "end": 815
                      },
                      "start": 801,
                      "end": 815
                    },
                    "start": 799,
                    "end": 815
                  },
                  "start": 798,
                  "end": 815
                },
                "init": null,
                "definite": false,
                "start": 798,
                "end": 815
              }
            ],
            "declare": false,
            "start": 794,
            "end": 816
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 821,
                "end": 822
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 825,
                "end": 826
              },
              "start": 821,
              "end": 826
            },
            "directive": null,
            "start": 821,
            "end": 827
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 838,
                "end": 839
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null,
                "start": 842,
                "end": 843
              },
              "start": 838,
              "end": 843
            },
            "directive": null,
            "start": 838,
            "end": 844
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 858,
                "end": 859
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 862,
                "end": 863
              },
              "start": 858,
              "end": 863
            },
            "directive": null,
            "start": 858,
            "end": 864
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 878,
                "end": 879
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null,
                "start": 882,
                "end": 883
              },
              "start": 878,
              "end": 883
            },
            "directive": null,
            "start": 878,
            "end": 884
          }
        ],
        "start": 722,
        "end": 892
      },
      "expression": false,
      "start": 647,
      "end": 892
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 903,
        "end": 907
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
              "start": 908,
              "end": 909
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 918,
                "end": 919
              },
              "typeArguments": null,
              "start": 918,
              "end": 919
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 908,
            "end": 919
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 921,
              "end": 922
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyList",
                "optional": false,
                "typeAnnotation": null,
                "start": 931,
                "end": 937
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 938,
                    "end": 944
                  }
                ],
                "start": 937,
                "end": 945
              },
              "start": 931,
              "end": 945
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 921,
            "end": 945
          }
        ],
        "start": 907,
        "end": 946
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
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
                "start": 950,
                "end": 951
              },
              "typeArguments": null,
              "start": 950,
              "end": 951
            },
            "start": 948,
            "end": 951
          },
          "start": 947,
          "end": 951
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
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
                "start": 956,
                "end": 957
              },
              "typeArguments": null,
              "start": 956,
              "end": 957
            },
            "start": 954,
            "end": 957
          },
          "start": 953,
          "end": 957
        }
      ],
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
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 965,
                "end": 966
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null,
                "start": 969,
                "end": 970
              },
              "start": 965,
              "end": 970
            },
            "directive": null,
            "start": 965,
            "end": 971
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null,
                "start": 985,
                "end": 986
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 989,
                "end": 990
              },
              "start": 985,
              "end": 990
            },
            "directive": null,
            "start": 985,
            "end": 991
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "List",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1067,
                        "end": 1071
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1072,
                            "end": 1078
                          }
                        ],
                        "start": 1071,
                        "end": 1079
                      },
                      "start": 1067,
                      "end": 1079
                    },
                    "start": 1065,
                    "end": 1079
                  },
                  "start": 1064,
                  "end": 1079
                },
                "init": null,
                "definite": false,
                "start": 1064,
                "end": 1079
              }
            ],
            "declare": false,
            "start": 1060,
            "end": 1080
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyList",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1092,
                        "end": 1098
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1099,
                            "end": 1105
                          }
                        ],
                        "start": 1098,
                        "end": 1106
                      },
                      "start": 1092,
                      "end": 1106
                    },
                    "start": 1090,
                    "end": 1106
                  },
                  "start": 1089,
                  "end": 1106
                },
                "init": null,
                "definite": false,
                "start": 1089,
                "end": 1106
              }
            ],
            "declare": false,
            "start": 1085,
            "end": 1107
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1113,
                "end": 1114
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1117,
                "end": 1118
              },
              "start": 1113,
              "end": 1118
            },
            "directive": null,
            "start": 1113,
            "end": 1119
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1133,
                "end": 1134
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null,
                "start": 1137,
                "end": 1138
              },
              "start": 1133,
              "end": 1138
            },
            "directive": null,
            "start": 1133,
            "end": 1139
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1153,
                "end": 1154
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1157,
                "end": 1158
              },
              "start": 1153,
              "end": 1158
            },
            "directive": null,
            "start": 1153,
            "end": 1159
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1170,
                "end": 1171
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null,
                "start": 1174,
                "end": 1175
              },
              "start": 1170,
              "end": 1175
            },
            "directive": null,
            "start": 1170,
            "end": 1176
          }
        ],
        "start": 959,
        "end": 1184
      },
      "expression": false,
      "start": 894,
      "end": 1184
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 79,
  "end": 1184
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 79,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 85,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 99,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 112,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 118,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 123,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 129,
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
    "value": ";",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 133,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 136,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "MyList",
    "start": 142,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 158,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 171,
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
    "value": "MyList",
    "start": 177,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "MyList",
    "start": 184,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 199,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "list1",
    "start": 203,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 211,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 215,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 220,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 231,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "list2",
    "start": 235,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 241,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 243,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 247,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 252,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 264,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "myList1",
    "start": 268,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 278,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "MyList",
    "start": 282,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 289,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 300,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "myList2",
    "start": 304,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 314,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "MyList",
    "start": 318,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 325,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "list1",
    "start": 337,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "myList1",
    "start": 345,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "list1",
    "start": 384,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "myList2",
    "start": 392,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "list2",
    "start": 426,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "myList1",
    "start": 434,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "list2",
    "start": 473,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "myList2",
    "start": 481,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 515,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "rList1",
    "start": 519,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 526,
    "end": 527
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 528,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 532,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 537,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 542,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 549,
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
    "value": ")",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 552,
    "end": 553
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 554,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "rMyList1",
    "start": 558,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 567,
    "end": 568
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 569,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 573,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "MyList",
    "start": 578,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 585,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "rList1",
    "start": 597,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "rMyList1",
    "start": 606,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 614,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 647,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 656,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 660,
    "end": 661
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 662,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 670,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 675,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 684,
    "end": 685
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 686,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "MyList",
    "start": 694,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 701,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "t",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 753,
    "end": 754
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 769,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 776,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 781,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 788,
    "end": 789
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 794,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "MyList",
    "start": 801,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 808,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 821,
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
    "value": "t",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "Identifier",
    "value": "u",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 891,
    "end": 892
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 894,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 903,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 908,
    "end": 909
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 910,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 921,
    "end": 922
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 923,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "MyList",
    "start": 931,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 938,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 951,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 990,
    "end": 991
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1060,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 1067,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1072,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1085,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "MyList",
    "start": 1092,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1099,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "u",
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
    "type": "Identifier",
    "value": "b",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1183,
    "end": 1184
  }
]
```
