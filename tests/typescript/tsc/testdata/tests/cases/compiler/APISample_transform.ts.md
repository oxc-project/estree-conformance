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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 308,
                "end": 311
              },
              "start": 306,
              "end": 311
            },
            "start": 299,
            "end": 311
          },
          "init": null,
          "definite": false,
          "start": 299,
          "end": 311
        }
      ],
      "declare": true,
      "start": 287,
      "end": 312
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 326,
            "end": 328
          },
          "start": 321,
          "end": 328
        }
      ],
      "source": {
        "type": "Literal",
        "value": "typescript",
        "raw": "\"typescript\"",
        "start": 334,
        "end": 346
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 314,
      "end": 347
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
            "name": "source",
            "optional": false,
            "typeAnnotation": null,
            "start": 355,
            "end": 361
          },
          "init": {
            "type": "Literal",
            "value": "let x: string  = 'string'",
            "raw": "\"let x: string  = 'string'\"",
            "start": 364,
            "end": 391
          },
          "definite": false,
          "start": 355,
          "end": 391
        }
      ],
      "declare": false,
      "start": 349,
      "end": 392
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
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 398,
            "end": 404
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ts",
                "optional": false,
                "typeAnnotation": null,
                "start": 407,
                "end": 409
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "transpile",
                "optional": false,
                "typeAnnotation": null,
                "start": 410,
                "end": 419
              },
              "optional": false,
              "computed": false,
              "start": 407,
              "end": 419
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "source",
                "optional": false,
                "typeAnnotation": null,
                "start": 420,
                "end": 426
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "module",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 430,
                      "end": 436
                    },
                    "value": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 438,
                          "end": 440
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ModuleKind",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 441,
                          "end": 451
                        },
                        "optional": false,
                        "computed": false,
                        "start": 438,
                        "end": 451
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CommonJS",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 452,
                        "end": 460
                      },
                      "optional": false,
                      "computed": false,
                      "start": 438,
                      "end": 460
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 430,
                    "end": 460
                  }
                ],
                "start": 428,
                "end": 462
              }
            ],
            "optional": false,
            "start": 407,
            "end": 463
          },
          "definite": false,
          "start": 398,
          "end": 463
        }
      ],
      "declare": false,
      "start": 394,
      "end": 464
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
            "start": 466,
            "end": 473
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 474,
            "end": 477
          },
          "optional": false,
          "computed": false,
          "start": 466,
          "end": 477
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSON",
                "optional": false,
                "typeAnnotation": null,
                "start": 478,
                "end": 482
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "stringify",
                "optional": false,
                "typeAnnotation": null,
                "start": 483,
                "end": 492
              },
              "optional": false,
              "computed": false,
              "start": 478,
              "end": 492
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null,
                "start": 493,
                "end": 499
              }
            ],
            "optional": false,
            "start": 478,
            "end": 500
          }
        ],
        "optional": false,
        "start": 466,
        "end": 501
      },
      "directive": null,
      "start": 466,
      "end": 502
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 287,
  "end": 502
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 287,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 295,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 299,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 308,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 314,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 323,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 326,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 329,
    "end": 333
  },
  {
    "type": "String",
    "value": "\"typescript\"",
    "start": 334,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 349,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 355,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 362,
    "end": 363
  },
  {
    "type": "String",
    "value": "\"let x: string  = 'string'\"",
    "start": 364,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 391,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 394,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 398,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 407,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "transpile",
    "start": 410,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 420,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 430,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 438,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "ModuleKind",
    "start": 441,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "CommonJS",
    "start": 452,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 466,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 474,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 478,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "stringify",
    "start": 483,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 493,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 501,
    "end": 502
  }
]
```
