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
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 75
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
              "start": 76,
              "end": 77
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 76,
            "end": 77
          }
        ],
        "start": 75,
        "end": 78
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 82
          },
          "typeArguments": null,
          "start": 81,
          "end": 82
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "*",
                "cooked": "*"
              },
              "tail": false,
              "start": 91,
              "end": 95
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "*",
                "cooked": "*"
              },
              "tail": true,
              "start": 102,
              "end": 105
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 102
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 101,
                "end": 102
              },
              "start": 95,
              "end": 102
            }
          ],
          "start": 91,
          "end": 105
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 109
          },
          "typeArguments": null,
          "start": 108,
          "end": 109
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 112,
          "end": 117
        },
        "start": 81,
        "end": 117
      },
      "declare": false,
      "start": 66,
      "end": 118
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T01",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 128
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 131,
          "end": 135
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 136,
                "end": 143
              },
              "start": 136,
              "end": 143
            }
          ],
          "start": 135,
          "end": 144
        },
        "start": 131,
        "end": 144
      },
      "declare": false,
      "start": 120,
      "end": 145
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T02",
        "optional": false,
        "typeAnnotation": null,
        "start": 151,
        "end": 154
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 157,
          "end": 161
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "*hello*",
                "raw": "'*hello*'",
                "start": 162,
                "end": 171
              },
              "start": 162,
              "end": 171
            }
          ],
          "start": 161,
          "end": 172
        },
        "start": 157,
        "end": 172
      },
      "declare": false,
      "start": 146,
      "end": 173
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T03",
        "optional": false,
        "typeAnnotation": null,
        "start": 179,
        "end": 182
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 185,
          "end": 189
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "**hello**",
                "raw": "'**hello**'",
                "start": 190,
                "end": 201
              },
              "start": 190,
              "end": 201
            }
          ],
          "start": 189,
          "end": 202
        },
        "start": 185,
        "end": 202
      },
      "declare": false,
      "start": 174,
      "end": 203
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T04",
        "optional": false,
        "typeAnnotation": null,
        "start": 209,
        "end": 212
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 215,
          "end": 219
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false,
                  "start": 220,
                  "end": 224
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": true,
                  "start": 230,
                  "end": 233
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 224,
                  "end": 230
                }
              ],
              "start": 220,
              "end": 233
            }
          ],
          "start": 219,
          "end": 234
        },
        "start": 215,
        "end": 234
      },
      "declare": false,
      "start": 204,
      "end": 235
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T05",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 244
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 247,
          "end": 251
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false,
                  "start": 252,
                  "end": 256
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": true,
                  "start": 262,
                  "end": 265
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 256,
                  "end": 262
                }
              ],
              "start": 252,
              "end": 265
            }
          ],
          "start": 251,
          "end": 266
        },
        "start": 247,
        "end": 266
      },
      "declare": false,
      "start": 236,
      "end": 267
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T06",
        "optional": false,
        "typeAnnotation": null,
        "start": 273,
        "end": 276
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 279,
          "end": 283
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false,
                  "start": 284,
                  "end": 288
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": true,
                  "start": 294,
                  "end": 297
                }
              ],
              "types": [
                {
                  "type": "TSBigIntKeyword",
                  "start": 288,
                  "end": 294
                }
              ],
              "start": 284,
              "end": 297
            }
          ],
          "start": 283,
          "end": 298
        },
        "start": 279,
        "end": 298
      },
      "declare": false,
      "start": 268,
      "end": 299
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T07",
        "optional": false,
        "typeAnnotation": null,
        "start": 305,
        "end": 308
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 311,
          "end": 315
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false,
                  "start": 316,
                  "end": 320
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": true,
                  "start": 323,
                  "end": 326
                }
              ],
              "types": [
                {
                  "type": "TSAnyKeyword",
                  "start": 320,
                  "end": 323
                }
              ],
              "start": 316,
              "end": 326
            }
          ],
          "start": 315,
          "end": 327
        },
        "start": 311,
        "end": 327
      },
      "declare": false,
      "start": 300,
      "end": 328
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T08",
        "optional": false,
        "typeAnnotation": null,
        "start": 334,
        "end": 337
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 340,
          "end": 344
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": false,
                  "start": 345,
                  "end": 350
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": true,
                  "start": 356,
                  "end": 360
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 350,
                  "end": 356
                }
              ],
              "start": 345,
              "end": 360
            }
          ],
          "start": 344,
          "end": 361
        },
        "start": 340,
        "end": 361
      },
      "declare": false,
      "start": 329,
      "end": 362
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T09",
        "optional": false,
        "typeAnnotation": null,
        "start": 368,
        "end": 371
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 374,
          "end": 378
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": false,
                  "start": 379,
                  "end": 384
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": false,
                  "start": 390,
                  "end": 395
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": true,
                  "start": 401,
                  "end": 405
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 384,
                  "end": 390
                },
                {
                  "type": "TSStringKeyword",
                  "start": 395,
                  "end": 401
                }
              ],
              "start": 379,
              "end": 405
            }
          ],
          "start": 378,
          "end": 406
        },
        "start": 374,
        "end": 406
      },
      "declare": false,
      "start": 363,
      "end": 407
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 413,
        "end": 416
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 419,
          "end": 423
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": false,
                  "start": 424,
                  "end": 429
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": true,
                  "start": 444,
                  "end": 448
                }
              ],
              "types": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 429,
                        "end": 432
                      },
                      "start": 429,
                      "end": 432
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "'b'",
                        "start": 435,
                        "end": 438
                      },
                      "start": 435,
                      "end": 438
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "c",
                        "raw": "'c'",
                        "start": 441,
                        "end": 444
                      },
                      "start": 441,
                      "end": 444
                    }
                  ],
                  "start": 429,
                  "end": 444
                }
              ],
              "start": 424,
              "end": 448
            }
          ],
          "start": 423,
          "end": 449
        },
        "start": 419,
        "end": 449
      },
      "declare": false,
      "start": 408,
      "end": 450
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 456,
        "end": 459
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 462,
          "end": 466
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": false,
                  "start": 467,
                  "end": 472
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": false,
                  "start": 479,
                  "end": 484
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": true,
                  "start": 491,
                  "end": 495
                }
              ],
              "types": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 472,
                  "end": 479
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 484,
                  "end": 491
                }
              ],
              "start": 467,
              "end": 495
            }
          ],
          "start": 466,
          "end": 496
        },
        "start": 462,
        "end": 496
      },
      "declare": false,
      "start": 451,
      "end": 497
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 516,
        "end": 520
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
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 521,
              "end": 522
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 531,
              "end": 537
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 521,
            "end": 537
          }
        ],
        "start": 520,
        "end": 538
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false,
                  "start": 544,
                  "end": 548
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": true,
                  "start": 549,
                  "end": 552
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 548,
                    "end": 549
                  },
                  "typeArguments": null,
                  "start": 548,
                  "end": 549
                }
              ],
              "start": 544,
              "end": 552
            },
            "start": 542,
            "end": 552
          },
          "start": 539,
          "end": 552
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "V",
            "optional": false,
            "typeAnnotation": null,
            "start": 555,
            "end": 556
          },
          "typeArguments": null,
          "start": 555,
          "end": 556
        },
        "start": 553,
        "end": 556
      },
      "body": null,
      "expression": false,
      "start": 499,
      "end": 557
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 568,
        "end": 570
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
              "start": 571,
              "end": 572
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 581,
              "end": 587
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 571,
            "end": 587
          }
        ],
        "start": 570,
        "end": 588
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 592,
              "end": 598
            },
            "start": 590,
            "end": 598
          },
          "start": 589,
          "end": 598
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 603,
              "end": 609
            },
            "start": 601,
            "end": 609
          },
          "start": 600,
          "end": 609
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 614,
              "end": 621
            },
            "start": 612,
            "end": 621
          },
          "start": 611,
          "end": 621
        },
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
                "start": 626,
                "end": 627
              },
              "typeArguments": null,
              "start": 626,
              "end": 627
            },
            "start": 624,
            "end": 627
          },
          "start": 623,
          "end": 627
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "typeAnnotation": null,
                  "start": 639,
                  "end": 641
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 644,
                    "end": 648
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "'hello'",
                      "start": 649,
                      "end": 656
                    }
                  ],
                  "optional": false,
                  "start": 644,
                  "end": 657
                },
                "definite": false,
                "start": 639,
                "end": 657
              }
            ],
            "declare": false,
            "start": 635,
            "end": 658
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
                  "typeAnnotation": null,
                  "start": 677,
                  "end": 679
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 682,
                    "end": 686
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "*hello*",
                      "raw": "'*hello*'",
                      "start": 687,
                      "end": 696
                    }
                  ],
                  "optional": false,
                  "start": 682,
                  "end": 697
                },
                "definite": false,
                "start": 677,
                "end": 697
              }
            ],
            "declare": false,
            "start": 673,
            "end": 698
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
                  "typeAnnotation": null,
                  "start": 707,
                  "end": 709
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 712,
                    "end": 716
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "**hello**",
                      "raw": "'**hello**'",
                      "start": 717,
                      "end": 728
                    }
                  ],
                  "optional": false,
                  "start": 712,
                  "end": 729
                },
                "definite": false,
                "start": 707,
                "end": 729
              }
            ],
            "declare": false,
            "start": 703,
            "end": 730
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
                  "typeAnnotation": null,
                  "start": 739,
                  "end": 741
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 744,
                    "end": 748
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "*",
                              "cooked": "*"
                            },
                            "tail": false,
                            "start": 749,
                            "end": 753
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "*",
                              "cooked": "*"
                            },
                            "tail": true,
                            "start": 754,
                            "end": 757
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 753,
                            "end": 754
                          }
                        ],
                        "start": 749,
                        "end": 757
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 761,
                          "end": 766
                        },
                        "typeArguments": null,
                        "start": 761,
                        "end": 766
                      },
                      "start": 749,
                      "end": 766
                    }
                  ],
                  "optional": false,
                  "start": 744,
                  "end": 767
                },
                "definite": false,
                "start": 739,
                "end": 767
              }
            ],
            "declare": false,
            "start": 735,
            "end": 768
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
                  "typeAnnotation": null,
                  "start": 777,
                  "end": 779
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 782,
                    "end": 786
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "*",
                              "cooked": "*"
                            },
                            "tail": false,
                            "start": 787,
                            "end": 791
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "*",
                              "cooked": "*"
                            },
                            "tail": true,
                            "start": 792,
                            "end": 795
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 791,
                            "end": 792
                          }
                        ],
                        "start": 787,
                        "end": 795
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 799,
                          "end": 804
                        },
                        "typeArguments": null,
                        "start": 799,
                        "end": 804
                      },
                      "start": 787,
                      "end": 804
                    }
                  ],
                  "optional": false,
                  "start": 782,
                  "end": 805
                },
                "definite": false,
                "start": 777,
                "end": 805
              }
            ],
            "declare": false,
            "start": 773,
            "end": 806
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
                  "name": "x6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 815,
                  "end": 817
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 820,
                    "end": 824
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "*",
                              "cooked": "*"
                            },
                            "tail": false,
                            "start": 825,
                            "end": 829
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "*",
                              "cooked": "*"
                            },
                            "tail": true,
                            "start": 830,
                            "end": 833
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 829,
                            "end": 830
                          }
                        ],
                        "start": 825,
                        "end": 833
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 837,
                          "end": 842
                        },
                        "typeArguments": null,
                        "start": 837,
                        "end": 842
                      },
                      "start": 825,
                      "end": 842
                    }
                  ],
                  "optional": false,
                  "start": 820,
                  "end": 843
                },
                "definite": false,
                "start": 815,
                "end": 843
              }
            ],
            "declare": false,
            "start": 811,
            "end": 844
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
                  "name": "x7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 853,
                  "end": 855
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 858,
                    "end": 862
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "*",
                              "cooked": "*"
                            },
                            "tail": false,
                            "start": 863,
                            "end": 867
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "*",
                              "cooked": "*"
                            },
                            "tail": true,
                            "start": 868,
                            "end": 871
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 867,
                            "end": 868
                          }
                        ],
                        "start": 863,
                        "end": 871
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 875,
                          "end": 880
                        },
                        "typeArguments": null,
                        "start": 875,
                        "end": 880
                      },
                      "start": 863,
                      "end": 880
                    }
                  ],
                  "optional": false,
                  "start": 858,
                  "end": 881
                },
                "definite": false,
                "start": 853,
                "end": 881
              }
            ],
            "declare": false,
            "start": 849,
            "end": 882
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
                  "name": "x8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 891,
                  "end": 893
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 896,
                    "end": 900
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "**",
                              "cooked": "**"
                            },
                            "tail": false,
                            "start": 901,
                            "end": 906
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "**",
                              "cooked": "**"
                            },
                            "tail": true,
                            "start": 907,
                            "end": 911
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 906,
                            "end": 907
                          }
                        ],
                        "start": 901,
                        "end": 911
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 915,
                          "end": 920
                        },
                        "typeArguments": null,
                        "start": 915,
                        "end": 920
                      },
                      "start": 901,
                      "end": 920
                    }
                  ],
                  "optional": false,
                  "start": 896,
                  "end": 921
                },
                "definite": false,
                "start": 891,
                "end": 921
              }
            ],
            "declare": false,
            "start": 887,
            "end": 922
          }
        ],
        "start": 629,
        "end": 924
      },
      "expression": false,
      "start": 559,
      "end": 924
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Parts",
        "optional": false,
        "typeAnnotation": null,
        "start": 1067,
        "end": 1072
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
              "start": 1073,
              "end": 1074
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1073,
            "end": 1074
          }
        ],
        "start": 1072,
        "end": 1075
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1082,
            "end": 1083
          },
          "typeArguments": null,
          "start": 1082,
          "end": 1083
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1092,
            "end": 1094
          },
          "start": 1092,
          "end": 1094
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [],
          "start": 1097,
          "end": 1099
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1106,
              "end": 1107
            },
            "typeArguments": null,
            "start": 1106,
            "end": 1107
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 1116,
                "end": 1119
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 1129,
                "end": 1132
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 1142,
                "end": 1144
              }
            ],
            "types": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Head",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1125,
                    "end": 1129
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1125,
                  "end": 1129
                },
                "start": 1119,
                "end": 1129
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tail",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1138,
                    "end": 1142
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1138,
                  "end": 1142
                },
                "start": 1132,
                "end": 1142
              }
            ],
            "start": 1116,
            "end": 1144
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Head",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1148,
                  "end": 1152
                },
                "typeArguments": null,
                "start": 1148,
                "end": 1152
              },
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Parts",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1157,
                    "end": 1162
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Tail",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1163,
                          "end": 1167
                        },
                        "typeArguments": null,
                        "start": 1163,
                        "end": 1167
                      }
                    ],
                    "start": 1162,
                    "end": 1168
                  },
                  "start": 1157,
                  "end": 1168
                },
                "start": 1154,
                "end": 1168
              }
            ],
            "start": 1147,
            "end": 1169
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1176,
            "end": 1181
          },
          "start": 1106,
          "end": 1181
        },
        "start": 1082,
        "end": 1181
      },
      "declare": false,
      "start": 1062,
      "end": 1182
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null,
        "start": 1189,
        "end": 1192
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parts",
          "optional": false,
          "typeAnnotation": null,
          "start": 1195,
          "end": 1200
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "abc",
                      "cooked": "abc"
                    },
                    "tail": true,
                    "start": 1201,
                    "end": 1206
                  }
                ],
                "expressions": [],
                "start": 1201,
                "end": 1206
              },
              "start": 1201,
              "end": 1206
            }
          ],
          "start": 1200,
          "end": 1207
        },
        "start": 1195,
        "end": 1207
      },
      "declare": false,
      "start": 1184,
      "end": 1208
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T21",
        "optional": false,
        "typeAnnotation": null,
        "start": 1214,
        "end": 1217
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parts",
          "optional": false,
          "typeAnnotation": null,
          "start": 1220,
          "end": 1225
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false,
                  "start": 1226,
                  "end": 1230
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": true,
                  "start": 1236,
                  "end": 1239
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1230,
                  "end": 1236
                }
              ],
              "start": 1226,
              "end": 1239
            }
          ],
          "start": 1225,
          "end": 1240
        },
        "start": 1220,
        "end": 1240
      },
      "declare": false,
      "start": 1209,
      "end": 1241
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T22",
        "optional": false,
        "typeAnnotation": null,
        "start": 1247,
        "end": 1250
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parts",
          "optional": false,
          "typeAnnotation": null,
          "start": 1253,
          "end": 1258
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false,
                  "start": 1259,
                  "end": 1263
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": true,
                  "start": 1269,
                  "end": 1272
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1263,
                  "end": 1269
                }
              ],
              "start": 1259,
              "end": 1272
            }
          ],
          "start": 1258,
          "end": 1273
        },
        "start": 1253,
        "end": 1273
      },
      "declare": false,
      "start": 1242,
      "end": 1274
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T23",
        "optional": false,
        "typeAnnotation": null,
        "start": 1280,
        "end": 1283
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parts",
          "optional": false,
          "typeAnnotation": null,
          "start": 1286,
          "end": 1291
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false,
                  "start": 1292,
                  "end": 1296
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false,
                  "start": 1302,
                  "end": 1306
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false,
                  "start": 1312,
                  "end": 1316
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": true,
                  "start": 1322,
                  "end": 1325
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1296,
                  "end": 1302
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1306,
                  "end": 1312
                },
                {
                  "type": "TSBigIntKeyword",
                  "start": 1316,
                  "end": 1322
                }
              ],
              "start": 1292,
              "end": 1325
            }
          ],
          "start": 1291,
          "end": 1326
        },
        "start": 1286,
        "end": 1326
      },
      "declare": false,
      "start": 1275,
      "end": 1327
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1338,
        "end": 1340
      },
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
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
                          "start": 1356,
                          "end": 1359
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": ".",
                            "cooked": "."
                          },
                          "tail": false,
                          "start": 1365,
                          "end": 1369
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": ".",
                            "cooked": "."
                          },
                          "tail": false,
                          "start": 1375,
                          "end": 1379
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 1385,
                          "end": 1387
                        }
                      ],
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1359,
                          "end": 1365
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1369,
                          "end": 1375
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1379,
                          "end": 1385
                        }
                      ],
                      "start": 1356,
                      "end": 1387
                    },
                    "start": 1354,
                    "end": 1387
                  },
                  "start": 1353,
                  "end": 1387
                },
                "init": null,
                "definite": false,
                "start": 1353,
                "end": 1387
              }
            ],
            "declare": false,
            "start": 1349,
            "end": 1388
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1393,
                "end": 1394
              },
              "right": {
                "type": "Literal",
                "value": "1.1.1",
                "raw": "'1.1.1'",
                "start": 1397,
                "end": 1404
              },
              "start": 1393,
              "end": 1404
            },
            "directive": null,
            "start": 1393,
            "end": 1405
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1410,
                "end": 1411
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": "1.1.1",
                  "raw": "'1.1.1'",
                  "start": 1414,
                  "end": 1421
                },
                "typeAnnotation": {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "1.1.",
                        "cooked": "1.1."
                      },
                      "tail": false,
                      "start": 1425,
                      "end": 1432
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 1438,
                      "end": 1440
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1432,
                      "end": 1438
                    }
                  ],
                  "start": 1425,
                  "end": 1440
                },
                "start": 1414,
                "end": 1440
              },
              "start": 1410,
              "end": 1440
            },
            "directive": null,
            "start": 1410,
            "end": 1441
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1446,
                "end": 1447
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": "1.1.1",
                  "raw": "'1.1.1'",
                  "start": 1450,
                  "end": 1457
                },
                "typeAnnotation": {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "1.",
                        "cooked": "1."
                      },
                      "tail": false,
                      "start": 1461,
                      "end": 1466
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ".1",
                        "cooked": ".1"
                      },
                      "tail": true,
                      "start": 1472,
                      "end": 1476
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1466,
                      "end": 1472
                    }
                  ],
                  "start": 1461,
                  "end": 1476
                },
                "start": 1450,
                "end": 1476
              },
              "start": 1446,
              "end": 1476
            },
            "directive": null,
            "start": 1446,
            "end": 1477
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1482,
                "end": 1483
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": "1.1.1",
                  "raw": "'1.1.1'",
                  "start": 1486,
                  "end": 1493
                },
                "typeAnnotation": {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "1.",
                        "cooked": "1."
                      },
                      "tail": false,
                      "start": 1497,
                      "end": 1502
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ".",
                        "cooked": "."
                      },
                      "tail": false,
                      "start": 1508,
                      "end": 1512
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 1518,
                      "end": 1520
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1502,
                      "end": 1508
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1512,
                      "end": 1518
                    }
                  ],
                  "start": 1497,
                  "end": 1520
                },
                "start": 1486,
                "end": 1520
              },
              "start": 1482,
              "end": 1520
            },
            "directive": null,
            "start": 1482,
            "end": 1521
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1526,
                "end": 1527
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": "1.1.1",
                  "raw": "'1.1.1'",
                  "start": 1530,
                  "end": 1537
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
                      "start": 1541,
                      "end": 1544
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ".1.1",
                        "cooked": ".1.1"
                      },
                      "tail": true,
                      "start": 1550,
                      "end": 1556
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1544,
                      "end": 1550
                    }
                  ],
                  "start": 1541,
                  "end": 1556
                },
                "start": 1530,
                "end": 1556
              },
              "start": 1526,
              "end": 1556
            },
            "directive": null,
            "start": 1526,
            "end": 1557
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1562,
                "end": 1563
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": "1.1.1",
                  "raw": "'1.1.1'",
                  "start": 1566,
                  "end": 1573
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
                      "start": 1577,
                      "end": 1580
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ".1.",
                        "cooked": ".1."
                      },
                      "tail": false,
                      "start": 1586,
                      "end": 1592
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 1598,
                      "end": 1600
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1580,
                      "end": 1586
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1592,
                      "end": 1598
                    }
                  ],
                  "start": 1577,
                  "end": 1600
                },
                "start": 1566,
                "end": 1600
              },
              "start": 1562,
              "end": 1600
            },
            "directive": null,
            "start": 1562,
            "end": 1601
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1606,
                "end": 1607
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": "1.1.1",
                  "raw": "'1.1.1'",
                  "start": 1610,
                  "end": 1617
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
                      "start": 1621,
                      "end": 1624
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ".",
                        "cooked": "."
                      },
                      "tail": false,
                      "start": 1630,
                      "end": 1634
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ".1",
                        "cooked": ".1"
                      },
                      "tail": true,
                      "start": 1640,
                      "end": 1644
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1624,
                      "end": 1630
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1634,
                      "end": 1640
                    }
                  ],
                  "start": 1621,
                  "end": 1644
                },
                "start": 1610,
                "end": 1644
              },
              "start": 1606,
              "end": 1644
            },
            "directive": null,
            "start": 1606,
            "end": 1645
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1650,
                "end": 1651
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": "1.1.1",
                  "raw": "'1.1.1'",
                  "start": 1654,
                  "end": 1661
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
                      "start": 1665,
                      "end": 1668
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ".",
                        "cooked": "."
                      },
                      "tail": false,
                      "start": 1674,
                      "end": 1678
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ".",
                        "cooked": "."
                      },
                      "tail": false,
                      "start": 1684,
                      "end": 1688
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 1694,
                      "end": 1696
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1668,
                      "end": 1674
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1678,
                      "end": 1684
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1688,
                      "end": 1694
                    }
                  ],
                  "start": 1665,
                  "end": 1696
                },
                "start": 1654,
                "end": 1696
              },
              "start": 1650,
              "end": 1696
            },
            "directive": null,
            "start": 1650,
            "end": 1697
          }
        ],
        "start": 1343,
        "end": 1699
      },
      "expression": false,
      "start": 1329,
      "end": 1699
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1710,
        "end": 1712
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
              "start": 1713,
              "end": 1714
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1723,
              "end": 1729
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1713,
            "end": 1729
          }
        ],
        "start": 1712,
        "end": 1730
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1734,
              "end": 1740
            },
            "start": 1732,
            "end": 1740
          },
          "start": 1731,
          "end": 1740
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1745,
              "end": 1751
            },
            "start": 1743,
            "end": 1751
          },
          "start": 1742,
          "end": 1751
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 1756,
              "end": 1763
            },
            "start": 1754,
            "end": 1763
          },
          "start": 1753,
          "end": 1763
        },
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
                "start": 1768,
                "end": 1769
              },
              "typeArguments": null,
              "start": 1768,
              "end": 1769
            },
            "start": 1766,
            "end": 1769
          },
          "start": 1765,
          "end": 1769
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
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
                            "raw": "*",
                            "cooked": "*"
                          },
                          "tail": false,
                          "start": 1784,
                          "end": 1788
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "*",
                            "cooked": "*"
                          },
                          "tail": true,
                          "start": 1794,
                          "end": 1797
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1788,
                          "end": 1794
                        }
                      ],
                      "start": 1784,
                      "end": 1797
                    },
                    "start": 1782,
                    "end": 1797
                  },
                  "start": 1781,
                  "end": 1797
                },
                "init": null,
                "definite": false,
                "start": 1781,
                "end": 1797
              }
            ],
            "declare": false,
            "start": 1777,
            "end": 1798
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1803,
                "end": 1804
              },
              "right": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 1807,
                "end": 1814
              },
              "start": 1803,
              "end": 1814
            },
            "directive": null,
            "start": 1803,
            "end": 1815
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1830,
                "end": 1831
              },
              "right": {
                "type": "Literal",
                "value": "*hello*",
                "raw": "'*hello*'",
                "start": 1834,
                "end": 1843
              },
              "start": 1830,
              "end": 1843
            },
            "directive": null,
            "start": 1830,
            "end": 1844
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1849,
                "end": 1850
              },
              "right": {
                "type": "Literal",
                "value": "**hello**",
                "raw": "'**hello**'",
                "start": 1853,
                "end": 1864
              },
              "start": 1849,
              "end": 1864
            },
            "directive": null,
            "start": 1849,
            "end": 1865
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1870,
                "end": 1871
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": false,
                      "start": 1874,
                      "end": 1878
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": true,
                      "start": 1879,
                      "end": 1882
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1878,
                      "end": 1879
                    }
                  ],
                  "start": 1874,
                  "end": 1882
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1886,
                    "end": 1891
                  },
                  "typeArguments": null,
                  "start": 1886,
                  "end": 1891
                },
                "start": 1874,
                "end": 1891
              },
              "start": 1870,
              "end": 1891
            },
            "directive": null,
            "start": 1870,
            "end": 1892
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1897,
                "end": 1898
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": false,
                      "start": 1901,
                      "end": 1905
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": true,
                      "start": 1906,
                      "end": 1909
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1905,
                      "end": 1906
                    }
                  ],
                  "start": 1901,
                  "end": 1909
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1913,
                    "end": 1918
                  },
                  "typeArguments": null,
                  "start": 1913,
                  "end": 1918
                },
                "start": 1901,
                "end": 1918
              },
              "start": 1897,
              "end": 1918
            },
            "directive": null,
            "start": 1897,
            "end": 1919
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1924,
                "end": 1925
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": false,
                      "start": 1928,
                      "end": 1932
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": true,
                      "start": 1933,
                      "end": 1936
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1932,
                      "end": 1933
                    }
                  ],
                  "start": 1928,
                  "end": 1936
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1940,
                    "end": 1945
                  },
                  "typeArguments": null,
                  "start": 1940,
                  "end": 1945
                },
                "start": 1928,
                "end": 1945
              },
              "start": 1924,
              "end": 1945
            },
            "directive": null,
            "start": 1924,
            "end": 1946
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1951,
                "end": 1952
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": false,
                      "start": 1955,
                      "end": 1959
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": true,
                      "start": 1960,
                      "end": 1963
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1959,
                      "end": 1960
                    }
                  ],
                  "start": 1955,
                  "end": 1963
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1967,
                    "end": 1972
                  },
                  "typeArguments": null,
                  "start": 1967,
                  "end": 1972
                },
                "start": 1955,
                "end": 1972
              },
              "start": 1951,
              "end": 1972
            },
            "directive": null,
            "start": 1951,
            "end": 1973
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1978,
                "end": 1979
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "**",
                        "cooked": "**"
                      },
                      "tail": false,
                      "start": 1982,
                      "end": 1987
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "**",
                        "cooked": "**"
                      },
                      "tail": true,
                      "start": 1988,
                      "end": 1992
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1987,
                      "end": 1988
                    }
                  ],
                  "start": 1982,
                  "end": 1992
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1996,
                    "end": 2001
                  },
                  "typeArguments": null,
                  "start": 1996,
                  "end": 2001
                },
                "start": 1982,
                "end": 2001
              },
              "start": 1978,
              "end": 2001
            },
            "directive": null,
            "start": 1978,
            "end": 2002
          }
        ],
        "start": 1771,
        "end": 2004
      },
      "expression": false,
      "start": 1701,
      "end": 2004
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2015,
        "end": 2017
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
              "start": 2018,
              "end": 2019
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2028,
              "end": 2034
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2018,
            "end": 2034
          }
        ],
        "start": 2017,
        "end": 2035
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2039,
              "end": 2045
            },
            "start": 2037,
            "end": 2045
          },
          "start": 2036,
          "end": 2045
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2050,
              "end": 2056
            },
            "start": 2048,
            "end": 2056
          },
          "start": 2047,
          "end": 2056
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 2061,
              "end": 2068
            },
            "start": 2059,
            "end": 2068
          },
          "start": 2058,
          "end": 2068
        },
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
                "start": 2073,
                "end": 2074
              },
              "typeArguments": null,
              "start": 2073,
              "end": 2074
            },
            "start": 2071,
            "end": 2074
          },
          "start": 2070,
          "end": 2074
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
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
                            "raw": "*",
                            "cooked": "*"
                          },
                          "tail": false,
                          "start": 2089,
                          "end": 2093
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "*",
                            "cooked": "*"
                          },
                          "tail": true,
                          "start": 2099,
                          "end": 2102
                        }
                      ],
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2093,
                          "end": 2099
                        }
                      ],
                      "start": 2089,
                      "end": 2102
                    },
                    "start": 2087,
                    "end": 2102
                  },
                  "start": 2086,
                  "end": 2102
                },
                "init": null,
                "definite": false,
                "start": 2086,
                "end": 2102
              }
            ],
            "declare": false,
            "start": 2082,
            "end": 2103
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2108,
                "end": 2109
              },
              "right": {
                "type": "Literal",
                "value": "123",
                "raw": "'123'",
                "start": 2112,
                "end": 2117
              },
              "start": 2108,
              "end": 2117
            },
            "directive": null,
            "start": 2108,
            "end": 2118
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2133,
                "end": 2134
              },
              "right": {
                "type": "Literal",
                "value": "*123*",
                "raw": "'*123*'",
                "start": 2137,
                "end": 2144
              },
              "start": 2133,
              "end": 2144
            },
            "directive": null,
            "start": 2133,
            "end": 2145
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2150,
                "end": 2151
              },
              "right": {
                "type": "Literal",
                "value": "**123**",
                "raw": "'**123**'",
                "start": 2154,
                "end": 2163
              },
              "start": 2150,
              "end": 2163
            },
            "directive": null,
            "start": 2150,
            "end": 2164
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2179,
                "end": 2180
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": false,
                      "start": 2183,
                      "end": 2187
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": true,
                      "start": 2188,
                      "end": 2191
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2187,
                      "end": 2188
                    }
                  ],
                  "start": 2183,
                  "end": 2191
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2195,
                    "end": 2200
                  },
                  "typeArguments": null,
                  "start": 2195,
                  "end": 2200
                },
                "start": 2183,
                "end": 2200
              },
              "start": 2179,
              "end": 2200
            },
            "directive": null,
            "start": 2179,
            "end": 2201
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2216,
                "end": 2217
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": false,
                      "start": 2220,
                      "end": 2224
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": true,
                      "start": 2225,
                      "end": 2228
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2224,
                      "end": 2225
                    }
                  ],
                  "start": 2220,
                  "end": 2228
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2232,
                    "end": 2237
                  },
                  "typeArguments": null,
                  "start": 2232,
                  "end": 2237
                },
                "start": 2220,
                "end": 2237
              },
              "start": 2216,
              "end": 2237
            },
            "directive": null,
            "start": 2216,
            "end": 2238
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2243,
                "end": 2244
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": false,
                      "start": 2247,
                      "end": 2251
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": true,
                      "start": 2252,
                      "end": 2255
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2251,
                      "end": 2252
                    }
                  ],
                  "start": 2247,
                  "end": 2255
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2259,
                    "end": 2264
                  },
                  "typeArguments": null,
                  "start": 2259,
                  "end": 2264
                },
                "start": 2247,
                "end": 2264
              },
              "start": 2243,
              "end": 2264
            },
            "directive": null,
            "start": 2243,
            "end": 2265
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2280,
                "end": 2281
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": false,
                      "start": 2284,
                      "end": 2288
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": true,
                      "start": 2289,
                      "end": 2292
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2288,
                      "end": 2289
                    }
                  ],
                  "start": 2284,
                  "end": 2292
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2296,
                    "end": 2301
                  },
                  "typeArguments": null,
                  "start": 2296,
                  "end": 2301
                },
                "start": 2284,
                "end": 2301
              },
              "start": 2280,
              "end": 2301
            },
            "directive": null,
            "start": 2280,
            "end": 2302
          }
        ],
        "start": 2076,
        "end": 2304
      },
      "expression": false,
      "start": 2006,
      "end": 2304
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 2333,
        "end": 2334
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
              "start": 2335,
              "end": 2336
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2335,
            "end": 2336
          }
        ],
        "start": 2334,
        "end": 2337
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2340,
            "end": 2341
          },
          "typeArguments": null,
          "start": 2340,
          "end": 2341
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2350,
              "end": 2353
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": ".",
                "cooked": "."
              },
              "tail": false,
              "start": 2360,
              "end": 2364
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2371,
              "end": 2373
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2359,
                  "end": 2360
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2359,
                "end": 2360
              },
              "start": 2353,
              "end": 2360
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2370,
                  "end": 2371
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2370,
                "end": 2371
              },
              "start": 2364,
              "end": 2371
            }
          ],
          "start": 2350,
          "end": 2373
        },
        "trueType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2376,
                "end": 2377
              },
              "typeArguments": null,
              "start": 2376,
              "end": 2377
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 2380,
                "end": 2381
              },
              "typeArguments": null,
              "start": 2380,
              "end": 2381
            }
          ],
          "start": 2376,
          "end": 2381
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2384,
          "end": 2389
        },
        "start": 2340,
        "end": 2389
      },
      "declare": false,
      "start": 2328,
      "end": 2389
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 2395,
        "end": 2396
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 2399,
          "end": 2400
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "test.1024",
                      "cooked": "test.1024"
                    },
                    "tail": true,
                    "start": 2401,
                    "end": 2412
                  }
                ],
                "expressions": [],
                "start": 2401,
                "end": 2412
              },
              "start": 2401,
              "end": 2412
            }
          ],
          "start": 2400,
          "end": 2413
        },
        "start": 2399,
        "end": 2413
      },
      "declare": false,
      "start": 2390,
      "end": 2414
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 2440,
        "end": 2441
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 2444,
          "end": 2445
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "test.",
                    "cooked": "test."
                  },
                  "tail": false,
                  "start": 2446,
                  "end": 2454
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 2460,
                  "end": 2462
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 2454,
                  "end": 2460
                }
              ],
              "start": 2446,
              "end": 2462
            }
          ],
          "start": 2445,
          "end": 2463
        },
        "start": 2444,
        "end": 2463
      },
      "declare": false,
      "start": 2435,
      "end": 2464
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 2496,
        "end": 2497
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
              "start": 2498,
              "end": 2499
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2498,
            "end": 2499
          }
        ],
        "start": 2497,
        "end": 2500
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2503,
            "end": 2504
          },
          "typeArguments": null,
          "start": 2503,
          "end": 2504
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2513,
              "end": 2516
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": ".",
                "cooked": "."
              },
              "tail": false,
              "start": 2523,
              "end": 2527
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2533,
              "end": 2535
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2522,
                  "end": 2523
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2522,
                "end": 2523
              },
              "start": 2516,
              "end": 2523
            },
            {
              "type": "TSNumberKeyword",
              "start": 2527,
              "end": 2533
            }
          ],
          "start": 2513,
          "end": 2535
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 2538,
            "end": 2539
          },
          "typeArguments": null,
          "start": 2538,
          "end": 2539
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2542,
          "end": 2547
        },
        "start": 2503,
        "end": 2547
      },
      "declare": false,
      "start": 2491,
      "end": 2547
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 2553,
        "end": 2554
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 2557,
          "end": 2558
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "test.1024",
                      "cooked": "test.1024"
                    },
                    "tail": true,
                    "start": 2559,
                    "end": 2570
                  }
                ],
                "expressions": [],
                "start": 2559,
                "end": 2570
              },
              "start": 2559,
              "end": 2570
            }
          ],
          "start": 2558,
          "end": 2571
        },
        "start": 2557,
        "end": 2571
      },
      "declare": false,
      "start": 2548,
      "end": 2572
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 2589,
        "end": 2590
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 2593,
          "end": 2594
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "test.",
                    "cooked": "test."
                  },
                  "tail": false,
                  "start": 2595,
                  "end": 2603
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 2609,
                  "end": 2611
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 2603,
                  "end": 2609
                }
              ],
              "start": 2595,
              "end": 2611
            }
          ],
          "start": 2594,
          "end": 2612
        },
        "start": 2593,
        "end": 2612
      },
      "declare": false,
      "start": 2584,
      "end": 2613
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 2631,
        "end": 2632
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
              "start": 2633,
              "end": 2634
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2633,
            "end": 2634
          }
        ],
        "start": 2632,
        "end": 2635
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2638,
            "end": 2639
          },
          "typeArguments": null,
          "start": 2638,
          "end": 2639
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2648,
              "end": 2651
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": ".",
                "cooked": "."
              },
              "tail": false,
              "start": 2658,
              "end": 2662
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2669,
              "end": 2671
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2657,
                  "end": 2658
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2657,
                "end": 2658
              },
              "start": 2651,
              "end": 2658
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2668,
                  "end": 2669
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2668,
                "end": 2669
              },
              "start": 2662,
              "end": 2669
            }
          ],
          "start": 2648,
          "end": 2671
        },
        "trueType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2674,
                "end": 2675
              },
              "typeArguments": null,
              "start": 2674,
              "end": 2675
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 2678,
                "end": 2679
              },
              "typeArguments": null,
              "start": 2678,
              "end": 2679
            }
          ],
          "start": 2674,
          "end": 2679
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2682,
          "end": 2687
        },
        "start": 2638,
        "end": 2687
      },
      "declare": false,
      "start": 2626,
      "end": 2687
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null,
        "start": 2693,
        "end": 2694
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "G",
          "optional": false,
          "typeAnnotation": null,
          "start": 2697,
          "end": 2698
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "test.hoge",
                      "cooked": "test.hoge"
                    },
                    "tail": true,
                    "start": 2699,
                    "end": 2710
                  }
                ],
                "expressions": [],
                "start": 2699,
                "end": 2710
              },
              "start": 2699,
              "end": 2710
            }
          ],
          "start": 2698,
          "end": 2711
        },
        "start": 2697,
        "end": 2711
      },
      "declare": false,
      "start": 2688,
      "end": 2712
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 2738,
        "end": 2739
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "G",
          "optional": false,
          "typeAnnotation": null,
          "start": 2742,
          "end": 2743
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "test.",
                    "cooked": "test."
                  },
                  "tail": false,
                  "start": 2744,
                  "end": 2752
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 2758,
                  "end": 2760
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 2752,
                  "end": 2758
                }
              ],
              "start": 2744,
              "end": 2760
            }
          ],
          "start": 2743,
          "end": 2761
        },
        "start": 2742,
        "end": 2761
      },
      "declare": false,
      "start": 2733,
      "end": 2762
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J",
        "optional": false,
        "typeAnnotation": null,
        "start": 2816,
        "end": 2817
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
              "start": 2818,
              "end": 2819
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2818,
            "end": 2819
          }
        ],
        "start": 2817,
        "end": 2820
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2823,
            "end": 2824
          },
          "typeArguments": null,
          "start": 2823,
          "end": 2824
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 2833,
              "end": 2836
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": ".",
                "cooked": "."
              },
              "tail": false,
              "start": 2843,
              "end": 2847
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2853,
              "end": 2855
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2842,
                  "end": 2843
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2842,
                "end": 2843
              },
              "start": 2836,
              "end": 2843
            },
            {
              "type": "TSStringKeyword",
              "start": 2847,
              "end": 2853
            }
          ],
          "start": 2833,
          "end": 2855
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 2858,
            "end": 2859
          },
          "typeArguments": null,
          "start": 2858,
          "end": 2859
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2862,
          "end": 2867
        },
        "start": 2823,
        "end": 2867
      },
      "declare": false,
      "start": 2811,
      "end": 2867
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K",
        "optional": false,
        "typeAnnotation": null,
        "start": 2873,
        "end": 2874
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "J",
          "optional": false,
          "typeAnnotation": null,
          "start": 2877,
          "end": 2878
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "test.hoge",
                      "cooked": "test.hoge"
                    },
                    "tail": true,
                    "start": 2879,
                    "end": 2890
                  }
                ],
                "expressions": [],
                "start": 2879,
                "end": 2890
              },
              "start": 2879,
              "end": 2890
            }
          ],
          "start": 2878,
          "end": 2891
        },
        "start": 2877,
        "end": 2891
      },
      "declare": false,
      "start": 2868,
      "end": 2892
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "L",
        "optional": false,
        "typeAnnotation": null,
        "start": 2909,
        "end": 2910
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "J",
          "optional": false,
          "typeAnnotation": null,
          "start": 2913,
          "end": 2914
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "test.",
                    "cooked": "test."
                  },
                  "tail": false,
                  "start": 2915,
                  "end": 2923
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 2929,
                  "end": 2931
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 2923,
                  "end": 2929
                }
              ],
              "start": 2915,
              "end": 2931
            }
          ],
          "start": 2914,
          "end": 2932
        },
        "start": 2913,
        "end": 2932
      },
      "declare": false,
      "start": 2904,
      "end": 2933
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Templated",
        "optional": false,
        "typeAnnotation": null,
        "start": 2974,
        "end": 2983
      },
      "typeParameters": null,
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
            "start": 2986,
            "end": 2989
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " ",
              "cooked": " "
            },
            "tail": false,
            "start": 2995,
            "end": 2999
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 3005,
            "end": 3007
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 2989,
            "end": 2995
          },
          {
            "type": "TSStringKeyword",
            "start": 2999,
            "end": 3005
          }
        ],
        "start": 2986,
        "end": 3007
      },
      "declare": false,
      "start": 2969,
      "end": 3008
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
            "name": "value1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3024,
                "end": 3030
              },
              "start": 3022,
              "end": 3030
            },
            "start": 3016,
            "end": 3030
          },
          "init": {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 3033,
            "end": 3038
          },
          "definite": false,
          "start": 3016,
          "end": 3038
        }
      ],
      "declare": false,
      "start": 3010,
      "end": 3039
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
            "name": "templated1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Templated",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3058,
                  "end": 3067
                },
                "typeArguments": null,
                "start": 3058,
                "end": 3067
              },
              "start": 3056,
              "end": 3067
            },
            "start": 3046,
            "end": 3067
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 3070,
                  "end": 3073
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " abc",
                    "cooked": " abc"
                  },
                  "tail": true,
                  "start": 3079,
                  "end": 3085
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3073,
                  "end": 3079
                }
              ],
              "start": 3070,
              "end": 3085
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 3089,
                "end": 3094
              },
              "typeArguments": null,
              "start": 3089,
              "end": 3094
            },
            "start": 3070,
            "end": 3094
          },
          "definite": false,
          "start": 3046,
          "end": 3094
        }
      ],
      "declare": false,
      "start": 3040,
      "end": 3095
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
            "name": "value2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3180,
            "end": 3186
          },
          "init": {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 3189,
            "end": 3194
          },
          "definite": false,
          "start": 3180,
          "end": 3194
        }
      ],
      "declare": false,
      "start": 3174,
      "end": 3195
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
            "name": "templated2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Templated",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3214,
                  "end": 3223
                },
                "typeArguments": null,
                "start": 3214,
                "end": 3223
              },
              "start": 3212,
              "end": 3223
            },
            "start": 3202,
            "end": 3223
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 3226,
                  "end": 3229
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " abc",
                    "cooked": " abc"
                  },
                  "tail": true,
                  "start": 3235,
                  "end": 3241
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3229,
                  "end": 3235
                }
              ],
              "start": 3226,
              "end": 3241
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 3245,
                "end": 3250
              },
              "typeArguments": null,
              "start": 3245,
              "end": 3250
            },
            "start": 3226,
            "end": 3250
          },
          "definite": false,
          "start": 3202,
          "end": 3250
        }
      ],
      "declare": false,
      "start": 3196,
      "end": 3251
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Prefixes",
        "optional": false,
        "typeAnnotation": null,
        "start": 3280,
        "end": 3288
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 3291,
              "end": 3296
            },
            "start": 3291,
            "end": 3296
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 3299,
              "end": 3304
            },
            "start": 3299,
            "end": 3304
          }
        ],
        "start": 3291,
        "end": 3304
      },
      "declare": false,
      "start": 3275,
      "end": 3305
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AllPrefixData",
        "optional": false,
        "typeAnnotation": null,
        "start": 3312,
        "end": 3325
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "foo:baz",
              "raw": "\"foo:baz\"",
              "start": 3328,
              "end": 3337
            },
            "start": 3328,
            "end": 3337
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "bar:baz",
              "raw": "\"bar:baz\"",
              "start": 3340,
              "end": 3349
            },
            "start": 3340,
            "end": 3349
          }
        ],
        "start": 3328,
        "end": 3349
      },
      "declare": false,
      "start": 3307,
      "end": 3350
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PrefixData",
        "optional": false,
        "typeAnnotation": null,
        "start": 3357,
        "end": 3367
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 3368,
              "end": 3369
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Prefixes",
                "optional": false,
                "typeAnnotation": null,
                "start": 3378,
                "end": 3386
              },
              "typeArguments": null,
              "start": 3378,
              "end": 3386
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3368,
            "end": 3386
          }
        ],
        "start": 3367,
        "end": 3387
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
            "start": 3390,
            "end": 3393
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": ":baz",
              "cooked": ":baz"
            },
            "tail": true,
            "start": 3394,
            "end": 3400
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 3393,
              "end": 3394
            },
            "typeArguments": null,
            "start": 3393,
            "end": 3394
          }
        ],
        "start": 3390,
        "end": 3400
      },
      "declare": false,
      "start": 3352,
      "end": 3401
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ITest",
        "optional": false,
        "typeAnnotation": null,
        "start": 3413,
        "end": 3418
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 3419,
              "end": 3420
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Prefixes",
                "optional": false,
                "typeAnnotation": null,
                "start": 3429,
                "end": 3437
              },
              "typeArguments": null,
              "start": 3429,
              "end": 3437
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3419,
            "end": 3437
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 3439,
              "end": 3440
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AllPrefixData",
                "optional": false,
                "typeAnnotation": null,
                "start": 3449,
                "end": 3462
              },
              "typeArguments": null,
              "start": 3449,
              "end": 3462
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PrefixData",
                "optional": false,
                "typeAnnotation": null,
                "start": 3465,
                "end": 3475
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3476,
                      "end": 3477
                    },
                    "typeArguments": null,
                    "start": 3476,
                    "end": 3477
                  }
                ],
                "start": 3475,
                "end": 3478
              },
              "start": 3465,
              "end": 3478
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3439,
            "end": 3478
          }
        ],
        "start": 3418,
        "end": 3479
      },
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
              "name": "blah",
              "optional": false,
              "typeAnnotation": null,
              "start": 3486,
              "end": 3490
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3492,
                "end": 3498
              },
              "start": 3490,
              "end": 3498
            },
            "accessibility": null,
            "static": false,
            "start": 3486,
            "end": 3499
          }
        ],
        "start": 3480,
        "end": 3501
      },
      "declare": false,
      "start": 3403,
      "end": 3501
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 3530,
        "end": 3536
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 3541,
              "end": 3542
            },
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3546,
                      "end": 3547
                    },
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
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3551,
                              "end": 3552
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3554,
                                "end": 3560
                              },
                              "start": 3552,
                              "end": 3560
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3551,
                            "end": 3560
                          }
                        ],
                        "start": 3549,
                        "end": 3562
                      },
                      "start": 3547,
                      "end": 3562
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3546,
                    "end": 3562
                  }
                ],
                "start": 3544,
                "end": 3564
              },
              "start": 3542,
              "end": 3564
            },
            "accessibility": null,
            "static": false,
            "start": 3541,
            "end": 3564
          }
        ],
        "start": 3539,
        "end": 3566
      },
      "declare": false,
      "start": 3525,
      "end": 3567
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "chain",
        "optional": false,
        "typeAnnotation": null,
        "start": 3586,
        "end": 3591
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
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 3592,
              "end": 3593
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Schema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3608,
                  "end": 3614
                },
                "typeArguments": null,
                "start": 3608,
                "end": 3614
              },
              "start": 3602,
              "end": 3614
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3592,
            "end": 3614
          }
        ],
        "start": 3591,
        "end": 3615
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "field",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3623,
                    "end": 3624
                  },
                  "typeArguments": null,
                  "start": 3623,
                  "end": 3624
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
                      "start": 3627,
                      "end": 3630
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ".",
                        "cooked": "."
                      },
                      "tail": false,
                      "start": 3631,
                      "end": 3635
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 3636,
                      "end": 3638
                    }
                  ],
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "F",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3630,
                        "end": 3631
                      },
                      "typeArguments": null,
                      "start": 3630,
                      "end": 3631
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "F",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3635,
                        "end": 3636
                      },
                      "typeArguments": null,
                      "start": 3635,
                      "end": 3636
                    }
                  ],
                  "start": 3627,
                  "end": 3638
                }
              ],
              "start": 3623,
              "end": 3638
            },
            "start": 3621,
            "end": 3638
          },
          "start": 3616,
          "end": 3638
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 3641,
          "end": 3645
        },
        "start": 3639,
        "end": 3645
      },
      "body": null,
      "expression": false,
      "start": 3569,
      "end": 3646
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "chain",
          "optional": false,
          "typeAnnotation": null,
          "start": 3648,
          "end": 3653
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 3654,
            "end": 3657
          }
        ],
        "optional": false,
        "start": 3648,
        "end": 3658
      },
      "directive": null,
      "start": 3648,
      "end": 3659
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3692,
        "end": 3695
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "foo-",
                    "cooked": "foo-"
                  },
                  "tail": false,
                  "start": 3699,
                  "end": 3706
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 3712,
                  "end": 3714
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 3706,
                  "end": 3712
                }
              ],
              "start": 3699,
              "end": 3714
            },
            "start": 3697,
            "end": 3714
          },
          "start": 3696,
          "end": 3714
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
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
                  "start": 3719,
                  "end": 3722
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "-bar",
                    "cooked": "-bar"
                  },
                  "tail": true,
                  "start": 3728,
                  "end": 3734
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 3722,
                  "end": 3728
                }
              ],
              "start": 3719,
              "end": 3734
            },
            "start": 3717,
            "end": 3734
          },
          "start": 3716,
          "end": 3734
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "baz-",
                    "cooked": "baz-"
                  },
                  "tail": false,
                  "start": 3739,
                  "end": 3746
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 3752,
                  "end": 3754
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 3746,
                  "end": 3752
                }
              ],
              "start": 3739,
              "end": 3754
            },
            "start": 3737,
            "end": 3754
          },
          "start": 3736,
          "end": 3754
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3766,
                "end": 3767
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 3772,
                "end": 3773
              },
              "start": 3766,
              "end": 3773
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3785,
                    "end": 3786
                  },
                  "directive": null,
                  "start": 3785,
                  "end": 3787
                }
              ],
              "start": 3775,
              "end": 3813
            },
            "alternate": null,
            "start": 3762,
            "end": 3813
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3822,
                "end": 3823
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 3828,
                "end": 3829
              },
              "start": 3822,
              "end": 3829
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3831,
              "end": 3848
            },
            "alternate": null,
            "start": 3818,
            "end": 3848
          }
        ],
        "start": 3756,
        "end": 3850
      },
      "expression": false,
      "start": 3683,
      "end": 3850
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3861,
        "end": 3864
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
              "start": 3865,
              "end": 3866
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3875,
              "end": 3881
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3865,
            "end": 3881
          }
        ],
        "start": 3864,
        "end": 3882
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
                    "raw": "foo-",
                    "cooked": "foo-"
                  },
                  "tail": false,
                  "start": 3886,
                  "end": 3893
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 3894,
                  "end": 3896
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3893,
                    "end": 3894
                  },
                  "typeArguments": null,
                  "start": 3893,
                  "end": 3894
                }
              ],
              "start": 3886,
              "end": 3896
            },
            "start": 3884,
            "end": 3896
          },
          "start": 3883,
          "end": 3896
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
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
                  "start": 3901,
                  "end": 3904
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "-bar",
                    "cooked": "-bar"
                  },
                  "tail": true,
                  "start": 3905,
                  "end": 3911
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3904,
                    "end": 3905
                  },
                  "typeArguments": null,
                  "start": 3904,
                  "end": 3905
                }
              ],
              "start": 3901,
              "end": 3911
            },
            "start": 3899,
            "end": 3911
          },
          "start": 3898,
          "end": 3911
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "baz-",
                    "cooked": "baz-"
                  },
                  "tail": false,
                  "start": 3916,
                  "end": 3923
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 3924,
                  "end": 3926
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3923,
                    "end": 3924
                  },
                  "typeArguments": null,
                  "start": 3923,
                  "end": 3924
                }
              ],
              "start": 3916,
              "end": 3926
            },
            "start": 3914,
            "end": 3926
          },
          "start": 3913,
          "end": 3926
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3938,
                "end": 3939
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 3944,
                "end": 3945
              },
              "start": 3938,
              "end": 3945
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3957,
                    "end": 3958
                  },
                  "directive": null,
                  "start": 3957,
                  "end": 3959
                }
              ],
              "start": 3947,
              "end": 3980
            },
            "alternate": null,
            "start": 3934,
            "end": 3980
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3989,
                "end": 3990
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 3995,
                "end": 3996
              },
              "start": 3989,
              "end": 3996
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 3998,
              "end": 4015
            },
            "alternate": null,
            "start": 3985,
            "end": 4015
          }
        ],
        "start": 3928,
        "end": 4017
      },
      "expression": false,
      "start": 3852,
      "end": 4017
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff3",
        "optional": false,
        "typeAnnotation": null,
        "start": 4028,
        "end": 4031
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSStringKeyword",
              "start": 4035,
              "end": 4041
            },
            "start": 4033,
            "end": 4041
          },
          "start": 4032,
          "end": 4041
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "foo-",
                        "cooked": "foo-"
                      },
                      "tail": false,
                      "start": 4046,
                      "end": 4053
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 4059,
                      "end": 4061
                    }
                  ],
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 4053,
                      "end": 4059
                    }
                  ],
                  "start": 4046,
                  "end": 4061
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "'bar'",
                    "start": 4064,
                    "end": 4069
                  },
                  "start": 4064,
                  "end": 4069
                }
              ],
              "start": 4046,
              "end": 4069
            },
            "start": 4044,
            "end": 4069
          },
          "start": 4043,
          "end": 4069
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 4081,
                "end": 4082
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 4087,
                "end": 4088
              },
              "start": 4081,
              "end": 4088
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4100,
                    "end": 4101
                  },
                  "directive": null,
                  "start": 4100,
                  "end": 4102
                }
              ],
              "start": 4090,
              "end": 4136
            },
            "alternate": null,
            "start": 4077,
            "end": 4136
          }
        ],
        "start": 4071,
        "end": 4138
      },
      "expression": false,
      "start": 4019,
      "end": 4138
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff4",
        "optional": false,
        "typeAnnotation": null,
        "start": 4149,
        "end": 4152
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSStringKeyword",
              "start": 4156,
              "end": 4162
            },
            "start": 4154,
            "end": 4162
          },
          "start": 4153,
          "end": 4162
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "foo-",
                    "cooked": "foo-"
                  },
                  "tail": false,
                  "start": 4167,
                  "end": 4174
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 4180,
                  "end": 4182
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 4174,
                  "end": 4180
                }
              ],
              "start": 4167,
              "end": 4182
            },
            "start": 4165,
            "end": 4182
          },
          "start": 4164,
          "end": 4182
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 4194,
                "end": 4195
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "foo-test",
                "raw": "'foo-test'",
                "start": 4200,
                "end": 4210
              },
              "start": 4194,
              "end": 4210
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4222,
                    "end": 4223
                  },
                  "directive": null,
                  "start": 4222,
                  "end": 4224
                }
              ],
              "start": 4212,
              "end": 4245
            },
            "alternate": null,
            "start": 4190,
            "end": 4245
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 4254,
                "end": 4255
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "foo-test",
                "raw": "'foo-test'",
                "start": 4260,
                "end": 4270
              },
              "start": 4254,
              "end": 4270
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4282,
                    "end": 4283
                  },
                  "directive": null,
                  "start": 4282,
                  "end": 4284
                }
              ],
              "start": 4272,
              "end": 4305
            },
            "alternate": null,
            "start": 4250,
            "end": 4305
          }
        ],
        "start": 4184,
        "end": 4307
      },
      "expression": false,
      "start": 4140,
      "end": 4307
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null,
        "start": 4336,
        "end": 4342
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4353,
                  "end": 4357
                },
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
                        "start": 4359,
                        "end": 4362
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "_REQUEST",
                          "cooked": "_REQUEST"
                        },
                        "tail": true,
                        "start": 4368,
                        "end": 4378
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 4362,
                        "end": 4368
                      }
                    ],
                    "start": 4359,
                    "end": 4378
                  },
                  "start": 4357,
                  "end": 4378
                },
                "accessibility": null,
                "static": false,
                "start": 4353,
                "end": 4378
              }
            ],
            "start": 4351,
            "end": 4380
          },
          {
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4389,
                  "end": 4393
                },
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
                        "start": 4395,
                        "end": 4398
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "_SUCCESS",
                          "cooked": "_SUCCESS"
                        },
                        "tail": true,
                        "start": 4404,
                        "end": 4414
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 4398,
                        "end": 4404
                      }
                    ],
                    "start": 4395,
                    "end": 4414
                  },
                  "start": 4393,
                  "end": 4414
                },
                "accessibility": null,
                "static": false,
                "start": 4389,
                "end": 4415
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "response",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4416,
                  "end": 4424
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 4426,
                    "end": 4432
                  },
                  "start": 4424,
                  "end": 4432
                },
                "accessibility": null,
                "static": false,
                "start": 4416,
                "end": 4432
              }
            ],
            "start": 4387,
            "end": 4434
          }
        ],
        "start": 4349,
        "end": 4434
      },
      "declare": false,
      "start": 4331,
      "end": 4435
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "reducer",
        "optional": false,
        "typeAnnotation": null,
        "start": 4446,
        "end": 4453
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Action",
                "optional": false,
                "typeAnnotation": null,
                "start": 4462,
                "end": 4468
              },
              "typeArguments": null,
              "start": 4462,
              "end": 4468
            },
            "start": 4460,
            "end": 4468
          },
          "start": 4454,
          "end": 4468
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "action",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4480,
                  "end": 4486
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4487,
                  "end": 4491
                },
                "optional": false,
                "computed": false,
                "start": 4480,
                "end": 4491
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "FOO_SUCCESS",
                "raw": "'FOO_SUCCESS'",
                "start": 4496,
                "end": 4509
              },
              "start": 4480,
              "end": 4509
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4521,
                      "end": 4527
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4528,
                      "end": 4532
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4521,
                    "end": 4532
                  },
                  "directive": null,
                  "start": 4521,
                  "end": 4533
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4542,
                      "end": 4548
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "response",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4549,
                      "end": 4557
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4542,
                    "end": 4557
                  },
                  "directive": null,
                  "start": 4542,
                  "end": 4558
                }
              ],
              "start": 4511,
              "end": 4564
            },
            "alternate": null,
            "start": 4476,
            "end": 4564
          }
        ],
        "start": 4470,
        "end": 4566
      },
      "expression": false,
      "start": 4437,
      "end": 4566
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DotString",
        "optional": false,
        "typeAnnotation": null,
        "start": 4595,
        "end": 4604
      },
      "typeParameters": null,
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
            "start": 4607,
            "end": 4610
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": ".",
              "cooked": "."
            },
            "tail": false,
            "start": 4616,
            "end": 4620
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": ".",
              "cooked": "."
            },
            "tail": false,
            "start": 4626,
            "end": 4630
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 4636,
            "end": 4638
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 4610,
            "end": 4616
          },
          {
            "type": "TSStringKeyword",
            "start": 4620,
            "end": 4626
          },
          {
            "type": "TSStringKeyword",
            "start": 4630,
            "end": 4636
          }
        ],
        "start": 4607,
        "end": 4638
      },
      "declare": false,
      "start": 4590,
      "end": 4639
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "noSpread",
        "optional": false,
        "typeAnnotation": null,
        "start": 4658,
        "end": 4666
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
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 4667,
              "end": 4668
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DotString",
                "optional": false,
                "typeAnnotation": null,
                "start": 4677,
                "end": 4686
              },
              "typeArguments": null,
              "start": 4677,
              "end": 4686
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4667,
            "end": 4686
          }
        ],
        "start": 4666,
        "end": 4687
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
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
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4694,
                  "end": 4695
                },
                "typeArguments": null,
                "start": 4694,
                "end": 4695
              },
              "start": 4694,
              "end": 4697
            },
            "start": 4692,
            "end": 4697
          },
          "start": 4688,
          "end": 4697
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 4700,
            "end": 4701
          },
          "typeArguments": null,
          "start": 4700,
          "end": 4701
        },
        "start": 4698,
        "end": 4701
      },
      "body": null,
      "expression": false,
      "start": 4641,
      "end": 4702
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "spread",
        "optional": false,
        "typeAnnotation": null,
        "start": 4720,
        "end": 4726
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
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 4727,
              "end": 4728
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DotString",
                "optional": false,
                "typeAnnotation": null,
                "start": 4737,
                "end": 4746
              },
              "typeArguments": null,
              "start": 4737,
              "end": 4746
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4727,
            "end": 4746
          }
        ],
        "start": 4726,
        "end": 4747
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 4751,
            "end": 4755
          },
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
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4757,
                  "end": 4758
                },
                "typeArguments": null,
                "start": 4757,
                "end": 4758
              },
              "start": 4757,
              "end": 4760
            },
            "start": 4755,
            "end": 4760
          },
          "value": null,
          "start": 4748,
          "end": 4760
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 4763,
            "end": 4764
          },
          "typeArguments": null,
          "start": 4763,
          "end": 4764
        },
        "start": 4761,
        "end": 4764
      },
      "body": null,
      "expression": false,
      "start": 4703,
      "end": 4765
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "noSpread",
          "optional": false,
          "typeAnnotation": null,
          "start": 4767,
          "end": 4775
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "1.",
                      "cooked": "1."
                    },
                    "tail": false,
                    "start": 4777,
                    "end": 4782
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": ".3",
                      "cooked": ".3"
                    },
                    "tail": true,
                    "start": 4785,
                    "end": 4789
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": "2",
                    "raw": "'2'",
                    "start": 4782,
                    "end": 4785
                  }
                ],
                "start": 4777,
                "end": 4789
              },
              {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "1.",
                      "cooked": "1."
                    },
                    "tail": false,
                    "start": 4791,
                    "end": 4796
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": ".4",
                      "cooked": ".4"
                    },
                    "tail": true,
                    "start": 4799,
                    "end": 4803
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": "2",
                    "raw": "'2'",
                    "start": 4796,
                    "end": 4799
                  }
                ],
                "start": 4791,
                "end": 4803
              }
            ],
            "start": 4776,
            "end": 4804
          }
        ],
        "optional": false,
        "start": 4767,
        "end": 4805
      },
      "directive": null,
      "start": 4767,
      "end": 4806
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "noSpread",
          "optional": false,
          "typeAnnotation": null,
          "start": 4807,
          "end": 4815
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "1.",
                      "cooked": "1."
                    },
                    "tail": false,
                    "start": 4817,
                    "end": 4822
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": ".3",
                      "cooked": ".3"
                    },
                    "tail": true,
                    "start": 4835,
                    "end": 4839
                  }
                ],
                "expressions": [
                  {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Literal",
                      "value": "2",
                      "raw": "'2'",
                      "start": 4822,
                      "end": 4825
                    },
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4829,
                      "end": 4835
                    },
                    "start": 4822,
                    "end": 4835
                  }
                ],
                "start": 4817,
                "end": 4839
              },
              {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "1.",
                      "cooked": "1."
                    },
                    "tail": false,
                    "start": 4841,
                    "end": 4846
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": ".4",
                      "cooked": ".4"
                    },
                    "tail": true,
                    "start": 4859,
                    "end": 4863
                  }
                ],
                "expressions": [
                  {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Literal",
                      "value": "2",
                      "raw": "'2'",
                      "start": 4846,
                      "end": 4849
                    },
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4853,
                      "end": 4859
                    },
                    "start": 4846,
                    "end": 4859
                  }
                ],
                "start": 4841,
                "end": 4863
              }
            ],
            "start": 4816,
            "end": 4864
          }
        ],
        "optional": false,
        "start": 4807,
        "end": 4865
      },
      "directive": null,
      "start": 4807,
      "end": 4866
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "spread",
          "optional": false,
          "typeAnnotation": null,
          "start": 4868,
          "end": 4874
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "1.",
                  "cooked": "1."
                },
                "tail": false,
                "start": 4875,
                "end": 4880
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": ".3",
                  "cooked": ".3"
                },
                "tail": true,
                "start": 4883,
                "end": 4887
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": "2",
                "raw": "'2'",
                "start": 4880,
                "end": 4883
              }
            ],
            "start": 4875,
            "end": 4887
          },
          {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "1.",
                  "cooked": "1."
                },
                "tail": false,
                "start": 4889,
                "end": 4894
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": ".4",
                  "cooked": ".4"
                },
                "tail": true,
                "start": 4897,
                "end": 4901
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": "2",
                "raw": "'2'",
                "start": 4894,
                "end": 4897
              }
            ],
            "start": 4889,
            "end": 4901
          }
        ],
        "optional": false,
        "start": 4868,
        "end": 4902
      },
      "directive": null,
      "start": 4868,
      "end": 4903
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "spread",
          "optional": false,
          "typeAnnotation": null,
          "start": 4904,
          "end": 4910
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "1.",
                  "cooked": "1."
                },
                "tail": false,
                "start": 4911,
                "end": 4916
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": ".3",
                  "cooked": ".3"
                },
                "tail": true,
                "start": 4929,
                "end": 4933
              }
            ],
            "expressions": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": "2",
                  "raw": "'2'",
                  "start": 4916,
                  "end": 4919
                },
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 4923,
                  "end": 4929
                },
                "start": 4916,
                "end": 4929
              }
            ],
            "start": 4911,
            "end": 4933
          },
          {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "1.",
                  "cooked": "1."
                },
                "tail": false,
                "start": 4935,
                "end": 4940
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": ".4",
                  "cooked": ".4"
                },
                "tail": true,
                "start": 4953,
                "end": 4957
              }
            ],
            "expressions": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": "2",
                  "raw": "'2'",
                  "start": 4940,
                  "end": 4943
                },
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 4947,
                  "end": 4953
                },
                "start": 4940,
                "end": 4953
              }
            ],
            "start": 4935,
            "end": 4957
          }
        ],
        "optional": false,
        "start": 4904,
        "end": 4958
      },
      "directive": null,
      "start": 4904,
      "end": 4959
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ft1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4970,
        "end": 4973
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
              "start": 4974,
              "end": 4975
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 4984,
              "end": 4990
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4974,
            "end": 4990
          }
        ],
        "start": 4973,
        "end": 4991
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
                "start": 4995,
                "end": 4996
              },
              "typeArguments": null,
              "start": 4995,
              "end": 4996
            },
            "start": 4993,
            "end": 4996
          },
          "start": 4992,
          "end": 4996
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null,
                "start": 5001,
                "end": 5010
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
                      "start": 5011,
                      "end": 5012
                    },
                    "typeArguments": null,
                    "start": 5011,
                    "end": 5012
                  }
                ],
                "start": 5010,
                "end": 5013
              },
              "start": 5001,
              "end": 5013
            },
            "start": 4999,
            "end": 5013
          },
          "start": 4998,
          "end": 5013
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null,
                "start": 5019,
                "end": 5028
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "1.",
                          "cooked": "1."
                        },
                        "tail": false,
                        "start": 5029,
                        "end": 5034
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": ".3",
                          "cooked": ".3"
                        },
                        "tail": true,
                        "start": 5035,
                        "end": 5039
                      }
                    ],
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5034,
                          "end": 5035
                        },
                        "typeArguments": null,
                        "start": 5034,
                        "end": 5035
                      }
                    ],
                    "start": 5029,
                    "end": 5039
                  }
                ],
                "start": 5028,
                "end": 5040
              },
              "start": 5019,
              "end": 5040
            },
            "start": 5017,
            "end": 5040
          },
          "start": 5015,
          "end": 5040
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null,
                "start": 5046,
                "end": 5055
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "1.",
                          "cooked": "1."
                        },
                        "tail": false,
                        "start": 5056,
                        "end": 5061
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": ".4",
                          "cooked": ".4"
                        },
                        "tail": true,
                        "start": 5062,
                        "end": 5066
                      }
                    ],
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5061,
                          "end": 5062
                        },
                        "typeArguments": null,
                        "start": 5061,
                        "end": 5062
                      }
                    ],
                    "start": 5056,
                    "end": 5066
                  }
                ],
                "start": 5055,
                "end": 5067
              },
              "start": 5046,
              "end": 5067
            },
            "start": 5044,
            "end": 5067
          },
          "start": 5042,
          "end": 5067
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "spread",
                "optional": false,
                "typeAnnotation": null,
                "start": 5075,
                "end": 5081
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "1.",
                        "cooked": "1."
                      },
                      "tail": false,
                      "start": 5082,
                      "end": 5087
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ".3",
                        "cooked": ".3"
                      },
                      "tail": true,
                      "start": 5088,
                      "end": 5092
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5087,
                      "end": 5088
                    }
                  ],
                  "start": 5082,
                  "end": 5092
                },
                {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "1.",
                        "cooked": "1."
                      },
                      "tail": false,
                      "start": 5094,
                      "end": 5099
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ".4",
                        "cooked": ".4"
                      },
                      "tail": true,
                      "start": 5100,
                      "end": 5104
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5099,
                      "end": 5100
                    }
                  ],
                  "start": 5094,
                  "end": 5104
                }
              ],
              "optional": false,
              "start": 5075,
              "end": 5105
            },
            "directive": null,
            "start": 5075,
            "end": 5106
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "spread",
                "optional": false,
                "typeAnnotation": null,
                "start": 5111,
                "end": 5117
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "1.",
                        "cooked": "1."
                      },
                      "tail": false,
                      "start": 5118,
                      "end": 5123
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ".3",
                        "cooked": ".3"
                      },
                      "tail": true,
                      "start": 5124,
                      "end": 5128
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5123,
                      "end": 5124
                    }
                  ],
                  "start": 5118,
                  "end": 5128
                },
                {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "1.",
                        "cooked": "1."
                      },
                      "tail": false,
                      "start": 5130,
                      "end": 5135
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ".4",
                        "cooked": ".4"
                      },
                      "tail": true,
                      "start": 5136,
                      "end": 5140
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5135,
                      "end": 5136
                    }
                  ],
                  "start": 5130,
                  "end": 5140
                }
              ],
              "optional": false,
              "start": 5111,
              "end": 5141
            },
            "directive": null,
            "start": 5111,
            "end": 5142
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "spread",
                "optional": false,
                "typeAnnotation": null,
                "start": 5147,
                "end": 5153
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5154,
                  "end": 5156
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5158,
                  "end": 5160
                }
              ],
              "optional": false,
              "start": 5147,
              "end": 5161
            },
            "directive": null,
            "start": 5147,
            "end": 5162
          }
        ],
        "start": 5069,
        "end": 5164
      },
      "expression": false,
      "start": 4961,
      "end": 5164
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Boom",
        "optional": false,
        "typeAnnotation": null,
        "start": 5193,
        "end": 5197
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "abc",
              "raw": "'abc'",
              "start": 5200,
              "end": 5205
            },
            "start": 5200,
            "end": 5205
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "def",
              "raw": "'def'",
              "start": 5208,
              "end": 5213
            },
            "start": 5208,
            "end": 5213
          },
          {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "a",
                  "cooked": "a"
                },
                "tail": false,
                "start": 5216,
                "end": 5220
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 5226,
                "end": 5228
              }
            ],
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 5220,
                "end": 5226
              }
            ],
            "start": 5216,
            "end": 5228
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Lowercase",
              "optional": false,
              "typeAnnotation": null,
              "start": 5231,
              "end": 5240
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 5241,
                  "end": 5247
                }
              ],
              "start": 5240,
              "end": 5248
            },
            "start": 5231,
            "end": 5248
          }
        ],
        "start": 5200,
        "end": 5248
      },
      "declare": false,
      "start": 5188,
      "end": 5249
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 5282,
        "end": 5283
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
              "start": 5284,
              "end": 5285
            },
            "constraint": {
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
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5295,
                    "end": 5297
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 5299,
                      "end": 5305
                    },
                    "start": 5297,
                    "end": 5305
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5295,
                  "end": 5305
                }
              ],
              "start": 5294,
              "end": 5306
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5284,
            "end": 5306
          }
        ],
        "start": 5283,
        "end": 5307
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSIntersectionType",
                          "types": [
                            {
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
                                  "start": 5329,
                                  "end": 5330
                                },
                                "typeArguments": null,
                                "start": 5329,
                                "end": 5330
                              },
                              "start": 5323,
                              "end": 5330
                            },
                            {
                              "type": "TSStringKeyword",
                              "start": 5333,
                              "end": 5339
                            }
                          ],
                          "start": 5323,
                          "end": 5339
                        },
                        {
                          "type": "TSTemplateLiteralType",
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "-",
                                "cooked": "-"
                              },
                              "tail": false,
                              "start": 5342,
                              "end": 5346
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true,
                              "start": 5362,
                              "end": 5364
                            }
                          ],
                          "types": [
                            {
                              "type": "TSIntersectionType",
                              "types": [
                                {
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
                                      "start": 5352,
                                      "end": 5353
                                    },
                                    "typeArguments": null,
                                    "start": 5352,
                                    "end": 5353
                                  },
                                  "start": 5346,
                                  "end": 5353
                                },
                                {
                                  "type": "TSStringKeyword",
                                  "start": 5356,
                                  "end": 5362
                                }
                              ],
                              "start": 5346,
                              "end": 5362
                            }
                          ],
                          "start": 5342,
                          "end": 5364
                        }
                      ],
                      "start": 5323,
                      "end": 5364
                    },
                    "start": 5321,
                    "end": 5364
                  },
                  "start": 5320,
                  "end": 5364
                },
                "init": null,
                "definite": false,
                "start": 5320,
                "end": 5364
              }
            ],
            "declare": false,
            "start": 5316,
            "end": 5365
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 5370,
                "end": 5371
              },
              "right": {
                "type": "Literal",
                "value": "id",
                "raw": "\"id\"",
                "start": 5374,
                "end": 5378
              },
              "start": 5370,
              "end": 5378
            },
            "directive": null,
            "start": 5370,
            "end": 5379
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 5384,
                "end": 5385
              },
              "right": {
                "type": "Literal",
                "value": "-id",
                "raw": "\"-id\"",
                "start": 5388,
                "end": 5393
              },
              "start": 5384,
              "end": 5393
            },
            "directive": null,
            "start": 5384,
            "end": 5394
          }
        ],
        "start": 5310,
        "end": 5396
      },
      "expression": false,
      "start": 5273,
      "end": 5396
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 66,
  "end": 5396
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 66,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "Foo1",
    "start": 71,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 83,
    "end": 90
  },
  {
    "type": "Template",
    "value": "`*${",
    "start": 91,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 95,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 101,
    "end": 102
  },
  {
    "type": "Template",
    "value": "}*`",
    "start": 102,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 112,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 120,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "T01",
    "start": 125,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "Foo1",
    "start": 131,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 135,
    "end": 136
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 136,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 146,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "T02",
    "start": 151,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "Foo1",
    "start": 157,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 161,
    "end": 162
  },
  {
    "type": "String",
    "value": "'*hello*'",
    "start": 162,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 174,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "T03",
    "start": 179,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "Foo1",
    "start": 185,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 189,
    "end": 190
  },
  {
    "type": "String",
    "value": "'**hello**'",
    "start": 190,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 204,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "T04",
    "start": 209,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "Foo1",
    "start": 215,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 219,
    "end": 220
  },
  {
    "type": "Template",
    "value": "`*${",
    "start": 220,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 224,
    "end": 230
  },
  {
    "type": "Template",
    "value": "}*`",
    "start": 230,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 236,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "T05",
    "start": 241,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "Foo1",
    "start": 247,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 251,
    "end": 252
  },
  {
    "type": "Template",
    "value": "`*${",
    "start": 252,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 256,
    "end": 262
  },
  {
    "type": "Template",
    "value": "}*`",
    "start": 262,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 268,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "T06",
    "start": 273,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "Foo1",
    "start": 279,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 283,
    "end": 284
  },
  {
    "type": "Template",
    "value": "`*${",
    "start": 284,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 288,
    "end": 294
  },
  {
    "type": "Template",
    "value": "}*`",
    "start": 294,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 300,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "T07",
    "start": 305,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "Foo1",
    "start": 311,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 315,
    "end": 316
  },
  {
    "type": "Template",
    "value": "`*${",
    "start": 316,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 320,
    "end": 323
  },
  {
    "type": "Template",
    "value": "}*`",
    "start": 323,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 329,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "T08",
    "start": 334,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "Foo1",
    "start": 340,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 344,
    "end": 345
  },
  {
    "type": "Template",
    "value": "`**${",
    "start": 345,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 350,
    "end": 356
  },
  {
    "type": "Template",
    "value": "}**`",
    "start": 356,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 363,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "T09",
    "start": 368,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "Foo1",
    "start": 374,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 378,
    "end": 379
  },
  {
    "type": "Template",
    "value": "`**${",
    "start": 379,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 384,
    "end": 390
  },
  {
    "type": "Template",
    "value": "}**${",
    "start": 390,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 395,
    "end": 401
  },
  {
    "type": "Template",
    "value": "}**`",
    "start": 401,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 408,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 413,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "Foo1",
    "start": 419,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 423,
    "end": 424
  },
  {
    "type": "Template",
    "value": "`**${",
    "start": 424,
    "end": 429
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 429,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 433,
    "end": 434
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 435,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 439,
    "end": 440
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 441,
    "end": 444
  },
  {
    "type": "Template",
    "value": "}**`",
    "start": 444,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 451,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "T11",
    "start": 456,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "Foo1",
    "start": 462,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 466,
    "end": 467
  },
  {
    "type": "Template",
    "value": "`**${",
    "start": 467,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 472,
    "end": 479
  },
  {
    "type": "Template",
    "value": "}**${",
    "start": 479,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 484,
    "end": 491
  },
  {
    "type": "Template",
    "value": "}**`",
    "start": 491,
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
    "value": "declare",
    "start": 499,
    "end": 506
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 507,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 516,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 523,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 531,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 539,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 542,
    "end": 543
  },
  {
    "type": "Template",
    "value": "`*${",
    "start": 544,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 548,
    "end": 549
  },
  {
    "type": "Template",
    "value": "}*`",
    "start": 549,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 556,
    "end": 557
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 559,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 568,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 571,
    "end": 572
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 573,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 581,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 592,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 603,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 614,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 629,
    "end": 630
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 635,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 639,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 644,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 648,
    "end": 649
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 649,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 657,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 673,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 677,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 682,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 686,
    "end": 687
  },
  {
    "type": "String",
    "value": "'*hello*'",
    "start": 687,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 697,
    "end": 698
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 703,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 707,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 712,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 716,
    "end": 717
  },
  {
    "type": "String",
    "value": "'**hello**'",
    "start": 717,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 729,
    "end": 730
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 735,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 739,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 744,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 748,
    "end": 749
  },
  {
    "type": "Template",
    "value": "`*${",
    "start": 749,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 753,
    "end": 754
  },
  {
    "type": "Template",
    "value": "}*`",
    "start": 754,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 758,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 761,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 767,
    "end": 768
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 773,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 777,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 782,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 786,
    "end": 787
  },
  {
    "type": "Template",
    "value": "`*${",
    "start": 787,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 791,
    "end": 792
  },
  {
    "type": "Template",
    "value": "}*`",
    "start": 792,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 796,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 799,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 805,
    "end": 806
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 811,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 815,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 820,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 824,
    "end": 825
  },
  {
    "type": "Template",
    "value": "`*${",
    "start": 825,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 829,
    "end": 830
  },
  {
    "type": "Template",
    "value": "}*`",
    "start": 830,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 834,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 837,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 843,
    "end": 844
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 849,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "x7",
    "start": 853,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 858,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 862,
    "end": 863
  },
  {
    "type": "Template",
    "value": "`*${",
    "start": 863,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 867,
    "end": 868
  },
  {
    "type": "Template",
    "value": "}*`",
    "start": 868,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 872,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 875,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 881,
    "end": 882
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 887,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "x8",
    "start": 891,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 896,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 900,
    "end": 901
  },
  {
    "type": "Template",
    "value": "`**${",
    "start": 901,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 906,
    "end": 907
  },
  {
    "type": "Template",
    "value": "}**`",
    "start": 907,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 912,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 915,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1062,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "Parts",
    "start": 1067,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1084,
    "end": 1091
  },
  {
    "type": "String",
    "value": "''",
    "start": 1092,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1108,
    "end": 1115
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1116,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1119,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "Head",
    "start": 1125,
    "end": 1129
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1129,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1132,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "Tail",
    "start": 1138,
    "end": 1142
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1142,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "Head",
    "start": 1148,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1154,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "Parts",
    "start": 1157,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "Tail",
    "start": 1163,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1176,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1184,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "T20",
    "start": 1189,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "Parts",
    "start": 1195,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Template",
    "value": "`abc`",
    "start": 1201,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1209,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "T21",
    "start": 1214,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "Parts",
    "start": 1220,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Template",
    "value": "`*${",
    "start": 1226,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1230,
    "end": 1236
  },
  {
    "type": "Template",
    "value": "}*`",
    "start": 1236,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1242,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "T22",
    "start": 1247,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "Parts",
    "start": 1253,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Template",
    "value": "`*${",
    "start": 1259,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1263,
    "end": 1269
  },
  {
    "type": "Template",
    "value": "}*`",
    "start": 1269,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1275,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "T23",
    "start": 1280,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "Parts",
    "start": 1286,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Template",
    "value": "`*${",
    "start": 1292,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1296,
    "end": 1302
  },
  {
    "type": "Template",
    "value": "}*${",
    "start": 1302,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1306,
    "end": 1312
  },
  {
    "type": "Template",
    "value": "}*${",
    "start": 1312,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 1316,
    "end": 1322
  },
  {
    "type": "Template",
    "value": "}*`",
    "start": 1322,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1329,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1338,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1349,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1356,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1359,
    "end": 1365
  },
  {
    "type": "Template",
    "value": "}.${",
    "start": 1365,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1369,
    "end": 1375
  },
  {
    "type": "Template",
    "value": "}.${",
    "start": 1375,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1379,
    "end": 1385
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1385,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "String",
    "value": "'1.1.1'",
    "start": 1397,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "String",
    "value": "'1.1.1'",
    "start": 1414,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1422,
    "end": 1424
  },
  {
    "type": "Template",
    "value": "`1.1.${",
    "start": 1425,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1432,
    "end": 1438
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1438,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "String",
    "value": "'1.1.1'",
    "start": 1450,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1458,
    "end": 1460
  },
  {
    "type": "Template",
    "value": "`1.${",
    "start": 1461,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1466,
    "end": 1472
  },
  {
    "type": "Template",
    "value": "}.1`",
    "start": 1472,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "String",
    "value": "'1.1.1'",
    "start": 1486,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1494,
    "end": 1496
  },
  {
    "type": "Template",
    "value": "`1.${",
    "start": 1497,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1502,
    "end": 1508
  },
  {
    "type": "Template",
    "value": "}.${",
    "start": 1508,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1512,
    "end": 1518
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1518,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "String",
    "value": "'1.1.1'",
    "start": 1530,
    "end": 1537
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1538,
    "end": 1540
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1541,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1544,
    "end": 1550
  },
  {
    "type": "Template",
    "value": "}.1.1`",
    "start": 1550,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "String",
    "value": "'1.1.1'",
    "start": 1566,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1574,
    "end": 1576
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1577,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1580,
    "end": 1586
  },
  {
    "type": "Template",
    "value": "}.1.${",
    "start": 1586,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1592,
    "end": 1598
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1598,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "String",
    "value": "'1.1.1'",
    "start": 1610,
    "end": 1617
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1618,
    "end": 1620
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1621,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1624,
    "end": 1630
  },
  {
    "type": "Template",
    "value": "}.${",
    "start": 1630,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1634,
    "end": 1640
  },
  {
    "type": "Template",
    "value": "}.1`",
    "start": 1640,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "String",
    "value": "'1.1.1'",
    "start": 1654,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1662,
    "end": 1664
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1665,
    "end": 1668
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1668,
    "end": 1674
  },
  {
    "type": "Template",
    "value": "}.${",
    "start": 1674,
    "end": 1678
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1678,
    "end": 1684
  },
  {
    "type": "Template",
    "value": "}.${",
    "start": 1684,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1688,
    "end": 1694
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1694,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1701,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 1710,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1715,
    "end": 1722
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1723,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1734,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1745,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1756,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1777,
    "end": 1780
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Template",
    "value": "`*${",
    "start": 1784,
    "end": 1788
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1788,
    "end": 1794
  },
  {
    "type": "Template",
    "value": "}*`",
    "start": 1794,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1807,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "String",
    "value": "'*hello*'",
    "start": 1834,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "String",
    "value": "'**hello**'",
    "start": 1853,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Template",
    "value": "`*${",
    "start": 1874,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Template",
    "value": "}*`",
    "start": 1879,
    "end": 1882
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1883,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1886,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Template",
    "value": "`*${",
    "start": 1901,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Template",
    "value": "}*`",
    "start": 1906,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1910,
    "end": 1912
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1913,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Template",
    "value": "`*${",
    "start": 1928,
    "end": 1932
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Template",
    "value": "}*`",
    "start": 1933,
    "end": 1936
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1937,
    "end": 1939
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1940,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Template",
    "value": "`*${",
    "start": 1955,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Template",
    "value": "}*`",
    "start": 1960,
    "end": 1963
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1964,
    "end": 1966
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1967,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Template",
    "value": "`**${",
    "start": 1982,
    "end": 1987
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Template",
    "value": "}**`",
    "start": 1988,
    "end": 1992
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1993,
    "end": 1995
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1996,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2006,
    "end": 2014
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 2015,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2020,
    "end": 2027
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2028,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2039,
    "end": 2045
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2050,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2061,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2082,
    "end": 2085
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Template",
    "value": "`*${",
    "start": 2089,
    "end": 2093
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2093,
    "end": 2099
  },
  {
    "type": "Template",
    "value": "}*`",
    "start": 2099,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "String",
    "value": "'123'",
    "start": 2112,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "String",
    "value": "'*123*'",
    "start": 2137,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "String",
    "value": "'**123**'",
    "start": 2154,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2181,
    "end": 2182
  },
  {
    "type": "Template",
    "value": "`*${",
    "start": 2183,
    "end": 2187
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Template",
    "value": "}*`",
    "start": 2188,
    "end": 2191
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2192,
    "end": 2194
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 2195,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Template",
    "value": "`*${",
    "start": 2220,
    "end": 2224
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Template",
    "value": "}*`",
    "start": 2225,
    "end": 2228
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2229,
    "end": 2231
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 2232,
    "end": 2237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Template",
    "value": "`*${",
    "start": 2247,
    "end": 2251
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Template",
    "value": "}*`",
    "start": 2252,
    "end": 2255
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2256,
    "end": 2258
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 2259,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Template",
    "value": "`*${",
    "start": 2284,
    "end": 2288
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Template",
    "value": "}*`",
    "start": 2289,
    "end": 2292
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2293,
    "end": 2295
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 2296,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2328,
    "end": 2332
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2342,
    "end": 2349
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2350,
    "end": 2353
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2353,
    "end": 2358
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Template",
    "value": "}.${",
    "start": 2360,
    "end": 2364
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2364,
    "end": 2369
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2371,
    "end": 2373
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2374,
    "end": 2375
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2384,
    "end": 2389
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2390,
    "end": 2394
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Template",
    "value": "`test.1024`",
    "start": 2401,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2435,
    "end": 2439
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2444,
    "end": 2445
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Template",
    "value": "`test.${",
    "start": 2446,
    "end": 2454
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2454,
    "end": 2460
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2460,
    "end": 2462
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2491,
    "end": 2495
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2505,
    "end": 2512
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2513,
    "end": 2516
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2516,
    "end": 2521
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Template",
    "value": "}.${",
    "start": 2523,
    "end": 2527
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2527,
    "end": 2533
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2533,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2538,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2540,
    "end": 2541
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2542,
    "end": 2547
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2548,
    "end": 2552
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2553,
    "end": 2554
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2558,
    "end": 2559
  },
  {
    "type": "Template",
    "value": "`test.1024`",
    "start": 2559,
    "end": 2570
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2571,
    "end": 2572
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2584,
    "end": 2588
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2589,
    "end": 2590
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2591,
    "end": 2592
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 2593,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2594,
    "end": 2595
  },
  {
    "type": "Template",
    "value": "`test.${",
    "start": 2595,
    "end": 2603
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2603,
    "end": 2609
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2609,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2612,
    "end": 2613
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2626,
    "end": 2630
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2632,
    "end": 2633
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2634,
    "end": 2635
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2636,
    "end": 2637
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2638,
    "end": 2639
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2640,
    "end": 2647
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2648,
    "end": 2651
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2651,
    "end": 2656
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Template",
    "value": "}.${",
    "start": 2658,
    "end": 2662
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2662,
    "end": 2667
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2668,
    "end": 2669
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2669,
    "end": 2671
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2672,
    "end": 2673
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2674,
    "end": 2675
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2676,
    "end": 2677
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2678,
    "end": 2679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2680,
    "end": 2681
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2682,
    "end": 2687
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2688,
    "end": 2692
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2695,
    "end": 2696
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 2697,
    "end": 2698
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2698,
    "end": 2699
  },
  {
    "type": "Template",
    "value": "`test.hoge`",
    "start": 2699,
    "end": 2710
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2710,
    "end": 2711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2733,
    "end": 2737
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2738,
    "end": 2739
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2740,
    "end": 2741
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 2742,
    "end": 2743
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Template",
    "value": "`test.${",
    "start": 2744,
    "end": 2752
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2752,
    "end": 2758
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2758,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2761,
    "end": 2762
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2811,
    "end": 2815
  },
  {
    "type": "Identifier",
    "value": "J",
    "start": 2816,
    "end": 2817
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2817,
    "end": 2818
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2818,
    "end": 2819
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2819,
    "end": 2820
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2821,
    "end": 2822
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2823,
    "end": 2824
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2825,
    "end": 2832
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2833,
    "end": 2836
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2836,
    "end": 2841
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Template",
    "value": "}.${",
    "start": 2843,
    "end": 2847
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2847,
    "end": 2853
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2853,
    "end": 2855
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2856,
    "end": 2857
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2860,
    "end": 2861
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2862,
    "end": 2867
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2868,
    "end": 2872
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2875,
    "end": 2876
  },
  {
    "type": "Identifier",
    "value": "J",
    "start": 2877,
    "end": 2878
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2878,
    "end": 2879
  },
  {
    "type": "Template",
    "value": "`test.hoge`",
    "start": 2879,
    "end": 2890
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2890,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2891,
    "end": 2892
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2904,
    "end": 2908
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 2909,
    "end": 2910
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2911,
    "end": 2912
  },
  {
    "type": "Identifier",
    "value": "J",
    "start": 2913,
    "end": 2914
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2914,
    "end": 2915
  },
  {
    "type": "Template",
    "value": "`test.${",
    "start": 2915,
    "end": 2923
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2923,
    "end": 2929
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2929,
    "end": 2931
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2932,
    "end": 2933
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2969,
    "end": 2973
  },
  {
    "type": "Identifier",
    "value": "Templated",
    "start": 2974,
    "end": 2983
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2984,
    "end": 2985
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2986,
    "end": 2989
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2989,
    "end": 2995
  },
  {
    "type": "Template",
    "value": "} ${",
    "start": 2995,
    "end": 2999
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2999,
    "end": 3005
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3005,
    "end": 3007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3007,
    "end": 3008
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3010,
    "end": 3015
  },
  {
    "type": "Identifier",
    "value": "value1",
    "start": 3016,
    "end": 3022
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3024,
    "end": 3030
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3031,
    "end": 3032
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 3033,
    "end": 3038
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3038,
    "end": 3039
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3040,
    "end": 3045
  },
  {
    "type": "Identifier",
    "value": "templated1",
    "start": 3046,
    "end": 3056
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "Identifier",
    "value": "Templated",
    "start": 3058,
    "end": 3067
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3068,
    "end": 3069
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 3070,
    "end": 3073
  },
  {
    "type": "Identifier",
    "value": "value1",
    "start": 3073,
    "end": 3079
  },
  {
    "type": "Template",
    "value": "} abc`",
    "start": 3079,
    "end": 3085
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3086,
    "end": 3088
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 3089,
    "end": 3094
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3094,
    "end": 3095
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3174,
    "end": 3179
  },
  {
    "type": "Identifier",
    "value": "value2",
    "start": 3180,
    "end": 3186
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3187,
    "end": 3188
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 3189,
    "end": 3194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3194,
    "end": 3195
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3196,
    "end": 3201
  },
  {
    "type": "Identifier",
    "value": "templated2",
    "start": 3202,
    "end": 3212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3212,
    "end": 3213
  },
  {
    "type": "Identifier",
    "value": "Templated",
    "start": 3214,
    "end": 3223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3224,
    "end": 3225
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 3226,
    "end": 3229
  },
  {
    "type": "Identifier",
    "value": "value2",
    "start": 3229,
    "end": 3235
  },
  {
    "type": "Template",
    "value": "} abc`",
    "start": 3235,
    "end": 3241
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3242,
    "end": 3244
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 3245,
    "end": 3250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3250,
    "end": 3251
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3275,
    "end": 3279
  },
  {
    "type": "Identifier",
    "value": "Prefixes",
    "start": 3280,
    "end": 3288
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3289,
    "end": 3290
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 3291,
    "end": 3296
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3297,
    "end": 3298
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 3299,
    "end": 3304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3304,
    "end": 3305
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3307,
    "end": 3311
  },
  {
    "type": "Identifier",
    "value": "AllPrefixData",
    "start": 3312,
    "end": 3325
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3326,
    "end": 3327
  },
  {
    "type": "String",
    "value": "\"foo:baz\"",
    "start": 3328,
    "end": 3337
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3338,
    "end": 3339
  },
  {
    "type": "String",
    "value": "\"bar:baz\"",
    "start": 3340,
    "end": 3349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3349,
    "end": 3350
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3352,
    "end": 3356
  },
  {
    "type": "Identifier",
    "value": "PrefixData",
    "start": 3357,
    "end": 3367
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3367,
    "end": 3368
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3368,
    "end": 3369
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3370,
    "end": 3377
  },
  {
    "type": "Identifier",
    "value": "Prefixes",
    "start": 3378,
    "end": 3386
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3386,
    "end": 3387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3388,
    "end": 3389
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 3390,
    "end": 3393
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3393,
    "end": 3394
  },
  {
    "type": "Template",
    "value": "}:baz`",
    "start": 3394,
    "end": 3400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3400,
    "end": 3401
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3403,
    "end": 3412
  },
  {
    "type": "Identifier",
    "value": "ITest",
    "start": 3413,
    "end": 3418
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3418,
    "end": 3419
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3419,
    "end": 3420
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3421,
    "end": 3428
  },
  {
    "type": "Identifier",
    "value": "Prefixes",
    "start": 3429,
    "end": 3437
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3437,
    "end": 3438
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 3439,
    "end": 3440
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3441,
    "end": 3448
  },
  {
    "type": "Identifier",
    "value": "AllPrefixData",
    "start": 3449,
    "end": 3462
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3463,
    "end": 3464
  },
  {
    "type": "Identifier",
    "value": "PrefixData",
    "start": 3465,
    "end": 3475
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3475,
    "end": 3476
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3476,
    "end": 3477
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3477,
    "end": 3478
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3478,
    "end": 3479
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3480,
    "end": 3481
  },
  {
    "type": "Identifier",
    "value": "blah",
    "start": 3486,
    "end": 3490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3490,
    "end": 3491
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3492,
    "end": 3498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3498,
    "end": 3499
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3500,
    "end": 3501
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3525,
    "end": 3529
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 3530,
    "end": 3536
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3537,
    "end": 3538
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3539,
    "end": 3540
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3541,
    "end": 3542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3542,
    "end": 3543
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3544,
    "end": 3545
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3546,
    "end": 3547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3547,
    "end": 3548
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3549,
    "end": 3550
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3551,
    "end": 3552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3552,
    "end": 3553
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3554,
    "end": 3560
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3561,
    "end": 3562
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3563,
    "end": 3564
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3565,
    "end": 3566
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3566,
    "end": 3567
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3569,
    "end": 3576
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3577,
    "end": 3585
  },
  {
    "type": "Identifier",
    "value": "chain",
    "start": 3586,
    "end": 3591
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3591,
    "end": 3592
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3592,
    "end": 3593
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3594,
    "end": 3601
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3602,
    "end": 3607
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 3608,
    "end": 3614
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3614,
    "end": 3615
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3615,
    "end": 3616
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 3616,
    "end": 3621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3621,
    "end": 3622
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3623,
    "end": 3624
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3625,
    "end": 3626
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 3627,
    "end": 3630
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3630,
    "end": 3631
  },
  {
    "type": "Template",
    "value": "}.${",
    "start": 3631,
    "end": 3635
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3635,
    "end": 3636
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3636,
    "end": 3638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3638,
    "end": 3639
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3639,
    "end": 3640
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3641,
    "end": 3645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3645,
    "end": 3646
  },
  {
    "type": "Identifier",
    "value": "chain",
    "start": 3648,
    "end": 3653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3653,
    "end": 3654
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 3654,
    "end": 3657
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3657,
    "end": 3658
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3658,
    "end": 3659
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3683,
    "end": 3691
  },
  {
    "type": "Identifier",
    "value": "ff1",
    "start": 3692,
    "end": 3695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3695,
    "end": 3696
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3696,
    "end": 3697
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3697,
    "end": 3698
  },
  {
    "type": "Template",
    "value": "`foo-${",
    "start": 3699,
    "end": 3706
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3706,
    "end": 3712
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3712,
    "end": 3714
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3714,
    "end": 3715
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3716,
    "end": 3717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3717,
    "end": 3718
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 3719,
    "end": 3722
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3722,
    "end": 3728
  },
  {
    "type": "Template",
    "value": "}-bar`",
    "start": 3728,
    "end": 3734
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3734,
    "end": 3735
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3736,
    "end": 3737
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3737,
    "end": 3738
  },
  {
    "type": "Template",
    "value": "`baz-${",
    "start": 3739,
    "end": 3746
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3746,
    "end": 3752
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3752,
    "end": 3754
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3754,
    "end": 3755
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3756,
    "end": 3757
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3762,
    "end": 3764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3765,
    "end": 3766
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3766,
    "end": 3767
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3768,
    "end": 3771
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3772,
    "end": 3773
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3773,
    "end": 3774
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3775,
    "end": 3776
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3785,
    "end": 3786
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3786,
    "end": 3787
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3812,
    "end": 3813
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3818,
    "end": 3820
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3821,
    "end": 3822
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3822,
    "end": 3823
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3824,
    "end": 3827
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3828,
    "end": 3829
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3829,
    "end": 3830
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3831,
    "end": 3832
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3847,
    "end": 3848
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3849,
    "end": 3850
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3852,
    "end": 3860
  },
  {
    "type": "Identifier",
    "value": "ff2",
    "start": 3861,
    "end": 3864
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3864,
    "end": 3865
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3865,
    "end": 3866
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3867,
    "end": 3874
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3875,
    "end": 3881
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3881,
    "end": 3882
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3882,
    "end": 3883
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3883,
    "end": 3884
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3884,
    "end": 3885
  },
  {
    "type": "Template",
    "value": "`foo-${",
    "start": 3886,
    "end": 3893
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3893,
    "end": 3894
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3894,
    "end": 3896
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3896,
    "end": 3897
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3898,
    "end": 3899
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3899,
    "end": 3900
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 3901,
    "end": 3904
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3904,
    "end": 3905
  },
  {
    "type": "Template",
    "value": "}-bar`",
    "start": 3905,
    "end": 3911
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3911,
    "end": 3912
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3913,
    "end": 3914
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3914,
    "end": 3915
  },
  {
    "type": "Template",
    "value": "`baz-${",
    "start": 3916,
    "end": 3923
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3923,
    "end": 3924
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3924,
    "end": 3926
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3926,
    "end": 3927
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3928,
    "end": 3929
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3934,
    "end": 3936
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3937,
    "end": 3938
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3938,
    "end": 3939
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3940,
    "end": 3943
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3944,
    "end": 3945
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3945,
    "end": 3946
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3947,
    "end": 3948
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3957,
    "end": 3958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3958,
    "end": 3959
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3979,
    "end": 3980
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3985,
    "end": 3987
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3988,
    "end": 3989
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3989,
    "end": 3990
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3991,
    "end": 3994
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3995,
    "end": 3996
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3996,
    "end": 3997
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3998,
    "end": 3999
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4014,
    "end": 4015
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4016,
    "end": 4017
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4019,
    "end": 4027
  },
  {
    "type": "Identifier",
    "value": "ff3",
    "start": 4028,
    "end": 4031
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4031,
    "end": 4032
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4032,
    "end": 4033
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4033,
    "end": 4034
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4035,
    "end": 4041
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4041,
    "end": 4042
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4043,
    "end": 4044
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4044,
    "end": 4045
  },
  {
    "type": "Template",
    "value": "`foo-${",
    "start": 4046,
    "end": 4053
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4053,
    "end": 4059
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 4059,
    "end": 4061
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4062,
    "end": 4063
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 4064,
    "end": 4069
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4069,
    "end": 4070
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4071,
    "end": 4072
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4077,
    "end": 4079
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4080,
    "end": 4081
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4081,
    "end": 4082
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4083,
    "end": 4086
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4087,
    "end": 4088
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4088,
    "end": 4089
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4090,
    "end": 4091
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4100,
    "end": 4101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4101,
    "end": 4102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4135,
    "end": 4136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4137,
    "end": 4138
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4140,
    "end": 4148
  },
  {
    "type": "Identifier",
    "value": "ff4",
    "start": 4149,
    "end": 4152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4152,
    "end": 4153
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4153,
    "end": 4154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4154,
    "end": 4155
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4156,
    "end": 4162
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4162,
    "end": 4163
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4164,
    "end": 4165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4165,
    "end": 4166
  },
  {
    "type": "Template",
    "value": "`foo-${",
    "start": 4167,
    "end": 4174
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4174,
    "end": 4180
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 4180,
    "end": 4182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4182,
    "end": 4183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4184,
    "end": 4185
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4190,
    "end": 4192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4193,
    "end": 4194
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4194,
    "end": 4195
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4196,
    "end": 4199
  },
  {
    "type": "String",
    "value": "'foo-test'",
    "start": 4200,
    "end": 4210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4210,
    "end": 4211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4212,
    "end": 4213
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4222,
    "end": 4223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4223,
    "end": 4224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4244,
    "end": 4245
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4250,
    "end": 4252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4253,
    "end": 4254
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4254,
    "end": 4255
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4256,
    "end": 4259
  },
  {
    "type": "String",
    "value": "'foo-test'",
    "start": 4260,
    "end": 4270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4270,
    "end": 4271
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4272,
    "end": 4273
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4282,
    "end": 4283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4283,
    "end": 4284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4304,
    "end": 4305
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4306,
    "end": 4307
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4331,
    "end": 4335
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 4336,
    "end": 4342
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4343,
    "end": 4344
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4349,
    "end": 4350
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4351,
    "end": 4352
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4353,
    "end": 4357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4357,
    "end": 4358
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 4359,
    "end": 4362
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4362,
    "end": 4368
  },
  {
    "type": "Template",
    "value": "}_REQUEST`",
    "start": 4368,
    "end": 4378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4379,
    "end": 4380
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4385,
    "end": 4386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4387,
    "end": 4388
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4389,
    "end": 4393
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4393,
    "end": 4394
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 4395,
    "end": 4398
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4398,
    "end": 4404
  },
  {
    "type": "Template",
    "value": "}_SUCCESS`",
    "start": 4404,
    "end": 4414
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4414,
    "end": 4415
  },
  {
    "type": "Identifier",
    "value": "response",
    "start": 4416,
    "end": 4424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4424,
    "end": 4425
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4426,
    "end": 4432
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4433,
    "end": 4434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4434,
    "end": 4435
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4437,
    "end": 4445
  },
  {
    "type": "Identifier",
    "value": "reducer",
    "start": 4446,
    "end": 4453
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4453,
    "end": 4454
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 4454,
    "end": 4460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4460,
    "end": 4461
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 4462,
    "end": 4468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4468,
    "end": 4469
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4470,
    "end": 4471
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4476,
    "end": 4478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4479,
    "end": 4480
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 4480,
    "end": 4486
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4486,
    "end": 4487
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4487,
    "end": 4491
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4492,
    "end": 4495
  },
  {
    "type": "String",
    "value": "'FOO_SUCCESS'",
    "start": 4496,
    "end": 4509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4509,
    "end": 4510
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4511,
    "end": 4512
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 4521,
    "end": 4527
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4527,
    "end": 4528
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4528,
    "end": 4532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4532,
    "end": 4533
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 4542,
    "end": 4548
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4548,
    "end": 4549
  },
  {
    "type": "Identifier",
    "value": "response",
    "start": 4549,
    "end": 4557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4557,
    "end": 4558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4563,
    "end": 4564
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4565,
    "end": 4566
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4590,
    "end": 4594
  },
  {
    "type": "Identifier",
    "value": "DotString",
    "start": 4595,
    "end": 4604
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4605,
    "end": 4606
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 4607,
    "end": 4610
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4610,
    "end": 4616
  },
  {
    "type": "Template",
    "value": "}.${",
    "start": 4616,
    "end": 4620
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4620,
    "end": 4626
  },
  {
    "type": "Template",
    "value": "}.${",
    "start": 4626,
    "end": 4630
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4630,
    "end": 4636
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 4636,
    "end": 4638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4638,
    "end": 4639
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4641,
    "end": 4648
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4649,
    "end": 4657
  },
  {
    "type": "Identifier",
    "value": "noSpread",
    "start": 4658,
    "end": 4666
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4666,
    "end": 4667
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4667,
    "end": 4668
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4669,
    "end": 4676
  },
  {
    "type": "Identifier",
    "value": "DotString",
    "start": 4677,
    "end": 4686
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4686,
    "end": 4687
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4687,
    "end": 4688
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4688,
    "end": 4692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4692,
    "end": 4693
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4694,
    "end": 4695
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4695,
    "end": 4696
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4696,
    "end": 4697
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4697,
    "end": 4698
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4698,
    "end": 4699
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4700,
    "end": 4701
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4701,
    "end": 4702
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4703,
    "end": 4710
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4711,
    "end": 4719
  },
  {
    "type": "Identifier",
    "value": "spread",
    "start": 4720,
    "end": 4726
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4726,
    "end": 4727
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4727,
    "end": 4728
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4729,
    "end": 4736
  },
  {
    "type": "Identifier",
    "value": "DotString",
    "start": 4737,
    "end": 4746
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4746,
    "end": 4747
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4747,
    "end": 4748
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4748,
    "end": 4751
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4751,
    "end": 4755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4755,
    "end": 4756
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4757,
    "end": 4758
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4758,
    "end": 4759
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4759,
    "end": 4760
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4760,
    "end": 4761
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4761,
    "end": 4762
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4763,
    "end": 4764
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4764,
    "end": 4765
  },
  {
    "type": "Identifier",
    "value": "noSpread",
    "start": 4767,
    "end": 4775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4775,
    "end": 4776
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4776,
    "end": 4777
  },
  {
    "type": "Template",
    "value": "`1.${",
    "start": 4777,
    "end": 4782
  },
  {
    "type": "String",
    "value": "'2'",
    "start": 4782,
    "end": 4785
  },
  {
    "type": "Template",
    "value": "}.3`",
    "start": 4785,
    "end": 4789
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4789,
    "end": 4790
  },
  {
    "type": "Template",
    "value": "`1.${",
    "start": 4791,
    "end": 4796
  },
  {
    "type": "String",
    "value": "'2'",
    "start": 4796,
    "end": 4799
  },
  {
    "type": "Template",
    "value": "}.4`",
    "start": 4799,
    "end": 4803
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4803,
    "end": 4804
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4804,
    "end": 4805
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4805,
    "end": 4806
  },
  {
    "type": "Identifier",
    "value": "noSpread",
    "start": 4807,
    "end": 4815
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4815,
    "end": 4816
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4816,
    "end": 4817
  },
  {
    "type": "Template",
    "value": "`1.${",
    "start": 4817,
    "end": 4822
  },
  {
    "type": "String",
    "value": "'2'",
    "start": 4822,
    "end": 4825
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4826,
    "end": 4828
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4829,
    "end": 4835
  },
  {
    "type": "Template",
    "value": "}.3`",
    "start": 4835,
    "end": 4839
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4839,
    "end": 4840
  },
  {
    "type": "Template",
    "value": "`1.${",
    "start": 4841,
    "end": 4846
  },
  {
    "type": "String",
    "value": "'2'",
    "start": 4846,
    "end": 4849
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4850,
    "end": 4852
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4853,
    "end": 4859
  },
  {
    "type": "Template",
    "value": "}.4`",
    "start": 4859,
    "end": 4863
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4863,
    "end": 4864
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4864,
    "end": 4865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4865,
    "end": 4866
  },
  {
    "type": "Identifier",
    "value": "spread",
    "start": 4868,
    "end": 4874
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4874,
    "end": 4875
  },
  {
    "type": "Template",
    "value": "`1.${",
    "start": 4875,
    "end": 4880
  },
  {
    "type": "String",
    "value": "'2'",
    "start": 4880,
    "end": 4883
  },
  {
    "type": "Template",
    "value": "}.3`",
    "start": 4883,
    "end": 4887
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4887,
    "end": 4888
  },
  {
    "type": "Template",
    "value": "`1.${",
    "start": 4889,
    "end": 4894
  },
  {
    "type": "String",
    "value": "'2'",
    "start": 4894,
    "end": 4897
  },
  {
    "type": "Template",
    "value": "}.4`",
    "start": 4897,
    "end": 4901
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4901,
    "end": 4902
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4902,
    "end": 4903
  },
  {
    "type": "Identifier",
    "value": "spread",
    "start": 4904,
    "end": 4910
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4910,
    "end": 4911
  },
  {
    "type": "Template",
    "value": "`1.${",
    "start": 4911,
    "end": 4916
  },
  {
    "type": "String",
    "value": "'2'",
    "start": 4916,
    "end": 4919
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4920,
    "end": 4922
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4923,
    "end": 4929
  },
  {
    "type": "Template",
    "value": "}.3`",
    "start": 4929,
    "end": 4933
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4933,
    "end": 4934
  },
  {
    "type": "Template",
    "value": "`1.${",
    "start": 4935,
    "end": 4940
  },
  {
    "type": "String",
    "value": "'2'",
    "start": 4940,
    "end": 4943
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4944,
    "end": 4946
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4947,
    "end": 4953
  },
  {
    "type": "Template",
    "value": "}.4`",
    "start": 4953,
    "end": 4957
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4957,
    "end": 4958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4958,
    "end": 4959
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4961,
    "end": 4969
  },
  {
    "type": "Identifier",
    "value": "ft1",
    "start": 4970,
    "end": 4973
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4973,
    "end": 4974
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4974,
    "end": 4975
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4976,
    "end": 4983
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4984,
    "end": 4990
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4990,
    "end": 4991
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4991,
    "end": 4992
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4992,
    "end": 4993
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4993,
    "end": 4994
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4995,
    "end": 4996
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4996,
    "end": 4997
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 4998,
    "end": 4999
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4999,
    "end": 5000
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 5001,
    "end": 5010
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5010,
    "end": 5011
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5011,
    "end": 5012
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5012,
    "end": 5013
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5013,
    "end": 5014
  },
  {
    "type": "Identifier",
    "value": "u1",
    "start": 5015,
    "end": 5017
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5017,
    "end": 5018
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 5019,
    "end": 5028
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5028,
    "end": 5029
  },
  {
    "type": "Template",
    "value": "`1.${",
    "start": 5029,
    "end": 5034
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5034,
    "end": 5035
  },
  {
    "type": "Template",
    "value": "}.3`",
    "start": 5035,
    "end": 5039
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5039,
    "end": 5040
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5040,
    "end": 5041
  },
  {
    "type": "Identifier",
    "value": "u2",
    "start": 5042,
    "end": 5044
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5044,
    "end": 5045
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 5046,
    "end": 5055
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5055,
    "end": 5056
  },
  {
    "type": "Template",
    "value": "`1.${",
    "start": 5056,
    "end": 5061
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5061,
    "end": 5062
  },
  {
    "type": "Template",
    "value": "}.4`",
    "start": 5062,
    "end": 5066
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5066,
    "end": 5067
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5067,
    "end": 5068
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5069,
    "end": 5070
  },
  {
    "type": "Identifier",
    "value": "spread",
    "start": 5075,
    "end": 5081
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5081,
    "end": 5082
  },
  {
    "type": "Template",
    "value": "`1.${",
    "start": 5082,
    "end": 5087
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 5087,
    "end": 5088
  },
  {
    "type": "Template",
    "value": "}.3`",
    "start": 5088,
    "end": 5092
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5092,
    "end": 5093
  },
  {
    "type": "Template",
    "value": "`1.${",
    "start": 5094,
    "end": 5099
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 5099,
    "end": 5100
  },
  {
    "type": "Template",
    "value": "}.4`",
    "start": 5100,
    "end": 5104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5104,
    "end": 5105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5105,
    "end": 5106
  },
  {
    "type": "Identifier",
    "value": "spread",
    "start": 5111,
    "end": 5117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5117,
    "end": 5118
  },
  {
    "type": "Template",
    "value": "`1.${",
    "start": 5118,
    "end": 5123
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 5123,
    "end": 5124
  },
  {
    "type": "Template",
    "value": "}.3`",
    "start": 5124,
    "end": 5128
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5128,
    "end": 5129
  },
  {
    "type": "Template",
    "value": "`1.${",
    "start": 5130,
    "end": 5135
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 5135,
    "end": 5136
  },
  {
    "type": "Template",
    "value": "}.4`",
    "start": 5136,
    "end": 5140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5140,
    "end": 5141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5141,
    "end": 5142
  },
  {
    "type": "Identifier",
    "value": "spread",
    "start": 5147,
    "end": 5153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5153,
    "end": 5154
  },
  {
    "type": "Identifier",
    "value": "u1",
    "start": 5154,
    "end": 5156
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5156,
    "end": 5157
  },
  {
    "type": "Identifier",
    "value": "u2",
    "start": 5158,
    "end": 5160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5160,
    "end": 5161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5161,
    "end": 5162
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5163,
    "end": 5164
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5188,
    "end": 5192
  },
  {
    "type": "Identifier",
    "value": "Boom",
    "start": 5193,
    "end": 5197
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5198,
    "end": 5199
  },
  {
    "type": "String",
    "value": "'abc'",
    "start": 5200,
    "end": 5205
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5206,
    "end": 5207
  },
  {
    "type": "String",
    "value": "'def'",
    "start": 5208,
    "end": 5213
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5214,
    "end": 5215
  },
  {
    "type": "Template",
    "value": "`a${",
    "start": 5216,
    "end": 5220
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5220,
    "end": 5226
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 5226,
    "end": 5228
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5229,
    "end": 5230
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 5231,
    "end": 5240
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5240,
    "end": 5241
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5241,
    "end": 5247
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5247,
    "end": 5248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5248,
    "end": 5249
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5273,
    "end": 5281
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5282,
    "end": 5283
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5283,
    "end": 5284
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5284,
    "end": 5285
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5286,
    "end": 5293
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5294,
    "end": 5295
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 5295,
    "end": 5297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5297,
    "end": 5298
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5299,
    "end": 5305
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5305,
    "end": 5306
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5306,
    "end": 5307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5307,
    "end": 5308
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5308,
    "end": 5309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5310,
    "end": 5311
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5316,
    "end": 5319
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5320,
    "end": 5321
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5321,
    "end": 5322
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 5323,
    "end": 5328
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5329,
    "end": 5330
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 5331,
    "end": 5332
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5333,
    "end": 5339
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5340,
    "end": 5341
  },
  {
    "type": "Template",
    "value": "`-${",
    "start": 5342,
    "end": 5346
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 5346,
    "end": 5351
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5352,
    "end": 5353
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 5354,
    "end": 5355
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5356,
    "end": 5362
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 5362,
    "end": 5364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5364,
    "end": 5365
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5370,
    "end": 5371
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5372,
    "end": 5373
  },
  {
    "type": "String",
    "value": "\"id\"",
    "start": 5374,
    "end": 5378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5378,
    "end": 5379
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5384,
    "end": 5385
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5386,
    "end": 5387
  },
  {
    "type": "String",
    "value": "\"-id\"",
    "start": 5388,
    "end": 5393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5393,
    "end": 5394
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5395,
    "end": 5396
  }
]
```
