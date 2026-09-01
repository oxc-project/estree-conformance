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
        "name": "Node",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 50
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 51,
        "end": 53
      },
      "abstract": false,
      "declare": false,
      "start": 40,
      "end": 53
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Processor",
          "optional": false,
          "typeAnnotation": null,
          "start": 530,
          "end": 539
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
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1270,
                "end": 1273
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
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1274,
                    "end": 1279
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "parameters",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1284,
                      "end": 1294
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 1281,
                    "end": 1294
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ThisExpression",
                        "start": 1309,
                        "end": 1313
                      },
                      "start": 1302,
                      "end": 1314
                    }
                  ],
                  "start": 1296,
                  "end": 1318
                },
                "expression": false,
                "start": 1273,
                "end": 1318
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1270,
              "end": 1318
            }
          ],
          "start": 540,
          "end": 1320
        },
        "abstract": false,
        "declare": false,
        "start": 524,
        "end": 1320
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 517,
      "end": 1320
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 1325,
            "end": 1326
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Processor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1333,
              "end": 1342
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1329,
            "end": 1344
          },
          "definite": false,
          "start": 1325,
          "end": 1344
        }
      ],
      "declare": false,
      "start": 1321,
      "end": 1345
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
            "start": 1350,
            "end": 1351
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1354,
            "end": 1355
          },
          "definite": false,
          "start": 1350,
          "end": 1355
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 1357,
            "end": 1358
          },
          "init": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1361,
            "end": 1362
          },
          "definite": false,
          "start": 1357,
          "end": 1362
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 1364,
            "end": 1365
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 1368,
            "end": 1369
          },
          "definite": false,
          "start": 1364,
          "end": 1369
        }
      ],
      "declare": false,
      "start": 1346,
      "end": 1370
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 1371,
            "end": 1372
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "use",
            "optional": false,
            "typeAnnotation": null,
            "start": 1373,
            "end": 1376
          },
          "optional": false,
          "computed": false,
          "start": 1371,
          "end": 1376
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1377,
            "end": 1378
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 1380,
            "end": 1381
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 1383,
            "end": 1384
          }
        ],
        "optional": false,
        "start": 1371,
        "end": 1385
      },
      "directive": null,
      "start": 1371,
      "end": 1386
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 40,
  "end": 1386
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 40,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 46,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 517,
    "end": 523
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 524,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "Processor",
    "start": 530,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1270,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1274,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1281,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "parameters",
    "start": 1284,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1302,
    "end": 1308
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1309,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1321,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1329,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "Processor",
    "start": 1333,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1346,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1373,
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
    "value": ",",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1385,
    "end": 1386
  }
]
```
