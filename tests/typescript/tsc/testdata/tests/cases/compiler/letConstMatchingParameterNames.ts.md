__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "parent",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 10
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 13,
            "end": 17
          },
          "definite": false,
          "start": 4,
          "end": 17
        }
      ],
      "declare": false,
      "start": 0,
      "end": 18
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
            "name": "parent2",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 32
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 35,
            "end": 39
          },
          "definite": false,
          "start": 25,
          "end": 39
        }
      ],
      "declare": false,
      "start": 19,
      "end": 40
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 61
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
              "start": 65,
              "end": 68
            },
            "start": 63,
            "end": 68
          },
          "start": 62,
          "end": 68
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 41,
      "end": 70
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 82
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 106
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 109,
                  "end": 110
                },
                "definite": false,
                "start": 100,
                "end": 110
              }
            ],
            "declare": false,
            "start": 96,
            "end": 111
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
                  "name": "parent2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 129
                },
                "init": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 132,
                  "end": 133
                },
                "definite": false,
                "start": 122,
                "end": 133
              }
            ],
            "declare": false,
            "start": 116,
            "end": 134
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 150
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "parent",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 159,
                    "end": 165
                  },
                  "start": 157,
                  "end": 165
                },
                "start": 151,
                "end": 165
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "parent2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 176,
                    "end": 182
                  },
                  "start": 174,
                  "end": 182
                },
                "start": 167,
                "end": 182
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 194,
                      "end": 197
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "parent",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 198,
                        "end": 204
                      }
                    ],
                    "optional": false,
                    "start": 194,
                    "end": 205
                  },
                  "directive": null,
                  "start": 194,
                  "end": 206
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 215,
                      "end": 218
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "parent2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 219,
                        "end": 226
                      }
                    ],
                    "optional": false,
                    "start": 215,
                    "end": 227
                  },
                  "directive": null,
                  "start": 215,
                  "end": 228
                }
              ],
              "start": 184,
              "end": 234
            },
            "expression": false,
            "start": 140,
            "end": 234
          }
        ],
        "start": 85,
        "end": 236
      },
      "expression": false,
      "start": 72,
      "end": 236
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 236
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 4,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 13,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 19,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "parent2",
    "start": 25,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 33,
    "end": 34
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 35,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 41,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 49,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 58,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 65,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 72,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 96,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 100,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 107,
    "end": 108
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 116,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "parent2",
    "start": 122,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 130,
    "end": 131
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "type": "Keyword",
    "value": "function",
    "start": 140,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 151,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 159,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "parent2",
    "start": 167,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 176,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 194,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 198,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 215,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "parent2",
    "start": 219,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236
  }
]
```
