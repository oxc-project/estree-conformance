__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 114,
        "end": 115
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 123
            },
            "initializer": null,
            "computed": false,
            "start": 122,
            "end": 123
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 130
            },
            "initializer": null,
            "computed": false,
            "start": 129,
            "end": 130
          }
        ],
        "start": 116,
        "end": 132
      },
      "const": false,
      "declare": false,
      "start": 109,
      "end": 132
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 149,
                "end": 152
              },
              "start": 147,
              "end": 152
            },
            "start": 146,
            "end": 152
          },
          "init": null,
          "definite": false,
          "start": 146,
          "end": 152
        }
      ],
      "declare": true,
      "start": 134,
      "end": 153
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 169,
                "end": 175
              },
              "start": 167,
              "end": 175
            },
            "start": 166,
            "end": 175
          },
          "init": null,
          "definite": false,
          "start": 166,
          "end": 175
        }
      ],
      "declare": true,
      "start": 154,
      "end": 176
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 197,
            "end": 199
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 202,
              "end": 206
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 210,
              "end": 211
            },
            "start": 202,
            "end": 211
          },
          "definite": false,
          "start": 197,
          "end": 211
        }
      ],
      "declare": false,
      "start": 193,
      "end": 212
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 219
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 222,
              "end": 226
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 230,
              "end": 231
            },
            "start": 222,
            "end": 231
          },
          "definite": false,
          "start": 217,
          "end": 231
        }
      ],
      "declare": false,
      "start": 213,
      "end": 232
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 237,
            "end": 239
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 242,
              "end": 246
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 250,
              "end": 251
            },
            "start": 242,
            "end": 251
          },
          "definite": false,
          "start": 237,
          "end": 251
        }
      ],
      "declare": false,
      "start": 233,
      "end": 252
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 257,
            "end": 259
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 262,
              "end": 266
            },
            "operator": "**",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 270,
                "end": 271
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 272,
                "end": 273
              },
              "optional": false,
              "computed": false,
              "start": 270,
              "end": 273
            },
            "start": 262,
            "end": 273
          },
          "definite": false,
          "start": 257,
          "end": 273
        }
      ],
      "declare": false,
      "start": 253,
      "end": 274
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 281
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 284,
              "end": 285
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 289,
              "end": 293
            },
            "start": 284,
            "end": 293
          },
          "definite": false,
          "start": 279,
          "end": 293
        }
      ],
      "declare": false,
      "start": 275,
      "end": 294
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 299,
            "end": 301
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 305
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 309,
              "end": 313
            },
            "start": 304,
            "end": 313
          },
          "definite": false,
          "start": 299,
          "end": 313
        }
      ],
      "declare": false,
      "start": 295,
      "end": 314
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
            "name": "r7",
            "optional": false,
            "typeAnnotation": null,
            "start": 319,
            "end": 321
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 324,
              "end": 325
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 329,
              "end": 333
            },
            "start": 324,
            "end": 333
          },
          "definite": false,
          "start": 319,
          "end": 333
        }
      ],
      "declare": false,
      "start": 315,
      "end": 334
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
            "name": "r8",
            "optional": false,
            "typeAnnotation": null,
            "start": 339,
            "end": 341
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 344,
                "end": 345
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 346,
                "end": 347
              },
              "optional": false,
              "computed": false,
              "start": 344,
              "end": 347
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 351,
              "end": 355
            },
            "start": 344,
            "end": 355
          },
          "definite": false,
          "start": 339,
          "end": 355
        }
      ],
      "declare": false,
      "start": 335,
      "end": 356
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 109,
  "end": 356
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 109,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 134,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 142,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "any",
    "start": 149,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 154,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 162,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 169,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 193,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 197,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 200,
    "end": 201
  },
  {
    "type": "Null",
    "value": "null",
    "start": 202,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 207,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 213,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 217,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 220,
    "end": 221
  },
  {
    "type": "Null",
    "value": "null",
    "start": 222,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 227,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 233,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 237,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 240,
    "end": 241
  },
  {
    "type": "Null",
    "value": "null",
    "start": 242,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 247,
    "end": 249
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 250,
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
    "value": "var",
    "start": 253,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 257,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 260,
    "end": 261
  },
  {
    "type": "Null",
    "value": "null",
    "start": 262,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 267,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "var",
    "start": 275,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 279,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 286,
    "end": 288
  },
  {
    "type": "Null",
    "value": "null",
    "start": 289,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 295,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 299,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 306,
    "end": 308
  },
  {
    "type": "Null",
    "value": "null",
    "start": 309,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 315,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 319,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 322,
    "end": 323
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 326,
    "end": 328
  },
  {
    "type": "Null",
    "value": "null",
    "start": 329,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 333,
    "end": 334
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 335,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 339,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 348,
    "end": 350
  },
  {
    "type": "Null",
    "value": "null",
    "start": 351,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356
  }
]
```
