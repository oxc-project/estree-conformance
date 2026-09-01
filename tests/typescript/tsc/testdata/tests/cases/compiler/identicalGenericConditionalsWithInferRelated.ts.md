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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
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
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 11,
            "end": 12
          }
        ],
        "start": 10,
        "end": 13
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 19,
                "end": 20
              },
              "typeArguments": null,
              "start": 19,
              "end": 20
            },
            "start": 17,
            "end": 20
          },
          "start": 14,
          "end": 20
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cond1",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 38
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 41,
                  "end": 42
                },
                "typeArguments": null,
                "start": 41,
                "end": 42
              },
              "extendsType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 58,
                        "end": 59
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 58,
                      "end": 59
                    },
                    "start": 52,
                    "end": 59
                  }
                ],
                "start": 51,
                "end": 60
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 63,
                  "end": 64
                },
                "typeArguments": null,
                "start": 63,
                "end": 64
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 67,
                "end": 72
              },
              "start": 41,
              "end": 72
            },
            "declare": false,
            "start": 28,
            "end": 73
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cond2",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 88
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 92
                },
                "typeArguments": null,
                "start": 91,
                "end": 92
              },
              "extendsType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 108,
                        "end": 109
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 108,
                      "end": 109
                    },
                    "start": 102,
                    "end": 109
                  }
                ],
                "start": 101,
                "end": 110
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 114
                },
                "typeArguments": null,
                "start": 113,
                "end": 114
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 117,
                "end": 122
              },
              "start": 91,
              "end": 122
            },
            "declare": false,
            "start": 78,
            "end": 123
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Cond1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 136,
                        "end": 141
                      },
                      "typeArguments": null,
                      "start": 136,
                      "end": 141
                    },
                    "start": 134,
                    "end": 141
                  },
                  "start": 133,
                  "end": 141
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 144,
                    "end": 148
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 152,
                    "end": 155
                  },
                  "start": 144,
                  "end": 155
                },
                "definite": false,
                "start": 133,
                "end": 155
              }
            ],
            "declare": false,
            "start": 129,
            "end": 156
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Cond2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 168,
                        "end": 173
                      },
                      "typeArguments": null,
                      "start": 168,
                      "end": 173
                    },
                    "start": 166,
                    "end": 173
                  },
                  "start": 165,
                  "end": 173
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 176,
                    "end": 180
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 184,
                    "end": 187
                  },
                  "start": 176,
                  "end": 187
                },
                "definite": false,
                "start": 165,
                "end": 187
              }
            ],
            "declare": false,
            "start": 161,
            "end": 188
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
                "start": 193,
                "end": 194
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 197,
                "end": 198
              },
              "start": 193,
              "end": 198
            },
            "directive": null,
            "start": 193,
            "end": 199
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 229
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 232,
                "end": 233
              },
              "start": 228,
              "end": 233
            },
            "directive": null,
            "start": 228,
            "end": 234
          }
        ],
        "start": 22,
        "end": 260
      },
      "expression": false,
      "start": 0,
      "end": 260
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 341,
          "end": 352
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
                "start": 353,
                "end": 354
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 353,
              "end": 354
            }
          ],
          "start": 352,
          "end": 355
        },
        "typeAnnotation": {
          "type": "TSConstructorType",
          "abstract": false,
          "typeParameters": null,
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
                "start": 366,
                "end": 370
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 372,
                    "end": 375
                  },
                  "start": 372,
                  "end": 377
                },
                "start": 370,
                "end": 377
              },
              "value": null,
              "start": 363,
              "end": 377
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
                "start": 382,
                "end": 383
              },
              "typeArguments": null,
              "start": 382,
              "end": 383
            },
            "start": 379,
            "end": 383
          },
          "start": 358,
          "end": 383
        },
        "declare": false,
        "start": 336,
        "end": 383
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 329,
      "end": 383
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MappedResult",
          "optional": false,
          "typeAnnotation": null,
          "start": 396,
          "end": 408
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
                "start": 409,
                "end": 410
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 409,
              "end": 410
            }
          ],
          "start": 408,
          "end": 411
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
              "start": 418,
              "end": 419
            },
            "typeArguments": null,
            "start": 418,
            "end": 419
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Boolean",
              "optional": false,
              "typeAnnotation": null,
              "start": 428,
              "end": 435
            },
            "typeArguments": null,
            "start": 428,
            "end": 435
          },
          "trueType": {
            "type": "TSBooleanKeyword",
            "start": 438,
            "end": 445
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
                "start": 452,
                "end": 453
              },
              "typeArguments": null,
              "start": 452,
              "end": 453
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 462,
                "end": 468
              },
              "typeArguments": null,
              "start": 462,
              "end": 468
            },
            "trueType": {
              "type": "TSNumberKeyword",
              "start": 471,
              "end": 477
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
                  "start": 484,
                  "end": 485
                },
                "typeArguments": null,
                "start": 484,
                "end": 485
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "String",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 494,
                  "end": 500
                },
                "typeArguments": null,
                "start": 494,
                "end": 500
              },
              "trueType": {
                "type": "TSStringKeyword",
                "start": 503,
                "end": 509
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 516,
                  "end": 517
                },
                "typeArguments": null,
                "start": 516,
                "end": 517
              },
              "start": 484,
              "end": 517
            },
            "start": 452,
            "end": 517
          },
          "start": 418,
          "end": 517
        },
        "declare": false,
        "start": 391,
        "end": 517
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 384,
      "end": 517
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 530,
        "end": 531
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "decode",
              "optional": false,
              "typeAnnotation": null,
              "start": 538,
              "end": 544
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 545,
                    "end": 546
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 555,
                      "end": 566
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 567,
                          "end": 570
                        }
                      ],
                      "start": 566,
                      "end": 571
                    },
                    "start": 555,
                    "end": 571
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 545,
                  "end": 571
                }
              ],
              "start": 544,
              "end": 572
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ctor",
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
                      "start": 579,
                      "end": 580
                    },
                    "typeArguments": null,
                    "start": 579,
                    "end": 580
                  },
                  "start": 577,
                  "end": 580
                },
                "start": 573,
                "end": 580
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MappedResult",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 583,
                  "end": 595
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 596,
                          "end": 597
                        },
                        "typeArguments": null,
                        "start": 596,
                        "end": 597
                      },
                      "extendsType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Constructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 606,
                          "end": 617
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSInferType",
                              "typeParameter": {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 624,
                                  "end": 625
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 624,
                                "end": 625
                              },
                              "start": 618,
                              "end": 625
                            }
                          ],
                          "start": 617,
                          "end": 626
                        },
                        "start": 606,
                        "end": 626
                      },
                      "trueType": {
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
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 633,
                        "end": 638
                      },
                      "start": 596,
                      "end": 638
                    }
                  ],
                  "start": 595,
                  "end": 639
                },
                "start": 583,
                "end": 639
              },
              "start": 581,
              "end": 639
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 538,
            "end": 639
          }
        ],
        "start": 532,
        "end": 641
      },
      "declare": false,
      "start": 520,
      "end": 641
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 649,
        "end": 650
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
            "name": "X",
            "optional": false,
            "typeAnnotation": null,
            "start": 662,
            "end": 663
          },
          "typeArguments": null,
          "start": 662,
          "end": 663
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "decode",
              "optional": false,
              "typeAnnotation": null,
              "start": 670,
              "end": 676
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 677,
                      "end": 678
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Constructor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 687,
                        "end": 698
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 699,
                            "end": 702
                          }
                        ],
                        "start": 698,
                        "end": 703
                      },
                      "start": 687,
                      "end": 703
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 677,
                    "end": 703
                  }
                ],
                "start": 676,
                "end": 704
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ctor",
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
                        "start": 711,
                        "end": 712
                      },
                      "typeArguments": null,
                      "start": 711,
                      "end": 712
                    },
                    "start": 709,
                    "end": 712
                  },
                  "start": 705,
                  "end": 712
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MappedResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 715,
                    "end": 727
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSConditionalType",
                        "checkType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 728,
                            "end": 729
                          },
                          "typeArguments": null,
                          "start": 728,
                          "end": 729
                        },
                        "extendsType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Constructor",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 738,
                            "end": 749
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSInferType",
                                "typeParameter": {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 756,
                                    "end": 757
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 756,
                                  "end": 757
                                },
                                "start": 750,
                                "end": 757
                              }
                            ],
                            "start": 749,
                            "end": 758
                          },
                          "start": 738,
                          "end": 758
                        },
                        "trueType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 761,
                            "end": 762
                          },
                          "typeArguments": null,
                          "start": 761,
                          "end": 762
                        },
                        "falseType": {
                          "type": "TSNeverKeyword",
                          "start": 765,
                          "end": 770
                        },
                        "start": 728,
                        "end": 770
                      }
                    ],
                    "start": 727,
                    "end": 771
                  },
                  "start": 715,
                  "end": 771
                },
                "start": 713,
                "end": 771
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 792,
                        "end": 797
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 788,
                      "end": 799
                    },
                    "start": 782,
                    "end": 799
                  }
                ],
                "start": 772,
                "end": 805
              },
              "expression": false,
              "start": 676,
              "end": 805
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 670,
            "end": 805
          }
        ],
        "start": 664,
        "end": 807
      },
      "abstract": false,
      "declare": false,
      "start": 643,
      "end": 807
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 807
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 14,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 28,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "Cond1",
    "start": 33,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 43,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 52,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 67,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 78,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "Cond2",
    "start": 83,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 93,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 102,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 117,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 129,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "Cond1",
    "start": 136,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 142,
    "end": 143
  },
  {
    "type": "Null",
    "value": "null",
    "start": 144,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 149,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 152,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 161,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "Cond2",
    "start": 168,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 174,
    "end": 175
  },
  {
    "type": "Null",
    "value": "null",
    "start": 176,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 181,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 184,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 195,
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
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 329,
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
    "value": "Constructor",
    "start": 341,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 358,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 363,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 366,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 372,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 379,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 384,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 391,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "MappedResult",
    "start": 396,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "=",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 420,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "Boolean",
    "start": 428,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 438,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 452,
    "end": 453
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 454,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 462,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 471,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 484,
    "end": 485
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 486,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 494,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 503,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 516,
    "end": 517
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 520,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "decode",
    "start": 538,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 545,
    "end": 546
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 547,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 555,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 567,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "ctor",
    "start": 573,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "MappedResult",
    "start": 583,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 596,
    "end": 597
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 598,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 606,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 618,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 633,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 640,
    "end": 641
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 643,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 649,
    "end": 650
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 651,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "decode",
    "start": 670,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 677,
    "end": 678
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 679,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 687,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 699,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "(",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "ctor",
    "start": 705,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "MappedResult",
    "start": 715,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 728,
    "end": 729
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 730,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 738,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 750,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 765,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Keyword",
    "value": "throw",
    "start": 782,
    "end": 787
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 788,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 792,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 806,
    "end": 807
  }
]
```
