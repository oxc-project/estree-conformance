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
        "name": "Chainable",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 41
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
              "start": 42,
              "end": 43
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 42,
            "end": 43
          }
        ],
        "start": 41,
        "end": 44
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 54
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
                  "start": 58,
                  "end": 59
                },
                "typeArguments": null,
                "start": 58,
                "end": 59
              },
              "start": 56,
              "end": 59
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 49,
            "end": 60
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mapValues",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 72
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 73,
                    "end": 74
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 73,
                  "end": 74
                }
              ],
              "start": 72,
              "end": 75
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
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
                        "name": "v",
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
                                "start": 86,
                                "end": 87
                              },
                              "typeArguments": null,
                              "start": 86,
                              "end": 87
                            },
                            "indexType": {
                              "type": "TSTypeOperator",
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 94,
                                  "end": 95
                                },
                                "typeArguments": null,
                                "start": 94,
                                "end": 95
                              },
                              "start": 88,
                              "end": 95
                            },
                            "start": 86,
                            "end": 96
                          },
                          "start": 84,
                          "end": 96
                        },
                        "start": 83,
                        "end": 96
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 101,
                          "end": 102
                        },
                        "typeArguments": null,
                        "start": 101,
                        "end": 102
                      },
                      "start": 98,
                      "end": 102
                    },
                    "start": 82,
                    "end": 102
                  },
                  "start": 80,
                  "end": 102
                },
                "start": 76,
                "end": 102
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Chainable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 105,
                  "end": 114
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 117,
                        "end": 118
                      },
                      "constraint": {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 128,
                            "end": 129
                          },
                          "typeArguments": null,
                          "start": 128,
                          "end": 129
                        },
                        "start": 122,
                        "end": 129
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 132,
                          "end": 133
                        },
                        "typeArguments": null,
                        "start": 132,
                        "end": 133
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 115,
                      "end": 134
                    }
                  ],
                  "start": 114,
                  "end": 135
                },
                "start": 105,
                "end": 135
              },
              "start": 103,
              "end": 135
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 63,
            "end": 136
          }
        ],
        "start": 45,
        "end": 138
      },
      "declare": false,
      "start": 22,
      "end": 138
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "chain",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 162
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 163,
              "end": 164
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 163,
            "end": 164
          }
        ],
        "start": 162,
        "end": 165
      },
      "params": [
        {
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
                "start": 169,
                "end": 170
              },
              "typeArguments": null,
              "start": 169,
              "end": 170
            },
            "start": 167,
            "end": 170
          },
          "start": 166,
          "end": 170
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Chainable",
            "optional": false,
            "typeAnnotation": null,
            "start": 173,
            "end": 182
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
                  "start": 183,
                  "end": 184
                },
                "typeArguments": null,
                "start": 183,
                "end": 184
              }
            ],
            "start": 182,
            "end": 185
          },
          "start": 173,
          "end": 185
        },
        "start": 171,
        "end": 185
      },
      "body": null,
      "expression": false,
      "start": 140,
      "end": 186
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
            "name": "square",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 200
          },
          "init": {
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
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 207,
                    "end": 213
                  },
                  "start": 205,
                  "end": 213
                },
                "start": 204,
                "end": 213
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 219
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 222,
                "end": 223
              },
              "start": 218,
              "end": 223
            },
            "id": null,
            "generator": false,
            "start": 203,
            "end": 223
          },
          "definite": false,
          "start": 194,
          "end": 223
        }
      ],
      "declare": false,
      "start": 188,
      "end": 224
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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 232,
            "end": 233
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "chain",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 236,
                      "end": 241
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 243,
                              "end": 244
                            },
                            "value": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 246,
                              "end": 247
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 243,
                            "end": 247
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 249,
                              "end": 250
                            },
                            "value": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 252,
                              "end": 253
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 249,
                            "end": 253
                          }
                        ],
                        "start": 242,
                        "end": 254
                      }
                    ],
                    "optional": false,
                    "start": 236,
                    "end": 255
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapValues",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 256,
                    "end": 265
                  },
                  "optional": false,
                  "computed": false,
                  "start": 236,
                  "end": 265
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "square",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 266,
                    "end": 272
                  }
                ],
                "optional": false,
                "start": 236,
                "end": 273
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 279
              },
              "optional": false,
              "computed": false,
              "start": 236,
              "end": 279
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 236,
            "end": 281
          },
          "definite": false,
          "start": 232,
          "end": 281
        }
      ],
      "declare": false,
      "start": 226,
      "end": 282
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 282
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 22,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "Chainable",
    "start": 32,
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
    "value": ">",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 49,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "mapValues",
    "start": 63,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 76,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 88,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 98,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "Chainable",
    "start": 105,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 119,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 122,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 134,
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
    "type": "Identifier",
    "value": "declare",
    "start": 140,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 148,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "chain",
    "start": 157,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "Chainable",
    "start": 173,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 188,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "square",
    "start": 194,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 207,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 215,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "const",
    "start": 226,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "chain",
    "start": 236,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Numeric",
    "value": "1",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 250,
    "end": 251
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "mapValues",
    "start": 256,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "square",
    "start": 266,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 274,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  }
]
```
