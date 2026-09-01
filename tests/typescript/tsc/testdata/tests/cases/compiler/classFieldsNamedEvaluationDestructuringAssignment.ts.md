__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 203,
                "end": 206
              },
              "start": 201,
              "end": 206
            },
            "start": 200,
            "end": 206
          },
          "init": null,
          "definite": false,
          "start": 200,
          "end": 206
        }
      ],
      "declare": false,
      "start": 196,
      "end": 207
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 273,
                "end": 274
              },
              "right": {
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
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "PrivateIdentifier",
                        "name": "y",
                        "start": 292,
                        "end": 294
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 297,
                        "end": 298
                      },
                      "computed": false,
                      "static": true,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 285,
                      "end": 299
                    }
                  ],
                  "start": 283,
                  "end": 301
                },
                "abstract": false,
                "declare": false,
                "start": 277,
                "end": 301
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 273,
              "end": 301
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 272,
          "end": 302
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [],
          "start": 305,
          "end": 307
        },
        "start": 272,
        "end": 307
      },
      "directive": null,
      "start": 272,
      "end": 308
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 389,
                "end": 390
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 389,
                  "end": 390
                },
                "right": {
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
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "PrivateIdentifier",
                          "name": "z",
                          "start": 408,
                          "end": 410
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 413,
                          "end": 414
                        },
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 401,
                        "end": 415
                      }
                    ],
                    "start": 399,
                    "end": 417
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 393,
                  "end": 417
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 389,
                "end": 417
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 389,
              "end": 417
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 387,
          "end": 419
        },
        "right": {
          "type": "TSAsExpression",
          "expression": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 422,
            "end": 424
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 428,
            "end": 431
          },
          "start": 422,
          "end": 431
        },
        "start": 387,
        "end": 431
      },
      "directive": null,
      "start": 386,
      "end": 433
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 513,
                "end": 514
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 516,
                  "end": 517
                },
                "right": {
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
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "PrivateIdentifier",
                          "name": "w",
                          "start": 535,
                          "end": 537
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 540,
                          "end": 541
                        },
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 528,
                        "end": 542
                      }
                    ],
                    "start": 526,
                    "end": 544
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 520,
                  "end": 544
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 516,
                "end": 544
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 513,
              "end": 544
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 511,
          "end": 546
        },
        "right": {
          "type": "TSAsExpression",
          "expression": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 549,
            "end": 551
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 555,
            "end": 558
          },
          "start": 549,
          "end": 558
        },
        "start": 511,
        "end": 558
      },
      "directive": null,
      "start": 510,
      "end": 560
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 196,
  "end": 560
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 196,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 203,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 275,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 277,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 285,
    "end": 291
  },
  {
    "type": "PrivateIdentifier",
    "value": "y",
    "start": 292,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 295,
    "end": 296
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 391,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 393,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 399,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 401,
    "end": 407
  },
  {
    "type": "PrivateIdentifier",
    "value": "z",
    "start": 408,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 411,
    "end": 412
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 425,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 428,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 518,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 520,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 526,
    "end": 527
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 528,
    "end": 534
  },
  {
    "type": "PrivateIdentifier",
    "value": "w",
    "start": 535,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 538,
    "end": 539
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 552,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 555,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 559,
    "end": 560
  }
]
```
