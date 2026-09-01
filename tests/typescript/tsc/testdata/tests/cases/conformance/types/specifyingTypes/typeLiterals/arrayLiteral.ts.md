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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 38
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 41,
            "end": 43
          },
          "definite": false,
          "start": 37,
          "end": 43
        }
      ],
      "declare": false,
      "start": 33,
      "end": 44
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 50
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 62
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 63,
                "end": 64
              }
            ],
            "start": 53,
            "end": 65
          },
          "definite": false,
          "start": 49,
          "end": 65
        }
      ],
      "declare": false,
      "start": 45,
      "end": 66
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 73
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 77,
                "end": 78
              }
            ],
            "start": 76,
            "end": 79
          },
          "definite": false,
          "start": 72,
          "end": 79
        }
      ],
      "declare": false,
      "start": 68,
      "end": 80
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 86
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 90,
                "end": 91
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 93,
                "end": 94
              }
            ],
            "start": 89,
            "end": 95
          },
          "definite": false,
          "start": 85,
          "end": 95
        }
      ],
      "declare": false,
      "start": 81,
      "end": 96
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 102
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 114
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 115,
                  "end": 121
                }
              ],
              "start": 114,
              "end": 122
            },
            "arguments": [],
            "start": 105,
            "end": 124
          },
          "definite": false,
          "start": 101,
          "end": 124
        }
      ],
      "declare": false,
      "start": 97,
      "end": 125
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 135,
                  "end": 141
                },
                "start": 135,
                "end": 143
              },
              "start": 133,
              "end": 143
            },
            "start": 131,
            "end": 143
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 146,
            "end": 148
          },
          "definite": false,
          "start": 131,
          "end": 148
        }
      ],
      "declare": false,
      "start": 127,
      "end": 149
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 158,
                  "end": 164
                },
                "start": 158,
                "end": 166
              },
              "start": 156,
              "end": 166
            },
            "start": 154,
            "end": 166
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 178
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 179,
                "end": 180
              }
            ],
            "start": 169,
            "end": 181
          },
          "definite": false,
          "start": 154,
          "end": 181
        }
      ],
      "declare": false,
      "start": 150,
      "end": 182
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 192,
                  "end": 198
                },
                "start": 192,
                "end": 200
              },
              "start": 190,
              "end": 200
            },
            "start": 188,
            "end": 200
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 204,
                "end": 205
              }
            ],
            "start": 203,
            "end": 206
          },
          "definite": false,
          "start": 188,
          "end": 206
        }
      ],
      "declare": false,
      "start": 184,
      "end": 207
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 216,
                  "end": 222
                },
                "start": 216,
                "end": 224
              },
              "start": 214,
              "end": 224
            },
            "start": 212,
            "end": 224
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 228,
                "end": 229
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 231,
                "end": 232
              }
            ],
            "start": 227,
            "end": 233
          },
          "definite": false,
          "start": 212,
          "end": 233
        }
      ],
      "declare": false,
      "start": 208,
      "end": 234
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 243,
                  "end": 249
                },
                "start": 243,
                "end": 251
              },
              "start": 241,
              "end": 251
            },
            "start": 239,
            "end": 251
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 263
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 264,
                  "end": 270
                }
              ],
              "start": 263,
              "end": 271
            },
            "arguments": [],
            "start": 254,
            "end": 273
          },
          "definite": false,
          "start": 239,
          "end": 273
        }
      ],
      "declare": false,
      "start": 235,
      "end": 274
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 33,
  "end": 274
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 33,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 45,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 53,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 57,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 68,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 76,
    "end": 77
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 81,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 89,
    "end": 90
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 91,
    "end": 92
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 97,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 105,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 109,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 115,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 127,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 131,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 135,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 150,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 154,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 169,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 173,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 178,
    "end": 179
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 184,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 188,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 192,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 203,
    "end": 204
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 204,
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
    "value": ";",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 208,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 212,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 216,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 227,
    "end": 228
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 229,
    "end": 230
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 235,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 239,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 243,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 254,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 258,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 264,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274
  }
]
```
