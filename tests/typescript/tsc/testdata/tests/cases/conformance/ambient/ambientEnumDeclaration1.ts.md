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
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 145,
        "end": 146
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
              "start": 153,
              "end": 154
            },
            "initializer": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 157,
              "end": 159
            },
            "computed": false,
            "start": 153,
            "end": 159
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 166
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 169,
                "end": 171
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 174,
                "end": 175
              },
              "start": 169,
              "end": 175
            },
            "computed": false,
            "start": 165,
            "end": 175
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 182
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 186
            },
            "computed": false,
            "start": 181,
            "end": 186
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 193
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 197,
                "end": 198
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 202,
                "end": 203
              },
              "start": 196,
              "end": 203
            },
            "computed": false,
            "start": 192,
            "end": 203
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 210
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 213,
                "end": 215
              },
              "operator": "<<",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 219,
                  "end": 220
                },
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "value": 8,
                  "raw": "8",
                  "start": 223,
                  "end": 224
                },
                "start": 219,
                "end": 224
              },
              "start": 213,
              "end": 224
            },
            "computed": false,
            "start": 209,
            "end": 224
          }
        ],
        "start": 147,
        "end": 227
      },
      "const": false,
      "declare": true,
      "start": 132,
      "end": 227
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 132,
  "end": 227
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 132,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 140,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 155,
    "end": 156
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 157,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "Numeric",
    "value": "10",
    "start": 169,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 172,
    "end": 173
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 200,
    "end": 201
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 211,
    "end": 212
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 213,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 216,
    "end": 218
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 221,
    "end": 222
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 226,
    "end": 227
  }
]
```
