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
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 236,
        "end": 237
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 245
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 248,
              "end": 249
            },
            "computed": false,
            "start": 244,
            "end": 249
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 255,
              "end": 256
            },
            "initializer": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 259,
              "end": 260
            },
            "computed": false,
            "start": 255,
            "end": 260
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 267
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 270,
                "end": 271
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 275
              },
              "start": 270,
              "end": 275
            },
            "computed": false,
            "start": 266,
            "end": 275
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 281,
              "end": 282
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 285,
                "end": 286
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 289,
                "end": 290
              },
              "start": 285,
              "end": 290
            },
            "computed": false,
            "start": 281,
            "end": 290
          }
        ],
        "start": 238,
        "end": 292
      },
      "const": true,
      "declare": false,
      "start": 225,
      "end": 292
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 380,
            "end": 381
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "G",
            "optional": false,
            "typeAnnotation": null,
            "start": 384,
            "end": 385
          },
          "definite": false,
          "start": 380,
          "end": 385
        }
      ],
      "declare": false,
      "start": 376,
      "end": 386
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
            "name": "z1",
            "optional": false,
            "typeAnnotation": null,
            "start": 391,
            "end": 393
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null,
              "start": 396,
              "end": 397
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "G",
                "optional": false,
                "typeAnnotation": null,
                "start": 398,
                "end": 399
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 400,
                "end": 401
              },
              "optional": false,
              "computed": false,
              "start": 398,
              "end": 401
            },
            "optional": false,
            "computed": true,
            "start": 396,
            "end": 402
          },
          "definite": false,
          "start": 391,
          "end": 402
        }
      ],
      "declare": false,
      "start": 387,
      "end": 403
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
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "G",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 411,
                  "end": 412
                },
                "typeArguments": null,
                "start": 411,
                "end": 412
              },
              "start": 409,
              "end": 412
            },
            "start": 408,
            "end": 412
          },
          "init": null,
          "definite": false,
          "start": 408,
          "end": 412
        }
      ],
      "declare": false,
      "start": 404,
      "end": 413
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 414,
          "end": 415
        },
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 418,
          "end": 426
        },
        "start": 414,
        "end": 426
      },
      "directive": null,
      "start": 414,
      "end": 427
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 437,
        "end": 440
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "G",
                "optional": false,
                "typeAnnotation": null,
                "start": 444,
                "end": 445
              },
              "typeArguments": null,
              "start": 444,
              "end": 445
            },
            "start": 442,
            "end": 445
          },
          "start": 441,
          "end": 445
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 447,
        "end": 450
      },
      "expression": false,
      "start": 428,
      "end": 450
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "G",
            "optional": false,
            "typeAnnotation": null,
            "start": 451,
            "end": 452
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 453,
            "end": 454
          },
          "optional": false,
          "computed": false,
          "start": 451,
          "end": 454
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 457,
          "end": 458
        },
        "start": 451,
        "end": 458
      },
      "directive": null,
      "start": 451,
      "end": 459
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 225,
  "end": 459
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 225,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 231,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 246,
    "end": 247
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 257,
    "end": 258
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 287,
    "end": 288
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 291,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 376,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "z",
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
    "value": "G",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 385,
    "end": 386
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 387,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 391,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 404,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "g",
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
    "type": "String",
    "value": "\"string\"",
    "start": 418,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 428,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 437,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 455,
    "end": 456
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 458,
    "end": 459
  }
]
```
