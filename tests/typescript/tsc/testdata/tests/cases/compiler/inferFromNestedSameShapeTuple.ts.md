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
        "name": "Magic",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 27
      },
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
              "start": 28,
              "end": 29
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 28,
            "end": 29
          }
        ],
        "start": 27,
        "end": 30
      },
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
            "start": 33,
            "end": 34
          },
          "typeArguments": null,
          "start": 33,
          "end": 34
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 51,
                      "end": 52
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 51,
                    "end": 52
                  },
                  "start": 45,
                  "end": 52
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 63,
                        "end": 64
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 63,
                      "end": 64
                    },
                    "start": 57,
                    "end": 64
                  },
                  "start": 54,
                  "end": 64
                }
              ],
              "start": 44,
              "end": 65
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "__",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 76,
                    "end": 78
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 76,
                  "end": 78
                },
                "start": 70,
                "end": 78
              },
              "start": 67,
              "end": 78
            }
          ],
          "start": 43,
          "end": 79
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Y",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 83
          },
          "typeArguments": null,
          "start": 82,
          "end": 83
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 86,
          "end": 91
        },
        "start": 33,
        "end": 91
      },
      "declare": false,
      "start": 17,
      "end": 92
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null,
        "start": 99,
        "end": 100
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Magic",
          "optional": false,
          "typeAnnotation": null,
          "start": 103,
          "end": 108
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 111,
                      "end": 117
                    }
                  ],
                  "start": 110,
                  "end": 118
                }
              ],
              "start": 109,
              "end": 119
            }
          ],
          "start": 108,
          "end": 120
        },
        "start": 103,
        "end": 120
      },
      "declare": false,
      "start": 94,
      "end": 120
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Recursive",
        "optional": false,
        "typeAnnotation": null,
        "start": 144,
        "end": 153
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Id",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 156
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 154,
            "end": 156
          }
        ],
        "start": 153,
        "end": 157
      },
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 168
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 170,
                  "end": 172
                },
                "typeArguments": null,
                "start": 170,
                "end": 172
              },
              "start": 168,
              "end": 172
            },
            "accessibility": null,
            "static": false,
            "start": 166,
            "end": 172
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 185
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Recursive",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 196,
                      "end": 205
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Id",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 206,
                            "end": 208
                          },
                          "typeArguments": null,
                          "start": 206,
                          "end": 208
                        }
                      ],
                      "start": 205,
                      "end": 209
                    },
                    "start": 196,
                    "end": 209
                  },
                  "start": 196,
                  "end": 211
                },
                "start": 187,
                "end": 211
              },
              "start": 185,
              "end": 211
            },
            "accessibility": null,
            "static": false,
            "start": 177,
            "end": 211
          }
        ],
        "start": 160,
        "end": 213
      },
      "declare": false,
      "start": 139,
      "end": 213
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getIds",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 238
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
              "name": "Id",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 241
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 239,
            "end": 241
          }
        ],
        "start": 238,
        "end": 242
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Recursive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 259,
                    "end": 268
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Id",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 269,
                          "end": 271
                        },
                        "typeArguments": null,
                        "start": 269,
                        "end": 271
                      }
                    ],
                    "start": 268,
                    "end": 272
                  },
                  "start": 259,
                  "end": 272
                },
                "start": 259,
                "end": 274
              },
              "start": 250,
              "end": 274
            },
            "start": 248,
            "end": 274
          },
          "start": 243,
          "end": 274
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Id",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 279
            },
            "typeArguments": null,
            "start": 277,
            "end": 279
          },
          "start": 277,
          "end": 281
        },
        "start": 275,
        "end": 281
      },
      "body": null,
      "expression": false,
      "start": 215,
      "end": 282
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
            "name": "items",
            "optional": false,
            "typeAnnotation": null,
            "start": 290,
            "end": 295
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "id",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 305,
                          "end": 307
                        },
                        "value": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "'a'",
                          "start": 309,
                          "end": 312
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 305,
                        "end": 312
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 318,
                          "end": 326
                        },
                        "value": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "id",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 339,
                                    "end": 341
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "b",
                                    "raw": "'b'",
                                    "start": 343,
                                    "end": 346
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 339,
                                  "end": 346
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "children",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 356,
                                    "end": 364
                                  },
                                  "value": {
                                    "type": "ArrayExpression",
                                    "elements": [],
                                    "start": 366,
                                    "end": 368
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 356,
                                  "end": 368
                                }
                              ],
                              "start": 329,
                              "end": 374
                            }
                          ],
                          "start": 328,
                          "end": 375
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 318,
                        "end": 375
                      }
                    ],
                    "start": 299,
                    "end": 377
                  }
                ],
                "start": 298,
                "end": 378
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 382,
                  "end": 387
                },
                "typeArguments": null,
                "start": 382,
                "end": 387
              },
              "start": 298,
              "end": 387
            },
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Recursive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 407,
                    "end": 416
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 417,
                        "end": 423
                      }
                    ],
                    "start": 416,
                    "end": 424
                  },
                  "start": 407,
                  "end": 424
                },
                "start": 407,
                "end": 426
              },
              "start": 398,
              "end": 426
            },
            "start": 298,
            "end": 426
          },
          "definite": false,
          "start": 290,
          "end": 426
        }
      ],
      "declare": false,
      "start": 284,
      "end": 426
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 434,
            "end": 437
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getIds",
              "optional": false,
              "typeAnnotation": null,
              "start": 440,
              "end": 446
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "items",
                "optional": false,
                "typeAnnotation": null,
                "start": 447,
                "end": 452
              }
            ],
            "optional": false,
            "start": 440,
            "end": 453
          },
          "definite": false,
          "start": 434,
          "end": 453
        }
      ],
      "declare": false,
      "start": 428,
      "end": 453
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
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 494,
            "end": 498
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getIds",
              "optional": false,
              "typeAnnotation": null,
              "start": 501,
              "end": 507
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 515,
                            "end": 517
                          },
                          "value": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "'a'",
                            "start": 519,
                            "end": 522
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 515,
                          "end": 522
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 528,
                            "end": 536
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "id",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 549,
                                      "end": 551
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": "b",
                                      "raw": "'b'",
                                      "start": 553,
                                      "end": 556
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 549,
                                    "end": 556
                                  },
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "children",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 566,
                                      "end": 574
                                    },
                                    "value": {
                                      "type": "ArrayExpression",
                                      "elements": [],
                                      "start": 576,
                                      "end": 578
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 566,
                                    "end": 578
                                  }
                                ],
                                "start": 539,
                                "end": 584
                              }
                            ],
                            "start": 538,
                            "end": 585
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 528,
                          "end": 585
                        }
                      ],
                      "start": 509,
                      "end": 587
                    }
                  ],
                  "start": 508,
                  "end": 588
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 592,
                    "end": 597
                  },
                  "typeArguments": null,
                  "start": 592,
                  "end": 597
                },
                "start": 508,
                "end": 597
              }
            ],
            "optional": false,
            "start": 501,
            "end": 598
          },
          "definite": false,
          "start": 494,
          "end": 598
        }
      ],
      "declare": false,
      "start": 488,
      "end": 598
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 638,
        "end": 640
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
              "start": 641,
              "end": 642
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 641,
            "end": 642
          }
        ],
        "start": 640,
        "end": 643
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 647,
            "end": 653
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 655,
              "end": 657
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 660,
                        "end": 661
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
                            "start": 663,
                            "end": 664
                          },
                          "typeArguments": null,
                          "start": 663,
                          "end": 664
                        },
                        "start": 661,
                        "end": 664
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 660,
                      "end": 664
                    }
                  ],
                  "start": 658,
                  "end": 666
                }
              ],
              "start": 657,
              "end": 667
            },
            "start": 655,
            "end": 667
          }
        ],
        "start": 646,
        "end": 668
      },
      "declare": false,
      "start": 633,
      "end": 669
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 675,
        "end": 677
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
              "start": 678,
              "end": 679
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 678,
            "end": 679
          }
        ],
        "start": 677,
        "end": 680
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 684,
              "end": 686
            },
            "start": 684,
            "end": 686
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 688,
              "end": 690
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 693,
                        "end": 694
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
                            "start": 696,
                            "end": 697
                          },
                          "typeArguments": null,
                          "start": 696,
                          "end": 697
                        },
                        "start": 694,
                        "end": 697
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 693,
                      "end": 697
                    }
                  ],
                  "start": 691,
                  "end": 699
                }
              ],
              "start": 690,
              "end": 700
            },
            "start": 688,
            "end": 700
          }
        ],
        "start": 683,
        "end": 701
      },
      "declare": false,
      "start": 670,
      "end": 702
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "qq",
        "optional": false,
        "typeAnnotation": null,
        "start": 713,
        "end": 715
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
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 716,
              "end": 717
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 716,
            "end": 717
          }
        ],
        "start": 715,
        "end": 718
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
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 722,
                "end": 724
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 725,
                      "end": 726
                    },
                    "typeArguments": null,
                    "start": 725,
                    "end": 726
                  }
                ],
                "start": 724,
                "end": 727
              },
              "start": 722,
              "end": 727
            },
            "start": 720,
            "end": 727
          },
          "start": 719,
          "end": 727
        },
        {
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
                "name": "T2",
                "optional": false,
                "typeAnnotation": null,
                "start": 732,
                "end": 734
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 735,
                      "end": 736
                    },
                    "typeArguments": null,
                    "start": 735,
                    "end": 736
                  }
                ],
                "start": 734,
                "end": 737
              },
              "start": 732,
              "end": 737
            },
            "start": 730,
            "end": 737
          },
          "start": 729,
          "end": 737
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                "start": 745,
                "end": 746
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 749,
                "end": 750
              },
              "start": 745,
              "end": 750
            },
            "directive": null,
            "start": 745,
            "end": 751
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
                "start": 756,
                "end": 757
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 760,
                "end": 761
              },
              "start": 756,
              "end": 761
            },
            "directive": null,
            "start": 756,
            "end": 762
          }
        ],
        "start": 739,
        "end": 774
      },
      "expression": false,
      "start": 704,
      "end": 774
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 17,
  "end": 774
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 17,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "Magic",
    "start": 22,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 35,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 45,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 54,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 57,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 67,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 70,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "__",
    "start": 76,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 86,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 94,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "Magic",
    "start": 103,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 111,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 139,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "Recursive",
    "start": 144,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 154,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 166,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 170,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 177,
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
    "value": "readonly",
    "start": 187,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "Recursive",
    "start": 196,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 206,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 215,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 223,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "getIds",
    "start": 232,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 239,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 243,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 250,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "Recursive",
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
    "value": "Id",
    "start": 269,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 277,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 284,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 290,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 305,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 307,
    "end": 308
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 309,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 318,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 339,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 341,
    "end": 342
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 343,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 356,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "]",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 379,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 382,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 388,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 398,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "Recursive",
    "start": 407,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 417,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 425,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 428,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 434,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "getIds",
    "start": 440,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 447,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 452,
    "end": 453
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 488,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 494,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "getIds",
    "start": 501,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 515,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 517,
    "end": 518
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 519,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 528,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 549,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 551,
    "end": 552
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 553,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 566,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 589,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 592,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 633,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 638,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 647,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 655,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "T",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "type",
    "start": 670,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 675,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 683,
    "end": 684
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 684,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 688,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 698,
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
    "value": "]",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 701,
    "end": 702
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 704,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "qq",
    "start": 713,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "T1",
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
    "value": "U",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 732,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 773,
    "end": 774
  }
]
```
