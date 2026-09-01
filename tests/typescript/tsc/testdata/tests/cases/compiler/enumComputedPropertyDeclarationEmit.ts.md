__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "StringEnum",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 22
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
                "start": 29,
                "end": 30
              },
              "initializer": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 33,
                "end": 36
              },
              "computed": false,
              "start": 29,
              "end": 36
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 42,
                "end": 43
              },
              "initializer": {
                "type": "Literal",
                "value": "not-an-identifier",
                "raw": "\"not-an-identifier\"",
                "start": 46,
                "end": 65
              },
              "computed": false,
              "start": 42,
              "end": 65
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Unused",
                "optional": false,
                "typeAnnotation": null,
                "start": 71,
                "end": 77
              },
              "initializer": {
                "type": "Literal",
                "value": "unused",
                "raw": "\"unused\"",
                "start": 80,
                "end": 88
              },
              "computed": false,
              "start": 71,
              "end": 88
            }
          ],
          "start": 23,
          "end": 91
        },
        "const": false,
        "declare": false,
        "start": 7,
        "end": 91
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 91
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringRecord",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 118
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
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
                        "name": "StringEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 128,
                        "end": 138
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 139,
                        "end": 140
                      },
                      "optional": false,
                      "computed": false,
                      "start": 128,
                      "end": 140
                    },
                    "value": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StringEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 143,
                        "end": 153
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 154,
                        "end": 155
                      },
                      "optional": false,
                      "computed": false,
                      "start": 143,
                      "end": 155
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 127,
                    "end": 155
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StringEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 162,
                        "end": 172
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 173,
                        "end": 174
                      },
                      "optional": false,
                      "computed": false,
                      "start": 162,
                      "end": 174
                    },
                    "value": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StringEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 177,
                        "end": 187
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 188,
                        "end": 189
                      },
                      "optional": false,
                      "computed": false,
                      "start": 177,
                      "end": 189
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 161,
                    "end": 189
                  }
                ],
                "start": 121,
                "end": 192
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 201
                },
                "typeArguments": null,
                "start": 196,
                "end": 201
              },
              "start": 121,
              "end": 201
            },
            "definite": false,
            "start": 106,
            "end": 201
          }
        ],
        "declare": false,
        "start": 100,
        "end": 202
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 93,
      "end": 202
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "StringKey",
          "optional": false,
          "typeAnnotation": null,
          "start": 216,
          "end": 225
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringRecord",
              "optional": false,
              "typeAnnotation": null,
              "start": 241,
              "end": 253
            },
            "typeArguments": null,
            "start": 234,
            "end": 253
          },
          "start": 228,
          "end": 253
        },
        "declare": false,
        "start": 211,
        "end": 254
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 204,
      "end": 254
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NumericEnum",
          "optional": false,
          "typeAnnotation": null,
          "start": 268,
          "end": 279
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Zero",
                "optional": false,
                "typeAnnotation": null,
                "start": 286,
                "end": 290
              },
              "initializer": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 293,
                "end": 294
              },
              "computed": false,
              "start": 286,
              "end": 294
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Negative",
                "optional": false,
                "typeAnnotation": null,
                "start": 300,
                "end": 308
              },
              "initializer": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 312,
                  "end": 313
                },
                "prefix": true,
                "start": 311,
                "end": 313
              },
              "computed": false,
              "start": 300,
              "end": 313
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Unused",
                "optional": false,
                "typeAnnotation": null,
                "start": 319,
                "end": 325
              },
              "initializer": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 328,
                "end": 329
              },
              "computed": false,
              "start": 319,
              "end": 329
            }
          ],
          "start": 280,
          "end": 332
        },
        "const": false,
        "declare": false,
        "start": 263,
        "end": 332
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 256,
      "end": 332
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "numericRecord",
              "optional": false,
              "typeAnnotation": null,
              "start": 347,
              "end": 360
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
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
                        "name": "NumericEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 370,
                        "end": 381
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Zero",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 382,
                        "end": 386
                      },
                      "optional": false,
                      "computed": false,
                      "start": 370,
                      "end": 386
                    },
                    "value": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NumericEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 389,
                        "end": 400
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Zero",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 401,
                        "end": 405
                      },
                      "optional": false,
                      "computed": false,
                      "start": 389,
                      "end": 405
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 369,
                    "end": 405
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NumericEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 412,
                        "end": 423
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Negative",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 424,
                        "end": 432
                      },
                      "optional": false,
                      "computed": false,
                      "start": 412,
                      "end": 432
                    },
                    "value": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NumericEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 435,
                        "end": 446
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Negative",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 447,
                        "end": 455
                      },
                      "optional": false,
                      "computed": false,
                      "start": 435,
                      "end": 455
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 411,
                    "end": 455
                  }
                ],
                "start": 363,
                "end": 458
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 462,
                  "end": 467
                },
                "typeArguments": null,
                "start": 462,
                "end": 467
              },
              "start": 363,
              "end": 467
            },
            "definite": false,
            "start": 347,
            "end": 467
          }
        ],
        "declare": false,
        "start": 341,
        "end": 468
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 334,
      "end": 468
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NumericKey",
          "optional": false,
          "typeAnnotation": null,
          "start": 482,
          "end": 492
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "numericRecord",
              "optional": false,
              "typeAnnotation": null,
              "start": 508,
              "end": 521
            },
            "typeArguments": null,
            "start": 501,
            "end": 521
          },
          "start": 495,
          "end": 521
        },
        "declare": false,
        "start": 477,
        "end": 522
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 470,
      "end": 522
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Assignability",
        "optional": false,
        "typeAnnotation": null,
        "start": 529,
        "end": 542
      },
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
              "start": 543,
              "end": 544
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StringEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 553,
                    "end": 563
                  },
                  "typeArguments": null,
                  "start": 553,
                  "end": 563
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NumericEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 566,
                    "end": 577
                  },
                  "typeArguments": null,
                  "start": 566,
                  "end": 577
                }
              ],
              "start": 553,
              "end": 577
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 543,
            "end": 577
          }
        ],
        "start": 542,
        "end": 578
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 581,
          "end": 582
        },
        "typeArguments": null,
        "start": 581,
        "end": 582
      },
      "declare": false,
      "start": 524,
      "end": 583
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "StringDemo",
          "optional": false,
          "typeAnnotation": null,
          "start": 596,
          "end": 606
        },
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
                "start": 607,
                "end": 608
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 617,
                  "end": 626
                },
                "typeArguments": null,
                "start": 617,
                "end": 626
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 607,
              "end": 626
            }
          ],
          "start": 606,
          "end": 627
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Assignability",
            "optional": false,
            "typeAnnotation": null,
            "start": 630,
            "end": 643
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 644,
                  "end": 645
                },
                "typeArguments": null,
                "start": 644,
                "end": 645
              }
            ],
            "start": 643,
            "end": 646
          },
          "start": 630,
          "end": 646
        },
        "declare": false,
        "start": 591,
        "end": 647
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 584,
      "end": 647
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NumericDemo",
          "optional": false,
          "typeAnnotation": null,
          "start": 660,
          "end": 671
        },
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
                "start": 672,
                "end": 673
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NumericKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 682,
                  "end": 692
                },
                "typeArguments": null,
                "start": 682,
                "end": 692
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 672,
              "end": 692
            }
          ],
          "start": 671,
          "end": 693
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Assignability",
            "optional": false,
            "typeAnnotation": null,
            "start": 696,
            "end": 709
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 710,
                  "end": 711
                },
                "typeArguments": null,
                "start": 710,
                "end": 711
              }
            ],
            "start": 709,
            "end": 712
          },
          "start": 696,
          "end": 712
        },
        "declare": false,
        "start": 655,
        "end": 713
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 648,
      "end": 713
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Namespace",
          "optional": false,
          "typeAnnotation": null,
          "start": 732,
          "end": 741
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "NamespaceEnum",
                "optional": false,
                "typeAnnotation": null,
                "start": 753,
                "end": 766
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
                      "start": 777,
                      "end": 778
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 781,
                      "end": 784
                    },
                    "computed": false,
                    "start": 777,
                    "end": 784
                  }
                ],
                "start": 767,
                "end": 791
              },
              "const": false,
              "declare": false,
              "start": 748,
              "end": 791
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 810,
                      "end": 816
                    },
                    "init": {
                      "type": "TSAsExpression",
                      "expression": {
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
                                "name": "NamespaceEnum",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 830,
                                "end": 843
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 844,
                                "end": 845
                              },
                              "optional": false,
                              "computed": false,
                              "start": 830,
                              "end": 845
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "NamespaceEnum",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 848,
                                "end": 861
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 862,
                                "end": 863
                              },
                              "optional": false,
                              "computed": false,
                              "start": 848,
                              "end": 863
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false,
                            "start": 829,
                            "end": 863
                          }
                        ],
                        "start": 819,
                        "end": 870
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 874,
                          "end": 879
                        },
                        "typeArguments": null,
                        "start": 874,
                        "end": 879
                      },
                      "start": 819,
                      "end": 879
                    },
                    "definite": false,
                    "start": 810,
                    "end": 879
                  }
                ],
                "declare": false,
                "start": 804,
                "end": 880
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 797,
              "end": 880
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 898,
                  "end": 901
                },
                "typeParameters": null,
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 917,
                      "end": 923
                    },
                    "typeArguments": null,
                    "start": 910,
                    "end": 923
                  },
                  "start": 904,
                  "end": 923
                },
                "declare": false,
                "start": 893,
                "end": 924
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 886,
              "end": 924
            },
            {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "NamespaceAssignability",
                "optional": false,
                "typeAnnotation": null,
                "start": 935,
                "end": 957
              },
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
                      "start": 958,
                      "end": 959
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NamespaceEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 968,
                        "end": 981
                      },
                      "typeArguments": null,
                      "start": 968,
                      "end": 981
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 958,
                    "end": 981
                  }
                ],
                "start": 957,
                "end": 982
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 985,
                  "end": 986
                },
                "typeArguments": null,
                "start": 985,
                "end": 986
              },
              "declare": false,
              "start": 930,
              "end": 987
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Demo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1004,
                  "end": 1008
                },
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
                        "start": 1009,
                        "end": 1010
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1019,
                          "end": 1022
                        },
                        "typeArguments": null,
                        "start": 1019,
                        "end": 1022
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1009,
                      "end": 1022
                    }
                  ],
                  "start": 1008,
                  "end": 1023
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NamespaceAssignability",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1026,
                    "end": 1048
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1049,
                          "end": 1050
                        },
                        "typeArguments": null,
                        "start": 1049,
                        "end": 1050
                      }
                    ],
                    "start": 1048,
                    "end": 1051
                  },
                  "start": 1026,
                  "end": 1051
                },
                "declare": false,
                "start": 999,
                "end": 1052
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 992,
              "end": 1052
            }
          ],
          "start": 742,
          "end": 1054
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 722,
        "end": 1054
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 715,
      "end": 1054
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1054
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
    "value": "enum",
    "start": 7,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 12,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 31,
    "end": 32
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 33,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 44,
    "end": 45
  },
  {
    "type": "String",
    "value": "\"not-an-identifier\"",
    "start": 46,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Unused",
    "start": 71,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79
  },
  {
    "type": "String",
    "value": "\"unused\"",
    "start": 80,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 93,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 100,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "stringRecord",
    "start": 106,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 128,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 143,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 162,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 177,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 193,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 196,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 204,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 211,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "StringKey",
    "start": 216,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 228,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 234,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "stringRecord",
    "start": 241,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 256,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 263,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "NumericEnum",
    "start": 268,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "Zero",
    "start": 286,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 291,
    "end": 292
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "Negative",
    "start": 300,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 311,
    "end": 312
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "Unused",
    "start": 319,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 326,
    "end": 327
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 331,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 334,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 341,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "numericRecord",
    "start": 347,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "NumericEnum",
    "start": 370,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "Zero",
    "start": 382,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "NumericEnum",
    "start": 389,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "Zero",
    "start": 401,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "NumericEnum",
    "start": 412,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "Negative",
    "start": 424,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "NumericEnum",
    "start": 435,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "Negative",
    "start": 447,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 459,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 462,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 467,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 470,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 477,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "NumericKey",
    "start": 482,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 495,
    "end": 500
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 501,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "numericRecord",
    "start": 508,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 524,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "Assignability",
    "start": 529,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 543,
    "end": 544
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 545,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 553,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "NumericEnum",
    "start": 566,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 582,
    "end": 583
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 584,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 591,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "StringDemo",
    "start": 596,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 607,
    "end": 608
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 609,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "StringKey",
    "start": 617,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "Assignability",
    "start": 630,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Keyword",
    "value": "export",
    "start": 648,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 655,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "NumericDemo",
    "start": 660,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 672,
    "end": 673
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 674,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "NumericKey",
    "start": 682,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "Assignability",
    "start": 696,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 712,
    "end": 713
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 715,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 722,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "Namespace",
    "start": 732,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 742,
    "end": 743
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 748,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "NamespaceEnum",
    "start": 753,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 779,
    "end": 780
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 781,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 790,
    "end": 791
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 797,
    "end": 803
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 804,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "record",
    "start": 810,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "NamespaceEnum",
    "start": 830,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "NamespaceEnum",
    "start": 848,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 871,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 874,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 879,
    "end": 880
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 886,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 893,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 898,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 904,
    "end": 909
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 910,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "record",
    "start": 917,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 930,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "NamespaceAssignability",
    "start": 935,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 958,
    "end": 959
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 960,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "NamespaceEnum",
    "start": 968,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 986,
    "end": 987
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 992,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 999,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "Demo",
    "start": 1004,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1011,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 1019,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "NamespaceAssignability",
    "start": 1026,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1053,
    "end": 1054
  }
]
```
