__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 402,
          "end": 403
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 404,
            "end": 405
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 407,
            "end": 408
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 410,
            "end": 411
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "alpha",
            "optional": false,
            "typeAnnotation": null,
            "start": 413,
            "end": 418
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "beta",
            "optional": false,
            "typeAnnotation": null,
            "start": 420,
            "end": 424
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "gamma",
            "optional": false,
            "typeAnnotation": null,
            "start": 426,
            "end": 431
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
                    "type": "BinaryExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 446,
                          "end": 447
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 450,
                          "end": 451
                        },
                        "start": 446,
                        "end": 451
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 454,
                        "end": 455
                      },
                      "start": 446,
                      "end": 455
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alpha",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 458,
                      "end": 463
                    },
                    "start": 446,
                    "end": 463
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "beta",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 466,
                    "end": 470
                  },
                  "start": 446,
                  "end": 470
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "gamma",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 473,
                  "end": 478
                },
                "start": 446,
                "end": 478
              },
              "start": 439,
              "end": 478
            }
          ],
          "start": 433,
          "end": 480
        },
        "expression": false,
        "start": 393,
        "end": 480
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 386,
      "end": 480
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 386,
  "end": 480
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 386,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 393,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "alpha",
    "start": 413,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "beta",
    "start": 420,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "gamma",
    "start": 426,
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
    "value": "{",
    "start": 433,
    "end": 434
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 439,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "alpha",
    "start": 458,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "beta",
    "start": 466,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "gamma",
    "start": 473,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 479,
    "end": 480
  }
]
```
