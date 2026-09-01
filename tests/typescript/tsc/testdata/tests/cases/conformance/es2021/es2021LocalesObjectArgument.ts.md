__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 10
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 21
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Locale",
                "optional": false,
                "typeAnnotation": null,
                "start": 22,
                "end": 28
              },
              "optional": false,
              "computed": false,
              "start": 17,
              "end": 28
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "en-US",
                "raw": "\"en-US\"",
                "start": 29,
                "end": 36
              }
            ],
            "start": 13,
            "end": 37
          },
          "definite": false,
          "start": 6,
          "end": 37
        }
      ],
      "declare": false,
      "start": 0,
      "end": 38
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
            "name": "deDE",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 49
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 60
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Locale",
                "optional": false,
                "typeAnnotation": null,
                "start": 61,
                "end": 67
              },
              "optional": false,
              "computed": false,
              "start": 56,
              "end": 67
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "de-DE",
                "raw": "\"de-DE\"",
                "start": 68,
                "end": 75
              }
            ],
            "start": 52,
            "end": 76
          },
          "definite": false,
          "start": 45,
          "end": 76
        }
      ],
      "declare": false,
      "start": 39,
      "end": 77
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
            "name": "jaJP",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 88
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 99
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Locale",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 106
              },
              "optional": false,
              "computed": false,
              "start": 95,
              "end": 106
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "ja-JP",
                "raw": "\"ja-JP\"",
                "start": 107,
                "end": 114
              }
            ],
            "start": 91,
            "end": 115
          },
          "definite": false,
          "start": 84,
          "end": 115
        }
      ],
      "declare": false,
      "start": 78,
      "end": 116
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 126
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "ListFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 137
          },
          "optional": false,
          "computed": false,
          "start": 122,
          "end": 137
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 138,
            "end": 142
          }
        ],
        "start": 118,
        "end": 143
      },
      "directive": null,
      "start": 118,
      "end": 144
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 153
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "ListFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 164
          },
          "optional": false,
          "computed": false,
          "start": 149,
          "end": 164
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 166,
                "end": 170
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 176
              }
            ],
            "start": 165,
            "end": 177
          }
        ],
        "start": 145,
        "end": 178
      },
      "directive": null,
      "start": 145,
      "end": 179
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 184
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ListFormat",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 195
            },
            "optional": false,
            "computed": false,
            "start": 180,
            "end": 195
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 214
          },
          "optional": false,
          "computed": false,
          "start": 180,
          "end": 214
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 219
          }
        ],
        "optional": false,
        "start": 180,
        "end": 220
      },
      "directive": null,
      "start": 180,
      "end": 221
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 226
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ListFormat",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 237
            },
            "optional": false,
            "computed": false,
            "start": 222,
            "end": 237
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 256
          },
          "optional": false,
          "computed": false,
          "start": 222,
          "end": 256
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 258,
                "end": 262
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 264,
                "end": 268
              }
            ],
            "start": 257,
            "end": 269
          }
        ],
        "optional": false,
        "start": 222,
        "end": 270
      },
      "directive": null,
      "start": 222,
      "end": 271
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 271
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 6,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 13,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 17,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "Locale",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29
  },
  {
    "type": "String",
    "value": "\"en-US\"",
    "start": 29,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 39,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 45,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 52,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 56,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "Locale",
    "start": 61,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "String",
    "value": "\"de-DE\"",
    "start": 68,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 78,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 84,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 91,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 95,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "Locale",
    "start": 100,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 106,
    "end": 107
  },
  {
    "type": "String",
    "value": "\"ja-JP\"",
    "start": 107,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 118,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 122,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "ListFormat",
    "start": 127,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 138,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 145,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 149,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "ListFormat",
    "start": 154,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 166,
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
    "value": "jaJP",
    "start": 172,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 180,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "ListFormat",
    "start": 185,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 196,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 215,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 222,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "ListFormat",
    "start": 227,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 238,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 258,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 264,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  }
]
```
