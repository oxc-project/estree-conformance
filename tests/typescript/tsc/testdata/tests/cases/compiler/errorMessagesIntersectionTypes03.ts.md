__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
              "start": 18,
              "end": 19
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 20
          }
        ],
        "start": 12,
        "end": 22
      },
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 35
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 43
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 42,
            "end": 44
          }
        ],
        "start": 36,
        "end": 46
      },
      "declare": false,
      "start": 24,
      "end": 46
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 58
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
              "start": 59,
              "end": 60
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 59,
            "end": 60
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 63
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 73
              },
              "typeArguments": null,
              "start": 72,
              "end": 73
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 62,
            "end": 73
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 76
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 86
              },
              "typeArguments": null,
              "start": 85,
              "end": 86
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 75,
            "end": 86
          }
        ],
        "start": 58,
        "end": 87
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 91,
          "end": 95
        },
        "start": 89,
        "end": 95
      },
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
                  "name": "t",
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
                        "start": 109,
                        "end": 110
                      },
                      "typeArguments": null,
                      "start": 109,
                      "end": 110
                    },
                    "start": 107,
                    "end": 110
                  },
                  "start": 106,
                  "end": 110
                },
                "init": null,
                "definite": false,
                "start": 106,
                "end": 110
              }
            ],
            "declare": false,
            "start": 102,
            "end": 111
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
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 123,
                        "end": 124
                      },
                      "typeArguments": null,
                      "start": 123,
                      "end": 124
                    },
                    "start": 121,
                    "end": 124
                  },
                  "start": 120,
                  "end": 124
                },
                "init": null,
                "definite": false,
                "start": 120,
                "end": 124
              }
            ],
            "declare": false,
            "start": 116,
            "end": 125
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 137,
                        "end": 138
                      },
                      "typeArguments": null,
                      "start": 137,
                      "end": 138
                    },
                    "start": 135,
                    "end": 138
                  },
                  "start": 134,
                  "end": 138
                },
                "init": null,
                "definite": false,
                "start": 134,
                "end": 138
              }
            ],
            "declare": false,
            "start": 130,
            "end": 139
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
                  "name": "a_and_b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 158,
                            "end": 159
                          },
                          "typeArguments": null,
                          "start": 158,
                          "end": 159
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 162,
                            "end": 163
                          },
                          "typeArguments": null,
                          "start": 162,
                          "end": 163
                        }
                      ],
                      "start": 158,
                      "end": 163
                    },
                    "start": 156,
                    "end": 163
                  },
                  "start": 149,
                  "end": 163
                },
                "init": null,
                "definite": false,
                "start": 149,
                "end": 163
              }
            ],
            "declare": false,
            "start": 145,
            "end": 164
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
                  "name": "t_and_b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 182,
                            "end": 183
                          },
                          "typeArguments": null,
                          "start": 182,
                          "end": 183
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 186,
                            "end": 187
                          },
                          "typeArguments": null,
                          "start": 186,
                          "end": 187
                        }
                      ],
                      "start": 182,
                      "end": 187
                    },
                    "start": 180,
                    "end": 187
                  },
                  "start": 173,
                  "end": 187
                },
                "init": null,
                "definite": false,
                "start": 173,
                "end": 187
              }
            ],
            "declare": false,
            "start": 169,
            "end": 188
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 194,
                "end": 195
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a_and_b",
                "optional": false,
                "typeAnnotation": null,
                "start": 198,
                "end": 205
              },
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null,
                "start": 211,
                "end": 212
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a_and_b",
                "optional": false,
                "typeAnnotation": null,
                "start": 215,
                "end": 222
              },
              "start": 211,
              "end": 222
            },
            "directive": null,
            "start": 211,
            "end": 223
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 229
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a_and_b",
                "optional": false,
                "typeAnnotation": null,
                "start": 232,
                "end": 239
              },
              "start": 228,
              "end": 239
            },
            "directive": null,
            "start": 228,
            "end": 240
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 246,
                "end": 247
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t_and_b",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 257
              },
              "start": 246,
              "end": 257
            },
            "directive": null,
            "start": 246,
            "end": 258
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null,
                "start": 263,
                "end": 264
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t_and_b",
                "optional": false,
                "typeAnnotation": null,
                "start": 267,
                "end": 274
              },
              "start": 263,
              "end": 274
            },
            "directive": null,
            "start": 263,
            "end": 275
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 280,
                "end": 281
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t_and_b",
                "optional": false,
                "typeAnnotation": null,
                "start": 284,
                "end": 291
              },
              "start": 280,
              "end": 291
            },
            "directive": null,
            "start": 280,
            "end": 292
          }
        ],
        "start": 96,
        "end": 294
      },
      "expression": false,
      "start": 48,
      "end": 294
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 294
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 24,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 48,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 64,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 77,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 91,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 102,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "let",
    "start": 116,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 130,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 145,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "a_and_b",
    "start": 149,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 169,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "t_and_b",
    "start": 173,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "a_and_b",
    "start": 198,
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
    "value": "u",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "a_and_b",
    "start": 215,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "v",
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
    "value": "a_and_b",
    "start": 232,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "t_and_b",
    "start": 250,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 263,
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
    "value": "t_and_b",
    "start": 267,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "t_and_b",
    "start": 284,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 293,
    "end": 294
  }
]
```
