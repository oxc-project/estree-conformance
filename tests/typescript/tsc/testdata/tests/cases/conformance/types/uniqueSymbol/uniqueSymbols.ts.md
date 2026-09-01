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
            "name": "constCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 53
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 62
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 56,
            "end": 64
          },
          "definite": false,
          "start": 44,
          "end": 64
        }
      ],
      "declare": false,
      "start": 38,
      "end": 65
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
            "name": "letCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 77
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 86
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 80,
            "end": 88
          },
          "definite": false,
          "start": 70,
          "end": 88
        }
      ],
      "declare": false,
      "start": 66,
      "end": 89
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
            "name": "varCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 101
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 110
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 104,
            "end": 112
          },
          "definite": false,
          "start": 94,
          "end": 112
        }
      ],
      "declare": false,
      "start": 90,
      "end": 113
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
            "name": "constType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 180,
                  "end": 186
                },
                "start": 173,
                "end": 186
              },
              "start": 171,
              "end": 186
            },
            "start": 162,
            "end": 186
          },
          "init": null,
          "definite": false,
          "start": 162,
          "end": 186
        }
      ],
      "declare": true,
      "start": 148,
      "end": 187
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
            "name": "constTypeAndCall",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 266,
                  "end": 272
                },
                "start": 259,
                "end": 272
              },
              "start": 257,
              "end": 272
            },
            "start": 241,
            "end": 272
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 275,
              "end": 281
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 275,
            "end": 283
          },
          "definite": false,
          "start": 241,
          "end": 283
        }
      ],
      "declare": false,
      "start": 235,
      "end": 284
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
            "name": "constInitToConstCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 324,
            "end": 344
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "constCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 347,
            "end": 356
          },
          "definite": false,
          "start": 324,
          "end": 356
        }
      ],
      "declare": false,
      "start": 318,
      "end": 357
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
            "name": "constInitToLetCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 364,
            "end": 382
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "letCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 385,
            "end": 392
          },
          "definite": false,
          "start": 364,
          "end": 392
        }
      ],
      "declare": false,
      "start": 358,
      "end": 393
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
            "name": "constInitToVarCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 400,
            "end": 418
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "varCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 421,
            "end": 428
          },
          "definite": false,
          "start": 400,
          "end": 428
        }
      ],
      "declare": false,
      "start": 394,
      "end": 429
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
            "name": "constInitToConstDeclAmbient",
            "optional": false,
            "typeAnnotation": null,
            "start": 436,
            "end": 463
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "constType",
            "optional": false,
            "typeAnnotation": null,
            "start": 466,
            "end": 475
          },
          "definite": false,
          "start": 436,
          "end": 475
        }
      ],
      "declare": false,
      "start": 430,
      "end": 476
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
            "name": "letInitToConstCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 481,
            "end": 499
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "constCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 502,
            "end": 511
          },
          "definite": false,
          "start": 481,
          "end": 511
        }
      ],
      "declare": false,
      "start": 477,
      "end": 512
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
            "name": "letInitToLetCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 517,
            "end": 533
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "letCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 536,
            "end": 543
          },
          "definite": false,
          "start": 517,
          "end": 543
        }
      ],
      "declare": false,
      "start": 513,
      "end": 544
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
            "name": "letInitToVarCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 549,
            "end": 565
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "varCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 568,
            "end": 575
          },
          "definite": false,
          "start": 549,
          "end": 575
        }
      ],
      "declare": false,
      "start": 545,
      "end": 576
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
            "name": "letInitToConstDeclAmbient",
            "optional": false,
            "typeAnnotation": null,
            "start": 581,
            "end": 606
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "constType",
            "optional": false,
            "typeAnnotation": null,
            "start": 609,
            "end": 618
          },
          "definite": false,
          "start": 581,
          "end": 618
        }
      ],
      "declare": false,
      "start": 577,
      "end": 619
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
            "name": "varInitToConstCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 624,
            "end": 642
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "constCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 645,
            "end": 654
          },
          "definite": false,
          "start": 624,
          "end": 654
        }
      ],
      "declare": false,
      "start": 620,
      "end": 655
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
            "name": "varInitToLetCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 660,
            "end": 676
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "letCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 679,
            "end": 686
          },
          "definite": false,
          "start": 660,
          "end": 686
        }
      ],
      "declare": false,
      "start": 656,
      "end": 687
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
            "name": "varInitToVarCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 692,
            "end": 708
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "varCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 711,
            "end": 718
          },
          "definite": false,
          "start": 692,
          "end": 718
        }
      ],
      "declare": false,
      "start": 688,
      "end": 719
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
            "name": "varInitToConstDeclAmbient",
            "optional": false,
            "typeAnnotation": null,
            "start": 724,
            "end": 749
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "constType",
            "optional": false,
            "typeAnnotation": null,
            "start": 752,
            "end": 761
          },
          "definite": false,
          "start": 724,
          "end": 761
        }
      ],
      "declare": false,
      "start": 720,
      "end": 762
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
            "name": "constInitToConstCallWithTypeQuery",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constCall",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 860,
                  "end": 869
                },
                "typeArguments": null,
                "start": 853,
                "end": 869
              },
              "start": 851,
              "end": 869
            },
            "start": 818,
            "end": 869
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "constCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 872,
            "end": 881
          },
          "definite": false,
          "start": 818,
          "end": 881
        }
      ],
      "declare": false,
      "start": 812,
      "end": 882
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
            "name": "constInitToConstDeclAmbientWithTypeQuery",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 938,
                  "end": 947
                },
                "typeArguments": null,
                "start": 931,
                "end": 947
              },
              "start": 929,
              "end": 947
            },
            "start": 889,
            "end": 947
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "constType",
            "optional": false,
            "typeAnnotation": null,
            "start": 950,
            "end": 959
          },
          "definite": false,
          "start": 889,
          "end": 959
        }
      ],
      "declare": false,
      "start": 883,
      "end": 960
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
            "name": "fromAny",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 1063,
                  "end": 1069
                },
                "start": 1056,
                "end": 1069
              },
              "start": 1054,
              "end": 1069
            },
            "start": 1047,
            "end": 1069
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 1072,
              "end": 1074
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1078,
              "end": 1081
            },
            "start": 1072,
            "end": 1081
          },
          "definite": false,
          "start": 1047,
          "end": 1081
        }
      ],
      "declare": false,
      "start": 1041,
      "end": 1082
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "funcReturnConstCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1122,
        "end": 1141
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "constCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 1153,
              "end": 1162
            },
            "start": 1146,
            "end": 1163
          }
        ],
        "start": 1144,
        "end": 1165
      },
      "expression": false,
      "start": 1113,
      "end": 1165
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "funcReturnLetCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1175,
        "end": 1192
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "letCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 1204,
              "end": 1211
            },
            "start": 1197,
            "end": 1212
          }
        ],
        "start": 1195,
        "end": 1214
      },
      "expression": false,
      "start": 1166,
      "end": 1214
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "funcReturnVarCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1224,
        "end": 1241
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "varCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 1253,
              "end": 1260
            },
            "start": 1246,
            "end": 1261
          }
        ],
        "start": 1244,
        "end": 1263
      },
      "expression": false,
      "start": 1215,
      "end": 1263
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "funcReturnConstCallWithTypeQuery",
        "optional": false,
        "typeAnnotation": null,
        "start": 1315,
        "end": 1347
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "constCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 1358,
            "end": 1367
          },
          "typeArguments": null,
          "start": 1351,
          "end": 1367
        },
        "start": 1349,
        "end": 1367
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "constCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 1377,
              "end": 1386
            },
            "start": 1370,
            "end": 1387
          }
        ],
        "start": 1368,
        "end": 1389
      },
      "expression": false,
      "start": 1306,
      "end": 1389
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genFuncYieldConstCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1439,
        "end": 1460
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
                "name": "constCall",
                "optional": false,
                "typeAnnotation": null,
                "start": 1471,
                "end": 1480
              },
              "start": 1465,
              "end": 1480
            },
            "directive": null,
            "start": 1465,
            "end": 1481
          }
        ],
        "start": 1463,
        "end": 1483
      },
      "expression": false,
      "start": 1429,
      "end": 1483
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genFuncYieldLetCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1494,
        "end": 1513
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
                "name": "letCall",
                "optional": false,
                "typeAnnotation": null,
                "start": 1524,
                "end": 1531
              },
              "start": 1518,
              "end": 1531
            },
            "directive": null,
            "start": 1518,
            "end": 1532
          }
        ],
        "start": 1516,
        "end": 1534
      },
      "expression": false,
      "start": 1484,
      "end": 1534
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genFuncYieldVarCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1545,
        "end": 1564
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
                "name": "varCall",
                "optional": false,
                "typeAnnotation": null,
                "start": 1575,
                "end": 1582
              },
              "start": 1569,
              "end": 1582
            },
            "directive": null,
            "start": 1569,
            "end": 1583
          }
        ],
        "start": 1567,
        "end": 1585
      },
      "expression": false,
      "start": 1535,
      "end": 1585
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genFuncYieldConstCallWithTypeQuery",
        "optional": false,
        "typeAnnotation": null,
        "start": 1648,
        "end": 1682
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IterableIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 1686,
            "end": 1702
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constCall",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1710,
                  "end": 1719
                },
                "typeArguments": null,
                "start": 1703,
                "end": 1719
              }
            ],
            "start": 1702,
            "end": 1720
          },
          "start": 1686,
          "end": 1720
        },
        "start": 1684,
        "end": 1720
      },
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
                "name": "constCall",
                "optional": false,
                "typeAnnotation": null,
                "start": 1729,
                "end": 1738
              },
              "start": 1723,
              "end": 1738
            },
            "directive": null,
            "start": 1723,
            "end": 1739
          }
        ],
        "start": 1721,
        "end": 1741
      },
      "expression": false,
      "start": 1638,
      "end": 1741
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asyncFuncReturnConstCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1793,
        "end": 1817
      },
      "generator": false,
      "async": true,
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
              "name": "constCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 1829,
              "end": 1838
            },
            "start": 1822,
            "end": 1839
          }
        ],
        "start": 1820,
        "end": 1841
      },
      "expression": false,
      "start": 1778,
      "end": 1841
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asyncFuncReturnLetCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1857,
        "end": 1879
      },
      "generator": false,
      "async": true,
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
              "name": "letCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 1891,
              "end": 1898
            },
            "start": 1884,
            "end": 1899
          }
        ],
        "start": 1882,
        "end": 1901
      },
      "expression": false,
      "start": 1842,
      "end": 1901
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asyncFuncReturnVarCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1917,
        "end": 1939
      },
      "generator": false,
      "async": true,
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
              "name": "varCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 1951,
              "end": 1958
            },
            "start": 1944,
            "end": 1959
          }
        ],
        "start": 1942,
        "end": 1961
      },
      "expression": false,
      "start": 1902,
      "end": 1961
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asyncGenFuncYieldConstCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 2023,
        "end": 2049
      },
      "generator": true,
      "async": true,
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
                "name": "constCall",
                "optional": false,
                "typeAnnotation": null,
                "start": 2060,
                "end": 2069
              },
              "start": 2054,
              "end": 2069
            },
            "directive": null,
            "start": 2054,
            "end": 2070
          }
        ],
        "start": 2052,
        "end": 2072
      },
      "expression": false,
      "start": 2007,
      "end": 2072
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asyncGenFuncYieldLetCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 2089,
        "end": 2113
      },
      "generator": true,
      "async": true,
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
                "name": "letCall",
                "optional": false,
                "typeAnnotation": null,
                "start": 2124,
                "end": 2131
              },
              "start": 2118,
              "end": 2131
            },
            "directive": null,
            "start": 2118,
            "end": 2132
          }
        ],
        "start": 2116,
        "end": 2134
      },
      "expression": false,
      "start": 2073,
      "end": 2134
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asyncGenFuncYieldVarCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 2151,
        "end": 2175
      },
      "generator": true,
      "async": true,
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
                "name": "varCall",
                "optional": false,
                "typeAnnotation": null,
                "start": 2186,
                "end": 2193
              },
              "start": 2180,
              "end": 2193
            },
            "directive": null,
            "start": 2180,
            "end": 2194
          }
        ],
        "start": 2178,
        "end": 2196
      },
      "expression": false,
      "start": 2135,
      "end": 2196
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
        "start": 2215,
        "end": 2216
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
              "name": "readonlyStaticCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 2239,
              "end": 2257
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2260,
                "end": 2266
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2260,
              "end": 2268
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 2223,
            "end": 2269
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyStaticType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2290,
              "end": 2308
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 2317,
                  "end": 2323
                },
                "start": 2310,
                "end": 2323
              },
              "start": 2308,
              "end": 2323
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 2274,
            "end": 2324
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyStaticTypeAndCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 2345,
              "end": 2370
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 2379,
                  "end": 2385
                },
                "start": 2372,
                "end": 2385
              },
              "start": 2370,
              "end": 2385
            },
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2388,
                "end": 2394
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2388,
              "end": 2396
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 2329,
            "end": 2397
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "readwriteStaticCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 2409,
              "end": 2428
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2431,
                "end": 2437
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2431,
              "end": 2439
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2402,
            "end": 2440
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 2455,
              "end": 2467
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2470,
                "end": 2476
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2470,
              "end": 2478
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 2446,
            "end": 2479
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "readwriteCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 2484,
              "end": 2497
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2500,
                "end": 2506
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2500,
              "end": 2508
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2484,
            "end": 2509
          }
        ],
        "start": 2217,
        "end": 2511
      },
      "abstract": false,
      "declare": false,
      "start": 2209,
      "end": 2511
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2529,
                  "end": 2530
                },
                "typeArguments": null,
                "start": 2529,
                "end": 2530
              },
              "start": 2527,
              "end": 2530
            },
            "start": 2526,
            "end": 2530
          },
          "init": null,
          "definite": false,
          "start": 2526,
          "end": 2530
        }
      ],
      "declare": true,
      "start": 2512,
      "end": 2531
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
            "name": "constInitToCReadonlyStaticCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 2539,
            "end": 2569
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2572,
              "end": 2573
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyStaticCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 2574,
              "end": 2592
            },
            "optional": false,
            "computed": false,
            "start": 2572,
            "end": 2592
          },
          "definite": false,
          "start": 2539,
          "end": 2592
        }
      ],
      "declare": false,
      "start": 2533,
      "end": 2593
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
            "name": "constInitToCReadonlyStaticType",
            "optional": false,
            "typeAnnotation": null,
            "start": 2600,
            "end": 2630
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2633,
              "end": 2634
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyStaticType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2635,
              "end": 2653
            },
            "optional": false,
            "computed": false,
            "start": 2633,
            "end": 2653
          },
          "definite": false,
          "start": 2600,
          "end": 2653
        }
      ],
      "declare": false,
      "start": 2594,
      "end": 2654
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
            "name": "constInitToCReadonlyStaticTypeAndCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 2661,
            "end": 2698
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2701,
              "end": 2702
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyStaticTypeAndCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 2703,
              "end": 2728
            },
            "optional": false,
            "computed": false,
            "start": 2701,
            "end": 2728
          },
          "definite": false,
          "start": 2661,
          "end": 2728
        }
      ],
      "declare": false,
      "start": 2655,
      "end": 2729
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
            "name": "constInitToCReadwriteStaticCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 2736,
            "end": 2767
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2770,
              "end": 2771
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readwriteStaticCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 2772,
              "end": 2791
            },
            "optional": false,
            "computed": false,
            "start": 2770,
            "end": 2791
          },
          "definite": false,
          "start": 2736,
          "end": 2791
        }
      ],
      "declare": false,
      "start": 2730,
      "end": 2792
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
            "name": "constInitToCReadonlyStaticCallWithTypeQuery",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2852,
                    "end": 2853
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "readonlyStaticCall",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2854,
                    "end": 2872
                  },
                  "start": 2852,
                  "end": 2872
                },
                "typeArguments": null,
                "start": 2845,
                "end": 2872
              },
              "start": 2843,
              "end": 2872
            },
            "start": 2800,
            "end": 2872
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2875,
              "end": 2876
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyStaticCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 2877,
              "end": 2895
            },
            "optional": false,
            "computed": false,
            "start": 2875,
            "end": 2895
          },
          "definite": false,
          "start": 2800,
          "end": 2895
        }
      ],
      "declare": false,
      "start": 2794,
      "end": 2896
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
            "name": "constInitToCReadonlyStaticTypeWithTypeQuery",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2955,
                    "end": 2956
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "readonlyStaticType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2957,
                    "end": 2975
                  },
                  "start": 2955,
                  "end": 2975
                },
                "typeArguments": null,
                "start": 2948,
                "end": 2975
              },
              "start": 2946,
              "end": 2975
            },
            "start": 2903,
            "end": 2975
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2978,
              "end": 2979
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyStaticType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2980,
              "end": 2998
            },
            "optional": false,
            "computed": false,
            "start": 2978,
            "end": 2998
          },
          "definite": false,
          "start": 2903,
          "end": 2998
        }
      ],
      "declare": false,
      "start": 2897,
      "end": 2999
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
            "name": "constInitToCReadonlyStaticTypeAndCallWithTypeQuery",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3065,
                    "end": 3066
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "readonlyStaticTypeAndCall",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3067,
                    "end": 3092
                  },
                  "start": 3065,
                  "end": 3092
                },
                "typeArguments": null,
                "start": 3058,
                "end": 3092
              },
              "start": 3056,
              "end": 3092
            },
            "start": 3006,
            "end": 3092
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 3095,
              "end": 3096
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyStaticTypeAndCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 3097,
              "end": 3122
            },
            "optional": false,
            "computed": false,
            "start": 3095,
            "end": 3122
          },
          "definite": false,
          "start": 3006,
          "end": 3122
        }
      ],
      "declare": false,
      "start": 3000,
      "end": 3123
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
            "name": "constInitToCReadwriteStaticCallWithTypeQuery",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3183,
                    "end": 3184
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "readwriteStaticCall",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3185,
                    "end": 3204
                  },
                  "start": 3183,
                  "end": 3204
                },
                "typeArguments": null,
                "start": 3176,
                "end": 3204
              },
              "start": 3174,
              "end": 3204
            },
            "start": 3130,
            "end": 3204
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 3207,
              "end": 3208
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readwriteStaticCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 3209,
              "end": 3228
            },
            "optional": false,
            "computed": false,
            "start": 3207,
            "end": 3228
          },
          "definite": false,
          "start": 3130,
          "end": 3228
        }
      ],
      "declare": false,
      "start": 3124,
      "end": 3229
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
            "name": "constInitToCReadonlyCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 3237,
            "end": 3261
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 3264,
              "end": 3265
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 3266,
              "end": 3278
            },
            "optional": false,
            "computed": false,
            "start": 3264,
            "end": 3278
          },
          "definite": false,
          "start": 3237,
          "end": 3278
        }
      ],
      "declare": false,
      "start": 3231,
      "end": 3279
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
            "name": "constInitToCReadwriteCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 3286,
            "end": 3311
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 3314,
              "end": 3315
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readwriteCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 3316,
              "end": 3329
            },
            "optional": false,
            "computed": false,
            "start": 3314,
            "end": 3329
          },
          "definite": false,
          "start": 3286,
          "end": 3329
        }
      ],
      "declare": false,
      "start": 3280,
      "end": 3330
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
            "name": "constInitToCReadonlyCallWithTypeQuery",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3383,
                    "end": 3384
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "readonlyCall",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3385,
                    "end": 3397
                  },
                  "start": 3383,
                  "end": 3397
                },
                "typeArguments": null,
                "start": 3376,
                "end": 3397
              },
              "start": 3374,
              "end": 3397
            },
            "start": 3337,
            "end": 3397
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 3400,
              "end": 3401
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 3402,
              "end": 3414
            },
            "optional": false,
            "computed": false,
            "start": 3400,
            "end": 3414
          },
          "definite": false,
          "start": 3337,
          "end": 3414
        }
      ],
      "declare": false,
      "start": 3331,
      "end": 3415
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
            "name": "constInitToCReadwriteCallWithTypeQuery",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3469,
                    "end": 3470
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "readwriteCall",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3471,
                    "end": 3484
                  },
                  "start": 3469,
                  "end": 3484
                },
                "typeArguments": null,
                "start": 3462,
                "end": 3484
              },
              "start": 3460,
              "end": 3484
            },
            "start": 3422,
            "end": 3484
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 3487,
              "end": 3488
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readwriteCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 3489,
              "end": 3502
            },
            "optional": false,
            "computed": false,
            "start": 3487,
            "end": 3502
          },
          "definite": false,
          "start": 3422,
          "end": 3502
        }
      ],
      "declare": false,
      "start": 3416,
      "end": 3503
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
            "name": "constInitToCReadonlyCallWithIndexedAccess",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3553,
                    "end": 3554
                  },
                  "typeArguments": null,
                  "start": 3553,
                  "end": 3554
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "readonlyCall",
                    "raw": "\"readonlyCall\"",
                    "start": 3555,
                    "end": 3569
                  },
                  "start": 3555,
                  "end": 3569
                },
                "start": 3553,
                "end": 3570
              },
              "start": 3551,
              "end": 3570
            },
            "start": 3510,
            "end": 3570
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 3573,
              "end": 3574
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 3575,
              "end": 3587
            },
            "optional": false,
            "computed": false,
            "start": 3573,
            "end": 3587
          },
          "definite": false,
          "start": 3510,
          "end": 3587
        }
      ],
      "declare": false,
      "start": 3504,
      "end": 3588
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
            "name": "constInitToCReadwriteCallWithIndexedAccess",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3639,
                    "end": 3640
                  },
                  "typeArguments": null,
                  "start": 3639,
                  "end": 3640
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "readwriteCall",
                    "raw": "\"readwriteCall\"",
                    "start": 3641,
                    "end": 3656
                  },
                  "start": 3641,
                  "end": 3656
                },
                "start": 3639,
                "end": 3657
              },
              "start": 3637,
              "end": 3657
            },
            "start": 3595,
            "end": 3657
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 3660,
              "end": 3661
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readwriteCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 3662,
              "end": 3675
            },
            "optional": false,
            "computed": false,
            "start": 3660,
            "end": 3675
          },
          "definite": false,
          "start": 3595,
          "end": 3675
        }
      ],
      "declare": false,
      "start": 3589,
      "end": 3676
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 3702,
        "end": 3703
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 3719,
              "end": 3731
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 3740,
                  "end": 3746
                },
                "start": 3733,
                "end": 3746
              },
              "start": 3731,
              "end": 3746
            },
            "accessibility": null,
            "static": false,
            "start": 3710,
            "end": 3747
          }
        ],
        "start": 3704,
        "end": 3749
      },
      "declare": false,
      "start": 3692,
      "end": 3749
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3767,
                  "end": 3768
                },
                "typeArguments": null,
                "start": 3767,
                "end": 3768
              },
              "start": 3765,
              "end": 3768
            },
            "start": 3764,
            "end": 3768
          },
          "init": null,
          "definite": false,
          "start": 3764,
          "end": 3768
        }
      ],
      "declare": true,
      "start": 3750,
      "end": 3769
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
            "name": "constInitToIReadonlyType",
            "optional": false,
            "typeAnnotation": null,
            "start": 3777,
            "end": 3801
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 3804,
              "end": 3805
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 3806,
              "end": 3818
            },
            "optional": false,
            "computed": false,
            "start": 3804,
            "end": 3818
          },
          "definite": false,
          "start": 3777,
          "end": 3818
        }
      ],
      "declare": false,
      "start": 3771,
      "end": 3819
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
            "name": "constInitToIReadonlyTypeWithTypeQuery",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3872,
                    "end": 3873
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "readonlyType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3874,
                    "end": 3886
                  },
                  "start": 3872,
                  "end": 3886
                },
                "typeArguments": null,
                "start": 3865,
                "end": 3886
              },
              "start": 3863,
              "end": 3886
            },
            "start": 3826,
            "end": 3886
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 3889,
              "end": 3890
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 3891,
              "end": 3903
            },
            "optional": false,
            "computed": false,
            "start": 3889,
            "end": 3903
          },
          "definite": false,
          "start": 3826,
          "end": 3903
        }
      ],
      "declare": false,
      "start": 3820,
      "end": 3904
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
            "name": "constInitToIReadonlyTypeWithIndexedAccess",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3954,
                    "end": 3955
                  },
                  "typeArguments": null,
                  "start": 3954,
                  "end": 3955
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "readonlyType",
                    "raw": "\"readonlyType\"",
                    "start": 3956,
                    "end": 3970
                  },
                  "start": 3956,
                  "end": 3970
                },
                "start": 3954,
                "end": 3971
              },
              "start": 3952,
              "end": 3971
            },
            "start": 3911,
            "end": 3971
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 3974,
              "end": 3975
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 3976,
              "end": 3988
            },
            "optional": false,
            "computed": false,
            "start": 3974,
            "end": 3988
          },
          "definite": false,
          "start": 3911,
          "end": 3988
        }
      ],
      "declare": false,
      "start": 3905,
      "end": 3989
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "L",
        "optional": false,
        "typeAnnotation": null,
        "start": 4013,
        "end": 4014
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 4032,
              "end": 4044
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 4053,
                  "end": 4059
                },
                "start": 4046,
                "end": 4059
              },
              "start": 4044,
              "end": 4059
            },
            "accessibility": null,
            "static": false,
            "start": 4023,
            "end": 4060
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 4065,
              "end": 4071
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "readonlyNestedType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4092,
                      "end": 4110
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeOperator",
                        "operator": "unique",
                        "typeAnnotation": {
                          "type": "TSSymbolKeyword",
                          "start": 4119,
                          "end": 4125
                        },
                        "start": 4112,
                        "end": 4125
                      },
                      "start": 4110,
                      "end": 4125
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4083,
                    "end": 4126
                  }
                ],
                "start": 4073,
                "end": 4132
              },
              "start": 4071,
              "end": 4132
            },
            "accessibility": null,
            "static": false,
            "start": 4065,
            "end": 4132
          }
        ],
        "start": 4017,
        "end": 4134
      },
      "declare": false,
      "start": 4008,
      "end": 4135
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
            "name": "l",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "L",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4153,
                  "end": 4154
                },
                "typeArguments": null,
                "start": 4153,
                "end": 4154
              },
              "start": 4151,
              "end": 4154
            },
            "start": 4150,
            "end": 4154
          },
          "init": null,
          "definite": false,
          "start": 4150,
          "end": 4154
        }
      ],
      "declare": true,
      "start": 4136,
      "end": 4155
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
            "name": "constInitToLReadonlyType",
            "optional": false,
            "typeAnnotation": null,
            "start": 4163,
            "end": 4187
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "l",
              "optional": false,
              "typeAnnotation": null,
              "start": 4190,
              "end": 4191
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 4192,
              "end": 4204
            },
            "optional": false,
            "computed": false,
            "start": 4190,
            "end": 4204
          },
          "definite": false,
          "start": 4163,
          "end": 4204
        }
      ],
      "declare": false,
      "start": 4157,
      "end": 4205
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
            "name": "constInitToLReadonlyNestedType",
            "optional": false,
            "typeAnnotation": null,
            "start": 4212,
            "end": 4242
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 4245,
                "end": 4246
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 4247,
                "end": 4253
              },
              "optional": false,
              "computed": false,
              "start": 4245,
              "end": 4253
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyNestedType",
              "optional": false,
              "typeAnnotation": null,
              "start": 4254,
              "end": 4272
            },
            "optional": false,
            "computed": false,
            "start": 4245,
            "end": 4272
          },
          "definite": false,
          "start": 4212,
          "end": 4272
        }
      ],
      "declare": false,
      "start": 4206,
      "end": 4273
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
            "name": "constInitToLReadonlyTypeWithTypeQuery",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4326,
                    "end": 4327
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "readonlyType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4328,
                    "end": 4340
                  },
                  "start": 4326,
                  "end": 4340
                },
                "typeArguments": null,
                "start": 4319,
                "end": 4340
              },
              "start": 4317,
              "end": 4340
            },
            "start": 4280,
            "end": 4340
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "l",
              "optional": false,
              "typeAnnotation": null,
              "start": 4343,
              "end": 4344
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 4345,
              "end": 4357
            },
            "optional": false,
            "computed": false,
            "start": 4343,
            "end": 4357
          },
          "definite": false,
          "start": 4280,
          "end": 4357
        }
      ],
      "declare": false,
      "start": 4274,
      "end": 4358
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
            "name": "constInitToLReadonlyNestedTypeWithTypeQuery",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4417,
                      "end": 4418
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4419,
                      "end": 4425
                    },
                    "start": 4417,
                    "end": 4425
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "readonlyNestedType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4426,
                    "end": 4444
                  },
                  "start": 4417,
                  "end": 4444
                },
                "typeArguments": null,
                "start": 4410,
                "end": 4444
              },
              "start": 4408,
              "end": 4444
            },
            "start": 4365,
            "end": 4444
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 4447,
                "end": 4448
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 4449,
                "end": 4455
              },
              "optional": false,
              "computed": false,
              "start": 4447,
              "end": 4455
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyNestedType",
              "optional": false,
              "typeAnnotation": null,
              "start": 4456,
              "end": 4474
            },
            "optional": false,
            "computed": false,
            "start": 4447,
            "end": 4474
          },
          "definite": false,
          "start": 4365,
          "end": 4474
        }
      ],
      "declare": false,
      "start": 4359,
      "end": 4475
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
            "name": "constInitToLReadonlyTypeWithIndexedAccess",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "L",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4525,
                    "end": 4526
                  },
                  "typeArguments": null,
                  "start": 4525,
                  "end": 4526
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "readonlyType",
                    "raw": "\"readonlyType\"",
                    "start": 4527,
                    "end": 4541
                  },
                  "start": 4527,
                  "end": 4541
                },
                "start": 4525,
                "end": 4542
              },
              "start": 4523,
              "end": 4542
            },
            "start": 4482,
            "end": 4542
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "l",
              "optional": false,
              "typeAnnotation": null,
              "start": 4545,
              "end": 4546
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 4547,
              "end": 4559
            },
            "optional": false,
            "computed": false,
            "start": 4545,
            "end": 4559
          },
          "definite": false,
          "start": 4482,
          "end": 4559
        }
      ],
      "declare": false,
      "start": 4476,
      "end": 4560
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
            "name": "constInitToLReadonlyNestedTypeWithIndexedAccess",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "L",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4616,
                      "end": 4617
                    },
                    "typeArguments": null,
                    "start": 4616,
                    "end": 4617
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "nested",
                      "raw": "\"nested\"",
                      "start": 4618,
                      "end": 4626
                    },
                    "start": 4618,
                    "end": 4626
                  },
                  "start": 4616,
                  "end": 4627
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "readonlyNestedType",
                    "raw": "\"readonlyNestedType\"",
                    "start": 4628,
                    "end": 4648
                  },
                  "start": 4628,
                  "end": 4648
                },
                "start": 4616,
                "end": 4649
              },
              "start": 4614,
              "end": 4649
            },
            "start": 4567,
            "end": 4649
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 4652,
                "end": 4653
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 4654,
                "end": 4660
              },
              "optional": false,
              "computed": false,
              "start": 4652,
              "end": 4660
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyNestedType",
              "optional": false,
              "typeAnnotation": null,
              "start": 4661,
              "end": 4679
            },
            "optional": false,
            "computed": false,
            "start": 4652,
            "end": 4679
          },
          "definite": false,
          "start": 4567,
          "end": 4679
        }
      ],
      "declare": false,
      "start": 4561,
      "end": 4680
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
            "name": "promiseForConstCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 4715,
            "end": 4734
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 4737,
                "end": 4744
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 4745,
                "end": 4752
              },
              "optional": false,
              "computed": false,
              "start": 4737,
              "end": 4752
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "constCall",
                "optional": false,
                "typeAnnotation": null,
                "start": 4753,
                "end": 4762
              }
            ],
            "optional": false,
            "start": 4737,
            "end": 4763
          },
          "definite": false,
          "start": 4715,
          "end": 4763
        }
      ],
      "declare": false,
      "start": 4709,
      "end": 4764
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
            "name": "arrayOfConstCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 4771,
            "end": 4787
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "constCall",
                "optional": false,
                "typeAnnotation": null,
                "start": 4791,
                "end": 4800
              }
            ],
            "start": 4790,
            "end": 4801
          },
          "definite": false,
          "start": 4771,
          "end": 4801
        }
      ],
      "declare": false,
      "start": 4765,
      "end": 4802
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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 4869,
                  "end": 4875
                },
                "start": 4862,
                "end": 4875
              },
              "start": 4860,
              "end": 4875
            },
            "start": 4859,
            "end": 4875
          },
          "init": null,
          "definite": false,
          "start": 4859,
          "end": 4875
        }
      ],
      "declare": true,
      "start": 4845,
      "end": 4876
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 4895,
        "end": 4896
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 4915,
                        "end": 4921
                      },
                      "start": 4908,
                      "end": 4921
                    },
                    "start": 4906,
                    "end": 4921
                  },
                  "start": 4905,
                  "end": 4921
                },
                "init": null,
                "definite": false,
                "start": 4905,
                "end": 4921
              }
            ],
            "declare": false,
            "start": 4899,
            "end": 4922
          }
        ],
        "start": 4897,
        "end": 4924
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 4877,
      "end": 4924
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
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": true,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4945,
                      "end": 4946
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 4949,
                          "end": 4952
                        },
                        "start": 4949,
                        "end": 4952
                      },
                      "start": 4947,
                      "end": 4952
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4944,
                    "end": 4953
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": true,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4955,
                        "end": 4956
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4957,
                        "end": 4958
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4955,
                      "end": 4958
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "b",
                          "raw": "\"b\"",
                          "start": 4961,
                          "end": 4964
                        },
                        "start": 4961,
                        "end": 4964
                      },
                      "start": 4959,
                      "end": 4964
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4954,
                    "end": 4964
                  }
                ],
                "start": 4942,
                "end": 4966
              },
              "start": 4940,
              "end": 4966
            },
            "start": 4939,
            "end": 4966
          },
          "init": null,
          "definite": false,
          "start": 4939,
          "end": 4966
        }
      ],
      "declare": true,
      "start": 4925,
      "end": 4967
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 4985,
        "end": 4986
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
              "start": 4987,
              "end": 4988
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4987,
            "end": 4988
          }
        ],
        "start": 4986,
        "end": 4989
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
                "start": 4993,
                "end": 4994
              },
              "typeArguments": null,
              "start": 4993,
              "end": 4994
            },
            "start": 4991,
            "end": 4994
          },
          "start": 4990,
          "end": 4994
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
            "start": 4997,
            "end": 4998
          },
          "typeArguments": null,
          "start": 4997,
          "end": 4998
        },
        "start": 4995,
        "end": 4998
      },
      "body": null,
      "expression": false,
      "start": 4968,
      "end": 4999
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 5017,
        "end": 5018
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 5029,
                "end": 5030
              },
              "typeArguments": null,
              "start": 5022,
              "end": 5030
            },
            "start": 5020,
            "end": 5030
          },
          "start": 5019,
          "end": 5030
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 5033,
          "end": 5037
        },
        "start": 5031,
        "end": 5037
      },
      "body": null,
      "expression": false,
      "start": 5000,
      "end": 5038
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 5056,
        "end": 5057
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5068,
                  "end": 5069
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5070,
                  "end": 5071
                },
                "start": 5068,
                "end": 5071
              },
              "typeArguments": null,
              "start": 5061,
              "end": 5071
            },
            "start": 5059,
            "end": 5071
          },
          "start": 5058,
          "end": 5071
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 5074,
          "end": 5078
        },
        "start": 5072,
        "end": 5078
      },
      "body": null,
      "expression": false,
      "start": 5039,
      "end": 5079
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 5126,
          "end": 5127
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 5128,
            "end": 5129
          }
        ],
        "optional": false,
        "start": 5126,
        "end": 5130
      },
      "directive": null,
      "start": 5126,
      "end": 5131
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 5132,
          "end": 5133
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 5134,
              "end": 5135
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 5136,
              "end": 5137
            },
            "optional": false,
            "computed": false,
            "start": 5134,
            "end": 5137
          }
        ],
        "optional": false,
        "start": 5132,
        "end": 5138
      },
      "directive": null,
      "start": 5132,
      "end": 5139
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 5140,
          "end": 5141
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 5142,
              "end": 5143
            },
            "property": {
              "type": "Literal",
              "value": "s",
              "raw": "\"s\"",
              "start": 5144,
              "end": 5147
            },
            "optional": false,
            "computed": true,
            "start": 5142,
            "end": 5148
          }
        ],
        "optional": false,
        "start": 5140,
        "end": 5149
      },
      "directive": null,
      "start": 5140,
      "end": 5150
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 5179,
            "end": 5180
          }
        ],
        "start": 5178,
        "end": 5181
      },
      "directive": null,
      "start": 5178,
      "end": 5182
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 5184,
              "end": 5185
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 5186,
              "end": 5187
            },
            "optional": false,
            "computed": false,
            "start": 5184,
            "end": 5187
          }
        ],
        "start": 5183,
        "end": 5188
      },
      "directive": null,
      "start": 5183,
      "end": 5189
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 5191,
              "end": 5192
            },
            "property": {
              "type": "Literal",
              "value": "s",
              "raw": "\"s\"",
              "start": 5193,
              "end": 5196
            },
            "optional": false,
            "computed": true,
            "start": 5191,
            "end": 5197
          }
        ],
        "start": 5190,
        "end": 5198
      },
      "directive": null,
      "start": 5190,
      "end": 5199
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5239,
            "end": 5241
          },
          "init": {
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
                  "start": 5250,
                  "end": 5251
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5253,
                  "end": 5254
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5250,
                "end": 5254
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
                  "start": 5260,
                  "end": 5261
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5263,
                    "end": 5264
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5265,
                    "end": 5266
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5263,
                  "end": 5266
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5260,
                "end": 5266
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5272,
                  "end": 5273
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5275,
                    "end": 5276
                  },
                  "property": {
                    "type": "Literal",
                    "value": "s",
                    "raw": "\"s\"",
                    "start": 5277,
                    "end": 5280
                  },
                  "optional": false,
                  "computed": true,
                  "start": 5275,
                  "end": 5281
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5272,
                "end": 5281
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5288,
                  "end": 5295
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5307,
                          "end": 5308
                        },
                        "start": 5300,
                        "end": 5309
                      }
                    ],
                    "start": 5298,
                    "end": 5311
                  },
                  "expression": false,
                  "start": 5295,
                  "end": 5311
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5288,
                "end": 5311
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5323,
                  "end": 5330
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": true,
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
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5342,
                          "end": 5343
                        },
                        "start": 5335,
                        "end": 5344
                      }
                    ],
                    "start": 5333,
                    "end": 5346
                  },
                  "expression": false,
                  "start": 5330,
                  "end": 5346
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5317,
                "end": 5346
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5360,
                  "end": 5367
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": true,
                  "async": true,
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
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5378,
                            "end": 5379
                          },
                          "start": 5372,
                          "end": 5379
                        },
                        "directive": null,
                        "start": 5372,
                        "end": 5380
                      }
                    ],
                    "start": 5370,
                    "end": 5382
                  },
                  "expression": false,
                  "start": 5367,
                  "end": 5382
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5352,
                "end": 5382
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5390,
                  "end": 5397
                },
                "value": {
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "YieldExpression",
                          "delegate": false,
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5408,
                            "end": 5409
                          },
                          "start": 5402,
                          "end": 5409
                        },
                        "directive": null,
                        "start": 5402,
                        "end": 5410
                      }
                    ],
                    "start": 5400,
                    "end": 5412
                  },
                  "expression": false,
                  "start": 5397,
                  "end": 5412
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5388,
                "end": 5412
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5418,
                  "end": 5425
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
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5426,
                        "end": 5427
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5430,
                        "end": 5431
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5426,
                      "end": 5431
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5442,
                          "end": 5443
                        },
                        "start": 5435,
                        "end": 5444
                      }
                    ],
                    "start": 5433,
                    "end": 5446
                  },
                  "expression": false,
                  "start": 5425,
                  "end": 5446
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5418,
                "end": 5446
              }
            ],
            "start": 5244,
            "end": 5449
          },
          "definite": false,
          "start": 5239,
          "end": 5449
        }
      ],
      "declare": false,
      "start": 5233,
      "end": 5450
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C0",
        "optional": false,
        "typeAnnotation": null,
        "start": 5483,
        "end": 5485
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
              "start": 5508,
              "end": 5509
            },
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 5512,
              "end": 5513
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 5492,
            "end": 5514
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
              "start": 5535,
              "end": 5536
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 5539,
                "end": 5540
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 5541,
                "end": 5542
              },
              "optional": false,
              "computed": false,
              "start": 5539,
              "end": 5542
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 5519,
            "end": 5543
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 5564,
              "end": 5565
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 5568,
                "end": 5569
              },
              "property": {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 5570,
                "end": 5573
              },
              "optional": false,
              "computed": true,
              "start": 5568,
              "end": 5574
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 5548,
            "end": 5575
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 5588,
              "end": 5589
            },
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 5592,
              "end": 5593
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 5581,
            "end": 5594
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 5606,
              "end": 5607
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 5610,
                "end": 5611
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 5612,
                "end": 5613
              },
              "optional": false,
              "computed": false,
              "start": 5610,
              "end": 5613
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 5599,
            "end": 5614
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 5626,
              "end": 5627
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 5630,
                "end": 5631
              },
              "property": {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 5632,
                "end": 5635
              },
              "optional": false,
              "computed": true,
              "start": 5630,
              "end": 5636
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 5619,
            "end": 5637
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
              "start": 5652,
              "end": 5653
            },
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 5656,
              "end": 5657
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 5643,
            "end": 5658
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
              "start": 5672,
              "end": 5673
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 5676,
                "end": 5677
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 5678,
                "end": 5679
              },
              "optional": false,
              "computed": false,
              "start": 5676,
              "end": 5679
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 5663,
            "end": 5680
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 5694,
              "end": 5695
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 5698,
                "end": 5699
              },
              "property": {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 5700,
                "end": 5703
              },
              "optional": false,
              "computed": true,
              "start": 5698,
              "end": 5704
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 5685,
            "end": 5705
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 5711,
              "end": 5712
            },
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 5715,
              "end": 5716
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 5711,
            "end": 5717
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 5722,
              "end": 5723
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 5726,
                "end": 5727
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 5728,
                "end": 5729
              },
              "optional": false,
              "computed": false,
              "start": 5726,
              "end": 5729
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 5722,
            "end": 5730
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 5735,
              "end": 5736
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 5739,
                "end": 5740
              },
              "property": {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 5741,
                "end": 5744
              },
              "optional": false,
              "computed": true,
              "start": 5739,
              "end": 5745
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 5735,
            "end": 5746
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null,
              "start": 5752,
              "end": 5759
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5771,
                      "end": 5772
                    },
                    "start": 5764,
                    "end": 5773
                  }
                ],
                "start": 5762,
                "end": 5775
              },
              "expression": false,
              "start": 5759,
              "end": 5775
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5752,
            "end": 5775
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5786,
              "end": 5793
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": true,
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
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5805,
                      "end": 5806
                    },
                    "start": 5798,
                    "end": 5807
                  }
                ],
                "start": 5796,
                "end": 5809
              },
              "expression": false,
              "start": 5793,
              "end": 5809
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5780,
            "end": 5809
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method3",
              "optional": false,
              "typeAnnotation": null,
              "start": 5822,
              "end": 5829
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": true,
              "async": true,
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5840,
                        "end": 5841
                      },
                      "start": 5834,
                      "end": 5841
                    },
                    "directive": null,
                    "start": 5834,
                    "end": 5842
                  }
                ],
                "start": 5832,
                "end": 5844
              },
              "expression": false,
              "start": 5829,
              "end": 5844
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5814,
            "end": 5844
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method4",
              "optional": false,
              "typeAnnotation": null,
              "start": 5851,
              "end": 5858
            },
            "value": {
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "YieldExpression",
                      "delegate": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5869,
                        "end": 5870
                      },
                      "start": 5863,
                      "end": 5870
                    },
                    "directive": null,
                    "start": 5863,
                    "end": 5871
                  }
                ],
                "start": 5861,
                "end": 5873
              },
              "expression": false,
              "start": 5858,
              "end": 5873
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5849,
            "end": 5873
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method5",
              "optional": false,
              "typeAnnotation": null,
              "start": 5878,
              "end": 5885
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5886,
                    "end": 5887
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5890,
                    "end": 5891
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5886,
                  "end": 5891
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
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5902,
                      "end": 5903
                    },
                    "start": 5895,
                    "end": 5904
                  }
                ],
                "start": 5893,
                "end": 5906
              },
              "expression": false,
              "start": 5885,
              "end": 5906
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5878,
            "end": 5906
          }
        ],
        "start": 5486,
        "end": 5908
      },
      "abstract": false,
      "declare": false,
      "start": 5477,
      "end": 5908
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 5955,
          "end": 5956
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 5957,
          "end": 5958
        },
        "optional": false,
        "computed": true,
        "start": 5955,
        "end": 5959
      },
      "directive": null,
      "start": 5955,
      "end": 5960
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 5961,
          "end": 5962
        },
        "property": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 5963,
            "end": 5964
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 5965,
            "end": 5966
          },
          "optional": false,
          "computed": false,
          "start": 5963,
          "end": 5966
        },
        "optional": false,
        "computed": true,
        "start": 5961,
        "end": 5967
      },
      "directive": null,
      "start": 5961,
      "end": 5968
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 5969,
          "end": 5970
        },
        "property": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 5971,
            "end": 5972
          },
          "property": {
            "type": "Literal",
            "value": "s",
            "raw": "\"s\"",
            "start": 5973,
            "end": 5976
          },
          "optional": false,
          "computed": true,
          "start": 5971,
          "end": 5977
        },
        "optional": false,
        "computed": true,
        "start": 5969,
        "end": 5978
      },
      "directive": null,
      "start": 5969,
      "end": 5979
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 6009,
          "end": 6010
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 6018,
                "end": 6019
              },
              "typeArguments": null,
              "start": 6011,
              "end": 6019
            }
          ],
          "start": 6010,
          "end": 6020
        },
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 6021,
            "end": 6022
          }
        ],
        "optional": false,
        "start": 6009,
        "end": 6023
      },
      "directive": null,
      "start": 6009,
      "end": 6024
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 6025,
          "end": 6026
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6034,
                  "end": 6035
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6036,
                  "end": 6037
                },
                "start": 6034,
                "end": 6037
              },
              "typeArguments": null,
              "start": 6027,
              "end": 6037
            }
          ],
          "start": 6026,
          "end": 6038
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 6039,
              "end": 6040
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 6041,
              "end": 6042
            },
            "optional": false,
            "computed": false,
            "start": 6039,
            "end": 6042
          }
        ],
        "optional": false,
        "start": 6025,
        "end": 6043
      },
      "directive": null,
      "start": 6025,
      "end": 6044
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 6045,
          "end": 6046
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6054,
                  "end": 6055
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6056,
                  "end": 6057
                },
                "start": 6054,
                "end": 6057
              },
              "typeArguments": null,
              "start": 6047,
              "end": 6057
            }
          ],
          "start": 6046,
          "end": 6058
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 6059,
              "end": 6060
            },
            "property": {
              "type": "Literal",
              "value": "s",
              "raw": "\"s\"",
              "start": 6061,
              "end": 6064
            },
            "optional": false,
            "computed": true,
            "start": 6059,
            "end": 6065
          }
        ],
        "optional": false,
        "start": 6045,
        "end": 6066
      },
      "directive": null,
      "start": 6045,
      "end": 6067
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 6068,
          "end": 6069
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 6070,
            "end": 6071
          }
        ],
        "optional": false,
        "start": 6068,
        "end": 6072
      },
      "directive": null,
      "start": 6068,
      "end": 6073
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 6074,
          "end": 6075
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 6076,
              "end": 6077
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 6078,
              "end": 6079
            },
            "optional": false,
            "computed": false,
            "start": 6076,
            "end": 6079
          }
        ],
        "optional": false,
        "start": 6074,
        "end": 6080
      },
      "directive": null,
      "start": 6074,
      "end": 6081
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 6082,
          "end": 6083
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 6084,
              "end": 6085
            },
            "property": {
              "type": "Literal",
              "value": "s",
              "raw": "\"s\"",
              "start": 6086,
              "end": 6089
            },
            "optional": false,
            "computed": true,
            "start": 6084,
            "end": 6090
          }
        ],
        "optional": false,
        "start": 6082,
        "end": 6091
      },
      "directive": null,
      "start": 6082,
      "end": 6092
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 6115,
          "end": 6116
        },
        "operator": "||",
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 6120,
          "end": 6122
        },
        "start": 6115,
        "end": 6122
      },
      "directive": null,
      "start": 6115,
      "end": 6123
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 6124,
            "end": 6125
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 6126,
            "end": 6127
          },
          "optional": false,
          "computed": false,
          "start": 6124,
          "end": 6127
        },
        "operator": "||",
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 6131,
          "end": 6133
        },
        "start": 6124,
        "end": 6133
      },
      "directive": null,
      "start": 6124,
      "end": 6134
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 6135,
            "end": 6136
          },
          "property": {
            "type": "Literal",
            "value": "s",
            "raw": "\"s\"",
            "start": 6137,
            "end": 6140
          },
          "optional": false,
          "computed": true,
          "start": 6135,
          "end": 6141
        },
        "operator": "||",
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 6145,
          "end": 6147
        },
        "start": 6135,
        "end": 6147
      },
      "directive": null,
      "start": 6135,
      "end": 6148
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ConditionalExpression",
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 6166,
                "end": 6170
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "random",
                "optional": false,
                "typeAnnotation": null,
                "start": 6171,
                "end": 6177
              },
              "optional": false,
              "computed": false,
              "start": 6166,
              "end": 6177
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 6166,
            "end": 6179
          },
          "operator": "*",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 6182,
            "end": 6183
          },
          "start": 6166,
          "end": 6183
        },
        "consequent": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 6186,
          "end": 6187
        },
        "alternate": {
          "type": "Literal",
          "value": "a",
          "raw": "\"a\"",
          "start": 6190,
          "end": 6193
        },
        "start": 6166,
        "end": 6193
      },
      "directive": null,
      "start": 6166,
      "end": 6194
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ConditionalExpression",
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 6195,
                "end": 6199
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "random",
                "optional": false,
                "typeAnnotation": null,
                "start": 6200,
                "end": 6206
              },
              "optional": false,
              "computed": false,
              "start": 6195,
              "end": 6206
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 6195,
            "end": 6208
          },
          "operator": "*",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 6211,
            "end": 6212
          },
          "start": 6195,
          "end": 6212
        },
        "consequent": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 6215,
            "end": 6216
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 6217,
            "end": 6218
          },
          "optional": false,
          "computed": false,
          "start": 6215,
          "end": 6218
        },
        "alternate": {
          "type": "Literal",
          "value": "a",
          "raw": "\"a\"",
          "start": 6221,
          "end": 6224
        },
        "start": 6195,
        "end": 6224
      },
      "directive": null,
      "start": 6195,
      "end": 6225
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ConditionalExpression",
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 6226,
                "end": 6230
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "random",
                "optional": false,
                "typeAnnotation": null,
                "start": 6231,
                "end": 6237
              },
              "optional": false,
              "computed": false,
              "start": 6226,
              "end": 6237
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 6226,
            "end": 6239
          },
          "operator": "*",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 6242,
            "end": 6243
          },
          "start": 6226,
          "end": 6243
        },
        "consequent": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 6246,
            "end": 6247
          },
          "property": {
            "type": "Literal",
            "value": "s",
            "raw": "\"s\"",
            "start": 6248,
            "end": 6251
          },
          "optional": false,
          "computed": true,
          "start": 6246,
          "end": 6252
        },
        "alternate": {
          "type": "Literal",
          "value": "a",
          "raw": "\"a\"",
          "start": 6255,
          "end": 6258
        },
        "start": 6226,
        "end": 6258
      },
      "directive": null,
      "start": 6226,
      "end": 6259
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 6296,
              "end": 6297
            },
            "value": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 6300,
              "end": 6303
            },
            "method": false,
            "shorthand": false,
            "computed": true,
            "optional": false,
            "start": 6295,
            "end": 6303
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 6310,
                "end": 6311
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 6312,
                "end": 6313
              },
              "optional": false,
              "computed": false,
              "start": 6310,
              "end": 6313
            },
            "value": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 6316,
              "end": 6319
            },
            "method": false,
            "shorthand": false,
            "computed": true,
            "optional": false,
            "start": 6309,
            "end": 6319
          }
        ],
        "start": 6289,
        "end": 6322
      },
      "directive": null,
      "start": 6288,
      "end": 6324
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6332,
        "end": 6334
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
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 6349,
              "end": 6350
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 6353,
                  "end": 6356
                },
                "start": 6353,
                "end": 6356
              },
              "start": 6351,
              "end": 6356
            },
            "value": null,
            "computed": true,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 6341,
            "end": 6357
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 6370,
                "end": 6371
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 6372,
                "end": 6373
              },
              "optional": false,
              "computed": false,
              "start": 6370,
              "end": 6373
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 6376,
                  "end": 6379
                },
                "start": 6376,
                "end": 6379
              },
              "start": 6374,
              "end": 6379
            },
            "value": null,
            "computed": true,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 6362,
            "end": 6380
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 6387,
              "end": 6388
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 6391,
                  "end": 6394
                },
                "start": 6391,
                "end": 6394
              },
              "start": 6389,
              "end": 6394
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 6386,
            "end": 6395
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 6401,
                "end": 6402
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 6403,
                "end": 6404
              },
              "optional": false,
              "computed": false,
              "start": 6401,
              "end": 6404
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 6407,
                  "end": 6410
                },
                "start": 6407,
                "end": 6410
              },
              "start": 6405,
              "end": 6410
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 6400,
            "end": 6411
          }
        ],
        "start": 6335,
        "end": 6413
      },
      "abstract": false,
      "declare": false,
      "start": 6326,
      "end": 6413
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Context",
        "optional": false,
        "typeAnnotation": null,
        "start": 6446,
        "end": 6453
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
              "name": "method1",
              "optional": false,
              "typeAnnotation": null,
              "start": 6460,
              "end": 6467
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6478,
                  "end": 6479
                },
                "typeArguments": null,
                "start": 6471,
                "end": 6479
              },
              "start": 6469,
              "end": 6479
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 6460,
            "end": 6480
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 6485,
              "end": 6492
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6496,
                  "end": 6503
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6511,
                        "end": 6512
                      },
                      "typeArguments": null,
                      "start": 6504,
                      "end": 6512
                    }
                  ],
                  "start": 6503,
                  "end": 6513
                },
                "start": 6496,
                "end": 6513
              },
              "start": 6494,
              "end": 6513
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 6485,
            "end": 6514
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method3",
              "optional": false,
              "typeAnnotation": null,
              "start": 6519,
              "end": 6526
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncIterableIterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6530,
                  "end": 6551
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6559,
                        "end": 6560
                      },
                      "typeArguments": null,
                      "start": 6552,
                      "end": 6560
                    }
                  ],
                  "start": 6551,
                  "end": 6561
                },
                "start": 6530,
                "end": 6561
              },
              "start": 6528,
              "end": 6561
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 6519,
            "end": 6562
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method4",
              "optional": false,
              "typeAnnotation": null,
              "start": 6567,
              "end": 6574
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IterableIterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6578,
                  "end": 6594
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6602,
                        "end": 6603
                      },
                      "typeArguments": null,
                      "start": 6595,
                      "end": 6603
                    }
                  ],
                  "start": 6594,
                  "end": 6604
                },
                "start": 6578,
                "end": 6604
              },
              "start": 6576,
              "end": 6604
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 6567,
            "end": 6605
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method5",
              "optional": false,
              "typeAnnotation": null,
              "start": 6610,
              "end": 6617
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6629,
                      "end": 6630
                    },
                    "typeArguments": null,
                    "start": 6622,
                    "end": 6630
                  },
                  "start": 6620,
                  "end": 6630
                },
                "start": 6618,
                "end": 6630
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6640,
                  "end": 6641
                },
                "typeArguments": null,
                "start": 6633,
                "end": 6641
              },
              "start": 6631,
              "end": 6641
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 6610,
            "end": 6642
          }
        ],
        "start": 6454,
        "end": 6644
      },
      "declare": false,
      "start": 6436,
      "end": 6644
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
            "name": "o3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Context",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6656,
                  "end": 6663
                },
                "typeArguments": null,
                "start": 6656,
                "end": 6663
              },
              "start": 6654,
              "end": 6663
            },
            "start": 6652,
            "end": 6663
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6672,
                  "end": 6679
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6699,
                          "end": 6700
                        },
                        "start": 6692,
                        "end": 6701
                      }
                    ],
                    "start": 6682,
                    "end": 6762
                  },
                  "expression": false,
                  "start": 6679,
                  "end": 6762
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 6672,
                "end": 6762
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6774,
                  "end": 6781
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": true,
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
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6801,
                          "end": 6802
                        },
                        "start": 6794,
                        "end": 6803
                      }
                    ],
                    "start": 6784,
                    "end": 6864
                  },
                  "expression": false,
                  "start": 6781,
                  "end": 6864
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 6768,
                "end": 6864
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6878,
                  "end": 6885
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": true,
                  "async": true,
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
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6904,
                            "end": 6905
                          },
                          "start": 6898,
                          "end": 6905
                        },
                        "directive": null,
                        "start": 6898,
                        "end": 6906
                      }
                    ],
                    "start": 6888,
                    "end": 6966
                  },
                  "expression": false,
                  "start": 6885,
                  "end": 6966
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 6870,
                "end": 6966
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6974,
                  "end": 6981
                },
                "value": {
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "YieldExpression",
                          "delegate": false,
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7000,
                            "end": 7001
                          },
                          "start": 6994,
                          "end": 7001
                        },
                        "directive": null,
                        "start": 6994,
                        "end": 7002
                      }
                    ],
                    "start": 6984,
                    "end": 7062
                  },
                  "expression": false,
                  "start": 6981,
                  "end": 7062
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 6972,
                "end": 7062
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7068,
                  "end": 7075
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
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7076,
                        "end": 7077
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7080,
                        "end": 7081
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7076,
                      "end": 7081
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7153,
                          "end": 7154
                        },
                        "start": 7146,
                        "end": 7155
                      }
                    ],
                    "start": 7083,
                    "end": 7161
                  },
                  "expression": false,
                  "start": 7075,
                  "end": 7161
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 7068,
                "end": 7161
              }
            ],
            "start": 6666,
            "end": 7164
          },
          "definite": false,
          "start": 6652,
          "end": 7164
        }
      ],
      "declare": false,
      "start": 6646,
      "end": 7165
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
            "name": "o4",
            "optional": false,
            "typeAnnotation": null,
            "start": 7216,
            "end": 7218
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7227,
                  "end": 7234
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
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7245,
                            "end": 7246
                          },
                          "typeArguments": null,
                          "start": 7238,
                          "end": 7246
                        },
                        "start": 7236,
                        "end": 7246
                      },
                      "start": 7235,
                      "end": 7246
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7256,
                        "end": 7257
                      },
                      "typeArguments": null,
                      "start": 7249,
                      "end": 7257
                    },
                    "start": 7247,
                    "end": 7257
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7275,
                          "end": 7276
                        },
                        "start": 7268,
                        "end": 7277
                      }
                    ],
                    "start": 7258,
                    "end": 7283
                  },
                  "expression": false,
                  "start": 7234,
                  "end": 7283
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 7227,
                "end": 7283
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7289,
                  "end": 7296
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
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "I",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7300,
                              "end": 7301
                            },
                            "typeArguments": null,
                            "start": 7300,
                            "end": 7301
                          },
                          "indexType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "readonlyType",
                              "raw": "\"readonlyType\"",
                              "start": 7302,
                              "end": 7316
                            },
                            "start": 7302,
                            "end": 7316
                          },
                          "start": 7300,
                          "end": 7317
                        },
                        "start": 7298,
                        "end": 7317
                      },
                      "start": 7297,
                      "end": 7317
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7320,
                          "end": 7321
                        },
                        "typeArguments": null,
                        "start": 7320,
                        "end": 7321
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "readonlyType",
                          "raw": "\"readonlyType\"",
                          "start": 7322,
                          "end": 7336
                        },
                        "start": 7322,
                        "end": 7336
                      },
                      "start": 7320,
                      "end": 7337
                    },
                    "start": 7318,
                    "end": 7337
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7355,
                          "end": 7356
                        },
                        "start": 7348,
                        "end": 7357
                      }
                    ],
                    "start": 7338,
                    "end": 7363
                  },
                  "expression": false,
                  "start": 7296,
                  "end": 7363
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 7289,
                "end": 7363
              }
            ],
            "start": 7221,
            "end": 7365
          },
          "definite": false,
          "start": 7216,
          "end": 7365
        }
      ],
      "declare": false,
      "start": 7210,
      "end": 7366
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
            "name": "ce0",
            "optional": false,
            "typeAnnotation": null,
            "start": 7374,
            "end": 7377
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "name": "method1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7392,
                    "end": 7399
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
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7410,
                              "end": 7411
                            },
                            "typeArguments": null,
                            "start": 7403,
                            "end": 7411
                          },
                          "start": 7401,
                          "end": 7411
                        },
                        "start": 7400,
                        "end": 7411
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7421,
                          "end": 7422
                        },
                        "typeArguments": null,
                        "start": 7414,
                        "end": 7422
                      },
                      "start": 7412,
                      "end": 7422
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "p",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7440,
                            "end": 7441
                          },
                          "start": 7433,
                          "end": 7442
                        }
                      ],
                      "start": 7423,
                      "end": 7448
                    },
                    "expression": false,
                    "start": 7399,
                    "end": 7448
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 7392,
                  "end": 7448
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "method2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7453,
                    "end": 7460
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
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSIndexedAccessType",
                            "objectType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "I",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7464,
                                "end": 7465
                              },
                              "typeArguments": null,
                              "start": 7464,
                              "end": 7465
                            },
                            "indexType": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "readonlyType",
                                "raw": "\"readonlyType\"",
                                "start": 7466,
                                "end": 7480
                              },
                              "start": 7466,
                              "end": 7480
                            },
                            "start": 7464,
                            "end": 7481
                          },
                          "start": 7462,
                          "end": 7481
                        },
                        "start": 7461,
                        "end": 7481
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "I",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7484,
                            "end": 7485
                          },
                          "typeArguments": null,
                          "start": 7484,
                          "end": 7485
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "readonlyType",
                            "raw": "\"readonlyType\"",
                            "start": 7486,
                            "end": 7500
                          },
                          "start": 7486,
                          "end": 7500
                        },
                        "start": 7484,
                        "end": 7501
                      },
                      "start": 7482,
                      "end": 7501
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "p",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7519,
                            "end": 7520
                          },
                          "start": 7512,
                          "end": 7521
                        }
                      ],
                      "start": 7502,
                      "end": 7527
                    },
                    "expression": false,
                    "start": 7460,
                    "end": 7527
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 7453,
                  "end": 7527
                }
              ],
              "start": 7386,
              "end": 7529
            },
            "abstract": false,
            "declare": false,
            "start": 7380,
            "end": 7529
          },
          "definite": false,
          "start": 7374,
          "end": 7529
        }
      ],
      "declare": false,
      "start": 7368,
      "end": 7530
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "funcInferredReturnType",
        "optional": false,
        "typeAnnotation": null,
        "start": 7541,
        "end": 7563
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "method",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7571,
                    "end": 7577
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7588,
                            "end": 7589
                          },
                          "typeArguments": null,
                          "start": 7581,
                          "end": 7589
                        },
                        "start": 7579,
                        "end": 7589
                      },
                      "start": 7578,
                      "end": 7589
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 7592,
                      "end": 7596
                    },
                    "start": 7590,
                    "end": 7596
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 7571,
                  "end": 7596
                }
              ],
              "start": 7569,
              "end": 7598
            },
            "start": 7567,
            "end": 7598
          },
          "start": 7564,
          "end": 7598
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
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 7613,
              "end": 7616
            },
            "start": 7606,
            "end": 7617
          }
        ],
        "start": 7600,
        "end": 7619
      },
      "expression": false,
      "start": 7532,
      "end": 7619
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 38,
  "end": 7619
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 38,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "constCall",
    "start": 44,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 56,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 66,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "letCall",
    "start": 70,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 90,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "varCall",
    "start": 94,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 148,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 156,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "constType",
    "start": 162,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 173,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 180,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 235,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "constTypeAndCall",
    "start": 241,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 259,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 266,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 275,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 318,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "constInitToConstCall",
    "start": 324,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "constCall",
    "start": 347,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 358,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "constInitToLetCall",
    "start": 364,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "letCall",
    "start": 385,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 392,
    "end": 393
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 394,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "constInitToVarCall",
    "start": 400,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "varCall",
    "start": 421,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 428,
    "end": 429
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 430,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "constInitToConstDeclAmbient",
    "start": 436,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "constType",
    "start": 466,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 475,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 477,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "letInitToConstCall",
    "start": 481,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "constCall",
    "start": 502,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 511,
    "end": 512
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 513,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "letInitToLetCall",
    "start": 517,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "letCall",
    "start": 536,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 543,
    "end": 544
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 545,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "letInitToVarCall",
    "start": 549,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "varCall",
    "start": 568,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 577,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "letInitToConstDeclAmbient",
    "start": 581,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "constType",
    "start": 609,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 620,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "varInitToConstCall",
    "start": 624,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "constCall",
    "start": 645,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 654,
    "end": 655
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 656,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "varInitToLetCall",
    "start": 660,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "letCall",
    "start": 679,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 686,
    "end": 687
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 688,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "varInitToVarCall",
    "start": 692,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "varCall",
    "start": 711,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 718,
    "end": 719
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 720,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "varInitToConstDeclAmbient",
    "start": 724,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "constType",
    "start": 752,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 812,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "constInitToConstCallWithTypeQuery",
    "start": 818,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 851,
    "end": 852
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 853,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "constCall",
    "start": 860,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "constCall",
    "start": 872,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 881,
    "end": 882
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 883,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "constInitToConstDeclAmbientWithTypeQuery",
    "start": 889,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 929,
    "end": 930
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 931,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "constType",
    "start": 938,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "constType",
    "start": 950,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 959,
    "end": 960
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1041,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "fromAny",
    "start": 1047,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1056,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1063,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1075,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1078,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1113,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "funcReturnConstCall",
    "start": 1122,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1146,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "constCall",
    "start": 1153,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1166,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "funcReturnLetCall",
    "start": 1175,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1197,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "letCall",
    "start": 1204,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1215,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "funcReturnVarCall",
    "start": 1224,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1246,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "varCall",
    "start": 1253,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1306,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "funcReturnConstCallWithTypeQuery",
    "start": 1315,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1347,
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
    "value": "typeof",
    "start": 1351,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "constCall",
    "start": 1358,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1370,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "constCall",
    "start": 1377,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1429,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "genFuncYieldConstCall",
    "start": 1439,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1465,
    "end": 1470
  },
  {
    "type": "Identifier",
    "value": "constCall",
    "start": 1471,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1484,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "genFuncYieldLetCall",
    "start": 1494,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1513,
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
    "type": "Keyword",
    "value": "yield",
    "start": 1518,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "letCall",
    "start": 1524,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1535,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "genFuncYieldVarCall",
    "start": 1545,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1569,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "varCall",
    "start": 1575,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1638,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "genFuncYieldConstCallWithTypeQuery",
    "start": 1648,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Identifier",
    "value": "IterableIterator",
    "start": 1686,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1703,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "constCall",
    "start": 1710,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1723,
    "end": 1728
  },
  {
    "type": "Identifier",
    "value": "constCall",
    "start": 1729,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1778,
    "end": 1783
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1784,
    "end": 1792
  },
  {
    "type": "Identifier",
    "value": "asyncFuncReturnConstCall",
    "start": 1793,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1822,
    "end": 1828
  },
  {
    "type": "Identifier",
    "value": "constCall",
    "start": 1829,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1842,
    "end": 1847
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1848,
    "end": 1856
  },
  {
    "type": "Identifier",
    "value": "asyncFuncReturnLetCall",
    "start": 1857,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1884,
    "end": 1890
  },
  {
    "type": "Identifier",
    "value": "letCall",
    "start": 1891,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1902,
    "end": 1907
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1908,
    "end": 1916
  },
  {
    "type": "Identifier",
    "value": "asyncFuncReturnVarCall",
    "start": 1917,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1944,
    "end": 1950
  },
  {
    "type": "Identifier",
    "value": "varCall",
    "start": 1951,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2007,
    "end": 2012
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2013,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Identifier",
    "value": "asyncGenFuncYieldConstCall",
    "start": 2023,
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
    "value": "{",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2054,
    "end": 2059
  },
  {
    "type": "Identifier",
    "value": "constCall",
    "start": 2060,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2073,
    "end": 2078
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2079,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Identifier",
    "value": "asyncGenFuncYieldLetCall",
    "start": 2089,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2118,
    "end": 2123
  },
  {
    "type": "Identifier",
    "value": "letCall",
    "start": 2124,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2135,
    "end": 2140
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2141,
    "end": 2149
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Identifier",
    "value": "asyncGenFuncYieldVarCall",
    "start": 2151,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2180,
    "end": 2185
  },
  {
    "type": "Identifier",
    "value": "varCall",
    "start": 2186,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2209,
    "end": 2214
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2223,
    "end": 2229
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2230,
    "end": 2238
  },
  {
    "type": "Identifier",
    "value": "readonlyStaticCall",
    "start": 2239,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 2260,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2274,
    "end": 2280
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2281,
    "end": 2289
  },
  {
    "type": "Identifier",
    "value": "readonlyStaticType",
    "start": 2290,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2310,
    "end": 2316
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2317,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2329,
    "end": 2335
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2336,
    "end": 2344
  },
  {
    "type": "Identifier",
    "value": "readonlyStaticTypeAndCall",
    "start": 2345,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2372,
    "end": 2378
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2379,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 2388,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2394,
    "end": 2395
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2402,
    "end": 2408
  },
  {
    "type": "Identifier",
    "value": "readwriteStaticCall",
    "start": 2409,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 2431,
    "end": 2437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2446,
    "end": 2454
  },
  {
    "type": "Identifier",
    "value": "readonlyCall",
    "start": 2455,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 2470,
    "end": 2476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2476,
    "end": 2477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2477,
    "end": 2478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2478,
    "end": 2479
  },
  {
    "type": "Identifier",
    "value": "readwriteCall",
    "start": 2484,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 2500,
    "end": 2506
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2507,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2512,
    "end": 2519
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2520,
    "end": 2525
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2533,
    "end": 2538
  },
  {
    "type": "Identifier",
    "value": "constInitToCReadonlyStaticCall",
    "start": 2539,
    "end": 2569
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2572,
    "end": 2573
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Identifier",
    "value": "readonlyStaticCall",
    "start": 2574,
    "end": 2592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2592,
    "end": 2593
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2594,
    "end": 2599
  },
  {
    "type": "Identifier",
    "value": "constInitToCReadonlyStaticType",
    "start": 2600,
    "end": 2630
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2634,
    "end": 2635
  },
  {
    "type": "Identifier",
    "value": "readonlyStaticType",
    "start": 2635,
    "end": 2653
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2653,
    "end": 2654
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2655,
    "end": 2660
  },
  {
    "type": "Identifier",
    "value": "constInitToCReadonlyStaticTypeAndCall",
    "start": 2661,
    "end": 2698
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2701,
    "end": 2702
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Identifier",
    "value": "readonlyStaticTypeAndCall",
    "start": 2703,
    "end": 2728
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2730,
    "end": 2735
  },
  {
    "type": "Identifier",
    "value": "constInitToCReadwriteStaticCall",
    "start": 2736,
    "end": 2767
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2768,
    "end": 2769
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2770,
    "end": 2771
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Identifier",
    "value": "readwriteStaticCall",
    "start": 2772,
    "end": 2791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2791,
    "end": 2792
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2794,
    "end": 2799
  },
  {
    "type": "Identifier",
    "value": "constInitToCReadonlyStaticCallWithTypeQuery",
    "start": 2800,
    "end": 2843
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2845,
    "end": 2851
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2852,
    "end": 2853
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2853,
    "end": 2854
  },
  {
    "type": "Identifier",
    "value": "readonlyStaticCall",
    "start": 2854,
    "end": 2872
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2875,
    "end": 2876
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2876,
    "end": 2877
  },
  {
    "type": "Identifier",
    "value": "readonlyStaticCall",
    "start": 2877,
    "end": 2895
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2897,
    "end": 2902
  },
  {
    "type": "Identifier",
    "value": "constInitToCReadonlyStaticTypeWithTypeQuery",
    "start": 2903,
    "end": 2946
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2946,
    "end": 2947
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2948,
    "end": 2954
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2955,
    "end": 2956
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2956,
    "end": 2957
  },
  {
    "type": "Identifier",
    "value": "readonlyStaticType",
    "start": 2957,
    "end": 2975
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2976,
    "end": 2977
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2978,
    "end": 2979
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2979,
    "end": 2980
  },
  {
    "type": "Identifier",
    "value": "readonlyStaticType",
    "start": 2980,
    "end": 2998
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2998,
    "end": 2999
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3000,
    "end": 3005
  },
  {
    "type": "Identifier",
    "value": "constInitToCReadonlyStaticTypeAndCallWithTypeQuery",
    "start": 3006,
    "end": 3056
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3058,
    "end": 3064
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3065,
    "end": 3066
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3066,
    "end": 3067
  },
  {
    "type": "Identifier",
    "value": "readonlyStaticTypeAndCall",
    "start": 3067,
    "end": 3092
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3095,
    "end": 3096
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3096,
    "end": 3097
  },
  {
    "type": "Identifier",
    "value": "readonlyStaticTypeAndCall",
    "start": 3097,
    "end": 3122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3122,
    "end": 3123
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3124,
    "end": 3129
  },
  {
    "type": "Identifier",
    "value": "constInitToCReadwriteStaticCallWithTypeQuery",
    "start": 3130,
    "end": 3174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3174,
    "end": 3175
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3176,
    "end": 3182
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3183,
    "end": 3184
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3184,
    "end": 3185
  },
  {
    "type": "Identifier",
    "value": "readwriteStaticCall",
    "start": 3185,
    "end": 3204
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3205,
    "end": 3206
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3207,
    "end": 3208
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3208,
    "end": 3209
  },
  {
    "type": "Identifier",
    "value": "readwriteStaticCall",
    "start": 3209,
    "end": 3228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3231,
    "end": 3236
  },
  {
    "type": "Identifier",
    "value": "constInitToCReadonlyCall",
    "start": 3237,
    "end": 3261
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3262,
    "end": 3263
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3264,
    "end": 3265
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3265,
    "end": 3266
  },
  {
    "type": "Identifier",
    "value": "readonlyCall",
    "start": 3266,
    "end": 3278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3278,
    "end": 3279
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3280,
    "end": 3285
  },
  {
    "type": "Identifier",
    "value": "constInitToCReadwriteCall",
    "start": 3286,
    "end": 3311
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3312,
    "end": 3313
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3314,
    "end": 3315
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3315,
    "end": 3316
  },
  {
    "type": "Identifier",
    "value": "readwriteCall",
    "start": 3316,
    "end": 3329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3329,
    "end": 3330
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3331,
    "end": 3336
  },
  {
    "type": "Identifier",
    "value": "constInitToCReadonlyCallWithTypeQuery",
    "start": 3337,
    "end": 3374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3374,
    "end": 3375
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3376,
    "end": 3382
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3383,
    "end": 3384
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3384,
    "end": 3385
  },
  {
    "type": "Identifier",
    "value": "readonlyCall",
    "start": 3385,
    "end": 3397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3398,
    "end": 3399
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3400,
    "end": 3401
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3401,
    "end": 3402
  },
  {
    "type": "Identifier",
    "value": "readonlyCall",
    "start": 3402,
    "end": 3414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3414,
    "end": 3415
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3416,
    "end": 3421
  },
  {
    "type": "Identifier",
    "value": "constInitToCReadwriteCallWithTypeQuery",
    "start": 3422,
    "end": 3460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3460,
    "end": 3461
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3462,
    "end": 3468
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3469,
    "end": 3470
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3470,
    "end": 3471
  },
  {
    "type": "Identifier",
    "value": "readwriteCall",
    "start": 3471,
    "end": 3484
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3485,
    "end": 3486
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3487,
    "end": 3488
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3488,
    "end": 3489
  },
  {
    "type": "Identifier",
    "value": "readwriteCall",
    "start": 3489,
    "end": 3502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3502,
    "end": 3503
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3504,
    "end": 3509
  },
  {
    "type": "Identifier",
    "value": "constInitToCReadonlyCallWithIndexedAccess",
    "start": 3510,
    "end": 3551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3551,
    "end": 3552
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3553,
    "end": 3554
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3554,
    "end": 3555
  },
  {
    "type": "String",
    "value": "\"readonlyCall\"",
    "start": 3555,
    "end": 3569
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3569,
    "end": 3570
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3571,
    "end": 3572
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3573,
    "end": 3574
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3574,
    "end": 3575
  },
  {
    "type": "Identifier",
    "value": "readonlyCall",
    "start": 3575,
    "end": 3587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3587,
    "end": 3588
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3589,
    "end": 3594
  },
  {
    "type": "Identifier",
    "value": "constInitToCReadwriteCallWithIndexedAccess",
    "start": 3595,
    "end": 3637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3637,
    "end": 3638
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3639,
    "end": 3640
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3640,
    "end": 3641
  },
  {
    "type": "String",
    "value": "\"readwriteCall\"",
    "start": 3641,
    "end": 3656
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3656,
    "end": 3657
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3658,
    "end": 3659
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3660,
    "end": 3661
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3661,
    "end": 3662
  },
  {
    "type": "Identifier",
    "value": "readwriteCall",
    "start": 3662,
    "end": 3675
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3675,
    "end": 3676
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3692,
    "end": 3701
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 3702,
    "end": 3703
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3704,
    "end": 3705
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 3710,
    "end": 3718
  },
  {
    "type": "Identifier",
    "value": "readonlyType",
    "start": 3719,
    "end": 3731
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3731,
    "end": 3732
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 3733,
    "end": 3739
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 3740,
    "end": 3746
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3746,
    "end": 3747
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3748,
    "end": 3749
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3750,
    "end": 3757
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3758,
    "end": 3763
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3764,
    "end": 3765
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3765,
    "end": 3766
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 3767,
    "end": 3768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3768,
    "end": 3769
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3771,
    "end": 3776
  },
  {
    "type": "Identifier",
    "value": "constInitToIReadonlyType",
    "start": 3777,
    "end": 3801
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3802,
    "end": 3803
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3804,
    "end": 3805
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3805,
    "end": 3806
  },
  {
    "type": "Identifier",
    "value": "readonlyType",
    "start": 3806,
    "end": 3818
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3818,
    "end": 3819
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3820,
    "end": 3825
  },
  {
    "type": "Identifier",
    "value": "constInitToIReadonlyTypeWithTypeQuery",
    "start": 3826,
    "end": 3863
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3863,
    "end": 3864
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3865,
    "end": 3871
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3872,
    "end": 3873
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3873,
    "end": 3874
  },
  {
    "type": "Identifier",
    "value": "readonlyType",
    "start": 3874,
    "end": 3886
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3887,
    "end": 3888
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3889,
    "end": 3890
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3890,
    "end": 3891
  },
  {
    "type": "Identifier",
    "value": "readonlyType",
    "start": 3891,
    "end": 3903
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3903,
    "end": 3904
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3905,
    "end": 3910
  },
  {
    "type": "Identifier",
    "value": "constInitToIReadonlyTypeWithIndexedAccess",
    "start": 3911,
    "end": 3952
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3952,
    "end": 3953
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 3954,
    "end": 3955
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3955,
    "end": 3956
  },
  {
    "type": "String",
    "value": "\"readonlyType\"",
    "start": 3956,
    "end": 3970
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3970,
    "end": 3971
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3972,
    "end": 3973
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3974,
    "end": 3975
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3975,
    "end": 3976
  },
  {
    "type": "Identifier",
    "value": "readonlyType",
    "start": 3976,
    "end": 3988
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3988,
    "end": 3989
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4008,
    "end": 4012
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 4013,
    "end": 4014
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4015,
    "end": 4016
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4017,
    "end": 4018
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 4023,
    "end": 4031
  },
  {
    "type": "Identifier",
    "value": "readonlyType",
    "start": 4032,
    "end": 4044
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4044,
    "end": 4045
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 4046,
    "end": 4052
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 4053,
    "end": 4059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4059,
    "end": 4060
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 4065,
    "end": 4071
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4071,
    "end": 4072
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4073,
    "end": 4074
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 4083,
    "end": 4091
  },
  {
    "type": "Identifier",
    "value": "readonlyNestedType",
    "start": 4092,
    "end": 4110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4110,
    "end": 4111
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 4112,
    "end": 4118
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 4119,
    "end": 4125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4125,
    "end": 4126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4131,
    "end": 4132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4133,
    "end": 4134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4134,
    "end": 4135
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4136,
    "end": 4143
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4144,
    "end": 4149
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 4150,
    "end": 4151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4151,
    "end": 4152
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 4153,
    "end": 4154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4154,
    "end": 4155
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4157,
    "end": 4162
  },
  {
    "type": "Identifier",
    "value": "constInitToLReadonlyType",
    "start": 4163,
    "end": 4187
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4188,
    "end": 4189
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 4190,
    "end": 4191
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4191,
    "end": 4192
  },
  {
    "type": "Identifier",
    "value": "readonlyType",
    "start": 4192,
    "end": 4204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4204,
    "end": 4205
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4206,
    "end": 4211
  },
  {
    "type": "Identifier",
    "value": "constInitToLReadonlyNestedType",
    "start": 4212,
    "end": 4242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4243,
    "end": 4244
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 4245,
    "end": 4246
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4246,
    "end": 4247
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 4247,
    "end": 4253
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4253,
    "end": 4254
  },
  {
    "type": "Identifier",
    "value": "readonlyNestedType",
    "start": 4254,
    "end": 4272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4272,
    "end": 4273
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4274,
    "end": 4279
  },
  {
    "type": "Identifier",
    "value": "constInitToLReadonlyTypeWithTypeQuery",
    "start": 4280,
    "end": 4317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4317,
    "end": 4318
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4319,
    "end": 4325
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 4326,
    "end": 4327
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4327,
    "end": 4328
  },
  {
    "type": "Identifier",
    "value": "readonlyType",
    "start": 4328,
    "end": 4340
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4341,
    "end": 4342
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 4343,
    "end": 4344
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4344,
    "end": 4345
  },
  {
    "type": "Identifier",
    "value": "readonlyType",
    "start": 4345,
    "end": 4357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4357,
    "end": 4358
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4359,
    "end": 4364
  },
  {
    "type": "Identifier",
    "value": "constInitToLReadonlyNestedTypeWithTypeQuery",
    "start": 4365,
    "end": 4408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4408,
    "end": 4409
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4410,
    "end": 4416
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 4417,
    "end": 4418
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4418,
    "end": 4419
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 4419,
    "end": 4425
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4425,
    "end": 4426
  },
  {
    "type": "Identifier",
    "value": "readonlyNestedType",
    "start": 4426,
    "end": 4444
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4445,
    "end": 4446
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 4447,
    "end": 4448
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4448,
    "end": 4449
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 4449,
    "end": 4455
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4455,
    "end": 4456
  },
  {
    "type": "Identifier",
    "value": "readonlyNestedType",
    "start": 4456,
    "end": 4474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4474,
    "end": 4475
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4476,
    "end": 4481
  },
  {
    "type": "Identifier",
    "value": "constInitToLReadonlyTypeWithIndexedAccess",
    "start": 4482,
    "end": 4523
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4523,
    "end": 4524
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 4525,
    "end": 4526
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4526,
    "end": 4527
  },
  {
    "type": "String",
    "value": "\"readonlyType\"",
    "start": 4527,
    "end": 4541
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4541,
    "end": 4542
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4543,
    "end": 4544
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 4545,
    "end": 4546
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4546,
    "end": 4547
  },
  {
    "type": "Identifier",
    "value": "readonlyType",
    "start": 4547,
    "end": 4559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4559,
    "end": 4560
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4561,
    "end": 4566
  },
  {
    "type": "Identifier",
    "value": "constInitToLReadonlyNestedTypeWithIndexedAccess",
    "start": 4567,
    "end": 4614
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4614,
    "end": 4615
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 4616,
    "end": 4617
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4617,
    "end": 4618
  },
  {
    "type": "String",
    "value": "\"nested\"",
    "start": 4618,
    "end": 4626
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4626,
    "end": 4627
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4627,
    "end": 4628
  },
  {
    "type": "String",
    "value": "\"readonlyNestedType\"",
    "start": 4628,
    "end": 4648
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4648,
    "end": 4649
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4650,
    "end": 4651
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 4652,
    "end": 4653
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4653,
    "end": 4654
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 4654,
    "end": 4660
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4660,
    "end": 4661
  },
  {
    "type": "Identifier",
    "value": "readonlyNestedType",
    "start": 4661,
    "end": 4679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4679,
    "end": 4680
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4709,
    "end": 4714
  },
  {
    "type": "Identifier",
    "value": "promiseForConstCall",
    "start": 4715,
    "end": 4734
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4735,
    "end": 4736
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4737,
    "end": 4744
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4744,
    "end": 4745
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 4745,
    "end": 4752
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4752,
    "end": 4753
  },
  {
    "type": "Identifier",
    "value": "constCall",
    "start": 4753,
    "end": 4762
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4762,
    "end": 4763
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4763,
    "end": 4764
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4765,
    "end": 4770
  },
  {
    "type": "Identifier",
    "value": "arrayOfConstCall",
    "start": 4771,
    "end": 4787
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4788,
    "end": 4789
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4790,
    "end": 4791
  },
  {
    "type": "Identifier",
    "value": "constCall",
    "start": 4791,
    "end": 4800
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4800,
    "end": 4801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4801,
    "end": 4802
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4845,
    "end": 4852
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4853,
    "end": 4858
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4859,
    "end": 4860
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4860,
    "end": 4861
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 4862,
    "end": 4868
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 4869,
    "end": 4875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4875,
    "end": 4876
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4877,
    "end": 4884
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 4885,
    "end": 4894
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 4895,
    "end": 4896
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4897,
    "end": 4898
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4899,
    "end": 4904
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4905,
    "end": 4906
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4906,
    "end": 4907
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 4908,
    "end": 4914
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 4915,
    "end": 4921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4921,
    "end": 4922
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4923,
    "end": 4924
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4925,
    "end": 4932
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4933,
    "end": 4938
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4939,
    "end": 4940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4940,
    "end": 4941
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4942,
    "end": 4943
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4944,
    "end": 4945
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4945,
    "end": 4946
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4946,
    "end": 4947
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4947,
    "end": 4948
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 4949,
    "end": 4952
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4952,
    "end": 4953
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4954,
    "end": 4955
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 4955,
    "end": 4956
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4956,
    "end": 4957
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4957,
    "end": 4958
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4958,
    "end": 4959
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4959,
    "end": 4960
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 4961,
    "end": 4964
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4965,
    "end": 4966
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4966,
    "end": 4967
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4968,
    "end": 4975
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4976,
    "end": 4984
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 4985,
    "end": 4986
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4986,
    "end": 4987
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4987,
    "end": 4988
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4988,
    "end": 4989
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4989,
    "end": 4990
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4990,
    "end": 4991
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4991,
    "end": 4992
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4993,
    "end": 4994
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4994,
    "end": 4995
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4995,
    "end": 4996
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4997,
    "end": 4998
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4998,
    "end": 4999
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5000,
    "end": 5007
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5008,
    "end": 5016
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 5017,
    "end": 5018
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5018,
    "end": 5019
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5019,
    "end": 5020
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5020,
    "end": 5021
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 5022,
    "end": 5028
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5029,
    "end": 5030
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5030,
    "end": 5031
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5031,
    "end": 5032
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5033,
    "end": 5037
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5037,
    "end": 5038
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5039,
    "end": 5046
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5047,
    "end": 5055
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 5056,
    "end": 5057
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5057,
    "end": 5058
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5058,
    "end": 5059
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5059,
    "end": 5060
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 5061,
    "end": 5067
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 5068,
    "end": 5069
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5069,
    "end": 5070
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5070,
    "end": 5071
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5071,
    "end": 5072
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5072,
    "end": 5073
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5074,
    "end": 5078
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5078,
    "end": 5079
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 5126,
    "end": 5127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5127,
    "end": 5128
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5128,
    "end": 5129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5129,
    "end": 5130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5130,
    "end": 5131
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 5132,
    "end": 5133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5133,
    "end": 5134
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 5134,
    "end": 5135
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5135,
    "end": 5136
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5136,
    "end": 5137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5137,
    "end": 5138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5138,
    "end": 5139
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 5140,
    "end": 5141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5141,
    "end": 5142
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 5142,
    "end": 5143
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5143,
    "end": 5144
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 5144,
    "end": 5147
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5147,
    "end": 5148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5148,
    "end": 5149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5149,
    "end": 5150
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5178,
    "end": 5179
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5179,
    "end": 5180
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5180,
    "end": 5181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5181,
    "end": 5182
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5183,
    "end": 5184
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 5184,
    "end": 5185
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5185,
    "end": 5186
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5186,
    "end": 5187
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5187,
    "end": 5188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5188,
    "end": 5189
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5190,
    "end": 5191
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 5191,
    "end": 5192
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5192,
    "end": 5193
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 5193,
    "end": 5196
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5196,
    "end": 5197
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5197,
    "end": 5198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5198,
    "end": 5199
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5233,
    "end": 5238
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 5239,
    "end": 5241
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5242,
    "end": 5243
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5244,
    "end": 5245
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5250,
    "end": 5251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5251,
    "end": 5252
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5253,
    "end": 5254
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5254,
    "end": 5255
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 5260,
    "end": 5261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5261,
    "end": 5262
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 5263,
    "end": 5264
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5264,
    "end": 5265
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5265,
    "end": 5266
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5266,
    "end": 5267
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 5272,
    "end": 5273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5273,
    "end": 5274
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 5275,
    "end": 5276
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5276,
    "end": 5277
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 5277,
    "end": 5280
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5280,
    "end": 5281
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5281,
    "end": 5282
  },
  {
    "type": "Identifier",
    "value": "method1",
    "start": 5288,
    "end": 5295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5295,
    "end": 5296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5296,
    "end": 5297
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5298,
    "end": 5299
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5300,
    "end": 5306
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5307,
    "end": 5308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5308,
    "end": 5309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5310,
    "end": 5311
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5311,
    "end": 5312
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 5317,
    "end": 5322
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 5323,
    "end": 5330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5330,
    "end": 5331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5331,
    "end": 5332
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5333,
    "end": 5334
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5335,
    "end": 5341
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5342,
    "end": 5343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5343,
    "end": 5344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5345,
    "end": 5346
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5346,
    "end": 5347
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 5352,
    "end": 5357
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 5358,
    "end": 5359
  },
  {
    "type": "Identifier",
    "value": "method3",
    "start": 5360,
    "end": 5367
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5367,
    "end": 5368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5368,
    "end": 5369
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5370,
    "end": 5371
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 5372,
    "end": 5377
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5378,
    "end": 5379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5379,
    "end": 5380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5381,
    "end": 5382
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5382,
    "end": 5383
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 5388,
    "end": 5389
  },
  {
    "type": "Identifier",
    "value": "method4",
    "start": 5390,
    "end": 5397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5397,
    "end": 5398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5398,
    "end": 5399
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5400,
    "end": 5401
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 5402,
    "end": 5407
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5408,
    "end": 5409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5409,
    "end": 5410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5411,
    "end": 5412
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5412,
    "end": 5413
  },
  {
    "type": "Identifier",
    "value": "method5",
    "start": 5418,
    "end": 5425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5425,
    "end": 5426
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 5426,
    "end": 5427
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5428,
    "end": 5429
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5430,
    "end": 5431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5431,
    "end": 5432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5433,
    "end": 5434
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5435,
    "end": 5441
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 5442,
    "end": 5443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5443,
    "end": 5444
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5445,
    "end": 5446
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5446,
    "end": 5447
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5448,
    "end": 5449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5449,
    "end": 5450
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 5477,
    "end": 5482
  },
  {
    "type": "Identifier",
    "value": "C0",
    "start": 5483,
    "end": 5485
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5486,
    "end": 5487
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5492,
    "end": 5498
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 5499,
    "end": 5507
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5508,
    "end": 5509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5510,
    "end": 5511
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5512,
    "end": 5513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5513,
    "end": 5514
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5519,
    "end": 5525
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 5526,
    "end": 5534
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 5535,
    "end": 5536
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5537,
    "end": 5538
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 5539,
    "end": 5540
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5540,
    "end": 5541
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5541,
    "end": 5542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5542,
    "end": 5543
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5548,
    "end": 5554
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 5555,
    "end": 5563
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 5564,
    "end": 5565
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5566,
    "end": 5567
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 5568,
    "end": 5569
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5569,
    "end": 5570
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 5570,
    "end": 5573
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5573,
    "end": 5574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5574,
    "end": 5575
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5581,
    "end": 5587
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 5588,
    "end": 5589
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5590,
    "end": 5591
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5592,
    "end": 5593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5593,
    "end": 5594
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5599,
    "end": 5605
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 5606,
    "end": 5607
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5608,
    "end": 5609
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 5610,
    "end": 5611
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5611,
    "end": 5612
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5612,
    "end": 5613
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5613,
    "end": 5614
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5619,
    "end": 5625
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 5626,
    "end": 5627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5628,
    "end": 5629
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 5630,
    "end": 5631
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5631,
    "end": 5632
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 5632,
    "end": 5635
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5635,
    "end": 5636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5636,
    "end": 5637
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 5643,
    "end": 5651
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5652,
    "end": 5653
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5654,
    "end": 5655
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5656,
    "end": 5657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5657,
    "end": 5658
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 5663,
    "end": 5671
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 5672,
    "end": 5673
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5674,
    "end": 5675
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 5676,
    "end": 5677
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5677,
    "end": 5678
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5678,
    "end": 5679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5679,
    "end": 5680
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 5685,
    "end": 5693
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 5694,
    "end": 5695
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5696,
    "end": 5697
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 5698,
    "end": 5699
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5699,
    "end": 5700
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 5700,
    "end": 5703
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5703,
    "end": 5704
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5704,
    "end": 5705
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 5711,
    "end": 5712
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5713,
    "end": 5714
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5715,
    "end": 5716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5716,
    "end": 5717
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 5722,
    "end": 5723
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5724,
    "end": 5725
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 5726,
    "end": 5727
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5727,
    "end": 5728
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5728,
    "end": 5729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5729,
    "end": 5730
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 5735,
    "end": 5736
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5737,
    "end": 5738
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 5739,
    "end": 5740
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5740,
    "end": 5741
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 5741,
    "end": 5744
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5744,
    "end": 5745
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5745,
    "end": 5746
  },
  {
    "type": "Identifier",
    "value": "method1",
    "start": 5752,
    "end": 5759
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5759,
    "end": 5760
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5760,
    "end": 5761
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5762,
    "end": 5763
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5764,
    "end": 5770
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5771,
    "end": 5772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5772,
    "end": 5773
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5774,
    "end": 5775
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 5780,
    "end": 5785
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 5786,
    "end": 5793
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5793,
    "end": 5794
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5794,
    "end": 5795
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5796,
    "end": 5797
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5798,
    "end": 5804
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5805,
    "end": 5806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5806,
    "end": 5807
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5808,
    "end": 5809
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 5814,
    "end": 5819
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 5820,
    "end": 5821
  },
  {
    "type": "Identifier",
    "value": "method3",
    "start": 5822,
    "end": 5829
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5829,
    "end": 5830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5830,
    "end": 5831
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5832,
    "end": 5833
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 5834,
    "end": 5839
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5840,
    "end": 5841
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5841,
    "end": 5842
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5843,
    "end": 5844
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 5849,
    "end": 5850
  },
  {
    "type": "Identifier",
    "value": "method4",
    "start": 5851,
    "end": 5858
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5858,
    "end": 5859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5859,
    "end": 5860
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5861,
    "end": 5862
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 5863,
    "end": 5868
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5869,
    "end": 5870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5870,
    "end": 5871
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5872,
    "end": 5873
  },
  {
    "type": "Identifier",
    "value": "method5",
    "start": 5878,
    "end": 5885
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5885,
    "end": 5886
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 5886,
    "end": 5887
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5888,
    "end": 5889
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5890,
    "end": 5891
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5891,
    "end": 5892
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5893,
    "end": 5894
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5895,
    "end": 5901
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 5902,
    "end": 5903
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5903,
    "end": 5904
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5905,
    "end": 5906
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5907,
    "end": 5908
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5955,
    "end": 5956
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5956,
    "end": 5957
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5957,
    "end": 5958
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5958,
    "end": 5959
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5959,
    "end": 5960
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5961,
    "end": 5962
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5962,
    "end": 5963
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 5963,
    "end": 5964
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5964,
    "end": 5965
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5965,
    "end": 5966
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5966,
    "end": 5967
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5967,
    "end": 5968
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 5969,
    "end": 5970
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5970,
    "end": 5971
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 5971,
    "end": 5972
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5972,
    "end": 5973
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 5973,
    "end": 5976
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5976,
    "end": 5977
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5977,
    "end": 5978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5978,
    "end": 5979
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 6009,
    "end": 6010
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6010,
    "end": 6011
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6011,
    "end": 6017
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 6018,
    "end": 6019
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6019,
    "end": 6020
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6020,
    "end": 6021
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 6021,
    "end": 6022
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6022,
    "end": 6023
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6023,
    "end": 6024
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 6025,
    "end": 6026
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6026,
    "end": 6027
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6027,
    "end": 6033
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 6034,
    "end": 6035
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6035,
    "end": 6036
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 6036,
    "end": 6037
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6037,
    "end": 6038
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6038,
    "end": 6039
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 6039,
    "end": 6040
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6040,
    "end": 6041
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 6041,
    "end": 6042
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6042,
    "end": 6043
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6043,
    "end": 6044
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 6045,
    "end": 6046
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6046,
    "end": 6047
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6047,
    "end": 6053
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 6054,
    "end": 6055
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6055,
    "end": 6056
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 6056,
    "end": 6057
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6057,
    "end": 6058
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6058,
    "end": 6059
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 6059,
    "end": 6060
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6060,
    "end": 6061
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 6061,
    "end": 6064
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6064,
    "end": 6065
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6065,
    "end": 6066
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6066,
    "end": 6067
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 6068,
    "end": 6069
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6069,
    "end": 6070
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 6070,
    "end": 6071
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6071,
    "end": 6072
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6072,
    "end": 6073
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 6074,
    "end": 6075
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6075,
    "end": 6076
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 6076,
    "end": 6077
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6077,
    "end": 6078
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 6078,
    "end": 6079
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6079,
    "end": 6080
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6080,
    "end": 6081
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 6082,
    "end": 6083
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6083,
    "end": 6084
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 6084,
    "end": 6085
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6085,
    "end": 6086
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 6086,
    "end": 6089
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6089,
    "end": 6090
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6090,
    "end": 6091
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6091,
    "end": 6092
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 6115,
    "end": 6116
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 6117,
    "end": 6119
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 6120,
    "end": 6122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6122,
    "end": 6123
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 6124,
    "end": 6125
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6125,
    "end": 6126
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 6126,
    "end": 6127
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 6128,
    "end": 6130
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 6131,
    "end": 6133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6133,
    "end": 6134
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 6135,
    "end": 6136
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6136,
    "end": 6137
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 6137,
    "end": 6140
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6140,
    "end": 6141
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 6142,
    "end": 6144
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 6145,
    "end": 6147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6147,
    "end": 6148
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 6166,
    "end": 6170
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6170,
    "end": 6171
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 6171,
    "end": 6177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6177,
    "end": 6178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6178,
    "end": 6179
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 6180,
    "end": 6181
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 6182,
    "end": 6183
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6184,
    "end": 6185
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 6186,
    "end": 6187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6188,
    "end": 6189
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 6190,
    "end": 6193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6193,
    "end": 6194
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 6195,
    "end": 6199
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6199,
    "end": 6200
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 6200,
    "end": 6206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6206,
    "end": 6207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6207,
    "end": 6208
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 6209,
    "end": 6210
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 6211,
    "end": 6212
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6213,
    "end": 6214
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 6215,
    "end": 6216
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6216,
    "end": 6217
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 6217,
    "end": 6218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6219,
    "end": 6220
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 6221,
    "end": 6224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6224,
    "end": 6225
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 6226,
    "end": 6230
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6230,
    "end": 6231
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 6231,
    "end": 6237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6237,
    "end": 6238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6238,
    "end": 6239
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 6240,
    "end": 6241
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 6242,
    "end": 6243
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6244,
    "end": 6245
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 6246,
    "end": 6247
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6247,
    "end": 6248
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 6248,
    "end": 6251
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6251,
    "end": 6252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6253,
    "end": 6254
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 6255,
    "end": 6258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6258,
    "end": 6259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6288,
    "end": 6289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6289,
    "end": 6290
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6295,
    "end": 6296
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 6296,
    "end": 6297
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6297,
    "end": 6298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6298,
    "end": 6299
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 6300,
    "end": 6303
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6303,
    "end": 6304
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6309,
    "end": 6310
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 6310,
    "end": 6311
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6311,
    "end": 6312
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 6312,
    "end": 6313
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6313,
    "end": 6314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6314,
    "end": 6315
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 6316,
    "end": 6319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6319,
    "end": 6320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6321,
    "end": 6322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6322,
    "end": 6323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6323,
    "end": 6324
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6326,
    "end": 6331
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 6332,
    "end": 6334
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6335,
    "end": 6336
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6341,
    "end": 6347
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6348,
    "end": 6349
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 6349,
    "end": 6350
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6350,
    "end": 6351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6351,
    "end": 6352
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 6353,
    "end": 6356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6356,
    "end": 6357
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6362,
    "end": 6368
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6369,
    "end": 6370
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 6370,
    "end": 6371
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6371,
    "end": 6372
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 6372,
    "end": 6373
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6373,
    "end": 6374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6374,
    "end": 6375
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 6376,
    "end": 6379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6379,
    "end": 6380
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6386,
    "end": 6387
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 6387,
    "end": 6388
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6388,
    "end": 6389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6389,
    "end": 6390
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 6391,
    "end": 6394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6394,
    "end": 6395
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6400,
    "end": 6401
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 6401,
    "end": 6402
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6402,
    "end": 6403
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 6403,
    "end": 6404
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6404,
    "end": 6405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6405,
    "end": 6406
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 6407,
    "end": 6410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6410,
    "end": 6411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6412,
    "end": 6413
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6436,
    "end": 6445
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 6446,
    "end": 6453
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6454,
    "end": 6455
  },
  {
    "type": "Identifier",
    "value": "method1",
    "start": 6460,
    "end": 6467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6467,
    "end": 6468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6468,
    "end": 6469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6469,
    "end": 6470
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6471,
    "end": 6477
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 6478,
    "end": 6479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6479,
    "end": 6480
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 6485,
    "end": 6492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6492,
    "end": 6493
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6493,
    "end": 6494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6494,
    "end": 6495
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6496,
    "end": 6503
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6503,
    "end": 6504
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6504,
    "end": 6510
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 6511,
    "end": 6512
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6512,
    "end": 6513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6513,
    "end": 6514
  },
  {
    "type": "Identifier",
    "value": "method3",
    "start": 6519,
    "end": 6526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6526,
    "end": 6527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6527,
    "end": 6528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6528,
    "end": 6529
  },
  {
    "type": "Identifier",
    "value": "AsyncIterableIterator",
    "start": 6530,
    "end": 6551
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6551,
    "end": 6552
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6552,
    "end": 6558
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 6559,
    "end": 6560
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6560,
    "end": 6561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6561,
    "end": 6562
  },
  {
    "type": "Identifier",
    "value": "method4",
    "start": 6567,
    "end": 6574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6574,
    "end": 6575
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6575,
    "end": 6576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6576,
    "end": 6577
  },
  {
    "type": "Identifier",
    "value": "IterableIterator",
    "start": 6578,
    "end": 6594
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6594,
    "end": 6595
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6595,
    "end": 6601
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 6602,
    "end": 6603
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6603,
    "end": 6604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6604,
    "end": 6605
  },
  {
    "type": "Identifier",
    "value": "method5",
    "start": 6610,
    "end": 6617
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6617,
    "end": 6618
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 6618,
    "end": 6619
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6619,
    "end": 6620
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6620,
    "end": 6621
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6622,
    "end": 6628
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 6629,
    "end": 6630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6630,
    "end": 6631
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6631,
    "end": 6632
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6633,
    "end": 6639
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 6640,
    "end": 6641
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6641,
    "end": 6642
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6643,
    "end": 6644
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6646,
    "end": 6651
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 6652,
    "end": 6654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6654,
    "end": 6655
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 6656,
    "end": 6663
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6664,
    "end": 6665
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6666,
    "end": 6667
  },
  {
    "type": "Identifier",
    "value": "method1",
    "start": 6672,
    "end": 6679
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6679,
    "end": 6680
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6680,
    "end": 6681
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6682,
    "end": 6683
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6692,
    "end": 6698
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 6699,
    "end": 6700
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6700,
    "end": 6701
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6761,
    "end": 6762
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6762,
    "end": 6763
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 6768,
    "end": 6773
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 6774,
    "end": 6781
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6781,
    "end": 6782
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6782,
    "end": 6783
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6784,
    "end": 6785
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6794,
    "end": 6800
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 6801,
    "end": 6802
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6802,
    "end": 6803
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6863,
    "end": 6864
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6864,
    "end": 6865
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 6870,
    "end": 6875
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 6876,
    "end": 6877
  },
  {
    "type": "Identifier",
    "value": "method3",
    "start": 6878,
    "end": 6885
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6885,
    "end": 6886
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6886,
    "end": 6887
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6888,
    "end": 6889
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 6898,
    "end": 6903
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 6904,
    "end": 6905
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6905,
    "end": 6906
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6965,
    "end": 6966
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6966,
    "end": 6967
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 6972,
    "end": 6973
  },
  {
    "type": "Identifier",
    "value": "method4",
    "start": 6974,
    "end": 6981
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6981,
    "end": 6982
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6982,
    "end": 6983
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6984,
    "end": 6985
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 6994,
    "end": 6999
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 7000,
    "end": 7001
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7001,
    "end": 7002
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7061,
    "end": 7062
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7062,
    "end": 7063
  },
  {
    "type": "Identifier",
    "value": "method5",
    "start": 7068,
    "end": 7075
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7075,
    "end": 7076
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 7076,
    "end": 7077
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7078,
    "end": 7079
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 7080,
    "end": 7081
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7081,
    "end": 7082
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7083,
    "end": 7084
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7146,
    "end": 7152
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 7153,
    "end": 7154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7154,
    "end": 7155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7160,
    "end": 7161
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7161,
    "end": 7162
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7163,
    "end": 7164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7164,
    "end": 7165
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7210,
    "end": 7215
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 7216,
    "end": 7218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7219,
    "end": 7220
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7221,
    "end": 7222
  },
  {
    "type": "Identifier",
    "value": "method1",
    "start": 7227,
    "end": 7234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7234,
    "end": 7235
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 7235,
    "end": 7236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7236,
    "end": 7237
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 7238,
    "end": 7244
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 7245,
    "end": 7246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7246,
    "end": 7247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7247,
    "end": 7248
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 7249,
    "end": 7255
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 7256,
    "end": 7257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7258,
    "end": 7259
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7268,
    "end": 7274
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 7275,
    "end": 7276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7276,
    "end": 7277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7282,
    "end": 7283
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7283,
    "end": 7284
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 7289,
    "end": 7296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7296,
    "end": 7297
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 7297,
    "end": 7298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7298,
    "end": 7299
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 7300,
    "end": 7301
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7301,
    "end": 7302
  },
  {
    "type": "String",
    "value": "\"readonlyType\"",
    "start": 7302,
    "end": 7316
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7316,
    "end": 7317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7317,
    "end": 7318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7318,
    "end": 7319
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 7320,
    "end": 7321
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7321,
    "end": 7322
  },
  {
    "type": "String",
    "value": "\"readonlyType\"",
    "start": 7322,
    "end": 7336
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7336,
    "end": 7337
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7338,
    "end": 7339
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7348,
    "end": 7354
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 7355,
    "end": 7356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7356,
    "end": 7357
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7362,
    "end": 7363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7364,
    "end": 7365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7365,
    "end": 7366
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7368,
    "end": 7373
  },
  {
    "type": "Identifier",
    "value": "ce0",
    "start": 7374,
    "end": 7377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7378,
    "end": 7379
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7380,
    "end": 7385
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7386,
    "end": 7387
  },
  {
    "type": "Identifier",
    "value": "method1",
    "start": 7392,
    "end": 7399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7399,
    "end": 7400
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 7400,
    "end": 7401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7401,
    "end": 7402
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 7403,
    "end": 7409
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 7410,
    "end": 7411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7411,
    "end": 7412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7412,
    "end": 7413
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 7414,
    "end": 7420
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 7421,
    "end": 7422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7423,
    "end": 7424
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7433,
    "end": 7439
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 7440,
    "end": 7441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7441,
    "end": 7442
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7447,
    "end": 7448
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 7453,
    "end": 7460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7460,
    "end": 7461
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 7461,
    "end": 7462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7462,
    "end": 7463
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 7464,
    "end": 7465
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7465,
    "end": 7466
  },
  {
    "type": "String",
    "value": "\"readonlyType\"",
    "start": 7466,
    "end": 7480
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7480,
    "end": 7481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7481,
    "end": 7482
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7482,
    "end": 7483
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 7484,
    "end": 7485
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7485,
    "end": 7486
  },
  {
    "type": "String",
    "value": "\"readonlyType\"",
    "start": 7486,
    "end": 7500
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7500,
    "end": 7501
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7502,
    "end": 7503
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7512,
    "end": 7518
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 7519,
    "end": 7520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7520,
    "end": 7521
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7526,
    "end": 7527
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7528,
    "end": 7529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7529,
    "end": 7530
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7532,
    "end": 7540
  },
  {
    "type": "Identifier",
    "value": "funcInferredReturnType",
    "start": 7541,
    "end": 7563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7563,
    "end": 7564
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 7564,
    "end": 7567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7567,
    "end": 7568
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7569,
    "end": 7570
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 7571,
    "end": 7577
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7577,
    "end": 7578
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 7578,
    "end": 7579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7579,
    "end": 7580
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 7581,
    "end": 7587
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 7588,
    "end": 7589
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7589,
    "end": 7590
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7590,
    "end": 7591
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 7592,
    "end": 7596
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7597,
    "end": 7598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7598,
    "end": 7599
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7600,
    "end": 7601
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7606,
    "end": 7612
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 7613,
    "end": 7616
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7616,
    "end": 7617
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7618,
    "end": 7619
  }
]
```
