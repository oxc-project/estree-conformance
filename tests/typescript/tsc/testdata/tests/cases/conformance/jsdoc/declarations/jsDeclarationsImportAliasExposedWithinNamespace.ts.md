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
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "myTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 377,
            "end": 384
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "myTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 377,
            "end": 384
          },
          "exportKind": "value",
          "start": 377,
          "end": 384
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 369,
      "end": 386
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 69,
  "end": 386
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
    "type": "Keyword",
    "value": "export",
    "start": 369,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "value": "}",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 385,
    "end": 386
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "myTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 15
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "myTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 15
          },
          "importKind": "value",
          "start": 8,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file.js",
        "raw": "'./file.js'",
        "start": 22,
        "end": 33
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 34
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
            "start": 115,
            "end": 126
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 129,
            "end": 155
          },
          "definite": false,
          "start": 115,
          "end": 155
        }
      ],
      "declare": false,
      "start": 109,
      "end": 156
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFn",
        "optional": false,
        "typeAnnotation": null,
        "start": 366,
        "end": 372
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
          "start": 373,
          "end": 378
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
                  "start": 397,
                  "end": 402
                },
                "prefix": true,
                "start": 390,
                "end": 402
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "'number'",
                "start": 407,
                "end": 415
              },
              "start": 390,
              "end": 415
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
                      "start": 434,
                      "end": 435
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 438,
                      "end": 443
                    },
                    "start": 434,
                    "end": 443
                  },
                  "start": 427,
                  "end": 444
                }
              ],
              "start": 417,
              "end": 450
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
                    "start": 473,
                    "end": 477
                  },
                  "start": 466,
                  "end": 478
                }
              ],
              "start": 456,
              "end": 484
            },
            "start": 386,
            "end": 484
          }
        ],
        "start": 380,
        "end": 486
      },
      "expression": false,
      "start": 357,
      "end": 486
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "testFn",
            "optional": false,
            "typeAnnotation": null,
            "start": 496,
            "end": 502
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "testFn",
            "optional": false,
            "typeAnnotation": null,
            "start": 496,
            "end": 502
          },
          "exportKind": "value",
          "start": 496,
          "end": 502
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "testFnTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 504,
            "end": 515
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "testFnTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 504,
            "end": 515
          },
          "exportKind": "value",
          "start": 504,
          "end": 515
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 488,
      "end": 517
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 517
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "myTypes",
    "start": 8,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 17,
    "end": 21
  },
  {
    "type": "String",
    "value": "'./file.js'",
    "start": 22,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 109,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "testFnTypes",
    "start": 115,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "function",
    "start": 357,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "testFn",
    "start": 366,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 373,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 380,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 386,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 390,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 397,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 403,
    "end": 406
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 407,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 427,
    "end": 433
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 438,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 449,
    "end": 450
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 451,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 456,
    "end": 457
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 466,
    "end": 472
  },
  {
    "type": "Null",
    "value": "null",
    "start": 473,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 485,
    "end": 486
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 488,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "testFn",
    "start": 496,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "testFnTypes",
    "start": 504,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517
  }
]
```
