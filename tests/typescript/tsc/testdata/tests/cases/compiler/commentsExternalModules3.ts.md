__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 38,
          "end": 40
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 83,
                          "end": 89
                        },
                        "start": 81,
                        "end": 89
                      },
                      "start": 80,
                      "end": 89
                    },
                    "init": null,
                    "definite": false,
                    "start": 80,
                    "end": 89
                  }
                ],
                "declare": false,
                "start": 76,
                "end": 90
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 69,
              "end": 90
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 128,
                "end": 131
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 151,
                      "end": 152
                    },
                    "start": 144,
                    "end": 153
                  }
                ],
                "start": 134,
                "end": 159
              },
              "expression": false,
              "start": 119,
              "end": 159
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 205
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "ClassDeclaration",
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 258,
                          "end": 259
                        },
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [],
                          "start": 260,
                          "end": 271
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 252,
                        "end": 271
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 245,
                      "end": 271
                    },
                    {
                      "type": "EmptyStatement",
                      "start": 271,
                      "end": 272
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
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 308,
                              "end": 309
                            },
                            "init": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 316,
                                "end": 317
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 312,
                              "end": 319
                            },
                            "definite": false,
                            "start": 308,
                            "end": 319
                          }
                        ],
                        "declare": false,
                        "start": 304,
                        "end": 320
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 297,
                      "end": 320
                    }
                  ],
                  "start": 206,
                  "end": 326
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 193,
                "end": 326
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 186,
              "end": 326
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fooExport",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 375,
                  "end": 384
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
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 404,
                          "end": 407
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 404,
                        "end": 409
                      },
                      "start": 397,
                      "end": 410
                    }
                  ],
                  "start": 387,
                  "end": 416
                },
                "expression": false,
                "start": 366,
                "end": 416
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 359,
              "end": 416
            }
          ],
          "start": 41,
          "end": 418
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 28,
        "end": 418
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 21,
      "end": 418
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
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 419,
            "end": 421
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fooExport",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 431
          },
          "optional": false,
          "computed": false,
          "start": 419,
          "end": 431
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 419,
        "end": 433
      },
      "directive": null,
      "start": 419,
      "end": 434
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
            "name": "myvar",
            "optional": false,
            "typeAnnotation": null,
            "start": 439,
            "end": 444
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 451,
                  "end": 453
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 454,
                  "end": 456
                },
                "optional": false,
                "computed": false,
                "start": 451,
                "end": 456
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 457,
                "end": 458
              },
              "optional": false,
              "computed": false,
              "start": 451,
              "end": 458
            },
            "typeArguments": null,
            "arguments": [],
            "start": 447,
            "end": 460
          },
          "definite": false,
          "start": 439,
          "end": 460
        }
      ],
      "declare": false,
      "start": 435,
      "end": 461
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m4",
          "optional": false,
          "typeAnnotation": null,
          "start": 502,
          "end": 504
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 548,
                          "end": 554
                        },
                        "start": 546,
                        "end": 554
                      },
                      "start": 545,
                      "end": 554
                    },
                    "init": null,
                    "definite": false,
                    "start": 545,
                    "end": 554
                  }
                ],
                "declare": false,
                "start": 541,
                "end": 555
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 534,
              "end": 555
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 598,
                "end": 601
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 621,
                      "end": 622
                    },
                    "start": 614,
                    "end": 623
                  }
                ],
                "start": 604,
                "end": 629
              },
              "expression": false,
              "start": 589,
              "end": 629
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 678,
                  "end": 680
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "ClassDeclaration",
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 734,
                          "end": 735
                        },
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [],
                          "start": 736,
                          "end": 747
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 728,
                        "end": 747
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 721,
                      "end": 747
                    },
                    {
                      "type": "EmptyStatement",
                      "start": 747,
                      "end": 748
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
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 785,
                              "end": 786
                            },
                            "init": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 793,
                                "end": 794
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 789,
                              "end": 796
                            },
                            "definite": false,
                            "start": 785,
                            "end": 796
                          }
                        ],
                        "declare": false,
                        "start": 781,
                        "end": 797
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 774,
                      "end": 797
                    }
                  ],
                  "start": 681,
                  "end": 803
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 668,
                "end": 803
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 661,
              "end": 803
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fooExport",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 853,
                  "end": 862
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
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 882,
                          "end": 885
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 882,
                        "end": 887
                      },
                      "start": 875,
                      "end": 888
                    }
                  ],
                  "start": 865,
                  "end": 894
                },
                "expression": false,
                "start": 844,
                "end": 894
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 837,
              "end": 894
            }
          ],
          "start": 505,
          "end": 896
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 492,
        "end": 896
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 485,
      "end": 896
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
            "name": "m4",
            "optional": false,
            "typeAnnotation": null,
            "start": 897,
            "end": 899
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fooExport",
            "optional": false,
            "typeAnnotation": null,
            "start": 900,
            "end": 909
          },
          "optional": false,
          "computed": false,
          "start": 897,
          "end": 909
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 897,
        "end": 911
      },
      "directive": null,
      "start": 897,
      "end": 912
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
            "name": "myvar2",
            "optional": false,
            "typeAnnotation": null,
            "start": 917,
            "end": 923
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 930,
                  "end": 932
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 933,
                  "end": 935
                },
                "optional": false,
                "computed": false,
                "start": 930,
                "end": 935
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 936,
                "end": 937
              },
              "optional": false,
              "computed": false,
              "start": 930,
              "end": 937
            },
            "typeArguments": null,
            "arguments": [],
            "start": 926,
            "end": 939
          },
          "definite": false,
          "start": 917,
          "end": 939
        }
      ],
      "declare": false,
      "start": 913,
      "end": 940
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 21,
  "end": 941
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 21,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 28,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 38,
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
    "value": "export",
    "start": 69,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 76,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 119,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 128,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 144,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 186,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 193,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 203,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 245,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 252,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 297,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 304,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 312,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 359,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 366,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "fooExport",
    "start": 375,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 384,
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
    "value": "return",
    "start": 397,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 404,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 419,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "fooExport",
    "start": 422,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "var",
    "start": 435,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "myvar",
    "start": 439,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 447,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 451,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 454,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 460,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 485,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 492,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 502,
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
    "value": "export",
    "start": 534,
    "end": 540
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 541,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 548,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 554,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 589,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 598,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 604,
    "end": 605
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 614,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 661,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 668,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 678,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 681,
    "end": 682
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 721,
    "end": 727
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 728,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 747,
    "end": 748
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 774,
    "end": 780
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 781,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 787,
    "end": 788
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 789,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 802,
    "end": 803
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 837,
    "end": 843
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 844,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "fooExport",
    "start": 853,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 865,
    "end": 866
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 875,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 882,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 897,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 899,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "fooExport",
    "start": 900,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 911,
    "end": 912
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 913,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "myvar2",
    "start": 917,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 924,
    "end": 925
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 926,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 930,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 933,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 939,
    "end": 940
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "extMod",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 48
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./commentsExternalModules2_0",
          "raw": "\"./commentsExternalModules2_0\"",
          "start": 59,
          "end": 89
        },
        "start": 51,
        "end": 90
      },
      "importKind": "value",
      "start": 35,
      "end": 91
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
              "type": "Identifier",
              "decorators": [],
              "name": "extMod",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 120
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 123
            },
            "optional": false,
            "computed": false,
            "start": 114,
            "end": 123
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fooExport",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 133
          },
          "optional": false,
          "computed": false,
          "start": 114,
          "end": 133
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 114,
        "end": 135
      },
      "directive": null,
      "start": 114,
      "end": 136
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
              "name": "newVar",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 154
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "extMod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 161,
                      "end": 167
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 168,
                      "end": 170
                    },
                    "optional": false,
                    "computed": false,
                    "start": 161,
                    "end": 170
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 171,
                    "end": 173
                  },
                  "optional": false,
                  "computed": false,
                  "start": 161,
                  "end": 173
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 174,
                  "end": 175
                },
                "optional": false,
                "computed": false,
                "start": 161,
                "end": 175
              },
              "typeArguments": null,
              "arguments": [],
              "start": 157,
              "end": 177
            },
            "definite": false,
            "start": 148,
            "end": 177
          }
        ],
        "declare": false,
        "start": 144,
        "end": 178
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 137,
      "end": 178
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
              "type": "Identifier",
              "decorators": [],
              "name": "extMod",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 185
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 188
            },
            "optional": false,
            "computed": false,
            "start": 179,
            "end": 188
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fooExport",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 198
          },
          "optional": false,
          "computed": false,
          "start": 179,
          "end": 198
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 179,
        "end": 200
      },
      "directive": null,
      "start": 179,
      "end": 201
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
              "name": "newVar2",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 220
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "extMod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 227,
                      "end": 233
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 234,
                      "end": 236
                    },
                    "optional": false,
                    "computed": false,
                    "start": 227,
                    "end": 236
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 237,
                    "end": 239
                  },
                  "optional": false,
                  "computed": false,
                  "start": 227,
                  "end": 239
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 241
                },
                "optional": false,
                "computed": false,
                "start": 227,
                "end": 241
              },
              "typeArguments": null,
              "arguments": [],
              "start": 223,
              "end": 243
            },
            "definite": false,
            "start": 213,
            "end": 243
          }
        ],
        "declare": false,
        "start": 209,
        "end": 244
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 202,
      "end": 244
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 35,
  "end": 244
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 35,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "extMod",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 51,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 58,
    "end": 59
  },
  {
    "type": "String",
    "value": "\"./commentsExternalModules2_0\"",
    "start": 59,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "extMod",
    "start": 114,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 121,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "fooExport",
    "start": 124,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 137,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 144,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "newVar",
    "start": 148,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 157,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "extMod",
    "start": 161,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 168,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 171,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "extMod",
    "start": 179,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 186,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "fooExport",
    "start": 189,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 199,
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
    "value": "export",
    "start": 202,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 209,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "newVar2",
    "start": 213,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 223,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "extMod",
    "start": 227,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 234,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 237,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 240,
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
    "value": ")",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244
  }
]
```
