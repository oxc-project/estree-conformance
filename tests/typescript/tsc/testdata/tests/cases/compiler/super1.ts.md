__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base1",
        "optional": false,
        "typeAnnotation": null,
        "start": 16,
        "end": 21
      },
      "typeParameters": null,
      "superClass": null,
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 38
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
                      "value": "base",
                      "raw": "\"base\"",
                      "start": 58,
                      "end": 64
                    },
                    "start": 51,
                    "end": 65
                  }
                ],
                "start": 41,
                "end": 71
              },
              "expression": false,
              "start": 38,
              "end": 71
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 28,
            "end": 71
          }
        ],
        "start": 22,
        "end": 73
      },
      "abstract": false,
      "declare": false,
      "start": 10,
      "end": 73
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sub1",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 85
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base1",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 99
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 116
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
                      "value": "base",
                      "raw": "\"base\"",
                      "start": 136,
                      "end": 142
                    },
                    "start": 129,
                    "end": 143
                  }
                ],
                "start": 119,
                "end": 149
              },
              "expression": false,
              "start": 116,
              "end": 149
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 106,
            "end": 149
          }
        ],
        "start": 100,
        "end": 151
      },
      "abstract": false,
      "declare": false,
      "start": 75,
      "end": 151
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubSub1",
        "optional": false,
        "typeAnnotation": null,
        "start": 159,
        "end": 166
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sub1",
        "optional": false,
        "typeAnnotation": null,
        "start": 175,
        "end": 179
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 196
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 216,
                          "end": 221
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "super",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 222,
                          "end": 227
                        },
                        "optional": false,
                        "computed": false,
                        "start": 216,
                        "end": 227
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 228,
                        "end": 231
                      },
                      "optional": false,
                      "computed": false,
                      "start": 216,
                      "end": 231
                    },
                    "start": 209,
                    "end": 232
                  }
                ],
                "start": 199,
                "end": 238
              },
              "expression": false,
              "start": 196,
              "end": 238
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 186,
            "end": 238
          }
        ],
        "start": 180,
        "end": 240
      },
      "abstract": false,
      "declare": false,
      "start": 153,
      "end": 240
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null,
        "start": 258,
        "end": 263
      },
      "typeParameters": null,
      "superClass": null,
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 280
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
                      "value": "base",
                      "raw": "\"base\"",
                      "start": 300,
                      "end": 306
                    },
                    "start": 293,
                    "end": 307
                  }
                ],
                "start": 283,
                "end": 313
              },
              "expression": false,
              "start": 280,
              "end": 313
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 270,
            "end": 313
          }
        ],
        "start": 264,
        "end": 315
      },
      "abstract": false,
      "declare": false,
      "start": 252,
      "end": 315
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubE2",
        "optional": false,
        "typeAnnotation": null,
        "start": 323,
        "end": 328
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null,
        "start": 337,
        "end": 342
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 359
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
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 379,
                            "end": 384
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prototype",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 385,
                            "end": 394
                          },
                          "optional": false,
                          "computed": false,
                          "start": 379,
                          "end": 394
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 395,
                          "end": 398
                        },
                        "optional": false,
                        "computed": false,
                        "start": 379,
                        "end": 398
                      },
                      "right": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 401,
                        "end": 405
                      },
                      "start": 379,
                      "end": 405
                    },
                    "start": 372,
                    "end": 406
                  }
                ],
                "start": 362,
                "end": 412
              },
              "expression": false,
              "start": 359,
              "end": 412
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 349,
            "end": 412
          }
        ],
        "start": 343,
        "end": 414
      },
      "abstract": false,
      "declare": false,
      "start": 317,
      "end": 414
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base3",
        "optional": false,
        "typeAnnotation": null,
        "start": 432,
        "end": 437
      },
      "typeParameters": null,
      "superClass": null,
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 451,
              "end": 454
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
                      "value": "base",
                      "raw": "\"base\"",
                      "start": 474,
                      "end": 480
                    },
                    "start": 467,
                    "end": 481
                  }
                ],
                "start": 457,
                "end": 487
              },
              "expression": false,
              "start": 454,
              "end": 487
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 444,
            "end": 487
          }
        ],
        "start": 438,
        "end": 489
      },
      "abstract": false,
      "declare": false,
      "start": 426,
      "end": 489
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubE3",
        "optional": false,
        "typeAnnotation": null,
        "start": 497,
        "end": 502
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base3",
        "optional": false,
        "typeAnnotation": null,
        "start": 511,
        "end": 516
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 530,
              "end": 533
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
                          "type": "Super",
                          "start": 553,
                          "end": 558
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 559,
                          "end": 562
                        },
                        "optional": false,
                        "computed": false,
                        "start": 553,
                        "end": 562
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 553,
                      "end": 564
                    },
                    "start": 546,
                    "end": 565
                  }
                ],
                "start": 536,
                "end": 571
              },
              "expression": false,
              "start": 533,
              "end": 571
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 523,
            "end": 571
          }
        ],
        "start": 517,
        "end": 573
      },
      "abstract": false,
      "declare": false,
      "start": 491,
      "end": 573
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base4",
        "optional": false,
        "typeAnnotation": null,
        "start": 595,
        "end": 600
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Sub4",
              "optional": false,
              "typeAnnotation": null,
              "start": 613,
              "end": 617
            },
            "typeParameters": null,
            "superClass": null,
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 635,
                    "end": 636
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
                            "value": "hello",
                            "raw": "\"hello\"",
                            "start": 659,
                            "end": 666
                          },
                          "start": 652,
                          "end": 667
                        }
                      ],
                      "start": 638,
                      "end": 677
                    },
                    "expression": false,
                    "start": 636,
                    "end": 677
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 628,
                  "end": 677
                }
              ],
              "start": 618,
              "end": 683
            },
            "abstract": false,
            "declare": false,
            "start": 607,
            "end": 683
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "SubSub4",
                "optional": false,
                "typeAnnotation": null,
                "start": 706,
                "end": 713
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Sub4",
                "optional": false,
                "typeAnnotation": null,
                "start": 722,
                "end": 726
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 743,
                      "end": 744
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
                                  "type": "Super",
                                  "start": 767,
                                  "end": 772
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 773,
                                  "end": 774
                                },
                                "optional": false,
                                "computed": false,
                                "start": 767,
                                "end": 774
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 767,
                              "end": 776
                            },
                            "start": 760,
                            "end": 777
                          }
                        ],
                        "start": 746,
                        "end": 787
                      },
                      "expression": false,
                      "start": 744,
                      "end": 787
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 736,
                    "end": 787
                  }
                ],
                "start": 726,
                "end": 793
              },
              "abstract": false,
              "declare": false,
              "start": 700,
              "end": 793
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 693,
            "end": 793
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Sub4E",
                "optional": false,
                "typeAnnotation": null,
                "start": 816,
                "end": 821
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 839,
                      "end": 840
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
                                  "type": "Super",
                                  "start": 864,
                                  "end": 869
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 870,
                                  "end": 871
                                },
                                "optional": false,
                                "computed": false,
                                "start": 864,
                                "end": 871
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 864,
                              "end": 873
                            },
                            "start": 857,
                            "end": 874
                          }
                        ],
                        "start": 843,
                        "end": 884
                      },
                      "expression": false,
                      "start": 840,
                      "end": 884
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 832,
                    "end": 884
                  }
                ],
                "start": 822,
                "end": 890
              },
              "abstract": false,
              "declare": false,
              "start": 810,
              "end": 890
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 803,
            "end": 890
          }
        ],
        "start": 601,
        "end": 892
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 585,
      "end": 892
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 10,
  "end": 892
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 10,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "Base1",
    "start": 16,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 28,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 35,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 51,
    "end": 57
  },
  {
    "type": "String",
    "value": "\"base\"",
    "start": 58,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 75,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "Sub1",
    "start": 81,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 86,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "Base1",
    "start": 94,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 106,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 113,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 129,
    "end": 135
  },
  {
    "type": "String",
    "value": "\"base\"",
    "start": 136,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 153,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "SubSub1",
    "start": 159,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 167,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "Sub1",
    "start": 175,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 186,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 193,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 209,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 216,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "super",
    "start": 222,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 228,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 252,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 258,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 270,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 277,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 293,
    "end": 299
  },
  {
    "type": "String",
    "value": "\"base\"",
    "start": 300,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 317,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "SubE2",
    "start": 323,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 329,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 337,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 343,
    "end": 344
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 349,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 356,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 362,
    "end": 363
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 372,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 379,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 385,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 395,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 399,
    "end": 400
  },
  {
    "type": "Null",
    "value": "null",
    "start": 401,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 413,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 426,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "Base3",
    "start": 432,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 438,
    "end": 439
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 444,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 451,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 457,
    "end": 458
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 467,
    "end": 473
  },
  {
    "type": "String",
    "value": "\"base\"",
    "start": 474,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 488,
    "end": 489
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 491,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "SubE3",
    "start": 497,
    "end": 502
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 503,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "Base3",
    "start": 511,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 517,
    "end": 518
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 523,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 530,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "return",
    "start": 546,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 553,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 559,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 585,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "Base4",
    "start": 595,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 601,
    "end": 602
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 607,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "Sub4",
    "start": 613,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 618,
    "end": 619
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 628,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 636,
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
    "value": "{",
    "start": 638,
    "end": 639
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 652,
    "end": 658
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 659,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 682,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 693,
    "end": 699
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 700,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "SubSub4",
    "start": 706,
    "end": 713
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 714,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "Sub4",
    "start": 722,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 726,
    "end": 727
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 736,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 746,
    "end": 747
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 760,
    "end": 766
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 767,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 792,
    "end": 793
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 803,
    "end": 809
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 810,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "Sub4E",
    "start": 816,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 822,
    "end": 823
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 832,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 843,
    "end": 844
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 857,
    "end": 863
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 864,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 891,
    "end": 892
  }
]
```
