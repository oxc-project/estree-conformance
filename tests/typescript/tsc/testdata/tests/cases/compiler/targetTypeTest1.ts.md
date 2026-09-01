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
        "name": "Point",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 19
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
              "start": 28,
              "end": 39
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
                      "start": 43,
                      "end": 49
                    },
                    "start": 41,
                    "end": 49
                  },
                  "start": 40,
                  "end": 49
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
                      "start": 54,
                      "end": 60
                    },
                    "start": 52,
                    "end": 60
                  },
                  "start": 51,
                  "end": 60
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 39,
              "end": 62
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 28,
            "end": 62
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
              "start": 76,
              "end": 77
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 79,
                "end": 85
              },
              "start": 77,
              "end": 85
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
            "start": 69,
            "end": 86
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
              "start": 100,
              "end": 101
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 103,
                "end": 109
              },
              "start": 101,
              "end": 109
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
            "start": 93,
            "end": 110
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
              "start": 124,
              "end": 127
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
                      "start": 132,
                      "end": 138
                    },
                    "start": 130,
                    "end": 138
                  },
                  "start": 128,
                  "end": 138
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
                      "start": 144,
                      "end": 150
                    },
                    "start": 142,
                    "end": 150
                  },
                  "start": 140,
                  "end": 150
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
                    "start": 153,
                    "end": 158
                  },
                  "typeArguments": null,
                  "start": 153,
                  "end": 158
                },
                "start": 151,
                "end": 158
              },
              "body": null,
              "expression": false,
              "start": 127,
              "end": 159
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 117,
            "end": 159
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
              "start": 173,
              "end": 179
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
                  "start": 181,
                  "end": 186
                },
                "typeArguments": null,
                "start": 181,
                "end": 186
              },
              "start": 179,
              "end": 186
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
            "start": 166,
            "end": 187
          }
        ],
        "start": 20,
        "end": 190
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 190
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null,
        "start": 355,
        "end": 360
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
          "typeAnnotation": null,
          "start": 361,
          "end": 362
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 364,
          "end": 365
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
                  "start": 373,
                  "end": 377
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 378,
                  "end": 379
                },
                "optional": false,
                "computed": false,
                "start": 373,
                "end": 379
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 382,
                "end": 383
              },
              "start": 373,
              "end": 383
            },
            "directive": null,
            "start": 373,
            "end": 384
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 389,
                  "end": 393
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 394,
                  "end": 395
                },
                "optional": false,
                "computed": false,
                "start": 389,
                "end": 395
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 398,
                "end": 399
              },
              "start": 389,
              "end": 399
            },
            "directive": null,
            "start": 389,
            "end": 400
          }
        ],
        "start": 367,
        "end": 402
      },
      "expression": false,
      "start": 346,
      "end": 402
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EF1",
        "optional": false,
        "typeAnnotation": null,
        "start": 421,
        "end": 424
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
              "start": 427,
              "end": 433
            },
            "start": 426,
            "end": 433
          },
          "start": 425,
          "end": 433
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
              "start": 437,
              "end": 443
            },
            "start": 436,
            "end": 443
          },
          "start": 435,
          "end": 443
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 445,
          "end": 451
        },
        "start": 444,
        "end": 451
      },
      "body": null,
      "expression": false,
      "start": 404,
      "end": 452
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EF1",
        "optional": false,
        "typeAnnotation": null,
        "start": 463,
        "end": 466
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
          "start": 467,
          "end": 468
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 469,
          "end": 470
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
                "start": 481,
                "end": 482
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 483,
                "end": 484
              },
              "start": 481,
              "end": 484
            },
            "start": 474,
            "end": 485
          }
        ],
        "start": 472,
        "end": 487
      },
      "expression": false,
      "start": 454,
      "end": 487
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
            "typeAnnotation": null,
            "start": 493,
            "end": 494
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "EF1",
              "optional": false,
              "typeAnnotation": null,
              "start": 497,
              "end": 500
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 501,
                "end": 502
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 503,
                "end": 504
              }
            ],
            "optional": false,
            "start": 497,
            "end": 505
          },
          "definite": false,
          "start": 493,
          "end": 505
        }
      ],
      "declare": false,
      "start": 489,
      "end": 506
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
            "start": 547,
            "end": 552
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "origin",
            "optional": false,
            "typeAnnotation": null,
            "start": 553,
            "end": 559
          },
          "optional": false,
          "computed": false,
          "start": 547,
          "end": 559
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Point",
            "optional": false,
            "typeAnnotation": null,
            "start": 566,
            "end": 571
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 572,
              "end": 573
            },
            {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 575,
              "end": 576
            }
          ],
          "start": 562,
          "end": 577
        },
        "start": 547,
        "end": 577
      },
      "directive": null,
      "start": 547,
      "end": 578
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
              "start": 735,
              "end": 740
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 741,
              "end": 750
            },
            "optional": false,
            "computed": false,
            "start": 735,
            "end": 750
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null,
            "start": 751,
            "end": 754
          },
          "optional": false,
          "computed": false,
          "start": 735,
          "end": 754
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
              "start": 766,
              "end": 768
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "dy",
              "optional": false,
              "typeAnnotation": null,
              "start": 770,
              "end": 772
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
                    "start": 791,
                    "end": 796
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 797,
                          "end": 801
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 802,
                          "end": 803
                        },
                        "optional": false,
                        "computed": false,
                        "start": 797,
                        "end": 803
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dx",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 806,
                        "end": 808
                      },
                      "start": 797,
                      "end": 808
                    },
                    {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 810,
                          "end": 814
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 815,
                          "end": 816
                        },
                        "optional": false,
                        "computed": false,
                        "start": 810,
                        "end": 816
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dy",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 819,
                        "end": 821
                      },
                      "start": 810,
                      "end": 821
                    }
                  ],
                  "start": 787,
                  "end": 822
                },
                "start": 780,
                "end": 823
              }
            ],
            "start": 774,
            "end": 825
          },
          "expression": false,
          "start": 757,
          "end": 825
        },
        "start": 735,
        "end": 825
      },
      "directive": null,
      "start": 735,
      "end": 826
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 836,
                "end": 842
              },
              "start": 834,
              "end": 842
            },
            "start": 832,
            "end": 842
          },
          "init": {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 845,
            "end": 846
          },
          "definite": false,
          "start": 832,
          "end": 846
        }
      ],
      "declare": false,
      "start": 828,
      "end": 847
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
            "start": 1039,
            "end": 1044
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 1045,
            "end": 1054
          },
          "optional": false,
          "computed": false,
          "start": 1039,
          "end": 1054
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
                "start": 1063,
                "end": 1064
              },
              "value": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1066,
                "end": 1067
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1063,
              "end": 1067
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
                "start": 1073,
                "end": 1074
              },
              "value": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1076,
                "end": 1077
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1073,
              "end": 1077
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
                "start": 1083,
                "end": 1086
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
                    "start": 1097,
                    "end": 1099
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1101,
                    "end": 1103
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
                          "start": 1126,
                          "end": 1131
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1132,
                                "end": 1136
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1137,
                                "end": 1138
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1132,
                              "end": 1138
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dx",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1141,
                              "end": 1143
                            },
                            "start": 1132,
                            "end": 1143
                          },
                          {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1145,
                                "end": 1149
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1150,
                                "end": 1151
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1145,
                              "end": 1151
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dy",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1154,
                              "end": 1156
                            },
                            "start": 1145,
                            "end": 1156
                          }
                        ],
                        "start": 1122,
                        "end": 1157
                      },
                      "start": 1115,
                      "end": 1158
                    }
                  ],
                  "start": 1105,
                  "end": 1164
                },
                "expression": false,
                "start": 1088,
                "end": 1164
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1083,
              "end": 1164
            }
          ],
          "start": 1057,
          "end": 1166
        },
        "start": 1039,
        "end": 1166
      },
      "directive": null,
      "start": 1039,
      "end": 1167
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 1181,
            "end": 1182
          },
          "init": null,
          "definite": false,
          "start": 1181,
          "end": 1182
        }
      ],
      "declare": true,
      "start": 1169,
      "end": 1183
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 1184,
          "end": 1185
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
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1200,
                  "end": 1206
                },
                "start": 1198,
                "end": 1206
              },
              "start": 1197,
              "end": 1206
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1214,
                  "end": 1215
                },
                "directive": null,
                "start": 1214,
                "end": 1215
              }
            ],
            "start": 1208,
            "end": 1217
          },
          "expression": false,
          "start": 1188,
          "end": 1217
        },
        "start": 1184,
        "end": 1217
      },
      "directive": null,
      "start": 1184,
      "end": 1217
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
        "start": 1233,
        "end": 1234
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
              "start": 1241,
              "end": 1252
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1255,
                      "end": 1261
                    },
                    "start": 1254,
                    "end": 1261
                  },
                  "start": 1253,
                  "end": 1261
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
                      "start": 1265,
                      "end": 1271
                    },
                    "start": 1264,
                    "end": 1271
                  },
                  "start": 1263,
                  "end": 1271
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1252,
              "end": 1273
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1241,
            "end": 1273
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1282,
              "end": 1283
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1286,
                "end": 1292
              },
              "start": 1284,
              "end": 1292
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
            "start": 1275,
            "end": 1293
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1302,
              "end": 1303
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1305,
                "end": 1311
              },
              "start": 1303,
              "end": 1311
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
            "start": 1295,
            "end": 1312
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1M1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1318,
              "end": 1322
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1325,
                      "end": 1331
                    },
                    "start": 1324,
                    "end": 1331
                  },
                  "start": 1323,
                  "end": 1331
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1334,
                      "end": 1340
                    },
                    "start": 1333,
                    "end": 1340
                  },
                  "start": 1332,
                  "end": 1340
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1342,
                  "end": 1348
                },
                "start": 1341,
                "end": 1348
              },
              "body": null,
              "expression": false,
              "start": 1322,
              "end": 1349
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1318,
            "end": 1349
          }
        ],
        "start": 1235,
        "end": 1351
      },
      "abstract": false,
      "declare": true,
      "start": 1219,
      "end": 1351
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 1363,
        "end": 1364
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
          "start": 1365,
          "end": 1366
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1367,
          "end": 1368
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
                  "start": 1373,
                  "end": 1377
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1378,
                  "end": 1379
                },
                "optional": false,
                "computed": false,
                "start": 1373,
                "end": 1379
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1380,
                "end": 1381
              },
              "start": 1373,
              "end": 1381
            },
            "directive": null,
            "start": 1373,
            "end": 1382
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 1384,
                  "end": 1388
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1389,
                  "end": 1390
                },
                "optional": false,
                "computed": false,
                "start": 1384,
                "end": 1390
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1391,
                "end": 1392
              },
              "start": 1384,
              "end": 1392
            },
            "directive": null,
            "start": 1384,
            "end": 1393
          }
        ],
        "start": 1370,
        "end": 1395
      },
      "expression": false,
      "start": 1354,
      "end": 1395
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
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 1397,
            "end": 1398
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 1399,
            "end": 1408
          },
          "optional": false,
          "computed": false,
          "start": 1397,
          "end": 1408
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1415,
                "end": 1416
              },
              "value": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1417,
                "end": 1418
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1415,
              "end": 1418
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1422,
                "end": 1423
              },
              "value": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1424,
                "end": 1425
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1422,
              "end": 1425
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1M1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1430,
                "end": 1434
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1445,
                    "end": 1446
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1447,
                    "end": 1448
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
                          "type": "BinaryExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1469,
                              "end": 1473
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1474,
                              "end": 1475
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1469,
                            "end": 1475
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1478,
                            "end": 1479
                          },
                          "start": 1469,
                          "end": 1479
                        },
                        "operator": "+",
                        "right": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1484,
                              "end": 1488
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1489,
                              "end": 1490
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1484,
                            "end": 1490
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "d",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1493,
                            "end": 1494
                          },
                          "start": 1484,
                          "end": 1494
                        },
                        "start": 1468,
                        "end": 1495
                      },
                      "start": 1461,
                      "end": 1496
                    }
                  ],
                  "start": 1450,
                  "end": 1501
                },
                "expression": false,
                "start": 1436,
                "end": 1501
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1430,
              "end": 1501
            }
          ],
          "start": 1413,
          "end": 1504
        },
        "start": 1397,
        "end": 1504
      },
      "directive": null,
      "start": 1397,
      "end": 1505
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1505
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
    "value": "class",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 14,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 28,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 43,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 69,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 93,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Identifier",
    "value": "number",
    "start": 103,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 117,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 124,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "dx",
    "start": 128,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 132,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "dy",
    "start": 140,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 144,
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
    "value": ":",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 153,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 166,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "origin",
    "start": 173,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 181,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 346,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 355,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 364,
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
    "value": "{",
    "start": 367,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 373,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 389,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 404,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 412,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "EF1",
    "start": 421,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 425,
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
    "start": 427,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 437,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 445,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 451,
    "end": 452
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 454,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "EF1",
    "start": 463,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 472,
    "end": 473
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 474,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "Punctuator",
    "value": "}",
    "start": 486,
    "end": 487
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 489,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "EF1",
    "start": 497,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 500,
    "end": 501
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 502,
    "end": 503
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 547,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "origin",
    "start": 553,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 560,
    "end": 561
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 562,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 566,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 571,
    "end": 572
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 573,
    "end": 574
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "Point",
    "start": 735,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 741,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 751,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 755,
    "end": 756
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 757,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "dx",
    "start": 766,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "dy",
    "start": 770,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 774,
    "end": 775
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 780,
    "end": 786
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 787,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 791,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 796,
    "end": 797
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 797,
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
    "value": "x",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "dx",
    "start": 806,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 808,
    "end": 809
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 810,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "dy",
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
    "value": ";",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 825,
    "end": 826
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 828,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 836,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 843,
    "end": 844
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 1039,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 1045,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 1083,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1088,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "dx",
    "start": 1097,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "dy",
    "start": 1101,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1115,
    "end": 1121
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1122,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 1126,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1132,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "dx",
    "start": 1141,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1145,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "dy",
    "start": 1154,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1169,
    "end": 1176
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1177,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "z",
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
    "type": "Identifier",
    "value": "z",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1188,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1200,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1219,
    "end": 1226
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1227,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1241,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1255,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1265,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1275,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1286,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1295,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1305,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "C1M1",
    "start": 1318,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1325,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1334,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1342,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1354,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1373,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1384,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 1399,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "C1M1",
    "start": 1430,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1436,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1461,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1469,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1484,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1504,
    "end": 1505
  }
]
```
