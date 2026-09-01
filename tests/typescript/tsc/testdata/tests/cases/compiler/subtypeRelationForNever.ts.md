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
        "name": "fail",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 13
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "message",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 23,
              "end": 29
            },
            "start": 21,
            "end": 29
          },
          "start": 14,
          "end": 29
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 33,
          "end": 38
        },
        "start": 31,
        "end": 38
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 51,
                "end": 56
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 64
                }
              ],
              "start": 47,
              "end": 65
            },
            "start": 41,
            "end": 66
          }
        ],
        "start": 39,
        "end": 68
      },
      "expression": false,
      "start": 0,
      "end": 68
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withFew",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 85
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 87
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 86,
            "end": 87
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 90
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 89,
            "end": 90
          }
        ],
        "start": 85,
        "end": 91
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "values",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 101
                },
                "typeArguments": null,
                "start": 100,
                "end": 101
              },
              "start": 100,
              "end": 103
            },
            "start": 98,
            "end": 103
          },
          "start": 92,
          "end": 103
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "haveFew",
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
                  "name": "values",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 123,
                          "end": 124
                        },
                        "typeArguments": null,
                        "start": 123,
                        "end": 124
                      },
                      "start": 123,
                      "end": 126
                    },
                    "start": 121,
                    "end": 126
                  },
                  "start": 115,
                  "end": 126
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 131,
                    "end": 132
                  },
                  "typeArguments": null,
                  "start": 131,
                  "end": 132
                },
                "start": 128,
                "end": 132
              },
              "start": 114,
              "end": 132
            },
            "start": 112,
            "end": 132
          },
          "start": 105,
          "end": 132
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "haveNone",
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
                  "name": "reason",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 153,
                      "end": 159
                    },
                    "start": 151,
                    "end": 159
                  },
                  "start": 145,
                  "end": 159
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 164,
                    "end": 165
                  },
                  "typeArguments": null,
                  "start": 164,
                  "end": 165
                },
                "start": 161,
                "end": 165
              },
              "start": 144,
              "end": 165
            },
            "start": 142,
            "end": 165
          },
          "start": 134,
          "end": 165
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 169
          },
          "typeArguments": null,
          "start": 168,
          "end": 169
        },
        "start": 166,
        "end": 169
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 183,
                    "end": 189
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 190,
                    "end": 196
                  },
                  "optional": false,
                  "computed": false,
                  "start": 183,
                  "end": 196
                },
                "operator": ">",
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 199,
                  "end": 200
                },
                "start": 183,
                "end": 200
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "haveFew",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 210
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 211,
                    "end": 217
                  }
                ],
                "optional": false,
                "start": 203,
                "end": 218
              },
              "alternate": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "haveNone",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 221,
                  "end": 229
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "No values.",
                    "raw": "'No values.'",
                    "start": 230,
                    "end": 242
                  }
                ],
                "optional": false,
                "start": 221,
                "end": 243
              },
              "start": 183,
              "end": 243
            },
            "start": 176,
            "end": 244
          }
        ],
        "start": 170,
        "end": 246
      },
      "expression": false,
      "start": 69,
      "end": 246
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "id",
        "optional": false,
        "typeAnnotation": null,
        "start": 256,
        "end": 258
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 259,
              "end": 260
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 259,
            "end": 260
          }
        ],
        "start": 258,
        "end": 261
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 269,
                "end": 270
              },
              "typeArguments": null,
              "start": 269,
              "end": 270
            },
            "start": 267,
            "end": 270
          },
          "start": 262,
          "end": 270
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 274,
            "end": 275
          },
          "typeArguments": null,
          "start": 274,
          "end": 275
        },
        "start": 272,
        "end": 275
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 290
            },
            "start": 278,
            "end": 291
          }
        ],
        "start": 276,
        "end": 293
      },
      "expression": false,
      "start": 247,
      "end": 293
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
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 300,
            "end": 306
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "withFew",
              "optional": false,
              "typeAnnotation": null,
              "start": 309,
              "end": 316
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 318,
                    "end": 319
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 321,
                    "end": 322
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 324,
                    "end": 325
                  }
                ],
                "start": 317,
                "end": 326
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 328,
                "end": 330
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fail",
                "optional": false,
                "typeAnnotation": null,
                "start": 332,
                "end": 336
              }
            ],
            "optional": false,
            "start": 309,
            "end": 337
          },
          "definite": false,
          "start": 300,
          "end": 337
        }
      ],
      "declare": false,
      "start": 294,
      "end": 338
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 369
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
    "value": "fail",
    "start": 9,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 14,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 33,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 41,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 47,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 51,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 57,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 69,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "withFew",
    "start": 78,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 92,
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
    "value": "a",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "haveFew",
    "start": 105,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 115,
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
    "value": "a",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 128,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "haveNone",
    "start": 134,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "reason",
    "start": 145,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 153,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 161,
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
    "value": ")",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 176,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 183,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 190,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 197,
    "end": 198
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "haveFew",
    "start": 203,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 211,
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
    "value": ":",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "haveNone",
    "start": 221,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230
  },
  {
    "type": "String",
    "value": "'No values.'",
    "start": 230,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 245,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 247,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 256,
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
    "value": "a",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 262,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 278,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 285,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 294,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 300,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "withFew",
    "start": 309,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 317,
    "end": 318
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 319,
    "end": 320
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 322,
    "end": 323
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 328,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 332,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338
  }
]
```
