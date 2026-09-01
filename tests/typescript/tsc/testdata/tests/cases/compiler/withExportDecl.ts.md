__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "simpleVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 14
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
              "name": "exportedSimpleVar",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 43
            },
            "init": null,
            "definite": false,
            "start": 26,
            "end": 43
          }
        ],
        "declare": false,
        "start": 22,
        "end": 44
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 15,
      "end": 44
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
            "name": "anotherVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 62,
                "end": 65
              },
              "start": 60,
              "end": 65
            },
            "start": 50,
            "end": 65
          },
          "init": null,
          "definite": false,
          "start": 50,
          "end": 65
        }
      ],
      "declare": false,
      "start": 46,
      "end": 66
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
            "name": "varWithSimpleType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 90,
                "end": 96
              },
              "start": 88,
              "end": 96
            },
            "start": 71,
            "end": 96
          },
          "init": null,
          "definite": false,
          "start": 71,
          "end": 96
        }
      ],
      "declare": false,
      "start": 67,
      "end": 97
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
            "name": "varWithArrayType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 120,
                  "end": 126
                },
                "start": 120,
                "end": 128
              },
              "start": 118,
              "end": 128
            },
            "start": 102,
            "end": 128
          },
          "init": null,
          "definite": false,
          "start": 102,
          "end": 128
        }
      ],
      "declare": false,
      "start": 98,
      "end": 129
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
            "name": "varWithInitialValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 154
          },
          "init": {
            "type": "Literal",
            "value": 30,
            "raw": "30",
            "start": 157,
            "end": 159
          },
          "definite": false,
          "start": 135,
          "end": 159
        }
      ],
      "declare": false,
      "start": 131,
      "end": 160
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
              "name": "exportedVarWithInitialValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 199
            },
            "init": {
              "type": "Literal",
              "value": 70,
              "raw": "70",
              "start": 202,
              "end": 204
            },
            "definite": false,
            "start": 172,
            "end": 204
          }
        ],
        "declare": false,
        "start": 168,
        "end": 205
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 161,
      "end": 205
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
            "name": "withComplicatedValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 231
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 236,
                  "end": 237
                },
                "value": {
                  "type": "Literal",
                  "value": 30,
                  "raw": "30",
                  "start": 239,
                  "end": 241
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 236,
                "end": 241
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
                  "start": 243,
                  "end": 244
                },
                "value": {
                  "type": "Literal",
                  "value": 70,
                  "raw": "70",
                  "start": 246,
                  "end": 248
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 243,
                "end": 248
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "desc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 250,
                  "end": 254
                },
                "value": {
                  "type": "Literal",
                  "value": "position",
                  "raw": "\"position\"",
                  "start": 256,
                  "end": 266
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 250,
                "end": 266
              }
            ],
            "start": 234,
            "end": 268
          },
          "definite": false,
          "start": 211,
          "end": 268
        }
      ],
      "declare": false,
      "start": 207,
      "end": 269
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
              "name": "exportedWithComplicatedValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 281,
              "end": 309
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 314,
                    "end": 315
                  },
                  "value": {
                    "type": "Literal",
                    "value": 30,
                    "raw": "30",
                    "start": 317,
                    "end": 319
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 314,
                  "end": 319
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
                    "start": 321,
                    "end": 322
                  },
                  "value": {
                    "type": "Literal",
                    "value": 70,
                    "raw": "70",
                    "start": 324,
                    "end": 326
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 321,
                  "end": 326
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "desc",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 328,
                    "end": 332
                  },
                  "value": {
                    "type": "Literal",
                    "value": "position",
                    "raw": "\"position\"",
                    "start": 334,
                    "end": 344
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 328,
                  "end": 344
                }
              ],
              "start": 312,
              "end": 346
            },
            "definite": false,
            "start": 281,
            "end": 346
          }
        ],
        "declare": false,
        "start": 277,
        "end": 347
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 270,
      "end": 347
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
            "name": "declaredVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 361,
            "end": 372
          },
          "init": null,
          "definite": false,
          "start": 361,
          "end": 372
        }
      ],
      "declare": true,
      "start": 349,
      "end": 373
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
            "name": "declareVar2",
            "optional": false,
            "typeAnnotation": null,
            "start": 386,
            "end": 397
          },
          "init": null,
          "definite": false,
          "start": 386,
          "end": 397
        }
      ],
      "declare": true,
      "start": 374,
      "end": 397
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
            "name": "declaredVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 411,
            "end": 422
          },
          "init": null,
          "definite": false,
          "start": 411,
          "end": 422
        }
      ],
      "declare": true,
      "start": 399,
      "end": 423
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
            "name": "deckareVarWithType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 456,
                "end": 462
              },
              "start": 454,
              "end": 462
            },
            "start": 436,
            "end": 462
          },
          "init": null,
          "definite": false,
          "start": 436,
          "end": 462
        }
      ],
      "declare": true,
      "start": 424,
      "end": 463
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
              "name": "exportedDeclaredVar",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 504,
                  "end": 510
                },
                "start": 502,
                "end": 510
              },
              "start": 483,
              "end": 510
            },
            "init": null,
            "definite": false,
            "start": 483,
            "end": 510
          }
        ],
        "declare": true,
        "start": 471,
        "end": 511
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 464,
      "end": 511
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
            "name": "arrayVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 527,
                  "end": 533
                },
                "start": 527,
                "end": 535
              },
              "start": 525,
              "end": 535
            },
            "start": 517,
            "end": 535
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 539,
                "end": 542
              },
              {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 544,
                "end": 547
              }
            ],
            "start": 538,
            "end": 548
          },
          "definite": false,
          "start": 517,
          "end": 548
        }
      ],
      "declare": false,
      "start": 513,
      "end": 549
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
              "name": "exportedArrayVar",
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
                          "start": 582,
                          "end": 583
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 585,
                            "end": 591
                          },
                          "start": 583,
                          "end": 591
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 582,
                        "end": 592
                      },
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
                          "start": 593,
                          "end": 594
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 596,
                            "end": 602
                          },
                          "start": 594,
                          "end": 602
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 593,
                        "end": 603
                      }
                    ],
                    "start": 580,
                    "end": 605
                  },
                  "start": 580,
                  "end": 607
                },
                "start": 578,
                "end": 607
              },
              "start": 562,
              "end": 607
            },
            "init": null,
            "definite": false,
            "start": 562,
            "end": 607
          }
        ],
        "declare": false,
        "start": 558,
        "end": 609
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 551,
      "end": 609
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
            "name": "exportedArrayVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 610,
            "end": 626
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 627,
            "end": 631
          },
          "optional": false,
          "computed": false,
          "start": 610,
          "end": 631
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
                  "start": 634,
                  "end": 635
                },
                "value": {
                  "type": "Literal",
                  "value": 30,
                  "raw": "30",
                  "start": 637,
                  "end": 639
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 634,
                "end": 639
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
                  "start": 641,
                  "end": 642
                },
                "value": {
                  "type": "Literal",
                  "value": "hello world",
                  "raw": "'hello world'",
                  "start": 645,
                  "end": 658
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 641,
                "end": 658
              }
            ],
            "start": 632,
            "end": 660
          }
        ],
        "optional": false,
        "start": 610,
        "end": 661
      },
      "directive": null,
      "start": 610,
      "end": 662
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "simpleFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 673,
        "end": 687
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
                    "start": 713,
                    "end": 714
                  },
                  "value": {
                    "type": "Literal",
                    "value": "Hello",
                    "raw": "\"Hello\"",
                    "start": 716,
                    "end": 723
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 713,
                  "end": 723
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
                    "start": 733,
                    "end": 734
                  },
                  "value": {
                    "type": "Literal",
                    "value": "word",
                    "raw": "\"word\"",
                    "start": 736,
                    "end": 742
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 733,
                  "end": 742
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 752,
                    "end": 753
                  },
                  "value": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 755,
                    "end": 756
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 752,
                  "end": 756
                }
              ],
              "start": 703,
              "end": 762
            },
            "start": 696,
            "end": 763
          }
        ],
        "start": 690,
        "end": 765
      },
      "expression": false,
      "start": 664,
      "end": 765
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "exportedFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 783,
          "end": 799
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
                  "name": "simpleFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 815,
                  "end": 829
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 815,
                "end": 831
              },
              "start": 808,
              "end": 832
            }
          ],
          "start": 802,
          "end": 834
        },
        "expression": false,
        "start": 774,
        "end": 834
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 767,
      "end": 834
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 846,
        "end": 848
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 871,
                "end": 874
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
                      "value": "Hello",
                      "raw": "\"Hello\"",
                      "start": 894,
                      "end": 901
                    },
                    "start": 887,
                    "end": 902
                  }
                ],
                "start": 877,
                "end": 908
              },
              "expression": false,
              "start": 862,
              "end": 908
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 855,
            "end": 908
          }
        ],
        "start": 849,
        "end": 910
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 836,
      "end": 910
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
          "start": 936,
          "end": 938
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 960,
                          "end": 966
                        },
                        "start": 958,
                        "end": 966
                      },
                      "start": 957,
                      "end": 966
                    },
                    "init": null,
                    "definite": false,
                    "start": 957,
                    "end": 966
                  }
                ],
                "declare": false,
                "start": 953,
                "end": 967
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 946,
              "end": 967
            }
          ],
          "start": 939,
          "end": 969
        },
        "kind": "namespace",
        "declare": true,
        "global": false,
        "start": 918,
        "end": 969
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 911,
      "end": 969
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m3",
          "optional": false,
          "typeAnnotation": null,
          "start": 989,
          "end": 991
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1015,
                  "end": 1018
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
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1038,
                            "end": 1040
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1041,
                            "end": 1044
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1038,
                          "end": 1044
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 1038,
                        "end": 1046
                      },
                      "start": 1031,
                      "end": 1047
                    }
                  ],
                  "start": 1021,
                  "end": 1053
                },
                "expression": false,
                "start": 1006,
                "end": 1053
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 999,
              "end": 1053
            }
          ],
          "start": 992,
          "end": 1055
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 979,
        "end": 1055
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 972,
      "end": 1055
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
              "name": "eVar1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1068,
              "end": 1073
            },
            "init": null,
            "definite": false,
            "start": 1068,
            "end": 1073
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "eVar2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1075,
              "end": 1080
            },
            "init": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 1083,
              "end": 1085
            },
            "definite": false,
            "start": 1075,
            "end": 1085
          }
        ],
        "declare": false,
        "start": 1064,
        "end": 1086
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1057,
      "end": 1086
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
            "name": "eVar22",
            "optional": false,
            "typeAnnotation": null,
            "start": 1091,
            "end": 1097
          },
          "init": null,
          "definite": false,
          "start": 1091,
          "end": 1097
        }
      ],
      "declare": false,
      "start": 1087,
      "end": 1098
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
              "name": "eVar3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1110,
              "end": 1115
            },
            "init": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 1118,
              "end": 1120
            },
            "definite": false,
            "start": 1110,
            "end": 1120
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "eVar4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1122,
              "end": 1127
            },
            "init": null,
            "definite": false,
            "start": 1122,
            "end": 1127
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "eVar5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1129,
              "end": 1134
            },
            "init": null,
            "definite": false,
            "start": 1129,
            "end": 1134
          }
        ],
        "declare": false,
        "start": 1106,
        "end": 1135
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1099,
      "end": 1135
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1135
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "simpleVar",
    "start": 4,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 15,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 22,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "exportedSimpleVar",
    "start": 26,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 46,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "anotherVar",
    "start": 50,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 62,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 67,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "varWithSimpleType",
    "start": 71,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 90,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 98,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "varWithArrayType",
    "start": 102,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 120,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 131,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "varWithInitialValue",
    "start": 135,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 155,
    "end": 156
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 157,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 161,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 168,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "exportedVarWithInitialValue",
    "start": 172,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 200,
    "end": 201
  },
  {
    "type": "Numeric",
    "value": "70",
    "start": 202,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 207,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "withComplicatedValue",
    "start": 211,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 237,
    "end": 238
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 239,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245
  },
  {
    "type": "Numeric",
    "value": "70",
    "start": 246,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "desc",
    "start": 250,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255
  },
  {
    "type": "String",
    "value": "\"position\"",
    "start": 256,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 270,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 277,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "exportedWithComplicatedValue",
    "start": 281,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "x",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 315,
    "end": 316
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 317,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323
  },
  {
    "type": "Numeric",
    "value": "70",
    "start": 324,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "desc",
    "start": 328,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333
  },
  {
    "type": "String",
    "value": "\"position\"",
    "start": 334,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 349,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 357,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "declaredVar",
    "start": 361,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 374,
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
    "value": "declareVar2",
    "start": 386,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 399,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 407,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "declaredVar",
    "start": 411,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 424,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 432,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "deckareVarWithType",
    "start": 436,
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
    "start": 456,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 462,
    "end": 463
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 464,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 471,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 479,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "exportedDeclaredVar",
    "start": 483,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 504,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 510,
    "end": 511
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 513,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "arrayVar",
    "start": 517,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 527,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "String",
    "value": "'a'",
    "start": 539,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 542,
    "end": 543
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 544,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 551,
    "end": 557
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 558,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "exportedArrayVar",
    "start": 562,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 585,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 596,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "exportedArrayVar",
    "start": 610,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 627,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 635,
    "end": 636
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 637,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 643,
    "end": 644
  },
  {
    "type": "String",
    "value": "'hello world'",
    "start": 645,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 661,
    "end": 662
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 664,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "simpleFunction",
    "start": 673,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 690,
    "end": 691
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 696,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 714,
    "end": 715
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 716,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 734,
    "end": 735
  },
  {
    "type": "String",
    "value": "\"word\"",
    "start": 736,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 753,
    "end": 754
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 764,
    "end": 765
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 767,
    "end": 773
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 774,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "exportedFunction",
    "start": 783,
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
    "value": "{",
    "start": 802,
    "end": 803
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 808,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "simpleFunction",
    "start": 815,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 836,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 846,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 849,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 855,
    "end": 861
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 862,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 871,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 877,
    "end": 878
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 887,
    "end": 893
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 894,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 909,
    "end": 910
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 911,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 918,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 926,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 936,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 939,
    "end": 940
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 946,
    "end": 952
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 953,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 960,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 968,
    "end": 969
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 972,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 979,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 989,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 992,
    "end": 993
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 999,
    "end": 1005
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1006,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1015,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1031,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 1038,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1041,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1057,
    "end": 1063
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1064,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "eVar1",
    "start": 1068,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "eVar2",
    "start": 1075,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1083,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1087,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "eVar22",
    "start": 1091,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1099,
    "end": 1105
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1106,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "eVar3",
    "start": 1110,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1118,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "eVar4",
    "start": 1122,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "eVar5",
    "start": 1129,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1134,
    "end": 1135
  }
]
```
