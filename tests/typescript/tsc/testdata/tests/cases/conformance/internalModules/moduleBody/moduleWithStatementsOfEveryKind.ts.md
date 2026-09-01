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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 25
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
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 28,
                    "end": 29
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 31,
                      "end": 37
                    },
                    "start": 29,
                    "end": 37
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
                  "start": 28,
                  "end": 37
                }
              ],
              "start": 26,
              "end": 39
            },
            "abstract": false,
            "declare": false,
            "start": 18,
            "end": 39
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "AA",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 52
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
                    "start": 53,
                    "end": 54
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 53,
                  "end": 54
                }
              ],
              "start": 52,
              "end": 55
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
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 58,
                    "end": 59
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
                        "start": 61,
                        "end": 62
                      },
                      "typeArguments": null,
                      "start": 61,
                      "end": 62
                    },
                    "start": 59,
                    "end": 62
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
                  "start": 58,
                  "end": 62
                }
              ],
              "start": 56,
              "end": 64
            },
            "abstract": false,
            "declare": false,
            "start": 44,
            "end": 64
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
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
                    "start": 83,
                    "end": 85
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 87,
                      "end": 93
                    },
                    "start": 85,
                    "end": 93
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 83,
                  "end": 93
                }
              ],
              "start": 81,
              "end": 95
            },
            "declare": false,
            "start": 69,
            "end": 95
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 108
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "AA",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 119
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 120,
                  "end": 126
                }
              ],
              "start": 119,
              "end": 127
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 139,
                  "end": 140
                },
                "typeArguments": null,
                "start": 139,
                "end": 140
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
                    "start": 143,
                    "end": 145
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 147,
                      "end": 153
                    },
                    "start": 145,
                    "end": 153
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
                  "start": 143,
                  "end": 153
                }
              ],
              "start": 141,
              "end": 155
            },
            "abstract": false,
            "declare": false,
            "start": 101,
            "end": 155
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "BB",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 168
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
                    "start": 169,
                    "end": 170
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 169,
                  "end": 170
                }
              ],
              "start": 168,
              "end": 171
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 181
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
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 192,
                    "end": 194
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 196,
                      "end": 202
                    },
                    "start": 194,
                    "end": 202
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
                  "end": 203
                }
              ],
              "start": 182,
              "end": 209
            },
            "abstract": false,
            "declare": false,
            "start": 160,
            "end": 209
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Module",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 231
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 248,
                    "end": 249
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
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 252,
                          "end": 253
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 255,
                            "end": 261
                          },
                          "start": 253,
                          "end": 261
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
                        "start": 252,
                        "end": 261
                      }
                    ],
                    "start": 250,
                    "end": 263
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 242,
                  "end": 263
                }
              ],
              "start": 232,
              "end": 269
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 215,
            "end": 269
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Color",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 284
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Blue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 287,
                    "end": 291
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 287,
                  "end": 291
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Red",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 293,
                    "end": 296
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 293,
                  "end": 296
                }
              ],
              "start": 285,
              "end": 298
            },
            "const": false,
            "declare": false,
            "start": 274,
            "end": 298
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 307,
                  "end": 308
                },
                "init": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 311,
                  "end": 313
                },
                "definite": false,
                "start": 307,
                "end": 313
              }
            ],
            "declare": false,
            "start": 303,
            "end": 314
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 329
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
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
                    "start": 333,
                    "end": 339
                  },
                  "start": 331,
                  "end": 339
                },
                "start": 330,
                "end": 339
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 342,
                "end": 348
              },
              "start": 340,
              "end": 348
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 366,
                    "end": 367
                  },
                  "start": 359,
                  "end": 368
                }
              ],
              "start": 349,
              "end": 374
            },
            "expression": false,
            "start": 319,
            "end": 374
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
                  "name": "array",
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
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 390,
                          "end": 391
                        },
                        "typeArguments": null,
                        "start": 390,
                        "end": 391
                      },
                      "start": 390,
                      "end": 393
                    },
                    "start": 388,
                    "end": 393
                  },
                  "start": 383,
                  "end": 393
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 396,
                  "end": 400
                },
                "definite": false,
                "start": 383,
                "end": 400
              }
            ],
            "declare": false,
            "start": 379,
            "end": 401
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
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 410,
                  "end": 412
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
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
                          "start": 419,
                          "end": 425
                        },
                        "start": 417,
                        "end": 425
                      },
                      "start": 416,
                      "end": 425
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Literal",
                            "value": "hello ",
                            "raw": "'hello '",
                            "start": 447,
                            "end": 455
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 458,
                            "end": 459
                          },
                          "start": 447,
                          "end": 459
                        },
                        "start": 440,
                        "end": 460
                      }
                    ],
                    "start": 430,
                    "end": 466
                  },
                  "id": null,
                  "generator": false,
                  "start": 415,
                  "end": 466
                },
                "definite": false,
                "start": 410,
                "end": 466
              }
            ],
            "declare": false,
            "start": 406,
            "end": 466
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
                  "name": "ol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 475,
                  "end": 477
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 482,
                        "end": 483
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "'hello'",
                        "start": 485,
                        "end": 492
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 482,
                      "end": 492
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 494,
                        "end": 496
                      },
                      "value": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 498,
                        "end": 499
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 494,
                      "end": 499
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isvalid",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 501,
                        "end": 508
                      },
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 510,
                        "end": 514
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 501,
                      "end": 514
                    }
                  ],
                  "start": 480,
                  "end": 516
                },
                "definite": false,
                "start": 475,
                "end": 516
              }
            ],
            "declare": false,
            "start": 471,
            "end": 517
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "DC",
              "optional": false,
              "typeAnnotation": null,
              "start": 537,
              "end": 539
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 557,
                    "end": 558
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 560,
                      "end": 566
                    },
                    "start": 558,
                    "end": 566
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 550,
                  "end": 567
                }
              ],
              "start": 540,
              "end": 573
            },
            "abstract": false,
            "declare": true,
            "start": 523,
            "end": 573
          }
        ],
        "start": 12,
        "end": 575
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 575
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 587,
        "end": 588
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
                "start": 608,
                "end": 609
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
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 612,
                      "end": 613
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 615,
                        "end": 621
                      },
                      "start": 613,
                      "end": 621
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
                    "start": 612,
                    "end": 621
                  }
                ],
                "start": 610,
                "end": 623
              },
              "abstract": false,
              "declare": false,
              "start": 602,
              "end": 623
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 595,
            "end": 623
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "AA",
                "optional": false,
                "typeAnnotation": null,
                "start": 641,
                "end": 643
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
                      "start": 644,
                      "end": 645
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 644,
                    "end": 645
                  }
                ],
                "start": 643,
                "end": 646
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
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 649,
                      "end": 650
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
                          "start": 652,
                          "end": 653
                        },
                        "typeArguments": null,
                        "start": 652,
                        "end": 653
                      },
                      "start": 650,
                      "end": 653
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
                    "start": 649,
                    "end": 653
                  }
                ],
                "start": 647,
                "end": 655
              },
              "abstract": false,
              "declare": false,
              "start": 635,
              "end": 655
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 628,
            "end": 655
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 677,
                "end": 678
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
                      "start": 681,
                      "end": 683
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 685,
                        "end": 691
                      },
                      "start": 683,
                      "end": 691
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 681,
                    "end": 691
                  }
                ],
                "start": 679,
                "end": 693
              },
              "declare": false,
              "start": 667,
              "end": 693
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 660,
            "end": 693
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 712,
                "end": 713
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "AA",
                "optional": false,
                "typeAnnotation": null,
                "start": 722,
                "end": 724
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 725,
                    "end": 731
                  }
                ],
                "start": 724,
                "end": 732
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 744,
                    "end": 745
                  },
                  "typeArguments": null,
                  "start": 744,
                  "end": 745
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
                      "start": 748,
                      "end": 750
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 752,
                        "end": 758
                      },
                      "start": 750,
                      "end": 758
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
                    "start": 748,
                    "end": 758
                  }
                ],
                "start": 746,
                "end": 760
              },
              "abstract": false,
              "declare": false,
              "start": 706,
              "end": 760
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 699,
            "end": 760
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "BB",
                "optional": false,
                "typeAnnotation": null,
                "start": 778,
                "end": 780
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
                      "start": 781,
                      "end": 782
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 781,
                    "end": 782
                  }
                ],
                "start": 780,
                "end": 783
              },
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 792,
                "end": 793
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
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 804,
                      "end": 806
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 808,
                        "end": 814
                      },
                      "start": 806,
                      "end": 814
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
                    "start": 804,
                    "end": 815
                  }
                ],
                "start": 794,
                "end": 821
              },
              "abstract": false,
              "declare": false,
              "start": 772,
              "end": 821
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 765,
            "end": 821
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Module",
                "optional": false,
                "typeAnnotation": null,
                "start": 844,
                "end": 850
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 867,
                      "end": 868
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
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 871,
                            "end": 872
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 874,
                              "end": 880
                            },
                            "start": 872,
                            "end": 880
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
                          "start": 871,
                          "end": 880
                        }
                      ],
                      "start": 869,
                      "end": 882
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 861,
                    "end": 882
                  }
                ],
                "start": 851,
                "end": 888
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 834,
              "end": 888
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 827,
            "end": 888
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Color",
                "optional": false,
                "typeAnnotation": null,
                "start": 905,
                "end": 910
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Blue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 913,
                      "end": 917
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 913,
                    "end": 917
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Red",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 919,
                      "end": 922
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 919,
                    "end": 922
                  }
                ],
                "start": 911,
                "end": 924
              },
              "const": false,
              "declare": false,
              "start": 900,
              "end": 924
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 893,
            "end": 924
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 940,
                    "end": 941
                  },
                  "init": {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 944,
                    "end": 946
                  },
                  "definite": false,
                  "start": 940,
                  "end": 946
                }
              ],
              "declare": false,
              "start": 936,
              "end": 947
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 929,
            "end": 947
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 968,
                "end": 969
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                      "start": 973,
                      "end": 979
                    },
                    "start": 971,
                    "end": 979
                  },
                  "start": 970,
                  "end": 979
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 982,
                  "end": 988
                },
                "start": 980,
                "end": 988
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1006,
                      "end": 1007
                    },
                    "start": 999,
                    "end": 1008
                  }
                ],
                "start": 989,
                "end": 1014
              },
              "expression": false,
              "start": 959,
              "end": 1014
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 952,
            "end": 1014
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "array",
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
                            "name": "I",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1037,
                            "end": 1038
                          },
                          "typeArguments": null,
                          "start": 1037,
                          "end": 1038
                        },
                        "start": 1037,
                        "end": 1040
                      },
                      "start": 1035,
                      "end": 1040
                    },
                    "start": 1030,
                    "end": 1040
                  },
                  "init": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 1043,
                    "end": 1047
                  },
                  "definite": false,
                  "start": 1030,
                  "end": 1047
                }
              ],
              "declare": false,
              "start": 1026,
              "end": 1048
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1019,
            "end": 1048
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1064,
                    "end": 1066
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
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
                            "start": 1073,
                            "end": 1079
                          },
                          "start": 1071,
                          "end": 1079
                        },
                        "start": 1070,
                        "end": 1079
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Literal",
                              "value": "hello ",
                              "raw": "'hello '",
                              "start": 1101,
                              "end": 1109
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1112,
                              "end": 1113
                            },
                            "start": 1101,
                            "end": 1113
                          },
                          "start": 1094,
                          "end": 1114
                        }
                      ],
                      "start": 1084,
                      "end": 1120
                    },
                    "id": null,
                    "generator": false,
                    "start": 1069,
                    "end": 1120
                  },
                  "definite": false,
                  "start": 1064,
                  "end": 1120
                }
              ],
              "declare": false,
              "start": 1060,
              "end": 1120
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1053,
            "end": 1120
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1136,
                    "end": 1138
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
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1143,
                          "end": 1144
                        },
                        "value": {
                          "type": "Literal",
                          "value": "hello",
                          "raw": "'hello'",
                          "start": 1146,
                          "end": 1153
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1143,
                        "end": 1153
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "id",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1155,
                          "end": 1157
                        },
                        "value": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 1159,
                          "end": 1160
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1155,
                        "end": 1160
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isvalid",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1162,
                          "end": 1169
                        },
                        "value": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 1171,
                          "end": 1175
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1162,
                        "end": 1175
                      }
                    ],
                    "start": 1141,
                    "end": 1177
                  },
                  "definite": false,
                  "start": 1136,
                  "end": 1177
                }
              ],
              "declare": false,
              "start": 1132,
              "end": 1178
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1125,
            "end": 1178
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "DC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1205,
                "end": 1207
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1225,
                      "end": 1226
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1228,
                        "end": 1234
                      },
                      "start": 1226,
                      "end": 1234
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 1218,
                    "end": 1235
                  }
                ],
                "start": 1208,
                "end": 1241
              },
              "abstract": false,
              "declare": true,
              "start": 1191,
              "end": 1241
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1184,
            "end": 1241
          }
        ],
        "start": 589,
        "end": 1243
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 577,
      "end": 1243
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1243
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "type": "Keyword",
    "value": "class",
    "start": 18,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 24,
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
    "value": "s",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 44,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 50,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 69,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 83,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 87,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 101,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 109,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 117,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 120,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 128,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 143,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 147,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 160,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "BB",
    "start": 166,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 172,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 192,
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
    "value": "number",
    "start": 196,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 215,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "Module",
    "start": 225,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 242,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 255,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 274,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 279,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "Blue",
    "start": 287,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "Red",
    "start": 293,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 297,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 303,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 309,
    "end": 310
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 311,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 319,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "value": "string",
    "start": 333,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 342,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 349,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 359,
    "end": 365
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 379,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 383,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 394,
    "end": 395
  },
  {
    "type": "Null",
    "value": "null",
    "start": 396,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 406,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 410,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 419,
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
    "value": "=>",
    "start": 427,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 430,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 440,
    "end": 446
  },
  {
    "type": "String",
    "value": "'hello '",
    "start": 447,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "type": "Punctuator",
    "value": "}",
    "start": 465,
    "end": 466
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 471,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "ol",
    "start": 475,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 483,
    "end": 484
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 485,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 494,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "isvalid",
    "start": 501,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 508,
    "end": 509
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 510,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 523,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 531,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "DC",
    "start": 537,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 540,
    "end": 541
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 550,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 560,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 577,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 589,
    "end": 590
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 595,
    "end": 601
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 602,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 615,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 622,
    "end": 623
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 628,
    "end": 634
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 635,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 641,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "{",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 654,
    "end": 655
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 660,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 667,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 681,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 685,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 692,
    "end": 693
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 699,
    "end": 705
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 706,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 712,
    "end": 713
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 714,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 722,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 725,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 731,
    "end": 732
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 733,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 748,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 752,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 759,
    "end": 760
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 765,
    "end": 771
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 772,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "BB",
    "start": 778,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 782,
    "end": 783
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 784,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 804,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 808,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 820,
    "end": 821
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 827,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 834,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "Module",
    "start": 844,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 851,
    "end": 852
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 861,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 874,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 887,
    "end": 888
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 893,
    "end": 899
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 900,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 905,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "Blue",
    "start": 913,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "Red",
    "start": 919,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 923,
    "end": 924
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 929,
    "end": 935
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 936,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 942,
    "end": 943
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 944,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 946,
    "end": 947
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 952,
    "end": 958
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 959,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 973,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 980,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 982,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 989,
    "end": 990
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 999,
    "end": 1005
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1019,
    "end": 1025
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1026,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 1030,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1043,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1053,
    "end": 1059
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1060,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 1064,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1073,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1081,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1094,
    "end": 1100
  },
  {
    "type": "String",
    "value": "'hello '",
    "start": 1101,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1125,
    "end": 1131
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1132,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "ol",
    "start": 1136,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1146,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1155,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "isvalid",
    "start": 1162,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1171,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1184,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1191,
    "end": 1198
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1199,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "DC",
    "start": 1205,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1218,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1228,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1242,
    "end": 1243
  }
]
```
