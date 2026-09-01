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
        "name": "BugExhibition",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 122
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
              "start": 123,
              "end": 124
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 123,
            "end": 124
          }
        ],
        "start": 122,
        "end": 125
      },
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
              "name": "exhibitBug",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 149
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
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "localFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 171,
                      "end": 184
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 187,
                      "end": 190
                    },
                    "expression": false,
                    "start": 162,
                    "end": 190
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
                                  "type": "TSCallSignatureDeclaration",
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSVoidKeyword",
                                      "start": 212,
                                      "end": 216
                                    },
                                    "start": 210,
                                    "end": 216
                                  },
                                  "start": 208,
                                  "end": 217
                                }
                              ],
                              "start": 206,
                              "end": 219
                            },
                            "start": 204,
                            "end": 219
                          },
                          "start": 203,
                          "end": 219
                        },
                        "init": null,
                        "definite": false,
                        "start": 203,
                        "end": 219
                      }
                    ],
                    "declare": false,
                    "start": 199,
                    "end": 220
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 229,
                        "end": 230
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "localFunction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 233,
                        "end": 246
                      },
                      "start": 229,
                      "end": 246
                    },
                    "directive": null,
                    "start": 229,
                    "end": 247
                  }
                ],
                "start": 152,
                "end": 253
              },
              "expression": false,
              "start": 149,
              "end": 253
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 132,
            "end": 253
          }
        ],
        "start": 126,
        "end": 255
      },
      "abstract": false,
      "declare": false,
      "start": 103,
      "end": 255
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BugExhibition2",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 277
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
              "start": 278,
              "end": 279
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 278,
            "end": 279
          }
        ],
        "start": 277,
        "end": 280
      },
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
              "name": "exhibitBug",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 316
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
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "localFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 338,
                      "end": 351
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 354,
                      "end": 357
                    },
                    "expression": false,
                    "start": 329,
                    "end": 357
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
                                  "type": "TSCallSignatureDeclaration",
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSVoidKeyword",
                                      "start": 379,
                                      "end": 383
                                    },
                                    "start": 377,
                                    "end": 383
                                  },
                                  "start": 375,
                                  "end": 384
                                }
                              ],
                              "start": 373,
                              "end": 386
                            },
                            "start": 371,
                            "end": 386
                          },
                          "start": 370,
                          "end": 386
                        },
                        "init": null,
                        "definite": false,
                        "start": 370,
                        "end": 386
                      }
                    ],
                    "declare": false,
                    "start": 366,
                    "end": 387
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 396,
                        "end": 397
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "localFunction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 400,
                        "end": 413
                      },
                      "start": 396,
                      "end": 413
                    },
                    "directive": null,
                    "start": 396,
                    "end": 414
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 430,
                      "end": 434
                    },
                    "start": 423,
                    "end": 435
                  }
                ],
                "start": 319,
                "end": 441
              },
              "expression": false,
              "start": 316,
              "end": 441
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 287,
            "end": 441
          }
        ],
        "start": 281,
        "end": 443
      },
      "abstract": false,
      "declare": false,
      "start": 257,
      "end": 443
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BugExhibition3",
        "optional": false,
        "typeAnnotation": null,
        "start": 451,
        "end": 465
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
              "start": 466,
              "end": 467
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 466,
            "end": 467
          }
        ],
        "start": 465,
        "end": 468
      },
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
              "name": "exhibitBug",
              "optional": false,
              "typeAnnotation": null,
              "start": 482,
              "end": 492
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
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "localGenericFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 514,
                      "end": 534
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
                            "start": 535,
                            "end": 536
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 535,
                          "end": 536
                        }
                      ],
                      "start": 534,
                      "end": 537
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": true,
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
                              "start": 542,
                              "end": 543
                            },
                            "typeArguments": null,
                            "start": 542,
                            "end": 543
                          },
                          "start": 540,
                          "end": 543
                        },
                        "start": 538,
                        "end": 543
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 545,
                      "end": 548
                    },
                    "expression": false,
                    "start": 505,
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
                          "name": "x",
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
                                      "start": 570,
                                      "end": 574
                                    },
                                    "start": 568,
                                    "end": 574
                                  },
                                  "start": 566,
                                  "end": 575
                                }
                              ],
                              "start": 564,
                              "end": 577
                            },
                            "start": 562,
                            "end": 577
                          },
                          "start": 561,
                          "end": 577
                        },
                        "init": null,
                        "definite": false,
                        "start": 561,
                        "end": 577
                      }
                    ],
                    "declare": false,
                    "start": 557,
                    "end": 578
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 587,
                        "end": 588
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "localGenericFunction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 591,
                        "end": 611
                      },
                      "start": 587,
                      "end": 611
                    },
                    "directive": null,
                    "start": 587,
                    "end": 612
                  }
                ],
                "start": 495,
                "end": 618
              },
              "expression": false,
              "start": 492,
              "end": 618
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 475,
            "end": 618
          }
        ],
        "start": 469,
        "end": 620
      },
      "abstract": false,
      "declare": false,
      "start": 445,
      "end": 620
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
        "start": 628,
        "end": 629
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
              "name": "exhibit",
              "optional": false,
              "typeAnnotation": null,
              "start": 636,
              "end": 643
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "funcExpr",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 660,
                          "end": 668
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
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
                                  "start": 672,
                                  "end": 673
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 672,
                                "end": 673
                              }
                            ],
                            "start": 671,
                            "end": 674
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "u",
                              "optional": true,
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
                                    "start": 679,
                                    "end": 680
                                  },
                                  "typeArguments": null,
                                  "start": 679,
                                  "end": 680
                                },
                                "start": 677,
                                "end": 680
                              },
                              "start": 675,
                              "end": 680
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 685,
                            "end": 688
                          },
                          "id": null,
                          "generator": false,
                          "start": 671,
                          "end": 688
                        },
                        "definite": false,
                        "start": 660,
                        "end": 688
                      }
                    ],
                    "declare": false,
                    "start": 656,
                    "end": 689
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
                                  "type": "TSCallSignatureDeclaration",
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSVoidKeyword",
                                      "start": 711,
                                      "end": 715
                                    },
                                    "start": 709,
                                    "end": 715
                                  },
                                  "start": 707,
                                  "end": 716
                                }
                              ],
                              "start": 705,
                              "end": 718
                            },
                            "start": 703,
                            "end": 718
                          },
                          "start": 702,
                          "end": 718
                        },
                        "init": null,
                        "definite": false,
                        "start": 702,
                        "end": 718
                      }
                    ],
                    "declare": false,
                    "start": 698,
                    "end": 719
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 728,
                        "end": 729
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "funcExpr",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 732,
                        "end": 740
                      },
                      "start": 728,
                      "end": 740
                    },
                    "directive": null,
                    "start": 728,
                    "end": 741
                  }
                ],
                "start": 646,
                "end": 747
              },
              "expression": false,
              "start": 643,
              "end": 747
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 636,
            "end": 747
          }
        ],
        "start": 630,
        "end": 749
      },
      "abstract": false,
      "declare": false,
      "start": 622,
      "end": 749
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 761,
        "end": 762
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "exhibitBug",
                "optional": false,
                "typeAnnotation": null,
                "start": 785,
                "end": 795
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
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "localFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 817,
                      "end": 830
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 833,
                      "end": 836
                    },
                    "expression": false,
                    "start": 808,
                    "end": 836
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
                                  "type": "TSCallSignatureDeclaration",
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSVoidKeyword",
                                      "start": 858,
                                      "end": 862
                                    },
                                    "start": 856,
                                    "end": 862
                                  },
                                  "start": 854,
                                  "end": 863
                                }
                              ],
                              "start": 852,
                              "end": 865
                            },
                            "start": 850,
                            "end": 865
                          },
                          "start": 849,
                          "end": 865
                        },
                        "init": null,
                        "definite": false,
                        "start": 849,
                        "end": 865
                      }
                    ],
                    "declare": false,
                    "start": 845,
                    "end": 866
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 875,
                        "end": 876
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "localFunction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 879,
                        "end": 892
                      },
                      "start": 875,
                      "end": 892
                    },
                    "directive": null,
                    "start": 875,
                    "end": 893
                  }
                ],
                "start": 798,
                "end": 899
              },
              "expression": false,
              "start": 776,
              "end": 899
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 769,
            "end": 899
          }
        ],
        "start": 763,
        "end": 901
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 751,
      "end": 901
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 908,
        "end": 909
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 916,
              "end": 917
            },
            "initializer": {
              "type": "CallExpression",
              "callee": {
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
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "localFunction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 946,
                        "end": 959
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 962,
                        "end": 965
                      },
                      "expression": false,
                      "start": 937,
                      "end": 965
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
                                    "type": "TSCallSignatureDeclaration",
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSVoidKeyword",
                                        "start": 987,
                                        "end": 991
                                      },
                                      "start": 985,
                                      "end": 991
                                    },
                                    "start": 983,
                                    "end": 992
                                  }
                                ],
                                "start": 981,
                                "end": 994
                              },
                              "start": 979,
                              "end": 994
                            },
                            "start": 978,
                            "end": 994
                          },
                          "init": null,
                          "definite": false,
                          "start": 978,
                          "end": 994
                        }
                      ],
                      "declare": false,
                      "start": 974,
                      "end": 995
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1004,
                          "end": 1005
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "localFunction",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1008,
                          "end": 1021
                        },
                        "start": 1004,
                        "end": 1021
                      },
                      "directive": null,
                      "start": 1004,
                      "end": 1022
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1038,
                        "end": 1039
                      },
                      "start": 1031,
                      "end": 1040
                    }
                  ],
                  "start": 927,
                  "end": 1046
                },
                "id": null,
                "generator": false,
                "start": 921,
                "end": 1046
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 920,
              "end": 1049
            },
            "computed": false,
            "start": 916,
            "end": 1049
          }
        ],
        "start": 910,
        "end": 1051
      },
      "const": false,
      "declare": false,
      "start": 903,
      "end": 1051
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 103,
  "end": 1051
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 103,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "BugExhibition",
    "start": 109,
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
    "value": "T",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 132,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "exhibitBug",
    "start": 139,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 162,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "localFunction",
    "start": 171,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 199,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 212,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 218,
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
    "value": "x",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "localFunction",
    "start": 233,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 254,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 257,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "BugExhibition2",
    "start": 263,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 287,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 295,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 302,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "exhibitBug",
    "start": 306,
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
    "value": ")",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 329,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "localFunction",
    "start": 338,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 366,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 379,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "localFunction",
    "start": 400,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 413,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 423,
    "end": 429
  },
  {
    "type": "Null",
    "value": "null",
    "start": 430,
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
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 442,
    "end": 443
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 445,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "BugExhibition3",
    "start": 451,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "{",
    "start": 469,
    "end": 470
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 475,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "exhibitBug",
    "start": 482,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 495,
    "end": 496
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 505,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "localGenericFunction",
    "start": 514,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 547,
    "end": 548
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 557,
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
    "type": "Punctuator",
    "value": "{",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 568,
    "end": 569
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 570,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "localGenericFunction",
    "start": 591,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 619,
    "end": 620
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 622,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "exhibit",
    "start": 636,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 646,
    "end": 647
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 656,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "funcExpr",
    "start": 660,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 672,
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
    "value": "(",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": "=>",
    "start": 682,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 688,
    "end": 689
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 698,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 709,
    "end": 710
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 711,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "funcExpr",
    "start": 732,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 751,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 763,
    "end": 764
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 769,
    "end": 775
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 776,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "exhibitBug",
    "start": 785,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 798,
    "end": 799
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 808,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "localFunction",
    "start": 817,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "type": "Keyword",
    "value": "var",
    "start": 845,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 856,
    "end": 857
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 858,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "localFunction",
    "start": 879,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 900,
    "end": 901
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 903,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "E",
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
    "value": "A",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "(",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 924,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 927,
    "end": 928
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 937,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "localFunction",
    "start": 946,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 964,
    "end": 965
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 974,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 978,
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
    "value": "{",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 985,
    "end": 986
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 987,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "localFunction",
    "start": 1008,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1031,
    "end": 1037
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1050,
    "end": 1051
  }
]
```
