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
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
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
                "name": "connectModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 49
              },
              "typeParameters": null,
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
                        "name": "res",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 61,
                        "end": 64
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "req",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 66,
                        "end": 69
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "next",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 71,
                        "end": 75
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 78,
                        "end": 82
                      },
                      "start": 76,
                      "end": 82
                    },
                    "start": 60,
                    "end": 83
                  }
                ],
                "start": 50,
                "end": 89
              },
              "declare": false,
              "start": 26,
              "end": 89
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 19,
            "end": 89
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "connectExport",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 124
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
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 135,
                      "end": 138
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "mod",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "connectModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 146,
                                  "end": 159
                                },
                                "typeArguments": null,
                                "start": 146,
                                "end": 159
                              },
                              "start": 144,
                              "end": 159
                            },
                            "start": 141,
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
                              "name": "connectExport",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 164,
                              "end": 177
                            },
                            "typeArguments": null,
                            "start": 164,
                            "end": 177
                          },
                          "start": 161,
                          "end": 177
                        },
                        "start": 140,
                        "end": 177
                      },
                      "start": 138,
                      "end": 177
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 135,
                    "end": 178
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "listen",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 187,
                      "end": 193
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "port",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 202,
                                "end": 208
                              },
                              "start": 200,
                              "end": 208
                            },
                            "start": 196,
                            "end": 208
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 213,
                            "end": 217
                          },
                          "start": 210,
                          "end": 217
                        },
                        "start": 195,
                        "end": 217
                      },
                      "start": 193,
                      "end": 217
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 187,
                    "end": 218
                  }
                ],
                "start": 125,
                "end": 224
              },
              "declare": false,
              "start": 101,
              "end": 224
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 94,
            "end": 224
          }
        ],
        "start": 13,
        "end": 227
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 227
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 233,
            "end": 234
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 237,
            "end": 239
          },
          "definite": false,
          "start": 233,
          "end": 239
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "m2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 255,
                            "end": 257
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "connectExport",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 258,
                            "end": 271
                          },
                          "start": 255,
                          "end": 271
                        },
                        "typeArguments": null,
                        "start": 255,
                        "end": 271
                      },
                      "start": 253,
                      "end": 271
                    },
                    "start": 251,
                    "end": 272
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 277,
                      "end": 282
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 284,
                            "end": 286
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "connectModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 287,
                            "end": 300
                          },
                          "start": 284,
                          "end": 300
                        },
                        "typeArguments": null,
                        "start": 284,
                        "end": 300
                      },
                      "start": 282,
                      "end": 300
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 277,
                    "end": 301
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 306,
                      "end": 311
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
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 315,
                            "end": 317
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "connectModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 318,
                            "end": 331
                          },
                          "start": 315,
                          "end": 331
                        },
                        "typeArguments": null,
                        "start": 315,
                        "end": 331
                      },
                      "start": 313,
                      "end": 331
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 306,
                    "end": 332
                  }
                ],
                "start": 245,
                "end": 334
              },
              "start": 243,
              "end": 334
            },
            "start": 241,
            "end": 334
          },
          "init": null,
          "definite": false,
          "start": 241,
          "end": 334
        }
      ],
      "declare": false,
      "start": 229,
      "end": 335
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 346,
        "end": 348
      },
      "start": 337,
      "end": 349
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 349
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
    "value": "m2",
    "start": 10,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 26,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "connectModule",
    "start": 36,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "res",
    "start": 61,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "req",
    "start": 66,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 71,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 78,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 94,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 101,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "connectExport",
    "start": 111,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 135,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 141,
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
    "value": "connectModule",
    "start": 146,
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
    "value": "connectExport",
    "start": 164,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "listen",
    "start": 187,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "port",
    "start": 196,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 202,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 210,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 213,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 226,
    "end": 227
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 229,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 235,
    "end": 236
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 237,
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
    "value": "m2",
    "start": 241,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 255,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "connectExport",
    "start": 258,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 277,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 284,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "connectModule",
    "start": 287,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 306,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 315,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "connectModule",
    "start": 318,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 337,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 346,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 348,
    "end": 349
  }
]
```
