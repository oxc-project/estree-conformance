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
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 8,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 34
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IntrinsicElements",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 55,
                    "end": 72
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "e",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 91,
                                "end": 97
                              },
                              "start": 89,
                              "end": 97
                            },
                            "start": 88,
                            "end": 97
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 100,
                            "end": 102
                          },
                          "start": 98,
                          "end": 102
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 87,
                        "end": 103
                      }
                    ],
                    "start": 73,
                    "end": 113
                  },
                  "declare": false,
                  "start": 45,
                  "end": 113
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Element",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 132,
                    "end": 139
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
                          "name": "__domBrand",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 154,
                          "end": 164
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 166,
                            "end": 170
                          },
                          "start": 164,
                          "end": 170
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 154,
                        "end": 171
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 184,
                          "end": 192
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
                                "name": "Element",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 194,
                                "end": 201
                              },
                              "typeArguments": null,
                              "start": 194,
                              "end": 201
                            },
                            "start": 194,
                            "end": 203
                          },
                          "start": 192,
                          "end": 203
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 184,
                        "end": 204
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 217,
                          "end": 222
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 224,
                            "end": 226
                          },
                          "start": 222,
                          "end": 226
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 217,
                        "end": 227
                      }
                    ],
                    "start": 140,
                    "end": 237
                  },
                  "declare": false,
                  "start": 122,
                  "end": 237
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ElementAttributesProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 256,
                    "end": 281
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
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 284,
                          "end": 289
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 291,
                            "end": 294
                          },
                          "start": 289,
                          "end": 294
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 284,
                        "end": 295
                      }
                    ],
                    "start": 282,
                    "end": 297
                  },
                  "declare": false,
                  "start": 246,
                  "end": 297
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ElementChildrenAttribute",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 316,
                    "end": 340
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
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 343,
                          "end": 351
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 353,
                            "end": 356
                          },
                          "start": 351,
                          "end": 356
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 343,
                        "end": 357
                      }
                    ],
                    "start": 341,
                    "end": 359
                  },
                  "declare": false,
                  "start": 306,
                  "end": 359
                }
              ],
              "start": 35,
              "end": 365
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 21,
            "end": 365
          }
        ],
        "start": 15,
        "end": 367
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 0,
      "end": 367
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "dom",
          "optional": false,
          "typeAnnotation": null,
          "start": 384,
          "end": 387
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null,
                "start": 391,
                "end": 394
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 395,
                "end": 402
              },
              "start": 391,
              "end": 402
            },
            "typeArguments": null,
            "start": 391,
            "end": 402
          },
          "start": 389,
          "end": 402
        },
        "body": null,
        "expression": false,
        "start": 375,
        "end": 403
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 368,
      "end": 403
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 403
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
    "type": "Identifier",
    "value": "global",
    "start": 8,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 21,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 31,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 45,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 55,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 88,
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
    "value": "string",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 122,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 132,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "__domBrand",
    "start": 154,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 166,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 184,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 194,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 217,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 246,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "ElementAttributesProperty",
    "start": 256,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 284,
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
    "value": "any",
    "start": 291,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 306,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "ElementChildrenAttribute",
    "start": 316,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 343,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 353,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 368,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 375,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "dom",
    "start": 384,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 391,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 395,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "predom",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 23
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 43
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IntrinsicElements",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 64,
                      "end": 81
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 100,
                                  "end": 106
                                },
                                "start": 98,
                                "end": 106
                              },
                              "start": 97,
                              "end": 106
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [],
                              "start": 109,
                              "end": 111
                            },
                            "start": 107,
                            "end": 111
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 96,
                          "end": 112
                        }
                      ],
                      "start": 82,
                      "end": 122
                    },
                    "declare": false,
                    "start": 54,
                    "end": 122
                  },
                  {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Element",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 141,
                      "end": 148
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
                            "name": "__predomBrand",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 163,
                            "end": 176
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 178,
                              "end": 182
                            },
                            "start": 176,
                            "end": 182
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 163,
                          "end": 183
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 196,
                            "end": 204
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
                                  "name": "Element",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 206,
                                  "end": 213
                                },
                                "typeArguments": null,
                                "start": 206,
                                "end": 213
                              },
                              "start": 206,
                              "end": 215
                            },
                            "start": 204,
                            "end": 215
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 196,
                          "end": 216
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 229,
                            "end": 234
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [],
                              "start": 236,
                              "end": 238
                            },
                            "start": 234,
                            "end": 238
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 229,
                          "end": 239
                        }
                      ],
                      "start": 149,
                      "end": 249
                    },
                    "declare": false,
                    "start": 131,
                    "end": 249
                  },
                  {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ElementAttributesProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 268,
                      "end": 293
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
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 296,
                            "end": 301
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 303,
                              "end": 306
                            },
                            "start": 301,
                            "end": 306
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 296,
                          "end": 307
                        }
                      ],
                      "start": 294,
                      "end": 309
                    },
                    "declare": false,
                    "start": 258,
                    "end": 309
                  },
                  {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ElementChildrenAttribute",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 328,
                      "end": 352
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
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 355,
                            "end": 363
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 365,
                              "end": 368
                            },
                            "start": 363,
                            "end": 368
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 355,
                          "end": 369
                        }
                      ],
                      "start": 353,
                      "end": 371
                    },
                    "declare": false,
                    "start": 318,
                    "end": 371
                  }
                ],
                "start": 44,
                "end": 377
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 30,
              "end": 377
            }
          ],
          "start": 24,
          "end": 379
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 379
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 379
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "predom",
          "optional": false,
          "typeAnnotation": null,
          "start": 396,
          "end": 402
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "predom",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 406,
                  "end": 412
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JSX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 413,
                  "end": 416
                },
                "start": 406,
                "end": 416
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 417,
                "end": 424
              },
              "start": 406,
              "end": 424
            },
            "typeArguments": null,
            "start": 406,
            "end": 424
          },
          "start": 404,
          "end": 424
        },
        "body": null,
        "expression": false,
        "start": 387,
        "end": 425
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 380,
      "end": 425
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 425
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "predom",
    "start": 17,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 30,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 40,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 54,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 64,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 97,
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
    "value": "string",
    "start": 100,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 131,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 141,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "__predomBrand",
    "start": 163,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 178,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 196,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 206,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 229,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 258,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "ElementAttributesProperty",
    "start": 268,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 296,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 303,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 308,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 318,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "ElementChildrenAttribute",
    "start": 328,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 355,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 365,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 378,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 380,
    "end": 386
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 387,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "predom",
    "start": 396,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 403,
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
    "value": "predom",
    "start": 406,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 413,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 417,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "predom",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 34
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "predom",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 34
          },
          "importKind": "value",
          "start": 28,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./renderer2",
        "raw": "\"./renderer2\"",
        "start": 42,
        "end": 55
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 55
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "h",
            "start": 72,
            "end": 73
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 71,
          "end": 74
        },
        "children": [],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "h",
            "start": 76,
            "end": 77
          },
          "start": 74,
          "end": 78
        },
        "start": 71,
        "end": 78
      },
      "exportKind": "value",
      "start": 56,
      "end": 78
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 79
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "predom",
    "start": 28,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 37,
    "end": 41
  },
  {
    "type": "String",
    "value": "\"./renderer2\"",
    "start": 42,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 56,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 63,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 71,
    "end": 72
  },
  {
    "type": "JSXIdentifier",
    "value": "h",
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
    "value": "<",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 75,
    "end": 76
  },
  {
    "type": "JSXIdentifier",
    "value": "h",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 77,
    "end": 78
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "dom",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 28
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "dom",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 28
          },
          "importKind": "value",
          "start": 25,
          "end": 28
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./renderer",
        "raw": "\"./renderer\"",
        "start": 36,
        "end": 48
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 16,
      "end": 48
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "prerendered",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 67
          },
          "start": 56,
          "end": 67
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./component",
        "raw": "\"./component\"",
        "start": 73,
        "end": 86
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 49,
      "end": 87
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "elem",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 96
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "prerendered",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 110
          },
          "definite": false,
          "start": 92,
          "end": 110
        }
      ],
      "declare": false,
      "start": 88,
      "end": 111
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "elem",
          "optional": false,
          "typeAnnotation": null,
          "start": 112,
          "end": 116
        },
        "right": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "h",
              "start": 120,
              "end": 121
            },
            "typeArguments": null,
            "attributes": [],
            "selfClosing": false,
            "start": 119,
            "end": 122
          },
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "h",
              "start": 124,
              "end": 125
            },
            "start": 122,
            "end": 126
          },
          "start": 119,
          "end": 126
        },
        "start": 112,
        "end": 126
      },
      "directive": null,
      "start": 112,
      "end": 127
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 16,
  "end": 162
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 16,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "dom",
    "start": 25,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 31,
    "end": 35
  },
  {
    "type": "String",
    "value": "\"./renderer\"",
    "start": 36,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 49,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "prerendered",
    "start": 56,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 68,
    "end": 72
  },
  {
    "type": "String",
    "value": "\"./component\"",
    "start": 73,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 88,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "elem",
    "start": 92,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "prerendered",
    "start": 99,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "elem",
    "start": 112,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 119,
    "end": 120
  },
  {
    "type": "JSXIdentifier",
    "value": "h",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 123,
    "end": 124
  },
  {
    "type": "JSXIdentifier",
    "value": "h",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  }
]
```
