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
              "start": 8,
              "end": 9
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8,
            "end": 9
          }
        ],
        "start": 7,
        "end": 10
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 18
            },
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
                  "start": 20,
                  "end": 21
                },
                "typeArguments": null,
                "start": 20,
                "end": 21
              },
              "start": 18,
              "end": 21
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 17,
            "end": 22
          }
        ],
        "start": 11,
        "end": 24
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 24
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 31
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 39
            },
            "typeArguments": null,
            "arguments": [],
            "start": 34,
            "end": 41
          },
          "definite": false,
          "start": 30,
          "end": 41
        }
      ],
      "declare": false,
      "start": 26,
      "end": 42
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 49
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 57
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 58,
                  "end": 61
                }
              ],
              "start": 57,
              "end": 62
            },
            "arguments": [],
            "start": 52,
            "end": 64
          },
          "definite": false,
          "start": 47,
          "end": 64
        }
      ],
      "declare": false,
      "start": 43,
      "end": 65
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
            "name": "c3",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 72
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 81,
                  "end": 87
                }
              ],
              "start": 80,
              "end": 88
            },
            "arguments": [],
            "start": 75,
            "end": 90
          },
          "definite": false,
          "start": 70,
          "end": 90
        }
      ],
      "declare": false,
      "start": 66,
      "end": 91
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
            "name": "c4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 101
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 102,
                      "end": 105
                    }
                  ],
                  "start": 101,
                  "end": 106
                },
                "start": 100,
                "end": 106
              },
              "start": 98,
              "end": 106
            },
            "start": 96,
            "end": 106
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 114
            },
            "typeArguments": null,
            "arguments": [],
            "start": 109,
            "end": 116
          },
          "definite": false,
          "start": 96,
          "end": 116
        }
      ],
      "declare": false,
      "start": 92,
      "end": 117
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
        "start": 125,
        "end": 126
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
              "start": 127,
              "end": 128
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 127,
            "end": 128
          }
        ],
        "start": 126,
        "end": 129
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
              "start": 136,
              "end": 147
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
                        "start": 151,
                        "end": 152
                      },
                      "typeArguments": null,
                      "start": 151,
                      "end": 152
                    },
                    "start": 149,
                    "end": 152
                  },
                  "start": 148,
                  "end": 152
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 154,
                "end": 157
              },
              "expression": false,
              "start": 147,
              "end": 157
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 136,
            "end": 157
          }
        ],
        "start": 130,
        "end": 159
      },
      "abstract": false,
      "declare": false,
      "start": 119,
      "end": 159
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 166
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 174
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 175,
                "end": 179
              }
            ],
            "start": 169,
            "end": 180
          },
          "definite": false,
          "start": 165,
          "end": 180
        }
      ],
      "declare": false,
      "start": 161,
      "end": 181
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
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 186,
            "end": 188
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 196
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 197,
                "end": 198
              }
            ],
            "start": 191,
            "end": 199
          },
          "definite": false,
          "start": 186,
          "end": 199
        }
      ],
      "declare": false,
      "start": 182,
      "end": 200
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
            "name": "d3",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 207
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 215
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 216,
                  "end": 219
                }
              ],
              "start": 215,
              "end": 220
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 221,
                "end": 222
              }
            ],
            "start": 210,
            "end": 223
          },
          "definite": false,
          "start": 205,
          "end": 223
        }
      ],
      "declare": false,
      "start": 201,
      "end": 224
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
            "name": "d4",
            "optional": false,
            "typeAnnotation": null,
            "start": 229,
            "end": 231
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 239
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 241,
                  "end": 244
                },
                "expression": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 245,
                  "end": 246
                },
                "start": 240,
                "end": 246
              }
            ],
            "start": 234,
            "end": 247
          },
          "definite": false,
          "start": 229,
          "end": 247
        }
      ],
      "declare": false,
      "start": 225,
      "end": 248
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
            "name": "d5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 258
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 259,
                      "end": 262
                    }
                  ],
                  "start": 258,
                  "end": 263
                },
                "start": 257,
                "end": 263
              },
              "start": 255,
              "end": 263
            },
            "start": 253,
            "end": 263
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 270,
              "end": 271
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 272,
                "end": 276
              }
            ],
            "start": 266,
            "end": 277
          },
          "definite": false,
          "start": 253,
          "end": 277
        }
      ],
      "declare": false,
      "start": 249,
      "end": 278
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 289,
        "end": 292
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
              "start": 293,
              "end": 294
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 293,
            "end": 294
          }
        ],
        "start": 292,
        "end": 295
      },
      "params": [],
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
            "start": 299,
            "end": 300
          },
          "typeArguments": null,
          "start": 299,
          "end": 300
        },
        "start": 297,
        "end": 300
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 310,
              "end": 314
            },
            "start": 303,
            "end": 315
          }
        ],
        "start": 301,
        "end": 317
      },
      "expression": false,
      "start": 280,
      "end": 317
    },
    {
      "type": "EmptyStatement",
      "start": 317,
      "end": 318
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 319,
          "end": 322
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 319,
        "end": 324
      },
      "directive": null,
      "start": 319,
      "end": 324
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 326,
          "end": 329
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 330,
              "end": 333
            }
          ],
          "start": 329,
          "end": 334
        },
        "arguments": [],
        "optional": false,
        "start": 326,
        "end": 336
      },
      "directive": null,
      "start": 326,
      "end": 337
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 344
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
    "value": "<",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 26,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 34,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 43,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 47,
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
    "value": "C",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 58,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 66,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 70,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 75,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 92,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 96,
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
    "value": "C",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 102,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 109,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 119,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 136,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 161,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 169,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "D",
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
    "type": "Null",
    "value": "null",
    "start": 175,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 182,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 186,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 191,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "D",
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
    "type": "Numeric",
    "value": "1",
    "start": 197,
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
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 201,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 205,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 210,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 216,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 220,
    "end": 221
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 225,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 229,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 234,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 241,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 244,
    "end": 245
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 249,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "d5",
    "start": 253,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 259,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 266,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 271,
    "end": 272
  },
  {
    "type": "Null",
    "value": "null",
    "start": 272,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 280,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 289,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 303,
    "end": 309
  },
  {
    "type": "Null",
    "value": "null",
    "start": 310,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 319,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 326,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 330,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  }
]
```
