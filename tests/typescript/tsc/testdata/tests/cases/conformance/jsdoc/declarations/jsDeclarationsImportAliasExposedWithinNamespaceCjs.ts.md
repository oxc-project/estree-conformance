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
            "name": "myTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 82
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 85,
            "end": 111
          },
          "definite": false,
          "start": 75,
          "end": 111
        }
      ],
      "declare": false,
      "start": 69,
      "end": 112
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 369,
            "end": 376
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "myTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 377,
            "end": 384
          },
          "optional": false,
          "computed": false,
          "start": 369,
          "end": 384
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 387,
          "end": 394
        },
        "start": 369,
        "end": 394
      },
      "directive": null,
      "start": 369,
      "end": 395
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 69,
  "end": 395
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 69,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "myTypes",
    "start": 75,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 369,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "myTypes",
    "start": 377,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "myTypes",
    "start": 387,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395
  }
]
```
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
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "myTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7,
                  "end": 14
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "myTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7,
                  "end": 14
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 7,
                "end": 14
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 15
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 25
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./file.js",
                "raw": "'./file.js'",
                "start": 26,
                "end": 37
              }
            ],
            "optional": false,
            "start": 18,
            "end": 38
          },
          "definite": false,
          "start": 6,
          "end": 38
        }
      ],
      "declare": false,
      "start": 0,
      "end": 39
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
            "name": "testFnTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 131
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 134,
            "end": 160
          },
          "definite": false,
          "start": 120,
          "end": 160
        }
      ],
      "declare": false,
      "start": 114,
      "end": 161
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFn",
        "optional": false,
        "typeAnnotation": null,
        "start": 371,
        "end": 377
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": null,
          "start": 378,
          "end": 383
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 402,
                  "end": 407
                },
                "prefix": true,
                "start": 395,
                "end": 407
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "'number'",
                "start": 412,
                "end": 420
              },
              "start": 395,
              "end": 420
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 439,
                      "end": 440
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 443,
                      "end": 448
                    },
                    "start": 439,
                    "end": 448
                  },
                  "start": 432,
                  "end": 449
                }
              ],
              "start": 422,
              "end": 455
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 478,
                    "end": 482
                  },
                  "start": 471,
                  "end": 483
                }
              ],
              "start": 461,
              "end": 489
            },
            "start": 391,
            "end": 489
          }
        ],
        "start": 385,
        "end": 491
      },
      "expression": false,
      "start": 362,
      "end": 491
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
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 493,
            "end": 499
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 500,
            "end": 507
          },
          "optional": false,
          "computed": false,
          "start": 493,
          "end": 507
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
                "name": "testFn",
                "optional": false,
                "typeAnnotation": null,
                "start": 511,
                "end": 517
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "testFn",
                "optional": false,
                "typeAnnotation": null,
                "start": 511,
                "end": 517
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 511,
              "end": 517
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "testFnTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 519,
                "end": 530
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "testFnTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 519,
                "end": 530
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 519,
              "end": 530
            }
          ],
          "start": 510,
          "end": 531
        },
        "start": 493,
        "end": 531
      },
      "directive": null,
      "start": 493,
      "end": 532
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 532
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "myTypes",
    "start": 7,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 18,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "String",
    "value": "'./file.js'",
    "start": 26,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 114,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "testFnTypes",
    "start": 120,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 362,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "testFn",
    "start": 371,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 378,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 385,
    "end": 386
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 391,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 394,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 395,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 402,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 408,
    "end": 411
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 412,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 422,
    "end": 423
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 432,
    "end": 438
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 443,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 454,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 456,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 461,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 471,
    "end": 477
  },
  {
    "type": "Null",
    "value": "null",
    "start": 478,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 493,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 500,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "testFn",
    "start": 511,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "testFnTypes",
    "start": 519,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 531,
    "end": 532
  }
]
```
