__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null,
        "start": 221,
        "end": 231
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasFlag",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 262
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 268,
                      "end": 274
                    },
                    "start": 266,
                    "end": 274
                  },
                  "start": 263,
                  "end": 274
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "flag",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 282,
                      "end": 288
                    },
                    "start": 280,
                    "end": 288
                  },
                  "start": 276,
                  "end": 288
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 308,
                          "end": 311
                        },
                        "operator": "&",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "flag",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 314,
                          "end": 318
                        },
                        "start": 308,
                        "end": 318
                      },
                      "operator": "!=",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 323,
                        "end": 324
                      },
                      "start": 307,
                      "end": 324
                    },
                    "start": 300,
                    "end": 325
                  }
                ],
                "start": 290,
                "end": 331
              },
              "expression": false,
              "start": 246,
              "end": 331
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 239,
            "end": 331
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ErrorRecoverySet",
                "optional": false,
                "typeAnnotation": null,
                "start": 349,
                "end": 365
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "None",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 376,
                      "end": 380
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 383,
                      "end": 384
                    },
                    "computed": false,
                    "start": 376,
                    "end": 384
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Comma",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 394,
                      "end": 399
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 402,
                      "end": 403
                    },
                    "computed": false,
                    "start": 394,
                    "end": 403
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SColon",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 422,
                      "end": 428
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 431,
                        "end": 432
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 436,
                        "end": 437
                      },
                      "start": 431,
                      "end": 437
                    },
                    "computed": false,
                    "start": 422,
                    "end": 437
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Asg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 457,
                      "end": 460
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 463,
                        "end": 464
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 468,
                        "end": 469
                      },
                      "start": 463,
                      "end": 469
                    },
                    "computed": false,
                    "start": 457,
                    "end": 469
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "BinOp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 486,
                      "end": 491
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 494,
                        "end": 495
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 499,
                        "end": 500
                      },
                      "start": 494,
                      "end": 500
                    },
                    "computed": false,
                    "start": 486,
                    "end": 500
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RBrack",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 735,
                      "end": 741
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 744,
                        "end": 745
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 749,
                        "end": 750
                      },
                      "start": 744,
                      "end": 750
                    },
                    "computed": false,
                    "start": 735,
                    "end": 750
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RCurly",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 770,
                      "end": 776
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 779,
                        "end": 780
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 784,
                        "end": 785
                      },
                      "start": 779,
                      "end": 785
                    },
                    "computed": false,
                    "start": 770,
                    "end": 785
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RParen",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 805,
                      "end": 811
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 814,
                        "end": 815
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 819,
                        "end": 820
                      },
                      "start": 814,
                      "end": 820
                    },
                    "computed": false,
                    "start": 805,
                    "end": 820
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Dot",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 840,
                      "end": 843
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 846,
                        "end": 847
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 851,
                        "end": 852
                      },
                      "start": 846,
                      "end": 852
                    },
                    "computed": false,
                    "start": 840,
                    "end": 852
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Colon",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 869,
                      "end": 874
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 877,
                        "end": 878
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8",
                        "start": 882,
                        "end": 883
                      },
                      "start": 877,
                      "end": 883
                    },
                    "computed": false,
                    "start": 869,
                    "end": 883
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PrimType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 902,
                      "end": 910
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 913,
                        "end": 914
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 9,
                        "raw": "9",
                        "start": 918,
                        "end": 919
                      },
                      "start": 913,
                      "end": 919
                    },
                    "computed": false,
                    "start": 902,
                    "end": 919
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 956,
                      "end": 961
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 964,
                        "end": 965
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 969,
                        "end": 971
                      },
                      "start": 964,
                      "end": 971
                    },
                    "computed": false,
                    "start": 956,
                    "end": 971
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LCurly",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 993,
                      "end": 999
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1002,
                        "end": 1003
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 11,
                        "raw": "11",
                        "start": 1007,
                        "end": 1009
                      },
                      "start": 1002,
                      "end": 1009
                    },
                    "computed": false,
                    "start": 993,
                    "end": 1009
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PreOp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1029,
                      "end": 1034
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1037,
                        "end": 1038
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 1042,
                        "end": 1044
                      },
                      "start": 1037,
                      "end": 1044
                    },
                    "computed": false,
                    "start": 1029,
                    "end": 1044
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1079,
                      "end": 1085
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1088,
                        "end": 1089
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 13,
                        "raw": "13",
                        "start": 1093,
                        "end": 1095
                      },
                      "start": 1088,
                      "end": 1095
                    },
                    "computed": false,
                    "start": 1079,
                    "end": 1095
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LParen",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1115,
                      "end": 1121
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1124,
                        "end": 1125
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 14,
                        "raw": "14",
                        "start": 1129,
                        "end": 1131
                      },
                      "start": 1124,
                      "end": 1131
                    },
                    "computed": false,
                    "start": 1115,
                    "end": 1131
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LBrack",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1151,
                      "end": 1157
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1160,
                        "end": 1161
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 15,
                        "raw": "15",
                        "start": 1165,
                        "end": 1167
                      },
                      "start": 1160,
                      "end": 1167
                    },
                    "computed": false,
                    "start": 1151,
                    "end": 1167
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Scope",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1187,
                      "end": 1192
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1195,
                        "end": 1196
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 16,
                        "raw": "16",
                        "start": 1200,
                        "end": 1202
                      },
                      "start": 1195,
                      "end": 1202
                    },
                    "computed": false,
                    "start": 1187,
                    "end": 1202
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "In",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1221,
                      "end": 1223
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1226,
                        "end": 1227
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 17,
                        "raw": "17",
                        "start": 1231,
                        "end": 1233
                      },
                      "start": 1226,
                      "end": 1233
                    },
                    "computed": false,
                    "start": 1221,
                    "end": 1233
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SCase",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1249,
                      "end": 1254
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1257,
                        "end": 1258
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 18,
                        "raw": "18",
                        "start": 1262,
                        "end": 1264
                      },
                      "start": 1257,
                      "end": 1264
                    },
                    "computed": false,
                    "start": 1249,
                    "end": 1264
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Else",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1291,
                      "end": 1295
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1298,
                        "end": 1299
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 19,
                        "raw": "19",
                        "start": 1303,
                        "end": 1305
                      },
                      "start": 1298,
                      "end": 1305
                    },
                    "computed": false,
                    "start": 1291,
                    "end": 1305
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Catch",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1323,
                      "end": 1328
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1331,
                        "end": 1332
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 20,
                        "raw": "20",
                        "start": 1336,
                        "end": 1338
                      },
                      "start": 1331,
                      "end": 1338
                    },
                    "computed": false,
                    "start": 1323,
                    "end": 1338
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Var",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1366,
                      "end": 1369
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1372,
                        "end": 1373
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 21,
                        "raw": "21",
                        "start": 1377,
                        "end": 1379
                      },
                      "start": 1372,
                      "end": 1379
                    },
                    "computed": false,
                    "start": 1366,
                    "end": 1379
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Stmt",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1393,
                      "end": 1397
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1400,
                        "end": 1401
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 22,
                        "raw": "22",
                        "start": 1405,
                        "end": 1407
                      },
                      "start": 1400,
                      "end": 1407
                    },
                    "computed": false,
                    "start": 1393,
                    "end": 1407
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "While",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1483,
                      "end": 1488
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1491,
                        "end": 1492
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 23,
                        "raw": "23",
                        "start": 1496,
                        "end": 1498
                      },
                      "start": 1491,
                      "end": 1498
                    },
                    "computed": false,
                    "start": 1483,
                    "end": 1498
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ID",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1517,
                      "end": 1519
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1522,
                        "end": 1523
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 24,
                        "raw": "24",
                        "start": 1527,
                        "end": 1529
                      },
                      "start": 1522,
                      "end": 1529
                    },
                    "computed": false,
                    "start": 1517,
                    "end": 1529
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Prefix",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1545,
                      "end": 1551
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1554,
                        "end": 1555
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 25,
                        "raw": "25",
                        "start": 1559,
                        "end": 1561
                      },
                      "start": 1554,
                      "end": 1561
                    },
                    "computed": false,
                    "start": 1545,
                    "end": 1561
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Literal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1602,
                      "end": 1609
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1612,
                        "end": 1613
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 26,
                        "raw": "26",
                        "start": 1617,
                        "end": 1619
                      },
                      "start": 1612,
                      "end": 1619
                    },
                    "computed": false,
                    "start": 1602,
                    "end": 1619
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RLit",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1655,
                      "end": 1659
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1662,
                        "end": 1663
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 27,
                        "raw": "27",
                        "start": 1667,
                        "end": 1669
                      },
                      "start": 1662,
                      "end": 1669
                    },
                    "computed": false,
                    "start": 1655,
                    "end": 1669
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Func",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1706,
                      "end": 1710
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1713,
                        "end": 1714
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 28,
                        "raw": "28",
                        "start": 1718,
                        "end": 1720
                      },
                      "start": 1713,
                      "end": 1720
                    },
                    "computed": false,
                    "start": 1706,
                    "end": 1720
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EOF",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1742,
                      "end": 1745
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1748,
                        "end": 1749
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 29,
                        "raw": "29",
                        "start": 1753,
                        "end": 1755
                      },
                      "start": 1748,
                      "end": 1755
                    },
                    "computed": false,
                    "start": 1742,
                    "end": 1755
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TypeScriptS",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1821,
                      "end": 1832
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1835,
                        "end": 1836
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 30,
                        "raw": "30",
                        "start": 1840,
                        "end": 1842
                      },
                      "start": 1835,
                      "end": 1842
                    },
                    "computed": false,
                    "start": 1821,
                    "end": 1842
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ExprStart",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1923,
                      "end": 1932
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "SColon",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1935,
                                            "end": 1941
                                          },
                                          "operator": "|",
                                          "right": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "AddOp",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1944,
                                            "end": 1949
                                          },
                                          "start": 1935,
                                          "end": 1949
                                        },
                                        "operator": "|",
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "LCurly",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1952,
                                          "end": 1958
                                        },
                                        "start": 1935,
                                        "end": 1958
                                      },
                                      "operator": "|",
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "PreOp",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1961,
                                        "end": 1966
                                      },
                                      "start": 1935,
                                      "end": 1966
                                    },
                                    "operator": "|",
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "RegExp",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1969,
                                      "end": 1975
                                    },
                                    "start": 1935,
                                    "end": 1975
                                  },
                                  "operator": "|",
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "LParen",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1978,
                                    "end": 1984
                                  },
                                  "start": 1935,
                                  "end": 1984
                                },
                                "operator": "|",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "LBrack",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1987,
                                  "end": 1993
                                },
                                "start": 1935,
                                "end": 1993
                              },
                              "operator": "|",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ID",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1996,
                                "end": 1998
                              },
                              "start": 1935,
                              "end": 1998
                            },
                            "operator": "|",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Prefix",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2001,
                              "end": 2007
                            },
                            "start": 1935,
                            "end": 2007
                          },
                          "operator": "|",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RLit",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2010,
                            "end": 2014
                          },
                          "start": 1935,
                          "end": 2014
                        },
                        "operator": "|",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Func",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2017,
                          "end": 2021
                        },
                        "start": 1935,
                        "end": 2021
                      },
                      "operator": "|",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Literal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2024,
                        "end": 2031
                      },
                      "start": 1935,
                      "end": 2031
                    },
                    "computed": false,
                    "start": 1923,
                    "end": 2031
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "StmtStart",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2041,
                      "end": 2050
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ExprStart",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2053,
                                "end": 2062
                              },
                              "operator": "|",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SColon",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2065,
                                "end": 2071
                              },
                              "start": 2053,
                              "end": 2071
                            },
                            "operator": "|",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Var",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2074,
                              "end": 2077
                            },
                            "start": 2053,
                            "end": 2077
                          },
                          "operator": "|",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Stmt",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2080,
                            "end": 2084
                          },
                          "start": 2053,
                          "end": 2084
                        },
                        "operator": "|",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "While",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2087,
                          "end": 2092
                        },
                        "start": 2053,
                        "end": 2092
                      },
                      "operator": "|",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TypeScriptS",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2095,
                        "end": 2106
                      },
                      "start": 2053,
                      "end": 2106
                    },
                    "computed": false,
                    "start": 2041,
                    "end": 2106
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Postfix",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2116,
                      "end": 2123
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Dot",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2126,
                          "end": 2129
                        },
                        "operator": "|",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "LParen",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2132,
                          "end": 2138
                        },
                        "start": 2126,
                        "end": 2138
                      },
                      "operator": "|",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "LBrack",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2141,
                        "end": 2147
                      },
                      "start": 2126,
                      "end": 2147
                    },
                    "computed": false,
                    "start": 2116,
                    "end": 2147
                  }
                ],
                "start": 366,
                "end": 2154
              },
              "const": false,
              "declare": false,
              "start": 344,
              "end": 2154
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 337,
            "end": 2154
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "AllowedElements",
                "optional": false,
                "typeAnnotation": null,
                "start": 2172,
                "end": 2187
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "None",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2198,
                      "end": 2202
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 2205,
                      "end": 2206
                    },
                    "computed": false,
                    "start": 2198,
                    "end": 2206
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ModuleDeclarations",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2216,
                      "end": 2234
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2237,
                        "end": 2238
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 2242,
                        "end": 2243
                      },
                      "start": 2237,
                      "end": 2243
                    },
                    "computed": false,
                    "start": 2216,
                    "end": 2243
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ClassDeclarations",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2253,
                      "end": 2270
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2273,
                        "end": 2274
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 2278,
                        "end": 2279
                      },
                      "start": 2273,
                      "end": 2279
                    },
                    "computed": false,
                    "start": 2253,
                    "end": 2279
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InterfaceDeclarations",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2289,
                      "end": 2310
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2313,
                        "end": 2314
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 2318,
                        "end": 2319
                      },
                      "start": 2313,
                      "end": 2319
                    },
                    "computed": false,
                    "start": 2289,
                    "end": 2319
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AmbientDeclarations",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2329,
                      "end": 2348
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2351,
                        "end": 2352
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 2356,
                        "end": 2358
                      },
                      "start": 2351,
                      "end": 2358
                    },
                    "computed": false,
                    "start": 2329,
                    "end": 2358
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Properties",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2368,
                      "end": 2378
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2381,
                        "end": 2382
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 11,
                        "raw": "11",
                        "start": 2386,
                        "end": 2388
                      },
                      "start": 2381,
                      "end": 2388
                    },
                    "computed": false,
                    "start": 2368,
                    "end": 2388
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Global",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2399,
                      "end": 2405
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ModuleDeclarations",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2408,
                            "end": 2426
                          },
                          "operator": "|",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ClassDeclarations",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2429,
                            "end": 2446
                          },
                          "start": 2408,
                          "end": 2446
                        },
                        "operator": "|",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "InterfaceDeclarations",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2449,
                          "end": 2470
                        },
                        "start": 2408,
                        "end": 2470
                      },
                      "operator": "|",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AmbientDeclarations",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2473,
                        "end": 2492
                      },
                      "start": 2408,
                      "end": 2492
                    },
                    "computed": false,
                    "start": 2399,
                    "end": 2492
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "QuickParse",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2502,
                      "end": 2512
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Global",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2515,
                        "end": 2521
                      },
                      "operator": "|",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Properties",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2524,
                        "end": 2534
                      },
                      "start": 2515,
                      "end": 2534
                    },
                    "computed": false,
                    "start": 2502,
                    "end": 2534
                  }
                ],
                "start": 2188,
                "end": 2541
              },
              "const": false,
              "declare": false,
              "start": 2167,
              "end": 2541
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2160,
            "end": 2541
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Modifiers",
                "optional": false,
                "typeAnnotation": null,
                "start": 2559,
                "end": 2568
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "None",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2579,
                      "end": 2583
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 2586,
                      "end": 2587
                    },
                    "computed": false,
                    "start": 2579,
                    "end": 2587
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2597,
                      "end": 2604
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2607,
                      "end": 2608
                    },
                    "computed": false,
                    "start": 2597,
                    "end": 2608
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2618,
                      "end": 2624
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2627,
                        "end": 2628
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2632,
                        "end": 2633
                      },
                      "start": 2627,
                      "end": 2633
                    },
                    "computed": false,
                    "start": 2618,
                    "end": 2633
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2643,
                      "end": 2651
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2654,
                        "end": 2655
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 2659,
                        "end": 2660
                      },
                      "start": 2654,
                      "end": 2660
                    },
                    "computed": false,
                    "start": 2643,
                    "end": 2660
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Ambient",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2670,
                      "end": 2677
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2680,
                        "end": 2681
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 2685,
                        "end": 2686
                      },
                      "start": 2680,
                      "end": 2686
                    },
                    "computed": false,
                    "start": 2670,
                    "end": 2686
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Exported",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2696,
                      "end": 2704
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2707,
                        "end": 2708
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 2712,
                        "end": 2713
                      },
                      "start": 2707,
                      "end": 2713
                    },
                    "computed": false,
                    "start": 2696,
                    "end": 2713
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Getter",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2723,
                      "end": 2729
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2732,
                        "end": 2733
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 2737,
                        "end": 2738
                      },
                      "start": 2732,
                      "end": 2738
                    },
                    "computed": false,
                    "start": 2723,
                    "end": 2738
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Setter",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2748,
                      "end": 2754
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2757,
                        "end": 2758
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 2762,
                        "end": 2763
                      },
                      "start": 2757,
                      "end": 2763
                    },
                    "computed": false,
                    "start": 2748,
                    "end": 2763
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Static",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2773,
                      "end": 2779
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2782,
                        "end": 2783
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 2787,
                        "end": 2788
                      },
                      "start": 2782,
                      "end": 2788
                    },
                    "computed": false,
                    "start": 2773,
                    "end": 2788
                  }
                ],
                "start": 2569,
                "end": 2795
              },
              "const": false,
              "declare": false,
              "start": 2554,
              "end": 2795
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2547,
            "end": 2795
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ASTFlags",
                "optional": false,
                "typeAnnotation": null,
                "start": 2813,
                "end": 2821
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "None",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2832,
                      "end": 2836
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 2839,
                      "end": 2840
                    },
                    "computed": false,
                    "start": 2832,
                    "end": 2840
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ExplicitSemicolon",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2850,
                      "end": 2867
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2870,
                      "end": 2871
                    },
                    "computed": false,
                    "start": 2850,
                    "end": 2871
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AutomaticSemicolon",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2929,
                      "end": 2947
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2950,
                        "end": 2951
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2955,
                        "end": 2956
                      },
                      "start": 2950,
                      "end": 2956
                    },
                    "computed": false,
                    "start": 2929,
                    "end": 2956
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Writeable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3015,
                      "end": 3024
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3027,
                        "end": 3028
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 3032,
                        "end": 3033
                      },
                      "start": 3027,
                      "end": 3033
                    },
                    "computed": false,
                    "start": 3015,
                    "end": 3033
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3080,
                      "end": 3085
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3088,
                        "end": 3089
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 3093,
                        "end": 3094
                      },
                      "start": 3088,
                      "end": 3094
                    },
                    "computed": false,
                    "start": 3080,
                    "end": 3094
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DotLHSPartial",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3125,
                      "end": 3138
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3141,
                        "end": 3142
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 3146,
                        "end": 3147
                      },
                      "start": 3141,
                      "end": 3147
                    },
                    "computed": false,
                    "start": 3125,
                    "end": 3147
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DotLHS",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3212,
                      "end": 3218
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3221,
                        "end": 3222
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 3226,
                        "end": 3227
                      },
                      "start": 3221,
                      "end": 3227
                    },
                    "computed": false,
                    "start": 3212,
                    "end": 3227
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IsStatement",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3270,
                      "end": 3281
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3284,
                        "end": 3285
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 3289,
                        "end": 3290
                      },
                      "start": 3284,
                      "end": 3290
                    },
                    "computed": false,
                    "start": 3270,
                    "end": 3290
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "StrictMode",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3323,
                      "end": 3333
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3336,
                        "end": 3337
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 3341,
                        "end": 3342
                      },
                      "start": 3336,
                      "end": 3342
                    },
                    "computed": false,
                    "start": 3323,
                    "end": 3342
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PossibleOptionalParameter",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3394,
                      "end": 3419
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3422,
                        "end": 3423
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8",
                        "start": 3427,
                        "end": 3428
                      },
                      "start": 3422,
                      "end": 3428
                    },
                    "computed": false,
                    "start": 3394,
                    "end": 3428
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ClassBaseConstructorCall",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3438,
                      "end": 3462
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3465,
                        "end": 3466
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 9,
                        "raw": "9",
                        "start": 3470,
                        "end": 3471
                      },
                      "start": 3465,
                      "end": 3471
                    },
                    "computed": false,
                    "start": 3438,
                    "end": 3471
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "OptionalName",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3481,
                      "end": 3493
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3496,
                        "end": 3497
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 3501,
                        "end": 3503
                      },
                      "start": 3496,
                      "end": 3503
                    },
                    "computed": false,
                    "start": 3481,
                    "end": 3503
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SkipNextRParen",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3898,
                      "end": 3912
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3915,
                        "end": 3916
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 11,
                        "raw": "11",
                        "start": 3920,
                        "end": 3922
                      },
                      "start": 3915,
                      "end": 3922
                    },
                    "computed": false,
                    "start": 3898,
                    "end": 3922
                  }
                ],
                "start": 2822,
                "end": 3930
              },
              "const": false,
              "declare": false,
              "start": 2808,
              "end": 3930
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2801,
            "end": 3930
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "DeclFlags",
                "optional": false,
                "typeAnnotation": null,
                "start": 3948,
                "end": 3957
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "None",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3968,
                      "end": 3972
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 3975,
                      "end": 3976
                    },
                    "computed": false,
                    "start": 3968,
                    "end": 3976
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Exported",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3986,
                      "end": 3994
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3997,
                      "end": 3998
                    },
                    "computed": false,
                    "start": 3986,
                    "end": 3998
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4008,
                      "end": 4015
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4018,
                        "end": 4019
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4023,
                        "end": 4024
                      },
                      "start": 4018,
                      "end": 4024
                    },
                    "computed": false,
                    "start": 4008,
                    "end": 4024
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4034,
                      "end": 4040
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4043,
                        "end": 4044
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 4048,
                        "end": 4049
                      },
                      "start": 4043,
                      "end": 4049
                    },
                    "computed": false,
                    "start": 4034,
                    "end": 4049
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Ambient",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4059,
                      "end": 4066
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4069,
                        "end": 4070
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 4074,
                        "end": 4075
                      },
                      "start": 4069,
                      "end": 4075
                    },
                    "computed": false,
                    "start": 4059,
                    "end": 4075
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Static",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4085,
                      "end": 4091
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4094,
                        "end": 4095
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 4099,
                        "end": 4100
                      },
                      "start": 4094,
                      "end": 4100
                    },
                    "computed": false,
                    "start": 4085,
                    "end": 4100
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LocalStatic",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4110,
                      "end": 4121
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4124,
                        "end": 4125
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 4129,
                        "end": 4130
                      },
                      "start": 4124,
                      "end": 4130
                    },
                    "computed": false,
                    "start": 4110,
                    "end": 4130
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GetAccessor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4140,
                      "end": 4151
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4154,
                        "end": 4155
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 4159,
                        "end": 4160
                      },
                      "start": 4154,
                      "end": 4160
                    },
                    "computed": false,
                    "start": 4140,
                    "end": 4160
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SetAccessor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4170,
                      "end": 4181
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4184,
                        "end": 4185
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 4189,
                        "end": 4190
                      },
                      "start": 4184,
                      "end": 4190
                    },
                    "computed": false,
                    "start": 4170,
                    "end": 4190
                  }
                ],
                "start": 3958,
                "end": 4197
              },
              "const": false,
              "declare": false,
              "start": 3943,
              "end": 4197
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3936,
            "end": 4197
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ModuleFlags",
                "optional": false,
                "typeAnnotation": null,
                "start": 4215,
                "end": 4226
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "None",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4237,
                      "end": 4241
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 4244,
                      "end": 4245
                    },
                    "computed": false,
                    "start": 4237,
                    "end": 4245
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Exported",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4255,
                      "end": 4263
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4266,
                      "end": 4267
                    },
                    "computed": false,
                    "start": 4255,
                    "end": 4267
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4277,
                      "end": 4284
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4287,
                        "end": 4288
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4292,
                        "end": 4293
                      },
                      "start": 4287,
                      "end": 4293
                    },
                    "computed": false,
                    "start": 4277,
                    "end": 4293
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4303,
                      "end": 4309
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4312,
                        "end": 4313
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 4317,
                        "end": 4318
                      },
                      "start": 4312,
                      "end": 4318
                    },
                    "computed": false,
                    "start": 4303,
                    "end": 4318
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Ambient",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4328,
                      "end": 4335
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4338,
                        "end": 4339
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 4343,
                        "end": 4344
                      },
                      "start": 4338,
                      "end": 4344
                    },
                    "computed": false,
                    "start": 4328,
                    "end": 4344
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Static",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4354,
                      "end": 4360
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4363,
                        "end": 4364
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 4368,
                        "end": 4369
                      },
                      "start": 4363,
                      "end": 4369
                    },
                    "computed": false,
                    "start": 4354,
                    "end": 4369
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LocalStatic",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4379,
                      "end": 4390
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4393,
                        "end": 4394
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 4398,
                        "end": 4399
                      },
                      "start": 4393,
                      "end": 4399
                    },
                    "computed": false,
                    "start": 4379,
                    "end": 4399
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GetAccessor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4409,
                      "end": 4420
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4423,
                        "end": 4424
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 4428,
                        "end": 4429
                      },
                      "start": 4423,
                      "end": 4429
                    },
                    "computed": false,
                    "start": 4409,
                    "end": 4429
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SetAccessor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4439,
                      "end": 4450
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4453,
                        "end": 4454
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 4458,
                        "end": 4459
                      },
                      "start": 4453,
                      "end": 4459
                    },
                    "computed": false,
                    "start": 4439,
                    "end": 4459
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IsEnum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4469,
                      "end": 4475
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4478,
                        "end": 4479
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8",
                        "start": 4483,
                        "end": 4484
                      },
                      "start": 4478,
                      "end": 4484
                    },
                    "computed": false,
                    "start": 4469,
                    "end": 4484
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ShouldEmitModuleDecl",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4494,
                      "end": 4514
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4517,
                        "end": 4518
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 9,
                        "raw": "9",
                        "start": 4522,
                        "end": 4523
                      },
                      "start": 4517,
                      "end": 4523
                    },
                    "computed": false,
                    "start": 4494,
                    "end": 4523
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IsWholeFile",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4533,
                      "end": 4544
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4547,
                        "end": 4548
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 4552,
                        "end": 4554
                      },
                      "start": 4547,
                      "end": 4554
                    },
                    "computed": false,
                    "start": 4533,
                    "end": 4554
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IsDynamic",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4564,
                      "end": 4573
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4576,
                        "end": 4577
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 11,
                        "raw": "11",
                        "start": 4581,
                        "end": 4583
                      },
                      "start": 4576,
                      "end": 4583
                    },
                    "computed": false,
                    "start": 4564,
                    "end": 4583
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MustCaptureThis",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4593,
                      "end": 4608
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4611,
                        "end": 4612
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 4616,
                        "end": 4618
                      },
                      "start": 4611,
                      "end": 4618
                    },
                    "computed": false,
                    "start": 4593,
                    "end": 4618
                  }
                ],
                "start": 4227,
                "end": 4625
              },
              "const": false,
              "declare": false,
              "start": 4210,
              "end": 4625
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4203,
            "end": 4625
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "SymbolFlags",
                "optional": false,
                "typeAnnotation": null,
                "start": 4643,
                "end": 4654
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "None",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4665,
                      "end": 4669
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 4672,
                      "end": 4673
                    },
                    "computed": false,
                    "start": 4665,
                    "end": 4673
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Exported",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4683,
                      "end": 4691
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4694,
                      "end": 4695
                    },
                    "computed": false,
                    "start": 4683,
                    "end": 4695
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4705,
                      "end": 4712
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4715,
                        "end": 4716
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4720,
                        "end": 4721
                      },
                      "start": 4715,
                      "end": 4721
                    },
                    "computed": false,
                    "start": 4705,
                    "end": 4721
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4731,
                      "end": 4737
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4740,
                        "end": 4741
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 4745,
                        "end": 4746
                      },
                      "start": 4740,
                      "end": 4746
                    },
                    "computed": false,
                    "start": 4731,
                    "end": 4746
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Ambient",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4756,
                      "end": 4763
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4766,
                        "end": 4767
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 4771,
                        "end": 4772
                      },
                      "start": 4766,
                      "end": 4772
                    },
                    "computed": false,
                    "start": 4756,
                    "end": 4772
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Static",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4782,
                      "end": 4788
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4791,
                        "end": 4792
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 4796,
                        "end": 4797
                      },
                      "start": 4791,
                      "end": 4797
                    },
                    "computed": false,
                    "start": 4782,
                    "end": 4797
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LocalStatic",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4807,
                      "end": 4818
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4821,
                        "end": 4822
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 4826,
                        "end": 4827
                      },
                      "start": 4821,
                      "end": 4827
                    },
                    "computed": false,
                    "start": 4807,
                    "end": 4827
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GetAccessor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4837,
                      "end": 4848
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4851,
                        "end": 4852
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 4856,
                        "end": 4857
                      },
                      "start": 4851,
                      "end": 4857
                    },
                    "computed": false,
                    "start": 4837,
                    "end": 4857
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SetAccessor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4867,
                      "end": 4878
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4881,
                        "end": 4882
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 4886,
                        "end": 4887
                      },
                      "start": 4881,
                      "end": 4887
                    },
                    "computed": false,
                    "start": 4867,
                    "end": 4887
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Property",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4897,
                      "end": 4905
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4908,
                        "end": 4909
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8",
                        "start": 4913,
                        "end": 4914
                      },
                      "start": 4908,
                      "end": 4914
                    },
                    "computed": false,
                    "start": 4897,
                    "end": 4914
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4924,
                      "end": 4932
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4935,
                        "end": 4936
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 9,
                        "raw": "9",
                        "start": 4940,
                        "end": 4941
                      },
                      "start": 4935,
                      "end": 4941
                    },
                    "computed": false,
                    "start": 4924,
                    "end": 4941
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ModuleMember",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4951,
                      "end": 4963
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4966,
                        "end": 4967
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 4971,
                        "end": 4973
                      },
                      "start": 4966,
                      "end": 4973
                    },
                    "computed": false,
                    "start": 4951,
                    "end": 4973
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InterfaceMember",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4983,
                      "end": 4998
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5001,
                        "end": 5002
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 11,
                        "raw": "11",
                        "start": 5006,
                        "end": 5008
                      },
                      "start": 5001,
                      "end": 5008
                    },
                    "computed": false,
                    "start": 4983,
                    "end": 5008
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ClassMember",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5018,
                      "end": 5029
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5032,
                        "end": 5033
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 5037,
                        "end": 5039
                      },
                      "start": 5032,
                      "end": 5039
                    },
                    "computed": false,
                    "start": 5018,
                    "end": 5039
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "BuiltIn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5049,
                      "end": 5056
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5059,
                        "end": 5060
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 13,
                        "raw": "13",
                        "start": 5064,
                        "end": 5066
                      },
                      "start": 5059,
                      "end": 5066
                    },
                    "computed": false,
                    "start": 5049,
                    "end": 5066
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TypeSetDuringScopeAssignment",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5076,
                      "end": 5104
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5107,
                        "end": 5108
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 14,
                        "raw": "14",
                        "start": 5112,
                        "end": 5114
                      },
                      "start": 5107,
                      "end": 5114
                    },
                    "computed": false,
                    "start": 5076,
                    "end": 5114
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Constant",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5124,
                      "end": 5132
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5135,
                        "end": 5136
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 15,
                        "raw": "15",
                        "start": 5140,
                        "end": 5142
                      },
                      "start": 5135,
                      "end": 5142
                    },
                    "computed": false,
                    "start": 5124,
                    "end": 5142
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Optional",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5152,
                      "end": 5160
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5163,
                        "end": 5164
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 16,
                        "raw": "16",
                        "start": 5168,
                        "end": 5170
                      },
                      "start": 5163,
                      "end": 5170
                    },
                    "computed": false,
                    "start": 5152,
                    "end": 5170
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RecursivelyReferenced",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5180,
                      "end": 5201
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5204,
                        "end": 5205
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 17,
                        "raw": "17",
                        "start": 5209,
                        "end": 5211
                      },
                      "start": 5204,
                      "end": 5211
                    },
                    "computed": false,
                    "start": 5180,
                    "end": 5211
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bound",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5221,
                      "end": 5226
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5229,
                        "end": 5230
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 18,
                        "raw": "18",
                        "start": 5234,
                        "end": 5236
                      },
                      "start": 5229,
                      "end": 5236
                    },
                    "computed": false,
                    "start": 5221,
                    "end": 5236
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CompilerGenerated",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5246,
                      "end": 5263
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5266,
                        "end": 5267
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 19,
                        "raw": "19",
                        "start": 5271,
                        "end": 5273
                      },
                      "start": 5266,
                      "end": 5273
                    },
                    "computed": false,
                    "start": 5246,
                    "end": 5273
                  }
                ],
                "start": 4655,
                "end": 5280
              },
              "const": false,
              "declare": false,
              "start": 4638,
              "end": 5280
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4631,
            "end": 5280
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "VarFlags",
                "optional": false,
                "typeAnnotation": null,
                "start": 5298,
                "end": 5306
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "None",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5317,
                      "end": 5321
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 5324,
                      "end": 5325
                    },
                    "computed": false,
                    "start": 5317,
                    "end": 5325
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Exported",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5335,
                      "end": 5343
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 5346,
                      "end": 5347
                    },
                    "computed": false,
                    "start": 5335,
                    "end": 5347
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5357,
                      "end": 5364
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5367,
                        "end": 5368
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5372,
                        "end": 5373
                      },
                      "start": 5367,
                      "end": 5373
                    },
                    "computed": false,
                    "start": 5357,
                    "end": 5373
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5383,
                      "end": 5389
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5392,
                        "end": 5393
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 5397,
                        "end": 5398
                      },
                      "start": 5392,
                      "end": 5398
                    },
                    "computed": false,
                    "start": 5383,
                    "end": 5398
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Ambient",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5408,
                      "end": 5415
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5418,
                        "end": 5419
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 5423,
                        "end": 5424
                      },
                      "start": 5418,
                      "end": 5424
                    },
                    "computed": false,
                    "start": 5408,
                    "end": 5424
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Static",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5434,
                      "end": 5440
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5443,
                        "end": 5444
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 5448,
                        "end": 5449
                      },
                      "start": 5443,
                      "end": 5449
                    },
                    "computed": false,
                    "start": 5434,
                    "end": 5449
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LocalStatic",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5459,
                      "end": 5470
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5473,
                        "end": 5474
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 5478,
                        "end": 5479
                      },
                      "start": 5473,
                      "end": 5479
                    },
                    "computed": false,
                    "start": 5459,
                    "end": 5479
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GetAccessor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5489,
                      "end": 5500
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5503,
                        "end": 5504
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 5508,
                        "end": 5509
                      },
                      "start": 5503,
                      "end": 5509
                    },
                    "computed": false,
                    "start": 5489,
                    "end": 5509
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SetAccessor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5519,
                      "end": 5530
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5533,
                        "end": 5534
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 5538,
                        "end": 5539
                      },
                      "start": 5533,
                      "end": 5539
                    },
                    "computed": false,
                    "start": 5519,
                    "end": 5539
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AutoInit",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5549,
                      "end": 5557
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5560,
                        "end": 5561
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8",
                        "start": 5565,
                        "end": 5566
                      },
                      "start": 5560,
                      "end": 5566
                    },
                    "computed": false,
                    "start": 5549,
                    "end": 5566
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Property",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5576,
                      "end": 5584
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5587,
                        "end": 5588
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 9,
                        "raw": "9",
                        "start": 5592,
                        "end": 5593
                      },
                      "start": 5587,
                      "end": 5593
                    },
                    "computed": false,
                    "start": 5576,
                    "end": 5593
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5603,
                      "end": 5611
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5614,
                        "end": 5615
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 5619,
                        "end": 5621
                      },
                      "start": 5614,
                      "end": 5621
                    },
                    "computed": false,
                    "start": 5603,
                    "end": 5621
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Class",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5631,
                      "end": 5636
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5639,
                        "end": 5640
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 11,
                        "raw": "11",
                        "start": 5644,
                        "end": 5646
                      },
                      "start": 5639,
                      "end": 5646
                    },
                    "computed": false,
                    "start": 5631,
                    "end": 5646
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ClassProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5656,
                      "end": 5669
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5672,
                        "end": 5673
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 5677,
                        "end": 5679
                      },
                      "start": 5672,
                      "end": 5679
                    },
                    "computed": false,
                    "start": 5656,
                    "end": 5679
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ClassBodyProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5689,
                      "end": 5706
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5709,
                        "end": 5710
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 13,
                        "raw": "13",
                        "start": 5714,
                        "end": 5716
                      },
                      "start": 5709,
                      "end": 5716
                    },
                    "computed": false,
                    "start": 5689,
                    "end": 5716
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ClassConstructorProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5726,
                      "end": 5750
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5753,
                        "end": 5754
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 14,
                        "raw": "14",
                        "start": 5758,
                        "end": 5760
                      },
                      "start": 5753,
                      "end": 5760
                    },
                    "computed": false,
                    "start": 5726,
                    "end": 5760
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ClassSuperMustBeFirstCallInConstructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5770,
                      "end": 5808
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5811,
                        "end": 5812
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 15,
                        "raw": "15",
                        "start": 5816,
                        "end": 5818
                      },
                      "start": 5811,
                      "end": 5818
                    },
                    "computed": false,
                    "start": 5770,
                    "end": 5818
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Constant",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5828,
                      "end": 5836
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5839,
                        "end": 5840
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 16,
                        "raw": "16",
                        "start": 5844,
                        "end": 5846
                      },
                      "start": 5839,
                      "end": 5846
                    },
                    "computed": false,
                    "start": 5828,
                    "end": 5846
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MustCaptureThis",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5856,
                      "end": 5871
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5874,
                        "end": 5875
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 17,
                        "raw": "17",
                        "start": 5879,
                        "end": 5881
                      },
                      "start": 5874,
                      "end": 5881
                    },
                    "computed": false,
                    "start": 5856,
                    "end": 5881
                  }
                ],
                "start": 5307,
                "end": 5888
              },
              "const": false,
              "declare": false,
              "start": 5293,
              "end": 5888
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5286,
            "end": 5888
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "FncFlags",
                "optional": false,
                "typeAnnotation": null,
                "start": 5906,
                "end": 5914
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "None",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5925,
                      "end": 5929
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 5932,
                      "end": 5933
                    },
                    "computed": false,
                    "start": 5925,
                    "end": 5933
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Exported",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5943,
                      "end": 5951
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 5954,
                      "end": 5955
                    },
                    "computed": false,
                    "start": 5943,
                    "end": 5955
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5965,
                      "end": 5972
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5975,
                        "end": 5976
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5980,
                        "end": 5981
                      },
                      "start": 5975,
                      "end": 5981
                    },
                    "computed": false,
                    "start": 5965,
                    "end": 5981
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5991,
                      "end": 5997
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6000,
                        "end": 6001
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 6005,
                        "end": 6006
                      },
                      "start": 6000,
                      "end": 6006
                    },
                    "computed": false,
                    "start": 5991,
                    "end": 6006
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Ambient",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6016,
                      "end": 6023
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6026,
                        "end": 6027
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 6031,
                        "end": 6032
                      },
                      "start": 6026,
                      "end": 6032
                    },
                    "computed": false,
                    "start": 6016,
                    "end": 6032
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Static",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6042,
                      "end": 6048
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6051,
                        "end": 6052
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 6056,
                        "end": 6057
                      },
                      "start": 6051,
                      "end": 6057
                    },
                    "computed": false,
                    "start": 6042,
                    "end": 6057
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LocalStatic",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6067,
                      "end": 6078
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6081,
                        "end": 6082
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 6086,
                        "end": 6087
                      },
                      "start": 6081,
                      "end": 6087
                    },
                    "computed": false,
                    "start": 6067,
                    "end": 6087
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GetAccessor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6097,
                      "end": 6108
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6111,
                        "end": 6112
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 6116,
                        "end": 6117
                      },
                      "start": 6111,
                      "end": 6117
                    },
                    "computed": false,
                    "start": 6097,
                    "end": 6117
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SetAccessor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6127,
                      "end": 6138
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6141,
                        "end": 6142
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 6146,
                        "end": 6147
                      },
                      "start": 6141,
                      "end": 6147
                    },
                    "computed": false,
                    "start": 6127,
                    "end": 6147
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Definition",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6157,
                      "end": 6167
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6170,
                        "end": 6171
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8",
                        "start": 6175,
                        "end": 6176
                      },
                      "start": 6170,
                      "end": 6176
                    },
                    "computed": false,
                    "start": 6157,
                    "end": 6176
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Signature",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6186,
                      "end": 6195
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6198,
                        "end": 6199
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 9,
                        "raw": "9",
                        "start": 6203,
                        "end": 6204
                      },
                      "start": 6198,
                      "end": 6204
                    },
                    "computed": false,
                    "start": 6186,
                    "end": 6204
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Method",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6214,
                      "end": 6220
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6223,
                        "end": 6224
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 6228,
                        "end": 6230
                      },
                      "start": 6223,
                      "end": 6230
                    },
                    "computed": false,
                    "start": 6214,
                    "end": 6230
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HasReturnExpression",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6240,
                      "end": 6259
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6262,
                        "end": 6263
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 11,
                        "raw": "11",
                        "start": 6267,
                        "end": 6269
                      },
                      "start": 6262,
                      "end": 6269
                    },
                    "computed": false,
                    "start": 6240,
                    "end": 6269
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CallMember",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6279,
                      "end": 6289
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6292,
                        "end": 6293
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 6297,
                        "end": 6299
                      },
                      "start": 6292,
                      "end": 6299
                    },
                    "computed": false,
                    "start": 6279,
                    "end": 6299
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ConstructMember",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6309,
                      "end": 6324
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6327,
                        "end": 6328
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 13,
                        "raw": "13",
                        "start": 6332,
                        "end": 6334
                      },
                      "start": 6327,
                      "end": 6334
                    },
                    "computed": false,
                    "start": 6309,
                    "end": 6334
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HasSelfReference",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6344,
                      "end": 6360
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6363,
                        "end": 6364
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 14,
                        "raw": "14",
                        "start": 6368,
                        "end": 6370
                      },
                      "start": 6363,
                      "end": 6370
                    },
                    "computed": false,
                    "start": 6344,
                    "end": 6370
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IsFatArrowFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6380,
                      "end": 6398
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6401,
                        "end": 6402
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 15,
                        "raw": "15",
                        "start": 6406,
                        "end": 6408
                      },
                      "start": 6401,
                      "end": 6408
                    },
                    "computed": false,
                    "start": 6380,
                    "end": 6408
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IndexerMember",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6418,
                      "end": 6431
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6434,
                        "end": 6435
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 16,
                        "raw": "16",
                        "start": 6439,
                        "end": 6441
                      },
                      "start": 6434,
                      "end": 6441
                    },
                    "computed": false,
                    "start": 6418,
                    "end": 6441
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IsFunctionExpression",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6451,
                      "end": 6471
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6474,
                        "end": 6475
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 17,
                        "raw": "17",
                        "start": 6479,
                        "end": 6481
                      },
                      "start": 6474,
                      "end": 6481
                    },
                    "computed": false,
                    "start": 6451,
                    "end": 6481
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ClassMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6491,
                      "end": 6502
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6505,
                        "end": 6506
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 18,
                        "raw": "18",
                        "start": 6510,
                        "end": 6512
                      },
                      "start": 6505,
                      "end": 6512
                    },
                    "computed": false,
                    "start": 6491,
                    "end": 6512
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ClassPropertyMethodExported",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6522,
                      "end": 6549
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6552,
                        "end": 6553
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 19,
                        "raw": "19",
                        "start": 6557,
                        "end": 6559
                      },
                      "start": 6552,
                      "end": 6559
                    },
                    "computed": false,
                    "start": 6522,
                    "end": 6559
                  }
                ],
                "start": 5915,
                "end": 6566
              },
              "const": false,
              "declare": false,
              "start": 5901,
              "end": 6566
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5894,
            "end": 6566
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "SignatureFlags",
                "optional": false,
                "typeAnnotation": null,
                "start": 6584,
                "end": 6598
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "None",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6609,
                      "end": 6613
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 6616,
                      "end": 6617
                    },
                    "computed": false,
                    "start": 6609,
                    "end": 6617
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IsIndexer",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6627,
                      "end": 6636
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 6639,
                      "end": 6640
                    },
                    "computed": false,
                    "start": 6627,
                    "end": 6640
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IsStringIndexer",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6650,
                      "end": 6665
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6668,
                        "end": 6669
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6673,
                        "end": 6674
                      },
                      "start": 6668,
                      "end": 6674
                    },
                    "computed": false,
                    "start": 6650,
                    "end": 6674
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IsNumberIndexer",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6684,
                      "end": 6699
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6702,
                        "end": 6703
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 6707,
                        "end": 6708
                      },
                      "start": 6702,
                      "end": 6708
                    },
                    "computed": false,
                    "start": 6684,
                    "end": 6708
                  }
                ],
                "start": 6599,
                "end": 6715
              },
              "const": false,
              "declare": false,
              "start": 6579,
              "end": 6715
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6572,
            "end": 6715
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ToDeclFlags",
                "optional": false,
                "typeAnnotation": null,
                "start": 6737,
                "end": 6748
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fncFlags",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FncFlags",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6759,
                        "end": 6767
                      },
                      "typeArguments": null,
                      "start": 6759,
                      "end": 6767
                    },
                    "start": 6757,
                    "end": 6767
                  },
                  "start": 6749,
                  "end": 6767
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DeclFlags",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6771,
                    "end": 6780
                  },
                  "typeArguments": null,
                  "start": 6771,
                  "end": 6780
                },
                "start": 6769,
                "end": 6780
              },
              "body": null,
              "expression": false,
              "start": 6728,
              "end": 6781
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6721,
            "end": 6781
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ToDeclFlags",
                "optional": false,
                "typeAnnotation": null,
                "start": 6802,
                "end": 6813
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "varFlags",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "VarFlags",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6824,
                        "end": 6832
                      },
                      "typeArguments": null,
                      "start": 6824,
                      "end": 6832
                    },
                    "start": 6822,
                    "end": 6832
                  },
                  "start": 6814,
                  "end": 6832
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DeclFlags",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6836,
                    "end": 6845
                  },
                  "typeArguments": null,
                  "start": 6836,
                  "end": 6845
                },
                "start": 6834,
                "end": 6845
              },
              "body": null,
              "expression": false,
              "start": 6793,
              "end": 6846
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6786,
            "end": 6846
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ToDeclFlags",
                "optional": false,
                "typeAnnotation": null,
                "start": 6867,
                "end": 6878
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "symFlags",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SymbolFlags",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6889,
                        "end": 6900
                      },
                      "typeArguments": null,
                      "start": 6889,
                      "end": 6900
                    },
                    "start": 6887,
                    "end": 6900
                  },
                  "start": 6879,
                  "end": 6900
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DeclFlags",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6903,
                    "end": 6912
                  },
                  "typeArguments": null,
                  "start": 6903,
                  "end": 6912
                },
                "start": 6901,
                "end": 6912
              },
              "body": null,
              "expression": false,
              "start": 6858,
              "end": 6913
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6851,
            "end": 6913
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ToDeclFlags",
                "optional": false,
                "typeAnnotation": null,
                "start": 6934,
                "end": 6945
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "moduleFlags",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ModuleFlags",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6959,
                        "end": 6970
                      },
                      "typeArguments": null,
                      "start": 6959,
                      "end": 6970
                    },
                    "start": 6957,
                    "end": 6970
                  },
                  "start": 6946,
                  "end": 6970
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DeclFlags",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6973,
                    "end": 6982
                  },
                  "typeArguments": null,
                  "start": 6973,
                  "end": 6982
                },
                "start": 6971,
                "end": 6982
              },
              "body": null,
              "expression": false,
              "start": 6925,
              "end": 6983
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6918,
            "end": 6983
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ToDeclFlags",
                "optional": false,
                "typeAnnotation": null,
                "start": 7004,
                "end": 7015
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fncOrVarOrSymbolOrModuleFlags",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 7047,
                      "end": 7050
                    },
                    "start": 7045,
                    "end": 7050
                  },
                  "start": 7016,
                  "end": 7050
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "DeclFlags",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7070,
                          "end": 7079
                        },
                        "typeArguments": null,
                        "start": 7070,
                        "end": 7079
                      },
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fncOrVarOrSymbolOrModuleFlags",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7080,
                        "end": 7109
                      },
                      "start": 7069,
                      "end": 7109
                    },
                    "start": 7062,
                    "end": 7110
                  }
                ],
                "start": 7052,
                "end": 7116
              },
              "expression": false,
              "start": 6995,
              "end": 7116
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6988,
            "end": 7116
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "TypeFlags",
                "optional": false,
                "typeAnnotation": null,
                "start": 7134,
                "end": 7143
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "None",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7154,
                      "end": 7158
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 7161,
                      "end": 7162
                    },
                    "computed": false,
                    "start": 7154,
                    "end": 7162
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HasImplementation",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7172,
                      "end": 7189
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 7192,
                      "end": 7193
                    },
                    "computed": false,
                    "start": 7172,
                    "end": 7193
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HasSelfReference",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7203,
                      "end": 7219
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7222,
                        "end": 7223
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7227,
                        "end": 7228
                      },
                      "start": 7222,
                      "end": 7228
                    },
                    "computed": false,
                    "start": 7203,
                    "end": 7228
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MergeResult",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7238,
                      "end": 7249
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7252,
                        "end": 7253
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 7257,
                        "end": 7258
                      },
                      "start": 7252,
                      "end": 7258
                    },
                    "computed": false,
                    "start": 7238,
                    "end": 7258
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IsEnum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7268,
                      "end": 7274
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7277,
                        "end": 7278
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 7282,
                        "end": 7283
                      },
                      "start": 7277,
                      "end": 7283
                    },
                    "computed": false,
                    "start": 7268,
                    "end": 7283
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "BuildingName",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7293,
                      "end": 7305
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7308,
                        "end": 7309
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 7313,
                        "end": 7314
                      },
                      "start": 7308,
                      "end": 7314
                    },
                    "computed": false,
                    "start": 7293,
                    "end": 7314
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HasBaseType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7324,
                      "end": 7335
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7338,
                        "end": 7339
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 7343,
                        "end": 7344
                      },
                      "start": 7338,
                      "end": 7344
                    },
                    "computed": false,
                    "start": 7324,
                    "end": 7344
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HasBaseTypeOfObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7354,
                      "end": 7373
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7376,
                        "end": 7377
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 7381,
                        "end": 7382
                      },
                      "start": 7376,
                      "end": 7382
                    },
                    "computed": false,
                    "start": 7354,
                    "end": 7382
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IsClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7392,
                      "end": 7399
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7402,
                        "end": 7403
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 7407,
                        "end": 7408
                      },
                      "start": 7402,
                      "end": 7408
                    },
                    "computed": false,
                    "start": 7392,
                    "end": 7408
                  }
                ],
                "start": 7144,
                "end": 7415
              },
              "const": false,
              "declare": false,
              "start": 7129,
              "end": 7415
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 7122,
            "end": 7415
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "TypeRelationshipFlags",
                "optional": false,
                "typeAnnotation": null,
                "start": 7433,
                "end": 7454
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SuccessfulComparison",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7465,
                      "end": 7485
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 7488,
                      "end": 7489
                    },
                    "computed": false,
                    "start": 7465,
                    "end": 7489
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SourceIsNullTargetIsVoidOrUndefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7499,
                      "end": 7534
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 7537,
                      "end": 7538
                    },
                    "computed": false,
                    "start": 7499,
                    "end": 7538
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RequiredPropertyIsMissing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7548,
                      "end": 7573
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7576,
                        "end": 7577
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7581,
                        "end": 7582
                      },
                      "start": 7576,
                      "end": 7582
                    },
                    "computed": false,
                    "start": 7548,
                    "end": 7582
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IncompatibleSignatures",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7592,
                      "end": 7614
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7617,
                        "end": 7618
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 7622,
                        "end": 7623
                      },
                      "start": 7617,
                      "end": 7623
                    },
                    "computed": false,
                    "start": 7592,
                    "end": 7623
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SourceSignatureHasTooManyParameters",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7633,
                      "end": 7668
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 7671,
                      "end": 7672
                    },
                    "computed": false,
                    "start": 7633,
                    "end": 7672
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IncompatibleReturnTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7682,
                      "end": 7705
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7708,
                        "end": 7709
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 7713,
                        "end": 7714
                      },
                      "start": 7708,
                      "end": 7714
                    },
                    "computed": false,
                    "start": 7682,
                    "end": 7714
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IncompatiblePropertyTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7724,
                      "end": 7749
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7752,
                        "end": 7753
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 7757,
                        "end": 7758
                      },
                      "start": 7752,
                      "end": 7758
                    },
                    "computed": false,
                    "start": 7724,
                    "end": 7758
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IncompatibleParameterTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7768,
                      "end": 7794
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7797,
                        "end": 7798
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 7802,
                        "end": 7803
                      },
                      "start": 7797,
                      "end": 7803
                    },
                    "computed": false,
                    "start": 7768,
                    "end": 7803
                  }
                ],
                "start": 7455,
                "end": 7810
              },
              "const": false,
              "declare": false,
              "start": 7428,
              "end": 7810
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 7421,
            "end": 7810
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "CodeGenTarget",
                "optional": false,
                "typeAnnotation": null,
                "start": 7828,
                "end": 7841
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ES3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7852,
                      "end": 7855
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 7858,
                      "end": 7859
                    },
                    "computed": false,
                    "start": 7852,
                    "end": 7859
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ES5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7869,
                      "end": 7872
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 7875,
                      "end": 7876
                    },
                    "computed": false,
                    "start": 7869,
                    "end": 7876
                  }
                ],
                "start": 7842,
                "end": 7883
              },
              "const": false,
              "declare": false,
              "start": 7823,
              "end": 7883
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 7816,
            "end": 7883
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ModuleGenTarget",
                "optional": false,
                "typeAnnotation": null,
                "start": 7901,
                "end": 7916
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Synchronous",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7927,
                      "end": 7938
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 7941,
                      "end": 7942
                    },
                    "computed": false,
                    "start": 7927,
                    "end": 7942
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Asynchronous",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7952,
                      "end": 7964
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 7967,
                      "end": 7968
                    },
                    "computed": false,
                    "start": 7952,
                    "end": 7968
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Local",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7978,
                      "end": 7983
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7986,
                        "end": 7987
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7991,
                        "end": 7992
                      },
                      "start": 7986,
                      "end": 7992
                    },
                    "computed": false,
                    "start": 7978,
                    "end": 7992
                  }
                ],
                "start": 7917,
                "end": 7999
              },
              "const": false,
              "declare": false,
              "start": 7896,
              "end": 7999
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 7889,
            "end": 7999
          },
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
                    "name": "codeGenTarget",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "CodeGenTarget",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8123,
                          "end": 8136
                        },
                        "typeArguments": null,
                        "start": 8123,
                        "end": 8136
                      },
                      "start": 8121,
                      "end": 8136
                    },
                    "start": 8108,
                    "end": 8136
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CodeGenTarget",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8139,
                      "end": 8152
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ES3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8153,
                      "end": 8156
                    },
                    "optional": false,
                    "computed": false,
                    "start": 8139,
                    "end": 8156
                  },
                  "definite": false,
                  "start": 8108,
                  "end": 8156
                }
              ],
              "declare": false,
              "start": 8104,
              "end": 8157
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 8097,
            "end": 8157
          },
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
                    "name": "moduleGenTarget",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ModuleGenTarget",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8191,
                          "end": 8206
                        },
                        "typeArguments": null,
                        "start": 8191,
                        "end": 8206
                      },
                      "start": 8189,
                      "end": 8206
                    },
                    "start": 8174,
                    "end": 8206
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ModuleGenTarget",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8209,
                      "end": 8224
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Synchronous",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8225,
                      "end": 8236
                    },
                    "optional": false,
                    "computed": false,
                    "start": 8209,
                    "end": 8236
                  },
                  "definite": false,
                  "start": 8174,
                  "end": 8236
                }
              ],
              "declare": false,
              "start": 8170,
              "end": 8237
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 8163,
            "end": 8237
          },
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
                    "name": "optimizeModuleCodeGen",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8254,
                    "end": 8275
                  },
                  "init": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 8278,
                    "end": 8282
                  },
                  "definite": false,
                  "start": 8254,
                  "end": 8282
                }
              ],
              "declare": false,
              "start": 8250,
              "end": 8283
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 8243,
            "end": 8283
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "flagsToString",
                "optional": false,
                "typeAnnotation": null,
                "start": 8305,
                "end": 8318
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8319,
                  "end": 8320
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "flags",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 8329,
                      "end": 8335
                    },
                    "start": 8327,
                    "end": 8335
                  },
                  "start": 8322,
                  "end": 8335
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 8338,
                  "end": 8344
                },
                "start": 8336,
                "end": 8344
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
                          "name": "builder",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8359,
                          "end": 8366
                        },
                        "init": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 8369,
                          "end": 8371
                        },
                        "definite": false,
                        "start": 8359,
                        "end": 8371
                      }
                    ],
                    "declare": false,
                    "start": 8355,
                    "end": 8372
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8390,
                            "end": 8391
                          },
                          "init": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 8394,
                            "end": 8395
                          },
                          "definite": false,
                          "start": 8390,
                          "end": 8395
                        }
                      ],
                      "declare": false,
                      "start": 8386,
                      "end": 8395
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8397,
                        "end": 8398
                      },
                      "operator": "<",
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 8402,
                          "end": 8403
                        },
                        "operator": "<<",
                        "right": {
                          "type": "Literal",
                          "value": 31,
                          "raw": "31",
                          "start": 8407,
                          "end": 8409
                        },
                        "start": 8402,
                        "end": 8409
                      },
                      "start": 8397,
                      "end": 8410
                    },
                    "update": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8413,
                        "end": 8414
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8417,
                          "end": 8418
                        },
                        "operator": "<<",
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 8422,
                          "end": 8423
                        },
                        "start": 8417,
                        "end": 8423
                      },
                      "start": 8413,
                      "end": 8423
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "flags",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8444,
                                "end": 8449
                              },
                              "operator": "&",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8452,
                                "end": 8453
                              },
                              "start": 8444,
                              "end": 8453
                            },
                            "operator": "!=",
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 8458,
                              "end": 8459
                            },
                            "start": 8443,
                            "end": 8459
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ForInStatement",
                                "left": {
                                  "type": "VariableDeclaration",
                                  "kind": "var",
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "id": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "k",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 8488,
                                        "end": 8489
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 8488,
                                      "end": 8489
                                    }
                                  ],
                                  "declare": false,
                                  "start": 8484,
                                  "end": 8489
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8493,
                                  "end": 8494
                                },
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "IfStatement",
                                      "test": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "e",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8522,
                                            "end": 8523
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "k",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8524,
                                            "end": 8525
                                          },
                                          "optional": false,
                                          "computed": true,
                                          "start": 8522,
                                          "end": 8526
                                        },
                                        "operator": "==",
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 8530,
                                          "end": 8531
                                        },
                                        "start": 8522,
                                        "end": 8531
                                      },
                                      "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "IfStatement",
                                            "test": {
                                              "type": "BinaryExpression",
                                              "left": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "builder",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 8563,
                                                  "end": 8570
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "length",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 8571,
                                                  "end": 8577
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 8563,
                                                "end": 8577
                                              },
                                              "operator": ">",
                                              "right": {
                                                "type": "Literal",
                                                "value": 0,
                                                "raw": "0",
                                                "start": 8580,
                                                "end": 8581
                                              },
                                              "start": 8563,
                                              "end": 8581
                                            },
                                            "consequent": {
                                              "type": "BlockStatement",
                                              "body": [
                                                {
                                                  "type": "ExpressionStatement",
                                                  "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "+=",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "builder",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 8613,
                                                      "end": 8620
                                                    },
                                                    "right": {
                                                      "type": "Literal",
                                                      "value": "|",
                                                      "raw": "\"|\"",
                                                      "start": 8624,
                                                      "end": 8627
                                                    },
                                                    "start": 8613,
                                                    "end": 8627
                                                  },
                                                  "directive": null,
                                                  "start": 8613,
                                                  "end": 8628
                                                }
                                              ],
                                              "start": 8583,
                                              "end": 8654
                                            },
                                            "alternate": null,
                                            "start": 8559,
                                            "end": 8654
                                          },
                                          {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                              "type": "AssignmentExpression",
                                              "operator": "+=",
                                              "left": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "builder",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 8679,
                                                "end": 8686
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "k",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 8690,
                                                "end": 8691
                                              },
                                              "start": 8679,
                                              "end": 8691
                                            },
                                            "directive": null,
                                            "start": 8679,
                                            "end": 8692
                                          },
                                          {
                                            "type": "BreakStatement",
                                            "label": null,
                                            "start": 8717,
                                            "end": 8723
                                          }
                                        ],
                                        "start": 8533,
                                        "end": 8745
                                      },
                                      "alternate": null,
                                      "start": 8518,
                                      "end": 8745
                                    }
                                  ],
                                  "start": 8496,
                                  "end": 8763
                                },
                                "start": 8479,
                                "end": 8763
                              }
                            ],
                            "start": 8461,
                            "end": 8777
                          },
                          "alternate": null,
                          "start": 8439,
                          "end": 8777
                        }
                      ],
                      "start": 8425,
                      "end": 8787
                    },
                    "start": 8381,
                    "end": 8787
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "builder",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8803,
                      "end": 8810
                    },
                    "start": 8796,
                    "end": 8811
                  }
                ],
                "start": 8345,
                "end": 8817
              },
              "expression": false,
              "start": 8296,
              "end": 8817
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 8289,
            "end": 8817
          }
        ],
        "start": 232,
        "end": 8820
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 211,
      "end": 8820
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 211,
  "end": 8820
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 211,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "TypeScript",
    "start": 221,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 239,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 246,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "hasFlag",
    "start": 255,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 263,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 268,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "flag",
    "start": 276,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 282,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 300,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 308,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "flag",
    "start": 314,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 320,
    "end": 322
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 330,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 337,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 344,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "ErrorRecoverySet",
    "start": 349,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "None",
    "start": 376,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 381,
    "end": 382
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "Comma",
    "start": 394,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 400,
    "end": 401
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "SColon",
    "start": 422,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 429,
    "end": 430
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 433,
    "end": 435
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "Asg",
    "start": 457,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 461,
    "end": 462
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 465,
    "end": 467
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "BinOp",
    "start": 486,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 492,
    "end": 493
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 496,
    "end": 498
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "RBrack",
    "start": 735,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 742,
    "end": 743
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 746,
    "end": 748
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "RCurly",
    "start": 770,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 777,
    "end": 778
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 781,
    "end": 783
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "RParen",
    "start": 805,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 812,
    "end": 813
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 816,
    "end": 818
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "Dot",
    "start": 840,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 844,
    "end": 845
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 848,
    "end": 850
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "Colon",
    "start": 869,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 875,
    "end": 876
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 879,
    "end": 881
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "PrimType",
    "start": 902,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 911,
    "end": 912
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 915,
    "end": 917
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "AddOp",
    "start": 956,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 962,
    "end": 963
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 966,
    "end": 968
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 969,
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
    "value": "LCurly",
    "start": 993,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1004,
    "end": 1006
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 1007,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "PreOp",
    "start": 1029,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1039,
    "end": 1041
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1042,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 1079,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1090,
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
    "value": "LParen",
    "start": 1115,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1126,
    "end": 1128
  },
  {
    "type": "Numeric",
    "value": "14",
    "start": 1129,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "LBrack",
    "start": 1151,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1162,
    "end": 1164
  },
  {
    "type": "Numeric",
    "value": "15",
    "start": 1165,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "Scope",
    "start": 1187,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1197,
    "end": 1199
  },
  {
    "type": "Numeric",
    "value": "16",
    "start": 1200,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "In",
    "start": 1221,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1228,
    "end": 1230
  },
  {
    "type": "Numeric",
    "value": "17",
    "start": 1231,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "SCase",
    "start": 1249,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1259,
    "end": 1261
  },
  {
    "type": "Numeric",
    "value": "18",
    "start": 1262,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "Else",
    "start": 1291,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1300,
    "end": 1302
  },
  {
    "type": "Numeric",
    "value": "19",
    "start": 1303,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "Catch",
    "start": 1323,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1333,
    "end": 1335
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 1336,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "Var",
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
    "type": "Numeric",
    "value": "1",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1374,
    "end": 1376
  },
  {
    "type": "Numeric",
    "value": "21",
    "start": 1377,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "Stmt",
    "start": 1393,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1402,
    "end": 1404
  },
  {
    "type": "Numeric",
    "value": "22",
    "start": 1405,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "While",
    "start": 1483,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1493,
    "end": 1495
  },
  {
    "type": "Numeric",
    "value": "23",
    "start": 1496,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "ID",
    "start": 1517,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1524,
    "end": 1526
  },
  {
    "type": "Numeric",
    "value": "24",
    "start": 1527,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Identifier",
    "value": "Prefix",
    "start": 1545,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1556,
    "end": 1558
  },
  {
    "type": "Numeric",
    "value": "25",
    "start": 1559,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "Literal",
    "start": 1602,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1614,
    "end": 1616
  },
  {
    "type": "Numeric",
    "value": "26",
    "start": 1617,
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
    "value": "RLit",
    "start": 1655,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1664,
    "end": 1666
  },
  {
    "type": "Numeric",
    "value": "27",
    "start": 1667,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 1706,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1715,
    "end": 1717
  },
  {
    "type": "Numeric",
    "value": "28",
    "start": 1718,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "EOF",
    "start": 1742,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1750,
    "end": 1752
  },
  {
    "type": "Numeric",
    "value": "29",
    "start": 1753,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "TypeScriptS",
    "start": 1821,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1837,
    "end": 1839
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 1840,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "ExprStart",
    "start": 1923,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Identifier",
    "value": "SColon",
    "start": 1935,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Identifier",
    "value": "AddOp",
    "start": 1944,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Identifier",
    "value": "LCurly",
    "start": 1952,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Identifier",
    "value": "PreOp",
    "start": 1961,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 1969,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Identifier",
    "value": "LParen",
    "start": 1978,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Identifier",
    "value": "LBrack",
    "start": 1987,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Identifier",
    "value": "ID",
    "start": 1996,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Identifier",
    "value": "Prefix",
    "start": 2001,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Identifier",
    "value": "RLit",
    "start": 2010,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 2017,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Identifier",
    "value": "Literal",
    "start": 2024,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Identifier",
    "value": "StmtStart",
    "start": 2041,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Identifier",
    "value": "ExprStart",
    "start": 2053,
    "end": 2062
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Identifier",
    "value": "SColon",
    "start": 2065,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Identifier",
    "value": "Var",
    "start": 2074,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Identifier",
    "value": "Stmt",
    "start": 2080,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Identifier",
    "value": "While",
    "start": 2087,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Identifier",
    "value": "TypeScriptS",
    "start": 2095,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Identifier",
    "value": "Postfix",
    "start": 2116,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Identifier",
    "value": "Dot",
    "start": 2126,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Identifier",
    "value": "LParen",
    "start": 2132,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Identifier",
    "value": "LBrack",
    "start": 2141,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2160,
    "end": 2166
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 2167,
    "end": 2171
  },
  {
    "type": "Identifier",
    "value": "AllowedElements",
    "start": 2172,
    "end": 2187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Identifier",
    "value": "None",
    "start": 2198,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Identifier",
    "value": "ModuleDeclarations",
    "start": 2216,
    "end": 2234
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 2239,
    "end": 2241
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Identifier",
    "value": "ClassDeclarations",
    "start": 2253,
    "end": 2270
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 2275,
    "end": 2277
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Identifier",
    "value": "InterfaceDeclarations",
    "start": 2289,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 2315,
    "end": 2317
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Identifier",
    "value": "AmbientDeclarations",
    "start": 2329,
    "end": 2348
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 2353,
    "end": 2355
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2356,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2358,
    "end": 2359
  },
  {
    "type": "Identifier",
    "value": "Properties",
    "start": 2368,
    "end": 2378
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 2383,
    "end": 2385
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 2386,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Identifier",
    "value": "Global",
    "start": 2399,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "Identifier",
    "value": "ModuleDeclarations",
    "start": 2408,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Identifier",
    "value": "ClassDeclarations",
    "start": 2429,
    "end": 2446
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Identifier",
    "value": "InterfaceDeclarations",
    "start": 2449,
    "end": 2470
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Identifier",
    "value": "AmbientDeclarations",
    "start": 2473,
    "end": 2492
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Identifier",
    "value": "QuickParse",
    "start": 2502,
    "end": 2512
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2513,
    "end": 2514
  },
  {
    "type": "Identifier",
    "value": "Global",
    "start": 2515,
    "end": 2521
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Identifier",
    "value": "Properties",
    "start": 2524,
    "end": 2534
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2540,
    "end": 2541
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2547,
    "end": 2553
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 2554,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "Modifiers",
    "start": 2559,
    "end": 2568
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2569,
    "end": 2570
  },
  {
    "type": "Identifier",
    "value": "None",
    "start": 2579,
    "end": 2583
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2587,
    "end": 2588
  },
  {
    "type": "Identifier",
    "value": "Private",
    "start": 2597,
    "end": 2604
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2605,
    "end": 2606
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2607,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Identifier",
    "value": "Public",
    "start": 2618,
    "end": 2624
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2627,
    "end": 2628
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 2629,
    "end": 2631
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2632,
    "end": 2633
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 2643,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2654,
    "end": 2655
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 2656,
    "end": 2658
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Identifier",
    "value": "Ambient",
    "start": 2670,
    "end": 2677
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2678,
    "end": 2679
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2680,
    "end": 2681
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 2682,
    "end": 2684
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2685,
    "end": 2686
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2686,
    "end": 2687
  },
  {
    "type": "Identifier",
    "value": "Exported",
    "start": 2696,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 2709,
    "end": 2711
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 2712,
    "end": 2713
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2713,
    "end": 2714
  },
  {
    "type": "Identifier",
    "value": "Getter",
    "start": 2723,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2730,
    "end": 2731
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2732,
    "end": 2733
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 2734,
    "end": 2736
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2738,
    "end": 2739
  },
  {
    "type": "Identifier",
    "value": "Setter",
    "start": 2748,
    "end": 2754
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2755,
    "end": 2756
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2757,
    "end": 2758
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 2759,
    "end": 2761
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 2762,
    "end": 2763
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2763,
    "end": 2764
  },
  {
    "type": "Identifier",
    "value": "Static",
    "start": 2773,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 2784,
    "end": 2786
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 2787,
    "end": 2788
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2788,
    "end": 2789
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2794,
    "end": 2795
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2801,
    "end": 2807
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 2808,
    "end": 2812
  },
  {
    "type": "Identifier",
    "value": "ASTFlags",
    "start": 2813,
    "end": 2821
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2822,
    "end": 2823
  },
  {
    "type": "Identifier",
    "value": "None",
    "start": 2832,
    "end": 2836
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2837,
    "end": 2838
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2839,
    "end": 2840
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2840,
    "end": 2841
  },
  {
    "type": "Identifier",
    "value": "ExplicitSemicolon",
    "start": 2850,
    "end": 2867
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2868,
    "end": 2869
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2870,
    "end": 2871
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2871,
    "end": 2872
  },
  {
    "type": "Identifier",
    "value": "AutomaticSemicolon",
    "start": 2929,
    "end": 2947
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2948,
    "end": 2949
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2950,
    "end": 2951
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 2952,
    "end": 2954
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2955,
    "end": 2956
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2956,
    "end": 2957
  },
  {
    "type": "Identifier",
    "value": "Writeable",
    "start": 3015,
    "end": 3024
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3025,
    "end": 3026
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 3029,
    "end": 3031
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3032,
    "end": 3033
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3033,
    "end": 3034
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 3080,
    "end": 3085
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3086,
    "end": 3087
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3088,
    "end": 3089
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 3090,
    "end": 3092
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3094,
    "end": 3095
  },
  {
    "type": "Identifier",
    "value": "DotLHSPartial",
    "start": 3125,
    "end": 3138
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3139,
    "end": 3140
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3141,
    "end": 3142
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 3143,
    "end": 3145
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 3146,
    "end": 3147
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3147,
    "end": 3148
  },
  {
    "type": "Identifier",
    "value": "DotLHS",
    "start": 3212,
    "end": 3218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3219,
    "end": 3220
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3221,
    "end": 3222
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 3223,
    "end": 3225
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 3226,
    "end": 3227
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3227,
    "end": 3228
  },
  {
    "type": "Identifier",
    "value": "IsStatement",
    "start": 3270,
    "end": 3281
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3282,
    "end": 3283
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3284,
    "end": 3285
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 3286,
    "end": 3288
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 3289,
    "end": 3290
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3290,
    "end": 3291
  },
  {
    "type": "Identifier",
    "value": "StrictMode",
    "start": 3323,
    "end": 3333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3334,
    "end": 3335
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3336,
    "end": 3337
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 3338,
    "end": 3340
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 3341,
    "end": 3342
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3342,
    "end": 3343
  },
  {
    "type": "Identifier",
    "value": "PossibleOptionalParameter",
    "start": 3394,
    "end": 3419
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3420,
    "end": 3421
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3422,
    "end": 3423
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 3424,
    "end": 3426
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 3427,
    "end": 3428
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3428,
    "end": 3429
  },
  {
    "type": "Identifier",
    "value": "ClassBaseConstructorCall",
    "start": 3438,
    "end": 3462
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3463,
    "end": 3464
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3465,
    "end": 3466
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 3467,
    "end": 3469
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 3470,
    "end": 3471
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3471,
    "end": 3472
  },
  {
    "type": "Identifier",
    "value": "OptionalName",
    "start": 3481,
    "end": 3493
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3494,
    "end": 3495
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3496,
    "end": 3497
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 3498,
    "end": 3500
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3501,
    "end": 3503
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3503,
    "end": 3504
  },
  {
    "type": "Identifier",
    "value": "SkipNextRParen",
    "start": 3898,
    "end": 3912
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3913,
    "end": 3914
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3915,
    "end": 3916
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 3917,
    "end": 3919
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 3920,
    "end": 3922
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3922,
    "end": 3923
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3929,
    "end": 3930
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3936,
    "end": 3942
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 3943,
    "end": 3947
  },
  {
    "type": "Identifier",
    "value": "DeclFlags",
    "start": 3948,
    "end": 3957
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3958,
    "end": 3959
  },
  {
    "type": "Identifier",
    "value": "None",
    "start": 3968,
    "end": 3972
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3973,
    "end": 3974
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3975,
    "end": 3976
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3976,
    "end": 3977
  },
  {
    "type": "Identifier",
    "value": "Exported",
    "start": 3986,
    "end": 3994
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3995,
    "end": 3996
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3997,
    "end": 3998
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3998,
    "end": 3999
  },
  {
    "type": "Identifier",
    "value": "Private",
    "start": 4008,
    "end": 4015
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4016,
    "end": 4017
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4018,
    "end": 4019
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 4020,
    "end": 4022
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4023,
    "end": 4024
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4024,
    "end": 4025
  },
  {
    "type": "Identifier",
    "value": "Public",
    "start": 4034,
    "end": 4040
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4041,
    "end": 4042
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4043,
    "end": 4044
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 4045,
    "end": 4047
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4048,
    "end": 4049
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4049,
    "end": 4050
  },
  {
    "type": "Identifier",
    "value": "Ambient",
    "start": 4059,
    "end": 4066
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4067,
    "end": 4068
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4069,
    "end": 4070
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 4071,
    "end": 4073
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 4074,
    "end": 4075
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4075,
    "end": 4076
  },
  {
    "type": "Identifier",
    "value": "Static",
    "start": 4085,
    "end": 4091
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4092,
    "end": 4093
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4094,
    "end": 4095
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 4096,
    "end": 4098
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 4099,
    "end": 4100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4100,
    "end": 4101
  },
  {
    "type": "Identifier",
    "value": "LocalStatic",
    "start": 4110,
    "end": 4121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4122,
    "end": 4123
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4124,
    "end": 4125
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 4126,
    "end": 4128
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 4129,
    "end": 4130
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4130,
    "end": 4131
  },
  {
    "type": "Identifier",
    "value": "GetAccessor",
    "start": 4140,
    "end": 4151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4152,
    "end": 4153
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4154,
    "end": 4155
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 4156,
    "end": 4158
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 4159,
    "end": 4160
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4160,
    "end": 4161
  },
  {
    "type": "Identifier",
    "value": "SetAccessor",
    "start": 4170,
    "end": 4181
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4182,
    "end": 4183
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4184,
    "end": 4185
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 4186,
    "end": 4188
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 4189,
    "end": 4190
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4190,
    "end": 4191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4196,
    "end": 4197
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4203,
    "end": 4209
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 4210,
    "end": 4214
  },
  {
    "type": "Identifier",
    "value": "ModuleFlags",
    "start": 4215,
    "end": 4226
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4227,
    "end": 4228
  },
  {
    "type": "Identifier",
    "value": "None",
    "start": 4237,
    "end": 4241
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4242,
    "end": 4243
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4244,
    "end": 4245
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4245,
    "end": 4246
  },
  {
    "type": "Identifier",
    "value": "Exported",
    "start": 4255,
    "end": 4263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4264,
    "end": 4265
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4266,
    "end": 4267
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4267,
    "end": 4268
  },
  {
    "type": "Identifier",
    "value": "Private",
    "start": 4277,
    "end": 4284
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4285,
    "end": 4286
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4287,
    "end": 4288
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 4289,
    "end": 4291
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4292,
    "end": 4293
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4293,
    "end": 4294
  },
  {
    "type": "Identifier",
    "value": "Public",
    "start": 4303,
    "end": 4309
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4310,
    "end": 4311
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4312,
    "end": 4313
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 4314,
    "end": 4316
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4317,
    "end": 4318
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4318,
    "end": 4319
  },
  {
    "type": "Identifier",
    "value": "Ambient",
    "start": 4328,
    "end": 4335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4336,
    "end": 4337
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4338,
    "end": 4339
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 4340,
    "end": 4342
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 4343,
    "end": 4344
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4344,
    "end": 4345
  },
  {
    "type": "Identifier",
    "value": "Static",
    "start": 4354,
    "end": 4360
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4361,
    "end": 4362
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4363,
    "end": 4364
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 4365,
    "end": 4367
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 4368,
    "end": 4369
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4369,
    "end": 4370
  },
  {
    "type": "Identifier",
    "value": "LocalStatic",
    "start": 4379,
    "end": 4390
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4391,
    "end": 4392
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4393,
    "end": 4394
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 4395,
    "end": 4397
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 4398,
    "end": 4399
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4399,
    "end": 4400
  },
  {
    "type": "Identifier",
    "value": "GetAccessor",
    "start": 4409,
    "end": 4420
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4421,
    "end": 4422
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4423,
    "end": 4424
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 4425,
    "end": 4427
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 4428,
    "end": 4429
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4429,
    "end": 4430
  },
  {
    "type": "Identifier",
    "value": "SetAccessor",
    "start": 4439,
    "end": 4450
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4451,
    "end": 4452
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4453,
    "end": 4454
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 4455,
    "end": 4457
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 4458,
    "end": 4459
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4459,
    "end": 4460
  },
  {
    "type": "Identifier",
    "value": "IsEnum",
    "start": 4469,
    "end": 4475
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4476,
    "end": 4477
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4478,
    "end": 4479
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 4480,
    "end": 4482
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 4483,
    "end": 4484
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4484,
    "end": 4485
  },
  {
    "type": "Identifier",
    "value": "ShouldEmitModuleDecl",
    "start": 4494,
    "end": 4514
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4515,
    "end": 4516
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4517,
    "end": 4518
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 4519,
    "end": 4521
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 4522,
    "end": 4523
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4523,
    "end": 4524
  },
  {
    "type": "Identifier",
    "value": "IsWholeFile",
    "start": 4533,
    "end": 4544
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4545,
    "end": 4546
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4547,
    "end": 4548
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 4549,
    "end": 4551
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 4552,
    "end": 4554
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4554,
    "end": 4555
  },
  {
    "type": "Identifier",
    "value": "IsDynamic",
    "start": 4564,
    "end": 4573
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4574,
    "end": 4575
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4576,
    "end": 4577
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 4578,
    "end": 4580
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 4581,
    "end": 4583
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4583,
    "end": 4584
  },
  {
    "type": "Identifier",
    "value": "MustCaptureThis",
    "start": 4593,
    "end": 4608
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4609,
    "end": 4610
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4611,
    "end": 4612
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 4613,
    "end": 4615
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 4616,
    "end": 4618
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4618,
    "end": 4619
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4624,
    "end": 4625
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4631,
    "end": 4637
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 4638,
    "end": 4642
  },
  {
    "type": "Identifier",
    "value": "SymbolFlags",
    "start": 4643,
    "end": 4654
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4655,
    "end": 4656
  },
  {
    "type": "Identifier",
    "value": "None",
    "start": 4665,
    "end": 4669
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4670,
    "end": 4671
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4672,
    "end": 4673
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4673,
    "end": 4674
  },
  {
    "type": "Identifier",
    "value": "Exported",
    "start": 4683,
    "end": 4691
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4692,
    "end": 4693
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4694,
    "end": 4695
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4695,
    "end": 4696
  },
  {
    "type": "Identifier",
    "value": "Private",
    "start": 4705,
    "end": 4712
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4713,
    "end": 4714
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4715,
    "end": 4716
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 4717,
    "end": 4719
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4720,
    "end": 4721
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4721,
    "end": 4722
  },
  {
    "type": "Identifier",
    "value": "Public",
    "start": 4731,
    "end": 4737
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4738,
    "end": 4739
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4740,
    "end": 4741
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 4742,
    "end": 4744
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4745,
    "end": 4746
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4746,
    "end": 4747
  },
  {
    "type": "Identifier",
    "value": "Ambient",
    "start": 4756,
    "end": 4763
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4764,
    "end": 4765
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4766,
    "end": 4767
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 4768,
    "end": 4770
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 4771,
    "end": 4772
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4772,
    "end": 4773
  },
  {
    "type": "Identifier",
    "value": "Static",
    "start": 4782,
    "end": 4788
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4789,
    "end": 4790
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4791,
    "end": 4792
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 4793,
    "end": 4795
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 4796,
    "end": 4797
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4797,
    "end": 4798
  },
  {
    "type": "Identifier",
    "value": "LocalStatic",
    "start": 4807,
    "end": 4818
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4819,
    "end": 4820
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4821,
    "end": 4822
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 4823,
    "end": 4825
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 4826,
    "end": 4827
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4827,
    "end": 4828
  },
  {
    "type": "Identifier",
    "value": "GetAccessor",
    "start": 4837,
    "end": 4848
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4849,
    "end": 4850
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4851,
    "end": 4852
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 4853,
    "end": 4855
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 4856,
    "end": 4857
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4857,
    "end": 4858
  },
  {
    "type": "Identifier",
    "value": "SetAccessor",
    "start": 4867,
    "end": 4878
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4879,
    "end": 4880
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4881,
    "end": 4882
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 4883,
    "end": 4885
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 4886,
    "end": 4887
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4887,
    "end": 4888
  },
  {
    "type": "Identifier",
    "value": "Property",
    "start": 4897,
    "end": 4905
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4906,
    "end": 4907
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4908,
    "end": 4909
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 4910,
    "end": 4912
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 4913,
    "end": 4914
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4914,
    "end": 4915
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 4924,
    "end": 4932
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4933,
    "end": 4934
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4935,
    "end": 4936
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 4937,
    "end": 4939
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 4940,
    "end": 4941
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4941,
    "end": 4942
  },
  {
    "type": "Identifier",
    "value": "ModuleMember",
    "start": 4951,
    "end": 4963
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4964,
    "end": 4965
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4966,
    "end": 4967
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 4968,
    "end": 4970
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 4971,
    "end": 4973
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4973,
    "end": 4974
  },
  {
    "type": "Identifier",
    "value": "InterfaceMember",
    "start": 4983,
    "end": 4998
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4999,
    "end": 5000
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5001,
    "end": 5002
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 5003,
    "end": 5005
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 5006,
    "end": 5008
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5008,
    "end": 5009
  },
  {
    "type": "Identifier",
    "value": "ClassMember",
    "start": 5018,
    "end": 5029
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5030,
    "end": 5031
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5032,
    "end": 5033
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 5034,
    "end": 5036
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 5037,
    "end": 5039
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5039,
    "end": 5040
  },
  {
    "type": "Identifier",
    "value": "BuiltIn",
    "start": 5049,
    "end": 5056
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5057,
    "end": 5058
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5059,
    "end": 5060
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 5061,
    "end": 5063
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 5064,
    "end": 5066
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5066,
    "end": 5067
  },
  {
    "type": "Identifier",
    "value": "TypeSetDuringScopeAssignment",
    "start": 5076,
    "end": 5104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5105,
    "end": 5106
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5107,
    "end": 5108
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 5109,
    "end": 5111
  },
  {
    "type": "Numeric",
    "value": "14",
    "start": 5112,
    "end": 5114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5114,
    "end": 5115
  },
  {
    "type": "Identifier",
    "value": "Constant",
    "start": 5124,
    "end": 5132
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5133,
    "end": 5134
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5135,
    "end": 5136
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 5137,
    "end": 5139
  },
  {
    "type": "Numeric",
    "value": "15",
    "start": 5140,
    "end": 5142
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5142,
    "end": 5143
  },
  {
    "type": "Identifier",
    "value": "Optional",
    "start": 5152,
    "end": 5160
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5161,
    "end": 5162
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5163,
    "end": 5164
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 5165,
    "end": 5167
  },
  {
    "type": "Numeric",
    "value": "16",
    "start": 5168,
    "end": 5170
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5170,
    "end": 5171
  },
  {
    "type": "Identifier",
    "value": "RecursivelyReferenced",
    "start": 5180,
    "end": 5201
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5202,
    "end": 5203
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5204,
    "end": 5205
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 5206,
    "end": 5208
  },
  {
    "type": "Numeric",
    "value": "17",
    "start": 5209,
    "end": 5211
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5211,
    "end": 5212
  },
  {
    "type": "Identifier",
    "value": "Bound",
    "start": 5221,
    "end": 5226
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5227,
    "end": 5228
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5229,
    "end": 5230
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 5231,
    "end": 5233
  },
  {
    "type": "Numeric",
    "value": "18",
    "start": 5234,
    "end": 5236
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5236,
    "end": 5237
  },
  {
    "type": "Identifier",
    "value": "CompilerGenerated",
    "start": 5246,
    "end": 5263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5264,
    "end": 5265
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5266,
    "end": 5267
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 5268,
    "end": 5270
  },
  {
    "type": "Numeric",
    "value": "19",
    "start": 5271,
    "end": 5273
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5273,
    "end": 5274
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5279,
    "end": 5280
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5286,
    "end": 5292
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 5293,
    "end": 5297
  },
  {
    "type": "Identifier",
    "value": "VarFlags",
    "start": 5298,
    "end": 5306
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5307,
    "end": 5308
  },
  {
    "type": "Identifier",
    "value": "None",
    "start": 5317,
    "end": 5321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5322,
    "end": 5323
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 5324,
    "end": 5325
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5325,
    "end": 5326
  },
  {
    "type": "Identifier",
    "value": "Exported",
    "start": 5335,
    "end": 5343
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5344,
    "end": 5345
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5346,
    "end": 5347
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5347,
    "end": 5348
  },
  {
    "type": "Identifier",
    "value": "Private",
    "start": 5357,
    "end": 5364
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5365,
    "end": 5366
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5367,
    "end": 5368
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 5369,
    "end": 5371
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5372,
    "end": 5373
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5373,
    "end": 5374
  },
  {
    "type": "Identifier",
    "value": "Public",
    "start": 5383,
    "end": 5389
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5390,
    "end": 5391
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5392,
    "end": 5393
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 5394,
    "end": 5396
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 5397,
    "end": 5398
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5398,
    "end": 5399
  },
  {
    "type": "Identifier",
    "value": "Ambient",
    "start": 5408,
    "end": 5415
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5416,
    "end": 5417
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5418,
    "end": 5419
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 5420,
    "end": 5422
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 5423,
    "end": 5424
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5424,
    "end": 5425
  },
  {
    "type": "Identifier",
    "value": "Static",
    "start": 5434,
    "end": 5440
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5441,
    "end": 5442
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5443,
    "end": 5444
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 5445,
    "end": 5447
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 5448,
    "end": 5449
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5449,
    "end": 5450
  },
  {
    "type": "Identifier",
    "value": "LocalStatic",
    "start": 5459,
    "end": 5470
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5471,
    "end": 5472
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5473,
    "end": 5474
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 5475,
    "end": 5477
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 5478,
    "end": 5479
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5479,
    "end": 5480
  },
  {
    "type": "Identifier",
    "value": "GetAccessor",
    "start": 5489,
    "end": 5500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5501,
    "end": 5502
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5503,
    "end": 5504
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 5505,
    "end": 5507
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 5508,
    "end": 5509
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5509,
    "end": 5510
  },
  {
    "type": "Identifier",
    "value": "SetAccessor",
    "start": 5519,
    "end": 5530
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5531,
    "end": 5532
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5533,
    "end": 5534
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 5535,
    "end": 5537
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 5538,
    "end": 5539
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5539,
    "end": 5540
  },
  {
    "type": "Identifier",
    "value": "AutoInit",
    "start": 5549,
    "end": 5557
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5558,
    "end": 5559
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5560,
    "end": 5561
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 5562,
    "end": 5564
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 5565,
    "end": 5566
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5566,
    "end": 5567
  },
  {
    "type": "Identifier",
    "value": "Property",
    "start": 5576,
    "end": 5584
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5585,
    "end": 5586
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5587,
    "end": 5588
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 5589,
    "end": 5591
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 5592,
    "end": 5593
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5593,
    "end": 5594
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 5603,
    "end": 5611
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5612,
    "end": 5613
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5614,
    "end": 5615
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 5616,
    "end": 5618
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 5619,
    "end": 5621
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5621,
    "end": 5622
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 5631,
    "end": 5636
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5637,
    "end": 5638
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5639,
    "end": 5640
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 5641,
    "end": 5643
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 5644,
    "end": 5646
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5646,
    "end": 5647
  },
  {
    "type": "Identifier",
    "value": "ClassProperty",
    "start": 5656,
    "end": 5669
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5670,
    "end": 5671
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5672,
    "end": 5673
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 5674,
    "end": 5676
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 5677,
    "end": 5679
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5679,
    "end": 5680
  },
  {
    "type": "Identifier",
    "value": "ClassBodyProperty",
    "start": 5689,
    "end": 5706
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5707,
    "end": 5708
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5709,
    "end": 5710
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 5711,
    "end": 5713
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 5714,
    "end": 5716
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5716,
    "end": 5717
  },
  {
    "type": "Identifier",
    "value": "ClassConstructorProperty",
    "start": 5726,
    "end": 5750
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5751,
    "end": 5752
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5753,
    "end": 5754
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 5755,
    "end": 5757
  },
  {
    "type": "Numeric",
    "value": "14",
    "start": 5758,
    "end": 5760
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5760,
    "end": 5761
  },
  {
    "type": "Identifier",
    "value": "ClassSuperMustBeFirstCallInConstructor",
    "start": 5770,
    "end": 5808
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5809,
    "end": 5810
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5811,
    "end": 5812
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 5813,
    "end": 5815
  },
  {
    "type": "Numeric",
    "value": "15",
    "start": 5816,
    "end": 5818
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5818,
    "end": 5819
  },
  {
    "type": "Identifier",
    "value": "Constant",
    "start": 5828,
    "end": 5836
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5837,
    "end": 5838
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5839,
    "end": 5840
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 5841,
    "end": 5843
  },
  {
    "type": "Numeric",
    "value": "16",
    "start": 5844,
    "end": 5846
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5846,
    "end": 5847
  },
  {
    "type": "Identifier",
    "value": "MustCaptureThis",
    "start": 5856,
    "end": 5871
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5872,
    "end": 5873
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5874,
    "end": 5875
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 5876,
    "end": 5878
  },
  {
    "type": "Numeric",
    "value": "17",
    "start": 5879,
    "end": 5881
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5881,
    "end": 5882
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5887,
    "end": 5888
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5894,
    "end": 5900
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 5901,
    "end": 5905
  },
  {
    "type": "Identifier",
    "value": "FncFlags",
    "start": 5906,
    "end": 5914
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5915,
    "end": 5916
  },
  {
    "type": "Identifier",
    "value": "None",
    "start": 5925,
    "end": 5929
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5930,
    "end": 5931
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 5932,
    "end": 5933
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5933,
    "end": 5934
  },
  {
    "type": "Identifier",
    "value": "Exported",
    "start": 5943,
    "end": 5951
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5952,
    "end": 5953
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5954,
    "end": 5955
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5955,
    "end": 5956
  },
  {
    "type": "Identifier",
    "value": "Private",
    "start": 5965,
    "end": 5972
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5973,
    "end": 5974
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5975,
    "end": 5976
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 5977,
    "end": 5979
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5980,
    "end": 5981
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5981,
    "end": 5982
  },
  {
    "type": "Identifier",
    "value": "Public",
    "start": 5991,
    "end": 5997
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5998,
    "end": 5999
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6000,
    "end": 6001
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 6002,
    "end": 6004
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 6005,
    "end": 6006
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6006,
    "end": 6007
  },
  {
    "type": "Identifier",
    "value": "Ambient",
    "start": 6016,
    "end": 6023
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6024,
    "end": 6025
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6026,
    "end": 6027
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 6028,
    "end": 6030
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 6031,
    "end": 6032
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6032,
    "end": 6033
  },
  {
    "type": "Identifier",
    "value": "Static",
    "start": 6042,
    "end": 6048
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6049,
    "end": 6050
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6051,
    "end": 6052
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 6053,
    "end": 6055
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 6056,
    "end": 6057
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6057,
    "end": 6058
  },
  {
    "type": "Identifier",
    "value": "LocalStatic",
    "start": 6067,
    "end": 6078
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6079,
    "end": 6080
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6081,
    "end": 6082
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 6083,
    "end": 6085
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 6086,
    "end": 6087
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6087,
    "end": 6088
  },
  {
    "type": "Identifier",
    "value": "GetAccessor",
    "start": 6097,
    "end": 6108
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6109,
    "end": 6110
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6111,
    "end": 6112
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 6113,
    "end": 6115
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 6116,
    "end": 6117
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6117,
    "end": 6118
  },
  {
    "type": "Identifier",
    "value": "SetAccessor",
    "start": 6127,
    "end": 6138
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6139,
    "end": 6140
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6141,
    "end": 6142
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 6143,
    "end": 6145
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 6146,
    "end": 6147
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6147,
    "end": 6148
  },
  {
    "type": "Identifier",
    "value": "Definition",
    "start": 6157,
    "end": 6167
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6168,
    "end": 6169
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6170,
    "end": 6171
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 6172,
    "end": 6174
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 6175,
    "end": 6176
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6176,
    "end": 6177
  },
  {
    "type": "Identifier",
    "value": "Signature",
    "start": 6186,
    "end": 6195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6196,
    "end": 6197
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6198,
    "end": 6199
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 6200,
    "end": 6202
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 6203,
    "end": 6204
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6204,
    "end": 6205
  },
  {
    "type": "Identifier",
    "value": "Method",
    "start": 6214,
    "end": 6220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6221,
    "end": 6222
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6223,
    "end": 6224
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 6225,
    "end": 6227
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 6228,
    "end": 6230
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6230,
    "end": 6231
  },
  {
    "type": "Identifier",
    "value": "HasReturnExpression",
    "start": 6240,
    "end": 6259
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6260,
    "end": 6261
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6262,
    "end": 6263
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 6264,
    "end": 6266
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 6267,
    "end": 6269
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6269,
    "end": 6270
  },
  {
    "type": "Identifier",
    "value": "CallMember",
    "start": 6279,
    "end": 6289
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6290,
    "end": 6291
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6292,
    "end": 6293
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 6294,
    "end": 6296
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 6297,
    "end": 6299
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6299,
    "end": 6300
  },
  {
    "type": "Identifier",
    "value": "ConstructMember",
    "start": 6309,
    "end": 6324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6325,
    "end": 6326
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6327,
    "end": 6328
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 6329,
    "end": 6331
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 6332,
    "end": 6334
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6334,
    "end": 6335
  },
  {
    "type": "Identifier",
    "value": "HasSelfReference",
    "start": 6344,
    "end": 6360
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6361,
    "end": 6362
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6363,
    "end": 6364
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 6365,
    "end": 6367
  },
  {
    "type": "Numeric",
    "value": "14",
    "start": 6368,
    "end": 6370
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6370,
    "end": 6371
  },
  {
    "type": "Identifier",
    "value": "IsFatArrowFunction",
    "start": 6380,
    "end": 6398
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6399,
    "end": 6400
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6401,
    "end": 6402
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 6403,
    "end": 6405
  },
  {
    "type": "Numeric",
    "value": "15",
    "start": 6406,
    "end": 6408
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6408,
    "end": 6409
  },
  {
    "type": "Identifier",
    "value": "IndexerMember",
    "start": 6418,
    "end": 6431
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6432,
    "end": 6433
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6434,
    "end": 6435
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 6436,
    "end": 6438
  },
  {
    "type": "Numeric",
    "value": "16",
    "start": 6439,
    "end": 6441
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6441,
    "end": 6442
  },
  {
    "type": "Identifier",
    "value": "IsFunctionExpression",
    "start": 6451,
    "end": 6471
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6472,
    "end": 6473
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6474,
    "end": 6475
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 6476,
    "end": 6478
  },
  {
    "type": "Numeric",
    "value": "17",
    "start": 6479,
    "end": 6481
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6481,
    "end": 6482
  },
  {
    "type": "Identifier",
    "value": "ClassMethod",
    "start": 6491,
    "end": 6502
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6503,
    "end": 6504
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6505,
    "end": 6506
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 6507,
    "end": 6509
  },
  {
    "type": "Numeric",
    "value": "18",
    "start": 6510,
    "end": 6512
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6512,
    "end": 6513
  },
  {
    "type": "Identifier",
    "value": "ClassPropertyMethodExported",
    "start": 6522,
    "end": 6549
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6550,
    "end": 6551
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6552,
    "end": 6553
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 6554,
    "end": 6556
  },
  {
    "type": "Numeric",
    "value": "19",
    "start": 6557,
    "end": 6559
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6559,
    "end": 6560
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6565,
    "end": 6566
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6572,
    "end": 6578
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 6579,
    "end": 6583
  },
  {
    "type": "Identifier",
    "value": "SignatureFlags",
    "start": 6584,
    "end": 6598
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6599,
    "end": 6600
  },
  {
    "type": "Identifier",
    "value": "None",
    "start": 6609,
    "end": 6613
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6614,
    "end": 6615
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 6616,
    "end": 6617
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6617,
    "end": 6618
  },
  {
    "type": "Identifier",
    "value": "IsIndexer",
    "start": 6627,
    "end": 6636
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6637,
    "end": 6638
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6639,
    "end": 6640
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6640,
    "end": 6641
  },
  {
    "type": "Identifier",
    "value": "IsStringIndexer",
    "start": 6650,
    "end": 6665
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6666,
    "end": 6667
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6668,
    "end": 6669
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 6670,
    "end": 6672
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6673,
    "end": 6674
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6674,
    "end": 6675
  },
  {
    "type": "Identifier",
    "value": "IsNumberIndexer",
    "start": 6684,
    "end": 6699
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6700,
    "end": 6701
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6702,
    "end": 6703
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 6704,
    "end": 6706
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 6707,
    "end": 6708
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6708,
    "end": 6709
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6714,
    "end": 6715
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6721,
    "end": 6727
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6728,
    "end": 6736
  },
  {
    "type": "Identifier",
    "value": "ToDeclFlags",
    "start": 6737,
    "end": 6748
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6748,
    "end": 6749
  },
  {
    "type": "Identifier",
    "value": "fncFlags",
    "start": 6749,
    "end": 6757
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6757,
    "end": 6758
  },
  {
    "type": "Identifier",
    "value": "FncFlags",
    "start": 6759,
    "end": 6767
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6767,
    "end": 6768
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6769,
    "end": 6770
  },
  {
    "type": "Identifier",
    "value": "DeclFlags",
    "start": 6771,
    "end": 6780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6780,
    "end": 6781
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6786,
    "end": 6792
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6793,
    "end": 6801
  },
  {
    "type": "Identifier",
    "value": "ToDeclFlags",
    "start": 6802,
    "end": 6813
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6813,
    "end": 6814
  },
  {
    "type": "Identifier",
    "value": "varFlags",
    "start": 6814,
    "end": 6822
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6822,
    "end": 6823
  },
  {
    "type": "Identifier",
    "value": "VarFlags",
    "start": 6824,
    "end": 6832
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6832,
    "end": 6833
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6834,
    "end": 6835
  },
  {
    "type": "Identifier",
    "value": "DeclFlags",
    "start": 6836,
    "end": 6845
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6845,
    "end": 6846
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6851,
    "end": 6857
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6858,
    "end": 6866
  },
  {
    "type": "Identifier",
    "value": "ToDeclFlags",
    "start": 6867,
    "end": 6878
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6878,
    "end": 6879
  },
  {
    "type": "Identifier",
    "value": "symFlags",
    "start": 6879,
    "end": 6887
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6887,
    "end": 6888
  },
  {
    "type": "Identifier",
    "value": "SymbolFlags",
    "start": 6889,
    "end": 6900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6900,
    "end": 6901
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6901,
    "end": 6902
  },
  {
    "type": "Identifier",
    "value": "DeclFlags",
    "start": 6903,
    "end": 6912
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6912,
    "end": 6913
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6918,
    "end": 6924
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6925,
    "end": 6933
  },
  {
    "type": "Identifier",
    "value": "ToDeclFlags",
    "start": 6934,
    "end": 6945
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6945,
    "end": 6946
  },
  {
    "type": "Identifier",
    "value": "moduleFlags",
    "start": 6946,
    "end": 6957
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6957,
    "end": 6958
  },
  {
    "type": "Identifier",
    "value": "ModuleFlags",
    "start": 6959,
    "end": 6970
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6970,
    "end": 6971
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6971,
    "end": 6972
  },
  {
    "type": "Identifier",
    "value": "DeclFlags",
    "start": 6973,
    "end": 6982
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6982,
    "end": 6983
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6988,
    "end": 6994
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6995,
    "end": 7003
  },
  {
    "type": "Identifier",
    "value": "ToDeclFlags",
    "start": 7004,
    "end": 7015
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7015,
    "end": 7016
  },
  {
    "type": "Identifier",
    "value": "fncOrVarOrSymbolOrModuleFlags",
    "start": 7016,
    "end": 7045
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7045,
    "end": 7046
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 7047,
    "end": 7050
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7050,
    "end": 7051
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7052,
    "end": 7053
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7062,
    "end": 7068
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7069,
    "end": 7070
  },
  {
    "type": "Identifier",
    "value": "DeclFlags",
    "start": 7070,
    "end": 7079
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7079,
    "end": 7080
  },
  {
    "type": "Identifier",
    "value": "fncOrVarOrSymbolOrModuleFlags",
    "start": 7080,
    "end": 7109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7109,
    "end": 7110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7115,
    "end": 7116
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7122,
    "end": 7128
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 7129,
    "end": 7133
  },
  {
    "type": "Identifier",
    "value": "TypeFlags",
    "start": 7134,
    "end": 7143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7144,
    "end": 7145
  },
  {
    "type": "Identifier",
    "value": "None",
    "start": 7154,
    "end": 7158
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7159,
    "end": 7160
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 7161,
    "end": 7162
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7162,
    "end": 7163
  },
  {
    "type": "Identifier",
    "value": "HasImplementation",
    "start": 7172,
    "end": 7189
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7190,
    "end": 7191
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 7192,
    "end": 7193
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7193,
    "end": 7194
  },
  {
    "type": "Identifier",
    "value": "HasSelfReference",
    "start": 7203,
    "end": 7219
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7220,
    "end": 7221
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 7222,
    "end": 7223
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 7224,
    "end": 7226
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 7227,
    "end": 7228
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7228,
    "end": 7229
  },
  {
    "type": "Identifier",
    "value": "MergeResult",
    "start": 7238,
    "end": 7249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7250,
    "end": 7251
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 7252,
    "end": 7253
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 7254,
    "end": 7256
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 7257,
    "end": 7258
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7258,
    "end": 7259
  },
  {
    "type": "Identifier",
    "value": "IsEnum",
    "start": 7268,
    "end": 7274
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7275,
    "end": 7276
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 7277,
    "end": 7278
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 7279,
    "end": 7281
  },
  {
    "type": "Numeric",
    "value": "3",
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
    "value": "BuildingName",
    "start": 7293,
    "end": 7305
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7306,
    "end": 7307
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 7308,
    "end": 7309
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 7310,
    "end": 7312
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 7313,
    "end": 7314
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7314,
    "end": 7315
  },
  {
    "type": "Identifier",
    "value": "HasBaseType",
    "start": 7324,
    "end": 7335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7336,
    "end": 7337
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 7338,
    "end": 7339
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 7340,
    "end": 7342
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 7343,
    "end": 7344
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7344,
    "end": 7345
  },
  {
    "type": "Identifier",
    "value": "HasBaseTypeOfObject",
    "start": 7354,
    "end": 7373
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7374,
    "end": 7375
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 7376,
    "end": 7377
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 7378,
    "end": 7380
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 7381,
    "end": 7382
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7382,
    "end": 7383
  },
  {
    "type": "Identifier",
    "value": "IsClass",
    "start": 7392,
    "end": 7399
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7400,
    "end": 7401
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 7402,
    "end": 7403
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 7404,
    "end": 7406
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 7407,
    "end": 7408
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7408,
    "end": 7409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7414,
    "end": 7415
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7421,
    "end": 7427
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 7428,
    "end": 7432
  },
  {
    "type": "Identifier",
    "value": "TypeRelationshipFlags",
    "start": 7433,
    "end": 7454
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7455,
    "end": 7456
  },
  {
    "type": "Identifier",
    "value": "SuccessfulComparison",
    "start": 7465,
    "end": 7485
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7486,
    "end": 7487
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 7488,
    "end": 7489
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7489,
    "end": 7490
  },
  {
    "type": "Identifier",
    "value": "SourceIsNullTargetIsVoidOrUndefined",
    "start": 7499,
    "end": 7534
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7535,
    "end": 7536
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 7537,
    "end": 7538
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7538,
    "end": 7539
  },
  {
    "type": "Identifier",
    "value": "RequiredPropertyIsMissing",
    "start": 7548,
    "end": 7573
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7574,
    "end": 7575
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 7576,
    "end": 7577
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 7578,
    "end": 7580
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 7581,
    "end": 7582
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7582,
    "end": 7583
  },
  {
    "type": "Identifier",
    "value": "IncompatibleSignatures",
    "start": 7592,
    "end": 7614
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7615,
    "end": 7616
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 7617,
    "end": 7618
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 7619,
    "end": 7621
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 7622,
    "end": 7623
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7623,
    "end": 7624
  },
  {
    "type": "Identifier",
    "value": "SourceSignatureHasTooManyParameters",
    "start": 7633,
    "end": 7668
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7669,
    "end": 7670
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 7671,
    "end": 7672
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7672,
    "end": 7673
  },
  {
    "type": "Identifier",
    "value": "IncompatibleReturnTypes",
    "start": 7682,
    "end": 7705
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7706,
    "end": 7707
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 7708,
    "end": 7709
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 7710,
    "end": 7712
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 7713,
    "end": 7714
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7714,
    "end": 7715
  },
  {
    "type": "Identifier",
    "value": "IncompatiblePropertyTypes",
    "start": 7724,
    "end": 7749
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7750,
    "end": 7751
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 7752,
    "end": 7753
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 7754,
    "end": 7756
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 7757,
    "end": 7758
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7758,
    "end": 7759
  },
  {
    "type": "Identifier",
    "value": "IncompatibleParameterTypes",
    "start": 7768,
    "end": 7794
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7795,
    "end": 7796
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 7797,
    "end": 7798
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 7799,
    "end": 7801
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 7802,
    "end": 7803
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7803,
    "end": 7804
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7809,
    "end": 7810
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7816,
    "end": 7822
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 7823,
    "end": 7827
  },
  {
    "type": "Identifier",
    "value": "CodeGenTarget",
    "start": 7828,
    "end": 7841
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7842,
    "end": 7843
  },
  {
    "type": "Identifier",
    "value": "ES3",
    "start": 7852,
    "end": 7855
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7856,
    "end": 7857
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 7858,
    "end": 7859
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7859,
    "end": 7860
  },
  {
    "type": "Identifier",
    "value": "ES5",
    "start": 7869,
    "end": 7872
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7873,
    "end": 7874
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 7875,
    "end": 7876
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7876,
    "end": 7877
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7882,
    "end": 7883
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7889,
    "end": 7895
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 7896,
    "end": 7900
  },
  {
    "type": "Identifier",
    "value": "ModuleGenTarget",
    "start": 7901,
    "end": 7916
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7917,
    "end": 7918
  },
  {
    "type": "Identifier",
    "value": "Synchronous",
    "start": 7927,
    "end": 7938
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7939,
    "end": 7940
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 7941,
    "end": 7942
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7942,
    "end": 7943
  },
  {
    "type": "Identifier",
    "value": "Asynchronous",
    "start": 7952,
    "end": 7964
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7965,
    "end": 7966
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 7967,
    "end": 7968
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7968,
    "end": 7969
  },
  {
    "type": "Identifier",
    "value": "Local",
    "start": 7978,
    "end": 7983
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7984,
    "end": 7985
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 7986,
    "end": 7987
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 7988,
    "end": 7990
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 7991,
    "end": 7992
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7992,
    "end": 7993
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7998,
    "end": 7999
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8097,
    "end": 8103
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8104,
    "end": 8107
  },
  {
    "type": "Identifier",
    "value": "codeGenTarget",
    "start": 8108,
    "end": 8121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8121,
    "end": 8122
  },
  {
    "type": "Identifier",
    "value": "CodeGenTarget",
    "start": 8123,
    "end": 8136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8137,
    "end": 8138
  },
  {
    "type": "Identifier",
    "value": "CodeGenTarget",
    "start": 8139,
    "end": 8152
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8152,
    "end": 8153
  },
  {
    "type": "Identifier",
    "value": "ES3",
    "start": 8153,
    "end": 8156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8156,
    "end": 8157
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8163,
    "end": 8169
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8170,
    "end": 8173
  },
  {
    "type": "Identifier",
    "value": "moduleGenTarget",
    "start": 8174,
    "end": 8189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8189,
    "end": 8190
  },
  {
    "type": "Identifier",
    "value": "ModuleGenTarget",
    "start": 8191,
    "end": 8206
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8207,
    "end": 8208
  },
  {
    "type": "Identifier",
    "value": "ModuleGenTarget",
    "start": 8209,
    "end": 8224
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8224,
    "end": 8225
  },
  {
    "type": "Identifier",
    "value": "Synchronous",
    "start": 8225,
    "end": 8236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8236,
    "end": 8237
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8243,
    "end": 8249
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8250,
    "end": 8253
  },
  {
    "type": "Identifier",
    "value": "optimizeModuleCodeGen",
    "start": 8254,
    "end": 8275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8276,
    "end": 8277
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 8278,
    "end": 8282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8282,
    "end": 8283
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8289,
    "end": 8295
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8296,
    "end": 8304
  },
  {
    "type": "Identifier",
    "value": "flagsToString",
    "start": 8305,
    "end": 8318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8318,
    "end": 8319
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 8319,
    "end": 8320
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8320,
    "end": 8321
  },
  {
    "type": "Identifier",
    "value": "flags",
    "start": 8322,
    "end": 8327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8327,
    "end": 8328
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8329,
    "end": 8335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8335,
    "end": 8336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8336,
    "end": 8337
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 8338,
    "end": 8344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8345,
    "end": 8346
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8355,
    "end": 8358
  },
  {
    "type": "Identifier",
    "value": "builder",
    "start": 8359,
    "end": 8366
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8367,
    "end": 8368
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 8369,
    "end": 8371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8371,
    "end": 8372
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 8381,
    "end": 8384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8385,
    "end": 8386
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8386,
    "end": 8389
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 8390,
    "end": 8391
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8392,
    "end": 8393
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 8394,
    "end": 8395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8395,
    "end": 8396
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 8397,
    "end": 8398
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8399,
    "end": 8400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8401,
    "end": 8402
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 8402,
    "end": 8403
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 8404,
    "end": 8406
  },
  {
    "type": "Numeric",
    "value": "31",
    "start": 8407,
    "end": 8409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8409,
    "end": 8410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8411,
    "end": 8412
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 8413,
    "end": 8414
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8415,
    "end": 8416
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 8417,
    "end": 8418
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 8419,
    "end": 8421
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 8422,
    "end": 8423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8423,
    "end": 8424
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8425,
    "end": 8426
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 8439,
    "end": 8441
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8442,
    "end": 8443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8443,
    "end": 8444
  },
  {
    "type": "Identifier",
    "value": "flags",
    "start": 8444,
    "end": 8449
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 8450,
    "end": 8451
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 8452,
    "end": 8453
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8453,
    "end": 8454
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 8455,
    "end": 8457
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 8458,
    "end": 8459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8459,
    "end": 8460
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8461,
    "end": 8462
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 8479,
    "end": 8482
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8483,
    "end": 8484
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8484,
    "end": 8487
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 8488,
    "end": 8489
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 8490,
    "end": 8492
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 8493,
    "end": 8494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8494,
    "end": 8495
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8496,
    "end": 8497
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 8518,
    "end": 8520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8521,
    "end": 8522
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 8522,
    "end": 8523
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8523,
    "end": 8524
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 8524,
    "end": 8525
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8525,
    "end": 8526
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 8527,
    "end": 8529
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 8530,
    "end": 8531
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8531,
    "end": 8532
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8533,
    "end": 8534
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 8559,
    "end": 8561
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8562,
    "end": 8563
  },
  {
    "type": "Identifier",
    "value": "builder",
    "start": 8563,
    "end": 8570
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8570,
    "end": 8571
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 8571,
    "end": 8577
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8578,
    "end": 8579
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 8580,
    "end": 8581
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8581,
    "end": 8582
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8583,
    "end": 8584
  },
  {
    "type": "Identifier",
    "value": "builder",
    "start": 8613,
    "end": 8620
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 8621,
    "end": 8623
  },
  {
    "type": "String",
    "value": "\"|\"",
    "start": 8624,
    "end": 8627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8627,
    "end": 8628
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8653,
    "end": 8654
  },
  {
    "type": "Identifier",
    "value": "builder",
    "start": 8679,
    "end": 8686
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 8687,
    "end": 8689
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 8690,
    "end": 8691
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8691,
    "end": 8692
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 8717,
    "end": 8722
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8722,
    "end": 8723
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8744,
    "end": 8745
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8762,
    "end": 8763
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8776,
    "end": 8777
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8786,
    "end": 8787
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8796,
    "end": 8802
  },
  {
    "type": "Identifier",
    "value": "builder",
    "start": 8803,
    "end": 8810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8810,
    "end": 8811
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8816,
    "end": 8817
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8819,
    "end": 8820
  }
]
```
