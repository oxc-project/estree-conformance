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
          "name": "dom",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 20
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
                "start": 37,
                "end": 40
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
                      "start": 61,
                      "end": 78
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
                                  "start": 97,
                                  "end": 103
                                },
                                "start": 95,
                                "end": 103
                              },
                              "start": 94,
                              "end": 103
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [],
                              "start": 106,
                              "end": 108
                            },
                            "start": 104,
                            "end": 108
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 93,
                          "end": 109
                        }
                      ],
                      "start": 79,
                      "end": 119
                    },
                    "declare": false,
                    "start": 51,
                    "end": 119
                  },
                  {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Element",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 138,
                      "end": 145
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
                            "start": 160,
                            "end": 170
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 172,
                              "end": 176
                            },
                            "start": 170,
                            "end": 176
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 160,
                          "end": 177
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
                            "start": 190,
                            "end": 195
                          },
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
                                    "name": "children",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 215,
                                    "end": 223
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
                                          "start": 226,
                                          "end": 233
                                        },
                                        "typeArguments": null,
                                        "start": 226,
                                        "end": 233
                                      },
                                      "start": 226,
                                      "end": 235
                                    },
                                    "start": 224,
                                    "end": 235
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 215,
                                  "end": 236
                                }
                              ],
                              "start": 197,
                              "end": 250
                            },
                            "start": 195,
                            "end": 250
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 190,
                          "end": 251
                        }
                      ],
                      "start": 146,
                      "end": 261
                    },
                    "declare": false,
                    "start": 128,
                    "end": 261
                  },
                  {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ElementClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 280,
                      "end": 292
                    },
                    "typeParameters": null,
                    "extends": [
                      {
                        "type": "TSInterfaceHeritage",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Element",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 301,
                          "end": 308
                        },
                        "typeArguments": null,
                        "start": 301,
                        "end": 308
                      }
                    ],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [
                        {
                          "type": "TSMethodSignature",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "render",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 323,
                            "end": 329
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
                                "name": "Element",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 333,
                                "end": 340
                              },
                              "typeArguments": null,
                              "start": 333,
                              "end": 340
                            },
                            "start": 331,
                            "end": 340
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false,
                          "start": 323,
                          "end": 341
                        }
                      ],
                      "start": 309,
                      "end": 351
                    },
                    "declare": false,
                    "start": 270,
                    "end": 351
                  },
                  {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ElementAttributesProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 370,
                      "end": 395
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
                            "start": 398,
                            "end": 403
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 405,
                              "end": 408
                            },
                            "start": 403,
                            "end": 408
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 398,
                          "end": 409
                        }
                      ],
                      "start": 396,
                      "end": 411
                    },
                    "declare": false,
                    "start": 360,
                    "end": 411
                  },
                  {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ElementChildrenAttribute",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 430,
                      "end": 454
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
                            "start": 457,
                            "end": 465
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 467,
                              "end": 470
                            },
                            "start": 465,
                            "end": 470
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 457,
                          "end": 471
                        }
                      ],
                      "start": 455,
                      "end": 473
                    },
                    "declare": false,
                    "start": 420,
                    "end": 473
                  }
                ],
                "start": 41,
                "end": 479
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 27,
              "end": 479
            }
          ],
          "start": 21,
          "end": 481
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 481
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 481
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
          "start": 498,
          "end": 501
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
                  "name": "dom",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 505,
                  "end": 508
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JSX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 509,
                  "end": 512
                },
                "start": 505,
                "end": 512
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 513,
                "end": 520
              },
              "start": 505,
              "end": 520
            },
            "typeArguments": null,
            "start": 505,
            "end": 520
          },
          "start": 503,
          "end": 520
        },
        "body": null,
        "expression": false,
        "start": 489,
        "end": 521
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 482,
      "end": 521
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 521
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
    "value": "dom",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 27,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 37,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 51,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 61,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 94,
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
    "value": "string",
    "start": 97,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 128,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 138,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "__domBrand",
    "start": 160,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 172,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 190,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 215,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 226,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 270,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "ElementClass",
    "start": 280,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 293,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 301,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 323,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 333,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 350,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 360,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "ElementAttributesProperty",
    "start": 370,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 398,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 405,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 410,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 420,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "ElementChildrenAttribute",
    "start": 430,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "children",
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
    "type": "Identifier",
    "value": "any",
    "start": 467,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 480,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 482,
    "end": 488
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 489,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "dom",
    "start": 498,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "dom",
    "start": 505,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 509,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 513,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521
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
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 196,
                            "end": 201
                          },
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
                                    "name": "children",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 221,
                                    "end": 229
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
                                          "start": 232,
                                          "end": 239
                                        },
                                        "typeArguments": null,
                                        "start": 232,
                                        "end": 239
                                      },
                                      "start": 232,
                                      "end": 241
                                    },
                                    "start": 230,
                                    "end": 241
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 221,
                                  "end": 242
                                }
                              ],
                              "start": 203,
                              "end": 256
                            },
                            "start": 201,
                            "end": 256
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 196,
                          "end": 257
                        }
                      ],
                      "start": 149,
                      "end": 267
                    },
                    "declare": false,
                    "start": 131,
                    "end": 267
                  },
                  {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ElementClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 286,
                      "end": 298
                    },
                    "typeParameters": null,
                    "extends": [
                      {
                        "type": "TSInterfaceHeritage",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Element",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 307,
                          "end": 314
                        },
                        "typeArguments": null,
                        "start": 307,
                        "end": 314
                      }
                    ],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [
                        {
                          "type": "TSMethodSignature",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "render",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 329,
                            "end": 335
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
                                "name": "Element",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 339,
                                "end": 346
                              },
                              "typeArguments": null,
                              "start": 339,
                              "end": 346
                            },
                            "start": 337,
                            "end": 346
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false,
                          "start": 329,
                          "end": 347
                        }
                      ],
                      "start": 315,
                      "end": 357
                    },
                    "declare": false,
                    "start": 276,
                    "end": 357
                  },
                  {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ElementAttributesProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 376,
                      "end": 401
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
                            "start": 404,
                            "end": 409
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 411,
                              "end": 414
                            },
                            "start": 409,
                            "end": 414
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 404,
                          "end": 415
                        }
                      ],
                      "start": 402,
                      "end": 417
                    },
                    "declare": false,
                    "start": 366,
                    "end": 417
                  },
                  {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ElementChildrenAttribute",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 436,
                      "end": 460
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
                            "start": 463,
                            "end": 471
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 473,
                              "end": 476
                            },
                            "start": 471,
                            "end": 476
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 463,
                          "end": 477
                        }
                      ],
                      "start": 461,
                      "end": 479
                    },
                    "declare": false,
                    "start": 426,
                    "end": 479
                  }
                ],
                "start": 44,
                "end": 485
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 30,
              "end": 485
            }
          ],
          "start": 24,
          "end": 487
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 487
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 487
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
          "start": 504,
          "end": 510
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
                  "start": 514,
                  "end": 520
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JSX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 521,
                  "end": 524
                },
                "start": 514,
                "end": 524
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 525,
                "end": 532
              },
              "start": 514,
              "end": 532
            },
            "typeArguments": null,
            "start": 514,
            "end": 532
          },
          "start": 512,
          "end": 532
        },
        "body": null,
        "expression": false,
        "start": 495,
        "end": 533
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 488,
      "end": 533
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 533
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
    "value": "props",
    "start": 196,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 221,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 232,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 276,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "ElementClass",
    "start": 286,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 299,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 307,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 329,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 335,
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
    "value": ":",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 339,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 366,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "ElementAttributesProperty",
    "start": 376,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 404,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 411,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 416,
    "end": 417
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 426,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "ElementChildrenAttribute",
    "start": 436,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 463,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 473,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 486,
    "end": 487
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 488,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 495,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "predom",
    "start": 504,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "predom",
    "start": 514,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 521,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 525,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 532,
    "end": 533
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
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "MySFC",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 75
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
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 87,
                            "end": 88
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 90,
                              "end": 96
                            },
                            "start": 88,
                            "end": 96
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 87,
                          "end": 97
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 98,
                            "end": 99
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 101,
                              "end": 107
                            },
                            "start": 99,
                            "end": 107
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 98,
                          "end": 108
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 109,
                            "end": 117
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
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
                                      "start": 120,
                                      "end": 126
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "JSX",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 127,
                                      "end": 130
                                    },
                                    "start": 120,
                                    "end": 130
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Element",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 131,
                                    "end": 138
                                  },
                                  "start": 120,
                                  "end": 138
                                },
                                "typeArguments": null,
                                "start": 120,
                                "end": 138
                              },
                              "start": 120,
                              "end": 140
                            },
                            "start": 118,
                            "end": 140
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 109,
                          "end": 140
                        }
                      ],
                      "start": 86,
                      "end": 141
                    },
                    "start": 84,
                    "end": 141
                  },
                  "start": 79,
                  "end": 141
                }
              ],
              "returnType": null,
              "body": {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "p",
                    "start": 147,
                    "end": 148
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 146,
                  "end": 149
                },
                "children": [
                  {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 150,
                        "end": 155
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 156,
                        "end": 157
                      },
                      "optional": false,
                      "computed": false,
                      "start": 150,
                      "end": 157
                    },
                    "start": 149,
                    "end": 158
                  },
                  {
                    "type": "JSXText",
                    "value": " + ",
                    "raw": " + ",
                    "start": 158,
                    "end": 161
                  },
                  {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 162,
                        "end": 167
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 168,
                        "end": 169
                      },
                      "optional": false,
                      "computed": false,
                      "start": 162,
                      "end": 169
                    },
                    "start": 161,
                    "end": 170
                  },
                  {
                    "type": "JSXText",
                    "value": " = ",
                    "raw": " = ",
                    "start": 170,
                    "end": 173
                  },
                  {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 174,
                          "end": 179
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 180,
                          "end": 181
                        },
                        "optional": false,
                        "computed": false,
                        "start": 174,
                        "end": 181
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 184,
                          "end": 189
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 190,
                          "end": 191
                        },
                        "optional": false,
                        "computed": false,
                        "start": 184,
                        "end": 191
                      },
                      "start": 174,
                      "end": 191
                    },
                    "start": 173,
                    "end": 192
                  },
                  {
                    "type": "JSXSpreadChild",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 196,
                          "end": 200
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 201,
                          "end": 206
                        },
                        "optional": false,
                        "computed": false,
                        "start": 196,
                        "end": 206
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "children",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 207,
                        "end": 215
                      },
                      "optional": false,
                      "computed": false,
                      "start": 196,
                      "end": 215
                    },
                    "start": 192,
                    "end": 216
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "p",
                    "start": 218,
                    "end": 219
                  },
                  "start": 216,
                  "end": 220
                },
                "start": 146,
                "end": 220
              },
              "id": null,
              "generator": false,
              "start": 78,
              "end": 220
            },
            "definite": false,
            "start": 70,
            "end": 220
          }
        ],
        "declare": false,
        "start": 64,
        "end": 221
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 57,
      "end": 221
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 236,
          "end": 243
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "predom",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 255,
                  "end": 261
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JSX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 262,
                  "end": 265
                },
                "optional": false,
                "computed": false,
                "start": 255,
                "end": 265
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 266,
                "end": 273
              },
              "optional": false,
              "computed": false,
              "start": 255,
              "end": 273
            },
            "typeArguments": null,
            "start": 255,
            "end": 273
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "__predomBrand",
                "optional": false,
                "typeAnnotation": null,
                "start": 280,
                "end": 293
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 296,
                  "end": 300
                },
                "start": 294,
                "end": 300
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": true,
              "readonly": false,
              "accessibility": null,
              "start": 280,
              "end": 301
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 306,
                "end": 317
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
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": {
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 333,
                                "end": 334
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 336,
                                  "end": 342
                                },
                                "start": 334,
                                "end": 342
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 333,
                              "end": 343
                            },
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 344,
                                "end": 345
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 347,
                                  "end": 353
                                },
                                "start": 345,
                                "end": 353
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 344,
                              "end": 354
                            },
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": true,
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
                                  "type": "TSArrayType",
                                  "elementType": {
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
                                          "start": 366,
                                          "end": 372
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "JSX",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 373,
                                          "end": 376
                                        },
                                        "start": 366,
                                        "end": 376
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Element",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 377,
                                        "end": 384
                                      },
                                      "start": 366,
                                      "end": 384
                                    },
                                    "typeArguments": null,
                                    "start": 366,
                                    "end": 384
                                  },
                                  "start": 366,
                                  "end": 386
                                },
                                "start": 364,
                                "end": 386
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 355,
                              "end": 386
                            }
                          ],
                          "start": 332,
                          "end": 387
                        },
                        "start": 330,
                        "end": 387
                      },
                      "start": 325,
                      "end": 387
                    },
                    "readonly": false,
                    "static": false,
                    "start": 318,
                    "end": 387
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 389,
                  "end": 391
                },
                "expression": false,
                "start": 317,
                "end": 391
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 306,
              "end": 391
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "render",
                "optional": false,
                "typeAnnotation": null,
                "start": 396,
                "end": 402
              },
              "value": {
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
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "JSXElement",
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "p",
                            "start": 423,
                            "end": 424
                          },
                          "typeArguments": null,
                          "attributes": [],
                          "selfClosing": false,
                          "start": 422,
                          "end": 425
                        },
                        "children": [
                          {
                            "type": "JSXText",
                            "value": "\n            ",
                            "raw": "\n            ",
                            "start": 425,
                            "end": 438
                          },
                          {
                            "type": "JSXExpressionContainer",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 439,
                                  "end": 443
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 444,
                                  "end": 449
                                },
                                "optional": false,
                                "computed": false,
                                "start": 439,
                                "end": 449
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 450,
                                "end": 451
                              },
                              "optional": false,
                              "computed": false,
                              "start": 439,
                              "end": 451
                            },
                            "start": 438,
                            "end": 452
                          },
                          {
                            "type": "JSXText",
                            "value": " + ",
                            "raw": " + ",
                            "start": 452,
                            "end": 455
                          },
                          {
                            "type": "JSXExpressionContainer",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 456,
                                  "end": 460
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 461,
                                  "end": 466
                                },
                                "optional": false,
                                "computed": false,
                                "start": 456,
                                "end": 466
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 467,
                                "end": 468
                              },
                              "optional": false,
                              "computed": false,
                              "start": 456,
                              "end": 468
                            },
                            "start": 455,
                            "end": 469
                          },
                          {
                            "type": "JSXText",
                            "value": " = ",
                            "raw": " = ",
                            "start": 469,
                            "end": 472
                          },
                          {
                            "type": "JSXExpressionContainer",
                            "expression": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 473,
                                    "end": 477
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "props",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 478,
                                    "end": 483
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 473,
                                  "end": 483
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 484,
                                  "end": 485
                                },
                                "optional": false,
                                "computed": false,
                                "start": 473,
                                "end": 485
                              },
                              "operator": "+",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 488,
                                    "end": 492
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "props",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 493,
                                    "end": 498
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 488,
                                  "end": 498
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 499,
                                  "end": 500
                                },
                                "optional": false,
                                "computed": false,
                                "start": 488,
                                "end": 500
                              },
                              "start": 473,
                              "end": 500
                            },
                            "start": 472,
                            "end": 501
                          },
                          {
                            "type": "JSXText",
                            "value": "\n            ",
                            "raw": "\n            ",
                            "start": 501,
                            "end": 514
                          },
                          {
                            "type": "JSXSpreadChild",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 518,
                                  "end": 522
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 523,
                                  "end": 528
                                },
                                "optional": false,
                                "computed": false,
                                "start": 518,
                                "end": 528
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "children",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 529,
                                "end": 537
                              },
                              "optional": false,
                              "computed": false,
                              "start": 518,
                              "end": 537
                            },
                            "start": 514,
                            "end": 538
                          },
                          {
                            "type": "JSXText",
                            "value": "\n        ",
                            "raw": "\n        ",
                            "start": 538,
                            "end": 547
                          }
                        ],
                        "closingElement": {
                          "type": "JSXClosingElement",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "p",
                            "start": 549,
                            "end": 550
                          },
                          "start": 547,
                          "end": 551
                        },
                        "start": 422,
                        "end": 551
                      },
                      "start": 415,
                      "end": 552
                    }
                  ],
                  "start": 405,
                  "end": 558
                },
                "expression": false,
                "start": 402,
                "end": 558
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 396,
              "end": 558
            }
          ],
          "start": 274,
          "end": 560
        },
        "abstract": false,
        "declare": false,
        "start": 230,
        "end": 560
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 223,
      "end": 560
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "tree",
              "optional": false,
              "typeAnnotation": null,
              "start": 574,
              "end": 578
            },
            "init": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "MySFC",
                  "start": 582,
                  "end": 587
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "x",
                      "start": 588,
                      "end": 589
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "expression": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 591,
                        "end": 592
                      },
                      "start": 590,
                      "end": 593
                    },
                    "start": 588,
                    "end": 593
                  },
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "y",
                      "start": 594,
                      "end": 595
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "expression": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 597,
                        "end": 598
                      },
                      "start": 596,
                      "end": 599
                    },
                    "start": 594,
                    "end": 599
                  }
                ],
                "selfClosing": false,
                "start": 581,
                "end": 600
              },
              "children": [
                {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "MyClass",
                      "start": 601,
                      "end": 608
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "x",
                          "start": 609,
                          "end": 610
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 612,
                            "end": 613
                          },
                          "start": 611,
                          "end": 614
                        },
                        "start": 609,
                        "end": 614
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "y",
                          "start": 615,
                          "end": 616
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4",
                            "start": 618,
                            "end": 619
                          },
                          "start": 617,
                          "end": 620
                        },
                        "start": 615,
                        "end": 620
                      }
                    ],
                    "selfClosing": true,
                    "start": 600,
                    "end": 623
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 600,
                  "end": 623
                },
                {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "MyClass",
                      "start": 624,
                      "end": 631
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "x",
                          "start": 632,
                          "end": 633
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Literal",
                            "value": 5,
                            "raw": "5",
                            "start": 635,
                            "end": 636
                          },
                          "start": 634,
                          "end": 637
                        },
                        "start": 632,
                        "end": 637
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "y",
                          "start": 638,
                          "end": 639
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Literal",
                            "value": 6,
                            "raw": "6",
                            "start": 641,
                            "end": 642
                          },
                          "start": 640,
                          "end": 643
                        },
                        "start": 638,
                        "end": 643
                      }
                    ],
                    "selfClosing": true,
                    "start": 623,
                    "end": 646
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 623,
                  "end": 646
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "MySFC",
                  "start": 648,
                  "end": 653
                },
                "start": 646,
                "end": 654
              },
              "start": 581,
              "end": 654
            },
            "definite": false,
            "start": 574,
            "end": 654
          }
        ],
        "declare": false,
        "start": 568,
        "end": 654
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 561,
      "end": 654
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
            "start": 672,
            "end": 673
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 671,
          "end": 674
        },
        "children": [],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "h",
            "start": 676,
            "end": 677
          },
          "start": 674,
          "end": 678
        },
        "start": 671,
        "end": 678
      },
      "exportKind": "value",
      "start": 656,
      "end": 678
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 679
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
    "start": 57,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 64,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "MySFC",
    "start": 70,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 79,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 90,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 101,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 109,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "predom",
    "start": 120,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 131,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 143,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 146,
    "end": 147
  },
  {
    "type": "JSXIdentifier",
    "value": "p",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 150,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 155,
    "end": 156
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
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
    "type": "JSXText",
    "value": " + ",
    "start": 158,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 162,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 167,
    "end": 168
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170
  },
  {
    "type": "JSXText",
    "value": " = ",
    "start": 170,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 174,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 179,
    "end": 180
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 182,
    "end": 183
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 184,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 189,
    "end": 190
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 193,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 196,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 200,
    "end": 201
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 201,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 206,
    "end": 207
  },
  {
    "type": "JSXIdentifier",
    "value": "children",
    "start": 207,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 217,
    "end": 218
  },
  {
    "type": "JSXIdentifier",
    "value": "p",
    "start": 218,
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
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 223,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 230,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 236,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 244,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "predom",
    "start": 255,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 262,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 266,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "__predomBrand",
    "start": 280,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 296,
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
    "value": "constructor",
    "start": 306,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 317,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 318,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 325,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 336,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 347,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": "?",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "predom",
    "start": 366,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 373,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 377,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "render",
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
    "value": "{",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 415,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 422,
    "end": 423
  },
  {
    "type": "JSXIdentifier",
    "value": "p",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 424,
    "end": 425
  },
  {
    "type": "JSXText",
    "value": "\n            ",
    "start": 425,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 438,
    "end": 439
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 439,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 443,
    "end": 444
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 444,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 449,
    "end": 450
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 451,
    "end": 452
  },
  {
    "type": "JSXText",
    "value": " + ",
    "start": 452,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 455,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 456,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 460,
    "end": 461
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 461,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 466,
    "end": 467
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 468,
    "end": 469
  },
  {
    "type": "JSXText",
    "value": " = ",
    "start": 469,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 472,
    "end": 473
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 473,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 477,
    "end": 478
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 478,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 483,
    "end": 484
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 486,
    "end": 487
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 488,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 492,
    "end": 493
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 493,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 498,
    "end": 499
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 500,
    "end": 501
  },
  {
    "type": "JSXText",
    "value": "\n            ",
    "start": 501,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 515,
    "end": 518
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 518,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 522,
    "end": 523
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 523,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 528,
    "end": 529
  },
  {
    "type": "JSXIdentifier",
    "value": "children",
    "start": 529,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 537,
    "end": 538
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 538,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 548,
    "end": 549
  },
  {
    "type": "JSXIdentifier",
    "value": "p",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 559,
    "end": 560
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 561,
    "end": 567
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 568,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "tree",
    "start": 574,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 581,
    "end": 582
  },
  {
    "type": "JSXIdentifier",
    "value": "MySFC",
    "start": 582,
    "end": 587
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 590,
    "end": 591
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 592,
    "end": 593
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 596,
    "end": 597
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 600,
    "end": 601
  },
  {
    "type": "JSXIdentifier",
    "value": "MyClass",
    "start": 601,
    "end": 608
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 611,
    "end": 612
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 613,
    "end": 614
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 617,
    "end": 618
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 623,
    "end": 624
  },
  {
    "type": "JSXIdentifier",
    "value": "MyClass",
    "start": 624,
    "end": 631
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 634,
    "end": 635
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 636,
    "end": 637
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 640,
    "end": 641
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 647,
    "end": 648
  },
  {
    "type": "JSXIdentifier",
    "value": "MySFC",
    "start": 648,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 653,
    "end": 654
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 656,
    "end": 662
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 663,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 671,
    "end": 672
  },
  {
    "type": "JSXIdentifier",
    "value": "h",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 675,
    "end": 676
  },
  {
    "type": "JSXIdentifier",
    "value": "h",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 677,
    "end": 678
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
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MySFC",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 75
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MySFC",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 75
          },
          "importKind": "value",
          "start": 70,
          "end": 75
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 84
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 84
          },
          "importKind": "value",
          "start": 77,
          "end": 84
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "tree",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 90
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "tree",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 90
          },
          "importKind": "value",
          "start": 86,
          "end": 90
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./component",
        "raw": "\"./component\"",
        "start": 97,
        "end": 110
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 49,
      "end": 111
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
            "start": 116,
            "end": 120
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "prerendered",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 134
          },
          "definite": false,
          "start": 116,
          "end": 134
        }
      ],
      "declare": false,
      "start": 112,
      "end": 135
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
          "start": 136,
          "end": 140
        },
        "right": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "h",
              "start": 144,
              "end": 145
            },
            "typeArguments": null,
            "attributes": [],
            "selfClosing": false,
            "start": 143,
            "end": 146
          },
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "h",
              "start": 148,
              "end": 149
            },
            "start": 146,
            "end": 150
          },
          "start": 143,
          "end": 150
        },
        "start": 136,
        "end": 150
      },
      "directive": null,
      "start": 136,
      "end": 151
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
            "name": "DOMSFC",
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
                "name": "props",
                "optional": false,
                "typeAnnotation": {
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 212,
                          "end": 213
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 215,
                            "end": 221
                          },
                          "start": 213,
                          "end": 221
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 212,
                        "end": 222
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 223,
                          "end": 224
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 226,
                            "end": 232
                          },
                          "start": 224,
                          "end": 232
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 223,
                        "end": 233
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 234,
                          "end": 242
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "dom",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 245,
                                    "end": 248
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "JSX",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 249,
                                    "end": 252
                                  },
                                  "start": 245,
                                  "end": 252
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Element",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 253,
                                  "end": 260
                                },
                                "start": 245,
                                "end": 260
                              },
                              "typeArguments": null,
                              "start": 245,
                              "end": 260
                            },
                            "start": 245,
                            "end": 262
                          },
                          "start": 243,
                          "end": 262
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 234,
                        "end": 262
                      }
                    ],
                    "start": 211,
                    "end": 263
                  },
                  "start": 209,
                  "end": 263
                },
                "start": 204,
                "end": 263
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "p",
                  "start": 269,
                  "end": 270
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 268,
                "end": 271
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 272,
                      "end": 277
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 278,
                      "end": 279
                    },
                    "optional": false,
                    "computed": false,
                    "start": 272,
                    "end": 279
                  },
                  "start": 271,
                  "end": 280
                },
                {
                  "type": "JSXText",
                  "value": " + ",
                  "raw": " + ",
                  "start": 280,
                  "end": 283
                },
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 284,
                      "end": 289
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 290,
                      "end": 291
                    },
                    "optional": false,
                    "computed": false,
                    "start": 284,
                    "end": 291
                  },
                  "start": 283,
                  "end": 292
                },
                {
                  "type": "JSXText",
                  "value": " = ",
                  "raw": " = ",
                  "start": 292,
                  "end": 295
                },
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 296,
                        "end": 301
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 302,
                        "end": 303
                      },
                      "optional": false,
                      "computed": false,
                      "start": 296,
                      "end": 303
                    },
                    "operator": "+",
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 306,
                        "end": 311
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 312,
                        "end": 313
                      },
                      "optional": false,
                      "computed": false,
                      "start": 306,
                      "end": 313
                    },
                    "start": 296,
                    "end": 313
                  },
                  "start": 295,
                  "end": 314
                },
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 315,
                      "end": 320
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 321,
                      "end": 329
                    },
                    "optional": false,
                    "computed": false,
                    "start": 315,
                    "end": 329
                  },
                  "start": 314,
                  "end": 330
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "p",
                  "start": 332,
                  "end": 333
                },
                "start": 330,
                "end": 334
              },
              "start": 268,
              "end": 334
            },
            "id": null,
            "generator": false,
            "start": 203,
            "end": 334
          },
          "definite": false,
          "start": 194,
          "end": 334
        }
      ],
      "declare": false,
      "start": 188,
      "end": 335
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DOMClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 343,
        "end": 351
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "dom",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 366
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null,
                "start": 367,
                "end": 370
              },
              "optional": false,
              "computed": false,
              "start": 363,
              "end": 370
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 371,
              "end": 378
            },
            "optional": false,
            "computed": false,
            "start": 363,
            "end": 378
          },
          "typeArguments": null,
          "start": 363,
          "end": 378
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "__domBrand",
              "optional": false,
              "typeAnnotation": null,
              "start": 385,
              "end": 395
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 398,
                "end": 402
              },
              "start": 396,
              "end": 402
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 385,
            "end": 403
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 408,
              "end": 419
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": {
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 435,
                              "end": 436
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 438,
                                "end": 444
                              },
                              "start": 436,
                              "end": 444
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 435,
                            "end": 445
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 446,
                              "end": 447
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 449,
                                "end": 455
                              },
                              "start": 447,
                              "end": 455
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 446,
                            "end": 456
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "children",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 457,
                              "end": 465
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "dom",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 468,
                                        "end": 471
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "JSX",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 472,
                                        "end": 475
                                      },
                                      "start": 468,
                                      "end": 475
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Element",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 476,
                                      "end": 483
                                    },
                                    "start": 468,
                                    "end": 483
                                  },
                                  "typeArguments": null,
                                  "start": 468,
                                  "end": 483
                                },
                                "start": 468,
                                "end": 485
                              },
                              "start": 466,
                              "end": 485
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 457,
                            "end": 485
                          }
                        ],
                        "start": 434,
                        "end": 486
                      },
                      "start": 432,
                      "end": 486
                    },
                    "start": 427,
                    "end": 486
                  },
                  "readonly": false,
                  "static": false,
                  "start": 420,
                  "end": 486
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 488,
                "end": 490
              },
              "expression": false,
              "start": 419,
              "end": 490
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 408,
            "end": 490
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 495,
              "end": 501
            },
            "value": {
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
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "p",
                          "start": 522,
                          "end": 523
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 521,
                        "end": 524
                      },
                      "children": [
                        {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 525,
                                "end": 529
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 530,
                                "end": 535
                              },
                              "optional": false,
                              "computed": false,
                              "start": 525,
                              "end": 535
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 536,
                              "end": 537
                            },
                            "optional": false,
                            "computed": false,
                            "start": 525,
                            "end": 537
                          },
                          "start": 524,
                          "end": 538
                        },
                        {
                          "type": "JSXText",
                          "value": " + ",
                          "raw": " + ",
                          "start": 538,
                          "end": 541
                        },
                        {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 542,
                                "end": 546
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 547,
                                "end": 552
                              },
                              "optional": false,
                              "computed": false,
                              "start": 542,
                              "end": 552
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 553,
                              "end": 554
                            },
                            "optional": false,
                            "computed": false,
                            "start": 542,
                            "end": 554
                          },
                          "start": 541,
                          "end": 555
                        },
                        {
                          "type": "JSXText",
                          "value": " = ",
                          "raw": " = ",
                          "start": 555,
                          "end": 558
                        },
                        {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 559,
                                  "end": 563
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 564,
                                  "end": 569
                                },
                                "optional": false,
                                "computed": false,
                                "start": 559,
                                "end": 569
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 570,
                                "end": 571
                              },
                              "optional": false,
                              "computed": false,
                              "start": 559,
                              "end": 571
                            },
                            "operator": "+",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 574,
                                  "end": 578
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 579,
                                  "end": 584
                                },
                                "optional": false,
                                "computed": false,
                                "start": 574,
                                "end": 584
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 585,
                                "end": 586
                              },
                              "optional": false,
                              "computed": false,
                              "start": 574,
                              "end": 586
                            },
                            "start": 559,
                            "end": 586
                          },
                          "start": 558,
                          "end": 587
                        },
                        {
                          "type": "JSXSpreadChild",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 591,
                                "end": 595
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 596,
                                "end": 601
                              },
                              "optional": false,
                              "computed": false,
                              "start": 591,
                              "end": 601
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "children",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 602,
                              "end": 610
                            },
                            "optional": false,
                            "computed": false,
                            "start": 591,
                            "end": 610
                          },
                          "start": 587,
                          "end": 611
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "p",
                          "start": 613,
                          "end": 614
                        },
                        "start": 611,
                        "end": 615
                      },
                      "start": 521,
                      "end": 615
                    },
                    "start": 514,
                    "end": 616
                  }
                ],
                "start": 504,
                "end": 622
              },
              "expression": false,
              "start": 501,
              "end": 622
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 495,
            "end": 622
          }
        ],
        "start": 379,
        "end": 624
      },
      "abstract": false,
      "declare": false,
      "start": 337,
      "end": 624
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
            "name": "_tree",
            "optional": false,
            "typeAnnotation": null,
            "start": 676,
            "end": 681
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "DOMSFC",
                "start": 685,
                "end": 691
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 692,
                    "end": 693
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 695,
                      "end": 696
                    },
                    "start": 694,
                    "end": 697
                  },
                  "start": 692,
                  "end": 697
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y",
                    "start": 698,
                    "end": 699
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 701,
                      "end": 702
                    },
                    "start": 700,
                    "end": 703
                  },
                  "start": 698,
                  "end": 703
                }
              ],
              "selfClosing": false,
              "start": 684,
              "end": 704
            },
            "children": [
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "DOMClass",
                    "start": 705,
                    "end": 713
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "x",
                        "start": 714,
                        "end": 715
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 717,
                          "end": 718
                        },
                        "start": 716,
                        "end": 719
                      },
                      "start": 714,
                      "end": 719
                    },
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "y",
                        "start": 720,
                        "end": 721
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4",
                          "start": 723,
                          "end": 724
                        },
                        "start": 722,
                        "end": 725
                      },
                      "start": 720,
                      "end": 725
                    }
                  ],
                  "selfClosing": true,
                  "start": 704,
                  "end": 728
                },
                "children": [],
                "closingElement": null,
                "start": 704,
                "end": 728
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "DOMClass",
                    "start": 729,
                    "end": 737
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "x",
                        "start": 738,
                        "end": 739
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 741,
                          "end": 742
                        },
                        "start": 740,
                        "end": 743
                      },
                      "start": 738,
                      "end": 743
                    },
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "y",
                        "start": 744,
                        "end": 745
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 6,
                          "raw": "6",
                          "start": 747,
                          "end": 748
                        },
                        "start": 746,
                        "end": 749
                      },
                      "start": 744,
                      "end": 749
                    }
                  ],
                  "selfClosing": true,
                  "start": 728,
                  "end": 752
                },
                "children": [],
                "closingElement": null,
                "start": 728,
                "end": 752
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "DOMSFC",
                "start": 754,
                "end": 760
              },
              "start": 752,
              "end": 761
            },
            "start": 684,
            "end": 761
          },
          "definite": false,
          "start": 676,
          "end": 761
        }
      ],
      "declare": false,
      "start": 670,
      "end": 761
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
            "name": "_brokenTree",
            "optional": false,
            "typeAnnotation": null,
            "start": 801,
            "end": 812
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MySFC",
                "start": 816,
                "end": 821
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 822,
                    "end": 823
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 825,
                      "end": 826
                    },
                    "start": 824,
                    "end": 827
                  },
                  "start": 822,
                  "end": 827
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y",
                    "start": 828,
                    "end": 829
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 831,
                      "end": 832
                    },
                    "start": 830,
                    "end": 833
                  },
                  "start": 828,
                  "end": 833
                }
              ],
              "selfClosing": false,
              "start": 815,
              "end": 834
            },
            "children": [
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "MyClass",
                    "start": 835,
                    "end": 842
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "x",
                        "start": 843,
                        "end": 844
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 846,
                          "end": 847
                        },
                        "start": 845,
                        "end": 848
                      },
                      "start": 843,
                      "end": 848
                    },
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "y",
                        "start": 849,
                        "end": 850
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4",
                          "start": 852,
                          "end": 853
                        },
                        "start": 851,
                        "end": 854
                      },
                      "start": 849,
                      "end": 854
                    }
                  ],
                  "selfClosing": true,
                  "start": 834,
                  "end": 857
                },
                "children": [],
                "closingElement": null,
                "start": 834,
                "end": 857
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "MyClass",
                    "start": 858,
                    "end": 865
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "x",
                        "start": 866,
                        "end": 867
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 869,
                          "end": 870
                        },
                        "start": 868,
                        "end": 871
                      },
                      "start": 866,
                      "end": 871
                    },
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "y",
                        "start": 872,
                        "end": 873
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 6,
                          "raw": "6",
                          "start": 875,
                          "end": 876
                        },
                        "start": 874,
                        "end": 877
                      },
                      "start": 872,
                      "end": 877
                    }
                  ],
                  "selfClosing": true,
                  "start": 857,
                  "end": 880
                },
                "children": [],
                "closingElement": null,
                "start": 857,
                "end": 880
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MySFC",
                "start": 882,
                "end": 887
              },
              "start": 880,
              "end": 888
            },
            "start": 815,
            "end": 888
          },
          "definite": false,
          "start": 801,
          "end": 888
        }
      ],
      "declare": false,
      "start": 795,
      "end": 888
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
            "name": "_brokenTree2",
            "optional": false,
            "typeAnnotation": null,
            "start": 952,
            "end": 964
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "DOMSFC",
                "start": 968,
                "end": 974
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 975,
                    "end": 976
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 978,
                      "end": 979
                    },
                    "start": 977,
                    "end": 980
                  },
                  "start": 975,
                  "end": 980
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y",
                    "start": 981,
                    "end": 982
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 984,
                      "end": 985
                    },
                    "start": 983,
                    "end": 986
                  },
                  "start": 981,
                  "end": 986
                }
              ],
              "selfClosing": false,
              "start": 967,
              "end": 987
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tree",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 988,
                  "end": 992
                },
                "start": 987,
                "end": 993
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tree",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 994,
                  "end": 998
                },
                "start": 993,
                "end": 999
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "DOMSFC",
                "start": 1001,
                "end": 1007
              },
              "start": 999,
              "end": 1008
            },
            "start": 967,
            "end": 1008
          },
          "definite": false,
          "start": 952,
          "end": 1008
        }
      ],
      "declare": false,
      "start": 946,
      "end": 1008
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 16,
  "end": 1008
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
    "type": "Punctuator",
    "value": ",",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "MySFC",
    "start": 70,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 77,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "tree",
    "start": 86,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 92,
    "end": 96
  },
  {
    "type": "String",
    "value": "\"./component\"",
    "start": 97,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 112,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "elem",
    "start": 116,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "prerendered",
    "start": 123,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "elem",
    "start": 136,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 143,
    "end": 144
  },
  {
    "type": "JSXIdentifier",
    "value": "h",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 147,
    "end": 148
  },
  {
    "type": "JSXIdentifier",
    "value": "h",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 188,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "DOMSFC",
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
    "value": "props",
    "start": 204,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 215,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 226,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 234,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "dom",
    "start": 245,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 249,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 253,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 265,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 268,
    "end": 269
  },
  {
    "type": "JSXIdentifier",
    "value": "p",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 271,
    "end": 272
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 272,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 277,
    "end": 278
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 279,
    "end": 280
  },
  {
    "type": "JSXText",
    "value": " + ",
    "start": 280,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 283,
    "end": 284
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 284,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 289,
    "end": 290
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 291,
    "end": 292
  },
  {
    "type": "JSXText",
    "value": " = ",
    "start": 292,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 295,
    "end": 296
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 296,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 301,
    "end": 302
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 304,
    "end": 305
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 306,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 311,
    "end": 312
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 314,
    "end": 315
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 315,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 320,
    "end": 321
  },
  {
    "type": "JSXIdentifier",
    "value": "children",
    "start": 321,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 331,
    "end": 332
  },
  {
    "type": "JSXIdentifier",
    "value": "p",
    "start": 332,
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
    "value": ";",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 337,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "DOMClass",
    "start": 343,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 352,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "dom",
    "start": 363,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 367,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 371,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "__domBrand",
    "start": 385,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 398,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 408,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 419,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 420,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 427,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 438,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 449,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 457,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "dom",
    "start": 468,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 472,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 476,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 495,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 504,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 514,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 521,
    "end": 522
  },
  {
    "type": "JSXIdentifier",
    "value": "p",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 524,
    "end": 525
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 525,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 529,
    "end": 530
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 530,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 535,
    "end": 536
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 537,
    "end": 538
  },
  {
    "type": "JSXText",
    "value": " + ",
    "start": 538,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 541,
    "end": 542
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 542,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 546,
    "end": 547
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 547,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 552,
    "end": 553
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 554,
    "end": 555
  },
  {
    "type": "JSXText",
    "value": " = ",
    "start": 555,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 558,
    "end": 559
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 559,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 563,
    "end": 564
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 564,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 569,
    "end": 570
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 572,
    "end": 573
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 574,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 578,
    "end": 579
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 579,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 584,
    "end": 585
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 588,
    "end": 591
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 591,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 595,
    "end": 596
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 596,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 601,
    "end": 602
  },
  {
    "type": "JSXIdentifier",
    "value": "children",
    "start": 602,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 612,
    "end": 613
  },
  {
    "type": "JSXIdentifier",
    "value": "p",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 623,
    "end": 624
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 670,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "_tree",
    "start": 676,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 684,
    "end": 685
  },
  {
    "type": "JSXIdentifier",
    "value": "DOMSFC",
    "start": 685,
    "end": 691
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 694,
    "end": 695
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 696,
    "end": 697
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 700,
    "end": 701
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 704,
    "end": 705
  },
  {
    "type": "JSXIdentifier",
    "value": "DOMClass",
    "start": 705,
    "end": 713
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 716,
    "end": 717
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 718,
    "end": 719
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 722,
    "end": 723
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 728,
    "end": 729
  },
  {
    "type": "JSXIdentifier",
    "value": "DOMClass",
    "start": 729,
    "end": 737
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 740,
    "end": 741
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 742,
    "end": 743
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 746,
    "end": 747
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 753,
    "end": 754
  },
  {
    "type": "JSXIdentifier",
    "value": "DOMSFC",
    "start": 754,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 760,
    "end": 761
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 795,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "_brokenTree",
    "start": 801,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 815,
    "end": 816
  },
  {
    "type": "JSXIdentifier",
    "value": "MySFC",
    "start": 816,
    "end": 821
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 824,
    "end": 825
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 826,
    "end": 827
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 830,
    "end": 831
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 834,
    "end": 835
  },
  {
    "type": "JSXIdentifier",
    "value": "MyClass",
    "start": 835,
    "end": 842
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 845,
    "end": 846
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 847,
    "end": 848
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 851,
    "end": 852
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 857,
    "end": 858
  },
  {
    "type": "JSXIdentifier",
    "value": "MyClass",
    "start": 858,
    "end": 865
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 868,
    "end": 869
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 870,
    "end": 871
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 874,
    "end": 875
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 881,
    "end": 882
  },
  {
    "type": "JSXIdentifier",
    "value": "MySFC",
    "start": 882,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 887,
    "end": 888
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 946,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "_brokenTree2",
    "start": 952,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 967,
    "end": 968
  },
  {
    "type": "JSXIdentifier",
    "value": "DOMSFC",
    "start": 968,
    "end": 974
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 977,
    "end": 978
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 979,
    "end": 980
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 983,
    "end": 984
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "tree",
    "start": 988,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "tree",
    "start": 994,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "JSXIdentifier",
    "value": "DOMSFC",
    "start": 1001,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1007,
    "end": 1008
  }
]
```
