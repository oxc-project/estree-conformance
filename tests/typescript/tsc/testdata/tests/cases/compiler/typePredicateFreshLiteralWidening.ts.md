__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Narrowable",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 18,
            "end": 24
          },
          {
            "type": "TSNumberKeyword",
            "start": 27,
            "end": 33
          },
          {
            "type": "TSBigIntKeyword",
            "start": 36,
            "end": 42
          },
          {
            "type": "TSBooleanKeyword",
            "start": 45,
            "end": 52
          }
        ],
        "start": 18,
        "end": 52
      },
      "declare": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Narrow",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 66
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 68
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 67,
            "end": 68
          }
        ],
        "start": 66,
        "end": 69
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 73,
                "end": 74
              },
              "typeArguments": null,
              "start": 73,
              "end": 74
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Narrowable",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 93
              },
              "typeArguments": null,
              "start": 83,
              "end": 93
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 96,
                "end": 97
              },
              "typeArguments": null,
              "start": 96,
              "end": 97
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 100,
              "end": 105
            },
            "start": 73,
            "end": 105
          },
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 118
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 128,
                  "end": 129
                },
                "typeArguments": null,
                "start": 128,
                "end": 129
              },
              "start": 122,
              "end": 129
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Narrow",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 138
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 139,
                        "end": 140
                      },
                      "typeArguments": null,
                      "start": 139,
                      "end": 140
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 141,
                        "end": 142
                      },
                      "typeArguments": null,
                      "start": 141,
                      "end": 142
                    },
                    "start": 139,
                    "end": 143
                  }
                ],
                "start": 138,
                "end": 144
              },
              "start": 132,
              "end": 144
            },
            "optional": false,
            "readonly": null,
            "start": 110,
            "end": 147
          }
        ],
        "start": 72,
        "end": 148
      },
      "declare": false,
      "start": 55,
      "end": 149
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
            "name": "satisfies",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 166
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TWide",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 172,
                    "end": 177
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 172,
                  "end": 177
                }
              ],
              "start": 171,
              "end": 179
            },
            "params": [],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TNarrow",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 188,
                      "end": 195
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TWide",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 204,
                        "end": 209
                      },
                      "typeArguments": null,
                      "start": 204,
                      "end": 209
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 188,
                    "end": 209
                  }
                ],
                "start": 187,
                "end": 210
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "narrow",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Narrow",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 219,
                        "end": 225
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TNarrow",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 226,
                              "end": 233
                            },
                            "typeArguments": null,
                            "start": 226,
                            "end": 233
                          }
                        ],
                        "start": 225,
                        "end": 234
                      },
                      "start": 219,
                      "end": 234
                    },
                    "start": 217,
                    "end": 234
                  },
                  "start": 211,
                  "end": 234
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "narrow",
                "optional": false,
                "typeAnnotation": null,
                "start": 243,
                "end": 249
              },
              "id": null,
              "generator": false,
              "start": 187,
              "end": 249
            },
            "id": null,
            "generator": false,
            "start": 171,
            "end": 249
          },
          "definite": false,
          "start": 157,
          "end": 249
        }
      ],
      "declare": false,
      "start": 151,
      "end": 250
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
            "name": "isNotNull",
            "optional": false,
            "typeAnnotation": null,
            "start": 340,
            "end": 349
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 353,
                    "end": 354
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 353,
                  "end": 354
                }
              ],
              "start": 352,
              "end": 356
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 364,
                          "end": 365
                        },
                        "typeArguments": null,
                        "start": 364,
                        "end": 365
                      },
                      {
                        "type": "TSNullKeyword",
                        "start": 368,
                        "end": 372
                      }
                    ],
                    "start": 364,
                    "end": 372
                  },
                  "start": 362,
                  "end": 372
                },
                "start": 357,
                "end": 372
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 375,
                  "end": 380
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
                      "start": 384,
                      "end": 385
                    },
                    "typeArguments": null,
                    "start": 384,
                    "end": 385
                  },
                  "start": 384,
                  "end": 385
                },
                "start": 375,
                "end": 385
              },
              "start": 373,
              "end": 385
            },
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 389,
                "end": 394
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 399,
                "end": 403
              },
              "start": 389,
              "end": 403
            },
            "id": null,
            "generator": false,
            "start": 352,
            "end": 403
          },
          "definite": false,
          "start": 340,
          "end": 403
        }
      ],
      "declare": false,
      "start": 334,
      "end": 404
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null,
        "start": 411,
        "end": 415
      },
      "typeParameters": null,
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 425
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 427,
                    "end": 433
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 436,
                    "end": 440
                  }
                ],
                "start": 427,
                "end": 440
              },
              "start": 425,
              "end": 440
            },
            "accessibility": null,
            "static": false,
            "start": 420,
            "end": 440
          }
        ],
        "start": 418,
        "end": 442
      },
      "declare": false,
      "start": 406,
      "end": 443
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
            "name": "item1",
            "optional": false,
            "typeAnnotation": null,
            "start": 451,
            "end": 456
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "satisfies",
                "optional": false,
                "typeAnnotation": null,
                "start": 459,
                "end": 468
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 469,
                      "end": 473
                    },
                    "typeArguments": null,
                    "start": 469,
                    "end": 473
                  }
                ],
                "start": 468,
                "end": 474
              },
              "arguments": [],
              "optional": false,
              "start": 459,
              "end": 476
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
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 479,
                      "end": 484
                    },
                    "value": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 486,
                      "end": 489
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 479,
                    "end": 489
                  }
                ],
                "start": 477,
                "end": 491
              }
            ],
            "optional": false,
            "start": 459,
            "end": 492
          },
          "definite": false,
          "start": 451,
          "end": 492
        }
      ],
      "declare": false,
      "start": 445,
      "end": 493
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
            "name": "item2",
            "optional": false,
            "typeAnnotation": null,
            "start": 500,
            "end": 505
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "satisfies",
                "optional": false,
                "typeAnnotation": null,
                "start": 508,
                "end": 517
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 518,
                      "end": 522
                    },
                    "typeArguments": null,
                    "start": 518,
                    "end": 522
                  }
                ],
                "start": 517,
                "end": 523
              },
              "arguments": [],
              "optional": false,
              "start": 508,
              "end": 525
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
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 528,
                      "end": 533
                    },
                    "value": {
                      "type": "Literal",
                      "value": "2",
                      "raw": "\"2\"",
                      "start": 535,
                      "end": 538
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 528,
                    "end": 538
                  }
                ],
                "start": 526,
                "end": 540
              }
            ],
            "optional": false,
            "start": 508,
            "end": 541
          },
          "definite": false,
          "start": 500,
          "end": 541
        }
      ],
      "declare": false,
      "start": 494,
      "end": 542
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
            "name": "item3",
            "optional": false,
            "typeAnnotation": null,
            "start": 549,
            "end": 554
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "satisfies",
                "optional": false,
                "typeAnnotation": null,
                "start": 557,
                "end": 566
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 567,
                      "end": 571
                    },
                    "typeArguments": null,
                    "start": 567,
                    "end": 571
                  }
                ],
                "start": 566,
                "end": 572
              },
              "arguments": [],
              "optional": false,
              "start": 557,
              "end": 574
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
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 577,
                      "end": 582
                    },
                    "value": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 584,
                      "end": 588
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 577,
                    "end": 588
                  }
                ],
                "start": 575,
                "end": 590
              }
            ],
            "optional": false,
            "start": 557,
            "end": 591
          },
          "definite": false,
          "start": 549,
          "end": 591
        }
      ],
      "declare": false,
      "start": 543,
      "end": 592
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
            "name": "values2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 609,
                  "end": 614
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "1",
                            "raw": "\"1\"",
                            "start": 615,
                            "end": 618
                          },
                          "start": 615,
                          "end": 618
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "2",
                            "raw": "\"2\"",
                            "start": 621,
                            "end": 624
                          },
                          "start": 621,
                          "end": 624
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 627,
                          "end": 631
                        }
                      ],
                      "start": 615,
                      "end": 631
                    }
                  ],
                  "start": 614,
                  "end": 632
                },
                "start": 609,
                "end": 632
              },
              "start": 607,
              "end": 632
            },
            "start": 600,
            "end": 632
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 636,
                "end": 639
              },
              {
                "type": "Literal",
                "value": "2",
                "raw": "\"2\"",
                "start": 641,
                "end": 644
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 646,
                "end": 650
              }
            ],
            "start": 635,
            "end": 651
          },
          "definite": false,
          "start": 600,
          "end": 651
        }
      ],
      "declare": false,
      "start": 594,
      "end": 652
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
            "name": "filteredValues2",
            "optional": false,
            "typeAnnotation": null,
            "start": 659,
            "end": 674
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "values2",
                "optional": false,
                "typeAnnotation": null,
                "start": 677,
                "end": 684
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 685,
                "end": 691
              },
              "optional": false,
              "computed": false,
              "start": 677,
              "end": 691
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "isNotNull",
                "optional": false,
                "typeAnnotation": null,
                "start": 692,
                "end": 701
              }
            ],
            "optional": false,
            "start": 677,
            "end": 702
          },
          "definite": false,
          "start": 659,
          "end": 702
        }
      ],
      "declare": false,
      "start": 653,
      "end": 703
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
            "name": "values1",
            "optional": false,
            "typeAnnotation": null,
            "start": 711,
            "end": 718
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 722,
                    "end": 727
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 729,
                    "end": 734
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 736,
                    "end": 741
                  }
                ],
                "start": 721,
                "end": 742
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 743,
                "end": 746
              },
              "optional": false,
              "computed": false,
              "start": 721,
              "end": 746
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
                    "start": 747,
                    "end": 751
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 755,
                    "end": 759
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 760,
                    "end": 765
                  },
                  "optional": false,
                  "computed": false,
                  "start": 755,
                  "end": 765
                },
                "id": null,
                "generator": false,
                "start": 747,
                "end": 765
              }
            ],
            "optional": false,
            "start": 721,
            "end": 766
          },
          "definite": false,
          "start": 711,
          "end": 766
        }
      ],
      "declare": false,
      "start": 705,
      "end": 767
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
            "name": "filteredValues1",
            "optional": false,
            "typeAnnotation": null,
            "start": 774,
            "end": 789
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "values1",
                "optional": false,
                "typeAnnotation": null,
                "start": 792,
                "end": 799
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 800,
                "end": 806
              },
              "optional": false,
              "computed": false,
              "start": 792,
              "end": 806
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "isNotNull",
                "optional": false,
                "typeAnnotation": null,
                "start": 807,
                "end": 816
              }
            ],
            "optional": false,
            "start": 792,
            "end": 817
          },
          "definite": false,
          "start": 774,
          "end": 817
        }
      ],
      "declare": false,
      "start": 768,
      "end": 818
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 818
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Narrowable",
    "start": 5,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 18,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 45,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 55,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "Narrow",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 75,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "Narrowable",
    "start": 83,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 100,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 119,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 122,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "Narrow",
    "start": 132,
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
    "value": "A",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 151,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 157,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "TWide",
    "start": 172,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 182,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "TNarrow",
    "start": 188,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 196,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "TWide",
    "start": 204,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "narrow",
    "start": 211,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "Narrow",
    "start": 219,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "TNarrow",
    "start": 226,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 236,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "narrow",
    "start": 243,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 334,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "isNotNull",
    "start": 340,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": ">",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 357,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 366,
    "end": 367
  },
  {
    "type": "Null",
    "value": "null",
    "start": 368,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 375,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 381,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 386,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 389,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 395,
    "end": 398
  },
  {
    "type": "Null",
    "value": "null",
    "start": 399,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 406,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 411,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 420,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 427,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 434,
    "end": 435
  },
  {
    "type": "Null",
    "value": "null",
    "start": 436,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "const",
    "start": 445,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "item1",
    "start": 451,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 459,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 469,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 479,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 484,
    "end": 485
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 486,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 492,
    "end": 493
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 494,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "item2",
    "start": 500,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 508,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 518,
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
    "value": "(",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 528,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 533,
    "end": 534
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 535,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 541,
    "end": 542
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 543,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "item3",
    "start": 549,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 557,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 567,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 577,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 582,
    "end": 583
  },
  {
    "type": "Null",
    "value": "null",
    "start": 584,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 591,
    "end": 592
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 594,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "values2",
    "start": 600,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 609,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 614,
    "end": 615
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 615,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 619,
    "end": 620
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 621,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 625,
    "end": 626
  },
  {
    "type": "Null",
    "value": "null",
    "start": 627,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 635,
    "end": 636
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 636,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 639,
    "end": 640
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 641,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 644,
    "end": 645
  },
  {
    "type": "Null",
    "value": "null",
    "start": 646,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 651,
    "end": 652
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 653,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "filteredValues2",
    "start": 659,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "values2",
    "start": 677,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 685,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "isNotNull",
    "start": 692,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 702,
    "end": 703
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 705,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "values1",
    "start": 711,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "item1",
    "start": 722,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "item2",
    "start": 729,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "item3",
    "start": 736,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 743,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 747,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 752,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 755,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 760,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 766,
    "end": 767
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 768,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "filteredValues1",
    "start": 774,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "values1",
    "start": 792,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 800,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "isNotNull",
    "start": 807,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 817,
    "end": 818
  }
]
```
