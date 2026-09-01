__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 56
          },
          "start": 51,
          "end": 56
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 62,
        "end": 69
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 44,
      "end": 70
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 121
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
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringType1",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 146
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 149,
                    "end": 154
                  },
                  "start": 149,
                  "end": 154
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 157,
                    "end": 162
                  },
                  "start": 157,
                  "end": 162
                }
              ],
              "start": 149,
              "end": 162
            },
            "declare": false,
            "start": 130,
            "end": 163
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringType2",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 184
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "baz",
                    "raw": "\"baz\"",
                    "start": 187,
                    "end": 192
                  },
                  "start": 187,
                  "end": 192
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 195,
                    "end": 200
                  },
                  "start": 195,
                  "end": 200
                }
              ],
              "start": 187,
              "end": 200
            },
            "declare": false,
            "start": 168,
            "end": 201
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Temp1",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 222
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
                    "name": "getValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 233,
                    "end": 241
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "stringType1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 248,
                            "end": 259
                          },
                          "typeArguments": null,
                          "start": 248,
                          "end": 259
                        },
                        "start": 246,
                        "end": 259
                      },
                      "start": 242,
                      "end": 259
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 262,
                      "end": 268
                    },
                    "start": 260,
                    "end": 268
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 233,
                  "end": 269
                }
              ],
              "start": 223,
              "end": 275
            },
            "declare": false,
            "start": 207,
            "end": 275
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Temp2",
              "optional": false,
              "typeAnnotation": null,
              "start": 291,
              "end": 296
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
                    "name": "getValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 307,
                    "end": 315
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "stringType2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 322,
                            "end": 333
                          },
                          "typeArguments": null,
                          "start": 322,
                          "end": 333
                        },
                        "start": 320,
                        "end": 333
                      },
                      "start": 316,
                      "end": 333
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 336,
                      "end": 342
                    },
                    "start": 334,
                    "end": 342
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 307,
                  "end": 343
                }
              ],
              "start": 297,
              "end": 349
            },
            "declare": false,
            "start": 281,
            "end": 349
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 364,
              "end": 368
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
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
                          "name": "Temp1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 372,
                          "end": 377
                        },
                        "typeArguments": null,
                        "start": 372,
                        "end": 377
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Temp2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 380,
                          "end": 385
                        },
                        "typeArguments": null,
                        "start": 380,
                        "end": 385
                      }
                    ],
                    "start": 372,
                    "end": 385
                  },
                  "start": 370,
                  "end": 385
                },
                "start": 369,
                "end": 385
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
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 403,
                        "end": 404
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 407,
                            "end": 408
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "getValue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 409,
                            "end": 417
                          },
                          "optional": false,
                          "computed": false,
                          "start": 407,
                          "end": 417
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "bar",
                            "raw": "\"bar\"",
                            "start": 418,
                            "end": 423
                          }
                        ],
                        "optional": false,
                        "start": 407,
                        "end": 424
                      },
                      "definite": false,
                      "start": 403,
                      "end": 424
                    }
                  ],
                  "declare": false,
                  "start": 397,
                  "end": 425
                }
              ],
              "start": 387,
              "end": 449
            },
            "expression": false,
            "start": 355,
            "end": 449
          }
        ],
        "start": 124,
        "end": 451
      },
      "expression": false,
      "start": 107,
      "end": 451
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 462,
        "end": 467
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
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Messages",
              "optional": false,
              "typeAnnotation": null,
              "start": 486,
              "end": 494
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
                  "readonly": true,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 514,
                    "end": 517
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "options",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSIndexSignature",
                                  "parameters": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "key",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSStringKeyword",
                                          "start": 537,
                                          "end": 543
                                        },
                                        "start": 535,
                                        "end": 543
                                      },
                                      "start": 532,
                                      "end": 543
                                    }
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 546,
                                      "end": 549
                                    },
                                    "start": 544,
                                    "end": 549
                                  },
                                  "readonly": false,
                                  "static": false,
                                  "accessibility": null,
                                  "start": 531,
                                  "end": 550
                                },
                                {
                                  "type": "TSPropertySignature",
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 551,
                                    "end": 552
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 554,
                                      "end": 560
                                    },
                                    "start": 552,
                                    "end": 560
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 551,
                                  "end": 560
                                }
                              ],
                              "start": 529,
                              "end": 562
                            },
                            "start": 527,
                            "end": 562
                          },
                          "start": 520,
                          "end": 562
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 567,
                          "end": 573
                        },
                        "start": 564,
                        "end": 573
                      },
                      "start": 519,
                      "end": 573
                    },
                    "start": 517,
                    "end": 573
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 505,
                  "end": 574
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": true,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 592,
                    "end": 595
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "options",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSIndexSignature",
                                  "parameters": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "key",
                                      "optional": false,
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
                                      "start": 610,
                                      "end": 621
                                    }
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 624,
                                      "end": 627
                                    },
                                    "start": 622,
                                    "end": 627
                                  },
                                  "readonly": false,
                                  "static": false,
                                  "accessibility": null,
                                  "start": 609,
                                  "end": 628
                                },
                                {
                                  "type": "TSPropertySignature",
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 629,
                                    "end": 630
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 632,
                                      "end": 638
                                    },
                                    "start": 630,
                                    "end": 638
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 629,
                                  "end": 638
                                }
                              ],
                              "start": 607,
                              "end": 640
                            },
                            "start": 605,
                            "end": 640
                          },
                          "start": 598,
                          "end": 640
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 645,
                          "end": 651
                        },
                        "start": 642,
                        "end": 651
                      },
                      "start": 597,
                      "end": 651
                    },
                    "start": 595,
                    "end": 651
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 583,
                  "end": 652
                }
              ],
              "start": 495,
              "end": 658
            },
            "declare": false,
            "start": 476,
            "end": 658
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
                  "name": "messages",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Messages",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 680,
                        "end": 688
                      },
                      "typeArguments": null,
                      "start": 680,
                      "end": 688
                    },
                    "start": 678,
                    "end": 688
                  },
                  "start": 670,
                  "end": 688
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 701,
                        "end": 704
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 707,
                            "end": 714
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Literal",
                          "value": "Foo",
                          "raw": "\"Foo\"",
                          "start": 719,
                          "end": 724
                        },
                        "id": null,
                        "generator": false,
                        "start": 706,
                        "end": 724
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 701,
                      "end": 724
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 734,
                        "end": 737
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 740,
                            "end": 747
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Literal",
                          "value": "Bar",
                          "raw": "\"Bar\"",
                          "start": 752,
                          "end": 757
                        },
                        "id": null,
                        "generator": false,
                        "start": 739,
                        "end": 757
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 734,
                      "end": 757
                    }
                  ],
                  "start": 691,
                  "end": 764
                },
                "definite": false,
                "start": 670,
                "end": 764
              }
            ],
            "declare": false,
            "start": 664,
            "end": 765
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
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 777,
                  "end": 782
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "foo",
                                "raw": "\"foo\"",
                                "start": 792,
                                "end": 797
                              },
                              "start": 792,
                              "end": 797
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "bar",
                                "raw": "\"bar\"",
                                "start": 800,
                                "end": 805
                              },
                              "start": 800,
                              "end": 805
                            }
                          ],
                          "start": 792,
                          "end": 805
                        },
                        "start": 790,
                        "end": 805
                      },
                      "start": 786,
                      "end": 805
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "messages",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 818,
                        "end": 826
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 827,
                        "end": 831
                      },
                      "optional": false,
                      "computed": true,
                      "start": 818,
                      "end": 832
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 835,
                              "end": 836
                            },
                            "value": {
                              "type": "Literal",
                              "value": "A",
                              "raw": "\"A\"",
                              "start": 838,
                              "end": 841
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 835,
                            "end": 841
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 843,
                              "end": 844
                            },
                            "value": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 846,
                              "end": 847
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 843,
                            "end": 847
                          }
                        ],
                        "start": 833,
                        "end": 849
                      }
                    ],
                    "optional": false,
                    "start": 818,
                    "end": 850
                  },
                  "id": null,
                  "generator": false,
                  "start": 785,
                  "end": 850
                },
                "definite": false,
                "start": 777,
                "end": 850
              }
            ],
            "declare": false,
            "start": 771,
            "end": 851
          }
        ],
        "start": 470,
        "end": 853
      },
      "expression": false,
      "start": 453,
      "end": 853
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 864,
        "end": 869
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 877,
                    "end": 883
                  },
                  "start": 877,
                  "end": 885
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 888,
                    "end": 894
                  },
                  "start": 888,
                  "end": 896
                }
              ],
              "start": 877,
              "end": 896
            },
            "start": 875,
            "end": 896
          },
          "start": 870,
          "end": 896
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
                  "name": "items",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 904,
                  "end": 909
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 910,
                  "end": 917
                },
                "optional": false,
                "computed": false,
                "start": 904,
                "end": 917
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 918,
                      "end": 922
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 926,
                        "end": 933
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 934,
                        "end": 937
                      },
                      "optional": false,
                      "computed": false,
                      "start": 926,
                      "end": 937
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 938,
                        "end": 942
                      }
                    ],
                    "optional": false,
                    "start": 926,
                    "end": 943
                  },
                  "id": null,
                  "generator": false,
                  "start": 918,
                  "end": 943
                }
              ],
              "optional": false,
              "start": 904,
              "end": 944
            },
            "directive": null,
            "start": 904,
            "end": 945
          }
        ],
        "start": 898,
        "end": 947
      },
      "expression": false,
      "start": 855,
      "end": 947
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test4",
        "optional": false,
        "typeAnnotation": null,
        "start": 958,
        "end": 963
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "objs",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 980,
                        "end": 984
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
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
                                  "start": 987,
                                  "end": 988
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 990,
                                    "end": 996
                                  },
                                  "start": 988,
                                  "end": 996
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 987,
                                "end": 996
                              }
                            ],
                            "start": 986,
                            "end": 997
                          },
                          "start": 986,
                          "end": 999
                        },
                        "start": 984,
                        "end": 999
                      },
                      "value": null,
                      "start": 977,
                      "end": 999
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1004,
                      "end": 1010
                    },
                    "start": 1001,
                    "end": 1010
                  },
                  "start": 976,
                  "end": 1010
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "objs",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1019,
                        "end": 1023
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
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
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1026,
                                  "end": 1027
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1029,
                                    "end": 1035
                                  },
                                  "start": 1027,
                                  "end": 1035
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1026,
                                "end": 1035
                              }
                            ],
                            "start": 1025,
                            "end": 1036
                          },
                          "start": 1025,
                          "end": 1038
                        },
                        "start": 1023,
                        "end": 1038
                      },
                      "value": null,
                      "start": 1016,
                      "end": 1038
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1043,
                      "end": 1049
                    },
                    "start": 1040,
                    "end": 1049
                  },
                  "start": 1015,
                  "end": 1049
                }
              ],
              "start": 975,
              "end": 1050
            },
            "start": 973,
            "end": 1050
          },
          "start": 969,
          "end": 1050
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
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
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1068,
                                "end": 1069
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1071,
                                  "end": 1077
                                },
                                "start": 1069,
                                "end": 1077
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1068,
                              "end": 1077
                            }
                          ],
                          "start": 1067,
                          "end": 1078
                        },
                        "start": 1065,
                        "end": 1078
                      },
                      "start": 1064,
                      "end": 1078
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSObjectKeyword",
                          "start": 1083,
                          "end": 1089
                        },
                        "start": 1081,
                        "end": 1089
                      },
                      "start": 1080,
                      "end": 1089
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1094,
                      "end": 1100
                    },
                    "start": 1091,
                    "end": 1100
                  },
                  "start": 1063,
                  "end": 1100
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSObjectKeyword",
                          "start": 1109,
                          "end": 1115
                        },
                        "start": 1107,
                        "end": 1115
                      },
                      "start": 1106,
                      "end": 1115
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
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
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1121,
                                "end": 1122
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1124,
                                  "end": 1130
                                },
                                "start": 1122,
                                "end": 1130
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1121,
                              "end": 1130
                            }
                          ],
                          "start": 1120,
                          "end": 1131
                        },
                        "start": 1118,
                        "end": 1131
                      },
                      "start": 1117,
                      "end": 1131
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1136,
                      "end": 1142
                    },
                    "start": 1133,
                    "end": 1142
                  },
                  "start": 1105,
                  "end": 1142
                }
              ],
              "start": 1062,
              "end": 1143
            },
            "start": 1060,
            "end": 1143
          },
          "start": 1056,
          "end": 1143
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
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
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1161,
                                "end": 1162
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1164,
                                  "end": 1170
                                },
                                "start": 1162,
                                "end": 1170
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1161,
                              "end": 1170
                            }
                          ],
                          "start": 1160,
                          "end": 1171
                        },
                        "start": 1158,
                        "end": 1171
                      },
                      "start": 1157,
                      "end": 1171
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "objs",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1176,
                        "end": 1180
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
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
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1183,
                                  "end": 1184
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1186,
                                    "end": 1192
                                  },
                                  "start": 1184,
                                  "end": 1192
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1183,
                                "end": 1192
                              }
                            ],
                            "start": 1182,
                            "end": 1193
                          },
                          "start": 1182,
                          "end": 1195
                        },
                        "start": 1180,
                        "end": 1195
                      },
                      "value": null,
                      "start": 1173,
                      "end": 1195
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1200,
                      "end": 1206
                    },
                    "start": 1197,
                    "end": 1206
                  },
                  "start": 1156,
                  "end": 1206
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "objs",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1215,
                        "end": 1219
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
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
                                  "start": 1222,
                                  "end": 1223
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1225,
                                    "end": 1231
                                  },
                                  "start": 1223,
                                  "end": 1231
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1222,
                                "end": 1231
                              }
                            ],
                            "start": 1221,
                            "end": 1232
                          },
                          "start": 1221,
                          "end": 1234
                        },
                        "start": 1219,
                        "end": 1234
                      },
                      "value": null,
                      "start": 1212,
                      "end": 1234
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1239,
                      "end": 1245
                    },
                    "start": 1236,
                    "end": 1245
                  },
                  "start": 1211,
                  "end": 1245
                }
              ],
              "start": 1155,
              "end": 1246
            },
            "start": 1153,
            "end": 1246
          },
          "start": 1149,
          "end": 1246
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg4",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1265,
                                "end": 1266
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1268,
                                  "end": 1274
                                },
                                "start": 1266,
                                "end": 1274
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1265,
                              "end": 1274
                            }
                          ],
                          "start": 1264,
                          "end": 1275
                        },
                        "start": 1262,
                        "end": 1275
                      },
                      "start": 1260,
                      "end": 1275
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1282,
                                "end": 1283
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1285,
                                  "end": 1291
                                },
                                "start": 1283,
                                "end": 1291
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1282,
                              "end": 1291
                            }
                          ],
                          "start": 1281,
                          "end": 1292
                        },
                        "start": 1279,
                        "end": 1292
                      },
                      "start": 1277,
                      "end": 1292
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1297,
                      "end": 1303
                    },
                    "start": 1294,
                    "end": 1303
                  },
                  "start": 1259,
                  "end": 1303
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
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
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1314,
                                "end": 1315
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1317,
                                  "end": 1323
                                },
                                "start": 1315,
                                "end": 1323
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1314,
                              "end": 1323
                            }
                          ],
                          "start": 1313,
                          "end": 1324
                        },
                        "start": 1311,
                        "end": 1324
                      },
                      "start": 1309,
                      "end": 1324
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1329,
                      "end": 1335
                    },
                    "start": 1326,
                    "end": 1335
                  },
                  "start": 1308,
                  "end": 1335
                }
              ],
              "start": 1258,
              "end": 1336
            },
            "start": 1256,
            "end": 1336
          },
          "start": 1252,
          "end": 1336
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg5",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1355,
                                "end": 1356
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1358,
                                  "end": 1364
                                },
                                "start": 1356,
                                "end": 1364
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1355,
                              "end": 1364
                            }
                          ],
                          "start": 1354,
                          "end": 1365
                        },
                        "start": 1352,
                        "end": 1365
                      },
                      "start": 1350,
                      "end": 1365
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1370,
                        "end": 1371
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
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
                                  "start": 1374,
                                  "end": 1375
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1377,
                                    "end": 1383
                                  },
                                  "start": 1375,
                                  "end": 1383
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1374,
                                "end": 1383
                              }
                            ],
                            "start": 1373,
                            "end": 1384
                          },
                          "start": 1373,
                          "end": 1386
                        },
                        "start": 1371,
                        "end": 1386
                      },
                      "value": null,
                      "start": 1367,
                      "end": 1386
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1391,
                      "end": 1397
                    },
                    "start": 1388,
                    "end": 1397
                  },
                  "start": 1349,
                  "end": 1397
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
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
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1408,
                                "end": 1409
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1411,
                                  "end": 1417
                                },
                                "start": 1409,
                                "end": 1417
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1408,
                              "end": 1417
                            }
                          ],
                          "start": 1407,
                          "end": 1418
                        },
                        "start": 1405,
                        "end": 1418
                      },
                      "start": 1403,
                      "end": 1418
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1423,
                      "end": 1429
                    },
                    "start": 1420,
                    "end": 1429
                  },
                  "start": 1402,
                  "end": 1429
                }
              ],
              "start": 1348,
              "end": 1430
            },
            "start": 1346,
            "end": 1430
          },
          "start": 1342,
          "end": 1430
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg6",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1449,
                                "end": 1450
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1452,
                                  "end": 1458
                                },
                                "start": 1450,
                                "end": 1458
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1449,
                              "end": 1458
                            }
                          ],
                          "start": 1448,
                          "end": 1459
                        },
                        "start": 1446,
                        "end": 1459
                      },
                      "start": 1444,
                      "end": 1459
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1466,
                                "end": 1467
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1469,
                                  "end": 1475
                                },
                                "start": 1467,
                                "end": 1475
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1466,
                              "end": 1475
                            }
                          ],
                          "start": 1465,
                          "end": 1476
                        },
                        "start": 1463,
                        "end": 1476
                      },
                      "start": 1461,
                      "end": 1476
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1481,
                      "end": 1487
                    },
                    "start": 1478,
                    "end": 1487
                  },
                  "start": 1443,
                  "end": 1487
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1496,
                        "end": 1497
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
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
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1500,
                                  "end": 1501
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1503,
                                    "end": 1509
                                  },
                                  "start": 1501,
                                  "end": 1509
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1500,
                                "end": 1509
                              }
                            ],
                            "start": 1499,
                            "end": 1510
                          },
                          "start": 1499,
                          "end": 1512
                        },
                        "start": 1497,
                        "end": 1512
                      },
                      "value": null,
                      "start": 1493,
                      "end": 1512
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1517,
                      "end": 1523
                    },
                    "start": 1514,
                    "end": 1523
                  },
                  "start": 1492,
                  "end": 1523
                }
              ],
              "start": 1442,
              "end": 1524
            },
            "start": 1440,
            "end": 1524
          },
          "start": 1436,
          "end": 1524
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
                "type": "Identifier",
                "decorators": [],
                "name": "arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1534,
                "end": 1538
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1534,
              "end": 1540
            },
            "directive": null,
            "start": 1534,
            "end": 1541
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1546,
                "end": 1550
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1552,
                        "end": 1553
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1555,
                        "end": 1556
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1552,
                      "end": 1556
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1558,
                        "end": 1559
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1561,
                        "end": 1562
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1558,
                      "end": 1562
                    }
                  ],
                  "start": 1551,
                  "end": 1563
                }
              ],
              "optional": false,
              "start": 1546,
              "end": 1564
            },
            "directive": null,
            "start": 1546,
            "end": 1565
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1570,
                "end": 1574
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1576,
                        "end": 1577
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1579,
                        "end": 1580
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1576,
                      "end": 1580
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1582,
                        "end": 1583
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1585,
                        "end": 1586
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1582,
                      "end": 1586
                    }
                  ],
                  "start": 1575,
                  "end": 1587
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1590,
                        "end": 1591
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1593,
                        "end": 1594
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1590,
                      "end": 1594
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1596,
                        "end": 1597
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1599,
                        "end": 1600
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1596,
                      "end": 1600
                    }
                  ],
                  "start": 1589,
                  "end": 1601
                }
              ],
              "optional": false,
              "start": 1570,
              "end": 1602
            },
            "directive": null,
            "start": 1570,
            "end": 1603
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1609,
                "end": 1613
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1615,
                        "end": 1616
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1618,
                        "end": 1619
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1615,
                      "end": 1619
                    }
                  ],
                  "start": 1614,
                  "end": 1620
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1623,
                        "end": 1624
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1626,
                        "end": 1627
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1623,
                      "end": 1627
                    }
                  ],
                  "start": 1622,
                  "end": 1628
                }
              ],
              "optional": false,
              "start": 1609,
              "end": 1629
            },
            "directive": null,
            "start": 1609,
            "end": 1630
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1636,
                "end": 1640
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1642,
                        "end": 1643
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1645,
                        "end": 1646
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1642,
                      "end": 1646
                    }
                  ],
                  "start": 1641,
                  "end": 1647
                }
              ],
              "optional": false,
              "start": 1636,
              "end": 1648
            },
            "directive": null,
            "start": 1636,
            "end": 1649
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1654,
                "end": 1658
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1660,
                        "end": 1661
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1663,
                        "end": 1664
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1660,
                      "end": 1664
                    }
                  ],
                  "start": 1659,
                  "end": 1665
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1668,
                        "end": 1669
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1671,
                        "end": 1672
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1668,
                      "end": 1672
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1674,
                        "end": 1675
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1677,
                        "end": 1678
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1674,
                      "end": 1678
                    }
                  ],
                  "start": 1667,
                  "end": 1679
                }
              ],
              "optional": false,
              "start": 1654,
              "end": 1680
            },
            "directive": null,
            "start": 1654,
            "end": 1681
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1686,
                "end": 1690
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1692,
                        "end": 1693
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1695,
                        "end": 1696
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1692,
                      "end": 1696
                    }
                  ],
                  "start": 1691,
                  "end": 1697
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1700,
                        "end": 1701
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1703,
                        "end": 1704
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1700,
                      "end": 1704
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1706,
                        "end": 1707
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1709,
                        "end": 1710
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1706,
                      "end": 1710
                    }
                  ],
                  "start": 1699,
                  "end": 1711
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1714,
                        "end": 1715
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1717,
                        "end": 1718
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1714,
                      "end": 1718
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1720,
                        "end": 1721
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1723,
                        "end": 1724
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1720,
                      "end": 1724
                    }
                  ],
                  "start": 1713,
                  "end": 1725
                }
              ],
              "optional": false,
              "start": 1686,
              "end": 1726
            },
            "directive": null,
            "start": 1686,
            "end": 1727
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1733,
                "end": 1737
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1733,
              "end": 1739
            },
            "directive": null,
            "start": 1733,
            "end": 1740
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1745,
                "end": 1749
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1751,
                        "end": 1752
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1754,
                        "end": 1755
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1751,
                      "end": 1755
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1757,
                        "end": 1758
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1760,
                        "end": 1761
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1757,
                      "end": 1761
                    }
                  ],
                  "start": 1750,
                  "end": 1762
                }
              ],
              "optional": false,
              "start": 1745,
              "end": 1763
            },
            "directive": null,
            "start": 1745,
            "end": 1764
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1769,
                "end": 1773
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1775,
                        "end": 1776
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1778,
                        "end": 1779
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1775,
                      "end": 1779
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1781,
                        "end": 1782
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1784,
                        "end": 1785
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1781,
                      "end": 1785
                    }
                  ],
                  "start": 1774,
                  "end": 1786
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1789,
                        "end": 1790
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1792,
                        "end": 1793
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1789,
                      "end": 1793
                    }
                  ],
                  "start": 1788,
                  "end": 1794
                }
              ],
              "optional": false,
              "start": 1769,
              "end": 1795
            },
            "directive": null,
            "start": 1769,
            "end": 1796
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1802,
                "end": 1806
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1802,
              "end": 1808
            },
            "directive": null,
            "start": 1802,
            "end": 1809
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1814,
                "end": 1818
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1820,
                        "end": 1821
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1823,
                        "end": 1824
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1820,
                      "end": 1824
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1826,
                        "end": 1827
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1829,
                        "end": 1830
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1826,
                      "end": 1830
                    }
                  ],
                  "start": 1819,
                  "end": 1831
                }
              ],
              "optional": false,
              "start": 1814,
              "end": 1832
            },
            "directive": null,
            "start": 1814,
            "end": 1833
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1838,
                "end": 1842
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1844,
                        "end": 1845
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1847,
                        "end": 1848
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1844,
                      "end": 1848
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1850,
                        "end": 1851
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1853,
                        "end": 1854
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1850,
                      "end": 1854
                    }
                  ],
                  "start": 1843,
                  "end": 1855
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1858,
                        "end": 1859
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1861,
                        "end": 1862
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1858,
                      "end": 1862
                    }
                  ],
                  "start": 1857,
                  "end": 1863
                }
              ],
              "optional": false,
              "start": 1838,
              "end": 1864
            },
            "directive": null,
            "start": 1838,
            "end": 1865
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1871,
                "end": 1875
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1871,
              "end": 1877
            },
            "directive": null,
            "start": 1871,
            "end": 1878
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1883,
                "end": 1887
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1889,
                        "end": 1890
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1892,
                        "end": 1893
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1889,
                      "end": 1893
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1895,
                        "end": 1896
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1898,
                        "end": 1899
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1895,
                      "end": 1899
                    }
                  ],
                  "start": 1888,
                  "end": 1900
                }
              ],
              "optional": false,
              "start": 1883,
              "end": 1901
            },
            "directive": null,
            "start": 1883,
            "end": 1902
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1907,
                "end": 1911
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1913,
                        "end": 1914
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1916,
                        "end": 1917
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1913,
                      "end": 1917
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1919,
                        "end": 1920
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1922,
                        "end": 1923
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1919,
                      "end": 1923
                    }
                  ],
                  "start": 1912,
                  "end": 1924
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1927,
                        "end": 1928
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1930,
                        "end": 1931
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1927,
                      "end": 1931
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1933,
                        "end": 1934
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1936,
                        "end": 1937
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1933,
                      "end": 1937
                    }
                  ],
                  "start": 1926,
                  "end": 1938
                }
              ],
              "optional": false,
              "start": 1907,
              "end": 1939
            },
            "directive": null,
            "start": 1907,
            "end": 1940
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1945,
                "end": 1949
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1951,
                        "end": 1952
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1954,
                        "end": 1955
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1951,
                      "end": 1955
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1957,
                        "end": 1958
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1960,
                        "end": 1961
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1957,
                      "end": 1961
                    }
                  ],
                  "start": 1950,
                  "end": 1962
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1965,
                        "end": 1966
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1968,
                        "end": 1969
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1965,
                      "end": 1969
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1971,
                        "end": 1972
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1974,
                        "end": 1975
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1971,
                      "end": 1975
                    }
                  ],
                  "start": 1964,
                  "end": 1976
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1979,
                        "end": 1980
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1982,
                        "end": 1983
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1979,
                      "end": 1983
                    }
                  ],
                  "start": 1978,
                  "end": 1984
                }
              ],
              "optional": false,
              "start": 1945,
              "end": 1985
            },
            "directive": null,
            "start": 1945,
            "end": 1986
          }
        ],
        "start": 1528,
        "end": 1988
      },
      "expression": false,
      "start": 949,
      "end": 1988
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2016,
        "end": 2021
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
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 2074,
              "end": 2080
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "url",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2087,
                    "end": 2093
                  },
                  "start": 2085,
                  "end": 2093
                },
                "start": 2081,
                "end": 2093
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2096,
                    "end": 2101
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ReactNode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2102,
                    "end": 2111
                  },
                  "start": 2096,
                  "end": 2111
                },
                "typeArguments": null,
                "start": 2096,
                "end": 2111
              },
              "start": 2094,
              "end": 2111
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
                        "name": "Tag",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2128,
                        "end": 2131
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "url",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2134,
                          "end": 2137
                        },
                        "consequent": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "'a'",
                          "start": 2140,
                          "end": 2143
                        },
                        "alternate": {
                          "type": "Literal",
                          "value": "button",
                          "raw": "'button'",
                          "start": 2146,
                          "end": 2154
                        },
                        "start": 2134,
                        "end": 2154
                      },
                      "definite": false,
                      "start": 2128,
                      "end": 2154
                    }
                  ],
                  "declare": false,
                  "start": 2122,
                  "end": 2155
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "Tag",
                        "start": 2172,
                        "end": 2175
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": false,
                      "start": 2171,
                      "end": 2176
                    },
                    "children": [
                      {
                        "type": "JSXText",
                        "value": "test",
                        "raw": "test",
                        "start": 2176,
                        "end": 2180
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "Tag",
                        "start": 2182,
                        "end": 2185
                      },
                      "start": 2180,
                      "end": 2186
                    },
                    "start": 2171,
                    "end": 2186
                  },
                  "start": 2164,
                  "end": 2187
                }
              ],
              "start": 2112,
              "end": 2193
            },
            "expression": false,
            "start": 2065,
            "end": 2193
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "App",
              "optional": false,
              "typeAnnotation": null,
              "start": 2263,
              "end": 2266
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
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
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "component",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2276,
                          "end": 2285
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "React",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2286,
                                "end": 2291
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ReactType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2292,
                                "end": 2301
                              },
                              "start": 2286,
                              "end": 2301
                            },
                            "typeArguments": null,
                            "start": 2286,
                            "end": 2301
                          },
                          "start": 2285,
                          "end": 2301
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2276,
                        "end": 2301
                      }
                    ],
                    "start": 2274,
                    "end": 2303
                  },
                  "start": 2272,
                  "end": 2303
                },
                "start": 2267,
                "end": 2303
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
                        "name": "Comp",
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
                                "name": "React",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2327,
                                "end": 2332
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ReactType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2333,
                                "end": 2342
                              },
                              "start": 2327,
                              "end": 2342
                            },
                            "typeArguments": null,
                            "start": 2327,
                            "end": 2342
                          },
                          "start": 2325,
                          "end": 2342
                        },
                        "start": 2321,
                        "end": 2342
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2345,
                          "end": 2350
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "component",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2351,
                          "end": 2360
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2345,
                        "end": 2360
                      },
                      "definite": false,
                      "start": 2321,
                      "end": 2360
                    }
                  ],
                  "declare": false,
                  "start": 2315,
                  "end": 2361
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "Comp",
                        "start": 2379,
                        "end": 2383
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": true,
                      "start": 2378,
                      "end": 2386
                    },
                    "children": [],
                    "closingElement": null,
                    "start": 2378,
                    "end": 2386
                  },
                  "start": 2370,
                  "end": 2388
                }
              ],
              "start": 2305,
              "end": 2394
            },
            "expression": false,
            "start": 2254,
            "end": 2394
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "render2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2456,
              "end": 2463
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
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2486,
                    "end": 2488
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2503,
                          "end": 2504
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2507,
                            "end": 2514
                          },
                          "start": 2505,
                          "end": 2514
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2503,
                        "end": 2515
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2528,
                          "end": 2529
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2532,
                            "end": 2538
                          },
                          "start": 2530,
                          "end": 2538
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2528,
                        "end": 2539
                      }
                    ],
                    "start": 2489,
                    "end": 2549
                  },
                  "declare": false,
                  "start": 2476,
                  "end": 2549
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2568,
                    "end": 2570
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2585,
                          "end": 2586
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2589,
                            "end": 2596
                          },
                          "start": 2587,
                          "end": 2596
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2585,
                        "end": 2597
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2610,
                          "end": 2611
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2614,
                            "end": 2617
                          },
                          "start": 2612,
                          "end": 2617
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2610,
                        "end": 2618
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2631,
                          "end": 2632
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2635,
                            "end": 2638
                          },
                          "start": 2633,
                          "end": 2638
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2631,
                        "end": 2639
                      }
                    ],
                    "start": 2571,
                    "end": 2649
                  },
                  "declare": false,
                  "start": 2558,
                  "end": 2649
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
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "React",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2666,
                                    "end": 2671
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ComponentType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2672,
                                    "end": 2685
                                  },
                                  "start": 2666,
                                  "end": 2685
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "P1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2686,
                                        "end": 2688
                                      },
                                      "typeArguments": null,
                                      "start": 2686,
                                      "end": 2688
                                    }
                                  ],
                                  "start": 2685,
                                  "end": 2689
                                },
                                "start": 2666,
                                "end": 2689
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "React",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2692,
                                    "end": 2697
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ComponentType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2698,
                                    "end": 2711
                                  },
                                  "start": 2692,
                                  "end": 2711
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "P2",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2712,
                                        "end": 2714
                                      },
                                      "typeArguments": null,
                                      "start": 2712,
                                      "end": 2714
                                    }
                                  ],
                                  "start": 2711,
                                  "end": 2715
                                },
                                "start": 2692,
                                "end": 2715
                              }
                            ],
                            "start": 2666,
                            "end": 2715
                          },
                          "start": 2664,
                          "end": 2715
                        },
                        "start": 2663,
                        "end": 2715
                      },
                      "init": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 2718,
                          "end": 2722
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2726,
                          "end": 2729
                        },
                        "start": 2718,
                        "end": 2729
                      },
                      "definite": false,
                      "start": 2663,
                      "end": 2729
                    }
                  ],
                  "declare": false,
                  "start": 2659,
                  "end": 2730
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2746,
                        "end": 2747
                      },
                      "init": {
                        "type": "JSXElement",
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "C",
                            "start": 2751,
                            "end": 2752
                          },
                          "typeArguments": null,
                          "attributes": [
                            {
                              "type": "JSXAttribute",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "p",
                                "start": 2753,
                                "end": 2754
                              },
                              "value": {
                                "type": "JSXExpressionContainer",
                                "expression": {
                                  "type": "Literal",
                                  "value": true,
                                  "raw": "true",
                                  "start": 2756,
                                  "end": 2760
                                },
                                "start": 2755,
                                "end": 2761
                              },
                              "start": 2753,
                              "end": 2761
                            }
                          ],
                          "selfClosing": true,
                          "start": 2750,
                          "end": 2764
                        },
                        "children": [],
                        "closingElement": null,
                        "start": 2750,
                        "end": 2764
                      },
                      "definite": false,
                      "start": 2746,
                      "end": 2764
                    }
                  ],
                  "declare": false,
                  "start": 2740,
                  "end": 2765
                }
              ],
              "start": 2466,
              "end": 2771
            },
            "expression": false,
            "start": 2447,
            "end": 2771
          }
        ],
        "start": 2024,
        "end": 2773
      },
      "expression": false,
      "start": 2007,
      "end": 2773
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 2773
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 44,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 51,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 57,
    "end": 61
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 62,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 107,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 116,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 130,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "stringType1",
    "start": 135,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 147,
    "end": 148
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 149,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 155,
    "end": 156
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 157,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 168,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "stringType2",
    "start": 173,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 185,
    "end": 186
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 187,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 193,
    "end": 194
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 195,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 207,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "Temp1",
    "start": 217,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "getValue",
    "start": 233,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 242,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "stringType1",
    "start": 248,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 262,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 281,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "Temp2",
    "start": 291,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "getValue",
    "start": 307,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 316,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "stringType2",
    "start": 322,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 336,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "function",
    "start": 355,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 364,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 369,
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
    "value": "Temp1",
    "start": 372,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "Temp2",
    "start": 380,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 387,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 397,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "getValue",
    "start": 409,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 417,
    "end": 418
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 418,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 450,
    "end": 451
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 453,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 462,
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
    "value": "{",
    "start": 470,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 476,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "Messages",
    "start": 486,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 505,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 514,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 520,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 532,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 537,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 546,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 554,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 564,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 567,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 583,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 592,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 598,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 610,
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
    "value": "]",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 624,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 632,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 642,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 645,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 657,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 664,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "messages",
    "start": 670,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "Messages",
    "start": 680,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 701,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 707,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 716,
    "end": 718
  },
  {
    "type": "String",
    "value": "\"Foo\"",
    "start": 719,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 734,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 740,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 749,
    "end": 751
  },
  {
    "type": "String",
    "value": "\"Bar\"",
    "start": 752,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 764,
    "end": 765
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 771,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 777,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 786,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 790,
    "end": 791
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 792,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 798,
    "end": 799
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 800,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 807,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "messages",
    "start": 818,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 827,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 836,
    "end": 837
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 838,
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
    "value": "b",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 844,
    "end": 845
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 852,
    "end": 853
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 855,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "test3",
    "start": 864,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 870,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 877,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 888,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 904,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 910,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 918,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 923,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 926,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 934,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 938,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 946,
    "end": 947
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 949,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "test4",
    "start": 958,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 969,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 977,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "objs",
    "start": 980,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 986,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 990,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1001,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1004,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1016,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "objs",
    "start": 1019,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1029,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1040,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1043,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 1056,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1071,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1083,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1091,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1094,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1109,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1124,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1133,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1136,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "arg3",
    "start": 1149,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1164,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1173,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "objs",
    "start": 1176,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "y",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1186,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1197,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1200,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1212,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "objs",
    "start": 1215,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1225,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1236,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1239,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "arg4",
    "start": 1252,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1268,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1285,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1294,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1297,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1317,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1326,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1329,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "arg5",
    "start": 1342,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1358,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1367,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1377,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "=>",
    "start": 1388,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1391,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1411,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1420,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1423,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "arg6",
    "start": 1436,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1452,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1469,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1478,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1481,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1493,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1503,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1514,
    "end": 1516
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1517,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 1534,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 1546,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 1570,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 1609,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Identifier",
    "value": "arg3",
    "start": 1636,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Identifier",
    "value": "arg3",
    "start": 1654,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "arg3",
    "start": 1686,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Identifier",
    "value": "arg4",
    "start": 1733,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "arg4",
    "start": 1745,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Identifier",
    "value": "arg4",
    "start": 1769,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Identifier",
    "value": "arg5",
    "start": 1802,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Identifier",
    "value": "arg5",
    "start": 1814,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Identifier",
    "value": "arg5",
    "start": 1838,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Identifier",
    "value": "arg6",
    "start": 1871,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "arg6",
    "start": 1883,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "arg6",
    "start": 1907,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Identifier",
    "value": "arg6",
    "start": 1945,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2007,
    "end": 2015
  },
  {
    "type": "Identifier",
    "value": "test5",
    "start": 2016,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2065,
    "end": 2073
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 2074,
    "end": 2080
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Identifier",
    "value": "url",
    "start": 2081,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2087,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 2096,
    "end": 2101
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Identifier",
    "value": "ReactNode",
    "start": 2102,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2122,
    "end": 2127
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 2128,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "url",
    "start": 2134,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 2140,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "String",
    "value": "'button'",
    "start": 2146,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2164,
    "end": 2170
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "JSXIdentifier",
    "value": "Tag",
    "start": 2172,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "JSXText",
    "value": "test",
    "start": 2176,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2181,
    "end": 2182
  },
  {
    "type": "JSXIdentifier",
    "value": "Tag",
    "start": 2182,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2254,
    "end": 2262
  },
  {
    "type": "Identifier",
    "value": "App",
    "start": 2263,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 2267,
    "end": 2272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Identifier",
    "value": "component",
    "start": 2276,
    "end": 2285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 2286,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Identifier",
    "value": "ReactType",
    "start": 2292,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2315,
    "end": 2320
  },
  {
    "type": "Identifier",
    "value": "Comp",
    "start": 2321,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 2327,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Identifier",
    "value": "ReactType",
    "start": 2333,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 2345,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Identifier",
    "value": "component",
    "start": 2351,
    "end": 2360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2360,
    "end": 2361
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2370,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 2379,
    "end": 2383
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2447,
    "end": 2455
  },
  {
    "type": "Identifier",
    "value": "render2",
    "start": 2456,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2464,
    "end": 2465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2466,
    "end": 2467
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2476,
    "end": 2485
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 2486,
    "end": 2488
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2505,
    "end": 2506
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2507,
    "end": 2514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2532,
    "end": 2538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2538,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2558,
    "end": 2567
  },
  {
    "type": "Identifier",
    "value": "P2",
    "start": 2568,
    "end": 2570
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2571,
    "end": 2572
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2587,
    "end": 2588
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2589,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2610,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2612,
    "end": 2613
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2614,
    "end": 2617
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2632,
    "end": 2633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2635,
    "end": 2638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2638,
    "end": 2639
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2659,
    "end": 2662
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2663,
    "end": 2664
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2664,
    "end": 2665
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 2666,
    "end": 2671
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 2672,
    "end": 2685
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2685,
    "end": 2686
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 2686,
    "end": 2688
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2688,
    "end": 2689
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2690,
    "end": 2691
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 2692,
    "end": 2697
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2697,
    "end": 2698
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 2698,
    "end": 2711
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Identifier",
    "value": "P2",
    "start": 2712,
    "end": 2714
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2714,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2718,
    "end": 2722
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2723,
    "end": 2725
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2726,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2729,
    "end": 2730
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2740,
    "end": 2745
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2746,
    "end": 2747
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "JSXIdentifier",
    "value": "C",
    "start": 2751,
    "end": 2752
  },
  {
    "type": "JSXIdentifier",
    "value": "p",
    "start": 2753,
    "end": 2754
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2754,
    "end": 2755
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2755,
    "end": 2756
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2756,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2762,
    "end": 2763
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2763,
    "end": 2764
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2764,
    "end": 2765
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2770,
    "end": 2771
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2772,
    "end": 2773
  }
]
```
