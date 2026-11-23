__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isDerived",
        "optional": false,
        "typeAnnotation": null,
        "start": 246,
        "end": 255
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 259,
                "end": 263
              },
              "typeArguments": null,
              "start": 259,
              "end": 263
            },
            "start": 257,
            "end": 263
          },
          "start": 256,
          "end": 263
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 266,
            "end": 267
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Derived",
                "optional": false,
                "typeAnnotation": null,
                "start": 271,
                "end": 278
              },
              "typeArguments": null,
              "start": 271,
              "end": 278
            },
            "start": 271,
            "end": 278
          },
          "start": 266,
          "end": 278
        },
        "start": 264,
        "end": 278
      },
      "body": null,
      "expression": false,
      "start": 229,
      "end": 279
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 286,
        "end": 290
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
              "name": "add",
              "optional": false,
              "typeAnnotation": null,
              "start": 305,
              "end": 308
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
                    "type": "IfStatement",
                    "test": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isDerived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 325,
                        "end": 334
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 335,
                          "end": 339
                        }
                      ],
                      "optional": false,
                      "start": 325,
                      "end": 340
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 360,
                              "end": 364
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 365,
                              "end": 369
                            },
                            "optional": false,
                            "computed": false,
                            "start": 360,
                            "end": 369
                          },
                          "consequent": {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 378,
                              "end": 379
                            },
                            "start": 371,
                            "end": 380
                          },
                          "alternate": null,
                          "start": 356,
                          "end": 380
                        }
                      ],
                      "start": 342,
                      "end": 390
                    },
                    "alternate": null,
                    "start": 321,
                    "end": 390
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
                          "name": "w",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 405,
                          "end": 406
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 409,
                              "end": 413
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "add2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 414,
                              "end": 418
                            },
                            "optional": false,
                            "computed": false,
                            "start": 409,
                            "end": 418
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 409,
                          "end": 420
                        },
                        "definite": false,
                        "start": 405,
                        "end": 420
                      }
                    ],
                    "declare": false,
                    "start": 399,
                    "end": 421
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 437,
                      "end": 438
                    },
                    "start": 430,
                    "end": 439
                  }
                ],
                "start": 311,
                "end": 445
              },
              "expression": false,
              "start": 308,
              "end": 445
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 297,
            "end": 445
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "add2",
              "optional": false,
              "typeAnnotation": null,
              "start": 458,
              "end": 462
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 474,
                      "end": 475
                    },
                    "start": 467,
                    "end": 476
                  }
                ],
                "start": 465,
                "end": 478
              },
              "expression": false,
              "start": 462,
              "end": 478
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 450,
            "end": 478
          }
        ],
        "start": 291,
        "end": 480
      },
      "abstract": false,
      "declare": false,
      "start": 280,
      "end": 480
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 487,
        "end": 494
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 503,
        "end": 507
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 510,
              "end": 514
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 517,
              "end": 519
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 510,
            "end": 520
          }
        ],
        "start": 508,
        "end": 522
      },
      "abstract": false,
      "declare": false,
      "start": 481,
      "end": 522
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 522
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 229,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 237,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "isDerived",
    "start": 246,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 259,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 268,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 271,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 280,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 286,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 291,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 297,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 305,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 311,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 321,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "isDerived",
    "start": 325,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 335,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 356,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 360,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 365,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 369,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 371,
    "end": 377
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 399,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 407,
    "end": 408
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 409,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "add2",
    "start": 414,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 430,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 450,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "add2",
    "start": 458,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 465,
    "end": 466
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 467,
    "end": 473
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "type": "Punctuator",
    "value": "}",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 481,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 487,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 495,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 503,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 510,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 515,
    "end": 516
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 517,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 521,
    "end": 522
  }
]
```
