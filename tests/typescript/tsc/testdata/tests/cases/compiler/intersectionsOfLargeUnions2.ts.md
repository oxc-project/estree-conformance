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
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 30,
        "end": 36
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ElementTagNameMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 70
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 89,
                          "end": 95
                        },
                        "start": 87,
                        "end": 95
                      },
                      "start": 82,
                      "end": 95
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "HTMLElement",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 98,
                        "end": 109
                      },
                      "typeArguments": null,
                      "start": 98,
                      "end": 109
                    },
                    "start": 96,
                    "end": 109
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 81,
                  "end": 109
                }
              ],
              "start": 71,
              "end": 115
            },
            "declare": false,
            "start": 43,
            "end": 115
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "HTMLElement",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 142
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 161,
                          "end": 167
                        },
                        "start": 159,
                        "end": 167
                      },
                      "start": 154,
                      "end": 167
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "HTMLElement",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 170,
                        "end": 181
                      },
                      "typeArguments": null,
                      "start": 170,
                      "end": 181
                    },
                    "start": 168,
                    "end": 181
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 153,
                  "end": 182
                }
              ],
              "start": 143,
              "end": 188
            },
            "declare": false,
            "start": 121,
            "end": 188
          }
        ],
        "start": 37,
        "end": 190
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 22,
      "end": 190
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "assertIsElement",
          "optional": false,
          "typeAnnotation": null,
          "start": 208,
          "end": 223
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 230,
                      "end": 234
                    },
                    "typeArguments": null,
                    "start": 230,
                    "end": 234
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 237,
                    "end": 241
                  }
                ],
                "start": 230,
                "end": 241
              },
              "start": 228,
              "end": 241
            },
            "start": 224,
            "end": 241
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "node",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 248
            },
            "asserts": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Element",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 259
                },
                "typeArguments": null,
                "start": 252,
                "end": 259
              },
              "start": 252,
              "end": 259
            },
            "start": 244,
            "end": 259
          },
          "start": 242,
          "end": 259
        },
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
                    "name": "nodeType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 270,
                    "end": 278
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 281,
                        "end": 285
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 290,
                        "end": 294
                      },
                      "start": 281,
                      "end": 294
                    },
                    "consequent": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 297,
                      "end": 301
                    },
                    "alternate": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 304,
                        "end": 308
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nodeType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 309,
                        "end": 317
                      },
                      "optional": false,
                      "computed": false,
                      "start": 304,
                      "end": 317
                    },
                    "start": 281,
                    "end": 317
                  },
                  "definite": false,
                  "start": 270,
                  "end": 317
                }
              ],
              "declare": false,
              "start": 266,
              "end": 318
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nodeType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 330,
                  "end": 338
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 343,
                  "end": 344
                },
                "start": 330,
                "end": 344
              },
              "start": 323,
              "end": 345
            }
          ],
          "start": 260,
          "end": 347
        },
        "expression": false,
        "start": 199,
        "end": 347
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 192,
      "end": 347
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "assertNodeTagName",
          "optional": false,
          "typeAnnotation": null,
          "start": 367,
          "end": 384
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 390,
                "end": 391
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ElementTagNameMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 406,
                    "end": 423
                  },
                  "typeArguments": null,
                  "start": 406,
                  "end": 423
                },
                "start": 400,
                "end": 423
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 390,
              "end": 423
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 429,
                "end": 430
              },
              "constraint": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ElementTagNameMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 439,
                    "end": 456
                  },
                  "typeArguments": null,
                  "start": 439,
                  "end": 456
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 457,
                    "end": 458
                  },
                  "typeArguments": null,
                  "start": 457,
                  "end": 458
                },
                "start": 439,
                "end": 459
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 429,
              "end": 459
            }
          ],
          "start": 384,
          "end": 460
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 467,
                      "end": 471
                    },
                    "typeArguments": null,
                    "start": 467,
                    "end": 471
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 474,
                    "end": 478
                  }
                ],
                "start": 467,
                "end": 478
              },
              "start": 465,
              "end": 478
            },
            "start": 461,
            "end": 478
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "tagName",
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
                  "start": 489,
                  "end": 490
                },
                "typeArguments": null,
                "start": 489,
                "end": 490
              },
              "start": 487,
              "end": 490
            },
            "start": 480,
            "end": 490
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "node",
              "optional": false,
              "typeAnnotation": null,
              "start": 493,
              "end": 497
            },
            "asserts": false,
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
                  "start": 501,
                  "end": 502
                },
                "typeArguments": null,
                "start": 501,
                "end": 502
              },
              "start": 501,
              "end": 502
            },
            "start": 493,
            "end": 502
          },
          "start": 491,
          "end": 502
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "assertIsElement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 513,
                  "end": 528
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 529,
                    "end": 533
                  }
                ],
                "optional": false,
                "start": 513,
                "end": 534
              },
              "consequent": {
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
                          "name": "nodeTagName",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 552,
                          "end": 563
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "node",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 566,
                                "end": 570
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "tagName",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 571,
                                "end": 578
                              },
                              "optional": false,
                              "computed": false,
                              "start": 566,
                              "end": 578
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toLowerCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 579,
                              "end": 590
                            },
                            "optional": false,
                            "computed": false,
                            "start": 566,
                            "end": 590
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 566,
                          "end": 592
                        },
                        "definite": false,
                        "start": 552,
                        "end": 592
                      }
                    ],
                    "declare": false,
                    "start": 546,
                    "end": 593
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nodeTagName",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 610,
                        "end": 621
                      },
                      "operator": "===",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tagName",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 626,
                        "end": 633
                      },
                      "start": 610,
                      "end": 633
                    },
                    "start": 603,
                    "end": 634
                  }
                ],
                "start": 536,
                "end": 640
              },
              "alternate": null,
              "start": 509,
              "end": 640
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 652,
                "end": 657
              },
              "start": 645,
              "end": 658
            }
          ],
          "start": 503,
          "end": 660
        },
        "expression": false,
        "start": 358,
        "end": 660
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 351,
      "end": 660
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "assertNodeProperty",
          "optional": false,
          "typeAnnotation": null,
          "start": 680,
          "end": 698
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 704,
                "end": 705
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ElementTagNameMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 720,
                    "end": 737
                  },
                  "typeArguments": null,
                  "start": 720,
                  "end": 737
                },
                "start": 714,
                "end": 737
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 704,
              "end": 737
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 743,
                "end": 744
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ElementTagNameMap",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 759,
                      "end": 776
                    },
                    "typeArguments": null,
                    "start": 759,
                    "end": 776
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 777,
                      "end": 778
                    },
                    "typeArguments": null,
                    "start": 777,
                    "end": 778
                  },
                  "start": 759,
                  "end": 779
                },
                "start": 753,
                "end": 779
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 743,
              "end": 779
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 785,
                "end": 786
              },
              "constraint": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HTMLElementTagNameMap",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 795,
                      "end": 816
                    },
                    "typeArguments": null,
                    "start": 795,
                    "end": 816
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 817,
                      "end": 818
                    },
                    "typeArguments": null,
                    "start": 817,
                    "end": 818
                  },
                  "start": 795,
                  "end": 819
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 820,
                    "end": 821
                  },
                  "typeArguments": null,
                  "start": 820,
                  "end": 821
                },
                "start": 795,
                "end": 822
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 785,
              "end": 822
            }
          ],
          "start": 698,
          "end": 823
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 830,
                      "end": 834
                    },
                    "typeArguments": null,
                    "start": 830,
                    "end": 834
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 837,
                    "end": 841
                  }
                ],
                "start": 830,
                "end": 841
              },
              "start": 828,
              "end": 841
            },
            "start": 824,
            "end": 841
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "tagName",
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
                  "start": 852,
                  "end": 853
                },
                "typeArguments": null,
                "start": 852,
                "end": 853
              },
              "start": 850,
              "end": 853
            },
            "start": 843,
            "end": 853
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 861,
                  "end": 862
                },
                "typeArguments": null,
                "start": 861,
                "end": 862
              },
              "start": 859,
              "end": 862
            },
            "start": 855,
            "end": 862
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 871,
                  "end": 872
                },
                "typeArguments": null,
                "start": 871,
                "end": 872
              },
              "start": 869,
              "end": 872
            },
            "start": 864,
            "end": 872
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "assertNodeTagName",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 884,
                  "end": 901
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 902,
                    "end": 906
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tagName",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 908,
                    "end": 915
                  }
                ],
                "optional": false,
                "start": 884,
                "end": 916
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 928,
                        "end": 932
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 933,
                        "end": 937
                      },
                      "optional": false,
                      "computed": true,
                      "start": 928,
                      "end": 938
                    },
                    "directive": null,
                    "start": 928,
                    "end": 939
                  }
                ],
                "start": 918,
                "end": 945
              },
              "alternate": null,
              "start": 880,
              "end": 945
            }
          ],
          "start": 874,
          "end": 947
        },
        "expression": false,
        "start": 671,
        "end": 947
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 664,
      "end": 947
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 947
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 22,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 43,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "ElementTagNameMap",
    "start": 53,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 82,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "HTMLElement",
    "start": 98,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 121,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "HTMLElement",
    "start": 131,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 154,
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
    "value": "number",
    "start": 161,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 167,
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
    "value": "HTMLElement",
    "start": 170,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 192,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 199,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "assertIsElement",
    "start": 208,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 224,
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
    "value": "Node",
    "start": 230,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 235,
    "end": 236
  },
  {
    "type": "Null",
    "value": "null",
    "start": 237,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 241,
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
    "value": "node",
    "start": 244,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 249,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 252,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 266,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "nodeType",
    "start": 270,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 281,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 286,
    "end": 289
  },
  {
    "type": "Null",
    "value": "null",
    "start": 290,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 295,
    "end": 296
  },
  {
    "type": "Null",
    "value": "null",
    "start": 297,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 304,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "nodeType",
    "start": 309,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 323,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "nodeType",
    "start": 330,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 339,
    "end": 342
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 346,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 351,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 358,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "assertNodeTagName",
    "start": 367,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 390,
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
    "value": "keyof",
    "start": 400,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "ElementTagNameMap",
    "start": 406,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 429,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 431,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "ElementTagNameMap",
    "start": 439,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 461,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 467,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 472,
    "end": 473
  },
  {
    "type": "Null",
    "value": "null",
    "start": 474,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "tagName",
    "start": 480,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": ":",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 493,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 498,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 503,
    "end": 504
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 509,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "assertIsElement",
    "start": 513,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 529,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 536,
    "end": 537
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 546,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "nodeTagName",
    "start": 552,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 566,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "tagName",
    "start": 571,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "toLowerCase",
    "start": 579,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 592,
    "end": 593
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 603,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "nodeTagName",
    "start": 610,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 622,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "tagName",
    "start": 626,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 639,
    "end": 640
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 645,
    "end": 651
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 652,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 659,
    "end": 660
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 664,
    "end": 670
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 671,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "assertNodeProperty",
    "start": 680,
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
    "value": "T",
    "start": 704,
    "end": 705
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 706,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 714,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "ElementTagNameMap",
    "start": 720,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 743,
    "end": 744
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 745,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 753,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "ElementTagNameMap",
    "start": 759,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 785,
    "end": 786
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 787,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "HTMLElementTagNameMap",
    "start": 795,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 824,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 830,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 835,
    "end": 836
  },
  {
    "type": "Null",
    "value": "null",
    "start": 837,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "tagName",
    "start": 843,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 855,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 864,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 874,
    "end": 875
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 880,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "assertNodeTagName",
    "start": 884,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 902,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "tagName",
    "start": 908,
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
    "value": ")",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 928,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 933,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 946,
    "end": 947
  }
]
```
