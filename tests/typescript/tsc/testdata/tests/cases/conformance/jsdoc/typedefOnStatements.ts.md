__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "EmptyStatement",
      "start": 32,
      "end": 33
    },
    {
      "type": "DebuggerStatement",
      "start": 68,
      "end": 77
    },
    {
      "type": "BlockStatement",
      "body": [],
      "start": 112,
      "end": 115
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 150,
          "end": 151
        },
        "operator": "+",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 154,
          "end": 155
        },
        "start": 150,
        "end": 155
      },
      "directive": null,
      "start": 150,
      "end": 156
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 195,
        "end": 200
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 202,
        "end": 205
      },
      "alternate": null,
      "start": 191,
      "end": 205
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 243,
        "end": 246
      },
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 254,
        "end": 259
      },
      "start": 240,
      "end": 261
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 303,
        "end": 308
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 310,
        "end": 313
      },
      "start": 296,
      "end": 313
    },
    {
      "type": "ForStatement",
      "init": null,
      "test": null,
      "update": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 356,
        "end": 361
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 363,
        "end": 366
      },
      "start": 348,
      "end": 366
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 410,
              "end": 411
            },
            "init": null,
            "definite": false,
            "start": 410,
            "end": 411
          }
        ],
        "declare": false,
        "start": 406,
        "end": 411
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 415,
        "end": 417
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 419,
        "end": 422
      },
      "start": 401,
      "end": 422
    },
    {
      "type": "BreakStatement",
      "label": null,
      "start": 457,
      "end": 463
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 507,
              "end": 508
            },
            "init": null,
            "definite": false,
            "start": 507,
            "end": 508
          }
        ],
        "declare": false,
        "start": 503,
        "end": 508
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 512,
        "end": 514
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 516,
        "end": 519
      },
      "start": 498,
      "end": 519
    },
    {
      "type": "ContinueStatement",
      "label": null,
      "start": 554,
      "end": 563
    },
    {
      "type": "WithStatement",
      "object": {
        "type": "Identifier",
        "decorators": [],
        "name": "name",
        "optional": false,
        "typeAnnotation": null,
        "start": 604,
        "end": 608
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 610,
        "end": 613
      },
      "start": 598,
      "end": 613
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "name",
        "optional": false,
        "typeAnnotation": null,
        "start": 656,
        "end": 660
      },
      "cases": [],
      "start": 648,
      "end": 665
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "fork",
        "optional": false,
        "typeAnnotation": null,
        "start": 701,
        "end": 705
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 714,
          "end": 719
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 721,
          "end": 724
        },
        "start": 707,
        "end": 724
      },
      "start": 701,
      "end": 724
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Error",
          "optional": false,
          "typeAnnotation": null,
          "start": 770,
          "end": 775
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "Unreachable",
            "raw": "'Unreachable'",
            "start": 776,
            "end": 789
          }
        ],
        "start": 766,
        "end": 790
      },
      "start": 760,
      "end": 790
    },
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [],
        "start": 830,
        "end": 833
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 841,
          "end": 842
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 844,
          "end": 847
        },
        "start": 834,
        "end": 847
      },
      "finalizer": null,
      "start": 826,
      "end": 847
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "proof",
        "optional": false,
        "typeAnnotation": null,
        "start": 1138,
        "end": 1143
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
          "start": 1145,
          "end": 1146
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1147,
          "end": 1148
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 1149,
          "end": 1150
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 1151,
          "end": 1152
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 1153,
          "end": 1154
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 1155,
          "end": 1156
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 1157,
          "end": 1158
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "h",
          "optional": false,
          "typeAnnotation": null,
          "start": 1159,
          "end": 1160
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1161,
          "end": 1162
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "j",
          "optional": false,
          "typeAnnotation": null,
          "start": 1163,
          "end": 1164
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 1165,
          "end": 1166
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": null,
          "start": 1167,
          "end": 1168
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null,
          "start": 1169,
          "end": 1170
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 1171,
          "end": 1172
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 1173,
          "end": 1174
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null,
          "start": 1175,
          "end": 1176
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "q",
          "optional": false,
          "typeAnnotation": null,
          "start": 1177,
          "end": 1178
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1186,
                  "end": 1193
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1194,
                  "end": 1197
                },
                "optional": false,
                "computed": false,
                "start": 1186,
                "end": 1197
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1198,
                    "end": 1199
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1200,
                    "end": 1201
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1198,
                  "end": 1201
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1203,
                    "end": 1204
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1205,
                    "end": 1206
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1203,
                  "end": 1206
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1208,
                    "end": 1209
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1210,
                    "end": 1211
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1208,
                  "end": 1211
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1213,
                    "end": 1214
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1215,
                    "end": 1216
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1213,
                  "end": 1216
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1218,
                    "end": 1219
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1220,
                    "end": 1221
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1218,
                  "end": 1221
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1223,
                    "end": 1224
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1225,
                    "end": 1226
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1223,
                  "end": 1226
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1228,
                    "end": 1229
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1230,
                    "end": 1231
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1228,
                  "end": 1231
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "h",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1233,
                    "end": 1234
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "h",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1235,
                    "end": 1236
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1233,
                  "end": 1236
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1238,
                    "end": 1239
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1240,
                    "end": 1241
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1238,
                  "end": 1241
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "j",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1243,
                    "end": 1244
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "j",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1245,
                    "end": 1246
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1243,
                  "end": 1246
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1248,
                    "end": 1249
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1250,
                    "end": 1251
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1248,
                  "end": 1251
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1253,
                    "end": 1254
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1255,
                    "end": 1256
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1253,
                  "end": 1256
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1258,
                    "end": 1259
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1260,
                    "end": 1261
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1258,
                  "end": 1261
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1263,
                    "end": 1264
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1265,
                    "end": 1266
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1263,
                  "end": 1266
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1268,
                    "end": 1269
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1270,
                    "end": 1271
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1268,
                  "end": 1271
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1273,
                    "end": 1274
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1275,
                    "end": 1276
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1273,
                  "end": 1276
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "q",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1278,
                    "end": 1279
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "q",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1280,
                    "end": 1281
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1278,
                  "end": 1281
                }
              ],
              "optional": false,
              "start": 1186,
              "end": 1282
            },
            "directive": null,
            "start": 1186,
            "end": 1282
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
                  "name": "alpha",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1316,
                  "end": 1321
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
                        "name": "alpha",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1326,
                        "end": 1331
                      },
                      "value": {
                        "type": "Literal",
                        "value": "aleph",
                        "raw": "\"aleph\"",
                        "start": 1333,
                        "end": 1340
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1326,
                      "end": 1340
                    }
                  ],
                  "start": 1324,
                  "end": 1342
                },
                "definite": false,
                "start": 1316,
                "end": 1342
              }
            ],
            "declare": false,
            "start": 1312,
            "end": 1342
          },
          {
            "type": "ReturnStatement",
            "argument": null,
            "start": 1393,
            "end": 1399
          }
        ],
        "start": 1180,
        "end": 1401
      },
      "expression": false,
      "start": 1129,
      "end": 1401
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 32,
  "end": 1402
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "debugger",
    "start": 68,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 152,
    "end": 153
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 191,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 194,
    "end": 195
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 195,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 240,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 245,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 247,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 253,
    "end": 254
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 254,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 296,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 303,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 348,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 356,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 365,
    "end": 366
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 401,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 406,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 410,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 412,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 421,
    "end": 422
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 457,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 462,
    "end": 463
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 498,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 502,
    "end": 503
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 503,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 509,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "type": "Keyword",
    "value": "continue",
    "start": 554,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 562,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 598,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 604,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 612,
    "end": 613
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 648,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 656,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "fork",
    "start": 701,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 705,
    "end": 706
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 707,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 713,
    "end": 714
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 714,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 723,
    "end": 724
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 760,
    "end": 765
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 766,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 770,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 775,
    "end": 776
  },
  {
    "type": "String",
    "value": "'Unreachable'",
    "start": 776,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 789,
    "end": 790
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 826,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 832,
    "end": 833
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 834,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 846,
    "end": 847
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1129,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "proof",
    "start": 1138,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1186,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1194,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "a",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1260,
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
    "value": "n",
    "start": 1263,
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
    "value": "n",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "p",
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
    "value": "p",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1312,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "alpha",
    "start": 1316,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Identifier",
    "value": "alpha",
    "start": 1326,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "String",
    "value": "\"aleph\"",
    "start": 1333,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1393,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1400,
    "end": 1401
  }
]
```
