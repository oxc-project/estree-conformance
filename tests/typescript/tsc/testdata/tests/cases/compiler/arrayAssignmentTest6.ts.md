__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IState",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 37
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 38,
              "end": 45
            },
            "declare": false,
            "start": 21,
            "end": 45
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IToken",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 66
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
                    "name": "startIndex",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 77,
                    "end": 87
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 89,
                      "end": 95
                    },
                    "start": 87,
                    "end": 95
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 77,
                  "end": 96
                }
              ],
              "start": 67,
              "end": 102
            },
            "declare": false,
            "start": 50,
            "end": 102
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ILineTokens",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 128
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
                    "name": "tokens",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 139,
                    "end": 145
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IToken",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 147,
                          "end": 153
                        },
                        "typeArguments": null,
                        "start": 147,
                        "end": 153
                      },
                      "start": 147,
                      "end": 155
                    },
                    "start": 145,
                    "end": 155
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 139,
                  "end": 156
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "endState",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 165,
                    "end": 173
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IState",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 175,
                        "end": 181
                      },
                      "typeArguments": null,
                      "start": 175,
                      "end": 181
                    },
                    "start": 173,
                    "end": 181
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 165,
                  "end": 182
                }
              ],
              "start": 129,
              "end": 188
            },
            "declare": false,
            "start": 107,
            "end": 188
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IMode",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 208
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tokenize",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 219,
                    "end": 227
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "line",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 233,
                          "end": 239
                        },
                        "start": 232,
                        "end": 239
                      },
                      "start": 228,
                      "end": 239
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IState",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 247,
                            "end": 253
                          },
                          "typeArguments": null,
                          "start": 247,
                          "end": 253
                        },
                        "start": 246,
                        "end": 253
                      },
                      "start": 241,
                      "end": 253
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "includeStates",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 269,
                          "end": 276
                        },
                        "start": 268,
                        "end": 276
                      },
                      "start": 255,
                      "end": 276
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ILineTokens",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 278,
                        "end": 289
                      },
                      "typeArguments": null,
                      "start": 278,
                      "end": 289
                    },
                    "start": 277,
                    "end": 289
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 219,
                  "end": 290
                }
              ],
              "start": 209,
              "end": 296
            },
            "declare": false,
            "start": 193,
            "end": 296
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bug",
                "optional": false,
                "typeAnnotation": null,
                "start": 314,
                "end": 317
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IMode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 329,
                    "end": 334
                  },
                  "typeArguments": null,
                  "start": 329,
                  "end": 334
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tokenize",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 352,
                      "end": 360
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
                          "name": "line",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 366,
                              "end": 372
                            },
                            "start": 365,
                            "end": 372
                          },
                          "start": 361,
                          "end": 372
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "tokens",
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
                                  "name": "IToken",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 381,
                                  "end": 387
                                },
                                "typeArguments": null,
                                "start": 381,
                                "end": 387
                              },
                              "start": 381,
                              "end": 389
                            },
                            "start": 380,
                            "end": 389
                          },
                          "start": 374,
                          "end": 389
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "includeStates",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 405,
                              "end": 412
                            },
                            "start": 404,
                            "end": 412
                          },
                          "start": 391,
                          "end": 412
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ILineTokens",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 414,
                            "end": 425
                          },
                          "typeArguments": null,
                          "start": 414,
                          "end": 425
                        },
                        "start": 413,
                        "end": 425
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
                              "start": 447,
                              "end": 451
                            },
                            "start": 440,
                            "end": 452
                          }
                        ],
                        "start": 426,
                        "end": 462
                      },
                      "expression": false,
                      "start": 360,
                      "end": 462
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 345,
                    "end": 462
                  }
                ],
                "start": 335,
                "end": 468
              },
              "abstract": false,
              "declare": false,
              "start": 308,
              "end": 468
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 301,
            "end": 468
          }
        ],
        "start": 15,
        "end": 474
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 474
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 474
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 10,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 21,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "IState",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 50,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "IToken",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "startIndex",
    "start": 77,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 107,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "ILineTokens",
    "start": 117,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "tokens",
    "start": 139,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "IToken",
    "start": 147,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "endState",
    "start": 165,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "IState",
    "start": 175,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 193,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "IMode",
    "start": 203,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "tokenize",
    "start": 219,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "line",
    "start": 228,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 233,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 241,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "IState",
    "start": 247,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "includeStates",
    "start": 255,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 269,
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
    "value": ":",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "ILineTokens",
    "start": 278,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 301,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 308,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "Bug",
    "start": 314,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 318,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "IMode",
    "start": 329,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 335,
    "end": 336
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 345,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "tokenize",
    "start": 352,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "line",
    "start": 361,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 366,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "tokens",
    "start": 374,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "IToken",
    "start": 381,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "includeStates",
    "start": 391,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 405,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "ILineTokens",
    "start": 414,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 426,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 440,
    "end": 446
  },
  {
    "type": "Null",
    "value": "null",
    "start": 447,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 473,
    "end": 474
  }
]
```
