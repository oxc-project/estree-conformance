__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassDecorator1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 32
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 49
              },
              "typeArguments": null,
              "start": 41,
              "end": 49
            },
            "start": 39,
            "end": 49
          },
          "start": 33,
          "end": 49
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 52,
          "end": 56
        },
        "start": 50,
        "end": 56
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 57
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassDecorator2",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 90
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 94,
              "end": 100
            },
            "start": 92,
            "end": 100
          },
          "start": 91,
          "end": 100
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "target",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Function",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 112,
                    "end": 120
                  },
                  "typeArguments": null,
                  "start": 112,
                  "end": 120
                },
                "start": 110,
                "end": 120
              },
              "start": 104,
              "end": 120
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 125,
              "end": 129
            },
            "start": 122,
            "end": 129
          },
          "start": 103,
          "end": 129
        },
        "start": 101,
        "end": 129
      },
      "body": null,
      "expression": false,
      "start": 58,
      "end": 130
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropertyDecorator1",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 166
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
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
                "start": 175,
                "end": 181
              },
              "typeArguments": null,
              "start": 175,
              "end": 181
            },
            "start": 173,
            "end": 181
          },
          "start": 167,
          "end": 181
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 188,
                  "end": 194
                },
                {
                  "type": "TSSymbolKeyword",
                  "start": 197,
                  "end": 203
                }
              ],
              "start": 188,
              "end": 203
            },
            "start": 186,
            "end": 203
          },
          "start": 183,
          "end": 203
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "descriptor",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropertyDescriptor",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 236
              },
              "typeArguments": null,
              "start": 218,
              "end": 236
            },
            "start": 216,
            "end": 236
          },
          "start": 205,
          "end": 236
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 239,
          "end": 243
        },
        "start": 237,
        "end": 243
      },
      "body": null,
      "expression": false,
      "start": 131,
      "end": 244
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropertyDecorator2",
        "optional": false,
        "typeAnnotation": null,
        "start": 262,
        "end": 280
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 284,
              "end": 290
            },
            "start": 282,
            "end": 290
          },
          "start": 281,
          "end": 290
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "target",
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
                    "start": 302,
                    "end": 308
                  },
                  "typeArguments": null,
                  "start": 302,
                  "end": 308
                },
                "start": 300,
                "end": 308
              },
              "start": 294,
              "end": 308
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 315,
                      "end": 321
                    },
                    {
                      "type": "TSSymbolKeyword",
                      "start": 324,
                      "end": 330
                    }
                  ],
                  "start": 315,
                  "end": 330
                },
                "start": 313,
                "end": 330
              },
              "start": 310,
              "end": 330
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "descriptor",
              "optional": true,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropertyDescriptor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 345,
                    "end": 363
                  },
                  "typeArguments": null,
                  "start": 345,
                  "end": 363
                },
                "start": 343,
                "end": 363
              },
              "start": 332,
              "end": 363
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 368,
              "end": 372
            },
            "start": 365,
            "end": 372
          },
          "start": 293,
          "end": 372
        },
        "start": 291,
        "end": 372
      },
      "body": null,
      "expression": false,
      "start": 245,
      "end": 373
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ParameterDecorator1",
        "optional": false,
        "typeAnnotation": null,
        "start": 391,
        "end": 410
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
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
                "start": 419,
                "end": 425
              },
              "typeArguments": null,
              "start": 419,
              "end": 425
            },
            "start": 417,
            "end": 425
          },
          "start": 411,
          "end": 425
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 432,
                  "end": 438
                },
                {
                  "type": "TSSymbolKeyword",
                  "start": 441,
                  "end": 447
                }
              ],
              "start": 432,
              "end": 447
            },
            "start": 430,
            "end": 447
          },
          "start": 427,
          "end": 447
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "paramIndex",
          "optional": false,
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
          "start": 449,
          "end": 467
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 470,
          "end": 474
        },
        "start": 468,
        "end": 474
      },
      "body": null,
      "expression": false,
      "start": 374,
      "end": 475
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ParameterDecorator2",
        "optional": false,
        "typeAnnotation": null,
        "start": 493,
        "end": 512
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 516,
              "end": 522
            },
            "start": 514,
            "end": 522
          },
          "start": 513,
          "end": 522
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "target",
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
                    "start": 534,
                    "end": 540
                  },
                  "typeArguments": null,
                  "start": 534,
                  "end": 540
                },
                "start": 532,
                "end": 540
              },
              "start": 526,
              "end": 540
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 547,
                      "end": 553
                    },
                    {
                      "type": "TSSymbolKeyword",
                      "start": 556,
                      "end": 562
                    }
                  ],
                  "start": 547,
                  "end": 562
                },
                "start": 545,
                "end": 562
              },
              "start": 542,
              "end": 562
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "paramIndex",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 576,
                  "end": 582
                },
                "start": 574,
                "end": 582
              },
              "start": 564,
              "end": 582
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 587,
              "end": 591
            },
            "start": 584,
            "end": 591
          },
          "start": 525,
          "end": 591
        },
        "start": 523,
        "end": 591
      },
      "body": null,
      "expression": false,
      "start": 476,
      "end": 592
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ClassDecorator1",
            "optional": false,
            "typeAnnotation": null,
            "start": 595,
            "end": 610
          },
          "start": 594,
          "end": 610
        },
        {
          "type": "Decorator",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClassDecorator2",
              "optional": false,
              "typeAnnotation": null,
              "start": 612,
              "end": 627
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 628,
                "end": 630
              }
            ],
            "optional": false,
            "start": 612,
            "end": 631
          },
          "start": 611,
          "end": 631
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Greeter",
        "optional": false,
        "typeAnnotation": null,
        "start": 638,
        "end": 645
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
              "start": 652,
              "end": 663
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
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ParameterDecorator1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 672,
                        "end": 691
                      },
                      "start": 671,
                      "end": 691
                    },
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ParameterDecorator2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 700,
                          "end": 719
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 20,
                            "raw": "20",
                            "start": 720,
                            "end": 722
                          }
                        ],
                        "optional": false,
                        "start": 700,
                        "end": 723
                      },
                      "start": 699,
                      "end": 723
                    }
                  ],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "greeting",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 748,
                        "end": 754
                      },
                      "start": 746,
                      "end": 754
                    },
                    "start": 738,
                    "end": 754
                  },
                  "readonly": false,
                  "static": false,
                  "start": 671,
                  "end": 754
                },
                {
                  "type": "RestElement",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ParameterDecorator1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 771,
                        "end": 790
                      },
                      "start": 770,
                      "end": 790
                    },
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ParameterDecorator2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 799,
                          "end": 818
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 30,
                            "raw": "30",
                            "start": 819,
                            "end": 821
                          }
                        ],
                        "optional": false,
                        "start": 799,
                        "end": 822
                      },
                      "start": 798,
                      "end": 822
                    }
                  ],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 833,
                    "end": 834
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 836,
                        "end": 842
                      },
                      "start": 836,
                      "end": 844
                    },
                    "start": 834,
                    "end": 844
                  },
                  "value": null,
                  "start": 770,
                  "end": 844
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 846,
                "end": 853
              },
              "expression": false,
              "start": 663,
              "end": 853
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 652,
            "end": 853
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropertyDecorator1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 864,
                  "end": 882
                },
                "start": 863,
                "end": 882
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropertyDecorator2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 888,
                    "end": 906
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 40,
                      "raw": "40",
                      "start": 907,
                      "end": 909
                    }
                  ],
                  "optional": false,
                  "start": 888,
                  "end": 910
                },
                "start": 887,
                "end": 910
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greet",
              "optional": false,
              "typeAnnotation": null,
              "start": 915,
              "end": 920
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Literal",
                          "value": "<h1>",
                          "raw": "\"<h1>\"",
                          "start": 940,
                          "end": 946
                        },
                        "operator": "+",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 949,
                            "end": 953
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "greeting",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 954,
                            "end": 962
                          },
                          "optional": false,
                          "computed": false,
                          "start": 949,
                          "end": 962
                        },
                        "start": 940,
                        "end": 962
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": "</h1>",
                        "raw": "\"</h1>\"",
                        "start": 965,
                        "end": 972
                      },
                      "start": 940,
                      "end": 972
                    },
                    "start": 933,
                    "end": 973
                  }
                ],
                "start": 923,
                "end": 979
              },
              "expression": false,
              "start": 920,
              "end": 979
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 863,
            "end": 979
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropertyDecorator1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 986,
                  "end": 1004
                },
                "start": 985,
                "end": 1004
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropertyDecorator2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1010,
                    "end": 1028
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 50,
                      "raw": "50",
                      "start": 1029,
                      "end": 1031
                    }
                  ],
                  "optional": false,
                  "start": 1010,
                  "end": 1032
                },
                "start": 1009,
                "end": 1032
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1045,
              "end": 1046
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1048,
                "end": 1054
              },
              "start": 1046,
              "end": 1054
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 985,
            "end": 1055
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropertyDecorator1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1062,
                  "end": 1080
                },
                "start": 1061,
                "end": 1080
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropertyDecorator2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1086,
                    "end": 1104
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 60,
                      "raw": "60",
                      "start": 1105,
                      "end": 1107
                    }
                  ],
                  "optional": false,
                  "start": 1086,
                  "end": 1108
                },
                "start": 1085,
                "end": 1108
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1128,
              "end": 1130
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1132,
                "end": 1138
              },
              "start": 1130,
              "end": 1138
            },
            "value": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 1141,
              "end": 1143
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 1061,
            "end": 1144
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 1162,
              "end": 1164
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
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ParameterDecorator1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1173,
                        "end": 1192
                      },
                      "start": 1172,
                      "end": 1192
                    },
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ParameterDecorator2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1201,
                          "end": 1220
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 70,
                            "raw": "70",
                            "start": 1221,
                            "end": 1223
                          }
                        ],
                        "optional": false,
                        "start": 1201,
                        "end": 1224
                      },
                      "start": 1200,
                      "end": 1224
                    }
                  ],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1235,
                      "end": 1241
                    },
                    "start": 1233,
                    "end": 1241
                  },
                  "start": 1232,
                  "end": 1241
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1260,
                        "end": 1264
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "greeting",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1265,
                        "end": 1273
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1260,
                      "end": 1273
                    },
                    "start": 1253,
                    "end": 1274
                  }
                ],
                "start": 1243,
                "end": 1280
              },
              "expression": false,
              "start": 1164,
              "end": 1280
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1154,
            "end": 1280
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropertyDecorator1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1287,
                  "end": 1305
                },
                "start": 1286,
                "end": 1305
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropertyDecorator2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1311,
                    "end": 1329
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 80,
                      "raw": "80",
                      "start": 1330,
                      "end": 1332
                    }
                  ],
                  "optional": false,
                  "start": 1311,
                  "end": 1333
                },
                "start": 1310,
                "end": 1333
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greetings",
              "optional": false,
              "typeAnnotation": null,
              "start": 1342,
              "end": 1351
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1371,
                        "end": 1375
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "greeting",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1376,
                        "end": 1384
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1371,
                      "end": 1384
                    },
                    "start": 1364,
                    "end": 1385
                  }
                ],
                "start": 1354,
                "end": 1391
              },
              "expression": false,
              "start": 1351,
              "end": 1391
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1286,
            "end": 1391
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greetings",
              "optional": false,
              "typeAnnotation": null,
              "start": 1401,
              "end": 1410
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
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ParameterDecorator1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1419,
                        "end": 1438
                      },
                      "start": 1418,
                      "end": 1438
                    },
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ParameterDecorator2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1447,
                          "end": 1466
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 90,
                            "raw": "90",
                            "start": 1467,
                            "end": 1469
                          }
                        ],
                        "optional": false,
                        "start": 1447,
                        "end": 1470
                      },
                      "start": 1446,
                      "end": 1470
                    }
                  ],
                  "name": "greetings",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1489,
                      "end": 1495
                    },
                    "start": 1487,
                    "end": 1495
                  },
                  "start": 1478,
                  "end": 1495
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1507,
                          "end": 1511
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1512,
                          "end": 1520
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1507,
                        "end": 1520
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "greetings",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1523,
                        "end": 1532
                      },
                      "start": 1507,
                      "end": 1532
                    },
                    "directive": null,
                    "start": 1507,
                    "end": 1533
                  }
                ],
                "start": 1497,
                "end": 1539
              },
              "expression": false,
              "start": 1410,
              "end": 1539
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1397,
            "end": 1539
          }
        ],
        "start": 646,
        "end": 1545
      },
      "abstract": false,
      "declare": false,
      "start": 594,
      "end": 1545
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1545
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "ClassDecorator1",
    "start": 17,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 33,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 41,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 52,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 58,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 66,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "ClassDecorator2",
    "start": 75,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 94,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 112,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 122,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 125,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 131,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 139,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "PropertyDecorator1",
    "start": 148,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 167,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 175,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 183,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 188,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 197,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "descriptor",
    "start": 205,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "PropertyDescriptor",
    "start": 218,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 237,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 239,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 245,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 253,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "PropertyDecorator2",
    "start": 262,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 284,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 294,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 302,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 310,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 315,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 324,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "descriptor",
    "start": 332,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "PropertyDescriptor",
    "start": 345,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 365,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 368,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 374,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 382,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "ParameterDecorator1",
    "start": 391,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 411,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 419,
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
    "value": "key",
    "start": 427,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 432,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 441,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "paramIndex",
    "start": 449,
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
    "value": ")",
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
    "type": "Keyword",
    "value": "void",
    "start": 470,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 476,
    "end": 483
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 484,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "ParameterDecorator2",
    "start": 493,
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
    "value": "x",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 516,
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
    "type": "Punctuator",
    "value": "(",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 526,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 534,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 542,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 547,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 556,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "paramIndex",
    "start": 564,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 576,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 584,
    "end": 586
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 587,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "ClassDecorator1",
    "start": 595,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "ClassDecorator2",
    "start": 612,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 627,
    "end": 628
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 628,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 630,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 632,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "Greeter",
    "start": 638,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 652,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "ParameterDecorator1",
    "start": 672,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "ParameterDecorator2",
    "start": 700,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 719,
    "end": 720
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 720,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 722,
    "end": 723
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 731,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 738,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 748,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "ParameterDecorator1",
    "start": 771,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "ParameterDecorator2",
    "start": 799,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 818,
    "end": 819
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 819,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 830,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 836,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "PropertyDecorator1",
    "start": 864,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "PropertyDecorator2",
    "start": 888,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 906,
    "end": 907
  },
  {
    "type": "Numeric",
    "value": "40",
    "start": 907,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "greet",
    "start": 915,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 923,
    "end": 924
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 933,
    "end": 939
  },
  {
    "type": "String",
    "value": "\"<h1>\"",
    "start": 940,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 947,
    "end": 948
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 949,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 954,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 963,
    "end": 964
  },
  {
    "type": "String",
    "value": "\"</h1>\"",
    "start": 965,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "PropertyDecorator1",
    "start": 986,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "PropertyDecorator2",
    "start": 1010,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Numeric",
    "value": "50",
    "start": 1029,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1037,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "string",
    "start": 1048,
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
    "value": "@",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "PropertyDecorator1",
    "start": 1062,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "PropertyDecorator2",
    "start": 1086,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Numeric",
    "value": "60",
    "start": 1105,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1113,
    "end": 1120
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1121,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1128,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1132,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1141,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1154,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 1162,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "ParameterDecorator1",
    "start": 1173,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "ParameterDecorator2",
    "start": 1201,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Numeric",
    "value": "70",
    "start": 1221,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1235,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1253,
    "end": 1259
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1260,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 1265,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "PropertyDecorator1",
    "start": 1287,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "PropertyDecorator2",
    "start": 1311,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Numeric",
    "value": "80",
    "start": 1330,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1338,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "greetings",
    "start": 1342,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1364,
    "end": 1370
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1371,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 1376,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1397,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "greetings",
    "start": 1401,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Identifier",
    "value": "ParameterDecorator1",
    "start": 1419,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "ParameterDecorator2",
    "start": 1447,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Numeric",
    "value": "90",
    "start": 1467,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Identifier",
    "value": "greetings",
    "start": 1478,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1489,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1507,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 1512,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "greetings",
    "start": 1523,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1544,
    "end": 1545
  }
]
```
