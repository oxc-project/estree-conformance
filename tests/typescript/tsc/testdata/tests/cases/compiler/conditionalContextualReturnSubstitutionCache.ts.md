__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "cast",
          "optional": false,
          "typeAnnotation": null,
          "start": 76,
          "end": 80
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
                "start": 81,
                "end": 82
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 81,
              "end": 82
            }
          ],
          "start": 80,
          "end": 83
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
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 92
                },
                "typeArguments": null,
                "start": 91,
                "end": 92
              },
              "start": 89,
              "end": 92
            },
            "start": 84,
            "end": 92
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
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
                  "name": "as",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 103
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 106,
                            "end": 107
                          },
                          "constraint": {
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
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 106,
                          "end": 117
                        }
                      ],
                      "start": 105,
                      "end": 118
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSConditionalType",
                        "checkType": {
                          "type": "TSNullKeyword",
                          "start": 124,
                          "end": 128
                        },
                        "extendsType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 137,
                            "end": 138
                          },
                          "typeArguments": null,
                          "start": 137,
                          "end": 138
                        },
                        "trueType": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 141,
                                "end": 142
                              },
                              "typeArguments": null,
                              "start": 141,
                              "end": 142
                            },
                            {
                              "type": "TSNullKeyword",
                              "start": 145,
                              "end": 149
                            }
                          ],
                          "start": 141,
                          "end": 149
                        },
                        "falseType": {
                          "type": "TSConditionalType",
                          "checkType": {
                            "type": "TSUndefinedKeyword",
                            "start": 152,
                            "end": 161
                          },
                          "extendsType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 170,
                              "end": 171
                            },
                            "typeArguments": null,
                            "start": 170,
                            "end": 171
                          },
                          "trueType": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 174,
                                  "end": 175
                                },
                                "typeArguments": null,
                                "start": 174,
                                "end": 175
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 178,
                                "end": 187
                              }
                            ],
                            "start": 174,
                            "end": 187
                          },
                          "falseType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 190,
                              "end": 191
                            },
                            "typeArguments": null,
                            "start": 190,
                            "end": 191
                          },
                          "start": 152,
                          "end": 191
                        },
                        "start": 124,
                        "end": 191
                      },
                      "start": 121,
                      "end": 191
                    },
                    "start": 105,
                    "end": 191
                  },
                  "start": 103,
                  "end": 191
                },
                "accessibility": null,
                "static": false,
                "start": 101,
                "end": 192
              }
            ],
            "start": 95,
            "end": 194
          },
          "start": 93,
          "end": 194
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "as",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 218,
                      "end": 220
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 223,
                              "end": 224
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 233,
                                "end": 234
                              },
                              "typeArguments": null,
                              "start": 233,
                              "end": 234
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 223,
                            "end": 234
                          }
                        ],
                        "start": 222,
                        "end": 235
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSConditionalType",
                          "checkType": {
                            "type": "TSNullKeyword",
                            "start": 239,
                            "end": 243
                          },
                          "extendsType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 252,
                              "end": 253
                            },
                            "typeArguments": null,
                            "start": 252,
                            "end": 253
                          },
                          "trueType": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 256,
                                  "end": 257
                                },
                                "typeArguments": null,
                                "start": 256,
                                "end": 257
                              },
                              {
                                "type": "TSNullKeyword",
                                "start": 260,
                                "end": 264
                              }
                            ],
                            "start": 256,
                            "end": 264
                          },
                          "falseType": {
                            "type": "TSConditionalType",
                            "checkType": {
                              "type": "TSUndefinedKeyword",
                              "start": 267,
                              "end": 276
                            },
                            "extendsType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 285,
                                "end": 286
                              },
                              "typeArguments": null,
                              "start": 285,
                              "end": 286
                            },
                            "trueType": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "K",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 289,
                                    "end": 290
                                  },
                                  "typeArguments": null,
                                  "start": 289,
                                  "end": 290
                                },
                                {
                                  "type": "TSUndefinedKeyword",
                                  "start": 293,
                                  "end": 302
                                }
                              ],
                              "start": 289,
                              "end": 302
                            },
                            "falseType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 305,
                                "end": 306
                              },
                              "typeArguments": null,
                              "start": 305,
                              "end": 306
                            },
                            "start": 267,
                            "end": 306
                          },
                          "start": 239,
                          "end": 306
                        },
                        "start": 237,
                        "end": 306
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "TSAsExpression",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 331,
                                "end": 336
                              },
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 340,
                                  "end": 341
                                },
                                "typeArguments": null,
                                "start": 340,
                                "end": 341
                              },
                              "start": 331,
                              "end": 341
                            },
                            "start": 324,
                            "end": 342
                          }
                        ],
                        "start": 310,
                        "end": 352
                      },
                      "id": null,
                      "generator": false,
                      "start": 222,
                      "end": 352
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 218,
                    "end": 352
                  }
                ],
                "start": 208,
                "end": 359
              },
              "start": 201,
              "end": 360
            }
          ],
          "start": 195,
          "end": 362
        },
        "expression": false,
        "start": 67,
        "end": 362
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 60,
      "end": 362
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 60,
  "end": 362
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 60,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 67,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "cast",
    "start": 76,
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
    "value": "T",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 84,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 101,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 106,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 108,
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
    "value": ">",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 121,
    "end": 123
  },
  {
    "type": "Null",
    "value": "null",
    "start": 124,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 129,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 143,
    "end": 144
  },
  {
    "type": "Null",
    "value": "null",
    "start": 145,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 152,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 162,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 178,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 201,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 218,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 225,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Null",
    "value": "null",
    "start": 239,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 244,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 258,
    "end": 259
  },
  {
    "type": "Null",
    "value": "null",
    "start": 260,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 267,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 277,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 293,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 307,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 324,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 331,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 337,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 361,
    "end": 362
  }
]
```
