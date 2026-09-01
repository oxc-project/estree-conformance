__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertCondition",
        "optional": false,
        "typeAnnotation": null,
        "start": 243,
        "end": 258
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_condition",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 274,
              "end": 281
            },
            "start": 272,
            "end": 281
          },
          "start": 262,
          "end": 281
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "condition",
            "optional": false,
            "typeAnnotation": null,
            "start": 293,
            "end": 302
          },
          "asserts": true,
          "typeAnnotation": null,
          "start": 285,
          "end": 302
        },
        "start": 283,
        "end": 302
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "_condition",
                "optional": false,
                "typeAnnotation": null,
                "start": 365,
                "end": 375
              },
              "prefix": true,
              "start": 364,
              "end": 375
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
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
                      "start": 393,
                      "end": 398
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Condition failed",
                        "raw": "'Condition failed'",
                        "start": 399,
                        "end": 417
                      }
                    ],
                    "start": 389,
                    "end": 418
                  },
                  "start": 383,
                  "end": 419
                }
              ],
              "start": 377,
              "end": 423
            },
            "alternate": null,
            "start": 360,
            "end": 423
          }
        ],
        "start": 303,
        "end": 425
      },
      "expression": false,
      "start": 234,
      "end": 425
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 436,
        "end": 440
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 444,
          "end": 448
        },
        "start": 442,
        "end": 448
      },
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
                "name": "assertCondition",
                "optional": false,
                "typeAnnotation": null,
                "start": 453,
                "end": 468
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 469,
                  "end": 474
                }
              ],
              "optional": false,
              "start": 453,
              "end": 475
            },
            "directive": null,
            "start": 453,
            "end": 476
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
                  "start": 479,
                  "end": 486
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 487,
                  "end": 490
                },
                "optional": false,
                "computed": false,
                "start": 479,
                "end": 490
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "unreachable",
                  "raw": "\"unreachable\"",
                  "start": 491,
                  "end": 504
                }
              ],
              "optional": false,
              "start": 479,
              "end": 505
            },
            "directive": null,
            "start": 479,
            "end": 506
          }
        ],
        "start": 449,
        "end": 508
      },
      "expression": false,
      "start": 427,
      "end": 508
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 234,
  "end": 508
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 234,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "assertCondition",
    "start": 243,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "_condition",
    "start": 262,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 274,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 285,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 293,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 360,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "_condition",
    "start": 365,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 383,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 389,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 393,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 398,
    "end": 399
  },
  {
    "type": "String",
    "value": "'Condition failed'",
    "start": 399,
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
    "value": ";",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 424,
    "end": 425
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 427,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 436,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 444,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "assertCondition",
    "start": 453,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 468,
    "end": 469
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 469,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 479,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 487,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 490,
    "end": 491
  },
  {
    "type": "String",
    "value": "\"unreachable\"",
    "start": 491,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 507,
    "end": 508
  }
]
```
