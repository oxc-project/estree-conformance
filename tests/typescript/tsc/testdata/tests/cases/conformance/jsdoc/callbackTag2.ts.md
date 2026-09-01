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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 108
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 111,
            "end": 112
          },
          "definite": false,
          "start": 107,
          "end": 112
        }
      ],
      "declare": false,
      "start": 103,
      "end": 112
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
            "name": "one_twenty",
            "optional": false,
            "typeAnnotation": null,
            "start": 185,
            "end": 195
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
                "start": 198,
                "end": 199
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "120",
              "raw": "\"120\"",
              "start": 203,
              "end": 208
            },
            "id": null,
            "generator": false,
            "start": 198,
            "end": 208
          },
          "definite": false,
          "start": 185,
          "end": 208
        }
      ],
      "declare": false,
      "start": 181,
      "end": 209
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SharedClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 292,
        "end": 303
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
              "start": 310,
              "end": 321
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 369,
                        "end": 373
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 374,
                        "end": 376
                      },
                      "optional": false,
                      "computed": false,
                      "start": 369,
                      "end": 376
                    },
                    "directive": null,
                    "start": 369,
                    "end": 377
                  }
                ],
                "start": 324,
                "end": 383
              },
              "expression": false,
              "start": 321,
              "end": 383
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 310,
            "end": 383
          }
        ],
        "start": 304,
        "end": 385
      },
      "abstract": false,
      "declare": false,
      "start": 286,
      "end": 385
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
            "name": "outside",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 429
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
                "typeAnnotation": null,
                "start": 432,
                "end": 433
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 437,
                "end": 438
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 441,
                "end": 442
              },
              "start": 437,
              "end": 442
            },
            "id": null,
            "generator": false,
            "start": 432,
            "end": 442
          },
          "definite": false,
          "start": 422,
          "end": 442
        }
      ],
      "declare": false,
      "start": 418,
      "end": 443
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
            "name": "noreturn",
            "optional": false,
            "typeAnnotation": null,
            "start": 495,
            "end": 503
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
                "name": "barts",
                "optional": false,
                "typeAnnotation": null,
                "start": 507,
                "end": 512
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "tidus",
                "optional": false,
                "typeAnnotation": null,
                "start": 514,
                "end": 519
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "noctis",
                "optional": false,
                "typeAnnotation": null,
                "start": 521,
                "end": 527
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "cecil",
              "raw": "\"cecil\"",
              "start": 532,
              "end": 539
            },
            "id": null,
            "generator": false,
            "start": 506,
            "end": 539
          },
          "definite": false,
          "start": 495,
          "end": 539
        }
      ],
      "declare": false,
      "start": 491,
      "end": 539
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 103,
  "end": 731
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 103,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 109,
    "end": 110
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 181,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "one_twenty",
    "start": 185,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 200,
    "end": 202
  },
  {
    "type": "String",
    "value": "\"120\"",
    "start": 203,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 286,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "SharedClass",
    "start": 292,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 310,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 369,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 374,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 418,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "outside",
    "start": 422,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 434,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 439,
    "end": 440
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 491,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "noreturn",
    "start": 495,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "barts",
    "start": 507,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "tidus",
    "start": 514,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "noctis",
    "start": 521,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 529,
    "end": 531
  },
  {
    "type": "String",
    "value": "\"cecil\"",
    "start": 532,
    "end": 539
  }
]
```
