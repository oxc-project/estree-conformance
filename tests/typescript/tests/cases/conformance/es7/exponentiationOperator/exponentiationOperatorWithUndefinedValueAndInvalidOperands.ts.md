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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 129,
                "end": 136
              },
              "start": 127,
              "end": 136
            },
            "start": 126,
            "end": 136
          },
          "init": null,
          "definite": false,
          "start": 126,
          "end": 136
        }
      ],
      "declare": true,
      "start": 114,
      "end": 137
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
                "type": "TSStringKeyword",
                "start": 153,
                "end": 159
              },
              "start": 151,
              "end": 159
            },
            "start": 150,
            "end": 159
          },
          "init": null,
          "definite": false,
          "start": 150,
          "end": 159
        }
      ],
      "declare": true,
      "start": 138,
      "end": 160
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 176,
                  "end": 182
                },
                "typeArguments": null,
                "start": 176,
                "end": 182
              },
              "start": 174,
              "end": 182
            },
            "start": 173,
            "end": 182
          },
          "init": null,
          "definite": false,
          "start": 173,
          "end": 182
        }
      ],
      "declare": true,
      "start": 161,
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
            "name": "r1a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 208
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 220
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 224,
              "end": 225
            },
            "start": 211,
            "end": 225
          },
          "definite": false,
          "start": 204,
          "end": 225
        }
      ],
      "declare": false,
      "start": 200,
      "end": 226
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
            "name": "r1a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 235
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 247
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 252
            },
            "start": 238,
            "end": 252
          },
          "definite": false,
          "start": 231,
          "end": 252
        }
      ],
      "declare": false,
      "start": 227,
      "end": 253
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
            "name": "r1a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 258,
            "end": 262
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 265,
              "end": 274
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 279
            },
            "start": 265,
            "end": 279
          },
          "definite": false,
          "start": 258,
          "end": 279
        }
      ],
      "declare": false,
      "start": 254,
      "end": 280
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
            "name": "r1b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 290
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 293,
              "end": 294
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 298,
              "end": 307
            },
            "start": 293,
            "end": 307
          },
          "definite": false,
          "start": 286,
          "end": 307
        }
      ],
      "declare": false,
      "start": 282,
      "end": 308
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
            "name": "r1b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 313,
            "end": 317
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 320,
              "end": 321
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 325,
              "end": 334
            },
            "start": 320,
            "end": 334
          },
          "definite": false,
          "start": 313,
          "end": 334
        }
      ],
      "declare": false,
      "start": 309,
      "end": 335
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
            "name": "r1b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 340,
            "end": 344
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 347,
              "end": 348
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 361
            },
            "start": 347,
            "end": 361
          },
          "definite": false,
          "start": 340,
          "end": 361
        }
      ],
      "declare": false,
      "start": 336,
      "end": 362
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
            "name": "r1c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 368,
            "end": 372
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 375,
              "end": 384
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 388,
              "end": 392
            },
            "start": 375,
            "end": 392
          },
          "definite": false,
          "start": 368,
          "end": 392
        }
      ],
      "declare": false,
      "start": 364,
      "end": 393
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
            "name": "r1c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 398,
            "end": 402
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 405,
              "end": 414
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 418,
              "end": 420
            },
            "start": 405,
            "end": 420
          },
          "definite": false,
          "start": 398,
          "end": 420
        }
      ],
      "declare": false,
      "start": 394,
      "end": 421
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
            "name": "r1c3",
            "optional": false,
            "typeAnnotation": null,
            "start": 426,
            "end": 430
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 433,
              "end": 442
            },
            "operator": "**",
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 446,
              "end": 448
            },
            "start": 433,
            "end": 448
          },
          "definite": false,
          "start": 426,
          "end": 448
        }
      ],
      "declare": false,
      "start": 422,
      "end": 449
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
            "name": "r1d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 455,
            "end": 459
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 462,
              "end": 466
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 470,
              "end": 479
            },
            "start": 462,
            "end": 479
          },
          "definite": false,
          "start": 455,
          "end": 479
        }
      ],
      "declare": false,
      "start": 451,
      "end": 480
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
            "name": "r1d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 485,
            "end": 489
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 492,
              "end": 494
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 498,
              "end": 507
            },
            "start": 492,
            "end": 507
          },
          "definite": false,
          "start": 485,
          "end": 507
        }
      ],
      "declare": false,
      "start": 481,
      "end": 508
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
            "name": "r1d3",
            "optional": false,
            "typeAnnotation": null,
            "start": 513,
            "end": 517
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 520,
              "end": 522
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 526,
              "end": 535
            },
            "start": 520,
            "end": 535
          },
          "definite": false,
          "start": 513,
          "end": 535
        }
      ],
      "declare": false,
      "start": 509,
      "end": 536
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 114,
  "end": 536
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 114,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 122,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 129,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 138,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 146,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 153,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 161,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 169,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 176,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 200,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "r1a1",
    "start": 204,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 211,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 221,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 227,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "r1a2",
    "start": 231,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 238,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 248,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 254,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "r1a3",
    "start": 258,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 265,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 275,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 282,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "r1b1",
    "start": 286,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 295,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 298,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 309,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "r1b2",
    "start": 313,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 322,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 325,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 336,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "r1b3",
    "start": 340,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 349,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 352,
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
    "value": "var",
    "start": 364,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "r1c1",
    "start": 368,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 375,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 385,
    "end": 387
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 388,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 392,
    "end": 393
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 394,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "r1c2",
    "start": 398,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 405,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 415,
    "end": 417
  },
  {
    "type": "String",
    "value": "''",
    "start": 418,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 422,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "r1c3",
    "start": 426,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 433,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 443,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 448,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 451,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "r1d1",
    "start": 455,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 460,
    "end": 461
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 462,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 467,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 470,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 481,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "r1d2",
    "start": 485,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 490,
    "end": 491
  },
  {
    "type": "String",
    "value": "''",
    "start": 492,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 495,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 498,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 509,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "r1d3",
    "start": 513,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 523,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 526,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536
  }
]
```
