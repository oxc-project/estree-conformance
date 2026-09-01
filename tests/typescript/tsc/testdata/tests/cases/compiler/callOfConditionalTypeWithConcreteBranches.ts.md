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
        "name": "Q",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
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
              "start": 7,
              "end": 8
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 7,
            "end": 8
          }
        ],
        "start": 6,
        "end": 9
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSNumberKeyword",
          "start": 12,
          "end": 18
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 28
          },
          "typeArguments": null,
          "start": 27,
          "end": 28
        },
        "trueType": {
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
                  "start": 35,
                  "end": 41
                },
                "start": 33,
                "end": 41
              },
              "start": 32,
              "end": 41
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 46,
              "end": 50
            },
            "start": 43,
            "end": 50
          },
          "start": 31,
          "end": 50
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 53,
          "end": 58
        },
        "start": 12,
        "end": 58
      },
      "declare": false,
      "start": 0,
      "end": 59
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 71
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
              "start": 72,
              "end": 73
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 72,
            "end": 73
          }
        ],
        "start": 71,
        "end": 74
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Q",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 81
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
                      "start": 82,
                      "end": 83
                    },
                    "typeArguments": null,
                    "start": 82,
                    "end": 83
                  }
                ],
                "start": 81,
                "end": 84
              },
              "start": 80,
              "end": 84
            },
            "start": 78,
            "end": 84
          },
          "start": 75,
          "end": 84
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 153,
                "end": 156
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 157,
                  "end": 159
                }
              ],
              "optional": false,
              "start": 153,
              "end": 160
            },
            "directive": null,
            "start": 153,
            "end": 161
          }
        ],
        "start": 86,
        "end": 163
      },
      "expression": false,
      "start": 60,
      "end": 163
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 205,
          "end": 207
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 208,
                  "end": 214
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 217,
                  "end": 223
                }
              ],
              "start": 208,
              "end": 223
            }
          ],
          "start": 207,
          "end": 224
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 225,
                "end": 226
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 230,
                  "end": 231
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 232,
                  "end": 239
                },
                "optional": false,
                "computed": false,
                "start": 230,
                "end": 239
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 230,
              "end": 241
            },
            "id": null,
            "generator": false,
            "start": 225,
            "end": 241
          }
        ],
        "optional": false,
        "start": 205,
        "end": 242
      },
      "directive": null,
      "start": 205,
      "end": 243
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 244,
          "end": 246
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 247,
              "end": 253
            }
          ],
          "start": 246,
          "end": 254
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 256
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 260,
                  "end": 261
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 262,
                  "end": 269
                },
                "optional": false,
                "computed": false,
                "start": 260,
                "end": 269
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 260,
              "end": 271
            },
            "id": null,
            "generator": false,
            "start": 255,
            "end": 271
          }
        ],
        "optional": false,
        "start": 244,
        "end": 272
      },
      "directive": null,
      "start": 244,
      "end": 273
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtractParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 363,
        "end": 380
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
              "start": 381,
              "end": 382
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 381,
            "end": 382
          }
        ],
        "start": 380,
        "end": 383
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "parameters",
            "raw": "\"parameters\"",
            "start": 386,
            "end": 398
          },
          "start": 386,
          "end": 398
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 413,
              "end": 414
            },
            "typeArguments": null,
            "start": 413,
            "end": 414
          },
          "start": 407,
          "end": 414
        },
        "trueType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 559,
              "end": 560
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 570,
                    "end": 571
                  },
                  "typeArguments": null,
                  "start": 570,
                  "end": 571
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "parameters",
                    "raw": "\"parameters\"",
                    "start": 572,
                    "end": 584
                  },
                  "start": 572,
                  "end": 584
                },
                "start": 570,
                "end": 585
              },
              "start": 564,
              "end": 585
            },
            "nameType": null,
            "typeAnnotation": {
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
                    "start": 588,
                    "end": 589
                  },
                  "typeArguments": null,
                  "start": 588,
                  "end": 589
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "parameters",
                    "raw": "\"parameters\"",
                    "start": 590,
                    "end": 602
                  },
                  "start": 590,
                  "end": 602
                },
                "start": 588,
                "end": 603
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 604,
                  "end": 605
                },
                "typeArguments": null,
                "start": 604,
                "end": 605
              },
              "start": 588,
              "end": 606
            },
            "optional": false,
            "readonly": null,
            "start": 548,
            "end": 615
          },
          "indexType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 622,
                  "end": 623
                },
                "typeArguments": null,
                "start": 622,
                "end": 623
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "parameters",
                  "raw": "\"parameters\"",
                  "start": 624,
                  "end": 636
                },
                "start": 624,
                "end": 636
              },
              "start": 622,
              "end": 637
            },
            "start": 616,
            "end": 637
          },
          "start": 548,
          "end": 638
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 643,
          "end": 645
        },
        "start": 386,
        "end": 645
      },
      "declare": false,
      "start": 358,
      "end": 646
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Q2",
        "optional": false,
        "typeAnnotation": null,
        "start": 701,
        "end": 703
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
              "start": 704,
              "end": 705
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 704,
            "end": 705
          }
        ],
        "start": 703,
        "end": 706
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSNumberKeyword",
          "start": 709,
          "end": 715
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 724,
            "end": 725
          },
          "typeArguments": null,
          "start": 724,
          "end": 725
        },
        "trueType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "cb",
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
                          "start": 737,
                          "end": 743
                        },
                        "start": 735,
                        "end": 743
                      },
                      "start": 734,
                      "end": 743
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 748,
                      "end": 752
                    },
                    "start": 745,
                    "end": 752
                  },
                  "start": 733,
                  "end": 752
                },
                "start": 731,
                "end": 752
              },
              "start": 729,
              "end": 752
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 757,
              "end": 761
            },
            "start": 754,
            "end": 761
          },
          "start": 728,
          "end": 761
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 764,
          "end": 769
        },
        "start": 709,
        "end": 769
      },
      "declare": false,
      "start": 696,
      "end": 770
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 780,
        "end": 783
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
              "start": 784,
              "end": 785
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 784,
            "end": 785
          }
        ],
        "start": 783,
        "end": 786
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Q2",
                "optional": false,
                "typeAnnotation": null,
                "start": 792,
                "end": 794
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
                      "start": 795,
                      "end": 796
                    },
                    "typeArguments": null,
                    "start": 795,
                    "end": 796
                  }
                ],
                "start": 794,
                "end": 797
              },
              "start": 792,
              "end": 797
            },
            "start": 790,
            "end": 797
          },
          "start": 787,
          "end": 797
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "useT",
              "optional": false,
              "typeAnnotation": null,
              "start": 812,
              "end": 816
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_arg",
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
                      "start": 823,
                      "end": 824
                    },
                    "typeArguments": null,
                    "start": 823,
                    "end": 824
                  },
                  "start": 821,
                  "end": 824
                },
                "start": 817,
                "end": 824
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 827,
                "end": 831
              },
              "start": 825,
              "end": 831
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 832,
              "end": 834
            },
            "expression": false,
            "start": 803,
            "end": 834
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 855,
                "end": 858
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 859,
                      "end": 862
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "useT",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 866,
                      "end": 870
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 871,
                        "end": 874
                      }
                    ],
                    "optional": false,
                    "start": 866,
                    "end": 875
                  },
                  "id": null,
                  "generator": false,
                  "start": 859,
                  "end": 875
                }
              ],
              "optional": false,
              "start": 855,
              "end": 876
            },
            "directive": null,
            "start": 855,
            "end": 877
          }
        ],
        "start": 799,
        "end": 879
      },
      "expression": false,
      "start": 771,
      "end": 879
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "typeAnnotation": null,
          "start": 921,
          "end": 924
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 925,
                  "end": 931
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 934,
                  "end": 940
                }
              ],
              "start": 925,
              "end": 940
            }
          ],
          "start": 924,
          "end": 941
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 942,
                "end": 943
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 947,
                "end": 948
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 949,
                  "end": 951
                }
              ],
              "optional": false,
              "start": 947,
              "end": 952
            },
            "id": null,
            "generator": false,
            "start": 942,
            "end": 952
          }
        ],
        "optional": false,
        "start": 921,
        "end": 953
      },
      "directive": null,
      "start": 921,
      "end": 954
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "typeAnnotation": null,
          "start": 955,
          "end": 958
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 959,
              "end": 965
            }
          ],
          "start": 958,
          "end": 966
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 967,
                "end": 968
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 972,
                "end": 973
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 974,
                  "end": 976
                }
              ],
              "optional": false,
              "start": 972,
              "end": 977
            },
            "id": null,
            "generator": false,
            "start": 967,
            "end": 977
          }
        ],
        "optional": false,
        "start": 955,
        "end": 978
      },
      "directive": null,
      "start": 955,
      "end": 979
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 1132,
        "end": 1133
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1134,
              "end": 1135
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1134,
            "end": 1135
          }
        ],
        "start": 1133,
        "end": 1136
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "V",
            "optional": false,
            "typeAnnotation": null,
            "start": 1139,
            "end": 1140
          },
          "typeArguments": null,
          "start": 1139,
          "end": 1140
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 1153,
                "end": 1157
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 1159,
                    "end": 1162
                  },
                  "start": 1159,
                  "end": 1164
                },
                "start": 1157,
                "end": 1164
              },
              "value": null,
              "start": 1150,
              "end": 1164
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1169,
              "end": 1172
            },
            "start": 1166,
            "end": 1172
          },
          "start": 1149,
          "end": 1172
        },
        "trueType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 1179,
                "end": 1183
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Parameters",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1185,
                    "end": 1195
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1196,
                          "end": 1197
                        },
                        "typeArguments": null,
                        "start": 1196,
                        "end": 1197
                      }
                    ],
                    "start": 1195,
                    "end": 1198
                  },
                  "start": 1185,
                  "end": 1198
                },
                "start": 1183,
                "end": 1198
              },
              "value": null,
              "start": 1176,
              "end": 1198
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 1203,
              "end": 1207
            },
            "start": 1200,
            "end": 1207
          },
          "start": 1175,
          "end": 1207
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Function",
            "optional": false,
            "typeAnnotation": null,
            "start": 1210,
            "end": 1218
          },
          "typeArguments": null,
          "start": 1210,
          "end": 1218
        },
        "start": 1139,
        "end": 1218
      },
      "declare": false,
      "start": 1127,
      "end": 1219
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AddFirstParameterToFunctions",
          "optional": false,
          "typeAnnotation": null,
          "start": 1274,
          "end": 1302
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Target",
                "optional": false,
                "typeAnnotation": null,
                "start": 1303,
                "end": 1309
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1303,
              "end": 1309
            }
          ],
          "start": 1302,
          "end": 1310
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 1318,
            "end": 1319
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Target",
                "optional": false,
                "typeAnnotation": null,
                "start": 1329,
                "end": 1335
              },
              "typeArguments": null,
              "start": 1329,
              "end": 1335
            },
            "start": 1323,
            "end": 1335
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Target",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1338,
                  "end": 1344
                },
                "typeArguments": null,
                "start": 1338,
                "end": 1344
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1345,
                  "end": 1346
                },
                "typeArguments": null,
                "start": 1345,
                "end": 1346
              },
              "start": 1338,
              "end": 1347
            },
            "extendsType": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1360,
                    "end": 1364
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1366,
                        "end": 1369
                      },
                      "start": 1366,
                      "end": 1371
                    },
                    "start": 1364,
                    "end": 1371
                  },
                  "value": null,
                  "start": 1357,
                  "end": 1371
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1376,
                  "end": 1380
                },
                "start": 1373,
                "end": 1380
              },
              "start": 1356,
              "end": 1380
            },
            "trueType": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1393,
                    "end": 1397
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Parameters",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1399,
                        "end": 1409
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSIndexedAccessType",
                            "objectType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Target",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1410,
                                "end": 1416
                              },
                              "typeArguments": null,
                              "start": 1410,
                              "end": 1416
                            },
                            "indexType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1417,
                                "end": 1418
                              },
                              "typeArguments": null,
                              "start": 1417,
                              "end": 1418
                            },
                            "start": 1410,
                            "end": 1419
                          }
                        ],
                        "start": 1409,
                        "end": 1420
                      },
                      "start": 1399,
                      "end": 1420
                    },
                    "start": 1397,
                    "end": 1420
                  },
                  "value": null,
                  "start": 1390,
                  "end": 1420
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1425,
                  "end": 1429
                },
                "start": 1422,
                "end": 1429
              },
              "start": 1389,
              "end": 1429
            },
            "falseType": {
              "type": "TSVoidKeyword",
              "start": 1438,
              "end": 1442
            },
            "start": 1338,
            "end": 1442
          },
          "optional": false,
          "readonly": null,
          "start": 1313,
          "end": 1444
        },
        "declare": false,
        "start": 1269,
        "end": 1445
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1262,
      "end": 1445
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1445
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
    "value": "Q",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 12,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 19,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 43,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 46,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 53,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 60,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 69,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "arg",
    "start": 75,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 153,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 157,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 205,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 208,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 217,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 227,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 232,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 244,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 247,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 257,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 262,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 358,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "ExtractParameters",
    "start": 363,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 384,
    "end": 385
  },
  {
    "type": "String",
    "value": "\"parameters\"",
    "start": 386,
    "end": 398
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 399,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 407,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 559,
    "end": 560
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 561,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 564,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 571,
    "end": 572
  },
  {
    "type": "String",
    "value": "\"parameters\"",
    "start": 572,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "T",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 589,
    "end": 590
  },
  {
    "type": "String",
    "value": "\"parameters\"",
    "start": 590,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "}",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 616,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 623,
    "end": 624
  },
  {
    "type": "String",
    "value": "\"parameters\"",
    "start": 624,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 696,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "Q2",
    "start": 701,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 709,
    "end": 715
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 716,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 729,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 737,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 745,
    "end": 747
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 748,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 754,
    "end": 756
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 757,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 764,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 769,
    "end": 770
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 771,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 780,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 787,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "Q2",
    "start": 792,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 799,
    "end": 800
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 803,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "useT",
    "start": 812,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "_arg",
    "start": 817,
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
    "value": "T",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "void",
    "start": 827,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 855,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 859,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 863,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "useT",
    "start": 866,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 871,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 875,
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
    "type": "Identifier",
    "value": "fn2",
    "start": 921,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 925,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 934,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 944,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 948,
    "end": 949
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 949,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 955,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 959,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 969,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 973,
    "end": 974
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 974,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "type",
    "start": 1127,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1141,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1150,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1153,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1159,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1166,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1169,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1176,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1179,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 1185,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1200,
    "end": 1202
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1203,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 1210,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1262,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1269,
    "end": 1273
  },
  {
    "type": "Identifier",
    "value": "AddFirstParameterToFunctions",
    "start": 1274,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "Target",
    "start": 1303,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1320,
    "end": 1322
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1323,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "Target",
    "start": 1329,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "Target",
    "start": 1338,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1348,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1357,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1360,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1366,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1373,
    "end": 1375
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1376,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1390,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1393,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 1399,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "Target",
    "start": 1410,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1422,
    "end": 1424
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1425,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1438,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1444,
    "end": 1445
  }
]
```
