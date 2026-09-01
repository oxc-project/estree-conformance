__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "UnrollOnHover",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 25
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null,
                "start": 26,
                "end": 27
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 36,
                "end": 42
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 26,
              "end": 42
            }
          ],
          "start": 25,
          "end": 43
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 47
            },
            "typeArguments": null,
            "start": 46,
            "end": 47
          },
          "extendsType": {
            "type": "TSObjectKeyword",
            "start": 56,
            "end": 62
          },
          "trueType": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 73
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 84
                },
                "typeArguments": null,
                "start": 83,
                "end": 84
              },
              "start": 77,
              "end": 84
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 88
                },
                "typeArguments": null,
                "start": 87,
                "end": 88
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 90
                },
                "typeArguments": null,
                "start": 89,
                "end": 90
              },
              "start": 87,
              "end": 91
            },
            "optional": false,
            "readonly": null,
            "start": 69,
            "end": 94
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 101,
            "end": 106
          },
          "start": 46,
          "end": 106
        },
        "declare": false,
        "start": 7,
        "end": 107
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 107
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Schema",
          "optional": false,
          "typeAnnotation": null,
          "start": 122,
          "end": 128
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 137
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 138,
                "end": 144
              },
              {
                "type": "TSUnknownKeyword",
                "start": 146,
                "end": 153
              }
            ],
            "start": 137,
            "end": 154
          },
          "start": 131,
          "end": 154
        },
        "declare": false,
        "start": 117,
        "end": 155
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 110,
      "end": 155
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Table",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 167
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
              "start": 168,
              "end": 169
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Schema",
                "optional": false,
                "typeAnnotation": null,
                "start": 178,
                "end": 184
              },
              "typeArguments": null,
              "start": 178,
              "end": 184
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 168,
            "end": 184
          }
        ],
        "start": 167,
        "end": 185
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
              "name": "__schema",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 201
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 204,
                  "end": 205
                },
                "typeArguments": null,
                "start": 204,
                "end": 205
              },
              "start": 202,
              "end": 205
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 193,
            "end": 206
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getRows",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 265
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
                      "start": 266,
                      "end": 267
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 282,
                          "end": 283
                        },
                        "typeArguments": null,
                        "start": 282,
                        "end": 283
                      },
                      "start": 276,
                      "end": 283
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 266,
                    "end": 283
                  }
                ],
                "start": 265,
                "end": 284
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 288,
                    "end": 293
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "UnrollOnHover",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 294,
                          "end": 307
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Pick",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 308,
                                "end": 312
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
                                      "start": 313,
                                      "end": 314
                                    },
                                    "typeArguments": null,
                                    "start": 313,
                                    "end": 314
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "C",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 316,
                                      "end": 317
                                    },
                                    "typeArguments": null,
                                    "start": 316,
                                    "end": 317
                                  }
                                ],
                                "start": 312,
                                "end": 318
                              },
                              "start": 308,
                              "end": 318
                            }
                          ],
                          "start": 307,
                          "end": 319
                        },
                        "start": 294,
                        "end": 319
                      }
                    ],
                    "start": 293,
                    "end": 320
                  },
                  "start": 288,
                  "end": 320
                },
                "start": 286,
                "end": 320
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSNonNullExpression",
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 338,
                        "end": 342
                      },
                      "start": 338,
                      "end": 343
                    },
                    "start": 331,
                    "end": 343
                  }
                ],
                "start": 321,
                "end": 349
              },
              "expression": false,
              "start": 265,
              "end": 349
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 258,
            "end": 349
          }
        ],
        "start": 187,
        "end": 351
      },
      "abstract": false,
      "declare": false,
      "start": 156,
      "end": 351
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ColumnSelectViewImp",
        "optional": false,
        "typeAnnotation": null,
        "start": 359,
        "end": 378
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
              "start": 379,
              "end": 380
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Schema",
                "optional": false,
                "typeAnnotation": null,
                "start": 389,
                "end": 395
              },
              "typeArguments": null,
              "start": 389,
              "end": 395
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 379,
            "end": 395
          }
        ],
        "start": 378,
        "end": 396
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Table",
        "optional": false,
        "typeAnnotation": null,
        "start": 405,
        "end": 410
      },
      "superTypeArguments": {
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
              "start": 411,
              "end": 412
            },
            "typeArguments": null,
            "start": 411,
            "end": 412
          }
        ],
        "start": 410,
        "end": 413
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 414,
        "end": 417
      },
      "abstract": false,
      "declare": false,
      "start": 353,
      "end": 417
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
            "name": "ColumnSelectView1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 450,
                        "end": 451
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Schema",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 460,
                          "end": 466
                        },
                        "typeArguments": null,
                        "start": 460,
                        "end": 466
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 450,
                      "end": 466
                    }
                  ],
                  "start": 449,
                  "end": 467
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Table",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 473,
                      "end": 478
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "UnrollOnHover",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 479,
                            "end": 492
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
                                  "start": 493,
                                  "end": 494
                                },
                                "typeArguments": null,
                                "start": 493,
                                "end": 494
                              }
                            ],
                            "start": 492,
                            "end": 495
                          },
                          "start": 479,
                          "end": 495
                        }
                      ],
                      "start": 478,
                      "end": 496
                    },
                    "start": 473,
                    "end": 496
                  },
                  "start": 470,
                  "end": 496
                },
                "start": 445,
                "end": 496
              },
              "start": 443,
              "end": 496
            },
            "start": 426,
            "end": 496
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "ColumnSelectViewImp",
            "optional": false,
            "typeAnnotation": null,
            "start": 499,
            "end": 518
          },
          "definite": false,
          "start": 426,
          "end": 518
        }
      ],
      "declare": false,
      "start": 420,
      "end": 519
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
            "name": "ColumnSelectView2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 550,
                        "end": 551
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Schema",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 560,
                          "end": 566
                        },
                        "typeArguments": null,
                        "start": 560,
                        "end": 566
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 550,
                      "end": 566
                    }
                  ],
                  "start": 549,
                  "end": 567
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Table",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 573,
                      "end": 578
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "UnrollOnHover",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 579,
                            "end": 592
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
                                  "start": 593,
                                  "end": 594
                                },
                                "typeArguments": null,
                                "start": 593,
                                "end": 594
                              }
                            ],
                            "start": 592,
                            "end": 595
                          },
                          "start": 579,
                          "end": 595
                        }
                      ],
                      "start": 578,
                      "end": 596
                    },
                    "start": 573,
                    "end": 596
                  },
                  "start": 570,
                  "end": 596
                },
                "start": 545,
                "end": 596
              },
              "start": 543,
              "end": 596
            },
            "start": 526,
            "end": 596
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "Table",
            "optional": false,
            "typeAnnotation": null,
            "start": 599,
            "end": 604
          },
          "definite": false,
          "start": 526,
          "end": 604
        }
      ],
      "declare": false,
      "start": 520,
      "end": 605
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 605
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "UnrollOnHover",
    "start": 12,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 28,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 48,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 56,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 74,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 77,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 84,
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
    "value": "O",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 101,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 110,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 117,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 122,
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
    "value": "Record",
    "start": 131,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 138,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 146,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 156,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "Table",
    "start": 162,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 170,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 178,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "__schema",
    "start": 193,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "S",
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
    "type": "Identifier",
    "value": "getRows",
    "start": 258,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 268,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 276,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 288,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "UnrollOnHover",
    "start": 294,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 308,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 331,
    "end": 337
  },
  {
    "type": "Null",
    "value": "null",
    "start": 338,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 350,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 353,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "ColumnSelectViewImp",
    "start": 359,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 379,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 381,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 389,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 395,
    "end": 396
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 397,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "Table",
    "start": 405,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 416,
    "end": 417
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 420,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "ColumnSelectView1",
    "start": 426,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 443,
    "end": 444
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 445,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 450,
    "end": 451
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 452,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 460,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 470,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "Table",
    "start": 473,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "UnrollOnHover",
    "start": 479,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 493,
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
    "value": ">",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "ColumnSelectViewImp",
    "start": 499,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 518,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 520,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "ColumnSelectView2",
    "start": 526,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 543,
    "end": 544
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 545,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 550,
    "end": 551
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 552,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 560,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 570,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "Table",
    "start": 573,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "UnrollOnHover",
    "start": 579,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "=",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "Table",
    "start": 599,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 604,
    "end": 605
  }
]
```
