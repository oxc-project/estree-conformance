__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 25
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 26,
                  "end": 27
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 25,
              "end": 29
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 29
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 45
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 46,
                    "end": 47
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 50,
                    "end": 51
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 46,
                  "end": 51
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 67,
                          "end": 68
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 71,
                          "end": 72
                        },
                        "definite": false,
                        "start": 67,
                        "end": 72
                      }
                    ],
                    "declare": false,
                    "start": 63,
                    "end": 73
                  }
                ],
                "start": 53,
                "end": 79
              },
              "expression": false,
              "start": 45,
              "end": 79
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 34,
            "end": 79
          }
        ],
        "start": 8,
        "end": 81
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 81
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 90
      },
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
              "start": 91,
              "end": 92
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 91,
            "end": 92
          }
        ],
        "start": 90,
        "end": 93
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 111
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 112,
                  "end": 113
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 111,
              "end": 115
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 100,
            "end": 115
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 131
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
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
                          "start": 134,
                          "end": 135
                        },
                        "typeArguments": null,
                        "start": 134,
                        "end": 135
                      },
                      "start": 133,
                      "end": 135
                    },
                    "start": 132,
                    "end": 135
                  },
                  "right": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 138,
                    "end": 142
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 142
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 158,
                          "end": 159
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 162,
                          "end": 163
                        },
                        "definite": false,
                        "start": 158,
                        "end": 163
                      }
                    ],
                    "declare": false,
                    "start": 154,
                    "end": 164
                  }
                ],
                "start": 144,
                "end": 170
              },
              "expression": false,
              "start": 131,
              "end": 170
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 120,
            "end": 170
          }
        ],
        "start": 94,
        "end": 172
      },
      "abstract": false,
      "declare": false,
      "start": 83,
      "end": 172
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 180,
        "end": 181
      },
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
              "start": 182,
              "end": 183
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 196
              },
              "typeArguments": null,
              "start": 192,
              "end": 196
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 182,
            "end": 196
          }
        ],
        "start": 181,
        "end": 197
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 215
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 217
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 215,
              "end": 219
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 204,
            "end": 219
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 224,
              "end": 235
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
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
                          "start": 239,
                          "end": 240
                        },
                        "typeArguments": null,
                        "start": 239,
                        "end": 240
                      },
                      "start": 237,
                      "end": 240
                    },
                    "start": 236,
                    "end": 240
                  },
                  "right": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 243,
                    "end": 247
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 236,
                  "end": 247
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 263,
                          "end": 264
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 267,
                          "end": 268
                        },
                        "definite": false,
                        "start": 263,
                        "end": 268
                      }
                    ],
                    "declare": false,
                    "start": 259,
                    "end": 269
                  }
                ],
                "start": 249,
                "end": 275
              },
              "expression": false,
              "start": 235,
              "end": 275
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 224,
            "end": 275
          }
        ],
        "start": 198,
        "end": 277
      },
      "abstract": false,
      "declare": false,
      "start": 174,
      "end": 277
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 277
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 14,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 34,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 48,
    "end": 49
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 63,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 80,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 83,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 100,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 120,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 136,
    "end": 137
  },
  {
    "type": "Null",
    "value": "null",
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
    "value": "{",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 154,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 174,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 184,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 192,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 204,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "constructor",
    "start": 224,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 241,
    "end": 242
  },
  {
    "type": "Null",
    "value": "null",
    "start": 243,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 249,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 259,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "x",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 276,
    "end": 277
  }
]
```
