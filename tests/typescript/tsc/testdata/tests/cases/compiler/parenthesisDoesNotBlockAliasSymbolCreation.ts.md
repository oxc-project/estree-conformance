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
          "name": "InvalidKeys",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 23
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 24,
                "end": 25
              },
              "constraint": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 34,
                    "end": 40
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 41,
                    "end": 47
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 48,
                    "end": 54
                  }
                ],
                "start": 34,
                "end": 54
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 24,
              "end": 54
            }
          ],
          "start": 23,
          "end": 55
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 62
          },
          "constraint": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 67
            },
            "typeArguments": null,
            "start": 66,
            "end": 67
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSNeverKeyword",
            "start": 72,
            "end": 77
          },
          "optional": true,
          "readonly": null,
          "start": 58,
          "end": 79
        },
        "declare": false,
        "start": 7,
        "end": 80
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 80
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "InvalidKeys2",
          "optional": false,
          "typeAnnotation": null,
          "start": 93,
          "end": 105
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 107
              },
              "constraint": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 116,
                    "end": 122
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 123,
                    "end": 129
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 130,
                    "end": 136
                  }
                ],
                "start": 116,
                "end": 136
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 106,
              "end": 136
            }
          ],
          "start": 105,
          "end": 137
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 150
          },
          "constraint": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 155
            },
            "typeArguments": null,
            "start": 154,
            "end": 155
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSNeverKeyword",
            "start": 160,
            "end": 165
          },
          "optional": true,
          "readonly": null,
          "start": 146,
          "end": 167
        },
        "declare": false,
        "start": 88,
        "end": 170
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 81,
      "end": 170
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 184,
          "end": 185
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 186,
                "end": 187
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 186,
              "end": 187
            }
          ],
          "start": 185,
          "end": 188
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 197,
                "end": 198
              },
              "typeArguments": null,
              "start": 197,
              "end": 198
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InvalidKeys",
                "optional": false,
                "typeAnnotation": null,
                "start": 201,
                "end": 212
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 213,
                      "end": 216
                    },
                    "start": 213,
                    "end": 216
                  }
                ],
                "start": 212,
                "end": 217
              },
              "start": 201,
              "end": 217
            }
          ],
          "start": 197,
          "end": 217
        },
        "declare": false,
        "start": 179,
        "end": 220
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 172,
      "end": 220
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A2",
          "optional": false,
          "typeAnnotation": null,
          "start": 233,
          "end": 235
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 236,
                "end": 237
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 236,
              "end": 237
            }
          ],
          "start": 235,
          "end": 238
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 247,
                "end": 248
              },
              "typeArguments": null,
              "start": 247,
              "end": 248
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InvalidKeys2",
                "optional": false,
                "typeAnnotation": null,
                "start": 251,
                "end": 263
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 264,
                      "end": 267
                    },
                    "start": 264,
                    "end": 267
                  }
                ],
                "start": 263,
                "end": 268
              },
              "start": 251,
              "end": 268
            }
          ],
          "start": 247,
          "end": 268
        },
        "declare": false,
        "start": 228,
        "end": 271
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 221,
      "end": 271
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 286,
              "end": 287
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 290,
                "end": 294
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 299
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 302,
                            "end": 303
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 306,
                              "end": 312
                            },
                            "start": 304,
                            "end": 312
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 302,
                          "end": 312
                        }
                      ],
                      "start": 300,
                      "end": 314
                    }
                  ],
                  "start": 299,
                  "end": 315
                },
                "start": 298,
                "end": 315
              },
              "start": 290,
              "end": 315
            },
            "definite": false,
            "start": 286,
            "end": 315
          }
        ],
        "declare": false,
        "start": 280,
        "end": 316
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 273,
      "end": 316
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
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 332
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 335,
                "end": 339
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 343,
                  "end": 345
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 348,
                            "end": 349
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 352,
                              "end": 358
                            },
                            "start": 350,
                            "end": 358
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 348,
                          "end": 358
                        }
                      ],
                      "start": 346,
                      "end": 360
                    }
                  ],
                  "start": 345,
                  "end": 361
                },
                "start": 343,
                "end": 361
              },
              "start": 335,
              "end": 361
            },
            "definite": false,
            "start": 330,
            "end": 361
          }
        ],
        "declare": false,
        "start": 324,
        "end": 362
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 317,
      "end": 362
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
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 376,
              "end": 378
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 381,
                "end": 385
              },
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 391,
                          "end": 392
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 395,
                            "end": 401
                          },
                          "start": 393,
                          "end": 401
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 391,
                        "end": 401
                      }
                    ],
                    "start": 389,
                    "end": 403
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InvalidKeys",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 406,
                      "end": 417
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 418,
                            "end": 421
                          },
                          "start": 418,
                          "end": 421
                        }
                      ],
                      "start": 417,
                      "end": 422
                    },
                    "start": 406,
                    "end": 422
                  }
                ],
                "start": 389,
                "end": 422
              },
              "start": 381,
              "end": 422
            },
            "definite": false,
            "start": 376,
            "end": 422
          }
        ],
        "declare": false,
        "start": 370,
        "end": 423
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 363,
      "end": 423
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
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 437,
              "end": 439
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 442,
                "end": 446
              },
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 452,
                          "end": 453
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 456,
                            "end": 462
                          },
                          "start": 454,
                          "end": 462
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 452,
                        "end": 462
                      }
                    ],
                    "start": 450,
                    "end": 464
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InvalidKeys2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 467,
                      "end": 479
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 480,
                            "end": 483
                          },
                          "start": 480,
                          "end": 483
                        }
                      ],
                      "start": 479,
                      "end": 484
                    },
                    "start": 467,
                    "end": 484
                  }
                ],
                "start": 450,
                "end": 484
              },
              "start": 442,
              "end": 484
            },
            "definite": false,
            "start": 437,
            "end": 484
          }
        ],
        "declare": false,
        "start": 431,
        "end": 485
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 424,
      "end": 485
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 485
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "InvalidKeys",
    "start": 12,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 26,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 63,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 72,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 81,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 88,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "InvalidKeys2",
    "start": 93,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 106,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 108,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 116,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 123,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 130,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 151,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 160,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 172,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 179,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "InvalidKeys",
    "start": 201,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 212,
    "end": 213
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 213,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 221,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 228,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 233,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "InvalidKeys2",
    "start": 251,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 263,
    "end": 264
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 264,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 273,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 280,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 288,
    "end": 289
  },
  {
    "type": "Null",
    "value": "null",
    "start": 290,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 295,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 306,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 317,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 324,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 330,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 333,
    "end": 334
  },
  {
    "type": "Null",
    "value": "null",
    "start": 335,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 340,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 343,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 352,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 363,
    "end": 369
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 370,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 376,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 379,
    "end": 380
  },
  {
    "type": "Null",
    "value": "null",
    "start": 381,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 386,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 395,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "InvalidKeys",
    "start": 406,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 417,
    "end": 418
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 418,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 422,
    "end": 423
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 424,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 431,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 437,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 440,
    "end": 441
  },
  {
    "type": "Null",
    "value": "null",
    "start": 442,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 447,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 456,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "InvalidKeys2",
    "start": 467,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 479,
    "end": 480
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 480,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 484,
    "end": 485
  }
]
```
