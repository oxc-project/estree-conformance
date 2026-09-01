__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "constraint": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 23,
                "end": 28
              },
              "start": 23,
              "end": 28
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 28
          }
        ],
        "start": 12,
        "end": 29
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 37,
                        "end": 38
                      },
                      "typeArguments": null,
                      "start": 37,
                      "end": 38
                    },
                    "start": 35,
                    "end": 38
                  },
                  "start": 34,
                  "end": 38
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 43,
                    "end": 44
                  },
                  "typeArguments": null,
                  "start": 43,
                  "end": 44
                },
                "start": 40,
                "end": 44
              },
              "start": 33,
              "end": 44
            },
            "start": 31,
            "end": 44
          },
          "start": 30,
          "end": 44
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 60
            },
            "start": 52,
            "end": 61
          }
        ],
        "start": 46,
        "end": 63
      },
      "expression": false,
      "start": 0,
      "end": 63
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 77
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 79
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 88,
                    "end": 93
                  },
                  "start": 88,
                  "end": 93
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 96,
                    "end": 101
                  },
                  "start": 96,
                  "end": 101
                }
              ],
              "start": 88,
              "end": 101
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 78,
            "end": 101
          }
        ],
        "start": 77,
        "end": 102
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 110,
                        "end": 111
                      },
                      "typeArguments": null,
                      "start": 110,
                      "end": 111
                    },
                    "start": 108,
                    "end": 111
                  },
                  "start": 107,
                  "end": 111
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 116,
                    "end": 117
                  },
                  "typeArguments": null,
                  "start": 116,
                  "end": 117
                },
                "start": 113,
                "end": 117
              },
              "start": 106,
              "end": 117
            },
            "start": 104,
            "end": 117
          },
          "start": 103,
          "end": 117
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 133
            },
            "start": 125,
            "end": 134
          }
        ],
        "start": 119,
        "end": 136
      },
      "expression": false,
      "start": 65,
      "end": 136
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 143
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 149
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 150,
                    "end": 151
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 155,
                  "end": 156
                },
                "id": null,
                "generator": false,
                "start": 150,
                "end": 156
              }
            ],
            "optional": false,
            "start": 146,
            "end": 157
          },
          "definite": false,
          "start": 142,
          "end": 157
        }
      ],
      "declare": false,
      "start": 138,
      "end": 158
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
            "name": "fResult",
            "optional": false,
            "typeAnnotation": null,
            "start": 163,
            "end": 170
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 174
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 175,
                "end": 180
              }
            ],
            "optional": false,
            "start": 173,
            "end": 181
          },
          "definite": false,
          "start": 163,
          "end": 181
        }
      ],
      "declare": false,
      "start": 159,
      "end": 182
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
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 189
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 195
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 197,
                    "end": 198
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 202,
                  "end": 203
                },
                "id": null,
                "generator": false,
                "start": 197,
                "end": 203
              }
            ],
            "optional": false,
            "start": 192,
            "end": 205
          },
          "definite": false,
          "start": 188,
          "end": 205
        }
      ],
      "declare": false,
      "start": 184,
      "end": 206
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
            "name": "gResult",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 218
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 222
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 223,
                "end": 228
              }
            ],
            "optional": false,
            "start": 221,
            "end": 229
          },
          "definite": false,
          "start": 211,
          "end": 229
        }
      ],
      "declare": false,
      "start": 207,
      "end": 230
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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 236,
            "end": 237
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 240,
              "end": 243
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 244,
                    "end": 245
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 249,
                  "end": 250
                },
                "id": null,
                "generator": false,
                "start": 244,
                "end": 250
              }
            ],
            "optional": false,
            "start": 240,
            "end": 251
          },
          "definite": false,
          "start": 236,
          "end": 251
        }
      ],
      "declare": false,
      "start": 232,
      "end": 252
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
            "name": "hResult",
            "optional": false,
            "typeAnnotation": null,
            "start": 257,
            "end": 264
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 267,
              "end": 268
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 269,
                "end": 274
              }
            ],
            "optional": false,
            "start": 267,
            "end": 275
          },
          "definite": false,
          "start": 257,
          "end": 275
        }
      ],
      "declare": false,
      "start": 253,
      "end": 276
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "hResult",
          "optional": false,
          "typeAnnotation": null,
          "start": 277,
          "end": 284
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 288
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 289,
              "end": 294
            }
          ],
          "optional": false,
          "start": 287,
          "end": 295
        },
        "start": 277,
        "end": 295
      },
      "directive": null,
      "start": 277,
      "end": 296
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 296
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 15,
    "end": 22
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 23,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 40,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 52,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 65,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 74,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 80,
    "end": 87
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 88,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 94,
    "end": 95
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 96,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 113,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 125,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "f",
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
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 138,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 146,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 152,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 159,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "fResult",
    "start": 163,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 174,
    "end": 175
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 175,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 184,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 192,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 199,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Keyword",
    "value": "let",
    "start": 207,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "gResult",
    "start": 211,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 222,
    "end": 223
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 223,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 232,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 240,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 246,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 253,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "hResult",
    "start": 257,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 268,
    "end": 269
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 269,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "hResult",
    "start": 277,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 288,
    "end": 289
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 289,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296
  }
]
```
