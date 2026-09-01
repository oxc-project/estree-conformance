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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 14,
                    "end": 20
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 23,
                    "end": 29
                  }
                ],
                "start": 14,
                "end": 29
              },
              "start": 12,
              "end": 29
            },
            "start": 4,
            "end": 29
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 29
        }
      ],
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 46,
                    "end": 52
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 55,
                    "end": 62
                  }
                ],
                "start": 46,
                "end": 62
              },
              "start": 44,
              "end": 62
            },
            "start": 35,
            "end": 62
          },
          "init": null,
          "definite": false,
          "start": 35,
          "end": 62
        }
      ],
      "declare": false,
      "start": 31,
      "end": 63
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
              },
              "start": 71,
              "end": 79
            },
            "start": 68,
            "end": 79
          },
          "init": null,
          "definite": false,
          "start": 68,
          "end": 79
        }
      ],
      "declare": false,
      "start": 64,
      "end": 80
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 90,
                "end": 96
              },
              "start": 88,
              "end": 96
            },
            "start": 85,
            "end": 96
          },
          "init": null,
          "definite": false,
          "start": 85,
          "end": 96
        }
      ],
      "declare": false,
      "start": 81,
      "end": 97
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 108,
                "end": 115
              },
              "start": 106,
              "end": 115
            },
            "start": 102,
            "end": 115
          },
          "init": null,
          "definite": false,
          "start": 102,
          "end": 115
        }
      ],
      "declare": false,
      "start": 98,
      "end": 116
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "strOrNum",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 134
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 172
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 182,
              "end": 188
            }
          ],
          "start": 159,
          "end": 188
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 222
          },
          "consequent": [],
          "start": 214,
          "end": 223
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": null,
            "start": 233,
            "end": 236
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 246,
              "end": 252
            }
          ],
          "start": 228,
          "end": 252
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 294,
            "end": 303
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 313,
              "end": 319
            }
          ],
          "start": 289,
          "end": 319
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "bool",
            "optional": false,
            "typeAnnotation": null,
            "start": 349,
            "end": 353
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 363,
              "end": 369
            }
          ],
          "start": 344,
          "end": 369
        }
      ],
      "start": 118,
      "end": 371
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 371
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 14,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 31,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 35,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 55,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 64,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 68,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 73,
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
    "value": "var",
    "start": 81,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 85,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 90,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 98,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 102,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 108,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 118,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 126,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 159,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 164,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 182,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 214,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 219,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 228,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 233,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 246,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 289,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 294,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 313,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 344,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 349,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 363,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 370,
    "end": 371
  }
]
```
