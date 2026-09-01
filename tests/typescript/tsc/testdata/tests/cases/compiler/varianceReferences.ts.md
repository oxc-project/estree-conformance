__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumericConstraint",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 22
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 28
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 37,
              "end": 43
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 23,
            "end": 43
          }
        ],
        "start": 22,
        "end": 44
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Value",
          "optional": false,
          "typeAnnotation": null,
          "start": 47,
          "end": 52
        },
        "typeArguments": null,
        "start": 47,
        "end": 52
      },
      "declare": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VarianceConstrainedNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 85
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 98
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 107,
              "end": 113
            },
            "default": null,
            "in": true,
            "out": true,
            "const": false,
            "start": 86,
            "end": 113
          }
        ],
        "start": 85,
        "end": 114
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NumericConstraint",
          "optional": false,
          "typeAnnotation": null,
          "start": 119,
          "end": 136
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 142
              },
              "typeArguments": null,
              "start": 137,
              "end": 142
            }
          ],
          "start": 136,
          "end": 143
        },
        "start": 119,
        "end": 143
      },
      "declare": false,
      "start": 55,
      "end": 144
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
            "name": "vcn1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceConstrainedNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 164,
                  "end": 189
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 190,
                        "end": 191
                      },
                      "start": 190,
                      "end": 191
                    }
                  ],
                  "start": 189,
                  "end": 192
                },
                "start": 164,
                "end": 192
              },
              "start": 162,
              "end": 192
            },
            "start": 158,
            "end": 192
          },
          "init": null,
          "definite": false,
          "start": 158,
          "end": 192
        }
      ],
      "declare": true,
      "start": 146,
      "end": 193
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
            "name": "vcn12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceConstrainedNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 213,
                  "end": 238
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 239,
                            "end": 240
                          },
                          "start": 239,
                          "end": 240
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 243,
                            "end": 244
                          },
                          "start": 243,
                          "end": 244
                        }
                      ],
                      "start": 239,
                      "end": 244
                    }
                  ],
                  "start": 238,
                  "end": 245
                },
                "start": 213,
                "end": 245
              },
              "start": 211,
              "end": 245
            },
            "start": 206,
            "end": 245
          },
          "init": null,
          "definite": false,
          "start": 206,
          "end": 245
        }
      ],
      "declare": true,
      "start": 194,
      "end": 246
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "vcn1",
          "optional": false,
          "typeAnnotation": null,
          "start": 248,
          "end": 252
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vcn12",
          "optional": false,
          "typeAnnotation": null,
          "start": 255,
          "end": 260
        },
        "start": 248,
        "end": 260
      },
      "directive": null,
      "start": 248,
      "end": 261
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "vcn12",
          "optional": false,
          "typeAnnotation": null,
          "start": 262,
          "end": 267
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vcn1",
          "optional": false,
          "typeAnnotation": null,
          "start": 270,
          "end": 274
        },
        "start": 262,
        "end": 274
      },
      "directive": null,
      "start": 262,
      "end": 275
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Unconstrained",
        "optional": false,
        "typeAnnotation": null,
        "start": 282,
        "end": 295
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 301
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 296,
            "end": 301
          }
        ],
        "start": 295,
        "end": 302
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Value",
          "optional": false,
          "typeAnnotation": null,
          "start": 305,
          "end": 310
        },
        "typeArguments": null,
        "start": 305,
        "end": 310
      },
      "declare": false,
      "start": 277,
      "end": 311
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VarianceUnconstrained",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
        "end": 339
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 347,
              "end": 352
            },
            "constraint": null,
            "default": null,
            "in": true,
            "out": true,
            "const": false,
            "start": 340,
            "end": 352
          }
        ],
        "start": 339,
        "end": 353
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Unconstrained",
          "optional": false,
          "typeAnnotation": null,
          "start": 356,
          "end": 369
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 370,
                "end": 375
              },
              "typeArguments": null,
              "start": 370,
              "end": 375
            }
          ],
          "start": 369,
          "end": 376
        },
        "start": 356,
        "end": 376
      },
      "declare": false,
      "start": 313,
      "end": 377
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
            "name": "vu1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceUnconstrained",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 396,
                  "end": 417
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 418,
                        "end": 419
                      },
                      "start": 418,
                      "end": 419
                    }
                  ],
                  "start": 417,
                  "end": 420
                },
                "start": 396,
                "end": 420
              },
              "start": 394,
              "end": 420
            },
            "start": 391,
            "end": 420
          },
          "init": null,
          "definite": false,
          "start": 391,
          "end": 420
        }
      ],
      "declare": true,
      "start": 379,
      "end": 421
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
            "name": "vu12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceUnconstrained",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 440,
                  "end": 461
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 462,
                            "end": 463
                          },
                          "start": 462,
                          "end": 463
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 466,
                            "end": 467
                          },
                          "start": 466,
                          "end": 467
                        }
                      ],
                      "start": 462,
                      "end": 467
                    }
                  ],
                  "start": 461,
                  "end": 468
                },
                "start": 440,
                "end": 468
              },
              "start": 438,
              "end": 468
            },
            "start": 434,
            "end": 468
          },
          "init": null,
          "definite": false,
          "start": 434,
          "end": 468
        }
      ],
      "declare": true,
      "start": 422,
      "end": 469
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "vu1",
          "optional": false,
          "typeAnnotation": null,
          "start": 471,
          "end": 474
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vu12",
          "optional": false,
          "typeAnnotation": null,
          "start": 477,
          "end": 481
        },
        "start": 471,
        "end": 481
      },
      "directive": null,
      "start": 471,
      "end": 482
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "vu12",
          "optional": false,
          "typeAnnotation": null,
          "start": 483,
          "end": 487
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vu1",
          "optional": false,
          "typeAnnotation": null,
          "start": 490,
          "end": 493
        },
        "start": 483,
        "end": 493
      },
      "directive": null,
      "start": 483,
      "end": 494
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Level3of3Unconstrained",
        "optional": false,
        "typeAnnotation": null,
        "start": 501,
        "end": 523
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 524,
              "end": 529
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 524,
            "end": 529
          }
        ],
        "start": 523,
        "end": 530
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Value",
          "optional": false,
          "typeAnnotation": null,
          "start": 533,
          "end": 538
        },
        "typeArguments": null,
        "start": 533,
        "end": 538
      },
      "declare": false,
      "start": 496,
      "end": 539
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Level2of3Unconstrained",
        "optional": false,
        "typeAnnotation": null,
        "start": 545,
        "end": 567
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 568,
              "end": 573
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 568,
            "end": 573
          }
        ],
        "start": 567,
        "end": 574
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Level3of3Unconstrained",
          "optional": false,
          "typeAnnotation": null,
          "start": 577,
          "end": 599
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 600,
                "end": 605
              },
              "typeArguments": null,
              "start": 600,
              "end": 605
            }
          ],
          "start": 599,
          "end": 606
        },
        "start": 577,
        "end": 606
      },
      "declare": false,
      "start": 540,
      "end": 607
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Level1of3Unconstrained",
        "optional": false,
        "typeAnnotation": null,
        "start": 613,
        "end": 635
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 636,
              "end": 641
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 636,
            "end": 641
          }
        ],
        "start": 635,
        "end": 642
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Level2of3Unconstrained",
          "optional": false,
          "typeAnnotation": null,
          "start": 645,
          "end": 667
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 668,
                "end": 673
              },
              "typeArguments": null,
              "start": 668,
              "end": 673
            }
          ],
          "start": 667,
          "end": 674
        },
        "start": 645,
        "end": 674
      },
      "declare": false,
      "start": 608,
      "end": 675
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VarianceDeepUnconstrained",
        "optional": false,
        "typeAnnotation": null,
        "start": 682,
        "end": 707
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 715,
              "end": 720
            },
            "constraint": null,
            "default": null,
            "in": true,
            "out": true,
            "const": false,
            "start": 708,
            "end": 720
          }
        ],
        "start": 707,
        "end": 721
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Level1of3Unconstrained",
          "optional": false,
          "typeAnnotation": null,
          "start": 724,
          "end": 746
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 747,
                "end": 752
              },
              "typeArguments": null,
              "start": 747,
              "end": 752
            }
          ],
          "start": 746,
          "end": 753
        },
        "start": 724,
        "end": 753
      },
      "declare": false,
      "start": 677,
      "end": 754
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
            "name": "vdu1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceDeepUnconstrained",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 774,
                  "end": 799
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 800,
                        "end": 801
                      },
                      "start": 800,
                      "end": 801
                    }
                  ],
                  "start": 799,
                  "end": 802
                },
                "start": 774,
                "end": 802
              },
              "start": 772,
              "end": 802
            },
            "start": 768,
            "end": 802
          },
          "init": null,
          "definite": false,
          "start": 768,
          "end": 802
        }
      ],
      "declare": true,
      "start": 756,
      "end": 803
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
            "name": "vdu12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceDeepUnconstrained",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 823,
                  "end": 848
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 849,
                            "end": 850
                          },
                          "start": 849,
                          "end": 850
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 853,
                            "end": 854
                          },
                          "start": 853,
                          "end": 854
                        }
                      ],
                      "start": 849,
                      "end": 854
                    }
                  ],
                  "start": 848,
                  "end": 855
                },
                "start": 823,
                "end": 855
              },
              "start": 821,
              "end": 855
            },
            "start": 816,
            "end": 855
          },
          "init": null,
          "definite": false,
          "start": 816,
          "end": 855
        }
      ],
      "declare": true,
      "start": 804,
      "end": 856
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "vdu1",
          "optional": false,
          "typeAnnotation": null,
          "start": 858,
          "end": 862
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vdu12",
          "optional": false,
          "typeAnnotation": null,
          "start": 865,
          "end": 870
        },
        "start": 858,
        "end": 870
      },
      "directive": null,
      "start": 858,
      "end": 871
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "vdu12",
          "optional": false,
          "typeAnnotation": null,
          "start": 872,
          "end": 877
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vdu1",
          "optional": false,
          "typeAnnotation": null,
          "start": 880,
          "end": 884
        },
        "start": 872,
        "end": 884
      },
      "directive": null,
      "start": 872,
      "end": 885
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null,
        "start": 897,
        "end": 902
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 903,
              "end": 908
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 903,
            "end": 908
          }
        ],
        "start": 902,
        "end": 909
      },
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 914,
              "end": 919
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 921,
                  "end": 926
                },
                "typeArguments": null,
                "start": 921,
                "end": 926
              },
              "start": 919,
              "end": 926
            },
            "accessibility": null,
            "static": false,
            "start": 914,
            "end": 927
          }
        ],
        "start": 910,
        "end": 929
      },
      "declare": false,
      "start": 887,
      "end": 929
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VarianceShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 936,
        "end": 949
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 957,
              "end": 962
            },
            "constraint": null,
            "default": null,
            "in": true,
            "out": true,
            "const": false,
            "start": 950,
            "end": 962
          }
        ],
        "start": 949,
        "end": 963
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Shape",
          "optional": false,
          "typeAnnotation": null,
          "start": 966,
          "end": 971
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 972,
                "end": 977
              },
              "typeArguments": null,
              "start": 972,
              "end": 977
            }
          ],
          "start": 971,
          "end": 978
        },
        "start": 966,
        "end": 978
      },
      "declare": false,
      "start": 931,
      "end": 979
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
            "name": "vs1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 998,
                  "end": 1011
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1012,
                        "end": 1013
                      },
                      "start": 1012,
                      "end": 1013
                    }
                  ],
                  "start": 1011,
                  "end": 1014
                },
                "start": 998,
                "end": 1014
              },
              "start": 996,
              "end": 1014
            },
            "start": 993,
            "end": 1014
          },
          "init": null,
          "definite": false,
          "start": 993,
          "end": 1014
        }
      ],
      "declare": true,
      "start": 981,
      "end": 1015
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
            "name": "vs12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1034,
                  "end": 1047
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1048,
                            "end": 1049
                          },
                          "start": 1048,
                          "end": 1049
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 1052,
                            "end": 1053
                          },
                          "start": 1052,
                          "end": 1053
                        }
                      ],
                      "start": 1048,
                      "end": 1053
                    }
                  ],
                  "start": 1047,
                  "end": 1054
                },
                "start": 1034,
                "end": 1054
              },
              "start": 1032,
              "end": 1054
            },
            "start": 1028,
            "end": 1054
          },
          "init": null,
          "definite": false,
          "start": 1028,
          "end": 1054
        }
      ],
      "declare": true,
      "start": 1016,
      "end": 1055
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "vs1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1057,
          "end": 1060
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vs12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1063,
          "end": 1067
        },
        "start": 1057,
        "end": 1067
      },
      "directive": null,
      "start": 1057,
      "end": 1068
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "vs12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1069,
          "end": 1073
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vs1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1076,
          "end": 1079
        },
        "start": 1069,
        "end": 1079
      },
      "directive": null,
      "start": 1069,
      "end": 1080
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Level3of3Shape",
        "optional": false,
        "typeAnnotation": null,
        "start": 1092,
        "end": 1106
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 1107,
              "end": 1112
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1107,
            "end": 1112
          }
        ],
        "start": 1106,
        "end": 1113
      },
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 1118,
              "end": 1123
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1125,
                  "end": 1130
                },
                "typeArguments": null,
                "start": 1125,
                "end": 1130
              },
              "start": 1123,
              "end": 1130
            },
            "accessibility": null,
            "static": false,
            "start": 1118,
            "end": 1131
          }
        ],
        "start": 1114,
        "end": 1133
      },
      "declare": false,
      "start": 1082,
      "end": 1133
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Level2of3Shape",
        "optional": false,
        "typeAnnotation": null,
        "start": 1140,
        "end": 1154
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 1155,
              "end": 1160
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1155,
            "end": 1160
          }
        ],
        "start": 1154,
        "end": 1161
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Level3of3Shape",
          "optional": false,
          "typeAnnotation": null,
          "start": 1164,
          "end": 1178
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 1179,
                "end": 1184
              },
              "typeArguments": null,
              "start": 1179,
              "end": 1184
            }
          ],
          "start": 1178,
          "end": 1185
        },
        "start": 1164,
        "end": 1185
      },
      "declare": false,
      "start": 1135,
      "end": 1186
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Level1of3Shape",
        "optional": false,
        "typeAnnotation": null,
        "start": 1192,
        "end": 1206
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 1207,
              "end": 1212
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1207,
            "end": 1212
          }
        ],
        "start": 1206,
        "end": 1213
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Level2of3Shape",
          "optional": false,
          "typeAnnotation": null,
          "start": 1216,
          "end": 1230
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 1231,
                "end": 1236
              },
              "typeArguments": null,
              "start": 1231,
              "end": 1236
            }
          ],
          "start": 1230,
          "end": 1237
        },
        "start": 1216,
        "end": 1237
      },
      "declare": false,
      "start": 1187,
      "end": 1238
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VarianceDeepShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 1245,
        "end": 1262
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 1270,
              "end": 1275
            },
            "constraint": null,
            "default": null,
            "in": true,
            "out": true,
            "const": false,
            "start": 1263,
            "end": 1275
          }
        ],
        "start": 1262,
        "end": 1276
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Level1of3Shape",
          "optional": false,
          "typeAnnotation": null,
          "start": 1279,
          "end": 1293
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 1294,
                "end": 1299
              },
              "typeArguments": null,
              "start": 1294,
              "end": 1299
            }
          ],
          "start": 1293,
          "end": 1300
        },
        "start": 1279,
        "end": 1300
      },
      "declare": false,
      "start": 1240,
      "end": 1301
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
            "name": "vds1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceDeepShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1321,
                  "end": 1338
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1339,
                        "end": 1340
                      },
                      "start": 1339,
                      "end": 1340
                    }
                  ],
                  "start": 1338,
                  "end": 1341
                },
                "start": 1321,
                "end": 1341
              },
              "start": 1319,
              "end": 1341
            },
            "start": 1315,
            "end": 1341
          },
          "init": null,
          "definite": false,
          "start": 1315,
          "end": 1341
        }
      ],
      "declare": true,
      "start": 1303,
      "end": 1342
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
            "name": "vds12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceDeepShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1362,
                  "end": 1379
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1380,
                            "end": 1381
                          },
                          "start": 1380,
                          "end": 1381
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 1384,
                            "end": 1385
                          },
                          "start": 1384,
                          "end": 1385
                        }
                      ],
                      "start": 1380,
                      "end": 1385
                    }
                  ],
                  "start": 1379,
                  "end": 1386
                },
                "start": 1362,
                "end": 1386
              },
              "start": 1360,
              "end": 1386
            },
            "start": 1355,
            "end": 1386
          },
          "init": null,
          "definite": false,
          "start": 1355,
          "end": 1386
        }
      ],
      "declare": true,
      "start": 1343,
      "end": 1387
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "vds1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1389,
          "end": 1393
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vds12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1396,
          "end": 1401
        },
        "start": 1389,
        "end": 1401
      },
      "directive": null,
      "start": 1389,
      "end": 1402
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "vds12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1403,
          "end": 1408
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vds1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1411,
          "end": 1415
        },
        "start": 1403,
        "end": 1415
      },
      "directive": null,
      "start": 1403,
      "end": 1416
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1416
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "NumericConstraint",
    "start": 5,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 23,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 29,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 37,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 47,
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
    "value": "type",
    "start": 55,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "VarianceConstrainedNumber",
    "start": 60,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 86,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 89,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 93,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 99,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 107,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "NumericConstraint",
    "start": 119,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 137,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 146,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 154,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "vcn1",
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
    "value": "VarianceConstrainedNumber",
    "start": 164,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 189,
    "end": 190
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 194,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 202,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "vcn12",
    "start": 206,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "VarianceConstrainedNumber",
    "start": 213,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 238,
    "end": 239
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 241,
    "end": 242
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "vcn1",
    "start": 248,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "vcn12",
    "start": 255,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "vcn12",
    "start": 262,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "vcn1",
    "start": 270,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 277,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "Unconstrained",
    "start": 282,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 296,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 305,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 313,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "VarianceUnconstrained",
    "start": 318,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 340,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 343,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 347,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "Unconstrained",
    "start": 356,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 370,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 379,
    "end": 386
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 387,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "vu1",
    "start": 391,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "VarianceUnconstrained",
    "start": 396,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 417,
    "end": 418
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 422,
    "end": 429
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 430,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "vu12",
    "start": 434,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "VarianceUnconstrained",
    "start": 440,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 461,
    "end": 462
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 464,
    "end": 465
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "vu1",
    "start": 471,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "vu12",
    "start": 477,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "vu12",
    "start": 483,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "vu1",
    "start": 490,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 496,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "Level3of3Unconstrained",
    "start": 501,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 524,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 533,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 540,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "Level2of3Unconstrained",
    "start": 545,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 568,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "Level3of3Unconstrained",
    "start": 577,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 600,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 608,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "Level1of3Unconstrained",
    "start": 613,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 636,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "Level2of3Unconstrained",
    "start": 645,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 668,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 677,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "VarianceDeepUnconstrained",
    "start": 682,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 707,
    "end": 708
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 708,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 711,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 715,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "Level1of3Unconstrained",
    "start": 724,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 747,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "declare",
    "start": 756,
    "end": 763
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 764,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "vdu1",
    "start": 768,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "VarianceDeepUnconstrained",
    "start": 774,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 799,
    "end": 800
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 804,
    "end": 811
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 812,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "vdu12",
    "start": 816,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "VarianceDeepUnconstrained",
    "start": 823,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 848,
    "end": 849
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 851,
    "end": 852
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "vdu1",
    "start": 858,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "vdu12",
    "start": 865,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "vdu12",
    "start": 872,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "vdu1",
    "start": 880,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 884,
    "end": 885
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 887,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 897,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 903,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 914,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 921,
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
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 931,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "VarianceShape",
    "start": 936,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 949,
    "end": 950
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 950,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 953,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 957,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 966,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 972,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 981,
    "end": 988
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 989,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "vs1",
    "start": 993,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 996,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "VarianceShape",
    "start": 998,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1016,
    "end": 1023
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1024,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "vs12",
    "start": 1028,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "VarianceShape",
    "start": 1034,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "vs1",
    "start": 1057,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "vs12",
    "start": 1063,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "vs12",
    "start": 1069,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "vs1",
    "start": 1076,
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
    "value": "interface",
    "start": 1082,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "Level3of3Shape",
    "start": 1092,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 1107,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1118,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 1125,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1135,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "Level2of3Shape",
    "start": 1140,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 1155,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "Level3of3Shape",
    "start": 1164,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 1179,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1187,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "Level1of3Shape",
    "start": 1192,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 1207,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "Level2of3Shape",
    "start": 1216,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 1231,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1240,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "VarianceDeepShape",
    "start": 1245,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1263,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 1266,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 1270,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "Level1of3Shape",
    "start": 1279,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 1294,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1303,
    "end": 1310
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1311,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "vds1",
    "start": 1315,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "VarianceDeepShape",
    "start": 1321,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1343,
    "end": 1350
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1351,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "vds12",
    "start": 1355,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "VarianceDeepShape",
    "start": 1362,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "vds1",
    "start": 1389,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "vds12",
    "start": 1396,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "vds12",
    "start": 1403,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "vds1",
    "start": 1411,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1415,
    "end": 1416
  }
]
```
