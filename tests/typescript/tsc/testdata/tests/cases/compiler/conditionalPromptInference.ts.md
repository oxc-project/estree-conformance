__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createPrompt",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 29
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
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 35
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 30,
            "end": 35
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Config",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 43
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 37,
            "end": 43
          }
        ],
        "start": 29,
        "end": 44
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "view",
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
                  "name": "config",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Config",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 65,
                        "end": 71
                      },
                      "typeArguments": null,
                      "start": 65,
                      "end": 71
                    },
                    "start": 63,
                    "end": 71
                  },
                  "start": 57,
                  "end": 71
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "done",
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
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 87,
                                "end": 92
                              },
                              "typeArguments": null,
                              "start": 87,
                              "end": 92
                            },
                            "start": 85,
                            "end": 92
                          },
                          "start": 80,
                          "end": 92
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 97,
                          "end": 101
                        },
                        "start": 94,
                        "end": 101
                      },
                      "start": 79,
                      "end": 101
                    },
                    "start": 77,
                    "end": 101
                  },
                  "start": 73,
                  "end": 101
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 106,
                  "end": 110
                },
                "start": 103,
                "end": 110
              },
              "start": 56,
              "end": 110
            },
            "start": 54,
            "end": 110
          },
          "start": 50,
          "end": 110
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "config",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Config",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 124,
                    "end": 130
                  },
                  "typeArguments": null,
                  "start": 124,
                  "end": 130
                },
                "start": 122,
                "end": 130
              },
              "start": 116,
              "end": 130
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 135,
                "end": 140
              },
              "typeArguments": null,
              "start": 135,
              "end": 140
            },
            "start": 132,
            "end": 140
          },
          "start": 115,
          "end": 140
        },
        "start": 113,
        "end": 140
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 141
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
            "name": "numberPrompt",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 161
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createPrompt",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 176
            },
            "typeArguments": null,
            "arguments": [
              {
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
                        "name": "Required",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 178,
                        "end": 186
                      },
                      "constraint": {
                        "type": "TSBooleanKeyword",
                        "start": 195,
                        "end": 202
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 178,
                      "end": 202
                    }
                  ],
                  "start": 177,
                  "end": 203
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "config",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "required",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 219,
                              "end": 227
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Required",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 230,
                                  "end": 238
                                },
                                "typeArguments": null,
                                "start": 230,
                                "end": 238
                              },
                              "start": 228,
                              "end": 238
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 219,
                            "end": 238
                          }
                        ],
                        "start": 217,
                        "end": 240
                      },
                      "start": 215,
                      "end": 240
                    },
                    "start": 209,
                    "end": 240
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "done",
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
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSConditionalType",
                                "checkType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Required",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 260,
                                    "end": 268
                                  },
                                  "typeArguments": null,
                                  "start": 260,
                                  "end": 268
                                },
                                "extendsType": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": true,
                                    "raw": "true",
                                    "start": 277,
                                    "end": 281
                                  },
                                  "start": 277,
                                  "end": 281
                                },
                                "trueType": {
                                  "type": "TSNumberKeyword",
                                  "start": 284,
                                  "end": 290
                                },
                                "falseType": {
                                  "type": "TSUnionType",
                                  "types": [
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 293,
                                      "end": 299
                                    },
                                    {
                                      "type": "TSUndefinedKeyword",
                                      "start": 302,
                                      "end": 311
                                    }
                                  ],
                                  "start": 293,
                                  "end": 311
                                },
                                "start": 260,
                                "end": 311
                              },
                              "start": 258,
                              "end": 311
                            },
                            "start": 253,
                            "end": 311
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 316,
                            "end": 320
                          },
                          "start": 313,
                          "end": 320
                        },
                        "start": 252,
                        "end": 320
                      },
                      "start": 250,
                      "end": 320
                    },
                    "start": 246,
                    "end": 320
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 327,
                  "end": 329
                },
                "id": null,
                "generator": false,
                "start": 177,
                "end": 329
              }
            ],
            "optional": false,
            "start": 164,
            "end": 330
          },
          "definite": false,
          "start": 149,
          "end": 330
        }
      ],
      "declare": false,
      "start": 143,
      "end": 331
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
            "name": "required",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 349,
                "end": 355
              },
              "start": 347,
              "end": 355
            },
            "start": 339,
            "end": 355
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberPrompt",
              "optional": false,
              "typeAnnotation": null,
              "start": 358,
              "end": 370
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 371,
                    "end": 375
                  },
                  "start": 371,
                  "end": 375
                }
              ],
              "start": 370,
              "end": 376
            },
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
                      "name": "required",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 379,
                      "end": 387
                    },
                    "value": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 389,
                      "end": 393
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 379,
                    "end": 393
                  }
                ],
                "start": 377,
                "end": 395
              }
            ],
            "optional": false,
            "start": 358,
            "end": 396
          },
          "definite": false,
          "start": 339,
          "end": 396
        }
      ],
      "declare": false,
      "start": 333,
      "end": 397
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
            "name": "optional",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 414,
                    "end": 420
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 423,
                    "end": 432
                  }
                ],
                "start": 414,
                "end": 432
              },
              "start": 412,
              "end": 432
            },
            "start": 404,
            "end": 432
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberPrompt",
              "optional": false,
              "typeAnnotation": null,
              "start": 435,
              "end": 447
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 448,
                    "end": 453
                  },
                  "start": 448,
                  "end": 453
                }
              ],
              "start": 447,
              "end": 454
            },
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
                      "name": "required",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 457,
                      "end": 465
                    },
                    "value": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 467,
                      "end": 472
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 457,
                    "end": 472
                  }
                ],
                "start": 455,
                "end": 474
              }
            ],
            "optional": false,
            "start": 435,
            "end": 475
          },
          "definite": false,
          "start": 404,
          "end": 475
        }
      ],
      "declare": false,
      "start": 398,
      "end": 476
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 476
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "createPrompt",
    "start": 17,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 30,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "Config",
    "start": 37,
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
    "value": "(",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "view",
    "start": 50,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 57,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "Config",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 73,
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
    "value": "value",
    "start": 80,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 87,
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
    "value": "=>",
    "start": 94,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 97,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 103,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 106,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 116,
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
    "value": "Config",
    "start": 124,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 132,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 135,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 143,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "numberPrompt",
    "start": 149,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "createPrompt",
    "start": 164,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "Required",
    "start": 178,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 187,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 195,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "config",
    "start": 209,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 219,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "Required",
    "start": 230,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 246,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 253,
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
    "value": "Required",
    "start": 260,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 269,
    "end": 276
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 277,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 284,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 293,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 302,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 313,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 316,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 324,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 333,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 339,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 349,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "numberPrompt",
    "start": 358,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 370,
    "end": 371
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 371,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 379,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 387,
    "end": 388
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 389,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 396,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 398,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 404,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 414,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 423,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "numberPrompt",
    "start": 435,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 447,
    "end": 448
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 448,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 457,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 465,
    "end": 466
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 467,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 475,
    "end": 476
  }
]
```
