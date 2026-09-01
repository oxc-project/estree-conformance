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
        "name": "e1",
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
            "initializer": null,
            "computed": false,
            "start": 14,
            "end": 15
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "initializer": null,
            "computed": false,
            "start": 21,
            "end": 22
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 29
            },
            "initializer": null,
            "computed": false,
            "start": 28,
            "end": 29
          }
        ],
        "start": 8,
        "end": 31
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e2",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 40
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
              "start": 47,
              "end": 48
            },
            "initializer": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 51,
              "end": 53
            },
            "computed": false,
            "start": 47,
            "end": 53
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 60
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 63,
                "end": 64
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 67,
                "end": 68
              },
              "start": 63,
              "end": 68
            },
            "computed": false,
            "start": 59,
            "end": 68
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 75
            },
            "initializer": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 78,
              "end": 80
            },
            "computed": false,
            "start": 74,
            "end": 80
          }
        ],
        "start": 41,
        "end": 83
      },
      "const": false,
      "declare": false,
      "start": 33,
      "end": 83
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e3",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 92
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
              "start": 99,
              "end": 100
            },
            "initializer": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 103,
              "end": 105
            },
            "computed": false,
            "start": 99,
            "end": 105
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 112
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 115,
                "end": 119
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "PI",
                "optional": false,
                "typeAnnotation": null,
                "start": 120,
                "end": 122
              },
              "optional": false,
              "computed": false,
              "start": 115,
              "end": 122
            },
            "computed": false,
            "start": 111,
            "end": 122
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 129
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 133
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 136,
                "end": 137
              },
              "start": 132,
              "end": 137
            },
            "computed": false,
            "start": 128,
            "end": 137
          }
        ],
        "start": 93,
        "end": 139
      },
      "const": false,
      "declare": false,
      "start": 85,
      "end": 139
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e4",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 148
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
              "start": 155,
              "end": 156
            },
            "initializer": null,
            "computed": false,
            "start": 155,
            "end": 156
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 163
            },
            "initializer": null,
            "computed": false,
            "start": 162,
            "end": 163
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 170
            },
            "initializer": null,
            "computed": false,
            "start": 169,
            "end": 170
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 177
            },
            "initializer": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 180,
              "end": 182
            },
            "computed": false,
            "start": 176,
            "end": 182
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 188,
              "end": 189
            },
            "initializer": null,
            "computed": false,
            "start": 188,
            "end": 189
          }
        ],
        "start": 149,
        "end": 191
      },
      "const": false,
      "declare": false,
      "start": 141,
      "end": 191
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e5",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 200
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "Friday",
              "raw": "\"Friday\"",
              "start": 207,
              "end": 215
            },
            "initializer": null,
            "computed": false,
            "start": 207,
            "end": 215
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "Saturday",
              "raw": "\"Saturday\"",
              "start": 221,
              "end": 231
            },
            "initializer": null,
            "computed": false,
            "start": 221,
            "end": 231
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "Sunday",
              "raw": "\"Sunday\"",
              "start": 237,
              "end": 245
            },
            "initializer": null,
            "computed": false,
            "start": 237,
            "end": 245
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "Weekend days",
              "raw": "\"Weekend days\"",
              "start": 251,
              "end": 265
            },
            "initializer": null,
            "computed": false,
            "start": 251,
            "end": 265
          }
        ],
        "start": 201,
        "end": 267
      },
      "const": false,
      "declare": false,
      "start": 193,
      "end": 267
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 269
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
    "value": "e1",
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
    "value": ",",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 33,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 38,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 49,
    "end": 50
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 51,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 65,
    "end": 66
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 76,
    "end": 77
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 78,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 85,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "e3",
    "start": 90,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 101,
    "end": 102
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 103,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 115,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "PI",
    "start": 120,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 134,
    "end": 135
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 141,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "e4",
    "start": 146,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 169,
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
    "value": "d",
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
    "type": "Numeric",
    "value": "10",
    "start": 180,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 193,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "e5",
    "start": 198,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "String",
    "value": "\"Friday\"",
    "start": 207,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 215,
    "end": 216
  },
  {
    "type": "String",
    "value": "\"Saturday\"",
    "start": 221,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 231,
    "end": 232
  },
  {
    "type": "String",
    "value": "\"Sunday\"",
    "start": 237,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 245,
    "end": 246
  },
  {
    "type": "String",
    "value": "\"Weekend days\"",
    "start": 251,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 266,
    "end": 267
  }
]
```
