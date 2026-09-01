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
        "name": "IndexedWithThis",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 25
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
              "name": "init",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 74
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
                    "name": "this",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 84,
                        "end": 88
                      },
                      "start": 82,
                      "end": 88
                    },
                    "start": 78,
                    "end": 88
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 93,
                    "end": 97
                  },
                  "start": 90,
                  "end": 97
                },
                "start": 77,
                "end": 97
              },
              "start": 75,
              "end": 97
            },
            "accessibility": null,
            "static": false,
            "start": 70,
            "end": 98
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "willDestroy",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 114
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
                    "name": "this",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 124,
                        "end": 127
                      },
                      "start": 122,
                      "end": 127
                    },
                    "start": 118,
                    "end": 127
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 132,
                    "end": 136
                  },
                  "start": 129,
                  "end": 136
                },
                "start": 117,
                "end": 136
              },
              "start": 115,
              "end": 136
            },
            "accessibility": null,
            "static": false,
            "start": 103,
            "end": 137
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "propName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 153,
                    "end": 159
                  },
                  "start": 151,
                  "end": 159
                },
                "start": 143,
                "end": 159
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 162,
                    "end": 168
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 171,
                    "end": 177
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 180,
                    "end": 187
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 190,
                    "end": 196
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 199,
                    "end": 208
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 211,
                    "end": 215
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 218,
                    "end": 220
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "this",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 231,
                            "end": 234
                          },
                          "start": 229,
                          "end": 234
                        },
                        "start": 225,
                        "end": 234
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 239,
                          "end": 243
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 244,
                              "end": 247
                            },
                            "start": 244,
                            "end": 249
                          },
                          "start": 243,
                          "end": 249
                        },
                        "value": null,
                        "start": 236,
                        "end": 249
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 254,
                        "end": 257
                      },
                      "start": 251,
                      "end": 257
                    },
                    "start": 224,
                    "end": 257
                  }
                ],
                "start": 162,
                "end": 258
              },
              "start": 160,
              "end": 258
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 142,
            "end": 259
          }
        ],
        "start": 26,
        "end": 261
      },
      "declare": false,
      "start": 0,
      "end": 261
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IndexedWithoutThis",
        "optional": false,
        "typeAnnotation": null,
        "start": 272,
        "end": 290
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
              "name": "init",
              "optional": false,
              "typeAnnotation": null,
              "start": 371,
              "end": 375
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
                    "type": "TSVoidKeyword",
                    "start": 384,
                    "end": 388
                  },
                  "start": 381,
                  "end": 388
                },
                "start": 378,
                "end": 388
              },
              "start": 376,
              "end": 388
            },
            "accessibility": null,
            "static": false,
            "start": 371,
            "end": 389
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "willDestroy",
              "optional": false,
              "typeAnnotation": null,
              "start": 394,
              "end": 405
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
                    "type": "TSVoidKeyword",
                    "start": 414,
                    "end": 418
                  },
                  "start": 411,
                  "end": 418
                },
                "start": 408,
                "end": 418
              },
              "start": 406,
              "end": 418
            },
            "accessibility": null,
            "static": false,
            "start": 394,
            "end": 419
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "propName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 435,
                    "end": 441
                  },
                  "start": 433,
                  "end": 441
                },
                "start": 425,
                "end": 441
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 444,
                "end": 447
              },
              "start": 442,
              "end": 447
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 424,
            "end": 448
          }
        ],
        "start": 291,
        "end": 450
      },
      "declare": false,
      "start": 262,
      "end": 450
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SimpleInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 461,
        "end": 476
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 483,
              "end": 486
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
                    "start": 490,
                    "end": 496
                  },
                  "start": 488,
                  "end": 496
                },
                "start": 487,
                "end": 496
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 483,
            "end": 498
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 503,
              "end": 506
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
                "start": 510,
                "end": 516
              },
              "start": 508,
              "end": 516
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 503,
            "end": 517
          }
        ],
        "start": 477,
        "end": 519
      },
      "declare": false,
      "start": 451,
      "end": 519
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "extend1",
        "optional": false,
        "typeAnnotation": null,
        "start": 537,
        "end": 544
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IndexedWithThis",
                "optional": false,
                "typeAnnotation": null,
                "start": 551,
                "end": 566
              },
              "typeArguments": null,
              "start": 551,
              "end": 566
            },
            "start": 549,
            "end": 566
          },
          "start": 545,
          "end": 566
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 569,
          "end": 573
        },
        "start": 567,
        "end": 573
      },
      "body": null,
      "expression": false,
      "start": 520,
      "end": 574
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "extend2",
        "optional": false,
        "typeAnnotation": null,
        "start": 592,
        "end": 599
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IndexedWithoutThis",
                "optional": false,
                "typeAnnotation": null,
                "start": 606,
                "end": 624
              },
              "typeArguments": null,
              "start": 606,
              "end": 624
            },
            "start": 604,
            "end": 624
          },
          "start": 600,
          "end": 624
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 627,
          "end": 631
        },
        "start": 625,
        "end": 631
      },
      "body": null,
      "expression": false,
      "start": 575,
      "end": 632
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "simple",
        "optional": false,
        "typeAnnotation": null,
        "start": 650,
        "end": 656
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
                "name": "SimpleInterface",
                "optional": false,
                "typeAnnotation": null,
                "start": 662,
                "end": 677
              },
              "typeArguments": null,
              "start": 662,
              "end": 677
            },
            "start": 660,
            "end": 677
          },
          "start": 657,
          "end": 677
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 680,
          "end": 684
        },
        "start": 678,
        "end": 684
      },
      "body": null,
      "expression": false,
      "start": 633,
      "end": 685
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "extend1",
          "optional": false,
          "typeAnnotation": null,
          "start": 687,
          "end": 694
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
                  "name": "init",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 701,
                  "end": 705
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
                          "type": "ThisExpression",
                          "start": 718,
                          "end": 722
                        },
                        "directive": null,
                        "start": 718,
                        "end": 722
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 807,
                            "end": 811
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "willDestroy",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 812,
                            "end": 823
                          },
                          "optional": false,
                          "computed": false,
                          "start": 807,
                          "end": 823
                        },
                        "directive": null,
                        "start": 807,
                        "end": 823
                      }
                    ],
                    "start": 708,
                    "end": 829
                  },
                  "expression": false,
                  "start": 705,
                  "end": 829
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 701,
                "end": 829
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mine",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 835,
                  "end": 839
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 841,
                  "end": 843
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 835,
                "end": 843
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 849,
                  "end": 852
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
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 865,
                            "end": 869
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "url",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 870,
                            "end": 873
                          },
                          "optional": false,
                          "computed": false,
                          "start": 865,
                          "end": 873
                        },
                        "directive": null,
                        "start": 865,
                        "end": 874
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 937,
                            "end": 941
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "willDestroy",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 942,
                            "end": 953
                          },
                          "optional": false,
                          "computed": false,
                          "start": 937,
                          "end": 953
                        },
                        "directive": null,
                        "start": 937,
                        "end": 954
                      }
                    ],
                    "start": 855,
                    "end": 960
                  },
                  "expression": false,
                  "start": 852,
                  "end": 960
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 849,
                "end": 960
              }
            ],
            "start": 695,
            "end": 962
          }
        ],
        "optional": false,
        "start": 687,
        "end": 963
      },
      "directive": null,
      "start": 687,
      "end": 964
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "extend2",
          "optional": false,
          "typeAnnotation": null,
          "start": 965,
          "end": 972
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
                  "name": "init",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 979,
                  "end": 983
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
                          "type": "ThisExpression",
                          "start": 996,
                          "end": 1000
                        },
                        "directive": null,
                        "start": 996,
                        "end": 1000
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1066,
                            "end": 1070
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "mine",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1071,
                            "end": 1075
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1066,
                          "end": 1075
                        },
                        "directive": null,
                        "start": 1066,
                        "end": 1075
                      }
                    ],
                    "start": 986,
                    "end": 1081
                  },
                  "expression": false,
                  "start": 983,
                  "end": 1081
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 979,
                "end": 1081
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mine",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1087,
                  "end": 1091
                },
                "value": {
                  "type": "Literal",
                  "value": 13,
                  "raw": "13",
                  "start": 1093,
                  "end": 1095
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1087,
                "end": 1095
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1101,
                  "end": 1104
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
                          "type": "ThisExpression",
                          "start": 1117,
                          "end": 1121
                        },
                        "directive": null,
                        "start": 1117,
                        "end": 1121
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1187,
                            "end": 1191
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "mine",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1192,
                            "end": 1196
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1187,
                          "end": 1196
                        },
                        "directive": null,
                        "start": 1187,
                        "end": 1196
                      }
                    ],
                    "start": 1107,
                    "end": 1202
                  },
                  "expression": false,
                  "start": 1104,
                  "end": 1202
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1101,
                "end": 1202
              }
            ],
            "start": 973,
            "end": 1204
          }
        ],
        "optional": false,
        "start": 965,
        "end": 1205
      },
      "directive": null,
      "start": 965,
      "end": 1206
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "simple",
          "optional": false,
          "typeAnnotation": null,
          "start": 1208,
          "end": 1214
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1221,
                  "end": 1224
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
                      "typeAnnotation": null,
                      "start": 1225,
                      "end": 1226
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
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1245,
                              "end": 1246
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1247,
                              "end": 1253
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1245,
                            "end": 1253
                          },
                          "operator": "+",
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1256,
                                "end": 1260
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1261,
                                "end": 1264
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1256,
                              "end": 1264
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1256,
                            "end": 1266
                          },
                          "start": 1245,
                          "end": 1266
                        },
                        "start": 1238,
                        "end": 1267
                      }
                    ],
                    "start": 1228,
                    "end": 1273
                  },
                  "expression": false,
                  "start": 1224,
                  "end": 1273
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1221,
                "end": 1273
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1279,
                  "end": 1282
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
                          "value": 14,
                          "raw": "14",
                          "start": 1302,
                          "end": 1304
                        },
                        "start": 1295,
                        "end": 1305
                      }
                    ],
                    "start": 1285,
                    "end": 1311
                  },
                  "expression": false,
                  "start": 1282,
                  "end": 1311
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1279,
                "end": 1311
              }
            ],
            "start": 1215,
            "end": 1313
          }
        ],
        "optional": false,
        "start": 1208,
        "end": 1314
      },
      "directive": null,
      "start": 1208,
      "end": 1314
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1314
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
    "value": "IndexedWithThis",
    "start": 10,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "init",
    "start": 70,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 78,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 84,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 90,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 93,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "willDestroy",
    "start": 103,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 118,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 124,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 129,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 132,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "propName",
    "start": 143,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 153,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 162,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 171,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 180,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 190,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 199,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 209,
    "end": 210
  },
  {
    "type": "Null",
    "value": "null",
    "start": 211,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "this",
    "start": 225,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 231,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 236,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 239,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 244,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 251,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 254,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 262,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "IndexedWithoutThis",
    "start": 272,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "init",
    "start": 371,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 375,
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
    "type": "Punctuator",
    "value": ")",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 381,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 384,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "willDestroy",
    "start": 394,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 411,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 414,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "propName",
    "start": 425,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 435,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 444,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 449,
    "end": 450
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 451,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "SimpleInterface",
    "start": 461,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 483,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 490,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "bar",
    "start": 503,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 506,
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
    "value": ":",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 510,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 520,
    "end": 527
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 528,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "extend1",
    "start": 537,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 545,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "IndexedWithThis",
    "start": 551,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 567,
    "end": 568
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 569,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 575,
    "end": 582
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 583,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "extend2",
    "start": 592,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 600,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "IndexedWithoutThis",
    "start": 606,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 625,
    "end": 626
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 627,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 633,
    "end": 640
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 641,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "simple",
    "start": 650,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 657,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "SimpleInterface",
    "start": 662,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 678,
    "end": 679
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 680,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "extend1",
    "start": 687,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "init",
    "start": 701,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 708,
    "end": 709
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 718,
    "end": 722
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 807,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "willDestroy",
    "start": 812,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "mine",
    "start": 835,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 839,
    "end": 840
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 841,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 849,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 855,
    "end": 856
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 865,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "url",
    "start": 870,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 873,
    "end": 874
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 937,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "willDestroy",
    "start": 942,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": ")",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "extend2",
    "start": 965,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "init",
    "start": 979,
    "end": 983
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
    "value": "{",
    "start": 986,
    "end": 987
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 996,
    "end": 1000
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1066,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "mine",
    "start": 1071,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1080,
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
    "value": "mine",
    "start": 1087,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 1093,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1101,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1117,
    "end": 1121
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1187,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "mine",
    "start": 1192,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "simple",
    "start": 1208,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1221,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1238,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1247,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1256,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1261,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1279,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1295,
    "end": 1301
  },
  {
    "type": "Numeric",
    "value": "14",
    "start": 1302,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1313,
    "end": 1314
  }
]
```
