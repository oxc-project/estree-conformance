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
        "name": "Query",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
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
              "start": 16,
              "end": 17
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 16,
            "end": 17
          }
        ],
        "start": 15,
        "end": 18
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 28
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                      "start": 32,
                      "end": 33
                    },
                    "typeArguments": null,
                    "start": 32,
                    "end": 33
                  },
                  "start": 30,
                  "end": 33
                },
                "start": 29,
                "end": 33
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Query",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 36,
                  "end": 41
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 42,
                          "end": 43
                        },
                        "typeArguments": null,
                        "start": 42,
                        "end": 43
                      },
                      "start": 42,
                      "end": 45
                    }
                  ],
                  "start": 41,
                  "end": 46
                },
                "start": 36,
                "end": 46
              },
              "start": 34,
              "end": 46
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 25,
            "end": 47
          }
        ],
        "start": 19,
        "end": 49
      },
      "declare": false,
      "start": 0,
      "end": 49
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Enumerator",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 71
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
              "start": 72,
              "end": 73
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 72,
            "end": 73
          }
        ],
        "start": 71,
        "end": 74
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
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
                        "name": "item",
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
                              "start": 97,
                              "end": 98
                            },
                            "typeArguments": null,
                            "start": 97,
                            "end": 98
                          },
                          "start": 95,
                          "end": 98
                        },
                        "start": 91,
                        "end": 98
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 107,
                            "end": 113
                          },
                          "start": 105,
                          "end": 113
                        },
                        "start": 100,
                        "end": 113
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 118,
                        "end": 125
                      },
                      "start": 115,
                      "end": 125
                    },
                    "start": 90,
                    "end": 125
                  },
                  "start": 88,
                  "end": 125
                },
                "start": 82,
                "end": 125
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 128,
                "end": 135
              },
              "start": 126,
              "end": 135
            },
            "start": 81,
            "end": 136
          }
        ],
        "start": 75,
        "end": 138
      },
      "declare": false,
      "start": 51,
      "end": 138
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "from",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 153
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
              "start": 154,
              "end": 155
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 154,
            "end": 155
          }
        ],
        "start": 153,
        "end": 156
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "array",
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
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 164,
                  "end": 165
                },
                "typeArguments": null,
                "start": 164,
                "end": 165
              },
              "start": 164,
              "end": 167
            },
            "start": 162,
            "end": 167
          },
          "start": 157,
          "end": 167
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Query",
            "optional": false,
            "typeAnnotation": null,
            "start": 170,
            "end": 175
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 176,
                  "end": 177
                },
                "typeArguments": null,
                "start": 176,
                "end": 177
              }
            ],
            "start": 175,
            "end": 178
          },
          "start": 170,
          "end": 178
        },
        "start": 168,
        "end": 178
      },
      "body": null,
      "expression": false,
      "start": 140,
      "end": 179
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "from",
        "optional": false,
        "typeAnnotation": null,
        "start": 189,
        "end": 193
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
              "start": 194,
              "end": 195
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 194,
            "end": 195
          }
        ],
        "start": 193,
        "end": 196
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "enumerator",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Enumerator",
                "optional": false,
                "typeAnnotation": null,
                "start": 209,
                "end": 219
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 220,
                      "end": 221
                    },
                    "typeArguments": null,
                    "start": 220,
                    "end": 221
                  }
                ],
                "start": 219,
                "end": 222
              },
              "start": 209,
              "end": 222
            },
            "start": 207,
            "end": 222
          },
          "start": 197,
          "end": 222
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Query",
            "optional": false,
            "typeAnnotation": null,
            "start": 225,
            "end": 230
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
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
              }
            ],
            "start": 230,
            "end": 233
          },
          "start": 225,
          "end": 233
        },
        "start": 223,
        "end": 233
      },
      "body": null,
      "expression": false,
      "start": 180,
      "end": 234
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "from",
        "optional": false,
        "typeAnnotation": null,
        "start": 244,
        "end": 248
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 254,
              "end": 257
            },
            "start": 252,
            "end": 257
          },
          "start": 249,
          "end": 257
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 260,
          "end": 263
        },
        "start": 258,
        "end": 263
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 286
            },
            "start": 270,
            "end": 287
          }
        ],
        "start": 264,
        "end": 289
      },
      "expression": false,
      "start": 235,
      "end": 289
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 289
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
    "value": "Query",
    "start": 10,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 25,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "Query",
    "start": 36,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 51,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "Enumerator",
    "start": 61,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 82,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 91,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 100,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 107,
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
    "value": "=>",
    "start": 115,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 118,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 128,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 140,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 149,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 157,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "Query",
    "start": 170,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 180,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 189,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "enumerator",
    "start": 197,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "Enumerator",
    "start": 209,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ":",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "Query",
    "start": 225,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "function",
    "start": 235,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 244,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 249,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 254,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 260,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 270,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 277,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 288,
    "end": 289
  }
]
```
