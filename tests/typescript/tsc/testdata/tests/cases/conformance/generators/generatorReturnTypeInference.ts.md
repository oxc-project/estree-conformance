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
            "name": "iterableIterator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IterableIterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 32,
                  "end": 48
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 49,
                      "end": 55
                    }
                  ],
                  "start": 48,
                  "end": 56
                },
                "start": 32,
                "end": 56
              },
              "start": 30,
              "end": 56
            },
            "start": 14,
            "end": 56
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 56
        }
      ],
      "declare": true,
      "start": 0,
      "end": 57
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
            "name": "generator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Generator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 92
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 93,
                      "end": 99
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 101,
                      "end": 107
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 109,
                      "end": 116
                    }
                  ],
                  "start": 92,
                  "end": 117
                },
                "start": 83,
                "end": 117
              },
              "start": 81,
              "end": 117
            },
            "start": 72,
            "end": 117
          },
          "init": null,
          "definite": false,
          "start": 72,
          "end": 117
        }
      ],
      "declare": true,
      "start": 58,
      "end": 118
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
            "name": "never",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 140,
                "end": 145
              },
              "start": 138,
              "end": 145
            },
            "start": 133,
            "end": 145
          },
          "init": null,
          "definite": false,
          "start": 133,
          "end": 145
        }
      ],
      "declare": true,
      "start": 119,
      "end": 146
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g000",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 162
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 165,
        "end": 203
      },
      "expression": false,
      "start": 148,
      "end": 203
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g001",
        "optional": false,
        "typeAnnotation": null,
        "start": 251,
        "end": 255
      },
      "generator": true,
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
              "type": "YieldExpression",
              "delegate": false,
              "argument": null,
              "start": 303,
              "end": 308
            },
            "directive": null,
            "start": 303,
            "end": 309
          }
        ],
        "start": 258,
        "end": 311
      },
      "expression": false,
      "start": 241,
      "end": 311
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g002",
        "optional": false,
        "typeAnnotation": null,
        "start": 323,
        "end": 327
      },
      "generator": true,
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
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 378,
                "end": 379
              },
              "start": 372,
              "end": 379
            },
            "directive": null,
            "start": 372,
            "end": 380
          }
        ],
        "start": 330,
        "end": 382
      },
      "expression": false,
      "start": 313,
      "end": 382
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g003",
        "optional": false,
        "typeAnnotation": null,
        "start": 394,
        "end": 398
      },
      "generator": true,
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
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 451,
                "end": 453
              },
              "start": 444,
              "end": 453
            },
            "directive": null,
            "start": 444,
            "end": 454
          }
        ],
        "start": 401,
        "end": 456
      },
      "expression": false,
      "start": 384,
      "end": 456
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g004",
        "optional": false,
        "typeAnnotation": null,
        "start": 468,
        "end": 472
      },
      "generator": true,
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
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterableIterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 526,
                "end": 542
              },
              "start": 519,
              "end": 542
            },
            "directive": null,
            "start": 519,
            "end": 543
          }
        ],
        "start": 475,
        "end": 545
      },
      "expression": false,
      "start": 458,
      "end": 545
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g005",
        "optional": false,
        "typeAnnotation": null,
        "start": 557,
        "end": 561
      },
      "generator": true,
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 612,
                  "end": 613
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": true,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "generator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 623,
                    "end": 632
                  },
                  "start": 616,
                  "end": 632
                },
                "definite": false,
                "start": 612,
                "end": 632
              }
            ],
            "declare": false,
            "start": 606,
            "end": 633
          }
        ],
        "start": 564,
        "end": 635
      },
      "expression": false,
      "start": 547,
      "end": 635
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g006",
        "optional": false,
        "typeAnnotation": null,
        "start": 647,
        "end": 651
      },
      "generator": true,
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
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 701,
                "end": 702
              },
              "start": 695,
              "end": 702
            },
            "directive": null,
            "start": 695,
            "end": 703
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 714,
                "end": 715
              },
              "start": 708,
              "end": 715
            },
            "directive": null,
            "start": 708,
            "end": 716
          }
        ],
        "start": 654,
        "end": 718
      },
      "expression": false,
      "start": 637,
      "end": 718
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g007",
        "optional": false,
        "typeAnnotation": null,
        "start": 730,
        "end": 734
      },
      "generator": true,
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
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "never",
                "optional": false,
                "typeAnnotation": null,
                "start": 784,
                "end": 789
              },
              "start": 778,
              "end": 789
            },
            "directive": null,
            "start": 778,
            "end": 790
          }
        ],
        "start": 737,
        "end": 792
      },
      "expression": false,
      "start": 720,
      "end": 792
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g102",
        "optional": false,
        "typeAnnotation": null,
        "start": 841,
        "end": 845
      },
      "generator": true,
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
              "value": 1,
              "raw": "1",
              "start": 898,
              "end": 899
            },
            "start": 891,
            "end": 900
          }
        ],
        "start": 848,
        "end": 902
      },
      "expression": false,
      "start": 831,
      "end": 902
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g103",
        "optional": false,
        "typeAnnotation": null,
        "start": 914,
        "end": 918
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 967,
                  "end": 971
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 972,
                  "end": 978
                },
                "optional": false,
                "computed": false,
                "start": 967,
                "end": 978
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 967,
              "end": 980
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 989,
                "end": 990
              },
              "start": 982,
              "end": 991
            },
            "alternate": null,
            "start": 963,
            "end": 991
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 1003,
              "end": 1004
            },
            "start": 996,
            "end": 1005
          }
        ],
        "start": 921,
        "end": 1007
      },
      "expression": false,
      "start": 904,
      "end": 1007
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g104",
        "optional": false,
        "typeAnnotation": null,
        "start": 1019,
        "end": 1023
      },
      "generator": true,
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
              "type": "Identifier",
              "decorators": [],
              "name": "never",
              "optional": false,
              "typeAnnotation": null,
              "start": 1075,
              "end": 1080
            },
            "start": 1068,
            "end": 1081
          }
        ],
        "start": 1026,
        "end": 1083
      },
      "expression": false,
      "start": 1009,
      "end": 1083
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g201",
        "optional": false,
        "typeAnnotation": null,
        "start": 1130,
        "end": 1134
      },
      "generator": true,
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1185,
                      "end": 1191
                    },
                    "start": 1183,
                    "end": 1191
                  },
                  "start": 1182,
                  "end": 1191
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1200,
                    "end": 1201
                  },
                  "start": 1194,
                  "end": 1201
                },
                "definite": false,
                "start": 1182,
                "end": 1201
              }
            ],
            "declare": false,
            "start": 1178,
            "end": 1202
          }
        ],
        "start": 1137,
        "end": 1204
      },
      "expression": false,
      "start": 1120,
      "end": 1204
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g202",
        "optional": false,
        "typeAnnotation": null,
        "start": 1216,
        "end": 1220
      },
      "generator": true,
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1269,
                      "end": 1275
                    },
                    "start": 1267,
                    "end": 1275
                  },
                  "start": 1266,
                  "end": 1275
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1284,
                    "end": 1285
                  },
                  "start": 1278,
                  "end": 1285
                },
                "definite": false,
                "start": 1266,
                "end": 1285
              }
            ],
            "declare": false,
            "start": 1262,
            "end": 1286
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1298,
                      "end": 1304
                    },
                    "start": 1296,
                    "end": 1304
                  },
                  "start": 1295,
                  "end": 1304
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1313,
                    "end": 1314
                  },
                  "start": 1307,
                  "end": 1314
                },
                "definite": false,
                "start": 1295,
                "end": 1314
              }
            ],
            "declare": false,
            "start": 1291,
            "end": 1315
          }
        ],
        "start": 1223,
        "end": 1317
      },
      "expression": false,
      "start": 1206,
      "end": 1317
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1336,
        "end": 1338
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
              "type": "TSStringKeyword",
              "start": 1342,
              "end": 1348
            },
            "start": 1340,
            "end": 1348
          },
          "start": 1339,
          "end": 1348
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1351,
          "end": 1355
        },
        "start": 1349,
        "end": 1355
      },
      "body": null,
      "expression": false,
      "start": 1319,
      "end": 1356
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1374,
        "end": 1376
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
              "start": 1380,
              "end": 1386
            },
            "start": 1378,
            "end": 1386
          },
          "start": 1377,
          "end": 1386
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1389,
          "end": 1393
        },
        "start": 1387,
        "end": 1393
      },
      "body": null,
      "expression": false,
      "start": 1357,
      "end": 1394
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g203",
        "optional": false,
        "typeAnnotation": null,
        "start": 1406,
        "end": 1410
      },
      "generator": true,
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1457,
                  "end": 1458
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1461,
                    "end": 1463
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "YieldExpression",
                      "delegate": false,
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1470,
                        "end": 1471
                      },
                      "start": 1464,
                      "end": 1471
                    }
                  ],
                  "optional": false,
                  "start": 1461,
                  "end": 1472
                },
                "definite": false,
                "start": 1457,
                "end": 1472
              }
            ],
            "declare": false,
            "start": 1451,
            "end": 1473
          }
        ],
        "start": 1413,
        "end": 1475
      },
      "expression": false,
      "start": 1396,
      "end": 1475
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1494,
        "end": 1496
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1497,
              "end": 1498
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1497,
            "end": 1498
          }
        ],
        "start": 1496,
        "end": 1499
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1503,
                "end": 1504
              },
              "typeArguments": null,
              "start": 1503,
              "end": 1504
            },
            "start": 1501,
            "end": 1504
          },
          "start": 1500,
          "end": 1504
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1507,
            "end": 1508
          },
          "typeArguments": null,
          "start": 1507,
          "end": 1508
        },
        "start": 1505,
        "end": 1508
      },
      "body": null,
      "expression": false,
      "start": 1477,
      "end": 1509
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g204",
        "optional": false,
        "typeAnnotation": null,
        "start": 1521,
        "end": 1525
      },
      "generator": true,
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1569,
                  "end": 1570
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1573,
                    "end": 1575
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "YieldExpression",
                      "delegate": false,
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1582,
                        "end": 1583
                      },
                      "start": 1576,
                      "end": 1583
                    }
                  ],
                  "optional": false,
                  "start": 1573,
                  "end": 1584
                },
                "definite": false,
                "start": 1569,
                "end": 1584
              }
            ],
            "declare": false,
            "start": 1563,
            "end": 1585
          }
        ],
        "start": 1528,
        "end": 1587
      },
      "expression": false,
      "start": 1511,
      "end": 1587
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g301",
        "optional": false,
        "typeAnnotation": null,
        "start": 1635,
        "end": 1639
      },
      "generator": true,
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
              "type": "YieldExpression",
              "delegate": false,
              "argument": null,
              "start": 1687,
              "end": 1692
            },
            "directive": null,
            "start": 1687,
            "end": 1693
          },
          {
            "type": "ReturnStatement",
            "argument": null,
            "start": 1698,
            "end": 1705
          }
        ],
        "start": 1642,
        "end": 1707
      },
      "expression": false,
      "start": 1625,
      "end": 1707
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g302",
        "optional": false,
        "typeAnnotation": null,
        "start": 1719,
        "end": 1723
      },
      "generator": true,
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
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1774,
                "end": 1775
              },
              "start": 1768,
              "end": 1775
            },
            "directive": null,
            "start": 1768,
            "end": 1776
          },
          {
            "type": "ReturnStatement",
            "argument": null,
            "start": 1781,
            "end": 1788
          }
        ],
        "start": 1726,
        "end": 1790
      },
      "expression": false,
      "start": 1709,
      "end": 1790
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g303",
        "optional": false,
        "typeAnnotation": null,
        "start": 1802,
        "end": 1806
      },
      "generator": true,
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
              "type": "YieldExpression",
              "delegate": false,
              "argument": null,
              "start": 1856,
              "end": 1861
            },
            "directive": null,
            "start": 1856,
            "end": 1862
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 1874,
              "end": 1877
            },
            "start": 1867,
            "end": 1878
          }
        ],
        "start": 1809,
        "end": 1880
      },
      "expression": false,
      "start": 1792,
      "end": 1880
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g304",
        "optional": false,
        "typeAnnotation": null,
        "start": 1892,
        "end": 1896
      },
      "generator": true,
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
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1949,
                "end": 1950
              },
              "start": 1943,
              "end": 1950
            },
            "directive": null,
            "start": 1943,
            "end": 1951
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 1963,
              "end": 1966
            },
            "start": 1956,
            "end": 1967
          }
        ],
        "start": 1899,
        "end": 1969
      },
      "expression": false,
      "start": 1882,
      "end": 1969
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g305",
        "optional": false,
        "typeAnnotation": null,
        "start": 1981,
        "end": 1985
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2038,
                  "end": 2042
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2043,
                  "end": 2049
                },
                "optional": false,
                "computed": false,
                "start": 2038,
                "end": 2049
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2038,
              "end": 2051
            },
            "consequent": {
              "type": "ExpressionStatement",
              "expression": {
                "type": "YieldExpression",
                "delegate": false,
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2059,
                  "end": 2060
                },
                "start": 2053,
                "end": 2060
              },
              "directive": null,
              "start": 2053,
              "end": 2061
            },
            "alternate": null,
            "start": 2034,
            "end": 2061
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2072,
                "end": 2073
              },
              "start": 2066,
              "end": 2073
            },
            "directive": null,
            "start": 2066,
            "end": 2074
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2083,
                  "end": 2087
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2088,
                  "end": 2094
                },
                "optional": false,
                "computed": false,
                "start": 2083,
                "end": 2094
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2083,
              "end": 2096
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 2105,
                "end": 2108
              },
              "start": 2098,
              "end": 2109
            },
            "alternate": null,
            "start": 2079,
            "end": 2109
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 2121,
              "end": 2124
            },
            "start": 2114,
            "end": 2125
          }
        ],
        "start": 1988,
        "end": 2127
      },
      "expression": false,
      "start": 1971,
      "end": 2127
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g306",
        "optional": false,
        "typeAnnotation": null,
        "start": 2139,
        "end": 2143
      },
      "generator": true,
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "hi",
                        "raw": "\"hi\"",
                        "start": 2197,
                        "end": 2201
                      },
                      "start": 2197,
                      "end": 2201
                    },
                    "start": 2195,
                    "end": 2201
                  },
                  "start": 2194,
                  "end": 2201
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2210,
                    "end": 2211
                  },
                  "start": 2204,
                  "end": 2211
                },
                "definite": false,
                "start": 2194,
                "end": 2211
              }
            ],
            "declare": false,
            "start": 2188,
            "end": 2212
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2224,
              "end": 2228
            },
            "start": 2217,
            "end": 2229
          }
        ],
        "start": 2146,
        "end": 2231
      },
      "expression": false,
      "start": 2129,
      "end": 2231
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g307",
        "optional": false,
        "typeAnnotation": null,
        "start": 2243,
        "end": 2247
      },
      "generator": true,
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
              "start": 2248,
              "end": 2249
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2248,
            "end": 2249
          }
        ],
        "start": 2247,
        "end": 2250
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "a",
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
                        "start": 2295,
                        "end": 2296
                      },
                      "typeArguments": null,
                      "start": 2295,
                      "end": 2296
                    },
                    "start": 2293,
                    "end": 2296
                  },
                  "start": 2292,
                  "end": 2296
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2305,
                    "end": 2306
                  },
                  "start": 2299,
                  "end": 2306
                },
                "definite": false,
                "start": 2292,
                "end": 2306
              }
            ],
            "declare": false,
            "start": 2286,
            "end": 2307
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2319,
              "end": 2320
            },
            "start": 2312,
            "end": 2321
          }
        ],
        "start": 2253,
        "end": 2323
      },
      "expression": false,
      "start": 2233,
      "end": 2323
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g308",
        "optional": false,
        "typeAnnotation": null,
        "start": 2335,
        "end": 2339
      },
      "generator": true,
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
              "start": 2340,
              "end": 2341
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2340,
            "end": 2341
          }
        ],
        "start": 2339,
        "end": 2342
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2346,
                "end": 2347
              },
              "typeArguments": null,
              "start": 2346,
              "end": 2347
            },
            "start": 2344,
            "end": 2347
          },
          "start": 2343,
          "end": 2347
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "a",
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
                        "start": 2386,
                        "end": 2387
                      },
                      "typeArguments": null,
                      "start": 2386,
                      "end": 2387
                    },
                    "start": 2384,
                    "end": 2387
                  },
                  "start": 2383,
                  "end": 2387
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2396,
                    "end": 2397
                  },
                  "start": 2390,
                  "end": 2397
                },
                "definite": false,
                "start": 2383,
                "end": 2397
              }
            ],
            "declare": false,
            "start": 2377,
            "end": 2398
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2410,
              "end": 2411
            },
            "start": 2403,
            "end": 2412
          }
        ],
        "start": 2349,
        "end": 2414
      },
      "expression": false,
      "start": 2325,
      "end": 2414
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g309",
        "optional": false,
        "typeAnnotation": null,
        "start": 2426,
        "end": 2430
      },
      "generator": true,
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
              "start": 2431,
              "end": 2432
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2431,
            "end": 2432
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2434,
              "end": 2435
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2434,
            "end": 2435
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 2437,
              "end": 2438
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2437,
            "end": 2438
          }
        ],
        "start": 2430,
        "end": 2439
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2443,
                "end": 2444
              },
              "typeArguments": null,
              "start": 2443,
              "end": 2444
            },
            "start": 2441,
            "end": 2444
          },
          "start": 2440,
          "end": 2444
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
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
                "start": 2449,
                "end": 2450
              },
              "typeArguments": null,
              "start": 2449,
              "end": 2450
            },
            "start": 2447,
            "end": 2450
          },
          "start": 2446,
          "end": 2450
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2489,
                        "end": 2490
                      },
                      "typeArguments": null,
                      "start": 2489,
                      "end": 2490
                    },
                    "start": 2487,
                    "end": 2490
                  },
                  "start": 2486,
                  "end": 2490
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2499,
                    "end": 2500
                  },
                  "start": 2493,
                  "end": 2500
                },
                "definite": false,
                "start": 2486,
                "end": 2500
              }
            ],
            "declare": false,
            "start": 2480,
            "end": 2501
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 2513,
              "end": 2514
            },
            "start": 2506,
            "end": 2515
          }
        ],
        "start": 2452,
        "end": 2517
      },
      "expression": false,
      "start": 2416,
      "end": 2517
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g310",
        "optional": false,
        "typeAnnotation": null,
        "start": 2529,
        "end": 2533
      },
      "generator": true,
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2614,
                        "end": 2615
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2618,
                        "end": 2619
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2614,
                      "end": 2619
                    },
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2621,
                        "end": 2622
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 2625,
                        "end": 2626
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2621,
                      "end": 2626
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2613,
                  "end": 2627
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": null,
                  "start": 2630,
                  "end": 2635
                },
                "definite": false,
                "start": 2613,
                "end": 2635
              }
            ],
            "declare": false,
            "start": 2607,
            "end": 2636
          }
        ],
        "start": 2536,
        "end": 2638
      },
      "expression": false,
      "start": 2519,
      "end": 2638
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g311",
        "optional": false,
        "typeAnnotation": null,
        "start": 2650,
        "end": 2654
      },
      "generator": true,
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
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": true,
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
                        "kind": "const",
                        "declarations": [
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
                                  "type": "TSStringKeyword",
                                  "start": 2731,
                                  "end": 2737
                                },
                                "start": 2729,
                                "end": 2737
                              },
                              "start": 2728,
                              "end": 2737
                            },
                            "init": {
                              "type": "YieldExpression",
                              "delegate": false,
                              "argument": null,
                              "start": 2740,
                              "end": 2745
                            },
                            "definite": false,
                            "start": 2728,
                            "end": 2745
                          }
                        ],
                        "declare": false,
                        "start": 2722,
                        "end": 2746
                      }
                    ],
                    "start": 2718,
                    "end": 2749
                  },
                  "expression": false,
                  "start": 2706,
                  "end": 2749
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 2705,
                "end": 2752
              },
              "start": 2698,
              "end": 2752
            },
            "directive": null,
            "start": 2698,
            "end": 2753
          }
        ],
        "start": 2657,
        "end": 2755
      },
      "expression": false,
      "start": 2640,
      "end": 2755
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2755
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
    "value": "iterableIterator",
    "start": 14,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "IterableIterator",
    "start": 32,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 49,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 55,
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
    "value": "const",
    "start": 66,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "generator",
    "start": 72,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 83,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 101,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 109,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 119,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 127,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 133,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 140,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 148,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "g000",
    "start": 158,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
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
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 241,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "g001",
    "start": 251,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 303,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 313,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "g002",
    "start": 323,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 372,
    "end": 377
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 381,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 384,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "g003",
    "start": 394,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 401,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 444,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 455,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 458,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "g004",
    "start": 468,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 475,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 519,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "iterableIterator",
    "start": 526,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 544,
    "end": 545
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 547,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "g005",
    "start": 557,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "const",
    "start": 606,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 614,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 616,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "generator",
    "start": 623,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 634,
    "end": 635
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 637,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "g006",
    "start": 647,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 654,
    "end": 655
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 695,
    "end": 700
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 702,
    "end": 703
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 708,
    "end": 713
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 714,
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
    "type": "Keyword",
    "value": "function",
    "start": 720,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "g007",
    "start": 730,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 737,
    "end": 738
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 778,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 784,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 791,
    "end": 792
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 831,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "g102",
    "start": 841,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 848,
    "end": 849
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 891,
    "end": 897
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 901,
    "end": 902
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 904,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 912,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "g103",
    "start": 914,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 921,
    "end": 922
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 963,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 967,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 972,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 980,
    "end": 981
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 982,
    "end": 988
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 990,
    "end": 991
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 996,
    "end": 1002
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1009,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "g104",
    "start": 1019,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1068,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1075,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1120,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "g201",
    "start": 1130,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1178,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1182,
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
    "value": "string",
    "start": 1185,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1194,
    "end": 1199
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "function",
    "start": 1206,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "g202",
    "start": 1216,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1262,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1269,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1278,
    "end": 1283
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1291,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1298,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1307,
    "end": 1312
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1319,
    "end": 1326
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1327,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1336,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1342,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1351,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1357,
    "end": 1364
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1365,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1374,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1380,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1389,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1396,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "g203",
    "start": 1406,
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
    "value": ")",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1451,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1461,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1464,
    "end": 1469
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1477,
    "end": 1484
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1485,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1494,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1511,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "g204",
    "start": 1521,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1563,
    "end": 1568
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1573,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1576,
    "end": 1581
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1625,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "g301",
    "start": 1635,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1687,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1698,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1709,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Identifier",
    "value": "g302",
    "start": 1719,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1768,
    "end": 1773
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1781,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1792,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Identifier",
    "value": "g303",
    "start": 1802,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1856,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1867,
    "end": 1873
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1874,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1882,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Identifier",
    "value": "g304",
    "start": 1892,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1943,
    "end": 1948
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "return",
    "start": 1956,
    "end": 1962
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1963,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1971,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "g305",
    "start": 1981,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2034,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 2038,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 2043,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2053,
    "end": 2058
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "yield",
    "start": 2066,
    "end": 2071
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2079,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 2083,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 2088,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2098,
    "end": 2104
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2105,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2114,
    "end": 2120
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 2121,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2129,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Identifier",
    "value": "g306",
    "start": 2139,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2188,
    "end": 2193
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 2197,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2204,
    "end": 2209
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2217,
    "end": 2223
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2224,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2233,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Identifier",
    "value": "g307",
    "start": 2243,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2286,
    "end": 2291
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2299,
    "end": 2304
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Keyword",
    "value": "return",
    "start": 2312,
    "end": 2318
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2325,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "g308",
    "start": 2335,
    "end": 2339
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2377,
    "end": 2382
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2390,
    "end": 2395
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2403,
    "end": 2409
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2416,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Identifier",
    "value": "g309",
    "start": 2426,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2444,
    "end": 2445
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2446,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2449,
    "end": 2450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2480,
    "end": 2485
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2486,
    "end": 2487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2487,
    "end": 2488
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2493,
    "end": 2498
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2506,
    "end": 2512
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2513,
    "end": 2514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2519,
    "end": 2527
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Identifier",
    "value": "g310",
    "start": 2529,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2607,
    "end": 2612
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2613,
    "end": 2614
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2614,
    "end": 2615
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2616,
    "end": 2617
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2618,
    "end": 2619
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2619,
    "end": 2620
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2621,
    "end": 2622
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2623,
    "end": 2624
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2626,
    "end": 2627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2628,
    "end": 2629
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2630,
    "end": 2635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2635,
    "end": 2636
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2637,
    "end": 2638
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2640,
    "end": 2648
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Identifier",
    "value": "g311",
    "start": 2650,
    "end": 2654
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2654,
    "end": 2655
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2698,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2703,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2706,
    "end": 2714
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2714,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2722,
    "end": 2727
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2729,
    "end": 2730
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2731,
    "end": 2737
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2738,
    "end": 2739
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2740,
    "end": 2745
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2745,
    "end": 2746
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2749,
    "end": 2750
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2751,
    "end": 2752
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2752,
    "end": 2753
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2754,
    "end": 2755
  }
]
```
