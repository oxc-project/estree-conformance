__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 63
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 65
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 64,
            "end": 65
          }
        ],
        "start": 63,
        "end": 66
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Lowercase",
            "optional": false,
            "typeAnnotation": null,
            "start": 69,
            "end": 78
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 79,
                      "end": 80
                    },
                    "typeArguments": null,
                    "start": 79,
                    "end": 80
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 83,
                    "end": 89
                  }
                ],
                "start": 79,
                "end": 89
              }
            ],
            "start": 78,
            "end": 90
          },
          "start": 69,
          "end": 90
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 99,
            "end": 104
          },
          "start": 99,
          "end": 104
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 107,
            "end": 108
          },
          "start": 107,
          "end": 108
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 111,
            "end": 112
          },
          "start": 111,
          "end": 112
        },
        "start": 69,
        "end": 112
      },
      "declare": false,
      "start": 57,
      "end": 113
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 123
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "\"foo\"",
                        "start": 124,
                        "end": 129
                      },
                      "start": 124,
                      "end": 129
                    }
                  ],
                  "start": 123,
                  "end": 130
                },
                "start": 122,
                "end": 130
              },
              "start": 120,
              "end": 130
            },
            "start": 118,
            "end": 130
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 133,
            "end": 134
          },
          "definite": false,
          "start": 118,
          "end": 134
        }
      ],
      "declare": false,
      "start": 114,
      "end": 135
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 149
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 151
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 150,
            "end": 151
          }
        ],
        "start": 149,
        "end": 152
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Lowercase",
            "optional": false,
            "typeAnnotation": null,
            "start": 155,
            "end": 164
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 165,
                      "end": 166
                    },
                    "typeArguments": null,
                    "start": 165,
                    "end": 166
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 169,
                    "end": 175
                  }
                ],
                "start": 165,
                "end": 175
              }
            ],
            "start": 164,
            "end": 176
          },
          "start": 155,
          "end": 176
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "f",
                "cooked": "f"
              },
              "tail": false,
              "start": 185,
              "end": 189
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 195,
              "end": 197
            }
          ],
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 189,
              "end": 195
            }
          ],
          "start": 185,
          "end": 197
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 200,
            "end": 201
          },
          "start": 200,
          "end": 201
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 204,
            "end": 205
          },
          "start": 204,
          "end": 205
        },
        "start": 155,
        "end": 205
      },
      "declare": false,
      "start": 143,
      "end": 206
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 215,
                  "end": 216
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "\"foo\"",
                        "start": 217,
                        "end": 222
                      },
                      "start": 217,
                      "end": 222
                    }
                  ],
                  "start": 216,
                  "end": 223
                },
                "start": 215,
                "end": 223
              },
              "start": 213,
              "end": 223
            },
            "start": 211,
            "end": 223
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 226,
            "end": 227
          },
          "definite": false,
          "start": 211,
          "end": 227
        }
      ],
      "declare": false,
      "start": 207,
      "end": 228
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 242
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 244
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 243,
            "end": 244
          }
        ],
        "start": 242,
        "end": 245
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Capitalize",
            "optional": false,
            "typeAnnotation": null,
            "start": 248,
            "end": 258
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Lowercase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 259,
                  "end": 268
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 269,
                            "end": 270
                          },
                          "typeArguments": null,
                          "start": 269,
                          "end": 270
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 273,
                          "end": 279
                        }
                      ],
                      "start": 269,
                      "end": 279
                    }
                  ],
                  "start": 268,
                  "end": 280
                },
                "start": 259,
                "end": 280
              }
            ],
            "start": 258,
            "end": 281
          },
          "start": 248,
          "end": 281
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "Foo",
            "raw": "\"Foo\"",
            "start": 290,
            "end": 295
          },
          "start": 290,
          "end": 295
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 298,
            "end": 299
          },
          "start": 298,
          "end": 299
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 302,
            "end": 303
          },
          "start": 302,
          "end": 303
        },
        "start": 248,
        "end": 303
      },
      "declare": false,
      "start": 236,
      "end": 304
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 313,
                  "end": 314
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "\"foo\"",
                        "start": 315,
                        "end": 320
                      },
                      "start": 315,
                      "end": 320
                    }
                  ],
                  "start": 314,
                  "end": 321
                },
                "start": 313,
                "end": 321
              },
              "start": 311,
              "end": 321
            },
            "start": 309,
            "end": 321
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 324,
            "end": 325
          },
          "definite": false,
          "start": 309,
          "end": 325
        }
      ],
      "declare": false,
      "start": 305,
      "end": 326
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 339,
        "end": 340
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 341,
              "end": 342
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 351,
              "end": 357
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 341,
            "end": 357
          }
        ],
        "start": 340,
        "end": 358
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Capitalize",
            "optional": false,
            "typeAnnotation": null,
            "start": 361,
            "end": 371
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Lowercase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 372,
                  "end": 381
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 382,
                        "end": 383
                      },
                      "typeArguments": null,
                      "start": 382,
                      "end": 383
                    }
                  ],
                  "start": 381,
                  "end": 384
                },
                "start": 372,
                "end": 384
              }
            ],
            "start": 371,
            "end": 385
          },
          "start": 361,
          "end": 385
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "Foo",
            "raw": "\"Foo\"",
            "start": 394,
            "end": 399
          },
          "start": 394,
          "end": 399
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 402,
            "end": 403
          },
          "start": 402,
          "end": 403
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 406,
            "end": 407
          },
          "start": 406,
          "end": 407
        },
        "start": 361,
        "end": 407
      },
      "declare": false,
      "start": 334,
      "end": 408
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
            "name": "x4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 417,
                  "end": 418
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "\"foo\"",
                        "start": 419,
                        "end": 424
                      },
                      "start": 419,
                      "end": 424
                    }
                  ],
                  "start": 418,
                  "end": 425
                },
                "start": 417,
                "end": 425
              },
              "start": 415,
              "end": 425
            },
            "start": 413,
            "end": 425
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 428,
            "end": 429
          },
          "definite": false,
          "start": 413,
          "end": 429
        }
      ],
      "declare": false,
      "start": 409,
      "end": 430
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 443,
        "end": 444
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 445,
              "end": 446
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 445,
            "end": 446
          }
        ],
        "start": 444,
        "end": 447
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 450,
          "end": 459
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "f",
                        "cooked": "f"
                      },
                      "tail": false,
                      "start": 460,
                      "end": 464
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 474,
                      "end": 476
                    }
                  ],
                  "types": [
                    {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 464,
                            "end": 465
                          },
                          "typeArguments": null,
                          "start": 464,
                          "end": 465
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 468,
                          "end": 474
                        }
                      ],
                      "start": 464,
                      "end": 474
                    }
                  ],
                  "start": 460,
                  "end": 476
                },
                {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false,
                      "start": 479,
                      "end": 482
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "f",
                        "cooked": "f"
                      },
                      "tail": true,
                      "start": 492,
                      "end": 495
                    }
                  ],
                  "types": [
                    {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 482,
                            "end": 483
                          },
                          "typeArguments": null,
                          "start": 482,
                          "end": 483
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 486,
                          "end": 492
                        }
                      ],
                      "start": 482,
                      "end": 492
                    }
                  ],
                  "start": 479,
                  "end": 495
                }
              ],
              "start": 460,
              "end": 495
            }
          ],
          "start": 459,
          "end": 496
        },
        "start": 450,
        "end": 496
      },
      "declare": false,
      "start": 438,
      "end": 497
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 503,
        "end": 504
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 507,
            "end": 508
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 509,
                  "end": 511
                },
                "start": 509,
                "end": 511
              }
            ],
            "start": 508,
            "end": 512
          },
          "start": 507,
          "end": 512
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "f",
            "raw": "\"f\"",
            "start": 521,
            "end": 524
          },
          "start": 521,
          "end": 524
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 527,
            "end": 528
          },
          "start": 527,
          "end": 528
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 531,
            "end": 532
          },
          "start": 531,
          "end": 532
        },
        "start": 507,
        "end": 532
      },
      "declare": false,
      "start": 498,
      "end": 533
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 544,
        "end": 545
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 546,
              "end": 547
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 546,
            "end": 547
          }
        ],
        "start": 545,
        "end": 548
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 551,
            "end": 552
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 553,
                  "end": 554
                },
                "typeArguments": null,
                "start": 553,
                "end": 554
              }
            ],
            "start": 552,
            "end": 555
          },
          "start": 551,
          "end": 555
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "f",
            "raw": "\"f\"",
            "start": 564,
            "end": 567
          },
          "start": 564,
          "end": 567
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 570,
            "end": 571
          },
          "start": 570,
          "end": 571
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 574,
            "end": 575
          },
          "start": 574,
          "end": 575
        },
        "start": 551,
        "end": 575
      },
      "declare": false,
      "start": 539,
      "end": 576
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
            "name": "x5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "G",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 586,
                  "end": 587
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 588,
                        "end": 590
                      },
                      "start": 588,
                      "end": 590
                    }
                  ],
                  "start": 587,
                  "end": 591
                },
                "start": 586,
                "end": 591
              },
              "start": 584,
              "end": 591
            },
            "start": 582,
            "end": 591
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 594,
            "end": 595
          },
          "definite": false,
          "start": 582,
          "end": 595
        }
      ],
      "declare": false,
      "start": 578,
      "end": 596
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 602
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 57,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 69,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 91,
    "end": 98
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 99,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 105,
    "end": 106
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 114,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 118,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 123,
    "end": 124
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 124,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 131,
    "end": 132
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 133,
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
    "value": "type",
    "start": 143,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 155,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 169,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 177,
    "end": 184
  },
  {
    "type": "Template",
    "value": "`f${",
    "start": 185,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 189,
    "end": 195
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 195,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 198,
    "end": 199
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 202,
    "end": 203
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 207,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 211,
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
    "value": "B",
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
    "type": "String",
    "value": "\"foo\"",
    "start": 217,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 224,
    "end": 225
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 236,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "Capitalize",
    "start": 248,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 259,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 273,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 280,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 282,
    "end": 289
  },
  {
    "type": "String",
    "value": "\"Foo\"",
    "start": 290,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 296,
    "end": 297
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 305,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 309,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 314,
    "end": 315
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 315,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 322,
    "end": 323
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 334,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 339,
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
    "value": "S",
    "start": 341,
    "end": 342
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 343,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 351,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "Capitalize",
    "start": 361,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 372,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 386,
    "end": 393
  },
  {
    "type": "String",
    "value": "\"Foo\"",
    "start": 394,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 400,
    "end": 401
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 404,
    "end": 405
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 409,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 413,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 418,
    "end": 419
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 419,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 426,
    "end": 427
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 438,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 450,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 459,
    "end": 460
  },
  {
    "type": "Template",
    "value": "`f${",
    "start": 460,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 468,
    "end": 474
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 474,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 477,
    "end": 478
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 479,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 486,
    "end": 492
  },
  {
    "type": "Template",
    "value": "}f`",
    "start": 492,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 498,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 508,
    "end": 509
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 509,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 511,
    "end": 512
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 513,
    "end": 520
  },
  {
    "type": "String",
    "value": "\"f\"",
    "start": 521,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 525,
    "end": 526
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 529,
    "end": 530
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 539,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 554,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 556,
    "end": 563
  },
  {
    "type": "String",
    "value": "\"f\"",
    "start": 564,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 568,
    "end": 569
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 572,
    "end": 573
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 578,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 582,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 587,
    "end": 588
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 588,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 592,
    "end": 593
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 595,
    "end": 596
  }
]
```
