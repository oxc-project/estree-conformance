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
        "name": "PromiseConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 28
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 42
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 54
              },
              "optional": false,
              "computed": false,
              "start": 36,
              "end": 54
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 63,
                    "end": 66
                  },
                  "start": 61,
                  "end": 66
                },
                "start": 56,
                "end": 66
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 69,
                  "end": 74
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 78,
                      "end": 85
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 86,
                          "end": 89
                        }
                      ],
                      "start": 85,
                      "end": 90
                    },
                    "start": 78,
                    "end": 90
                  },
                  "start": 78,
                  "end": 90
                },
                "start": 69,
                "end": 90
              },
              "start": 67,
              "end": 90
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 35,
            "end": 91
          }
        ],
        "start": 29,
        "end": 93
      },
      "declare": false,
      "start": 0,
      "end": 93
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SetConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 119
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 133
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 134,
                "end": 145
              },
              "optional": false,
              "computed": false,
              "start": 127,
              "end": 145
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 154,
                    "end": 157
                  },
                  "start": 152,
                  "end": 157
                },
                "start": 147,
                "end": 157
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 160,
                  "end": 165
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Set",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 169,
                      "end": 172
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 173,
                          "end": 176
                        }
                      ],
                      "start": 172,
                      "end": 177
                    },
                    "start": 169,
                    "end": 177
                  },
                  "start": 169,
                  "end": 177
                },
                "start": 160,
                "end": 177
              },
              "start": 158,
              "end": 177
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 126,
            "end": 178
          }
        ],
        "start": 120,
        "end": 180
      },
      "declare": false,
      "start": 95,
      "end": 180
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 191,
        "end": 193
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 197,
                    "end": 200
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 201,
                        "end": 207
                      }
                    ],
                    "start": 200,
                    "end": 208
                  },
                  "start": 197,
                  "end": 208
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 211,
                    "end": 214
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 215,
                        "end": 221
                      }
                    ],
                    "start": 214,
                    "end": 222
                  },
                  "start": 211,
                  "end": 222
                }
              ],
              "start": 197,
              "end": 222
            },
            "start": 195,
            "end": 222
          },
          "start": 194,
          "end": 222
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
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 230,
                "end": 231
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 238,
                  "end": 241
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 242,
                      "end": 248
                    }
                  ],
                  "start": 241,
                  "end": 249
                },
                "arguments": [],
                "start": 234,
                "end": 251
              },
              "start": 230,
              "end": 251
            },
            "directive": null,
            "start": 230,
            "end": 252
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 258
            },
            "directive": null,
            "start": 257,
            "end": 259
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 284,
                "end": 285
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Set",
                "optional": false,
                "typeAnnotation": null,
                "start": 297,
                "end": 300
              },
              "start": 284,
              "end": 300
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 312,
                    "end": 313
                  },
                  "directive": null,
                  "start": 312,
                  "end": 314
                }
              ],
              "start": 302,
              "end": 336
            },
            "alternate": null,
            "start": 280,
            "end": 336
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 341,
              "end": 342
            },
            "directive": null,
            "start": 341,
            "end": 343
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 364,
                  "end": 365
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "add",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 366,
                  "end": 369
                },
                "optional": false,
                "computed": false,
                "start": 364,
                "end": 369
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 370,
                  "end": 372
                }
              ],
              "optional": false,
              "start": 364,
              "end": 373
            },
            "directive": null,
            "start": 364,
            "end": 374
          }
        ],
        "start": 224,
        "end": 376
      },
      "expression": false,
      "start": 182,
      "end": 376
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 387,
        "end": 389
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 393,
                    "end": 396
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 397,
                        "end": 403
                      }
                    ],
                    "start": 396,
                    "end": 404
                  },
                  "start": 393,
                  "end": 404
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 407,
                    "end": 410
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 411,
                        "end": 417
                      }
                    ],
                    "start": 410,
                    "end": 418
                  },
                  "start": 407,
                  "end": 418
                }
              ],
              "start": 393,
              "end": 418
            },
            "start": 391,
            "end": 418
          },
          "start": 390,
          "end": 418
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
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 426,
                "end": 427
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 434,
                  "end": 437
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 438,
                      "end": 444
                    }
                  ],
                  "start": 437,
                  "end": 445
                },
                "arguments": [],
                "start": 430,
                "end": 447
              },
              "start": 426,
              "end": 447
            },
            "directive": null,
            "start": 426,
            "end": 448
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 453,
              "end": 454
            },
            "directive": null,
            "start": 453,
            "end": 455
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 480,
                "end": 481
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 493,
                "end": 500
              },
              "start": 480,
              "end": 500
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 512,
                    "end": 513
                  },
                  "directive": null,
                  "start": 512,
                  "end": 514
                }
              ],
              "start": 502,
              "end": 551
            },
            "alternate": null,
            "start": 476,
            "end": 551
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 556,
              "end": 557
            },
            "directive": null,
            "start": 556,
            "end": 558
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 579,
                  "end": 580
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "add",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 581,
                  "end": 584
                },
                "optional": false,
                "computed": false,
                "start": 579,
                "end": 584
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 585,
                  "end": 587
                }
              ],
              "optional": false,
              "start": 579,
              "end": 588
            },
            "directive": null,
            "start": 579,
            "end": 589
          }
        ],
        "start": 420,
        "end": 591
      },
      "expression": false,
      "start": 378,
      "end": 591
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 602,
        "end": 604
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 608,
                    "end": 611
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 612,
                        "end": 618
                      }
                    ],
                    "start": 611,
                    "end": 619
                  },
                  "start": 608,
                  "end": 619
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 622,
                    "end": 625
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 626,
                        "end": 632
                      }
                    ],
                    "start": 625,
                    "end": 633
                  },
                  "start": 622,
                  "end": 633
                }
              ],
              "start": 608,
              "end": 633
            },
            "start": 606,
            "end": 633
          },
          "start": 605,
          "end": 633
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 641,
              "end": 642
            },
            "directive": null,
            "start": 641,
            "end": 643
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 682,
                "end": 683
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Set",
                "optional": false,
                "typeAnnotation": null,
                "start": 695,
                "end": 698
              },
              "start": 682,
              "end": 698
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 710,
                    "end": 711
                  },
                  "directive": null,
                  "start": 710,
                  "end": 712
                }
              ],
              "start": 700,
              "end": 748
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 768,
                    "end": 769
                  },
                  "directive": null,
                  "start": 768,
                  "end": 770
                }
              ],
              "start": 758,
              "end": 786
            },
            "start": 678,
            "end": 786
          }
        ],
        "start": 635,
        "end": 788
      },
      "expression": false,
      "start": 593,
      "end": 788
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 799,
        "end": 801
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 805,
                    "end": 808
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 809,
                        "end": 815
                      }
                    ],
                    "start": 808,
                    "end": 816
                  },
                  "start": 805,
                  "end": 816
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 819,
                    "end": 822
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 823,
                        "end": 829
                      }
                    ],
                    "start": 822,
                    "end": 830
                  },
                  "start": 819,
                  "end": 830
                }
              ],
              "start": 805,
              "end": 830
            },
            "start": 803,
            "end": 830
          },
          "start": 802,
          "end": 830
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
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 838,
                "end": 839
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 846,
                  "end": 849
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 850,
                      "end": 856
                    }
                  ],
                  "start": 849,
                  "end": 857
                },
                "arguments": [],
                "start": 842,
                "end": 859
              },
              "start": 838,
              "end": 859
            },
            "directive": null,
            "start": 838,
            "end": 860
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 865,
              "end": 866
            },
            "directive": null,
            "start": 865,
            "end": 867
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 892,
                "end": 893
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Set",
                "optional": false,
                "typeAnnotation": null,
                "start": 905,
                "end": 908
              },
              "start": 892,
              "end": 908
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 920,
                    "end": 921
                  },
                  "directive": null,
                  "start": 920,
                  "end": 922
                }
              ],
              "start": 910,
              "end": 944
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 964,
                    "end": 965
                  },
                  "directive": null,
                  "start": 964,
                  "end": 966
                }
              ],
              "start": 954,
              "end": 982
            },
            "start": 888,
            "end": 982
          }
        ],
        "start": 832,
        "end": 984
      },
      "expression": false,
      "start": 790,
      "end": 984
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 1007,
        "end": 1008
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1015,
              "end": 1016
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1018,
                "end": 1024
              },
              "start": 1016,
              "end": 1024
            },
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 1027,
              "end": 1029
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1015,
            "end": 1030
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 1043,
                "end": 1049
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 1050,
                "end": 1061
              },
              "optional": false,
              "computed": false,
              "start": 1043,
              "end": 1061
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 1063,
                      "end": 1064
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1063,
                    "end": 1064
                  }
                ],
                "start": 1062,
                "end": 1065
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
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
                        "start": 1072,
                        "end": 1073
                      },
                      "typeArguments": null,
                      "start": 1072,
                      "end": 1073
                    },
                    "start": 1070,
                    "end": 1073
                  },
                  "start": 1066,
                  "end": 1073
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 1082,
                      "end": 1089
                    },
                    "start": 1080,
                    "end": 1089
                  },
                  "start": 1075,
                  "end": 1089
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1092,
                    "end": 1097
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1111,
                          "end": 1112
                        },
                        "typeArguments": null,
                        "start": 1111,
                        "end": 1112
                      },
                      "extendsType": {
                        "type": "TSConstructorType",
                        "abstract": true,
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
                              "start": 1139,
                              "end": 1143
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 1145,
                                "end": 1148
                              },
                              "start": 1143,
                              "end": 1148
                            },
                            "value": null,
                            "start": 1136,
                            "end": 1148
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSInferType",
                            "typeParameter": {
                              "type": "TSTypeParameter",
                              "name": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1159,
                                "end": 1160
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 1159,
                              "end": 1160
                            },
                            "start": 1153,
                            "end": 1160
                          },
                          "start": 1150,
                          "end": 1160
                        },
                        "start": 1122,
                        "end": 1160
                      },
                      "trueType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1164,
                          "end": 1165
                        },
                        "typeArguments": null,
                        "start": 1164,
                        "end": 1165
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 1176,
                        "end": 1181
                      },
                      "start": 1111,
                      "end": 1181
                    },
                    "start": 1111,
                    "end": 1181
                  },
                  "start": 1092,
                  "end": 1187
                },
                "start": 1090,
                "end": 1187
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Function",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1205,
                              "end": 1213
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "prototype",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1214,
                              "end": 1223
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1205,
                            "end": 1223
                          },
                          "property": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1224,
                              "end": 1230
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "hasInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1231,
                              "end": 1242
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1224,
                            "end": 1242
                          },
                          "optional": false,
                          "computed": true,
                          "start": 1205,
                          "end": 1243
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1244,
                          "end": 1248
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1205,
                        "end": 1248
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 1249,
                          "end": 1253
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1255,
                          "end": 1260
                        }
                      ],
                      "optional": false,
                      "start": 1205,
                      "end": 1261
                    },
                    "start": 1198,
                    "end": 1262
                  }
                ],
                "start": 1188,
                "end": 1268
              },
              "expression": false,
              "start": 1062,
              "end": 1268
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1035,
            "end": 1268
          }
        ],
        "start": 1009,
        "end": 1270
      },
      "abstract": false,
      "declare": false,
      "start": 1001,
      "end": 1270
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 1277,
        "end": 1278
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 1287,
        "end": 1288
      },
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1291,
              "end": 1292
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1294,
                "end": 1300
              },
              "start": 1292,
              "end": 1300
            },
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 1303,
              "end": 1305
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1291,
            "end": 1306
          }
        ],
        "start": 1289,
        "end": 1308
      },
      "abstract": false,
      "declare": false,
      "start": 1271,
      "end": 1308
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
        "start": 1315,
        "end": 1316
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 1325,
        "end": 1326
      },
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1329,
              "end": 1330
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1332,
                "end": 1338
              },
              "start": 1330,
              "end": 1338
            },
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 1341,
              "end": 1343
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1329,
            "end": 1344
          }
        ],
        "start": 1327,
        "end": 1346
      },
      "abstract": false,
      "declare": false,
      "start": 1309,
      "end": 1346
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1357,
        "end": 1360
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
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1364,
                    "end": 1365
                  },
                  "typeArguments": null,
                  "start": 1364,
                  "end": 1365
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1368,
                  "end": 1377
                }
              ],
              "start": 1364,
              "end": 1377
            },
            "start": 1362,
            "end": 1377
          },
          "start": 1361,
          "end": 1377
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1385,
              "end": 1386
            },
            "directive": null,
            "start": 1385,
            "end": 1387
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1414,
                  "end": 1415
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1427,
                  "end": 1428
                },
                "start": 1414,
                "end": 1428
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1432,
                  "end": 1433
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1445,
                  "end": 1446
                },
                "start": 1432,
                "end": 1446
              },
              "start": 1414,
              "end": 1446
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1458,
                    "end": 1459
                  },
                  "directive": null,
                  "start": 1458,
                  "end": 1460
                }
              ],
              "start": 1448,
              "end": 1476
            },
            "alternate": null,
            "start": 1410,
            "end": 1476
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1481,
              "end": 1482
            },
            "directive": null,
            "start": 1481,
            "end": 1483
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1510,
                  "end": 1511
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1523,
                  "end": 1524
                },
                "start": 1510,
                "end": 1524
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1528,
                  "end": 1529
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1541,
                  "end": 1542
                },
                "start": 1528,
                "end": 1542
              },
              "start": 1510,
              "end": 1542
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1554,
                    "end": 1555
                  },
                  "directive": null,
                  "start": 1554,
                  "end": 1556
                }
              ],
              "start": 1544,
              "end": 1572
            },
            "alternate": null,
            "start": 1506,
            "end": 1572
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1577,
              "end": 1578
            },
            "directive": null,
            "start": 1577,
            "end": 1579
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1607,
                "end": 1608
              },
              "prefix": true,
              "start": 1606,
              "end": 1608
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 1620,
                  "end": 1627
                }
              ],
              "start": 1610,
              "end": 1633
            },
            "alternate": null,
            "start": 1602,
            "end": 1633
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1638,
              "end": 1639
            },
            "directive": null,
            "start": 1638,
            "end": 1640
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1655,
                "end": 1656
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1668,
                "end": 1669
              },
              "start": 1655,
              "end": 1669
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1681,
                    "end": 1682
                  },
                  "directive": null,
                  "start": 1681,
                  "end": 1683
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1702,
                      "end": 1703
                    },
                    "operator": "instanceof",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1715,
                      "end": 1716
                    },
                    "start": 1702,
                    "end": 1716
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1732,
                          "end": 1733
                        },
                        "directive": null,
                        "start": 1732,
                        "end": 1734
                      }
                    ],
                    "start": 1718,
                    "end": 1754
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1782,
                          "end": 1783
                        },
                        "directive": null,
                        "start": 1782,
                        "end": 1784
                      }
                    ],
                    "start": 1768,
                    "end": 1800
                  },
                  "start": 1698,
                  "end": 1800
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1809,
                    "end": 1810
                  },
                  "directive": null,
                  "start": 1809,
                  "end": 1811
                }
              ],
              "start": 1671,
              "end": 1823
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1843,
                    "end": 1844
                  },
                  "directive": null,
                  "start": 1843,
                  "end": 1845
                }
              ],
              "start": 1833,
              "end": 1857
            },
            "start": 1651,
            "end": 1857
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1862,
              "end": 1863
            },
            "directive": null,
            "start": 1862,
            "end": 1864
          }
        ],
        "start": 1379,
        "end": 1872
      },
      "expression": false,
      "start": 1348,
      "end": 1872
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 1984,
        "end": 1985
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
              "start": 1992,
              "end": 1993
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1996,
                "end": 2002
              },
              "start": 1994,
              "end": 2002
            },
            "accessibility": null,
            "static": false,
            "start": 1992,
            "end": 2003
          }
        ],
        "start": 1986,
        "end": 2005
      },
      "declare": false,
      "start": 1974,
      "end": 2005
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 2013,
        "end": 2014
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 2021,
              "end": 2022
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2024,
                "end": 2030
              },
              "start": 2022,
              "end": 2030
            },
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 2033,
              "end": 2035
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2021,
            "end": 2036
          }
        ],
        "start": 2015,
        "end": 2038
      },
      "abstract": false,
      "declare": false,
      "start": 2007,
      "end": 2038
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "goo",
        "optional": false,
        "typeAnnotation": null,
        "start": 2049,
        "end": 2052
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
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 2056,
                "end": 2057
              },
              "typeArguments": null,
              "start": 2056,
              "end": 2057
            },
            "start": 2054,
            "end": 2057
          },
          "start": 2053,
          "end": 2057
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2065,
              "end": 2066
            },
            "directive": null,
            "start": 2065,
            "end": 2067
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2076,
                "end": 2077
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2089,
                "end": 2090
              },
              "start": 2076,
              "end": 2090
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2102,
                      "end": 2103
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2104,
                      "end": 2105
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2102,
                    "end": 2105
                  },
                  "directive": null,
                  "start": 2102,
                  "end": 2106
                }
              ],
              "start": 2092,
              "end": 2112
            },
            "alternate": null,
            "start": 2072,
            "end": 2112
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2117,
              "end": 2118
            },
            "directive": null,
            "start": 2117,
            "end": 2119
          }
        ],
        "start": 2059,
        "end": 2121
      },
      "expression": false,
      "start": 2040,
      "end": 2121
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2122
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
    "value": "PromiseConstructor",
    "start": 10,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 43,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 56,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 63,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 69,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 75,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 78,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 86,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 95,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "SetConstructor",
    "start": 105,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 127,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 134,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 147,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 154,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 160,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 166,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 169,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 173,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 182,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 191,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 197,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 201,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 211,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 215,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 234,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 238,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 242,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 280,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 286,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 297,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 366,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 369,
    "end": 370
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 370,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 375,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 378,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 387,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 389,
    "end": 390
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
    "value": "Set",
    "start": 393,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 397,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 407,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 411,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 428,
    "end": 429
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 430,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 434,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 438,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 476,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 480,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 482,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 493,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 581,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 584,
    "end": 585
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 585,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 590,
    "end": 591
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 593,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 602,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 608,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 612,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 622,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 626,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 642,
    "end": 643
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 678,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 682,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 684,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 695,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 747,
    "end": 748
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 753,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 787,
    "end": 788
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 790,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 799,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 805,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 809,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 819,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 823,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "type": "Keyword",
    "value": "new",
    "start": 842,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 846,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 850,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 866,
    "end": 867
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 888,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 892,
    "end": 893
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 894,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 905,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "s",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 943,
    "end": 944
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 949,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 983,
    "end": 984
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1001,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "value": "a",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1018,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1027,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1035,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1043,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 1050,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1066,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1075,
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
    "value": "unknown",
    "start": 1082,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "value",
    "start": 1092,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1098,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1113,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 1122,
    "end": 1130
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1131,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1136,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1139,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1145,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1150,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1153,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1176,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1198,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 1205,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 1214,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1224,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 1231,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 1244,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1249,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1255,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1271,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1279,
    "end": 1286
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1294,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1303,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1309,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1317,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1332,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1341,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1348,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1357,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1368,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Keyword",
    "value": "if",
    "start": 1410,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1416,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1429,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1434,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1506,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1512,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1525,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1530,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1602,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1620,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1651,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1657,
    "end": 1667
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1698,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1704,
    "end": 1714
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1715,
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
    "value": "{",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1763,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1828,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1974,
    "end": 1983
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1996,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2007,
    "end": 2012
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2024,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 2033,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2040,
    "end": 2048
  },
  {
    "type": "Identifier",
    "value": "goo",
    "start": 2049,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2072,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2078,
    "end": 2088
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 2089,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2120,
    "end": 2121
  }
]
```
