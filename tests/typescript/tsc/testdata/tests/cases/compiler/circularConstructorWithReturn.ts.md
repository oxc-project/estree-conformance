__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Client",
          "optional": false,
          "typeAnnotation": null,
          "start": 137,
          "end": 143
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 156
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getPrismaClient",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 164,
                    "end": 179
                  },
                  "typeArguments": null,
                  "start": 157,
                  "end": 179
                }
              ],
              "start": 156,
              "end": 180
            },
            "start": 146,
            "end": 180
          },
          "extendsType": {
            "type": "TSConstructorType",
            "abstract": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 205,
                    "end": 206
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 205,
                  "end": 206
                },
                "start": 199,
                "end": 206
              },
              "start": 196,
              "end": 206
            },
            "start": 189,
            "end": 206
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 210
            },
            "typeArguments": null,
            "start": 209,
            "end": 210
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 213,
            "end": 218
          },
          "start": 146,
          "end": 218
        },
        "declare": false,
        "start": 132,
        "end": 218
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 125,
      "end": 218
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "getPrismaClient",
          "optional": false,
          "typeAnnotation": null,
          "start": 236,
          "end": 251
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "options",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 262,
                "end": 265
              },
              "start": 260,
              "end": 265
            },
            "start": 252,
            "end": 265
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "PrismaClient",
                "optional": false,
                "typeAnnotation": null,
                "start": 277,
                "end": 289
              },
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "self",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 296,
                      "end": 300
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Client",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 302,
                          "end": 308
                        },
                        "typeArguments": null,
                        "start": 302,
                        "end": 308
                      },
                      "start": 300,
                      "end": 308
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 296,
                    "end": 309
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 314,
                      "end": 325
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
                          "name": "options",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 336,
                              "end": 339
                            },
                            "start": 334,
                            "end": 339
                          },
                          "start": 326,
                          "end": 339
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 357,
                                  "end": 361
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "self",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 362,
                                  "end": 366
                                },
                                "optional": false,
                                "computed": false,
                                "start": 357,
                                "end": 366
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "applyModelsAndClientExtensions",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 369,
                                  "end": 399
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ThisExpression",
                                    "start": 400,
                                    "end": 404
                                  }
                                ],
                                "optional": false,
                                "start": 369,
                                "end": 405
                              },
                              "start": 357,
                              "end": 405
                            },
                            "start": 349,
                            "end": 407
                          }
                        ],
                        "start": 341,
                        "end": 413
                      },
                      "expression": false,
                      "start": 325,
                      "end": 413
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 314,
                    "end": 413
                  }
                ],
                "start": 290,
                "end": 417
              },
              "abstract": false,
              "declare": false,
              "start": 271,
              "end": 417
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "PrismaClient",
                "optional": false,
                "typeAnnotation": null,
                "start": 428,
                "end": 440
              },
              "start": 421,
              "end": 440
            }
          ],
          "start": 267,
          "end": 442
        },
        "expression": false,
        "start": 227,
        "end": 442
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 220,
      "end": 442
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "applyModelsAndClientExtensions",
          "optional": false,
          "typeAnnotation": null,
          "start": 460,
          "end": 490
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "client",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Client",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 499,
                  "end": 505
                },
                "typeArguments": null,
                "start": 499,
                "end": 505
              },
              "start": 497,
              "end": 505
            },
            "start": 491,
            "end": 505
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "client",
                "optional": false,
                "typeAnnotation": null,
                "start": 518,
                "end": 524
              },
              "start": 511,
              "end": 525
            }
          ],
          "start": 507,
          "end": 527
        },
        "expression": false,
        "start": 451,
        "end": 527
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 444,
      "end": 527
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 125,
  "end": 527
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 125,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 132,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "Client",
    "start": 137,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 146,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 157,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "getPrismaClient",
    "start": 164,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 181,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 189,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 196,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 199,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 213,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 220,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 227,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "getPrismaClient",
    "start": 236,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 252,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 262,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 271,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "PrismaClient",
    "start": 277,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 296,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "Client",
    "start": 302,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 314,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 326,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 336,
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
    "value": "{",
    "start": 341,
    "end": 342
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 349,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 357,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 362,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "applyModelsAndClientExtensions",
    "start": 369,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 399,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 400,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 416,
    "end": 417
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 421,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "PrismaClient",
    "start": 428,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 441,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 444,
    "end": 450
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 451,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "applyModelsAndClientExtensions",
    "start": 460,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "client",
    "start": 491,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "Client",
    "start": 499,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 507,
    "end": 508
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 511,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "client",
    "start": 518,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 526,
    "end": 527
  }
]
```
