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
            "name": "iter",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 66
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 83,
                    "end": 89
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "asyncIterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 90,
                    "end": 103
                  },
                  "optional": false,
                  "computed": false,
                  "start": 83,
                  "end": 103
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": true,
                  "async": true,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 108,
                          "end": 114
                        },
                        "start": 106,
                        "end": 114
                      },
                      "start": 105,
                      "end": 114
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "YieldExpression",
                          "delegate": false,
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 132,
                            "end": 133
                          },
                          "start": 126,
                          "end": 133
                        },
                        "directive": null,
                        "start": 126,
                        "end": 134
                      }
                    ],
                    "start": 116,
                    "end": 140
                  },
                  "expression": false,
                  "start": 104,
                  "end": 140
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 75,
                "end": 140
              }
            ],
            "start": 69,
            "end": 142
          },
          "definite": false,
          "start": 62,
          "end": 142
        }
      ],
      "declare": false,
      "start": 56,
      "end": 143
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 163
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 171
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 173,
              "end": 176
            },
            "start": 171,
            "end": 176
          },
          "value": null,
          "start": 164,
          "end": 176
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 179,
          "end": 182
        },
        "start": 177,
        "end": 182
      },
      "body": null,
      "expression": false,
      "start": 145,
      "end": 183
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 202
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 228,
                    "end": 229
                  },
                  "init": null,
                  "definite": false,
                  "start": 228,
                  "end": 229
                }
              ],
              "declare": false,
              "start": 222,
              "end": 229
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "iter",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 237
            },
            "body": {
              "type": "EmptyStatement",
              "start": 238,
              "end": 239
            },
            "start": 211,
            "end": 239
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "iter",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 256
              },
              "start": 245,
              "end": 256
            },
            "directive": null,
            "start": 245,
            "end": 257
          }
        ],
        "start": 205,
        "end": 259
      },
      "expression": false,
      "start": 185,
      "end": 259
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 259
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 56,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "iter",
    "start": 62,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 75,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "asyncIterator",
    "start": 90,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 108,
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
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 126,
    "end": 131
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 145,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 153,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 164,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 167,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 173,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 179,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 185,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 191,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 211,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 215,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 222,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 230,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "iter",
    "start": 233,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 245,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "iter",
    "start": 252,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259
  }
]
```
