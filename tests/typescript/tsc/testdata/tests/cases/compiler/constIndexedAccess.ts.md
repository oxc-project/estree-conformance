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
        "name": "numbers",
        "optional": false,
        "typeAnnotation": null,
        "start": 11,
        "end": 18
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "zero",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 29
            },
            "initializer": null,
            "computed": false,
            "start": 25,
            "end": 29
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 38
            },
            "initializer": null,
            "computed": false,
            "start": 35,
            "end": 38
          }
        ],
        "start": 19,
        "end": 40
      },
      "const": true,
      "declare": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "indexAccess",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 63
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
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 70,
              "end": 71
            },
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
            "accessibility": null,
            "static": false,
            "start": 70,
            "end": 80
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 85,
              "end": 86
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 88,
                "end": 94
              },
              "start": 86,
              "end": 94
            },
            "accessibility": null,
            "static": false,
            "start": 85,
            "end": 95
          }
        ],
        "start": 64,
        "end": 97
      },
      "declare": false,
      "start": 42,
      "end": 97
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "indexAccess",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 120
                },
                "typeArguments": null,
                "start": 109,
                "end": 120
              },
              "start": 107,
              "end": 120
            },
            "start": 103,
            "end": 120
          },
          "init": null,
          "definite": false,
          "start": 103,
          "end": 120
        }
      ],
      "declare": false,
      "start": 99,
      "end": 121
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 128
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 135
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 136,
              "end": 137
            },
            "optional": false,
            "computed": true,
            "start": 131,
            "end": 138
          },
          "definite": false,
          "start": 127,
          "end": 138
        }
      ],
      "declare": false,
      "start": 123,
      "end": 139
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 145
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 152
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 153,
              "end": 154
            },
            "optional": false,
            "computed": true,
            "start": 148,
            "end": 155
          },
          "definite": false,
          "start": 144,
          "end": 155
        }
      ],
      "declare": false,
      "start": 140,
      "end": 156
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 164
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 171
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "numbers",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 179
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "zero",
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 184
              },
              "optional": false,
              "computed": false,
              "start": 172,
              "end": 184
            },
            "optional": false,
            "computed": true,
            "start": 167,
            "end": 185
          },
          "definite": false,
          "start": 162,
          "end": 185
        }
      ],
      "declare": false,
      "start": 158,
      "end": 186
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n1",
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 193
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 196,
              "end": 200
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "numbers",
                "optional": false,
                "typeAnnotation": null,
                "start": 201,
                "end": 208
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "one",
                "optional": false,
                "typeAnnotation": null,
                "start": 209,
                "end": 212
              },
              "optional": false,
              "computed": false,
              "start": 201,
              "end": 212
            },
            "optional": false,
            "computed": true,
            "start": 196,
            "end": 213
          },
          "definite": false,
          "start": 191,
          "end": 213
        }
      ],
      "declare": false,
      "start": 187,
      "end": 214
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 222
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 229
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "numbers",
                "optional": false,
                "typeAnnotation": null,
                "start": 230,
                "end": 237
              },
              "property": {
                "type": "Literal",
                "value": "zero",
                "raw": "\"zero\"",
                "start": 238,
                "end": 244
              },
              "optional": false,
              "computed": true,
              "start": 230,
              "end": 245
            },
            "optional": false,
            "computed": true,
            "start": 225,
            "end": 246
          },
          "definite": false,
          "start": 220,
          "end": 246
        }
      ],
      "declare": false,
      "start": 216,
      "end": 247
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n2",
            "optional": false,
            "typeAnnotation": null,
            "start": 252,
            "end": 254
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 261
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "numbers",
                "optional": false,
                "typeAnnotation": null,
                "start": 262,
                "end": 269
              },
              "property": {
                "type": "Literal",
                "value": "one",
                "raw": "\"one\"",
                "start": 270,
                "end": 275
              },
              "optional": false,
              "computed": true,
              "start": 262,
              "end": 276
            },
            "optional": false,
            "computed": true,
            "start": 257,
            "end": 277
          },
          "definite": false,
          "start": 252,
          "end": 277
        }
      ],
      "declare": false,
      "start": 248,
      "end": 278
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "numbersNotConst",
        "optional": false,
        "typeAnnotation": null,
        "start": 285,
        "end": 300
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "zero",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 311
            },
            "initializer": null,
            "computed": false,
            "start": 307,
            "end": 311
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 320
            },
            "initializer": null,
            "computed": false,
            "start": 317,
            "end": 320
          }
        ],
        "start": 301,
        "end": 322
      },
      "const": false,
      "declare": false,
      "start": 280,
      "end": 322
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s3",
            "optional": false,
            "typeAnnotation": null,
            "start": 328,
            "end": 330
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 337
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "numbersNotConst",
                "optional": false,
                "typeAnnotation": null,
                "start": 338,
                "end": 353
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "zero",
                "optional": false,
                "typeAnnotation": null,
                "start": 354,
                "end": 358
              },
              "optional": false,
              "computed": false,
              "start": 338,
              "end": 358
            },
            "optional": false,
            "computed": true,
            "start": 333,
            "end": 359
          },
          "definite": false,
          "start": 328,
          "end": 359
        }
      ],
      "declare": false,
      "start": 324,
      "end": 360
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n3",
            "optional": false,
            "typeAnnotation": null,
            "start": 365,
            "end": 367
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 370,
              "end": 374
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "numbersNotConst",
                "optional": false,
                "typeAnnotation": null,
                "start": 375,
                "end": 390
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "one",
                "optional": false,
                "typeAnnotation": null,
                "start": 391,
                "end": 394
              },
              "optional": false,
              "computed": false,
              "start": 375,
              "end": 394
            },
            "optional": false,
            "computed": true,
            "start": 370,
            "end": 395
          },
          "definite": false,
          "start": 365,
          "end": 395
        }
      ],
      "declare": false,
      "start": 361,
      "end": 396
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 396
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 6,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 11,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "zero",
    "start": 25,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 35,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 42,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "indexAccess",
    "start": 52,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 70,
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
    "type": "Numeric",
    "value": "1",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 99,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 103,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "indexAccess",
    "start": 109,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 123,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 131,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 135,
    "end": 136
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 140,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 148,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 152,
    "end": 153
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 158,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 162,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 167,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 172,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "zero",
    "start": 180,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 187,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "n1",
    "start": 191,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 196,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 201,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 209,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 216,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 220,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 225,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 230,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 237,
    "end": 238
  },
  {
    "type": "String",
    "value": "\"zero\"",
    "start": 238,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 248,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "n2",
    "start": 252,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 257,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 262,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 269,
    "end": 270
  },
  {
    "type": "String",
    "value": "\"one\"",
    "start": 270,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 280,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "numbersNotConst",
    "start": 285,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "zero",
    "start": 307,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 317,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 324,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 328,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 333,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "numbersNotConst",
    "start": 338,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "zero",
    "start": 354,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 361,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "n3",
    "start": 365,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 370,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "numbersNotConst",
    "start": 375,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 391,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 395,
    "end": 396
  }
]
```
