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
        "name": "ENUM1",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 38
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
              "start": 41,
              "end": 42
            },
            "initializer": null,
            "computed": false,
            "start": 41,
            "end": 42
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 45
            },
            "initializer": null,
            "computed": false,
            "start": 44,
            "end": 45
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 47,
              "end": 49
            },
            "initializer": null,
            "computed": false,
            "start": 47,
            "end": 49
          }
        ],
        "start": 39,
        "end": 51
      },
      "const": false,
      "declare": false,
      "start": 28,
      "end": 51
    },
    {
      "type": "EmptyStatement",
      "start": 51,
      "end": 52
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
            "name": "ResultIsNumber1",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 90
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM1",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 99
            },
            "prefix": true,
            "start": 93,
            "end": 99
          },
          "definite": false,
          "start": 75,
          "end": 99
        }
      ],
      "declare": false,
      "start": 71,
      "end": 100
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
            "name": "ResultIsNumber2",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 146
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "typeAnnotation": null,
                "start": 150,
                "end": 155
              },
              "property": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 156,
                "end": 159
              },
              "optional": false,
              "computed": true,
              "start": 150,
              "end": 160
            },
            "prefix": true,
            "start": 149,
            "end": 160
          },
          "definite": false,
          "start": 131,
          "end": 160
        }
      ],
      "declare": false,
      "start": 127,
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
            "name": "ResultIsNumber3",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 181
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ENUM1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 186,
                  "end": 191
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 193
                },
                "optional": false,
                "computed": false,
                "start": 186,
                "end": 193
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ENUM1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 201
                },
                "property": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 202,
                  "end": 205
                },
                "optional": false,
                "computed": true,
                "start": 196,
                "end": 206
              },
              "start": 186,
              "end": 206
            },
            "prefix": true,
            "start": 184,
            "end": 207
          },
          "definite": false,
          "start": 166,
          "end": 207
        }
      ],
      "declare": false,
      "start": 162,
      "end": 208
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
            "name": "ResultIsNumber4",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 253
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "UnaryExpression",
              "operator": "~",
              "argument": {
                "type": "UnaryExpression",
                "operator": "~",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ENUM1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 260,
                      "end": 265
                    },
                    "property": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "\"A\"",
                      "start": 266,
                      "end": 269
                    },
                    "optional": false,
                    "computed": true,
                    "start": 260,
                    "end": 270
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ENUM1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 273,
                      "end": 278
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 279,
                      "end": 280
                    },
                    "optional": false,
                    "computed": false,
                    "start": 273,
                    "end": 280
                  },
                  "start": 260,
                  "end": 280
                },
                "prefix": true,
                "start": 258,
                "end": 281
              },
              "prefix": true,
              "start": 257,
              "end": 281
            },
            "prefix": true,
            "start": 256,
            "end": 281
          },
          "definite": false,
          "start": 238,
          "end": 281
        }
      ],
      "declare": false,
      "start": 234,
      "end": 282
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ENUM1",
          "optional": false,
          "typeAnnotation": null,
          "start": 314,
          "end": 319
        },
        "prefix": true,
        "start": 313,
        "end": 319
      },
      "directive": null,
      "start": 313,
      "end": 320
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null,
            "start": 322,
            "end": 327
          },
          "property": {
            "type": "Literal",
            "value": "A",
            "raw": "\"A\"",
            "start": 328,
            "end": 331
          },
          "optional": false,
          "computed": true,
          "start": 322,
          "end": 332
        },
        "prefix": true,
        "start": 321,
        "end": 332
      },
      "directive": null,
      "start": 321,
      "end": 333
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "typeAnnotation": null,
                "start": 335,
                "end": 340
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 341,
                "end": 342
              },
              "optional": false,
              "computed": false,
              "start": 335,
              "end": 342
            },
            "prefix": true,
            "start": 334,
            "end": 342
          },
          {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "typeAnnotation": null,
                "start": 345,
                "end": 350
              },
              "property": {
                "type": "Literal",
                "value": "B",
                "raw": "\"B\"",
                "start": 351,
                "end": 354
              },
              "optional": false,
              "computed": true,
              "start": 345,
              "end": 355
            },
            "prefix": true,
            "start": 344,
            "end": 355
          }
        ],
        "start": 334,
        "end": 355
      },
      "directive": null,
      "start": 334,
      "end": 356
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 28,
  "end": 356
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 28,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 33,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 45,
    "end": 46
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 47,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 71,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber1",
    "start": 75,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 94,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 127,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber2",
    "start": 131,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 150,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 155,
    "end": 156
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 156,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
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
    "value": "ResultIsNumber3",
    "start": 166,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 186,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 196,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 201,
    "end": 202
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 202,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 234,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "ResultIsNumber4",
    "start": 238,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 260,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 265,
    "end": 266
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 266,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 273,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 314,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 322,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 327,
    "end": 328
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 328,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 335,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "ENUM1",
    "start": 345,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 350,
    "end": 351
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 351,
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
  }
]
```
