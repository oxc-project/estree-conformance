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
        "name": "lf",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 76
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Transaction",
                "optional": false,
                "typeAnnotation": null,
                "start": 98,
                "end": 109
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
                      "name": "attach",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 116,
                      "end": 122
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "query",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "query",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 130,
                                "end": 135
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Builder",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 136,
                                "end": 143
                              },
                              "start": 130,
                              "end": 143
                            },
                            "typeArguments": null,
                            "start": 130,
                            "end": 143
                          },
                          "start": 128,
                          "end": 143
                        },
                        "start": 123,
                        "end": 143
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 146,
                          "end": 153
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Array",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 154,
                                "end": 159
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Object",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 160,
                                      "end": 166
                                    },
                                    "typeArguments": null,
                                    "start": 160,
                                    "end": 166
                                  }
                                ],
                                "start": 159,
                                "end": 167
                              },
                              "start": 154,
                              "end": 167
                            }
                          ],
                          "start": 153,
                          "end": 168
                        },
                        "start": 146,
                        "end": 168
                      },
                      "start": 144,
                      "end": 168
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 116,
                    "end": 168
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "begin",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 173,
                      "end": 178
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "scope",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Array",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 186,
                              "end": 191
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "schema",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 192,
                                      "end": 198
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Table",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 199,
                                      "end": 204
                                    },
                                    "start": 192,
                                    "end": 204
                                  },
                                  "typeArguments": null,
                                  "start": 192,
                                  "end": 204
                                }
                              ],
                              "start": 191,
                              "end": 205
                            },
                            "start": 186,
                            "end": 205
                          },
                          "start": 184,
                          "end": 205
                        },
                        "start": 179,
                        "end": 205
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 208,
                          "end": 215
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSVoidKeyword",
                              "start": 216,
                              "end": 220
                            }
                          ],
                          "start": 215,
                          "end": 221
                        },
                        "start": 208,
                        "end": 221
                      },
                      "start": 206,
                      "end": 221
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 173,
                    "end": 221
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "commit",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 226,
                      "end": 232
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
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 236,
                          "end": 243
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSVoidKeyword",
                              "start": 244,
                              "end": 248
                            }
                          ],
                          "start": 243,
                          "end": 249
                        },
                        "start": 236,
                        "end": 249
                      },
                      "start": 234,
                      "end": 249
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 226,
                    "end": 249
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "exec",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 254,
                      "end": 258
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "queries",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Array",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 268,
                              "end": 273
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "query",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 274,
                                      "end": 279
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Builder",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 280,
                                      "end": 287
                                    },
                                    "start": 274,
                                    "end": 287
                                  },
                                  "typeArguments": null,
                                  "start": 274,
                                  "end": 287
                                }
                              ],
                              "start": 273,
                              "end": 288
                            },
                            "start": 268,
                            "end": 288
                          },
                          "start": 266,
                          "end": 288
                        },
                        "start": 259,
                        "end": 288
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 291,
                          "end": 298
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Array",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 299,
                                "end": 304
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 305,
                                      "end": 310
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Object",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 311,
                                            "end": 317
                                          },
                                          "typeArguments": null,
                                          "start": 311,
                                          "end": 317
                                        }
                                      ],
                                      "start": 310,
                                      "end": 318
                                    },
                                    "start": 305,
                                    "end": 318
                                  }
                                ],
                                "start": 304,
                                "end": 319
                              },
                              "start": 299,
                              "end": 319
                            }
                          ],
                          "start": 298,
                          "end": 320
                        },
                        "start": 291,
                        "end": 320
                      },
                      "start": 289,
                      "end": 320
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 254,
                    "end": 320
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rollback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 325,
                      "end": 333
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
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 337,
                          "end": 344
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSVoidKeyword",
                              "start": 345,
                              "end": 349
                            }
                          ],
                          "start": 344,
                          "end": 350
                        },
                        "start": 337,
                        "end": 350
                      },
                      "start": 335,
                      "end": 350
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 325,
                    "end": 350
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "stats",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 355,
                      "end": 360
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
                          "name": "TransactionStats",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 364,
                          "end": 380
                        },
                        "typeArguments": null,
                        "start": 364,
                        "end": 380
                      },
                      "start": 362,
                      "end": 380
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 355,
                    "end": 380
                  }
                ],
                "start": 110,
                "end": 384
              },
              "declare": false,
              "start": 88,
              "end": 384
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 81,
            "end": 384
          }
        ],
        "start": 77,
        "end": 386
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 56,
      "end": 386
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 386
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 56,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 64,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "lf",
    "start": 74,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 81,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 88,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "Transaction",
    "start": 98,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "attach",
    "start": 116,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "query",
    "start": 123,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "query",
    "start": 130,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "Builder",
    "start": 136,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 146,
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
    "value": "Array",
    "start": 154,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 160,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "begin",
    "start": 173,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "scope",
    "start": 179,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 186,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 192,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "Table",
    "start": 199,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 208,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 216,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "commit",
    "start": 226,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 236,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 243,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 244,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "exec",
    "start": 254,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "queries",
    "start": 259,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 268,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "query",
    "start": 274,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "Builder",
    "start": 280,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 291,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 299,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 305,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 311,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "rollback",
    "start": 325,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 337,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 344,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 345,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "stats",
    "start": 355,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "TransactionStats",
    "start": 364,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 385,
    "end": 386
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "lf",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 2
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Transaction",
            "optional": false,
            "typeAnnotation": null,
            "start": 3,
            "end": 14
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 14
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 28,
            "end": 30
          },
          "expression": false,
          "start": 17,
          "end": 30
        },
        "start": 0,
        "end": 30
      },
      "directive": null,
      "start": 0,
      "end": 31
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "lf",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 109
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Transaction",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 121
              },
              "optional": false,
              "computed": false,
              "start": 107,
              "end": 121
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 131
            },
            "optional": false,
            "computed": false,
            "start": 107,
            "end": 131
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "begin",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 137
          },
          "optional": false,
          "computed": false,
          "start": 107,
          "end": 137
        },
        "right": {
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
              "name": "scope",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 154
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 156,
            "end": 158
          },
          "expression": false,
          "start": 140,
          "end": 158
        },
        "start": 107,
        "end": 158
      },
      "directive": null,
      "start": 107,
      "end": 159
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 159
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "lf",
    "start": 0,
    "end": 2
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "Transaction",
    "start": 3,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 17,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "lf",
    "start": 107,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "Transaction",
    "start": 110,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 122,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "begin",
    "start": 132,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 140,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "scope",
    "start": 149,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  }
]
```
