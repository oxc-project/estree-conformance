__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 19
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 23,
              "end": 26
            },
            "start": 21,
            "end": 26
          },
          "start": 20,
          "end": 26
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 29,
          "end": 33
        },
        "start": 27,
        "end": 33
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 34
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "takeTwo",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 59
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 63,
              "end": 66
            },
            "start": 61,
            "end": 66
          },
          "start": 60,
          "end": 66
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 71,
              "end": 74
            },
            "start": 69,
            "end": 74
          },
          "start": 68,
          "end": 74
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 77,
          "end": 81
        },
        "start": 75,
        "end": 81
      },
      "body": null,
      "expression": false,
      "start": 35,
      "end": 82
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withRest",
        "optional": false,
        "typeAnnotation": null,
        "start": 100,
        "end": 108
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 112,
              "end": 115
            },
            "start": 110,
            "end": 115
          },
          "start": 109,
          "end": 115
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 124
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 131
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 132,
                    "end": 135
                  }
                ],
                "start": 131,
                "end": 136
              },
              "start": 126,
              "end": 136
            },
            "start": 124,
            "end": 136
          },
          "value": null,
          "start": 117,
          "end": 136
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 139,
          "end": 143
        },
        "start": 137,
        "end": 143
      },
      "body": null,
      "expression": false,
      "start": 83,
      "end": 144
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
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 160,
                  "end": 166
                },
                "start": 160,
                "end": 168
              },
              "start": 158,
              "end": 168
            },
            "start": 157,
            "end": 168
          },
          "init": null,
          "definite": false,
          "start": 157,
          "end": 168
        }
      ],
      "declare": true,
      "start": 145,
      "end": 169
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 171,
          "end": 173
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 174,
            "end": 175
          }
        ],
        "optional": false,
        "start": 171,
        "end": 176
      },
      "directive": null,
      "start": 171,
      "end": 176
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 189,
          "end": 191
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 192,
            "end": 193
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 195,
            "end": 196
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 198,
            "end": 199
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 201,
            "end": 202
          }
        ],
        "optional": false,
        "start": 189,
        "end": 203
      },
      "directive": null,
      "start": 189,
      "end": 203
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "takeTwo",
          "optional": false,
          "typeAnnotation": null,
          "start": 204,
          "end": 211
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 212,
            "end": 213
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 215,
            "end": 216
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 218,
            "end": 219
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 221,
            "end": 222
          }
        ],
        "optional": false,
        "start": 204,
        "end": 223
      },
      "directive": null,
      "start": 204,
      "end": 223
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "withRest",
          "optional": false,
          "typeAnnotation": null,
          "start": 224,
          "end": 232
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 233,
            "end": 236
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 241,
              "end": 242
            },
            "start": 238,
            "end": 242
          }
        ],
        "optional": false,
        "start": 224,
        "end": 243
      },
      "directive": null,
      "start": 224,
      "end": 244
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "withRest",
          "optional": false,
          "typeAnnotation": null,
          "start": 257,
          "end": 265
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 257,
        "end": 267
      },
      "directive": null,
      "start": 257,
      "end": 268
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "withRest",
          "optional": false,
          "typeAnnotation": null,
          "start": 269,
          "end": 277
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 281,
              "end": 282
            },
            "start": 278,
            "end": 282
          }
        ],
        "optional": false,
        "start": 269,
        "end": 283
      },
      "directive": null,
      "start": 269,
      "end": 284
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 285
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 17,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 23,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 29,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 35,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 43,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "takeTwo",
    "start": 52,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 63,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 71,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
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
    "value": "void",
    "start": 77,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 83,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 91,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "withRest",
    "start": 100,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 112,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 117,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 120,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 126,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 132,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 139,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 145,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 153,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 160,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 171,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 189,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 191,
    "end": 192
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 193,
    "end": 194
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 196,
    "end": 197
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 199,
    "end": 200
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "takeTwo",
    "start": 204,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 211,
    "end": 212
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 213,
    "end": 214
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 216,
    "end": 217
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 219,
    "end": 220
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "withRest",
    "start": 224,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 232,
    "end": 233
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 233,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 238,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "withRest",
    "start": 257,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "withRest",
    "start": 269,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 278,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  }
]
```
