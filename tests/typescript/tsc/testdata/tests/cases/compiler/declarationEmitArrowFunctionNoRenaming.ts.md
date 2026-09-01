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
          "name": "Brand",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 17
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 25
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 21,
              "end": 25
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Branding",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 37
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 29,
              "end": 37
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReservedName",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 53
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 62,
                "end": 68
              },
              "default": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "__type__",
                  "raw": "\"__type__\"",
                  "start": 71,
                  "end": 81
                },
                "start": 71,
                "end": 81
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 41,
              "end": 81
            }
          ],
          "start": 17,
          "end": 83
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 90
              },
              "typeArguments": null,
              "start": 86,
              "end": 90
            },
            {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 96,
                "end": 97
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReservedName",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 113
                },
                "typeArguments": null,
                "start": 101,
                "end": 113
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Branding",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 116,
                  "end": 124
                },
                "typeArguments": null,
                "start": 116,
                "end": 124
              },
              "optional": false,
              "readonly": null,
              "start": 93,
              "end": 126
            },
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
                    "name": "__witness__",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 131,
                    "end": 142
                  },
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
                        "start": 144,
                        "end": 148
                      },
                      "typeArguments": null,
                      "start": 144,
                      "end": 148
                    },
                    "start": 142,
                    "end": 148
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 131,
                  "end": 148
                }
              ],
              "start": 129,
              "end": 150
            }
          ],
          "start": 86,
          "end": 150
        },
        "declare": false,
        "start": 7,
        "end": 151
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 151
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BoundedInteger",
          "optional": false,
          "typeAnnotation": null,
          "start": 165,
          "end": 179
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "LowerBound",
                "optional": false,
                "typeAnnotation": null,
                "start": 183,
                "end": 193
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 202,
                "end": 208
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 183,
              "end": 208
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "UpperBound",
                "optional": false,
                "typeAnnotation": null,
                "start": 212,
                "end": 222
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 231,
                "end": 237
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 212,
              "end": 237
            }
          ],
          "start": 179,
          "end": 239
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Brand",
            "optional": false,
            "typeAnnotation": null,
            "start": 242,
            "end": 247
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 248,
                "end": 254
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "BoundedInteger",
                  "raw": "\"BoundedInteger\"",
                  "start": 256,
                  "end": 272
                },
                "start": 256,
                "end": 272
              }
            ],
            "start": 247,
            "end": 273
          },
          "start": 242,
          "end": 273
        },
        "declare": false,
        "start": 160,
        "end": 274
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 153,
      "end": 274
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
              "name": "toBoundedInteger",
              "optional": false,
              "typeAnnotation": null,
              "start": 289,
              "end": 305
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LowerBound",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 311,
                      "end": 321
                    },
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 330,
                      "end": 336
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 311,
                    "end": 336
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "UpperBound",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 338,
                      "end": 348
                    },
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 357,
                      "end": 363
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 338,
                    "end": 363
                  }
                ],
                "start": 310,
                "end": 364
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bounds",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
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
                            "name": "lowerBound",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 379,
                            "end": 389
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "LowerBound",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 391,
                                "end": 401
                              },
                              "typeArguments": null,
                              "start": 391,
                              "end": 401
                            },
                            "start": 389,
                            "end": 401
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 379,
                          "end": 402
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "upperBound",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 407,
                            "end": 417
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "UpperBound",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 419,
                                "end": 429
                              },
                              "typeArguments": null,
                              "start": 419,
                              "end": 429
                            },
                            "start": 417,
                            "end": 429
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 407,
                          "end": 430
                        }
                      ],
                      "start": 373,
                      "end": 434
                    },
                    "start": 371,
                    "end": 434
                  },
                  "start": 365,
                  "end": 434
                }
              ],
              "returnType": null,
              "body": {
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
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 450,
                        "end": 456
                      },
                      "start": 448,
                      "end": 456
                    },
                    "start": 447,
                    "end": 456
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "BoundedInteger",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 462,
                      "end": 476
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "LowerBound",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 477,
                            "end": 487
                          },
                          "typeArguments": null,
                          "start": 477,
                          "end": 487
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "UpperBound",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 489,
                            "end": 499
                          },
                          "typeArguments": null,
                          "start": 489,
                          "end": 499
                        }
                      ],
                      "start": 476,
                      "end": 500
                    },
                    "start": 462,
                    "end": 500
                  },
                  "start": 460,
                  "end": 500
                },
                "body": {
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
                "id": null,
                "generator": false,
                "start": 441,
                "end": 559
              },
              "id": null,
              "generator": false,
              "start": 310,
              "end": 559
            },
            "definite": false,
            "start": 289,
            "end": 559
          }
        ],
        "declare": false,
        "start": 283,
        "end": 559
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 276,
      "end": 559
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 559
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
    "value": "Brand",
    "start": 12,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 21,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "Branding",
    "start": 29,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "ReservedName",
    "start": 41,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 54,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 62,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 69,
    "end": 70
  },
  {
    "type": "String",
    "value": "\"__type__\"",
    "start": 71,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 86,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 98,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "ReservedName",
    "start": 101,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "Branding",
    "start": 116,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "&",
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
    "type": "Identifier",
    "value": "__witness__",
    "start": 131,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 144,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 153,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 160,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "BoundedInteger",
    "start": 165,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "LowerBound",
    "start": 183,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 194,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 202,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "UpperBound",
    "start": 212,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 223,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 231,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "Brand",
    "start": 242,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 248,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 254,
    "end": 255
  },
  {
    "type": "String",
    "value": "\"BoundedInteger\"",
    "start": 256,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 276,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 283,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "toBoundedInteger",
    "start": 289,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "LowerBound",
    "start": 311,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 322,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 330,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "UpperBound",
    "start": 338,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 349,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 357,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "bounds",
    "start": 365,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "lowerBound",
    "start": 379,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "LowerBound",
    "start": 391,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "upperBound",
    "start": 407,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "UpperBound",
    "start": 419,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 436,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 450,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "BoundedInteger",
    "start": 462,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "LowerBound",
    "start": 477,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "UpperBound",
    "start": 489,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 501,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 548,
    "end": 549
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
  }
]
```
