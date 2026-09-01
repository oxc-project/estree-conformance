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
        "name": "OuterMod",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 18
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "someExportedOuterFunc",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 59
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 72,
                        "end": 73
                      },
                      "prefix": true,
                      "start": 71,
                      "end": 73
                    },
                    "start": 64,
                    "end": 74
                  }
                ],
                "start": 62,
                "end": 76
              },
              "expression": false,
              "start": 29,
              "end": 76
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 22,
            "end": 76
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "OuterInnerMod",
                "optional": false,
                "typeAnnotation": null,
                "start": 96,
                "end": 109
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "someExportedOuterInnerFunc",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 130,
                        "end": 156
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "foo",
                              "raw": "\"foo\"",
                              "start": 168,
                              "end": 173
                            },
                            "start": 161,
                            "end": 174
                          }
                        ],
                        "start": 159,
                        "end": 176
                      },
                      "expression": false,
                      "start": 121,
                      "end": 176
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 114,
                    "end": 176
                  }
                ],
                "start": 110,
                "end": 179
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 86,
              "end": 179
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 79,
            "end": 179
          }
        ],
        "start": 19,
        "end": 181
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 181
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OuterInnerAlias",
        "optional": false,
        "typeAnnotation": null,
        "start": 190,
        "end": 205
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "OuterMod",
          "optional": false,
          "typeAnnotation": null,
          "start": 208,
          "end": 216
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "OuterInnerMod",
          "optional": false,
          "typeAnnotation": null,
          "start": 217,
          "end": 230
        },
        "start": 208,
        "end": 230
      },
      "importKind": "value",
      "start": 183,
      "end": 231
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 243,
        "end": 244
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "InnerMod",
                "optional": false,
                "typeAnnotation": null,
                "start": 266,
                "end": 274
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "someExportedInnerFunc",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 295,
                        "end": 316
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "UnaryExpression",
                              "operator": "-",
                              "argument": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 329,
                                "end": 330
                              },
                              "prefix": true,
                              "start": 328,
                              "end": 330
                            },
                            "start": 321,
                            "end": 331
                          }
                        ],
                        "start": 319,
                        "end": 333
                      },
                      "expression": false,
                      "start": 286,
                      "end": 333
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 279,
                    "end": 333
                  }
                ],
                "start": 275,
                "end": 336
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 256,
              "end": 336
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 249,
            "end": 336
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 351,
                "end": 352
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 357,
                      "end": 358
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 357,
                    "end": 358
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 362,
                      "end": 363
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 362,
                    "end": 363
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 367,
                      "end": 368
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 367,
                    "end": 368
                  }
                ],
                "start": 353,
                "end": 372
              },
              "const": false,
              "declare": false,
              "start": 346,
              "end": 372
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 339,
            "end": 372
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
                    "start": 386,
                    "end": 387
                  },
                  "init": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 390,
                    "end": 391
                  },
                  "definite": false,
                  "start": 386,
                  "end": 391
                }
              ],
              "declare": false,
              "start": 382,
              "end": 392
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 375,
            "end": 392
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
                    "name": "exported_var",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 413,
                    "end": 425
                  },
                  "init": null,
                  "definite": false,
                  "start": 413,
                  "end": 425
                }
              ],
              "declare": true,
              "start": 401,
              "end": 426
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 394,
            "end": 426
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 433,
                  "end": 434
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 437,
                    "end": 438
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 441,
                    "end": 442
                  },
                  "start": 437,
                  "end": 442
                },
                "definite": false,
                "start": 433,
                "end": 442
              }
            ],
            "declare": false,
            "start": 429,
            "end": 443
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
                "start": 464,
                "end": 465
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
                      "name": "someMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 470,
                      "end": 480
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 483,
                        "end": 489
                      },
                      "start": 482,
                      "end": 489
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 470,
                    "end": 490
                  }
                ],
                "start": 466,
                "end": 493
              },
              "declare": false,
              "start": 454,
              "end": 493
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 447,
            "end": 493
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
              "start": 503,
              "end": 504
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 513,
                    "end": 514
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 517,
                    "end": 518
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 506,
                  "end": 519
                }
              ],
              "start": 505,
              "end": 520
            },
            "abstract": false,
            "declare": false,
            "start": 497,
            "end": 520
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 537,
                "end": 538
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
                    "start": 550,
                    "end": 551
                  },
                  "typeArguments": null,
                  "start": 550,
                  "end": 551
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
                      "name": "someMethodThatCallsAnOuterMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 563,
                      "end": 595
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
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
                                  "name": "OuterInnerAlias",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 606,
                                  "end": 621
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "someExportedOuterInnerFunc",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 622,
                                  "end": 648
                                },
                                "optional": false,
                                "computed": false,
                                "start": 606,
                                "end": 648
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 606,
                              "end": 650
                            },
                            "start": 599,
                            "end": 651
                          }
                        ],
                        "start": 598,
                        "end": 652
                      },
                      "expression": false,
                      "start": 595,
                      "end": 652
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 556,
                    "end": 652
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "someMethodThatCallsAnInnerMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 662,
                      "end": 694
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
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
                                  "name": "InnerMod",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 705,
                                  "end": 713
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "someExportedInnerFunc",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 714,
                                  "end": 735
                                },
                                "optional": false,
                                "computed": false,
                                "start": 705,
                                "end": 735
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 705,
                              "end": 737
                            },
                            "start": 698,
                            "end": 738
                          }
                        ],
                        "start": 697,
                        "end": 739
                      },
                      "expression": false,
                      "start": 694,
                      "end": 739
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 655,
                    "end": 739
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "someMethodThatCallsAnOuterInnerMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 749,
                      "end": 786
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
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
                                  "name": "OuterMod",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 797,
                                  "end": 805
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "someExportedOuterFunc",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 806,
                                  "end": 827
                                },
                                "optional": false,
                                "computed": false,
                                "start": 797,
                                "end": 827
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 797,
                              "end": 829
                            },
                            "start": 790,
                            "end": 830
                          }
                        ],
                        "start": 789,
                        "end": 831
                      },
                      "expression": false,
                      "start": 786,
                      "end": 831
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 742,
                    "end": 831
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "someMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 841,
                      "end": 851
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 863,
                              "end": 864
                            },
                            "start": 856,
                            "end": 865
                          }
                        ],
                        "start": 854,
                        "end": 867
                      },
                      "expression": false,
                      "start": 851,
                      "end": 867
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 834,
                    "end": 867
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "someProp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 877,
                      "end": 885
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 888,
                      "end": 889
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 870,
                    "end": 890
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
                      "start": 894,
                      "end": 905
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "FunctionDeclaration",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "someInnerFunc",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 925,
                              "end": 938
                            },
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2",
                                    "start": 950,
                                    "end": 951
                                  },
                                  "start": 943,
                                  "end": 952
                                }
                              ],
                              "start": 941,
                              "end": 954
                            },
                            "expression": false,
                            "start": 916,
                            "end": 954
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
                                  "name": "someInnerVar",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 971,
                                  "end": 983
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 3,
                                  "raw": "3",
                                  "start": 986,
                                  "end": 987
                                },
                                "definite": false,
                                "start": 971,
                                "end": 987
                              }
                            ],
                            "declare": false,
                            "start": 967,
                            "end": 988
                          }
                        ],
                        "start": 908,
                        "end": 992
                      },
                      "expression": false,
                      "start": 905,
                      "end": 992
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 894,
                    "end": 992
                  }
                ],
                "start": 552,
                "end": 995
              },
              "abstract": false,
              "declare": false,
              "start": 531,
              "end": 995
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 524,
            "end": 995
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
                  "name": "someModuleVar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1002,
                  "end": 1015
                },
                "init": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 1018,
                  "end": 1019
                },
                "definite": false,
                "start": 1002,
                "end": 1019
              }
            ],
            "declare": false,
            "start": 998,
            "end": 1020
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "someModuleFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 1032,
              "end": 1050
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 1062,
                    "end": 1063
                  },
                  "start": 1055,
                  "end": 1064
                }
              ],
              "start": 1053,
              "end": 1065
            },
            "expression": false,
            "start": 1023,
            "end": 1065
          }
        ],
        "start": 245,
        "end": 1067
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 233,
      "end": 1067
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 1079,
        "end": 1080
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1095,
                    "end": 1096
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1099,
                    "end": 1100
                  },
                  "definite": false,
                  "start": 1095,
                  "end": 1100
                }
              ],
              "declare": false,
              "start": 1091,
              "end": 1101
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1084,
            "end": 1101
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
                    "name": "meb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1114,
                    "end": 1117
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1120,
                        "end": 1121
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1122,
                        "end": 1123
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1120,
                      "end": 1123
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1124,
                      "end": 1125
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1120,
                    "end": 1125
                  },
                  "definite": false,
                  "start": 1114,
                  "end": 1125
                }
              ],
              "declare": false,
              "start": 1110,
              "end": 1126
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1103,
            "end": 1126
          }
        ],
        "start": 1081,
        "end": 1128
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1069,
      "end": 1128
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
            "name": "cprime",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1143,
                    "end": 1144
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1145,
                    "end": 1146
                  },
                  "start": 1143,
                  "end": 1146
                },
                "typeArguments": null,
                "start": 1143,
                "end": 1146
              },
              "start": 1141,
              "end": 1146
            },
            "start": 1134,
            "end": 1146
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1150,
                  "end": 1151
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1152,
                  "end": 1153
                },
                "start": 1150,
                "end": 1153
              },
              "typeArguments": null,
              "start": 1150,
              "end": 1153
            },
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1154,
              "end": 1158
            },
            "start": 1149,
            "end": 1158
          },
          "definite": false,
          "start": 1134,
          "end": 1158
        }
      ],
      "declare": false,
      "start": 1130,
      "end": 1159
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
            "start": 1165,
            "end": 1166
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 1173,
                "end": 1174
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1175,
                "end": 1176
              },
              "optional": false,
              "computed": false,
              "start": 1173,
              "end": 1176
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1169,
            "end": 1178
          },
          "definite": false,
          "start": 1165,
          "end": 1178
        }
      ],
      "declare": false,
      "start": 1161,
      "end": 1179
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 1184,
            "end": 1185
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1188,
              "end": 1189
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1190,
              "end": 1191
            },
            "optional": false,
            "computed": false,
            "start": 1188,
            "end": 1191
          },
          "definite": false,
          "start": 1184,
          "end": 1191
        }
      ],
      "declare": false,
      "start": 1180,
      "end": 1192
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
            "name": "alpha",
            "optional": false,
            "typeAnnotation": null,
            "start": 1197,
            "end": 1202
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 1205,
                "end": 1206
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1207,
                "end": 1208
              },
              "optional": false,
              "computed": false,
              "start": 1205,
              "end": 1208
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1209,
              "end": 1210
            },
            "optional": false,
            "computed": false,
            "start": 1205,
            "end": 1210
          },
          "definite": false,
          "start": 1197,
          "end": 1210
        }
      ],
      "declare": false,
      "start": 1193,
      "end": 1211
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
            "name": "omega",
            "optional": false,
            "typeAnnotation": null,
            "start": 1216,
            "end": 1221
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1224,
              "end": 1225
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exported_var",
              "optional": false,
              "typeAnnotation": null,
              "start": 1226,
              "end": 1238
            },
            "optional": false,
            "computed": false,
            "start": 1224,
            "end": 1238
          },
          "definite": false,
          "start": 1216,
          "end": 1238
        }
      ],
      "declare": false,
      "start": 1212,
      "end": 1239
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1240,
            "end": 1241
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "someMethodThatCallsAnOuterMethod",
            "optional": false,
            "typeAnnotation": null,
            "start": 1242,
            "end": 1274
          },
          "optional": false,
          "computed": false,
          "start": 1240,
          "end": 1274
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1240,
        "end": 1276
      },
      "directive": null,
      "start": 1240,
      "end": 1277
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1277
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
    "value": "OuterMod",
    "start": 10,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 22,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 29,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "someExportedOuterFunc",
    "start": 38,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 71,
    "end": 72
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 79,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 86,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "OuterInnerMod",
    "start": 96,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 114,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 121,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "someExportedOuterInnerFunc",
    "start": 130,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 161,
    "end": 167
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 168,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 183,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "OuterInnerAlias",
    "start": 190,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "OuterMod",
    "start": 208,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "OuterInnerMod",
    "start": 217,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 233,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 245,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 249,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 256,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "InnerMod",
    "start": 266,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 279,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 286,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "someExportedInnerFunc",
    "start": 295,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 321,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 328,
    "end": 329
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 335,
    "end": 336
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 339,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 346,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "type": "Identifier",
    "value": "C",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 371,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 375,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 382,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 388,
    "end": 389
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 391,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 394,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 401,
    "end": 408
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 409,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "exported_var",
    "start": 413,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 429,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 447,
    "end": 453
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 454,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "someMethod",
    "start": 470,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 483,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 492,
    "end": 493
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 497,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 505,
    "end": 506
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 506,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 515,
    "end": 516
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 519,
    "end": 520
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 524,
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
    "value": "C",
    "start": 537,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 539,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 552,
    "end": 553
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 556,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "someMethodThatCallsAnOuterMethod",
    "start": 563,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 598,
    "end": 599
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 599,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "OuterInnerAlias",
    "start": 606,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "someExportedOuterInnerFunc",
    "start": 622,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 651,
    "end": 652
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 655,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "someMethodThatCallsAnInnerMethod",
    "start": 662,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 694,
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
    "type": "Keyword",
    "value": "return",
    "start": 698,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "InnerMod",
    "start": 705,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "someExportedInnerFunc",
    "start": 714,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 738,
    "end": 739
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 742,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "someMethodThatCallsAnOuterInnerMethod",
    "start": 749,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 789,
    "end": 790
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 790,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "OuterMod",
    "start": 797,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "someExportedOuterFunc",
    "start": 806,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 830,
    "end": 831
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 834,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "someMethod",
    "start": 841,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 854,
    "end": 855
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 856,
    "end": 862
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 866,
    "end": 867
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 870,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "someProp",
    "start": 877,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 886,
    "end": 887
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 894,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 908,
    "end": 909
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 916,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "someInnerFunc",
    "start": 925,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 941,
    "end": 942
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 943,
    "end": 949
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 953,
    "end": 954
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 967,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "someInnerVar",
    "start": 971,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 984,
    "end": 985
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 994,
    "end": 995
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 998,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "someModuleVar",
    "start": 1002,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1023,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "someModuleFunction",
    "start": 1032,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1055,
    "end": 1061
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1069,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1084,
    "end": 1090
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1091,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1103,
    "end": 1109
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1110,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "meb",
    "start": 1114,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1120,
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
    "value": "E",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1130,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "cprime",
    "start": 1134,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1154,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1161,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1169,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1180,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1193,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "alpha",
    "start": 1197,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1212,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "omega",
    "start": 1216,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "exported_var",
    "start": 1226,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "someMethodThatCallsAnOuterMethod",
    "start": 1242,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1276,
    "end": 1277
  }
]
```
