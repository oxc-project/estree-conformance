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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 78
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
              "start": 85,
              "end": 96
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
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
                      "start": 100,
                      "end": 106
                    },
                    "start": 98,
                    "end": 106
                  },
                  "start": 97,
                  "end": 106
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 111,
                      "end": 117
                    },
                    "start": 109,
                    "end": 117
                  },
                  "start": 108,
                  "end": 117
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 96,
              "end": 119
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 85,
            "end": 119
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
              "start": 124,
              "end": 135
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
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
                      "start": 139,
                      "end": 145
                    },
                    "start": 137,
                    "end": 145
                  },
                  "start": 136,
                  "end": 145
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 150,
                      "end": 156
                    },
                    "start": 148,
                    "end": 156
                  },
                  "start": 147,
                  "end": 156
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 135,
              "end": 158
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 124,
            "end": 158
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
              "start": 172,
              "end": 183
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
                      "start": 187,
                      "end": 193
                    },
                    "start": 185,
                    "end": 193
                  },
                  "start": 184,
                  "end": 193
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 195,
                "end": 198
              },
              "expression": false,
              "start": 183,
              "end": 198
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 172,
            "end": 198
          }
        ],
        "start": 79,
        "end": 200
      },
      "abstract": false,
      "declare": false,
      "start": 71,
      "end": 200
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 206,
            "end": 208
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 216
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 217,
                "end": 218
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 220,
                "end": 222
              }
            ],
            "start": 211,
            "end": 223
          },
          "definite": false,
          "start": 206,
          "end": 223
        }
      ],
      "declare": false,
      "start": 202,
      "end": 224
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 234
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
              "start": 235,
              "end": 236
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 235,
            "end": 236
          }
        ],
        "start": 234,
        "end": 237
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
              "start": 244,
              "end": 255
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
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
                        "start": 259,
                        "end": 260
                      },
                      "typeArguments": null,
                      "start": 259,
                      "end": 260
                    },
                    "start": 257,
                    "end": 260
                  },
                  "start": 256,
                  "end": 260
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 265,
                      "end": 271
                    },
                    "start": 263,
                    "end": 271
                  },
                  "start": 262,
                  "end": 271
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 255,
              "end": 273
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 244,
            "end": 273
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
              "start": 278,
              "end": 289
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
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
                        "start": 293,
                        "end": 294
                      },
                      "typeArguments": null,
                      "start": 293,
                      "end": 294
                    },
                    "start": 291,
                    "end": 294
                  },
                  "start": 290,
                  "end": 294
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 299,
                      "end": 305
                    },
                    "start": 297,
                    "end": 305
                  },
                  "start": 296,
                  "end": 305
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 289,
              "end": 307
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 278,
            "end": 307
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
              "start": 321,
              "end": 332
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
                        "start": 336,
                        "end": 337
                      },
                      "typeArguments": null,
                      "start": 336,
                      "end": 337
                    },
                    "start": 334,
                    "end": 337
                  },
                  "start": 333,
                  "end": 337
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 339,
                "end": 342
              },
              "expression": false,
              "start": 332,
              "end": 342
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 321,
            "end": 342
          }
        ],
        "start": 238,
        "end": 344
      },
      "abstract": false,
      "declare": false,
      "start": 226,
      "end": 344
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
            "start": 350,
            "end": 352
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 359,
              "end": 361
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 362,
                "end": 363
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 365,
                "end": 367
              }
            ],
            "start": 355,
            "end": 368
          },
          "definite": false,
          "start": 350,
          "end": 368
        }
      ],
      "declare": false,
      "start": 346,
      "end": 369
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 381,
        "end": 382
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 397,
                    "end": 403
                  },
                  "start": 395,
                  "end": 403
                },
                "start": 394,
                "end": 403
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 408,
                    "end": 414
                  },
                  "start": 406,
                  "end": 414
                },
                "start": 405,
                "end": 414
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 417,
                  "end": 418
                },
                "typeArguments": null,
                "start": 417,
                "end": 418
              },
              "start": 415,
              "end": 418
            },
            "start": 389,
            "end": 419
          },
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 432,
                    "end": 438
                  },
                  "start": 430,
                  "end": 438
                },
                "start": 429,
                "end": 438
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 443,
                    "end": 449
                  },
                  "start": 441,
                  "end": 449
                },
                "start": 440,
                "end": 449
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 452,
                  "end": 453
                },
                "typeArguments": null,
                "start": 452,
                "end": 453
              },
              "start": 450,
              "end": 453
            },
            "start": 424,
            "end": 454
          }
        ],
        "start": 383,
        "end": 465
      },
      "declare": false,
      "start": 371,
      "end": 465
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 474,
                  "end": 475
                },
                "typeArguments": null,
                "start": 474,
                "end": 475
              },
              "start": 472,
              "end": 475
            },
            "start": 471,
            "end": 475
          },
          "init": null,
          "definite": false,
          "start": 471,
          "end": 475
        }
      ],
      "declare": false,
      "start": 467,
      "end": 476
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
            "start": 481,
            "end": 483
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 490,
              "end": 491
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 492,
                "end": 493
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 495,
                "end": 497
              }
            ],
            "start": 486,
            "end": 498
          },
          "definite": false,
          "start": 481,
          "end": 498
        }
      ],
      "declare": false,
      "start": 477,
      "end": 499
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 511,
        "end": 513
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
              "start": 514,
              "end": 515
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 514,
            "end": 515
          }
        ],
        "start": 513,
        "end": 516
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                      "start": 531,
                      "end": 532
                    },
                    "typeArguments": null,
                    "start": 531,
                    "end": 532
                  },
                  "start": 529,
                  "end": 532
                },
                "start": 528,
                "end": 532
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 537,
                    "end": 543
                  },
                  "start": 535,
                  "end": 543
                },
                "start": 534,
                "end": 543
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 546,
                  "end": 548
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
                        "start": 549,
                        "end": 550
                      },
                      "typeArguments": null,
                      "start": 549,
                      "end": 550
                    }
                  ],
                  "start": 548,
                  "end": 551
                },
                "start": 546,
                "end": 551
              },
              "start": 544,
              "end": 551
            },
            "start": 523,
            "end": 552
          },
          {
            "type": "TSConstructSignatureDeclaration",
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
                      "start": 565,
                      "end": 566
                    },
                    "typeArguments": null,
                    "start": 565,
                    "end": 566
                  },
                  "start": 563,
                  "end": 566
                },
                "start": 562,
                "end": 566
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 571,
                    "end": 577
                  },
                  "start": 569,
                  "end": 577
                },
                "start": 568,
                "end": 577
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 580,
                  "end": 582
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
                        "start": 583,
                        "end": 584
                      },
                      "typeArguments": null,
                      "start": 583,
                      "end": 584
                    }
                  ],
                  "start": 582,
                  "end": 585
                },
                "start": 580,
                "end": 585
              },
              "start": 578,
              "end": 585
            },
            "start": 557,
            "end": 586
          },
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 605,
                    "end": 606
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 605,
                  "end": 606
                }
              ],
              "start": 604,
              "end": 607
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
                      "start": 611,
                      "end": 612
                    },
                    "typeArguments": null,
                    "start": 611,
                    "end": 612
                  },
                  "start": 609,
                  "end": 612
                },
                "start": 608,
                "end": 612
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 617,
                    "end": 623
                  },
                  "start": 615,
                  "end": 623
                },
                "start": 614,
                "end": 623
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 626,
                  "end": 628
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
                        "start": 629,
                        "end": 630
                      },
                      "typeArguments": null,
                      "start": 629,
                      "end": 630
                    }
                  ],
                  "start": 628,
                  "end": 631
                },
                "start": 626,
                "end": 631
              },
              "start": 624,
              "end": 631
            },
            "start": 600,
            "end": 632
          },
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 642,
                    "end": 643
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 642,
                  "end": 643
                }
              ],
              "start": 641,
              "end": 644
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
                      "start": 648,
                      "end": 649
                    },
                    "typeArguments": null,
                    "start": 648,
                    "end": 649
                  },
                  "start": 646,
                  "end": 649
                },
                "start": 645,
                "end": 649
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 654,
                    "end": 660
                  },
                  "start": 652,
                  "end": 660
                },
                "start": 651,
                "end": 660
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 663,
                  "end": 665
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
                        "start": 666,
                        "end": 667
                      },
                      "typeArguments": null,
                      "start": 666,
                      "end": 667
                    }
                  ],
                  "start": 665,
                  "end": 668
                },
                "start": 663,
                "end": 668
              },
              "start": 661,
              "end": 668
            },
            "start": 637,
            "end": 669
          }
        ],
        "start": 517,
        "end": 680
      },
      "declare": false,
      "start": 501,
      "end": 680
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
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 690,
                  "end": 692
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 693,
                      "end": 699
                    }
                  ],
                  "start": 692,
                  "end": 700
                },
                "start": 690,
                "end": 700
              },
              "start": 688,
              "end": 700
            },
            "start": 686,
            "end": 700
          },
          "init": null,
          "definite": false,
          "start": 686,
          "end": 700
        }
      ],
      "declare": false,
      "start": 682,
      "end": 701
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
            "start": 706,
            "end": 708
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2",
              "optional": false,
              "typeAnnotation": null,
              "start": 715,
              "end": 717
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 718,
                "end": 719
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 721,
                "end": 723
              }
            ],
            "start": 711,
            "end": 724
          },
          "definite": false,
          "start": 706,
          "end": 724
        }
      ],
      "declare": false,
      "start": 702,
      "end": 725
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 748,
                            "end": 754
                          },
                          "start": 746,
                          "end": 754
                        },
                        "start": 745,
                        "end": 754
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 759,
                            "end": 765
                          },
                          "start": 757,
                          "end": 765
                        },
                        "start": 756,
                        "end": 765
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 768,
                          "end": 769
                        },
                        "typeArguments": null,
                        "start": 768,
                        "end": 769
                      },
                      "start": 766,
                      "end": 769
                    },
                    "start": 740,
                    "end": 770
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 783,
                            "end": 789
                          },
                          "start": 781,
                          "end": 789
                        },
                        "start": 780,
                        "end": 789
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 794,
                            "end": 800
                          },
                          "start": 792,
                          "end": 800
                        },
                        "start": 791,
                        "end": 800
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 803,
                          "end": 804
                        },
                        "typeArguments": null,
                        "start": 803,
                        "end": 804
                      },
                      "start": 801,
                      "end": 804
                    },
                    "start": 775,
                    "end": 805
                  }
                ],
                "start": 734,
                "end": 816
              },
              "start": 732,
              "end": 816
            },
            "start": 731,
            "end": 816
          },
          "init": null,
          "definite": false,
          "start": 731,
          "end": 816
        }
      ],
      "declare": false,
      "start": 727,
      "end": 816
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 822,
            "end": 824
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 831,
              "end": 832
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 833,
                "end": 834
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 836,
                "end": 838
              }
            ],
            "start": 827,
            "end": 839
          },
          "definite": false,
          "start": 822,
          "end": 839
        }
      ],
      "declare": false,
      "start": 818,
      "end": 840
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 860,
                            "end": 861
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 860,
                          "end": 861
                        }
                      ],
                      "start": 859,
                      "end": 862
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
                              "start": 866,
                              "end": 867
                            },
                            "typeArguments": null,
                            "start": 866,
                            "end": 867
                          },
                          "start": 864,
                          "end": 867
                        },
                        "start": 863,
                        "end": 867
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 872,
                            "end": 878
                          },
                          "start": 870,
                          "end": 878
                        },
                        "start": 869,
                        "end": 878
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 881,
                          "end": 883
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
                                "start": 884,
                                "end": 885
                              },
                              "typeArguments": null,
                              "start": 884,
                              "end": 885
                            }
                          ],
                          "start": 883,
                          "end": 886
                        },
                        "start": 881,
                        "end": 886
                      },
                      "start": 879,
                      "end": 886
                    },
                    "start": 855,
                    "end": 887
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 897,
                            "end": 898
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 897,
                          "end": 898
                        }
                      ],
                      "start": 896,
                      "end": 899
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
                              "start": 903,
                              "end": 904
                            },
                            "typeArguments": null,
                            "start": 903,
                            "end": 904
                          },
                          "start": 901,
                          "end": 904
                        },
                        "start": 900,
                        "end": 904
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 909,
                            "end": 915
                          },
                          "start": 907,
                          "end": 915
                        },
                        "start": 906,
                        "end": 915
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 918,
                          "end": 920
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
                                "start": 921,
                                "end": 922
                              },
                              "typeArguments": null,
                              "start": 921,
                              "end": 922
                            }
                          ],
                          "start": 920,
                          "end": 923
                        },
                        "start": 918,
                        "end": 923
                      },
                      "start": 916,
                      "end": 923
                    },
                    "start": 892,
                    "end": 924
                  }
                ],
                "start": 849,
                "end": 935
              },
              "start": 847,
              "end": 935
            },
            "start": 846,
            "end": 935
          },
          "init": null,
          "definite": false,
          "start": 846,
          "end": 935
        }
      ],
      "declare": false,
      "start": 842,
      "end": 935
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 941,
            "end": 943
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 950,
              "end": 951
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 952,
                "end": 953
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 955,
                "end": 957
              }
            ],
            "start": 946,
            "end": 958
          },
          "definite": false,
          "start": 941,
          "end": 958
        }
      ],
      "declare": false,
      "start": 937,
      "end": 959
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 71,
  "end": 959
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 71,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 85,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "number",
    "start": 100,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 111,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 124,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 139,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 150,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 172,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 187,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 202,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 206,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 211,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 216,
    "end": 217
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 218,
    "end": 219
  },
  {
    "type": "String",
    "value": "''",
    "start": 220,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 226,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 232,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 244,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 265,
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
    "type": "Identifier",
    "value": "constructor",
    "start": 278,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 299,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 321,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "T",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 343,
    "end": 344
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 346,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 350,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 355,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 359,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 361,
    "end": 362
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 363,
    "end": 364
  },
  {
    "type": "String",
    "value": "''",
    "start": 365,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 368,
    "end": 369
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 371,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 383,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 389,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 397,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 408,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 414,
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
    "value": "C",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 424,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 432,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 443,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "C",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 464,
    "end": 465
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 467,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "i",
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
    "type": "Identifier",
    "value": "I",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 475,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 477,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 481,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 484,
    "end": 485
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 486,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 491,
    "end": 492
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 493,
    "end": 494
  },
  {
    "type": "String",
    "value": "''",
    "start": 495,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 501,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 511,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 517,
    "end": 518
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 523,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 537,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 546,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Keyword",
    "value": "new",
    "start": 557,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 571,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 580,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 585,
    "end": 586
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 600,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 617,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "C2",
    "start": 626,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 631,
    "end": 632
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 637,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 654,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 663,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 679,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 682,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 686,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 690,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 693,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 700,
    "end": 701
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 702,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 706,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 709,
    "end": 710
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 711,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 715,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 717,
    "end": 718
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 719,
    "end": 720
  },
  {
    "type": "String",
    "value": "''",
    "start": 721,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 724,
    "end": 725
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 727,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 734,
    "end": 735
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 740,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 748,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 759,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 769,
    "end": 770
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 775,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 783,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 794,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 815,
    "end": 816
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 818,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 822,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 825,
    "end": 826
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 827,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 832,
    "end": 833
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 834,
    "end": 835
  },
  {
    "type": "String",
    "value": "''",
    "start": 836,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 839,
    "end": 840
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 842,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 849,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 855,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 872,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 879,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 881,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 886,
    "end": 887
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 892,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 899,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 909,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 918,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 934,
    "end": 935
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 937,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 941,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 944,
    "end": 945
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 946,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 951,
    "end": 952
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 953,
    "end": 954
  },
  {
    "type": "String",
    "value": "''",
    "start": 955,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 958,
    "end": 959
  }
]
```
