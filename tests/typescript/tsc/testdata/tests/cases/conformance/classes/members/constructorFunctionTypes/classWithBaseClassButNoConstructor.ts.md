__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
      },
      "typeParameters": null,
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
              "start": 17,
              "end": 28
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 32,
                      "end": 38
                    },
                    "start": 30,
                    "end": 38
                  },
                  "start": 29,
                  "end": 38
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 40,
                "end": 43
              },
              "expression": false,
              "start": 28,
              "end": 43
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 17,
            "end": 43
          }
        ],
        "start": 11,
        "end": 45
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 54
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 67
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 77
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 79,
                "end": 85
              },
              "start": 77,
              "end": 85
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
            "start": 74,
            "end": 86
          }
        ],
        "start": 68,
        "end": 88
      },
      "abstract": false,
      "declare": false,
      "start": 47,
      "end": 88
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 95
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 99
          },
          "definite": false,
          "start": 94,
          "end": 99
        }
      ],
      "declare": false,
      "start": 90,
      "end": 100
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 106
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 114
            },
            "typeArguments": null,
            "arguments": [],
            "start": 109,
            "end": 116
          },
          "definite": false,
          "start": 105,
          "end": 116
        }
      ],
      "declare": false,
      "start": 101,
      "end": 117
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 133
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 141
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 142,
                "end": 143
              }
            ],
            "start": 136,
            "end": 144
          },
          "definite": false,
          "start": 131,
          "end": 144
        }
      ],
      "declare": false,
      "start": 127,
      "end": 145
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null,
        "start": 159,
        "end": 164
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
              "start": 165,
              "end": 166
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 165,
            "end": 166
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 168
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 167,
            "end": 168
          }
        ],
        "start": 164,
        "end": 169
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
              "start": 176,
              "end": 187
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
                        "start": 191,
                        "end": 192
                      },
                      "typeArguments": null,
                      "start": 191,
                      "end": 192
                    },
                    "start": 189,
                    "end": 192
                  },
                  "start": 188,
                  "end": 192
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 194,
                "end": 197
              },
              "expression": false,
              "start": 187,
              "end": 197
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 176,
            "end": 197
          }
        ],
        "start": 170,
        "end": 199
      },
      "abstract": false,
      "declare": false,
      "start": 153,
      "end": 199
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 207,
        "end": 208
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
              "start": 209,
              "end": 210
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 209,
            "end": 210
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 212
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 211,
            "end": 212
          }
        ],
        "start": 208,
        "end": 213
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null,
        "start": 222,
        "end": 227
      },
      "superTypeArguments": {
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
              "start": 228,
              "end": 229
            },
            "typeArguments": null,
            "start": 228,
            "end": 229
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 230,
              "end": 231
            },
            "typeArguments": null,
            "start": 230,
            "end": 231
          }
        ],
        "start": 227,
        "end": 232
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 242
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 244,
                  "end": 245
                },
                "typeArguments": null,
                "start": 244,
                "end": 245
              },
              "start": 242,
              "end": 245
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
            "start": 239,
            "end": 246
          }
        ],
        "start": 233,
        "end": 248
      },
      "abstract": false,
      "declare": false,
      "start": 201,
      "end": 248
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 254,
            "end": 256
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 259,
            "end": 260
          },
          "definite": false,
          "start": 254,
          "end": 260
        }
      ],
      "declare": false,
      "start": 250,
      "end": 261
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 266,
            "end": 267
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 275
            },
            "typeArguments": null,
            "arguments": [],
            "start": 270,
            "end": 277
          },
          "definite": false,
          "start": 266,
          "end": 277
        }
      ],
      "declare": false,
      "start": 262,
      "end": 278
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
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 292,
            "end": 294
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 302
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 303,
                "end": 304
              }
            ],
            "start": 297,
            "end": 305
          },
          "definite": false,
          "start": 292,
          "end": 305
        }
      ],
      "declare": false,
      "start": 288,
      "end": 306
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D2",
        "optional": false,
        "typeAnnotation": null,
        "start": 346,
        "end": 348
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
              "start": 349,
              "end": 350
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 349,
            "end": 350
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 353
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 352,
            "end": 353
          }
        ],
        "start": 348,
        "end": 354
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null,
        "start": 363,
        "end": 368
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 369,
            "end": 375
          },
          {
            "type": "TSNumberKeyword",
            "start": 377,
            "end": 383
          }
        ],
        "start": 368,
        "end": 384
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 391,
              "end": 394
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 396,
                  "end": 397
                },
                "typeArguments": null,
                "start": 396,
                "end": 397
              },
              "start": 394,
              "end": 397
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
            "start": 391,
            "end": 398
          }
        ],
        "start": 385,
        "end": 400
      },
      "abstract": false,
      "declare": false,
      "start": 340,
      "end": 400
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 406,
            "end": 408
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "D2",
            "optional": false,
            "typeAnnotation": null,
            "start": 411,
            "end": 413
          },
          "definite": false,
          "start": 406,
          "end": 413
        }
      ],
      "declare": false,
      "start": 402,
      "end": 414
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
            "name": "d3",
            "optional": false,
            "typeAnnotation": null,
            "start": 419,
            "end": 421
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 428,
              "end": 429
            },
            "typeArguments": null,
            "arguments": [],
            "start": 424,
            "end": 431
          },
          "definite": false,
          "start": 419,
          "end": 431
        }
      ],
      "declare": false,
      "start": 415,
      "end": 432
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
            "name": "d4",
            "optional": false,
            "typeAnnotation": null,
            "start": 446,
            "end": 448
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 455,
              "end": 456
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 457,
                "end": 458
              }
            ],
            "start": 451,
            "end": 459
          },
          "definite": false,
          "start": 446,
          "end": 459
        }
      ],
      "declare": false,
      "start": 442,
      "end": 460
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D3",
        "optional": false,
        "typeAnnotation": null,
        "start": 474,
        "end": 476
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null,
        "start": 485,
        "end": 490
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 491,
            "end": 497
          },
          {
            "type": "TSNumberKeyword",
            "start": 499,
            "end": 505
          }
        ],
        "start": 490,
        "end": 506
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 513,
              "end": 516
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 518,
                "end": 524
              },
              "start": 516,
              "end": 524
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
            "start": 513,
            "end": 525
          }
        ],
        "start": 507,
        "end": 527
      },
      "abstract": false,
      "declare": false,
      "start": 468,
      "end": 527
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 533,
            "end": 535
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "D3",
            "optional": false,
            "typeAnnotation": null,
            "start": 538,
            "end": 540
          },
          "definite": false,
          "start": 533,
          "end": 540
        }
      ],
      "declare": false,
      "start": 529,
      "end": 541
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
            "name": "d5",
            "optional": false,
            "typeAnnotation": null,
            "start": 546,
            "end": 548
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 555,
              "end": 556
            },
            "typeArguments": null,
            "arguments": [],
            "start": 551,
            "end": 558
          },
          "definite": false,
          "start": 546,
          "end": 558
        }
      ],
      "declare": false,
      "start": 542,
      "end": 559
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
            "name": "d6",
            "optional": false,
            "typeAnnotation": null,
            "start": 573,
            "end": 575
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 582,
              "end": 583
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 584,
                "end": 585
              }
            ],
            "start": 578,
            "end": 586
          },
          "definite": false,
          "start": 573,
          "end": 586
        }
      ],
      "declare": false,
      "start": 569,
      "end": 587
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 593
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 6,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 17,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 47,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 55,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 63,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 74,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 90,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 101,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 109,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 127,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 131,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 136,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 141,
    "end": 142
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 142,
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
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 153,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 159,
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
    "value": "T",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 176,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 201,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 214,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 222,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 239,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 250,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 254,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 262,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 270,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 275,
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
    "value": ";",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 288,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 292,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 297,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 305,
    "end": 306
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 340,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "D2",
    "start": 346,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 355,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 363,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 369,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 377,
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
    "value": "{",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 391,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 399,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 402,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 406,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "D2",
    "start": 411,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 413,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 415,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 419,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 422,
    "end": 423
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 424,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 431,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 442,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 446,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 449,
    "end": 450
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 451,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 456,
    "end": 457
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 459,
    "end": 460
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 468,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "D3",
    "start": 474,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 477,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 485,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 491,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 499,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 513,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 518,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "var",
    "start": 529,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 533,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "D3",
    "start": 538,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 540,
    "end": 541
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 542,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "d5",
    "start": 546,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 549,
    "end": 550
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 551,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 558,
    "end": 559
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 569,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "d6",
    "start": 573,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 576,
    "end": 577
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 578,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 583,
    "end": 584
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 586,
    "end": 587
  }
]
```
