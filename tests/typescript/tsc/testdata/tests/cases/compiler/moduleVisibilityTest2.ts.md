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
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "InnerMod",
              "optional": false,
              "typeAnnotation": null,
              "start": 259,
              "end": 267
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
                      "start": 288,
                      "end": 309
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
                              "start": 322,
                              "end": 323
                            },
                            "prefix": true,
                            "start": 321,
                            "end": 323
                          },
                          "start": 314,
                          "end": 324
                        }
                      ],
                      "start": 312,
                      "end": 326
                    },
                    "expression": false,
                    "start": 279,
                    "end": 326
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 272,
                  "end": 326
                }
              ],
              "start": 268,
              "end": 329
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 249,
            "end": 329
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 337,
              "end": 338
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
                    "start": 343,
                    "end": 344
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 343,
                  "end": 344
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 348,
                    "end": 349
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 348,
                  "end": 349
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 353,
                    "end": 354
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 353,
                  "end": 354
                }
              ],
              "start": 339,
              "end": 358
            },
            "const": false,
            "declare": false,
            "start": 332,
            "end": 358
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
                  "start": 365,
                  "end": 366
                },
                "init": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 369,
                  "end": 370
                },
                "definite": false,
                "start": 365,
                "end": 370
              }
            ],
            "declare": false,
            "start": 361,
            "end": 371
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
                    "start": 392,
                    "end": 404
                  },
                  "init": null,
                  "definite": false,
                  "start": 392,
                  "end": 404
                }
              ],
              "declare": true,
              "start": 380,
              "end": 405
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 373,
            "end": 405
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
                  "start": 412,
                  "end": 413
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 416,
                    "end": 417
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 420,
                    "end": 421
                  },
                  "start": 416,
                  "end": 421
                },
                "definite": false,
                "start": 412,
                "end": 421
              }
            ],
            "declare": false,
            "start": 408,
            "end": 422
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 436,
              "end": 437
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
                    "start": 442,
                    "end": 452
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
                      "start": 455,
                      "end": 461
                    },
                    "start": 454,
                    "end": 461
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 442,
                  "end": 462
                }
              ],
              "start": 438,
              "end": 465
            },
            "declare": false,
            "start": 426,
            "end": 465
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
              "start": 475,
              "end": 476
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
                    "start": 485,
                    "end": 486
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 489,
                    "end": 490
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 478,
                  "end": 491
                }
              ],
              "start": 477,
              "end": 492
            },
            "abstract": false,
            "declare": false,
            "start": 469,
            "end": 492
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
                "start": 509,
                "end": 510
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
                    "start": 522,
                    "end": 523
                  },
                  "typeArguments": null,
                  "start": 522,
                  "end": 523
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
                      "start": 535,
                      "end": 567
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
                                  "start": 578,
                                  "end": 593
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "someExportedOuterInnerFunc",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 594,
                                  "end": 620
                                },
                                "optional": false,
                                "computed": false,
                                "start": 578,
                                "end": 620
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 578,
                              "end": 622
                            },
                            "start": 571,
                            "end": 623
                          }
                        ],
                        "start": 570,
                        "end": 624
                      },
                      "expression": false,
                      "start": 567,
                      "end": 624
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 528,
                    "end": 624
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
                      "start": 634,
                      "end": 666
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
                                  "start": 677,
                                  "end": 685
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "someExportedInnerFunc",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 686,
                                  "end": 707
                                },
                                "optional": false,
                                "computed": false,
                                "start": 677,
                                "end": 707
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 677,
                              "end": 709
                            },
                            "start": 670,
                            "end": 710
                          }
                        ],
                        "start": 669,
                        "end": 711
                      },
                      "expression": false,
                      "start": 666,
                      "end": 711
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 627,
                    "end": 711
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
                      "start": 721,
                      "end": 758
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
                                  "start": 769,
                                  "end": 777
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "someExportedOuterFunc",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 778,
                                  "end": 799
                                },
                                "optional": false,
                                "computed": false,
                                "start": 769,
                                "end": 799
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 769,
                              "end": 801
                            },
                            "start": 762,
                            "end": 802
                          }
                        ],
                        "start": 761,
                        "end": 803
                      },
                      "expression": false,
                      "start": 758,
                      "end": 803
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 714,
                    "end": 803
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
                      "start": 813,
                      "end": 823
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
                              "start": 835,
                              "end": 836
                            },
                            "start": 828,
                            "end": 837
                          }
                        ],
                        "start": 826,
                        "end": 839
                      },
                      "expression": false,
                      "start": 823,
                      "end": 839
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 806,
                    "end": 839
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
                      "start": 849,
                      "end": 857
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 860,
                      "end": 861
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 842,
                    "end": 862
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
                      "start": 866,
                      "end": 877
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
                              "start": 897,
                              "end": 910
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
                                    "start": 922,
                                    "end": 923
                                  },
                                  "start": 915,
                                  "end": 924
                                }
                              ],
                              "start": 913,
                              "end": 926
                            },
                            "expression": false,
                            "start": 888,
                            "end": 926
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
                                  "start": 943,
                                  "end": 955
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 3,
                                  "raw": "3",
                                  "start": 958,
                                  "end": 959
                                },
                                "definite": false,
                                "start": 943,
                                "end": 959
                              }
                            ],
                            "declare": false,
                            "start": 939,
                            "end": 960
                          }
                        ],
                        "start": 880,
                        "end": 964
                      },
                      "expression": false,
                      "start": 877,
                      "end": 964
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 866,
                    "end": 964
                  }
                ],
                "start": 524,
                "end": 970
              },
              "abstract": false,
              "declare": false,
              "start": 503,
              "end": 970
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 496,
            "end": 970
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
                  "start": 977,
                  "end": 990
                },
                "init": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 993,
                  "end": 994
                },
                "definite": false,
                "start": 977,
                "end": 994
              }
            ],
            "declare": false,
            "start": 973,
            "end": 995
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "someModuleFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 1007,
              "end": 1025
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
                    "start": 1037,
                    "end": 1038
                  },
                  "start": 1030,
                  "end": 1039
                }
              ],
              "start": 1028,
              "end": 1040
            },
            "expression": false,
            "start": 998,
            "end": 1040
          }
        ],
        "start": 245,
        "end": 1042
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 233,
      "end": 1042
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 1054,
        "end": 1055
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
                    "start": 1070,
                    "end": 1071
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1074,
                    "end": 1075
                  },
                  "definite": false,
                  "start": 1070,
                  "end": 1075
                }
              ],
              "declare": false,
              "start": 1066,
              "end": 1076
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1059,
            "end": 1076
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
                    "start": 1089,
                    "end": 1092
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
                        "start": 1095,
                        "end": 1096
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1097,
                        "end": 1098
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1095,
                      "end": 1098
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1099,
                      "end": 1100
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1095,
                    "end": 1100
                  },
                  "definite": false,
                  "start": 1089,
                  "end": 1100
                }
              ],
              "declare": false,
              "start": 1085,
              "end": 1101
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1078,
            "end": 1101
          }
        ],
        "start": 1056,
        "end": 1103
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1044,
      "end": 1103
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
                    "start": 1118,
                    "end": 1119
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1120,
                    "end": 1121
                  },
                  "start": 1118,
                  "end": 1121
                },
                "typeArguments": null,
                "start": 1118,
                "end": 1121
              },
              "start": 1116,
              "end": 1121
            },
            "start": 1109,
            "end": 1121
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
                  "start": 1125,
                  "end": 1126
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1127,
                  "end": 1128
                },
                "start": 1125,
                "end": 1128
              },
              "typeArguments": null,
              "start": 1125,
              "end": 1128
            },
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1129,
              "end": 1133
            },
            "start": 1124,
            "end": 1133
          },
          "definite": false,
          "start": 1109,
          "end": 1133
        }
      ],
      "declare": false,
      "start": 1105,
      "end": 1134
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
            "start": 1140,
            "end": 1141
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
                "start": 1148,
                "end": 1149
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1150,
                "end": 1151
              },
              "optional": false,
              "computed": false,
              "start": 1148,
              "end": 1151
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1144,
            "end": 1153
          },
          "definite": false,
          "start": 1140,
          "end": 1153
        }
      ],
      "declare": false,
      "start": 1136,
      "end": 1154
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
            "start": 1159,
            "end": 1160
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1163,
              "end": 1164
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1165,
              "end": 1166
            },
            "optional": false,
            "computed": false,
            "start": 1163,
            "end": 1166
          },
          "definite": false,
          "start": 1159,
          "end": 1166
        }
      ],
      "declare": false,
      "start": 1155,
      "end": 1167
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
            "start": 1172,
            "end": 1177
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
                "start": 1180,
                "end": 1181
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1182,
                "end": 1183
              },
              "optional": false,
              "computed": false,
              "start": 1180,
              "end": 1183
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1184,
              "end": 1185
            },
            "optional": false,
            "computed": false,
            "start": 1180,
            "end": 1185
          },
          "definite": false,
          "start": 1172,
          "end": 1185
        }
      ],
      "declare": false,
      "start": 1168,
      "end": 1186
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
            "start": 1191,
            "end": 1196
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1199,
              "end": 1200
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exported_var",
              "optional": false,
              "typeAnnotation": null,
              "start": 1201,
              "end": 1213
            },
            "optional": false,
            "computed": false,
            "start": 1199,
            "end": 1213
          },
          "definite": false,
          "start": 1191,
          "end": 1213
        }
      ],
      "declare": false,
      "start": 1187,
      "end": 1214
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
            "start": 1215,
            "end": 1216
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "someMethodThatCallsAnOuterMethod",
            "optional": false,
            "typeAnnotation": null,
            "start": 1217,
            "end": 1249
          },
          "optional": false,
          "computed": false,
          "start": 1215,
          "end": 1249
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1215,
        "end": 1251
      },
      "directive": null,
      "start": 1215,
      "end": 1252
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1252
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
    "type": "Identifier",
    "value": "namespace",
    "start": 249,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "InnerMod",
    "start": 259,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 272,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 279,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "someExportedInnerFunc",
    "start": 288,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 314,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 321,
    "end": 322
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 332,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 357,
    "end": 358
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 361,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 367,
    "end": 368
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 373,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 380,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 388,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "exported_var",
    "start": 392,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 408,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 421,
    "end": 422
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 426,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "someMethod",
    "start": 442,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 455,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 464,
    "end": 465
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 469,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 477,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 478,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 487,
    "end": 488
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 491,
    "end": 492
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 496,
    "end": 502
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 503,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 509,
    "end": 510
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 511,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 524,
    "end": 525
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 528,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "someMethodThatCallsAnOuterMethod",
    "start": 535,
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
    "value": "{",
    "start": 570,
    "end": 571
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 571,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "OuterInnerAlias",
    "start": 578,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "someExportedOuterInnerFunc",
    "start": 594,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 623,
    "end": 624
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 627,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "someMethodThatCallsAnInnerMethod",
    "start": 634,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 669,
    "end": 670
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 670,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "InnerMod",
    "start": 677,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "someExportedInnerFunc",
    "start": 686,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 710,
    "end": 711
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 714,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "someMethodThatCallsAnOuterInnerMethod",
    "start": 721,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 761,
    "end": 762
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 762,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "OuterMod",
    "start": 769,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "someExportedOuterFunc",
    "start": 778,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 802,
    "end": 803
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 806,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "someMethod",
    "start": 813,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 826,
    "end": 827
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 828,
    "end": 834
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 838,
    "end": 839
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 842,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "someProp",
    "start": 849,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 858,
    "end": 859
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 866,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 880,
    "end": 881
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 888,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "someInnerFunc",
    "start": 897,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 913,
    "end": 914
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 915,
    "end": 921
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 925,
    "end": 926
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 939,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "someInnerVar",
    "start": 943,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 956,
    "end": 957
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 969,
    "end": 970
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 973,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "someModuleVar",
    "start": 977,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 991,
    "end": 992
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 994,
    "end": 995
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 998,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "someModuleFunction",
    "start": 1007,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1030,
    "end": 1036
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1044,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1059,
    "end": 1065
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1066,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1078,
    "end": 1084
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1085,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "meb",
    "start": 1089,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1105,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "cprime",
    "start": 1109,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1129,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1136,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1144,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1155,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1168,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "alpha",
    "start": 1172,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1187,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "omega",
    "start": 1191,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "exported_var",
    "start": 1201,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "someMethodThatCallsAnOuterMethod",
    "start": 1217,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1251,
    "end": 1252
  }
]
```
