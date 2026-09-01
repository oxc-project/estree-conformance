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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 10,
        "end": 13
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 13
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": 0,
        "raw": "0",
        "start": 23,
        "end": 24
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 40
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 42,
              "end": 48
            }
          ],
          "start": 32,
          "end": 48
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "sss",
            "raw": "\"sss\"",
            "start": 70,
            "end": 75
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 77,
              "end": 83
            }
          ],
          "start": 65,
          "end": 83
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 103,
            "end": 106
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 108,
              "end": 114
            }
          ],
          "start": 98,
          "end": 114
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 136,
            "end": 140
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 142,
              "end": 148
            }
          ],
          "start": 131,
          "end": 148
        }
      ],
      "start": 15,
      "end": 161
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
            "name": "q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 178,
                "end": 184
              },
              "start": 176,
              "end": 184
            },
            "start": 175,
            "end": 184
          },
          "init": null,
          "definite": false,
          "start": 175,
          "end": 184
        }
      ],
      "declare": true,
      "start": 163,
      "end": 184
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
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 200,
                    "end": 206
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 209,
                      "end": 216
                    },
                    "start": 209,
                    "end": 216
                  }
                ],
                "start": 200,
                "end": 216
              },
              "start": 198,
              "end": 216
            },
            "start": 197,
            "end": 216
          },
          "init": null,
          "definite": false,
          "start": 197,
          "end": 216
        }
      ],
      "declare": true,
      "start": 185,
      "end": 216
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "r",
        "optional": false,
        "typeAnnotation": null,
        "start": 226,
        "end": 227
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 241
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 243,
              "end": 248
            }
          ],
          "start": 235,
          "end": 248
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 258,
            "end": 260
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 262,
              "end": 267
            }
          ],
          "start": 253,
          "end": 267
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 277,
            "end": 281
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 283,
              "end": 288
            }
          ],
          "start": 272,
          "end": 288
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 307,
            "end": 314
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 316,
              "end": 321
            }
          ],
          "start": 302,
          "end": 321
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "world",
            "raw": "\"world\"",
            "start": 331,
            "end": 338
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 340,
              "end": 345
            }
          ],
          "start": 326,
          "end": 345
        }
      ],
      "start": 218,
      "end": 356
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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 365,
                "end": 368
              },
              "start": 363,
              "end": 368
            },
            "start": 362,
            "end": 368
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 371,
            "end": 372
          },
          "definite": false,
          "start": 362,
          "end": 372
        }
      ],
      "declare": false,
      "start": 358,
      "end": 373
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "s",
        "optional": false,
        "typeAnnotation": null,
        "start": 403,
        "end": 404
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 417,
            "end": 420
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 422,
              "end": 428
            }
          ],
          "start": 412,
          "end": 428
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "sss",
            "raw": "\"sss\"",
            "start": 438,
            "end": 443
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 445,
              "end": 451
            }
          ],
          "start": 433,
          "end": 451
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 461,
            "end": 464
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 466,
              "end": 472
            }
          ],
          "start": 456,
          "end": 472
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 482,
            "end": 486
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 488,
              "end": 494
            }
          ],
          "start": 477,
          "end": 494
        }
      ],
      "start": 395,
      "end": 496
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 496
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
    "value": "Foo",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 15,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 32,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 37,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 42,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 65,
    "end": 69
  },
  {
    "type": "String",
    "value": "\"sss\"",
    "start": 70,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 77,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 98,
    "end": 102
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 103,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 108,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 131,
    "end": 135
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 136,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 142,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 163,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 171,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 178,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 185,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 193,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 200,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 207,
    "end": 208
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 209,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 218,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 235,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 243,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 253,
    "end": 257
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 258,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 262,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 272,
    "end": 276
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 277,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 283,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 302,
    "end": 306
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 307,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 316,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 326,
    "end": 330
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 331,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 340,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 355,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 358,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 365,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 369,
    "end": 370
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 395,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 403,
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
    "value": "{",
    "start": 406,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 412,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 417,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 422,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 433,
    "end": 437
  },
  {
    "type": "String",
    "value": "\"sss\"",
    "start": 438,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 443,
    "end": 444
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 445,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 450,
    "end": 451
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 456,
    "end": 460
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 461,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 464,
    "end": 465
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 466,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 471,
    "end": 472
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 477,
    "end": 481
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 482,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 486,
    "end": 487
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 488,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 495,
    "end": 496
  }
]
```
