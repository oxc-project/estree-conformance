__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "IterableWeakMap_cleanup",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 54
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 60,
                      "end": 63
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 60,
                      "end": 63
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 60,
                    "end": 63
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "set",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 65,
                      "end": 68
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "set",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 65,
                      "end": 68
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 65,
                    "end": 68
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": true,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ref",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 87,
                          "end": 90
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "WeakRef",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 92,
                              "end": 99
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSObjectKeyword",
                                  "start": 100,
                                  "end": 106
                                }
                              ],
                              "start": 99,
                              "end": 107
                            },
                            "start": 92,
                            "end": 107
                          },
                          "start": 90,
                          "end": 107
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 78,
                        "end": 108
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": true,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "set",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 122,
                          "end": 125
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Set",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 127,
                              "end": 130
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "WeakRef",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 131,
                                    "end": 138
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSObjectKeyword",
                                        "start": 139,
                                        "end": 145
                                      }
                                    ],
                                    "start": 138,
                                    "end": 146
                                  },
                                  "start": 131,
                                  "end": 146
                                }
                              ],
                              "start": 130,
                              "end": 147
                            },
                            "start": 127,
                            "end": 147
                          },
                          "start": 125,
                          "end": 147
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 113,
                        "end": 148
                      }
                    ],
                    "start": 72,
                    "end": 150
                  },
                  "start": 70,
                  "end": 150
                },
                "start": 58,
                "end": 150
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "set",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 161,
                        "end": 164
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "delete",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 165,
                        "end": 171
                      },
                      "optional": false,
                      "computed": false,
                      "start": 161,
                      "end": 171
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ref",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 172,
                        "end": 175
                      }
                    ],
                    "optional": false,
                    "start": 161,
                    "end": 176
                  },
                  "directive": null,
                  "start": 161,
                  "end": 177
                }
              ],
              "start": 155,
              "end": 179
            },
            "id": null,
            "generator": false,
            "start": 57,
            "end": 179
          },
          "definite": false,
          "start": 31,
          "end": 179
        }
      ],
      "declare": false,
      "start": 25,
      "end": 180
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IterableWeakMap",
          "optional": false,
          "typeAnnotation": null,
          "start": 290,
          "end": 305
        },
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
                "start": 306,
                "end": 307
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 316,
                "end": 322
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 306,
              "end": 322
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 324,
                "end": 325
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 324,
              "end": 325
            }
          ],
          "start": 305,
          "end": 326
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "WeakMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 338,
              "end": 345
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 346,
                    "end": 347
                  },
                  "typeArguments": null,
                  "start": 346,
                  "end": 347
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 349,
                    "end": 350
                  },
                  "typeArguments": null,
                  "start": 349,
                  "end": 350
                }
              ],
              "start": 345,
              "end": 351
            },
            "start": 338,
            "end": 351
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 376,
                  "end": 382
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toStringTag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 383,
                  "end": 394
                },
                "optional": false,
                "computed": false,
                "start": 376,
                "end": 394
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "IterableWeakMap",
                    "raw": "\"IterableWeakMap\"",
                    "start": 397,
                    "end": 414
                  },
                  "start": 397,
                  "end": 414
                },
                "start": 395,
                "end": 414
              },
              "value": null,
              "computed": true,
              "static": false,
              "declare": true,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null,
              "start": 358,
              "end": 415
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "weakMap",
                "start": 421,
                "end": 429
              },
              "typeAnnotation": null,
              "value": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WeakMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 436,
                  "end": 443
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 444,
                        "end": 445
                      },
                      "typeArguments": null,
                      "start": 444,
                      "end": 445
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": true,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 458,
                            "end": 461
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "WeakRef",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 463,
                                "end": 470
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "K",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 471,
                                      "end": 472
                                    },
                                    "typeArguments": null,
                                    "start": 471,
                                    "end": 472
                                  }
                                ],
                                "start": 470,
                                "end": 473
                              },
                              "start": 463,
                              "end": 473
                            },
                            "start": 461,
                            "end": 473
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 449,
                          "end": 474
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 475,
                            "end": 480
                          },
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
                                "start": 482,
                                "end": 483
                              },
                              "typeArguments": null,
                              "start": 482,
                              "end": 483
                            },
                            "start": 480,
                            "end": 483
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 475,
                          "end": 483
                        }
                      ],
                      "start": 447,
                      "end": 485
                    }
                  ],
                  "start": 443,
                  "end": 486
                },
                "arguments": [],
                "start": 432,
                "end": 488
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 421,
              "end": 489
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "refSet",
                "start": 494,
                "end": 501
              },
              "typeAnnotation": null,
              "value": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 508,
                  "end": 511
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WeakRef",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 512,
                        "end": 519
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 520,
                              "end": 521
                            },
                            "typeArguments": null,
                            "start": 520,
                            "end": 521
                          }
                        ],
                        "start": 519,
                        "end": 522
                      },
                      "start": 512,
                      "end": 522
                    }
                  ],
                  "start": 511,
                  "end": 523
                },
                "arguments": [],
                "start": 504,
                "end": 525
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 494,
              "end": 526
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "finalizationGroup",
                "start": 531,
                "end": 549
              },
              "typeAnnotation": null,
              "value": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FinalizationRegistry",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 556,
                  "end": 576
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IterableWeakMap_cleanup",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 577,
                    "end": 600
                  }
                ],
                "start": 552,
                "end": 601
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 531,
              "end": 602
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
                "start": 608,
                "end": 619
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
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "iterable",
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
                                "name": "Iterable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 630,
                                "end": 638
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTupleType",
                                    "elementTypes": [
                                      {
                                        "type": "TSNamedTupleMember",
                                        "label": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "key",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 640,
                                          "end": 643
                                        },
                                        "elementType": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "K",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 645,
                                            "end": 646
                                          },
                                          "typeArguments": null,
                                          "start": 645,
                                          "end": 646
                                        },
                                        "optional": false,
                                        "start": 640,
                                        "end": 646
                                      },
                                      {
                                        "type": "TSNamedTupleMember",
                                        "label": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "value",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 648,
                                          "end": 653
                                        },
                                        "elementType": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "V",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 655,
                                            "end": 656
                                          },
                                          "typeArguments": null,
                                          "start": 655,
                                          "end": 656
                                        },
                                        "optional": false,
                                        "start": 648,
                                        "end": 656
                                      }
                                    ],
                                    "start": 639,
                                    "end": 657
                                  }
                                ],
                                "start": 638,
                                "end": 658
                              },
                              "start": 630,
                              "end": 658
                            },
                            {
                              "type": "TSNullKeyword",
                              "start": 661,
                              "end": 665
                            }
                          ],
                          "start": 630,
                          "end": 665
                        },
                        "start": 628,
                        "end": 665
                      },
                      "start": 620,
                      "end": 665
                    },
                    "right": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 668,
                      "end": 672
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 620,
                    "end": 672
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "iterable",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 688,
                          "end": 696
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 701,
                          "end": 705
                        },
                        "start": 688,
                        "end": 705
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ForOfStatement",
                            "await": false,
                            "left": {
                              "type": "VariableDeclaration",
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "ObjectPattern",
                                    "decorators": [],
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "kind": "init",
                                        "key": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 734,
                                          "end": 735
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "key",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 737,
                                          "end": 740
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 734,
                                        "end": 740
                                      },
                                      {
                                        "type": "Property",
                                        "kind": "init",
                                        "key": {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1",
                                          "start": 742,
                                          "end": 743
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "value",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 745,
                                          "end": 750
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 742,
                                        "end": 750
                                      }
                                    ],
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 732,
                                    "end": 752
                                  },
                                  "init": null,
                                  "definite": false,
                                  "start": 732,
                                  "end": 752
                                }
                              ],
                              "declare": false,
                              "start": 726,
                              "end": 752
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "iterable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 756,
                              "end": 764
                            },
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 784,
                                        "end": 788
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "set",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 789,
                                        "end": 792
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 784,
                                      "end": 792
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "key",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 793,
                                        "end": 796
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 798,
                                        "end": 803
                                      }
                                    ],
                                    "optional": false,
                                    "start": 784,
                                    "end": 804
                                  },
                                  "directive": null,
                                  "start": 784,
                                  "end": 805
                                }
                              ],
                              "start": 766,
                              "end": 819
                            },
                            "start": 721,
                            "end": 819
                          }
                        ],
                        "start": 707,
                        "end": 829
                      },
                      "alternate": null,
                      "start": 684,
                      "end": 829
                    }
                  ],
                  "start": 674,
                  "end": 835
                },
                "expression": false,
                "start": 619,
                "end": 835
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 608,
              "end": 835
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null,
                "start": 841,
                "end": 844
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
                    "name": "key",
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
                          "start": 850,
                          "end": 851
                        },
                        "typeArguments": null,
                        "start": 850,
                        "end": 851
                      },
                      "start": 848,
                      "end": 851
                    },
                    "start": 845,
                    "end": 851
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
                          "start": 860,
                          "end": 861
                        },
                        "typeArguments": null,
                        "start": 860,
                        "end": 861
                      },
                      "start": 858,
                      "end": 861
                    },
                    "start": 853,
                    "end": 861
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 864,
                    "end": 868
                  },
                  "start": 862,
                  "end": 868
                },
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
                            "name": "entry",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 885,
                            "end": 890
                          },
                          "init": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 893,
                                  "end": 897
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "weakMap",
                                  "start": 898,
                                  "end": 906
                                },
                                "optional": false,
                                "computed": false,
                                "start": 893,
                                "end": 906
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "get",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 907,
                                "end": 910
                              },
                              "optional": false,
                              "computed": false,
                              "start": 893,
                              "end": 910
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 911,
                                "end": 914
                              }
                            ],
                            "optional": false,
                            "start": 893,
                            "end": 915
                          },
                          "definite": false,
                          "start": 885,
                          "end": 915
                        }
                      ],
                      "declare": false,
                      "start": 879,
                      "end": 916
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "entry",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 929,
                          "end": 934
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 939,
                          "end": 948
                        },
                        "start": 929,
                        "end": 948
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 964,
                                  "end": 969
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 970,
                                  "end": 975
                                },
                                "optional": false,
                                "computed": false,
                                "start": 964,
                                "end": 975
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 978,
                                "end": 983
                              },
                              "start": 964,
                              "end": 983
                            },
                            "directive": null,
                            "start": 964,
                            "end": 984
                          }
                        ],
                        "start": 950,
                        "end": 994
                      },
                      "alternate": {
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
                                  "name": "ref",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1020,
                                  "end": 1023
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "WeakRef",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1030,
                                    "end": 1037
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "key",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1038,
                                      "end": 1041
                                    }
                                  ],
                                  "start": 1026,
                                  "end": 1042
                                },
                                "definite": false,
                                "start": 1020,
                                "end": 1042
                              }
                            ],
                            "declare": false,
                            "start": 1014,
                            "end": 1043
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1057,
                                    "end": 1061
                                  },
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "name": "weakMap",
                                    "start": 1062,
                                    "end": 1070
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1057,
                                  "end": 1070
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "set",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1071,
                                  "end": 1074
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1057,
                                "end": 1074
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1075,
                                  "end": 1078
                                },
                                {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ref",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1082,
                                        "end": 1085
                                      },
                                      "value": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ref",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1082,
                                        "end": 1085
                                      },
                                      "method": false,
                                      "shorthand": true,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1082,
                                      "end": 1085
                                    },
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1087,
                                        "end": 1092
                                      },
                                      "value": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1087,
                                        "end": 1092
                                      },
                                      "method": false,
                                      "shorthand": true,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1087,
                                      "end": 1092
                                    }
                                  ],
                                  "start": 1080,
                                  "end": 1094
                                }
                              ],
                              "optional": false,
                              "start": 1057,
                              "end": 1095
                            },
                            "directive": null,
                            "start": 1057,
                            "end": 1096
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1109,
                                    "end": 1113
                                  },
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "name": "refSet",
                                    "start": 1114,
                                    "end": 1121
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1109,
                                  "end": 1121
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "add",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1122,
                                  "end": 1125
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1109,
                                "end": 1125
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ref",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1126,
                                  "end": 1129
                                }
                              ],
                              "optional": false,
                              "start": 1109,
                              "end": 1130
                            },
                            "directive": null,
                            "start": 1109,
                            "end": 1131
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1144,
                                    "end": 1148
                                  },
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "name": "finalizationGroup",
                                    "start": 1149,
                                    "end": 1167
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1144,
                                  "end": 1167
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "register",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1168,
                                  "end": 1176
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1144,
                                "end": 1176
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1177,
                                  "end": 1180
                                },
                                {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "set",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1200,
                                        "end": 1203
                                      },
                                      "value": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 1205,
                                          "end": 1209
                                        },
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "name": "refSet",
                                          "start": 1210,
                                          "end": 1217
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1205,
                                        "end": 1217
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1200,
                                      "end": 1217
                                    },
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ref",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1235,
                                        "end": 1238
                                      },
                                      "value": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ref",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1235,
                                        "end": 1238
                                      },
                                      "method": false,
                                      "shorthand": true,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1235,
                                      "end": 1238
                                    }
                                  ],
                                  "start": 1182,
                                  "end": 1253
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ref",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1255,
                                  "end": 1258
                                }
                              ],
                              "optional": false,
                              "start": 1144,
                              "end": 1259
                            },
                            "directive": null,
                            "start": 1144,
                            "end": 1260
                          }
                        ],
                        "start": 1000,
                        "end": 1270
                      },
                      "start": 925,
                      "end": 1270
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ThisExpression",
                        "start": 1286,
                        "end": 1290
                      },
                      "start": 1279,
                      "end": 1291
                    }
                  ],
                  "start": 869,
                  "end": 1297
                },
                "expression": false,
                "start": 844,
                "end": 1297
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 841,
              "end": 1297
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "has",
                "optional": false,
                "typeAnnotation": null,
                "start": 1303,
                "end": 1306
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
                    "name": "key",
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
                          "start": 1312,
                          "end": 1313
                        },
                        "typeArguments": null,
                        "start": 1312,
                        "end": 1313
                      },
                      "start": 1310,
                      "end": 1313
                    },
                    "start": 1307,
                    "end": 1313
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1316,
                    "end": 1323
                  },
                  "start": 1314,
                  "end": 1323
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
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1341,
                              "end": 1345
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "weakMap",
                              "start": 1346,
                              "end": 1354
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1341,
                            "end": 1354
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "has",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1355,
                            "end": 1358
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1341,
                          "end": 1358
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1359,
                            "end": 1362
                          }
                        ],
                        "optional": false,
                        "start": 1341,
                        "end": 1363
                      },
                      "start": 1334,
                      "end": 1364
                    }
                  ],
                  "start": 1324,
                  "end": 1370
                },
                "expression": false,
                "start": 1306,
                "end": 1370
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1303,
              "end": 1370
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null,
                "start": 1376,
                "end": 1379
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
                    "name": "key",
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
                          "start": 1385,
                          "end": 1386
                        },
                        "typeArguments": null,
                        "start": 1385,
                        "end": 1386
                      },
                      "start": 1383,
                      "end": 1386
                    },
                    "start": 1380,
                    "end": 1386
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1389,
                          "end": 1390
                        },
                        "typeArguments": null,
                        "start": 1389,
                        "end": 1390
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 1393,
                        "end": 1402
                      }
                    ],
                    "start": 1389,
                    "end": 1402
                  },
                  "start": 1387,
                  "end": 1402
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ChainExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1420,
                                  "end": 1424
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "weakMap",
                                  "start": 1425,
                                  "end": 1433
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1420,
                                "end": 1433
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "get",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1434,
                                "end": 1437
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1420,
                              "end": 1437
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1438,
                                "end": 1441
                              }
                            ],
                            "optional": false,
                            "start": 1420,
                            "end": 1442
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1444,
                            "end": 1449
                          },
                          "optional": true,
                          "computed": false,
                          "start": 1420,
                          "end": 1449
                        },
                        "start": 1420,
                        "end": 1449
                      },
                      "start": 1413,
                      "end": 1450
                    }
                  ],
                  "start": 1403,
                  "end": 1456
                },
                "expression": false,
                "start": 1379,
                "end": 1456
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1376,
              "end": 1456
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getOrInsert",
                "optional": false,
                "typeAnnotation": null,
                "start": 1462,
                "end": 1473
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
                    "name": "key",
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
                          "start": 1479,
                          "end": 1480
                        },
                        "typeArguments": null,
                        "start": 1479,
                        "end": 1480
                      },
                      "start": 1477,
                      "end": 1480
                    },
                    "start": 1474,
                    "end": 1480
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "defaultValue",
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
                          "start": 1496,
                          "end": 1497
                        },
                        "typeArguments": null,
                        "start": 1496,
                        "end": 1497
                      },
                      "start": 1494,
                      "end": 1497
                    },
                    "start": 1482,
                    "end": 1497
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1500,
                      "end": 1501
                    },
                    "typeArguments": null,
                    "start": 1500,
                    "end": 1501
                  },
                  "start": 1498,
                  "end": 1501
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "UnaryExpression",
                        "operator": "!",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1517,
                              "end": 1521
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "has",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1522,
                              "end": 1525
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1517,
                            "end": 1525
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1526,
                              "end": 1529
                            }
                          ],
                          "optional": false,
                          "start": 1517,
                          "end": 1530
                        },
                        "prefix": true,
                        "start": 1516,
                        "end": 1530
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1546,
                                  "end": 1550
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "set",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1551,
                                  "end": 1554
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1546,
                                "end": 1554
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1555,
                                  "end": 1558
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "defaultValue",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1560,
                                  "end": 1572
                                }
                              ],
                              "optional": false,
                              "start": 1546,
                              "end": 1573
                            },
                            "directive": null,
                            "start": 1546,
                            "end": 1574
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "defaultValue",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1594,
                              "end": 1606
                            },
                            "start": 1587,
                            "end": 1607
                          }
                        ],
                        "start": 1532,
                        "end": 1617
                      },
                      "alternate": null,
                      "start": 1512,
                      "end": 1617
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1633,
                              "end": 1637
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "get",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1638,
                              "end": 1641
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1633,
                            "end": 1641
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1642,
                              "end": 1645
                            }
                          ],
                          "optional": false,
                          "start": 1633,
                          "end": 1646
                        },
                        "start": 1633,
                        "end": 1647
                      },
                      "start": 1626,
                      "end": 1648
                    }
                  ],
                  "start": 1502,
                  "end": 1654
                },
                "expression": false,
                "start": 1473,
                "end": 1654
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1462,
              "end": 1654
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getOrInsertComputed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1660,
                "end": 1679
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
                    "name": "key",
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
                          "start": 1685,
                          "end": 1686
                        },
                        "typeArguments": null,
                        "start": 1685,
                        "end": 1686
                      },
                      "start": 1683,
                      "end": 1686
                    },
                    "start": 1680,
                    "end": 1686
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "callback",
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
                            "name": "key",
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
                                  "start": 1704,
                                  "end": 1705
                                },
                                "typeArguments": null,
                                "start": 1704,
                                "end": 1705
                              },
                              "start": 1702,
                              "end": 1705
                            },
                            "start": 1699,
                            "end": 1705
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1710,
                              "end": 1711
                            },
                            "typeArguments": null,
                            "start": 1710,
                            "end": 1711
                          },
                          "start": 1707,
                          "end": 1711
                        },
                        "start": 1698,
                        "end": 1711
                      },
                      "start": 1696,
                      "end": 1711
                    },
                    "start": 1688,
                    "end": 1711
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1714,
                      "end": 1715
                    },
                    "typeArguments": null,
                    "start": 1714,
                    "end": 1715
                  },
                  "start": 1712,
                  "end": 1715
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "UnaryExpression",
                        "operator": "!",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1731,
                              "end": 1735
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "has",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1736,
                              "end": 1739
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1731,
                            "end": 1739
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1740,
                              "end": 1743
                            }
                          ],
                          "optional": false,
                          "start": 1731,
                          "end": 1744
                        },
                        "prefix": true,
                        "start": 1730,
                        "end": 1744
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
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1766,
                                  "end": 1771
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "callback",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1774,
                                    "end": 1782
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "key",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1783,
                                      "end": 1786
                                    }
                                  ],
                                  "optional": false,
                                  "start": 1774,
                                  "end": 1787
                                },
                                "definite": false,
                                "start": 1766,
                                "end": 1787
                              }
                            ],
                            "declare": false,
                            "start": 1760,
                            "end": 1788
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1801,
                                  "end": 1805
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "set",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1806,
                                  "end": 1809
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1801,
                                "end": 1809
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1810,
                                  "end": 1813
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1815,
                                  "end": 1820
                                }
                              ],
                              "optional": false,
                              "start": 1801,
                              "end": 1821
                            },
                            "directive": null,
                            "start": 1801,
                            "end": 1822
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1842,
                              "end": 1847
                            },
                            "start": 1835,
                            "end": 1848
                          }
                        ],
                        "start": 1746,
                        "end": 1858
                      },
                      "alternate": null,
                      "start": 1726,
                      "end": 1858
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1874,
                              "end": 1878
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "get",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1879,
                              "end": 1882
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1874,
                            "end": 1882
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1883,
                              "end": 1886
                            }
                          ],
                          "optional": false,
                          "start": 1874,
                          "end": 1887
                        },
                        "start": 1874,
                        "end": 1888
                      },
                      "start": 1867,
                      "end": 1889
                    }
                  ],
                  "start": 1716,
                  "end": 1895
                },
                "expression": false,
                "start": 1679,
                "end": 1895
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1660,
              "end": 1895
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "delete",
                "optional": false,
                "typeAnnotation": null,
                "start": 1901,
                "end": 1907
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
                    "name": "key",
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
                          "start": 1913,
                          "end": 1914
                        },
                        "typeArguments": null,
                        "start": 1913,
                        "end": 1914
                      },
                      "start": 1911,
                      "end": 1914
                    },
                    "start": 1908,
                    "end": 1914
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1917,
                    "end": 1924
                  },
                  "start": 1915,
                  "end": 1924
                },
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
                            "name": "entry",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1941,
                            "end": 1946
                          },
                          "init": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1949,
                                  "end": 1953
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "weakMap",
                                  "start": 1954,
                                  "end": 1962
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1949,
                                "end": 1962
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "get",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1963,
                                "end": 1966
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1949,
                              "end": 1966
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1967,
                                "end": 1970
                              }
                            ],
                            "optional": false,
                            "start": 1949,
                            "end": 1971
                          },
                          "definite": false,
                          "start": 1941,
                          "end": 1971
                        }
                      ],
                      "declare": false,
                      "start": 1935,
                      "end": 1972
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "entry",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1985,
                          "end": 1990
                        },
                        "operator": "===",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1995,
                          "end": 2004
                        },
                        "start": 1985,
                        "end": 2004
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 2027,
                              "end": 2032
                            },
                            "start": 2020,
                            "end": 2033
                          }
                        ],
                        "start": 2006,
                        "end": 2043
                      },
                      "alternate": null,
                      "start": 1981,
                      "end": 2043
                    },
                    {
                      "type": "VariableDeclaration",
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "ObjectPattern",
                            "decorators": [],
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ref",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2061,
                                  "end": 2064
                                },
                                "value": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ref",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2061,
                                  "end": 2064
                                },
                                "method": false,
                                "shorthand": true,
                                "computed": false,
                                "optional": false,
                                "start": 2061,
                                "end": 2064
                              }
                            ],
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2059,
                            "end": 2066
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "entry",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2069,
                            "end": 2074
                          },
                          "definite": false,
                          "start": 2059,
                          "end": 2074
                        }
                      ],
                      "declare": false,
                      "start": 2053,
                      "end": 2075
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 2084,
                              "end": 2088
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "weakMap",
                              "start": 2089,
                              "end": 2097
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2084,
                            "end": 2097
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "delete",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2098,
                            "end": 2104
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2084,
                          "end": 2104
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2105,
                            "end": 2108
                          }
                        ],
                        "optional": false,
                        "start": 2084,
                        "end": 2109
                      },
                      "directive": null,
                      "start": 2084,
                      "end": 2110
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 2119,
                              "end": 2123
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "refSet",
                              "start": 2124,
                              "end": 2131
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2119,
                            "end": 2131
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "delete",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2132,
                            "end": 2138
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2119,
                          "end": 2138
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2139,
                            "end": 2142
                          }
                        ],
                        "optional": false,
                        "start": 2119,
                        "end": 2143
                      },
                      "directive": null,
                      "start": 2119,
                      "end": 2144
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 2153,
                              "end": 2157
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "finalizationGroup",
                              "start": 2158,
                              "end": 2176
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2153,
                            "end": 2176
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "unregister",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2177,
                            "end": 2187
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2153,
                          "end": 2187
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2188,
                            "end": 2191
                          }
                        ],
                        "optional": false,
                        "start": 2153,
                        "end": 2192
                      },
                      "directive": null,
                      "start": 2153,
                      "end": 2193
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 2209,
                        "end": 2213
                      },
                      "start": 2202,
                      "end": 2214
                    }
                  ],
                  "start": 1925,
                  "end": 2220
                },
                "expression": false,
                "start": 1907,
                "end": 2220
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1901,
              "end": 2220
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2235,
                  "end": 2241
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2242,
                  "end": 2250
                },
                "optional": false,
                "computed": false,
                "start": 2235,
                "end": 2250
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSThisType",
                    "start": 2253,
                    "end": 2257
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "entries",
                      "raw": "\"entries\"",
                      "start": 2258,
                      "end": 2267
                    },
                    "start": 2258,
                    "end": 2267
                  },
                  "start": 2253,
                  "end": 2268
                },
                "start": 2251,
                "end": 2268
              },
              "value": null,
              "computed": true,
              "static": false,
              "declare": true,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 2226,
              "end": 2269
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null,
                "start": 2275,
                "end": 2282
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": true,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Generator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2286,
                      "end": 2295
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSNamedTupleMember",
                              "label": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2297,
                                "end": 2300
                              },
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2302,
                                  "end": 2303
                                },
                                "typeArguments": null,
                                "start": 2302,
                                "end": 2303
                              },
                              "optional": false,
                              "start": 2297,
                              "end": 2303
                            },
                            {
                              "type": "TSNamedTupleMember",
                              "label": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2305,
                                "end": 2310
                              },
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "V",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2312,
                                  "end": 2313
                                },
                                "typeArguments": null,
                                "start": 2312,
                                "end": 2313
                              },
                              "optional": false,
                              "start": 2305,
                              "end": 2313
                            }
                          ],
                          "start": 2296,
                          "end": 2314
                        },
                        {
                          "type": "TSVoidKeyword",
                          "start": 2316,
                          "end": 2320
                        }
                      ],
                      "start": 2295,
                      "end": 2321
                    },
                    "start": 2286,
                    "end": 2321
                  },
                  "start": 2284,
                  "end": 2321
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ForOfStatement",
                      "await": false,
                      "left": {
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ref",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2343,
                              "end": 2346
                            },
                            "init": null,
                            "definite": false,
                            "start": 2343,
                            "end": 2346
                          }
                        ],
                        "declare": false,
                        "start": 2337,
                        "end": 2346
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 2350,
                          "end": 2354
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "refSet",
                          "start": 2355,
                          "end": 2362
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2350,
                        "end": 2362
                      },
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
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2384,
                                  "end": 2387
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ref",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2390,
                                      "end": 2393
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "deref",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2394,
                                      "end": 2399
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2390,
                                    "end": 2399
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 2390,
                                  "end": 2401
                                },
                                "definite": false,
                                "start": 2384,
                                "end": 2401
                              }
                            ],
                            "declare": false,
                            "start": 2378,
                            "end": 2402
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2419,
                                "end": 2422
                              },
                              "operator": "===",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "undefined",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2427,
                                "end": 2436
                              },
                              "start": 2419,
                              "end": 2436
                            },
                            "consequent": {
                              "type": "ContinueStatement",
                              "label": null,
                              "start": 2438,
                              "end": 2447
                            },
                            "alternate": null,
                            "start": 2415,
                            "end": 2447
                          },
                          {
                            "type": "VariableDeclaration",
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "ObjectPattern",
                                  "decorators": [],
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2468,
                                        "end": 2473
                                      },
                                      "value": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2468,
                                        "end": 2473
                                      },
                                      "method": false,
                                      "shorthand": true,
                                      "computed": false,
                                      "optional": false,
                                      "start": 2468,
                                      "end": 2473
                                    }
                                  ],
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2466,
                                  "end": 2475
                                },
                                "init": {
                                  "type": "TSNonNullExpression",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 2478,
                                          "end": 2482
                                        },
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "name": "weakMap",
                                          "start": 2483,
                                          "end": 2491
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 2478,
                                        "end": 2491
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "get",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2492,
                                        "end": 2495
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 2478,
                                      "end": 2495
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "key",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2496,
                                        "end": 2499
                                      }
                                    ],
                                    "optional": false,
                                    "start": 2478,
                                    "end": 2500
                                  },
                                  "start": 2478,
                                  "end": 2501
                                },
                                "definite": false,
                                "start": 2466,
                                "end": 2501
                              }
                            ],
                            "declare": false,
                            "start": 2460,
                            "end": 2502
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "YieldExpression",
                              "delegate": false,
                              "argument": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "key",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2522,
                                    "end": 2525
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2527,
                                    "end": 2532
                                  }
                                ],
                                "start": 2521,
                                "end": 2533
                              },
                              "start": 2515,
                              "end": 2533
                            },
                            "directive": null,
                            "start": 2515,
                            "end": 2534
                          }
                        ],
                        "start": 2364,
                        "end": 2544
                      },
                      "start": 2332,
                      "end": 2544
                    }
                  ],
                  "start": 2322,
                  "end": 2550
                },
                "expression": false,
                "start": 2282,
                "end": 2550
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2274,
              "end": 2550
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "keys",
                "optional": false,
                "typeAnnotation": null,
                "start": 2557,
                "end": 2561
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": true,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ForOfStatement",
                      "await": false,
                      "left": {
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "ObjectPattern",
                              "decorators": [],
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 2587,
                                    "end": 2588
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "key",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2590,
                                    "end": 2593
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 2587,
                                  "end": 2593
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2585,
                              "end": 2595
                            },
                            "init": null,
                            "definite": false,
                            "start": 2585,
                            "end": 2595
                          }
                        ],
                        "declare": false,
                        "start": 2579,
                        "end": 2595
                      },
                      "right": {
                        "type": "ThisExpression",
                        "start": 2599,
                        "end": 2603
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "YieldExpression",
                              "delegate": false,
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2625,
                                "end": 2628
                              },
                              "start": 2619,
                              "end": 2628
                            },
                            "directive": null,
                            "start": 2619,
                            "end": 2629
                          }
                        ],
                        "start": 2605,
                        "end": 2639
                      },
                      "start": 2574,
                      "end": 2639
                    }
                  ],
                  "start": 2564,
                  "end": 2645
                },
                "expression": false,
                "start": 2561,
                "end": 2645
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2556,
              "end": 2645
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null,
                "start": 2652,
                "end": 2658
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": true,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ForOfStatement",
                      "await": false,
                      "left": {
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "ObjectPattern",
                              "decorators": [],
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 2684,
                                    "end": 2685
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2687,
                                    "end": 2692
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 2684,
                                  "end": 2692
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2682,
                              "end": 2694
                            },
                            "init": null,
                            "definite": false,
                            "start": 2682,
                            "end": 2694
                          }
                        ],
                        "declare": false,
                        "start": 2676,
                        "end": 2694
                      },
                      "right": {
                        "type": "ThisExpression",
                        "start": 2698,
                        "end": 2702
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "YieldExpression",
                              "delegate": false,
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2724,
                                "end": 2729
                              },
                              "start": 2718,
                              "end": 2729
                            },
                            "directive": null,
                            "start": 2718,
                            "end": 2730
                          }
                        ],
                        "start": 2704,
                        "end": 2740
                      },
                      "start": 2671,
                      "end": 2740
                    }
                  ],
                  "start": 2661,
                  "end": 2746
                },
                "expression": false,
                "start": 2658,
                "end": 2746
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2651,
              "end": 2746
            }
          ],
          "start": 352,
          "end": 2748
        },
        "abstract": false,
        "declare": false,
        "start": 284,
        "end": 2748
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 277,
      "end": 2748
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 2750,
            "end": 2756
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperties",
            "optional": false,
            "typeAnnotation": null,
            "start": 2757,
            "end": 2773
          },
          "optional": false,
          "computed": false,
          "start": 2750,
          "end": 2773
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "IterableWeakMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 2774,
              "end": 2789
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 2790,
              "end": 2799
            },
            "optional": false,
            "computed": false,
            "start": 2774,
            "end": 2799
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2808,
                    "end": 2814
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2815,
                    "end": 2823
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2808,
                  "end": 2823
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "configurable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2836,
                        "end": 2848
                      },
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 2850,
                        "end": 2854
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2836,
                      "end": 2854
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "enumerable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2864,
                        "end": 2874
                      },
                      "value": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 2876,
                        "end": 2881
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2864,
                      "end": 2881
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "writable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2891,
                        "end": 2899
                      },
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 2901,
                        "end": 2905
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2891,
                      "end": 2905
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2915,
                        "end": 2920
                      },
                      "value": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "TSNonNullExpression",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Object",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2922,
                                "end": 2928
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "getOwnPropertyDescriptor",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2929,
                                "end": 2953
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2922,
                              "end": 2953
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "IterableWeakMap",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2967,
                                  "end": 2982
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prototype",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2983,
                                  "end": 2992
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2967,
                                "end": 2992
                              },
                              {
                                "type": "Literal",
                                "value": "entries",
                                "raw": "\"entries\"",
                                "start": 3006,
                                "end": 3015
                              }
                            ],
                            "optional": false,
                            "start": 2922,
                            "end": 3026
                          },
                          "start": 2922,
                          "end": 3027
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3028,
                          "end": 3033
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2922,
                        "end": 3033
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2915,
                      "end": 3033
                    }
                  ],
                  "start": 2826,
                  "end": 3040
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 2807,
                "end": 3040
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3047,
                    "end": 3053
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3054,
                    "end": 3065
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3047,
                  "end": 3065
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "configurable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3078,
                        "end": 3090
                      },
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 3092,
                        "end": 3096
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3078,
                      "end": 3096
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "enumerable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3106,
                        "end": 3116
                      },
                      "value": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 3118,
                        "end": 3123
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3106,
                      "end": 3123
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "writable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3133,
                        "end": 3141
                      },
                      "value": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 3143,
                        "end": 3148
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3133,
                      "end": 3148
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3158,
                        "end": 3163
                      },
                      "value": {
                        "type": "Literal",
                        "value": "IterableWeakMap",
                        "raw": "\"IterableWeakMap\"",
                        "start": 3165,
                        "end": 3182
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3158,
                      "end": 3182
                    }
                  ],
                  "start": 3068,
                  "end": 3189
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 3046,
                "end": 3189
              }
            ],
            "start": 2801,
            "end": 3192
          }
        ],
        "optional": false,
        "start": 2750,
        "end": 3193
      },
      "directive": null,
      "start": 2750,
      "end": 3194
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 25,
  "end": 3194
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 25,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "IterableWeakMap_cleanup",
    "start": 31,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
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
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 60,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 65,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 78,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "WeakRef",
    "start": 92,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 100,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 113,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 122,
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
    "value": "Set",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "WeakRef",
    "start": 131,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 139,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 152,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 161,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "delete",
    "start": 165,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 172,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 277,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 284,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "IterableWeakMap",
    "start": 290,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 306,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 308,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 316,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 327,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "WeakMap",
    "start": 338,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 358,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 366,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 376,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "toStringTag",
    "start": 383,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "String",
    "value": "\"IterableWeakMap\"",
    "start": 397,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  },
  {
    "type": "PrivateIdentifier",
    "value": "weakMap",
    "start": 421,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 430,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 432,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "WeakMap",
    "start": 436,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 449,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 458,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "WeakRef",
    "start": 463,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 475,
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
    "value": "V",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489
  },
  {
    "type": "PrivateIdentifier",
    "value": "refSet",
    "start": 494,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 502,
    "end": 503
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 504,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 508,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "WeakRef",
    "start": 512,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526
  },
  {
    "type": "PrivateIdentifier",
    "value": "finalizationGroup",
    "start": 531,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 550,
    "end": 551
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 552,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "FinalizationRegistry",
    "start": 556,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "IterableWeakMap_cleanup",
    "start": 577,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 608,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "iterable",
    "start": 620,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 630,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 640,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 648,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 659,
    "end": 660
  },
  {
    "type": "Null",
    "value": "null",
    "start": 661,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 666,
    "end": 667
  },
  {
    "type": "Null",
    "value": "null",
    "start": 668,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 674,
    "end": 675
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 684,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "iterable",
    "start": 688,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 697,
    "end": 700
  },
  {
    "type": "Null",
    "value": "null",
    "start": 701,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 707,
    "end": 708
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 721,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 725,
    "end": 726
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 726,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 732,
    "end": 733
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 737,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 740,
    "end": 741
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 745,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 753,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "iterable",
    "start": 756,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 766,
    "end": 767
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 784,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 789,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 793,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 798,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 841,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 845,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 853,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 862,
    "end": 863
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 864,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 869,
    "end": 870
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 879,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 885,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 891,
    "end": 892
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 893,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 897,
    "end": 898
  },
  {
    "type": "PrivateIdentifier",
    "value": "weakMap",
    "start": 898,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 907,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 911,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 915,
    "end": 916
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 925,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 929,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 935,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 939,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 964,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 970,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 978,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 993,
    "end": 994
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 995,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1014,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1020,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1026,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "WeakRef",
    "start": 1030,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1038,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1057,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "PrivateIdentifier",
    "value": "weakMap",
    "start": 1062,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1071,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1075,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1082,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1087,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1109,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "PrivateIdentifier",
    "value": "refSet",
    "start": 1114,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 1122,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1126,
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
    "value": ";",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1144,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "PrivateIdentifier",
    "value": "finalizationGroup",
    "start": 1149,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "register",
    "start": 1168,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1177,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1200,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1205,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "PrivateIdentifier",
    "value": "refSet",
    "start": 1210,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1235,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1255,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1279,
    "end": 1285
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1286,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "has",
    "start": 1303,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1307,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "K",
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
    "type": "Punctuator",
    "value": ":",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1316,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1334,
    "end": 1340
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1341,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "PrivateIdentifier",
    "value": "weakMap",
    "start": 1346,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "has",
    "start": 1355,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1359,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1376,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1380,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1393,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1413,
    "end": 1419
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1420,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "PrivateIdentifier",
    "value": "weakMap",
    "start": 1425,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1434,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1438,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1442,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1444,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "getOrInsert",
    "start": 1462,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1474,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "defaultValue",
    "start": 1482,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1512,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1517,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "has",
    "start": 1522,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1526,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1546,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1551,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1555,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Identifier",
    "value": "defaultValue",
    "start": 1560,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1587,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "defaultValue",
    "start": 1594,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1626,
    "end": 1632
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1633,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1638,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1642,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "getOrInsertComputed",
    "start": 1660,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1680,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 1688,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1696,
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
    "value": "key",
    "start": 1699,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1707,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "V",
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
    "type": "Keyword",
    "value": "if",
    "start": 1726,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1731,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "has",
    "start": 1736,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1740,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1760,
    "end": 1765
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1766,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 1774,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1783,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1801,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1806,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1810,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1815,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1835,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1842,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1867,
    "end": 1873
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1874,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1879,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1883,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Identifier",
    "value": "delete",
    "start": 1901,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1908,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1917,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1935,
    "end": 1940
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 1941,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1949,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "PrivateIdentifier",
    "value": "weakMap",
    "start": 1954,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1963,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1967,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1981,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 1985,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1991,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1995,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2020,
    "end": 2026
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2027,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2053,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 2061,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 2069,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2084,
    "end": 2088
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "PrivateIdentifier",
    "value": "weakMap",
    "start": 2089,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Identifier",
    "value": "delete",
    "start": 2098,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2105,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2109,
    "end": 2110
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2119,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "PrivateIdentifier",
    "value": "refSet",
    "start": 2124,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Identifier",
    "value": "delete",
    "start": 2132,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 2139,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2153,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "PrivateIdentifier",
    "value": "finalizationGroup",
    "start": 2158,
    "end": 2176
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Identifier",
    "value": "unregister",
    "start": 2177,
    "end": 2187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 2188,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2202,
    "end": 2208
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2209,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2226,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 2235,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 2242,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2253,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "String",
    "value": "\"entries\"",
    "start": 2258,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 2275,
    "end": 2282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 2286,
    "end": 2295
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2297,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2305,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2316,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2332,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2337,
    "end": 2342
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 2343,
    "end": 2346
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2347,
    "end": 2349
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2350,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "PrivateIdentifier",
    "value": "refSet",
    "start": 2355,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2378,
    "end": 2383
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2384,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 2390,
    "end": 2393
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Identifier",
    "value": "deref",
    "start": 2394,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2401,
    "end": 2402
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2415,
    "end": 2417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2419,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2423,
    "end": 2426
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2427,
    "end": 2436
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 2438,
    "end": 2446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2446,
    "end": 2447
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2460,
    "end": 2465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2466,
    "end": 2467
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2468,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2474,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2476,
    "end": 2477
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2478,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "PrivateIdentifier",
    "value": "weakMap",
    "start": 2483,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 2492,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2496,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2515,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2522,
    "end": 2525
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2527,
    "end": 2532
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2549,
    "end": 2550
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2556,
    "end": 2557
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 2557,
    "end": 2561
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2562,
    "end": 2563
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2564,
    "end": 2565
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2574,
    "end": 2577
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2578,
    "end": 2579
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2579,
    "end": 2584
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2587,
    "end": 2588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2588,
    "end": 2589
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2590,
    "end": 2593
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2594,
    "end": 2595
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2596,
    "end": 2598
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2599,
    "end": 2603
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2605,
    "end": 2606
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2619,
    "end": 2624
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2625,
    "end": 2628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2628,
    "end": 2629
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2638,
    "end": 2639
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 2652,
    "end": 2658
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2658,
    "end": 2659
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2671,
    "end": 2674
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2675,
    "end": 2676
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2676,
    "end": 2681
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2684,
    "end": 2685
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2685,
    "end": 2686
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2687,
    "end": 2692
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2695,
    "end": 2697
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2698,
    "end": 2702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2718,
    "end": 2723
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2724,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2729,
    "end": 2730
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2739,
    "end": 2740
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2745,
    "end": 2746
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2747,
    "end": 2748
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 2750,
    "end": 2756
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2756,
    "end": 2757
  },
  {
    "type": "Identifier",
    "value": "defineProperties",
    "start": 2757,
    "end": 2773
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2773,
    "end": 2774
  },
  {
    "type": "Identifier",
    "value": "IterableWeakMap",
    "start": 2774,
    "end": 2789
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 2790,
    "end": 2799
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2799,
    "end": 2800
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2801,
    "end": 2802
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2807,
    "end": 2808
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 2808,
    "end": 2814
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2814,
    "end": 2815
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 2815,
    "end": 2823
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2823,
    "end": 2824
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2824,
    "end": 2825
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2826,
    "end": 2827
  },
  {
    "type": "Identifier",
    "value": "configurable",
    "start": 2836,
    "end": 2848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2850,
    "end": 2854
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2854,
    "end": 2855
  },
  {
    "type": "Identifier",
    "value": "enumerable",
    "start": 2864,
    "end": 2874
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2874,
    "end": 2875
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2876,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Identifier",
    "value": "writable",
    "start": 2891,
    "end": 2899
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2899,
    "end": 2900
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2901,
    "end": 2905
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2905,
    "end": 2906
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2915,
    "end": 2920
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2920,
    "end": 2921
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 2922,
    "end": 2928
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2928,
    "end": 2929
  },
  {
    "type": "Identifier",
    "value": "getOwnPropertyDescriptor",
    "start": 2929,
    "end": 2953
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Identifier",
    "value": "IterableWeakMap",
    "start": 2967,
    "end": 2982
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2982,
    "end": 2983
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 2983,
    "end": 2992
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2992,
    "end": 2993
  },
  {
    "type": "String",
    "value": "\"entries\"",
    "start": 3006,
    "end": 3015
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3015,
    "end": 3016
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3025,
    "end": 3026
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3026,
    "end": 3027
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3028,
    "end": 3033
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3033,
    "end": 3034
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3039,
    "end": 3040
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3040,
    "end": 3041
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3046,
    "end": 3047
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 3047,
    "end": 3053
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3053,
    "end": 3054
  },
  {
    "type": "Identifier",
    "value": "toStringTag",
    "start": 3054,
    "end": 3065
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3065,
    "end": 3066
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3066,
    "end": 3067
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3068,
    "end": 3069
  },
  {
    "type": "Identifier",
    "value": "configurable",
    "start": 3078,
    "end": 3090
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3090,
    "end": 3091
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3092,
    "end": 3096
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3096,
    "end": 3097
  },
  {
    "type": "Identifier",
    "value": "enumerable",
    "start": 3106,
    "end": 3116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 3118,
    "end": 3123
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3123,
    "end": 3124
  },
  {
    "type": "Identifier",
    "value": "writable",
    "start": 3133,
    "end": 3141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3141,
    "end": 3142
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 3143,
    "end": 3148
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3148,
    "end": 3149
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3158,
    "end": 3163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3163,
    "end": 3164
  },
  {
    "type": "String",
    "value": "\"IterableWeakMap\"",
    "start": 3165,
    "end": 3182
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3182,
    "end": 3183
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3188,
    "end": 3189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3189,
    "end": 3190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3191,
    "end": 3192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3192,
    "end": 3193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3193,
    "end": 3194
  }
]
```
