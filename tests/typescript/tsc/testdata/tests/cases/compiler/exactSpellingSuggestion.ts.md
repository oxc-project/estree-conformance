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
        "name": "U8",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 100
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "BIT_0",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 112
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 115,
                "end": 116
              },
              "operator": "<<",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 120,
                "end": 121
              },
              "start": 115,
              "end": 121
            },
            "computed": false,
            "start": 107,
            "end": 121
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "BIT_1",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 132
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 135,
                "end": 136
              },
              "operator": "<<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 140,
                "end": 141
              },
              "start": 135,
              "end": 141
            },
            "computed": false,
            "start": 127,
            "end": 141
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "BIT_2",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 152
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 155,
                "end": 156
              },
              "operator": "<<",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 160,
                "end": 161
              },
              "start": 155,
              "end": 161
            },
            "computed": false,
            "start": 147,
            "end": 161
          }
        ],
        "start": 101,
        "end": 163
      },
      "const": false,
      "declare": false,
      "start": 93,
      "end": 163
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "U8",
          "optional": false,
          "typeAnnotation": null,
          "start": 165,
          "end": 167
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "bit_2",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 173
        },
        "optional": false,
        "computed": false,
        "start": 165,
        "end": 173
      },
      "directive": null,
      "start": 165,
      "end": 173
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 93,
  "end": 173
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 93,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "U8",
    "start": 98,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "BIT_0",
    "start": 107,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 113,
    "end": 114
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 117,
    "end": 119
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "BIT_1",
    "start": 127,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 133,
    "end": 134
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 137,
    "end": 139
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "BIT_2",
    "start": 147,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 153,
    "end": 154
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 157,
    "end": 159
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "U8",
    "start": 165,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "bit_2",
    "start": 168,
    "end": 173
  }
]
```
