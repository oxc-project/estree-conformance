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
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 20
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              },
              "start": 20,
              "end": 28
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 29
          }
        ],
        "start": 12,
        "end": 31
      },
      "declare": false,
      "start": 0,
      "end": 31
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
        "start": 39,
        "end": 40
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 53
          },
          "typeArguments": null,
          "start": 52,
          "end": 53
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 62
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 64,
                "end": 70
              },
              "start": 62,
              "end": 70
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
            "start": 60,
            "end": 71
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 80
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 82,
                "end": 88
              },
              "start": 80,
              "end": 88
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
            "start": 76,
            "end": 89
          }
        ],
        "start": 54,
        "end": 91
      },
      "abstract": false,
      "declare": false,
      "start": 33,
      "end": 91
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
        "start": 99,
        "end": 101
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 111
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
              "name": "valid",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 123
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 125,
                "end": 132
              },
              "start": 123,
              "end": 132
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
            "start": 118,
            "end": 133
          }
        ],
        "start": 112,
        "end": 135
      },
      "abstract": false,
      "declare": false,
      "start": 93,
      "end": 135
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
        "start": 143,
        "end": 144
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
              "start": 145,
              "end": 146
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 145,
            "end": 146
          }
        ],
        "start": 144,
        "end": 147
      },
      "superClass": null,
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
              "name": "source",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 159
            },
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
                  "start": 161,
                  "end": 162
                },
                "typeArguments": null,
                "start": 161,
                "end": 162
              },
              "start": 159,
              "end": 162
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
            "start": 153,
            "end": 163
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "recurse",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 175
            },
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
                  "start": 177,
                  "end": 178
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
                        "start": 179,
                        "end": 180
                      },
                      "typeArguments": null,
                      "start": 179,
                      "end": 180
                    }
                  ],
                  "start": 178,
                  "end": 181
                },
                "start": 177,
                "end": 181
              },
              "start": 175,
              "end": 181
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
            "start": 168,
            "end": 182
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "wrapped",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 194
            },
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
                  "start": 196,
                  "end": 197
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 198,
                        "end": 199
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
                              "start": 200,
                              "end": 201
                            },
                            "typeArguments": null,
                            "start": 200,
                            "end": 201
                          }
                        ],
                        "start": 199,
                        "end": 202
                      },
                      "start": 198,
                      "end": 202
                    }
                  ],
                  "start": 197,
                  "end": 203
                },
                "start": 196,
                "end": 203
              },
              "start": 194,
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
            "start": 187,
            "end": 203
          }
        ],
        "start": 147,
        "end": 205
      },
      "abstract": false,
      "declare": false,
      "start": 137,
      "end": 205
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 216,
        "end": 217
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
              "start": 221,
              "end": 227
            },
            "start": 219,
            "end": 227
          },
          "start": 218,
          "end": 227
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 230,
          "end": 236
        },
        "start": 228,
        "end": 236
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 246,
              "end": 248
            },
            "start": 239,
            "end": 249
          }
        ],
        "start": 237,
        "end": 251
      },
      "expression": false,
      "start": 207,
      "end": 251
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null,
        "start": 261,
        "end": 263
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
              "type": "TSNumberKeyword",
              "start": 267,
              "end": 273
            },
            "start": 265,
            "end": 273
          },
          "start": 264,
          "end": 273
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 276,
          "end": 283
        },
        "start": 274,
        "end": 283
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 293,
                "end": 294
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 297,
                "end": 299
              },
              "start": 293,
              "end": 299
            },
            "start": 286,
            "end": 300
          }
        ],
        "start": 284,
        "end": 302
      },
      "expression": false,
      "start": 252,
      "end": 302
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 314,
        "end": 315
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 335,
                "end": 336
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 347,
                      "end": 351
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 353,
                        "end": 359
                      },
                      "start": 351,
                      "end": 359
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
                    "start": 347,
                    "end": 360
                  }
                ],
                "start": 337,
                "end": 366
              },
              "abstract": false,
              "declare": false,
              "start": 329,
              "end": 366
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 322,
            "end": 366
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "F2",
                "optional": false,
                "typeAnnotation": null,
                "start": 388,
                "end": 390
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
                      "type": "TSNumberKeyword",
                      "start": 394,
                      "end": 400
                    },
                    "start": 392,
                    "end": 400
                  },
                  "start": 391,
                  "end": 400
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 403,
                  "end": 409
                },
                "start": 401,
                "end": 409
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 419,
                          "end": 420
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 421,
                          "end": 429
                        },
                        "optional": false,
                        "computed": false,
                        "start": 419,
                        "end": 429
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 419,
                      "end": 431
                    },
                    "start": 412,
                    "end": 432
                  }
                ],
                "start": 410,
                "end": 434
              },
              "expression": false,
              "start": 379,
              "end": 434
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 372,
            "end": 434
          }
        ],
        "start": 316,
        "end": 436
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 304,
      "end": 436
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 448,
        "end": 449
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 469,
                "end": 470
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 481,
                      "end": 483
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 485,
                        "end": 491
                      },
                      "start": 483,
                      "end": 491
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
                    "start": 481,
                    "end": 492
                  }
                ],
                "start": 471,
                "end": 498
              },
              "abstract": false,
              "declare": false,
              "start": 463,
              "end": 498
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 456,
            "end": 498
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "F2",
                "optional": false,
                "typeAnnotation": null,
                "start": 520,
                "end": 522
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
                      "type": "TSNumberKeyword",
                      "start": 526,
                      "end": 532
                    },
                    "start": 524,
                    "end": 532
                  },
                  "start": 523,
                  "end": 532
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 535,
                  "end": 541
                },
                "start": 533,
                "end": 541
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 551,
                          "end": 552
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 553,
                          "end": 561
                        },
                        "optional": false,
                        "computed": false,
                        "start": 551,
                        "end": 561
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 551,
                      "end": 563
                    },
                    "start": 544,
                    "end": 564
                  }
                ],
                "start": 542,
                "end": 566
              },
              "expression": false,
              "start": 511,
              "end": 566
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 504,
            "end": 566
          }
        ],
        "start": 450,
        "end": 568
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 438,
      "end": 568
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 586,
        "end": 590
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 592,
        "end": 595
      },
      "alternate": null,
      "start": 582,
      "end": 595
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 603,
        "end": 607
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 609,
        "end": 612
      },
      "start": 596,
      "end": 612
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 616,
        "end": 619
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 625,
        "end": 629
      },
      "start": 613,
      "end": 630
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": null,
        "raw": "null",
        "start": 636,
        "end": 640
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 642,
        "end": 645
      },
      "alternate": null,
      "start": 632,
      "end": 645
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": null,
        "raw": "null",
        "start": 653,
        "end": 657
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 659,
        "end": 662
      },
      "start": 646,
      "end": 662
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 666,
        "end": 669
      },
      "test": {
        "type": "Literal",
        "value": null,
        "raw": "null",
        "start": 675,
        "end": 679
      },
      "start": 663,
      "end": 680
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "undefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 686,
        "end": 695
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 697,
        "end": 700
      },
      "alternate": null,
      "start": 682,
      "end": 700
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "undefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 708,
        "end": 717
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 719,
        "end": 722
      },
      "start": 701,
      "end": 722
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 726,
        "end": 729
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "undefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 735,
        "end": 744
      },
      "start": 723,
      "end": 745
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": 0,
        "raw": "0.0",
        "start": 751,
        "end": 754
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 756,
        "end": 759
      },
      "alternate": null,
      "start": 747,
      "end": 759
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": 0,
        "raw": "0.0",
        "start": 767,
        "end": 770
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 772,
        "end": 775
      },
      "start": 760,
      "end": 775
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 779,
        "end": 782
      },
      "test": {
        "type": "Literal",
        "value": 0,
        "raw": "0.0",
        "start": 788,
        "end": 791
      },
      "start": 776,
      "end": 792
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": "a string",
        "raw": "'a string'",
        "start": 798,
        "end": 808
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 810,
        "end": 813
      },
      "alternate": null,
      "start": 794,
      "end": 813
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": "a string",
        "raw": "'a string'",
        "start": 821,
        "end": 831
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 833,
        "end": 836
      },
      "start": 814,
      "end": 836
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 840,
        "end": 843
      },
      "test": {
        "type": "Literal",
        "value": "a string",
        "raw": "'a string'",
        "start": 849,
        "end": 859
      },
      "start": 837,
      "end": 860
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": "",
        "raw": "''",
        "start": 866,
        "end": 868
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 870,
        "end": 873
      },
      "alternate": null,
      "start": 862,
      "end": 873
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": "",
        "raw": "''",
        "start": 881,
        "end": 883
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 885,
        "end": 888
      },
      "start": 874,
      "end": 888
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 892,
        "end": 895
      },
      "test": {
        "type": "Literal",
        "value": "",
        "raw": "''",
        "start": 901,
        "end": 903
      },
      "start": 889,
      "end": 904
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": null,
        "raw": "/[a-z]/",
        "regex": {
          "pattern": "[a-z]",
          "flags": ""
        },
        "start": 910,
        "end": 917
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 919,
        "end": 922
      },
      "alternate": null,
      "start": 906,
      "end": 922
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": null,
        "raw": "/[a-z]/",
        "regex": {
          "pattern": "[a-z]",
          "flags": ""
        },
        "start": 930,
        "end": 937
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 939,
        "end": 942
      },
      "start": 923,
      "end": 942
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 946,
        "end": 949
      },
      "test": {
        "type": "Literal",
        "value": null,
        "raw": "/[a-z]/",
        "regex": {
          "pattern": "[a-z]",
          "flags": ""
        },
        "start": 955,
        "end": 962
      },
      "start": 943,
      "end": 963
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 969,
        "end": 971
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 973,
        "end": 976
      },
      "alternate": null,
      "start": 965,
      "end": 976
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 984,
        "end": 986
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 988,
        "end": 991
      },
      "start": 977,
      "end": 991
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 995,
        "end": 998
      },
      "test": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 1004,
        "end": 1006
      },
      "start": 992,
      "end": 1007
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1014,
            "end": 1015
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1017,
            "end": 1018
          }
        ],
        "start": 1013,
        "end": 1019
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1021,
        "end": 1024
      },
      "alternate": null,
      "start": 1009,
      "end": 1024
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1033,
            "end": 1034
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1036,
            "end": 1037
          }
        ],
        "start": 1032,
        "end": 1038
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1040,
        "end": 1043
      },
      "start": 1025,
      "end": 1043
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1047,
        "end": 1050
      },
      "test": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1057,
            "end": 1058
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1060,
            "end": 1061
          }
        ],
        "start": 1056,
        "end": 1062
      },
      "start": 1044,
      "end": 1063
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 1069,
        "end": 1071
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1073,
        "end": 1076
      },
      "alternate": null,
      "start": 1065,
      "end": 1076
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 1084,
        "end": 1086
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1088,
        "end": 1091
      },
      "start": 1077,
      "end": 1091
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1095,
        "end": 1098
      },
      "test": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 1104,
        "end": 1106
      },
      "start": 1092,
      "end": 1107
    },
    {
      "type": "IfStatement",
      "test": {
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
              "start": 1115,
              "end": 1116
            },
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1118,
              "end": 1119
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1115,
            "end": 1119
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1121,
              "end": 1122
            },
            "value": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 1124,
              "end": 1127
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1121,
            "end": 1127
          }
        ],
        "start": 1113,
        "end": 1129
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1131,
        "end": 1134
      },
      "alternate": null,
      "start": 1109,
      "end": 1134
    },
    {
      "type": "WhileStatement",
      "test": {
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
              "start": 1144,
              "end": 1145
            },
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1147,
              "end": 1148
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1144,
            "end": 1148
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1150,
              "end": 1151
            },
            "value": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 1153,
              "end": 1156
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1150,
            "end": 1156
          }
        ],
        "start": 1142,
        "end": 1158
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1160,
        "end": 1163
      },
      "start": 1135,
      "end": 1163
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1167,
        "end": 1170
      },
      "test": {
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
              "start": 1178,
              "end": 1179
            },
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1181,
              "end": 1182
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1178,
            "end": 1182
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1184,
              "end": 1185
            },
            "value": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 1187,
              "end": 1190
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1184,
            "end": 1190
          }
        ],
        "start": 1176,
        "end": 1192
      },
      "start": 1164,
      "end": 1193
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "Literal",
          "value": 43,
          "raw": "43",
          "start": 1205,
          "end": 1207
        },
        "id": null,
        "generator": false,
        "start": 1199,
        "end": 1207
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1209,
        "end": 1212
      },
      "alternate": null,
      "start": 1195,
      "end": 1212
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "Literal",
          "value": 43,
          "raw": "43",
          "start": 1226,
          "end": 1228
        },
        "id": null,
        "generator": false,
        "start": 1220,
        "end": 1228
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1230,
        "end": 1233
      },
      "start": 1213,
      "end": 1233
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1237,
        "end": 1240
      },
      "test": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "Literal",
          "value": 43,
          "raw": "43",
          "start": 1252,
          "end": 1254
        },
        "id": null,
        "generator": false,
        "start": 1246,
        "end": 1254
      },
      "start": 1234,
      "end": 1255
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 1265,
          "end": 1266
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1261,
        "end": 1268
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1270,
        "end": 1273
      },
      "alternate": null,
      "start": 1257,
      "end": 1273
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 1285,
          "end": 1286
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1281,
        "end": 1288
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1290,
        "end": 1293
      },
      "start": 1274,
      "end": 1293
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1297,
        "end": 1300
      },
      "test": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 1310,
          "end": 1311
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1306,
        "end": 1313
      },
      "start": 1294,
      "end": 1314
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 1324,
          "end": 1325
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1326,
                "end": 1327
              },
              "typeArguments": null,
              "start": 1326,
              "end": 1327
            }
          ],
          "start": 1325,
          "end": 1328
        },
        "arguments": [],
        "start": 1320,
        "end": 1330
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1332,
        "end": 1335
      },
      "alternate": null,
      "start": 1316,
      "end": 1335
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 1347,
          "end": 1348
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1349,
                "end": 1350
              },
              "typeArguments": null,
              "start": 1349,
              "end": 1350
            }
          ],
          "start": 1348,
          "end": 1351
        },
        "arguments": [],
        "start": 1343,
        "end": 1353
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1355,
        "end": 1358
      },
      "start": 1336,
      "end": 1358
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1362,
        "end": 1365
      },
      "test": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 1375,
          "end": 1376
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1377,
                "end": 1378
              },
              "typeArguments": null,
              "start": 1377,
              "end": 1378
            }
          ],
          "start": 1376,
          "end": 1379
        },
        "arguments": [],
        "start": 1371,
        "end": 1381
      },
      "start": 1359,
      "end": 1382
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
            "typeAnnotation": null,
            "start": 1402,
            "end": 1403
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1406,
            "end": 1410
          },
          "definite": false,
          "start": 1402,
          "end": 1410
        }
      ],
      "declare": false,
      "start": 1398,
      "end": 1411
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 1416,
        "end": 1417
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1419,
        "end": 1422
      },
      "alternate": null,
      "start": 1412,
      "end": 1422
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 1430,
        "end": 1431
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1433,
        "end": 1436
      },
      "start": 1423,
      "end": 1436
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1440,
        "end": 1443
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 1449,
        "end": 1450
      },
      "start": 1437,
      "end": 1451
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
            "typeAnnotation": null,
            "start": 1457,
            "end": 1458
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 1461,
            "end": 1465
          },
          "definite": false,
          "start": 1457,
          "end": 1465
        }
      ],
      "declare": false,
      "start": 1453,
      "end": 1466
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1471,
        "end": 1472
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1474,
        "end": 1477
      },
      "alternate": null,
      "start": 1467,
      "end": 1477
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1485,
        "end": 1486
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1488,
        "end": 1491
      },
      "start": 1478,
      "end": 1491
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1495,
        "end": 1498
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1504,
        "end": 1505
      },
      "start": 1492,
      "end": 1506
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
            "start": 1512,
            "end": 1513
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 1516,
            "end": 1525
          },
          "definite": false,
          "start": 1512,
          "end": 1525
        }
      ],
      "declare": false,
      "start": 1508,
      "end": 1526
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1531,
        "end": 1532
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1534,
        "end": 1537
      },
      "alternate": null,
      "start": 1527,
      "end": 1537
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1545,
        "end": 1546
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1548,
        "end": 1551
      },
      "start": 1538,
      "end": 1551
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1555,
        "end": 1558
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1564,
        "end": 1565
      },
      "start": 1552,
      "end": 1566
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
            "start": 1572,
            "end": 1573
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0.0",
            "start": 1576,
            "end": 1579
          },
          "definite": false,
          "start": 1572,
          "end": 1579
        }
      ],
      "declare": false,
      "start": 1568,
      "end": 1580
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1585,
        "end": 1586
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1588,
        "end": 1591
      },
      "alternate": null,
      "start": 1581,
      "end": 1591
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1599,
        "end": 1600
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1602,
        "end": 1605
      },
      "start": 1592,
      "end": 1605
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1609,
        "end": 1612
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1618,
        "end": 1619
      },
      "start": 1606,
      "end": 1620
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
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 1626,
            "end": 1627
          },
          "init": {
            "type": "Literal",
            "value": "a string",
            "raw": "'a string'",
            "start": 1630,
            "end": 1640
          },
          "definite": false,
          "start": 1626,
          "end": 1640
        }
      ],
      "declare": false,
      "start": 1622,
      "end": 1641
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null,
        "start": 1646,
        "end": 1647
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1649,
        "end": 1652
      },
      "alternate": null,
      "start": 1642,
      "end": 1652
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null,
        "start": 1660,
        "end": 1661
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1663,
        "end": 1666
      },
      "start": 1653,
      "end": 1666
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1670,
        "end": 1673
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null,
        "start": 1679,
        "end": 1680
      },
      "start": 1667,
      "end": 1681
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1687,
            "end": 1688
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1691,
            "end": 1693
          },
          "definite": false,
          "start": 1687,
          "end": 1693
        }
      ],
      "declare": false,
      "start": 1683,
      "end": 1694
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1699,
        "end": 1700
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1702,
        "end": 1705
      },
      "alternate": null,
      "start": 1695,
      "end": 1705
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1713,
        "end": 1714
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1716,
        "end": 1719
      },
      "start": 1706,
      "end": 1719
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1723,
        "end": 1726
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1732,
        "end": 1733
      },
      "start": 1720,
      "end": 1734
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
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 1740,
            "end": 1741
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/[a-z]/",
            "regex": {
              "pattern": "[a-z]",
              "flags": ""
            },
            "start": 1744,
            "end": 1751
          },
          "definite": false,
          "start": 1740,
          "end": 1751
        }
      ],
      "declare": false,
      "start": 1736,
      "end": 1751
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 1756,
        "end": 1757
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1759,
        "end": 1762
      },
      "alternate": null,
      "start": 1752,
      "end": 1762
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 1770,
        "end": 1771
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1773,
        "end": 1776
      },
      "start": 1763,
      "end": 1776
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1780,
        "end": 1783
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 1789,
        "end": 1790
      },
      "start": 1777,
      "end": 1791
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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 1797,
            "end": 1798
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 1801,
            "end": 1803
          },
          "definite": false,
          "start": 1797,
          "end": 1803
        }
      ],
      "declare": false,
      "start": 1793,
      "end": 1804
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null,
        "start": 1809,
        "end": 1810
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1812,
        "end": 1815
      },
      "alternate": null,
      "start": 1805,
      "end": 1815
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null,
        "start": 1823,
        "end": 1824
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1826,
        "end": 1829
      },
      "start": 1816,
      "end": 1829
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1833,
        "end": 1836
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null,
        "start": 1842,
        "end": 1843
      },
      "start": 1830,
      "end": 1844
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
            "typeAnnotation": null,
            "start": 1850,
            "end": 1851
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1855,
                "end": 1856
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1858,
                "end": 1859
              }
            ],
            "start": 1854,
            "end": 1860
          },
          "definite": false,
          "start": 1850,
          "end": 1860
        }
      ],
      "declare": false,
      "start": 1846,
      "end": 1861
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null,
        "start": 1866,
        "end": 1867
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1869,
        "end": 1872
      },
      "alternate": null,
      "start": 1862,
      "end": 1872
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null,
        "start": 1880,
        "end": 1881
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1883,
        "end": 1886
      },
      "start": 1873,
      "end": 1886
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1890,
        "end": 1893
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null,
        "start": 1899,
        "end": 1900
      },
      "start": 1887,
      "end": 1901
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
            "name": "j",
            "optional": false,
            "typeAnnotation": null,
            "start": 1907,
            "end": 1908
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 1911,
            "end": 1913
          },
          "definite": false,
          "start": 1907,
          "end": 1913
        }
      ],
      "declare": false,
      "start": 1903,
      "end": 1914
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "j",
        "optional": false,
        "typeAnnotation": null,
        "start": 1919,
        "end": 1920
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1922,
        "end": 1925
      },
      "alternate": null,
      "start": 1915,
      "end": 1925
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "j",
        "optional": false,
        "typeAnnotation": null,
        "start": 1933,
        "end": 1934
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1936,
        "end": 1939
      },
      "start": 1926,
      "end": 1939
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1943,
        "end": 1946
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "j",
        "optional": false,
        "typeAnnotation": null,
        "start": 1952,
        "end": 1953
      },
      "start": 1940,
      "end": 1954
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
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 1960,
            "end": 1961
          },
          "init": {
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
                  "start": 1966,
                  "end": 1967
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1969,
                  "end": 1970
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1966,
                "end": 1970
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1972,
                  "end": 1973
                },
                "value": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 1975,
                  "end": 1978
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1972,
                "end": 1978
              }
            ],
            "start": 1964,
            "end": 1980
          },
          "definite": false,
          "start": 1960,
          "end": 1980
        }
      ],
      "declare": false,
      "start": 1956,
      "end": 1981
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "k",
        "optional": false,
        "typeAnnotation": null,
        "start": 1986,
        "end": 1987
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1989,
        "end": 1992
      },
      "alternate": null,
      "start": 1982,
      "end": 1992
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "k",
        "optional": false,
        "typeAnnotation": null,
        "start": 2000,
        "end": 2001
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2003,
        "end": 2006
      },
      "start": 1993,
      "end": 2006
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2010,
        "end": 2013
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "k",
        "optional": false,
        "typeAnnotation": null,
        "start": 2019,
        "end": 2020
      },
      "start": 2007,
      "end": 2021
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 2032,
        "end": 2034
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
          "optional": true,
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
          "start": 2035,
          "end": 2045
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 2048,
            "end": 2049
          },
          "typeArguments": null,
          "start": 2048,
          "end": 2049
        },
        "start": 2046,
        "end": 2049
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2059,
              "end": 2063
            },
            "start": 2052,
            "end": 2064
          }
        ],
        "start": 2050,
        "end": 2066
      },
      "expression": false,
      "start": 2023,
      "end": 2066
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 2071,
          "end": 2073
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2071,
        "end": 2075
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 2077,
        "end": 2080
      },
      "alternate": null,
      "start": 2067,
      "end": 2080
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 2088,
          "end": 2090
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2088,
        "end": 2092
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2094,
        "end": 2097
      },
      "start": 2081,
      "end": 2097
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2101,
        "end": 2104
      },
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 2110,
          "end": 2112
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2110,
        "end": 2114
      },
      "start": 2098,
      "end": 2115
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 2121,
        "end": 2123
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 2125,
        "end": 2128
      },
      "alternate": null,
      "start": 2117,
      "end": 2128
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 2136,
        "end": 2138
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2140,
        "end": 2143
      },
      "start": 2129,
      "end": 2143
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2147,
        "end": 2150
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 2156,
        "end": 2158
      },
      "start": 2144,
      "end": 2159
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2161
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 18,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 33,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 41,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 60,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 76,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 82,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 93,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 99,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 102,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "valid",
    "start": 118,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 125,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 137,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 153,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "recurse",
    "start": 168,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "wrapped",
    "start": 187,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 200,
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
    "value": ">",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 207,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 221,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 230,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 237,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 239,
    "end": 245
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 246,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 252,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 261,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 267,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 276,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 286,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 295,
    "end": 296
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 297,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 304,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 316,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 322,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 329,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 347,
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
    "value": "string",
    "start": 353,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 365,
    "end": 366
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 372,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 379,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 388,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 394,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 403,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 410,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 412,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 421,
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
    "type": "Punctuator",
    "value": "}",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 438,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 450,
    "end": 451
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 456,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 463,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 481,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 485,
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
    "value": "}",
    "start": 497,
    "end": 498
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 504,
    "end": 510
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 511,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 520,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 526,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 535,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 542,
    "end": 543
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 544,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 553,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 567,
    "end": 568
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 582,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 585,
    "end": 586
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 586,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 594,
    "end": 595
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 596,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 602,
    "end": 603
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 603,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 611,
    "end": 612
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 613,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 618,
    "end": 619
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 619,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 624,
    "end": 625
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 625,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 629,
    "end": 630
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 632,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 635,
    "end": 636
  },
  {
    "type": "Null",
    "value": "null",
    "start": 636,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 644,
    "end": 645
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 646,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 652,
    "end": 653
  },
  {
    "type": "Null",
    "value": "null",
    "start": 653,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 661,
    "end": 662
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 663,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 668,
    "end": 669
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 669,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 674,
    "end": 675
  },
  {
    "type": "Null",
    "value": "null",
    "start": 675,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 679,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 682,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 686,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 699,
    "end": 700
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 701,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 708,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 721,
    "end": 722
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 723,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 728,
    "end": 729
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 729,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 735,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 744,
    "end": 745
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 747,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 750,
    "end": 751
  },
  {
    "type": "Numeric",
    "value": "0.0",
    "start": 751,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 758,
    "end": 759
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 760,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 766,
    "end": 767
  },
  {
    "type": "Numeric",
    "value": "0.0",
    "start": 767,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 774,
    "end": 775
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 776,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 781,
    "end": 782
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 782,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 787,
    "end": 788
  },
  {
    "type": "Numeric",
    "value": "0.0",
    "start": 788,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 791,
    "end": 792
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 794,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 797,
    "end": 798
  },
  {
    "type": "String",
    "value": "'a string'",
    "start": 798,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 812,
    "end": 813
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 814,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 820,
    "end": 821
  },
  {
    "type": "String",
    "value": "'a string'",
    "start": 821,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 835,
    "end": 836
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 837,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 842,
    "end": 843
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 843,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 848,
    "end": 849
  },
  {
    "type": "String",
    "value": "'a string'",
    "start": 849,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 859,
    "end": 860
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 862,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 865,
    "end": 866
  },
  {
    "type": "String",
    "value": "''",
    "start": 866,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 872,
    "end": 873
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 874,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 880,
    "end": 881
  },
  {
    "type": "String",
    "value": "''",
    "start": 881,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 887,
    "end": 888
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 889,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 894,
    "end": 895
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 895,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 900,
    "end": 901
  },
  {
    "type": "String",
    "value": "''",
    "start": 901,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 903,
    "end": 904
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 906,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 909,
    "end": 910
  },
  {
    "type": "RegularExpression",
    "value": "/[a-z]/",
    "regex": {
      "flags": "",
      "pattern": "[a-z]"
    },
    "start": 910,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 921,
    "end": 922
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 923,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 929,
    "end": 930
  },
  {
    "type": "RegularExpression",
    "value": "/[a-z]/",
    "regex": {
      "flags": "",
      "pattern": "[a-z]"
    },
    "start": 930,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 941,
    "end": 942
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 943,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 948,
    "end": 949
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 949,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 954,
    "end": 955
  },
  {
    "type": "RegularExpression",
    "value": "/[a-z]/",
    "regex": {
      "flags": "",
      "pattern": "[a-z]"
    },
    "start": 955,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 962,
    "end": 963
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 965,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 975,
    "end": 976
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 977,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 990,
    "end": 991
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 992,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 997,
    "end": 998
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 998,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1009,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1025,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1044,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1050,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1065,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1077,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1092,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1098,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1109,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1124,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1135,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1153,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1164,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1170,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1187,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1195,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1202,
    "end": 1204
  },
  {
    "type": "Numeric",
    "value": "43",
    "start": 1205,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1213,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1223,
    "end": 1225
  },
  {
    "type": "Numeric",
    "value": "43",
    "start": 1226,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1234,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1240,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1249,
    "end": 1251
  },
  {
    "type": "Numeric",
    "value": "43",
    "start": 1252,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1257,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1261,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1274,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1281,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1294,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1300,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1306,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1316,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1320,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1336,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1343,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1359,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1365,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1371,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1398,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1406,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1412,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1423,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1437,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1443,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1453,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1461,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1467,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1478,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1492,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1498,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1508,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1516,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1527,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1538,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1552,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1558,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1568,
    "end": 1571
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Numeric",
    "value": "0.0",
    "start": 1576,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1581,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1592,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1606,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1612,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1622,
    "end": 1625
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "String",
    "value": "'a string'",
    "start": 1630,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1642,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1653,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1667,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1673,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1683,
    "end": 1686
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "String",
    "value": "''",
    "start": 1691,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1695,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1706,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1720,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1726,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1736,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "RegularExpression",
    "value": "/[a-z]/",
    "regex": {
      "flags": "",
      "pattern": "[a-z]"
    },
    "start": 1744,
    "end": 1751
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1752,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1763,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1777,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1783,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1793,
    "end": 1796
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1805,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1816,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1830,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1836,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1846,
    "end": 1849
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1862,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1873,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1887,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1893,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1903,
    "end": 1906
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1915,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1926,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1940,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1946,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1956,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1975,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1982,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1993,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 2007,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 2013,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2023,
    "end": 2031
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 2032,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": ")",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2052,
    "end": 2058
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2059,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2067,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 2071,
    "end": 2073
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ")",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 2081,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 2088,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 2098,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 2104,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2109,
    "end": 2110
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 2110,
    "end": 2112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2117,
    "end": 2119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 2121,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 2129,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 2136,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 2144,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 2150,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 2156,
    "end": 2158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2158,
    "end": 2159
  }
]
```
