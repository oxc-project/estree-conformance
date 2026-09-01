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
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 72
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 75,
                "end": 78
              },
              "operator": "-",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 81,
                "end": 84
              },
              "start": 75,
              "end": 84
            },
            "computed": false,
            "start": 71,
            "end": 84
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 91
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 94,
                "end": 97
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 100,
                "end": 101
              },
              "start": 94,
              "end": 101
            },
            "computed": false,
            "start": 90,
            "end": 101
          }
        ],
        "start": 8,
        "end": 103
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 103
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 112
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
              "start": 119,
              "end": 120
            },
            "initializer": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 123,
              "end": 126
            },
            "computed": false,
            "start": 119,
            "end": 126
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 133
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 136,
                "end": 139
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "2",
                "raw": "\"2\"",
                "start": 142,
                "end": 145
              },
              "start": 136,
              "end": 145
            },
            "computed": false,
            "start": 132,
            "end": 145
          }
        ],
        "start": 113,
        "end": 147
      },
      "const": false,
      "declare": false,
      "start": 105,
      "end": 147
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 156
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
              "start": 163,
              "end": 164
            },
            "initializer": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 167,
              "end": 170
            },
            "computed": false,
            "start": 163,
            "end": 170
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 177
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 180,
                "end": 183
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "2",
                "raw": "\"2\"",
                "start": 186,
                "end": 189
              },
              "start": 180,
              "end": 189
            },
            "computed": false,
            "start": 176,
            "end": 189
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 196
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 199,
              "end": 200
            },
            "computed": false,
            "start": 195,
            "end": 200
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 207
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 210,
                "end": 211
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 214,
                "end": 215
              },
              "start": 210,
              "end": 215
            },
            "computed": false,
            "start": 206,
            "end": 215
          }
        ],
        "start": 157,
        "end": 217
      },
      "const": false,
      "declare": false,
      "start": 149,
      "end": 217
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 224,
        "end": 226
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
              "start": 233,
              "end": 234
            },
            "initializer": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 237,
              "end": 240
            },
            "computed": false,
            "start": 233,
            "end": 240
          }
        ],
        "start": 227,
        "end": 242
      },
      "const": false,
      "declare": false,
      "start": 219,
      "end": 242
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 249,
        "end": 251
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
              "start": 258,
              "end": 259
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 262,
                "end": 265
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "2",
                "raw": "\"2\"",
                "start": 268,
                "end": 271
              },
              "start": 262,
              "end": 271
            },
            "computed": false,
            "start": 258,
            "end": 271
          }
        ],
        "start": 252,
        "end": 273
      },
      "const": false,
      "declare": false,
      "start": 244,
      "end": 273
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T6",
        "optional": false,
        "typeAnnotation": null,
        "start": 288,
        "end": 290
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
              "start": 297,
              "end": 298
            },
            "initializer": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 301,
              "end": 304
            },
            "computed": false,
            "start": 297,
            "end": 304
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 311
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 314,
                "end": 317
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "2",
                "raw": "\"2\"",
                "start": 320,
                "end": 323
              },
              "start": 314,
              "end": 323
            },
            "computed": false,
            "start": 310,
            "end": 323
          }
        ],
        "start": 291,
        "end": 325
      },
      "const": false,
      "declare": true,
      "start": 275,
      "end": 325
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 325
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
    "value": ",",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 73,
    "end": 74
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 75,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 79,
    "end": 80
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 81,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 92,
    "end": 93
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 94,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 98,
    "end": 99
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 105,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 110,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 121,
    "end": 122
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 123,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 136,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 140,
    "end": 141
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 142,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 149,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 154,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 165,
    "end": 166
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 167,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 178,
    "end": 179
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 180,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 184,
    "end": 185
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 186,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 197,
    "end": 198
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 208,
    "end": 209
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 212,
    "end": 213
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 219,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 224,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 235,
    "end": 236
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 237,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 241,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 244,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "T5",
    "start": 249,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 260,
    "end": 261
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 262,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 266,
    "end": 267
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 268,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 275,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 283,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "T6",
    "start": 288,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 299,
    "end": 300
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 301,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 312,
    "end": 313
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 314,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 318,
    "end": 319
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 320,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 324,
    "end": 325
  }
]
```
