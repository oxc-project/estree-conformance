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
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 9,
            "end": 15
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 18,
              "end": 23
            },
            "start": 18,
            "end": 23
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 26,
              "end": 31
            },
            "start": 26,
            "end": 31
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "baz",
              "raw": "\"baz\"",
              "start": 34,
              "end": 39
            },
            "start": 34,
            "end": 39
          }
        ],
        "start": 9,
        "end": 39
      },
      "declare": false,
      "start": 0,
      "end": 40
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 49,
                      "end": 54
                    },
                    "start": 49,
                    "end": 54
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 57,
                      "end": 62
                    },
                    "start": 57,
                    "end": 62
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "baz",
                      "raw": "\"baz\"",
                      "start": 65,
                      "end": 70
                    },
                    "start": 65,
                    "end": 70
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 73,
                    "end": 79
                  }
                ],
                "start": 49,
                "end": 79
              },
              "start": 47,
              "end": 79
            },
            "start": 46,
            "end": 79
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 91
          },
          "definite": false,
          "start": 46,
          "end": 91
        }
      ],
      "declare": false,
      "start": 42,
      "end": 92
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
            "name": "y",
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
                  "start": 100,
                  "end": 101
                },
                "typeArguments": null,
                "start": 100,
                "end": 101
              },
              "start": 98,
              "end": 101
            },
            "start": 97,
            "end": 101
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 113
          },
          "definite": false,
          "start": 97,
          "end": 113
        }
      ],
      "declare": false,
      "start": 93,
      "end": 114
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 120,
          "end": 121
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "foo",
          "raw": "\"foo\"",
          "start": 126,
          "end": 131
        },
        "start": 120,
        "end": 131
      },
      "consequent": {
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 143,
                  "end": 144
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 147,
                  "end": 148
                },
                "definite": false,
                "start": 143,
                "end": 148
              }
            ],
            "declare": false,
            "start": 139,
            "end": 149
          }
        ],
        "start": 133,
        "end": 151
      },
      "alternate": {
        "type": "IfStatement",
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 161,
            "end": 162
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 167,
            "end": 172
          },
          "start": 161,
          "end": 172
        },
        "consequent": {
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 184,
                    "end": 185
                  },
                  "init": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 188,
                      "end": 189
                    },
                    "operator": "||",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 193,
                      "end": 194
                    },
                    "start": 188,
                    "end": 194
                  },
                  "definite": false,
                  "start": 184,
                  "end": 194
                }
              ],
              "declare": false,
              "start": 180,
              "end": 195
            }
          ],
          "start": 174,
          "end": 197
        },
        "alternate": {
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 213,
                    "end": 214
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 217,
                    "end": 218
                  },
                  "definite": false,
                  "start": 213,
                  "end": 218
                }
              ],
              "declare": false,
              "start": 209,
              "end": 219
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
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 228,
                    "end": 229
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 232,
                    "end": 233
                  },
                  "definite": false,
                  "start": 228,
                  "end": 233
                }
              ],
              "declare": false,
              "start": 224,
              "end": 234
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
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 254,
                              "end": 255
                            },
                            "typeArguments": null,
                            "start": 247,
                            "end": 255
                          },
                          {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 267,
                              "end": 268
                            },
                            "typeArguments": null,
                            "start": 260,
                            "end": 268
                          }
                        ],
                        "start": 246,
                        "end": 269
                      },
                      "start": 244,
                      "end": 269
                    },
                    "start": 243,
                    "end": 269
                  },
                  "init": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 272,
                      "end": 273
                    },
                    "operator": "||",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 277,
                      "end": 278
                    },
                    "start": 272,
                    "end": 278
                  },
                  "definite": false,
                  "start": 243,
                  "end": 278
                }
              ],
              "declare": false,
              "start": 239,
              "end": 279
            }
          ],
          "start": 203,
          "end": 281
        },
        "start": 157,
        "end": 281
      },
      "start": 116,
      "end": 281
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 283,
          "end": 284
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 287,
          "end": 288
        },
        "start": 283,
        "end": 288
      },
      "directive": null,
      "start": 283,
      "end": 289
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 290,
          "end": 291
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 294,
          "end": 295
        },
        "start": 290,
        "end": 295
      },
      "directive": null,
      "start": 290,
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
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 16,
    "end": 17
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 18,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 24,
    "end": 25
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 26,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 32,
    "end": 33
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 34,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 42,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 49,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 55,
    "end": 56
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 57,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 63,
    "end": 64
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 65,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 73,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 82,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 93,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 104,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 116,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 122,
    "end": 125
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 126,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 139,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 152,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 157,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 163,
    "end": 166
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 167,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 180,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 190,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 198,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 203,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 209,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 224,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 239,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 247,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 260,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 274,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 283,
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
    "value": "y",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "x",
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
