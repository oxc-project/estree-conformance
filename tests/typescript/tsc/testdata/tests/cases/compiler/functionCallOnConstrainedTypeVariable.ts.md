__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 28
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
            },
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
                        "type": "TSNumberKeyword",
                        "start": 42,
                        "end": 48
                      },
                      "start": 40,
                      "end": 48
                    },
                    "start": 39,
                    "end": 48
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 53,
                    "end": 59
                  },
                  "start": 50,
                  "end": 59
                },
                "start": 38,
                "end": 59
              },
              "start": 36,
              "end": 59
            },
            "accessibility": null,
            "static": false,
            "start": 35,
            "end": 59
          }
        ],
        "start": 31,
        "end": 61
      },
      "declare": false,
      "start": 22,
      "end": 62
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 69
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 77
            },
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
                        "type": "TSBooleanKeyword",
                        "start": 83,
                        "end": 90
                      },
                      "start": 81,
                      "end": 90
                    },
                    "start": 80,
                    "end": 90
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 95,
                    "end": 101
                  },
                  "start": 92,
                  "end": 101
                },
                "start": 79,
                "end": 101
              },
              "start": 77,
              "end": 101
            },
            "accessibility": null,
            "static": false,
            "start": 76,
            "end": 101
          }
        ],
        "start": 72,
        "end": 103
      },
      "declare": false,
      "start": 63,
      "end": 104
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "call0",
        "optional": false,
        "typeAnnotation": null,
        "start": 115,
        "end": 120
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 124,
                    "end": 125
                  },
                  "typeArguments": null,
                  "start": 124,
                  "end": 125
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 128,
                    "end": 129
                  },
                  "typeArguments": null,
                  "start": 128,
                  "end": 129
                }
              ],
              "start": 124,
              "end": 129
            },
            "start": 122,
            "end": 129
          },
          "start": 121,
          "end": 129
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 137
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 139
                },
                "optional": false,
                "computed": false,
                "start": 136,
                "end": 139
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "s",
                  "raw": "\"s\"",
                  "start": 140,
                  "end": 143
                }
              ],
              "optional": false,
              "start": 136,
              "end": 144
            },
            "directive": null,
            "start": 136,
            "end": 145
          }
        ],
        "start": 131,
        "end": 156
      },
      "expression": false,
      "start": 106,
      "end": 156
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "callN",
        "optional": false,
        "typeAnnotation": null,
        "start": 167,
        "end": 172
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
              "start": 173,
              "end": 174
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 183,
                    "end": 184
                  },
                  "typeArguments": null,
                  "start": 183,
                  "end": 184
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 187,
                    "end": 188
                  },
                  "typeArguments": null,
                  "start": 187,
                  "end": 188
                }
              ],
              "start": 183,
              "end": 188
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 173,
            "end": 188
          }
        ],
        "start": 172,
        "end": 189
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
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
                "start": 193,
                "end": 194
              },
              "typeArguments": null,
              "start": 193,
              "end": 194
            },
            "start": 191,
            "end": 194
          },
          "start": 190,
          "end": 194
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 200,
                  "end": 201
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 202,
                  "end": 203
                },
                "optional": false,
                "computed": false,
                "start": 200,
                "end": 203
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "s",
                  "raw": "\"s\"",
                  "start": 204,
                  "end": 207
                }
              ],
              "optional": false,
              "start": 200,
              "end": 208
            },
            "directive": null,
            "start": 200,
            "end": 209
          },
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
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 231,
                          "end": 232
                        },
                        "typeArguments": null,
                        "start": 231,
                        "end": 232
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 233,
                          "end": 236
                        },
                        "start": 233,
                        "end": 236
                      },
                      "start": 231,
                      "end": 237
                    },
                    "start": 229,
                    "end": 237
                  },
                  "start": 228,
                  "end": 237
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 240,
                    "end": 241
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 242,
                    "end": 243
                  },
                  "optional": false,
                  "computed": false,
                  "start": 240,
                  "end": 243
                },
                "definite": false,
                "start": 228,
                "end": 243
              }
            ],
            "declare": false,
            "start": 224,
            "end": 244
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 247,
                "end": 248
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 249,
                  "end": 251
                }
              ],
              "optional": false,
              "start": 247,
              "end": 252
            },
            "directive": null,
            "start": 247,
            "end": 253
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 265,
                "end": 266
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 267,
                  "end": 269
                },
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 271,
                  "end": 273
                },
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 275,
                  "end": 277
                },
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 279,
                  "end": 281
                }
              ],
              "optional": false,
              "start": 265,
              "end": 282
            },
            "directive": null,
            "start": 265,
            "end": 283
          }
        ],
        "start": 196,
        "end": 294
      },
      "expression": false,
      "start": 158,
      "end": 294
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 294
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 22,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 42,
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
    "value": "=>",
    "start": 50,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 63,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 83,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 92,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 95,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 106,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "call0",
    "start": 115,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 139,
    "end": 140
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 140,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 158,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "callN",
    "start": 167,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 175,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 190,
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
    "value": "T",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 203,
    "end": 204
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 204,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 224,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 232,
    "end": 233
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 233,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "p",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 248,
    "end": 249
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 249,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 266,
    "end": 267
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 267,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 269,
    "end": 270
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 271,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 273,
    "end": 274
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 275,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 277,
    "end": 278
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 279,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 293,
    "end": 294
  }
]
```
