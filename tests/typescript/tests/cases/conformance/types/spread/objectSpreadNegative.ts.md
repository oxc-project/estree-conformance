__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 10,
                  "end": 11
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 13,
                  "end": 14
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 10,
                "end": 14
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
                  "start": 16,
                  "end": 17
                },
                "value": {
                  "type": "Literal",
                  "value": "no",
                  "raw": "'no'",
                  "start": 19,
                  "end": 23
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 16,
                "end": 23
              }
            ],
            "start": 8,
            "end": 25
          },
          "definite": false,
          "start": 4,
          "end": 25
        }
      ],
      "declare": false,
      "start": 0,
      "end": 25
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PrivateOptionalX",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 72
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 88
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 91,
                "end": 97
              },
              "start": 89,
              "end": 97
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 79,
            "end": 98
          }
        ],
        "start": 73,
        "end": 100
      },
      "abstract": false,
      "declare": false,
      "start": 50,
      "end": 100
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PublicX",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 114
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 129
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 131,
                "end": 137
              },
              "start": 129,
              "end": 137
            },
            "value": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 140,
              "end": 142
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 121,
            "end": 143
          }
        ],
        "start": 115,
        "end": 145
      },
      "abstract": false,
      "declare": false,
      "start": 101,
      "end": 145
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "publicX",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PublicX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 174
                },
                "typeArguments": null,
                "start": 167,
                "end": 174
              },
              "start": 165,
              "end": 174
            },
            "start": 158,
            "end": 174
          },
          "init": null,
          "definite": false,
          "start": 158,
          "end": 174
        }
      ],
      "declare": true,
      "start": 146,
      "end": 175
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "privateOptionalX",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PrivateOptionalX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 222
                },
                "typeArguments": null,
                "start": 206,
                "end": 222
              },
              "start": 204,
              "end": 222
            },
            "start": 188,
            "end": 222
          },
          "init": null,
          "definite": false,
          "start": 188,
          "end": 222
        }
      ],
      "declare": true,
      "start": 176,
      "end": 223
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": null,
            "start": 228,
            "end": 230
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 238,
                  "end": 245
                },
                "start": 235,
                "end": 245
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateOptionalX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 250,
                  "end": 266
                },
                "start": 247,
                "end": 266
              }
            ],
            "start": 233,
            "end": 268
          },
          "definite": false,
          "start": 228,
          "end": 268
        }
      ],
      "declare": false,
      "start": 224,
      "end": 269
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "sn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 278,
                "end": 284
              },
              "start": 276,
              "end": 284
            },
            "start": 274,
            "end": 284
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null,
              "start": 287,
              "end": 289
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 290,
              "end": 291
            },
            "optional": false,
            "computed": false,
            "start": 287,
            "end": 291
          },
          "definite": false,
          "start": 274,
          "end": 291
        }
      ],
      "declare": false,
      "start": 270,
      "end": 292
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "optionalString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "sn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 346,
                      "end": 348
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 351,
                        "end": 357
                      },
                      "start": 349,
                      "end": 357
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 346,
                    "end": 357
                  }
                ],
                "start": 344,
                "end": 359
              },
              "start": 342,
              "end": 359
            },
            "start": 328,
            "end": 359
          },
          "init": null,
          "definite": false,
          "start": 328,
          "end": 359
        }
      ],
      "declare": true,
      "start": 316,
      "end": 360
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "optionalNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "sn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 391,
                      "end": 393
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 396,
                        "end": 402
                      },
                      "start": 394,
                      "end": 402
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 391,
                    "end": 402
                  }
                ],
                "start": 389,
                "end": 404
              },
              "start": 387,
              "end": 404
            },
            "start": 373,
            "end": 404
          },
          "init": null,
          "definite": false,
          "start": 373,
          "end": 404
        }
      ],
      "declare": true,
      "start": 361,
      "end": 405
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "allOptional",
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
                      "name": "sn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 425,
                      "end": 427
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 429,
                            "end": 435
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 438,
                            "end": 444
                          }
                        ],
                        "start": 429,
                        "end": 444
                      },
                      "start": 427,
                      "end": 444
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 425,
                    "end": 444
                  }
                ],
                "start": 423,
                "end": 446
              },
              "start": 421,
              "end": 446
            },
            "start": 410,
            "end": 446
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optionalString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 454,
                  "end": 468
                },
                "start": 451,
                "end": 468
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optionalNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 473,
                  "end": 487
                },
                "start": 470,
                "end": 487
              }
            ],
            "start": 449,
            "end": 489
          },
          "definite": false,
          "start": 410,
          "end": 489
        }
      ],
      "declare": false,
      "start": 406,
      "end": 490
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bool",
        "optional": false,
        "typeAnnotation": null,
        "start": 586,
        "end": 590
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
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 593,
              "end": 594
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 596,
                "end": 603
              },
              "start": 594,
              "end": 603
            },
            "accessibility": null,
            "static": false,
            "start": 593,
            "end": 603
          }
        ],
        "start": 591,
        "end": 605
      },
      "declare": false,
      "start": 576,
      "end": 605
    },
    {
      "type": "EmptyStatement",
      "start": 605,
      "end": 606
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Str",
        "optional": false,
        "typeAnnotation": null,
        "start": 617,
        "end": 620
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
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 623,
              "end": 624
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 626,
                "end": 632
              },
              "start": 624,
              "end": 632
            },
            "accessibility": null,
            "static": false,
            "start": 623,
            "end": 632
          }
        ],
        "start": 621,
        "end": 634
      },
      "declare": false,
      "start": 607,
      "end": 634
    },
    {
      "type": "EmptyStatement",
      "start": 634,
      "end": 635
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "spread",
            "optional": false,
            "typeAnnotation": null,
            "start": 640,
            "end": 646
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 656,
                        "end": 657
                      },
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 659,
                        "end": 663
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 656,
                      "end": 663
                    }
                  ],
                  "start": 654,
                  "end": 665
                },
                "start": 651,
                "end": 665
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 671,
                        "end": 672
                      },
                      "value": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "\"foo\"",
                        "start": 674,
                        "end": 679
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 671,
                      "end": 679
                    }
                  ],
                  "start": 670,
                  "end": 681
                },
                "start": 667,
                "end": 681
              }
            ],
            "start": 649,
            "end": 683
          },
          "definite": false,
          "start": 640,
          "end": 683
        }
      ],
      "declare": false,
      "start": 636,
      "end": 684
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "spread",
          "optional": false,
          "typeAnnotation": null,
          "start": 685,
          "end": 691
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 696,
                "end": 697
              },
              "value": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 699,
                "end": 704
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 696,
              "end": 704
            }
          ],
          "start": 694,
          "end": 706
        },
        "start": 685,
        "end": 706
      },
      "directive": null,
      "start": 685,
      "end": 707
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 735,
            "end": 736
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 741,
                  "end": 742
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 744,
                  "end": 749
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 741,
                "end": 749
              }
            ],
            "start": 739,
            "end": 751
          },
          "definite": false,
          "start": 735,
          "end": 751
        }
      ],
      "declare": false,
      "start": 731,
      "end": 752
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "spread",
          "optional": false,
          "typeAnnotation": null,
          "start": 753,
          "end": 759
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 762,
          "end": 763
        },
        "start": 753,
        "end": 763
      },
      "directive": null,
      "start": 753,
      "end": 764
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "duplicated",
            "optional": false,
            "typeAnnotation": null,
            "start": 856,
            "end": 866
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 871,
                  "end": 872
                },
                "value": {
                  "type": "Literal",
                  "value": "bad",
                  "raw": "'bad'",
                  "start": 874,
                  "end": 879
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 871,
                "end": 879
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 884,
                  "end": 885
                },
                "start": 881,
                "end": 885
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
                  "start": 887,
                  "end": 888
                },
                "value": {
                  "type": "Literal",
                  "value": "bad",
                  "raw": "'bad'",
                  "start": 890,
                  "end": 895
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 887,
                "end": 895
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 900,
                  "end": 902
                },
                "start": 897,
                "end": 902
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
                  "start": 904,
                  "end": 905
                },
                "value": {
                  "type": "Literal",
                  "value": "bad",
                  "raw": "'bad'",
                  "start": 907,
                  "end": 912
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 904,
                "end": 912
              }
            ],
            "start": 869,
            "end": 914
          },
          "definite": false,
          "start": 856,
          "end": 914
        }
      ],
      "declare": false,
      "start": 852,
      "end": 914
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "duplicatedSpread",
            "optional": false,
            "typeAnnotation": null,
            "start": 919,
            "end": 935
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 943,
                  "end": 944
                },
                "start": 940,
                "end": 944
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 949,
                  "end": 950
                },
                "start": 946,
                "end": 950
              }
            ],
            "start": 938,
            "end": 952
          },
          "definite": false,
          "start": 919,
          "end": 952
        }
      ],
      "declare": false,
      "start": 915,
      "end": 952
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ignore",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1029,
                      "end": 1030
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1032,
                        "end": 1038
                      },
                      "start": 1030,
                      "end": 1038
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1029,
                    "end": 1039
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
                      "start": 1040,
                      "end": 1041
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1043,
                        "end": 1049
                      },
                      "start": 1041,
                      "end": 1049
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1040,
                    "end": 1049
                  }
                ],
                "start": 1027,
                "end": 1051
              },
              "start": 1025,
              "end": 1051
            },
            "start": 1019,
            "end": 1051
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1060,
                  "end": 1061
                },
                "value": {
                  "type": "Literal",
                  "value": "ignored",
                  "raw": "'ignored'",
                  "start": 1063,
                  "end": 1072
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1060,
                "end": 1072
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1077,
                  "end": 1078
                },
                "start": 1074,
                "end": 1078
              }
            ],
            "start": 1058,
            "end": 1080
          },
          "definite": false,
          "start": 1019,
          "end": 1080
        }
      ],
      "declare": false,
      "start": 1015,
      "end": 1080
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1086,
            "end": 1088
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1093,
                  "end": 1094
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1096,
                  "end": 1097
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1093,
                "end": 1097
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
                  "start": 1099,
                  "end": 1100
                },
                "value": {
                  "type": "Literal",
                  "value": "no",
                  "raw": "'no'",
                  "start": 1102,
                  "end": 1106
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1099,
                "end": 1106
              }
            ],
            "start": 1091,
            "end": 1108
          },
          "definite": false,
          "start": 1086,
          "end": 1108
        }
      ],
      "declare": false,
      "start": 1082,
      "end": 1108
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1113,
            "end": 1115
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1120,
                  "end": 1121
                },
                "value": {
                  "type": "Literal",
                  "value": "yes",
                  "raw": "'yes'",
                  "start": 1123,
                  "end": 1128
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1120,
                "end": 1128
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1130,
                  "end": 1131
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1133,
                  "end": 1137
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1130,
                "end": 1137
              }
            ],
            "start": 1118,
            "end": 1139
          },
          "definite": false,
          "start": 1113,
          "end": 1139
        }
      ],
      "declare": false,
      "start": 1109,
      "end": 1139
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "combinedBefore",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1162,
                      "end": 1163
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1165,
                        "end": 1171
                      },
                      "start": 1163,
                      "end": 1171
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1162,
                    "end": 1172
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
                      "start": 1173,
                      "end": 1174
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1176,
                        "end": 1182
                      },
                      "start": 1174,
                      "end": 1182
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1173,
                    "end": 1183
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1184,
                      "end": 1185
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1187,
                        "end": 1194
                      },
                      "start": 1185,
                      "end": 1194
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1184,
                    "end": 1194
                  }
                ],
                "start": 1160,
                "end": 1196
              },
              "start": 1158,
              "end": 1196
            },
            "start": 1144,
            "end": 1196
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1205,
                  "end": 1206
                },
                "value": {
                  "type": "Literal",
                  "value": "ok",
                  "raw": "'ok'",
                  "start": 1208,
                  "end": 1212
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1205,
                "end": 1212
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1217,
                  "end": 1219
                },
                "start": 1214,
                "end": 1219
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1224,
                  "end": 1226
                },
                "start": 1221,
                "end": 1226
              }
            ],
            "start": 1203,
            "end": 1228
          },
          "definite": false,
          "start": 1144,
          "end": 1228
        }
      ],
      "declare": false,
      "start": 1140,
      "end": 1228
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "combinedMid",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1248,
                      "end": 1249
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1251,
                        "end": 1257
                      },
                      "start": 1249,
                      "end": 1257
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1248,
                    "end": 1258
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
                      "start": 1259,
                      "end": 1260
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1262,
                        "end": 1268
                      },
                      "start": 1260,
                      "end": 1268
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1259,
                    "end": 1269
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1270,
                      "end": 1271
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1273,
                        "end": 1280
                      },
                      "start": 1271,
                      "end": 1280
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1270,
                    "end": 1280
                  }
                ],
                "start": 1246,
                "end": 1282
              },
              "start": 1244,
              "end": 1282
            },
            "start": 1233,
            "end": 1282
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1294,
                  "end": 1296
                },
                "start": 1291,
                "end": 1296
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
                  "start": 1298,
                  "end": 1299
                },
                "value": {
                  "type": "Literal",
                  "value": "ok",
                  "raw": "'ok'",
                  "start": 1301,
                  "end": 1305
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1298,
                "end": 1305
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1310,
                  "end": 1312
                },
                "start": 1307,
                "end": 1312
              }
            ],
            "start": 1289,
            "end": 1314
          },
          "definite": false,
          "start": 1233,
          "end": 1314
        }
      ],
      "declare": false,
      "start": 1229,
      "end": 1314
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "combinedNested",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1337,
                      "end": 1338
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1340,
                        "end": 1346
                      },
                      "start": 1338,
                      "end": 1346
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1337,
                    "end": 1347
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
                      "start": 1348,
                      "end": 1349
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1351,
                        "end": 1358
                      },
                      "start": 1349,
                      "end": 1358
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1348,
                    "end": 1359
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1360,
                      "end": 1361
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1363,
                        "end": 1369
                      },
                      "start": 1361,
                      "end": 1369
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1360,
                    "end": 1370
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1371,
                      "end": 1372
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1374,
                        "end": 1380
                      },
                      "start": 1372,
                      "end": 1380
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1371,
                    "end": 1380
                  }
                ],
                "start": 1335,
                "end": 1382
              },
              "start": 1333,
              "end": 1382
            },
            "start": 1319,
            "end": 1382
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
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
                        "start": 1396,
                        "end": 1397
                      },
                      "value": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 1399,
                        "end": 1400
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1396,
                      "end": 1400
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1407,
                              "end": 1408
                            },
                            "value": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 1410,
                              "end": 1415
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1407,
                            "end": 1415
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1417,
                              "end": 1418
                            },
                            "value": {
                              "type": "Literal",
                              "value": "overriden",
                              "raw": "'overriden'",
                              "start": 1420,
                              "end": 1431
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1417,
                            "end": 1431
                          }
                        ],
                        "start": 1405,
                        "end": 1433
                      },
                      "start": 1402,
                      "end": 1433
                    }
                  ],
                  "start": 1394,
                  "end": 1435
                },
                "start": 1391,
                "end": 1435
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1437,
                  "end": 1438
                },
                "value": {
                  "type": "Literal",
                  "value": "actually new",
                  "raw": "'actually new'",
                  "start": 1440,
                  "end": 1454
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1437,
                "end": 1454
              },
              {
                "type": "SpreadElement",
                "argument": {
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
                        "start": 1461,
                        "end": 1462
                      },
                      "value": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 1464,
                        "end": 1465
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1461,
                      "end": 1465
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1467,
                        "end": 1468
                      },
                      "value": {
                        "type": "Literal",
                        "value": "maybe new",
                        "raw": "'maybe new'",
                        "start": 1470,
                        "end": 1481
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1467,
                      "end": 1481
                    }
                  ],
                  "start": 1459,
                  "end": 1483
                },
                "start": 1456,
                "end": 1483
              }
            ],
            "start": 1389,
            "end": 1485
          },
          "definite": false,
          "start": 1319,
          "end": 1485
        }
      ],
      "declare": false,
      "start": 1315,
      "end": 1485
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "changeTypeBefore",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1510,
                      "end": 1511
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1513,
                        "end": 1519
                      },
                      "start": 1511,
                      "end": 1519
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1510,
                    "end": 1520
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
                      "start": 1521,
                      "end": 1522
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1524,
                        "end": 1530
                      },
                      "start": 1522,
                      "end": 1530
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1521,
                    "end": 1530
                  }
                ],
                "start": 1508,
                "end": 1532
              },
              "start": 1506,
              "end": 1532
            },
            "start": 1490,
            "end": 1532
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1541,
                  "end": 1542
                },
                "value": {
                  "type": "Literal",
                  "value": "wrong type?",
                  "raw": "'wrong type?'",
                  "start": 1544,
                  "end": 1557
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1541,
                "end": 1557
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1562,
                  "end": 1564
                },
                "start": 1559,
                "end": 1564
              }
            ],
            "start": 1539,
            "end": 1566
          },
          "definite": false,
          "start": 1490,
          "end": 1566
        }
      ],
      "declare": false,
      "start": 1486,
      "end": 1567
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "computedMiddle",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1590,
                      "end": 1591
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1593,
                        "end": 1599
                      },
                      "start": 1591,
                      "end": 1599
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1590,
                    "end": 1600
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
                      "start": 1601,
                      "end": 1602
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1604,
                        "end": 1610
                      },
                      "start": 1602,
                      "end": 1610
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1601,
                    "end": 1611
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1612,
                      "end": 1613
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1615,
                        "end": 1622
                      },
                      "start": 1613,
                      "end": 1622
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1612,
                    "end": 1623
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "in the middle",
                      "raw": "\"in the middle\"",
                      "start": 1624,
                      "end": 1639
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1641,
                        "end": 1647
                      },
                      "start": 1639,
                      "end": 1647
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1624,
                    "end": 1647
                  }
                ],
                "start": 1588,
                "end": 1649
              },
              "start": 1586,
              "end": 1649
            },
            "start": 1572,
            "end": 1649
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1661,
                  "end": 1663
                },
                "start": 1658,
                "end": 1663
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "in the middle",
                  "raw": "'in the middle'",
                  "start": 1666,
                  "end": 1681
                },
                "value": {
                  "type": "Literal",
                  "value": 13,
                  "raw": "13",
                  "start": 1684,
                  "end": 1686
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 1665,
                "end": 1686
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
                  "start": 1688,
                  "end": 1689
                },
                "value": {
                  "type": "Literal",
                  "value": "maybe?",
                  "raw": "'maybe?'",
                  "start": 1691,
                  "end": 1699
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1688,
                "end": 1699
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1704,
                  "end": 1706
                },
                "start": 1701,
                "end": 1706
              }
            ],
            "start": 1656,
            "end": 1708
          },
          "definite": false,
          "start": 1572,
          "end": 1708
        }
      ],
      "declare": false,
      "start": 1568,
      "end": 1708
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "spreadNum",
            "optional": false,
            "typeAnnotation": null,
            "start": 1767,
            "end": 1776
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 1784,
                  "end": 1786
                },
                "start": 1781,
                "end": 1786
              }
            ],
            "start": 1779,
            "end": 1788
          },
          "definite": false,
          "start": 1767,
          "end": 1788
        }
      ],
      "declare": false,
      "start": 1763,
      "end": 1789
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "spreadSum",
            "optional": false,
            "typeAnnotation": null,
            "start": 1794,
            "end": 1803
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1811,
                    "end": 1812
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1815,
                    "end": 1816
                  },
                  "start": 1811,
                  "end": 1816
                },
                "start": 1808,
                "end": 1816
              }
            ],
            "start": 1806,
            "end": 1818
          },
          "definite": false,
          "start": 1794,
          "end": 1818
        }
      ],
      "declare": false,
      "start": 1790,
      "end": 1819
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "spreadZero",
            "optional": false,
            "typeAnnotation": null,
            "start": 1824,
            "end": 1834
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1842,
                  "end": 1843
                },
                "start": 1839,
                "end": 1843
              }
            ],
            "start": 1837,
            "end": 1845
          },
          "definite": false,
          "start": 1824,
          "end": 1845
        }
      ],
      "declare": false,
      "start": 1820,
      "end": 1846
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
            "name": "spreadZero",
            "optional": false,
            "typeAnnotation": null,
            "start": 1847,
            "end": 1857
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 1858,
            "end": 1865
          },
          "optional": false,
          "computed": false,
          "start": 1847,
          "end": 1865
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1847,
        "end": 1867
      },
      "directive": null,
      "start": 1847,
      "end": 1868
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "spreadBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 1919,
            "end": 1929
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1937,
                  "end": 1941
                },
                "start": 1934,
                "end": 1941
              }
            ],
            "start": 1932,
            "end": 1943
          },
          "definite": false,
          "start": 1919,
          "end": 1943
        }
      ],
      "declare": false,
      "start": 1915,
      "end": 1944
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
            "name": "spreadBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 1945,
            "end": 1955
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "valueOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1956,
            "end": 1963
          },
          "optional": false,
          "computed": false,
          "start": 1945,
          "end": 1963
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1945,
        "end": 1965
      },
      "directive": null,
      "start": 1945,
      "end": 1966
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "spreadStr",
            "optional": false,
            "typeAnnotation": null,
            "start": 1971,
            "end": 1980
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 1988,
                  "end": 1993
                },
                "start": 1985,
                "end": 1993
              }
            ],
            "start": 1983,
            "end": 1995
          },
          "definite": false,
          "start": 1971,
          "end": 1995
        }
      ],
      "declare": false,
      "start": 1967,
      "end": 1996
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "spreadStr",
          "optional": false,
          "typeAnnotation": null,
          "start": 1997,
          "end": 2006
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null,
          "start": 2007,
          "end": 2013
        },
        "optional": false,
        "computed": false,
        "start": 1997,
        "end": 2013
      },
      "directive": null,
      "start": 1997,
      "end": 2014
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
            "name": "spreadStr",
            "optional": false,
            "typeAnnotation": null,
            "start": 2037,
            "end": 2046
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "charAt",
            "optional": false,
            "typeAnnotation": null,
            "start": 2047,
            "end": 2053
          },
          "optional": false,
          "computed": false,
          "start": 2037,
          "end": 2053
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 2054,
            "end": 2055
          }
        ],
        "optional": false,
        "start": 2037,
        "end": 2056
      },
      "directive": null,
      "start": 2037,
      "end": 2057
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "spreadFunc",
            "optional": false,
            "typeAnnotation": null,
            "start": 2115,
            "end": 2125
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
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
                    "body": [],
                    "start": 2145,
                    "end": 2148
                  },
                  "expression": false,
                  "start": 2133,
                  "end": 2148
                },
                "start": 2130,
                "end": 2148
              }
            ],
            "start": 2128,
            "end": 2150
          },
          "definite": false,
          "start": 2115,
          "end": 2150
        }
      ],
      "declare": false,
      "start": 2111,
      "end": 2150
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "spreadFunc",
          "optional": false,
          "typeAnnotation": null,
          "start": 2151,
          "end": 2161
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2151,
        "end": 2163
      },
      "directive": null,
      "start": 2151,
      "end": 2164
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "setterOnly",
            "optional": false,
            "typeAnnotation": null,
            "start": 2235,
            "end": 2245
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "set",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2259,
                        "end": 2260
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bad",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2267,
                                "end": 2273
                              },
                              "start": 2265,
                              "end": 2273
                            },
                            "start": 2262,
                            "end": 2273
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 2275,
                          "end": 2278
                        },
                        "expression": false,
                        "start": 2261,
                        "end": 2278
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2255,
                      "end": 2278
                    }
                  ],
                  "start": 2253,
                  "end": 2280
                },
                "start": 2250,
                "end": 2280
              }
            ],
            "start": 2248,
            "end": 2282
          },
          "definite": false,
          "start": 2235,
          "end": 2282
        }
      ],
      "declare": false,
      "start": 2231,
      "end": 2283
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
            "name": "setterOnly",
            "optional": false,
            "typeAnnotation": null,
            "start": 2284,
            "end": 2294
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 2295,
            "end": 2296
          },
          "optional": false,
          "computed": false,
          "start": 2284,
          "end": 2296
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 2299,
          "end": 2301
        },
        "start": 2284,
        "end": 2301
      },
      "directive": null,
      "start": 2284,
      "end": 2302
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 2393,
        "end": 2394
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
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 2397,
              "end": 2398
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 2401,
              "end": 2402
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2397,
            "end": 2403
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 2404,
              "end": 2405
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
                "body": [],
                "start": 2408,
                "end": 2411
              },
              "expression": false,
              "start": 2405,
              "end": 2411
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2404,
            "end": 2411
          }
        ],
        "start": 2395,
        "end": 2413
      },
      "abstract": false,
      "declare": false,
      "start": 2387,
      "end": 2413
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2421,
                  "end": 2422
                },
                "typeArguments": null,
                "start": 2421,
                "end": 2422
              },
              "start": 2419,
              "end": 2422
            },
            "start": 2418,
            "end": 2422
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2429,
              "end": 2430
            },
            "typeArguments": null,
            "arguments": [],
            "start": 2425,
            "end": 2432
          },
          "definite": false,
          "start": 2418,
          "end": 2432
        }
      ],
      "declare": false,
      "start": 2414,
      "end": 2432
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "spreadC",
            "optional": false,
            "typeAnnotation": null,
            "start": 2437,
            "end": 2444
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2452,
                  "end": 2453
                },
                "start": 2449,
                "end": 2453
              }
            ],
            "start": 2447,
            "end": 2455
          },
          "definite": false,
          "start": 2437,
          "end": 2455
        }
      ],
      "declare": false,
      "start": 2433,
      "end": 2455
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
            "name": "spreadC",
            "optional": false,
            "typeAnnotation": null,
            "start": 2456,
            "end": 2463
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 2464,
            "end": 2465
          },
          "optional": false,
          "computed": false,
          "start": 2456,
          "end": 2465
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2456,
        "end": 2467
      },
      "directive": null,
      "start": 2456,
      "end": 2468
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 2531,
                "end": 2537
              },
              "start": 2529,
              "end": 2537
            },
            "start": 2526,
            "end": 2537
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2542,
                  "end": 2543
                },
                "value": {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 2545,
                  "end": 2548
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2542,
                "end": 2548
              }
            ],
            "start": 2540,
            "end": 2550
          },
          "definite": false,
          "start": 2526,
          "end": 2550
        }
      ],
      "declare": false,
      "start": 2522,
      "end": 2551
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "spreadObj",
            "optional": false,
            "typeAnnotation": null,
            "start": 2556,
            "end": 2565
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2573,
                  "end": 2576
                },
                "start": 2570,
                "end": 2576
              }
            ],
            "start": 2568,
            "end": 2578
          },
          "definite": false,
          "start": 2556,
          "end": 2578
        }
      ],
      "declare": false,
      "start": 2552,
      "end": 2579
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "spreadObj",
          "optional": false,
          "typeAnnotation": null,
          "start": 2580,
          "end": 2589
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 2590,
          "end": 2591
        },
        "optional": false,
        "computed": false,
        "start": 2580,
        "end": 2591
      },
      "directive": null,
      "start": 2580,
      "end": 2592
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2618
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11,
    "end": 12
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18
  },
  {
    "type": "String",
    "value": "'no'",
    "start": 19,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 50,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "PrivateOptionalX",
    "start": 56,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 79,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 101,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "PublicX",
    "start": 107,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 121,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 131,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 140,
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
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 146,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 154,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "publicX",
    "start": 158,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "PublicX",
    "start": 167,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 176,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 184,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "privateOptionalX",
    "start": 188,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "PrivateOptionalX",
    "start": 206,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 224,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 228,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "...",
    "start": 235,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "publicX",
    "start": 238,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 247,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "privateOptionalX",
    "start": 250,
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
    "value": "let",
    "start": 270,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 274,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 278,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 287,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 316,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 324,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "optionalString",
    "start": 328,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 346,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 351,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 361,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 369,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "optionalNumber",
    "start": 373,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 391,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 393,
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
    "value": "number",
    "start": 396,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 403,
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
    "value": "let",
    "start": 406,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "allOptional",
    "start": 410,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 425,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 429,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 438,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 451,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "optionalString",
    "start": 454,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 470,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "optionalNumber",
    "start": 473,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 576,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "Bool",
    "start": 586,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "boolean",
    "start": 596,
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
    "value": ";",
    "start": 605,
    "end": 606
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 607,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "Str",
    "start": 617,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 626,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 634,
    "end": 635
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 636,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "spread",
    "start": 640,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 651,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 657,
    "end": 658
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 659,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 667,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 672,
    "end": 673
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 674,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "spread",
    "start": 685,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 697,
    "end": 698
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 699,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 706,
    "end": 707
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 731,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "Boolean",
    "value": "false",
    "start": 744,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "spread",
    "start": 753,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 763,
    "end": 764
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 852,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "duplicated",
    "start": 856,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 872,
    "end": 873
  },
  {
    "type": "String",
    "value": "'bad'",
    "start": 874,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 881,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 888,
    "end": 889
  },
  {
    "type": "String",
    "value": "'bad'",
    "start": 890,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 897,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 900,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 905,
    "end": 906
  },
  {
    "type": "String",
    "value": "'bad'",
    "start": 907,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 913,
    "end": 914
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 915,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "duplicatedSpread",
    "start": 919,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 940,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 946,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 951,
    "end": 952
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1015,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "ignore",
    "start": 1019,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1032,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1043,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "String",
    "value": "'ignored'",
    "start": 1063,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1074,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1082,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 1086,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "String",
    "value": "'no'",
    "start": 1102,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1109,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 1113,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "String",
    "value": "'yes'",
    "start": 1123,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1133,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1140,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "combinedBefore",
    "start": 1144,
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
    "value": "a",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1165,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1176,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1187,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "String",
    "value": "'ok'",
    "start": 1208,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1214,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 1217,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1221,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 1224,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1229,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "combinedMid",
    "start": 1233,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1251,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1262,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1273,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1291,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 1294,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "String",
    "value": "'ok'",
    "start": 1301,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1307,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 1310,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1315,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "combinedNested",
    "start": 1319,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1340,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1351,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1363,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1374,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1391,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1402,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1410,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "String",
    "value": "'overriden'",
    "start": 1420,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "String",
    "value": "'actually new'",
    "start": 1440,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1456,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "String",
    "value": "'maybe new'",
    "start": 1470,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1486,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "changeTypeBefore",
    "start": 1490,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1513,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "string",
    "start": 1524,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "String",
    "value": "'wrong type?'",
    "start": 1544,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1559,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 1562,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1568,
    "end": 1571
  },
  {
    "type": "Identifier",
    "value": "computedMiddle",
    "start": 1572,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Identifier",
    "value": "number",
    "start": 1593,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1604,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1615,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "String",
    "value": "\"in the middle\"",
    "start": 1624,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1641,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1658,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 1661,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "String",
    "value": "'in the middle'",
    "start": 1666,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 1684,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "String",
    "value": "'maybe?'",
    "start": 1691,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1701,
    "end": 1704
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 1704,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1763,
    "end": 1766
  },
  {
    "type": "Identifier",
    "value": "spreadNum",
    "start": 1767,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1781,
    "end": 1784
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1784,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1790,
    "end": 1793
  },
  {
    "type": "Identifier",
    "value": "spreadSum",
    "start": 1794,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1808,
    "end": 1811
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1820,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "spreadZero",
    "start": 1824,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1839,
    "end": 1842
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "spreadZero",
    "start": 1847,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 1858,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1915,
    "end": 1918
  },
  {
    "type": "Identifier",
    "value": "spreadBool",
    "start": 1919,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1934,
    "end": 1937
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1937,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Identifier",
    "value": "spreadBool",
    "start": 1945,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Identifier",
    "value": "valueOf",
    "start": 1956,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1967,
    "end": 1970
  },
  {
    "type": "Identifier",
    "value": "spreadStr",
    "start": 1971,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1985,
    "end": 1988
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1988,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Identifier",
    "value": "spreadStr",
    "start": 1997,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2007,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Identifier",
    "value": "spreadStr",
    "start": 2037,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Identifier",
    "value": "charAt",
    "start": 2047,
    "end": 2053
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2111,
    "end": 2114
  },
  {
    "type": "Identifier",
    "value": "spreadFunc",
    "start": 2115,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2130,
    "end": 2133
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2133,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Identifier",
    "value": "spreadFunc",
    "start": 2151,
    "end": 2161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2231,
    "end": 2234
  },
  {
    "type": "Identifier",
    "value": "setterOnly",
    "start": 2235,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2250,
    "end": 2253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 2255,
    "end": 2258
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Identifier",
    "value": "bad",
    "start": 2262,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2267,
    "end": 2273
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Identifier",
    "value": "setterOnly",
    "start": 2284,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 2299,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2387,
    "end": 2392
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2401,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2414,
    "end": 2417
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2425,
    "end": 2428
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2433,
    "end": 2436
  },
  {
    "type": "Identifier",
    "value": "spreadC",
    "start": 2437,
    "end": 2444
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2449,
    "end": 2452
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Identifier",
    "value": "spreadC",
    "start": 2456,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2464,
    "end": 2465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2465,
    "end": 2466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2466,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2522,
    "end": 2525
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2526,
    "end": 2529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2531,
    "end": 2537
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2538,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2540,
    "end": 2541
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 2545,
    "end": 2548
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2549,
    "end": 2550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2552,
    "end": 2555
  },
  {
    "type": "Identifier",
    "value": "spreadObj",
    "start": 2556,
    "end": 2565
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2568,
    "end": 2569
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2570,
    "end": 2573
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2573,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2578,
    "end": 2579
  },
  {
    "type": "Identifier",
    "value": "spreadObj",
    "start": 2580,
    "end": 2589
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2589,
    "end": 2590
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2590,
    "end": 2591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2591,
    "end": 2592
  }
]
```
