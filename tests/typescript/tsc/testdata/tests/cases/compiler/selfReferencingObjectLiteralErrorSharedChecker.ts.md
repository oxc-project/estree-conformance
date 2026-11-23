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
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 284,
            "end": 285
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 284,
            "end": 285
          },
          "importKind": "value",
          "start": 284,
          "end": 285
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./b",
        "raw": "\"./b\"",
        "start": 293,
        "end": 298
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 270,
      "end": 299
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 314,
              "end": 317
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
                    "name": "Updaters",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 326,
                    "end": 334
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Template",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 346,
                          "end": 354
                        },
                        "value": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "commitError",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 370,
                                "end": 381
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "v",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 387,
                                          "end": 388
                                        },
                                        "typeArguments": null,
                                        "start": 387,
                                        "end": 388
                                      },
                                      "start": 385,
                                      "end": 388
                                    },
                                    "start": 384,
                                    "end": 388
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Obj",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 393,
                                          "end": 396
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Updaters",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 397,
                                          "end": 405
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 393,
                                        "end": 405
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Core",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 406,
                                        "end": 410
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 393,
                                      "end": 410
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "commitError",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 411,
                                      "end": 422
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 393,
                                    "end": 422
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "v",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 423,
                                      "end": 424
                                    }
                                  ],
                                  "optional": false,
                                  "start": 393,
                                  "end": 425
                                },
                                "id": null,
                                "generator": false,
                                "start": 383,
                                "end": 425
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 370,
                              "end": 425
                            }
                          ],
                          "start": 356,
                          "end": 436
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 346,
                        "end": 436
                      }
                    ],
                    "start": 336,
                    "end": 443
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 326,
                  "end": 443
                }
              ],
              "start": 320,
              "end": 446
            },
            "definite": false,
            "start": 314,
            "end": 446
          }
        ],
        "declare": false,
        "start": 308,
        "end": 447
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 301,
      "end": 447
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 448
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 270,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 277,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 288,
    "end": 292
  },
  {
    "type": "String",
    "value": "\"./b\"",
    "start": 293,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 301,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 308,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 314,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "Updaters",
    "start": 326,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "Template",
    "start": 346,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "commitError",
    "start": 370,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 390,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 393,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "Updaters",
    "start": 397,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "Core",
    "start": 406,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "commitError",
    "start": 411,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447
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
            "name": "Obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "importKind": "value",
          "start": 9,
          "end": 12
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 20,
        "end": 25
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 26
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 40,
          "end": 41
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 44,
          "end": 50
        },
        "declare": false,
        "start": 35,
        "end": 51
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 28,
      "end": 51
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 66
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 69,
                    "end": 72
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Updaters",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 73,
                    "end": 81
                  },
                  "optional": false,
                  "computed": false,
                  "start": 69,
                  "end": 81
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Core",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 86
                },
                "optional": false,
                "computed": false,
                "start": 69,
                "end": 86
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "simpleModal",
                "optional": false,
                "typeAnnotation": null,
                "start": 87,
                "end": 98
              },
              "optional": false,
              "computed": false,
              "start": 69,
              "end": 98
            },
            "definite": false,
            "start": 65,
            "end": 98
          }
        ],
        "declare": false,
        "start": 59,
        "end": 99
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 52,
      "end": 99
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 99
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
    "value": "Obj",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 15,
    "end": 19
  },
  {
    "type": "String",
    "value": "\"./a\"",
    "start": 20,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 28,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 35,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 44,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 52,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 59,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 69,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "Updaters",
    "start": 73,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "Core",
    "start": 82,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "simpleModal",
    "start": 87,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  }
]
```
