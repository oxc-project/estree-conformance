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
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 23
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
                "start": 24,
                "end": 25
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 34,
                "end": 40
              },
              "default": {
                "type": "TSObjectKeyword",
                "start": 43,
                "end": 49
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 24,
              "end": 49
            }
          ],
          "start": 23,
          "end": 50
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
                "start": 61,
                "end": 65
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 67,
                    "end": 70
                  },
                  "start": 67,
                  "end": 72
                },
                "start": 65,
                "end": 72
              },
              "value": null,
              "start": 58,
              "end": 72
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
                "start": 77,
                "end": 78
              },
              "typeArguments": null,
              "start": 77,
              "end": 78
            },
            "start": 74,
            "end": 78
          },
          "start": 53,
          "end": 78
        },
        "declare": false,
        "start": 7,
        "end": 79
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 79
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Initable",
          "optional": false,
          "typeAnnotation": null,
          "start": 98,
          "end": 106
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
                "name": "init",
                "optional": false,
                "typeAnnotation": null,
                "start": 113,
                "end": 117
              },
              "computed": false,
              "optional": false,
              "kind": "method",
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
                    "start": 121,
                    "end": 125
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 127,
                        "end": 130
                      },
                      "start": 127,
                      "end": 132
                    },
                    "start": 125,
                    "end": 132
                  },
                  "value": null,
                  "start": 118,
                  "end": 132
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 135,
                  "end": 139
                },
                "start": 133,
                "end": 139
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 113,
              "end": 140
            }
          ],
          "start": 107,
          "end": 142
        },
        "declare": false,
        "start": 88,
        "end": 142
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 81,
      "end": 142
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Serializable",
              "optional": false,
              "typeAnnotation": null,
              "start": 218,
              "end": 230
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 234,
                      "end": 235
                    },
                    "constraint": {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Constructor",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 244,
                            "end": 255
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Initable",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 256,
                                  "end": 264
                                },
                                "typeArguments": null,
                                "start": 256,
                                "end": 264
                              }
                            ],
                            "start": 255,
                            "end": 265
                          },
                          "start": 244,
                          "end": 265
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Initable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 268,
                            "end": 276
                          },
                          "typeArguments": null,
                          "start": 268,
                          "end": 276
                        }
                      ],
                      "start": 244,
                      "end": 276
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 234,
                    "end": 276
                  }
                ],
                "start": 233,
                "end": 277
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SuperClass",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 295,
                        "end": 296
                      },
                      "typeArguments": null,
                      "start": 295,
                      "end": 296
                    },
                    "start": 293,
                    "end": 296
                  },
                  "start": 283,
                  "end": 296
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "LocalMixin",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 314,
                          "end": 324
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
                              "name": "InnerSuperClass",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "K",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 345,
                                    "end": 346
                                  },
                                  "typeArguments": null,
                                  "start": 345,
                                  "end": 346
                                },
                                "start": 343,
                                "end": 346
                              },
                              "start": 328,
                              "end": 346
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "ClassExpression",
                                  "decorators": [],
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "SerializableLocal",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 374,
                                    "end": 391
                                  },
                                  "typeParameters": null,
                                  "superClass": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "InnerSuperClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 400,
                                    "end": 415
                                  },
                                  "superTypeArguments": null,
                                  "implements": [],
                                  "body": {
                                    "type": "ClassBody",
                                    "body": [],
                                    "start": 416,
                                    "end": 427
                                  },
                                  "abstract": false,
                                  "declare": false,
                                  "start": 368,
                                  "end": 427
                                },
                                "start": 361,
                                "end": 427
                              }
                            ],
                            "start": 351,
                            "end": 433
                          },
                          "id": null,
                          "generator": false,
                          "start": 327,
                          "end": 433
                        },
                        "definite": false,
                        "start": 314,
                        "end": 433
                      }
                    ],
                    "declare": false,
                    "start": 308,
                    "end": 434
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
                          "name": "ResultClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 443,
                          "end": 454
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "LocalMixin",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 457,
                            "end": 467
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SuperClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 468,
                              "end": 478
                            }
                          ],
                          "optional": false,
                          "start": 457,
                          "end": 479
                        },
                        "definite": false,
                        "start": 443,
                        "end": 479
                      }
                    ],
                    "declare": false,
                    "start": 439,
                    "end": 480
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ResultClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 492,
                      "end": 503
                    },
                    "start": 485,
                    "end": 504
                  }
                ],
                "start": 302,
                "end": 506
              },
              "id": null,
              "generator": false,
              "start": 233,
              "end": 506
            },
            "definite": false,
            "start": 218,
            "end": 506
          }
        ],
        "declare": false,
        "start": 212,
        "end": 507
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 205,
      "end": 507
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
            "name": "AMixin",
            "optional": false,
            "typeAnnotation": null,
            "start": 515,
            "end": 521
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 525,
                    "end": 526
                  },
                  "constraint": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Constructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 535,
                          "end": 546
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Initable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 547,
                                "end": 555
                              },
                              "typeArguments": null,
                              "start": 547,
                              "end": 555
                            }
                          ],
                          "start": 546,
                          "end": 556
                        },
                        "start": 535,
                        "end": 556
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Initable",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 559,
                          "end": 567
                        },
                        "typeArguments": null,
                        "start": 559,
                        "end": 567
                      }
                    ],
                    "start": 535,
                    "end": 567
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 525,
                  "end": 567
                }
              ],
              "start": 524,
              "end": 568
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "SuperClass",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 581,
                      "end": 582
                    },
                    "typeArguments": null,
                    "start": 581,
                    "end": 582
                  },
                  "start": 579,
                  "end": 582
                },
                "start": 569,
                "end": 582
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
                        "name": "SomeHowOkay",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 597,
                        "end": 608
                      },
                      "init": {
                        "type": "ClassExpression",
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 617,
                          "end": 618
                        },
                        "typeParameters": null,
                        "superClass": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SuperClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 627,
                          "end": 637
                        },
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [],
                          "start": 638,
                          "end": 645
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 611,
                        "end": 645
                      },
                      "definite": false,
                      "start": 597,
                      "end": 645
                    }
                  ],
                  "declare": false,
                  "start": 593,
                  "end": 646
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
                        "name": "SomeHowNotOkay",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 656,
                        "end": 670
                      },
                      "init": {
                        "type": "ClassExpression",
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 679,
                          "end": 680
                        },
                        "typeParameters": null,
                        "superClass": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Serializable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 689,
                            "end": 701
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SuperClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 702,
                              "end": 712
                            }
                          ],
                          "optional": false,
                          "start": 689,
                          "end": 713
                        },
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [],
                          "start": 714,
                          "end": 721
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 673,
                        "end": 721
                      },
                      "definite": false,
                      "start": 656,
                      "end": 721
                    }
                  ],
                  "declare": false,
                  "start": 652,
                  "end": 722
                }
              ],
              "start": 587,
              "end": 724
            },
            "id": null,
            "generator": false,
            "start": 524,
            "end": 724
          },
          "definite": false,
          "start": 515,
          "end": 724
        }
      ],
      "declare": false,
      "start": 509,
      "end": 725
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 725
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
    "value": "Constructor",
    "start": 12,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 26,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 43,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 53,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 58,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 61,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 67,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 74,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 81,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 88,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "Initable",
    "start": 98,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "init",
    "start": 113,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 118,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 121,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 135,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 205,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 212,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "Serializable",
    "start": 218,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 236,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 244,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "Initable",
    "start": 256,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "Initable",
    "start": 268,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "SuperClass",
    "start": 283,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 299,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 308,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "LocalMixin",
    "start": 314,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "InnerSuperClass",
    "start": 328,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 348,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 351,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 361,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 368,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "SerializableLocal",
    "start": 374,
    "end": 391
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 392,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "InnerSuperClass",
    "start": 400,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 433,
    "end": 434
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 439,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "ResultClass",
    "start": 443,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "LocalMixin",
    "start": 457,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "SuperClass",
    "start": 468,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 485,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "ResultClass",
    "start": 492,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 506,
    "end": 507
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 509,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "AMixin",
    "start": 515,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 525,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 527,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 535,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "Initable",
    "start": 547,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "Initable",
    "start": 559,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "SuperClass",
    "start": 569,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 584,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 587,
    "end": 588
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 593,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "SomeHowOkay",
    "start": 597,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 609,
    "end": 610
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 611,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 617,
    "end": 618
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 619,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "SuperClass",
    "start": 627,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 645,
    "end": 646
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 652,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "SomeHowNotOkay",
    "start": 656,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 671,
    "end": 672
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 673,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 679,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 681,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "Serializable",
    "start": 689,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "SuperClass",
    "start": 702,
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
    "value": "{",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 724,
    "end": 725
  }
]
```
