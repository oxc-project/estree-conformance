__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "process",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 320,
                "end": 323
              },
              "start": 318,
              "end": 323
            },
            "start": 311,
            "end": 323
          },
          "init": null,
          "definite": false,
          "start": 311,
          "end": 323
        }
      ],
      "declare": true,
      "start": 299,
      "end": 324
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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 346,
                "end": 349
              },
              "start": 344,
              "end": 349
            },
            "start": 337,
            "end": 349
          },
          "init": null,
          "definite": false,
          "start": 337,
          "end": 349
        }
      ],
      "declare": true,
      "start": 325,
      "end": 350
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
            "name": "readFileSync",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 377,
                "end": 380
              },
              "start": 375,
              "end": 380
            },
            "start": 363,
            "end": 380
          },
          "init": null,
          "definite": false,
          "start": 363,
          "end": 380
        }
      ],
      "declare": true,
      "start": 351,
      "end": 381
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 395,
            "end": 397
          },
          "start": 390,
          "end": 397
        }
      ],
      "source": {
        "type": "Literal",
        "value": "typescript",
        "raw": "\"typescript\"",
        "start": 403,
        "end": 415
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 383,
      "end": 416
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "delint",
          "optional": false,
          "typeAnnotation": null,
          "start": 434,
          "end": 440
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "sourceFile",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ts",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 453,
                    "end": 455
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SourceFile",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 456,
                    "end": 466
                  },
                  "start": 453,
                  "end": 466
                },
                "typeArguments": null,
                "start": 453,
                "end": 466
              },
              "start": 451,
              "end": 466
            },
            "start": 441,
            "end": 466
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
                  "name": "delintNode",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 474,
                  "end": 484
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sourceFile",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 485,
                    "end": 495
                  }
                ],
                "optional": false,
                "start": 474,
                "end": 496
              },
              "directive": null,
              "start": 474,
              "end": 497
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "delintNode",
                "optional": false,
                "typeAnnotation": null,
                "start": 512,
                "end": 522
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "node",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 529,
                          "end": 531
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Node",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 532,
                          "end": 536
                        },
                        "start": 529,
                        "end": 536
                      },
                      "typeArguments": null,
                      "start": 529,
                      "end": 536
                    },
                    "start": 527,
                    "end": 536
                  },
                  "start": 523,
                  "end": 536
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "SwitchStatement",
                    "discriminant": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 556,
                        "end": 560
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 561,
                        "end": 565
                      },
                      "optional": false,
                      "computed": false,
                      "start": 556,
                      "end": 565
                    },
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 586,
                              "end": 588
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SyntaxKind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 589,
                              "end": 599
                            },
                            "optional": false,
                            "computed": false,
                            "start": 586,
                            "end": 599
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ForStatement",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 600,
                            "end": 612
                          },
                          "optional": false,
                          "computed": false,
                          "start": 586,
                          "end": 612
                        },
                        "consequent": [],
                        "start": 581,
                        "end": 613
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 631,
                              "end": 633
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SyntaxKind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 634,
                              "end": 644
                            },
                            "optional": false,
                            "computed": false,
                            "start": 631,
                            "end": 644
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ForInStatement",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 645,
                            "end": 659
                          },
                          "optional": false,
                          "computed": false,
                          "start": 631,
                          "end": 659
                        },
                        "consequent": [],
                        "start": 626,
                        "end": 660
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 678,
                              "end": 680
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SyntaxKind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 681,
                              "end": 691
                            },
                            "optional": false,
                            "computed": false,
                            "start": 678,
                            "end": 691
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "WhileStatement",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 692,
                            "end": 706
                          },
                          "optional": false,
                          "computed": false,
                          "start": 678,
                          "end": 706
                        },
                        "consequent": [],
                        "start": 673,
                        "end": 707
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 725,
                              "end": 727
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SyntaxKind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 728,
                              "end": 738
                            },
                            "optional": false,
                            "computed": false,
                            "start": 725,
                            "end": 738
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "DoStatement",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 739,
                            "end": 750
                          },
                          "optional": false,
                          "computed": false,
                          "start": 725,
                          "end": 750
                        },
                        "consequent": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "TSTypeAssertion",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "TSQualifiedName",
                                        "left": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "ts",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 774,
                                          "end": 776
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "IterationStatement",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 777,
                                          "end": 795
                                        },
                                        "start": 774,
                                        "end": 795
                                      },
                                      "typeArguments": null,
                                      "start": 774,
                                      "end": 795
                                    },
                                    "expression": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "node",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 796,
                                      "end": 800
                                    },
                                    "start": 773,
                                    "end": 800
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "statement",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 802,
                                    "end": 811
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 772,
                                  "end": 811
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "kind",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 812,
                                  "end": 816
                                },
                                "optional": false,
                                "computed": false,
                                "start": 772,
                                "end": 816
                              },
                              "operator": "!==",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ts",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 821,
                                    "end": 823
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "SyntaxKind",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 824,
                                    "end": 834
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 821,
                                  "end": 834
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Block",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 835,
                                  "end": 840
                                },
                                "optional": false,
                                "computed": false,
                                "start": 821,
                                "end": 840
                              },
                              "start": 772,
                              "end": 840
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "report",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 864,
                                      "end": 870
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "node",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 871,
                                        "end": 875
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "A looping statement's contents should be wrapped in a block body.",
                                        "raw": "\"A looping statement's contents should be wrapped in a block body.\"",
                                        "start": 877,
                                        "end": 944
                                      }
                                    ],
                                    "optional": false,
                                    "start": 864,
                                    "end": 945
                                  },
                                  "directive": null,
                                  "start": 864,
                                  "end": 946
                                }
                              ],
                              "start": 842,
                              "end": 964
                            },
                            "alternate": null,
                            "start": 768,
                            "end": 964
                          },
                          {
                            "type": "BreakStatement",
                            "label": null,
                            "start": 981,
                            "end": 987
                          }
                        ],
                        "start": 720,
                        "end": 987
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1006,
                              "end": 1008
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SyntaxKind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1009,
                              "end": 1019
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1006,
                            "end": 1019
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IfStatement",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1020,
                            "end": 1031
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1006,
                          "end": 1031
                        },
                        "consequent": [
                          {
                            "type": "VariableDeclaration",
                            "kind": "let",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ifStatement",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1053,
                                  "end": 1064
                                },
                                "init": {
                                  "type": "TSTypeAssertion",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ts",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1069,
                                        "end": 1071
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "IfStatement",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1072,
                                        "end": 1083
                                      },
                                      "start": 1069,
                                      "end": 1083
                                    },
                                    "typeArguments": null,
                                    "start": 1069,
                                    "end": 1083
                                  },
                                  "expression": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "node",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1084,
                                    "end": 1088
                                  },
                                  "start": 1068,
                                  "end": 1088
                                },
                                "definite": false,
                                "start": 1053,
                                "end": 1089
                              }
                            ],
                            "declare": false,
                            "start": 1049,
                            "end": 1090
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ifStatement",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1111,
                                    "end": 1122
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "thenStatement",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1123,
                                    "end": 1136
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1111,
                                  "end": 1136
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "kind",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1137,
                                  "end": 1141
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1111,
                                "end": 1141
                              },
                              "operator": "!==",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ts",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1146,
                                    "end": 1148
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "SyntaxKind",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1149,
                                    "end": 1159
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1146,
                                  "end": 1159
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Block",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1160,
                                  "end": 1165
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1146,
                                "end": 1165
                              },
                              "start": 1111,
                              "end": 1165
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "report",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1189,
                                      "end": 1195
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "ifStatement",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1196,
                                          "end": 1207
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "thenStatement",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1208,
                                          "end": 1221
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1196,
                                        "end": 1221
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "An if statement's contents should be wrapped in a block body.",
                                        "raw": "\"An if statement's contents should be wrapped in a block body.\"",
                                        "start": 1223,
                                        "end": 1286
                                      }
                                    ],
                                    "optional": false,
                                    "start": 1189,
                                    "end": 1287
                                  },
                                  "directive": null,
                                  "start": 1189,
                                  "end": 1288
                                }
                              ],
                              "start": 1167,
                              "end": 1306
                            },
                            "alternate": null,
                            "start": 1107,
                            "end": 1306
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "LogicalExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ifStatement",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1327,
                                    "end": 1338
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "elseStatement",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1339,
                                    "end": 1352
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1327,
                                  "end": 1352
                                },
                                "operator": "&&",
                                "right": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ifStatement",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1376,
                                        "end": 1387
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "elseStatement",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1388,
                                        "end": 1401
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1376,
                                      "end": 1401
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "kind",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1402,
                                      "end": 1406
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1376,
                                    "end": 1406
                                  },
                                  "operator": "!==",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ts",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1411,
                                        "end": 1413
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "SyntaxKind",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1414,
                                        "end": 1424
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1411,
                                      "end": 1424
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Block",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1425,
                                      "end": 1430
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1411,
                                    "end": 1430
                                  },
                                  "start": 1376,
                                  "end": 1430
                                },
                                "start": 1327,
                                "end": 1430
                              },
                              "operator": "&&",
                              "right": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ifStatement",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1454,
                                      "end": 1465
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "elseStatement",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1466,
                                      "end": 1479
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1454,
                                    "end": 1479
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "kind",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1480,
                                    "end": 1484
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1454,
                                  "end": 1484
                                },
                                "operator": "!==",
                                "right": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ts",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1489,
                                      "end": 1491
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SyntaxKind",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1492,
                                      "end": 1502
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1489,
                                    "end": 1502
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "IfStatement",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1503,
                                    "end": 1514
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1489,
                                  "end": 1514
                                },
                                "start": 1454,
                                "end": 1514
                              },
                              "start": 1327,
                              "end": 1514
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "report",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1538,
                                      "end": 1544
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "ifStatement",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1545,
                                          "end": 1556
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "elseStatement",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1557,
                                          "end": 1570
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1545,
                                        "end": 1570
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "An else statement's contents should be wrapped in a block body.",
                                        "raw": "\"An else statement's contents should be wrapped in a block body.\"",
                                        "start": 1572,
                                        "end": 1637
                                      }
                                    ],
                                    "optional": false,
                                    "start": 1538,
                                    "end": 1638
                                  },
                                  "directive": null,
                                  "start": 1538,
                                  "end": 1639
                                }
                              ],
                              "start": 1516,
                              "end": 1657
                            },
                            "alternate": null,
                            "start": 1323,
                            "end": 1657
                          },
                          {
                            "type": "BreakStatement",
                            "label": null,
                            "start": 1674,
                            "end": 1680
                          }
                        ],
                        "start": 1001,
                        "end": 1680
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1699,
                              "end": 1701
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SyntaxKind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1702,
                              "end": 1712
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1699,
                            "end": 1712
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BinaryExpression",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1713,
                            "end": 1729
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1699,
                          "end": 1729
                        },
                        "consequent": [
                          {
                            "type": "VariableDeclaration",
                            "kind": "let",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "op",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1751,
                                  "end": 1753
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "TSTypeAssertion",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "TSQualifiedName",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "ts",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1758,
                                            "end": 1760
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "BinaryExpression",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1761,
                                            "end": 1777
                                          },
                                          "start": 1758,
                                          "end": 1777
                                        },
                                        "typeArguments": null,
                                        "start": 1758,
                                        "end": 1777
                                      },
                                      "expression": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "node",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1778,
                                        "end": 1782
                                      },
                                      "start": 1757,
                                      "end": 1782
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "operatorToken",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1784,
                                      "end": 1797
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1756,
                                    "end": 1797
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "kind",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1798,
                                    "end": 1802
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1756,
                                  "end": 1802
                                },
                                "definite": false,
                                "start": 1751,
                                "end": 1802
                              }
                            ],
                            "declare": false,
                            "start": 1747,
                            "end": 1803
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
                                  "name": "op",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1824,
                                  "end": 1826
                                },
                                "operator": "===",
                                "right": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ts",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1831,
                                      "end": 1833
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SyntaxKind",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1834,
                                      "end": 1844
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1831,
                                    "end": 1844
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "EqualsEqualsToken",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1845,
                                    "end": 1862
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1831,
                                  "end": 1862
                                },
                                "start": 1824,
                                "end": 1862
                              },
                              "operator": "||",
                              "right": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "op",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1866,
                                  "end": 1868
                                },
                                "operator": "==",
                                "right": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ts",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1872,
                                      "end": 1874
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SyntaxKind",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1875,
                                      "end": 1885
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1872,
                                    "end": 1885
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ExclamationEqualsToken",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1886,
                                    "end": 1908
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1872,
                                  "end": 1908
                                },
                                "start": 1866,
                                "end": 1908
                              },
                              "start": 1824,
                              "end": 1908
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "report",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1932,
                                      "end": 1938
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "node",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1939,
                                        "end": 1943
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "Use '===' and '!=='.",
                                        "raw": "\"Use '===' and '!=='.\"",
                                        "start": 1945,
                                        "end": 1967
                                      }
                                    ],
                                    "optional": false,
                                    "start": 1932,
                                    "end": 1968
                                  },
                                  "directive": null,
                                  "start": 1932,
                                  "end": 1968
                                }
                              ],
                              "start": 1910,
                              "end": 1986
                            },
                            "alternate": null,
                            "start": 1820,
                            "end": 1986
                          },
                          {
                            "type": "BreakStatement",
                            "label": null,
                            "start": 2003,
                            "end": 2009
                          }
                        ],
                        "start": 1694,
                        "end": 2009
                      }
                    ],
                    "start": 548,
                    "end": 2019
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
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2029,
                          "end": 2031
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "forEachChild",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2032,
                          "end": 2044
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2029,
                        "end": 2044
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "node",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2045,
                          "end": 2049
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "delintNode",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2051,
                          "end": 2061
                        }
                      ],
                      "optional": false,
                      "start": 2029,
                      "end": 2062
                    },
                    "directive": null,
                    "start": 2029,
                    "end": 2063
                  }
                ],
                "start": 538,
                "end": 2069
              },
              "expression": false,
              "start": 503,
              "end": 2069
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "report",
                "optional": false,
                "typeAnnotation": null,
                "start": 2084,
                "end": 2090
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "node",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2097,
                          "end": 2099
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Node",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2100,
                          "end": 2104
                        },
                        "start": 2097,
                        "end": 2104
                      },
                      "typeArguments": null,
                      "start": 2097,
                      "end": 2104
                    },
                    "start": 2095,
                    "end": 2104
                  },
                  "start": 2091,
                  "end": 2104
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2115,
                      "end": 2121
                    },
                    "start": 2113,
                    "end": 2121
                  },
                  "start": 2106,
                  "end": 2121
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
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
                                "name": "line",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2139,
                                "end": 2143
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "line",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2139,
                                "end": 2143
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false,
                              "start": 2139,
                              "end": 2143
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "character",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2145,
                                "end": 2154
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "character",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2145,
                                "end": 2154
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false,
                              "start": 2145,
                              "end": 2154
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2137,
                          "end": 2156
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "sourceFile",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2159,
                              "end": 2169
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getLineAndCharacterOfPosition",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2170,
                              "end": 2199
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2159,
                            "end": 2199
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "node",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2200,
                                  "end": 2204
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getStart",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2205,
                                  "end": 2213
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2200,
                                "end": 2213
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 2200,
                              "end": 2215
                            }
                          ],
                          "optional": false,
                          "start": 2159,
                          "end": 2216
                        },
                        "definite": false,
                        "start": 2137,
                        "end": 2216
                      }
                    ],
                    "declare": false,
                    "start": 2133,
                    "end": 2217
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
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2226,
                          "end": 2233
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2234,
                          "end": 2237
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2226,
                        "end": 2237
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "TemplateLiteral",
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": false,
                              "start": 2238,
                              "end": 2241
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": " (",
                                "cooked": " ("
                              },
                              "tail": false,
                              "start": 2260,
                              "end": 2265
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": ",",
                                "cooked": ","
                              },
                              "tail": false,
                              "start": 2273,
                              "end": 2277
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "): ",
                                "cooked": "): "
                              },
                              "tail": false,
                              "start": 2290,
                              "end": 2296
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true,
                              "start": 2303,
                              "end": 2305
                            }
                          ],
                          "expressions": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "sourceFile",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2241,
                                "end": 2251
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "fileName",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2252,
                                "end": 2260
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2241,
                              "end": 2260
                            },
                            {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "line",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2265,
                                "end": 2269
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 2272,
                                "end": 2273
                              },
                              "start": 2265,
                              "end": 2273
                            },
                            {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "character",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2277,
                                "end": 2286
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 2289,
                                "end": 2290
                              },
                              "start": 2277,
                              "end": 2290
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "message",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2296,
                              "end": 2303
                            }
                          ],
                          "start": 2238,
                          "end": 2305
                        }
                      ],
                      "optional": false,
                      "start": 2226,
                      "end": 2306
                    },
                    "directive": null,
                    "start": 2226,
                    "end": 2307
                  }
                ],
                "start": 2123,
                "end": 2313
              },
              "expression": false,
              "start": 2075,
              "end": 2313
            }
          ],
          "start": 468,
          "end": 2315
        },
        "expression": false,
        "start": 425,
        "end": 2315
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 418,
      "end": 2315
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
            "name": "fileNames",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 2334,
                  "end": 2340
                },
                "start": 2334,
                "end": 2342
              },
              "start": 2332,
              "end": 2342
            },
            "start": 2323,
            "end": 2342
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "process",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2345,
                  "end": 2352
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "argv",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2353,
                  "end": 2357
                },
                "optional": false,
                "computed": false,
                "start": 2345,
                "end": 2357
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "slice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2358,
                "end": 2363
              },
              "optional": false,
              "computed": false,
              "start": 2345,
              "end": 2363
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2364,
                "end": 2365
              }
            ],
            "optional": false,
            "start": 2345,
            "end": 2366
          },
          "definite": false,
          "start": 2323,
          "end": 2366
        }
      ],
      "declare": false,
      "start": 2317,
      "end": 2367
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
            "name": "fileNames",
            "optional": false,
            "typeAnnotation": null,
            "start": 2368,
            "end": 2377
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null,
            "start": 2378,
            "end": 2385
          },
          "optional": false,
          "computed": false,
          "start": 2368,
          "end": 2385
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fileName",
                "optional": false,
                "typeAnnotation": null,
                "start": 2386,
                "end": 2394
              }
            ],
            "returnType": null,
            "body": {
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
                        "name": "sourceFile",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2428,
                        "end": 2438
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2441,
                            "end": 2443
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "createSourceFile",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2444,
                            "end": 2460
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2441,
                          "end": 2460
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fileName",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2461,
                            "end": 2469
                          },
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "readFileSync",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2471,
                                  "end": 2483
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "fileName",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2484,
                                    "end": 2492
                                  }
                                ],
                                "optional": false,
                                "start": 2471,
                                "end": 2493
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2494,
                                "end": 2502
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2471,
                              "end": 2502
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 2471,
                            "end": 2504
                          },
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ts",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2506,
                                "end": 2508
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ScriptTarget",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2509,
                                "end": 2521
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2506,
                              "end": 2521
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ES2015",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2522,
                              "end": 2528
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2506,
                            "end": 2528
                          },
                          {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 2550,
                            "end": 2554
                          }
                        ],
                        "optional": false,
                        "start": 2441,
                        "end": 2555
                      },
                      "definite": false,
                      "start": 2428,
                      "end": 2555
                    }
                  ],
                  "declare": false,
                  "start": 2424,
                  "end": 2556
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "delint",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2579,
                      "end": 2585
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sourceFile",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2586,
                        "end": 2596
                      }
                    ],
                    "optional": false,
                    "start": 2579,
                    "end": 2597
                  },
                  "directive": null,
                  "start": 2579,
                  "end": 2598
                }
              ],
              "start": 2398,
              "end": 2600
            },
            "id": null,
            "generator": false,
            "start": 2386,
            "end": 2600
          }
        ],
        "optional": false,
        "start": 2368,
        "end": 2601
      },
      "directive": null,
      "start": 2368,
      "end": 2602
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 299,
  "end": 2602
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 299,
    "end": 306
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 307,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "process",
    "start": 311,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 320,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 325,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 333,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 337,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 346,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 351,
    "end": 358
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 359,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "readFileSync",
    "start": 363,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 377,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 380,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 383,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 392,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 395,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 398,
    "end": 402
  },
  {
    "type": "String",
    "value": "\"typescript\"",
    "start": 403,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 415,
    "end": 416
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 418,
    "end": 424
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 425,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "delint",
    "start": 434,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "sourceFile",
    "start": 441,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 453,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "SourceFile",
    "start": 456,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "delintNode",
    "start": 474,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "sourceFile",
    "start": 485,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 496,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 503,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "delintNode",
    "start": 512,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 523,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 529,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 532,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 538,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 548,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 556,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 561,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 567,
    "end": 568
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 581,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 586,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 589,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "ForStatement",
    "start": 600,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 612,
    "end": 613
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 626,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 631,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 634,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "ForInStatement",
    "start": 645,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 659,
    "end": 660
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 673,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 678,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 681,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "WhileStatement",
    "start": 692,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 706,
    "end": 707
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 720,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 725,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 728,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "DoStatement",
    "start": 739,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 750,
    "end": 751
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 768,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 774,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "IterationStatement",
    "start": 777,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 796,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "statement",
    "start": 802,
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
    "value": "kind",
    "start": 812,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 817,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 821,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 824,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "Block",
    "start": 835,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "report",
    "start": 864,
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
    "value": "node",
    "start": 871,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 875,
    "end": 876
  },
  {
    "type": "String",
    "value": "\"A looping statement's contents should be wrapped in a block body.\"",
    "start": 877,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 963,
    "end": 964
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 981,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 986,
    "end": 987
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1001,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1006,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 1009,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "IfStatement",
    "start": 1020,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1049,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "ifStatement",
    "start": 1053,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1069,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "IfStatement",
    "start": 1072,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 1084,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1107,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "ifStatement",
    "start": 1111,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "thenStatement",
    "start": 1123,
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
    "value": "kind",
    "start": 1137,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1142,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1146,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 1149,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Identifier",
    "value": "Block",
    "start": 1160,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "report",
    "start": 1189,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "ifStatement",
    "start": 1196,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "thenStatement",
    "start": 1208,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "String",
    "value": "\"An if statement's contents should be wrapped in a block body.\"",
    "start": 1223,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1323,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "ifStatement",
    "start": 1327,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "elseStatement",
    "start": 1339,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1353,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "ifStatement",
    "start": 1376,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "elseStatement",
    "start": 1388,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1402,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1407,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1411,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 1414,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Identifier",
    "value": "Block",
    "start": 1425,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1431,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "ifStatement",
    "start": 1454,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "elseStatement",
    "start": 1466,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1480,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1485,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1489,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 1492,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Identifier",
    "value": "IfStatement",
    "start": 1503,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "report",
    "start": 1538,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Identifier",
    "value": "ifStatement",
    "start": 1545,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Identifier",
    "value": "elseStatement",
    "start": 1557,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "String",
    "value": "\"An else statement's contents should be wrapped in a block body.\"",
    "start": 1572,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1674,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1694,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1699,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 1702,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "BinaryExpression",
    "start": 1713,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1747,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "op",
    "start": 1751,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1758,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Identifier",
    "value": "BinaryExpression",
    "start": 1761,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 1778,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Identifier",
    "value": "operatorToken",
    "start": 1784,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1798,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1820,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Identifier",
    "value": "op",
    "start": 1824,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1827,
    "end": 1830
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1831,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 1834,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Identifier",
    "value": "EqualsEqualsToken",
    "start": 1845,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1863,
    "end": 1865
  },
  {
    "type": "Identifier",
    "value": "op",
    "start": 1866,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1869,
    "end": 1871
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1872,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 1875,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Identifier",
    "value": "ExclamationEqualsToken",
    "start": 1886,
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
    "value": "{",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Identifier",
    "value": "report",
    "start": 1932,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 1939,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "String",
    "value": "\"Use '===' and '!=='.\"",
    "start": 1945,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2003,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 2029,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Identifier",
    "value": "forEachChild",
    "start": 2032,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2045,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Identifier",
    "value": "delintNode",
    "start": 2051,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2075,
    "end": 2083
  },
  {
    "type": "Identifier",
    "value": "report",
    "start": 2084,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2091,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 2097,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 2100,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 2106,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2115,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2133,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Identifier",
    "value": "line",
    "start": 2139,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Identifier",
    "value": "character",
    "start": 2145,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Identifier",
    "value": "sourceFile",
    "start": 2159,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Identifier",
    "value": "getLineAndCharacterOfPosition",
    "start": 2170,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2200,
    "end": 2204
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Identifier",
    "value": "getStart",
    "start": 2205,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2226,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2234,
    "end": 2237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2238,
    "end": 2241
  },
  {
    "type": "Identifier",
    "value": "sourceFile",
    "start": 2241,
    "end": 2251
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 2252,
    "end": 2260
  },
  {
    "type": "Template",
    "value": "} (${",
    "start": 2260,
    "end": 2265
  },
  {
    "type": "Identifier",
    "value": "line",
    "start": 2265,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Template",
    "value": "},${",
    "start": 2273,
    "end": 2277
  },
  {
    "type": "Identifier",
    "value": "character",
    "start": 2277,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Template",
    "value": "}): ${",
    "start": 2290,
    "end": 2296
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 2296,
    "end": 2303
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2303,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2317,
    "end": 2322
  },
  {
    "type": "Identifier",
    "value": "fileNames",
    "start": 2323,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2334,
    "end": 2340
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Identifier",
    "value": "process",
    "start": 2345,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Identifier",
    "value": "argv",
    "start": 2353,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 2358,
    "end": 2363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Identifier",
    "value": "fileNames",
    "start": 2368,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 2378,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 2386,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2395,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2424,
    "end": 2427
  },
  {
    "type": "Identifier",
    "value": "sourceFile",
    "start": 2428,
    "end": 2438
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 2441,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Identifier",
    "value": "createSourceFile",
    "start": 2444,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 2461,
    "end": 2469
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Identifier",
    "value": "readFileSync",
    "start": 2471,
    "end": 2483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2483,
    "end": 2484
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 2484,
    "end": 2492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2493,
    "end": 2494
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 2494,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 2506,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Identifier",
    "value": "ScriptTarget",
    "start": 2509,
    "end": 2521
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Identifier",
    "value": "ES2015",
    "start": 2522,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2550,
    "end": 2554
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Identifier",
    "value": "delint",
    "start": 2579,
    "end": 2585
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Identifier",
    "value": "sourceFile",
    "start": 2586,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2597,
    "end": 2598
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2599,
    "end": 2600
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2600,
    "end": 2601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2601,
    "end": 2602
  }
]
```
