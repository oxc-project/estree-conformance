__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "strArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 24,
                  "end": 30
                },
                "start": 24,
                "end": 32
              },
              "start": 22,
              "end": 32
            },
            "start": 14,
            "end": 32
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 32
        }
      ],
      "declare": true,
      "start": 0,
      "end": 33
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "strStrTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 62,
                    "end": 68
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 70,
                    "end": 76
                  }
                ],
                "start": 61,
                "end": 77
              },
              "start": 59,
              "end": 77
            },
            "start": 48,
            "end": 77
          },
          "init": null,
          "definite": false,
          "start": 48,
          "end": 77
        }
      ],
      "declare": true,
      "start": 34,
      "end": 78
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null,
                "start": 191,
                "end": 193
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 194
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "strArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 197,
            "end": 205
          },
          "definite": false,
          "start": 190,
          "end": 205
        }
      ],
      "declare": false,
      "start": 184,
      "end": 206
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
            "name": "s1",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 209
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 210,
            "end": 218
          },
          "optional": false,
          "computed": false,
          "start": 207,
          "end": 218
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 207,
        "end": 220
      },
      "directive": null,
      "start": 207,
      "end": 221
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 332,
                  "end": 334
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 329,
                "end": 334
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 328,
            "end": 335
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "strArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 338,
            "end": 346
          },
          "definite": false,
          "start": 328,
          "end": 346
        }
      ],
      "declare": false,
      "start": 322,
      "end": 347
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
            "name": "s2",
            "optional": false,
            "typeAnnotation": null,
            "start": 348,
            "end": 350
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 351,
            "end": 355
          },
          "optional": false,
          "computed": false,
          "start": 348,
          "end": 355
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 356,
            "end": 365
          }
        ],
        "optional": false,
        "start": 348,
        "end": 366
      },
      "directive": null,
      "start": 348,
      "end": 367
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              null,
              null,
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 502,
                  "end": 504
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 499,
                "end": 504
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 494,
            "end": 505
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "strArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 508,
            "end": 516
          },
          "definite": false,
          "start": 494,
          "end": 516
        }
      ],
      "declare": false,
      "start": 488,
      "end": 517
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
            "name": "s3",
            "optional": false,
            "typeAnnotation": null,
            "start": 518,
            "end": 520
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 521,
            "end": 525
          },
          "optional": false,
          "computed": false,
          "start": 518,
          "end": 525
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 526,
            "end": 535
          }
        ],
        "optional": false,
        "start": 518,
        "end": 536
      },
      "directive": null,
      "start": 518,
      "end": 537
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "strMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 673,
                            "end": 679
                          },
                          "start": 671,
                          "end": 679
                        },
                        "start": 670,
                        "end": 679
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 682,
                        "end": 688
                      },
                      "start": 680,
                      "end": 688
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 669,
                    "end": 688
                  }
                ],
                "start": 667,
                "end": 690
              },
              "start": 665,
              "end": 690
            },
            "start": 659,
            "end": 690
          },
          "init": null,
          "definite": false,
          "start": 659,
          "end": 690
        }
      ],
      "declare": true,
      "start": 645,
      "end": 691
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 701,
                  "end": 703
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 701,
                  "end": 703
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 701,
                "end": 703
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 699,
            "end": 705
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "strMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 708,
            "end": 714
          },
          "definite": false,
          "start": 699,
          "end": 714
        }
      ],
      "declare": false,
      "start": 693,
      "end": 715
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
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 716,
            "end": 718
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 719,
            "end": 727
          },
          "optional": false,
          "computed": false,
          "start": 716,
          "end": 727
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 716,
        "end": 729
      },
      "directive": null,
      "start": 716,
      "end": 730
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 782,
                  "end": 784
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 779,
                "end": 784
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 777,
            "end": 786
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "strMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 789,
            "end": 795
          },
          "definite": false,
          "start": 777,
          "end": 795
        }
      ],
      "declare": false,
      "start": 771,
      "end": 796
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 797,
              "end": 799
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 800,
              "end": 801
            },
            "optional": false,
            "computed": false,
            "start": 797,
            "end": 801
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 802,
            "end": 810
          },
          "optional": false,
          "computed": false,
          "start": 797,
          "end": 810
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 797,
        "end": 812
      },
      "directive": null,
      "start": 797,
      "end": 813
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "numMapPoint",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
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
                          "start": 907,
                          "end": 908
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 910,
                            "end": 916
                          },
                          "start": 908,
                          "end": 916
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 907,
                        "end": 917
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 918,
                          "end": 919
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 921,
                            "end": 927
                          },
                          "start": 919,
                          "end": 927
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 918,
                        "end": 927
                      }
                    ],
                    "start": 905,
                    "end": 928
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 937,
                                "end": 943
                              },
                              "start": 935,
                              "end": 943
                            },
                            "start": 934,
                            "end": 943
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 946,
                            "end": 952
                          },
                          "start": 944,
                          "end": 952
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 933,
                        "end": 952
                      }
                    ],
                    "start": 931,
                    "end": 954
                  }
                ],
                "start": 905,
                "end": 954
              },
              "start": 903,
              "end": 954
            },
            "start": 892,
            "end": 954
          },
          "init": null,
          "definite": false,
          "start": 892,
          "end": 954
        }
      ],
      "declare": true,
      "start": 878,
      "end": 955
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 970,
                      "end": 971
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 970,
                      "end": 971
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 970,
                    "end": 971
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
                      "start": 973,
                      "end": 974
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 973,
                      "end": 974
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 973,
                    "end": 974
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 976,
                      "end": 977
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 976,
                      "end": 977
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 976,
                    "end": 977
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 968,
                "end": 979
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "numMapPoint",
                "optional": false,
                "typeAnnotation": null,
                "start": 982,
                "end": 993
              },
              "definite": false,
              "start": 968,
              "end": 993
            }
          ],
          "declare": false,
          "start": 962,
          "end": 994
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 999,
                "end": 1000
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1001,
                "end": 1008
              },
              "optional": false,
              "computed": false,
              "start": 999,
              "end": 1008
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 999,
            "end": 1010
          },
          "directive": null,
          "start": 999,
          "end": 1011
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
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1029,
                "end": 1030
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1031,
                "end": 1038
              },
              "optional": false,
              "computed": false,
              "start": 1029,
              "end": 1038
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1029,
            "end": 1040
          },
          "directive": null,
          "start": 1029,
          "end": 1041
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
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 1059,
                "end": 1060
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1061,
                "end": 1068
              },
              "optional": false,
              "computed": false,
              "start": 1059,
              "end": 1068
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1059,
            "end": 1070
          },
          "directive": null,
          "start": 1059,
          "end": 1071
        }
      ],
      "start": 956,
      "end": 1089
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 1105,
                      "end": 1106
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1105,
                      "end": 1106
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1105,
                    "end": 1106
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1111,
                      "end": 1112
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 1108,
                    "end": 1112
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1103,
                "end": 1114
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "numMapPoint",
                "optional": false,
                "typeAnnotation": null,
                "start": 1117,
                "end": 1128
              },
              "definite": false,
              "start": 1103,
              "end": 1128
            }
          ],
          "declare": false,
          "start": 1097,
          "end": 1129
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1134,
                "end": 1135
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1136,
                "end": 1143
              },
              "optional": false,
              "computed": false,
              "start": 1134,
              "end": 1143
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1134,
            "end": 1145
          },
          "directive": null,
          "start": 1134,
          "end": 1146
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1164,
                  "end": 1165
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1166,
                  "end": 1167
                },
                "optional": false,
                "computed": false,
                "start": 1164,
                "end": 1167
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1168,
                "end": 1175
              },
              "optional": false,
              "computed": false,
              "start": 1164,
              "end": 1175
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1164,
            "end": 1177
          },
          "directive": null,
          "start": 1164,
          "end": 1178
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1196,
                  "end": 1197
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1198,
                  "end": 1199
                },
                "optional": false,
                "computed": false,
                "start": 1196,
                "end": 1199
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1200,
                "end": 1207
              },
              "optional": false,
              "computed": false,
              "start": 1196,
              "end": 1207
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1196,
            "end": 1209
          },
          "directive": null,
          "start": 1196,
          "end": 1210
        }
      ],
      "start": 1091,
      "end": 1228
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 1244,
                      "end": 1245
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1244,
                      "end": 1245
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1244,
                    "end": 1245
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1250,
                      "end": 1251
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 1247,
                    "end": 1251
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1242,
                "end": 1253
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "numMapPoint",
                "optional": false,
                "typeAnnotation": null,
                "start": 1256,
                "end": 1267
              },
              "definite": false,
              "start": 1242,
              "end": 1267
            }
          ],
          "declare": false,
          "start": 1236,
          "end": 1268
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1273,
                "end": 1274
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1280,
                "end": 1287
              },
              "optional": false,
              "computed": false,
              "start": 1273,
              "end": 1287
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1273,
            "end": 1289
          },
          "directive": null,
          "start": 1273,
          "end": 1290
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1309,
                  "end": 1310
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1316,
                  "end": 1317
                },
                "optional": false,
                "computed": false,
                "start": 1309,
                "end": 1317
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1318,
                "end": 1325
              },
              "optional": false,
              "computed": false,
              "start": 1309,
              "end": 1325
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1309,
            "end": 1327
          },
          "directive": null,
          "start": 1309,
          "end": 1328
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1347,
                  "end": 1348
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1354,
                  "end": 1355
                },
                "optional": false,
                "computed": false,
                "start": 1347,
                "end": 1355
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1356,
                "end": 1363
              },
              "optional": false,
              "computed": false,
              "start": 1347,
              "end": 1363
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1347,
            "end": 1365
          },
          "directive": null,
          "start": 1347,
          "end": 1366
        }
      ],
      "start": 1230,
      "end": 1384
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
            "name": "target_string",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1414,
                "end": 1420
              },
              "start": 1412,
              "end": 1420
            },
            "start": 1399,
            "end": 1420
          },
          "init": null,
          "definite": false,
          "start": 1399,
          "end": 1420
        }
      ],
      "declare": true,
      "start": 1387,
      "end": 1421
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
            "name": "target_string_undef",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1455,
                    "end": 1461
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1464,
                    "end": 1473
                  }
                ],
                "start": 1455,
                "end": 1473
              },
              "start": 1453,
              "end": 1473
            },
            "start": 1434,
            "end": 1473
          },
          "init": null,
          "definite": false,
          "start": 1434,
          "end": 1473
        }
      ],
      "declare": true,
      "start": 1422,
      "end": 1474
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
            "name": "target_string_arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 1506,
                  "end": 1512
                },
                "start": 1506,
                "end": 1514
              },
              "start": 1504,
              "end": 1514
            },
            "start": 1487,
            "end": 1514
          },
          "init": null,
          "definite": false,
          "start": 1487,
          "end": 1514
        }
      ],
      "declare": true,
      "start": 1475,
      "end": 1515
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "target_string",
              "optional": false,
              "typeAnnotation": null,
              "start": 1538,
              "end": 1551
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1537,
          "end": 1552
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "strArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1555,
          "end": 1563
        },
        "start": 1537,
        "end": 1563
      },
      "directive": null,
      "start": 1537,
      "end": 1564
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "target_string_undef",
              "optional": false,
              "typeAnnotation": null,
              "start": 1582,
              "end": 1601
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1581,
          "end": 1602
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "strArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1605,
          "end": 1613
        },
        "start": 1581,
        "end": 1613
      },
      "directive": null,
      "start": 1581,
      "end": 1614
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            null,
            null,
            null,
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "target_string_arr",
                "optional": false,
                "typeAnnotation": null,
                "start": 1637,
                "end": 1654
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 1634,
              "end": 1654
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1629,
          "end": 1655
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "strArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1658,
          "end": 1666
        },
        "start": 1629,
        "end": 1666
      },
      "directive": null,
      "start": 1629,
      "end": 1667
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "let",
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
                    "type": "TSNumberKeyword",
                    "start": 1695,
                    "end": 1701
                  },
                  "start": 1693,
                  "end": 1701
                },
                "start": 1692,
                "end": 1701
              },
              "init": null,
              "definite": false,
              "start": 1692,
              "end": 1701
            },
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
                    "type": "TSNumberKeyword",
                    "start": 1706,
                    "end": 1712
                  },
                  "start": 1704,
                  "end": 1712
                },
                "start": 1703,
                "end": 1712
              },
              "init": null,
              "definite": false,
              "start": 1703,
              "end": 1712
            },
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 1717,
                        "end": 1723
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 1726,
                        "end": 1735
                      }
                    ],
                    "start": 1717,
                    "end": 1735
                  },
                  "start": 1715,
                  "end": 1735
                },
                "start": 1714,
                "end": 1735
              },
              "init": null,
              "definite": false,
              "start": 1714,
              "end": 1735
            }
          ],
          "declare": false,
          "start": 1688,
          "end": 1736
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
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
                    "start": 1744,
                    "end": 1745
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1744,
                    "end": 1745
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1744,
                  "end": 1745
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
                    "start": 1747,
                    "end": 1748
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1747,
                    "end": 1748
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1747,
                  "end": 1748
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1750,
                    "end": 1751
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1750,
                    "end": 1751
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1750,
                  "end": 1751
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1742,
              "end": 1753
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "numMapPoint",
              "optional": false,
              "typeAnnotation": null,
              "start": 1756,
              "end": 1767
            },
            "start": 1742,
            "end": 1767
          },
          "directive": null,
          "start": 1741,
          "end": 1769
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
                "name": "q",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1795,
                    "end": 1801
                  },
                  "start": 1793,
                  "end": 1801
                },
                "start": 1792,
                "end": 1801
              },
              "init": null,
              "definite": false,
              "start": 1792,
              "end": 1801
            }
          ],
          "declare": false,
          "start": 1788,
          "end": 1802
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "q",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1810,
                    "end": 1811
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "q",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1810,
                    "end": 1811
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1810,
                  "end": 1811
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1808,
              "end": 1813
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "numMapPoint",
              "optional": false,
              "typeAnnotation": null,
              "start": 1816,
              "end": 1827
            },
            "start": 1808,
            "end": 1827
          },
          "directive": null,
          "start": 1807,
          "end": 1829
        }
      ],
      "start": 1682,
      "end": 1847
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1847
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
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "strArray",
    "start": 14,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 34,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 42,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "strStrTuple",
    "start": 48,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 62,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 70,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 184,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 191,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "strArray",
    "start": 197,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 207,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 210,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 322,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 329,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 332,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "strArray",
    "start": 338,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 348,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 351,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 356,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 488,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 499,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 502,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "strArray",
    "start": 508,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 518,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 521,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 526,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 645,
    "end": 652
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 653,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 659,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 673,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 682,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "const",
    "start": 693,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 701,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 708,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 716,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 719,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 729,
    "end": 730
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 771,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 779,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 782,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 789,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 797,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 802,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 878,
    "end": 885
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 886,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "numMapPoint",
    "start": 892,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 910,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 918,
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
    "value": "number",
    "start": 921,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 937,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 943,
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
    "value": "number",
    "start": 946,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 956,
    "end": 957
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 962,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 980,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "numMapPoint",
    "start": 982,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 1001,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 1031,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 1061,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1097,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1108,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "numMapPoint",
    "start": 1117,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 1136,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 1168,
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
    "value": ")",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 1200,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1208,
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
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1236,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1247,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "numMapPoint",
    "start": 1256,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 1280,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 1318,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 1356,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1387,
    "end": 1394
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1395,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "target_string",
    "start": 1399,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1414,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1422,
    "end": 1429
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1430,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "target_string_undef",
    "start": 1434,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1455,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1464,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1475,
    "end": 1482
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1483,
    "end": 1486
  },
  {
    "type": "Identifier",
    "value": "target_string_arr",
    "start": 1487,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1506,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "target_string",
    "start": 1538,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "strArray",
    "start": 1555,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "target_string_undef",
    "start": 1582,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Identifier",
    "value": "strArray",
    "start": 1605,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1634,
    "end": 1637
  },
  {
    "type": "Identifier",
    "value": "target_string_arr",
    "start": 1637,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Identifier",
    "value": "strArray",
    "start": 1658,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1688,
    "end": 1691
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1695,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1706,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1717,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1726,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Identifier",
    "value": "numMapPoint",
    "start": 1756,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1788,
    "end": 1791
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1795,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "numMapPoint",
    "start": 1816,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1846,
    "end": 1847
  }
]
```
