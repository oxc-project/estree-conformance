__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 76
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 82
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 84,
                "end": 90
              },
              "start": 82,
              "end": 90
            },
            "accessibility": null,
            "static": false,
            "start": 79,
            "end": 91
          }
        ],
        "start": 77,
        "end": 93
      },
      "declare": false,
      "start": 62,
      "end": 93
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 111
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 124
          },
          "typeArguments": null,
          "start": 120,
          "end": 124
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 130
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 132,
                "end": 138
              },
              "start": 130,
              "end": 138
            },
            "accessibility": null,
            "static": false,
            "start": 127,
            "end": 139
          }
        ],
        "start": 125,
        "end": 141
      },
      "declare": false,
      "start": 94,
      "end": 141
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 160
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Derived",
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 176
          },
          "typeArguments": null,
          "start": 169,
          "end": 176
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 182
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
              },
              "start": 182,
              "end": 190
            },
            "accessibility": null,
            "static": false,
            "start": 179,
            "end": 191
          }
        ],
        "start": 177,
        "end": 193
      },
      "declare": false,
      "start": 142,
      "end": 193
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 202
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 213,
                    "end": 219
                  },
                  "start": 211,
                  "end": 219
                },
                "start": 210,
                "end": 219
              }
            ],
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
                  "start": 222,
                  "end": 229
                },
                "typeArguments": null,
                "start": 222,
                "end": 229
              },
              "start": 220,
              "end": 229
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 209,
            "end": 230
          }
        ],
        "start": 203,
        "end": 232
      },
      "abstract": false,
      "declare": false,
      "start": 195,
      "end": 232
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 240,
        "end": 241
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 250,
        "end": 251
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 262,
                    "end": 268
                  },
                  "start": 260,
                  "end": 268
                },
                "start": 259,
                "end": 268
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 271,
                "end": 277
              },
              "start": 269,
              "end": 277
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 258,
            "end": 278
          }
        ],
        "start": 252,
        "end": 289
      },
      "abstract": false,
      "declare": false,
      "start": 234,
      "end": 289
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Generics",
        "optional": false,
        "typeAnnotation": null,
        "start": 301,
        "end": 309
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 322,
              "end": 323
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
                    "start": 324,
                    "end": 325
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 334,
                      "end": 341
                    },
                    "typeArguments": null,
                    "start": 334,
                    "end": 341
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 324,
                  "end": 341
                }
              ],
              "start": 323,
              "end": 342
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 357,
                          "end": 363
                        },
                        "start": 355,
                        "end": 363
                      },
                      "start": 354,
                      "end": 363
                    }
                  ],
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
                        "start": 366,
                        "end": 367
                      },
                      "typeArguments": null,
                      "start": 366,
                      "end": 367
                    },
                    "start": 364,
                    "end": 367
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 353,
                  "end": 368
                }
              ],
              "start": 343,
              "end": 374
            },
            "abstract": false,
            "declare": false,
            "start": 316,
            "end": 374
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 386,
              "end": 387
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 396,
              "end": 397
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Base",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 398,
                    "end": 402
                  },
                  "typeArguments": null,
                  "start": 398,
                  "end": 402
                }
              ],
              "start": 397,
              "end": 403
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 418,
                          "end": 424
                        },
                        "start": 416,
                        "end": 424
                      },
                      "start": 415,
                      "end": 424
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 427,
                      "end": 433
                    },
                    "start": 425,
                    "end": 433
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 414,
                  "end": 434
                }
              ],
              "start": 404,
              "end": 449
            },
            "abstract": false,
            "declare": false,
            "start": 380,
            "end": 449
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B3",
              "optional": false,
              "typeAnnotation": null,
              "start": 461,
              "end": 463
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
                    "start": 464,
                    "end": 465
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 474,
                      "end": 481
                    },
                    "typeArguments": null,
                    "start": 474,
                    "end": 481
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 464,
                  "end": 481
                }
              ],
              "start": 463,
              "end": 482
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 491,
              "end": 492
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 493,
                    "end": 494
                  },
                  "typeArguments": null,
                  "start": 493,
                  "end": 494
                }
              ],
              "start": 492,
              "end": 495
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 510,
                          "end": 516
                        },
                        "start": 508,
                        "end": 516
                      },
                      "start": 507,
                      "end": 516
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 519,
                      "end": 525
                    },
                    "start": 517,
                    "end": 525
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 506,
                  "end": 526
                }
              ],
              "start": 496,
              "end": 541
            },
            "abstract": false,
            "declare": false,
            "start": 455,
            "end": 541
          }
        ],
        "start": 310,
        "end": 543
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 291,
      "end": 543
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 62,
  "end": 543
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 62,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 72,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 79,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 84,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 94,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 104,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 112,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 120,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 132,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 142,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 152,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 161,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 169,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 179,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 184,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 192,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 195,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 213,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 222,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 234,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 240,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 242,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "string",
    "start": 262,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 271,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 291,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "Generics",
    "start": 301,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 316,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 326,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 334,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 357,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 380,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 386,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 388,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 398,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 418,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 427,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 448,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 455,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "B3",
    "start": 461,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 464,
    "end": 465
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 466,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 474,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 481,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 483,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 510,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 519,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 542,
    "end": 543
  }
]
```
