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
            "name": "sinOrCos",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 33
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 36,
                  "end": 40
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 41,
                  "end": 47
                },
                "optional": false,
                "computed": false,
                "start": 36,
                "end": 47
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 36,
              "end": 49
            },
            "operator": "<",
            "right": {
              "type": "Literal",
              "value": 0.5,
              "raw": ".5",
              "start": 52,
              "end": 54
            },
            "start": 36,
            "end": 54
          },
          "definite": false,
          "start": 25,
          "end": 54
        }
      ],
      "declare": false,
      "start": 21,
      "end": 55
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "choice",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 66
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "sinOrCos",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 77
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 81,
                  "end": 85
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sin",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 86,
                  "end": 89
                },
                "optional": false,
                "computed": false,
                "start": 81,
                "end": 89
              },
              "start": 69,
              "end": 89
            },
            "operator": "||",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 97
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "cos",
                "optional": false,
                "typeAnnotation": null,
                "start": 98,
                "end": 101
              },
              "optional": false,
              "computed": false,
              "start": 93,
              "end": 101
            },
            "start": 69,
            "end": 101
          },
          "definite": false,
          "start": 60,
          "end": 101
        }
      ],
      "declare": false,
      "start": 56,
      "end": 102
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null,
          "start": 104,
          "end": 110
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Math",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 115
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "PI",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 118
            },
            "optional": false,
            "computed": false,
            "start": 111,
            "end": 118
          }
        ],
        "optional": false,
        "start": 104,
        "end": 119
      },
      "directive": null,
      "start": 104,
      "end": 120
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "sq",
        "optional": false,
        "typeAnnotation": null,
        "start": 131,
        "end": 133
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 138,
              "end": 144
            },
            "start": 136,
            "end": 144
          },
          "start": 134,
          "end": 144
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 147,
          "end": 153
        },
        "start": 145,
        "end": 153
      },
      "body": {
        "type": "BlockStatement",
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 164,
                  "end": 165
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 168,
                        "end": 169
                      },
                      "operator": "!==",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 174,
                        "end": 183
                      },
                      "start": 168,
                      "end": 183
                    },
                    "operator": "&&",
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 187,
                        "end": 188
                      },
                      "operator": "*",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 189,
                        "end": 190
                      },
                      "start": 187,
                      "end": 190
                    },
                    "start": 168,
                    "end": 190
                  },
                  "operator": "||",
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 194,
                    "end": 195
                  },
                  "start": 168,
                  "end": 195
                },
                "definite": false,
                "start": 164,
                "end": 195
              }
            ],
            "declare": false,
            "start": 158,
            "end": 196
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 207
            },
            "start": 199,
            "end": 208
          }
        ],
        "start": 154,
        "end": 210
      },
      "expression": false,
      "start": 122,
      "end": 210
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "sq",
          "optional": false,
          "typeAnnotation": null,
          "start": 212,
          "end": 214
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 215,
            "end": 216
          }
        ],
        "optional": false,
        "start": 212,
        "end": 217
      },
      "directive": null,
      "start": 212,
      "end": 218
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 218
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 21,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "sinOrCos",
    "start": 25,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 36,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 50,
    "end": 51
  },
  {
    "type": "Numeric",
    "value": ".5",
    "start": 52,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 56,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "sinOrCos",
    "start": 69,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 78,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 81,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "sin",
    "start": 86,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 90,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 93,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "cos",
    "start": 98,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "choice",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 111,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "PI",
    "start": 116,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 122,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "sq",
    "start": 131,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 138,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 147,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 158,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 170,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 174,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 184,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 191,
    "end": 193
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 199,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "sq",
    "start": 212,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 214,
    "end": 215
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  }
]
```
