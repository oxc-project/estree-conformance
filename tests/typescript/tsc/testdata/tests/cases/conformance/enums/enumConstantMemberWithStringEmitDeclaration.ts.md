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
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 7
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
              "start": 14,
              "end": 15
            },
            "initializer": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 18,
              "end": 21
            },
            "computed": false,
            "start": 14,
            "end": 21
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 28
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 31,
                "end": 34
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "2",
                "raw": "\"2\"",
                "start": 37,
                "end": 40
              },
              "start": 31,
              "end": 40
            },
            "computed": false,
            "start": 27,
            "end": 40
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 47
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 50,
                  "end": 53
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": "2",
                  "raw": "\"2\"",
                  "start": 56,
                  "end": 59
                },
                "start": 50,
                "end": 59
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "3",
                "raw": "\"3\"",
                "start": 62,
                "end": 65
              },
              "start": 50,
              "end": 65
            },
            "computed": false,
            "start": 46,
            "end": 65
          }
        ],
        "start": 8,
        "end": 67
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 67
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 76
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
              "start": 83,
              "end": 84
            },
            "initializer": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 87,
              "end": 90
            },
            "computed": false,
            "start": 83,
            "end": 90
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 97
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 100,
                "end": 103
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "2",
                "raw": "\"2\"",
                "start": 106,
                "end": 109
              },
              "start": 100,
              "end": 109
            },
            "computed": false,
            "start": 96,
            "end": 109
          }
        ],
        "start": 77,
        "end": 111
      },
      "const": false,
      "declare": false,
      "start": 69,
      "end": 111
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 120
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
              "start": 127,
              "end": 128
            },
            "initializer": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 131,
              "end": 134
            },
            "computed": false,
            "start": 127,
            "end": 134
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 141
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 144,
                "end": 147
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "2",
                "raw": "\"2\"",
                "start": 150,
                "end": 153
              },
              "start": 144,
              "end": 153
            },
            "computed": false,
            "start": 140,
            "end": 153
          }
        ],
        "start": 121,
        "end": 155
      },
      "const": false,
      "declare": false,
      "start": 113,
      "end": 155
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 164
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
              "start": 171,
              "end": 172
            },
            "initializer": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 175,
              "end": 178
            },
            "computed": false,
            "start": 171,
            "end": 178
          }
        ],
        "start": 165,
        "end": 180
      },
      "const": false,
      "declare": false,
      "start": 157,
      "end": 180
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 189
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
              "start": 196,
              "end": 197
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 200,
                "end": 203
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "2",
                "raw": "\"2\"",
                "start": 206,
                "end": 209
              },
              "start": 200,
              "end": 209
            },
            "computed": false,
            "start": 196,
            "end": 209
          }
        ],
        "start": 190,
        "end": 211
      },
      "const": false,
      "declare": false,
      "start": 182,
      "end": 211
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T6",
        "optional": false,
        "typeAnnotation": null,
        "start": 226,
        "end": 228
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
              "start": 235,
              "end": 236
            },
            "initializer": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 239,
              "end": 242
            },
            "computed": false,
            "start": 235,
            "end": 242
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 248,
              "end": 249
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 252,
                "end": 255
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "2",
                "raw": "\"2\"",
                "start": 258,
                "end": 261
              },
              "start": 252,
              "end": 261
            },
            "computed": false,
            "start": 248,
            "end": 261
          }
        ],
        "start": 229,
        "end": 263
      },
      "const": false,
      "declare": true,
      "start": 213,
      "end": 263
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 263
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
    "value": "T1",
    "start": 5,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 18,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 29,
    "end": 30
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 31,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 35,
    "end": 36
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 37,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 48,
    "end": 49
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 50,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 54,
    "end": 55
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 56,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 60,
    "end": 61
  },
  {
    "type": "String",
    "value": "\"3\"",
    "start": 62,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 69,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 74,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 85,
    "end": 86
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 98,
    "end": 99
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 100,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 104,
    "end": 105
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 106,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 113,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 118,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "String",
    "value": "\"1\"",
    "start": 131,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 142,
    "end": 143
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 144,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 148,
    "end": 149
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 150,
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
    "value": "enum",
    "start": 157,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 162,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 173,
    "end": 174
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 175,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 182,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "T5",
    "start": 187,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 198,
    "end": 199
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 200,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 204,
    "end": 205
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 206,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 213,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 221,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "T6",
    "start": 226,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 237,
    "end": 238
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 239,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 250,
    "end": 251
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 252,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 256,
    "end": 257
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 258,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 262,
    "end": 263
  }
]
```
