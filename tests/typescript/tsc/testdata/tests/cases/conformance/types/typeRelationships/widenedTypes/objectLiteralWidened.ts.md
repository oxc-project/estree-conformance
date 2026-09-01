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
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 55
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 64,
                  "end": 67
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 69,
                  "end": 73
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 64,
                "end": 73
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 82
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 84,
                  "end": 93
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 79,
                "end": 93
              }
            ],
            "start": 58,
            "end": 95
          },
          "definite": false,
          "start": 53,
          "end": 95
        }
      ],
      "declare": false,
      "start": 49,
      "end": 95
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
            "name": "y1",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 103
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 112,
                  "end": 115
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 117,
                  "end": 121
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 112,
                "end": 121
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 127,
                  "end": 130
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
                        "name": "baz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 142,
                        "end": 145
                      },
                      "value": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 147,
                        "end": 151
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 142,
                      "end": 151
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "boo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 161,
                        "end": 164
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 166,
                        "end": 175
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 161,
                      "end": 175
                    }
                  ],
                  "start": 132,
                  "end": 181
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 127,
                "end": 181
              }
            ],
            "start": 106,
            "end": 183
          },
          "definite": false,
          "start": 101,
          "end": 183
        }
      ],
      "declare": false,
      "start": 97,
      "end": 183
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
            "name": "u",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 218,
                "end": 227
              },
              "start": 216,
              "end": 227
            },
            "start": 215,
            "end": 227
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 230,
            "end": 239
          },
          "definite": false,
          "start": 215,
          "end": 239
        }
      ],
      "declare": false,
      "start": 211,
      "end": 240
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
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 248,
                "end": 252
              },
              "start": 246,
              "end": 252
            },
            "start": 245,
            "end": 252
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 255,
            "end": 259
          },
          "definite": false,
          "start": 245,
          "end": 259
        }
      ],
      "declare": false,
      "start": 241,
      "end": 260
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 266,
            "end": 268
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 277,
                  "end": 280
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 282,
                  "end": 283
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 277,
                "end": 283
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 289,
                  "end": 292
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 294,
                  "end": 295
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 289,
                "end": 295
              }
            ],
            "start": 271,
            "end": 297
          },
          "definite": false,
          "start": 266,
          "end": 297
        }
      ],
      "declare": false,
      "start": 262,
      "end": 297
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
            "name": "y2",
            "optional": false,
            "typeAnnotation": null,
            "start": 303,
            "end": 305
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 314,
                  "end": 317
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 319,
                  "end": 320
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 314,
                "end": 320
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 326,
                  "end": 329
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
                        "name": "baz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 341,
                        "end": 344
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 346,
                        "end": 347
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 341,
                      "end": 347
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "boo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 357,
                        "end": 360
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 362,
                        "end": 363
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 357,
                      "end": 363
                    }
                  ],
                  "start": 331,
                  "end": 369
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 326,
                "end": 369
              }
            ],
            "start": 308,
            "end": 371
          },
          "definite": false,
          "start": 303,
          "end": 371
        }
      ],
      "declare": false,
      "start": 299,
      "end": 371
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 49,
  "end": 371
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 49,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 53,
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
    "type": "Identifier",
    "value": "foo",
    "start": 64,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "Null",
    "value": "null",
    "start": 69,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "bar",
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
    "value": "undefined",
    "start": 84,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 97,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 101,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 112,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116
  },
  {
    "type": "Null",
    "value": "null",
    "start": 117,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 121,
    "end": 122
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
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 142,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Null",
    "value": "null",
    "start": 147,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "boo",
    "start": 161,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 166,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 211,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 218,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 230,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 241,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Null",
    "value": "null",
    "start": 248,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 253,
    "end": 254
  },
  {
    "type": "Null",
    "value": "null",
    "start": 255,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 262,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 266,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 277,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 289,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 299,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 303,
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
    "value": "{",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 314,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 326,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 341,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "boo",
    "start": 357,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "}",
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
