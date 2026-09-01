__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "classExtender",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 29
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
                "name": "TFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 39
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 30,
              "end": 39
            }
          ],
          "start": 29,
          "end": 40
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "superClass",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 53,
                  "end": 62
                },
                "typeArguments": null,
                "start": 53,
                "end": 62
              },
              "start": 51,
              "end": 62
            },
            "start": 41,
            "end": 62
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "_instanceModifier",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "instance",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 94,
                        "end": 97
                      },
                      "start": 92,
                      "end": 97
                    },
                    "start": 84,
                    "end": 97
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 105,
                          "end": 108
                        },
                        "start": 105,
                        "end": 110
                      },
                      "start": 103,
                      "end": 110
                    },
                    "start": 99,
                    "end": 110
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 115,
                    "end": 119
                  },
                  "start": 112,
                  "end": 119
                },
                "start": 83,
                "end": 119
              },
              "start": 81,
              "end": 119
            },
            "start": 64,
            "end": 119
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 131
            },
            "typeArguments": null,
            "start": 122,
            "end": 131
          },
          "start": 120,
          "end": 131
        },
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
                  "name": "decoratorFunc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 164
                },
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "superClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 173,
                  "end": 183
                },
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
                        "start": 194,
                        "end": 205
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
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "args",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 209,
                              "end": 213
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 215,
                                  "end": 218
                                },
                                "start": 215,
                                "end": 220
                              },
                              "start": 213,
                              "end": 220
                            },
                            "value": null,
                            "start": 206,
                            "end": 220
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Super",
                                  "start": 236,
                                  "end": 241
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "SpreadElement",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 245,
                                      "end": 249
                                    },
                                    "start": 242,
                                    "end": 249
                                  }
                                ],
                                "optional": false,
                                "start": 236,
                                "end": 250
                              },
                              "directive": null,
                              "start": 236,
                              "end": 251
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_instanceModifier",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 264,
                                  "end": 281
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ThisExpression",
                                    "start": 282,
                                    "end": 286
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "args",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 288,
                                    "end": 292
                                  }
                                ],
                                "optional": false,
                                "start": 264,
                                "end": 293
                              },
                              "directive": null,
                              "start": 264,
                              "end": 294
                            }
                          ],
                          "start": 222,
                          "end": 304
                        },
                        "expression": false,
                        "start": 205,
                        "end": 304
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 194,
                      "end": 304
                    }
                  ],
                  "start": 184,
                  "end": 310
                },
                "abstract": false,
                "declare": false,
                "start": 145,
                "end": 310
              },
              "start": 138,
              "end": 311
            }
          ],
          "start": 132,
          "end": 313
        },
        "expression": false,
        "start": 7,
        "end": 313
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 313
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 321,
        "end": 328
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
              "start": 339,
              "end": 340
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 331,
            "end": 341
          }
        ],
        "start": 329,
        "end": 343
      },
      "abstract": false,
      "declare": false,
      "start": 315,
      "end": 343
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "classExtender2",
          "optional": false,
          "typeAnnotation": null,
          "start": 360,
          "end": 374
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
                "name": "TFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 375,
                "end": 384
              },
              "constraint": {
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
                      "start": 401,
                      "end": 405
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 407,
                          "end": 413
                        },
                        "start": 407,
                        "end": 415
                      },
                      "start": 405,
                      "end": 415
                    },
                    "value": null,
                    "start": 398,
                    "end": 415
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 420,
                      "end": 427
                    },
                    "typeArguments": null,
                    "start": 420,
                    "end": 427
                  },
                  "start": 417,
                  "end": 427
                },
                "start": 393,
                "end": 427
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 375,
              "end": 427
            }
          ],
          "start": 374,
          "end": 428
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "superClass",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 441,
                  "end": 450
                },
                "typeArguments": null,
                "start": 441,
                "end": 450
              },
              "start": 439,
              "end": 450
            },
            "start": 429,
            "end": 450
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "_instanceModifier",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "instance",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 482,
                        "end": 485
                      },
                      "start": 480,
                      "end": 485
                    },
                    "start": 472,
                    "end": 485
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 493,
                          "end": 496
                        },
                        "start": 493,
                        "end": 498
                      },
                      "start": 491,
                      "end": 498
                    },
                    "start": 487,
                    "end": 498
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 503,
                    "end": 507
                  },
                  "start": 500,
                  "end": 507
                },
                "start": 471,
                "end": 507
              },
              "start": 469,
              "end": 507
            },
            "start": 452,
            "end": 507
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 510,
              "end": 519
            },
            "typeArguments": null,
            "start": 510,
            "end": 519
          },
          "start": 508,
          "end": 519
        },
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
                  "name": "decoratorFunc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 539,
                  "end": 552
                },
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "superClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 561,
                  "end": 571
                },
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
                        "start": 582,
                        "end": 593
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
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "args",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 597,
                              "end": 601
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 603,
                                  "end": 606
                                },
                                "start": 603,
                                "end": 608
                              },
                              "start": 601,
                              "end": 608
                            },
                            "value": null,
                            "start": 594,
                            "end": 608
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Super",
                                  "start": 624,
                                  "end": 629
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "SpreadElement",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 633,
                                      "end": 637
                                    },
                                    "start": 630,
                                    "end": 637
                                  }
                                ],
                                "optional": false,
                                "start": 624,
                                "end": 638
                              },
                              "directive": null,
                              "start": 624,
                              "end": 639
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_instanceModifier",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 652,
                                  "end": 669
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ThisExpression",
                                    "start": 670,
                                    "end": 674
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "args",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 676,
                                    "end": 680
                                  }
                                ],
                                "optional": false,
                                "start": 652,
                                "end": 681
                              },
                              "directive": null,
                              "start": 652,
                              "end": 682
                            }
                          ],
                          "start": 610,
                          "end": 692
                        },
                        "expression": false,
                        "start": 593,
                        "end": 692
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 582,
                      "end": 692
                    }
                  ],
                  "start": 572,
                  "end": 698
                },
                "abstract": false,
                "declare": false,
                "start": 533,
                "end": 698
              },
              "start": 526,
              "end": 699
            }
          ],
          "start": 520,
          "end": 701
        },
        "expression": false,
        "start": 351,
        "end": 701
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 344,
      "end": 701
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 701
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
    "type": "Keyword",
    "value": "function",
    "start": 7,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "classExtender",
    "start": 16,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "TFunction",
    "start": 30,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "superClass",
    "start": 41,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "TFunction",
    "start": 53,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "_instanceModifier",
    "start": 64,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 84,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 94,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 99,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 105,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": ")",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 112,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 115,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "TFunction",
    "start": 122,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 138,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 145,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "decoratorFunc",
    "start": 151,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 165,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "superClass",
    "start": 173,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 194,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 206,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 209,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 215,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 236,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 242,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 245,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "_instanceModifier",
    "start": 264,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 282,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 288,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 315,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 321,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 331,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 344,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 351,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "classExtender2",
    "start": 360,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "TFunction",
    "start": 375,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 385,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 393,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 398,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 401,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 407,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 417,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 420,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "superClass",
    "start": 429,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "TFunction",
    "start": 441,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "_instanceModifier",
    "start": 452,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 472,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 482,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 487,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 493,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 500,
    "end": 502
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 503,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "TFunction",
    "start": 510,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 520,
    "end": 521
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 526,
    "end": 532
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 533,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "decoratorFunc",
    "start": 539,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 553,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "superClass",
    "start": 561,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 582,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 594,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 597,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 603,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "super",
    "start": 624,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 630,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 633,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "_instanceModifier",
    "start": 652,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 669,
    "end": 670
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 670,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 676,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 700,
    "end": 701
  }
]
```
