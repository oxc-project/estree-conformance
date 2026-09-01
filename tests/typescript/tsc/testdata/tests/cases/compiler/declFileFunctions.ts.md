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
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 57,
          "end": 60
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 63,
          "end": 66
        },
        "expression": false,
        "start": 48,
        "end": 66
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 41,
      "end": 66
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 128,
          "end": 145
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "type": "TSStringKeyword",
                "start": 178,
                "end": 184
              },
              "start": 176,
              "end": 184
            },
            "start": 175,
            "end": 184
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 225,
                "end": 231
              },
              "start": 223,
              "end": 231
            },
            "start": 222,
            "end": 231
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
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
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 243,
                    "end": 244
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 247,
                    "end": 248
                  },
                  "definite": false,
                  "start": 243,
                  "end": 248
                }
              ],
              "declare": false,
              "start": 239,
              "end": 249
            }
          ],
          "start": 233,
          "end": 251
        },
        "expression": false,
        "start": 119,
        "end": 251
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 112,
      "end": 251
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithRestParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 268,
          "end": 289
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "type": "TSStringKeyword",
                "start": 293,
                "end": 299
              },
              "start": 291,
              "end": 299
            },
            "start": 290,
            "end": 299
          },
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "rests",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 309
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 311,
                  "end": 317
                },
                "start": 311,
                "end": 319
              },
              "start": 309,
              "end": 319
            },
            "value": null,
            "start": 301,
            "end": 319
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 334,
                  "end": 335
                },
                "operator": "+",
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rests",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 338,
                      "end": 343
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "join",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 344,
                      "end": 348
                    },
                    "optional": false,
                    "computed": false,
                    "start": 338,
                    "end": 348
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 349,
                      "end": 351
                    }
                  ],
                  "optional": false,
                  "start": 338,
                  "end": 352
                },
                "start": 334,
                "end": 352
              },
              "start": 327,
              "end": 353
            }
          ],
          "start": 321,
          "end": 355
        },
        "expression": false,
        "start": 259,
        "end": 355
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 252,
      "end": 355
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithOverloads",
          "optional": false,
          "typeAnnotation": null,
          "start": 373,
          "end": 389
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "type": "TSStringKeyword",
                "start": 393,
                "end": 399
              },
              "start": 391,
              "end": 399
            },
            "start": 390,
            "end": 399
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 402,
            "end": 408
          },
          "start": 400,
          "end": 408
        },
        "body": null,
        "expression": false,
        "start": 364,
        "end": 409
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 357,
      "end": 409
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithOverloads",
          "optional": false,
          "typeAnnotation": null,
          "start": 426,
          "end": 442
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "type": "TSNumberKeyword",
                "start": 446,
                "end": 452
              },
              "start": 444,
              "end": 452
            },
            "start": 443,
            "end": 452
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 455,
            "end": 461
          },
          "start": 453,
          "end": 461
        },
        "body": null,
        "expression": false,
        "start": 417,
        "end": 462
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 410,
      "end": 462
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithOverloads",
          "optional": false,
          "typeAnnotation": null,
          "start": 479,
          "end": 495
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "type": "TSAnyKeyword",
                "start": 499,
                "end": 502
              },
              "start": 497,
              "end": 502
            },
            "start": 496,
            "end": 502
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 505,
            "end": 508
          },
          "start": 503,
          "end": 508
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 522,
                "end": 523
              },
              "start": 515,
              "end": 524
            }
          ],
          "start": 509,
          "end": 526
        },
        "expression": false,
        "start": 470,
        "end": 526
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 463,
      "end": 526
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithSingleOverload",
          "optional": false,
          "typeAnnotation": null,
          "start": 544,
          "end": 565
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "type": "TSStringKeyword",
                "start": 569,
                "end": 575
              },
              "start": 567,
              "end": 575
            },
            "start": 566,
            "end": 575
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 578,
            "end": 584
          },
          "start": 576,
          "end": 584
        },
        "body": null,
        "expression": false,
        "start": 535,
        "end": 585
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 528,
      "end": 585
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithSingleOverload",
          "optional": false,
          "typeAnnotation": null,
          "start": 602,
          "end": 623
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "type": "TSAnyKeyword",
                "start": 627,
                "end": 630
              },
              "start": 625,
              "end": 630
            },
            "start": 624,
            "end": 630
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 645,
                "end": 646
              },
              "start": 638,
              "end": 647
            }
          ],
          "start": 632,
          "end": 649
        },
        "expression": false,
        "start": 593,
        "end": 649
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 586,
      "end": 649
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithTypePredicate",
          "optional": false,
          "typeAnnotation": null,
          "start": 667,
          "end": 687
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "type": "TSAnyKeyword",
                "start": 691,
                "end": 694
              },
              "start": 689,
              "end": 694
            },
            "start": 688,
            "end": 694
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 697,
              "end": 698
            },
            "asserts": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 702,
                "end": 708
              },
              "start": 702,
              "end": 708
            },
            "start": 697,
            "end": 708
          },
          "start": 695,
          "end": 708
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 722,
                "end": 726
              },
              "start": 715,
              "end": 727
            }
          ],
          "start": 709,
          "end": 729
        },
        "expression": false,
        "start": 658,
        "end": 729
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 651,
      "end": 729
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithTypePredicateAndMulitpleParams",
          "optional": false,
          "typeAnnotation": null,
          "start": 746,
          "end": 783
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "type": "TSAnyKeyword",
                "start": 787,
                "end": 790
              },
              "start": 785,
              "end": 790
            },
            "start": 784,
            "end": 790
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 795,
                "end": 798
              },
              "start": 793,
              "end": 798
            },
            "start": 792,
            "end": 798
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 803,
                "end": 806
              },
              "start": 801,
              "end": 806
            },
            "start": 800,
            "end": 806
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 809,
              "end": 810
            },
            "asserts": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 814,
                "end": 820
              },
              "start": 814,
              "end": 820
            },
            "start": 809,
            "end": 820
          },
          "start": 807,
          "end": 820
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 834,
                "end": 838
              },
              "start": 827,
              "end": 839
            }
          ],
          "start": 821,
          "end": 841
        },
        "expression": false,
        "start": 737,
        "end": 841
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 730,
      "end": 841
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithTypeTypePredicateAndGeneric",
          "optional": false,
          "typeAnnotation": null,
          "start": 858,
          "end": 892
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
                "start": 893,
                "end": 894
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 893,
              "end": 894
            }
          ],
          "start": 892,
          "end": 895
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 899,
                "end": 902
              },
              "start": 897,
              "end": 902
            },
            "start": 896,
            "end": 902
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 905,
              "end": 906
            },
            "asserts": false,
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
                  "start": 910,
                  "end": 911
                },
                "typeArguments": null,
                "start": 910,
                "end": 911
              },
              "start": 910,
              "end": 911
            },
            "start": 905,
            "end": 911
          },
          "start": 903,
          "end": 911
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 925,
                "end": 929
              },
              "start": 918,
              "end": 930
            }
          ],
          "start": 912,
          "end": 932
        },
        "expression": false,
        "start": 849,
        "end": 932
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 842,
      "end": 932
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithTypeTypePredicateAndRestParam",
          "optional": false,
          "typeAnnotation": null,
          "start": 949,
          "end": 985
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "type": "TSAnyKeyword",
                "start": 989,
                "end": 992
              },
              "start": 987,
              "end": 992
            },
            "start": 986,
            "end": 992
          },
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "rest",
              "optional": false,
              "typeAnnotation": null,
              "start": 997,
              "end": 1001
            },
            "optional": false,
            "typeAnnotation": null,
            "value": null,
            "start": 994,
            "end": 1001
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1004,
              "end": 1005
            },
            "asserts": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1009,
                "end": 1015
              },
              "start": 1009,
              "end": 1015
            },
            "start": 1004,
            "end": 1015
          },
          "start": 1002,
          "end": 1015
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1029,
                "end": 1033
              },
              "start": 1022,
              "end": 1034
            }
          ],
          "start": 1016,
          "end": 1036
        },
        "expression": false,
        "start": 940,
        "end": 1036
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 933,
      "end": 1036
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nonExportedFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1099,
        "end": 1113
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1116,
        "end": 1119
      },
      "expression": false,
      "start": 1090,
      "end": 1119
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nonExportedFooWithParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 1174,
        "end": 1202
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSStringKeyword",
              "start": 1235,
              "end": 1241
            },
            "start": 1233,
            "end": 1241
          },
          "start": 1232,
          "end": 1241
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1282,
              "end": 1288
            },
            "start": 1280,
            "end": 1288
          },
          "start": 1279,
          "end": 1288
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1300,
                  "end": 1301
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1304,
                  "end": 1305
                },
                "definite": false,
                "start": 1300,
                "end": 1305
              }
            ],
            "declare": false,
            "start": 1296,
            "end": 1306
          }
        ],
        "start": 1290,
        "end": 1308
      },
      "expression": false,
      "start": 1165,
      "end": 1308
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nonExportedFooWithRestParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 1318,
        "end": 1350
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSStringKeyword",
              "start": 1354,
              "end": 1360
            },
            "start": 1352,
            "end": 1360
          },
          "start": 1351,
          "end": 1360
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "rests",
            "optional": false,
            "typeAnnotation": null,
            "start": 1365,
            "end": 1370
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 1372,
                "end": 1378
              },
              "start": 1372,
              "end": 1380
            },
            "start": 1370,
            "end": 1380
          },
          "value": null,
          "start": 1362,
          "end": 1380
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1395,
                "end": 1396
              },
              "operator": "+",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rests",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1399,
                    "end": 1404
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "join",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1405,
                    "end": 1409
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1399,
                  "end": 1409
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 1410,
                    "end": 1412
                  }
                ],
                "optional": false,
                "start": 1399,
                "end": 1413
              },
              "start": 1395,
              "end": 1413
            },
            "start": 1388,
            "end": 1414
          }
        ],
        "start": 1382,
        "end": 1416
      },
      "expression": false,
      "start": 1309,
      "end": 1416
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nonExportedFooWithOverloads",
        "optional": false,
        "typeAnnotation": null,
        "start": 1427,
        "end": 1454
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSStringKeyword",
              "start": 1458,
              "end": 1464
            },
            "start": 1456,
            "end": 1464
          },
          "start": 1455,
          "end": 1464
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 1467,
          "end": 1473
        },
        "start": 1465,
        "end": 1473
      },
      "body": null,
      "expression": false,
      "start": 1418,
      "end": 1474
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nonExportedFooWithOverloads",
        "optional": false,
        "typeAnnotation": null,
        "start": 1484,
        "end": 1511
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSNumberKeyword",
              "start": 1515,
              "end": 1521
            },
            "start": 1513,
            "end": 1521
          },
          "start": 1512,
          "end": 1521
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1524,
          "end": 1530
        },
        "start": 1522,
        "end": 1530
      },
      "body": null,
      "expression": false,
      "start": 1475,
      "end": 1531
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nonExportedFooWithOverloads",
        "optional": false,
        "typeAnnotation": null,
        "start": 1541,
        "end": 1568
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 1572,
              "end": 1575
            },
            "start": 1570,
            "end": 1575
          },
          "start": 1569,
          "end": 1575
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1578,
          "end": 1581
        },
        "start": 1576,
        "end": 1581
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1595,
              "end": 1596
            },
            "start": 1588,
            "end": 1597
          }
        ],
        "start": 1582,
        "end": 1599
      },
      "expression": false,
      "start": 1532,
      "end": 1599
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 41,
  "end": 1600
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 41,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 48,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 57,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 112,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 119,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "fooWithParameters",
    "start": 128,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 178,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 225,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 239,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 252,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 259,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "fooWithRestParameters",
    "start": 268,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 293,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 301,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "rests",
    "start": 304,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 311,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 327,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "rests",
    "start": 338,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "join",
    "start": 344,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 348,
    "end": 349
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 349,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 354,
    "end": 355
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 357,
    "end": 363
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 364,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "fooWithOverloads",
    "start": 373,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 393,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 402,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 408,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 410,
    "end": 416
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 417,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "fooWithOverloads",
    "start": 426,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 446,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 453,
    "end": 454
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
    "type": "Keyword",
    "value": "export",
    "start": 463,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 470,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "fooWithOverloads",
    "start": 479,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 499,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 505,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 509,
    "end": 510
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 515,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 525,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 528,
    "end": 534
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 535,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "fooWithSingleOverload",
    "start": 544,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 569,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 578,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 584,
    "end": 585
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 586,
    "end": 592
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 593,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "fooWithSingleOverload",
    "start": 602,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 627,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 632,
    "end": 633
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 638,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 648,
    "end": 649
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 651,
    "end": 657
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 658,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "fooWithTypePredicate",
    "start": 667,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 691,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 699,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 702,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 709,
    "end": 710
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 715,
    "end": 721
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 722,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 728,
    "end": 729
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 730,
    "end": 736
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 737,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "fooWithTypePredicateAndMulitpleParams",
    "start": 746,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 787,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 795,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 803,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 811,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 814,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 821,
    "end": 822
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 827,
    "end": 833
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 834,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 840,
    "end": 841
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 842,
    "end": 848
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 849,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "fooWithTypeTypePredicateAndGeneric",
    "start": 858,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 899,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 907,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 912,
    "end": 913
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 918,
    "end": 924
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 925,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 931,
    "end": 932
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 933,
    "end": 939
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 940,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "fooWithTypeTypePredicateAndRestParam",
    "start": 949,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 989,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 994,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 997,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1006,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1009,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1022,
    "end": 1028
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1029,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1090,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "nonExportedFoo",
    "start": 1099,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1165,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "nonExportedFooWithParameters",
    "start": 1174,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1235,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1282,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1296,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1309,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "nonExportedFooWithRestParameters",
    "start": 1318,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Identifier",
    "value": "string",
    "start": 1354,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1362,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "rests",
    "start": 1365,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1372,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1388,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "rests",
    "start": 1399,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "join",
    "start": 1405,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1410,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1418,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "nonExportedFooWithOverloads",
    "start": 1427,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1458,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1467,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1475,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "nonExportedFooWithOverloads",
    "start": 1484,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1515,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1524,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1532,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "nonExportedFooWithOverloads",
    "start": 1541,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1572,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1578,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1588,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1598,
    "end": 1599
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "globalfoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
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
        "body": [],
        "start": 62,
        "end": 65
      },
      "expression": false,
      "start": 41,
      "end": 65
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "globalfooWithParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 143
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSStringKeyword",
              "start": 176,
              "end": 182
            },
            "start": 174,
            "end": 182
          },
          "start": 173,
          "end": 182
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 223,
              "end": 229
            },
            "start": 221,
            "end": 229
          },
          "start": 220,
          "end": 229
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 241,
                  "end": 242
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 245,
                  "end": 246
                },
                "definite": false,
                "start": 241,
                "end": 246
              }
            ],
            "declare": false,
            "start": 237,
            "end": 247
          }
        ],
        "start": 231,
        "end": 249
      },
      "expression": false,
      "start": 111,
      "end": 249
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "globalfooWithRestParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 259,
        "end": 286
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSStringKeyword",
              "start": 290,
              "end": 296
            },
            "start": 288,
            "end": 296
          },
          "start": 287,
          "end": 296
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "rests",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 306
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 308,
                "end": 314
              },
              "start": 308,
              "end": 316
            },
            "start": 306,
            "end": 316
          },
          "value": null,
          "start": 298,
          "end": 316
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 331,
                "end": 332
              },
              "operator": "+",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rests",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 335,
                    "end": 340
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "join",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 341,
                    "end": 345
                  },
                  "optional": false,
                  "computed": false,
                  "start": 335,
                  "end": 345
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 346,
                    "end": 348
                  }
                ],
                "optional": false,
                "start": 335,
                "end": 349
              },
              "start": 331,
              "end": 349
            },
            "start": 324,
            "end": 350
          }
        ],
        "start": 318,
        "end": 352
      },
      "expression": false,
      "start": 250,
      "end": 352
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "globalfooWithOverloads",
        "optional": false,
        "typeAnnotation": null,
        "start": 362,
        "end": 384
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSStringKeyword",
              "start": 388,
              "end": 394
            },
            "start": 386,
            "end": 394
          },
          "start": 385,
          "end": 394
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 397,
          "end": 403
        },
        "start": 395,
        "end": 403
      },
      "body": null,
      "expression": false,
      "start": 353,
      "end": 404
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "globalfooWithOverloads",
        "optional": false,
        "typeAnnotation": null,
        "start": 414,
        "end": 436
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSNumberKeyword",
              "start": 440,
              "end": 446
            },
            "start": 438,
            "end": 446
          },
          "start": 437,
          "end": 446
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 449,
          "end": 455
        },
        "start": 447,
        "end": 455
      },
      "body": null,
      "expression": false,
      "start": 405,
      "end": 456
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "globalfooWithOverloads",
        "optional": false,
        "typeAnnotation": null,
        "start": 466,
        "end": 488
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 492,
              "end": 495
            },
            "start": 490,
            "end": 495
          },
          "start": 489,
          "end": 495
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 498,
          "end": 501
        },
        "start": 496,
        "end": 501
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 515,
              "end": 516
            },
            "start": 508,
            "end": 517
          }
        ],
        "start": 502,
        "end": 519
      },
      "expression": false,
      "start": 457,
      "end": 519
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 41,
  "end": 519
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 41,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "globalfoo",
    "start": 50,
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
    "type": "Punctuator",
    "value": "}",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 111,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "globalfooWithParameters",
    "start": 120,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 176,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 223,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 237,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 250,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "globalfooWithRestParameters",
    "start": 259,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 290,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 298,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "rests",
    "start": 301,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 308,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 324,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "rests",
    "start": 335,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "join",
    "start": 341,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 345,
    "end": 346
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 346,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 353,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "globalfooWithOverloads",
    "start": 362,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 388,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "string",
    "start": 397,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 405,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "globalfooWithOverloads",
    "start": 414,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 440,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 449,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 457,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "globalfooWithOverloads",
    "start": 466,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 492,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 498,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 502,
    "end": 503
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 508,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 518,
    "end": 519
  }
]
```
