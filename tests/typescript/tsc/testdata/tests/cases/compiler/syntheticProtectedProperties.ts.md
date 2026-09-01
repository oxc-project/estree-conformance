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
        "name": "Dummy",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 76
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 84
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 86,
                "end": 92
              },
              "start": 84,
              "end": 92
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 83,
            "end": 93
          }
        ],
        "start": 77,
        "end": 95
      },
      "abstract": false,
      "declare": true,
      "start": 57,
      "end": 95
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Public",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 108
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 115
            },
            "typeArguments": null,
            "start": 111,
            "end": 115
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Dummy",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 123
            },
            "typeArguments": null,
            "start": 118,
            "end": 123
          }
        ],
        "start": 111,
        "end": 123
      },
      "declare": false,
      "start": 97,
      "end": 124
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 140,
        "end": 144
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
              "name": "content",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 172
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 176,
                  "end": 182
                },
                "start": 174,
                "end": 182
              },
              "body": null,
              "expression": false,
              "start": 172,
              "end": 183
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 151,
            "end": 183
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "content",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 209
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 217,
                      "end": 223
                    },
                    "start": 215,
                    "end": 223
                  },
                  "start": 210,
                  "end": 223
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 209,
              "end": 225
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 188,
            "end": 225
          }
        ],
        "start": 145,
        "end": 227
      },
      "abstract": false,
      "declare": true,
      "start": 126,
      "end": 227
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mock",
        "optional": false,
        "typeAnnotation": null,
        "start": 243,
        "end": 247
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
              "name": "content",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 265
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 269,
                  "end": 275
                },
                "start": 267,
                "end": 275
              },
              "body": null,
              "expression": false,
              "start": 265,
              "end": 276
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 254,
            "end": 276
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "content",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 292
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 300,
                      "end": 306
                    },
                    "start": 298,
                    "end": 306
                  },
                  "start": 293,
                  "end": 306
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 292,
              "end": 308
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 281,
            "end": 308
          }
        ],
        "start": 248,
        "end": 310
      },
      "abstract": false,
      "declare": true,
      "start": 229,
      "end": 310
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
            "name": "w",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 329,
                  "end": 335
                },
                "typeArguments": null,
                "start": 329,
                "end": 335
              },
              "start": 327,
              "end": 335
            },
            "start": 326,
            "end": 335
          },
          "init": null,
          "definite": false,
          "start": 326,
          "end": 335
        }
      ],
      "declare": true,
      "start": 312,
      "end": 335
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "w",
          "optional": false,
          "typeAnnotation": null,
          "start": 340,
          "end": 341
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Mock",
          "optional": false,
          "typeAnnotation": null,
          "start": 353,
          "end": 357
        },
        "start": 340,
        "end": 357
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "w",
                "optional": false,
                "typeAnnotation": null,
                "start": 365,
                "end": 366
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "content",
                "optional": false,
                "typeAnnotation": null,
                "start": 367,
                "end": 374
              },
              "optional": false,
              "computed": false,
              "start": 365,
              "end": 374
            },
            "directive": null,
            "start": 365,
            "end": 375
          }
        ],
        "start": 359,
        "end": 377
      },
      "alternate": null,
      "start": 336,
      "end": 377
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
            "name": "w2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Mock",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 396,
                      "end": 400
                    },
                    "typeArguments": null,
                    "start": 396,
                    "end": 400
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 403,
                      "end": 409
                    },
                    "typeArguments": null,
                    "start": 403,
                    "end": 409
                  }
                ],
                "start": 396,
                "end": 409
              },
              "start": 394,
              "end": 409
            },
            "start": 392,
            "end": 409
          },
          "init": null,
          "definite": false,
          "start": 392,
          "end": 409
        }
      ],
      "declare": true,
      "start": 378,
      "end": 409
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "w2",
          "optional": false,
          "typeAnnotation": null,
          "start": 410,
          "end": 412
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "content",
          "optional": false,
          "typeAnnotation": null,
          "start": 413,
          "end": 420
        },
        "optional": false,
        "computed": false,
        "start": 410,
        "end": 420
      },
      "directive": null,
      "start": 410,
      "end": 421
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
            "name": "w3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 441,
                      "end": 447
                    },
                    "typeArguments": null,
                    "start": 441,
                    "end": 447
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Mock",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 450,
                      "end": 454
                    },
                    "typeArguments": null,
                    "start": 450,
                    "end": 454
                  }
                ],
                "start": 441,
                "end": 454
              },
              "start": 439,
              "end": 454
            },
            "start": 437,
            "end": 454
          },
          "init": null,
          "definite": false,
          "start": 437,
          "end": 454
        }
      ],
      "declare": true,
      "start": 423,
      "end": 454
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "w3",
          "optional": false,
          "typeAnnotation": null,
          "start": 455,
          "end": 457
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "content",
          "optional": false,
          "typeAnnotation": null,
          "start": 458,
          "end": 465
        },
        "optional": false,
        "computed": false,
        "start": 455,
        "end": 465
      },
      "directive": null,
      "start": 455,
      "end": 466
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 558,
        "end": 560
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
              "start": 571,
              "end": 574
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 578,
                  "end": 584
                },
                "start": 576,
                "end": 584
              },
              "body": null,
              "expression": false,
              "start": 574,
              "end": 585
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 567,
            "end": 585
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 594,
              "end": 597
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 605,
                      "end": 611
                    },
                    "start": 603,
                    "end": 611
                  },
                  "start": 598,
                  "end": 611
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 597,
              "end": 613
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 590,
            "end": 613
          }
        ],
        "start": 561,
        "end": 615
      },
      "abstract": false,
      "declare": true,
      "start": 544,
      "end": 615
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 631,
        "end": 633
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
              "start": 644,
              "end": 647
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 651,
                  "end": 657
                },
                "start": 649,
                "end": 657
              },
              "body": null,
              "expression": false,
              "start": 647,
              "end": 658
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 640,
            "end": 658
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 677,
              "end": 680
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 688,
                      "end": 694
                    },
                    "start": 686,
                    "end": 694
                  },
                  "start": 681,
                  "end": 694
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 680,
              "end": 696
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 663,
            "end": 696
          }
        ],
        "start": 634,
        "end": 698
      },
      "abstract": false,
      "declare": true,
      "start": 617,
      "end": 698
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 714,
        "end": 716
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
              "start": 737,
              "end": 740
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 744,
                  "end": 750
                },
                "start": 742,
                "end": 750
              },
              "body": null,
              "expression": false,
              "start": 740,
              "end": 751
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 723,
            "end": 751
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 770,
              "end": 773
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 781,
                      "end": 787
                    },
                    "start": 779,
                    "end": 787
                  },
                  "start": 774,
                  "end": 787
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 773,
              "end": 789
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 756,
            "end": 789
          }
        ],
        "start": 717,
        "end": 791
      },
      "abstract": false,
      "declare": true,
      "start": 700,
      "end": 791
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P1",
        "optional": false,
        "typeAnnotation": null,
        "start": 807,
        "end": 809
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
              "start": 820,
              "end": 823
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 827,
                  "end": 833
                },
                "start": 825,
                "end": 833
              },
              "body": null,
              "expression": false,
              "start": 823,
              "end": 834
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 816,
            "end": 834
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 843,
              "end": 846
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 854,
                      "end": 860
                    },
                    "start": 852,
                    "end": 860
                  },
                  "start": 847,
                  "end": 860
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 846,
              "end": 862
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 839,
            "end": 862
          }
        ],
        "start": 810,
        "end": 864
      },
      "abstract": false,
      "declare": true,
      "start": 793,
      "end": 864
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P2",
        "optional": false,
        "typeAnnotation": null,
        "start": 880,
        "end": 882
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
              "start": 893,
              "end": 896
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 900,
                  "end": 906
                },
                "start": 898,
                "end": 906
              },
              "body": null,
              "expression": false,
              "start": 896,
              "end": 907
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 889,
            "end": 907
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 924,
              "end": 927
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 935,
                      "end": 941
                    },
                    "start": 933,
                    "end": 941
                  },
                  "start": 928,
                  "end": 941
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 927,
              "end": 943
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 912,
            "end": 943
          }
        ],
        "start": 883,
        "end": 945
      },
      "abstract": false,
      "declare": true,
      "start": 866,
      "end": 945
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P3",
        "optional": false,
        "typeAnnotation": null,
        "start": 961,
        "end": 963
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
              "start": 982,
              "end": 985
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 989,
                  "end": 995
                },
                "start": 987,
                "end": 995
              },
              "body": null,
              "expression": false,
              "start": 985,
              "end": 996
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 970,
            "end": 996
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1013,
              "end": 1016
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1024,
                      "end": 1030
                    },
                    "start": 1022,
                    "end": 1030
                  },
                  "start": 1017,
                  "end": 1030
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1016,
              "end": 1032
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1001,
            "end": 1032
          }
        ],
        "start": 964,
        "end": 1034
      },
      "abstract": false,
      "declare": true,
      "start": 947,
      "end": 1034
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
            "name": "cu12",
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
                      "name": "C1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1113,
                      "end": 1115
                    },
                    "typeArguments": null,
                    "start": 1113,
                    "end": 1115
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1118,
                      "end": 1120
                    },
                    "typeArguments": null,
                    "start": 1118,
                    "end": 1120
                  }
                ],
                "start": 1113,
                "end": 1120
              },
              "start": 1111,
              "end": 1120
            },
            "start": 1107,
            "end": 1120
          },
          "init": null,
          "definite": false,
          "start": 1107,
          "end": 1120
        }
      ],
      "declare": true,
      "start": 1093,
      "end": 1121
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "cu12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1122,
          "end": 1126
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1127,
          "end": 1130
        },
        "optional": false,
        "computed": false,
        "start": 1122,
        "end": 1130
      },
      "directive": null,
      "start": 1122,
      "end": 1131
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "cu12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1132,
            "end": 1136
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1137,
            "end": 1140
          },
          "optional": false,
          "computed": false,
          "start": 1132,
          "end": 1140
        },
        "right": {
          "type": "Literal",
          "value": 123,
          "raw": "123",
          "start": 1143,
          "end": 1146
        },
        "start": 1132,
        "end": 1146
      },
      "directive": null,
      "start": 1132,
      "end": 1147
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
            "name": "cu13",
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
                      "name": "C1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1190,
                      "end": 1192
                    },
                    "typeArguments": null,
                    "start": 1190,
                    "end": 1192
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1195,
                      "end": 1197
                    },
                    "typeArguments": null,
                    "start": 1195,
                    "end": 1197
                  }
                ],
                "start": 1190,
                "end": 1197
              },
              "start": 1188,
              "end": 1197
            },
            "start": 1184,
            "end": 1197
          },
          "init": null,
          "definite": false,
          "start": 1184,
          "end": 1197
        }
      ],
      "declare": true,
      "start": 1170,
      "end": 1198
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "cu13",
          "optional": false,
          "typeAnnotation": null,
          "start": 1199,
          "end": 1203
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1204,
          "end": 1207
        },
        "optional": false,
        "computed": false,
        "start": 1199,
        "end": 1207
      },
      "directive": null,
      "start": 1199,
      "end": 1208
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "cu13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1232,
            "end": 1236
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1237,
            "end": 1240
          },
          "optional": false,
          "computed": false,
          "start": 1232,
          "end": 1240
        },
        "right": {
          "type": "Literal",
          "value": 123,
          "raw": "123",
          "start": 1243,
          "end": 1246
        },
        "start": 1232,
        "end": 1246
      },
      "directive": null,
      "start": 1232,
      "end": 1247
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
            "name": "cu23",
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
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1292,
                      "end": 1294
                    },
                    "typeArguments": null,
                    "start": 1292,
                    "end": 1294
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1297,
                      "end": 1299
                    },
                    "typeArguments": null,
                    "start": 1297,
                    "end": 1299
                  }
                ],
                "start": 1292,
                "end": 1299
              },
              "start": 1290,
              "end": 1299
            },
            "start": 1286,
            "end": 1299
          },
          "init": null,
          "definite": false,
          "start": 1286,
          "end": 1299
        }
      ],
      "declare": true,
      "start": 1272,
      "end": 1300
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "cu23",
          "optional": false,
          "typeAnnotation": null,
          "start": 1301,
          "end": 1305
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1306,
          "end": 1309
        },
        "optional": false,
        "computed": false,
        "start": 1301,
        "end": 1309
      },
      "directive": null,
      "start": 1301,
      "end": 1310
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "cu23",
            "optional": false,
            "typeAnnotation": null,
            "start": 1334,
            "end": 1338
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1339,
            "end": 1342
          },
          "optional": false,
          "computed": false,
          "start": 1334,
          "end": 1342
        },
        "right": {
          "type": "Literal",
          "value": 123,
          "raw": "123",
          "start": 1345,
          "end": 1348
        },
        "start": 1334,
        "end": 1348
      },
      "directive": null,
      "start": 1334,
      "end": 1349
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
            "name": "pu12",
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
                      "name": "P1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1394,
                      "end": 1396
                    },
                    "typeArguments": null,
                    "start": 1394,
                    "end": 1396
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1399,
                      "end": 1401
                    },
                    "typeArguments": null,
                    "start": 1399,
                    "end": 1401
                  }
                ],
                "start": 1394,
                "end": 1401
              },
              "start": 1392,
              "end": 1401
            },
            "start": 1388,
            "end": 1401
          },
          "init": null,
          "definite": false,
          "start": 1388,
          "end": 1401
        }
      ],
      "declare": true,
      "start": 1374,
      "end": 1402
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "pu12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1403,
          "end": 1407
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1408,
          "end": 1411
        },
        "optional": false,
        "computed": false,
        "start": 1403,
        "end": 1411
      },
      "directive": null,
      "start": 1403,
      "end": 1412
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "pu12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1413,
            "end": 1417
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1418,
            "end": 1421
          },
          "optional": false,
          "computed": false,
          "start": 1413,
          "end": 1421
        },
        "right": {
          "type": "Literal",
          "value": 123,
          "raw": "123",
          "start": 1424,
          "end": 1427
        },
        "start": 1413,
        "end": 1427
      },
      "directive": null,
      "start": 1413,
      "end": 1428
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
            "name": "pu13",
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
                      "name": "P1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1469,
                      "end": 1471
                    },
                    "typeArguments": null,
                    "start": 1469,
                    "end": 1471
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1474,
                      "end": 1476
                    },
                    "typeArguments": null,
                    "start": 1474,
                    "end": 1476
                  }
                ],
                "start": 1469,
                "end": 1476
              },
              "start": 1467,
              "end": 1476
            },
            "start": 1463,
            "end": 1476
          },
          "init": null,
          "definite": false,
          "start": 1463,
          "end": 1476
        }
      ],
      "declare": true,
      "start": 1449,
      "end": 1477
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "pu13",
          "optional": false,
          "typeAnnotation": null,
          "start": 1478,
          "end": 1482
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1483,
          "end": 1486
        },
        "optional": false,
        "computed": false,
        "start": 1478,
        "end": 1486
      },
      "directive": null,
      "start": 1478,
      "end": 1487
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "pu13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1511,
            "end": 1515
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1516,
            "end": 1519
          },
          "optional": false,
          "computed": false,
          "start": 1511,
          "end": 1519
        },
        "right": {
          "type": "Literal",
          "value": 123,
          "raw": "123",
          "start": 1522,
          "end": 1525
        },
        "start": 1511,
        "end": 1525
      },
      "directive": null,
      "start": 1511,
      "end": 1526
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
            "name": "pu23",
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
                      "name": "P2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1571,
                      "end": 1573
                    },
                    "typeArguments": null,
                    "start": 1571,
                    "end": 1573
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1576,
                      "end": 1578
                    },
                    "typeArguments": null,
                    "start": 1576,
                    "end": 1578
                  }
                ],
                "start": 1571,
                "end": 1578
              },
              "start": 1569,
              "end": 1578
            },
            "start": 1565,
            "end": 1578
          },
          "init": null,
          "definite": false,
          "start": 1565,
          "end": 1578
        }
      ],
      "declare": true,
      "start": 1551,
      "end": 1579
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "pu23",
          "optional": false,
          "typeAnnotation": null,
          "start": 1580,
          "end": 1584
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1585,
          "end": 1588
        },
        "optional": false,
        "computed": false,
        "start": 1580,
        "end": 1588
      },
      "directive": null,
      "start": 1580,
      "end": 1589
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "pu23",
            "optional": false,
            "typeAnnotation": null,
            "start": 1613,
            "end": 1617
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1618,
            "end": 1621
          },
          "optional": false,
          "computed": false,
          "start": 1613,
          "end": 1621
        },
        "right": {
          "type": "Literal",
          "value": 123,
          "raw": "123",
          "start": 1624,
          "end": 1627
        },
        "start": 1613,
        "end": 1627
      },
      "directive": null,
      "start": 1613,
      "end": 1628
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
            "name": "ci12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1736,
                      "end": 1738
                    },
                    "typeArguments": null,
                    "start": 1736,
                    "end": 1738
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1741,
                      "end": 1743
                    },
                    "typeArguments": null,
                    "start": 1741,
                    "end": 1743
                  }
                ],
                "start": 1736,
                "end": 1743
              },
              "start": 1734,
              "end": 1743
            },
            "start": 1730,
            "end": 1743
          },
          "init": null,
          "definite": false,
          "start": 1730,
          "end": 1743
        }
      ],
      "declare": true,
      "start": 1716,
      "end": 1744
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ci12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1745,
          "end": 1749
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1750,
          "end": 1753
        },
        "optional": false,
        "computed": false,
        "start": 1745,
        "end": 1753
      },
      "directive": null,
      "start": 1745,
      "end": 1754
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ci12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1755,
            "end": 1759
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1760,
            "end": 1763
          },
          "optional": false,
          "computed": false,
          "start": 1755,
          "end": 1763
        },
        "right": {
          "type": "Literal",
          "value": 123,
          "raw": "123",
          "start": 1766,
          "end": 1769
        },
        "start": 1755,
        "end": 1769
      },
      "directive": null,
      "start": 1755,
      "end": 1770
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
            "name": "ci13",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1792,
                      "end": 1794
                    },
                    "typeArguments": null,
                    "start": 1792,
                    "end": 1794
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1797,
                      "end": 1799
                    },
                    "typeArguments": null,
                    "start": 1797,
                    "end": 1799
                  }
                ],
                "start": 1792,
                "end": 1799
              },
              "start": 1790,
              "end": 1799
            },
            "start": 1786,
            "end": 1799
          },
          "init": null,
          "definite": false,
          "start": 1786,
          "end": 1799
        }
      ],
      "declare": true,
      "start": 1772,
      "end": 1800
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ci13",
          "optional": false,
          "typeAnnotation": null,
          "start": 1801,
          "end": 1805
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1806,
          "end": 1809
        },
        "optional": false,
        "computed": false,
        "start": 1801,
        "end": 1809
      },
      "directive": null,
      "start": 1801,
      "end": 1810
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ci13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1811,
            "end": 1815
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1816,
            "end": 1819
          },
          "optional": false,
          "computed": false,
          "start": 1811,
          "end": 1819
        },
        "right": {
          "type": "Literal",
          "value": 123,
          "raw": "123",
          "start": 1822,
          "end": 1825
        },
        "start": 1811,
        "end": 1825
      },
      "directive": null,
      "start": 1811,
      "end": 1826
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
            "name": "ci23",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1848,
                      "end": 1850
                    },
                    "typeArguments": null,
                    "start": 1848,
                    "end": 1850
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1853,
                      "end": 1855
                    },
                    "typeArguments": null,
                    "start": 1853,
                    "end": 1855
                  }
                ],
                "start": 1848,
                "end": 1855
              },
              "start": 1846,
              "end": 1855
            },
            "start": 1842,
            "end": 1855
          },
          "init": null,
          "definite": false,
          "start": 1842,
          "end": 1855
        }
      ],
      "declare": true,
      "start": 1828,
      "end": 1856
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ci23",
          "optional": false,
          "typeAnnotation": null,
          "start": 1857,
          "end": 1861
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1862,
          "end": 1865
        },
        "optional": false,
        "computed": false,
        "start": 1857,
        "end": 1865
      },
      "directive": null,
      "start": 1857,
      "end": 1866
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ci23",
            "optional": false,
            "typeAnnotation": null,
            "start": 1867,
            "end": 1871
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1872,
            "end": 1875
          },
          "optional": false,
          "computed": false,
          "start": 1867,
          "end": 1875
        },
        "right": {
          "type": "Literal",
          "value": 123,
          "raw": "123",
          "start": 1878,
          "end": 1881
        },
        "start": 1867,
        "end": 1881
      },
      "directive": null,
      "start": 1867,
      "end": 1882
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
            "name": "pi12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1925,
                      "end": 1927
                    },
                    "typeArguments": null,
                    "start": 1925,
                    "end": 1927
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1930,
                      "end": 1932
                    },
                    "typeArguments": null,
                    "start": 1930,
                    "end": 1932
                  }
                ],
                "start": 1925,
                "end": 1932
              },
              "start": 1923,
              "end": 1932
            },
            "start": 1919,
            "end": 1932
          },
          "init": null,
          "definite": false,
          "start": 1919,
          "end": 1932
        }
      ],
      "declare": true,
      "start": 1905,
      "end": 1933
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "pi12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1934,
          "end": 1938
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1939,
          "end": 1942
        },
        "optional": false,
        "computed": false,
        "start": 1934,
        "end": 1942
      },
      "directive": null,
      "start": 1934,
      "end": 1943
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "pi12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1944,
            "end": 1948
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1949,
            "end": 1952
          },
          "optional": false,
          "computed": false,
          "start": 1944,
          "end": 1952
        },
        "right": {
          "type": "Literal",
          "value": 123,
          "raw": "123",
          "start": 1955,
          "end": 1958
        },
        "start": 1944,
        "end": 1958
      },
      "directive": null,
      "start": 1944,
      "end": 1959
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
            "name": "pi13",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1981,
                      "end": 1983
                    },
                    "typeArguments": null,
                    "start": 1981,
                    "end": 1983
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1986,
                      "end": 1988
                    },
                    "typeArguments": null,
                    "start": 1986,
                    "end": 1988
                  }
                ],
                "start": 1981,
                "end": 1988
              },
              "start": 1979,
              "end": 1988
            },
            "start": 1975,
            "end": 1988
          },
          "init": null,
          "definite": false,
          "start": 1975,
          "end": 1988
        }
      ],
      "declare": true,
      "start": 1961,
      "end": 1989
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "pi13",
          "optional": false,
          "typeAnnotation": null,
          "start": 1990,
          "end": 1994
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1995,
          "end": 1998
        },
        "optional": false,
        "computed": false,
        "start": 1990,
        "end": 1998
      },
      "directive": null,
      "start": 1990,
      "end": 1999
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "pi13",
            "optional": false,
            "typeAnnotation": null,
            "start": 2028,
            "end": 2032
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2033,
            "end": 2036
          },
          "optional": false,
          "computed": false,
          "start": 2028,
          "end": 2036
        },
        "right": {
          "type": "Literal",
          "value": 123,
          "raw": "123",
          "start": 2039,
          "end": 2042
        },
        "start": 2028,
        "end": 2042
      },
      "directive": null,
      "start": 2028,
      "end": 2043
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
            "name": "pi23",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2093,
                      "end": 2095
                    },
                    "typeArguments": null,
                    "start": 2093,
                    "end": 2095
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2098,
                      "end": 2100
                    },
                    "typeArguments": null,
                    "start": 2098,
                    "end": 2100
                  }
                ],
                "start": 2093,
                "end": 2100
              },
              "start": 2091,
              "end": 2100
            },
            "start": 2087,
            "end": 2100
          },
          "init": null,
          "definite": false,
          "start": 2087,
          "end": 2100
        }
      ],
      "declare": true,
      "start": 2073,
      "end": 2101
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "pi23",
          "optional": false,
          "typeAnnotation": null,
          "start": 2102,
          "end": 2106
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 2107,
          "end": 2110
        },
        "optional": false,
        "computed": false,
        "start": 2102,
        "end": 2110
      },
      "directive": null,
      "start": 2102,
      "end": 2111
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "pi23",
            "optional": false,
            "typeAnnotation": null,
            "start": 2140,
            "end": 2144
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2145,
            "end": 2148
          },
          "optional": false,
          "computed": false,
          "start": 2140,
          "end": 2148
        },
        "right": {
          "type": "Literal",
          "value": 123,
          "raw": "123",
          "start": 2151,
          "end": 2154
        },
        "start": 2140,
        "end": 2154
      },
      "directive": null,
      "start": 2140,
      "end": 2155
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 2183
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 57,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 65,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "Dummy",
    "start": 71,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 86,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 97,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "Public",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 111,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "Dummy",
    "start": 118,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 126,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 134,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 140,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 151,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 161,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "content",
    "start": 165,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 188,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 198,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "content",
    "start": 202,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 210,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 217,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 229,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 237,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "Mock",
    "start": 243,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 254,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "content",
    "start": 258,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 269,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 281,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "content",
    "start": 285,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 293,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 300,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 312,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 320,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "Public",
    "start": 329,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 336,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 340,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 342,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "Mock",
    "start": 353,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "content",
    "start": 367,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 378,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 386,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "w2",
    "start": 392,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "Mock",
    "start": 396,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "Public",
    "start": 403,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "w2",
    "start": 410,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "content",
    "start": 413,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 423,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 431,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "w3",
    "start": 437,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "Public",
    "start": 441,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "Mock",
    "start": 450,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "w3",
    "start": 455,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "content",
    "start": 458,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 544,
    "end": 551
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 552,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 558,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 567,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 571,
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
    "value": "number",
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
    "type": "Identifier",
    "value": "set",
    "start": 590,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 594,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 598,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 605,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 617,
    "end": 624
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 625,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 631,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 640,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 644,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 651,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 657,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 663,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 673,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 677,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 681,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 688,
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
    "value": ";",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 700,
    "end": 707
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 708,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 714,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 717,
    "end": 718
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 723,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 733,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 737,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 744,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 750,
    "end": 751
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 756,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 766,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 770,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 774,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 781,
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
    "value": ";",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 793,
    "end": 800
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 801,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 807,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 816,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 820,
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
    "value": ":",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 827,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 839,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 843,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 847,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 854,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 866,
    "end": 873
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 874,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "P2",
    "start": 880,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 889,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 893,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 900,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 906,
    "end": 907
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 912,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 920,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 924,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 928,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 935,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 947,
    "end": 954
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 955,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "P3",
    "start": 961,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 964,
    "end": 965
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 970,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 978,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 982,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "number",
    "start": 989,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 995,
    "end": 996
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1001,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1009,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1013,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1017,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1024,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1093,
    "end": 1100
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1101,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "cu12",
    "start": 1107,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1113,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 1118,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "cu12",
    "start": 1122,
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
    "value": "foo",
    "start": 1127,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "cu12",
    "start": 1132,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1137,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1143,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1170,
    "end": 1177
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1178,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "cu13",
    "start": 1184,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1190,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 1195,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "cu13",
    "start": 1199,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1204,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "cu13",
    "start": 1232,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1237,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1243,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1272,
    "end": 1279
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1280,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "cu23",
    "start": 1286,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 1292,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 1297,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "cu23",
    "start": 1301,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1306,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "cu23",
    "start": 1334,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1339,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1345,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1374,
    "end": 1381
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1382,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "pu12",
    "start": 1388,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 1394,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "P2",
    "start": 1399,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "pu12",
    "start": 1403,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1408,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Identifier",
    "value": "pu12",
    "start": 1413,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1418,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1424,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1449,
    "end": 1456
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1457,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "pu13",
    "start": 1463,
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
    "value": "P1",
    "start": 1469,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "P3",
    "start": 1474,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Identifier",
    "value": "pu13",
    "start": 1478,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1483,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "pu13",
    "start": 1511,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1516,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1522,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1551,
    "end": 1558
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1559,
    "end": 1564
  },
  {
    "type": "Identifier",
    "value": "pu23",
    "start": 1565,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "P2",
    "start": 1571,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "P3",
    "start": 1576,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Identifier",
    "value": "pu23",
    "start": 1580,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1585,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Identifier",
    "value": "pu23",
    "start": 1613,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1618,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1624,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1716,
    "end": 1723
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1724,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "ci12",
    "start": 1730,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1736,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 1741,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "ci12",
    "start": 1745,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1750,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Identifier",
    "value": "ci12",
    "start": 1755,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1760,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1766,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1772,
    "end": 1779
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1780,
    "end": 1785
  },
  {
    "type": "Identifier",
    "value": "ci13",
    "start": 1786,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1792,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 1797,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Identifier",
    "value": "ci13",
    "start": 1801,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1806,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "ci13",
    "start": 1811,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1816,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1822,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1828,
    "end": 1835
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1836,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "ci23",
    "start": 1842,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 1848,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 1853,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Identifier",
    "value": "ci23",
    "start": 1857,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1862,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Identifier",
    "value": "ci23",
    "start": 1867,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1872,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1878,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1905,
    "end": 1912
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1913,
    "end": 1918
  },
  {
    "type": "Identifier",
    "value": "pi12",
    "start": 1919,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 1925,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Identifier",
    "value": "P2",
    "start": 1930,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Identifier",
    "value": "pi12",
    "start": 1934,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1939,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Identifier",
    "value": "pi12",
    "start": 1944,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1949,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1955,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1961,
    "end": 1968
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1969,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "pi13",
    "start": 1975,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 1981,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Identifier",
    "value": "P3",
    "start": 1986,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Identifier",
    "value": "pi13",
    "start": 1990,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1995,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Identifier",
    "value": "pi13",
    "start": 2028,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2033,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 2039,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2073,
    "end": 2080
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2081,
    "end": 2086
  },
  {
    "type": "Identifier",
    "value": "pi23",
    "start": 2087,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Identifier",
    "value": "P2",
    "start": 2093,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Identifier",
    "value": "P3",
    "start": 2098,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Identifier",
    "value": "pi23",
    "start": 2102,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2107,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Identifier",
    "value": "pi23",
    "start": 2140,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2145,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 2151,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2154,
    "end": 2155
  }
]
```
