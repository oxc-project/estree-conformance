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
        "name": "Meat",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Sausage",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 23
            },
            "initializer": null,
            "computed": false,
            "start": 16,
            "end": 23
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bacon",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 34
            },
            "initializer": null,
            "computed": false,
            "start": 29,
            "end": 34
          }
        ],
        "start": 10,
        "end": 38
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 38
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
            "name": "sausage",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 54
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Meat",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 61
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Sausage",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 69
            },
            "optional": false,
            "computed": false,
            "start": 57,
            "end": 69
          },
          "definite": false,
          "start": 47,
          "end": 69
        }
      ],
      "declare": false,
      "start": 41,
      "end": 69
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
            "name": "valueSausage",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 90
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Meat",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 97
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "sausage",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 105
            },
            "optional": false,
            "computed": true,
            "start": 93,
            "end": 106
          },
          "definite": false,
          "start": 78,
          "end": 106
        }
      ],
      "declare": false,
      "start": 72,
      "end": 106
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
            "name": "bacon",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 121
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Meat",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 128
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bacon",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 134
            },
            "optional": false,
            "computed": false,
            "start": 124,
            "end": 134
          },
          "definite": false,
          "start": 116,
          "end": 134
        }
      ],
      "declare": false,
      "start": 110,
      "end": 134
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
            "name": "valueBacon",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 153
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Meat",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 160
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "bacon",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 166
            },
            "optional": false,
            "computed": true,
            "start": 156,
            "end": 167
          },
          "definite": false,
          "start": 143,
          "end": 167
        }
      ],
      "declare": false,
      "start": 137,
      "end": 167
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
            "name": "union",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Meat",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 184,
                        "end": 188
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bacon",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 189,
                        "end": 194
                      },
                      "start": 184,
                      "end": 194
                    },
                    "typeArguments": null,
                    "start": 184,
                    "end": 194
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Meat",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 197,
                        "end": 201
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Sausage",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 202,
                        "end": 209
                      },
                      "start": 197,
                      "end": 209
                    },
                    "typeArguments": null,
                    "start": 197,
                    "end": 209
                  }
                ],
                "start": 184,
                "end": 209
              },
              "start": 182,
              "end": 209
            },
            "start": 177,
            "end": 209
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Meat",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 216
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bacon",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 222
            },
            "optional": false,
            "computed": false,
            "start": 212,
            "end": 222
          },
          "definite": false,
          "start": 177,
          "end": 222
        }
      ],
      "declare": false,
      "start": 171,
      "end": 222
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
            "name": "valueUnion",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 241
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Meat",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 248
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "union",
              "optional": false,
              "typeAnnotation": null,
              "start": 249,
              "end": 254
            },
            "optional": false,
            "computed": true,
            "start": 244,
            "end": 255
          },
          "definite": false,
          "start": 231,
          "end": 255
        }
      ],
      "declare": false,
      "start": 225,
      "end": 255
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
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 295,
            "end": 300
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Meat",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 307
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 308,
              "end": 309
            },
            "optional": false,
            "computed": true,
            "start": 303,
            "end": 310
          },
          "definite": false,
          "start": 295,
          "end": 310
        }
      ],
      "declare": false,
      "start": 289,
      "end": 310
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
            "name": "valueUndefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 320,
            "end": 334
          },
          "init": {
            "type": "Literal",
            "value": "testing",
            "raw": "\"testing\"",
            "start": 337,
            "end": 346
          },
          "definite": false,
          "start": 320,
          "end": 346
        }
      ],
      "declare": false,
      "start": 314,
      "end": 346
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
            "name": "value2",
            "optional": false,
            "typeAnnotation": null,
            "start": 355,
            "end": 361
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Meat",
              "optional": false,
              "typeAnnotation": null,
              "start": 364,
              "end": 368
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "valueUndefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 369,
              "end": 383
            },
            "optional": false,
            "computed": true,
            "start": 364,
            "end": 384
          },
          "definite": false,
          "start": 355,
          "end": 384
        }
      ],
      "declare": false,
      "start": 349,
      "end": 384
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 393,
        "end": 394
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
              "start": 401,
              "end": 402
            },
            "initializer": null,
            "computed": false,
            "start": 401,
            "end": 402
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 404,
              "end": 405
            },
            "initializer": null,
            "computed": false,
            "start": 404,
            "end": 405
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 407,
              "end": 408
            },
            "initializer": null,
            "computed": false,
            "start": 407,
            "end": 408
          }
        ],
        "start": 395,
        "end": 412
      },
      "const": false,
      "declare": false,
      "start": 388,
      "end": 412
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 420,
        "end": 421
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 428,
              "end": 429
            },
            "initializer": null,
            "computed": false,
            "start": 428,
            "end": 429
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 431,
              "end": 432
            },
            "initializer": null,
            "computed": false,
            "start": 431,
            "end": 432
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 434,
              "end": 435
            },
            "initializer": null,
            "computed": false,
            "start": 434,
            "end": 435
          }
        ],
        "start": 422,
        "end": 439
      },
      "const": false,
      "declare": false,
      "start": 415,
      "end": 439
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
            "name": "value3",
            "optional": false,
            "typeAnnotation": null,
            "start": 451,
            "end": 457
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 460,
              "end": 461
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 462,
                "end": 463
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 464,
                "end": 465
              },
              "optional": false,
              "computed": false,
              "start": 462,
              "end": 465
            },
            "optional": false,
            "computed": true,
            "start": 460,
            "end": 466
          },
          "definite": false,
          "start": 451,
          "end": 466
        }
      ],
      "declare": false,
      "start": 445,
      "end": 467
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 467
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Meat",
    "start": 5,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "Sausage",
    "start": 16,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "Bacon",
    "start": 29,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 41,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "sausage",
    "start": 47,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "Meat",
    "start": 57,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "Sausage",
    "start": 62,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 72,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "valueSausage",
    "start": 78,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "Meat",
    "start": 93,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "sausage",
    "start": 98,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 110,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "bacon",
    "start": 116,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "Meat",
    "start": 124,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "Bacon",
    "start": 129,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 137,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "valueBacon",
    "start": 143,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "Meat",
    "start": 156,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "bacon",
    "start": 161,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 171,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "union",
    "start": 177,
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
    "value": "Meat",
    "start": 184,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "Bacon",
    "start": 189,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "Meat",
    "start": 197,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "Sausage",
    "start": 202,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "Meat",
    "start": 212,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "Bacon",
    "start": 217,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 225,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "valueUnion",
    "start": 231,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "Meat",
    "start": 244,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "union",
    "start": 249,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 254,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 289,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 295,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "Meat",
    "start": 303,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 307,
    "end": 308
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 309,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 314,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "valueUndefined",
    "start": 320,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 335,
    "end": 336
  },
  {
    "type": "String",
    "value": "\"testing\"",
    "start": 337,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 349,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "value2",
    "start": 355,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "Meat",
    "start": 364,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "valueUndefined",
    "start": 369,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 383,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 388,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 415,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 438,
    "end": 439
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 445,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "value3",
    "start": 451,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 466,
    "end": 467
  }
]
```
