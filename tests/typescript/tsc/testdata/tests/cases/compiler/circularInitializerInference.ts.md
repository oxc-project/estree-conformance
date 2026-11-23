__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IsAny",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 22
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Type",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 27
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 23,
            "end": 27
          }
        ],
        "start": 22,
        "end": 28
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 31,
            "end": 32
          },
          "start": 31,
          "end": 32
        },
        "extendsType": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 42,
                "end": 43
              },
              "start": 42,
              "end": 43
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Type",
                "optional": false,
                "typeAnnotation": null,
                "start": 46,
                "end": 50
              },
              "typeArguments": null,
              "start": 46,
              "end": 50
            }
          ],
          "start": 42,
          "end": 50
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 54,
            "end": 58
          },
          "start": 54,
          "end": 58
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 61,
            "end": 66
          },
          "start": 61,
          "end": 66
        },
        "start": 31,
        "end": 66
      },
      "declare": false,
      "start": 12,
      "end": 67
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Assert",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 79
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Condition",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 89
            },
            "constraint": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 98,
                "end": 102
              },
              "start": 98,
              "end": 102
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 80,
            "end": 102
          }
        ],
        "start": 79,
        "end": 103
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Condition",
          "optional": false,
          "typeAnnotation": null,
          "start": 106,
          "end": 115
        },
        "typeArguments": null,
        "start": 106,
        "end": 115
      },
      "declare": false,
      "start": 68,
      "end": 116
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
            "name": "comma",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 127
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "comma",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 136
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 138,
                "end": 139
              }
            ],
            "start": 131,
            "end": 139
          },
          "definite": false,
          "start": 122,
          "end": 140
        }
      ],
      "declare": false,
      "start": 118,
      "end": 141
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CommaInference",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 161
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Assert",
          "optional": false,
          "typeAnnotation": null,
          "start": 164,
          "end": 170
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IsAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 176
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "comma",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 184,
                      "end": 189
                    },
                    "typeArguments": null,
                    "start": 177,
                    "end": 189
                  }
                ],
                "start": 176,
                "end": 190
              },
              "start": 171,
              "end": 190
            }
          ],
          "start": 170,
          "end": 191
        },
        "start": 164,
        "end": 191
      },
      "declare": false,
      "start": 142,
      "end": 192
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
            "name": "nestedComma",
            "optional": false,
            "typeAnnotation": null,
            "start": 198,
            "end": 209
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "comma",
                "optional": false,
                "typeAnnotation": null,
                "start": 213,
                "end": 218
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nestedComma",
                "optional": false,
                "typeAnnotation": null,
                "start": 220,
                "end": 231
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "comma",
                "optional": false,
                "typeAnnotation": null,
                "start": 233,
                "end": 238
              }
            ],
            "start": 213,
            "end": 238
          },
          "definite": false,
          "start": 198,
          "end": 239
        }
      ],
      "declare": false,
      "start": 194,
      "end": 240
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NestedCommaInference",
        "optional": false,
        "typeAnnotation": null,
        "start": 246,
        "end": 266
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Assert",
          "optional": false,
          "typeAnnotation": null,
          "start": 269,
          "end": 275
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IsAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 276,
                "end": 281
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nestedComma",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 289,
                      "end": 300
                    },
                    "typeArguments": null,
                    "start": 282,
                    "end": 300
                  }
                ],
                "start": 281,
                "end": 301
              },
              "start": 276,
              "end": 301
            }
          ],
          "start": 275,
          "end": 302
        },
        "start": 269,
        "end": 302
      },
      "declare": false,
      "start": 241,
      "end": 303
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
            "name": "assignment",
            "optional": false,
            "typeAnnotation": null,
            "start": 309,
            "end": 319
          },
          "init": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "assignment",
              "optional": false,
              "typeAnnotation": null,
              "start": 323,
              "end": 333
            },
            "right": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 336,
              "end": 337
            },
            "start": 323,
            "end": 337
          },
          "definite": false,
          "start": 309,
          "end": 338
        }
      ],
      "declare": false,
      "start": 305,
      "end": 339
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AssignmentInference",
        "optional": false,
        "typeAnnotation": null,
        "start": 345,
        "end": 364
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Assert",
          "optional": false,
          "typeAnnotation": null,
          "start": 367,
          "end": 373
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IsAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 374,
                "end": 379
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "assignment",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 387,
                      "end": 397
                    },
                    "typeArguments": null,
                    "start": 380,
                    "end": 397
                  }
                ],
                "start": 379,
                "end": 398
              },
              "start": 374,
              "end": 398
            }
          ],
          "start": 373,
          "end": 399
        },
        "start": 367,
        "end": 399
      },
      "declare": false,
      "start": 340,
      "end": 400
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
            "name": "nestedAssignment",
            "optional": false,
            "typeAnnotation": null,
            "start": 406,
            "end": 422
          },
          "init": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "nestedAssignment",
              "optional": false,
              "typeAnnotation": null,
              "start": 426,
              "end": 442
            },
            "right": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nestedAssignment",
                "optional": false,
                "typeAnnotation": null,
                "start": 445,
                "end": 461
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 464,
                "end": 465
              },
              "start": 445,
              "end": 465
            },
            "start": 426,
            "end": 465
          },
          "definite": false,
          "start": 406,
          "end": 466
        }
      ],
      "declare": false,
      "start": 402,
      "end": 467
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NestedAssignmentInference",
        "optional": false,
        "typeAnnotation": null,
        "start": 473,
        "end": 498
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Assert",
          "optional": false,
          "typeAnnotation": null,
          "start": 501,
          "end": 507
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IsAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 508,
                "end": 513
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nestedAssignment",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 521,
                      "end": 537
                    },
                    "typeArguments": null,
                    "start": 514,
                    "end": 537
                  }
                ],
                "start": 513,
                "end": 538
              },
              "start": 508,
              "end": 538
            }
          ],
          "start": 507,
          "end": 539
        },
        "start": 501,
        "end": 539
      },
      "declare": false,
      "start": 468,
      "end": 540
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
            "name": "conditional",
            "optional": false,
            "typeAnnotation": null,
            "start": 546,
            "end": 557
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "conditional",
              "optional": false,
              "typeAnnotation": null,
              "start": 560,
              "end": 571
            },
            "consequent": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 574,
              "end": 575
            },
            "alternate": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 578,
              "end": 579
            },
            "start": 560,
            "end": 579
          },
          "definite": false,
          "start": 546,
          "end": 579
        }
      ],
      "declare": false,
      "start": 542,
      "end": 580
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConditionalInference",
        "optional": false,
        "typeAnnotation": null,
        "start": 586,
        "end": 606
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Assert",
          "optional": false,
          "typeAnnotation": null,
          "start": 609,
          "end": 615
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IsAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 616,
                "end": 621
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "conditional",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 629,
                      "end": 640
                    },
                    "typeArguments": null,
                    "start": 622,
                    "end": 640
                  }
                ],
                "start": 621,
                "end": 641
              },
              "start": 616,
              "end": 641
            }
          ],
          "start": 615,
          "end": 642
        },
        "start": 609,
        "end": 642
      },
      "declare": false,
      "start": 581,
      "end": 643
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
            "name": "logicalAnd",
            "optional": false,
            "typeAnnotation": null,
            "start": 649,
            "end": 659
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "logicalAnd",
              "optional": false,
              "typeAnnotation": null,
              "start": 662,
              "end": 672
            },
            "operator": "&&",
            "right": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 676,
              "end": 678
            },
            "start": 662,
            "end": 678
          },
          "definite": false,
          "start": 649,
          "end": 678
        }
      ],
      "declare": false,
      "start": 645,
      "end": 679
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LogicalAndInference",
        "optional": false,
        "typeAnnotation": null,
        "start": 685,
        "end": 704
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Assert",
          "optional": false,
          "typeAnnotation": null,
          "start": 707,
          "end": 713
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IsAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 714,
                "end": 719
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "logicalAnd",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 727,
                      "end": 737
                    },
                    "typeArguments": null,
                    "start": 720,
                    "end": 737
                  }
                ],
                "start": 719,
                "end": 738
              },
              "start": 714,
              "end": 738
            }
          ],
          "start": 713,
          "end": 739
        },
        "start": 707,
        "end": 739
      },
      "declare": false,
      "start": 680,
      "end": 740
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
            "name": "propertyAccess",
            "optional": false,
            "typeAnnotation": null,
            "start": 746,
            "end": 760
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
                  "name": "member",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 765,
                  "end": 771
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "propertyAccess",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 773,
                    "end": 787
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "member",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 788,
                    "end": 794
                  },
                  "optional": false,
                  "computed": false,
                  "start": 773,
                  "end": 794
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 765,
                "end": 794
              }
            ],
            "start": 763,
            "end": 796
          },
          "definite": false,
          "start": 746,
          "end": 796
        }
      ],
      "declare": false,
      "start": 742,
      "end": 797
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropertyAccessInference",
        "optional": false,
        "typeAnnotation": null,
        "start": 803,
        "end": 826
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Assert",
          "optional": false,
          "typeAnnotation": null,
          "start": 829,
          "end": 835
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IsAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 836,
                "end": 841
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "propertyAccess",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 849,
                      "end": 863
                    },
                    "typeArguments": null,
                    "start": 842,
                    "end": 863
                  }
                ],
                "start": 841,
                "end": 864
              },
              "start": 836,
              "end": 864
            }
          ],
          "start": 835,
          "end": 865
        },
        "start": 829,
        "end": 865
      },
      "declare": false,
      "start": 798,
      "end": 866
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
            "name": "nonCircular",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 887,
                "end": 893
              },
              "start": 885,
              "end": 893
            },
            "start": 874,
            "end": 893
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 896,
            "end": 897
          },
          "definite": false,
          "start": 874,
          "end": 897
        }
      ],
      "declare": false,
      "start": 868,
      "end": 898
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NonCircularInference",
        "optional": false,
        "typeAnnotation": null,
        "start": 904,
        "end": 924
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Assert",
          "optional": false,
          "typeAnnotation": null,
          "start": 927,
          "end": 933
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IsAny",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 934,
                  "end": 939
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nonCircular",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 947,
                        "end": 958
                      },
                      "typeArguments": null,
                      "start": 940,
                      "end": 958
                    }
                  ],
                  "start": 939,
                  "end": 959
                },
                "start": 934,
                "end": 959
              },
              "extendsType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 968,
                  "end": 973
                },
                "start": 968,
                "end": 973
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 976,
                  "end": 980
                },
                "start": 976,
                "end": 980
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 983,
                  "end": 988
                },
                "start": 983,
                "end": 988
              },
              "start": 934,
              "end": 988
            }
          ],
          "start": 933,
          "end": 989
        },
        "start": 927,
        "end": 989
      },
      "declare": false,
      "start": 899,
      "end": 990
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 990
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 12,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "IsAny",
    "start": 17,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 23,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 29,
    "end": 30
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 33,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 41,
    "end": 42
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 46,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 52,
    "end": 53
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 54,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 61,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 68,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "Assert",
    "start": 73,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "Condition",
    "start": 80,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 90,
    "end": 97
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 98,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "Condition",
    "start": 106,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 118,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "comma",
    "start": 122,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "comma",
    "start": 131,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 136,
    "end": 137
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 142,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "CommaInference",
    "start": 147,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "Assert",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "IsAny",
    "start": 171,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 177,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "comma",
    "start": 184,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 194,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "nestedComma",
    "start": 198,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "comma",
    "start": 213,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "nestedComma",
    "start": 220,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "comma",
    "start": 233,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 241,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "NestedCommaInference",
    "start": 246,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "Assert",
    "start": 269,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "IsAny",
    "start": 276,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 282,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "nestedComma",
    "start": 289,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 305,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "assignment",
    "start": 309,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "assignment",
    "start": 323,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 334,
    "end": 335
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 340,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "AssignmentInference",
    "start": 345,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "Assert",
    "start": 367,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "IsAny",
    "start": 374,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 379,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 380,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "assignment",
    "start": 387,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 402,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "nestedAssignment",
    "start": 406,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "nestedAssignment",
    "start": 426,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "nestedAssignment",
    "start": 445,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 462,
    "end": 463
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 468,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "NestedAssignmentInference",
    "start": 473,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "Assert",
    "start": 501,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "IsAny",
    "start": 508,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 513,
    "end": 514
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 514,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "nestedAssignment",
    "start": 521,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 542,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "conditional",
    "start": 546,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "conditional",
    "start": 560,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 572,
    "end": 573
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 576,
    "end": 577
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 581,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "ConditionalInference",
    "start": 586,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "Assert",
    "start": 609,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "IsAny",
    "start": 616,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 621,
    "end": 622
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 622,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "conditional",
    "start": 629,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 642,
    "end": 643
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 645,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "logicalAnd",
    "start": 649,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "logicalAnd",
    "start": 662,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 673,
    "end": 675
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 676,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 680,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "LogicalAndInference",
    "start": 685,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "Assert",
    "start": 707,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "IsAny",
    "start": 714,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 719,
    "end": 720
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 720,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "logicalAnd",
    "start": 727,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 739,
    "end": 740
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 742,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "propertyAccess",
    "start": 746,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "member",
    "start": 765,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "propertyAccess",
    "start": 773,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "member",
    "start": 788,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "type",
    "start": 798,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "PropertyAccessInference",
    "start": 803,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "Assert",
    "start": 829,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "IsAny",
    "start": 836,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 841,
    "end": 842
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 842,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "propertyAccess",
    "start": 849,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 865,
    "end": 866
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 868,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "nonCircular",
    "start": 874,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 887,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 894,
    "end": 895
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 899,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "NonCircularInference",
    "start": 904,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "Assert",
    "start": 927,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "IsAny",
    "start": 934,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 939,
    "end": 940
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 940,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "nonCircular",
    "start": 947,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Boolean",
    "value": "false",
    "start": 968,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 974,
    "end": 975
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 976,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 981,
    "end": 982
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 983,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 989,
    "end": 990
  }
]
```
