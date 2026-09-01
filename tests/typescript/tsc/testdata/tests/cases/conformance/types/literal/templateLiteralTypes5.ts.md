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
        "name": "TypeMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 73
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 79
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 81,
                  "end": 84
                },
                "start": 81,
                "end": 84
              },
              "start": 79,
              "end": 84
            },
            "accessibility": null,
            "static": false,
            "start": 78,
            "end": 85
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 89
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 91,
                  "end": 94
                },
                "start": 91,
                "end": 94
              },
              "start": 89,
              "end": 94
            },
            "accessibility": null,
            "static": false,
            "start": 88,
            "end": 95
          }
        ],
        "start": 74,
        "end": 97
      },
      "declare": false,
      "start": 56,
      "end": 97
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
            "name": "f",
            "optional": false,
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
                        "name": "T0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 116,
                        "end": 118
                      },
                      "constraint": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "\"a\"",
                              "start": 127,
                              "end": 130
                            },
                            "start": 127,
                            "end": 130
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "b",
                              "raw": "\"b\"",
                              "start": 133,
                              "end": 136
                            },
                            "start": 133,
                            "end": 136
                          }
                        ],
                        "start": 127,
                        "end": 136
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 116,
                      "end": 136
                    }
                  ],
                  "start": 115,
                  "end": 137
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTemplateLiteralType",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": false,
                            "start": 141,
                            "end": 144
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 146,
                            "end": 148
                          }
                        ],
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T0",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 144,
                              "end": 146
                            },
                            "typeArguments": null,
                            "start": 144,
                            "end": 146
                          }
                        ],
                        "start": 141,
                        "end": 148
                      },
                      "start": 139,
                      "end": 148
                    },
                    "start": 138,
                    "end": 148
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TypeMap",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 153,
                        "end": 160
                      },
                      "typeArguments": null,
                      "start": 153,
                      "end": 160
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 161,
                        "end": 163
                      },
                      "typeArguments": null,
                      "start": 161,
                      "end": 163
                    },
                    "start": 153,
                    "end": 164
                  },
                  "start": 150,
                  "end": 164
                },
                "start": 115,
                "end": 164
              },
              "start": 113,
              "end": 164
            },
            "start": 112,
            "end": 164
          },
          "init": null,
          "definite": false,
          "start": 112,
          "end": 164
        }
      ],
      "declare": true,
      "start": 98,
      "end": 165
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F1",
        "optional": false,
        "typeAnnotation": null,
        "start": 171,
        "end": 173
      },
      "typeParameters": null,
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
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 177,
                "end": 179
              },
              "constraint": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 188,
                      "end": 191
                    },
                    "start": 188,
                    "end": 191
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "\"b\"",
                      "start": 194,
                      "end": 197
                    },
                    "start": 194,
                    "end": 197
                  }
                ],
                "start": 188,
                "end": 197
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 177,
              "end": 197
            }
          ],
          "start": 176,
          "end": 198
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 202,
                    "end": 205
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 207,
                    "end": 209
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 205,
                      "end": 207
                    },
                    "typeArguments": null,
                    "start": 205,
                    "end": 207
                  }
                ],
                "start": 202,
                "end": 209
              },
              "start": 200,
              "end": 209
            },
            "start": 199,
            "end": 209
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TypeMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 214,
                "end": 221
              },
              "typeArguments": null,
              "start": 214,
              "end": 221
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 222,
                "end": 224
              },
              "typeArguments": null,
              "start": 222,
              "end": 224
            },
            "start": 214,
            "end": 225
          },
          "start": 211,
          "end": 225
        },
        "start": 176,
        "end": 225
      },
      "declare": false,
      "start": 166,
      "end": 226
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
            "name": "f1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 237,
                  "end": 239
                },
                "typeArguments": null,
                "start": 237,
                "end": 239
              },
              "start": 235,
              "end": 239
            },
            "start": 233,
            "end": 239
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 242,
            "end": 243
          },
          "definite": false,
          "start": 233,
          "end": 243
        }
      ],
      "declare": false,
      "start": 227,
      "end": 244
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null,
        "start": 251,
        "end": 253
      },
      "typeParameters": null,
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
                "name": "T2",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 259
              },
              "constraint": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 268,
                      "end": 271
                    },
                    "start": 268,
                    "end": 271
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 274,
                      "end": 277
                    },
                    "start": 274,
                    "end": 277
                  }
                ],
                "start": 268,
                "end": 277
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 257,
              "end": 277
            }
          ],
          "start": 256,
          "end": 278
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 282,
                    "end": 285
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 287,
                    "end": 289
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 285,
                      "end": 287
                    },
                    "typeArguments": null,
                    "start": 285,
                    "end": 287
                  }
                ],
                "start": 282,
                "end": 289
              },
              "start": 280,
              "end": 289
            },
            "start": 279,
            "end": 289
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TypeMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 294,
                "end": 301
              },
              "typeArguments": null,
              "start": 294,
              "end": 301
            },
            "indexType": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 302,
                  "end": 305
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 307,
                  "end": 309
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 305,
                    "end": 307
                  },
                  "typeArguments": null,
                  "start": 305,
                  "end": 307
                }
              ],
              "start": 302,
              "end": 309
            },
            "start": 294,
            "end": 310
          },
          "start": 291,
          "end": 310
        },
        "start": 256,
        "end": 310
      },
      "declare": false,
      "start": 246,
      "end": 310
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 321,
                  "end": 323
                },
                "typeArguments": null,
                "start": 321,
                "end": 323
              },
              "start": 319,
              "end": 323
            },
            "start": 317,
            "end": 323
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 326,
            "end": 327
          },
          "definite": false,
          "start": 317,
          "end": 327
        }
      ],
      "declare": false,
      "start": 311,
      "end": 327
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 338,
        "end": 340
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
              "name": "T3",
              "optional": false,
              "typeAnnotation": null,
              "start": 341,
              "end": 343
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 352,
                    "end": 355
                  },
                  "start": 352,
                  "end": 355
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 358,
                    "end": 361
                  },
                  "start": 358,
                  "end": 361
                }
              ],
              "start": 352,
              "end": 361
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 341,
            "end": 361
          }
        ],
        "start": 340,
        "end": 362
      },
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
                "name": "T3",
                "optional": false,
                "typeAnnotation": null,
                "start": 366,
                "end": 368
              },
              "typeArguments": null,
              "start": 366,
              "end": 368
            },
            "start": 364,
            "end": 368
          },
          "start": 363,
          "end": 368
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": false,
                          "start": 389,
                          "end": 392
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 394,
                          "end": 396
                        }
                      ],
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 392,
                            "end": 394
                          },
                          "typeArguments": null,
                          "start": 392,
                          "end": 394
                        }
                      ],
                      "start": 389,
                      "end": 396
                    },
                    "start": 387,
                    "end": 396
                  },
                  "start": 382,
                  "end": 396
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 399,
                  "end": 400
                },
                "definite": false,
                "start": 382,
                "end": 400
              }
            ],
            "declare": false,
            "start": 376,
            "end": 400
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
                  "name": "test2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 422,
                        "end": 424
                      },
                      "typeArguments": null,
                      "start": 422,
                      "end": 424
                    },
                    "start": 420,
                    "end": 424
                  },
                  "start": 415,
                  "end": 424
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 427,
                    "end": 429
                  },
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": false,
                        "start": 433,
                        "end": 436
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 438,
                        "end": 440
                      }
                    ],
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 436,
                          "end": 438
                        },
                        "typeArguments": null,
                        "start": 436,
                        "end": 438
                      }
                    ],
                    "start": 433,
                    "end": 440
                  },
                  "start": 427,
                  "end": 440
                },
                "definite": false,
                "start": 415,
                "end": 440
              }
            ],
            "declare": false,
            "start": 409,
            "end": 441
          }
        ],
        "start": 370,
        "end": 447
      },
      "expression": false,
      "start": 329,
      "end": 447
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 447
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 56,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "TypeMap",
    "start": 66,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 81,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "String",
    "value": "\"B\"",
    "start": 91,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 98,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 106,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "f",
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
    "value": "<",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "T0",
    "start": 116,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 119,
    "end": 126
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 131,
    "end": 132
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 133,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 141,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "T0",
    "start": 144,
    "end": 146
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 146,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 150,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "TypeMap",
    "start": 153,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "T0",
    "start": 161,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 166,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "F1",
    "start": 171,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 177,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 180,
    "end": 187
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 188,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 192,
    "end": 193
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 194,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 202,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 205,
    "end": 207
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 207,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 211,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "TypeMap",
    "start": 214,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 222,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 227,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 233,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "F1",
    "start": 237,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "f",
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
    "type": "Identifier",
    "value": "type",
    "start": 246,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 251,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 257,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 260,
    "end": 267
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 268,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 272,
    "end": 273
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 274,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 282,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 285,
    "end": 287
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 287,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 291,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "TypeMap",
    "start": 294,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 301,
    "end": 302
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 302,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 305,
    "end": 307
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 307,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 309,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 311,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 317,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 321,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 326,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 329,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 338,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 341,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 344,
    "end": 351
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 352,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 356,
    "end": 357
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 358,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "T3",
    "start": 366,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 370,
    "end": 371
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 376,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 382,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 387,
    "end": 388
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 389,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 392,
    "end": 394
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 394,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 399,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 409,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 415,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 422,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 425,
    "end": 426
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 427,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 430,
    "end": 432
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 433,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 436,
    "end": 438
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 438,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 446,
    "end": 447
  }
]
```
