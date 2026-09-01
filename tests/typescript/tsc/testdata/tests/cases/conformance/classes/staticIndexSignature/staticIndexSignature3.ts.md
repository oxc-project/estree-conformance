__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 34,
                    "end": 40
                  },
                  "start": 32,
                  "end": 40
                },
                "start": 31,
                "end": 40
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 43,
                "end": 49
              },
              "start": 41,
              "end": 49
            },
            "readonly": true,
            "static": true,
            "accessibility": null,
            "start": 14,
            "end": 50
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 75,
                    "end": 81
                  },
                  "start": 73,
                  "end": 81
                },
                "start": 72,
                "end": 81
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 84,
                      "end": 86
                    },
                    "start": 84,
                    "end": 86
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 233,
                      "raw": "233",
                      "start": 89,
                      "end": 92
                    },
                    "start": 89,
                    "end": 92
                  }
                ],
                "start": 84,
                "end": 92
              },
              "start": 82,
              "end": 92
            },
            "readonly": true,
            "static": true,
            "accessibility": null,
            "start": 55,
            "end": 92
          }
        ],
        "start": 8,
        "end": 94
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 94
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 103
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 113
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
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 140,
                    "end": 146
                  },
                  "start": 138,
                  "end": 146
                },
                "start": 137,
                "end": 146
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 149,
                "end": 155
              },
              "start": 147,
              "end": 155
            },
            "readonly": true,
            "static": true,
            "accessibility": null,
            "start": 120,
            "end": 155
          }
        ],
        "start": 114,
        "end": 157
      },
      "abstract": false,
      "declare": false,
      "start": 96,
      "end": 157
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ED",
        "optional": false,
        "typeAnnotation": null,
        "start": 165,
        "end": 167
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 176,
        "end": 177
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
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 204,
                    "end": 210
                  },
                  "start": 202,
                  "end": 210
                },
                "start": 201,
                "end": 210
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 213,
                "end": 220
              },
              "start": 211,
              "end": 220
            },
            "readonly": true,
            "static": true,
            "accessibility": null,
            "start": 184,
            "end": 220
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 245,
                    "end": 251
                  },
                  "start": 243,
                  "end": 251
                },
                "start": 242,
                "end": 251
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 254,
                  "end": 255
                },
                "start": 254,
                "end": 255
              },
              "start": 252,
              "end": 255
            },
            "readonly": true,
            "static": true,
            "accessibility": null,
            "start": 225,
            "end": 255
          }
        ],
        "start": 178,
        "end": 258
      },
      "abstract": false,
      "declare": false,
      "start": 159,
      "end": 258
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DD",
        "optional": false,
        "typeAnnotation": null,
        "start": 266,
        "end": 268
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 277,
        "end": 278
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
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 305,
                    "end": 311
                  },
                  "start": 303,
                  "end": 311
                },
                "start": 302,
                "end": 311
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 421,
                  "raw": "421",
                  "start": 314,
                  "end": 317
                },
                "start": 314,
                "end": 317
              },
              "start": 312,
              "end": 317
            },
            "readonly": true,
            "static": true,
            "accessibility": null,
            "start": 285,
            "end": 317
          }
        ],
        "start": 279,
        "end": 319
      },
      "abstract": false,
      "declare": false,
      "start": 260,
      "end": 319
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 327,
            "end": 328
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 331,
              "end": 332
            },
            "property": {
              "type": "Literal",
              "value": "f",
              "raw": "\"f\"",
              "start": 333,
              "end": 336
            },
            "optional": false,
            "computed": true,
            "start": 331,
            "end": 337
          },
          "definite": false,
          "start": 327,
          "end": 337
        }
      ],
      "declare": false,
      "start": 321,
      "end": 338
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 345,
            "end": 346
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 350,
              "end": 351
            },
            "property": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 352,
              "end": 354
            },
            "optional": false,
            "computed": true,
            "start": 350,
            "end": 355
          },
          "definite": false,
          "start": 345,
          "end": 355
        }
      ],
      "declare": false,
      "start": 339,
      "end": 356
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 363,
            "end": 364
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 367,
              "end": 368
            },
            "property": {
              "type": "Literal",
              "value": "f",
              "raw": "\"f\"",
              "start": 369,
              "end": 372
            },
            "optional": false,
            "computed": true,
            "start": 367,
            "end": 373
          },
          "definite": false,
          "start": 363,
          "end": 373
        }
      ],
      "declare": false,
      "start": 357,
      "end": 373
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 380,
            "end": 381
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 384,
              "end": 385
            },
            "property": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 386,
              "end": 388
            },
            "optional": false,
            "computed": true,
            "start": 384,
            "end": 389
          },
          "definite": false,
          "start": 380,
          "end": 389
        }
      ],
      "declare": false,
      "start": 374,
      "end": 389
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
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 396,
            "end": 397
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ED",
              "optional": false,
              "typeAnnotation": null,
              "start": 400,
              "end": 402
            },
            "property": {
              "type": "Literal",
              "value": "f",
              "raw": "\"f\"",
              "start": 403,
              "end": 406
            },
            "optional": false,
            "computed": true,
            "start": 400,
            "end": 407
          },
          "definite": false,
          "start": 396,
          "end": 407
        }
      ],
      "declare": false,
      "start": 390,
      "end": 407
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 414,
            "end": 415
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ED",
              "optional": false,
              "typeAnnotation": null,
              "start": 418,
              "end": 420
            },
            "property": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 421,
              "end": 423
            },
            "optional": false,
            "computed": true,
            "start": 418,
            "end": 424
          },
          "definite": false,
          "start": 414,
          "end": 424
        }
      ],
      "declare": false,
      "start": 408,
      "end": 424
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
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 431,
            "end": 432
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "DD",
              "optional": false,
              "typeAnnotation": null,
              "start": 435,
              "end": 437
            },
            "property": {
              "type": "Literal",
              "value": "f",
              "raw": "\"f\"",
              "start": 438,
              "end": 441
            },
            "optional": false,
            "computed": true,
            "start": 435,
            "end": 442
          },
          "definite": false,
          "start": 431,
          "end": 442
        }
      ],
      "declare": false,
      "start": 425,
      "end": 442
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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 449,
            "end": 450
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "DD",
              "optional": false,
              "typeAnnotation": null,
              "start": 453,
              "end": 455
            },
            "property": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 456,
              "end": 458
            },
            "optional": false,
            "computed": true,
            "start": 453,
            "end": 459
          },
          "definite": false,
          "start": 449,
          "end": 459
        }
      ],
      "declare": false,
      "start": 443,
      "end": 459
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 459
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 14,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 21,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
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
    "value": "]",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 43,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 55,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 62,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 75,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 84,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 87,
    "end": 88
  },
  {
    "type": "Numeric",
    "value": "233",
    "start": 89,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 96,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 104,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 120,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 127,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 140,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 149,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 159,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "ED",
    "start": 165,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 168,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 184,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 191,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 204,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "boolean",
    "start": 213,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 225,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 232,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 245,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 260,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "DD",
    "start": 266,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 269,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 279,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 285,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 292,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 305,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 312,
    "end": 313
  },
  {
    "type": "Numeric",
    "value": "421",
    "start": 314,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 321,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 332,
    "end": 333
  },
  {
    "type": "String",
    "value": "\"f\"",
    "start": 333,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 339,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 351,
    "end": 352
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 352,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 357,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 368,
    "end": 369
  },
  {
    "type": "String",
    "value": "\"f\"",
    "start": 369,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 372,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 374,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 385,
    "end": 386
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 386,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 388,
    "end": 389
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 390,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "ED",
    "start": 400,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 402,
    "end": 403
  },
  {
    "type": "String",
    "value": "\"f\"",
    "start": 403,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 406,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 408,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "ED",
    "start": 418,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 420,
    "end": 421
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 421,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 423,
    "end": 424
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 425,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "DD",
    "start": 435,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 437,
    "end": 438
  },
  {
    "type": "String",
    "value": "\"f\"",
    "start": 438,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 441,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 443,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "DD",
    "start": 453,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 455,
    "end": 456
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 456,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 458,
    "end": 459
  }
]
```
