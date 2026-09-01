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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 72,
                  "end": 75
                },
                "start": 72,
                "end": 77
              },
              "start": 70,
              "end": 77
            },
            "start": 68,
            "end": 77
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 81,
                "end": 82
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 83,
                "end": 84
              },
              {
                "type": "Literal",
                "value": "3",
                "raw": "\"3\"",
                "start": 85,
                "end": 88
              }
            ],
            "start": 80,
            "end": 89
          },
          "definite": false,
          "start": 68,
          "end": 89
        }
      ],
      "declare": false,
      "start": 64,
      "end": 90
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func1",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 107
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 114,
                "end": 117
              },
              "start": 114,
              "end": 119
            },
            "start": 113,
            "end": 119
          },
          "start": 108,
          "end": 119
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "stuff",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 135
            },
            "start": 123,
            "end": 136
          }
        ],
        "start": 121,
        "end": 138
      },
      "expression": false,
      "start": 93,
      "end": 138
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func2",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 154
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 162,
              "end": 168
            },
            "start": 161,
            "end": 168
          },
          "start": 155,
          "end": 168
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 177,
              "end": 183
            },
            "start": 176,
            "end": 183
          },
          "start": 170,
          "end": 183
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 192,
              "end": 198
            },
            "start": 191,
            "end": 198
          },
          "start": 185,
          "end": 198
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "func1",
                "optional": false,
                "typeAnnotation": null,
                "start": 210,
                "end": 215
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "stuff1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 217,
                      "end": 223
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "stuff2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 225,
                      "end": 231
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "stuff3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 233,
                      "end": 239
                    }
                  ],
                  "start": 216,
                  "end": 240
                }
              ],
              "optional": false,
              "start": 210,
              "end": 241
            },
            "start": 203,
            "end": 242
          }
        ],
        "start": 200,
        "end": 244
      },
      "expression": false,
      "start": 140,
      "end": 244
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 64,
  "end": 244
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 64,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 72,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 80,
    "end": 81
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 82,
    "end": 83
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85
  },
  {
    "type": "String",
    "value": "\"3\"",
    "start": 85,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 93,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "func1",
    "start": 102,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 108,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 114,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 121,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 123,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 130,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 140,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "func2",
    "start": 149,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "stuff1",
    "start": 155,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 162,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "stuff2",
    "start": 170,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 177,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "stuff3",
    "start": 185,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 192,
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
    "value": "{",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 203,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "func1",
    "start": 210,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "stuff1",
    "start": 217,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "stuff2",
    "start": 225,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "stuff3",
    "start": 233,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 243,
    "end": 244
  }
]
```
