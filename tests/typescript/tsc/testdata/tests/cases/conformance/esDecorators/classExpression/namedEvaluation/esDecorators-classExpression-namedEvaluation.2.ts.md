__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              },
              "start": 15,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 20
        }
      ],
      "declare": true,
      "start": 0,
      "end": 21
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 30,
                "end": 33
              },
              "start": 28,
              "end": 33
            },
            "start": 27,
            "end": 33
          },
          "init": null,
          "definite": false,
          "start": 27,
          "end": 33
        },
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
                "type": "TSAnyKeyword",
                "start": 38,
                "end": 41
              },
              "start": 36,
              "end": 41
            },
            "start": 35,
            "end": 41
          },
          "init": null,
          "definite": false,
          "start": 35,
          "end": 41
        }
      ],
      "declare": false,
      "start": 23,
      "end": 42
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 157
            },
            "value": {
              "type": "ClassExpression",
              "decorators": [
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 160,
                    "end": 163
                  },
                  "start": 159,
                  "end": 163
                }
              ],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 170,
                "end": 173
              },
              "abstract": false,
              "declare": false,
              "start": 159,
              "end": 173
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 156,
            "end": 173
          }
        ],
        "start": 154,
        "end": 175
      },
      "directive": null,
      "start": 153,
      "end": 177
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 182
            },
            "value": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [
                      {
                        "type": "Decorator",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 193,
                          "end": 196
                        },
                        "start": 192,
                        "end": 196
                      }
                    ],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 197,
                      "end": 198
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 200,
                        "end": 203
                      },
                      "start": 198,
                      "end": 203
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 192,
                    "end": 204
                  }
                ],
                "start": 190,
                "end": 206
              },
              "abstract": false,
              "declare": false,
              "start": 184,
              "end": 206
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 181,
            "end": 206
          }
        ],
        "start": 179,
        "end": 208
      },
      "directive": null,
      "start": 178,
      "end": 210
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Literal",
              "value": "x",
              "raw": "\"x\"",
              "start": 215,
              "end": 218
            },
            "value": {
              "type": "ClassExpression",
              "decorators": [
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 221,
                    "end": 224
                  },
                  "start": 220,
                  "end": 224
                }
              ],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 231,
                "end": 234
              },
              "abstract": false,
              "declare": false,
              "start": 220,
              "end": 234
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 215,
            "end": 234
          }
        ],
        "start": 213,
        "end": 236
      },
      "directive": null,
      "start": 212,
      "end": 238
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Literal",
              "value": "x",
              "raw": "\"x\"",
              "start": 242,
              "end": 245
            },
            "value": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [
                      {
                        "type": "Decorator",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 256,
                          "end": 259
                        },
                        "start": 255,
                        "end": 259
                      }
                    ],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 260,
                      "end": 261
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 263,
                        "end": 266
                      },
                      "start": 261,
                      "end": 266
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 255,
                    "end": 267
                  }
                ],
                "start": 253,
                "end": 269
              },
              "abstract": false,
              "declare": false,
              "start": 247,
              "end": 269
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 242,
            "end": 269
          }
        ],
        "start": 240,
        "end": 271
      },
      "directive": null,
      "start": 239,
      "end": 273
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 278,
              "end": 279
            },
            "value": {
              "type": "ClassExpression",
              "decorators": [
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 282,
                    "end": 285
                  },
                  "start": 281,
                  "end": 285
                }
              ],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 292,
                "end": 295
              },
              "abstract": false,
              "declare": false,
              "start": 281,
              "end": 295
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 278,
            "end": 295
          }
        ],
        "start": 276,
        "end": 297
      },
      "directive": null,
      "start": 275,
      "end": 299
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 303,
              "end": 304
            },
            "value": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [
                      {
                        "type": "Decorator",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 315,
                          "end": 318
                        },
                        "start": 314,
                        "end": 318
                      }
                    ],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 319,
                      "end": 320
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 322,
                        "end": 325
                      },
                      "start": 320,
                      "end": 325
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 314,
                    "end": 326
                  }
                ],
                "start": 312,
                "end": 328
              },
              "abstract": false,
              "declare": false,
              "start": 306,
              "end": 328
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 303,
            "end": 328
          }
        ],
        "start": 301,
        "end": 330
      },
      "directive": null,
      "start": 300,
      "end": 332
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Literal",
              "value": "x",
              "raw": "\"x\"",
              "start": 338,
              "end": 341
            },
            "value": {
              "type": "ClassExpression",
              "decorators": [
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 345,
                    "end": 348
                  },
                  "start": 344,
                  "end": 348
                }
              ],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 355,
                "end": 358
              },
              "abstract": false,
              "declare": false,
              "start": 344,
              "end": 358
            },
            "method": false,
            "shorthand": false,
            "computed": true,
            "optional": false,
            "start": 337,
            "end": 358
          }
        ],
        "start": 335,
        "end": 360
      },
      "directive": null,
      "start": 334,
      "end": 362
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Literal",
              "value": "x",
              "raw": "\"x\"",
              "start": 367,
              "end": 370
            },
            "value": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [
                      {
                        "type": "Decorator",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 382,
                          "end": 385
                        },
                        "start": 381,
                        "end": 385
                      }
                    ],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 386,
                      "end": 387
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 389,
                        "end": 392
                      },
                      "start": 387,
                      "end": 392
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 381,
                    "end": 393
                  }
                ],
                "start": 379,
                "end": 395
              },
              "abstract": false,
              "declare": false,
              "start": 373,
              "end": 395
            },
            "method": false,
            "shorthand": false,
            "computed": true,
            "optional": false,
            "start": 366,
            "end": 395
          }
        ],
        "start": 364,
        "end": 397
      },
      "directive": null,
      "start": 363,
      "end": 399
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 405,
              "end": 406
            },
            "value": {
              "type": "ClassExpression",
              "decorators": [
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 410,
                    "end": 413
                  },
                  "start": 409,
                  "end": 413
                }
              ],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 420,
                "end": 423
              },
              "abstract": false,
              "declare": false,
              "start": 409,
              "end": 423
            },
            "method": false,
            "shorthand": false,
            "computed": true,
            "optional": false,
            "start": 404,
            "end": 423
          }
        ],
        "start": 402,
        "end": 425
      },
      "directive": null,
      "start": 401,
      "end": 427
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 432,
              "end": 433
            },
            "value": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [
                      {
                        "type": "Decorator",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 445,
                          "end": 448
                        },
                        "start": 444,
                        "end": 448
                      }
                    ],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 449,
                      "end": 450
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 452,
                        "end": 455
                      },
                      "start": 450,
                      "end": 455
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 444,
                    "end": 456
                  }
                ],
                "start": 442,
                "end": 458
              },
              "abstract": false,
              "declare": false,
              "start": 436,
              "end": 458
            },
            "method": false,
            "shorthand": false,
            "computed": true,
            "optional": false,
            "start": 431,
            "end": 458
          }
        ],
        "start": 429,
        "end": 460
      },
      "directive": null,
      "start": 428,
      "end": 462
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 468,
                "end": 469
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 468,
              "end": 471
            },
            "value": {
              "type": "ClassExpression",
              "decorators": [
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 475,
                    "end": 478
                  },
                  "start": 474,
                  "end": 478
                }
              ],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 485,
                "end": 488
              },
              "abstract": false,
              "declare": false,
              "start": 474,
              "end": 488
            },
            "method": false,
            "shorthand": false,
            "computed": true,
            "optional": false,
            "start": 467,
            "end": 488
          }
        ],
        "start": 465,
        "end": 490
      },
      "directive": null,
      "start": 464,
      "end": 492
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 497,
                "end": 498
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 497,
              "end": 500
            },
            "value": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [
                      {
                        "type": "Decorator",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 512,
                          "end": 515
                        },
                        "start": 511,
                        "end": 515
                      }
                    ],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 516,
                      "end": 517
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 519,
                        "end": 522
                      },
                      "start": 517,
                      "end": 522
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 511,
                    "end": 523
                  }
                ],
                "start": 509,
                "end": 525
              },
              "abstract": false,
              "declare": false,
              "start": 503,
              "end": 525
            },
            "method": false,
            "shorthand": false,
            "computed": true,
            "optional": false,
            "start": 496,
            "end": 525
          }
        ],
        "start": 494,
        "end": 527
      },
      "directive": null,
      "start": 493,
      "end": 529
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "__proto__",
              "optional": false,
              "typeAnnotation": null,
              "start": 586,
              "end": 595
            },
            "value": {
              "type": "ClassExpression",
              "decorators": [
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 598,
                    "end": 601
                  },
                  "start": 597,
                  "end": 601
                }
              ],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 608,
                "end": 611
              },
              "abstract": false,
              "declare": false,
              "start": 597,
              "end": 611
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 586,
            "end": 611
          }
        ],
        "start": 584,
        "end": 613
      },
      "directive": null,
      "start": 583,
      "end": 615
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Literal",
              "value": "__proto__",
              "raw": "\"__proto__\"",
              "start": 619,
              "end": 630
            },
            "value": {
              "type": "ClassExpression",
              "decorators": [
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 633,
                    "end": 636
                  },
                  "start": 632,
                  "end": 636
                }
              ],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 643,
                "end": 646
              },
              "abstract": false,
              "declare": false,
              "start": 632,
              "end": 646
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 619,
            "end": 646
          }
        ],
        "start": 617,
        "end": 648
      },
      "directive": null,
      "start": 616,
      "end": 650
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Literal",
              "value": "__proto__",
              "raw": "\"__proto__\"",
              "start": 730,
              "end": 741
            },
            "value": {
              "type": "ClassExpression",
              "decorators": [
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 745,
                    "end": 748
                  },
                  "start": 744,
                  "end": 748
                }
              ],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 755,
                "end": 758
              },
              "abstract": false,
              "declare": false,
              "start": 744,
              "end": 758
            },
            "method": false,
            "shorthand": false,
            "computed": true,
            "optional": false,
            "start": 729,
            "end": 758
          }
        ],
        "start": 727,
        "end": 760
      },
      "directive": null,
      "start": 726,
      "end": 762
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 762
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
    "value": "let",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 12,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 23,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 30,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 38,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 160,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 164,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 184,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 193,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 200,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 207,
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
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 213,
    "end": 214
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 215,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 221,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 225,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 240,
    "end": 241
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 242,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 247,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 256,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 263,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 276,
    "end": 277
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 282,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 286,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "(",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 304,
    "end": 305
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 306,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 315,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 322,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 337,
    "end": 338
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 338,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 345,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 349,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "(",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 366,
    "end": 367
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 367,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 371,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 373,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 382,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 389,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 392,
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
    "value": "}",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 404,
    "end": 405
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 410,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 414,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 431,
    "end": 432
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 436,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 445,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 452,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 475,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 479,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 501,
    "end": 502
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 503,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 512,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 519,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "(",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "__proto__",
    "start": 586,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 598,
    "end": 601
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 602,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "String",
    "value": "\"__proto__\"",
    "start": 619,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 633,
    "end": 636
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 637,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 729,
    "end": 730
  },
  {
    "type": "String",
    "value": "\"__proto__\"",
    "start": 730,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 745,
    "end": 748
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 749,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762
  }
]
```
