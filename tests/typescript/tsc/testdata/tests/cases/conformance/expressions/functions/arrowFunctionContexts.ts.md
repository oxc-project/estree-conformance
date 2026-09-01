__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "WithStatement",
      "object": {
        "type": "Identifier",
        "decorators": [],
        "name": "window",
        "optional": false,
        "typeAnnotation": null,
        "start": 47,
        "end": 53
      },
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 65,
                  "end": 66
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "ThisExpression",
                    "start": 75,
                    "end": 79
                  },
                  "id": null,
                  "generator": false,
                  "start": 69,
                  "end": 79
                },
                "definite": false,
                "start": 65,
                "end": 79
              }
            ],
            "declare": false,
            "start": 61,
            "end": 80
          }
        ],
        "start": 55,
        "end": 82
      },
      "start": 41,
      "end": 82
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 138
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
              "start": 145,
              "end": 156
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 160,
                      "end": 163
                    },
                    "start": 158,
                    "end": 163
                  },
                  "start": 157,
                  "end": 163
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 165,
                "end": 168
              },
              "expression": false,
              "start": 156,
              "end": 168
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 145,
            "end": 168
          }
        ],
        "start": 139,
        "end": 170
      },
      "abstract": false,
      "declare": false,
      "start": 128,
      "end": 170
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 185
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 194,
        "end": 198
      },
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
              "start": 205,
              "end": 216
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 229,
                        "end": 234
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "ThisExpression",
                            "start": 241,
                            "end": 245
                          },
                          "id": null,
                          "generator": false,
                          "start": 235,
                          "end": 245
                        }
                      ],
                      "optional": false,
                      "start": 229,
                      "end": 246
                    },
                    "directive": null,
                    "start": 229,
                    "end": 247
                  }
                ],
                "start": 219,
                "end": 253
              },
              "expression": false,
              "start": 216,
              "end": 253
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 205,
            "end": 253
          }
        ],
        "start": 199,
        "end": 255
      },
      "abstract": false,
      "declare": false,
      "start": 172,
      "end": 255
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
            "name": "window",
            "optional": false,
            "typeAnnotation": null,
            "start": 296,
            "end": 302
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setTimeout",
            "optional": false,
            "typeAnnotation": null,
            "start": 303,
            "end": 313
          },
          "optional": false,
          "computed": false,
          "start": 296,
          "end": 313
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 320,
              "end": 324
            },
            "id": null,
            "generator": false,
            "start": 314,
            "end": 324
          },
          {
            "type": "Literal",
            "value": 100,
            "raw": "100",
            "start": 326,
            "end": 329
          }
        ],
        "optional": false,
        "start": 296,
        "end": 330
      },
      "directive": null,
      "start": 296,
      "end": 331
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 382,
            "end": 385
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 392,
                    "end": 398
                  },
                  "start": 390,
                  "end": 398
                },
                "start": 389,
                "end": 398
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 403,
              "end": 405
            },
            "id": null,
            "generator": false,
            "start": 388,
            "end": 405
          },
          "definite": false,
          "start": 382,
          "end": 405
        }
      ],
      "declare": false,
      "start": 378,
      "end": 406
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
            "name": "obj",
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
                            "start": 422,
                            "end": 428
                          },
                          "start": 420,
                          "end": 428
                        },
                        "start": 419,
                        "end": 428
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 431,
                        "end": 437
                      },
                      "start": 429,
                      "end": 437
                    },
                    "start": 418,
                    "end": 438
                  }
                ],
                "start": 416,
                "end": 440
              },
              "start": 414,
              "end": 440
            },
            "start": 411,
            "end": 440
          },
          "init": null,
          "definite": false,
          "start": 411,
          "end": 440
        }
      ],
      "declare": false,
      "start": 407,
      "end": 441
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 453,
            "end": 456
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
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
                        "start": 464,
                        "end": 470
                      },
                      "start": 462,
                      "end": 470
                    },
                    "start": 461,
                    "end": 470
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 475,
                  "end": 477
                },
                "id": null,
                "generator": false,
                "start": 460,
                "end": 477
              }
            ],
            "start": 459,
            "end": 478
          },
          "definite": false,
          "start": 453,
          "end": 478
        }
      ],
      "declare": false,
      "start": 449,
      "end": 479
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
            "name": "arr",
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
                              "start": 495,
                              "end": 501
                            },
                            "start": 493,
                            "end": 501
                          },
                          "start": 492,
                          "end": 501
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 504,
                          "end": 510
                        },
                        "start": 502,
                        "end": 510
                      },
                      "start": 491,
                      "end": 511
                    }
                  ],
                  "start": 489,
                  "end": 513
                },
                "start": 489,
                "end": 515
              },
              "start": 487,
              "end": 515
            },
            "start": 484,
            "end": 515
          },
          "init": null,
          "definite": false,
          "start": 484,
          "end": 515
        }
      ],
      "declare": false,
      "start": 480,
      "end": 516
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 592,
        "end": 593
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 600,
              "end": 601
            },
            "initializer": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 610,
                "end": 611
              },
              "id": null,
              "generator": false,
              "start": 604,
              "end": 611
            },
            "computed": false,
            "start": 600,
            "end": 611
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 635,
              "end": 636
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "ThisExpression",
                  "start": 646,
                  "end": 650
                },
                "id": null,
                "generator": false,
                "start": 640,
                "end": 650
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 652,
                "end": 658
              },
              "optional": false,
              "computed": false,
              "start": 639,
              "end": 658
            },
            "computed": false,
            "start": 635,
            "end": 658
          }
        ],
        "start": 594,
        "end": 693
      },
      "const": false,
      "declare": false,
      "start": 587,
      "end": 693
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 754,
        "end": 755
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 773,
                    "end": 774
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 778,
                        "end": 779
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 784,
                      "end": 786
                    },
                    "id": null,
                    "generator": false,
                    "start": 777,
                    "end": 786
                  },
                  "definite": false,
                  "start": 773,
                  "end": 786
                }
              ],
              "declare": false,
              "start": 769,
              "end": 787
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 762,
            "end": 787
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
                  "typeAnnotation": null,
                  "start": 796,
                  "end": 797
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 801,
                      "end": 802
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 807,
                    "end": 808
                  },
                  "id": null,
                  "generator": false,
                  "start": 800,
                  "end": 808
                },
                "definite": false,
                "start": 796,
                "end": 808
              }
            ],
            "declare": false,
            "start": 792,
            "end": 809
          }
        ],
        "start": 756,
        "end": 811
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 744,
      "end": 811
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 911,
        "end": 913
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "WithStatement",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "window",
              "optional": false,
              "typeAnnotation": null,
              "start": 971,
              "end": 977
            },
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
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 993,
                        "end": 994
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "ThisExpression",
                          "start": 1003,
                          "end": 1007
                        },
                        "id": null,
                        "generator": false,
                        "start": 997,
                        "end": 1007
                      },
                      "definite": false,
                      "start": 993,
                      "end": 1007
                    }
                  ],
                  "declare": false,
                  "start": 989,
                  "end": 1008
                }
              ],
              "start": 979,
              "end": 1014
            },
            "start": 965,
            "end": 1014
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 1074,
              "end": 1078
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
                    "start": 1089,
                    "end": 1100
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
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1104,
                            "end": 1107
                          },
                          "start": 1102,
                          "end": 1107
                        },
                        "start": 1101,
                        "end": 1107
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1109,
                      "end": 1112
                    },
                    "expression": false,
                    "start": 1100,
                    "end": 1112
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1089,
                  "end": 1112
                }
              ],
              "start": 1079,
              "end": 1118
            },
            "abstract": false,
            "declare": false,
            "start": 1068,
            "end": 1118
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 1130,
              "end": 1137
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 1146,
              "end": 1150
            },
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
                    "start": 1161,
                    "end": 1172
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
                            "type": "CallExpression",
                            "callee": {
                              "type": "Super",
                              "start": 1189,
                              "end": 1194
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "ThisExpression",
                                  "start": 1201,
                                  "end": 1205
                                },
                                "id": null,
                                "generator": false,
                                "start": 1195,
                                "end": 1205
                              }
                            ],
                            "optional": false,
                            "start": 1189,
                            "end": 1206
                          },
                          "directive": null,
                          "start": 1189,
                          "end": 1207
                        }
                      ],
                      "start": 1175,
                      "end": 1217
                    },
                    "expression": false,
                    "start": 1172,
                    "end": 1217
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1161,
                  "end": 1217
                }
              ],
              "start": 1151,
              "end": 1223
            },
            "abstract": false,
            "declare": false,
            "start": 1124,
            "end": 1223
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
                  "name": "window",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1272,
                  "end": 1278
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "setTimeout",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1279,
                  "end": 1289
                },
                "optional": false,
                "computed": false,
                "start": 1272,
                "end": 1289
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 1296,
                    "end": 1300
                  },
                  "id": null,
                  "generator": false,
                  "start": 1290,
                  "end": 1300
                },
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 1302,
                  "end": 1305
                }
              ],
              "optional": false,
              "start": 1272,
              "end": 1306
            },
            "directive": null,
            "start": 1272,
            "end": 1307
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
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1366,
                  "end": 1369
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                          "start": 1376,
                          "end": 1382
                        },
                        "start": 1374,
                        "end": 1382
                      },
                      "start": 1373,
                      "end": 1382
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 1387,
                    "end": 1389
                  },
                  "id": null,
                  "generator": false,
                  "start": 1372,
                  "end": 1389
                },
                "definite": false,
                "start": 1366,
                "end": 1389
              }
            ],
            "declare": false,
            "start": 1362,
            "end": 1390
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
                  "name": "obj",
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
                                  "start": 1410,
                                  "end": 1416
                                },
                                "start": 1408,
                                "end": 1416
                              },
                              "start": 1407,
                              "end": 1416
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1419,
                              "end": 1425
                            },
                            "start": 1417,
                            "end": 1425
                          },
                          "start": 1406,
                          "end": 1426
                        }
                      ],
                      "start": 1404,
                      "end": 1428
                    },
                    "start": 1402,
                    "end": 1428
                  },
                  "start": 1399,
                  "end": 1428
                },
                "init": null,
                "definite": false,
                "start": 1399,
                "end": 1428
              }
            ],
            "declare": false,
            "start": 1395,
            "end": 1429
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1445,
                  "end": 1448
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
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
                              "start": 1456,
                              "end": 1462
                            },
                            "start": 1454,
                            "end": 1462
                          },
                          "start": 1453,
                          "end": 1462
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 1467,
                        "end": 1469
                      },
                      "id": null,
                      "generator": false,
                      "start": 1452,
                      "end": 1469
                    }
                  ],
                  "start": 1451,
                  "end": 1470
                },
                "definite": false,
                "start": 1445,
                "end": 1470
              }
            ],
            "declare": false,
            "start": 1441,
            "end": 1471
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
                  "name": "arr",
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
                                    "start": 1491,
                                    "end": 1497
                                  },
                                  "start": 1489,
                                  "end": 1497
                                },
                                "start": 1488,
                                "end": 1497
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1500,
                                "end": 1506
                              },
                              "start": 1498,
                              "end": 1506
                            },
                            "start": 1487,
                            "end": 1507
                          }
                        ],
                        "start": 1485,
                        "end": 1509
                      },
                      "start": 1485,
                      "end": 1511
                    },
                    "start": 1483,
                    "end": 1511
                  },
                  "start": 1480,
                  "end": 1511
                },
                "init": null,
                "definite": false,
                "start": 1480,
                "end": 1511
              }
            ],
            "declare": false,
            "start": 1476,
            "end": 1512
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1596,
              "end": 1597
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1608,
                    "end": 1609
                  },
                  "initializer": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 1618,
                      "end": 1619
                    },
                    "id": null,
                    "generator": false,
                    "start": 1612,
                    "end": 1619
                  },
                  "computed": false,
                  "start": 1608,
                  "end": 1619
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1647,
                    "end": 1648
                  },
                  "initializer": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "ThisExpression",
                        "start": 1658,
                        "end": 1662
                      },
                      "id": null,
                      "generator": false,
                      "start": 1652,
                      "end": 1662
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1664,
                      "end": 1670
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1651,
                    "end": 1670
                  },
                  "computed": false,
                  "start": 1647,
                  "end": 1670
                }
              ],
              "start": 1598,
              "end": 1676
            },
            "const": false,
            "declare": false,
            "start": 1591,
            "end": 1676
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1745,
              "end": 1746
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1768,
                          "end": 1769
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1773,
                              "end": 1774
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "Literal",
                            "value": "",
                            "raw": "''",
                            "start": 1779,
                            "end": 1781
                          },
                          "id": null,
                          "generator": false,
                          "start": 1772,
                          "end": 1781
                        },
                        "definite": false,
                        "start": 1768,
                        "end": 1781
                      }
                    ],
                    "declare": false,
                    "start": 1764,
                    "end": 1782
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 1757,
                  "end": 1782
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
                        "typeAnnotation": null,
                        "start": 1795,
                        "end": 1796
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1800,
                            "end": 1801
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1806,
                          "end": 1807
                        },
                        "id": null,
                        "generator": false,
                        "start": 1799,
                        "end": 1807
                      },
                      "definite": false,
                      "start": 1795,
                      "end": 1807
                    }
                  ],
                  "declare": false,
                  "start": 1791,
                  "end": 1808
                }
              ],
              "start": 1747,
              "end": 1814
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 1735,
            "end": 1814
          }
        ],
        "start": 914,
        "end": 1817
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 901,
      "end": 1817
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
            "name": "generic1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1889,
            "end": 1897
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 1901,
                    "end": 1902
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1901,
                  "end": 1902
                }
              ],
              "start": 1900,
              "end": 1903
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
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
                      "start": 1907,
                      "end": 1908
                    },
                    "typeArguments": null,
                    "start": 1907,
                    "end": 1908
                  },
                  "start": 1905,
                  "end": 1908
                },
                "start": 1904,
                "end": 1908
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1914,
                  "end": 1915
                }
              ],
              "start": 1913,
              "end": 1916
            },
            "id": null,
            "generator": false,
            "start": 1900,
            "end": 1916
          },
          "definite": false,
          "start": 1889,
          "end": 1916
        }
      ],
      "declare": false,
      "start": 1885,
      "end": 1917
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
            "name": "generic1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 1935,
                            "end": 1936
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1935,
                          "end": 1936
                        }
                      ],
                      "start": 1934,
                      "end": 1937
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
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
                              "start": 1941,
                              "end": 1942
                            },
                            "typeArguments": null,
                            "start": 1941,
                            "end": 1942
                          },
                          "start": 1939,
                          "end": 1942
                        },
                        "start": 1938,
                        "end": 1942
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1945,
                            "end": 1946
                          },
                          "typeArguments": null,
                          "start": 1945,
                          "end": 1946
                        },
                        "start": 1945,
                        "end": 1948
                      },
                      "start": 1943,
                      "end": 1948
                    },
                    "start": 1934,
                    "end": 1948
                  }
                ],
                "start": 1932,
                "end": 1950
              },
              "start": 1930,
              "end": 1950
            },
            "start": 1922,
            "end": 1950
          },
          "init": null,
          "definite": false,
          "start": 1922,
          "end": 1950
        }
      ],
      "declare": false,
      "start": 1918,
      "end": 1951
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
            "name": "generic2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1987,
            "end": 1995
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1999,
                    "end": 2000
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1999,
                  "end": 2000
                }
              ],
              "start": 1998,
              "end": 2001
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
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
                      "start": 2005,
                      "end": 2006
                    },
                    "typeArguments": null,
                    "start": 2005,
                    "end": 2006
                  },
                  "start": 2003,
                  "end": 2006
                },
                "start": 2002,
                "end": 2006
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2021,
                        "end": 2022
                      }
                    ],
                    "start": 2020,
                    "end": 2023
                  },
                  "start": 2013,
                  "end": 2024
                }
              ],
              "start": 2011,
              "end": 2026
            },
            "id": null,
            "generator": false,
            "start": 1998,
            "end": 2026
          },
          "definite": false,
          "start": 1987,
          "end": 2026
        }
      ],
      "declare": false,
      "start": 1983,
      "end": 2027
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
            "name": "generic2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 2045,
                            "end": 2046
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 2045,
                          "end": 2046
                        }
                      ],
                      "start": 2044,
                      "end": 2047
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
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
                              "start": 2051,
                              "end": 2052
                            },
                            "typeArguments": null,
                            "start": 2051,
                            "end": 2052
                          },
                          "start": 2049,
                          "end": 2052
                        },
                        "start": 2048,
                        "end": 2052
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2055,
                            "end": 2056
                          },
                          "typeArguments": null,
                          "start": 2055,
                          "end": 2056
                        },
                        "start": 2055,
                        "end": 2058
                      },
                      "start": 2053,
                      "end": 2058
                    },
                    "start": 2044,
                    "end": 2058
                  }
                ],
                "start": 2042,
                "end": 2060
              },
              "start": 2040,
              "end": 2060
            },
            "start": 2032,
            "end": 2060
          },
          "init": null,
          "definite": false,
          "start": 2032,
          "end": 2060
        }
      ],
      "declare": false,
      "start": 2028,
      "end": 2061
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
            "name": "asserted1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2150,
            "end": 2159
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2163,
              "end": 2166
            },
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2169,
                  "end": 2170
                }
              ],
              "returnType": null,
              "body": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2176,
                    "end": 2177
                  }
                ],
                "start": 2175,
                "end": 2178
              },
              "id": null,
              "generator": false,
              "start": 2168,
              "end": 2178
            },
            "start": 2162,
            "end": 2179
          },
          "definite": false,
          "start": 2150,
          "end": 2179
        }
      ],
      "declare": false,
      "start": 2146,
      "end": 2180
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
            "name": "asserted1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2196,
                "end": 2199
              },
              "start": 2194,
              "end": 2199
            },
            "start": 2185,
            "end": 2199
          },
          "init": null,
          "definite": false,
          "start": 2185,
          "end": 2199
        }
      ],
      "declare": false,
      "start": 2181,
      "end": 2200
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
            "name": "asserted2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2205,
            "end": 2214
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2218,
              "end": 2221
            },
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2224,
                  "end": 2225
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
                      "start": 2239,
                      "end": 2240
                    },
                    "start": 2232,
                    "end": 2241
                  }
                ],
                "start": 2230,
                "end": 2243
              },
              "id": null,
              "generator": false,
              "start": 2223,
              "end": 2243
            },
            "start": 2217,
            "end": 2244
          },
          "definite": false,
          "start": 2205,
          "end": 2244
        }
      ],
      "declare": false,
      "start": 2201,
      "end": 2245
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
            "name": "asserted2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2261,
                "end": 2264
              },
              "start": 2259,
              "end": 2264
            },
            "start": 2250,
            "end": 2264
          },
          "init": null,
          "definite": false,
          "start": 2250,
          "end": 2264
        }
      ],
      "declare": false,
      "start": 2246,
      "end": 2265
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 41,
  "end": 2266
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "with",
    "start": 41,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 47,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 61,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 72,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 75,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 128,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 134,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 145,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "value": "any",
    "start": 160,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 172,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 178,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 186,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 194,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 205,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 229,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 235,
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
    "value": "=>",
    "start": 238,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 241,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 245,
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
    "type": "Identifier",
    "value": "window",
    "start": 296,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "setTimeout",
    "start": 303,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 317,
    "end": 319
  },
  {
    "type": "Null",
    "value": "null",
    "start": 320,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 324,
    "end": 325
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 326,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 378,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 382,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 392,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 400,
    "end": 402
  },
  {
    "type": "String",
    "value": "''",
    "start": 403,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 407,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 411,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 422,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 431,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 449,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 453,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 464,
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
    "value": "=>",
    "start": 472,
    "end": 474
  },
  {
    "type": "String",
    "value": "''",
    "start": 475,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 478,
    "end": 479
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 480,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 484,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 495,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 504,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 587,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 607,
    "end": 609
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 643,
    "end": 645
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 646,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 652,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 744,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 756,
    "end": 757
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 762,
    "end": 768
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
    "value": "=",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 781,
    "end": 783
  },
  {
    "type": "String",
    "value": "''",
    "start": 784,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 786,
    "end": 787
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 792,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 804,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 901,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 911,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 914,
    "end": 915
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 965,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 971,
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
    "value": "{",
    "start": 979,
    "end": 980
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 989,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1000,
    "end": 1002
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1003,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1068,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1074,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1089,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1104,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1124,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1130,
    "end": 1137
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1138,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1146,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1161,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1189,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1198,
    "end": 1200
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1201,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 1272,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "setTimeout",
    "start": 1279,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1293,
    "end": 1295
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1296,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 1302,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1362,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1366,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1376,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1384,
    "end": 1386
  },
  {
    "type": "String",
    "value": "''",
    "start": 1387,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1395,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1399,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1410,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1419,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1441,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1445,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1456,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1464,
    "end": 1466
  },
  {
    "type": "String",
    "value": "''",
    "start": 1467,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1476,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1480,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1491,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1500,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1591,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1615,
    "end": 1617
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1655,
    "end": 1657
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1658,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1664,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1735,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1757,
    "end": 1763
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1764,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1776,
    "end": 1778
  },
  {
    "type": "String",
    "value": "''",
    "start": 1779,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1791,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1803,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1885,
    "end": 1888
  },
  {
    "type": "Identifier",
    "value": "generic1",
    "start": 1889,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1910,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1918,
    "end": 1921
  },
  {
    "type": "Identifier",
    "value": "generic1",
    "start": 1922,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1983,
    "end": 1986
  },
  {
    "type": "Identifier",
    "value": "generic2",
    "start": 1987,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2008,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2013,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2028,
    "end": 2031
  },
  {
    "type": "Identifier",
    "value": "generic2",
    "start": 2032,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2051,
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
    "value": ":",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2146,
    "end": 2149
  },
  {
    "type": "Identifier",
    "value": "asserted1",
    "start": 2150,
    "end": 2159
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2163,
    "end": 2166
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2172,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2181,
    "end": 2184
  },
  {
    "type": "Identifier",
    "value": "asserted1",
    "start": 2185,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2196,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2201,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "asserted2",
    "start": 2205,
    "end": 2214
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2218,
    "end": 2221
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2227,
    "end": 2229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2232,
    "end": 2238
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "type": "Punctuator",
    "value": "}",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2246,
    "end": 2249
  },
  {
    "type": "Identifier",
    "value": "asserted2",
    "start": 2250,
    "end": 2259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2261,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2264,
    "end": 2265
  }
]
```
