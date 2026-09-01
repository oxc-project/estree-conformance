__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 34
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
              "start": 35,
              "end": 36
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 35,
            "end": 36
          }
        ],
        "start": 34,
        "end": 37
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 42
              },
              "typeArguments": null,
              "start": 41,
              "end": 42
            },
            "start": 39,
            "end": 42
          },
          "start": 38,
          "end": 42
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 46
          },
          "typeArguments": null,
          "start": 45,
          "end": 46
        },
        "start": 43,
        "end": 46
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 57
            },
            "start": 49,
            "end": 57
          }
        ],
        "start": 47,
        "end": 59
      },
      "expression": false,
      "start": 22,
      "end": 59
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 70
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
              "start": 71,
              "end": 72
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 71,
            "end": 72
          }
        ],
        "start": 70,
        "end": 73
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 87
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
                    "name": "x",
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
                          "start": 98,
                          "end": 99
                        },
                        "typeArguments": null,
                        "start": 98,
                        "end": 99
                      },
                      "start": 96,
                      "end": 99
                    },
                    "start": 95,
                    "end": 99
                  },
                  "readonly": false,
                  "static": false,
                  "start": 88,
                  "end": 99
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 101,
                "end": 104
              },
              "expression": false,
              "start": 87,
              "end": 104
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 76,
            "end": 104
          }
        ],
        "start": 74,
        "end": 106
      },
      "abstract": false,
      "declare": false,
      "start": 61,
      "end": 106
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
            "name": "WhatFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 165
          },
          "init": {
            "type": "TSInstantiationExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 171
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSJSDocUnknownType",
                  "id": 0,
                  "original": null,
                  "emitNode": null,
                  "start": 172,
                  "end": 173
                }
              ],
              "start": 171,
              "end": 174
            },
            "start": 168,
            "end": 174
          },
          "definite": false,
          "start": 158,
          "end": 174
        }
      ],
      "declare": false,
      "start": 152,
      "end": 175
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
            "name": "HuhFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 188
          },
          "init": {
            "type": "TSInstantiationExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 194
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSJSDocNullableType",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 195,
                      "end": 201
                    },
                    "start": 194,
                    "end": 201
                  },
                  "postfix": true,
                  "id": 0,
                  "original": null,
                  "emitNode": null,
                  "start": 195,
                  "end": 202
                }
              ],
              "start": 194,
              "end": 203
            },
            "start": 191,
            "end": 203
          },
          "definite": false,
          "start": 182,
          "end": 203
        }
      ],
      "declare": false,
      "start": 176,
      "end": 204
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
            "name": "NopeFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 218
          },
          "init": {
            "type": "TSInstantiationExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 224
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSJSDocNullableType",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 226,
                      "end": 232
                    },
                    "start": 225,
                    "end": 232
                  },
                  "postfix": false,
                  "id": 0,
                  "original": null,
                  "emitNode": null,
                  "start": 225,
                  "end": 232
                }
              ],
              "start": 224,
              "end": 233
            },
            "start": 221,
            "end": 233
          },
          "definite": false,
          "start": 211,
          "end": 233
        }
      ],
      "declare": false,
      "start": 205,
      "end": 234
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
            "name": "ComeOnFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 250
          },
          "init": {
            "type": "TSInstantiationExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 256
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSJSDocNullableType",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSJSDocNullableType",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 258,
                          "end": 264
                        },
                        "start": 257,
                        "end": 264
                      },
                      "postfix": true,
                      "id": 0,
                      "original": null,
                      "emitNode": null,
                      "start": 258,
                      "end": 265
                    },
                    "start": 257,
                    "end": 265
                  },
                  "postfix": false,
                  "id": 0,
                  "original": null,
                  "emitNode": null,
                  "start": 257,
                  "end": 265
                }
              ],
              "start": 256,
              "end": 266
            },
            "start": 253,
            "end": 266
          },
          "definite": false,
          "start": 241,
          "end": 266
        }
      ],
      "declare": false,
      "start": 235,
      "end": 267
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TWhatFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 274,
        "end": 282
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 292,
          "end": 295
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSJSDocUnknownType",
              "id": 0,
              "original": null,
              "emitNode": null,
              "start": 296,
              "end": 297
            }
          ],
          "start": 295,
          "end": 298
        },
        "start": 285,
        "end": 298
      },
      "declare": false,
      "start": 269,
      "end": 299
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "THuhFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 305,
        "end": 312
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 322,
          "end": 325
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSJSDocNullableType",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 326,
                  "end": 332
                },
                "start": 325,
                "end": 332
              },
              "postfix": true,
              "id": 0,
              "original": null,
              "emitNode": null,
              "start": 326,
              "end": 333
            }
          ],
          "start": 325,
          "end": 334
        },
        "start": 315,
        "end": 334
      },
      "declare": false,
      "start": 300,
      "end": 335
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TNopeFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 341,
        "end": 349
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 359,
          "end": 362
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSJSDocNullableType",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 364,
                  "end": 370
                },
                "start": 363,
                "end": 370
              },
              "postfix": false,
              "id": 0,
              "original": null,
              "emitNode": null,
              "start": 363,
              "end": 370
            }
          ],
          "start": 362,
          "end": 371
        },
        "start": 352,
        "end": 371
      },
      "declare": false,
      "start": 336,
      "end": 372
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TComeOnFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 378,
        "end": 388
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 398,
          "end": 401
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSJSDocNullableType",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSJSDocNullableType",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 403,
                      "end": 409
                    },
                    "start": 402,
                    "end": 409
                  },
                  "postfix": true,
                  "id": 0,
                  "original": null,
                  "emitNode": null,
                  "start": 403,
                  "end": 410
                },
                "start": 402,
                "end": 410
              },
              "postfix": false,
              "id": 0,
              "original": null,
              "emitNode": null,
              "start": 402,
              "end": 410
            }
          ],
          "start": 401,
          "end": 411
        },
        "start": 391,
        "end": 411
      },
      "declare": false,
      "start": 373,
      "end": 412
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
            "name": "WhatBar",
            "optional": false,
            "typeAnnotation": null,
            "start": 420,
            "end": 427
          },
          "init": {
            "type": "TSInstantiationExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 430,
              "end": 433
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSJSDocUnknownType",
                  "id": 0,
                  "original": null,
                  "emitNode": null,
                  "start": 434,
                  "end": 435
                }
              ],
              "start": 433,
              "end": 436
            },
            "start": 430,
            "end": 436
          },
          "definite": false,
          "start": 420,
          "end": 436
        }
      ],
      "declare": false,
      "start": 414,
      "end": 437
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
            "name": "HuhBar",
            "optional": false,
            "typeAnnotation": null,
            "start": 444,
            "end": 450
          },
          "init": {
            "type": "TSInstantiationExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 453,
              "end": 456
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSJSDocNullableType",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 457,
                      "end": 463
                    },
                    "start": 456,
                    "end": 463
                  },
                  "postfix": true,
                  "id": 0,
                  "original": null,
                  "emitNode": null,
                  "start": 457,
                  "end": 464
                }
              ],
              "start": 456,
              "end": 465
            },
            "start": 453,
            "end": 465
          },
          "definite": false,
          "start": 444,
          "end": 465
        }
      ],
      "declare": false,
      "start": 438,
      "end": 466
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
            "name": "NopeBar",
            "optional": false,
            "typeAnnotation": null,
            "start": 473,
            "end": 480
          },
          "init": {
            "type": "TSInstantiationExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 483,
              "end": 486
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSJSDocNullableType",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 488,
                      "end": 494
                    },
                    "start": 487,
                    "end": 494
                  },
                  "postfix": false,
                  "id": 0,
                  "original": null,
                  "emitNode": null,
                  "start": 487,
                  "end": 494
                }
              ],
              "start": 486,
              "end": 495
            },
            "start": 483,
            "end": 495
          },
          "definite": false,
          "start": 473,
          "end": 495
        }
      ],
      "declare": false,
      "start": 467,
      "end": 496
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
            "name": "ComeOnBar",
            "optional": false,
            "typeAnnotation": null,
            "start": 503,
            "end": 512
          },
          "init": {
            "type": "TSInstantiationExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 515,
              "end": 518
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSJSDocNullableType",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSJSDocNullableType",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 520,
                          "end": 526
                        },
                        "start": 519,
                        "end": 526
                      },
                      "postfix": true,
                      "id": 0,
                      "original": null,
                      "emitNode": null,
                      "start": 520,
                      "end": 527
                    },
                    "start": 519,
                    "end": 527
                  },
                  "postfix": false,
                  "id": 0,
                  "original": null,
                  "emitNode": null,
                  "start": 519,
                  "end": 527
                }
              ],
              "start": 518,
              "end": 528
            },
            "start": 515,
            "end": 528
          },
          "definite": false,
          "start": 503,
          "end": 528
        }
      ],
      "declare": false,
      "start": 497,
      "end": 529
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TWhatBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 536,
        "end": 544
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 554,
          "end": 557
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSJSDocUnknownType",
              "id": 0,
              "original": null,
              "emitNode": null,
              "start": 558,
              "end": 559
            }
          ],
          "start": 557,
          "end": 560
        },
        "start": 547,
        "end": 560
      },
      "declare": false,
      "start": 531,
      "end": 561
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "THuhBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 567,
        "end": 574
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 584,
          "end": 587
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSJSDocNullableType",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 588,
                  "end": 594
                },
                "start": 587,
                "end": 594
              },
              "postfix": true,
              "id": 0,
              "original": null,
              "emitNode": null,
              "start": 588,
              "end": 595
            }
          ],
          "start": 587,
          "end": 596
        },
        "start": 577,
        "end": 596
      },
      "declare": false,
      "start": 562,
      "end": 597
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TNopeBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 603,
        "end": 611
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 621,
          "end": 624
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSJSDocNullableType",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 626,
                  "end": 632
                },
                "start": 625,
                "end": 632
              },
              "postfix": false,
              "id": 0,
              "original": null,
              "emitNode": null,
              "start": 625,
              "end": 632
            }
          ],
          "start": 624,
          "end": 633
        },
        "start": 614,
        "end": 633
      },
      "declare": false,
      "start": 598,
      "end": 634
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TComeOnBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 640,
        "end": 650
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 660,
          "end": 663
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSJSDocNullableType",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSJSDocNullableType",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 665,
                      "end": 671
                    },
                    "start": 664,
                    "end": 671
                  },
                  "postfix": true,
                  "id": 0,
                  "original": null,
                  "emitNode": null,
                  "start": 665,
                  "end": 672
                },
                "start": 664,
                "end": 672
              },
              "postfix": false,
              "id": 0,
              "original": null,
              "emitNode": null,
              "start": 664,
              "end": 672
            }
          ],
          "start": 663,
          "end": 673
        },
        "start": 653,
        "end": 673
      },
      "declare": false,
      "start": 635,
      "end": 674
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 674
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 22,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 31,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 49,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 61,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 67,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 72,
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
    "value": "constructor",
    "start": 76,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 88,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 152,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "WhatFoo",
    "start": 158,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 168,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 176,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "HuhFoo",
    "start": 182,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 191,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 195,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 201,
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
    "value": ";",
    "start": 203,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 205,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "NopeFoo",
    "start": 211,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 221,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 226,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 235,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "ComeOnFoo",
    "start": 241,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 253,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 258,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 264,
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
    "start": 269,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "TWhatFoo",
    "start": 274,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 285,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 292,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 296,
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
    "value": "THuhFoo",
    "start": 305,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 313,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 315,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 322,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 326,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Identifier",
    "value": "type",
    "start": 336,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "TNopeFoo",
    "start": 341,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 350,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 352,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 359,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 364,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 373,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "TComeOnFoo",
    "start": 378,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 391,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 398,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 403,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 414,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "WhatBar",
    "start": 420,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 430,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 436,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 438,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "HuhBar",
    "start": 444,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 453,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 457,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 465,
    "end": 466
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 467,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "NopeBar",
    "start": 473,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 483,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 488,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 497,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "ComeOnBar",
    "start": 503,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 515,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 520,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 531,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "TWhatBar",
    "start": 536,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 545,
    "end": 546
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 547,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 554,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 562,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "THuhBar",
    "start": 567,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 575,
    "end": 576
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 577,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 584,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 588,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 598,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "TNopeBar",
    "start": 603,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 612,
    "end": 613
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 614,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 621,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 626,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 635,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "TComeOnBar",
    "start": 640,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 651,
    "end": 652
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 653,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 660,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 665,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 673,
    "end": 674
  }
]
```
