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
        "name": "Nums",
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
              "name": "Zero",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 20
            },
            "initializer": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 23,
              "end": 24
            },
            "computed": false,
            "start": 16,
            "end": 24
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "One",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 33
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 36,
              "end": 37
            },
            "computed": false,
            "start": 30,
            "end": 37
          }
        ],
        "start": 10,
        "end": 40
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 40
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
            "start": 48,
            "end": 49
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Nums",
                "optional": false,
                "typeAnnotation": null,
                "start": 52,
                "end": 56
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Zero",
                "optional": false,
                "typeAnnotation": null,
                "start": 57,
                "end": 61
              },
              "optional": false,
              "computed": false,
              "start": 52,
              "end": 61
            },
            "consequent": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 64,
              "end": 67
            },
            "alternate": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 70,
              "end": 73
            },
            "start": 52,
            "end": 73
          },
          "definite": false,
          "start": 48,
          "end": 73
        }
      ],
      "declare": false,
      "start": 42,
      "end": 74
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
            "start": 81,
            "end": 82
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Nums",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 89
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "One",
                "optional": false,
                "typeAnnotation": null,
                "start": 90,
                "end": 93
              },
              "optional": false,
              "computed": false,
              "start": 85,
              "end": 93
            },
            "consequent": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 96,
              "end": 99
            },
            "alternate": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 102,
              "end": 105
            },
            "start": 85,
            "end": 105
          },
          "definite": false,
          "start": 81,
          "end": 105
        }
      ],
      "declare": false,
      "start": 75,
      "end": 106
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Nums",
          "optional": false,
          "typeAnnotation": null,
          "start": 112,
          "end": 116
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Zero",
          "optional": false,
          "typeAnnotation": null,
          "start": 117,
          "end": 121
        },
        "optional": false,
        "computed": false,
        "start": 112,
        "end": 121
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nums",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 133
            },
            "directive": null,
            "start": 129,
            "end": 134
          }
        ],
        "start": 123,
        "end": 136
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nums",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 152
            },
            "directive": null,
            "start": 148,
            "end": 153
          }
        ],
        "start": 142,
        "end": 155
      },
      "start": 108,
      "end": 155
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Nums",
          "optional": false,
          "typeAnnotation": null,
          "start": 162,
          "end": 166
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "One",
          "optional": false,
          "typeAnnotation": null,
          "start": 167,
          "end": 170
        },
        "optional": false,
        "computed": false,
        "start": 162,
        "end": 170
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nums",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 182
            },
            "directive": null,
            "start": 178,
            "end": 183
          }
        ],
        "start": 172,
        "end": 185
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nums",
              "optional": false,
              "typeAnnotation": null,
              "start": 197,
              "end": 201
            },
            "directive": null,
            "start": 197,
            "end": 202
          }
        ],
        "start": 191,
        "end": 204
      },
      "start": 158,
      "end": 204
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Strs",
        "optional": false,
        "typeAnnotation": null,
        "start": 212,
        "end": 216
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Empty",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 228
            },
            "initializer": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 231,
              "end": 233
            },
            "computed": false,
            "start": 223,
            "end": 233
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 240
            },
            "initializer": {
              "type": "Literal",
              "value": "A",
              "raw": "\"A\"",
              "start": 243,
              "end": 246
            },
            "computed": false,
            "start": 239,
            "end": 246
          }
        ],
        "start": 217,
        "end": 249
      },
      "const": false,
      "declare": false,
      "start": 207,
      "end": 249
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
            "start": 257,
            "end": 258
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Strs",
                "optional": false,
                "typeAnnotation": null,
                "start": 261,
                "end": 265
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Empty",
                "optional": false,
                "typeAnnotation": null,
                "start": 266,
                "end": 271
              },
              "optional": false,
              "computed": false,
              "start": 261,
              "end": 271
            },
            "consequent": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 274,
              "end": 277
            },
            "alternate": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 280,
              "end": 283
            },
            "start": 261,
            "end": 283
          },
          "definite": false,
          "start": 257,
          "end": 283
        }
      ],
      "declare": false,
      "start": 251,
      "end": 284
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
            "start": 291,
            "end": 292
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Strs",
                "optional": false,
                "typeAnnotation": null,
                "start": 295,
                "end": 299
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 300,
                "end": 301
              },
              "optional": false,
              "computed": false,
              "start": 295,
              "end": 301
            },
            "consequent": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 304,
              "end": 307
            },
            "alternate": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 310,
              "end": 313
            },
            "start": 295,
            "end": 313
          },
          "definite": false,
          "start": 291,
          "end": 313
        }
      ],
      "declare": false,
      "start": 285,
      "end": 314
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Strs",
          "optional": false,
          "typeAnnotation": null,
          "start": 320,
          "end": 324
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Empty",
          "optional": false,
          "typeAnnotation": null,
          "start": 325,
          "end": 330
        },
        "optional": false,
        "computed": false,
        "start": 320,
        "end": 330
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Strs",
              "optional": false,
              "typeAnnotation": null,
              "start": 338,
              "end": 342
            },
            "directive": null,
            "start": 338,
            "end": 343
          }
        ],
        "start": 332,
        "end": 345
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Strs",
              "optional": false,
              "typeAnnotation": null,
              "start": 357,
              "end": 361
            },
            "directive": null,
            "start": 357,
            "end": 362
          }
        ],
        "start": 351,
        "end": 364
      },
      "start": 316,
      "end": 364
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Strs",
          "optional": false,
          "typeAnnotation": null,
          "start": 371,
          "end": 375
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 376,
          "end": 377
        },
        "optional": false,
        "computed": false,
        "start": 371,
        "end": 377
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Strs",
              "optional": false,
              "typeAnnotation": null,
              "start": 385,
              "end": 389
            },
            "directive": null,
            "start": 385,
            "end": 390
          }
        ],
        "start": 379,
        "end": 392
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Strs",
              "optional": false,
              "typeAnnotation": null,
              "start": 404,
              "end": 408
            },
            "directive": null,
            "start": 404,
            "end": 409
          }
        ],
        "start": 398,
        "end": 411
      },
      "start": 367,
      "end": 411
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 411
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
    "value": "Nums",
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
    "value": "Zero",
    "start": 16,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 21,
    "end": 22
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "One",
    "start": 30,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 37,
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
    "value": "const",
    "start": 42,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "Nums",
    "start": 52,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "Zero",
    "start": 57,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 62,
    "end": 63
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 64,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 70,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 75,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "Nums",
    "start": 85,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "One",
    "start": 90,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 94,
    "end": 95
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 96,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 102,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 108,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "Nums",
    "start": 112,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "Zero",
    "start": 117,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "Nums",
    "start": 129,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 137,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "Nums",
    "start": 148,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 158,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "Nums",
    "start": 162,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "One",
    "start": 167,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "Nums",
    "start": 178,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 186,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "Nums",
    "start": 197,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 203,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 207,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "Strs",
    "start": 212,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "Empty",
    "start": 223,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 229,
    "end": 230
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 231,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 241,
    "end": 242
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 243,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 251,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "Strs",
    "start": 261,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "Empty",
    "start": 266,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 272,
    "end": 273
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 274,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 280,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 285,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "Strs",
    "start": 295,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 302,
    "end": 303
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 304,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 310,
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
    "value": "if",
    "start": 316,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "Strs",
    "start": 320,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "Empty",
    "start": 325,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "Strs",
    "start": 338,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 344,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 346,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "Strs",
    "start": 357,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 363,
    "end": 364
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 367,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "Strs",
    "start": 371,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "Strs",
    "start": 385,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 391,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 393,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "Strs",
    "start": 404,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 410,
    "end": 411
  }
]
```
